import { q } from '../lib/question'
import type { Bilingual, ExamSection, Question } from '../types'

/*
 * Extra TOEIC Listening & Reading practice written in the format of the real
 * test (part structure, question types, distractor styles). All items are
 * original — they are NOT copied from official ETS materials.
 *
 * Real test: 200 questions, about 2 hours.
 *   Listening (45 min, 100 Q): Part 1 Photographs 6 · Part 2 Question–Response 25
 *     · Part 3 Conversations 39 (13 sets × 3) · Part 4 Talks 30 (10 sets × 3)
 *   Reading (75 min, 100 Q): Part 5 Incomplete Sentences 30 · Part 6 Text
 *     Completion 16 (4 texts × 4) · Part 7 Reading Comprehension 54
 *     (single passages 29 + double/triple passages 25)
 */

const LETTERS = 'ABCD'

/** Part 1: the picture is described in text; the four statements are read aloud in on-screen order. */
function photo(id: string, scene: string, options: [string, ...string[]], explain: Bilingual): Question {
  const base = q(id, 'listening', 'Listen and choose the statement that best describes the picture.', options, {
    passage: `📷 ${scene}`,
    explain,
  })
  return { ...base, audio: base.options.map((o, i) => `(${LETTERS[i]}) ${o}`).join(' ') }
}

// ---------------------------------------------------------------- Part 1

const PART1: ExamSection = {
  id: 'toeic-part1',
  exam: 'TOEIC',
  title: { th: 'TOEIC Part 1: บรรยายภาพ', en: 'TOEIC Part 1: Photographs' },
  intro: {
    th: 'ข้อสอบจริงมี 6 ข้อ ดูภาพแล้วฟังประโยค 4 ประโยค เลือกประโยคที่บรรยายภาพได้ถูกต้องที่สุด (ในเว็บนี้ใช้คำบรรยายภาพแทนรูปถ่าย และในข้อสอบจริงจะไม่เห็นตัวเลือกเป็นตัวหนังสือ)',
    en: 'The real test has 6 questions. Look at a photo, hear four statements and choose the one that best describes it. (Here the photo is described in text; in the real test the options are audio only.)',
  },
  tips: [
    { th: 'ก่อนเสียงเริ่ม ดูภาพแล้วถามตัวเอง: ใคร ทำอะไร อยู่ที่ไหน มีของอะไรเด่น ๆ', en: 'Before the audio, ask: who, doing what, where, which objects stand out.' },
    { th: 'ระวังคำที่ "เห็นในภาพ" แต่ใช้กริยาผิด เช่น ภาพมีโต๊ะ แต่ประโยคบอกว่ากำลังย้ายโต๊ะ', en: 'Beware of options that name an object in the photo but use the wrong action.' },
    { th: 'is being + V3 = กำลังมีคนทำอยู่ / has been + V3 = ทำเสร็จแล้ว (ภาพไม่มีคน มักเป็น has been / is + V3)', en: 'is being done = an action in progress; has been done = a finished state (common in photos with no people).' },
  ],
  practice: [
    photo('tx-p1-1', 'A woman is sitting at a desk, typing on a laptop. A cup of coffee is next to the laptop.', [
      'She is working on a computer.',
      'She is pouring a cup of coffee.',
      'She is closing a laptop.',
      'She is standing near a window.',
    ], { th: 'ผู้หญิงกำลังพิมพ์บนแล็ปท็อป = working on a computer', en: 'Typing on a laptop = working on a computer.' }),
    photo('tx-p1-2', 'Several boxes are stacked on a wooden pallet in an empty warehouse. No people are in the picture.', [
      'Some boxes have been piled up.',
      'Some workers are lifting boxes.',
      'A truck is being unloaded.',
      'The boxes are being opened.',
    ], { th: 'ไม่มีคนในภาพ ตัวเลือกที่มีคนทำกริยา (is being…) จึงผิด', en: 'No people are shown, so "is being…" actions are wrong.' }),
    photo('tx-p1-3', 'Two men are shaking hands across a table in a meeting room. Documents are spread on the table.', [
      'They are greeting each other.',
      'They are signing a contract.',
      'They are arranging some chairs.',
      'They are leaving the room.',
    ], { th: 'จับมือ = ทักทาย (greeting) ยังไม่เห็นว่ากำลังเซ็นสัญญา', en: 'Shaking hands = greeting; nobody is signing.' }),
    photo('tx-p1-4', 'A man is standing on a ladder, replacing a light bulb in the ceiling.', [
      'He is reaching up toward the ceiling.',
      'He is climbing down a staircase.',
      'He is painting a wall.',
      'He is carrying a ladder.',
    ], { th: 'ยืนบนบันไดเปลี่ยนหลอดไฟ = เอื้อมขึ้นไปที่เพดาน', en: 'On a ladder changing a bulb = reaching up to the ceiling.' }),
    photo('tx-p1-5', 'Bicycles are parked in a row along a fence beside a street. The street is empty.', [
      'Some bicycles are lined up next to a fence.',
      'Some people are riding bicycles.',
      'A fence is being repaired.',
      'Cars are parked along the street.',
    ], { th: 'จักรยานจอดเรียงข้างรั้ว = lined up next to a fence', en: 'Bicycles in a row by a fence = lined up next to a fence.' }),
    photo('tx-p1-6', 'A server is placing plates of food on a table where three customers are seated.', [
      'A meal is being served.',
      'The customers are paying the bill.',
      'The table is being cleared.',
      'The chairs are empty.',
    ], { th: 'พนักงานกำลังวางจาน = กำลังเสิร์ฟอาหาร (is being served)', en: 'Placing plates = the meal is being served.' }),
    photo('tx-p1-7', 'A woman is examining a document while holding a pen. A printer is behind her.', [
      'She is reviewing some paperwork.',
      'She is fixing a printer.',
      'She is writing on a whiteboard.',
      'She is putting paper into a printer.',
    ], { th: 'examining a document = reviewing paperwork (คำพ้องความหมาย)', en: 'examining a document = reviewing paperwork (a synonym).' }),
    photo('tx-p1-8', 'Passengers are waiting on a train platform. A train is approaching the station.', [
      'People are waiting for a train.',
      'People are boarding a bus.',
      'A train has stopped at the platform.',
      'The platform is being swept.',
    ], { th: 'รถไฟกำลังเข้ามา ยังไม่จอด → has stopped ผิด', en: 'The train is still approaching, so "has stopped" is wrong.' }),
  ],
}

// ---------------------------------------------------------------- Part 2

