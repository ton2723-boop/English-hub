/** Local calendar date as YYYY-MM-DD (not UTC, so late-night study counts for today). */
export function localDay(d = new Date()): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}

function prevDay(day: string): string {
  const [y, m, d] = day.split('-').map(Number)
  return localDay(new Date(y, m - 1, d - 1))
}

/**
 * Consecutive study days ending today — or yesterday, so the streak survives
 * until the learner has had a chance to study today.
 */
export function currentStreak(days: string[], today = localDay()): number {
  const set = new Set(days)
  let day = set.has(today) ? today : prevDay(today)
  let n = 0
  while (set.has(day)) {
    n++
    day = prevDay(day)
  }
  return n
}

/** Longest run of consecutive study days ever. */
export function longestStreak(days: string[]): number {
  let best = 0
  let run = 0
  let last = ''
  for (const d of [...new Set(days)].sort()) {
    run = last && prevDay(d) === last ? run + 1 : 1
    best = Math.max(best, run)
    last = d
  }
  return best
}
