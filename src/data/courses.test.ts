import { describe, expect, it } from 'vitest'
import { postTestGate } from '../lib/level'
import { CEFR_LEVELS, type TestResult } from '../types'
import { UNITS, unitsForLevel } from './courses'
import { EXAM_SECTIONS } from './exams'

describe('course data', () => {
  it('covers every level in every adult category', () => {
    for (const level of CEFR_LEVELS) {
      const units = unitsForLevel(level)
      expect(units.filter((u) => !u.theme)).toHaveLength(2)
      expect(units.filter((u) => u.theme === 'work')).toHaveLength(3)
      expect(units.filter((u) => u.theme === 'travel')).toHaveLength(2)
      expect(units.filter((u) => u.theme === 'life')).toHaveLength(2)
    }
    expect(UNITS).toHaveLength(64)
  })

  it('has kids units for children (A1–A2) and for parents (A1–B2)', () => {
    const kids = UNITS.filter((u) => u.theme === 'kids')
    expect(kids.filter((u) => u.audience === 'child').map((u) => u.level).sort()).toEqual(['A1', 'A1', 'A1', 'A2', 'A2', 'A2'])
    expect(kids.filter((u) => u.audience === 'parent').map((u) => u.level)).toEqual(['A1', 'A2', 'B1', 'B2'])
    expect(UNITS.filter((u) => u.audience && u.theme !== 'kids')).toEqual([])
  })

  it('gives every unit a reading and 8 practice questions with reading and listening', () => {
    for (const u of UNITS) {
      expect(u.reading, u.id).toBeTruthy()
      expect(u.practice, u.id).toHaveLength(8)
      expect(u.practice.some((q) => q.skill === 'reading'), u.id).toBe(true)
      expect(u.practice.some((q) => q.skill === 'listening' && q.audio), u.id).toBe(true)
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

describe('exam sections', () => {
  it('lists 13 sections, each in the display order', () => {
    expect(EXAM_SECTIONS).toHaveLength(13)
    expect(EXAM_SECTIONS.map((s) => s.exam).lastIndexOf('IELTS')).toBeLessThan(EXAM_SECTIONS.map((s) => s.exam).indexOf('TOEIC'))
  })
})

describe('post-test gate', () => {
  const pre = { kind: 'pre', level: 'A2' } as TestResult

  it('is locked until the pre-test is taken and a category is chosen', () => {
    expect(postTestGate({}, {}, 'work').unlocked).toBe(false)
    expect(postTestGate({ pre }, {}, undefined)).toMatchObject({ unlocked: false, needsFocus: true, level: 'B1' })
  })

  it('requires the core units plus the chosen category at the study level, at 60% or more', () => {
    const gate = postTestGate({ pre }, {}, 'travel')
    const ids = gate.units.map((u) => u.unit.id)
    expect(ids).toEqual(unitsForLevel('B1').filter((u) => !u.theme || u.theme === 'travel').map((u) => u.id))
    expect(ids).toHaveLength(4)
    const almost = Object.fromEntries(ids.map((id, i) => [id, i === 0 ? 0.5 : 1]))
    expect(postTestGate({ pre }, almost, 'travel').unlocked).toBe(false)
    const all = Object.fromEntries(ids.map((id) => [id, 0.6]))
    expect(postTestGate({ pre }, all, 'travel').unlocked).toBe(true)
    // Units from other categories do not count.
    expect(postTestGate({ pre }, all, 'work').unlocked).toBe(false)
  })
})