const PART2_EXTRA: Question[] = [
  q('tx-p2-1', 'listening', 'Choose the best response.', ['Usually at nine.', 'In the lobby.', 'Yes, it opened.', 'Mr. Park did.'], {
    audio: 'When does the bank open on Saturdays?',
    explain: { th: 'When → ตอบเวลา', en: 'When → a time.' },
  }),
  q('tx-p2-2', 'listening', 'Choose the best response.', ["Because the client asked for more time.", 'Next Tuesday.', 'A shorter meeting.', 'Yes, I postponed it.'], {
    audio: 'Why was the product launch postponed?',
    explain: { th: 'Why → ตอบเหตุผล (Because…) ; "Yes" ตอบคำถาม Wh- ไม่ได้', en: 'Why → a reason. "Yes" cannot answer a Wh- question.' },
  }),
  q('tx-p2-3', 'listening', 'Choose the best response.', ["I'd prefer the window, please.", 'It was a long flight.', 'Seat belts must be worn.', 'Yes, both of them.'], {
    audio: 'Would you like an aisle seat or a window seat?',
    explain: { th: 'คำถามแบบให้เลือก (A or B) → เลือกอย่างหนึ่ง', en: 'A choice question (A or B) → pick one.' },
  }),
  q('tx-p2-4', 'listening', 'Choose the best response.', ["Let me check the schedule.", 'A new manager.', 'In the training room.', 'It was printed.'], {
    audio: "Isn't the new manager starting this week?",
    explain: { th: 'คำถามปฏิเสธ ตอบอ้อม ๆ ว่า "ขอเช็กก่อน" ได้ ; ตัวเลือก "A new manager." แค่ทวนคำ', en: 'An indirect "let me check" works; "A new manager" only repeats words.' },
  }),
  q('tx-p2-5', 'listening', 'Choose the best response.', ['About three hundred dollars.', 'By credit card.', 'Two copies.', 'At the airport.'], {
    audio: 'How much will the repairs cost?',
    explain: { th: 'How much → ตอบจำนวนเงิน', en: 'How much → an amount.' },
  }),
  q('tx-p2-6', 'listening', 'Choose the best response.', ["Sure, what time works for you?", 'I met her last year.', 'The meeting room is full.', 'No, it was cancelled yesterday.'], {
    audio: 'Can we meet tomorrow to discuss the budget?',
    explain: { th: 'คำขอนัดหมาย ตอบรับและถามเวลาต่อ', en: 'A request to meet → agree and ask for a time.' },
  }),
  q('tx-p2-7', 'listening', 'Choose the best response.', ['The one on the left.', 'Yes, I wrote it.', 'It was a long report.', 'Tomorrow afternoon.'], {
    audio: 'Which file should I send to the client?',
    explain: { th: 'Which → เลือกสิ่งใดสิ่งหนึ่ง', en: 'Which → identify one item.' },
  }),
  q('tx-p2-8', 'listening', 'Choose the best response.', ["No, I haven't had a chance yet.", 'Yes, the email address.', 'It is on the second floor.', 'A new proposal.'], {
    audio: "Have you read the proposal from Lakeside Design?",
    explain: { th: 'Yes/No question → "No, I haven\'t…" สอดคล้อง', en: 'A Yes/No question → "No, I haven\'t…".' },
  }),
  q('tx-p2-9', 'listening', 'Choose the best response.', ["That's a great idea.", 'The office is open.', 'At lunchtime.', 'Some new windows.'], {
    audio: "Why don't we open a second office in Chiang Mai?",
    explain: { th: '"Why don\'t we…?" = คำแนะนำ ไม่ได้ถามเหตุผล → ตอบรับ/ปฏิเสธข้อเสนอ', en: '"Why don\'t we…?" is a suggestion, not a request for a reason.' },
  }),
  q('tx-p2-10', 'listening', 'Choose the best response.', ['Ms. Ortiz in accounting.', 'On the shelf.', 'Since Monday.', 'It was approved.'], {
    audio: 'Who approves overtime requests?',
    explain: { th: 'Who → ตอบบุคคล/ตำแหน่ง', en: 'Who → a person.' },
  }),
  q('tx-p2-11', 'listening', 'Choose the best response.', ["It's on the corner of Main Street.", 'I parked there.', 'For about an hour.', 'Yes, a new restaurant.'], {
    audio: 'Where is the new restaurant located?',
    explain: { th: 'Where → ตอบสถานที่ ; "I parked there" ใช้คำ there หลอก', en: 'Where → a location.' },
  }),
  q('tx-p2-12', 'listening', 'Choose the best response.', ['The printer is out of toner.', 'Print them in colour.', 'Twenty copies, please.', 'Yes, it printed well.'], {
    audio: "Why haven't the brochures been printed yet?",
    explain: { th: 'ถามเหตุผล ตอบด้วยสาเหตุ (หมึกหมด) โดยไม่ต้องมี Because', en: 'A reason without "because" — the printer is out of toner.' },
  }),
  q('tx-p2-13', 'listening', 'Choose the best response.', ['Every two weeks.', 'Two hours.', 'Yes, often.', 'In the conference room.'], {
    audio: 'How often does the safety committee meet?',
    explain: { th: 'How often → ความถี่', en: 'How often → frequency.' },
  }),
  q('tx-p2-14', 'listening', 'Choose the best response.', ["I'll ask the IT department.", 'Yes, the password.', 'A new computer.', 'I logged out.'], {
    audio: "I can't log in to the sales database.",
    explain: { th: 'ประโยคบอกเล่าปัญหา → เสนอทางแก้', en: 'A statement of a problem → offer a solution.' },
  }),
  q('tx-p2-15', 'listening', 'Choose the best response.', ['Yes, it was submitted on Friday.', 'He reported it.', 'A long report.', 'Submit it online.'], {
    audio: 'The quarterly report has been submitted, hasn\'t it?',
    explain: { th: 'Tag question → ยืนยันข้อมูล', en: 'A tag question → confirm.' },
  }),
]

// ---------------------------------------------------------------- Part 3

const C1 =
  "Woman: Hi Tom, I'm calling about the catering order for Thursday's staff lunch. Man: Sure, Ms. Wong. Is there a problem? Woman: Not a problem, but twelve more people have registered, so we'll need food for sixty instead of forty-eight. Man: That's fine. I'll update the order and email you a revised invoice this afternoon."
const C2 =
  "Man 1: Kenji, have you seen the results of the customer survey? Man 2: Yes. Most customers like our new app, but many said the checkout process is too slow. Woman: That matches what we heard at the trade show. Man 1: Then let's make it the top priority. Kenji, could you set up a meeting with the developers for Monday?"
const C3 =
  "Woman: Excuse me, I bought this printer here last week, but it keeps jamming. Man: I'm sorry to hear that. Do you have your receipt? Woman: Yes, here it is. Man: Thank you. Since it's within thirty days, I can exchange it for a new one, or you can choose a different model and pay the difference."
const C4_GRAPHIC =
  'Room booking — Friday\n Room A (seats 6) ........ 9:00–11:00 booked\n Room B (seats 12) ....... free all day\n Room C (seats 20) ....... 13:00–15:00 booked\n Room D (seats 40) ....... free all day'
const C4 =
  "Man: I need a room for the training session on Friday afternoon. There'll be about fifteen people. Woman: Let me look at the schedule. Room C would be the right size, but it's booked in the afternoon. Man: Then we'll take the next bigger one — it's better to have extra space than not enough."
const C5 =
  "Woman: Daniel, the shipment of laptops for the new employees hasn't arrived. Man: I know. The supplier said there's a delay at the port. It should be here by Wednesday. Woman: But the new staff start on Monday. Man: I'll ask IT if they can lend us some older laptops for a few days."

const PART3_EXTRA: Question[] = [
  q('tx-p3-1', 'listening', 'Why is the woman calling?', ['To change the size of an order', 'To cancel a staff lunch', 'To complain about the food', 'To ask for a discount'], {
    audio: C1,
    explain: { th: 'เพิ่มจำนวนคนจาก 48 เป็น 60 = เปลี่ยนขนาดออร์เดอร์', en: 'She increases the order from 48 to 60 people.' },
  }),
  q('tx-p3-2', 'listening', 'How many people will the order be for now?', ['60', '48', '12', '40'], {
    audio: C1,
    explain: { th: '"food for sixty instead of forty-eight"', en: '"food for sixty instead of forty-eight".' },
  }),
  q('tx-p3-3', 'listening', 'What will the man send this afternoon?', ['A revised invoice', 'A new menu', 'A registration form', 'A delivery schedule'], {
    audio: C1,
    explain: { th: '"email you a revised invoice this afternoon"', en: '"email you a revised invoice this afternoon".' },
  }),
  q('tx-p3-4', 'listening', 'What problem did customers mention?', ['The checkout process is slow.', 'The app is too expensive.', 'The app crashes often.', 'Delivery takes too long.'], {
    audio: C2,
    explain: { th: '"the checkout process is too slow"', en: '"the checkout process is too slow".' },
  }),
  q('tx-p3-5', 'listening', 'Where did the woman hear similar feedback?', ['At a trade show', 'In a news article', 'From a supplier', 'During a job interview'], {
    audio: C2,
    explain: { th: '"what we heard at the trade show" (บทสนทนา 3 คน)', en: '"what we heard at the trade show" (three-speaker conversation).' },
  }),
  q('tx-p3-6', 'listening', 'What is Kenji asked to do?', ['Arrange a meeting', 'Write a survey', 'Contact customers', 'Attend a trade show'], {
    audio: C2,
    explain: { th: '"could you set up a meeting with the developers"', en: '"set up a meeting with the developers".' },
  }),
  q('tx-p3-7', 'listening', 'Where most likely are the speakers?', ['In an electronics store', 'In a print shop', 'In a bank', 'In a post office'], {
    audio: C3,
    explain: { th: 'ลูกค้านำเครื่องพิมพ์มาคืนที่ร้าน', en: 'A customer is returning a printer to the store.' },
  }),
  q('tx-p3-8', 'listening', 'What does the man ask for?', ['A receipt', 'A credit card', 'A phone number', 'A product manual'], {
    audio: C3,
    explain: { th: '"Do you have your receipt?"', en: '"Do you have your receipt?"' },
  }),
  q('tx-p3-9', 'listening', 'What does the man offer?', ['An exchange', 'A full refund in cash', 'A free repair', 'A gift card'], {
    audio: C3,
    explain: { th: '"exchange it for a new one" ; ไม่ได้พูดถึงคืนเงินสด', en: '"exchange it for a new one" — no cash refund is mentioned.' },
  }),
  q('tx-p3-10', 'listening', 'Look at the graphic. Which room will the man most likely book?', ['Room D', 'Room C', 'Room B', 'Room A'], {
    passage: C4_GRAPHIC,
    audio: C4,
    explain: {
      th: 'ข้อแบบดูกราฟิก: 15 คน ห้อง C ไม่ว่าง → เลือกห้องที่ใหญ่กว่าถัดไป = Room D (40 ที่)',
      en: 'Graphic question: 15 people, Room C is booked → the next bigger room is Room D.',
    },
  }),
  q('tx-p3-11', 'listening', 'What is the problem with the laptops?', ['The delivery is delayed.', 'They are the wrong model.', 'They are too expensive.', 'Some are damaged.'], {
    audio: C5,
    explain: { th: '"there\'s a delay at the port"', en: '"there\'s a delay at the port".' },
  }),
  q('tx-p3-12', 'listening', 'What does the woman imply when she says, "But the new staff start on Monday"?', [
    'The laptops are needed sooner.',
    'The start date should be changed.',
    'She will train the new staff.',
    'The supplier made a mistake.',
  ], {
    audio: C5,
    explain: {
      th: 'ข้อถามเจตนาผู้พูด (implied meaning): ของมาวันพุธ แต่พนักงานเริ่มวันจันทร์ → ต้องการเร็วกว่านั้น',
      en: 'Implied-meaning question: arriving Wednesday is too late for a Monday start.',
    },
  }),
]

