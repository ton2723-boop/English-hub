import { q } from '../lib/question'
import type { ExamSection } from '../types'
import { MORE_EXAM_SECTIONS } from './exams-more'

const TFNG = ['TRUE', 'FALSE', 'NOT GIVEN']

const IELTS_PASSAGE =
  'Urban beekeeping has grown rapidly in European cities over the past decade. Supporters claim that rooftop hives help pollinate city gardens and raise public awareness of declining bee populations. However, some ecologists warn that introducing large numbers of honeybees may increase competition for flowers, putting pressure on wild bee species. A 2019 study in London found that the number of hives had more than doubled in six years, while the amount of flowering plants had not increased at the same rate.'

const TOEIC_EMAIL =
  'To: All staff\nFrom: Facilities Department\nSubject: Parking garage maintenance\n\nPlease note that the north parking garage will be closed from Monday, 4 March, to Wednesday, 6 March, for resurfacing work. During this period, employees may park in the visitor lot on Elm Street at no charge. Please display your staff ID card on the dashboard. The garage will reopen on Thursday morning at 7:00 a.m. We apologise for any inconvenience.'

const BASE_EXAM_SECTIONS: ExamSection[] = [
  {
    id: 'ielts-reading',
    exam: 'IELTS',
    title: { th: 'IELTS Reading: True / False / Not Given', en: 'IELTS Reading: True / False / Not Given' },
    intro: {
      th: 'ข้อสอบประเภทนี้ให้ตัดสินว่าข้อความตรงกับบทอ่าน (TRUE) ขัดแย้งกับบทอ่าน (FALSE) หรือบทอ่านไม่ได้กล่าวถึง (NOT GIVEN)',
      en: 'Decide whether each statement agrees with the passage (TRUE), contradicts it (FALSE), or is not mentioned (NOT GIVEN).',
    },
    tips: [
      { th: 'อย่าใช้ความรู้ส่วนตัว ตอบจากบทอ่านเท่านั้น', en: 'Use only the passage, not your own knowledge.' },
      { th: 'ระวังคำที่จำกัดความหมาย เช่น all, some, always, only', en: 'Watch qualifiers such as all, some, always, only.' },
      { th: 'FALSE = บทอ่านบอกตรงข้าม, NOT GIVEN = ไม่มีข้อมูลเลย', en: 'FALSE means the passage says the opposite; NOT GIVEN means there is no information.' },
    ],
    practice: [
      q('ex-ir-1', 'reading', 'Urban beekeeping has become more popular in European cities.', [...TFNG] as [string, ...string[]], {
        passage: IELTS_PASSAGE,
        explain: { th: '"has grown rapidly" = เป็นที่นิยมมากขึ้น', en: '"has grown rapidly" means it has become more popular.' },
      }),
      q('ex-ir-2', 'reading', 'All ecologists support rooftop hives.', ['FALSE', 'TRUE', 'NOT GIVEN'], {
        passage: IELTS_PASSAGE,
        explain: { th: 'บทอ่านบอกว่า "some ecologists warn" แปลว่าไม่ใช่ทุกคนสนับสนุน', en: 'The passage says some ecologists warn against it, so not all support it.' },
      }),
      q('ex-ir-3', 'reading', 'Honey from city hives tastes better than honey from the countryside.', ['NOT GIVEN', 'TRUE', 'FALSE'], {
        passage: IELTS_PASSAGE,
        explain: { th: 'บทอ่านไม่ได้พูดถึงรสชาติน้ำผึ้ง', en: 'The taste of honey is never mentioned.' },
      }),
      q('ex-ir-4', 'reading', 'In London, flowering plants increased as fast as the number of hives.', ['FALSE', 'TRUE', 'NOT GIVEN'], {
        passage: IELTS_PASSAGE,
        explain: { th: '"had not increased at the same rate" ขัดแย้งกับข้อความ', en: '"had not increased at the same rate" contradicts the statement.' },
      }),
    ],
  },
  {
    id: 'ielts-listening',
    exam: 'IELTS',
    title: { th: 'IELTS Listening: จับใจความรายละเอียด', en: 'IELTS Listening: Detail Questions' },
    intro: {
      th: 'ฝึกฟังรายละเอียด เช่น ตัวเลข วันที่ ชื่อ ซึ่งเป็นจุดที่ข้อสอบ Section 1–2 ชอบออก กดปุ่มฟัง (เล่นซ้ำได้ระหว่างฝึก แต่ในสอบจริงฟังได้ครั้งเดียว)',
      en: 'Practise catching details such as numbers, dates and names, common in Sections 1–2. Replays are allowed here, but the real test plays once only.',
    },
    tips: [
      { th: 'อ่านคำถามล่วงหน้าและเดาประเภทคำตอบ (ตัวเลข? ชื่อ?)', en: 'Read ahead and predict the type of answer (number? name?).' },
      { th: 'ระวังผู้พูดเปลี่ยนคำตอบ เช่น "Actually, no…"', en: 'Listen for corrections such as "Actually, no…".' },
    ],
    practice: [
      q('ex-il-1', 'listening', 'What is the caller\'s booking reference?', ['BK4719', 'BK4790', 'PK4719', 'BK7419'], {
        audio: 'Hello, I would like to change my reservation. The booking reference is B K four seven one nine.',
        explain: { th: 'B-K-4-7-1-9', en: 'B-K-4-7-1-9.' },
      }),
      q('ex-il-2', 'listening', 'On which day will the course start?', ['Wednesday', 'Monday', 'Tuesday', 'Friday'], {
        audio: 'The course was going to start on Monday, but because of the public holiday, it will now begin on Wednesday instead.',
        explain: { th: 'ผู้พูดเปลี่ยนจาก Monday เป็น Wednesday', en: 'The speaker corrects Monday to Wednesday.' },
      }),
      q('ex-il-3', 'listening', 'How much does a student ticket cost?', ['£8.50', '£12', '£18.50', '£3.50'], {
        audio: 'Adult tickets are twelve pounds, but students pay eight pounds fifty with a valid card.',
        explain: { th: 'นักเรียนจ่าย eight pounds fifty', en: 'Students pay eight pounds fifty.' },
      }),
    ],
  },
  {
    id: 'ielts-writing',
    exam: 'IELTS',
    title: { th: 'IELTS Writing Task 2: เรียงความแสดงความคิดเห็น', en: 'IELTS Writing Task 2: Opinion Essay' },
    intro: {
      th: 'เขียนอย่างน้อย 250 คำใน 40 นาที โครงสร้างแนะนำ: บทนำ (ปูประเด็น + จุดยืน) → ย่อหน้าเนื้อหา 2 ย่อหน้า (ข้อโต้แย้ง + ตัวอย่าง) → บทสรุป',
      en: 'Write at least 250 words in 40 minutes. Suggested structure: introduction (paraphrase + position) → two body paragraphs (argument + example) → conclusion.',
    },
    tips: [
      { th: 'ตอบคำถามให้ครบทุกส่วน (Task Response มีน้ำหนัก 25%)', en: 'Answer every part of the question (Task Response is 25% of the score).' },
      { th: 'ใช้คำเชื่อมให้หลากหลาย แต่ไม่ยัดเยียด', en: 'Use a range of linking words — but naturally.' },
      { th: 'เผื่อเวลา 5 นาทีตรวจไวยากรณ์และการสะกด', en: 'Leave 5 minutes to check grammar and spelling.' },
    ],
    prompts: [
      'Some people believe that working from home is better for both employees and employers. To what extent do you agree or disagree?',
      'Many cities are banning cars from their centres. Do the advantages of this outweigh the disadvantages?',
    ],
    practice: [
      q('ex-iw-1', 'vocabulary', 'Which linking word introduces a CONTRASTING idea?', ['However', 'Furthermore', 'Therefore', 'For instance'], {
        explain: { th: 'However = อย่างไรก็ตาม (ขัดแย้ง)', en: 'However shows contrast.' },
      }),
      q('ex-iw-2', 'vocabulary', 'Which phrase is best for giving an example?', ['For instance,', 'In contrast,', 'As a result,', 'Nevertheless,'], {
        explain: { th: 'For instance = ตัวอย่างเช่น', en: 'For instance introduces an example.' },
      }),
      q('ex-iw-3', 'grammar', 'Which is the best paraphrase of "Working from home is better"?', [
        'Remote working offers greater benefits.',
        'Working from home is better.',
        'Home is better for working at.',
        'Work is better than home.',
      ], {
        explain: { th: 'การ paraphrase ต้องเปลี่ยนคำแต่คงความหมาย', en: 'A paraphrase changes the words but keeps the meaning.' },
      }),
    ],
  },
  {
    id: 'ielts-speaking',
    exam: 'IELTS',
    title: { th: 'IELTS Speaking: ฝึกพูด Part 1–3', en: 'IELTS Speaking: Parts 1–3' },
    intro: {
      th: 'ฝึกตอบคำถามด้านล่างโดยพูดออกเสียง จับเวลา Part 2 ให้พูด 1–2 นาที แนะนำให้อัดเสียงตัวเองแล้วฟังย้อน',
      en: 'Answer the prompts out loud. For Part 2, speak for 1–2 minutes. Recording yourself and listening back helps a lot.',
    },
    tips: [
      { th: 'ขยายคำตอบ: ตอบ + เหตุผล + ตัวอย่าง', en: 'Extend answers: answer + reason + example.' },
      { th: 'ใช้คำซื้อเวลาอย่างเป็นธรรมชาติ เช่น "That\'s an interesting question…"', en: 'Use natural fillers such as "That\'s an interesting question…".' },
    ],
    prompts: [
      'Part 1: Do you work or are you a student? What do you like about it?',
      'Part 2: Describe a skill you learned that was difficult. You should say what it was, how you learned it, and explain why it was difficult.',
      'Part 3: Do you think schools should teach more practical skills? Why or why not?',
    ],
    practice: [
      q('ex-is-1', 'vocabulary', 'Which answer to "Do you like cooking?" is best for IELTS Speaking?', [
        "Yes, I do — especially Thai dishes, because it helps me relax after work.",
        'Yes.',
        'Cooking.',
        'I like.',
      ], {
        explain: { th: 'คำตอบที่ดีควรมีเหตุผลหรือรายละเอียดเพิ่ม', en: 'A good answer adds a reason or detail.' },
      }),
    ],
  },
  {
    id: 'toeic-part5',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 5: เติมประโยคให้สมบูรณ์', en: 'TOEIC Part 5: Incomplete Sentences' },
    intro: {
      th: 'เลือกคำที่ถูกต้องเติมในประโยคเกี่ยวกับงานและธุรกิจ เน้นไวยากรณ์ ชนิดของคำ (word form) และคำศัพท์',
      en: 'Choose the word that best completes each business sentence. Tests grammar, word forms and vocabulary.',
    },
    tips: [
      { th: 'ดูคำรอบช่องว่างก่อน: หลัง a/the มักเป็นคำนาม หน้า noun มักเป็น adjective', en: 'Check the words around the gap: after a/the comes a noun; before a noun, an adjective.' },
      { th: 'ใช้เวลาไม่เกิน 20–30 วินาทีต่อข้อ', en: 'Spend no more than 20–30 seconds per question.' },
    ],
    practice: [
      q('ex-t5-1', 'grammar', 'The marketing team worked ___ to finish the campaign on time.', [
        'efficiently',
        'efficient',
        'efficiency',
        'more efficient',
      ], {
        explain: { th: 'ขยายกริยา worked ใช้ adverb', en: 'An adverb modifies the verb worked.' },
      }),
      q('ex-t5-2', 'grammar', 'All ___ must register at the front desk before entering the building.', [
        'visitors',
        'visit',
        'visiting',
        'visited',
      ], {
        explain: { th: 'หลัง All ต้องเป็นคำนามพหูพจน์', en: 'After All, use a plural noun.' },
      }),
      q('ex-t5-3', 'vocabulary', 'Please ___ the attached form and return it by Friday.', ['complete', 'compete', 'compile', 'comply'], {
        explain: { th: 'complete a form = กรอกแบบฟอร์ม', en: 'complete a form = fill it in.' },
      }),
      q('ex-t5-4', 'grammar', 'Ms. Tanaka will lead the meeting ___ Mr. Lee is on leave.', ['while', 'during', 'despite', 'because of'], {
        explain: { th: 'ตามด้วยประโยค (ประธาน+กริยา) ใช้ while; during ตามด้วยคำนาม', en: 'A clause follows, so use while (during needs a noun).' },
      }),
      q('ex-t5-5', 'vocabulary', 'The new policy will take ___ on 1 January.', ['effect', 'affect', 'effort', 'place'], {
        explain: { th: 'take effect = มีผลบังคับใช้', en: 'take effect = start to apply.' },
      }),
    ],
  },
  {
    id: 'toeic-part7',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 7: อ่านเอกสารธุรกิจ', en: 'TOEIC Part 7: Reading Comprehension' },
    intro: {
      th: 'อ่านอีเมล ประกาศ หรือเอกสารทางธุรกิจ แล้วตอบคำถาม เน้นทักษะการอ่านหาข้อมูลอย่างรวดเร็ว (scanning)',
      en: 'Read emails, notices and business documents and answer questions. Focus on scanning quickly for information.',
    },
    tips: [
      { th: 'อ่านคำถามก่อน แล้วค่อยหาคำตอบในเอกสาร', en: 'Read the questions first, then find the answers.' },
      { th: 'คำถามแบบ "NOT true" ต้องตรวจทุกตัวเลือก', en: 'For "NOT true" questions, check every option.' },
    ],
    practice: [
      q('ex-t7-1', 'reading', 'What is the main purpose of the email?', [
        'To announce a temporary closure',
        'To introduce a new parking fee',
        'To request staff ID cards',
        'To hire maintenance workers',
      ], { passage: TOEIC_EMAIL, explain: { th: 'อีเมลแจ้งปิดลานจอดรถชั่วคราว', en: 'It announces the garage will be closed temporarily.' } }),
      q('ex-t7-2', 'reading', 'Where can employees park during the work?', [
        'In the visitor lot on Elm Street',
        'In the north garage',
        'On the street outside',
        'In the south garage',
      ], { passage: TOEIC_EMAIL, explain: { th: '"park in the visitor lot on Elm Street"', en: '"park in the visitor lot on Elm Street".' } }),
      q('ex-t7-3', 'reading', 'When will the garage reopen?', ['Thursday, 7 March', 'Monday, 4 March', 'Wednesday, 6 March', 'Friday, 8 March'], {
        passage: TOEIC_EMAIL,
        explain: { th: 'ปิดถึงวันพุธที่ 6 เปิดวันพฤหัสบดี (7 มี.ค.)', en: 'Closed until Wednesday the 6th; reopens Thursday (the 7th).' },
      }),
    ],
  },
  {
    id: 'toeic-part2',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 2: ถาม–ตอบ', en: 'TOEIC Part 2: Question–Response' },
    intro: {
      th: 'ฟังคำถามแล้วเลือกคำตอบที่เหมาะสมที่สุด ระวังตัวเลือกที่มีคำเสียงคล้ายกับในคำถาม (เป็นตัวหลอกที่พบบ่อย)',
      en: 'Listen to a question and choose the best response. Beware of options that repeat similar-sounding words — a common trap.',
    },
    tips: [
      { th: 'จับคำแสดงคำถาม (Who, When, Where) ให้ได้ตั้งแต่ต้น', en: 'Catch the question word (Who, When, Where) at the start.' },
      { th: 'คำตอบที่ถูกอาจเป็นการตอบอ้อม ๆ เช่น "I\'ll check with Ken."', en: 'The correct reply may be indirect, e.g. "I\'ll check with Ken."' },
    ],
    practice: [
      q('ex-t2-1', 'listening', 'Choose the best response.', [
        'In the conference room on the third floor.',
        'At two o\'clock.',
        'Yes, I met him.',
        'The meeting was useful.',
      ], {
        audio: 'Where is the training session being held?',
        explain: { th: 'คำถาม Where ต้องตอบสถานที่', en: 'A Where question needs a place.' },
      }),
      q('ex-t2-2', 'listening', 'Choose the best response.', [
        'I think Maria is handling it.',
        'In the main office.',
        'It was delivered yesterday.',
        'Yes, a new account.',
      ], {
        audio: 'Who is responsible for the new client account?',
        explain: { th: 'คำถาม Who ต้องตอบบุคคล', en: 'A Who question needs a person.' },
      }),
      q('ex-t2-3', 'listening', 'Choose the best response.', [
        "Sure, I'll do it after lunch.",
        'The printer is new.',
        'Yes, it was printed.',
        'About twenty pages.',
      ], {
        audio: 'Could you send me the updated sales figures?',
        explain: { th: 'คำขอร้อง ตอบรับด้วย Sure', en: 'A request: respond by agreeing.' },
      }),
    ],
  },
]

/** Display order: IELTS by skill, then TOEIC by part. */
const ORDER = [
  'ielts-reading',
  'ielts-headings',
  'ielts-listening',
  'ielts-listening-s3',
  'ielts-writing-task1',
  'ielts-writing',
  'ielts-speaking',
  'toeic-part2',
  'toeic-part3',
  'toeic-part4',
  'toeic-part5',
  'toeic-part6',
  'toeic-part7',
]

export const EXAM_SECTIONS: ExamSection[] = [...BASE_EXAM_SECTIONS, ...MORE_EXAM_SECTIONS].sort(
  (a, b) => ORDER.indexOf(a.id) - ORDER.indexOf(b.id),
)

export function findExamSection(id: string): ExamSection | undefined {
  return EXAM_SECTIONS.find((s) => s.id === id)
}
