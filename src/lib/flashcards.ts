import { UNITS } from '../data/courses'
import type { Bilingual, CefrLevel, VocabItem } from '../types'
import { MASTERED_BOX } from './store'

export interface Card extends VocabItem {
  key: string
  level: CefrLevel
  unitId: string
  unitTitle: Bilingual
}

/** Every vocabulary item from every unit, in course order. */
export const ALL_CARDS: Card[] = UNITS.flatMap((u) =>
  u.vocab.map((v) => ({ ...v, key: `${u.id}:${v.word}`, level: u.level, unitId: u.id, unitTitle: u.title })),
)

/**
 * Next card to review: the lowest box first (new and missed words), skipping
 * the card just shown when another is available. Undefined when all are mastered.
 */
export function nextCard(deck: Card[], boxes: Record<string, number>, lastKey?: string): Card | undefined {
  const due = deck
    .filter((c) => (boxes[c.key] ?? 0) < MASTERED_BOX)
    .sort((a, b) => (boxes[a.key] ?? 0) - (boxes[b.key] ?? 0))
  return due.find((c) => c.key !== lastKey) ?? due[0]
}
