import { UNITS } from '../data/courses'
import type { Bilingual, CefrLevel } from '../types'
import { unitCategory } from './categories'
import type { Progress } from './store'
import { MASTERED_BOX } from './store'
import { currentStreak, longestStreak } from './streak'
import { UNIT_PASS } from './level'

export interface Badge {
  id: string
  icon: string
  title: Bilingual
  earned: boolean
}

const ORDER: (CefrLevel | 'Pre-A1')[] = ['Pre-A1', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']

/** Achievement badges, all derived from progress (nothing extra is stored). */
export function badges(p: Progress): Badge[] {
  const passed = UNITS.filter((u) => (p.practice[u.id] ?? 0) >= UNIT_PASS)
  const words = Object.values(p.cards).filter((b) => b >= MASTERED_BOX).length
  const streak = currentStreak(p.days)
  const longest = longestStreak(p.days)
  const cats = new Set(passed.map(unitCategory))
  const levelUp = p.tests.pre && p.tests.post && ORDER.indexOf(p.tests.post.level) > ORDER.indexOf(p.tests.pre.level)
  return [
    { id: 'first-test', icon: '🎯', title: { th: 'วัดระดับครั้งแรก', en: 'First placement test' }, earned: Boolean(p.tests.pre) },
    { id: 'first-unit', icon: '🌱', title: { th: 'ผ่านบทแรก', en: 'First unit passed' }, earned: passed.length >= 1 },
    { id: 'units-10', icon: '📚', title: { th: 'ผ่าน 10 บท', en: '10 units passed' }, earned: passed.length >= 10 },
    { id: 'words-50', icon: '🧠', title: { th: 'จำได้ 50 คำ', en: '50 words mastered' }, earned: words >= 50 },
    { id: 'streak-3', icon: '🔥', title: { th: 'เรียนต่อเนื่อง 3 วัน', en: '3-day streak' }, earned: Math.max(streak, longest) >= 3 },
    { id: 'streak-7', icon: '🏅', title: { th: 'เรียนต่อเนื่อง 7 วัน', en: '7-day streak' }, earned: Math.max(streak, longest) >= 7 },
    { id: 'explorer', icon: '🧭', title: { th: 'นักสำรวจ 3 หมวด', en: 'Explorer: 3 categories' }, earned: cats.size >= 3 },
    { id: 'level-up', icon: '🚀', title: { th: 'เลื่อนระดับ', en: 'Level up' }, earned: Boolean(levelUp) },
  ]
}