// ---------------------------------------------------------------- Part 4

const T1 =
  "Good morning, everyone, and welcome to Brightline Manufacturing. I'm Sara, and I'll be leading today's factory tour. Before we begin, please put on the safety glasses you were given at reception. We'll start in the assembly area, then visit the quality-control lab. Photography is not allowed inside the factory, so please keep your phones in your pockets. The tour will finish at the visitor centre at about eleven thirty."
const T2 =
  "Hi Mr. Grant, this is Lucy from Harbor Office Supplies. I'm calling about your order of twenty office chairs. Unfortunately, the model you chose is out of stock until next month. We do have a similar model in grey that costs a little more, but we'd be happy to offer it at the same price. Please call me back at extension 214 to let me know which you prefer."
const T3 =
  "And now the traffic report. Highway 9 northbound is closed between exits 14 and 16 because of road repairs. Drivers heading downtown should use Riverside Avenue instead. The work is expected to continue until Friday. Also, remember that the city marathon is this Sunday, so many central streets will be closed from six a.m. until noon."
const T4 =
  "Thanks for joining this quarter's sales meeting. I have some good news: our online sales rose by eighteen percent, mostly thanks to the new mobile app. However, sales in our physical stores fell slightly. Next quarter, we'll test a program where customers can order online and pick up in store. I'd like each regional manager to choose two stores to take part. Please send me your choices by the end of the month."

const PART4_EXTRA: Question[] = [
  q('tx-p4-1', 'listening', 'Who most likely is the speaker?', ['A tour guide', 'A factory manager', 'A safety inspector', 'A receptionist'], {
    audio: T1,
    explain: { th: '"I\'ll be leading today\'s factory tour"', en: '"I\'ll be leading today\'s factory tour".' },
  }),
  q('tx-p4-2', 'listening', 'What are listeners asked to do first?', ['Put on safety glasses', 'Turn off their phones', 'Sign a form', 'Visit the laboratory'], {
    audio: T1,
    explain: { th: '"Before we begin, please put on the safety glasses"', en: '"Before we begin, please put on the safety glasses".' },
  }),
  q('tx-p4-3', 'listening', 'What is NOT allowed during the tour?', ['Taking photographs', 'Asking questions', 'Entering the lab', 'Wearing glasses'], {
    audio: T1,
    explain: { th: '"Photography is not allowed"', en: '"Photography is not allowed".' },
  }),
  q('tx-p4-4', 'listening', 'What is the purpose of the message?', ['To report a problem with an order', 'To confirm a delivery date', 'To request a payment', 'To advertise a sale'], {
    audio: T2,
    explain: { th: 'สินค้าหมดสต็อก = ปัญหากับออร์เดอร์', en: 'The chosen model is out of stock.' },
  }),
  q('tx-p4-5', 'listening', 'What does the speaker offer?', ['A similar product at the same price', 'A full refund', 'Free delivery', 'A discount on the next order'], {
    audio: T2,
    explain: { th: '"a similar model … offer it at the same price"', en: '"a similar model … at the same price".' },
  }),
  q('tx-p4-6', 'listening', 'What is the listener asked to do?', ['Return a call', 'Visit the store', 'Send an email', 'Cancel the order'], {
    audio: T2,
    explain: { th: '"Please call me back at extension 214"', en: '"Please call me back at extension 214".' },
  }),
  q('tx-p4-7', 'listening', 'Why is part of Highway 9 closed?', ['Road repairs', 'A marathon', 'An accident', 'Bad weather'], {
    audio: T3,
    explain: { th: '"because of road repairs" — marathon คือเรื่องวันอาทิตย์ (ตัวหลอก)', en: '"because of road repairs" — the marathon is a distractor.' },
  }),
  q('tx-p4-8', 'listening', 'What does the speaker suggest drivers do?', ['Take Riverside Avenue', 'Leave home earlier', 'Use public transport', 'Avoid driving on Friday'], {
    audio: T3,
    explain: { th: '"should use Riverside Avenue instead"', en: '"should use Riverside Avenue instead".' },
  }),
  q('tx-p4-9', 'listening', 'What will happen on Sunday?', ['A marathon will take place.', 'Highway 9 will reopen.', 'A new road will open.', 'Road repairs will start.'], {
    audio: T3,
    explain: { th: '"the city marathon is this Sunday"', en: '"the city marathon is this Sunday".' },
  }),
  q('tx-p4-10', 'listening', 'What caused the increase in online sales?', ['A new mobile app', 'Lower prices', 'A TV campaign', 'More physical stores'], {
    audio: T4,
    explain: { th: '"mostly thanks to the new mobile app"', en: '"mostly thanks to the new mobile app".' },
  }),
  q('tx-p4-11', 'listening', 'What will the company test next quarter?', ['An order-online, pick-up-in-store program', 'A new store design', 'A customer loyalty card', 'Longer store hours'], {
    audio: T4,
    explain: { th: '"customers can order online and pick up in store"', en: '"order online and pick up in store".' },
  }),
  q('tx-p4-12', 'listening', 'What are regional managers asked to do?', ['Choose two stores', 'Hire new staff', 'Prepare a sales report', 'Visit the head office'], {
    audio: T4,
    explain: { th: '"each regional manager to choose two stores"', en: '"choose two stores to take part".' },
  }),
]

// ---------------------------------------------------------------- Part 5

