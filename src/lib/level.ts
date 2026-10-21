import { unitsForLevel } from '../data/courses'
import type { CefrLevel, PlacementLevel, TestKind, TestResult, Unit, UnitTheme } from '../types'

/** Latest known level: the post-test result if taken, otherwise the pre-test. */
export function currentLevel(tests: Partial<Record<TestKind, TestResult>>): PlacementLevel | undefined {
  return (tests.post ?? tests.pre)?.level
}

/** The course level to study next for a placement result. */
export function studyLevel(level: PlacementLevel): CefrLevel {
  const order: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
  if (level === 'Pre-A1') return 'A1'
  // Placed at a level = can do it; study the next one up (C2 stays C2).
  const i = order.indexOf(level)
  return order[Math.min(i + 1, order.length - 1)]
}

/** Practice score needed on every unit of the study level to unlock the post-test. */
export const UNIT_PASS = 0.6

export interface PostTestGate {
  unlocked: boolean
  /** Level whose units must be passed; undefined until the pre-test is taken. */
  level?: CefrLevel
  /** The learner has not chosen a category yet. */
  needsFocus: boolean
  units: { unit: Unit; best?: number; passed: boolean }[]
}

/**
 * The post-test opens once the core grammar units plus the units of the
 * learner's chosen category, at the pre-test's study level, all score ≥ UNIT_PASS.
 */
export function postTestGate(
  tests: Partial<Record<TestKind, TestResult>>,
  practice: Record<string, number>,
  focus: UnitTheme | undefined,
): PostTestGate {
  if (!tests.pre) return { unlocked: false, needsFocus: !focus, units: [] }
  const level = studyLevel(tests.pre.level)
  if (!focus) return { unlocked: false, needsFocus: true, level, units: [] }
  const required = unitsForLevel(level).filter((u) => !u.theme || u.theme === focus)
  const units = required.map((unit) => {
    const best = practice[unit.id]
    return { unit, best, passed: (best ?? 0) >= UNIT_PASS }
  })
  return { unlocked: units.every((u) => u.passed), needsFocus: false, level, units }
}
