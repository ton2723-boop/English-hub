import type { Bilingual, Skill } from '../types'
import { useStore } from './store'

const STRINGS = {
  appName: { th: 'English Hub', en: 'English Hub' },
  navHome: { th: 'หน้าแรก', en: 'Home' },
  navTest: { th: 'ทดสอบวัดระดับ', en: 'Placement test' },
  navCourses: { th: 'บทเรียน', en: 'Courses' },
  navExams: { th: 'เตรียมสอบ', en: 'Exam prep' },
  navVocab: { th: 'คำศัพท์', en: 'Vocabulary' },
  navProgress: { th: 'ความก้าวหน้า', en: 'My progress' },

  heroTitle: { th: 'เรียนภาษาอังกฤษตามมาตรฐานสากล CEFR', en: 'Learn English with the international CEFR standard' },
  heroText: {
    th: 'วัดระดับก่อนเรียน เรียนตามระดับ A1–C2 เตรียมสอบ IELTS / TOEIC แล้ววัดผลหลังเรียนเพื่อดูพัฒนาการของคุณ',
    en: 'Take a placement test, study levels A1–C2, prepare for IELTS / TOEIC, then re-test to see how far you have come.',
  },
  startPreTest: { th: 'เริ่มทดสอบก่อนเรียน', en: 'Start the pre-test' },
  continueLearning: { th: 'เรียนต่อ', en: 'Continue learning' },
  step1: { th: 'ทดสอบก่อนเรียน', en: 'Pre-test' },
  step1Text: { th: 'ประมาณ 15–20 นาที รู้ระดับ CEFR ของคุณ', en: 'About 15–20 minutes to find your CEFR level.' },
  step2: { th: 'เรียนตามระดับ', en: 'Study at your level' },
  step2Text: { th: 'คำศัพท์ ไวยากรณ์ การอ่าน และแบบฝึกหัด', en: 'Vocabulary, grammar, reading and practice.' },
  step3: { th: 'เตรียมสอบ', en: 'Exam prep' },
  step3Text: { th: 'ฝึกข้อสอบแนว IELTS และ TOEIC', en: 'IELTS and TOEIC style practice.' },
  step4: { th: 'ทดสอบหลังเรียน', en: 'Post-test' },
  step4Text: { th: 'เปรียบเทียบผลก่อน–หลังเรียน', en: 'Compare your results before and after.' },

  preTest: { th: 'ทดสอบก่อนเรียน', en: 'Pre-test' },
  postTest: { th: 'ทดสอบหลังเรียน', en: 'Post-test' },
  testIntro: {
    th: 'ข้อสอบมี 6 ระดับ (A1–C2) ระดับละ 6 ข้อ ครอบคลุมไวยากรณ์ คำศัพท์ การอ่าน และการฟัง ข้อสอบจะยากขึ้นเรื่อย ๆ และจะจบเองเมื่อถึงระดับที่ยากเกินไป ไม่ต้องเดา ถ้าไม่รู้ให้กด "ไม่แน่ใจ"',
    en: 'There are 6 levels (A1–C2) with 6 questions each, covering grammar, vocabulary, reading and listening. Questions get harder and the test ends automatically when they become too difficult. Don\'t guess — choose "Not sure" if you don\'t know.',
  },
  postIntroNote: {
    th: 'ข้อสอบสุ่มจากคลังข้อสอบ ข้อสอบหลังเรียนจะไม่ซ้ำกับข้อที่เคยทำ แต่ระดับความยากเท่ากัน',
    en: "Questions are drawn from a question bank. The post-test avoids questions you've already seen, at the same difficulty.",
  },
  needsSound: { th: 'ข้อฟังต้องเปิดเสียง', en: 'Listening questions need sound.' },
  begin: { th: 'เริ่มทำข้อสอบ', en: 'Begin' },
  retake: { th: 'ทำใหม่', en: 'Retake' },
  level: { th: 'ระดับ', en: 'Level' },
  question: { th: 'ข้อ', en: 'Question' },
  of: { th: 'จาก', en: 'of' },
  next: { th: 'ถัดไป', en: 'Next' },
  notSure: { th: 'ไม่แน่ใจ', en: 'Not sure' },
  play: { th: '▶ ฟังเสียง', en: '▶ Play audio' },
  playing: { th: '🔊 กำลังเล่น…', en: '🔊 Playing…' },
  noSpeech: {
    th: 'เบราว์เซอร์นี้ไม่รองรับการอ่านออกเสียง แสดงข้อความแทน:',
    en: 'This browser cannot play speech. Here is the transcript instead:',
  },
  showTranscript: { th: 'ดูบทพูด', en: 'Show transcript' },

  resultTitle: { th: 'ผลการทดสอบ', en: 'Your result' },
  yourLevel: { th: 'ระดับของคุณ', en: 'Your level' },
  score: { th: 'คะแนน', en: 'Score' },
  byLevel: { th: 'คะแนนรายระดับ', en: 'Score by level' },
  bySkill: { th: 'คะแนนรายทักษะ', en: 'Score by skill' },
  notReached: { th: 'ไม่ได้ทำ', en: 'not reached' },
  equivalent: { th: 'เทียบเท่าโดยประมาณ', en: 'Approximate equivalent' },
  recommended: { th: 'บทเรียนที่แนะนำ', en: 'Recommended next' },
  goToLevel: { th: 'ไปที่บทเรียนระดับ', en: 'Go to level' },
  viewProgress: { th: 'ดูความก้าวหน้า', en: 'View progress' },

  coursesTitle: { th: 'บทเรียนตามระดับ CEFR', en: 'Courses by CEFR level' },
  coursesText: {
    th: 'แต่ละบทมีเป้าหมาย (can-do) คำศัพท์ ไวยากรณ์ และแบบฝึกหัดพร้อมเฉลย',
    en: 'Each unit has can-do goals, vocabulary, grammar and practice with feedback.',
  },
  yourLevelBadge: { th: 'ระดับของคุณ', en: 'Your level' },
  units: { th: 'บท', en: 'units' },
  unitPassHint: {
    th: 'ทำได้ 60% ขึ้นไปถือว่าผ่านบทนี้ (ใช้ปลดล็อกข้อสอบหลังเรียน)',
    en: 'Score 60% or more to pass this unit (needed to unlock the post-test).',
  },
  workTheme: { th: 'ภาษาอังกฤษในที่ทำงาน', en: 'Workplace English' },
  travelTheme: { th: 'การเดินทาง', en: 'Travel' },
  lifeTheme: { th: 'ชีวิตประจำวัน', en: 'Everyday life' },
  goals: { th: 'เป้าหมาย', en: 'Goals' },
  vocabulary: { th: 'คำศัพท์', en: 'Vocabulary' },
  grammar: { th: 'ไวยากรณ์', en: 'Grammar' },
  reading: { th: 'การอ่าน', en: 'Reading' },
  listening: { th: 'การฟัง', en: 'Listening' },
  practice: { th: 'แบบฝึกหัด', en: 'Practice' },
  examples: { th: 'ตัวอย่าง', en: 'Examples' },
  check: { th: 'ตรวจคำตอบ', en: 'Check' },
  correct: { th: 'ถูกต้อง!', en: 'Correct!' },
  incorrect: { th: 'ยังไม่ถูก', en: 'Not quite' },
  answerIs: { th: 'คำตอบคือ', en: 'Answer' },
  finish: { th: 'ดูผล', en: 'See result' },
  practiceDone: { th: 'ทำแบบฝึกหัดเสร็จแล้ว', en: 'Practice complete' },
  tryAgain: { th: 'ลองอีกครั้ง', en: 'Try again' },
  best: { th: 'ดีที่สุด', en: 'Best' },
  backToCourses: { th: '← บทเรียนทั้งหมด', en: '← All courses' },
  backToExams: { th: '← เตรียมสอบทั้งหมด', en: '← All exam prep' },
  listen: { th: 'ฟัง', en: 'Listen' },

  examsTitle: { th: 'เตรียมสอบ IELTS / TOEIC', en: 'IELTS / TOEIC preparation' },
  examsText: {
    th: 'ฝึกข้อสอบตามรูปแบบจริง พร้อมเทคนิคการทำข้อสอบ (เนื้อหาฝึกหัด ไม่ใช่ข้อสอบจริงหรือคะแนนอย่างเป็นทางการ)',
    en: 'Practise real exam formats with test-taking tips. (Practice material — not official tests or scores.)',
  },
  tips: { th: 'เทคนิค', en: 'Tips' },
  prompts: { th: 'โจทย์ฝึกพูด / เขียน', en: 'Speaking / writing prompts' },
  promptsHint: {
    th: 'ตอบด้วยตัวเอง แนะนำให้จับเวลาและอัดเสียงหรือเขียนลงกระดาษ',
    en: 'Answer on your own — time yourself and record or write your answer.',
  },

  vocabTitle: { th: 'คลังคำศัพท์ & แฟลชการ์ด', en: 'Vocabulary & Flashcards' },
  vocabText: {
    th: 'ทบทวนคำศัพท์จากทุกบทเรียน กดการ์ดเพื่อดูความหมาย ถ้าตอบ "จำได้" 3 ครั้งติด ถือว่าจำได้แล้ว คำที่ยังไม่แม่นจะวนกลับมาก่อน',
    en: 'Review words from every unit. Tap a card to see its meaning. Answer "I know it" three times in a row to master a word; words you miss come back first.',
  },
  allLevels: { th: 'ทุกระดับ', en: 'All levels' },
  tapToFlip: { th: 'แตะเพื่อดูความหมาย', en: 'Tap to see the meaning' },
  knowIt: { th: '✓ จำได้', en: '✓ I know it' },
  againLater: { th: '↺ ยังไม่แม่น', en: '↺ Not yet' },
  mastered: { th: 'จำได้แล้ว', en: 'Mastered' },
  learning: { th: 'กำลังฝึก', en: 'Learning' },
  newWords: { th: 'คำใหม่', en: 'New' },
  deckDone: { th: 'จำได้ครบทุกคำในชุดนี้แล้ว! 🎉', en: 'You have mastered every word in this set! 🎉' },
  wordList: { th: 'รายการคำศัพท์', en: 'Word list' },
  fromUnit: { th: 'จากบท', en: 'From unit' },
  vocabDone: { th: 'คำศัพท์ที่จำได้แล้ว', en: 'Words mastered' },
  progressTitle: { th: 'ความก้าวหน้าของฉัน', en: 'My progress' },
  beforeAfter: { th: 'เปรียบเทียบก่อน–หลังเรียน', en: 'Before vs after' },
  noPre: { th: 'ยังไม่ได้ทำแบบทดสอบก่อนเรียน', en: "You haven't taken the pre-test yet." },
  postLocked: {
    th: 'ข้อสอบหลังเรียนจะเปิดเมื่อทำแบบฝึกหัดได้อย่างน้อย 60% ในทุกบทของระดับ',
    en: 'The post-test unlocks when you score at least 60% in every unit of level',
  },
  postUnlocked: { th: 'ปลดล็อกข้อสอบหลังเรียนแล้ว!', en: 'Post-test unlocked!' },
  takePost: { th: 'ทำแบบทดสอบหลังเรียน', en: 'Take the post-test' },
  improvement: { th: 'พัฒนาการ', en: 'Improvement' },
  points: { th: 'คะแนน', en: 'points' },
  levelUp: { th: 'เลื่อนระดับ', en: 'Level up' },
  sameLevel: { th: 'ระดับเดิม — ฝึกต่อเพื่อเลื่อนระดับ', en: 'Same level — keep practising to level up' },
  unitsDone: { th: 'บทเรียนที่ทำแบบฝึกหัดแล้ว', en: 'Units practised' },
  examDone: { th: 'ชุดเตรียมสอบที่ฝึกแล้ว', en: 'Exam sets practised' },
  resetProgress: { th: 'ล้างข้อมูลทั้งหมด', en: 'Reset all progress' },
  resetConfirm: { th: 'ต้องการล้างผลสอบและความก้าวหน้าทั้งหมดใช่ไหม?', en: 'Delete all test results and progress?' },
  storageNote: {
    th: 'ข้อมูลถูกเก็บไว้ในเบราว์เซอร์ของคุณเท่านั้น',
    en: 'Your progress is stored only in this browser.',
  },
  date: { th: 'วันที่', en: 'Date' },
  notFound: { th: 'ไม่พบหน้านี้', en: 'Page not found' },
} satisfies Record<string, Bilingual>

export type StringKey = keyof typeof STRINGS

const SKILL_KEYS: Record<Skill, StringKey> = {
  grammar: 'grammar',
  vocabulary: 'vocabulary',
  reading: 'reading',
  listening: 'listening',
}

export function useT() {
  const { lang } = useStore()
  const t = (key: StringKey) => STRINGS[key][lang]
  /** Pick the current language from any bilingual value. */
  const tr = (b: Bilingual) => b[lang]
  const skill = (s: Skill) => t(SKILL_KEYS[s])
  return { t, tr, skill, lang }
}