const PART5_EXTRA: Question[] = [
  q('tx-p5-1', 'grammar', 'Ms. Chen asked that all reports ___ submitted by noon on Friday.', ['be', 'are', 'were', 'being'], {
    explain: { th: 'ask/request/require that + ประธาน + V1 (subjunctive) → be', en: 'ask that + subject + base verb (subjunctive) → be.' },
  }),
  q('tx-p5-2', 'grammar', 'The conference room is available ___ 2:00 and 4:00 this afternoon.', ['between', 'from', 'during', 'within'], {
    explain: { th: 'between A and B', en: 'between A and B.' },
  }),
  q('tx-p5-3', 'grammar', 'Customers ___ purchase three or more items will receive free shipping.', ['who', 'which', 'whose', 'whom'], {
    explain: { th: 'ขยายคน + ทำหน้าที่ประธานของ purchase → who', en: 'Relative pronoun for people as subject → who.' },
  }),
  q('tx-p5-4', 'vocabulary', 'The hotel offers a ___ shuttle service to and from the airport.', ['complimentary', 'complementary', 'compliant', 'competent'], {
    explain: { th: 'complimentary = ฟรี (คำหลอกที่ออกบ่อย: complementary = เสริมกัน)', en: 'complimentary = free (commonly confused with complementary).' },
  }),
  q('tx-p5-5', 'grammar', 'By the time the new manager arrives, the team ___ the project.', ['will have completed', 'has completed', 'completes', 'completed'], {
    explain: { th: 'By the time + อนาคต → future perfect', en: 'By the time + future → future perfect.' },
  }),
  q('tx-p5-6', 'grammar', 'Neither the director ___ her assistant was available for comment.', ['nor', 'or', 'and', 'but'], {
    explain: { th: 'neither … nor', en: 'neither … nor.' },
  }),
  q('tx-p5-7', 'grammar', 'Please make sure the documents are signed ___ before sending them.', ['properly', 'proper', 'property', 'propriety'], {
    explain: { th: 'ขยายกริยา signed → adverb', en: 'Modifies the verb signed → adverb.' },
  }),
  q('tx-p5-8', 'vocabulary', 'Applicants must have at least five years of ___ experience.', ['relevant', 'relieved', 'reliant', 'reluctant'], {
    explain: { th: 'relevant experience = ประสบการณ์ที่เกี่ยวข้อง', en: 'relevant experience = related experience.' },
  }),
  q('tx-p5-9', 'grammar', 'The new software is easy to use, ___ some staff still need training.', ['although', 'despite', 'because', 'unless'], {
    explain: { th: 'ขัดแย้ง + ตามด้วยประโยค → although (despite ตามด้วยนาม)', en: 'Contrast + a clause → although (despite needs a noun).' },
  }),
  q('tx-p5-10', 'grammar', 'Mr. Kim is ___ of the two candidates.', ['the more experienced', 'the most experienced', 'more experienced', 'experienced'], {
    explain: { th: 'เปรียบเทียบ 2 สิ่ง ใช้ the + comparative', en: 'Of two → the + comparative.' },
  }),
  q('tx-p5-11', 'vocabulary', 'The company plans to ___ its operations into Southeast Asia next year.', ['expand', 'extend', 'expose', 'expend'], {
    explain: { th: 'expand operations into … = ขยายกิจการไปยัง…', en: 'expand operations into a region.' },
  }),
  q('tx-p5-12', 'grammar', 'Ms. Patel prefers to handle client complaints ___.', ['herself', 'her', 'hers', 'she'], {
    explain: { th: 'reflexive เน้นว่าทำเอง', en: 'A reflexive pronoun for emphasis.' },
  }),
  q('tx-p5-13', 'grammar', 'The shipment ___ yesterday, but it has not arrived yet.', ['was sent', 'sent', 'has sent', 'was sending'], {
    explain: { th: 'ของถูกส่ง → passive + yesterday → past simple passive', en: 'The shipment is acted on + yesterday → past passive.' },
  }),
  q('tx-p5-14', 'vocabulary', 'Thank you for your ___ in this matter.', ['cooperation', 'corporation', 'coordination', 'correction'], {
    explain: { th: 'สำนวนจดหมาย: Thank you for your cooperation', en: 'Fixed phrase: Thank you for your cooperation.' },
  }),
  q('tx-p5-15', 'grammar', 'If we ___ the order earlier, we would have received a discount.', ['had placed', 'placed', 'have placed', 'would place'], {
    explain: { th: 'If แบบที่ 3: If + had V3, would have V3', en: 'Third conditional: If + had + V3.' },
  }),
  q('tx-p5-16', 'grammar', 'The factory has reduced its energy use ___ 20 percent since last year.', ['by', 'at', 'for', 'with'], {
    explain: { th: 'เพิ่ม/ลด + by + จำนวน', en: 'increase/reduce by + amount.' },
  }),
  q('tx-p5-17', 'vocabulary', 'All employees are ___ to attend the safety training.', ['required', 'requested of', 'requiring', 'requirement'], {
    explain: { th: 'be required to + V1 = จำเป็นต้อง', en: 'be required to + verb.' },
  }),
  q('tx-p5-18', 'grammar', 'The marketing budget was ___ than we had expected.', ['higher', 'highest', 'high', 'highly'], {
    explain: { th: 'มี than → comparative', en: '"than" → comparative.' },
  }),
  q('tx-p5-19', 'vocabulary', 'Due to high ___, the workshop has been moved to a larger room.', ['demand', 'demanding', 'demanded', 'demands of'], {
    explain: { th: 'หลัง adjective high ต้องเป็นนาม → demand', en: 'After the adjective high, a noun → demand.' },
  }),
  q('tx-p5-20', 'grammar', 'Ms. Lopez has worked at the firm ___ 2015.', ['since', 'for', 'from', 'ago'], {
    explain: { th: 'present perfect + since + จุดเวลา', en: 'present perfect + since + point in time.' },
  }),
  q('tx-p5-21', 'vocabulary', 'The contract will ___ at the end of December unless it is renewed.', ['expire', 'inspire', 'retire', 'acquire'], {
    explain: { th: 'expire = หมดอายุ', en: 'expire = end/become invalid.' },
  }),
  q('tx-p5-22', 'grammar', '___ the heavy rain, the outdoor event went ahead as planned.', ['Despite', 'Although', 'Because', 'Even'], {
    explain: { th: 'ตามด้วยนาม (the heavy rain) → Despite', en: 'Followed by a noun phrase → Despite.' },
  }),
  q('tx-p5-23', 'grammar', 'The training manual, ___ was updated last month, is available online.', ['which', 'that', 'what', 'who'], {
    explain: { th: 'มีคอมมา (non-defining) ใช้ which ไม่ใช้ that', en: 'After a comma (non-defining), use which, not that.' },
  }),
  q('tx-p5-24', 'vocabulary', 'Please ___ from using mobile phones during the presentation.', ['refrain', 'restrain', 'remain', 'retain'], {
    explain: { th: 'refrain from + V-ing = งดเว้น', en: 'refrain from + -ing = avoid.' },
  }),
  q('tx-p5-25', 'grammar', 'The more you practise, the ___ your score will be.', ['better', 'best', 'good', 'well'], {
    explain: { th: 'The + comparative …, the + comparative …', en: 'The + comparative, the + comparative.' },
  }),
]

// ---------------------------------------------------------------- Part 6

const P6_A =
  'To: Riverside Apartments Residents\nSubject: Elevator maintenance\n\nDear Residents,\n\nThe elevators in Building B will be (1) ___ from 9:00 a.m. to 3:00 p.m. on Tuesday, 12 June. During this time, residents will need to use the stairs. (2) ___ If you need help carrying heavy items, please contact the front desk in advance. We (3) ___ for any inconvenience this may cause. The work is part of our annual safety inspection, which (4) ___ that all equipment meets city regulations.\n\nBuilding Management'
const P6_B =
  'Greenleaf Café is pleased to announce the (5) ___ of our second location, at 48 Park Road. To celebrate, all customers will receive a free pastry with any drink during the first week. (6) ___ Our new café also offers a meeting room that can be reserved by local businesses. Reservations can be made (7) ___ on our website. We look forward to (8) ___ you soon!'
const P6_C =
  'Dear Mr. Alvarez,\n\nThank you for applying for the position of logistics coordinator. We were very impressed by your (9) ___ in supply-chain management. We would like to invite you for an interview on Thursday, 3 April, at 10:00 a.m. (10) ___ Please bring a copy of your driving licence, as the role (11) ___ occasional travel to our warehouses. Kindly confirm your attendance by replying to this email (12) ___ Monday.\n\nSincerely,\nHelen Ruiz, Human Resources'

