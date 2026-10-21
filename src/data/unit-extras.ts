import { q } from '../lib/question'
import type { Question, Unit } from '../types'

export interface UnitExtra {
  reading?: Unit['reading']
  practice: Question[]
}

/**
 * Extra content merged into existing units (see courses.ts): a reading text
 * for units that lack one, plus four more practice questions — two language,
 * one on the reading and one listening item.
 */
export const UNIT_EXTRAS: Record<string, UnitExtra> = {
  // ───────────── A1 ─────────────
  'a1-1': {
    reading: {
      title: 'New at work',
      text: "Hi! My name is Mai. I'm 28 and I'm from Chiang Rai. I'm a graphic designer at a small company in Bangkok. My colleagues are friendly. My manager is Ken. He's from Singapore.",
    },
    practice: [
      q('p-a1-1-5', 'grammar', 'My parents ___ teachers.', ['are', 'is', 'am', 'be'], {
        explain: { th: 'My parents = they ใช้ are', en: 'My parents = they: are.' },
      }),
      q('p-a1-1-6', 'vocabulary', '"Nice to meet you." — "___"', ['Nice to meet you, too.', "You're welcome.", 'Yes, I am.', 'Goodbye.'], {
        explain: { th: 'ตอบกลับด้วย Nice to meet you, too.', en: 'Reply with Nice to meet you, too.' },
      }),
      q('p-a1-1-7', 'reading', 'Where is Ken from?', ['Singapore', 'Chiang Rai', 'Bangkok', 'Japan']),
      q('p-a1-1-8', 'listening', "What is David's job?", ['engineer', 'teacher', 'doctor', 'designer'], {
        audio: "Hello, I'm David. I'm an engineer from Canada.",
      }),
    ],
  },
  'a1-2': {
    reading: {
      title: "Somchai's day",
      text: 'Somchai gets up at 5:30 every day. He has breakfast and takes the bus to work at 6:30. He starts work at 8:00. He usually has lunch with his colleagues. In the evening, he goes to the gym. He never goes to bed after 11 p.m.',
    },
    practice: [
      q('p-a1-2-5', 'grammar', '___ your brother work on Saturdays?', ['Does', 'Do', 'Is', 'Are'], {
        explain: { th: 'your brother = he ใช้ Does', en: 'your brother = he: Does.' },
      }),
      q('p-a1-2-6', 'grammar', 'She ___ TV in the morning.', ["doesn't watch", "don't watch", 'not watch', "isn't watch"], {
        explain: { th: "she + doesn't + V1", en: "she + doesn't + base verb." },
      }),
      q('p-a1-2-7', 'reading', 'What does Somchai do in the evening?', [
        'He goes to the gym.',
        'He takes the bus.',
        'He has lunch.',
        'He starts work.',
      ]),
      q('p-a1-2-8', 'listening', 'What does the speaker do after work?', [
        'cooks dinner and reads',
        'goes to the gym',
        'watches TV',
        'meets friends',
      ], { audio: 'I usually finish work at six, then I cook dinner and read a book.' }),
    ],
  },
  'a1-3': {
    reading: {
      title: 'Our office',
      text: "Our office is on the fifth floor. There is a big meeting room next to the lift. There are twenty desks and two printers. The kitchen is between the meeting room and the toilets. There isn't a car park, but there is a bus stop in front of the building.",
    },
    practice: [
      q('p-a1-3-5', 'grammar', 'There ___ any chairs in the room.', ["aren't", "isn't", 'not', 'no'], {
        explain: { th: 'chairs พหูพจน์ ปฏิเสธใช้ aren\'t', en: "Plural negative: aren't." },
      }),
      q('p-a1-3-6', 'vocabulary', 'Where do you make coffee at work?', ['in the kitchen', 'in the printer', 'at reception', 'in the lift'], {
        explain: { th: 'kitchen = ห้องครัว / ห้องพักทานอาหาร', en: 'You make coffee in the kitchen.' },
      }),
      q('p-a1-3-7', 'reading', 'What is between the meeting room and the toilets?', ['the kitchen', 'the lift', 'the printers', 'the bus stop']),
      q('p-a1-3-8', 'listening', 'Where is the printer?', [
        "next to the speaker's desk",
        'in the kitchen',
        'on another floor',
        'at reception',
      ], { audio: "Excuse me, is there a printer on this floor? — Yes, there's one next to my desk." }),
    ],
  },
  'a1-4': {
    reading: {
      title: 'A phone call',
      text: "A: Good afternoon, Green Foods, Pim speaking.\nB: Hello. Can I speak to Mr. Brown, please?\nA: I'm sorry, he's in a meeting. Can I take a message?\nB: Yes, please. This is Lisa from Star Bank. My number is 089 456 7712.\nA: Thank you. He can call you back at four.",
    },
    practice: [
      q('p-a1-4-5', 'grammar', '___ I speak to the manager, please?', ['Can', 'Do', 'Am', 'Does'], {
        explain: { th: 'ขอร้อง: Can I…?', en: 'Request: Can I…?' },
      }),
      q('p-a1-4-6', 'vocabulary', 'Can you ___ your surname, please? — Yes, W-O-N-G.', ['spell', 'speak', 'say to', 'tell'], {
        explain: { th: 'spell = สะกด', en: 'spell = say the letters.' },
      }),
      q('p-a1-4-7', 'reading', "Why can't Mr. Brown answer the phone?", [
        'He is in a meeting.',
        'He is on holiday.',
        'He is at the bank.',
        'He is sick.',
      ]),
      q('p-a1-4-8', 'listening', 'What is the phone number?', ['081 223 4567', '081 233 4567', '018 223 4567', '081 223 4576'], {
        audio: 'My phone number is oh eight one, two two three, four five six seven.',
      }),
    ],
  },
  'a1-5': {
    reading: {
      title: 'Next week',
      text: "Hi team, here is the plan for next week. On Monday at 9:00 we have a team meeting. On Wednesday afternoon there is training for new staff. The office is closed on Friday because it's a public holiday. Thanks, Anna",
    },
    practice: [
      q('p-a1-5-5', 'grammar', 'My birthday is ___ June.', ['in', 'on', 'at', 'by'], {
        explain: { th: 'เดือนใช้ in', en: 'Months: in.' },
      }),
      q('p-a1-5-6', 'grammar', 'The shop closes ___ midnight.', ['at', 'in', 'on', 'to'], {
        explain: { th: 'at midnight / at noon', en: 'at midnight / at noon.' },
      }),
      q('p-a1-5-7', 'reading', 'When is the training?', ['on Wednesday afternoon', 'on Monday at 9:00', 'on Friday', 'on Tuesday morning']),
      q('p-a1-5-8', 'listening', 'When does the speaker want to meet?', ['Friday at 2:00', 'Thursday at 2:00', 'Friday at 12:00', 'Thursday morning'], {
        audio: "Sorry, I can't meet on Thursday. Are you free on Friday at two o'clock?",
      }),
    ],
  },
  // ───────────── A2 ─────────────
  'a2-1': {
    reading: {
      title: 'A weekend in Chiang Mai',
      text: 'Last weekend, Ploy and her friends went to Chiang Mai. They took the night train on Friday and arrived early on Saturday morning. They visited Doi Suthep and ate khao soi for lunch. On Sunday it rained, so they stayed in a café and played cards. They flew back to Bangkok on Sunday evening.',
    },
    practice: [
      q('p-a2-1-5', 'grammar', 'We ___ the museum because it was closed.', ["didn't visit", "didn't visited", 'not visited', "don't visit"], {
        explain: { th: "didn't + V1", en: "didn't + base verb." },
      }),
      q('p-a2-1-6', 'grammar', 'When ___ you start this job?', ['did', 'do', 'was', 'were'], {
        explain: { th: 'คำถามอดีตใช้ did', en: 'Past question: did.' },
      }),
      q('p-a2-1-7', 'reading', 'Why did they stay in a café on Sunday?', [
        'It rained.',
        'The museum was closed.',
        'They were tired.',
        'They missed the train.',
      ]),
      q('p-a2-1-8', 'listening', "Why didn't the speaker go to the party?", [
        'had to finish a report',
        'was ill',
        'was on holiday',
        "didn't know about it",
      ], { audio: "I didn't go to the party on Saturday because I had to finish a report." }),
    ],
  },
  'a2-2': {
    reading: {
      title: 'The shopping list',
      text: "Tom: We need some eggs, some rice and a bottle of fish sauce. Do we have any onions?\nJane: Yes, we have a lot of onions, but there isn't much milk.\nTom: OK, I'll buy two cartons of milk. How much money do you need?\nJane: About 500 baht, I think.",
    },
    practice: [
      q('p-a2-2-5', 'grammar', 'Would you like ___ more coffee?', ['some', 'any', 'many', 'a'], {
        explain: { th: 'การเสนอใช้ some', en: 'Offers use some.' },
      }),
      q('p-a2-2-6', 'vocabulary', 'a ___ of bread', ['loaf', 'bottle', 'can', 'bar'], {
        explain: { th: 'a loaf of bread = ขนมปังหนึ่งก้อน', en: 'a loaf of bread.' },
      }),
      q('p-a2-2-7', 'reading', 'What do they NOT need to buy?', ['onions', 'eggs', 'milk', 'rice']),
      q('p-a2-2-8', 'listening', 'How much does the order cost?', ['145 baht', '154 baht', '140 baht', '45 baht'], {
        audio: "I'd like a large iced latte and a chocolate muffin, please. — That's one hundred and forty-five baht.",
      }),
    ],
  },
  'a2-3': {
    reading: {
      title: 'Booking a meeting room',
      text: 'Subject: Meeting room booking\n\nDear Mr. Patel,\nI would like to book the large meeting room for Thursday, 14 March, from 10 a.m. to 12 p.m. We are expecting eight people. Could you also arrange coffee and water for the meeting?\nThank you for your help.\n\nBest regards,\nNida Sukjai',
    },
    practice: [
      q('p-a2-3-5', 'grammar', 'Could you ___ me the agenda before Monday?', ['send', 'to send', 'sending', 'sent'], {
        explain: { th: 'Could you + V1', en: 'Could you + base verb.' },
      }),
      q('p-a2-3-6', 'vocabulary', 'Which is the best opening for a formal email?', ['Dear Mr. Patel,', 'Hey Patel!', 'Hi buddy,', 'Yo Mr. Patel'], {
        explain: { th: 'อีเมลทางการขึ้นต้นด้วย Dear + คำนำหน้า + นามสกุล', en: 'Formal: Dear + title + surname.' },
      }),
      q('p-a2-3-7', 'reading', 'What does Nida ask for besides the room?', ['coffee and water', 'a projector', 'lunch', 'a bigger room']),
      q('p-a2-3-8', 'listening', 'When can the large room be used?', ['on Friday', 'on Thursday', 'on Monday', 'never'], {
        audio: "Thanks for your email. I'm afraid the large room isn't free on Thursday, but you can use it on Friday.",
      }),
    ],
  },
  'a2-4': {
    reading: {
      title: 'My job',
      text: "I'm Arthit and I work in the customer service department of an online shop. I answer emails and deal with complaints. I usually work from 9 to 6. This month, I'm also training two new colleagues, so I'm working longer hours. I enjoy my job because I like helping people.",
    },
    practice: [
      q('p-a2-4-5', 'grammar', 'Look! The manager ___ to the new staff.', ['is talking', 'talks', 'talk', 'talked'], {
        explain: { th: 'Look! = กำลังเกิดขึ้นตอนนี้', en: 'Look! = happening now.' },
      }),
      q('p-a2-4-6', 'grammar', "I ___ for a bank, but I'm looking for a new job.", ['work', 'am work', 'working', 'works'], {
        explain: { th: 'งานประจำ ใช้ present simple', en: 'Permanent situation: present simple.' },
      }),
      q('p-a2-4-7', 'reading', 'Why is Arthit working longer hours this month?', [
        "He's training new colleagues.",
        "He's dealing with more complaints.",
        "He's looking for a new job.",
        'The shop is closed.',
      ]),
      q('p-a2-4-8', 'listening', 'When is the speaker working this week?', ['during the day', 'at night', 'at weekends', 'not at all'], {
        audio: "I'm a nurse. I usually work nights, but this week I'm working during the day.",
      }),
    ],
  },
  'a2-5': {
    reading: {
      title: 'Choosing a delivery company',
      text: 'We need a new delivery company. FastShip is the cheapest, but it is the slowest — delivery takes five days. CityGo is more expensive than FastShip, but it delivers in two days. ExpressOne is the most expensive and the fastest: next-day delivery. Most customers say CityGo is the most reliable.',
    },
    practice: [
      q('p-a2-5-5', 'grammar', 'This phone is ___ expensive than the old one.', ['less', 'few', 'fewer', 'little'], {
        explain: { th: 'less + adj + than = น้อยกว่า', en: 'less + adjective + than.' },
      }),
      q('p-a2-5-6', 'grammar', 'Today is ___ day of the year!', ['the hottest', 'the most hot', 'hotter', 'the hotest'], {
        explain: { th: 'hot → the hottest (เพิ่ม t)', en: 'hot → the hottest (double t).' },
      }),
      q('p-a2-5-7', 'reading', 'Which company is the most reliable, according to customers?', ['CityGo', 'FastShip', 'ExpressOne', 'All are the same.']),
      q('p-a2-5-8', 'listening', 'Which sentence is true?', [
        'The black model has a better camera.',
        'The blue model is more expensive.',
        'Both cost the same.',
        'The blue model has a better camera.',
      ], {
        audio: 'The blue model costs twelve thousand baht and the black one costs fifteen thousand, but the black one has a better camera.',
      }),
    ],
  },
  // ───────────── B1 ─────────────
  'b1-1': {
    practice: [
      q('p-b1-1-5', 'grammar', 'Have you ___ been to Korea?', ['ever', 'yet', 'already', 'since'], {
        explain: { th: 'Have you ever…? = เคย…ไหม', en: 'Have you ever…? asks about experience.' },
      }),
      q('p-b1-1-6', 'grammar', "I ___ my keys. I can't find them anywhere!", ['have lost', 'was losing', 'am losing', 'lose'], {
        explain: { th: 'ผลยังอยู่ถึงตอนนี้ ใช้ present perfect', en: 'Result now: present perfect.' },
      }),
      q('p-b1-1-7', 'vocabulary', "I've worked ___ for two years — in Australia.", ['abroad', 'aboard', 'broad', 'away'], {
        explain: { th: 'abroad = ต่างประเทศ', en: 'abroad = in another country.' },
      }),
      q('p-b1-1-8', 'listening', 'What has the speaker done?', ['bungee jumping', 'skydiving', 'both', 'neither'], {
        audio: "I've never tried skydiving, but I went bungee jumping when I was in New Zealand last year.",
      }),
    ],
  },
  'b1-2': {
    reading: {
      title: 'Launch update',
      text: "Hi Jake, just a quick update on the product launch. We're going to present the new app to the client on 3 May. If the testing goes well this week, we'll send them a demo version on Friday. Unless there are any major bugs, the launch date won't change. I'll keep you posted. — Mia",
    },
    practice: [
      q('p-b1-2-5', 'grammar', 'Look at those clouds! It ___ rain.', ['is going to', 'will to', 'going', 'is raining to'], {
        explain: { th: 'มีหลักฐานตอนนี้ ใช้ be going to', en: 'Prediction from evidence: be going to.' },
      }),
      q('p-b1-2-6', 'grammar', 'I ___ call you as soon as I arrive.', ['will', 'am', 'would', 'going'], {
        explain: { th: 'สัญญา/การตัดสินใจ ใช้ will', en: 'A promise: will.' },
      }),
      q('p-b1-2-7', 'reading', 'What will happen if testing goes well?', [
        "They'll send a demo on Friday.",
        'The launch will be postponed.',
        "They'll present the app on Friday.",
        "They'll fix major bugs.",
      ]),
      q('p-b1-2-8', 'listening', 'Why is the training being postponed?', [
        'Many staff will be at a trade fair.',
        'The trainer is ill.',
        "The room isn't available.",
        "It's too expensive.",
      ], { audio: "We're going to postpone the training until next month, because half the team will be at the trade fair." }),
    ],
  },
  'b1-3': {
    reading: {
      title: 'Meeting minutes',
      text: 'Minutes — Marketing meeting, 10 June\nPresent: Ann (chair), Ben, Chai, Dao\n1. Social media: Ben suggested posting videos twice a week. Everyone agreed.\n2. Budget: Chai thought we should reduce print advertising. Dao disagreed and said older customers still read magazines.\nAction points: Ben to plan videos by 20 June; Chai to compare advertising costs.',
    },
    practice: [
      q('p-b1-3-5', 'grammar', 'You ___ see a doctor if you still feel ill.', ['should', 'should to', 'ought', 'had'], {
        explain: { th: 'should + V1', en: 'should + base verb.' },
      }),
      q('p-b1-3-6', 'vocabulary', 'The written record of a meeting is called the ___.', ['minutes', 'agenda', 'action point', 'schedule'], {
        explain: { th: 'minutes = บันทึกการประชุม', en: 'minutes = the written record.' },
      }),
      q('p-b1-3-7', 'reading', 'Who disagreed about print advertising?', ['Dao', 'Ben', 'Ann', 'Chai']),
      q('p-b1-3-8', 'listening', 'What does the speaker want?', [
        'to keep the magazine ads',
        'to stop the magazine ads',
        'to save money now',
        'to start TV ads',
      ], { audio: 'I see your point about cost, but I really think we ought to keep the magazine ads for one more year.' }),
    ],
  },
  'b1-4': {
    reading: {
      title: 'Phone message',
      text: 'To: Mr. Kim\nFrom: Sara Lopez (Delta Supplies)\nTime: 11:15\nMessage: The order will arrive on Thursday, not Wednesday, because of a problem at the warehouse. She asked you to call her back before 3 p.m. Her number is 02 555 8190.',
    },
    practice: [
      q('p-b1-4-5', 'grammar', 'He asked me ___ him back after lunch.', ['to call', 'call', 'calling', 'that I call'], {
        explain: { th: 'asked + someone + to V', en: 'asked + person + to-infinitive.' },
      }),
      q('p-b1-4-6', 'grammar', '"I\'m working from home today." → She said she ___ from home that day.', [
        'was working',
        'is working',
        'works',
        'has worked',
      ], { explain: { th: 'am working → was working', en: 'am working → was working.' } }),
      q('p-b1-4-7', 'reading', 'Why will the order be late?', [
        'There was a problem at the warehouse.',
        'Sara is ill.',
        'Mr. Kim changed the order.',
        'The phone line was down.',
      ]),
      q('p-b1-4-8', 'listening', 'What is the problem?', [
        'The invoice has the wrong date.',
        'The invoice is missing.',
        'Mai is late.',
        'The price is wrong.',
      ], { audio: "Hi, it's Ben from accounts. Could you tell Mai that the invoice she sent has the wrong date? Thanks." }),
    ],
  },
  'b1-5': {
    reading: {
      title: 'Interview tips',
      text: "Before a job interview, research the company and think about how your experience matches the job. Practise answering common questions such as 'What are your strengths?' Avoid criticising your previous employer. At the end, it's a good idea to ask a question, for example about training opportunities.",
    },
    practice: [
      q('p-b1-5-5', 'grammar', "I'm looking forward to ___ from you.", ['hearing', 'hear', 'to hear', 'heard'], {
        explain: { th: 'look forward to + V-ing (to เป็น preposition)', en: 'look forward to + -ing (to is a preposition).' },
      }),
      q('p-b1-5-6', 'grammar', 'Would you consider ___ to another city?', ['moving', 'to move', 'move', 'moved'], {
        explain: { th: 'consider + V-ing', en: 'consider + -ing.' },
      }),
      q('p-b1-5-7', 'reading', 'According to the text, what should you avoid?', [
        'criticising your previous employer',
        'asking questions',
        'researching the company',
        'talking about your strengths',
      ]),
      q('p-b1-5-8', 'listening', 'Why did the speaker leave the last job?', [
        'to develop leadership skills',
        'for more money',
        'the company closed',
        'to move abroad',
      ], { audio: 'I left my last job because I wanted more opportunities to develop my leadership skills.' }),
    ],
  },
  // ───────────── B2 ─────────────
  'b2-1': {
    reading: {
      title: 'Looking back',
      text: "Looking back, Ken wishes he had studied engineering. If he had chosen that path, he would probably be working abroad now. Still, he doesn't regret everything: if he hadn't become a teacher, he would never have met his wife. 'If I could give my younger self one piece of advice,' he says, 'it would be to take more risks.'",
    },
    practice: [
      q('p-b2-1-5', 'grammar', "If only I ___ so much yesterday — I feel awful.", ["hadn't eaten", "didn't eat", "wouldn't eat", "haven't eaten"], {
        explain: { th: 'เสียดายอดีต: if only + had + V3', en: 'Past regret: if only + past perfect.' },
      }),
      q('p-b2-1-6', 'vocabulary', 'Every decision has a ___.', ['consequence', 'coincidence', 'conference', 'confidence'], {
        explain: { th: 'consequence = ผลที่ตามมา', en: 'consequence = a result.' },
      }),
      q('p-b2-1-7', 'reading', 'What advice would Ken give his younger self?', [
        'to take more risks',
        'to study engineering',
        'to become a teacher',
        'to work abroad',
      ]),
      q('p-b2-1-8', 'listening', 'What does the speaker regret?', ['not taking the train', 'taking the train', 'leaving late', 'driving too fast'], {
        audio: "If I'd known the traffic would be this bad, I'd have taken the train.",
      }),
    ],
  },
  'b2-2': {
    reading: {
      title: 'Order update',
      text: 'Dear Ms. Wong,\nRegarding your order no. 4471, please be advised that the goods were dispatched yesterday and are expected to arrive within three working days. An invoice is attached. If you have any questions, please do not hesitate to contact me.\n\nKind regards,\nPeter Hall, Customer Accounts',
    },
    practice: [
      q('p-b2-2-5', 'grammar', 'The decision ___ until the director returns.', [
        'has been postponed',
        'has postponed',
        'is postponing',
        'postponed',
      ], { explain: { th: 'การตัดสินใจถูกเลื่อน: passive', en: 'The decision receives the action: passive.' } }),
      q('p-b2-2-6', 'grammar', 'He denied ___ the confidential file.', ['sharing', 'to share', 'share', 'shared'], {
        explain: { th: 'deny + V-ing', en: 'deny + -ing.' },
      }),
      q('p-b2-2-7', 'reading', 'When should the goods arrive?', ['within three working days', 'yesterday', 'tomorrow', 'in a month']),
      q('p-b2-2-8', 'listening', 'Why will the office be closed?', ['for maintenance', 'for a holiday', 'for a meeting', 'for a party'], {
        audio: 'All staff are reminded that the office will be closed on Monday for maintenance.',
      }),
    ],
  },
  'b2-3': {
    reading: {
      title: 'Price talks',
      text: 'Buyer: Your price is a little higher than we expected.\nSupplier: I understand. We could offer a 5% discount provided that you sign a one-year contract.\nBuyer: What if we ordered 2,000 units instead of 1,000?\nSupplier: In that case, we could go up to 8%, as long as payment is made within 30 days.',
    },
    practice: [
      q('p-b2-3-5', 'grammar', "___ you pay in advance, we can't reserve the goods.", ['Unless', 'As long as', 'Provided', 'Despite'], {
        explain: { th: 'Unless = ถ้าไม่', en: 'Unless = if not.' },
      }),
      q('p-b2-3-6', 'vocabulary', "We're both willing to compromise — let's meet ___.", ['halfway', 'half', 'in the middle way', 'halfly'], {
        explain: { th: 'meet halfway = ยอมกันคนละครึ่ง', en: 'meet halfway = compromise.' },
      }),
      q('p-b2-3-7', 'reading', 'What discount is offered for 2,000 units?', ['8%', '5%', '10%', '2%']),
      q('p-b2-3-8', 'listening', 'What condition does the speaker set?', [
        'confirmation by Friday',
        'payment by the fifteenth',
        'a bigger order',
        'a lower price',
      ], { audio: 'We can deliver by the fifteenth, as long as we receive your confirmation by Friday.' }),
    ],
  },
  'b2-4': {
    reading: {
      title: 'Annual review',
      text: "Good morning, everyone. I'd like to begin by giving you an overview of our sales this year. As you can see from the chart, sales rose steadily in the first half, then dropped slightly in the third quarter. Moving on to next year's targets, we expect a sharp increase thanks to our new product line. To sum up, it's been a solid year.",
    },
    practice: [
      q('p-b2-4-5', 'grammar', 'There has been a ___ increase in online sales — up 40%.', ['dramatic', 'dramatically', 'slight', 'slightly'], {
        explain: { th: 'หน้านามใช้ adjective และ 40% = มาก', en: 'Adjective before a noun; 40% is big.' },
      }),
      q('p-b2-4-6', 'vocabulary', 'Which phrase refers to a visual?', ['As you can see from the chart,', 'To sum up,', 'First of all,', 'Any questions?'], {
        explain: { th: 'As you can see… = ชี้ให้ดูภาพ/แผนภูมิ', en: 'As you can see… points to a visual.' },
      }),
      q('p-b2-4-7', 'reading', 'What happened in the third quarter?', [
        'Sales dropped slightly.',
        'Sales rose sharply.',
        'Sales stayed the same.',
        'The new product was launched.',
      ]),
      q('p-b2-4-8', 'listening', 'What is the speaker doing?', [
        'ending the presentation',
        'starting the presentation',
        'showing a chart',
        'changing topic',
      ], { audio: "That brings me to the end of my presentation. I'd be happy to take any questions." }),
    ],
  },
  'b2-5': {
    reading: {
      title: 'A late laptop',
      text: "Customer: I ordered a laptop two weeks ago and it still hasn't arrived. This is unacceptable.\nAgent: I'm very sorry for the delay. I've looked into your order, and it seems there was a problem with the courier. I'll arrange express delivery at no extra cost, and we'd like to offer you a 10% voucher for the inconvenience.",
    },
    practice: [
      q('p-b2-5-5', 'grammar', "I'd appreciate it if you ___ me a refund.", ['could give', 'give', 'will give', 'gave me to'], {
        explain: { th: "I'd appreciate it if you could… สุภาพมาก", en: "I'd appreciate it if you could… is very polite." },
      }),
      q('p-b2-5-6', 'vocabulary', 'The company offered a voucher as ___ for the delay.', ['compensation', 'complaint', 'competition', 'compliment'], {
        explain: { th: 'compensation = ค่าชดเชย', en: 'compensation = something given to make up for a problem.' },
      }),
      q('p-b2-5-7', 'reading', 'What caused the delay?', [
        'a problem with the courier',
        'a payment error',
        'the laptop was out of stock',
        'a wrong address',
      ]),
      q('p-b2-5-8', 'listening', 'What does the speaker offer?', ['a free date change', 'a full refund', 'a discount', 'an upgrade'], {
        audio: "I'm afraid we can't refund the ticket, but we'd be happy to change it to another date free of charge.",
      }),
    ],
  },
  // ───────────── C1 ─────────────
  'c1-1': {
    reading: {
      title: 'A record launch',
      text: "Seldom has a product launch generated so much excitement. Not only did pre-orders exceed expectations, but the company's share price also rose by 12% in a single day. What surprised analysts most, however, was how quickly competitors responded. Only when sales figures are published next month will we know whether the hype was justified.",
    },
    practice: [
      q('p-c1-1-5', 'grammar', 'Never before ___ so many people attend the conference.', ['had we seen', 'we had seen', 'we saw', 'did we saw'], {
        explain: { th: 'Never before + กลับประโยค', en: 'Never before triggers inversion.' },
      }),
      q('p-c1-1-6', 'grammar', 'It was the CEO ___ made the final decision.', ['who', 'what', 'which', 'whom'], {
        explain: { th: 'It was + คน + who…', en: 'It was + person + who…' },
      }),
      q('p-c1-1-7', 'reading', 'What surprised analysts most?', [
        'how quickly competitors responded',
        'the number of pre-orders',
        'the rise in share price',
        'the sales figures',
      ]),
      q('p-c1-1-8', 'listening', 'When did they understand how the accident happened?', [
        'after reviewing the footage',
        'immediately',
        'before the accident',
        'they never understood',
      ], { audio: 'Not until we reviewed the footage did we realise how the accident had happened.' }),
    ],
  },
  'c1-2': {
    reading: {
      title: 'Study abstract',
      text: 'This study examines the relationship between flexible working hours and employee wellbeing. The results suggest that flexibility may reduce stress, although the effect appears to be smaller among managers. It is likely that other factors, such as workload, also play a role. Further research is needed to draw firm conclusions.',
    },
    practice: [
      q('p-c1-2-5', 'vocabulary', 'The difference between the groups was statistically ___.', ['significant', 'signified', 'signal', 'sizeable'], {
        explain: { th: 'statistically significant = มีนัยสำคัญทางสถิติ', en: 'Collocation: statistically significant.' },
      }),
      q('p-c1-2-6', 'vocabulary', 'Which verb makes the claim most cautious? "The data ___ that prices will rise."', [
        'indicate',
        'prove',
        'guarantee',
        'confirm',
      ], { explain: { th: 'indicate ฟังไม่เด็ดขาดเท่า prove', en: 'indicate is less absolute than prove.' } }),
      q('p-c1-2-7', 'reading', 'What does the study conclude?', [
        'More research is needed for firm conclusions.',
        'Flexibility always reduces stress.',
        'Managers benefit the most.',
        'Workload has no effect.',
      ]),
      q('p-c1-2-8', 'listening', "What is the speaker's position?", [
        'cautiously optimistic',
        'certain the problem is solved',
        'very negative',
        'not interested',
      ], { audio: 'While the trend is broadly positive, it would be premature to claim the problem has been solved.' }),
    ],
  },
  'c1-3': {
    reading: {
      title: 'Proposal: automating invoices',
      text: 'Currently, invoices are processed manually, taking an average of six days. Having analysed three software options, we recommend CloudBooks. Implemented company-wide, it would reduce processing time to one day and save an estimated 1.2 million baht per year. The expected payback period is 14 months.',
    },
    practice: [
      q('p-c1-3-5', 'grammar', '___ by experts, the report offers valuable insights.', ['Written', 'Writing', 'Having writing', 'To write'], {
        explain: { th: 'รายงานถูกเขียน: V3', en: 'Passive meaning: past participle.' },
      }),
      q('p-c1-3-6', 'vocabulary', 'The first paragraph should ___ the main benefits.', ['outline', 'outlive', 'outrun', 'outdo'], {
        explain: { th: 'outline = สรุปภาพรวม', en: 'outline = summarise the main points.' },
      }),
      q('p-c1-3-7', 'reading', 'How long does invoice processing take now?', ['six days', 'one day', '14 months', 'three days']),
      q('p-c1-3-8', 'listening', 'What does the speaker believe?', [
        'The investment will pay for itself.',
        'The costs are too high.',
        'More review is needed.',
        'Two years is too long.',
      ], { audio: "Having reviewed the costs carefully, I'm convinced this investment will pay for itself within two years." }),
    ],
  },
  'c1-4': {
    reading: {
      title: 'Incident report',
      text: "On 3 April the website was unavailable for four hours. The update must have been installed without proper testing, as the error appeared immediately afterwards. The team can't have known about the conflict with the payment system, since it wasn't documented. In hindsight, we should have run the update on a test server first.",
    },
    practice: [
      q('p-c1-4-5', 'grammar', "The keys might ___ in the car. Let's check.", ['have been left', 'been left', 'have left them', 'leave'], {
        explain: { th: 'might have been + V3 (passive อดีต)', en: 'might have been + past participle.' },
      }),
      q('p-c1-4-6', 'vocabulary', 'A small but important detail was ___ during the review.', ['overlooked', 'overseen', 'overdone', 'overtaken'], {
        explain: { th: 'overlook = มองข้าม', en: 'overlook = fail to notice.' },
      }),
      q('p-c1-4-7', 'reading', 'What should the team have done?', [
        'run the update on a test server',
        'documented the payment system',
        'installed the update faster',
        'closed the website',
      ]),
      q('p-c1-4-8', 'listening', 'What is the speaker suggesting?', [
        'The listener should have told them sooner.',
        'The delay was unavoidable.',
        'The plan was perfect.',
        'The listener did nothing wrong.',
      ], { audio: 'You could have mentioned the delay a bit earlier — it would have given us more time to plan.' }),
    ],
  },
  'c1-5': {
    reading: {
      title: 'Chairing a meeting',
      text: "Right, let's get started. The aim of today's meeting is to agree on the new travel policy. Somchai, could you kick off by summarising the current costs? … Thanks. I think we're getting a bit sidetracked, so let's park the issue of hotel standards for now. So, to recap: we've agreed to cap economy flights at 20,000 baht, and Lin will draft the policy by Friday.",
    },
    practice: [
      q('p-c1-5-5', 'vocabulary', 'Can you ___ the main points before we finish?', ['go over', 'go off', 'go out', 'go by'], {
        explain: { th: 'go over = ทบทวน', en: 'go over = review.' },
      }),
      q('p-c1-5-6', 'vocabulary', 'Could you ___ us off by presenting the figures?', ['kick', 'start', 'push', 'set'], {
        explain: { th: 'kick off = เริ่ม', en: 'kick off = begin.' },
      }),
      q('p-c1-5-7', 'reading', 'What did the group agree?', [
        'to cap economy flights at 20,000 baht',
        'to raise hotel standards',
        'to cancel all travel',
        'that Somchai will draft the policy',
      ]),
      q('p-c1-5-8', 'listening', 'Why does the chair want to stay on topic?', [
        'There is little time left.',
        'Nobody is talking.',
        'The topic is boring.',
        'The meeting has just started.',
      ], { audio: "Let's try to stick to the point — we only have ten minutes left and three items on the agenda." }),
    ],
  },
  // ───────────── C2 ─────────────
  'c2-1': {
    reading: {
      title: 'After the crisis',
      text: 'Had the regulators intervened earlier, the crisis would not have escalated as it did. It is imperative that lessons be learned: the committee has recommended that every bank undergo annual stress tests. Should institutions fail to comply, they will face substantial penalties — a measure that, albeit belated, has been widely welcomed.',
    },
    practice: [
      q('p-c2-1-5', 'grammar', 'The doctor recommended that he ___ more rest.', ['get', 'gets', 'got', 'will get'], {
        explain: { th: 'subjunctive หลัง recommend: V1', en: 'Subjunctive after recommend: base verb.' },
      }),
      q('p-c2-1-6', 'grammar', '___ it not for her support, I would have given up.', ['Were', 'Was', 'Had', 'If'], {
        explain: { th: 'Were it not for… = If it were not for…', en: 'Were it not for… = If it were not for…' },
      }),
      q('p-c2-1-7', 'reading', 'What has the committee recommended?', [
        'annual stress tests for every bank',
        'closing failing banks',
        'removing penalties',
        'delaying regulation',
      ]),
      q('p-c2-1-8', 'listening', 'How did the speaker meet the business partner?', [
        'because of a missed flight',
        'on a planned trip',
        'at a conference',
        'through a friend',
      ], { audio: "Had I not missed that connecting flight, I'd never have met my business partner." }),
    ],
  },
  'c2-2': {
    reading: {
      title: 'Two versions of one message',
      text: "Informal: Hey all — just a heads-up that the system's going down tonight, so save your stuff!\n\nFormal: Please be advised that the system will be unavailable this evening owing to scheduled maintenance. Staff are requested to save all work prior to 6 p.m.",
    },
    practice: [
      q('p-c2-2-5', 'vocabulary', 'Which is the formal equivalent of "get"?', ['obtain', 'grab', 'snag', 'pick up'], {
        explain: { th: 'obtain เป็นคำทางการ', en: 'obtain is formal.' },
      }),
      q('p-c2-2-6', 'vocabulary', 'Cutting the training budget was ___ — it saved money but caused bigger problems later.', [
        'a false economy',
        'a blessing in disguise',
        'a piece of cake',
        'the last straw',
      ], { explain: { th: 'a false economy = ประหยัดแต่สุดท้ายเสียมากกว่า', en: 'a false economy = saving that costs more later.' } }),
      q('p-c2-2-7', 'reading', 'In the formal version, why will the system be unavailable?', [
        'scheduled maintenance',
        'a power cut',
        'a security breach',
        'a public holiday',
      ]),
      q('p-c2-2-8', 'listening', 'What has he been doing?', ['working very long hours', 'relaxing', 'saving money', 'sleeping a lot'], {
        audio: "He's been burning the candle at both ends for weeks — no wonder he's exhausted.",
      }),
    ],
  },
  'c2-3': {
    reading: {
      title: 'Executive summary',
      text: 'Q3 revenue fell 8% year-on-year, driven chiefly by weaker demand in Europe. Cost controls mitigated the impact on margins. We recommend reallocating 15% of the marketing budget to the Asian market, where growth remains robust. Board approval is requested by 30 October.',
    },
    practice: [
      q('p-c2-3-5', 'grammar', 'Which sentence is the most concise?', [
        'We recommend delaying the launch.',
        'We would like to make a recommendation that the launch be delayed.',
        'It is our recommendation that a delay of the launch be made.',
        'The making of a recommendation to delay the launch is proposed.',
      ], { explain: { th: 'ใช้กริยา recommend ตรง ๆ', en: 'Use the verb recommend directly.' } }),
      q('p-c2-3-6', 'vocabulary', 'Growth in Asia remains ___.', ['robust', 'robotic', 'rusty', 'rugged'], {
        explain: { th: 'robust growth = เติบโตแข็งแกร่ง', en: 'robust growth = strong growth.' },
      }),
      q('p-c2-3-7', 'reading', 'What is requested by 30 October?', ['board approval', 'a European report', 'Q3 revenue figures', 'new cost controls']),
      q('p-c2-3-8', 'listening', 'What is the main message?', [
        'Overheads must be cut to avoid losses.',
        'Profits will rise in spring.',
        'The company is already making a loss.',
        'Spending should increase.',
      ], { audio: "The bottom line is this: unless we cut overheads, we'll be in the red by next spring." }),
    ],
  },
  'c2-4': {
    reading: {
      title: 'Reading between the lines',
      text: "In some cultures, a direct 'no' is considered rude, so a request may be met with 'That might be difficult' or 'We'll consider it.' Visitors who take such answers at face value may wrongly assume agreement. Building rapport before discussing business — often over a meal — is equally important, and rushing straight to the contract can be seen as a faux pas.",
    },
    practice: [
      q('p-c2-4-5', 'grammar', '"Do you think they\'ll sign?" — "I doubt ___."', ['it', 'so', 'that it', 'not'], {
        explain: { th: 'ใช้ I doubt it (ไม่ใช่ I doubt so)', en: 'Say I doubt it, not I doubt so.' },
      }),
      q('p-c2-4-6', 'grammar', "I asked her to review the draft, but she hasn't ___ yet.", ['done so', 'made so', 'done it so', 'so done'], {
        explain: { th: 'do so แทนวลีกริยาที่ซ้ำ', en: 'do so replaces a repeated verb phrase.' },
      }),
      q('p-c2-4-7', 'reading', 'What may "That might be difficult" really mean?', ['No.', 'Yes, definitely.', 'Ask me again tomorrow.', "It's easy."]),
      q('p-c2-4-8', 'listening', 'What is the speaker doing?', [
        'politely disagreeing',
        'strongly agreeing',
        'asking for the figures',
        'changing the subject',
      ], { audio: "With all due respect, I'm not sure the figures quite support that conclusion." }),
    ],
  },
  'c2-5': {
    reading: {
      title: 'Statement from the CEO',
      text: 'Earlier today, it was discovered that customer data may have been accessed by an unauthorised party. Around 3,000 accounts are believed to have been affected. We take full responsibility and have engaged independent experts to investigate. All affected customers will be contacted within 24 hours. We are committed to full transparency and will provide updates as they become available.',
    },
    practice: [
      q('p-c2-5-5', 'grammar', 'The fire is reported ___ in the kitchen.', ['to have started', 'to start', 'starting', 'that started'], {
        explain: { th: 'เหตุการณ์อดีต: to have + V3', en: 'Past event: to have + past participle.' },
      }),
      q('p-c2-5-6', 'vocabulary', 'We are taking steps to ___ customer data in future.', ['safeguard', 'safekeep', 'saveguard', 'guardsafe'], {
        explain: { th: 'safeguard = ปกป้อง', en: 'safeguard = protect.' },
      }),
      q('p-c2-5-7', 'reading', 'How many accounts are believed to be affected?', ['around 3,000', 'around 300', 'around 30,000', 'all of them']),
      q('p-c2-5-8', 'listening', 'When will the next update come?', ['within an hour', 'tomorrow', 'next week', 'There will be no update.'], {
        audio: "We are aware of the issue and are working to rectify it. We'll provide a further update within the hour.",
      }),
    ],
  },
}
