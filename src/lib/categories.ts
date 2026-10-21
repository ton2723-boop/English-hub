import { UNITS } from '../data/courses'
import type { Bilingual, Category, CefrLevel, Unit, UnitTheme } from '../types'

export interface CategoryInfo {
  id: Category
  icon: string
  title: Bilingual
  blurb: Bilingual
}

/** Display order on the courses page. */
export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'work',
    icon: '💼',
    title: { th: 'วัยทำงาน', en: 'Working Life' },
    blurb: { th: 'อีเมล ประชุม นำเสนองาน สัมภาษณ์งาน เจรจาต่อรอง', en: 'Emails, meetings, presentations, interviews, negotiating' },
  },
  {
    id: 'kids',
    icon: '🧒',
    title: { th: 'วัยเด็ก', en: 'Kids & Family' },
    blurb: { th: 'บทเรียนสนุก ๆ สำหรับเด็ก และประโยคสำหรับพ่อแม่ใช้กับลูก', en: 'Fun lessons for children, plus English for parents' },
  },
  {
    id: 'travel',
    icon: '✈️',
    title: { th: 'ท่องเที่ยว', en: 'Travel' },
    blurb: { th: 'สนามบิน โรงแรม ถามทาง จองทัวร์ เหตุฉุกเฉิน', en: 'Airports, hotels, directions, tours, emergencies' },
  },
  {
    id: 'life',
    icon: '🏠',
    title: { th: 'ชีวิตประจำวัน', en: 'Everyday Life' },
    blurb: { th: 'ครอบครัว สุขภาพ งานอดิเรก การเงิน เพื่อนบ้าน', en: 'Family, health, hobbies, money, neighbours' },
  },
  {
    id: 'core',
    icon: '📘',
    title: { th: 'ไวยากรณ์หลัก', en: 'Core Grammar' },
    blurb: { th: 'พื้นฐานไวยากรณ์สำคัญของแต่ละระดับ (นับรวมในการปลดล็อกเสมอ)', en: 'The key grammar of each level (always counts towards unlocking)' },
  },
]

export const THEME_CATEGORIES: UnitTheme[] = ['work', 'kids', 'travel', 'life']

export function categoryInfo(id: Category): CategoryInfo {
  return CATEGORIES.find((c) => c.id === id)!
}

export function isCategory(id: string | undefined): id is Category {
  return CATEGORIES.some((c) => c.id === id)
}

export function unitCategory(u: Unit): Category {
  return u.theme ?? 'core'
}

export function unitsInCategory(cat: Category, level?: CefrLevel): Unit[] {
  return UNITS.filter((u) => unitCategory(u) === cat && (!level || u.level === level))
}

/** Share of a category's units the learner has passed (0–1). */
export function categoryProgress(cat: Category, practice: Record<string, number>, pass: number): { passed: number; total: number } {
  const units = unitsInCategory(cat)
  return { passed: units.filter((u) => (practice[u.id] ?? 0) >= pass).length, total: units.length }
}

/**
 * The next unit to study: the first unpassed core unit, then the first
 * unpassed unit of the chosen category, at the learner's study level.
 */
export function nextUnit(level: CefrLevel, focus: UnitTheme | undefined, practice: Record<string, number>, pass: number): Unit | undefined {
  const atLevel = UNITS.filter((u) => u.level === level)
  const order = [...atLevel.filter((u) => !u.theme), ...atLevel.filter((u) => focus && u.theme === focus), ...atLevel]
  return order.find((u) => (practice[u.id] ?? 0) < pass)
}