const PART6_EXTRA: Question[] = [
  q('tx-p6-1', 'vocabulary', 'Gap (1):', ['out of service', 'out of order of', 'in service', 'on duty'], {
    passage: P6_A,
    explain: { th: 'ลิฟต์ปิดซ่อม → out of service', en: 'Elevators under maintenance → out of service.' },
  }),
  q('tx-p6-2', 'reading', 'Gap (2): choose the best sentence.', [
    'Building A will not be affected.',
    'The swimming pool will reopen next month.',
    'Rent payments are due on the first of the month.',
    'New parking permits are now available.',
  ], {
    passage: P6_A,
    explain: { th: 'ประโยคแทรกต้องเกี่ยวกับลิฟต์/ผลกระทบต่อผู้พักอาศัย', en: 'The inserted sentence must stay on the topic of the elevator work.' },
  }),
  q('tx-p6-3', 'grammar', 'Gap (3):', ['apologize', 'apologized', 'apology', 'apologizing'], {
    passage: P6_A,
    explain: { th: 'ประธาน We + V1 (present simple)', en: 'We + base verb (present simple).' },
  }),
  q('tx-p6-4', 'grammar', 'Gap (4):', ['ensures', 'ensure', 'ensuring', 'to ensure'], {
    passage: P6_A,
    explain: { th: 'which แทน inspection (เอกพจน์) → ensures', en: 'which refers to inspection (singular) → ensures.' },
  }),
  q('tx-p6-5', 'vocabulary', 'Gap (5):', ['opening', 'opener', 'opens', 'opened'], {
    passage: P6_B,
    explain: { th: 'หลัง the ต้องเป็นนาม → opening', en: 'After the → noun: opening.' },
  }),
  q('tx-p6-6', 'reading', 'Gap (6): choose the best sentence.', [
    'This offer is valid until 15 May.',
    'Our first location closed last year.',
    'Pastries are not sold at this location.',
    'We are currently hiring a head chef for our factory.',
  ], {
    passage: P6_B,
    explain: { th: 'ต่อจากโปรโมชันขนมฟรี → บอกระยะเวลาโปรโมชัน', en: 'It continues the free-pastry offer with a validity date.' },
  }),
  q('tx-p6-7', 'grammar', 'Gap (7):', ['easily', 'easy', 'ease', 'easier'], {
    passage: P6_B,
    explain: { th: 'ขยายกริยา be made → adverb', en: 'Modifies the verb → adverb.' },
  }),
  q('tx-p6-8', 'grammar', 'Gap (8):', ['welcoming', 'welcome', 'welcomed', 'be welcomed'], {
    passage: P6_B,
    explain: { th: 'look forward to + V-ing', en: 'look forward to + -ing.' },
  }),
  q('tx-p6-9', 'vocabulary', 'Gap (9):', ['background', 'backlog', 'backup', 'backing'], {
    passage: P6_C,
    explain: { th: 'background in … = พื้นฐาน/ประสบการณ์ด้าน…', en: 'a background in a field = experience in it.' },
  }),
  q('tx-p6-10', 'reading', 'Gap (10): choose the best sentence.', [
    'The interview will take place at our head office on Lake Street.',
    'Unfortunately, the position has already been filled.',
    'Your application was received after the deadline.',
    'We are not currently accepting applications.',
  ], {
    passage: P6_C,
    explain: { th: 'ต่อจากการเชิญสัมภาษณ์ → บอกสถานที่ (ตัวเลือกอื่นขัดกับการเชิญ)', en: 'Follows the invitation with the location; other options contradict it.' },
  }),
  q('tx-p6-11', 'grammar', 'Gap (11):', ['involves', 'involve', 'involving', 'involved'], {
    passage: P6_C,
    explain: { th: 'the role (เอกพจน์) + present simple → involves', en: 'the role (singular) → involves.' },
  }),
  q('tx-p6-12', 'grammar', 'Gap (12):', ['by', 'until', 'since', 'on'], {
    passage: P6_C,
    explain: { th: 'กำหนดเส้นตาย → by Monday', en: 'A deadline → by Monday.' },
  }),
]

// ---------------------------------------------------------------- Part 7

const P7_CHAT =
  'Mia Tanaka (9:12 A.M.): Are you still at the printer\'s?\nOliver Reed (9:14 A.M.): Yes. They say the banners won\'t be ready until 2 P.M.\nMia Tanaka (9:15 A.M.): The trade fair opens at 1. Can they deliver them to the venue?\nOliver Reed (9:17 A.M.): I\'ll ask. They charged extra for delivery last time, though.\nMia Tanaka (9:18 A.M.): That\'s fine. We can\'t have an empty booth.'
const P7_AD =
  'NOW HIRING — Part-Time Customer Service Assistants\nSunrise Fitness Centre, Bangna branch\n\n• 20 hours per week, including weekend shifts\n• Duties: greeting members, answering phone enquiries, processing membership renewals\n• Requirements: good communication skills; basic English; previous customer-service experience preferred but not required\n• Benefits: free gym membership, flexible schedule\n\nTo apply, send your CV to jobs@sunrisefitness.example by 30 September. Interviews will be held in early October.'
const P7_DOUBLE =
  'EMAIL 1\nTo: orders@papermill.example\nFrom: k.singh@brightdesk.example\nDate: 2 May\nSubject: Order #5521\n\nHello,\nI would like to order 40 boxes of A4 copy paper (item P-100) and 10 boxes of envelopes (item E-20) for delivery to our office at 15 Hill Road. We need them by 10 May, as we are moving to a new office on 12 May.\nKiran Singh, Office Manager\n\nEMAIL 2\nTo: k.singh@brightdesk.example\nFrom: orders@papermill.example\nDate: 3 May\nSubject: RE: Order #5521\n\nDear Ms. Singh,\nThank you for your order. The copy paper will be delivered on 8 May. Unfortunately, the envelopes are out of stock and will not be available until 14 May. Would you like us to send them to your new address instead? Orders over 30 boxes qualify for a 10% discount, which has been applied to your invoice.\nPapermill Supplies'
const P7_TRIPLE =
  'NOTICE — Annual Staff Workshop\nDate: Friday, 21 June · Venue: Grand Lotus Hotel, Ballroom 2\n09:00 Registration · 09:30 Keynote (Dr. Ana Morales) · 11:00 Choice of sessions: (A) Time Management, (B) Data Security, (C) Presenting with Confidence · 12:30 Lunch\nStaff must register for one session by 14 June.\n\nEMAIL\nTo: events@company.example · From: p.nguyen@company.example · Date: 16 June\nHi, I missed the registration deadline. I work in IT, so the data security session would be most useful for me. Is there still space?\nPhuong Nguyen\n\nREPLY\nTo: p.nguyen@company.example · From: events@company.example · Date: 17 June\nHi Phuong, Session B is already full, but we have added a second Data Security session at 2:00 P.M., after lunch, in Ballroom 3. I have registered you for it. Please note that Dr. Morales\'s talk will now start at 10:00 because of her flight schedule.'

