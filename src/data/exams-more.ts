import { q } from '../lib/question'
import type { ExamSection } from '../types'

const HEADINGS_PASSAGE =
  'A  For most of history, people slept in two separate periods each night, waking for an hour or so in between. Historians have found references to "first sleep" and "second sleep" in hundreds of documents from the 1500s to the 1800s.\n\nB  The arrival of street lighting and, later, electric light in homes changed this pattern. As evenings became longer and more social, people went to bed later and began to sleep in one continuous block.\n\nC  Some sleep scientists now suggest that waking in the night is not necessarily a disorder. Patients who worry about it may actually be returning to a natural rhythm, and reassurance can be more effective than medication.'

const HEADINGS = [
  'i. A historical sleep pattern',
  'ii. How artificial light changed our nights',
  'iii. A new view of night waking',
  'iv. The dangers of sleeping pills',
  'v. Why children need more sleep',
] as const

const TOEIC_PART6_TEXT =
  'To all employees:\n\nStarting next month, the company will (1) ___ a new expense reporting system. All claims must be submitted online within 30 days of purchase. Paper receipts will no longer be accepted; (2) ___, staff should upload a clear photo of each receipt. Training sessions will be held on 2 and 3 May. (3) ___ Please contact the finance team if you have any questions.'

export const MORE_EXAM_SECTIONS: ExamSection[] = [
  {
    id: 'ielts-headings',
    exam: 'IELTS',
    title: { th: 'IELTS Reading: จับคู่หัวข้อย่อหน้า', en: 'IELTS Reading: Matching Headings' },
    intro: {
      th: 'เลือกหัวข้อ (heading) ที่ตรงกับใจความหลักของแต่ละย่อหน้า ข้อสอบจริงจะมีหัวข้อมากกว่าจำนวนย่อหน้าเสมอ',
      en: 'Choose the heading that matches the main idea of each paragraph. The real test always has more headings than paragraphs.',
    },
    tips: [
      { th: 'อ่านประโยคแรกและประโยคสุดท้ายของย่อหน้าก่อน มักบอกใจความหลัก', en: 'Read the first and last sentences first — they often carry the main idea.' },
      { th: 'ระวังหัวข้อที่มีคำซ้ำกับในย่อหน้า แต่ไม่ใช่ใจความหลัก', en: 'Beware of headings that repeat a word from the paragraph but miss its main point.' },
      { th: 'ทำย่อหน้าที่ง่ายที่สุดก่อน เพื่อตัดตัวเลือก', en: 'Do the easiest paragraph first to eliminate options.' },
    ],
    practice: [
      q('ex-ih-1', 'reading', 'Choose the best heading for paragraph A.', [HEADINGS[0], HEADINGS[1], HEADINGS[2], HEADINGS[4]], {
        passage: HEADINGS_PASSAGE,
        explain: { th: 'ย่อหน้า A พูดถึงรูปแบบการนอนสองช่วงในอดีต', en: 'Paragraph A describes the historical two-part sleep pattern.' },
      }),
      q('ex-ih-2', 'reading', 'Choose the best heading for paragraph B.', [HEADINGS[1], HEADINGS[0], HEADINGS[3], HEADINGS[4]], {
        passage: HEADINGS_PASSAGE,
        explain: { th: 'ไฟถนนและไฟฟ้าเปลี่ยนรูปแบบการนอน', en: 'Street and electric lighting changed the pattern.' },
      }),
      q('ex-ih-3', 'reading', 'Choose the best heading for paragraph C.', [HEADINGS[2], HEADINGS[3], HEADINGS[0], HEADINGS[4]], {
        passage: HEADINGS_PASSAGE,
        explain: {
          th: 'ใจความหลักคือการตื่นกลางดึกอาจไม่ใช่โรค (iv เป็นตัวลวง เพราะพูดถึงยาแค่ผ่าน ๆ)',
          en: 'The main idea: night waking may not be a disorder. (iv is a distractor — medication is only mentioned in passing.)',
        },
      }),
    ],
  },
  {
    id: 'ielts-listening-s3',
    exam: 'IELTS',
    title: { th: 'IELTS Listening Section 3: บทสนทนาเชิงวิชาการ', en: 'IELTS Listening Section 3: Academic Discussion' },
    intro: {
      th: 'Section 3 เป็นบทสนทนาระหว่างนักศึกษาหรือกับอาจารย์ เรื่องงานวิจัยหรืองานกลุ่ม ต้องจับความคิดเห็นและการตัดสินใจของผู้พูด',
      en: 'Section 3 is a conversation between students, or with a tutor, about research or an assignment. You must follow opinions and decisions.',
    },
    tips: [
      { th: 'ระวังผู้พูดเปลี่ยนใจ เช่น "Actually, I think we should…"', en: 'Listen for changes of mind, e.g. "Actually, I think we should…".' },
      { th: 'คำตอบมักถูก paraphrase ไม่ตรงกับคำในตัวเลือก', en: 'Answers are usually paraphrased, not word-for-word.' },
    ],
    practice: [
      q('ex-il3-1', 'listening', 'What topic do the students finally choose?', [
        'plastic waste in the university canteen',
        'plastic waste in the ocean',
        'energy use in the library',
        'student transport',
      ], {
        audio:
          "Woman: So, for our project, shall we look at plastic in the ocean? Man: It's a huge topic, though. Why don't we focus on something we can actually measure, like plastic waste in our own canteen? Woman: Good idea — let's do that.",
        explain: { th: 'ตกลงเลือก plastic waste ในโรงอาหาร', en: 'They agree on plastic waste in their canteen.' },
      }),
      q('ex-il3-2', 'listening', 'Why does the tutor suggest changing the survey?', [
        'Some questions are too leading.',
        'It is too short.',
        'It has too few participants.',
        'It is written in the wrong language.',
      ], {
        audio:
          "Tutor: The length of your survey is fine, and fifty participants is plenty. My concern is that a few questions push people towards a particular answer. You'll need to reword those.",
        explain: { th: 'คำถามบางข้อชี้นำ (leading)', en: 'Some questions push people towards an answer — they are leading.' },
      }),
      q('ex-il3-3', 'listening', 'When will the students meet again?', ['Thursday afternoon', 'Wednesday morning', 'Thursday morning', 'Friday afternoon'], {
        audio:
          "Man: Shall we meet on Wednesday morning? Woman: I've got a lecture then. How about Thursday? Man: Thursday morning's no good for me, but the afternoon works. Woman: Great, Thursday afternoon it is.",
        explain: { th: 'สรุปที่ Thursday afternoon', en: 'They settle on Thursday afternoon.' },
      }),
    ],
  },
  {
    id: 'ielts-writing-task1',
    exam: 'IELTS',
    title: { th: 'IELTS Writing Task 1: บรรยายข้อมูล', en: 'IELTS Writing Task 1: Describing Data' },
    intro: {
      th: 'Academic Task 1 ให้เขียนอย่างน้อย 150 คำใน 20 นาที บรรยายกราฟ ตาราง หรือแผนภาพ โดยต้องมี overview (ภาพรวม) และเปรียบเทียบข้อมูลสำคัญ ไม่ต้องแสดงความคิดเห็น',
      en: 'Academic Task 1: write at least 150 words in 20 minutes describing a graph, table or diagram. Include an overview and compare key features — no opinions.',
    },
    tips: [
      { th: 'ย่อหน้าแรก paraphrase โจทย์ ย่อหน้าที่สองเขียน overview แนวโน้มหลัก', en: 'Paragraph 1: paraphrase the task. Paragraph 2: overview of the main trends.' },
      { th: 'เลือกเฉพาะข้อมูลสำคัญ ไม่ต้องใส่ตัวเลขทุกตัว', en: 'Select key data — do not list every number.' },
      { th: 'ใช้ภาษาเปรียบเทียบ: twice as many, slightly higher, the lowest', en: 'Use comparison language: twice as many, slightly higher, the lowest.' },
    ],
    prompts: [
      'The table shows the percentage of people using public transport in four cities in 2010 and 2020. Bangkok: 32% → 41%. London: 45% → 43%. Tokyo: 58% → 61%. Sydney: 18% → 24%. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
    ],
    practice: [
      q('ex-iw1-1', 'grammar', 'Which sentence is the best overview of the table above?', [
        'Overall, public transport use rose in three of the four cities, with Tokyo remaining the highest.',
        'Bangkok was 32% in 2010.',
        'I think public transport is very important.',
        'Sydney is a beautiful city with many buses.',
      ], { explain: { th: 'overview สรุปแนวโน้มหลัก ไม่ลงตัวเลขย่อย ไม่แสดงความเห็น', en: 'An overview gives main trends — no detail, no opinion.' } }),
      q('ex-iw1-2', 'vocabulary', 'London: 45% → 43%. Which verb fits best? "Usage in London ___ slightly."', ['dipped', 'soared', 'doubled', 'stabilised at 45%'], {
        explain: { th: 'ลดลงเล็กน้อย: dipped / fell slightly', en: 'A small fall: dipped.' },
      }),
      q('ex-iw1-3', 'grammar', 'Tokyo 61% vs Sydney 24%. "In 2020, Tokyo\'s rate was ___ Sydney\'s."', [
        'more than twice',
        'twice more than as',
        'as twice as',
        'two times more of',
      ], { explain: { th: 'more than twice + กรรม', en: 'more than twice + object.' } }),
      q('ex-iw1-4', 'vocabulary', 'Which phrase is NOT suitable for Task 1?', ['In my opinion,', 'Overall,', 'By contrast,', 'The figure for … rose to …'], {
        explain: { th: 'Task 1 ไม่ต้องแสดงความเห็น', en: 'Task 1 does not ask for your opinion.' },
      }),
    ],
  },
  {
    id: 'toeic-part3',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 3: บทสนทนา', en: 'TOEIC Part 3: Conversations' },
    intro: {
      th: 'ฟังบทสนทนาระหว่าง 2–3 คนในที่ทำงาน แล้วตอบคำถามเกี่ยวกับใจความ รายละเอียด หรือสิ่งที่ผู้พูดจะทำต่อไป',
      en: 'Listen to conversations between two or three people at work and answer questions about the topic, details or what happens next.',
    },
    tips: [
      { th: 'อ่านคำถามล่วงหน้าก่อนเสียงเริ่ม', en: 'Preview the questions before the audio starts.' },
      { th: 'คำถาม "What will the man do next?" มักตอบในประโยคท้าย ๆ', en: '"What will the man do next?" is usually answered at the end.' },
    ],
    practice: [
      q('ex-t3-1', 'listening', 'What is the problem?', [
        'The projector is not working.',
        'The meeting room is double-booked.',
        'The client has cancelled.',
        'The slides are missing.',
      ], {
        audio:
          "Man: The client arrives in ten minutes and the projector won't turn on. Woman: Let me call IT. Actually, there's a spare one in room 204 — I'll go and get it.",
      }),
      q('ex-t3-2', 'listening', 'What will the woman probably do next?', [
        'get a projector from another room',
        'cancel the meeting',
        'email the client',
        'print the slides',
      ], {
        audio:
          "Man: The client arrives in ten minutes and the projector won't turn on. Woman: Let me call IT. Actually, there's a spare one in room 204 — I'll go and get it.",
        explain: { th: '"I\'ll go and get it." = จะไปเอาเครื่องในห้อง 204', en: '"I\'ll go and get it" — the spare in room 204.' },
      }),
      q('ex-t3-3', 'listening', 'Why does the man want to change the delivery?', [
        'The warehouse will be closed on Friday.',
        'The price has gone up.',
        'He ordered the wrong items.',
        'The truck is too small.',
      ], {
        audio:
          "Man: Hi, it's Dan from Pacific Foods. Could we move Friday's delivery to Thursday? Our warehouse is closed on Friday for inventory. Woman: Let me check the schedule… Yes, Thursday morning is fine.",
      }),
    ],
  },
  {
    id: 'toeic-part4',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 4: การพูดคนเดียว', en: 'TOEIC Part 4: Short Talks' },
    intro: {
      th: 'ฟังประกาศ ข้อความเสียง หรือการนำเสนอสั้น ๆ จากผู้พูดคนเดียว แล้วตอบคำถาม',
      en: 'Listen to announcements, voicemails or short presentations by one speaker, then answer questions.',
    },
    tips: [
      { th: 'ประโยคแรกมักบอกว่าใครพูด พูดที่ไหน และพูดเรื่องอะไร', en: 'The first sentence often tells you who is speaking, where and why.' },
      { th: 'จดตัวเลข เวลา และสถานที่ไว้ระหว่างฟัง', en: 'Note numbers, times and places as you listen.' },
    ],
    practice: [
      q('ex-t4-1', 'listening', 'Where is this announcement most likely being made?', ['at an airport', 'in a supermarket', 'at a cinema', 'in a hospital'], {
        audio:
          'Attention passengers on flight TG 415 to Tokyo. The departure gate has changed from gate 12 to gate 27. Boarding will begin in twenty minutes.',
      }),
      q('ex-t4-2', 'listening', 'What has changed?', ['the departure gate', 'the departure time', 'the destination', 'the airline'], {
        audio:
          'Attention passengers on flight TG 415 to Tokyo. The departure gate has changed from gate 12 to gate 27. Boarding will begin in twenty minutes.',
      }),
      q('ex-t4-3', 'listening', 'What does the speaker ask the listener to do?', [
        'confirm the appointment by phone',
        'arrive an hour early',
        'bring a passport',
        'pay in advance',
      ], {
        audio:
          "Hello, this is Dr. Lim's office calling to remind you of your appointment on Tuesday at 10 a.m. Please call us back on 02 345 6789 to confirm. Thank you.",
      }),
    ],
  },
  {
    id: 'toeic-part6',
    exam: 'TOEIC',
    title: { th: 'TOEIC Part 6: เติมข้อความในเอกสาร', en: 'TOEIC Part 6: Text Completion' },
    intro: {
      th: 'อ่านอีเมลหรือประกาศที่มีช่องว่าง เลือกคำ วลี หรือประโยคที่เหมาะสมที่สุด ต้องดูบริบททั้งย่อหน้า ไม่ใช่แค่ประโยคเดียว',
      en: 'Read an email or notice with gaps and choose the best word, phrase or sentence. Use the context of the whole text, not just one sentence.',
    },
    tips: [
      { th: 'ข้อที่ให้เลือกประโยค ต้องดูประโยคก่อนและหลังช่องว่าง', en: 'For sentence-insertion gaps, read the sentences before and after.' },
      { th: 'ระวังคำเชื่อม (however, instead, therefore) ต้องตรงกับความสัมพันธ์ของความคิด', en: 'Linkers (however, instead, therefore) must match the logic.' },
    ],
    practice: [
      q('ex-t6-1', 'vocabulary', 'Gap (1):', ['introduce', 'introduction', 'introducing', 'introduced'], {
        passage: TOEIC_PART6_TEXT,
        explain: { th: 'หลัง will ใช้ V1', en: 'After will: base verb.' },
      }),
      q('ex-t6-2', 'vocabulary', 'Gap (2):', ['instead', 'therefore', 'for example', 'in addition'], {
        passage: TOEIC_PART6_TEXT,
        explain: { th: 'ไม่รับใบเสร็จกระดาษ ให้ถ่ายรูปแทน: instead', en: 'No paper receipts — upload photos instead.' },
      }),
      q('ex-t6-3', 'reading', 'Gap (3): choose the best sentence.', [
        'Attendance is required for all staff who submit expenses.',
        'The cafeteria will be closed during this time.',
        'Paper receipts are still the preferred format.',
        'The new parking rules start in June.',
      ], {
        passage: TOEIC_PART6_TEXT,
        explain: { th: 'ประโยคต้องต่อเนื่องจากเรื่อง training sessions', en: 'It must follow on from the training sessions.' },
      }),
    ],
  },
]
