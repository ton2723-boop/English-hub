import type { Bilingual, PlacementLevel } from '../types'

export interface LevelInfo {
  name: Bilingual
  description: Bilingual
  /** Approximate equivalent exam scores (Cambridge / ETS published alignments). */
  ielts: string
  toeic: string
}

export const LEVEL_INFO: Record<PlacementLevel, LevelInfo> = {
  'Pre-A1': {
    name: { th: 'เริ่มต้น', en: 'Starter' },
    description: {
      th: 'เพิ่งเริ่มเรียน รู้คำศัพท์พื้นฐานบางคำ',
      en: 'Just starting out; knows a few basic words.',
    },
    ielts: '< 2.0',
    toeic: '< 120',
  },
  A1: {
    name: { th: 'ผู้เริ่มต้น', en: 'Beginner' },
    description: {
      th: 'เข้าใจและใช้ประโยคง่าย ๆ ในชีวิตประจำวัน แนะนำตัวเองได้',
      en: 'Can understand and use familiar everyday expressions and introduce yourself.',
    },
    ielts: '2.0–2.5',
    toeic: '120–224',
  },
  A2: {
    name: { th: 'พื้นฐาน', en: 'Elementary' },
    description: {
      th: 'สื่อสารเรื่องง่าย ๆ ที่คุ้นเคย เช่น ครอบครัว การซื้อของ งาน',
      en: 'Can communicate in simple, routine tasks about familiar topics.',
    },
    ielts: '3.0–3.5',
    toeic: '225–549',
  },
  B1: {
    name: { th: 'ระดับกลาง', en: 'Intermediate' },
    description: {
      th: 'จัดการสถานการณ์ส่วนใหญ่ระหว่างเดินทาง เล่าประสบการณ์และให้เหตุผลสั้น ๆ ได้',
      en: 'Can deal with most travel situations and describe experiences and reasons.',
    },
    ielts: '4.0–5.0',
    toeic: '550–784',
  },
  B2: {
    name: { th: 'กลางค่อนสูง', en: 'Upper-intermediate' },
    description: {
      th: 'เข้าใจเนื้อหาซับซ้อน สนทนากับเจ้าของภาษาได้อย่างคล่องแคล่ว',
      en: 'Can understand complex texts and interact fluently with native speakers.',
    },
    ielts: '5.5–6.5',
    toeic: '785–944',
  },
  C1: {
    name: { th: 'ระดับสูง', en: 'Advanced' },
    description: {
      th: 'ใช้ภาษาได้อย่างยืดหยุ่นในการทำงานและการศึกษา เข้าใจความหมายแฝง',
      en: 'Can use language flexibly for work and study and recognise implicit meaning.',
    },
    ielts: '7.0–8.0',
    toeic: '945–990',
  },
  C2: {
    name: { th: 'เชี่ยวชาญ', en: 'Proficient' },
    description: {
      th: 'เข้าใจแทบทุกอย่างที่อ่านหรือได้ยิน แสดงความคิดได้อย่างแม่นยำและเป็นธรรมชาติ',
      en: 'Can understand virtually everything and express yourself precisely and naturally.',
    },
    ielts: '8.5–9.0',
    toeic: '990 (max)',
  },
}