const PART7_EXTRA: Question[] = [
  q('tx-p7-1', 'reading', 'What is the problem?', ['Some banners will not be ready in time.', 'The trade fair has been cancelled.', 'The printer made a spelling mistake.', 'The booth is too small.'], {
    passage: P7_CHAT,
    explain: { th: 'ป้ายเสร็จบ่ายสอง แต่งานเปิดบ่ายโมง', en: 'Banners ready at 2, but the fair opens at 1.' },
  }),
  q('tx-p7-2', 'reading', 'At 9:18 A.M., what does Ms. Tanaka mean when she writes, "That\'s fine"?', [
    'She agrees to pay a delivery fee.',
    'She is happy with the banner design.',
    'She will collect the banners herself.',
    'She thinks the booth looks good.',
  ], {
    passage: P7_CHAT,
    explain: { th: 'ข้อถามเจตนา: ตอบข้อความเรื่องค่าส่งเพิ่ม → ยอมจ่าย', en: 'Intent question: it replies to the extra delivery charge.' },
  }),
  q('tx-p7-3', 'reading', 'What will Mr. Reed most likely do next?', ['Ask about delivery', 'Go to the trade fair', 'Cancel the order', 'Design a new banner'], {
    passage: P7_CHAT,
    explain: { th: '"I\'ll ask."', en: '"I\'ll ask."' },
  }),
  q('tx-p7-4', 'reading', 'What is NOT mentioned as a duty of the job?', ['Teaching fitness classes', 'Greeting members', 'Answering phone enquiries', 'Processing renewals'], {
    passage: P7_AD,
    explain: { th: 'ข้อแบบ NOT: ไม่มีการสอนคลาสออกกำลังกาย', en: 'NOT question: teaching classes is not listed.' },
  }),
  q('tx-p7-5', 'reading', 'What is indicated about the position?', ['Experience is not essential.', 'It is a full-time job.', 'Applicants must speak fluent English.', 'Shifts are on weekdays only.'], {
    passage: P7_AD,
    explain: { th: '"preferred but not required"', en: '"preferred but not required".' },
  }),
  q('tx-p7-6', 'reading', 'What benefit is offered?', ['A free gym membership', 'Free meals', 'A transport allowance', 'Paid overtime'], {
    passage: P7_AD,
    explain: { th: '"free gym membership"', en: '"free gym membership".' },
  }),
  q('tx-p7-7', 'reading', 'Why does Ms. Singh need the items by 10 May?', ['Her company is moving offices.', 'Her office is closing for a holiday.', 'A discount ends that day.', 'She is starting a new job.'], {
    passage: P7_DOUBLE,
    explain: { th: '"we are moving to a new office on 12 May"', en: '"we are moving to a new office on 12 May".' },
  }),
  q('tx-p7-8', 'reading', 'Which item will arrive late?', ['Item E-20', 'Item P-100', 'Order #5521 in full', 'A new invoice'], {
    passage: P7_DOUBLE,
    explain: { th: 'ซองจดหมาย (E-20) หมดสต็อกถึง 14 พ.ค.', en: 'The envelopes (E-20) are out of stock until 14 May.' },
  }),
  q('tx-p7-9', 'reading', 'Where will the envelopes most likely be sent?', ["To Ms. Singh's new office", 'To 15 Hill Road', "To Papermill's warehouse", "To Ms. Singh's home"], {
    passage: P7_DOUBLE,
    explain: {
      th: 'ข้อเชื่อม 2 เอกสาร: ของมา 14 พ.ค. หลังย้ายออฟฟิศวันที่ 12 → ส่งที่ใหม่',
      en: 'Cross-reference: they arrive on 14 May, after the move on 12 May → new office.',
    },
  }),
  q('tx-p7-10', 'reading', 'Why did Ms. Singh receive a discount?', ['She ordered more than 30 boxes.', 'Some items were delayed.', 'She is a new customer.', 'She paid in advance.'], {
    passage: P7_DOUBLE,
    explain: { th: 'สั่ง 40+10 = 50 กล่อง > 30 กล่อง', en: '40 + 10 = 50 boxes, over 30.' },
  }),
  q('tx-p7-11', 'reading', 'In Email 2, the word "qualify" in paragraph 1 is closest in meaning to', ['are eligible', 'are trained', 'are measured', 'are approved by'], {
    passage: P7_DOUBLE,
    explain: { th: 'ข้อความหมายใกล้เคียง: qualify for = มีสิทธิ์ได้รับ (eligible)', en: 'Synonym question: qualify for = be eligible for.' },
  }),
  q('tx-p7-12', 'reading', 'Why did Mr. Nguyen write the email?', ['To register late for a session', 'To cancel his attendance', 'To suggest a new topic', 'To book a hotel room'], {
    passage: P7_TRIPLE,
    explain: { th: 'พลาดกำหนดลงทะเบียน แล้วขอเข้าร่วม', en: 'He missed the deadline and asks to join.' },
  }),
  q('tx-p7-13', 'reading', 'When was the registration deadline?', ['14 June', '16 June', '17 June', '21 June'], {
    passage: P7_TRIPLE,
    explain: { th: '"register … by 14 June"', en: '"register … by 14 June".' },
  }),
  q('tx-p7-14', 'reading', 'Where will Mr. Nguyen attend his session?', ['Ballroom 3', 'Ballroom 2', 'The IT office', 'The hotel lobby'], {
    passage: P7_TRIPLE,
    explain: { th: 'รอบเพิ่ม 14:00 อยู่ Ballroom 3', en: 'The added 2:00 P.M. session is in Ballroom 3.' },
  }),
  q('tx-p7-15', 'reading', 'What has changed about the workshop schedule?', ['The keynote will start 30 minutes later.', 'Lunch has been cancelled.', 'The venue has moved.', 'Registration will open at 10:00.'], {
    passage: P7_TRIPLE,
    explain: {
      th: 'ข้อเชื่อม 3 เอกสาร: ตารางเดิม keynote 9:30 → เปลี่ยนเป็น 10:00 = ช้าไป 30 นาที',
      en: 'Cross-reference: the keynote moved from 9:30 to 10:00.',
    },
  }),
  q('tx-p7-16', 'reading', 'What can be inferred about Mr. Nguyen?', ['He will attend his session after lunch.', 'He will give a presentation.', 'He organised the workshop.', 'He will miss the keynote.'], {
    passage: P7_TRIPLE,
    explain: { th: 'รอบของเขา 14:00 ซึ่งหลังพักเที่ยง 12:30', en: 'His session is at 2:00 P.M., after lunch at 12:30.' },
  }),
]

// ---------------------------------------------------------------- Vocabulary

const VOCAB: ExamSection = {
  id: 'toeic-vocab',
  exam: 'TOEIC',
  title: { th: 'TOEIC คำศัพท์และ collocation ที่ออกบ่อย', en: 'TOEIC High-Frequency Vocabulary & Collocations' },
  intro: {
    th: 'คำศัพท์ธุรกิจและคำที่มักใช้คู่กัน (collocation) ซึ่งออกบ่อยใน Part 5–7 รวมถึงคู่คำที่หน้าตาคล้ายกันซึ่งข้อสอบชอบใช้หลอก',
    en: 'Business words and collocations that appear often in Parts 5–7, including look-alike word pairs used as traps.',
  },
  tips: [
    { th: 'จำเป็นคู่คำ เช่น meet a deadline, place an order, conduct a survey แทนการจำคำเดี่ยว', en: 'Learn word partners (meet a deadline, place an order, conduct a survey), not single words.' },
    { th: 'สังเกตคำลงท้าย: -tion/-ment = นาม, -ive/-al/-ous = คุณศัพท์, -ly = กริยาวิเศษณ์', en: 'Use suffixes: -tion/-ment nouns, -ive/-al/-ous adjectives, -ly adverbs.' },
  ],
  practice: [
    q('tx-v-1', 'vocabulary', 'We must ___ the deadline for the annual report.', ['meet', 'make', 'do', 'reach to'], { explain: { th: 'meet a deadline = ทันกำหนด', en: 'meet a deadline.' } }),
    q('tx-v-2', 'vocabulary', 'Customers can ___ an order online 24 hours a day.', ['place', 'put', 'set', 'give'], { explain: { th: 'place an order = สั่งซื้อ', en: 'place an order.' } }),
    q('tx-v-3', 'vocabulary', 'The marketing team will ___ a survey of 500 customers.', ['conduct', 'perform at', 'hold on', 'carry'], { explain: { th: 'conduct a survey = ทำการสำรวจ', en: 'conduct a survey.' } }),
    q('tx-v-4', 'vocabulary', 'Please keep your receipt as ___ of purchase.', ['proof', 'prove', 'proven', 'proofing'], { explain: { th: 'proof of purchase = หลักฐานการซื้อ', en: 'proof of purchase.' } }),
    q('tx-v-5', 'vocabulary', 'Our sales ___ has grown by 15% this year.', ['revenue', 'revenge', 'review', 'reverse'], { explain: { th: 'revenue = รายได้', en: 'revenue = income.' } }),
    q('tx-v-6', 'vocabulary', 'The ___ for the position include a degree in engineering.', ['qualifications', 'qualities', 'quantities', 'quotations'], { explain: { th: 'qualifications = คุณสมบัติ (วุฒิ/ประสบการณ์)', en: 'qualifications = required background.' } }),
    q('tx-v-7', 'vocabulary', 'Could you send me a price ___ for 200 units?', ['quotation', 'quota', 'quote of', 'question'], { explain: { th: 'price quotation = ใบเสนอราคา', en: 'price quotation.' } }),
    q('tx-v-8', 'vocabulary', 'The project was completed well within ___.', ['budget', 'budgeting', 'budgeted', 'budgetary'], { explain: { th: 'within budget = ไม่เกินงบ', en: 'within budget.' } }),
    q('tx-v-9', 'vocabulary', 'Payment is ___ within 30 days of the invoice date.', ['due', 'owed to', 'overdue', 'paid off'], { explain: { th: 'due = ถึงกำหนดชำระ ; overdue = เลยกำหนดแล้ว', en: 'due = must be paid; overdue = already late.' } }),
    q('tx-v-10', 'vocabulary', 'Please ___ the attached document carefully before signing.', ['review', 'renew', 'remove', 'revise to'], { explain: { th: 'review = ตรวจทาน', en: 'review = read carefully.' } }),
    q('tx-v-11', 'vocabulary', 'Our new office is ___ located near the train station.', ['conveniently', 'convenient', 'convenience', 'conveyed'], { explain: { th: 'conveniently located = ทำเลสะดวก', en: 'conveniently located.' } }),
    q('tx-v-12', 'vocabulary', 'The company will ___ 50 new employees this year.', ['hire', 'higher', 'hide', 'lend'], { explain: { th: 'hire = จ้าง (ระวังเสียงพ้อง higher)', en: 'hire = employ (sounds like higher).' } }),
    q('tx-v-13', 'vocabulary', 'All travel expenses will be ___ by the company.', ['reimbursed', 'refunded to', 'reminded', 'rewarded'], { explain: { th: 'reimburse = เบิกจ่ายคืน', en: 'reimburse = pay back expenses.' } }),
    q('tx-v-14', 'vocabulary', 'Tickets are available on a first-come, first-___ basis.', ['served', 'serve', 'service', 'serving'], { explain: { th: 'first-come, first-served = มาก่อนได้ก่อน', en: 'first-come, first-served.' } }),
    q('tx-v-15', 'vocabulary', 'The manager gave ___ to the team to work from home on Fridays.', ['permission', 'permit to', 'admission', 'commission'], { explain: { th: 'give permission = อนุญาต', en: 'give permission.' } }),
    q('tx-v-16', 'vocabulary', 'Mr. Okafor is ___ for managing the sales team.', ['responsible', 'responsive', 'respectful', 'responsibility'], { explain: { th: 'be responsible for = รับผิดชอบ (responsive = ตอบสนองไว)', en: 'responsible for (responsive = quick to react).' } }),
    q('tx-v-17', 'vocabulary', 'The store is closed today ___ a public holiday.', ['due to', 'because', 'since', 'so that'], { explain: { th: 'ตามด้วยคำนาม → due to (because/since ต้องตามด้วยประโยค)', en: 'Followed by a noun → due to (because/since need a clause).' } }),
    q('tx-v-18', 'vocabulary', 'We received a large number of ___ for the job.', ['applications', 'appliances', 'applicants of', 'appointments'], { explain: { th: 'application = ใบสมัคร (appliance = เครื่องใช้ไฟฟ้า)', en: 'application = a job request (appliance = a machine).' } }),
    q('tx-v-19', 'vocabulary', 'Please ___ your attendance by Friday.', ['confirm', 'conform', 'confine', 'contain'], { explain: { th: 'confirm = ยืนยัน (conform = ทำตามกฎ)', en: 'confirm (conform = follow rules).' } }),
    q('tx-v-20', 'vocabulary', 'The two companies signed an ___ to work together.', ['agreement', 'agreeable', 'agreed', 'agreeing'], { explain: { th: 'หลัง an ต้องเป็นนาม → agreement', en: 'After an → noun: agreement.' } }),
  ],
}

