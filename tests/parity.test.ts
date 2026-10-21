import { describe, expect, it } from 'vitest'
import { mergeProgress } from '../src/lib/merge'
import { loadBackend } from './gas'

const { gas } = loadBackend()

/** Small deterministic RNG so failures are reproducible. */
function rng(seed: number) {
  return () => {
    seed = (seed * 1103515245 + 12345) % 2 ** 31
    return seed / 2 ** 31
  }
}

function randomProgress(r: () => number) {
  const pick = <T,>(xs: T[]) => xs[Math.floor(r() * xs.length)]
  const keys = ['a1-1', 'a1-2', 'b2-3', 'ielts-reading', 'toeic-part5']
  const obj = (gen: () => unknown) => Object.fromEntries(keys.filter(() => r() < 0.5).map((k) => [k, gen()]))
  const test = (kind: string) =>
    r() < 0.6 ? { kind, date: `2026-10-${String(1 + Math.floor(r() * 28)).padStart(2, '0')}T00:00:00.000Z`, level: pick(['A1', 'B2']), score: Math.floor(r() * 36), maxScore: 36 } : undefined
  return {
    tests: { pre: test('pre'), post: test('post') },
    practice: obj(() => pick([0, 0.25, 0.5, 0.75, 1, 1.4, -0.2, 'x'])),
    cards: obj(() => pick([0, 1, 2, 3, 7, -1, 2.6])),
  }
}

describe('mergeProgress parity (src/lib/merge.ts ↔ Code.gs)', () => {
  it('gives identical results on 2,000 random pairs', () => {
    const r = rng(7)
    for (let i = 0; i < 2000; i++) {
      const a = JSON.parse(JSON.stringify(randomProgress(r)))
      const b = JSON.parse(JSON.stringify(randomProgress(r)))
      const web = mergeProgress(a, b)
      const server = JSON.parse(JSON.stringify(gas.mergeProgress_(a, b)))
      expect(server).toEqual(JSON.parse(JSON.stringify(web)))
    }
  })

  it('keeps the newer test, the best score and the latest card box', () => {
    const older = { kind: 'pre', date: '2026-10-01', level: 'A1', score: 5, maxScore: 36 }
    const newer = { ...older, date: '2026-10-05', level: 'A2' }
    const m = mergeProgress(
      { tests: { pre: newer as never }, practice: { u: 0.9 }, cards: { w: 3 } },
      { tests: { pre: older as never }, practice: { u: 0.5 }, cards: { w: 1 } },
    )
    expect(m.tests.pre?.level).toBe('A2')
    expect(m.practice.u).toBe(0.9)
    expect(m.cards.w).toBe(1)
  })
})
