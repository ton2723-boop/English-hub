export type Lang = 'th' | 'en'

/** Text available in both UI languages. */
export interface Bilingual {
  th: string
  en: string
}

export const CEFR_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const
export type CefrLevel = (typeof CEFR_LEVELS)[number]
/** Result of a placement test; 'Pre-A1' means no level block was passed. */
export type PlacementLevel = CefrLevel | 'Pre-A1'

export type Skill = 'grammar' | 'vocabulary' | 'reading' | 'listening'

export interface Question {
  id: string
  skill: Skill
  /** Question text. For listening questions this is the instruction shown on screen. */
  prompt: string
  /** Optional reading passage shown above the prompt. */
  passage?: string
  /** Text spoken aloud by speech synthesis for listening questions. */
  audio?: string
  options: string[]
  /** Index into options. */
  answer: number
  /** Short explanation shown after answering (practice mode only). */
  explain?: Bilingual
}

export interface LevelBlock {
  level: CefrLevel
  questions: Question[]
}

export type TestKind = 'pre' | 'post'

export interface LevelScore {
  level: CefrLevel
  correct: number
  total: number
  /** Questions in this block the learner reached (0 if the test stopped before it). */
  answered: number
}

export interface TestResult {
  kind: TestKind
  date: string
  level: PlacementLevel
  /** Points out of maxScore, used for the before/after comparison. */
  score: number
  maxScore: number
  byLevel: LevelScore[]
  bySkill: Record<Skill, { correct: number; total: number }>
  /** Questions the learner saw, so later attempts can avoid repeating them. */
  questionIds?: string[]
}

export type UnitTheme = 'work' | 'kids' | 'travel' | 'life'
/** Learning categories shown on the courses page; 'core' = grammar units without a theme. */
export type Category = 'core' | UnitTheme

export interface VocabItem {
  word: string
  th: string
  example: string
}

export interface Unit {
  id: string
  level: CefrLevel
  /** Topic badge; core grammar units have none. */
  theme?: UnitTheme
  /** Kids category only: a unit for children themselves or for parents. */
  audience?: 'child' | 'parent'
  title: Bilingual
  canDo: Bilingual[]
  vocab: VocabItem[]
  grammar: {
    title: string
    explain: Bilingual
    examples: string[]
  }
  reading?: { title: string; text: string }
  practice: Question[]
}

export interface ExamSection {
  id: string
  exam: 'IELTS' | 'TOEIC'
  title: Bilingual
  intro: Bilingual
  tips: Bilingual[]
  /** Open-ended prompts (speaking/writing) the learner answers on their own. */
  prompts?: string[]
  practice: Question[]
}
