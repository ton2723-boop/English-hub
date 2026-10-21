import { q } from '../lib/question'
import type { Unit } from '../types'

/** Workplace English units: three per CEFR level, added to the core units in courses.ts. */
export const WORK_UNITS: Unit[] = [
  // ───────────── A1 ─────────────
  {
    id: 'a1-3',
    level: 'A1',
    theme: 'work',
    title: { th: 'ในออฟฟิศ: สิ่งของและสถานที่', en: 'At the Office: Things & Places' },
    canDo: [
      { th: 'บอกว่ามีอะไรอยู่ที่ไหนในออฟฟิศได้', en: 'I can say what is in the office and where it is.' },
      { th: 'ถามหาสิ่งของหรือห้องต่าง ๆ ได้', en: 'I can ask where things and rooms are.' },
    ],
    vocab: [
      { word: 'meeting room', th: 'ห้องประชุม', example: 'The meeting room is on the third floor.' },
      { word: 'printer', th: 'เครื่องพิมพ์', example: 'Is there a printer near here?' },
      { word: 'desk', th: 'โต๊ะทำงาน', example: 'My desk is next to the window.' },
      { word: 'reception', th: 'แผนกต้อนรับ', example: 'Please wait at reception.' },
      { word: 'next to', th: 'ข้าง ๆ', example: 'The kitchen is next to the lift.' },
    ],
    grammar: {
      title: 'There is / There are + prepositions of place',
      explain: {
        th: 'ใช้ There is กับนามเอกพจน์ และ There are กับนามพหูพจน์ เพื่อบอกว่ามีสิ่งใดอยู่ คำถามใช้ Is there…? / Are there…? บอกตำแหน่งด้วย in, on, under, next to, between',
        en: 'Use There is with singular nouns and There are with plurals to say something exists. Questions: Is there…? / Are there…? Give positions with in, on, under, next to, between.',
      },
      examples: ['There is a printer next to the door.', 'There are two meeting rooms on this floor.', 'Is there a café in the building?'],
    },
    practice: [
      q('p-a1-3-1', 'grammar', 'There ___ three computers in the room.', ['are', 'is', 'am', 'be'], {
        explain: { th: 'three computers เป็นพหูพจน์ ใช้ are', en: 'Plural noun: There are.' },
      }),
      q('p-a1-3-2', 'grammar', '___ there a meeting room on this floor?', ['Is', 'Are', 'Do', 'Has'], {
        explain: { th: 'คำถามกับนามเอกพจน์: Is there…?', en: 'Singular question: Is there…?' },
      }),
      q('p-a1-3-3', 'vocabulary', 'Visitors sign in at ___.', ['reception', 'the printer', 'the desk drawer', 'the kitchen'], {
        explain: { th: 'reception = แผนกต้อนรับ', en: 'Visitors check in at reception.' },
      }),
      q('p-a1-3-4', 'grammar', 'The stapler is ___ the desk.', ['on', 'at', 'of', 'to'], {
        explain: { th: 'วางอยู่บนโต๊ะ ใช้ on', en: 'On the surface: on.' },
      }),
    ],
  },
  {
    id: 'a1-4',
    level: 'A1',
    theme: 'work',
    title: { th: 'รับโทรศัพท์เบื้องต้น', en: 'Telephone Basics' },
    canDo: [
      { th: 'รับสายและบอกชื่อบริษัทได้', en: 'I can answer the phone and say the company name.' },
      { th: 'สะกดชื่อและบอกหมายเลขโทรศัพท์ได้', en: 'I can spell names and give phone numbers.' },
    ],
    vocab: [
      { word: 'speaking', th: '(ฉัน) กำลังพูดอยู่ — ใช้รับสาย', example: 'Good morning, ABC Company, Ploy speaking.' },
      { word: 'Can I speak to…?', th: 'ขอสายคุณ… ได้ไหม', example: 'Can I speak to Mr. Lee, please?' },
      { word: 'hold on', th: 'รอสักครู่', example: 'Hold on, please.' },
      { word: 'spell', th: 'สะกด', example: 'Can you spell your name, please?' },
      { word: 'call back', th: 'โทรกลับ', example: 'I will call back later.' },
    ],
    grammar: {
      title: 'Can for requests & ability',
      explain: {
        th: 'can + กริยาช่องที่ 1 ใช้ขอร้อง (Can I…? / Can you…?) และบอกความสามารถ ไม่เติม s และไม่ใช้ to หลัง can ปฏิเสธใช้ can\'t',
        en: "can + base verb makes requests (Can I…? / Can you…?) and shows ability. No -s, no to after can. Negative: can't.",
      },
      examples: ['Can I leave a message?', 'Can you repeat that, please?', "Sorry, he can't come to the phone now."],
    },
    practice: [
      q('p-a1-4-1', 'grammar', 'Can you ___ that, please?', ['repeat', 'to repeat', 'repeats', 'repeating'], {
        explain: { th: 'หลัง can ใช้กริยาช่องที่ 1', en: 'After can, use the base verb.' },
      }),
      q('p-a1-4-2', 'vocabulary', 'You answer the phone: "Good morning, Siam Tech, Nok ___."', ['speaking', 'talking', 'saying', 'telling'], {
        explain: { th: 'รับสายด้วย "ชื่อ + speaking"', en: 'Answer with "name + speaking".' },
      }),
      q('p-a1-4-3', 'vocabulary', '"Please ___ on. I\'ll get him."', ['hold', 'wait', 'stay', 'keep'], {
        explain: { th: 'hold on = รอสายสักครู่', en: 'hold on = wait on the line.' },
      }),
      q('p-a1-4-4', 'grammar', "I'm sorry, she ___ talk now. She's in a meeting.", ["can't", "isn't", "doesn't can", 'not can'], {
        explain: { th: 'ปฏิเสธของ can คือ can\'t', en: "The negative of can is can't." },
      }),
    ],
  },
  {
    id: 'a1-5',
    level: 'A1',
    theme: 'work',
    title: { th: 'ตารางงาน วันและเวลา', en: 'Work Schedules: Days & Times' },
    canDo: [
      { th: 'บอกวันและเวลาทำงานหรือนัดหมายได้', en: 'I can say days and times for work and appointments.' },
      { th: 'ใช้ in / on / at กับเวลาได้ถูกต้อง', en: 'I can use in / on / at with time.' },
    ],
    vocab: [
      { word: 'appointment', th: 'นัดหมาย', example: 'I have an appointment at 3 p.m.' },
      { word: 'weekday', th: 'วันธรรมดา (จันทร์–ศุกร์)', example: 'I work on weekdays.' },
      { word: 'lunch break', th: 'พักกลางวัน', example: 'Our lunch break is at noon.' },
      { word: 'day off', th: 'วันหยุด (ของตัวเอง)', example: 'Tuesday is my day off.' },
      { word: 'busy', th: 'ยุ่ง, ไม่ว่าง', example: "I'm busy on Monday morning." },
    ],
    grammar: {
      title: 'Prepositions of time: in / on / at',
      explain: {
        th: 'at ใช้กับเวลาที่แน่นอน (at 9 o\'clock, at noon) on ใช้กับวันและวันที่ (on Monday, on 5 May) in ใช้กับช่วงเวลายาว ๆ (in the morning, in June, in 2025)',
        en: 'Use at for clock times (at 9, at noon), on for days and dates (on Monday, on 5 May), and in for longer periods (in the morning, in June, in 2025).',
      },
      examples: ['The meeting is at 10:30.', 'I start my new job on Monday.', "We're busy in December."],
    },
    practice: [
      q('p-a1-5-1', 'grammar', 'The training starts ___ 9 a.m.', ['at', 'on', 'in', 'by'], {
        explain: { th: 'เวลาที่แน่นอนใช้ at', en: 'Clock time: at.' },
      }),
      q('p-a1-5-2', 'grammar', 'We have a team meeting ___ Friday.', ['on', 'at', 'in', 'to'], {
        explain: { th: 'วันใช้ on', en: 'Days: on.' },
      }),
      q('p-a1-5-3', 'grammar', 'I check my emails ___ the morning.', ['in', 'on', 'at', 'by'], {
        explain: { th: 'in the morning / afternoon / evening', en: 'in the morning / afternoon / evening.' },
      }),
      q('p-a1-5-4', 'vocabulary', 'I don\'t work on Wednesday. It\'s my ___.', ['day off', 'weekday', 'lunch break', 'appointment'], {
        explain: { th: 'day off = วันหยุดของตัวเอง', en: 'day off = a day you do not work.' },
      }),
    ],
  },
  // ───────────── A2 ─────────────
  {
    id: 'a2-3',
    level: 'A2',
    theme: 'work',
    title: { th: 'เขียนอีเมลงานแบบง่าย', en: 'Writing Simple Work Emails' },
    canDo: [
      { th: 'เขียนอีเมลสั้น ๆ ขอข้อมูลหรือขอความช่วยเหลือได้', en: 'I can write a short email to ask for information or help.' },
      { th: 'ขึ้นต้นและลงท้ายอีเมลอย่างสุภาพได้', en: 'I can open and close an email politely.' },
    ],
    vocab: [
      { word: 'Dear …', th: 'เรียน … (ขึ้นต้นอีเมล)', example: 'Dear Ms. Smith,' },
      { word: 'I would like to…', th: 'ฉันต้องการ… (สุภาพ)', example: 'I would like to book a room.' },
      { word: 'Could you…?', th: 'กรุณา… ได้ไหม', example: 'Could you send me the price list?' },
      { word: 'Best regards', th: 'ขอแสดงความนับถือ (ลงท้าย)', example: 'Best regards, Somchai' },
      { word: 'as soon as possible', th: 'โดยเร็วที่สุด', example: 'Please reply as soon as possible.' },
    ],
    grammar: {
      title: 'Polite requests: would like / could',
      explain: {
        th: 'would like + to V สุภาพกว่า want ส่วน Could you + V1…? สุภาพกว่า Can you…? ในอีเมลงานควรใช้ please และหลีกเลี่ยงคำสั่งตรง ๆ',
        en: 'would like + to-infinitive is more polite than want. Could you + verb…? is more polite than Can you…? In work emails, add please and avoid direct orders.',
      },
      examples: ['I would like to change my order.', 'Could you call me tomorrow?', 'Thank you for your help.'],
    },
    practice: [
      q('p-a2-3-1', 'grammar', 'I would like ___ a meeting next week.', ['to arrange', 'arrange', 'arranging', 'arranged'], {
        explain: { th: 'would like + to V', en: 'would like + to-infinitive.' },
      }),
      q('p-a2-3-2', 'grammar', 'Which request is the most polite?', [
        'Could you send me the file, please?',
        'Send me the file.',
        'I want the file now.',
        'You send the file.',
      ], {
        explain: { th: 'Could you… please? สุภาพที่สุด', en: 'Could you… please? is the most polite.' },
      }),
      q('p-a2-3-3', 'vocabulary', 'A good way to end a work email is "Best ___".', ['regards', 'wishes you', 'love', 'thanks you'], {
        explain: { th: 'Best regards = ลงท้ายอีเมลแบบสุภาพ', en: 'Best regards is a standard ending.' },
      }),
      q('p-a2-3-4', 'vocabulary', 'Please reply as soon as ___.', ['possible', 'possibly', 'can', 'quick'], {
        explain: { th: 'as soon as possible = โดยเร็วที่สุด', en: 'Fixed phrase: as soon as possible.' },
      }),
    ],
  },
  {
    id: 'a2-4',
    level: 'A2',
    theme: 'work',
    title: { th: 'อธิบายงานและหน้าที่ของตัวเอง', en: 'Describing Your Job' },
    canDo: [
      { th: 'อธิบายหน้าที่ประจำและงานที่กำลังทำอยู่ได้', en: 'I can describe my regular duties and current projects.' },
      { th: 'แยก present simple กับ present continuous ได้', en: 'I can choose between present simple and present continuous.' },
    ],
    vocab: [
      { word: 'be responsible for', th: 'รับผิดชอบ', example: "I'm responsible for customer service." },
      { word: 'deal with', th: 'จัดการกับ', example: 'I deal with complaints.' },
      { word: 'department', th: 'แผนก', example: 'She works in the finance department.' },
      { word: 'customer', th: 'ลูกค้า', example: 'We have many customers in Japan.' },
      { word: 'project', th: 'โครงการ', example: "I'm working on a new project." },
    ],
    grammar: {
      title: 'Present simple vs present continuous',
      explain: {
        th: 'present simple ใช้กับงานประจำ ความจริง (I manage a team.) present continuous (am/is/are + V-ing) ใช้กับสิ่งที่กำลังทำอยู่ตอนนี้หรือช่วงนี้ชั่วคราว (This month I\'m training new staff.)',
        en: "Use the present simple for routines and permanent facts (I manage a team). Use the present continuous (am/is/are + -ing) for now or temporary situations (This month I'm training new staff).",
      },
      examples: ['I usually work from 9 to 5.', "This week I'm working from home.", 'She deals with suppliers.'],
    },
    practice: [
      q('p-a2-4-1', 'grammar', 'Right now, I ___ on the annual report.', ['am working', 'work', 'works', 'worked'], {
        explain: { th: 'Right now = ตอนนี้ ใช้ present continuous', en: 'Right now: present continuous.' },
      }),
      q('p-a2-4-2', 'grammar', 'She ___ the marketing team. It\'s her job.', ['manages', 'is managing now', 'manage', 'managing'], {
        explain: { th: 'หน้าที่ประจำ ใช้ present simple', en: 'Permanent job: present simple.' },
      }),
      q('p-a2-4-3', 'vocabulary', "I'm responsible ___ training new staff.", ['for', 'of', 'to', 'with'], {
        explain: { th: 'be responsible for', en: 'responsible for.' },
      }),
      q('p-a2-4-4', 'vocabulary', 'The accountant works in the finance ___.', ['department', 'apartment', 'compartment', 'customer'], {
        explain: { th: 'department = แผนก', en: 'department = a section of a company.' },
      }),
    ],
  },
  {
    id: 'a2-5',
    level: 'A2',
    theme: 'work',
    title: { th: 'เปรียบเทียบสินค้าและบริการ', en: 'Comparing Products & Services' },
    canDo: [
      { th: 'เปรียบเทียบสินค้า ราคา หรือบริการได้', en: 'I can compare products, prices and services.' },
      { th: 'ใช้ comparative และ superlative ได้', en: 'I can use comparatives and superlatives.' },
    ],
    vocab: [
      { word: 'cheap / expensive', th: 'ถูก / แพง', example: 'Plan A is cheaper than Plan B.' },
      { word: 'reliable', th: 'เชื่อถือได้', example: 'This supplier is very reliable.' },
      { word: 'quality', th: 'คุณภาพ', example: 'Their products are high quality.' },
      { word: 'delivery', th: 'การจัดส่ง', example: 'Delivery takes three days.' },
      { word: 'option', th: 'ตัวเลือก', example: 'This is the best option for us.' },
    ],
    grammar: {
      title: 'Comparatives & superlatives',
      explain: {
        th: 'คำสั้นเติม -er / -est (cheap → cheaper → the cheapest) คำยาวใช้ more / the most (more reliable, the most expensive) คำพิเศษ: good → better → the best, bad → worse → the worst ใช้ than เมื่อเปรียบเทียบสองสิ่ง',
        en: 'Short adjectives add -er / -est; long ones use more / the most. Irregular: good → better → the best, bad → worse → the worst. Use than to compare two things.',
      },
      examples: ['This laptop is lighter than that one.', 'Their service is more reliable.', 'This is the best price in town.'],
    },
    practice: [
      q('p-a2-5-1', 'grammar', 'Supplier B is ___ than Supplier A.', ['cheaper', 'more cheap', 'cheapest', 'the cheaper'], {
        explain: { th: 'cheap เป็นคำสั้น เติม -er', en: 'Short adjective: cheaper.' },
      }),
      q('p-a2-5-2', 'grammar', 'This is ___ hotel in the city.', ['the most expensive', 'the expensivest', 'more expensive', 'most expensive than'], {
        explain: { th: 'คำยาว: the most + adj', en: 'Long adjective: the most + adjective.' },
      }),
      q('p-a2-5-3', 'grammar', 'Our new software is much ___ than the old one.', ['better', 'gooder', 'more good', 'best'], {
        explain: { th: 'good → better', en: 'good → better.' },
      }),
      q('p-a2-5-4', 'vocabulary', 'They always deliver on time. They are very ___.', ['reliable', 'expensive', 'cheap', 'quality'], {
        explain: { th: 'reliable = เชื่อถือได้', en: 'reliable = you can trust them.' },
      }),
    ],
  },
  // ───────────── B1 ─────────────
  {
    id: 'b1-3',
    level: 'B1',
    theme: 'work',
    title: { th: 'การประชุม: แสดงความคิดเห็นและข้อเสนอ', en: 'Meetings: Opinions & Suggestions' },
    canDo: [
      { th: 'แสดงความเห็น เห็นด้วย และไม่เห็นด้วยอย่างสุภาพได้', en: 'I can give opinions and agree or disagree politely.' },
      { th: 'ให้คำแนะนำด้วย should / ought to / had better ได้', en: 'I can make suggestions with should / ought to / had better.' },
    ],
    vocab: [
      { word: 'In my opinion,', th: 'ในความเห็นของฉัน', example: 'In my opinion, we need more staff.' },
      { word: 'I see your point, but…', th: 'เข้าใจประเด็นของคุณ แต่…', example: 'I see your point, but the budget is limited.' },
      { word: 'agenda', th: 'วาระการประชุม', example: "Let's move to the next item on the agenda." },
      { word: 'action point', th: 'สิ่งที่ต้องทำต่อ (หลังประชุม)', example: 'Who is responsible for this action point?' },
      { word: 'How about…?', th: '… ดีไหม (เสนอ)', example: 'How about meeting on Thursday?' },
    ],
    grammar: {
      title: 'should / ought to / had better',
      explain: {
        th: 'should และ ought to + V1 ใช้ให้คำแนะนำทั่วไป had better (\'d better) + V1 หนักแน่นกว่า มักมีผลเสียถ้าไม่ทำ ส่วน How about / What about + V-ing ใช้เสนอความคิด',
        en: "should and ought to + verb give general advice. had better ('d better) + verb is stronger, suggesting a bad result if you don't. How about / What about + -ing make suggestions.",
      },
      examples: ['We should ask the client first.', "You'd better back up the files before the update.", 'How about using a shared calendar?'],
    },
    practice: [
      q('p-b1-3-1', 'grammar', 'How about ___ the meeting online?', ['having', 'to have', 'have', 'had'], {
        explain: { th: 'How about + V-ing', en: 'How about + -ing.' },
      }),
      q('p-b1-3-2', 'grammar', "We'd better ___ now, or we'll miss the deadline.", ['start', 'to start', 'starting', 'started'], {
        explain: { th: "had better + V1 (ไม่มี to)", en: 'had better + base verb (no to).' },
      }),
      q('p-b1-3-3', 'vocabulary', 'Which phrase disagrees most politely?', [
        'I see your point, but I think…',
        "That's wrong.",
        'No way.',
        "You don't understand.",
      ], {
        explain: { th: 'รับฟังก่อนแล้วค่อยเสนอความเห็นต่าง', en: 'Acknowledge the other view first.' },
      }),
      q('p-b1-3-4', 'vocabulary', 'The list of topics for a meeting is the ___.', ['agenda', 'minutes', 'action point', 'schedule'], {
        explain: { th: 'agenda = วาระการประชุม (minutes = บันทึกการประชุม)', en: 'agenda = topics to discuss; minutes = the notes.' },
      }),
    ],
  },
  {
    id: 'b1-4',
    level: 'B1',
    theme: 'work',
    title: { th: 'รับสายและฝากข้อความ', en: 'Phone Calls & Messages' },
    canDo: [
      { th: 'รับฝากข้อความและส่งต่อให้เพื่อนร่วมงานได้', en: 'I can take a message and pass it on to a colleague.' },
      { th: 'ใช้ reported speech พื้นฐานได้ (said / told / asked)', en: 'I can use basic reported speech (said / told / asked).' },
    ],
    vocab: [
      { word: 'take a message', th: 'รับฝากข้อความ', example: "He's out. Can I take a message?" },
      { word: 'get back to someone', th: 'ติดต่อกลับ', example: "I'll get back to you this afternoon." },
      { word: 'put someone through', th: 'โอนสาย', example: "I'll put you through to the sales team." },
      { word: 'available', th: 'ว่าง, สะดวก', example: "She isn't available at the moment." },
      { word: 'urgent', th: 'ด่วน', example: 'Is it urgent?' },
    ],
    grammar: {
      title: 'Reported speech: said, told, asked',
      explain: {
        th: 'เมื่อเล่าต่อคำพูด มักเลื่อนเวลาถอยหลังหนึ่งขั้น (am → was, will → would, can → could) said ไม่ต้องมีกรรม แต่ told ต้องมีกรรม (told me) คำขอร้องใช้ asked + someone + to V',
        en: 'When reporting, tenses usually move back (am → was, will → would, can → could). said has no object; told needs one (told me). Requests: asked + person + to-infinitive.',
      },
      examples: ['He said he would call back.', 'She told me the meeting was cancelled.', 'Mr. Lee asked you to send the invoice.'],
    },
    practice: [
      q('p-b1-4-1', 'grammar', 'She ___ me that she was busy.', ['told', 'said', 'spoke', 'talked'], {
        explain: { th: 'told + กรรม (me)', en: 'told + object (me).' },
      }),
      q('p-b1-4-2', 'grammar', '"I will call you back." → He said he ___ me back.', ['would call', 'will call', 'calls', 'is calling'], {
        explain: { th: 'will → would', en: 'will → would.' },
      }),
      q('p-b1-4-3', 'grammar', 'The client asked us ___ the delivery date.', ['to confirm', 'confirm', 'confirming', 'that confirm'], {
        explain: { th: 'asked + someone + to V', en: 'asked + person + to-infinitive.' },
      }),
      q('p-b1-4-4', 'vocabulary', 'Please hold. I\'ll put you ___ to the manager.', ['through', 'on', 'up', 'across'], {
        explain: { th: 'put someone through = โอนสาย', en: 'put through = connect a call.' },
      }),
    ],
  },
  {
    id: 'b1-5',
    level: 'B1',
    theme: 'work',
    title: { th: 'สัมภาษณ์งาน', en: 'Job Interviews' },
    canDo: [
      { th: 'พูดถึงจุดแข็ง ประสบการณ์ และเป้าหมายในการสัมภาษณ์งานได้', en: 'I can talk about my strengths, experience and goals in an interview.' },
      { th: 'ใช้ gerund และ infinitive หลังกริยาได้ถูกต้อง', en: 'I can use gerunds and infinitives after verbs correctly.' },
    ],
    vocab: [
      { word: 'strength / weakness', th: 'จุดแข็ง / จุดอ่อน', example: 'My main strength is problem-solving.' },
      { word: 'apply for', th: 'สมัคร (งาน)', example: "I'm applying for the sales manager position." },
      { word: 'experience in', th: 'ประสบการณ์ด้าน', example: 'I have five years of experience in logistics.' },
      { word: 'team player', th: 'คนที่ทำงานเป็นทีมได้ดี', example: "I'm a good team player." },
      { word: 'career goal', th: 'เป้าหมายในอาชีพ', example: 'My career goal is to lead a team.' },
    ],
    grammar: {
      title: 'Gerunds & infinitives after verbs',
      explain: {
        th: 'กริยาบางตัวตามด้วย V-ing เช่น enjoy, finish, avoid, consider บางตัวตามด้วย to V เช่น want, hope, plan, decide, would like หลัง preposition (interested in, good at) ใช้ V-ing เสมอ',
        en: 'Some verbs take -ing (enjoy, finish, avoid, consider); others take to-infinitive (want, hope, plan, decide, would like). After prepositions (interested in, good at) always use -ing.',
      },
      examples: ['I enjoy working with customers.', 'I hope to develop my leadership skills.', "I'm good at solving problems."],
    },
    practice: [
      q('p-b1-5-1', 'grammar', 'I enjoy ___ with people from different cultures.', ['working', 'to work', 'work', 'worked'], {
        explain: { th: 'enjoy + V-ing', en: 'enjoy + -ing.' },
      }),
      q('p-b1-5-2', 'grammar', 'I decided ___ for this position because I love the company.', ['to apply', 'applying', 'apply', 'applied'], {
        explain: { th: 'decide + to V', en: 'decide + to-infinitive.' },
      }),
      q('p-b1-5-3', 'grammar', "I'm interested in ___ more about digital marketing.", ['learning', 'to learn', 'learn', 'learned'], {
        explain: { th: 'หลัง preposition (in) ใช้ V-ing', en: 'After a preposition: -ing.' },
      }),
      q('p-b1-5-4', 'vocabulary', 'I have three years of experience ___ customer service.', ['in', 'of', 'at', 'on'], {
        explain: { th: 'experience in + สาขา', en: 'experience in + field.' },
      }),
    ],
  },
  // ───────────── B2 ─────────────
  {
    id: 'b2-3',
    level: 'B2',
    theme: 'work',
    title: { th: 'การต่อรองและเจรจา', en: 'Negotiating' },
    canDo: [
      { th: 'เสนอเงื่อนไขและต่อรองได้อย่างสุภาพ', en: 'I can make offers and set conditions politely.' },
      { th: 'ใช้ provided that / as long as / unless ได้', en: 'I can use provided that / as long as / unless.' },
    ],
    vocab: [
      { word: 'compromise', th: 'การประนีประนอม', example: "Let's find a compromise." },
      { word: 'terms', th: 'เงื่อนไข (สัญญา)', example: 'We accept the payment terms.' },
      { word: 'bulk order', th: 'การสั่งซื้อจำนวนมาก', example: 'Do you offer discounts on bulk orders?' },
      { word: 'meet someone halfway', th: 'ยอมกันคนละครึ่ง', example: 'Could you meet us halfway on the price?' },
      { word: 'deal', th: 'ข้อตกลง', example: "It's a deal!" },
    ],
    grammar: {
      title: 'Conditions: provided that, as long as, unless, if … were to',
      explain: {
        th: 'provided (that) และ as long as = ถ้า (มีเงื่อนไขชัดเจน) unless = ถ้าไม่ ตามด้วย present simple เมื่อพูดถึงอนาคต If we were to … ใช้เสนอแบบสมมติ ฟังนุ่มนวลกว่าในการเจรจา',
        en: 'provided (that) and as long as mean "only if"; unless means "if not" — all take the present simple for the future. If we were to… makes a hypothetical, softer offer.',
      },
      examples: [
        'We can offer 10% off provided that you order 500 units.',
        "We'll deliver on Monday as long as you pay in advance.",
        'If we were to sign a two-year contract, would you lower the price?',
      ],
    },
    practice: [
      q('p-b2-3-1', 'grammar', 'We will accept the price ___ you deliver within a week.', ['provided that', 'unless', 'despite', 'in case of'], {
        explain: { th: 'provided that = ถ้า (เงื่อนไข)', en: 'provided that = only if.' },
      }),
      q('p-b2-3-2', 'grammar', "We can't continue ___ you reduce the price.", ['unless', 'as long as', 'provided', 'if'], {
        explain: { th: 'unless = ถ้าไม่', en: 'unless = if not.' },
      }),
      q('p-b2-3-3', 'grammar', 'If we ___ to increase the order, could you offer free shipping?', ['were', 'will', 'are going', 'would'], {
        explain: { th: 'If we were to … ข้อเสนอแบบสมมติ', en: 'If we were to… = hypothetical offer.' },
      }),
      q('p-b2-3-4', 'vocabulary', 'Neither side got everything they wanted; it was a ___.', ['compromise', 'complaint', 'compliment', 'commitment'], {
        explain: { th: 'compromise = การประนีประนอม', en: 'compromise = each side gives something.' },
      }),
    ],
  },
  {
    id: 'b2-4',
    level: 'B2',
    theme: 'work',
    title: { th: 'การนำเสนองาน', en: 'Giving Presentations' },
    canDo: [
      { th: 'เปิด ดำเนิน และปิดการนำเสนอได้อย่างเป็นระบบ', en: 'I can open, structure and close a presentation.' },
      { th: 'ใช้คำเชื่อมนำทางผู้ฟัง (signposting) ได้', en: 'I can use signposting language to guide the audience.' },
    ],
    vocab: [
      { word: "I'd like to begin by…", th: 'ขอเริ่มด้วย…', example: "I'd like to begin by looking at last year's results." },
      { word: 'Moving on to…', th: 'ต่อไปที่…', example: 'Moving on to our plans for next year…' },
      { word: 'As you can see,', th: 'อย่างที่เห็น', example: 'As you can see, sales have risen.' },
      { word: 'To sum up,', th: 'โดยสรุป', example: 'To sum up, we need to invest in training.' },
      { word: 'figure', th: 'ตัวเลข, แผนภาพ', example: 'The figures show a 15% increase.' },
    ],
    grammar: {
      title: 'Signposting & describing trends',
      explain: {
        th: 'ใช้คำนำทางเพื่อบอกโครงสร้าง: First / Next / Finally, Moving on to…, To sum up… บรรยายแนวโน้มด้วยกริยา rise, increase, fall, drop + คำวิเศษณ์ sharply, slightly, steadily หรือคำนาม a sharp rise, a slight fall',
        en: 'Signpost the structure: First / Next / Finally, Moving on to…, To sum up… Describe trends with rise, increase, fall, drop + sharply, slightly, steadily — or nouns: a sharp rise, a slight fall.',
      },
      examples: ['Sales rose sharply in the third quarter.', 'There was a slight drop in costs.', "Let's now turn to the budget."],
    },
    practice: [
      q('p-b2-4-1', 'vocabulary', 'Which phrase introduces a NEW section of a talk?', ['Moving on to…', 'To sum up,', 'As I said,', 'Thank you for listening.'], {
        explain: { th: 'Moving on to… = เปลี่ยนหัวข้อ', en: 'Moving on to… starts a new section.' },
      }),
      q('p-b2-4-2', 'grammar', 'Profits increased ___ from 2% to 25%.', ['sharply', 'sharp', 'slightly', 'steady'], {
        explain: { th: 'เพิ่มขึ้นมาก ใช้ sharply (adverb)', en: 'A big change: sharply (adverb).' },
      }),
      q('p-b2-4-3', 'grammar', 'There was a ___ fall in sales, only 1%.', ['slight', 'slightly', 'sharp', 'dramatic'], {
        explain: { th: 'หน้านามใช้ adjective: a slight fall', en: 'Before a noun use the adjective: a slight fall.' },
      }),
      q('p-b2-4-4', 'vocabulary', '___, our three priorities are quality, speed and cost.', ['To sum up', 'For a start', 'Moving on', 'By the way'], {
        explain: { th: 'To sum up = โดยสรุป', en: 'To sum up = in conclusion.' },
      }),
    ],
  },
  {
    id: 'b2-5',
    level: 'B2',
    theme: 'work',
    title: { th: 'รับมือกับข้อร้องเรียนของลูกค้า', en: 'Handling Complaints' },
    canDo: [
      { th: 'รับฟังและตอบข้อร้องเรียนอย่างมืออาชีพได้', en: 'I can respond to complaints professionally.' },
      { th: 'ใช้ภาษานุ่มนวล (softeners) ในสถานการณ์ตึงเครียดได้', en: 'I can use softening language in difficult situations.' },
    ],
    vocab: [
      { word: 'I apologise for…', th: 'ขออภัยสำหรับ…', example: 'I apologise for the delay.' },
      { word: "I'm afraid…", th: 'เสียใจด้วยว่า… (บอกข่าวร้ายอย่างสุภาพ)', example: "I'm afraid we can't offer a refund." },
      { word: 'inconvenience', th: 'ความไม่สะดวก', example: 'Sorry for any inconvenience.' },
      { word: 'look into', th: 'ตรวจสอบ', example: "I'll look into the problem right away." },
      { word: 'compensation', th: 'ค่าชดเชย', example: 'We will offer you compensation.' },
    ],
    grammar: {
      title: 'Softeners: Would you mind…?, I\'m afraid, It seems',
      explain: {
        th: 'Would you mind + V-ing…? ใช้ขอร้องอย่างสุภาพมาก I\'m afraid… ใช้บอกข่าวที่ไม่ดี It seems / There seems to be… ช่วยลดการกล่าวโทษ หลีกเลี่ยงการพูดว่า "You made a mistake" ให้ใช้ "There seems to have been a misunderstanding."',
        en: "Would you mind + -ing…? is a very polite request. I'm afraid… introduces bad news. It seems / There seems to be… avoids blame: say \"There seems to have been a misunderstanding\" rather than \"You made a mistake\".",
      },
      examples: [
        'Would you mind sending us a photo of the damage?',
        "I'm afraid the item is out of stock.",
        'There seems to be a problem with your account.',
      ],
    },
    practice: [
      q('p-b2-5-1', 'grammar', 'Would you mind ___ your order number?', ['giving me', 'to give me', 'give me', 'gave me'], {
        explain: { th: 'Would you mind + V-ing', en: 'Would you mind + -ing.' },
      }),
      q('p-b2-5-2', 'vocabulary', 'Which sentence is the most professional?', [
        'There seems to have been a misunderstanding.',
        'You made a mistake.',
        "That's not our problem.",
        'You read it wrong.',
      ], {
        explain: { th: 'ใช้ภาษาที่ไม่กล่าวโทษลูกค้า', en: 'Avoid blaming the customer.' },
      }),
      q('p-b2-5-3', 'vocabulary', "___, we can't replace the item after 30 days.", ["I'm afraid", "I'm sorry for", 'Unfortunate', 'Luckily'], {
        explain: { th: "I'm afraid = บอกข่าวร้ายอย่างสุภาพ", en: "I'm afraid introduces bad news politely." },
      }),
      q('p-b2-5-4', 'vocabulary', "I'll ___ the problem and call you back today.", ['look into', 'look after', 'look up to', 'look forward'], {
        explain: { th: 'look into = ตรวจสอบ', en: 'look into = investigate.' },
      }),
    ],
  },
  // ───────────── C1 ─────────────
  {
    id: 'c1-3',
    level: 'C1',
    theme: 'work',
    title: { th: 'เขียนข้อเสนอเชิงโน้มน้าว', en: 'Persuasive Proposals' },
    canDo: [
      { th: 'เขียนข้อเสนอโครงการที่กระชับและโน้มน้าวได้', en: 'I can write concise, persuasive project proposals.' },
      { th: 'ใช้ participle clauses ทำให้ประโยคกระชับได้', en: 'I can use participle clauses to write concisely.' },
    ],
    vocab: [
      { word: 'cost-effective', th: 'คุ้มค่า', example: 'This is a cost-effective solution.' },
      { word: 'streamline', th: 'ทำให้กระบวนการคล่องตัว', example: 'We aim to streamline approvals.' },
      { word: 'return on investment (ROI)', th: 'ผลตอบแทนจากการลงทุน', example: 'The expected ROI is 20%.' },
      { word: 'feasible', th: 'เป็นไปได้, ทำได้จริง', example: 'The plan is technically feasible.' },
      { word: 'outline', th: 'สรุปภาพรวม', example: 'This proposal outlines three options.' },
    ],
    grammar: {
      title: 'Participle clauses',
      explain: {
        th: 'ใช้ V-ing (ความหมาย active) หรือ V3 (ความหมาย passive) แทนอนุประโยคเพื่อให้กระชับ ประธานของทั้งสองส่วนต้องเป็นตัวเดียวกัน Having + V3 ใช้เมื่อเหตุการณ์แรกเกิดก่อน',
        en: 'Replace a clause with -ing (active) or a past participle (passive) for concision. Both parts must share the same subject. Having + past participle shows the first action happened earlier.',
      },
      examples: [
        'Having reviewed the data, we recommend Option B.',
        'Launched in 2023, the app now has two million users.',
        'Using cloud storage, the team cut costs by 30%.',
      ],
    },
    practice: [
      q('p-c1-3-1', 'grammar', '___ the survey results, the board approved the plan.', ['Having analysed', 'Analysed', 'To analyse', 'Having analysing'], {
        explain: { th: 'วิเคราะห์ก่อนแล้วจึงอนุมัติ: Having + V3', en: 'Earlier action: Having + past participle.' },
      }),
      q('p-c1-3-2', 'grammar', '___ in 1998, the company is now a market leader.', ['Founded', 'Founding', 'Having founding', 'To found'], {
        explain: { th: 'บริษัทถูกก่อตั้ง (passive) ใช้ V3', en: 'Passive meaning: past participle.' },
      }),
      q('p-c1-3-3', 'vocabulary', 'The new process will ___ production and reduce delays.', ['streamline', 'streamer', 'mainstream', 'stream off'], {
        explain: { th: 'streamline = ทำให้คล่องตัว', en: 'streamline = make more efficient.' },
      }),
      q('p-c1-3-4', 'vocabulary', 'Before investing, we must check that the project is ___.', ['feasible', 'feeble', 'fearful', 'factual'], {
        explain: { th: 'feasible = ทำได้จริง', en: 'feasible = possible to do.' },
      }),
    ],
  },
  {
    id: 'c1-4',
    level: 'C1',
    theme: 'work',
    title: { th: 'วิเคราะห์ปัญหาและให้ฟีดแบ็กอย่างนุ่มนวล', en: 'Analysing Problems & Diplomatic Feedback' },
    canDo: [
      { th: 'คาดเดาสาเหตุของปัญหาที่เกิดขึ้นแล้วได้', en: 'I can speculate about the causes of past problems.' },
      { th: 'ให้ฟีดแบ็กเชิงวิจารณ์อย่างสุภาพได้', en: 'I can give critical feedback diplomatically.' },
    ],
    vocab: [
      { word: 'root cause', th: 'สาเหตุที่แท้จริง', example: 'We need to find the root cause.' },
      { word: 'overlook', th: 'มองข้าม', example: 'A key detail was overlooked.' },
      { word: 'constructive', th: 'สร้างสรรค์', example: 'Thanks for the constructive feedback.' },
      { word: 'room for improvement', th: 'ยังพัฒนาได้อีก', example: "There's still some room for improvement." },
      { word: 'in hindsight', th: 'เมื่อมองย้อนกลับไป', example: 'In hindsight, we started too late.' },
    ],
    grammar: {
      title: 'Past modals of deduction & criticism',
      explain: {
        th: 'must have + V3 = แน่ใจว่าเกิดขึ้น, can\'t have + V3 = แน่ใจว่าไม่ได้เกิด, might/may/could have + V3 = อาจจะ ส่วน should have + V3 / could have + V3 ใช้วิจารณ์อย่างนุ่มนวลว่าควรทำแต่ไม่ได้ทำ',
        en: "must have + past participle = almost certain; can't have = certainly not; might/may/could have = possible. should have / could have + past participle softly criticise what didn't happen.",
      },
      examples: [
        'The file must have been deleted by mistake.',
        "He can't have seen the email — he was on leave.",
        'We could have tested the system more thoroughly.',
      ],
    },
    practice: [
      q('p-c1-4-1', 'grammar', 'The server ___ overheated; it was working fine this morning.', ['must have', 'must', 'should', "can't"], {
        explain: { th: 'แน่ใจว่าเกิดขึ้นแล้ว: must have + V3', en: 'Certain about the past: must have + past participle.' },
      }),
      q('p-c1-4-2', 'grammar', "She ___ the report — she's been on holiday all week.", ["can't have written", 'must have written', "shouldn't write", "can't write"], {
        explain: { th: "เป็นไปไม่ได้ในอดีต: can't have + V3", en: "Impossible in the past: can't have + past participle." },
      }),
      q('p-c1-4-3', 'grammar', 'Which is the most diplomatic feedback?', [
        'It might have been worth checking the figures again.',
        'You got the figures wrong.',
        'Your figures are terrible.',
        'Why didn\'t you check?',
      ], {
        explain: { th: 'might have been worth… ฟังนุ่มนวล', en: 'might have been worth… sounds tactful.' },
      }),
      q('p-c1-4-4', 'vocabulary', 'In ___, we should have consulted the users earlier.', ['hindsight', 'foresight', 'insight', 'oversight'], {
        explain: { th: 'in hindsight = เมื่อมองย้อนกลับไป', en: 'in hindsight = looking back.' },
      }),
    ],
  },
  {
    id: 'c1-5',
    level: 'C1',
    theme: 'work',
    title: { th: 'ดำเนินการประชุมและการอภิปราย', en: 'Leading Meetings & Discussions' },
    canDo: [
      { th: 'ควบคุมการประชุม ดึงความเห็น และสรุปผลได้', en: 'I can chair a meeting, invite contributions and summarise outcomes.' },
      { th: 'ใช้ phrasal verbs และ collocations ทางธุรกิจได้อย่างเป็นธรรมชาติ', en: 'I can use business phrasal verbs and collocations naturally.' },
    ],
    vocab: [
      { word: 'bring up', th: 'ยกประเด็นขึ้นมา', example: "I'd like to bring up the issue of overtime." },
      { word: 'go over', th: 'ทบทวน', example: "Let's go over the main points." },
      { word: 'reach a consensus', th: 'ได้ข้อสรุปร่วมกัน', example: 'We need to reach a consensus today.' },
      { word: 'table (a motion)', th: 'เสนอเรื่องเข้าที่ประชุม', example: "I'd like to table a proposal." },
      { word: 'stick to the point', th: 'ไม่ออกนอกประเด็น', example: "Let's try to stick to the point." },
    ],
    grammar: {
      title: 'Chairing language & phrasal verbs',
      explain: {
        th: 'ภาษาของประธานที่ประชุม: เปิด (Let\'s get started), เชิญความเห็น (What\'s your take on this?), ดึงกลับเข้าเรื่อง (Let\'s park that for now), สรุป (So, to recap…) phrasal verbs ที่แยกได้ (bring it up, go over it) วางกรรมที่เป็นสรรพนามไว้ตรงกลาง',
        en: "Chairing language: opening (Let's get started), inviting views (What's your take on this?), refocusing (Let's park that for now), summarising (So, to recap…). With separable phrasal verbs, pronoun objects go in the middle (bring it up).",
      },
      examples: ["What's your take on this, Anan?", "Let's park that issue and come back to it later.", 'So, to recap: Mai will follow up with the supplier.'],
    },
    practice: [
      q('p-c1-5-1', 'vocabulary', 'A colleague is going off topic. You say: "Let\'s ___ that for now and return to the budget."', [
        'park',
        'stop',
        'drop off',
        'leave out',
      ], {
        explain: { th: 'park an issue = พักประเด็นไว้ก่อน', en: 'park an issue = postpone discussing it.' },
      }),
      q('p-c1-5-2', 'grammar', 'That is an important point. Could you ___ at the next meeting?', ['bring it up', 'bring up it', 'bring it on', 'up bring it'], {
        explain: { th: 'สรรพนามกรรมอยู่ตรงกลาง: bring it up', en: 'Pronoun in the middle: bring it up.' },
      }),
      q('p-c1-5-3', 'vocabulary', 'After a long discussion, the team finally reached a ___.', ['consensus', 'consent', 'census', 'consequence'], {
        explain: { th: 'reach a consensus = ได้ข้อสรุปร่วมกัน', en: 'Collocation: reach a consensus.' },
      }),
      q('p-c1-5-4', 'vocabulary', 'Which phrase invites someone\'s opinion?', ["What's your take on this?", "Let's wrap up.", 'Moving swiftly on.', "That's beside the point."], {
        explain: { th: "What's your take on this? = คุณคิดอย่างไร", en: "What's your take on this? = What do you think?" },
      }),
    ],
  },
  // ───────────── C2 ─────────────
  {
    id: 'c2-3',
    level: 'C2',
    theme: 'work',
    title: { th: 'งานเขียนระดับผู้บริหาร: กระชับและทรงพลัง', en: 'Executive Writing: Concision' },
    canDo: [
      { th: 'เขียนสรุปสำหรับผู้บริหารที่กระชับและแม่นยำได้', en: 'I can write concise, precise executive summaries.' },
      { th: 'ใช้ nominalisation อย่างเหมาะสม และรู้ว่าเมื่อไรควรเลี่ยง', en: 'I can use nominalisation appropriately — and know when to avoid it.' },
    ],
    vocab: [
      { word: 'executive summary', th: 'บทสรุปสำหรับผู้บริหาร', example: 'Put the key figures in the executive summary.' },
      { word: 'salient', th: 'โดดเด่น, สำคัญที่สุด', example: 'Here are the salient points.' },
      { word: 'mitigate', th: 'บรรเทา, ลดผลกระทบ', example: 'These steps will mitigate the risk.' },
      { word: 'leverage', th: 'ใช้ประโยชน์จาก', example: 'We can leverage our existing network.' },
      { word: 'bottom line', th: 'ประเด็นสำคัญที่สุด / ผลกำไรสุทธิ', example: 'The bottom line is we need to cut costs.' },
    ],
    grammar: {
      title: 'Nominalisation & concision',
      explain: {
        th: 'Nominalisation คือเปลี่ยนกริยา/คุณศัพท์เป็นคำนาม (decide → decision) ทำให้ภาษาดูเป็นทางการและรวบข้อมูลได้มาก แต่ถ้าใช้มากเกินไปจะอ่านยาก งานเขียนผู้บริหารที่ดีจึงตัดคำฟุ่มเฟือย (in order to → to, due to the fact that → because) และใช้กริยาที่ทรงพลัง',
        en: 'Nominalisation turns verbs/adjectives into nouns (decide → decision), making writing formal and dense — but overuse hurts readability. Strong executive writing cuts filler (in order to → to; due to the fact that → because) and prefers strong verbs.',
      },
      examples: [
        'Wordy: We made a decision to carry out an investigation.',
        'Concise: We decided to investigate.',
        'Formal noun phrase: The implementation of the policy led to a reduction in costs.',
      ],
    },
    practice: [
      q('p-c2-3-1', 'grammar', 'Which is the most concise version?', [
        'We will review the contract.',
        'We will carry out a review of the contract.',
        'A review of the contract will be carried out by us.',
        'We are going to be conducting a review process of the contract.',
      ], {
        explain: { th: 'ใช้กริยาตรง ๆ (review) กระชับที่สุด', en: 'A direct verb is most concise.' },
      }),
      q('p-c2-3-2', 'vocabulary', 'Replace "due to the fact that" with one word:', ['because', 'despite', 'although', 'whereas'], {
        explain: { th: 'due to the fact that = because', en: 'due to the fact that = because.' },
      }),
      q('p-c2-3-3', 'vocabulary', 'Additional staff training should ___ the risk of errors.', ['mitigate', 'militate', 'mediate', 'migrate'], {
        explain: { th: 'mitigate the risk = ลดความเสี่ยง (militate against คนละความหมาย)', en: 'mitigate a risk; militate against is different.' },
      }),
      q('p-c2-3-4', 'vocabulary', 'The report highlights only the most ___ findings.', ['salient', 'saline', 'silent', 'sallow'], {
        explain: { th: 'salient = สำคัญ โดดเด่น', en: 'salient = most important.' },
      }),
    ],
  },
  {
    id: 'c2-4',
    level: 'C2',
    theme: 'work',
    title: { th: 'การสื่อสารข้ามวัฒนธรรม', en: 'Cross-cultural Communication' },
    canDo: [
      { th: 'ตีความความหมายแฝงในภาษาสุภาพแบบอังกฤษได้', en: 'I can interpret indirect, understated English.' },
      { th: 'ใช้ ellipsis และ substitution ให้ภาษาลื่นไหลเป็นธรรมชาติ', en: 'I can use ellipsis and substitution for natural flow.' },
    ],
    vocab: [
      { word: 'understatement', th: 'การพูดให้เบากว่าความจริง', example: '"Not bad" can be British understatement for "very good".' },
      { word: 'With all due respect,', th: 'ด้วยความเคารพ (มักตามด้วยการไม่เห็นด้วย)', example: 'With all due respect, I disagree.' },
      { word: 'read between the lines', th: 'อ่านความหมายแฝง', example: 'You have to read between the lines.' },
      { word: 'rapport', th: 'ความสัมพันธ์ที่ดี', example: 'Building rapport takes time.' },
      { word: 'faux pas', th: 'การทำผิดมารยาททางสังคม', example: 'Using first names too soon can be a faux pas.' },
    ],
    grammar: {
      title: 'Ellipsis & substitution',
      explain: {
        th: 'เจ้าของภาษามักละคำที่ซ้ำ (ellipsis) หรือใช้คำแทน (substitution) เช่น so, not, do, one เพื่อไม่ให้ซ้ำซาก: "Will it be ready?" — "I hope so." / "I\'m afraid not." / "She said she\'d call, and she did."',
        en: 'Fluent speakers omit repeated words (ellipsis) or substitute so, not, do, one: "Will it be ready?" — "I hope so." / "I\'m afraid not." / "She said she\'d call, and she did."',
      },
      examples: ['"Is the deal confirmed?" — "I believe so."', "I'd like to help, but I can't.", 'This proposal is stronger than the previous one.'],
    },
    practice: [
      q('p-c2-4-1', 'grammar', '"Will the client accept?" — "I\'m afraid ___."', ['not', 'no', "don't", 'so not'], {
        explain: { th: "คำตอบปฏิเสธ: I'm afraid not", en: "Negative substitution: I'm afraid not." },
      }),
      q('p-c2-4-2', 'grammar', "He said he'd finish the report by Friday, and he ___.", ['did', 'finished', 'was', 'had'], {
        explain: { th: 'ใช้ did แทนวลีกริยาที่ซ้ำ', en: 'did replaces the repeated verb phrase.' },
      }),
      q('p-c2-4-3', 'vocabulary', 'A British manager says "That\'s an interesting idea…" in a doubtful tone. They probably mean:', [
        'They have serious doubts about it.',
        'They love the idea.',
        'They want more details immediately.',
        'They have never heard it before.',
      ], {
        explain: { th: 'ภาษาสุภาพแบบอังกฤษมักแฝงความไม่เห็นด้วย', en: 'British politeness often hides disagreement.' },
      }),
      q('p-c2-4-4', 'vocabulary', 'Calling a senior Japanese partner by their first name at the first meeting might be a ___.', ['faux pas', 'rapport', 'tour de force', 'fait accompli'], {
        explain: { th: 'faux pas = การผิดมารยาท', en: 'faux pas = a social mistake.' },
      }),
    ],
  },
  {
    id: 'c2-5',
    level: 'C2',
    theme: 'work',
    title: { th: 'การสื่อสารในภาวะวิกฤตและแถลงการณ์', en: 'Crisis Communication & Public Statements' },
    canDo: [
      { th: 'เขียนแถลงการณ์ทางการที่ระมัดระวังและน่าเชื่อถือได้', en: 'I can write careful, credible public statements.' },
      { th: 'ใช้โครงสร้าง passive reporting (It is believed that…) ได้', en: 'I can use passive reporting structures (It is believed that…).' },
    ],
    vocab: [
      { word: 'take full responsibility', th: 'รับผิดชอบอย่างเต็มที่', example: 'We take full responsibility for the error.' },
      { word: 'unprecedented', th: 'ไม่เคยเกิดขึ้นมาก่อน', example: 'We are facing unprecedented demand.' },
      { word: 'transparency', th: 'ความโปร่งใส', example: 'We are committed to full transparency.' },
      { word: 'rectify', th: 'แก้ไขให้ถูกต้อง', example: 'We are working to rectify the issue.' },
      { word: 'safeguard', th: 'ปกป้อง', example: 'New measures will safeguard customer data.' },
    ],
    grammar: {
      title: 'Passive reporting structures',
      explain: {
        th: 'ใช้รายงานข้อมูลที่ยังไม่ยืนยันหรือไม่ระบุแหล่ง: It is believed / reported / thought that + clause หรือ Subject + is said / believed / thought + to V / to have V3 (เหตุการณ์ในอดีต) ช่วยให้แถลงการณ์ระมัดระวังและเป็นกลาง',
        en: 'Report unconfirmed or unattributed information with It is believed / reported / thought that + clause, or Subject + is said / believed + to-infinitive / to have + past participle (for the past). This keeps statements cautious and neutral.',
      },
      examples: [
        'It is believed that the outage was caused by a power failure.',
        'Around 2,000 customers are thought to have been affected.',
        'The system is expected to be fully restored by midnight.',
      ],
    },
    practice: [
      q('p-c2-5-1', 'grammar', 'The breach is thought ___ last Tuesday.', ['to have occurred', 'to occur', 'occurring', 'that it occurred'], {
        explain: { th: 'เหตุการณ์ในอดีต: to have + V3', en: 'Past event: to have + past participle.' },
      }),
      q('p-c2-5-2', 'grammar', '___ that no personal data was accessed.', ['It is understood', 'It understands', 'It is understanding', 'They are understood'], {
        explain: { th: 'It is + V3 + that…', en: 'It is + past participle + that…' },
      }),
      q('p-c2-5-3', 'vocabulary', 'Our engineers are working around the clock to ___ the problem.', ['rectify', 'ratify', 'verify', 'gratify'], {
        explain: { th: 'rectify = แก้ไข (ratify = ให้สัตยาบัน)', en: 'rectify = fix; ratify = formally approve.' },
      }),
      q('p-c2-5-4', 'vocabulary', 'Which opening best suits a public apology?', [
        'We take full responsibility for this incident and sincerely apologise.',
        'Mistakes happen, so please be patient.',
        'This was not really our fault.',
        'We are sorry if anyone felt upset.',
      ], {
        explain: { th: 'แถลงการณ์ที่ดีต้องรับผิดชอบชัดเจน', en: 'A credible apology accepts responsibility clearly.' },
      }),
    ],
  },
]
