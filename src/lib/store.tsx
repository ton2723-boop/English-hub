import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Lang, TestKind, TestResult } from '../types'

export interface Progress {
  lang: Lang
  tests: Partial<Record<TestKind, TestResult>>
  /** Best practice score per unit / exam section, as a fraction 0–1. */
  practice: Record<string, number>
}

const KEY = 'english-hub:v1'
const EMPTY: Progress = { lang: 'th', tests: {}, practice: {} }

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return EMPTY
    return { ...EMPTY, ...JSON.parse(raw) }
  } catch {
    return EMPTY
  }
}

interface Store extends Progress {
  setLang: (lang: Lang) => void
  saveTest: (result: TestResult) => void
  savePractice: (id: string, fraction: number) => void
  reset: () => void
}

const StoreContext = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Progress>(load)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress))
    } catch {
      // Storage may be unavailable (private mode); progress then lasts for this visit only.
    }
    document.documentElement.lang = progress.lang
  }, [progress])

  const setLang = useCallback((lang: Lang) => setProgress((p) => ({ ...p, lang })), [])
  const saveTest = useCallback(
    (result: TestResult) => setProgress((p) => ({ ...p, tests: { ...p.tests, [result.kind]: result } })),
    [],
  )
  const savePractice = useCallback(
    (id: string, fraction: number) =>
      setProgress((p) => ({ ...p, practice: { ...p.practice, [id]: Math.max(fraction, p.practice[id] ?? 0) } })),
    [],
  )
  const reset = useCallback(() => setProgress((p) => ({ ...EMPTY, lang: p.lang })), [])

  const value = useMemo(
    () => ({ ...progress, setLang, saveTest, savePractice, reset }),
    [progress, setLang, saveTest, savePractice, reset],
  )
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export function useStore(): Store {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used inside StoreProvider')
  return ctx
}
