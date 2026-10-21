import { q } from '../lib/question'
import type { Unit } from '../types'

/** Travel and everyday-life units: two per CEFR level. */
export const LIFE_UNITS: Unit[] = [
  // ───────────── A1 ─────────────
  {
    id: 'a1-6',
    level: 'A1',
    theme: 'travel',
    title: { th: 'ที่โรงแรม', en: 'At the Hotel' },
    canDo: [
      { th: 'เช็กอินและขอสิ่งของง่าย ๆ ที่โรงแรมได้', en: 'I can check in and ask for simple things at a hotel.' },
      { th: 'เข้าใจตัวเลขห้องและเวลาอาหารเช้า', en: 'I can understand room numbers and breakfast times.' },
    ],
    vocab: [
      { word: 'reservation', th: 'การจอง', example: 'I have a reservation for two nights.' },
      { word: 'single / double room', th: 'ห้องเตียงเดี่ยว / เตียงคู่', example: 'A double room, please.' },
      { word: 'key card', th: 'คีย์การ์ด', example: 'Here is your key card.' },
      { word: 'towel', th: 'ผ้าเช็ดตัว', example: 'Can I have another towel, please?' },
      { word: 'check out', th: 'เช็กเอาต์', example: 'Check-out is at 12 o\'clock.' },
    ],
    grammar: {
      title: 'Can I have…? / Is there…? / Possessive adjectives',
      explain: {
        th: 'ขอสิ่งของด้วย Can I have + คำนาม, please? ถามว่ามีไหมด้วย Is there…? คำแสดงความเป็นเจ้าของ: my, your, his, her, our, their + คำนาม (my room, your passport)',
        en: 'Ask for things with Can I have + noun, please? Ask if something exists with Is there…? Possessive adjectives: my, your, his, her, our, their + noun.',
      },
      examples: ['Can I have a room with a view, please?', 'Is there Wi-Fi in the room?', 'Can I see your passport, please?'],
    },
    reading: {
      title: 'Welcome to Sea View Hotel',
      text: 'Welcome! Your room is on the third floor. Breakfast is from 6:30 to 10:00 in the restaurant on the ground floor. The swimming pool is open from 7 a.m. to 9 p.m. Wi-Fi is free — the password is on your key card. Check-out time is 12:00.',
    },
    practice: [
      q('p-a1-6-1', 'grammar', '___ I have a double room, please?', ['Can', 'Do', 'Am', 'Is'], {
        explain: { th: 'ขอสิ่งของ: Can I have…?', en: 'Request: Can I have…?' },
      }),
      q('p-a1-6-2', 'grammar', 'Can I see ___ passport, please?', ['your', 'you', "you're", 'yours'], {
        explain: { th: 'your + คำนาม', en: 'your + noun.' },
      }),
      q('p-a1-6-3', 'grammar', '___ there a gym in the hotel?', ['Is', 'Are', 'Do', 'Has'], {
        explain: { th: 'a gym เอกพจน์: Is there…?', en: 'Singular: Is there…?' },
      }),
      q('p-a1-6-4', 'vocabulary', 'You use a ___ after a shower.', ['towel', 'key card', 'pillow', 'menu'], {
        explain: { th: 'towel = ผ้าเช็ดตัว', en: 'A towel dries you.' },
      }),
      q('p-a1-6-5', 'vocabulary', 'I have a ___ for three nights under the name Chan.', ['reservation', 'restaurant', 'reception', 'receipt'], {
        explain: { th: 'reservation = การจอง', en: 'reservation = booking.' },
      }),
      q('p-a1-6-6', 'grammar', 'They are on holiday with ___ children.', ['their', 'there', 'they', "they're"], {
        explain: { th: 'their = ของพวกเขา', en: 'their = belonging to them.' },
      }),
      q('p-a1-6-7', 'reading', 'Where is breakfast?', ['in the restaurant on the ground floor', 'in your room', 'on the third floor', 'by the pool']),
      q('p-a1-6-8', 'listening', 'What is the room number?', ['315', '350', '513', '305'], {
        audio: "Here's your key card. Your room number is three one five, on the third floor.",
      }),
    ],
  },
  {
    id: 'a1-7',
    level: 'A1',
    theme: 'life',
    title: { th: 'ครอบครัวและคนรอบตัว', en: 'Family & People' },
    canDo: [
      { th: 'แนะนำสมาชิกในครอบครัวได้', en: 'I can talk about my family.' },
      { th: 'บรรยายรูปร่างหน้าตาของคนแบบง่าย ๆ ได้', en: 'I can describe what people look like.' },
    ],
    vocab: [
      { word: 'husband / wife', th: 'สามี / ภรรยา', example: 'My wife is a doctor.' },
      { word: 'son / daughter', th: 'ลูกชาย / ลูกสาว', example: 'We have one son and two daughters.' },
      { word: 'tall / short', th: 'สูง / เตี้ย', example: 'My brother is very tall.' },
      { word: 'hair', th: 'ผม', example: 'She has long black hair.' },
      { word: 'cousin', th: 'ลูกพี่ลูกน้อง', example: 'My cousin lives in Phuket.' },
    ],
    grammar: {
      title: "have / has got & possessive 's",
      explain: {
        th: "ใช้ have/has (หรือ have got / has got) บอกการมี I/you/we/they ใช้ have, he/she/it ใช้ has แสดงความเป็นเจ้าของของคนด้วย 's เช่น Tom's car, my sister's son",
        en: "Use have/has (or have got / has got) for possession: have with I/you/we/they, has with he/she/it. Show a person's possession with 's: Tom's car, my sister's son.",
      },
      examples: ['I have two brothers.', 'She has got brown eyes.', "This is my father's car."],
    },
    reading: {
      title: 'My family',
      text: "My name is Nok. I have a big family. My husband, Ton, is an engineer. We have two children: our son, Win, is eight and our daughter, May, is five. My mother lives with us. She has short grey hair and she loves cooking. My sister's family lives in Khon Kaen.",
    },
    practice: [
      q('p-a1-7-1', 'grammar', 'My brother ___ two children.', ['has', 'have', 'is', 'are'], {
        explain: { th: 'my brother = he ใช้ has', en: 'he: has.' },
      }),
      q('p-a1-7-2', 'grammar', 'This is ___ bag.', ["Anna's", 'Annas', "Annas'", 'Anna'], {
        explain: { th: "ความเป็นเจ้าของ: ชื่อ + 's", en: "Possession: name + 's." },
      }),
      q('p-a1-7-3', 'vocabulary', "My mother's sister is my ___.", ['aunt', 'uncle', 'cousin', 'niece'], {
        explain: { th: 'aunt = ป้า/น้า/อา (ผู้หญิง)', en: "Your parent's sister is your aunt." },
      }),
      q('p-a1-7-4', 'vocabulary', 'The opposite of "tall" is ___.', ['short', 'long', 'small', 'thin'], {
        explain: { th: 'tall ↔ short (ส่วนสูง)', en: 'tall ↔ short (height).' },
      }),
      q('p-a1-7-5', 'grammar', '___ you got any brothers or sisters?', ['Have', 'Has', 'Do', 'Are'], {
        explain: { th: 'Have you got…?', en: 'Have you got…?' },
      }),
      q('p-a1-7-6', 'vocabulary', 'She has long, black ___.', ['hair', 'hairs', 'eye', 'face'], {
        explain: { th: 'hair (ผมบนศีรษะ) นับไม่ได้', en: 'hair (on the head) is uncountable.' },
      }),
      q('p-a1-7-7', 'reading', 'Who lives with Nok?', ['her mother', 'her sister', 'her cousin', 'her father']),
      q('p-a1-7-8', 'listening', "What does the speaker's sister look like?", [
        'short with curly hair',
        'tall with long hair',
        'tall with short hair',
        'short with straight hair',
      ], { audio: "My sister is quite short and she's got curly hair." }),
    ],
  },
  // ───────────── A2 ─────────────
  {
    id: 'a2-6',
    level: 'A2',
    theme: 'travel',
    title: { th: 'ถามทางและการเดินทาง', en: 'Directions & Getting Around' },
    canDo: [
      { th: 'ถามทางและเข้าใจคำบอกทางง่าย ๆ ได้', en: 'I can ask for and understand simple directions.' },
      { th: 'ซื้อตั๋วและถามข้อมูลการเดินทางได้', en: 'I can buy tickets and ask about transport.' },
    ],
    vocab: [
      { word: 'turn left / right', th: 'เลี้ยวซ้าย / ขวา', example: 'Turn left at the traffic lights.' },
      { word: 'go straight on', th: 'ตรงไป', example: 'Go straight on for 200 metres.' },
      { word: 'opposite', th: 'ตรงข้าม', example: 'The bank is opposite the post office.' },
      { word: 'return ticket', th: 'ตั๋วไปกลับ', example: 'A return ticket to Ayutthaya, please.' },
      { word: 'platform', th: 'ชานชาลา', example: 'The train leaves from platform 2.' },
    ],
    grammar: {
      title: 'Imperatives & prepositions of movement',
      explain: {
        th: 'การบอกทางใช้ประโยคคำสั่ง (กริยาช่องที่ 1 ขึ้นต้น): Turn left, Go past the bank. คำบุพบทแสดงการเคลื่อนที่: along (ไปตาม), past (ผ่าน), across (ข้าม), through (ทะลุ/ผ่านเข้าไป), into (เข้าไปใน)',
        en: 'Give directions with imperatives (base verb first): Turn left, Go past the bank. Prepositions of movement: along, past, across, through, into.',
      },
      examples: ['Go along this road and turn right.', 'Walk past the cinema.', 'Cross the bridge and the museum is on your left.'],
    },
    reading: {
      title: 'How to get to the market',
      text: "From the hotel, turn right and go along Charoen Road. Go past the temple and turn left at the traffic lights. Cross the bridge. The night market is on your right, opposite the big shopping mall. It's about a ten-minute walk.",
    },
    practice: [
      q('p-a2-6-1', 'grammar', '___ left at the second street.', ['Turn', 'Turns', 'Turning', 'To turn'], {
        explain: { th: 'ประโยคคำสั่งใช้ V1', en: 'Imperative: base verb.' },
      }),
      q('p-a2-6-2', 'grammar', 'Walk ___ the park to get to the station.', ['through', 'on', 'at', 'in'], {
        explain: { th: 'through = ผ่านเข้าไปในพื้นที่', en: 'through = from one side to the other inside.' },
      }),
      q('p-a2-6-3', 'grammar', 'Go ___ the bank — the café is just after it.', ['past', 'passed', 'pass', 'by the'], {
        explain: { th: 'go past = เดินผ่าน', en: 'go past = go beyond something.' },
      }),
      q('p-a2-6-4', 'vocabulary', 'A ___ ticket takes you there and back.', ['return', 'single', 'one-way', 'single-way'], {
        explain: { th: 'return ticket = ตั๋วไปกลับ', en: 'return = there and back.' },
      }),
      q('p-a2-6-5', 'vocabulary', 'The post office is ___ the hospital — on the other side of the road.', ['opposite', 'next', 'between', 'behind of'], {
        explain: { th: 'opposite = ตรงข้าม', en: 'opposite = across from.' },
      }),
      q('p-a2-6-6', 'vocabulary', 'Excuse me, how do I ___ to the airport?', ['get', 'arrive', 'reach to', 'go at'], {
        explain: { th: 'get to = ไปถึง', en: 'get to = reach.' },
      }),
      q('p-a2-6-7', 'reading', 'Where is the night market?', [
        'opposite the shopping mall',
        'next to the temple',
        'at the traffic lights',
        'behind the hotel',
      ]),
      q('p-a2-6-8', 'listening', 'Which platform does the train leave from?', ['5', '2', '9', '15'], {
        audio: 'The next train to Hua Hin leaves at nine fifteen from platform five.',
      }),
    ],
  },
  {
    id: 'a2-7',
    level: 'A2',
    theme: 'life',
    title: { th: 'สุขภาพและการไปหาหมอ', en: 'Health & Seeing a Doctor' },
    canDo: [
      { th: 'บอกอาการป่วยง่าย ๆ ได้', en: 'I can describe common symptoms.' },
      { th: 'เข้าใจคำแนะนำของแพทย์และเภสัชกร', en: 'I can understand advice from a doctor or pharmacist.' },
    ],
    vocab: [
      { word: 'headache', th: 'ปวดหัว', example: "I've got a headache." },
      { word: 'sore throat', th: 'เจ็บคอ', example: 'She has a sore throat.' },
      { word: 'fever', th: 'ไข้', example: 'He has a high fever.' },
      { word: 'medicine', th: 'ยา', example: 'Take this medicine twice a day.' },
      { word: 'pharmacy', th: 'ร้านขายยา', example: 'Is there a pharmacy near here?' },
    ],
    grammar: {
      title: "should / shouldn't for advice",
      explain: {
        th: "should + V1 = ควร, shouldn't + V1 = ไม่ควร ใช้ให้คำแนะนำ ไม่เติม s และไม่มี to บอกอาการด้วย I've got / I have + a + อาการ (a cold, a headache)",
        en: "should + base verb = good idea; shouldn't = bad idea. No -s, no to. Describe symptoms with I've got / I have + a + symptom (a cold, a headache).",
      },
      examples: ['You should drink lots of water.', "You shouldn't go to work today.", "I've got a stomach ache."],
    },
    reading: {
      title: 'At the pharmacy',
      text: "Customer: Hello. I've got a sore throat and a slight fever.\nPharmacist: How long have you felt like this?\nCustomer: Since yesterday.\nPharmacist: Take these tablets three times a day after meals. You should rest and drink warm water. If you still feel ill after three days, you should see a doctor.",
    },
    practice: [
      q('p-a2-7-1', 'grammar', 'You look tired. You ___ go to bed early.', ['should', 'should to', 'shoulds', 'are should'], {
        explain: { th: 'should + V1', en: 'should + base verb.' },
      }),
      q('p-a2-7-2', 'grammar', "You ___ eat so much sugar. It's bad for your teeth.", ["shouldn't", "don't should", "not should", "should not to"], {
        explain: { th: "ไม่ควร: shouldn't + V1", en: "shouldn't + base verb." },
      }),
      q('p-a2-7-3', 'grammar', "I've got ___ headache.", ['a', 'an', 'the', 'some'], {
        explain: { th: 'have got + a + อาการ', en: 'have got + a + symptom.' },
      }),
      q('p-a2-7-4', 'vocabulary', 'You buy medicine at a ___.', ['pharmacy', 'bakery', 'library', 'stationery'], {
        explain: { th: 'pharmacy = ร้านขายยา', en: 'pharmacy = chemist.' },
      }),
      q('p-a2-7-5', 'vocabulary', 'My temperature is 39°C. I have a ___.', ['fever', 'cough', 'cold hand', 'flu shot'], {
        explain: { th: 'fever = ไข้', en: 'fever = high temperature.' },
      }),
      q('p-a2-7-6', 'vocabulary', 'It hurts when I swallow. I have a ___ throat.', ['sore', 'sour', 'sure', 'soft'], {
        explain: { th: 'sore throat = เจ็บคอ', en: 'sore throat = painful throat.' },
      }),
      q('p-a2-7-7', 'reading', 'When should the customer see a doctor?', [
        'if they still feel ill after three days',
        'today',
        'after every meal',
        'tomorrow morning',
      ]),
      q('p-a2-7-8', 'listening', 'How often should the patient take the medicine?', ['twice a day', 'once a day', 'three times a day', 'every hour'], {
        audio: 'Take one tablet twice a day, in the morning and before bed, for five days.',
      }),
    ],
  },
  // ───────────── B1 ─────────────
  {
    id: 'b1-6',
    level: 'B1',
    theme: 'travel',
    title: { th: 'ปัญหาระหว่างเดินทาง', en: 'Travel Problems' },
    canDo: [
      { th: 'เล่าปัญหาที่เกิดขึ้นระหว่างเดินทางได้', en: 'I can describe problems that happened while travelling.' },
      { th: 'ขอความช่วยเหลือที่สนามบินหรือโรงแรมได้', en: 'I can ask for help at an airport or hotel.' },
    ],
    vocab: [
      { word: 'delayed', th: 'ล่าช้า', example: 'Our flight was delayed by three hours.' },
      { word: 'luggage', th: 'กระเป๋าเดินทาง (นับไม่ได้)', example: 'My luggage didn\'t arrive.' },
      { word: 'boarding pass', th: 'บัตรขึ้นเครื่อง', example: 'Please show your boarding pass.' },
      { word: 'miss (a flight)', th: 'ตก (เที่ยวบิน)', example: 'We missed our connecting flight.' },
      { word: 'lost property', th: 'แผนกของหาย', example: 'Ask at the lost property office.' },
    ],
    grammar: {
      title: 'Past continuous vs past simple',
      explain: {
        th: 'past continuous (was/were + V-ing) ใช้กับเหตุการณ์ที่กำลังดำเนินอยู่ในอดีต past simple ใช้กับเหตุการณ์สั้น ๆ ที่แทรกเข้ามา: I was waiting at the gate when they announced the delay. ใช้ when กับเหตุการณ์สั้น และ while กับเหตุการณ์ยาว',
        en: 'Use the past continuous (was/were + -ing) for a longer action in progress and the past simple for a short action that interrupts it. Use when with the short action and while with the long one.',
      },
      examples: [
        'I was checking in when I realised I had lost my passport.',
        'While we were driving to the airport, it started to rain.',
        'Someone took my bag while I was sleeping.',
      ],
    },
    reading: {
      title: 'A trip to remember',
      text: "Last year, Joe was flying from Bangkok to London via Dubai. While he was waiting for his connection, the airline announced that the flight was cancelled because of a sandstorm. Joe spent the night in an airport hotel. When he finally arrived in London, his luggage wasn't there. It arrived two days later — but the trip was still one of his best.",
    },
    practice: [
      q('p-b1-6-1', 'grammar', 'I ___ a shower when the fire alarm went off.', ['was taking', 'took', 'am taking', 'have taken'], {
        explain: { th: 'เหตุการณ์ที่กำลังดำเนินอยู่: was + V-ing', en: 'Action in progress: was + -ing.' },
      }),
      q('p-b1-6-2', 'grammar', 'While we were waiting at the gate, they ___ the flight.', ['cancelled', 'were cancelling', 'cancel', 'have cancelled'], {
        explain: { th: 'เหตุการณ์สั้นที่แทรก: past simple', en: 'Short interrupting action: past simple.' },
      }),
      q('p-b1-6-3', 'grammar', 'What ___ you doing when I called?', ['were', 'did', 'was', 'are'], {
        explain: { th: 'you + were + V-ing', en: 'you + were + -ing.' },
      }),
      q('p-b1-6-4', 'vocabulary', 'We ___ our connecting flight because the first one was late.', ['missed', 'lost', 'forgot', 'failed'], {
        explain: { th: 'miss a flight = ตกเครื่อง', en: 'miss a flight.' },
      }),
      q('p-b1-6-5', 'vocabulary', 'How much ___ can I take on the plane?', ['luggage', 'luggages', 'baggages', 'suitcase'], {
        explain: { th: 'luggage นับไม่ได้ ใช้กับ how much', en: 'luggage is uncountable.' },
      }),
      q('p-b1-6-6', 'vocabulary', 'You need your ___ to get on the plane.', ['boarding pass', 'lost property', 'departure', 'check-out'], {
        explain: { th: 'boarding pass = บัตรขึ้นเครื่อง', en: 'boarding pass lets you board.' },
      }),
      q('p-b1-6-7', 'reading', 'Why was the flight cancelled?', ['because of a sandstorm', 'because Joe was late', 'because of a strike', 'because the plane was full']),
      q('p-b1-6-8', 'listening', 'What happened to the speaker?', [
        'Their bag was stolen on the train.',
        'They missed the train.',
        'They lost their ticket.',
        'They fell asleep and missed their stop.',
      ], { audio: 'I was sleeping on the train, and when I woke up, my bag had gone. Someone must have taken it.' }),
    ],
  },
  {
    id: 'b1-7',
    level: 'B1',
    theme: 'life',
    title: { th: 'เทคโนโลยีในชีวิตประจำวัน', en: 'Technology in Daily Life' },
    canDo: [
      { th: 'เปรียบเทียบชีวิตในอดีตกับปัจจุบันได้', en: 'I can compare life in the past and now.' },
      { th: 'พูดถึงข้อดีข้อเสียของเทคโนโลยีได้', en: 'I can discuss pros and cons of technology.' },
    ],
    vocab: [
      { word: 'download', th: 'ดาวน์โหลด', example: 'Download the app for free.' },
      { word: 'device', th: 'อุปกรณ์', example: 'Turn off all devices during the exam.' },
      { word: 'screen time', th: 'เวลาที่ใช้หน้าจอ', example: 'I want to reduce my screen time.' },
      { word: 'online banking', th: 'ธนาคารออนไลน์', example: 'I pay my bills with online banking.' },
      { word: 'convenient', th: 'สะดวก', example: 'Shopping online is very convenient.' },
    ],
    grammar: {
      title: 'used to + V1',
      explain: {
        th: "used to + V1 ใช้กับนิสัยหรือสภาพในอดีตที่ตอนนี้ไม่เป็นแล้ว ปฏิเสธ didn't use to + V1 คำถาม Did you use to…? (ระวัง: be used to + V-ing = เคยชินกับ)",
        en: "used to + base verb describes past habits or states that are no longer true. Negative: didn't use to; question: Did you use to…? (Careful: be used to + -ing means be accustomed to.)",
      },
      examples: ['I used to send letters; now I send messages.', "We didn't use to have smartphones.", 'Did you use to play video games?'],
    },
    reading: {
      title: 'Then and now',
      text: "My grandparents used to write letters to their family in the north. A letter used to take a week to arrive. Now my grandmother video-calls her sister every evening. She didn't use to like technology, but she says the phone has changed her life. The only problem is that she spends too much time watching cooking videos!",
    },
    practice: [
      q('p-b1-7-1', 'grammar', 'I ___ live in Hat Yai, but now I live in Bangkok.', ['used to', 'use to', 'am used to', 'was used'], {
        explain: { th: 'อดีตที่ไม่เป็นแล้ว: used to + V1', en: 'Past state: used to + base verb.' },
      }),
      q('p-b1-7-2', 'grammar', 'Did you ___ have a mobile phone at school?', ['use to', 'used to', 'using to', 'uses to'], {
        explain: { th: 'คำถาม: Did you use to…? (ไม่มี d)', en: 'Question: Did you use to…? (no d).' },
      }),
      q('p-b1-7-3', 'grammar', "We ___ use to pay online, but now we do it every day.", ["didn't", "don't", "weren't", "haven't"], {
        explain: { th: "ปฏิเสธ: didn't use to", en: "Negative: didn't use to." },
      }),
      q('p-b1-7-4', 'vocabulary', 'Online banking is very ___ — I can pay bills at midnight.', ['convenient', 'comfortable', 'confident', 'continuous'], {
        explain: { th: 'convenient = สะดวก', en: 'convenient = easy and useful.' },
      }),
      q('p-b1-7-5', 'vocabulary', 'Please switch off all electronic ___ before take-off.', ['devices', 'divides', 'advices', 'designs'], {
        explain: { th: 'device = อุปกรณ์', en: 'device = a piece of equipment.' },
      }),
      q('p-b1-7-6', 'vocabulary', 'Children with too much ___ often sleep badly.', ['screen time', 'time screen', 'screen hours', 'watch time'], {
        explain: { th: 'screen time = เวลาที่ใช้หน้าจอ', en: 'screen time = time spent on devices.' },
      }),
      q('p-b1-7-7', 'reading', "What is the grandmother's problem now?", [
        'She watches too many cooking videos.',
        'She cannot use the phone.',
        'Her letters take a week.',
        'Her sister never calls.',
      ]),
      q('p-b1-7-8', 'listening', 'What did the speaker use to do?', ['read paper maps', 'use a GPS', 'take taxis everywhere', 'travel abroad'], {
        audio: 'I used to carry paper maps everywhere. Now I just use the map app on my phone.',
      }),
    ],
  },
  // ───────────── B2 ─────────────
  {
    id: 'b2-6',
    level: 'B2',
    theme: 'travel',
    title: { th: 'วัฒนธรรมและการท่องเที่ยว', en: 'Travel & Culture' },
    canDo: [
      { th: 'บรรยายสถานที่และประเพณีโดยละเอียดได้', en: 'I can describe places and customs in detail.' },
      { th: 'ใช้ relative clauses ทั้งแบบระบุและไม่ระบุได้', en: 'I can use defining and non-defining relative clauses.' },
    ],
    vocab: [
      { word: 'custom', th: 'ธรรมเนียม', example: 'It is a local custom to remove your shoes.' },
      { word: 'off the beaten track', th: 'ที่ที่นักท่องเที่ยวไม่ค่อยไป', example: 'We found a village off the beaten track.' },
      { word: 'breathtaking', th: 'งดงามน่าทึ่ง', example: 'The view was breathtaking.' },
      { word: 'souvenir', th: 'ของที่ระลึก', example: 'I bought some souvenirs for my colleagues.' },
      { word: 'immerse yourself in', th: 'ซึมซับ, เข้าไปสัมผัสอย่างเต็มที่', example: 'Immerse yourself in the local culture.' },
    ],
    grammar: {
      title: 'Defining & non-defining relative clauses',
      explain: {
        th: 'Defining clause ระบุว่าเป็นคน/สิ่งไหน ไม่มีจุลภาค ใช้ who/which/that ได้ Non-defining clause ให้ข้อมูลเพิ่มเติม มีจุลภาคคั่น ใช้ that ไม่ได้ (ใช้ who / which / whose / where) whose = ของ…, where = ที่ซึ่ง',
        en: "Defining clauses identify which person/thing — no commas; who/which/that are possible. Non-defining clauses add extra information — with commas, and never that (use who/which/whose/where).",
      },
      examples: [
        'The guide who showed us around was very knowledgeable.',
        'Kyoto, which has over 1,600 temples, is my favourite city.',
        'We stayed with a family whose house overlooked the rice fields.',
      ],
    },
    reading: {
      title: 'Slow travel',
      text: 'Slow travel, which encourages visitors to stay longer in fewer places, is becoming increasingly popular. Instead of rushing between landmarks, travellers rent apartments, shop at local markets and take language classes. People who have tried it say they come home with deeper friendships and fewer souvenirs — and the communities where they stay benefit more from their spending.',
    },
    practice: [
      q('p-b2-6-1', 'grammar', 'Chiang Mai, ___ is in the north, is famous for its festivals.', ['which', 'that', 'who', 'where'], {
        explain: { th: 'non-defining (มีจุลภาค) ใช้ which ไม่ใช้ that', en: 'Non-defining: which, not that.' },
      }),
      q('p-b2-6-2', 'grammar', 'That is the hotel ___ we stayed on our honeymoon.', ['where', 'which', 'who', 'whose'], {
        explain: { th: 'where = สถานที่ที่…', en: 'where for places.' },
      }),
      q('p-b2-6-3', 'grammar', 'I met a woman ___ son works in Bangkok.', ['whose', 'who', "who's", 'which'], {
        explain: { th: 'whose = ของคนนั้น', en: 'whose = possession.' },
      }),
      q('p-b2-6-4', 'vocabulary', 'The view from the mountain top was absolutely ___.', ['breathtaking', 'breathless', 'breathing', 'breathy'], {
        explain: { th: 'breathtaking = งดงามน่าทึ่ง', en: 'breathtaking = amazingly beautiful.' },
      }),
      q('p-b2-6-5', 'vocabulary', 'We prefer places off the beaten ___, away from the crowds.', ['track', 'road', 'way', 'path way'], {
        explain: { th: 'off the beaten track (สำนวน)', en: 'Idiom: off the beaten track.' },
      }),
      q('p-b2-6-6', 'vocabulary', 'In Japan, bowing is a common ___.', ['custom', 'costume', 'customer', 'customs office'], {
        explain: { th: 'custom = ธรรมเนียม (costume = เครื่องแต่งกาย)', en: 'custom = tradition; costume = clothes.' },
      }),
      q('p-b2-6-7', 'reading', 'According to the text, what do slow travellers bring home?', [
        'deeper friendships and fewer souvenirs',
        'more souvenirs',
        'cheaper flights',
        'more photographs of landmarks',
      ]),
      q('p-b2-6-8', 'listening', 'Why did the speaker like the homestay?', [
        'The family taught them to cook local dishes.',
        'It was very cheap.',
        'It was near the airport.',
        'It had a swimming pool.',
      ], { audio: 'The homestay, which was run by a lovely couple, was the highlight of our trip — they taught us to cook their local dishes.' }),
    ],
  },
  {
    id: 'b2-7',
    level: 'B2',
    theme: 'life',
    title: { th: 'สุขภาพและไลฟ์สไตล์', en: 'Health & Lifestyle' },
    canDo: [
      { th: 'พูดถึงเป้าหมายด้านสุขภาพในอนาคตได้', en: 'I can talk about future health goals.' },
      { th: 'ใช้ future continuous และ future perfect ได้', en: 'I can use the future continuous and future perfect.' },
    ],
    vocab: [
      { word: 'work-life balance', th: 'ความสมดุลระหว่างงานกับชีวิต', example: 'A good work-life balance reduces stress.' },
      { word: 'cut down on', th: 'ลดปริมาณ', example: "I'm trying to cut down on sugar." },
      { word: 'sedentary', th: 'นั่งอยู่กับที่มาก ไม่ค่อยเคลื่อนไหว', example: 'Office work is very sedentary.' },
      { word: 'burnout', th: 'ภาวะหมดไฟ', example: 'Long hours can lead to burnout.' },
      { word: 'take up (a hobby)', th: 'เริ่มทำ (งานอดิเรก)', example: 'I took up yoga last year.' },
    ],
    grammar: {
      title: 'Future continuous & future perfect',
      explain: {
        th: 'Future continuous (will be + V-ing) = กำลังทำอยู่ ณ เวลาหนึ่งในอนาคต Future perfect (will have + V3) = จะทำเสร็จก่อนเวลาหนึ่งในอนาคต มักใช้กับ by (by next year, by the time…)',
        en: 'Future continuous (will be + -ing) = in progress at a future time. Future perfect (will have + past participle) = completed before a future time, often with by (by next year, by the time…).',
      },
      examples: [
        "This time next month, I'll be running my first half-marathon.",
        "By December, I'll have lost five kilos.",
        "By the time you arrive, we'll have finished dinner.",
      ],
    },
    reading: {
      title: 'A new year, a new routine',
      text: "After years of a sedentary office job, Pim decided to make changes before she suffered burnout. She has cut down on coffee and taken up swimming. 'By the end of the year, I'll have swum 100 kilometres,' she says. Her next goal? 'This time next year, I'll be working four days a week, so I'll have more time for my family.'",
    },
    practice: [
      q('p-b2-7-1', 'grammar', "By 2030, I ___ my own business.", ['will have started', 'will be starting', 'start', 'have started'], {
        explain: { th: 'by + เวลาในอนาคต = future perfect', en: 'by + future time: future perfect.' },
      }),
      q('p-b2-7-2', 'grammar', "Don't call at 8 — I ___ at the gym then.", ["'ll be working out", "'ll have worked out", 'work out', 'worked out'], {
        explain: { th: 'กำลังทำอยู่ ณ เวลานั้น: will be + V-ing', en: 'In progress then: will be + -ing.' },
      }),
      q('p-b2-7-3', 'grammar', 'By the time we get there, the class ___.', ['will have finished', 'will be finishing', 'finishes', 'has finished'], {
        explain: { th: 'จบก่อนที่เราจะไปถึง: future perfect', en: 'Completed before: future perfect.' },
      }),
      q('p-b2-7-4', 'vocabulary', "I'm trying to cut ___ on fast food.", ['down', 'up', 'off', 'out of'], {
        explain: { th: 'cut down on = ลดปริมาณ', en: 'cut down on = reduce.' },
      }),
      q('p-b2-7-5', 'vocabulary', 'Working 70 hours a week can lead to ___.', ['burnout', 'breakout', 'blackout', 'workout'], {
        explain: { th: 'burnout = ภาวะหมดไฟ', en: 'burnout = exhaustion from stress.' },
      }),
      q('p-b2-7-6', 'vocabulary', 'Sitting at a desk all day is a very ___ lifestyle.', ['sedentary', 'sedative', 'sentimental', 'secondary'], {
        explain: { th: 'sedentary = นั่งมาก ไม่ค่อยขยับ', en: 'sedentary = involving little movement.' },
      }),
      q('p-b2-7-7', 'reading', 'What will Pim be doing this time next year?', [
        'working four days a week',
        'swimming 100 km a day',
        'drinking more coffee',
        'working longer hours',
      ]),
      q('p-b2-7-8', 'listening', 'What will the speaker have done by the summer?', [
        'completed a nutrition course',
        'started a nutrition course',
        'run a marathon',
        'moved house',
      ], { audio: "I'm studying nutrition online, and by the summer I'll have completed the whole course." }),
    ],
  },
  // ───────────── C1 ─────────────
  {
    id: 'c1-6',
    level: 'C1',
    theme: 'travel',
    title: { th: 'การท่องเที่ยวอย่างยั่งยืน', en: 'Sustainable Tourism' },
    canDo: [
      { th: 'อภิปรายผลกระทบของการท่องเที่ยวต่อชุมชนและสิ่งแวดล้อมได้', en: 'I can discuss the impact of tourism on communities and the environment.' },
      { th: 'ใช้คำเชื่อมแสดงความขัดแย้งระดับสูงได้', en: 'I can use advanced linkers of contrast and concession.' },
    ],
    vocab: [
      { word: 'overtourism', th: 'การท่องเที่ยวที่หนาแน่นเกินไป', example: 'Venice suffers from overtourism.' },
      { word: 'carbon footprint', th: 'การปล่อยคาร์บอน', example: 'Flying increases your carbon footprint.' },
      { word: 'livelihood', th: 'อาชีพ, รายได้เลี้ยงชีพ', example: 'Many livelihoods depend on tourism.' },
      { word: 'eco-friendly', th: 'เป็นมิตรกับสิ่งแวดล้อม', example: 'They run an eco-friendly resort.' },
      { word: 'strike a balance', th: 'หาจุดสมดุล', example: 'We must strike a balance between growth and conservation.' },
    ],
    grammar: {
      title: 'Concession & contrast: whereas, nonetheless, even so, much as',
      explain: {
        th: 'whereas / while เปรียบเทียบสองสิ่งที่ต่างกันในประโยคเดียว nonetheless / even so / that said ขึ้นประโยคใหม่เพื่อแย้ง Much as + ประโยค = แม้จะ… มาก ๆ (Much as I love travelling, …)',
        en: 'whereas / while contrast two ideas in one sentence. nonetheless / even so / that said start a new sentence that concedes a point. Much as + clause = although very much (Much as I love travelling, …).',
      },
      examples: [
        'Tourism creates jobs, whereas it can also damage fragile ecosystems.',
        'The fees are high. Nonetheless, visitor numbers keep rising.',
        'Much as I enjoy flying, I try to take the train when I can.',
      ],
    },
    reading: {
      title: 'Closing paradise',
      text: "In 2018 Maya Bay, made famous by the film The Beach, was closed to visitors after years of overtourism had destroyed much of its coral. The decision was controversial, since many local livelihoods depended on tourism. Even so, the closure allowed the ecosystem to recover remarkably. The bay has since reopened with strict daily limits — an attempt to strike a balance between income and conservation.",
    },
    practice: [
      q('p-c1-6-1', 'grammar', 'Some resorts are eco-friendly, ___ others pay little attention to the environment.', ['whereas', 'nonetheless', 'despite', 'even so'], {
        explain: { th: 'whereas เชื่อมสองประโยคที่ตรงข้ามกัน', en: 'whereas joins two contrasting clauses.' },
      }),
      q('p-c1-6-2', 'grammar', 'The trip was expensive. ___, it was worth every baht.', ['Nonetheless', 'Whereas', 'Although', 'Despite'], {
        explain: { th: 'Nonetheless ขึ้นประโยคใหม่', en: 'Nonetheless starts a new sentence.' },
      }),
      q('p-c1-6-3', 'grammar', '___ I admire their efforts, the policy has not worked.', ['Much as', 'Much', 'As much', 'However'], {
        explain: { th: 'Much as + ประโยค = แม้ว่า', en: 'Much as + clause = although.' },
      }),
      q('p-c1-6-4', 'vocabulary', 'Taking the train instead of flying reduces your carbon ___.', ['footprint', 'fingerprint', 'footstep', 'imprint'], {
        explain: { th: 'carbon footprint', en: 'Collocation: carbon footprint.' },
      }),
      q('p-c1-6-5', 'vocabulary', 'Fishing is the main ___ for most families on the island.', ['livelihood', 'likelihood', 'lifestyle', 'lifetime'], {
        explain: { th: 'livelihood = อาชีพเลี้ยงชีพ (likelihood = ความน่าจะเป็น)', en: 'livelihood = way of earning a living.' },
      }),
      q('p-c1-6-6', 'vocabulary', 'We need to ___ a balance between tourism and conservation.', ['strike', 'hit', 'make up', 'beat'], {
        explain: { th: 'strike a balance', en: 'Collocation: strike a balance.' },
      }),
      q('p-c1-6-7', 'reading', 'Why was the closure of Maya Bay controversial?', [
        'Many local people depended on tourism for income.',
        'The coral was not damaged.',
        'The film needed to be reshot.',
        'Visitor numbers were very low.',
      ]),
      q('p-c1-6-8', 'listening', "What is the speaker's view on tourist taxes?", [
        'They are fair if the money goes to the community.',
        'They should be abolished.',
        'They are too low.',
        'They only benefit airlines.',
      ], { audio: "I'm not against tourist taxes per se, provided the revenue genuinely goes back into the local community." }),
    ],
  },
  {
    id: 'c1-7',
    level: 'C1',
    theme: 'life',
    title: { th: 'เทคโนโลยีกับสังคม', en: 'Technology & Society' },
    canDo: [
      { th: 'อภิปรายผลกระทบของ AI และเทคโนโลยีต่อสังคมได้', en: 'I can discuss the impact of AI and technology on society.' },
      { th: 'ใช้ causative (have/get something done) และ passive ขั้นสูงได้', en: 'I can use the causative and advanced passives.' },
    ],
    vocab: [
      { word: 'artificial intelligence (AI)', th: 'ปัญญาประดิษฐ์', example: 'AI is transforming healthcare.' },
      { word: 'privacy', th: 'ความเป็นส่วนตัว', example: 'Many users worry about their privacy.' },
      { word: 'automation', th: 'ระบบอัตโนมัติ', example: 'Automation may replace some jobs.' },
      { word: 'misinformation', th: 'ข้อมูลเท็จ', example: 'Misinformation spreads quickly online.' },
      { word: 'double-edged sword', th: 'ดาบสองคม', example: 'Social media is a double-edged sword.' },
    ],
    grammar: {
      title: 'Causative: have / get something done',
      explain: {
        th: 'have/get + กรรม + V3 = ให้คนอื่นทำให้ (I had my phone repaired.) get ใช้ในภาษาพูดมากกว่า have someone do / get someone to do = ให้ใครทำอะไร และ passive กับ modal: can be + V3, should have been + V3',
        en: 'have/get + object + past participle = arrange for someone else to do it (I had my phone repaired). get is more informal. have someone do / get someone to do = make someone do. Passive modals: can be done, should have been done.',
      },
      examples: [
        'We had the software updated last week.',
        'I got my laptop fixed in a day.',
        'Personal data should have been protected more carefully.',
      ],
    },
    reading: {
      title: 'Who checks the facts?',
      text: "Generative AI can now produce convincing articles, images and even voices in seconds. Proponents argue that it will free people from repetitive tasks. Critics, however, warn that it is a double-edged sword: misinformation can be created on an industrial scale, and much of the data used to train these systems was collected without users' consent. Most experts agree that clearer regulation should have been introduced years ago.",
    },
    practice: [
      q('p-c1-7-1', 'grammar', 'I need to ___ my car serviced before the trip.', ['get', 'make', 'do', 'let'], {
        explain: { th: 'get + กรรม + V3', en: 'get + object + past participle.' },
      }),
      q('p-c1-7-2', 'grammar', 'We had our office ___ last month.', ['redesigned', 'redesign', 'redesigning', 'to redesign'], {
        explain: { th: 'have + กรรม + V3', en: 'have + object + past participle.' },
      }),
      q('p-c1-7-3', 'grammar', 'The problem ___ months ago — now it is too late.', [
        'should have been fixed',
        'should be fixed',
        'should have fixed',
        'should fixed',
      ], { explain: { th: 'passive modal อดีต: should have been + V3', en: 'Past passive modal: should have been + past participle.' } }),
      q('p-c1-7-4', 'vocabulary', 'Social media is a ___ sword: it connects us but also divides us.', ['double-edged', 'two-sided', 'double-faced', 'sharp-edged'], {
        explain: { th: 'a double-edged sword = ดาบสองคม', en: 'Idiom: a double-edged sword.' },
      }),
      q('p-c1-7-5', 'vocabulary', 'False news stories are a form of ___.', ['misinformation', 'disinterest', 'misunderstanding', 'malpractice'], {
        explain: { th: 'misinformation = ข้อมูลเท็จ', en: 'misinformation = false information.' },
      }),
      q('p-c1-7-6', 'vocabulary', 'Factory ___ has reduced the need for manual workers.', ['automation', 'automatic', 'autonomy', 'autograph'], {
        explain: { th: 'automation = ระบบอัตโนมัติ (คำนาม)', en: 'automation (noun).' },
      }),
      q('p-c1-7-7', 'reading', 'What do most experts agree on?', [
        'Regulation should have come earlier.',
        'AI should be banned.',
        'AI cannot create images.',
        'Users consented to data collection.',
      ]),
      q('p-c1-7-8', 'listening', "What is the speaker's concern?", [
        'People may stop thinking critically.',
        'AI is too expensive.',
        'Computers are too slow.',
        'There are not enough engineers.',
      ], { audio: "My worry isn't that machines will become too clever, but that we'll stop questioning what they tell us." }),
    ],
  },
  // ───────────── C2 ─────────────
  {
    id: 'c2-6',
    level: 'C2',
    theme: 'travel',
    title: { th: 'การเขียนเชิงท่องเที่ยว', en: 'Travel Writing' },
    canDo: [
      { th: 'เขียนบรรยายสถานที่อย่างมีชีวิตชีวาและมีลีลา', en: 'I can write vivid, stylish descriptions of places.' },
      { th: 'ใช้ fronting และ inversion เพื่อสร้างลีลาการเขียน', en: 'I can use fronting and inversion for stylistic effect.' },
    ],
    vocab: [
      { word: 'bustling', th: 'คึกคัก จอแจ', example: 'a bustling night market' },
      { word: 'ramshackle', th: 'ทรุดโทรม โย้เย้', example: 'a ramshackle wooden pier' },
      { word: 'pervade', th: 'อบอวล แผ่ซ่าน', example: 'The scent of jasmine pervaded the air.' },
      { word: 'serene', th: 'สงบ ร่มเย็น', example: 'a serene mountain lake' },
      { word: 'evocative', th: 'ชวนให้นึกถึง กระตุ้นความรู้สึก', example: 'an evocative description of the old city' },
    ],
    grammar: {
      title: 'Fronting & locative inversion',
      explain: {
        th: 'นักเขียนมักยกวลีบอกสถานที่หรือทิศทางขึ้นต้นประโยค แล้วกลับกริยามาก่อนประธาน (locative inversion) เพื่อสร้างภาพและจังหวะ: At the end of the alley stood a tiny temple. ใช้กับกริยาบอกตำแหน่ง/การเคลื่อนที่ (stand, lie, sit, come, rise) และประธานต้องเป็นคำนาม ไม่ใช่สรรพนาม',
        en: 'Writers front a phrase of place or direction and put the verb before the subject (locative inversion) for imagery and rhythm: At the end of the alley stood a tiny temple. It works with verbs of position/motion (stand, lie, sit, come, rise) and a noun subject, not a pronoun.',
      },
      examples: [
        'Beyond the rice fields rose a range of misty hills.',
        'Down the narrow lane came a procession of monks.',
        'So still was the lake that it mirrored every cloud.',
      ],
    },
    reading: {
      title: 'Dawn in Luang Prabang',
      text: 'Before the sun has fully risen, the town is already stirring. Along the main street kneel rows of villagers, baskets of sticky rice in their laps. Out of the mist emerges a line of saffron-robed monks, barefoot and silent. Only the soft shuffle of feet breaks the stillness. So serene is the scene that even the most restless traveller lowers their camera and simply watches.',
    },
    practice: [
      q('p-c2-6-1', 'grammar', 'At the top of the hill ___.', ['stood an ancient pagoda', 'an ancient pagoda stood it', 'did an ancient pagoda stand', 'stood it'], {
        explain: { th: 'locative inversion: กริยา + ประธาน (คำนาม)', en: 'Locative inversion: verb + noun subject.' },
      }),
      q('p-c2-6-2', 'grammar', 'So crowded ___ that we could barely move.', ['was the market', 'the market was', 'did the market be', 'the market'], {
        explain: { th: 'So + adj + be + ประธาน + that…', en: 'So + adjective + be + subject + that…' },
      }),
      q('p-c2-6-3', 'grammar', 'Which sentence is NOT correct?', [
        'Into the room came he.',
        'Into the room came the manager.',
        'In the corner sat an old man.',
        'Here comes the bus.',
      ], { explain: { th: 'locative inversion ใช้กับสรรพนามไม่ได้', en: 'Locative inversion does not work with pronoun subjects.' } }),
      q('p-c2-6-4', 'vocabulary', 'The streets were ___ with traders, tourists and tuk-tuks.', ['bustling', 'bristling', 'bursting at', 'busting'], {
        explain: { th: 'bustling = คึกคัก', en: 'bustling = busy and lively.' },
      }),
      q('p-c2-6-5', 'vocabulary', 'The smell of fresh coffee ___ the whole building.', ['pervaded', 'persuaded', 'perverted', 'pervasive'], {
        explain: { th: 'pervade = แผ่ซ่านไปทั่ว', en: 'pervade = spread through.' },
      }),
      q('p-c2-6-6', 'vocabulary', 'We stayed in a ___ old guesthouse that looked as if it might collapse.', ['ramshackle', 'ramrod', 'rampant', 'ransacked'], {
        explain: { th: 'ramshackle = ทรุดโทรม', en: 'ramshackle = badly made, falling apart.' },
      }),
      q('p-c2-6-7', 'reading', 'What effect does the scene have on travellers?', [
        'They stop taking photos and simply watch.',
        'They join the monks.',
        'They leave before sunrise.',
        'They buy sticky rice baskets.',
      ]),
      q('p-c2-6-8', 'listening', 'What does the speaker value most in travel writing?', [
        'details that make the place feel real',
        'lists of hotel prices',
        'long historical facts',
        'beautiful photographs',
      ], { audio: "What separates great travel writing from a brochure is the telling detail — the one that makes you smell the place and hear its noise." }),
    ],
  },
  {
    id: 'c2-7',
    level: 'C2',
    theme: 'life',
    title: { th: 'ประเด็นถกเถียงและจริยธรรม', en: 'Ethics & Debate' },
    canDo: [
      { th: 'โต้แย้งในประเด็นซับซ้อนอย่างมีเหตุผลและสุภาพได้', en: 'I can argue complex issues persuasively and courteously.' },
      { th: 'ใช้ discourse markers ระดับสูงเพื่อยอมรับและโต้แย้ง', en: 'I can use advanced discourse markers to concede and counter.' },
    ],
    vocab: [
      { word: 'contentious', th: 'เป็นที่ถกเถียง', example: 'Euthanasia remains a contentious issue.' },
      { word: 'slippery slope', th: 'จุดเริ่มต้นที่จะนำไปสู่เรื่องแย่ลงเรื่อย ๆ', example: 'Critics call it a slippery slope.' },
      { word: 'play devil\'s advocate', th: 'แกล้งโต้แย้งฝ่ายตรงข้ามเพื่อทดสอบความคิด', example: "Let me play devil's advocate for a moment." },
      { word: 'untenable', th: 'ยืนยันไม่ได้ ไม่มีเหตุผลรองรับ', example: 'That position is simply untenable.' },
      { word: 'concede', th: 'ยอมรับ (ว่าอีกฝ่ายมีส่วนถูก)', example: 'I concede that the costs are high.' },
    ],
    grammar: {
      title: 'Conceding & countering',
      explain: {
        th: 'ในการโต้แย้งระดับสูง มักยอมรับข้อดีของอีกฝ่ายก่อนแล้วจึงแย้ง: Granted, … ; Admittedly, … ; Be that as it may, … ; That is not to say that … ; It could be argued that…, yet … และใช้ while / whilst / albeit เพื่อรวมความคิดให้กระชับ',
        en: "Strong arguments concede before countering: Granted, … ; Admittedly, … ; Be that as it may, … ; That is not to say that … ; It could be argued that…, yet … Use while/whilst/albeit to combine ideas concisely.",
      },
      examples: [
        'Granted, the policy is costly. Be that as it may, the long-term benefits are considerable.',
        'That is not to say that technology is harmful; rather, it must be used wisely.',
        'It could be argued that the ban limits freedom, yet it undeniably saves lives.',
      ],
    },
    reading: {
      title: 'Should billionaires exist?',
      text: "Few questions are as contentious as whether extreme wealth is morally defensible. Admittedly, many billionaires have created products that improved millions of lives. Be that as it may, critics contend that no individual's contribution could justify wealth exceeding that of entire nations. That is not to say that success should be penalised; rather, the debate centres on whether tax systems adequately reflect the public infrastructure on which all fortunes ultimately depend.",
    },
    practice: [
      q('p-c2-7-1', 'grammar', '___, the plan has some flaws. Even so, it is the best option we have.', ['Admittedly', 'Consequently', 'Furthermore', 'Likewise'], {
        explain: { th: 'Admittedly = ยอมรับว่า', en: 'Admittedly concedes a point.' },
      }),
      q('p-c2-7-2', 'grammar', 'The risks are real. Be that as it ___, we cannot simply do nothing.', ['may', 'might', 'can', 'will'], {
        explain: { th: 'สำนวนตายตัว: Be that as it may', en: 'Fixed phrase: Be that as it may.' },
      }),
      q('p-c2-7-3', 'grammar', 'That is not to say ___ the research is worthless.', ['that', 'what', 'which', 'if'], {
        explain: { th: 'That is not to say that…', en: 'That is not to say that…' },
      }),
      q('p-c2-7-4', 'vocabulary', "Let me play devil's ___ and argue the opposite.", ['advocate', 'adversary', 'advisor', 'admirer'], {
        explain: { th: "play devil's advocate", en: "Idiom: play devil's advocate." },
      }),
      q('p-c2-7-5', 'vocabulary', 'After the new evidence emerged, his argument became ___.', ['untenable', 'unattainable', 'untouchable', 'unthinkable'], {
        explain: { th: 'untenable = ยืนยันต่อไม่ได้', en: 'untenable = cannot be defended.' },
      }),
      q('p-c2-7-6', 'vocabulary', 'Critics fear that allowing one exception is a slippery ___.', ['slope', 'slide', 'step', 'surface'], {
        explain: { th: 'a slippery slope', en: 'Idiom: a slippery slope.' },
      }),
      q('p-c2-7-7', 'reading', 'According to the text, what is the debate really about?', [
        'whether tax systems reflect the public infrastructure fortunes rely on',
        'whether billionaires should be punished for success',
        'whether billionaires create useful products',
        'whether nations are richer than individuals',
      ]),
      q('p-c2-7-8', 'listening', 'What does the speaker do?', [
        'concedes a point, then disagrees',
        'agrees completely',
        'refuses to discuss the issue',
        'changes the topic',
      ], { audio: "Granted, the scheme has helped some families. Even so, I'd argue it's done more harm than good overall." }),
    ],
  },
]
