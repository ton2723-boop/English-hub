import { describe, expect, it } from 'vitest'
import { postTestGate } from '../lib/level'
import { CEFR_LEVELS, type TestResult } from '../types'
import { UNITS, unitsForLevel } from './courses'
import { EXAM_SECTIONS } from './exams'

describe('course data', () => {
  it('has 7 units per level: 2 core, 3 workplace, 1 travel, 1 everyday life', () => {
    for (const level of CEFR_LEVELS) {
      const units = unitsForLevel(level)
      expect(units).toHaveLength(7)
      expect(units.filter((u) => !u.theme)).toHaveLength(2)
      expect(units.filter((u) => u.theme === 'work')).toHaveLength(3)
      expect(units.filter((u) => u.theme === 'travel')).toHaveLength(1)
      expect(units.filter((u) => u.theme === 'life')).toHaveLength(1)
    }
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
