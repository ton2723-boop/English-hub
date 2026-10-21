import { q } from '../lib/question'
import type { CefrLevel, Unit } from '../types'

export const UNITS: Unit[] = [
  // ───────────── A1 ─────────────
  {
    id: 'a1-1',
    level: 'A1',
    title: { th: 'ทักทายและแนะนำตัว', en: 'Greetings & Introductions' },
    canDo: [
      { th: 'ทักทายและบอกชื่อ อายุ ประเทศของตนเองได้', en: 'I can say hello and give my name, age and country.' },
      { th: 'ถามข้อมูลพื้นฐานของผู้อื่นได้', en: 'I can ask other people for basic personal information.' },
    ],
    vocab: [
      { word: 'name', th: 'ชื่อ', example: 'My name is Ploy.' },
      { word: 'country', th: 'ประเทศ', example: 'Which country are you from?' },
      { word: 'job', th: 'งาน, อาชีพ', example: 'What is your job?' },
      { word: 'nice to meet you', th: 'ยินดีที่ได้รู้จัก', example: 'Hi, Tom. Nice to meet you.' },
      { word: 'colleague', th: 'เพื่อนร่วมงาน', example: 'This is my colleague, Mark.' },
    ],
    grammar: {
      title: 'Verb to be: am / is / are',
      explain: {
        th: 'ใช้ am กับ I, ใช้ is กับ he / she / it / คนหรือสิ่งของเอกพจน์, ใช้ are กับ you / we / they / พหูพจน์ ประโยคปฏิเสธเติม not และประโยคคำถามย้าย am/is/are ไปไว้หน้าประธาน',
        en: 'Use am with I, is with he/she/it and singular nouns, and are with you/we/they and plurals. Add not for negatives; move the verb before the subject for questions.',
      },
      examples: ["I'm a nurse.", "She isn't from Japan. She's from Korea.", 'Are you a student? — Yes, I am.'],
    },
    practice: [
      q('p-a1-1-1', 'grammar', 'We ___ from Chiang Mai.', ['are', 'is', 'am', 'be'], {
        explain: { th: 'We เป็นพหูพจน์ ใช้ are', en: 'We is plural, so use are.' },
      }),
      q('p-a1-1-2', 'grammar', '___ he your manager?', ['Is', 'Are', 'Am', 'Do'], {
        explain: { th: 'คำถามกับ he ใช้ Is ขึ้นต้น', en: 'Questions with he start with Is.' },
      }),
      q('p-a1-1-3', 'grammar', "I ___ not a doctor. I'm an engineer.", ['am', 'is', 'are', 'be'], {
        explain: { th: 'I ใช้กับ am เสมอ', en: 'I always takes am.' },
      }),
      q('p-a1-1-4', 'vocabulary', 'Someone you work with is your ___.', ['colleague', 'country', 'name', 'neighbour'], {
        explain: { th: 'colleague = เพื่อนร่วมงาน', en: 'A colleague is a person you work with.' },
      }),
    ],
  },
  {
    id: 'a1-2',
    level: 'A1',
    title: { th: 'กิจวัตรประจำวัน', en: 'Daily Routines' },
    canDo: [
      { th: 'เล่ากิจวัตรประจำวันของตนเองได้', en: 'I can describe my daily routine.' },
      { th: 'บอกเวลาและความถี่ได้ (always, usually, never)', en: 'I can talk about times and frequency (always, usually, never).' },
    ],
    vocab: [
      { word: 'get up', th: 'ตื่นนอน (ลุกจากเตียง)', example: 'I get up at six.' },
      { word: 'have breakfast', th: 'กินอาหารเช้า', example: 'We have breakfast at home.' },
      { word: 'commute', th: 'เดินทางไปทำงาน', example: 'I commute by Skytrain.' },
      { word: 'usually', th: 'โดยปกติ', example: 'She usually works late.' },
      { word: 'never', th: 'ไม่เคยเลย', example: 'He never eats meat.' },
    ],
    grammar: {
      title: 'Present simple',
      explain: {
        th: 'ใช้พูดถึงสิ่งที่ทำเป็นประจำหรือความจริงทั่วไป ประธานเอกพจน์บุรุษที่ 3 (he/she/it) เติม -s หรือ -es ที่กริยา ปฏิเสธใช้ don\'t / doesn\'t + กริยาช่องที่ 1',
        en: "Use it for habits and general facts. Add -s/-es to the verb after he/she/it. Negatives use don't / doesn't + base verb.",
      },
      examples: ['I start work at nine.', 'She watches the news every evening.', "He doesn't drink coffee."],
    },
    practice: [
      q('p-a1-2-1', 'grammar', 'My sister ___ in a bank.', ['works', 'work', 'working', 'is work'], {
        explain: { th: 'my sister = she จึงเติม -s', en: 'My sister = she, so add -s.' },
      }),
      q('p-a1-2-2', 'grammar', "They ___ like spicy food.", ["don't", "doesn't", "isn't", "aren't"], {
        explain: { th: 'They ใช้ don\'t', en: "They takes don't." },
      }),
      q('p-a1-2-3', 'grammar', '___ she go to the gym on Fridays?', ['Does', 'Do', 'Is', 'Are'], {
        explain: { th: 'คำถาม present simple กับ she ใช้ Does', en: 'Present simple questions with she use Does.' },
      }),
      q('p-a1-2-4', 'vocabulary', 'I ___ get up late. I always get up at 6 a.m.', ['never', 'usually', 'always', 'often'], {
        explain: { th: 'never = ไม่เคยเลย ตรงข้ามกับ always', en: 'never is the opposite of always.' },
      }),
    ],
  },
  // ───────────── A2 ─────────────
  {
    id: 'a2-1',
    level: 'A2',
    title: { th: 'เล่าเรื่องในอดีต', en: 'Talking about the Past' },
    canDo: [
      { th: 'เล่าสิ่งที่ทำเมื่อวันหยุดสุดสัปดาห์ที่แล้วได้', en: 'I can talk about what I did last weekend.' },
      { th: 'ใช้กริยาช่องที่ 2 ทั้งแบบปกติและไม่ปกติได้', en: 'I can use regular and irregular past verbs.' },
    ],
    vocab: [
      { word: 'last weekend', th: 'สุดสัปดาห์ที่แล้ว', example: 'What did you do last weekend?' },
      { word: 'ago', th: 'ที่ผ่านมา (เวลาก่อนหน้านี้)', example: 'I moved here two years ago.' },
      { word: 'trip', th: 'การเดินทาง, ทริป', example: 'We took a trip to Krabi.' },
      { word: 'stay', th: 'พัก, อยู่', example: 'We stayed in a small hotel.' },
      { word: 'spend (time/money)', th: 'ใช้ (เวลา/เงิน)', example: 'I spent the day at the beach.' },
    ],
    grammar: {
      title: 'Past simple',
      explain: {
        th: 'ใช้กับเหตุการณ์ที่จบแล้วในอดีต กริยาปกติเติม -ed (worked, visited) กริยาไม่ปกติต้องจำ (go → went, buy → bought) ปฏิเสธและคำถามใช้ did / didn\'t + กริยาช่องที่ 1',
        en: "Use it for finished actions in the past. Regular verbs add -ed; irregular verbs must be learned (go → went). Use did / didn't + base verb for questions and negatives.",
      },
      examples: ['I visited my parents on Sunday.', 'We went to a concert.', "Did you see the game? — No, I didn't."],
    },
    practice: [
      q('p-a2-1-1', 'grammar', 'She ___ a new phone last week.', ['bought', 'buyed', 'buys', 'buy'], {
        explain: { th: 'buy เป็นกริยาไม่ปกติ: buy → bought', en: 'buy is irregular: buy → bought.' },
      }),
      q('p-a2-1-2', 'grammar', 'Did you ___ the email?', ['send', 'sent', 'sends', 'sending'], {
        explain: { th: 'หลัง did ใช้กริยาช่องที่ 1', en: 'After did, use the base verb.' },
      }),
      q('p-a2-1-3', 'grammar', 'I moved to Bangkok five years ___.', ['ago', 'before', 'last', 'since'], {
        explain: { th: 'ระยะเวลา + ago = ... ที่แล้ว', en: 'Use time period + ago.' },
      }),
      q('p-a2-1-4', 'vocabulary', 'We ___ three nights in Phuket.', ['spent', 'took', 'made', 'did'], {
        explain: { th: 'spend time = ใช้เวลา', en: 'We spend time somewhere.' },
      }),
    ],
  },
  {
    id: 'a2-2',
    level: 'A2',
    title: { th: 'อาหารและการซื้อของ', en: 'Food & Shopping' },
    canDo: [
      { th: 'สั่งอาหารและซื้อของได้', en: 'I can order food and buy things in a shop.' },
      { th: 'ใช้ some, any, much, many ได้ถูกต้อง', en: 'I can use some, any, much and many correctly.' },
    ],
    vocab: [
      { word: 'receipt', th: 'ใบเสร็จ', example: 'Can I have the receipt, please?' },
      { word: 'discount', th: 'ส่วนลด', example: 'Is there a discount for members?' },
      { word: 'bill', th: 'บิล, ค่าใช้จ่าย', example: 'Could we have the bill, please?' },
      { word: 'ingredient', th: 'ส่วนผสม, วัตถุดิบ', example: 'What ingredients do we need?' },
      { word: 'Would you like…?', th: 'คุณต้องการ...ไหม (สุภาพ)', example: 'Would you like some water?' },
    ],
    grammar: {
      title: 'Countable / uncountable nouns: some, any, much, many',
      explain: {
        th: 'คำนามนับได้ใช้ many (how many?) คำนามนับไม่ได้ เช่น water, money, rice ใช้ much (how much?) ใช้ some ในประโยคบอกเล่าและการเสนอ/ขอ ใช้ any ในประโยคปฏิเสธและคำถามทั่วไป',
        en: 'Use many with countable nouns and much with uncountable nouns (water, money, rice). Use some in positive sentences, offers and requests; use any in negatives and most questions.',
      },
      examples: ['How many eggs do we need?', "We don't have much time.", 'Would you like some tea?'],
    },
    practice: [
      q('p-a2-2-1', 'grammar', 'How ___ money do you have?', ['much', 'many', 'any', 'some'], {
        explain: { th: 'money นับไม่ได้ ใช้ much', en: 'money is uncountable, so use much.' },
      }),
      q('p-a2-2-2', 'grammar', 'There are ___ apples in the bag.', ['some', 'any', 'much', 'a'], {
        explain: { th: 'ประโยคบอกเล่า + นามพหูพจน์ ใช้ some', en: 'Positive sentence with a plural noun: some.' },
      }),
      q('p-a2-2-3', 'grammar', "We don't have ___ bread.", ['any', 'some', 'many', 'a'], {
        explain: { th: 'ประโยคปฏิเสธใช้ any', en: 'Negatives use any.' },
      }),
      q('p-a2-2-4', 'vocabulary', 'At a restaurant, you ask for the ___ when you want to pay.', [
        'bill',
        'receipt',
        'menu',
        'discount',
      ], {
        explain: { th: 'bill = บิลเรียกเก็บเงิน (receipt คือใบเสร็จหลังจ่ายแล้ว)', en: 'You ask for the bill before paying; a receipt comes after.' },
      }),
    ],
  },
  // ───────────── B1 ─────────────
  {
    id: 'b1-1',
    level: 'B1',
    title: { th: 'ประสบการณ์ชีวิต', en: 'Life Experiences' },
    canDo: [
      { th: 'เล่าประสบการณ์ที่เคยทำได้', en: 'I can talk about experiences I have had.' },
      { th: 'แยกการใช้ present perfect กับ past simple ได้', en: 'I can choose between the present perfect and past simple.' },
    ],
    vocab: [
      { word: 'ever', th: 'เคย (ใช้ในคำถาม)', example: 'Have you ever been to Japan?' },
      { word: 'already', th: 'แล้ว (เร็วกว่าที่คิด)', example: "I've already finished." },
      { word: 'yet', th: 'ยัง (ใช้ในคำถาม/ปฏิเสธ)', example: "Has he called yet?" },
      { word: 'achievement', th: 'ความสำเร็จ', example: 'Running a marathon was a big achievement.' },
      { word: 'abroad', th: 'ต่างประเทศ', example: "I've never worked abroad." },
    ],
    grammar: {
      title: 'Present perfect vs past simple',
      explain: {
        th: 'present perfect (have/has + V3) ใช้กับประสบการณ์หรือเหตุการณ์ที่ไม่ระบุเวลา หรือยังเกี่ยวข้องกับปัจจุบัน ใช้ for (ระยะเวลา) และ since (จุดเริ่มต้น) ส่วน past simple ใช้เมื่อระบุเวลาที่จบแล้ว เช่น yesterday, in 2019',
        en: 'Use the present perfect (have/has + past participle) for experiences and unfinished time, with for (a period) and since (a starting point). Use the past simple with a finished time such as yesterday or in 2019.',
      },
      examples: ["I've been to Singapore three times.", 'I went to Singapore in 2022.', "She's worked here since March."],
    },
    reading: {
      title: 'A career change',
      text: "Nok has worked as an accountant for eight years. Last year she decided to take an online design course, and since then she has completed three projects for small businesses. She hasn't left her job yet, but she has already saved enough money to try freelancing next year.",
    },
    practice: [
      q('p-b1-1-1', 'grammar', 'I ___ that film three times, so let\'s watch something else.', [
        'have seen',
        'see',
        'am seeing',
        'have see',
      ], {
        explain: { th: 'ประสบการณ์ที่ไม่ระบุเวลา ใช้ have + V3 (seen)', en: 'An experience with no time given: have + past participle (seen).' },
      }),
      q('p-b1-1-2', 'grammar', 'We ___ the contract last Monday.', ['signed', 'have signed', 'have sign', 'sign'], {
        explain: { th: 'last Monday ระบุเวลาที่จบแล้ว ใช้ past simple', en: 'last Monday is a finished time: past simple.' },
      }),
      q('p-b1-1-3', 'grammar', "He's been in the meeting ___ two hours.", ['for', 'since', 'ago', 'during'], {
        explain: { th: 'for + ระยะเวลา', en: 'for + a period of time.' },
      }),
      q('p-b1-1-4', 'reading', 'According to the reading, what has Nok NOT done yet?', [
        'left her job',
        'taken a design course',
        'completed projects',
        'saved money',
      ], {
        explain: { th: '"She hasn\'t left her job yet"', en: '"She hasn\'t left her job yet."' },
      }),
    ],
  },
  {
    id: 'b1-2',
    level: 'B1',
    title: { th: 'แผนงานและความเป็นไปได้', en: 'Plans & Possibilities at Work' },
    canDo: [
      { th: 'พูดถึงแผนในอนาคตและการคาดการณ์ได้', en: 'I can talk about future plans and predictions.' },
      { th: 'ใช้ first conditional พูดถึงผลที่อาจเกิดขึ้นได้', en: 'I can use the first conditional for likely results.' },
    ],
    vocab: [
      { word: 'deadline', th: 'กำหนดส่ง', example: 'The deadline is Friday.' },
      { word: 'schedule', th: 'ตารางเวลา', example: "Let's check the schedule." },
      { word: 'postpone', th: 'เลื่อนออกไป', example: 'They postponed the launch.' },
      { word: 'unless', th: 'เว้นแต่, ถ้าไม่', example: "We'll be late unless we leave now." },
      { word: 'be going to', th: 'ตั้งใจจะ (มีแผนแล้ว)', example: "I'm going to apply for the job." },
    ],
    grammar: {
      title: 'Future forms & the first conditional',
      explain: {
        th: 'be going to ใช้กับแผนที่ตัดสินใจแล้ว, will ใช้กับการตัดสินใจทันทีหรือการคาดการณ์ First conditional: If + present simple, will + V1 ใช้กับเงื่อนไขที่เป็นไปได้จริง (ห้ามใช้ will หลัง if)',
        en: 'Use be going to for plans already decided and will for instant decisions and predictions. First conditional: If + present simple, will + verb — for real possibilities. Never use will after if.',
      },
      examples: ["I'm going to visit the client on Monday.", "The phone's ringing — I'll get it.", 'If we finish early, we will start the next task.'],
    },
    practice: [
      q('p-b1-2-1', 'grammar', 'If the client ___, I will send the report.', ['agrees', 'will agree', 'agreed', 'agree will'], {
        explain: { th: 'หลัง if ใช้ present simple', en: 'Use the present simple after if.' },
      }),
      q('p-b1-2-2', 'grammar', "I've decided. I ___ learn Japanese next year.", ["'m going to", "'ll to", 'going', 'am learn'], {
        explain: { th: 'ตัดสินใจไว้แล้ว ใช้ be going to', en: 'A decided plan: be going to.' },
      }),
      q('p-b1-2-3', 'vocabulary', "We'll miss the deadline ___ we work this weekend.", ['unless', 'if', 'when', 'because'], {
        explain: { th: 'unless = ถ้าไม่', en: 'unless = if not.' },
      }),
      q('p-b1-2-4', 'vocabulary', 'The meeting is ___ until next week because the manager is sick.', [
        'postponed',
        'scheduled',
        'reminded',
        'delivered',
      ], {
        explain: { th: 'postpone = เลื่อนออกไป', en: 'postpone = move to a later time.' },
      }),
    ],
  },
  // ───────────── B2 ─────────────
  {
    id: 'b2-1',
    level: 'B2',
    title: { th: 'สมมติและความเสียดาย', en: 'Hypotheticals & Regrets' },
    canDo: [
      { th: 'พูดถึงสถานการณ์สมมติในปัจจุบันและอดีตได้', en: 'I can discuss imaginary situations in the present and past.' },
      { th: 'แสดงความเสียดายด้วย wish และ if only ได้', en: 'I can express regret with wish and if only.' },
    ],
    vocab: [
      { word: 'regret', th: 'เสียดาย, เสียใจ', example: 'I regret not studying harder.' },
      { word: 'opportunity', th: 'โอกาส', example: 'It was a great opportunity.' },
      { word: 'consequence', th: 'ผลที่ตามมา', example: 'Every decision has consequences.' },
      { word: 'if only', th: 'ถ้าเพียงแต่', example: 'If only I had more time!' },
      { word: 'otherwise', th: 'มิฉะนั้น', example: 'Save the file, otherwise you will lose it.' },
    ],
    grammar: {
      title: 'Second & third conditionals, wish',
      explain: {
        th: 'Second conditional (If + past simple, would + V1) ใช้กับสิ่งสมมติที่ไม่จริงในปัจจุบัน (If I were…) Third conditional (If + had + V3, would have + V3) ใช้กับอดีตที่ไม่ได้เกิดขึ้นจริง wish + past simple = อยากให้ปัจจุบันต่างไป, wish + had + V3 = เสียดายเรื่องในอดีต',
        en: 'Second conditional (If + past simple, would + verb) is for unreal present situations. Third conditional (If + had + past participle, would have + past participle) is for unreal past. wish + past = present regret; wish + past perfect = past regret.',
      },
      examples: [
        'If I were the CEO, I would change the policy.',
        'If we had left earlier, we would have caught the train.',
        'I wish I had accepted that job offer.',
      ],
    },
    practice: [
      q('p-b2-1-1', 'grammar', 'If I ___ more money, I would buy a house.', ['had', 'have', 'would have', 'will have'], {
        explain: { th: 'second conditional: If + past simple', en: 'Second conditional: If + past simple.' },
      }),
      q('p-b2-1-2', 'grammar', 'If she had studied, she ___ the exam.', [
        'would have passed',
        'would pass',
        'had passed',
        'will pass',
      ], {
        explain: { th: 'third conditional: would have + V3', en: 'Third conditional: would have + past participle.' },
      }),
      q('p-b2-1-3', 'grammar', 'I wish I ___ to the party last night. It sounds like it was fun.', [
        'had gone',
        'went',
        'would go',
        'have gone',
      ], {
        explain: { th: 'เสียดายเรื่องในอดีต: wish + had + V3', en: 'Past regret: wish + had + past participle.' },
      }),
      q('p-b2-1-4', 'vocabulary', 'Back up your work; ___, you might lose everything.', ['otherwise', 'however', 'therefore', 'moreover'], {
        explain: { th: 'otherwise = มิฉะนั้น', en: 'otherwise = if not.' },
      }),
    ],
  },
  {
    id: 'b2-2',
    level: 'B2',
    title: { th: 'การสื่อสารทางธุรกิจ', en: 'Business Communication' },
    canDo: [
      { th: 'เขียนอีเมลทางการและรายงานข้อมูลได้', en: 'I can write formal emails and report information.' },
      { th: 'ใช้ passive voice และ reporting verbs ได้', en: 'I can use the passive voice and reporting verbs.' },
    ],
    vocab: [
      { word: 'attached', th: 'แนบมาด้วย', example: 'Please find the invoice attached.' },
      { word: 'regarding', th: 'เกี่ยวกับ', example: "I'm writing regarding your order." },
      { word: 'stakeholder', th: 'ผู้มีส่วนได้ส่วนเสีย', example: 'All stakeholders were informed.' },
      { word: 'implement', th: 'นำไปปฏิบัติ', example: 'The new system will be implemented in May.' },
      { word: 'follow up', th: 'ติดตามผล', example: "I'll follow up with the supplier." },
    ],
    grammar: {
      title: 'Passive voice & reporting verbs',
      explain: {
        th: 'Passive (be + V3) ใช้เมื่อสนใจการกระทำหรือผลลัพธ์มากกว่าผู้กระทำ พบบ่อยในงานเขียนทางการ Reporting verbs เช่น suggest + V-ing, advise/remind + someone + to V, deny + V-ing ต้องจำรูปแบบที่ตามมาด้วย',
        en: 'Use the passive (be + past participle) when the action matters more than who did it — common in formal writing. Reporting verbs take set patterns: suggest + -ing, advise/remind + person + to-infinitive, deny + -ing.',
      },
      examples: [
        'The results will be announced on Friday.',
        'She suggested moving the meeting online.',
        'He reminded me to send the invoice.',
      ],
    },
    practice: [
      q('p-b2-2-1', 'grammar', 'The new software ___ next month.', [
        'will be installed',
        'will install',
        'is installing',
        'installs',
      ], {
        explain: { th: 'ซอฟต์แวร์ถูกติดตั้ง ใช้ passive', en: 'The software receives the action: passive.' },
      }),
      q('p-b2-2-2', 'grammar', 'The manager suggested ___ the deadline.', ['extending', 'to extend', 'extend', 'us extend'], {
        explain: { th: 'suggest + V-ing', en: 'suggest + -ing.' },
      }),
      q('p-b2-2-3', 'grammar', 'She advised me ___ the contract carefully.', ['to read', 'reading', 'read', 'that read'], {
        explain: { th: 'advise + someone + to V', en: 'advise + person + to-infinitive.' },
      }),
      q('p-b2-2-4', 'vocabulary', "I'm writing ___ the invoice you sent last week.", ['regarding', 'regard', 'regardless', 'regards'], {
        explain: { th: 'regarding = เกี่ยวกับ (ทางการ)', en: 'regarding = about (formal).' },
      }),
    ],
  },
  // ───────────── C1 ─────────────
  {
    id: 'c1-1',
    level: 'C1',
    title: { th: 'การเน้นและการกลับประโยค', en: 'Emphasis & Inversion' },
    canDo: [
      { th: 'เน้นความสำคัญด้วยการกลับประโยค (inversion) ได้', en: 'I can add emphasis using inversion.' },
      { th: 'ใช้ cleft sentences (What I need is…) ได้', en: 'I can use cleft sentences (What I need is…).' },
    ],
    vocab: [
      { word: 'under no circumstances', th: 'ไม่ว่ากรณีใดก็ตาม (ห้าม)', example: 'Under no circumstances should you share your password.' },
      { word: 'seldom', th: 'แทบจะไม่', example: 'Seldom do we see such commitment.' },
      { word: 'no sooner … than', th: 'ทันทีที่ … ก็', example: 'No sooner had I sat down than the phone rang.' },
      { word: 'crucial', th: 'สำคัญยิ่ง', example: 'Timing is crucial.' },
      { word: 'nevertheless', th: 'อย่างไรก็ตาม', example: 'It was risky; nevertheless, they went ahead.' },
    ],
    grammar: {
      title: 'Negative inversion & cleft sentences',
      explain: {
        th: 'เมื่อขึ้นต้นด้วยคำเชิงปฏิเสธ/จำกัด (Never, Rarely, Not only, Only when, Under no circumstances) ให้กลับลำดับเป็น กริยาช่วย + ประธาน เหมือนประโยคคำถาม Cleft sentences เช่น It was … that … / What … is … ใช้เน้นข้อมูลส่วนใดส่วนหนึ่ง',
        en: 'After negative or limiting adverbials (Never, Rarely, Not only, Only when, Under no circumstances), invert the auxiliary and subject as in a question. Cleft sentences (It was … that …, What … is …) put focus on one part of the message.',
      },
      examples: [
        'Never have I seen such a mess.',
        'Only when the data arrived did we understand the problem.',
        'What we need is a clear strategy.',
      ],
    },
    practice: [
      q('p-c1-1-1', 'grammar', 'Only after the meeting ___ the truth.', ['did they discover', 'they discovered', 'they did discover', 'discovered they'], {
        explain: { th: 'Only after … + กลับประโยค: did + ประธาน + V1', en: 'Only after … triggers inversion: did + subject + verb.' },
      }),
      q('p-c1-1-2', 'grammar', 'Under no circumstances ___ leave the building.', [
        'should you',
        'you should',
        'you must',
        'must not you',
      ], {
        explain: { th: 'Under no circumstances + กริยาช่วย + ประธาน', en: 'Under no circumstances + auxiliary + subject.' },
      }),
      q('p-c1-1-3', 'grammar', '___ really annoys me is the lack of communication.', ['What', 'That', 'It', 'Which'], {
        explain: { th: 'Cleft sentence ขึ้นต้นด้วย What', en: 'A cleft sentence starting with What.' },
      }),
      q('p-c1-1-4', 'grammar', 'No sooner had we arrived ___ it started to rain.', ['than', 'when', 'then', 'that'], {
        explain: { th: 'No sooner … than เป็นคู่ตายตัว', en: 'No sooner … than is a fixed pair.' },
      }),
    ],
  },
  {
    id: 'c1-2',
    level: 'C1',
    title: { th: 'ภาษาวิชาการและการพูดอย่างระมัดระวัง', en: 'Academic Language & Hedging' },
    canDo: [
      { th: 'ใช้ภาษาลดความแน่นอน (hedging) ในงานเขียนวิชาการได้', en: 'I can use hedging language in academic and professional writing.' },
      { th: 'ใช้ collocation ระดับสูงได้อย่างเป็นธรรมชาติ', en: 'I can use advanced collocations naturally.' },
    ],
    vocab: [
      { word: 'tend to', th: 'มีแนวโน้มที่จะ', example: 'Consumers tend to prefer local brands.' },
      { word: 'arguably', th: 'อาจกล่าวได้ว่า', example: 'It is arguably the best solution.' },
      { word: 'draw a conclusion', th: 'สรุปผล', example: 'It is too early to draw a conclusion.' },
      { word: 'conduct research', th: 'ทำการวิจัย', example: 'They conducted research in five countries.' },
      { word: 'significant', th: 'มีนัยสำคัญ', example: 'There was a significant increase in sales.' },
    ],
    grammar: {
      title: 'Hedging',
      explain: {
        th: 'งานเขียนวิชาการและธุรกิจมักหลีกเลี่ยงการพูดเด็ดขาดเกินไป ใช้ modal (may, might, could), กริยา (suggest, appear, seem, tend) และวลี (It is likely that…, to some extent) เพื่อให้ข้อสรุปฟังสมเหตุสมผลและน่าเชื่อถือ',
        en: 'Academic and business writing avoids over-confident claims. Use modals (may, might, could), verbs (suggest, appear, seem, tend) and phrases (It is likely that…, to some extent) to make claims cautious and credible.',
      },
      examples: [
        'The data suggest that remote work may increase productivity.',
        'It appears that the policy has had limited impact.',
        'To some extent, the results support the hypothesis.',
      ],
    },
    practice: [
      q('p-c1-2-1', 'grammar', 'Which sentence is the most appropriately hedged?', [
        'The findings suggest a possible link between sleep and memory.',
        'The findings prove sleep controls memory.',
        'Sleep always improves memory.',
        'Everyone knows sleep and memory are linked.',
      ], {
        explain: { th: 'suggest และ possible ช่วยลดความเด็ดขาด', en: 'suggest and possible soften the claim.' },
      }),
      q('p-c1-2-2', 'vocabulary', 'The team ___ research on consumer behaviour.', ['conducted', 'made', 'did up', 'performed out'], {
        explain: { th: 'collocation: conduct research', en: 'Collocation: conduct research.' },
      }),
      q('p-c1-2-3', 'vocabulary', 'It is too early to ___ a conclusion from such limited data.', ['draw', 'pull', 'take out', 'give'], {
        explain: { th: 'collocation: draw a conclusion', en: 'Collocation: draw a conclusion.' },
      }),
      q('p-c1-2-4', 'vocabulary', 'Older employees ___ to be more loyal to their company.', ['tend', 'trend', 'intend', 'attend'], {
        explain: { th: 'tend to = มีแนวโน้มที่จะ', en: 'tend to = usually do.' },
      }),
    ],
  },
  // ───────────── C2 ─────────────
  {
    id: 'c2-1',
    level: 'C2',
    title: { th: 'โครงสร้างประโยคขั้นสูง', en: 'Advanced Structures' },
    canDo: [
      { th: 'ใช้ mixed conditionals และ subjunctive ได้อย่างแม่นยำ', en: 'I can use mixed conditionals and the subjunctive accurately.' },
      { th: 'ใช้ inverted conditionals ในงานเขียนทางการได้', en: 'I can use inverted conditionals in formal writing.' },
    ],
    vocab: [
      { word: 'imperative', th: 'จำเป็นอย่างยิ่ง', example: 'It is imperative that he be informed.' },
      { word: 'albeit', th: 'แม้ว่า (ทางการ)', example: 'It was a success, albeit a modest one.' },
      { word: 'notwithstanding', th: 'ถึงแม้ว่า, แม้จะมี', example: 'Notwithstanding the risks, they proceeded.' },
      { word: 'hitherto', th: 'จนถึงบัดนี้', example: 'a hitherto unknown species' },
      { word: 'contingent on', th: 'ขึ้นอยู่กับ', example: 'The deal is contingent on approval.' },
    ],
    grammar: {
      title: 'Mixed conditionals, subjunctive & inverted conditionals',
      explain: {
        th: 'Mixed conditional ผสมเวลา เช่น If + had + V3 (อดีต), would + V1 (ผลในปัจจุบัน) Subjunctive ใช้กริยาช่องที่ 1 ไม่เติม s หลัง insist/recommend/it is essential that… ในงานทางการตัด if แล้วกลับประโยคได้: Were I…, Had we…, Should you…',
        en: 'Mixed conditionals combine times: If + past perfect (past), would + verb (present result). The subjunctive uses the base verb after insist/recommend/it is essential that… In formal style, drop if and invert: Were I…, Had we…, Should you…',
      },
      examples: [
        'If I had taken that job, I would be living in London now.',
        'The board insisted that the CEO resign.',
        'Should you require assistance, please contact us.',
      ],
    },
    practice: [
      q('p-c2-1-1', 'grammar', 'If she had accepted the offer, she ___ in Paris now.', [
        'would be working',
        'would have worked',
        'had worked',
        'will be working',
      ], {
        explain: { th: 'Mixed conditional: เงื่อนไขในอดีต ผลในปัจจุบัน (now)', en: 'Mixed: past condition, present result (now).' },
      }),
      q('p-c2-1-2', 'grammar', 'It is essential that every employee ___ the training.', ['complete', 'completes', 'completed', 'will complete'], {
        explain: { th: 'subjunctive: ใช้กริยาช่องที่ 1 ไม่เติม s', en: 'Subjunctive: base verb, no -s.' },
      }),
      q('p-c2-1-3', 'grammar', '___ you need further information, do not hesitate to contact me.', ['Should', 'Would', 'If should', 'Had'], {
        explain: { th: 'Should you … = If you …', en: 'Should you … = If you …' },
      }),
      q('p-c2-1-4', 'vocabulary', 'The project was completed, ___ several weeks behind schedule.', ['albeit', 'despite', 'although of', 'however'], {
        explain: { th: 'albeit + วลี (ไม่ต้องมีประธานกริยา)', en: 'albeit is followed by a phrase, not a clause.' },
      }),
    ],
  },
  {
    id: 'c2-2',
    level: 'C2',
    title: { th: 'สำนวนและระดับภาษา', en: 'Idioms & Register' },
    canDo: [
      { th: 'เข้าใจและใช้สำนวนได้อย่างเป็นธรรมชาติ', en: 'I can understand and use idioms naturally.' },
      { th: 'ปรับระดับภาษา (ทางการ/ไม่ทางการ) ให้เหมาะกับสถานการณ์', en: 'I can switch register between formal and informal.' },
    ],
    vocab: [
      { word: 'a blessing in disguise', th: 'เรื่องร้ายที่กลายเป็นดี', example: 'Losing that job was a blessing in disguise.' },
      { word: 'cut corners', th: 'ทำแบบลวก ๆ เพื่อประหยัด', example: "Don't cut corners on safety." },
      { word: 'the elephant in the room', th: 'ปัญหาใหญ่ที่ทุกคนเลี่ยงไม่พูดถึง', example: "Let's address the elephant in the room." },
      { word: 'commence', th: 'เริ่ม (ทางการ) = start', example: 'The ceremony will commence at noon.' },
      { word: 'ascertain', th: 'ตรวจสอบให้แน่ชัด (ทางการ) = find out', example: 'We need to ascertain the facts.' },
    ],
    grammar: {
      title: 'Register: formal vs informal',
      explain: {
        th: 'ภาษาทางการนิยมใช้คำจากละติน (commence, obtain, assist) passive และประโยคซับซ้อน ส่วนภาษาไม่ทางการนิยมใช้ phrasal verbs (start, get, help out) การย่อ (it\'s, we\'ll) และสำนวน การเลือกให้เหมาะกับผู้ฟังสำคัญมากในระดับ C2',
        en: "Formal English prefers Latin-based words (commence, obtain, assist), passives and complex sentences. Informal English prefers phrasal verbs (start, get, help out), contractions and idioms. At C2, matching register to audience is essential.",
      },
      examples: [
        'Informal: Can you find out what happened?',
        'Formal: Could you ascertain the cause of the incident?',
        "Informal: Let's get started. / Formal: Let us commence.",
      ],
    },
    practice: [
      q('p-c2-2-1', 'vocabulary', 'Missing the flight turned out to be a blessing in ___; the plane was delayed for ten hours.', [
        'disguise',
        'display',
        'distance',
        'disgrace',
      ], {
        explain: { th: 'สำนวน a blessing in disguise', en: 'Idiom: a blessing in disguise.' },
      }),
      q('p-c2-2-2', 'vocabulary', 'Which is the most formal way to say "find out"?', ['ascertain', 'figure out', 'look into it', 'suss out'], {
        explain: { th: 'ascertain เป็นคำทางการ', en: 'ascertain is formal.' },
      }),
      q('p-c2-2-3', 'vocabulary', 'If a builder ___, the building may not be safe.', ['cuts corners', 'turns corners', 'breaks the ice', 'calls the shots'], {
        explain: { th: 'cut corners = ทำลวก ๆ เพื่อประหยัด', en: 'cut corners = do something badly to save time or money.' },
      }),
      q('p-c2-2-4', 'vocabulary', 'Nobody mentioned the budget cuts, which were clearly the ___ in the room.', [
        'elephant',
        'lion',
        'mouse',
        'giant',
      ], {
        explain: { th: 'the elephant in the room = ปัญหาที่ทุกคนเลี่ยงไม่พูด', en: 'An obvious problem nobody discusses.' },
      }),
    ],
  },
]

export function unitsForLevel(level: CefrLevel): Unit[] {
  return UNITS.filter((u) => u.level === level)
}

export function findUnit(id: string): Unit | undefined {
  return UNITS.find((u) => u.id === id)
}
