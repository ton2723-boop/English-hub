import type { TestKind, TestResult } from '../types'

/** The part of a learner's progress that is synced to the server. */
export interface SyncedProgress {
  tests: Partial<Record<TestKind, TestResult>>
  practice: Record<string, number>
  cards: Record<string, number>
}

const MASTERED_BOX = 3

/**
 * Combines two copies of progress (e.g. this device and the server).
 * Must match mergeProgress_ in apps-script/Code.gs — tests/parity.test.ts checks both.
 * tests: newer result wins; practice: highest score; cards: b (the newer copy) wins.
 */
export function mergeProgress(a: Partial<SyncedProgress> = {}, b: Partial<SyncedProgress> = {}): SyncedProgress {
  const tests: SyncedProgress['tests'] = {}
  for (const kind of ['pre', 'post'] as const) {
    const x = a.tests?.[kind]
    const y = b.tests?.[kind]
    if (x && y) tests[kind] = String(y.date) >= String(x.date) ? y : x
    else if (x || y) tests[kind] = x ?? y
  }
  const practice: Record<string, number> = {}
  for (const src of [a.practice ?? {}, b.practice ?? {}]) {
    for (const [k, raw] of Object.entries(src)) {
      const v = Number(raw)
      if (Number.isFinite(v)) practice[k] = Math.max(practice[k] ?? -Infinity, Math.min(Math.max(v, 0), 1))
    }
  }
  const cards: Record<string, number> = {}
  for (const src of [a.cards ?? {}, b.cards ?? {}]) {
    for (const [k, raw] of Object.entries(src)) {
      const v = Number(raw)
      if (Number.isFinite(v)) cards[k] = Math.min(Math.max(Math.round(v), 0), MASTERED_BOX)
    }
  }
  return { tests, practice, cards }
}

/** True when both copies hold the same data (so nothing needs uploading). */
export function sameProgress(a: SyncedProgress, b: SyncedProgress): boolean {
  return JSON.stringify(normalize(a)) === JSON.stringify(normalize(b))
}

function normalize(p: SyncedProgress) {
  const sortKeys = (o: Record<string, unknown>) => Object.fromEntries(Object.entries(o).sort(([x], [y]) => x.localeCompare(y)))
  return { tests: sortKeys(p.tests as Record<string, unknown>), practice: sortKeys(p.practice), cards: sortKeys(p.cards) }
}
