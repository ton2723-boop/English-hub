import type { LevelBlock, LevelScore, PlacementLevel, Skill, TestKind, TestResult } from '../types'

/** Correct answers (out of a 6-question block) needed to be placed at that level. */
export const PASS_MARK = 4
/** Below this, the learner is clearly beyond their level and the test ends early. */
export const STOP_MARK = 3

const SKILLS: Skill[] = ['grammar', 'vocabulary', 'reading', 'listening']

/** answers[questionId] = chosen option index. */
export type Answers = Record<string, number>

export function blockCorrect(block: LevelBlock, answers: Answers): number {
  return block.questions.filter((qn) => answers[qn.id] === qn.answer).length
}

/** Whether the test should stop after finishing this block. */
export function shouldStopAfter(block: LevelBlock, answers: Answers): boolean {
  return blockCorrect(block, answers) < STOP_MARK
}

/**
 * The placed level is the highest level such that it and every level below it
 * were passed. Blocks not reached (because the test stopped early) count as 0.
 */
export function placeLevel(byLevel: LevelScore[]): PlacementLevel {
  let level: PlacementLevel = 'Pre-A1'
  for (const s of byLevel) {
    if (s.correct < PASS_MARK) break
    level = s.level
  }
  return level
}

export function scoreTest(kind: TestKind, form: LevelBlock[], answers: Answers, date = new Date()): TestResult {
  const byLevel = form.map((b) => ({
    level: b.level,
    correct: blockCorrect(b, answers),
    total: b.questions.length,
    answered: b.questions.filter((qn) => qn.id in answers).length,
  }))

  const bySkill = Object.fromEntries(SKILLS.map((s) => [s, { correct: 0, total: 0 }])) as TestResult['bySkill']
  for (const b of form) {
    for (const qn of b.questions) {
      // Only count questions the learner actually saw.
      if (!(qn.id in answers)) continue
      bySkill[qn.skill].total++
      if (answers[qn.id] === qn.answer) bySkill[qn.skill].correct++
    }
  }

  return {
    kind,
    date: date.toISOString(),
    level: placeLevel(byLevel),
    score: byLevel.reduce((n, s) => n + s.correct, 0),
    maxScore: byLevel.reduce((n, s) => n + s.total, 0),
    byLevel,
    bySkill,
  }
}
