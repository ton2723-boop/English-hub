import type { Bilingual, Question, Skill } from '../types'

/** Small deterministic hash so option order is stable between visits. */
function hash(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function seededShuffle<T>(items: T[], seed: string): T[] {
  const out = [...items]
  let x = hash(seed) || 1
  for (let i = out.length - 1; i > 0; i--) {
    // xorshift32
    x ^= x << 13
    x ^= x >>> 17
    x ^= x << 5
    const j = (x >>> 0) % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

interface QuestionInput {
  passage?: string
  audio?: string
  explain?: Bilingual
}

/**
 * Builds a question. Authors list the correct option FIRST; the options are
 * then shuffled deterministically (seeded by id) so answers aren't always "A".
 */
export function q(
  id: string,
  skill: Skill,
  prompt: string,
  options: [string, ...string[]],
  extra: QuestionInput = {},
): Question {
  const correct = options[0]
  const shuffled = seededShuffle(options, id)
  return { id, skill, prompt, options: shuffled, answer: shuffled.indexOf(correct), ...extra }
}
