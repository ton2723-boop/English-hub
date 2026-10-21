import { describe, expect, it } from 'vitest'
import { placementForm } from '../data/placement'
import { CEFR_LEVELS } from '../types'
import { placeLevel, scoreTest, shouldStopAfter, type Answers } from './scoring'

function answerBlocks(kind: 'pre' | 'post', correctPerLevel: number[]): Answers {
  const answers: Answers = {}
  placementForm(kind).forEach((block, i) => {
    block.questions.forEach((qn, j) => {
      answers[qn.id] = j < correctPerLevel[i] ? qn.answer : (qn.answer + 1) % qn.options.length
    })
  })
  return answers
}

describe('placement forms', () => {
  for (const kind of ['pre', 'post'] as const) {
    it(`${kind} form has 6 valid questions for every CEFR level`, () => {
      const form = placementForm(kind)
      expect(form.map((b) => b.level)).toEqual([...CEFR_LEVELS])
      for (const b of form) {
        expect(b.questions).toHaveLength(6)
        for (const qn of b.questions) {
          expect(qn.answer).toBeGreaterThanOrEqual(0)
          expect(new Set(qn.options).size).toBe(qn.options.length)
        }
      }
    })
  }

  it('pre and post forms use different questions', () => {
    const pre = placementForm('pre').flatMap((b) => b.questions.map((q) => q.prompt))
    const post = new Set(placementForm('post').flatMap((b) => b.questions.map((q) => q.prompt)))
    expect(pre.filter((p) => post.has(p))).toEqual([])
  })

  it('correct answers are not always in the same position', () => {
    const positions = new Set(placementForm('pre').flatMap((b) => b.questions.map((q) => q.answer)))
    expect(positions.size).toBeGreaterThan(2)
  })
})

describe('scoring', () => {
  it('places at the highest consecutively passed level', () => {
    const r = scoreTest('pre', placementForm('pre'), answerBlocks('pre', [6, 5, 4, 2, 6, 6]))
    expect(r.level).toBe('B1')
    expect(r.score).toBe(29)
    expect(r.maxScore).toBe(36)
  })

  it('returns Pre-A1 when A1 is not passed', () => {
    expect(placeLevel([{ level: 'A1', correct: 3, total: 6, answered: 6 }])).toBe('Pre-A1')
  })

  it('reaches C2 with a perfect score', () => {
    const r = scoreTest('post', placementForm('post'), answerBlocks('post', [6, 6, 6, 6, 6, 6]))
    expect(r.level).toBe('C2')
    expect(r.bySkill.listening).toEqual({ correct: 6, total: 6 })
  })

  it('stops early when a block is clearly failed', () => {
    const form = placementForm('pre')
    expect(shouldStopAfter(form[0], answerBlocks('pre', [2]))).toBe(true)
    expect(shouldStopAfter(form[0], answerBlocks('pre', [3]))).toBe(false)
  })

  it('only counts seen questions in the skill breakdown', () => {
    const form = placementForm('pre')
    const answers: Answers = {}
    for (const qn of form[0].questions) answers[qn.id] = qn.answer
    const r = scoreTest('pre', form, answers)
    const seen = Object.values(r.bySkill).reduce((n, s) => n + s.total, 0)
    expect(seen).toBe(6)
  })
})
