import { describe, expect, it } from 'vitest'
import { ALL_CARDS, nextCard } from './flashcards'

describe('flashcards', () => {
  it('collects unique cards from every unit', () => {
    expect(ALL_CARDS.length).toBe(64 * 5)
    expect(new Set(ALL_CARDS.map((c) => c.key)).size).toBe(ALL_CARDS.length)
  })

  it('shows missed and new cards before ones already known', () => {
    const deck = ALL_CARDS.slice(0, 3)
    const boxes = { [deck[0].key]: 2, [deck[1].key]: 0 }
    expect(nextCard(deck, boxes)?.key).toBe(deck[1].key)
  })

  it('does not repeat the card just shown when others are due', () => {
    const deck = ALL_CARDS.slice(0, 2)
    expect(nextCard(deck, {}, deck[0].key)?.key).toBe(deck[1].key)
  })

  it('returns nothing when every card is mastered', () => {
    const deck = ALL_CARDS.slice(0, 2)
    expect(nextCard(deck, { [deck[0].key]: 3, [deck[1].key]: 3 })).toBeUndefined()
  })
})
