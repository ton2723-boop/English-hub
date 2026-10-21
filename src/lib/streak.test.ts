import { describe, expect, it } from 'vitest'
import { currentStreak, localDay, longestStreak } from './streak'

describe('streak', () => {
  it('counts consecutive days ending today', () => {
    expect(currentStreak(['2026-10-19', '2026-10-20', '2026-10-21'], '2026-10-21')).toBe(3)
  })

  it('keeps the streak until the end of today', () => {
    expect(currentStreak(['2026-10-19', '2026-10-20'], '2026-10-21')).toBe(2)
  })

  it('breaks after a missed day and handles month boundaries', () => {
    expect(currentStreak(['2026-10-18', '2026-10-21'], '2026-10-21')).toBe(1)
    expect(currentStreak(['2026-09-30', '2026-10-01'], '2026-10-01')).toBe(2)
    expect(currentStreak([], '2026-10-01')).toBe(0)
  })

  it('finds the longest run', () => {
    expect(longestStreak(['2026-10-01', '2026-10-02', '2026-10-03', '2026-10-10', '2026-10-11'])).toBe(3)
    expect(longestStreak([])).toBe(0)
  })

  it('formats local dates', () => {
    expect(localDay(new Date(2026, 0, 5))).toBe('2026-01-05')
  })
})
