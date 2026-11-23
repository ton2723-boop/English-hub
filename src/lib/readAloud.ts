import { useSyncExternalStore } from 'react'
import type { Question } from '../types'

/** Learner preferences for "read the question aloud" (stored per browser). */
export interface ReadAloudPrefs {
  /** Read each new question aloud automatically. */
  auto: boolean
  /** Listening practice: hide the question text until the learner reveals it. */
  listenFirst: boolean
  /** Slower speech for beginners. */
  slow: boolean
}

export const DEFAULT_PREFS: ReadAloudPrefs = { auto: false, listenFirst: false, slow: false }
const KEY = 'eh.readAloud'

export const SPEECH_RATE = { normal: 0.9, slow: 0.7 }
export const rateFor = (p: ReadAloudPrefs) => (p.slow ? SPEECH_RATE.slow : SPEECH_RATE.normal)

/** Parses stored prefs, ignoring anything unexpected. */
export function parsePrefs(raw: string | null): ReadAloudPrefs {
  if (!raw) return { ...DEFAULT_PREFS }
  try {
    const v = JSON.parse(raw) as Partial<Record<keyof ReadAloudPrefs, unknown>>
    return {
      auto: v.auto === true,
      listenFirst: v.listenFirst === true,
      slow: v.slow === true,
    }
  } catch {
    return { ...DEFAULT_PREFS }
  }
}

let current: ReadAloudPrefs | null = null
const listeners = new Set<() => void>()

function load(): ReadAloudPrefs {
  if (current) return current
  let raw: string | null = null
  try {
    raw = window.localStorage.getItem(KEY)
  } catch {
    /* storage blocked — use defaults */
  }
  current = parsePrefs(raw)
  return current
}

export function setPrefs(patch: Partial<ReadAloudPrefs>): void {
  current = { ...load(), ...patch }
  try {
    window.localStorage.setItem(KEY, JSON.stringify(current))
  } catch {
    /* not saved, still applies for this visit */
  }
  listeners.forEach((l) => l())
}

export function useReadAloudPrefs(): ReadAloudPrefs {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    load,
    () => DEFAULT_PREFS,
  )
}

const LETTERS = 'ABCDEF'

/** Makes on-screen text sound natural: blanks become "blank", Thai text is dropped. */
export function speakable(text: string): string {
  return text
    .replace(/_{2,}/g, ' blank ')
    .replace(/[\u0E00-\u0E7F]+/g, ' ')
    .replace(/\(\s*\)/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** What "read the question" says: the prompt, then each option with its letter. */
export function questionSpeech(q: Pick<Question, 'prompt' | 'options'>): string {
  const parts = [speakable(q.prompt)]
  q.options.forEach((opt, i) => {
    const s = speakable(opt)
    if (s) parts.push(`${LETTERS[i]}. ${s}.`)
  })
  return parts
    .filter(Boolean)
    .map((p) => (/[.?!:]$/.test(p) ? p : `${p}.`))
    .join(' ')
}
