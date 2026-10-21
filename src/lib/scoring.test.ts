import { describe, expect, it } from 'vitest'
import { drawForm, POOLS } from '../data/placement'
import { CEFR_LEVELS, type LevelBlock } from '../types'
import { placeLevel, scoreTest, shouldStopAfter, type Answers } from './scoring'

/** Deterministic RNG so tests are repeatable. */
function rng(seed = 42) {
  let x = seed
  return () => {
    x = (x * 1103515245 + 12345) % 2 ** 31
    return x / 2 ** 31
  }
}

function answerBlocks(form: LevelBlock[], correctPerLevel: number[]): Answers {
  const answers: Answers = {}
  form.forEach((block, i) => {
    block.questions.forEach((qn, j) => {
      answers[qn.id] = j < (correctPerLevel[i] ?? 0) ? qn.answer : (qn.answer + 1) % qn.options.length
    })
  })
  return answers
}

describe('question bank', () => {
  it('has 18 valid, unique questions per level', () => {
    const ids = new Set<string>()
    const prompts = new Set<string>()
    for (const level of CEFR_LEVELS) {
      const pool = POOLS[level]
      expect(pool).toHaveLength(18)
      expect(pool.filter((q) => q.skill === 'reading')).toHaveLength(3)
      expect(pool.filter((q) => q.skill === 'listening')).toHaveLength(3)
      for (const qn of pool) {
        expect(ids.has(qn.id)).toBe(false)
        expect(prompts.has(qn.prompt + qn.passage + qn.audio)).toBe(false)
        ids.add(qn.id)
        prompts.add(qn.prompt + qn.passage + qn.audio)
        expect(qn.answer).toBeGreaterThanOrEqual(0)
        expect(new Set(qn.options).size).toBe(qn.options.length)
        if (qn.skill === 'listening') expect(qn.audio).toBeTruthy()
        if (qn.skill === 'reading') expect(qn.passage).toBeTruthy()
      }
    }
  })

  it('correct answers are not always in the same position', () => {
    const positions = new Set(POOLS.B1.map((q) => q.answer))
    expect(positions.size).toBeGreaterThan(2)
  })
})

describe('drawForm', () => {
  it('draws 6 questions per level: 4 language, 1 reading, 1 listening', () => {
    const form = drawForm([], rng())
    expect(form.map((b) => b.level)).toEqual([...CEFR_LEVELS])
    for (const b of form) {
      expect(b.questions).toHaveLength(6)
      expect(b.questions.filter((q) => q.skill === 'reading')).toHaveLength(1)
      expect(b.questions.filter((q) => q.skill === 'listening')).toHaveLength(1)
    }
  })

  it('does not repeat questions from an earlier attempt', () => {
    const first = drawForm([], rng(1))
    const seen = first.flatMap((b) => b.questions.map((q) => q.id))
    const second = drawForm(seen, rng(2))
    const overlap = second.flatMap((b) => b.questions).filter((q) => seen.includes(q.id))
    expect(overlap).toEqual([])
  })

  it('reuses seen questions only when the pool runs out', () => {
    const seen = CEFR_LEVELS.flatMap((l) => POOLS[l].map((q) => q.id))
    const form = drawForm(seen, rng())
    expect(form.every((b) => b.questions.length === 6)).toBe(true)
  })
})

describe('scoring', () => {
  const form = drawForm([], rng())

  it('places at the highest consecutively passed level', () => {
    const r = scoreTest('pre', form, answerBlocks(form, [6, 5, 4, 2, 6, 6]))
    expect(r.level).toBe('B1')
    expect(r.score).toBe(29)
    expect(r.maxScore).toBe(36)
    expect(r.questionIds).toHaveLength(36)
  })

  it('returns Pre-A1 when A1 is not passed', () => {
    expect(placeLevel([{ level: 'A1', correct: 3, total: 6, answered: 6 }])).toBe('Pre-A1')
  })

  it('reaches C2 with a perfect score', () => {
    const r = scoreTest('post', form, answerBlocks(form, [6, 6, 6, 6, 6, 6]))
    expect(r.level).toBe('C2')
    expect(r.bySkill.listening).toEqual({ correct: 6, total: 6 })
  })

  it('stops early when a block is clearly failed', () => {
    expect(shouldStopAfter(form[0], answerBlocks(form, [2]))).toBe(true)
    expect(shouldStopAfter(form[0], answerBlocks(form, [3]))).toBe(false)
  })

  it('only counts seen questions', () => {
    const answers: Answers = {}
    for (const qn of form[0].questions) answers[qn.id] = qn.answer
    const r = scoreTest('pre', form, answers)
    expect(Object.values(r.bySkill).reduce((n, s) => n + s.total, 0)).toBe(6)
    expect(r.byLevel[1].answered).toBe(0)
  })
})
