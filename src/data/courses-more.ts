import { q } from '../lib/question'
import type { Unit } from '../types'

/** Second travel and everyday-life unit for every CEFR level. */
export const MORE_UNITS: Unit[] = [
  // ───────────── A1 ─────────────
  {
    id: 't-a1-2',
    level: 'A1',
    theme: 'travel',
    title: { th: 'ที่สนามบิน', en: 'At the Airport' },
    canDo: [
      { th: 'เช็กอินและตอบคำถามง่าย ๆ ที่สนามบินได้', en: 'I can check in and answer simple questions at the airport.' },
      { th: 'อ่านป้ายและเข้าใจประกาศสั้น ๆ ได้', en: 'I can read signs and understand short announcements.' },
    ],
    vocab: [
      { word: 'passport', th: 'หนังสือเดินทาง', example: 'Here is my passport.' },
      { word: 'ticket', th: 'ตั๋ว', example: 'Can I see your ticket, please?' },
      { word: 'gate', th: 'ประตูขึ้นเครื่อง', example: 'Go to gate 12.' },
      { word: 'bag', th: 'กระเป๋า', example: 'I have one bag.' },
      { word: 'window seat', th: 'ที่นั่งริมหน้าต่าง', example: 'A window seat, please.' },
    ],
    grammar: {
      title: 'Questions with be & short answers',
      explain: {
        th: 'คำถามกับ be ย้าย is/are ขึ้นหน้า: Is this your bag? — Yes, it is. / No, it isn\'t. คำถามข้อมูลใช้ What / Where + is: Where is gate 5?',
        en: "Questions with be put is/are first: Is this your bag? — Yes, it is. / No, it isn't. Information questions: What / Where + is: Where is gate 5?",
      },
      examples: ['Is this your bag? — Yes, it is.', 'Where is the toilet?', 'Are you from Thailand? — Yes, I am.'],
    },
    reading: {
      title: 'Check-in',
      text: "Staff: Good morning. Where are you going?\nNid: To Tokyo.\nStaff: Can I see your passport, please?\nNid: Here you are.\nStaff: Thank you. Window seat or aisle seat?\nNid: Window seat, please.\nStaff: OK. Your gate is 24. Boarding is at 10:15. Have a nice flight!",
    },
    practice: [
      q('p-t-a1-2-1', 'grammar', '___ this your bag? — Yes, it is.', ['Is', 'Are', 'Do', 'Am'], {
        explain: { th: 'this ใช้ Is', en: 'this: Is.' },
      }),
      q('p-t-a1-2-2', 'grammar', '___ is the gate? — It is over there.', ['Where', 'What', 'Who', 'When'], {
        explain: { th: 'ถามสถานที่: Where', en: 'Place: Where.' },
      }),
      q('p-t-a1-2-3', 'grammar', 'Are you from Japan? — No, I ___.', ["'m not", "isn't", "aren't", "not"], {
        explain: { th: "I'm not", en: "I'm not." },
      }),
      q('p-t-a1-2-4', 'vocabulary', 'You need a ___ to travel to another country.', ['passport', 'menu', 'towel', 'map'], {
        explain: { th: 'หนังสือเดินทาง = passport', en: 'You need a passport.' },
      }),
      q('p-t-a1-2-5', 'vocabulary', 'You get on the plane at the ___.', ['gate', 'garden', 'ground', 'gift shop'], {
        explain: { th: 'ขึ้นเครื่องที่ gate', en: 'You board at the gate.' },
      }),
      q('p-t-a1-2-6', 'vocabulary', '"Here ___ are." (giving something)', ['you', 'your', 'yours', 'is'], {
        explain: { th: 'Here you are. = นี่ครับ/ค่ะ (ยื่นให้)', en: 'Here you are. = when giving something.' },
      }),
      q('p-t-a1-2-7', 'reading', 'What is Nid\'s gate number?', ['24', '10', '15', '42']),
      q('p-t-a1-2-8', 'listening', 'Where is the flight going?', ['Seoul', 'Tokyo', 'Singapore', 'Bangkok'], {
        audio: 'Flight KE 652 to Seoul is now boarding at gate 8.',
      }),
    ],
  },
  {
    id: 'l-a1-2',
    level: 'A1',
    theme: 'life',
    title: { th: 'อากาศและฤดูกาล ☀️🌧️', en: 'Weather & Seasons ☀️🌧️' },
    canDo: [
      { th: 'บอกสภาพอากาศวันนี้ได้', en: "I can describe today's weather." },
      { th: 'บอกกิจกรรมที่ชอบทำในแต่ละฤดูได้', en: 'I can say what I like doing in each season.' },
    ],
    vocab: [
      { word: 'sunny', th: 'แดดออก', example: "It's sunny today." },
      { word: 'rainy', th: 'ฝนตก', example: 'It is rainy in July.' },
      { word: 'hot / cold', th: 'ร้อน / หนาว', example: "It's very hot in April." },
      { word: 'umbrella', th: 'ร่ม', example: 'Take an umbrella.' },
      { word: 'season', th: 'ฤดู', example: 'Thailand has three seasons.' },
    ],
    grammar: {
      title: "It's + weather / like + -ing",
      explain: {
        th: "บอกอากาศด้วย It's + คำคุณศัพท์ (It's cloudy.) ถาม What's the weather like? บอกสิ่งที่ชอบทำด้วย like + V-ing (I like swimming.)",
        en: "Describe the weather with It's + adjective. Ask What's the weather like? Say what you enjoy with like + -ing (I like swimming).",
      },
      examples: ["What's the weather like? — It's windy.", 'I like swimming in summer.', "It's cold in December in Chiang Mai."],
    },
    reading: {
      title: 'Weather in Thailand',
      text: "Thailand has three seasons. From March to May it's very hot. From June to October it's the rainy season — take an umbrella! From November to February it's cool and dry. I like the cool season because I like walking in the park.",
    },
    practice: [
      q('p-l-a1-2-1', 'grammar', "What's the weather ___?", ['like', 'likes', 'is', 'do'], {
        explain: { th: "What's the weather like?", en: "What's the weather like?" },
      }),
      q('p-l-a1-2-2', 'grammar', 'I like ___ in the sea.', ['swimming', 'swim', 'swims', 'to swimming'], {
        explain: { th: 'like + V-ing', en: 'like + -ing.' },
      }),
      q('p-l-a1-2-3', 'grammar', "___ very hot today!", ["It's", "Its", "It", "Is"], {
        explain: { th: "It's = It is", en: "It's = It is." },
      }),
      q('p-l-a1-2-4', 'vocabulary', "It's raining. Take an ___.", ['umbrella', 'sunglasses', 'ice cream', 'fan'], {
        explain: { th: 'ฝนตกเอาร่ม', en: 'Rain: umbrella.' },
      }),
      q('p-l-a1-2-5', 'vocabulary', '☀️ = It is ___.', ['sunny', 'snowy', 'rainy', 'foggy'], {
        explain: { th: 'แดดออก = sunny', en: 'Sun: sunny.' },
      }),
      q('p-l-a1-2-6', 'vocabulary', 'Summer, winter and the rainy season are ___.', ['seasons', 'months', 'days', 'weeks'], {
        explain: { th: 'ฤดู = seasons', en: 'They are seasons.' },
      }),
      q('p-l-a1-2-7', 'reading', 'When is the rainy season in Thailand?', ['June to October', 'March to May', 'November to February', 'all year']),
      q('p-l-a1-2-8', 'listening', 'What will the weather be like tomorrow?', ['cloudy and windy', 'sunny and hot', 'rainy', 'cold and snowy'], {
        audio: "Tomorrow it will be cloudy and windy, but it won't rain.",
      }),
    ],
  },
  // ───────────── A2 ─────────────
  {
    id: 't-a2-2',
    level: 'A2',
    theme: 'travel',
    title: { th: 'จองทัวร์และซื้อตั๋ว', en: 'Booking Tours & Tickets' },
    canDo: [
      { th: 'สอบถามราคาและรายละเอียดทัวร์ได้', en: 'I can ask about tour prices and details.' },
      { th: 'จองทัวร์หรือตั๋วกิจกรรมได้', en: 'I can book a tour or activity ticket.' },
    ],
    vocab: [
      { word: 'tour', th: 'ทัวร์', example: 'Is there a city tour tomorrow?' },
      { word: 'include', th: 'รวม (ในราคา)', example: 'Does the price include lunch?' },
      { word: 'pick up', th: 'รับ (ไปส่ง)', example: 'We pick you up at your hotel.' },
      { word: 'how long', th: 'นานเท่าไร', example: 'How long is the tour?' },
      { word: 'cash / card', th: 'เงินสด / บัตร', example: 'Can I pay by card?' },
    ],
    grammar: {
      title: 'How much / How long / What time + going to',
      explain: {
        th: 'ถามราคา How much is…? ถามระยะเวลา How long is…? ถามเวลา What time does… start? พูดถึงแผนที่ตัดสินใจแล้วด้วย be going to: We\'re going to visit the temple.',
        en: "Ask prices with How much is…?, length with How long is…?, times with What time does… start? Talk about plans with be going to: We're going to visit the temple.",
      },
      examples: ['How much is the boat tour?', 'What time does it start?', "We're going to see the floating market."],
    },
    reading: {
      title: 'Island tour',
      text: "ISLAND HOPPING TOUR\nVisit 4 islands by speedboat!\nPrice: 1,800 baht (adults), 1,200 baht (children)\nIncludes: hotel pick-up, lunch, snorkelling equipment\nNot included: national park fee (300 baht, cash only)\nTime: 8:00 a.m. – 4:00 p.m.",
    },
    practice: [
      q('p-t-a2-2-1', 'grammar', '___ is the tour? — 1,800 baht.', ['How much', 'How many', 'How long', 'What time'], {
        explain: { th: 'ถามราคา: How much', en: 'Price: How much.' },
      }),
      q('p-t-a2-2-2', 'grammar', '___ is the tour? — About eight hours.', ['How long', 'How much', 'How far', 'When'], {
        explain: { th: 'ถามระยะเวลา: How long', en: 'Length: How long.' },
      }),
      q('p-t-a2-2-3', 'grammar', "Tomorrow we ___ visit the old city.", ["'re going to", "going", "go to", "are go"], {
        explain: { th: 'แผน: be going to + V1', en: 'Plan: be going to + verb.' },
      }),
      q('p-t-a2-2-4', 'vocabulary', 'Does the price ___ lunch?', ['include', 'invite', 'involve', 'increase'], {
        explain: { th: 'include = รวมอยู่ในราคา', en: 'include = be part of the price.' },
      }),
      q('p-t-a2-2-5', 'vocabulary', "Don't worry, we'll pick you ___ at your hotel.", ['up', 'on', 'off', 'in'], {
        explain: { th: 'pick up = รับ', en: 'pick up = collect.' },
      }),
      q('p-t-a2-2-6', 'vocabulary', 'Can I pay by ___?', ['card', 'cards', 'money', 'paying'], {
        explain: { th: 'pay by card = จ่ายด้วยบัตร', en: 'pay by card.' },
      }),
      q('p-t-a2-2-7', 'reading', 'What must you pay in cash?', ['the national park fee', 'lunch', 'the tour', 'snorkelling equipment']),
      q('p-t-a2-2-8', 'listening', 'What time does the tour bus leave?', ['7:45', '8:15', '7:15', '8:45'], {
        audio: 'The tour bus leaves at a quarter to eight, so please be in the lobby at seven thirty.',
      }),
    ],
  },
  {
    id: 'l-a2-2',
    level: 'A2',
    theme: 'life',
    title: { th: 'งานอดิเรกและเวลาว่าง 🎸', en: 'Hobbies & Free Time 🎸' },
    canDo: [
      { th: 'พูดถึงงานอดิเรกและความถี่ที่ทำได้', en: 'I can talk about hobbies and how often I do them.' },
      { th: 'ชวนเพื่อนทำกิจกรรมและตอบรับ/ปฏิเสธได้', en: 'I can invite a friend and accept or refuse.' },
    ],
    vocab: [
      { word: 'hobby', th: 'งานอดิเรก', example: 'My hobby is photography.' },
      { word: 'once a week', th: 'สัปดาห์ละครั้ง', example: 'I play badminton once a week.' },
      { word: 'join', th: 'เข้าร่วม', example: 'Do you want to join us?' },
      { word: "I'd love to!", th: 'ยินดีมาก!', example: "Dinner on Friday? I'd love to!" },
      { word: "I'm afraid I can't.", th: 'เสียดายไปไม่ได้', example: "I'm afraid I can't. I'm busy." },
    ],
    grammar: {
      title: 'love / enjoy / hate + -ing & invitations',
      explain: {
        th: 'love, like, enjoy, hate, don\'t mind ตามด้วย V-ing (I enjoy cooking.) บอกความถี่: always, often, sometimes, never หรือ once/twice a week ชวน: Would you like to + V1…? / Do you want to + V1…?',
        en: "love, like, enjoy, hate, don't mind + -ing. Frequency: always, often, sometimes, never, once/twice a week. Invite with Would you like to + verb…? / Do you want to…?",
      },
      examples: ['I enjoy hiking at weekends.', 'She goes to yoga twice a week.', 'Would you like to come to the concert?'],
    },
    reading: {
      title: 'Message from Joy',
      text: "Hi Beam! A few of us are going to try a pottery class on Saturday afternoon. I know you enjoy making things! It's 600 baht and it takes two hours. Would you like to join us? Let me know by Thursday. — Joy",
    },
    practice: [
      q('p-l-a2-2-1', 'grammar', 'I enjoy ___ new recipes.', ['trying', 'try', 'to trying', 'tries'], {
        explain: { th: 'enjoy + V-ing', en: 'enjoy + -ing.' },
      }),
      q('p-l-a2-2-2', 'grammar', 'Would you like ___ to the cinema?', ['to come', 'coming', 'come', 'came'], {
        explain: { th: 'Would you like + to V', en: 'Would you like + to-infinitive.' },
      }),
      q('p-l-a2-2-3', 'grammar', 'I ___ play tennis — maybe once a year.', ['rarely', 'usually', 'always', 'often'], {
        explain: { th: 'ปีละครั้ง = แทบไม่ rarely', en: 'Once a year = rarely.' },
      }),
      q('p-l-a2-2-4', 'vocabulary', 'Two times a week = ___ a week.', ['twice', 'second', 'double', 'two time'], {
        explain: { th: 'twice = สองครั้ง', en: 'twice = two times.' },
      }),
      q('p-l-a2-2-5', 'vocabulary', 'Accepting an invitation: "___"', ["I'd love to!", "I'm afraid I can't.", "No, thanks.", "Maybe never."], {
        explain: { th: "ตอบรับ: I'd love to!", en: "Accept: I'd love to!" },
      }),
      q('p-l-a2-2-6', 'vocabulary', 'Refusing politely: "___ I\'m working that day."', ["I'm afraid I can't.", "I'd love to!", 'Sure!', 'Great idea!'], {
        explain: { th: "ปฏิเสธสุภาพ: I'm afraid I can't.", en: "Polite refusal: I'm afraid I can't." },
      }),
      q('p-l-a2-2-7', 'reading', 'When should Beam answer Joy?', ['by Thursday', 'on Saturday', 'today', 'after the class']),
      q('p-l-a2-2-8', 'listening', 'How often does the speaker go swimming?', ['three times a week', 'every day', 'once a week', 'twice a month'], {
        audio: 'I go swimming three times a week, usually before work.',
      }),
    ],
  },
  // ───────────── B1 ─────────────
  {
    id: 't-b1-2',
    level: 'B1',
    theme: 'travel',
    title: { th: 'ที่พักและการร้องเรียน', en: 'Accommodation & Complaints' },
    canDo: [
      { th: 'เปรียบเทียบและเลือกที่พักจากรีวิวได้', en: 'I can compare places to stay using reviews.' },
      { th: 'แจ้งปัญหาที่โรงแรมและขอให้แก้ไขได้', en: 'I can report a problem at a hotel and ask for it to be fixed.' },
    ],
    vocab: [
      { word: 'guesthouse', th: 'เกสต์เฮาส์', example: 'We stayed in a small guesthouse.' },
      { word: 'air conditioning', th: 'เครื่องปรับอากาศ', example: "The air conditioning isn't working." },
      { word: 'noisy', th: 'เสียงดัง', example: 'The room is very noisy.' },
      { word: 'change rooms', th: 'เปลี่ยนห้อง', example: 'Could we change rooms, please?' },
      { word: 'refund', th: 'คืนเงิน', example: 'Can I get a refund?' },
    ],
    grammar: {
      title: "Polite problems: there's a problem with… / doesn't work",
      explain: {
        th: "แจ้งปัญหาสุภาพ: I'm sorry to bother you, but… / There's a problem with… / The … doesn't work / isn't working. ขอให้ช่วย: Could you send someone to…? / Would it be possible to…?",
        en: "Report problems politely: I'm sorry to bother you, but… / There's a problem with… / The … doesn't work. Ask for help: Could you send someone to…? / Would it be possible to…?",
      },
      examples: [
        "I'm sorry to bother you, but the shower isn't working.",
        'Could you send someone to look at it?',
        'Would it be possible to have a quieter room?',
      ],
    },
    reading: {
      title: 'Two reviews',
      text: "★★★★★ 'Sunrise Guesthouse is small but spotless. The owner gave us great tips about local restaurants. A bit far from the beach, but worth it.'\n★★☆☆☆ 'The location of Ocean Tower Hotel is perfect, but our room was next to the lift and very noisy. When we asked to change rooms, the staff said the hotel was full.'",
    },
    practice: [
      q('p-t-b1-2-1', 'grammar', "I'm sorry to ___ you, but the TV doesn't work.", ['bother', 'brother', 'bore', 'borrow'], {
        explain: { th: "I'm sorry to bother you = ขอโทษที่รบกวน", en: 'Polite opener: sorry to bother you.' },
      }),
      q('p-t-b1-2-2', 'grammar', "There's a problem ___ the air conditioning.", ['with', 'of', 'at', 'for'], {
        explain: { th: 'a problem with…', en: 'a problem with…' },
      }),
      q('p-t-b1-2-3', 'grammar', '___ it be possible to check out late?', ['Would', 'Will', 'Does', 'Is'], {
        explain: { th: 'Would it be possible…?', en: 'Would it be possible…?' },
      }),
      q('p-t-b1-2-4', 'vocabulary', 'The room next to the lift was very ___.', ['noisy', 'nosy', 'noble', 'naughty'], {
        explain: { th: 'noisy = เสียงดัง', en: 'noisy = loud.' },
      }),
      q('p-t-b1-2-5', 'vocabulary', 'The tour was cancelled, so they gave us a full ___.', ['refund', 'review', 'receipt', 'reservation'], {
        explain: { th: 'refund = คืนเงิน', en: 'refund = money back.' },
      }),
      q('p-t-b1-2-6', 'vocabulary', 'The bathroom was ___ — perfectly clean.', ['spotless', 'spotty', 'useless', 'careless'], {
        explain: { th: 'spotless = สะอาดเอี่ยม', en: 'spotless = perfectly clean.' },
      }),
      q('p-t-b1-2-7', 'reading', 'What was the problem at Ocean Tower Hotel?', [
        'The room was noisy and they could not change rooms.',
        'It was far from the beach.',
        'The owner was unfriendly.',
        'It was dirty.',
      ]),
      q('p-t-b1-2-8', 'listening', 'What will the receptionist do?', [
        'send a technician in ten minutes',
        'give a refund',
        'move the guest to another hotel',
        'nothing until tomorrow',
      ], { audio: "I'm so sorry about that. I'll send a technician to your room in about ten minutes." }),
    ],
  },
  {
    id: 'l-b1-2',
    level: 'B1',
    theme: 'life',
    title: { th: 'เพื่อนบ้านและชุมชน 🏘️', en: 'Neighbours & Community 🏘️' },
    canDo: [
      { th: 'อธิบายกฎของคอนโด/หมู่บ้านได้', en: 'I can explain building or community rules.' },
      { th: 'ขอร้องหรือแจ้งปัญหากับเพื่อนบ้านอย่างสุภาพได้', en: 'I can make polite requests to neighbours.' },
    ],
    vocab: [
      { word: 'neighbour', th: 'เพื่อนบ้าน', example: 'Our neighbours are very friendly.' },
      { word: 'rubbish', th: 'ขยะ', example: 'Put the rubbish in the green bin.' },
      { word: 'allowed', th: 'อนุญาต', example: 'Pets are not allowed.' },
      { word: 'parcel', th: 'พัสดุ', example: 'Can you collect my parcel?' },
      { word: 'complain', th: 'ร้องเรียน บ่น', example: 'Someone complained about the noise.' },
    ],
    grammar: {
      title: "have to / don't have to / must / mustn't",
      explain: {
        th: "have to / must = ต้อง, don't have to = ไม่จำเป็นต้อง (ทำก็ได้ไม่ทำก็ได้), mustn't = ห้าม (ระวัง: don't have to ≠ mustn't) be (not) allowed to = (ไม่) ได้รับอนุญาตให้",
        en: "have to / must = necessary; don't have to = not necessary; mustn't = forbidden (don't have to ≠ mustn't). be (not) allowed to = (not) permitted.",
      },
      examples: [
        'You have to separate plastic and glass.',
        "You don't have to pay for parking on Sundays.",
        "You mustn't smoke on the balcony.",
      ],
    },
    reading: {
      title: 'Building notice',
      text: 'NOTICE TO ALL RESIDENTS\n• Rubbish must be put in the bins on the ground floor, not in the corridors.\n• Residents are not allowed to use the pool after 9 p.m.\n• Parcels can be collected from the security office until 8 p.m.\n• Please keep noise to a minimum after 10 p.m. — several neighbours have complained.',
    },
    practice: [
      q('p-l-b1-2-1', 'grammar', "It's free, so you ___ pay.", ["don't have to", "mustn't", 'have to', 'must'], {
        explain: { th: 'ฟรี = ไม่จำเป็นต้องจ่าย', en: 'Free = not necessary.' },
      }),
      q('p-l-b1-2-2', 'grammar', 'You ___ park in front of the gate. It blocks the exit!', ["mustn't", "don't have to", "needn't", 'can'], {
        explain: { th: 'ห้าม: mustn\'t', en: "Forbidden: mustn't." },
      }),
      q('p-l-b1-2-3', 'grammar', 'Are we allowed ___ pets here?', ['to keep', 'keep', 'keeping', 'kept'], {
        explain: { th: 'be allowed to + V1', en: 'be allowed to + verb.' },
      }),
      q('p-l-b1-2-4', 'vocabulary', 'Could you collect my ___ from the security office?', ['parcel', 'parcels office', 'post box', 'neighbour'], {
        explain: { th: 'parcel = พัสดุ', en: 'parcel = package.' },
      }),
      q('p-l-b1-2-5', 'vocabulary', 'Someone ___ about the loud music last night.', ['complained', 'complimented', 'completed', 'compared'], {
        explain: { th: 'complain = ร้องเรียน', en: 'complain = say you are unhappy.' },
      }),
      q('p-l-b1-2-6', 'vocabulary', 'Put the ___ in the bin, please.', ['rubbish', 'rubber', 'rabbit', 'rubble'], {
        explain: { th: 'rubbish = ขยะ', en: 'rubbish = waste.' },
      }),
      q('p-l-b1-2-7', 'reading', 'Until what time can residents collect parcels?', ['8 p.m.', '9 p.m.', '10 p.m.', 'midnight']),
      q('p-l-b1-2-8', 'listening', 'What does the neighbour ask?', [
        'to turn the music down a little',
        'to borrow some sugar',
        'to look after a cat',
        'to move a car',
      ], { audio: "Hi, sorry to bother you. My baby is trying to sleep. Would you mind turning the music down a little?" }),
    ],
  },
  // ───────────── B2 ─────────────
  {
    id: 't-b2-2',
    level: 'B2',
    theme: 'travel',
    title: { th: 'เหตุฉุกเฉินและประกันการเดินทาง', en: 'Emergencies & Travel Insurance' },
    canDo: [
      { th: 'แจ้งเหตุฉุกเฉินและอธิบายสิ่งที่เกิดขึ้นได้', en: 'I can report an emergency and explain what happened.' },
      { th: 'เข้าใจเงื่อนไขประกันการเดินทาง', en: 'I can understand travel insurance conditions.' },
    ],
    vocab: [
      { word: 'policy', th: 'กรมธรรม์', example: 'Read your insurance policy carefully.' },
      { word: 'claim', th: 'เคลม เรียกร้องค่าสินไหม', example: 'You can claim for lost luggage.' },
      { word: 'cover', th: 'คุ้มครอง', example: 'Does it cover adventure sports?' },
      { word: 'police report', th: 'ใบแจ้งความ', example: 'You need a police report.' },
      { word: 'embassy', th: 'สถานทูต', example: 'Contact your embassy if you lose your passport.' },
    ],
    grammar: {
      title: 'Narrative tenses (past perfect & past continuous)',
      explain: {
        th: 'เล่าเหตุการณ์: past simple สำหรับเหตุการณ์หลัก, past continuous สำหรับสิ่งที่กำลังเกิด, past perfect (had + V3) สำหรับสิ่งที่เกิดก่อนหน้านั้นอีก: When I got back, someone had broken into the car.',
        en: 'Narrate with the past simple for main events, the past continuous for background, and the past perfect (had + past participle) for earlier events: When I got back, someone had broken into the car.',
      },
      examples: [
        'I was walking to the station when a man grabbed my bag.',
        'By the time we reached the hospital, the pain had stopped.',
        "I realised I'd left my passport in the taxi.",
      ],
    },
    reading: {
      title: 'Policy summary',
      text: 'Your policy covers emergency medical treatment up to 2 million baht, trip cancellation due to illness, and lost or stolen belongings up to 30,000 baht. To make a claim for theft, you must obtain a police report within 24 hours. Injuries caused by extreme sports, such as skydiving, are not covered unless you purchase the Adventure add-on.',
    },
    practice: [
      q('p-t-b2-2-1', 'grammar', 'When I got to the airport, the plane ___.', ['had already left', 'already left', 'has left', 'was leaving already'], {
        explain: { th: 'เกิดก่อนอีกเหตุการณ์: past perfect', en: 'Earlier event: past perfect.' },
      }),
      q('p-t-b2-2-2', 'grammar', 'I ___ along the beach when I cut my foot.', ['was walking', 'walked', 'had walked', 'am walking'], {
        explain: { th: 'เหตุการณ์เบื้องหลัง: past continuous', en: 'Background: past continuous.' },
      }),
      q('p-t-b2-2-3', 'grammar', "I realised I ___ my phone at the restaurant.", ['had left', 'have left', 'was leaving', 'leave'], {
        explain: { th: 'ลืมไว้ก่อนที่จะรู้ตัว: had left', en: 'Left before realising: had left.' },
      }),
      q('p-t-b2-2-4', 'vocabulary', 'Does the insurance ___ scuba diving?', ['cover', 'recover', 'discover', 'uncover'], {
        explain: { th: 'cover = คุ้มครอง', en: 'cover = include in protection.' },
      }),
      q('p-t-b2-2-5', 'vocabulary', 'To ___ for stolen items, you need receipts.', ['claim', 'complain', 'clean', 'charge'], {
        explain: { th: 'claim = เคลม', en: 'claim = request payment.' },
      }),
      q('p-t-b2-2-6', 'vocabulary', 'If you lose your passport abroad, contact your ___.', ['embassy', 'ambassador', 'agency', 'airline'], {
        explain: { th: 'embassy = สถานทูต', en: 'embassy = your country\'s office abroad.' },
      }),
      q('p-t-b2-2-7', 'reading', 'What do you need within 24 hours to claim for theft?', [
        'a police report',
        'a medical certificate',
        'the Adventure add-on',
        'a receipt from the hotel',
      ]),
      q('p-t-b2-2-8', 'listening', 'What had happened before the caller noticed?', [
        'Someone had taken her wallet.',
        'She had missed the bus.',
        'She had lost her hotel key.',
        'Her flight had been cancelled.',
      ], { audio: "I was on the crowded train, and when I got off I noticed that someone had taken my wallet from my bag." }),
    ],
  },
  {
    id: 'l-b2-2',
    level: 'B2',
    theme: 'life',
    title: { th: 'การเงินส่วนบุคคล 💰', en: 'Personal Finance 💰' },
    canDo: [
      { th: 'พูดเรื่องการออมและการใช้จ่ายได้', en: 'I can discuss saving and spending.' },
      { th: 'พูดถึงสิ่งที่ควร/ไม่จำเป็นต้องทำในอดีตได้', en: "I can talk about things I should or needn't have done." },
    ],
    vocab: [
      { word: 'budget', th: 'งบประมาณ', example: 'I make a monthly budget.' },
      { word: 'save up for', th: 'เก็บเงินเพื่อ', example: "I'm saving up for a new laptop." },
      { word: 'impulse buy', th: 'ซื้อตามอารมณ์', example: 'That jacket was an impulse buy.' },
      { word: 'interest rate', th: 'อัตราดอกเบี้ย', example: 'The interest rate is 2% a year.' },
      { word: 'make ends meet', th: 'ใช้เงินให้พอเดือน', example: 'Many families struggle to make ends meet.' },
    ],
    grammar: {
      title: "should have / needn't have / didn't need to",
      explain: {
        th: "should have + V3 = ควรทำแต่ไม่ได้ทำ (เสียดาย) needn't have + V3 = ทำไปแล้วแต่จริง ๆ ไม่จำเป็น didn't need to + V1 = ไม่จำเป็นจึงไม่ได้ทำ",
        en: "should have + past participle = it was a good idea but you didn't; needn't have + past participle = you did it but it wasn't necessary; didn't need to + verb = it wasn't necessary (so you probably didn't).",
      },
      examples: [
        'I should have compared prices before buying.',
        "I needn't have bought travel insurance — my credit card already covered it.",
        "We didn't need to pay for parking, so we saved 200 baht.",
      ],
    },
    reading: {
      title: 'The 50/30/20 rule',
      text: 'A popular budgeting method is the 50/30/20 rule: spend 50% of your income on needs such as rent and food, 30% on wants such as eating out, and save the remaining 20%. Critics argue it is unrealistic for people on low incomes, who may struggle to make ends meet. Still, many find it a useful starting point for avoiding impulse buys.',
    },
    practice: [
      q('p-l-b2-2-1', 'grammar', 'I ___ saved more money when I was younger.', ['should have', 'should', 'must have', 'needn\'t have'], {
        explain: { th: 'เสียดายอดีต: should have + V3', en: 'Past regret: should have + past participle.' },
      }),
      q('p-l-b2-2-2', 'grammar', "I ___ have brought cash — they accepted cards.", ["needn't", 'should', 'must', "couldn't"], {
        explain: { th: "ทำไปแล้วแต่ไม่จำเป็น: needn't have", en: "Did it unnecessarily: needn't have." },
      }),
      q('p-l-b2-2-3', 'grammar', "It was free, so we didn't need ___ a ticket.", ['to buy', 'buy', 'buying', 'bought'], {
        explain: { th: "didn't need to + V1", en: "didn't need to + verb." },
      }),
      q('p-l-b2-2-4', 'vocabulary', "I'm saving ___ for a holiday in Japan.", ['up', 'down', 'off', 'out'], {
        explain: { th: 'save up for = เก็บเงินเพื่อ', en: 'save up for.' },
      }),
      q('p-l-b2-2-5', 'vocabulary', 'With prices rising, it is hard to make ends ___.', ['meet', 'meat', 'match', 'mean'], {
        explain: { th: 'make ends meet = ใช้เงินให้พอ', en: 'Idiom: make ends meet.' },
      }),
      q('p-l-b2-2-6', 'vocabulary', 'I saw it on sale and bought it without thinking — an impulse ___.', ['buy', 'sale', 'spend', 'pay'], {
        explain: { th: 'impulse buy = ซื้อตามอารมณ์', en: 'impulse buy.' },
      }),
      q('p-l-b2-2-7', 'reading', 'According to critics, who may find the rule unrealistic?', [
        'people on low incomes',
        'people who eat out',
        'students',
        'people who save 20%',
      ]),
      q('p-l-b2-2-8', 'listening', 'What does the speaker regret?', [
        'not checking the interest rate',
        'buying a house',
        'saving too much',
        'paying in cash',
      ], { audio: "I should have checked the interest rate before signing — I'm paying far more than I expected." }),
    ],
  },
  // ───────────── C1 ─────────────
  {
    id: 't-c1-2',
    level: 'C1',
    theme: 'travel',
    title: { th: 'ทำงานไปเที่ยวไป (Digital Nomad)', en: 'Working Remotely Abroad' },
    canDo: [
      { th: 'อภิปรายข้อดีข้อเสียของการทำงานทางไกลในต่างประเทศ', en: 'I can discuss the pros and cons of working remotely abroad.' },
      { th: 'ใช้คำนามประสมและคำเชื่อมระดับสูงได้', en: 'I can use advanced linking and compound nouns.' },
    ],
    vocab: [
      { word: 'digital nomad', th: 'คนทำงานออนไลน์ไปพร้อมเดินทาง', example: 'Chiang Mai is popular with digital nomads.' },
      { word: 'co-working space', th: 'พื้นที่ทำงานร่วม', example: 'I rent a desk in a co-working space.' },
      { word: 'visa requirements', th: 'เงื่อนไขวีซ่า', example: 'Check the visa requirements before you go.' },
      { word: 'time difference', th: 'ความต่างของเวลา', example: 'The time difference makes meetings difficult.' },
      { word: 'cost of living', th: 'ค่าครองชีพ', example: 'The cost of living is lower here.' },
    ],
    grammar: {
      title: 'Linkers of addition & result: furthermore, consequently, as a result, thereby',
      explain: {
        th: 'เพิ่มข้อมูล: furthermore, moreover, in addition, not to mention ผลลัพธ์: consequently, as a result, thus, thereby + V-ing (= และด้วยเหตุนั้นจึง…) ใช้ในงานเขียนทางการและการนำเสนอ',
        en: 'Addition: furthermore, moreover, in addition, not to mention. Result: consequently, as a result, thus, thereby + -ing (= and in this way). Typical of formal writing and presentations.',
      },
      examples: [
        'The cost of living is low; furthermore, the internet is fast.',
        'Several countries now offer nomad visas, thereby attracting skilled workers.',
        'Meetings were scheduled at midnight. Consequently, productivity fell.',
      ],
    },
    reading: {
      title: 'The nomad dilemma',
      text: "Remote work has enabled thousands to swap the office for a beach café. Countries such as Thailand and Portugal have introduced long-stay visas, thereby turning remote workers into a source of revenue. Nevertheless, the lifestyle has its drawbacks: time differences can mean late-night meetings, and local residents in popular areas complain that rents have risen sharply as a result.",
    },
    practice: [
      q('p-t-c1-2-1', 'grammar', 'The visa allows a one-year stay, ___ attracting long-term visitors.', ['thereby', 'whereas', 'despite', 'although'], {
        explain: { th: 'thereby + V-ing = ด้วยเหตุนั้นจึง', en: 'thereby + -ing = and in this way.' },
      }),
      q('p-t-c1-2-2', 'grammar', 'The internet was unreliable. ___, I missed two client calls.', ['Consequently', 'Furthermore', 'Nevertheless', 'Meanwhile'], {
        explain: { th: 'ผลลัพธ์: Consequently', en: 'Result: Consequently.' },
      }),
      q('p-t-c1-2-3', 'grammar', "The area is safe and affordable, not to ___ the amazing food.", ['mention', 'mentioning', 'mentioned', 'say'], {
        explain: { th: 'not to mention = ไม่ต้องพูดถึง (ยังมีอีก)', en: 'Fixed phrase: not to mention.' },
      }),
      q('p-t-c1-2-4', 'vocabulary', 'The ___ difference means my team is asleep when I start work.', ['time', 'timing', 'timely', 'hour'], {
        explain: { th: 'time difference', en: 'Collocation: time difference.' },
      }),
      q('p-t-c1-2-5', 'vocabulary', 'The cost of ___ in Bali is much lower than in Sydney.', ['living', 'life', 'live', 'lives'], {
        explain: { th: 'cost of living = ค่าครองชีพ', en: 'Collocation: cost of living.' },
      }),
      q('p-t-c1-2-6', 'vocabulary', 'Before moving, check the visa ___ carefully.', ['requirements', 'requests', 'recommendations', 'reservations'], {
        explain: { th: 'visa requirements', en: 'Collocation: visa requirements.' },
      }),
      q('p-t-c1-2-7', 'reading', 'What do local residents complain about?', [
        'Rents have risen sharply.',
        'The internet is slow.',
        'Visas are too expensive.',
        'There are no cafés.',
      ]),
      q('p-t-c1-2-8', 'listening', "What is the speaker's main reservation?", [
        'Feeling isolated from colleagues',
        'The cost of flights',
        'Language barriers',
        'The weather',
      ], { audio: "The freedom's wonderful, admittedly, but what I hadn't anticipated was how cut off I'd feel from my team." }),
    ],
  },
  {
    id: 'l-c1-2',
    level: 'C1',
    theme: 'life',
    title: { th: 'ความสัมพันธ์และชีวิตทางสังคม 🤝', en: 'Relationships & Social Life 🤝' },
    canDo: [
      { th: 'พูดถึงความสัมพันธ์ด้วย phrasal verbs ที่เป็นธรรมชาติ', en: 'I can talk about relationships using natural phrasal verbs.' },
      { th: 'ใช้สำนวนเกี่ยวกับมิตรภาพและความขัดแย้งได้', en: 'I can use idioms about friendship and conflict.' },
    ],
    vocab: [
      { word: 'get on (well) with', th: 'เข้ากันได้ดี', example: 'I get on well with my in-laws.' },
      { word: 'fall out (with)', th: 'ทะเลาะ แตกคอ', example: 'They fell out over money.' },
      { word: 'make up', th: 'คืนดี', example: 'They argued but made up the next day.' },
      { word: 'drift apart', th: 'ห่างเหินกันไป', example: 'We drifted apart after university.' },
      { word: 'see eye to eye', th: 'เห็นตรงกัน', example: "We don't always see eye to eye." },
    ],
    grammar: {
      title: 'Three-part phrasal verbs & idioms',
      explain: {
        th: 'phrasal verb แบบ 3 ส่วนแยกกันไม่ได้ กรรมอยู่ท้าย: put up with (อดทนต่อ), look up to (นับถือ), catch up with (อัปเดตเรื่องราว), come up with (คิดออก) ส่วน idioms ใช้ทั้งก้อน ห้ามเปลี่ยนคำ',
        en: 'Three-part phrasal verbs cannot be split; the object goes at the end: put up with, look up to, catch up with, come up with. Idioms are fixed — do not change their words.',
      },
      examples: [
        "I can't put up with his constant complaining.",
        'Let\'s catch up over coffee next week.',
        'She has always looked up to her older sister.',
      ],
    },
    reading: {
      title: 'Friendships in adulthood',
      text: "Research suggests that most adults have fewer close friends at forty than at twenty-five. Busy careers and family responsibilities mean people drift apart rather than fall out. The good news? Friendships can be revived surprisingly easily: a short message suggesting you catch up is usually welcomed, even after years of silence.",
    },
    practice: [
      q('p-l-c1-2-1', 'grammar', "I don't know how you put ___ with that noise every night.", ['up', 'on', 'off', 'in'], {
        explain: { th: 'put up with = อดทนต่อ', en: 'put up with = tolerate.' },
      }),
      q('p-l-c1-2-2', 'grammar', 'We need to come up ___ a better plan.', ['with', 'to', 'for', 'on'], {
        explain: { th: 'come up with = คิดออก', en: 'come up with = think of.' },
      }),
      q('p-l-c1-2-3', 'grammar', 'Which sentence is correct?', [
        'I look up to my grandfather.',
        'I look my grandfather up to.',
        'I look up my grandfather to.',
        'I look to up my grandfather.',
      ], { explain: { th: 'phrasal verb 3 ส่วนแยกไม่ได้', en: 'Three-part phrasal verbs are not separated.' } }),
      q('p-l-c1-2-4', 'vocabulary', 'They had a big argument but ___ the next day.', ['made up', 'made out', 'made off', 'made for'], {
        explain: { th: 'make up = คืนดี', en: 'make up = become friends again.' },
      }),
      q('p-l-c1-2-5', 'vocabulary', 'We never argued; we just ___ after we moved to different cities.', ['drifted apart', 'fell out', 'broke in', 'got on'], {
        explain: { th: 'drift apart = ห่างเหินกันไปเอง', en: 'drift apart = slowly become less close.' },
      }),
      q('p-l-c1-2-6', 'vocabulary', "My brother and I don't see eye to ___ on politics.", ['eye', 'face', 'mind', 'head'], {
        explain: { th: 'see eye to eye (สำนวน)', en: 'Idiom: see eye to eye.' },
      }),
      q('p-l-c1-2-7', 'reading', 'Why do adults usually lose friends, according to the text?', [
        'They drift apart because they are busy.',
        'They fall out over money.',
        'They move abroad.',
        'They prefer online friends.',
      ]),
      q('p-l-c1-2-8', 'listening', 'What is the speaker going to do?', [
        'contact an old friend',
        'move house',
        'end a friendship',
        'join a club',
      ], { audio: "I've been meaning to get back in touch with Dao for ages. I'm going to message her tonight and suggest we catch up." }),
    ],
  },
  // ───────────── C2 ─────────────
  {
    id: 't-c2-2',
    level: 'C2',
    theme: 'travel',
    title: { th: 'เขียนรีวิวการเดินทางอย่างมืออาชีพ ✍️', en: 'Writing Persuasive Travel Reviews ✍️' },
    canDo: [
      { th: 'เขียนรีวิวที่สมดุล น่าเชื่อถือ และโน้มน้าวได้', en: 'I can write balanced, credible and persuasive reviews.' },
      { th: 'ใช้คำคุณศัพท์และคำวิเศษณ์ที่แม่นยำแทนคำกว้าง ๆ', en: 'I can replace vague words with precise adjectives and adverbs.' },
    ],
    vocab: [
      { word: 'understated', th: 'เรียบหรู ไม่หวือหวา', example: 'The hotel has an understated elegance.' },
      { word: 'overrated', th: 'ถูกยกย่องเกินจริง', example: 'The famous viewpoint is somewhat overrated.' },
      { word: 'unassuming', th: 'ถ่อมตน ไม่โอ้อวด', example: 'an unassuming little restaurant' },
      { word: 'tranquil', th: 'สงบเงียบ', example: 'a tranquil garden' },
      { word: 'exorbitant', th: 'แพงเกินควร', example: 'The minibar prices were exorbitant.' },
    ],
    grammar: {
      title: 'Precision: intensifiers & softeners',
      explain: {
        th: 'งานเขียนระดับสูงเลี่ยงคำกว้าง ๆ (very good, nice) และเลือกคำที่แม่นยำ ใช้คำขยายที่เข้ากัน (collocation) เช่น utterly exhausted, highly recommended, somewhat disappointing, by no means cheap และใช้คำลดความรุนแรงเพื่อความสมดุล',
        en: 'Advanced writing avoids vague words (very good, nice) in favour of precise ones, and uses intensifiers and softeners that collocate: utterly exhausted, highly recommended, somewhat disappointing, by no means cheap.',
      },
      examples: [
        'The service was impeccable, though the food was somewhat underwhelming.',
        'Highly recommended for anyone seeking solitude.',
        'It is by no means cheap, but it is worth every baht.',
      ],
    },
    reading: {
      title: 'A review',
      text: "Tucked away at the end of an unassuming lane, Baan Suan is a tranquil retreat that seems a world away from the city's chaos. The rooms are understated rather than luxurious, and the restaurant, while by no means cheap, is far from exorbitant. My only reservation is the patchy Wi-Fi — a minor quibble for most, though perhaps a deal-breaker for remote workers.",
    },
    practice: [
      q('p-t-c2-2-1', 'vocabulary', 'Which collocation is natural?', ['highly recommended', 'strongly recommended highly', 'deeply recommended', 'heavily recommended'], {
        explain: { th: 'highly recommended เป็นคู่คำที่ใช้จริง', en: 'Natural collocation: highly recommended.' },
      }),
      q('p-t-c2-2-2', 'vocabulary', 'After the 14-hour flight, we were ___ exhausted.', ['utterly', 'highly', 'deeply', 'largely'], {
        explain: { th: 'utterly exhausted', en: 'Collocation: utterly exhausted.' },
      }),
      q('p-t-c2-2-3', 'vocabulary', 'The view everyone raves about was, frankly, ___.', ['overrated', 'overdue', 'overjoyed', 'overcome'], {
        explain: { th: 'overrated = ถูกยกย่องเกินจริง', en: 'overrated = not as good as people say.' },
      }),
      q('p-t-c2-2-4', 'vocabulary', '1,200 baht for a small bottle of water is ___.', ['exorbitant', 'exuberant', 'exemplary', 'extraneous'], {
        explain: { th: 'exorbitant = แพงเกินควร', en: 'exorbitant = far too expensive.' },
      }),
      q('p-t-c2-2-5', 'grammar', 'The hotel is ___ means cheap, but it offers excellent value.', ['by no', 'by any', 'no by', 'not by any'], {
        explain: { th: 'by no means = ไม่เลย', en: 'by no means = not at all.' },
      }),
      q('p-t-c2-2-6', 'vocabulary', 'Which word best replaces "very quiet and peaceful"?', ['tranquil', 'tedious', 'turbulent', 'tenuous'], {
        explain: { th: 'tranquil = สงบ', en: 'tranquil = calm and peaceful.' },
      }),
      q('p-t-c2-2-7', 'reading', "What is the reviewer's only reservation?", [
        'unreliable Wi-Fi',
        'expensive food',
        'small rooms',
        'the noisy city',
      ]),
      q('p-t-c2-2-8', 'listening', "What is the speaker's overall view of the resort?", [
        'Good, though not as exceptional as its reputation suggests',
        'Absolutely perfect',
        'A complete waste of money',
        'Too far from the beach',
      ], { audio: "It was perfectly pleasant, but given all the hype, I'd expected something rather more remarkable." }),
    ],
  },
  {
    id: 'l-c2-2',
    level: 'C2',
    theme: 'life',
    title: { th: 'สิ่งแวดล้อมกับการใช้ชีวิต 🌱', en: 'Environment & Lifestyle Choices 🌱' },
    canDo: [
      { th: 'โต้แย้งเรื่องสิ่งแวดล้อมด้วยภาษาที่แม่นยำและระมัดระวัง', en: 'I can argue environmental issues with precise, measured language.' },
      { th: 'ใช้ quantifiers ขั้นสูงได้ถูกต้อง', en: 'I can use advanced quantifiers accurately.' },
    ],
    vocab: [
      { word: 'carbon-neutral', th: 'คาร์บอนเป็นกลาง', example: 'The company aims to be carbon-neutral by 2030.' },
      { word: 'greenwashing', th: 'การฟอกเขียว (อ้างว่ารักษ์โลกเกินจริง)', example: 'Critics accused the brand of greenwashing.' },
      { word: 'single-use', th: 'ใช้ครั้งเดียวทิ้ง', example: 'single-use plastics' },
      { word: 'offset', th: 'ชดเชย', example: 'They offset their flights by planting trees.' },
      { word: 'negligible', th: 'น้อยมากจนไม่มีนัยสำคัญ', example: 'The impact was negligible.' },
    ],
    grammar: {
      title: 'Advanced quantifiers',
      explain: {
        th: 'a great deal of / a good deal of + นามนับไม่ได้ (มาก), a fair number of + นามนับได้ (พอสมควร), scarcely any / hardly any (แทบไม่มี), the vast majority of (ส่วนใหญ่มาก), a fraction of (ส่วนน้อยนิด), all but (เกือบทั้งหมด)',
        en: 'a great/good deal of + uncountable (a lot), a fair number of + countable (quite many), scarcely/hardly any (almost none), the vast majority of, a fraction of, all but (almost completely).',
      },
      examples: [
        'A great deal of plastic ends up in the ocean.',
        'Scarcely any of the pledges have been met.',
        'The species has all but disappeared from the region.',
      ],
    },
    reading: {
      title: 'Beyond the paper straw',
      text: "Banning plastic straws generated a great deal of publicity, yet straws account for a negligible fraction of ocean plastic. Critics argue that such gestures risk becoming a form of greenwashing, allowing companies to appear virtuous while scarcely any progress is made on the far larger problem of packaging. The vast majority of experts agree that systemic change, rather than symbolic bans, is what is required.",
    },
    practice: [
      q('p-l-c2-2-1', 'grammar', 'There has been a great ___ of debate about the policy.', ['deal', 'many', 'number', 'lot'], {
        explain: { th: 'a great deal of + นามนับไม่ได้', en: 'a great deal of + uncountable.' },
      }),
      q('p-l-c2-2-2', 'grammar', '___ any of the targets were reached — it was a failure.', ['Scarcely', 'Scarce', 'Barely all', 'Hardly none'], {
        explain: { th: 'scarcely any = แทบไม่มีเลย', en: 'scarcely any = almost none.' },
      }),
      q('p-l-c2-2-3', 'grammar', 'The forest has ___ but vanished — only 2% remains.', ['all', 'none', 'any', 'every'], {
        explain: { th: 'all but = เกือบทั้งหมด', en: 'all but = almost completely.' },
      }),
      q('p-l-c2-2-4', 'vocabulary', 'Claiming to be eco-friendly without real action is ___.', ['greenwashing', 'whitewashing', 'brainwashing', 'greenhousing'], {
        explain: { th: 'greenwashing = ฟอกเขียว', en: 'greenwashing.' },
      }),
      q('p-l-c2-2-5', 'vocabulary', 'The effect was so small as to be ___.', ['negligible', 'negligent', 'negotiable', 'neglected'], {
        explain: { th: 'negligible = น้อยมาก (negligent = ประมาท)', en: 'negligible = tiny; negligent = careless.' },
      }),
      q('p-l-c2-2-6', 'vocabulary', 'Many airlines let passengers ___ their emissions for a small fee.', ['offset', 'upset', 'outset', 'onset'], {
        explain: { th: 'offset = ชดเชย', en: 'offset = compensate for.' },
      }),
      q('p-l-c2-2-7', 'reading', 'What do most experts believe is required?', [
        'systemic change rather than symbolic bans',
        'more bans on straws',
        'paper packaging',
        'more publicity',
      ]),
      q('p-l-c2-2-8', 'listening', "What is the speaker's position?", [
        'Individual actions matter, but cannot replace regulation.',
        'Individual actions are pointless.',
        'Regulation is unnecessary.',
        'The problem is exaggerated.',
      ], { audio: "I'd never dismiss personal choices as meaningless, but let's not pretend they're a substitute for proper regulation." }),
    ],
  },
]
