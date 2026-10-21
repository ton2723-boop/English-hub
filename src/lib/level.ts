import type { CefrLevel, PlacementLevel, TestKind, TestResult } from '../types'

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
