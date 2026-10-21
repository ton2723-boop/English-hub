import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import type { TestResult, UnitTheme } from '../types'
import { ApiError, callApi } from './api'
import { useAuth } from './auth'
import { mergeProgress, sameProgress, type SyncedProgress } from './merge'
import { localDay } from './streak'

export type Progress = SyncedProgress

/** idle = nothing to save yet; local = demo mode (this browser only). */
export type SyncStatus = 'loading' | 'idle' | 'saving' | 'saved' | 'error' | 'local'

const LEGACY_KEY = 'english-hub:v1'
const EMPTY: Progress = { tests: {}, practice: {}, cards: {}, days: [] }
/** Wait this long after the last change before uploading. */
const SAVE_DELAY_MS = 1500

export const MASTERED_BOX = 3

function keyFor(userId: string) {
  return `${LEGACY_KEY}:${userId}`
}

function readLocal(key: string): Progress {
  try {
    const raw = localStorage.getItem(key)
    return raw ? mergeProgress({}, JSON.parse(raw)) : EMPTY
  } catch {
    return EMPTY
  }
}

function writeLocal(key: string, p: Progress) {
  try {
    localStorage.setItem(key, JSON.stringify(p))
  } catch {
    // Storage may be unavailable (private mode); the server copy still works.
  }
}

/**
 * Progress from before accounts existed lives under the old key. It is folded
 * into the first account that signs in on this device (and removed once saved).
 */
function readLegacy(): Progress {
  return readLocal(LEGACY_KEY)
}

function dropLegacy() {
  try {
    localStorage.removeItem(LEGACY_KEY)
  } catch {
    // ignore
  }
}

interface Store extends Progress {
  sync: SyncStatus
  syncError: string
  saveTest: (result: TestResult) => void
  savePractice: (id: string, fraction: number) => void
  /** Moves a flashcard up a box when known, back to box 0 when not. */
  rateCard: (key: string, known: boolean) => void
  setFocus: (focus: UnitTheme) => void
  reset: () => void
}

/** Records today as a study day (for the streak). */
function withToday(p: Progress): Progress {
  const today = localDay()
  return p.days.includes(today) ? p : { ...p, days: [...p.days, today] }
}

const StoreContext = createContext<Store | null>(null)

/** Mount with key={userId} so switching accounts starts fresh. */
export function StoreProvider({ children }: { children: ReactNode }) {
  const { session, logout } = useAuth()
  const userId = session?.user.userId ?? 'anon'
  const demo = Boolean(session?.demo)
  const token = session?.token ?? ''
  const localKey = keyFor(userId)

  const [progress, setProgress] = useState<Progress>(() => mergeProgress(readLocal(localKey), readLegacy()))
  const [sync, setSync] = useState<SyncStatus>(demo ? 'local' : 'loading')
  const [syncError, setSyncError] = useState('')
  /** Changes made before the server copy loaded must not be uploaded alone. */
  const hydrated = useRef(demo)
  const replaceNext = useRef(false)
  const lastSaved = useRef<Progress | null>(null)

  const fail = useCallback(
    (e: unknown) => {
      if (e instanceof ApiError && e.authError) return logout(e.message)
      setSync('error')
      setSyncError(e instanceof Error ? e.message : String(e))
    },
    [logout],
  )

  // Load the server copy once and merge it with what this device has.
  useEffect(() => {
    if (demo) return
    let cancelled = false
    callApi<{ progress: Progress }>('getProgress', { token })
      .then(({ progress: server }) => {
        if (cancelled) return
        const serverCopy = mergeProgress({}, server)
        lastSaved.current = serverCopy
        hydrated.current = true
        setProgress((local) => mergeProgress(serverCopy, local))
        setSync('idle')
      })
      .catch((e) => !cancelled && fail(e))
    return () => {
      cancelled = true
    }
  }, [demo, token, fail])

  // Keep a local copy and upload changes shortly after they happen.
  useEffect(() => {
    writeLocal(localKey, progress)
    dropLegacy()
    if (demo || !hydrated.current) return
    if (lastSaved.current && sameProgress(lastSaved.current, progress) && !replaceNext.current) return
    const timer = setTimeout(() => {
      const replace = replaceNext.current
      replaceNext.current = false
      setSync('saving')
      callApi<{ progress: Progress }>('saveProgress', { token, progress, replace })
        .then((r) => {
          lastSaved.current = mergeProgress({}, r.progress)
          setSync('saved')
          setSyncError('')
        })
        .catch(fail)
    }, SAVE_DELAY_MS)
    return () => clearTimeout(timer)
  }, [progress, demo, token, localKey, fail])

  const saveTest = useCallback(
    (result: TestResult) => setProgress((p) => withToday({ ...p, tests: { ...p.tests, [result.kind]: result } })),
    [],
  )
  const savePractice = useCallback(
    (id: string, fraction: number) =>
      setProgress((p) => withToday({ ...p, practice: { ...p.practice, [id]: Math.max(fraction, p.practice[id] ?? 0) } })),
    [],
  )
  const rateCard = useCallback(
    (key: string, known: boolean) =>
      setProgress((p) => {
        const box = known ? Math.min((p.cards[key] ?? 0) + 1, MASTERED_BOX) : 0
        return withToday({ ...p, cards: { ...p.cards, [key]: box } })
      }),
    [],
  )
  const setFocus = useCallback((focus: UnitTheme) => setProgress((p) => ({ ...p, focus })), [])
  const reset = useCallback(() => {
    replaceNext.current = true
    setProgress(EMPTY)
  }, [])

  const value = useMemo(
    () => ({ ...progress, sync, syncError, saveTest, savePractice, rateCard, setFocus, reset }),
    [progress, sync, syncError, saveTest, savePractice, rateCard, setFocus, reset],
  )
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside StoreProvider')
  return ctx
}