// ---------------------------------------------------------------- Mini mock test

const M_P3 =
  "Woman: Hi, I'd like to book a table for eight people this Saturday evening. Man: I'm sorry, we're fully booked on Saturday. We have a table available on Sunday at seven, though. Woman: Sunday works. It's for my manager's retirement dinner. Man: Wonderful. Would you like us to prepare a cake?"
const M_P4 =
  "Attention shoppers. Today only, all winter jackets are forty percent off. And members of our rewards program will receive an additional ten percent discount at the checkout. Not a member yet? You can sign up at the customer-service desk near the main entrance. The store will close at nine p.m. tonight."
const M_P6 =
  'Dear valued customer,\n\nYour subscription to Business Weekly will (1) ___ on 31 March. To continue receiving the magazine without interruption, please renew before that date. (2) ___ Subscribers who renew online will also receive a free digital edition. We (3) ___ your continued support. If you have any questions, please do not hesitate to (4) ___ us.'
const M_P7 =
  'MEMO\nTo: All Staff\nFrom: Hannah Cho, Office Manager\nDate: 5 August\nRe: Kitchen renovation\n\nThe staff kitchen on the 3rd floor will be renovated from 12 to 23 August. During this time, please use the kitchen on the 5th floor. The new kitchen will include a second refrigerator and a dishwasher, which many of you requested in last year\'s staff survey. Please remove all personal items from the 3rd-floor refrigerator by 9 August. Items left after that date will be thrown away.'

