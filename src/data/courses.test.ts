import { describe, expect, it } from 'vitest'
import { postTestGate } from '../lib/level'
import { CEFR_LEVELS, type TestResult } from '../types'
import { UNITS, unitsForLevel } from './courses'
import { EXAM_SECTIONS } from './exams'

describe('course data', () => {
  it('has 5 units per level, 3 of them workplace units', () => {
    for (const level of CEFR_LEVELS) {
      const units = unitsForLevel(level)
      expect(units).toHaveLength(5)
      expect(units.filter((u) => u.theme === 'work')).toHaveLength(3)
    }
  })

  it('uses unique unit and question ids with valid answers', () => {
    const ids = new Set<string>()
    const all = [...UNITS.flatMap((u) => [u.id, ...u.practice.map((q) => q.id)]), ...EXAM_SECTIONS.flatMap((s) => [s.id, ...s.practice.map((q) => q.id)])]
    for (const id of all) {
      expect(ids.has(id), id).toBe(false)
      ids.add(id)
    }
    for (const qn of [...UNITS, ...EXAM_SECTIONS].flatMap((x) => x.practice)) {
      expect(qn.answer, qn.id).toBeGreaterThanOrEqual(0)
      expect(new Set(qn.options).size, qn.id).toBe(qn.options.length)
    }
  })
})

describe('post-test gate', () => {
  const pre = { kind: 'pre', level: 'A2' } as TestResult

  it('is locked until the pre-test is taken', () => {
    expect(postTestGate({}, {}).unlocked).toBe(false)
  })

  it('requires every unit of the study level at 60% or more', () => {
    const b1 = unitsForLevel('B1').map((u) => u.id)
    const almost = Object.fromEntries(b1.map((id, i) => [id, i === 0 ? 0.5 : 1]))
    expect(postTestGate({ pre }, almost)).toMatchObject({ unlocked: false, level: 'B1' })
    const all = Object.fromEntries(b1.map((id) => [id, 0.6]))
    expect(postTestGate({ pre }, all).unlocked).toBe(true)
  })
})