const MOCK: ExamSection = {
  id: 'toeic-mock',
  exam: 'TOEIC',
  title: { th: 'TOEIC แบบทดสอบจำลองย่อ (Part 1–7)', en: 'TOEIC Mini Mock Test (Parts 1–7)' },
  intro: {
    th: 'ชุดรวม 26 ข้อเรียงตามลำดับข้อสอบจริง (ฟัง Part 1–4 แล้วอ่าน Part 5–7) ลองจับเวลาประมาณ 18 นาที ข้อสอบจริงมี 200 ข้อ ใช้เวลาราว 2 ชั่วโมง: Listening 100 ข้อ 45 นาที และ Reading 100 ข้อ 75 นาที คะแนนเต็ม 990',
    en: 'A 26-question set in real test order (Listening Parts 1–4, then Reading Parts 5–7). Try timing yourself at about 18 minutes. The real test has 200 questions in about 2 hours: Listening 100 Q / 45 min, Reading 100 Q / 75 min, scored out of 990.',
  },
  tips: [
    { th: 'Listening: เสียงเล่นครั้งเดียว ถ้าพลาดข้อไหนให้เดาแล้วไปข้อถัดไปทันที อย่าค้าง', en: 'Listening plays once — if you miss one, guess and move on immediately.' },
    { th: 'Reading: เวลาเฉลี่ย Part 5 ≈ 20 วินาที/ข้อ, Part 6 ≈ 2 นาที/บทความ แล้วเก็บเวลา ~55 นาทีให้ Part 7', en: 'Reading pace: Part 5 ≈ 20 s each, Part 6 ≈ 2 min per text, leaving ~55 min for Part 7.' },
    { th: 'ไม่มีการหักคะแนนเมื่อตอบผิด ห้ามเว้นว่าง ต้องตอบทุกข้อ', en: 'There is no penalty for wrong answers — never leave a question blank.' },
  ],
  practice: [
    photo('tx-m-1', 'A man in a hard hat is checking a clipboard in front of a row of machines.', [
      'He is inspecting some equipment.',
      'He is repairing a hat.',
      'He is operating a forklift.',
      'The machines are being moved.',
    ], { th: 'ถือคลิปบอร์ดตรวจเครื่องจักร = inspecting equipment', en: 'Checking a clipboard by machines = inspecting equipment.' }),
    photo('tx-m-2', 'Chairs have been stacked against the wall of an empty meeting room.', [
      'Some chairs have been stacked up.',
      'Some people are sitting in a meeting.',
      'A wall is being painted.',
      'Chairs are being arranged in rows.',
    ], { th: 'ภาพไม่มีคน → has been stacked', en: 'No people → has been stacked.' }),
    q('tx-m-3', 'listening', 'Choose the best response.', ['Ten minutes ago.', 'At the station.', 'By train.', 'Yes, it is.'], {
      audio: 'When did the shuttle bus leave?',
      explain: { th: 'When → เวลา', en: 'When → a time.' },
    }),
    q('tx-m-4', 'listening', 'Choose the best response.', ["I think it's in the top drawer.", 'Yes, I locked it.', 'A new cabinet.', 'At the office.'], {
      audio: 'Do you know where the key to the supply cabinet is?',
      explain: { th: 'คำถามซ้อน (indirect question) ถามสถานที่', en: 'Indirect question asking for a location.' },
    }),
    q('tx-m-5', 'listening', 'Choose the best response.', ["Let's take a taxi instead.", 'It was a short trip.', 'The meeting starts at ten.', 'Yes, they did.'], {
      audio: 'The trains are delayed this morning.',
      explain: { th: 'ประโยคบอกปัญหา → เสนอทางแก้', en: 'A problem → a solution.' },
    }),
    q('tx-m-6', 'listening', 'Choose the best response.', ['Either is fine with me.', 'Yes, please.', 'Every Monday.', 'In the report.'], {
      audio: 'Should we hold the meeting in the morning or the afternoon?',
      explain: { th: 'คำถามให้เลือก → "อันไหนก็ได้" เป็นคำตอบที่ใช้ได้', en: 'A choice question → "Either is fine" works.' },
    }),
    q('tx-m-7', 'listening', 'Why is the woman calling?', ['To reserve a table', 'To order a cake', 'To cancel a booking', 'To ask about opening hours'], {
      audio: M_P3,
      explain: { th: '"I\'d like to book a table"', en: '"I\'d like to book a table".' },
    }),
    q('tx-m-8', 'listening', 'When will the event take place?', ['On Sunday', 'On Saturday', 'On Friday', 'On Monday'], {
      audio: M_P3,
      explain: { th: 'วันเสาร์เต็ม → เลือกวันอาทิตย์', en: 'Saturday is full → Sunday.' },
    }),
    q('tx-m-9', 'listening', 'What is the dinner for?', ['A retirement', 'A birthday', 'A new client', 'A product launch'], {
      audio: M_P3,
      explain: { th: '"my manager\'s retirement dinner"', en: '"retirement dinner".' },
    }),
    q('tx-m-10', 'listening', 'Where is the announcement being made?', ['In a clothing store', 'At a bank', 'In a restaurant', 'At a gym'], {
      audio: M_P4,
      explain: { th: '"shoppers", "winter jackets"', en: '"shoppers", "winter jackets".' },
    }),
    q('tx-m-11', 'listening', 'How can listeners get an extra discount?', ['By joining a rewards program', 'By paying in cash', 'By shopping online', 'By buying two jackets'], {
      audio: M_P4,
      explain: { th: 'สมาชิกได้ลดเพิ่ม 10%', en: 'Members get an extra 10%.' },
    }),
    q('tx-m-12', 'listening', 'Where can listeners sign up?', ['At the customer-service desk', 'At the checkout', 'On the website', 'In the parking lot'], {
      audio: M_P4,
      explain: { th: '"at the customer-service desk near the main entrance"', en: '"at the customer-service desk".' },
    }),
    q('tx-m-13', 'grammar', 'The seminar was ___ informative that many participants asked for a second session.', ['so', 'such', 'too', 'very'], {
      explain: { th: 'so + adj + that', en: 'so + adjective + that.' },
    }),
    q('tx-m-14', 'grammar', 'Ms. Rivera is looking forward to ___ the Tokyo office next month.', ['visiting', 'visit', 'visited', 'be visiting'], {
      explain: { th: 'look forward to + V-ing', en: 'look forward to + -ing.' },
    }),
    q('tx-m-15', 'vocabulary', 'The company ___ its annual profits at the shareholders\' meeting.', ['announced', 'pronounced', 'denounced', 'renounced'], {
      explain: { th: 'announce = ประกาศ', en: 'announce = make public.' },
    }),
    q('tx-m-16', 'grammar', 'Each of the managers ___ a copy of the new policy.', ['has received', 'have received', 'receiving', 'were received'], {
      explain: { th: 'Each of + พหูพจน์ → กริยาเอกพจน์', en: 'Each of + plural → singular verb.' },
    }),
    q('tx-m-17', 'vocabulary', 'Visitors must show valid ___ at the security desk.', ['identification', 'identify', 'identical', 'identified'], {
      explain: { th: 'หลัง adj valid ต้องเป็นนาม', en: 'After the adjective valid → noun.' },
    }),
    q('tx-m-18', 'grammar', 'The report must be finished ___ the end of the week.', ['by', 'until', 'since', 'while'], {
      explain: { th: 'เส้นตาย → by', en: 'A deadline → by.' },
    }),
    q('tx-m-19', 'vocabulary', 'Gap (1):', ['expire', 'expired', 'expiring', 'expiration'], {
      passage: M_P6,
      explain: { th: 'will + V1', en: 'will + base verb.' },
    }),
    q('tx-m-20', 'reading', 'Gap (2): choose the best sentence.', [
      'You can renew online, by phone, or by mail.',
      'Our office will move to a new building next year.',
      'The magazine is published every month.',
      'We are sorry that your subscription was cancelled.',
    ], {
      passage: M_P6,
      explain: { th: 'ต่อจาก "please renew" → บอกวิธีต่ออายุ', en: 'After "please renew" → ways to renew.' },
    }),
    q('tx-m-21', 'grammar', 'Gap (3):', ['appreciate', 'appreciating', 'appreciation', 'appreciative'], {
      passage: M_P6,
      explain: { th: 'We + V1', en: 'We + base verb.' },
    }),
    q('tx-m-22', 'vocabulary', 'Gap (4):', ['contact', 'contract', 'contrast', 'consult with'], {
      passage: M_P6,
      explain: { th: 'do not hesitate to contact us = ติดต่อเราได้เลย', en: 'do not hesitate to contact us.' },
    }),
    q('tx-m-23', 'reading', 'What is the purpose of the memo?', ['To announce a renovation', 'To report survey results', 'To introduce a new manager', 'To change office hours'], {
      passage: M_P7,
      explain: { th: 'Re: Kitchen renovation', en: 'Re: Kitchen renovation.' },
    }),
    q('tx-m-24', 'reading', 'Where should staff go to use a kitchen during the work?', ['The 5th floor', 'The 3rd floor', 'The cafeteria', 'The lobby'], {
      passage: M_P7,
      explain: { th: '"use the kitchen on the 5th floor"', en: '"the kitchen on the 5th floor".' },
    }),
    q('tx-m-25', 'reading', 'What is indicated about the new kitchen?', ['It includes items staff asked for.', 'It will open on 9 August.', 'It will be on a different floor.', 'It will be smaller.'], {
      passage: M_P7,
      explain: { th: '"which many of you requested in last year\'s staff survey"', en: '"which many of you requested".' },
    }),
    q('tx-m-26', 'reading', 'What must staff do by 9 August?', ['Remove personal items from a refrigerator', 'Complete a survey', 'Clean the 5th-floor kitchen', 'Buy a dishwasher'], {
      passage: M_P7,
      explain: { th: '"remove all personal items … by 9 August"', en: '"remove all personal items … by 9 August".' },
    }),
  ],
}

// ---------------------------------------------------------------- exports

/** New TOEIC sections (not in the original 13). */
export const TOEIC_NEW_SECTIONS: ExamSection[] = [PART1, VOCAB, MOCK]

/** Extra questions appended to existing TOEIC sections, keyed by section id. */
export const TOEIC_EXTRA_PRACTICE: Record<string, Question[]> = {
  'toeic-part2': PART2_EXTRA,
  'toeic-part3': PART3_EXTRA,
  'toeic-part4': PART4_EXTRA,
  'toeic-part5': PART5_EXTRA,
  'toeic-part6': PART6_EXTRA,
  'toeic-part7': PART7_EXTRA,
}

/** Real-test facts added to the tips of existing TOEIC sections. */
export const TOEIC_EXTRA_TIPS: Record<string, Bilingual[]> = {
  'toeic-part2': [{ th: 'ข้อสอบจริง 25 ข้อ มีตัวเลือก 3 ตัว (A–C) และไม่มีข้อความให้อ่าน ต้องฟังอย่างเดียว', en: 'Real test: 25 questions, only 3 options (A–C), audio only.' }],
  'toeic-part3': [{ th: 'ข้อสอบจริง 13 บทสนทนา × 3 ข้อ = 39 ข้อ มีบางชุดเป็น 3 คนพูด และมีข้อแบบ "Look at the graphic" กับข้อถามเจตนาผู้พูด', en: 'Real test: 13 conversations × 3 = 39 Q, including three-speaker sets, graphic questions and implied-meaning questions.' }],
  'toeic-part4': [{ th: 'ข้อสอบจริง 10 บทพูด × 3 ข้อ = 30 ข้อ เช่น ประกาศ ข้อความเสียง รายงานจราจร การนำเสนอในที่ประชุม', en: 'Real test: 10 talks × 3 = 30 Q — announcements, voicemails, traffic reports, meeting talks.' }],
  'toeic-part5': [{ th: 'ข้อสอบจริง 30 ข้อ ราวครึ่งหนึ่งเป็นไวยากรณ์ (word form, tense, คำบุพบท, คำเชื่อม) อีกครึ่งเป็นคำศัพท์', en: 'Real test: 30 Q — about half grammar (word forms, tenses, prepositions, connectors), half vocabulary.' }],
  'toeic-part6': [{ th: 'ข้อสอบจริง 4 บทความ × 4 ช่อง = 16 ข้อ ทุกบทความมีช่องเลือกประโยค 1 ช่อง', en: 'Real test: 4 texts × 4 gaps = 16 Q; each text has one sentence-insertion gap.' }],
  'toeic-part7': [{ th: 'ข้อสอบจริง 54 ข้อ: เอกสารเดี่ยว 29 ข้อ + เอกสารคู่/สามฉบับ 25 ข้อ ข้อยากมักต้องเชื่อมข้อมูลข้ามเอกสาร', en: 'Real test: 54 Q — 29 single-passage + 25 double/triple-passage; the hard ones link information across documents.' }],
}
