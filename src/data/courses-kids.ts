import { q } from '../lib/question'
import type { Unit } from '../types'

/**
 * "วัยเด็ก" category: units children study themselves (A1–A2, short and
 * picture-rich) and units for parents who want to use English with their kids.
 */
export const KIDS_UNITS: Unit[] = [
  // ───────────── For children ─────────────
  {
    id: 'k-a1-1',
    level: 'A1',
    theme: 'kids',
    audience: 'child',
    title: { th: 'สีและรูปทรง 🎨', en: 'Colours & Shapes 🎨' },
    canDo: [
      { th: 'บอกสีของสิ่งของรอบตัวได้', en: 'I can say the colours of things around me.' },
      { th: 'บอกชื่อรูปทรงง่าย ๆ ได้', en: 'I can name simple shapes.' },
    ],
    vocab: [
      { word: 'red 🔴', th: 'สีแดง', example: 'The apple is red.' },
      { word: 'blue 🔵', th: 'สีน้ำเงิน / สีฟ้า', example: 'The sky is blue.' },
      { word: 'yellow 🟡', th: 'สีเหลือง', example: 'The banana is yellow.' },
      { word: 'circle ⚪', th: 'วงกลม', example: 'The sun is a circle.' },
      { word: 'square 🟥', th: 'สี่เหลี่ยมจัตุรัส', example: 'The window is a square.' },
    ],
    grammar: {
      title: 'It is + colour / This is a + shape',
      explain: {
        th: 'บอกสีด้วย It is + สี (It is red.) บอกว่าสิ่งนี้คืออะไรด้วย This is a + คำนาม (This is a circle.) ถามสีด้วย What colour is it?',
        en: 'Say a colour with It is + colour. Say what something is with This is a + noun. Ask: What colour is it?',
      },
      examples: ['What colour is it? — It is green.', 'This is a triangle. 🔺', 'My bag is purple.'],
    },
    reading: {
      title: "Mia's picture",
      text: 'Look at my picture! The sun is yellow. The sky is blue. My house is a big square. The door is red. The tree is green. I like my picture!',
    },
    practice: [
      q('p-k-a1-1-1', 'vocabulary', '🍌 A banana is ___.', ['yellow', 'blue', 'black', 'pink'], {
        explain: { th: 'กล้วยสีเหลือง = yellow', en: 'Bananas are yellow.' },
      }),
      q('p-k-a1-1-2', 'vocabulary', '🐸 A frog is ___.', ['green', 'red', 'white', 'orange'], {
        explain: { th: 'กบสีเขียว = green', en: 'Frogs are green.' },
      }),
      q('p-k-a1-1-3', 'vocabulary', '⚪ This shape is a ___.', ['circle', 'square', 'triangle', 'star'], {
        explain: { th: 'วงกลม = circle', en: 'A round shape is a circle.' },
      }),
      q('p-k-a1-1-4', 'grammar', 'What colour ___ it?', ['is', 'are', 'am', 'be'], {
        explain: { th: 'it ใช้ is', en: 'it takes is.' },
      }),
      q('p-k-a1-1-5', 'grammar', 'This is ___ star. ⭐', ['a', 'an', 'the a', 'two'], {
        explain: { th: 'star ขึ้นต้นด้วยพยัญชนะ ใช้ a', en: 'star starts with a consonant: a.' },
      }),
      q('p-k-a1-1-6', 'vocabulary', 'Red + white = ___ 🩷', ['pink', 'green', 'grey', 'blue'], {
        explain: { th: 'แดงผสมขาว = ชมพู (pink)', en: 'Red and white make pink.' },
      }),
      q('p-k-a1-1-7', 'reading', "In Mia's picture, what colour is the door?", ['red', 'yellow', 'blue', 'green']),
      q('p-k-a1-1-8', 'listening', 'What colour is the cat?', ['black', 'white', 'orange', 'grey'], {
        audio: 'Look! It is my cat. My cat is black.',
      }),
    ],
  },
  {
    id: 'k-a1-2',
    level: 'A1',
    theme: 'kids',
    audience: 'child',
    title: { th: 'สัตว์น่ารัก 🐶', en: 'Animals 🐶' },
    canDo: [
      { th: 'บอกชื่อสัตว์และเสียงร้องของสัตว์ได้', en: 'I can name animals and their sounds.' },
      { th: 'บอกว่าสัตว์ทำอะไรได้ (can)', en: 'I can say what animals can do.' },
    ],
    vocab: [
      { word: 'dog 🐶', th: 'สุนัข', example: 'The dog says woof!' },
      { word: 'cat 🐱', th: 'แมว', example: 'The cat says meow.' },
      { word: 'bird 🐦', th: 'นก', example: 'A bird can fly.' },
      { word: 'fish 🐟', th: 'ปลา', example: 'A fish can swim.' },
      { word: 'elephant 🐘', th: 'ช้าง', example: 'The elephant is big.' },
    ],
    grammar: {
      title: 'can / can\'t',
      explain: {
        th: 'can = ทำได้, can\'t = ทำไม่ได้ ตามด้วยกริยาช่องที่ 1 เช่น A bird can fly. (นกบินได้) A fish can\'t walk. (ปลาเดินไม่ได้)',
        en: "can = able to, can't = not able to, + base verb: A bird can fly. A fish can't walk.",
      },
      examples: ['A monkey can climb. 🐒', "A dog can't fly.", 'Can a duck swim? — Yes, it can.'],
    },
    reading: {
      title: 'At the zoo',
      text: 'I am at the zoo. I can see a big elephant. It is grey. I can see a monkey. It can climb trees. I can see a penguin. It can swim, but it can\'t fly!',
    },
    practice: [
      q('p-k-a1-2-1', 'vocabulary', '🐱 This is a ___.', ['cat', 'dog', 'cow', 'duck'], {
        explain: { th: 'แมว = cat', en: 'It is a cat.' },
      }),
      q('p-k-a1-2-2', 'vocabulary', 'Which animal says "moo"? 🐮', ['cow', 'cat', 'bird', 'fish'], {
        explain: { th: 'วัวร้อง moo', en: 'A cow says moo.' },
      }),
      q('p-k-a1-2-3', 'grammar', 'A bird ___ fly. 🐦', ['can', "can't", 'is', 'are'], {
        explain: { th: 'นกบินได้: can', en: 'Birds can fly.' },
      }),
      q('p-k-a1-2-4', 'grammar', 'A fish ___ walk. 🐟', ["can't", 'can', 'is', 'does'], {
        explain: { th: 'ปลาเดินไม่ได้: can\'t', en: "Fish can't walk." },
      }),
      q('p-k-a1-2-5', 'vocabulary', 'The ___ is very big and grey. 🐘', ['elephant', 'mouse', 'bird', 'frog'], {
        explain: { th: 'ช้างตัวใหญ่สีเทา', en: 'Elephants are big and grey.' },
      }),
      q('p-k-a1-2-6', 'grammar', 'Can a duck swim? — Yes, it ___.', ['can', 'is', 'does', 'swims'], {
        explain: { th: 'ตอบสั้น: Yes, it can.', en: 'Short answer: Yes, it can.' },
      }),
      q('p-k-a1-2-7', 'reading', 'What can the penguin do?', ['swim', 'fly', 'climb trees', 'run fast']),
      q('p-k-a1-2-8', 'listening', 'Which animal is it?', ['a monkey', 'a cat', 'a bird', 'a fish'], {
        audio: 'It is brown. It can climb trees. It likes bananas. What is it?',
      }),
    ],
  },
  {
    id: 'k-a1-3',
    level: 'A1',
    theme: 'kids',
    audience: 'child',
    title: { th: 'ร่างกายของฉัน 🙋', en: 'My Body 🙋' },
    canDo: [
      { th: 'บอกชื่อส่วนต่าง ๆ ของร่างกายได้', en: 'I can name parts of my body.' },
      { th: 'ทำตามคำสั่งง่าย ๆ ได้ (Touch your nose!)', en: 'I can follow simple instructions (Touch your nose!).' },
    ],
    vocab: [
      { word: 'head', th: 'ศีรษะ', example: 'Touch your head.' },
      { word: 'eyes 👀', th: 'ตา', example: 'I have two eyes.' },
      { word: 'nose 👃', th: 'จมูก', example: 'I smell with my nose.' },
      { word: 'hands 👐', th: 'มือ', example: 'Clap your hands!' },
      { word: 'feet 🦶', th: 'เท้า (หลายข้าง)', example: 'Stamp your feet!' },
    ],
    grammar: {
      title: 'I have… / Commands',
      explain: {
        th: 'I have two eyes. (ฉันมีตาสองข้าง) ถ้ามากกว่าหนึ่งเติม -s (ear → ears) ยกเว้น foot → feet ประโยคคำสั่งขึ้นต้นด้วยกริยา: Touch your nose! Clap your hands!',
        en: 'I have two eyes. Add -s for more than one (ear → ears), but foot → feet. Commands start with a verb: Touch your nose! Clap your hands!',
      },
      examples: ['I have ten fingers. 🖐️🖐️', 'Touch your ears!', 'Close your eyes.'],
    },
    reading: {
      title: 'Robot Rob',
      text: 'This is Robot Rob. He has a square head. He has three eyes and one big nose. He has two long arms and four feet. Rob can dance! Clap your hands with Rob!',
    },
    practice: [
      q('p-k-a1-3-1', 'vocabulary', 'You see with your ___. 👀', ['eyes', 'ears', 'nose', 'feet'], {
        explain: { th: 'มองเห็นด้วยตา = eyes', en: 'You see with your eyes.' },
      }),
      q('p-k-a1-3-2', 'vocabulary', 'You hear with your ___. 👂', ['ears', 'eyes', 'hands', 'mouth'], {
        explain: { th: 'ได้ยินด้วยหู = ears', en: 'You hear with your ears.' },
      }),
      q('p-k-a1-3-3', 'grammar', 'one foot, two ___', ['feet', 'foots', 'feets', 'footes'], {
        explain: { th: 'foot → feet (คำพิเศษ)', en: 'foot → feet (irregular).' },
      }),
      q('p-k-a1-3-4', 'grammar', 'I ___ two hands.', ['have', 'has', 'am', 'is'], {
        explain: { th: 'I ใช้ have', en: 'I have.' },
      }),
      q('p-k-a1-3-5', 'grammar', '___ your hands! 👏', ['Clap', 'Claps', 'Clapping', 'To clap'], {
        explain: { th: 'ประโยคคำสั่งขึ้นต้นด้วยกริยาช่องที่ 1', en: 'Commands start with the base verb.' },
      }),
      q('p-k-a1-3-6', 'vocabulary', 'You smell flowers with your ___. 🌸', ['nose', 'hair', 'knee', 'arm'], {
        explain: { th: 'ดมกลิ่นด้วยจมูก', en: 'You smell with your nose.' },
      }),
      q('p-k-a1-3-7', 'reading', 'How many eyes does Robot Rob have?', ['three', 'two', 'one', 'four']),
      q('p-k-a1-3-8', 'listening', 'What should you touch?', ['your nose', 'your head', 'your feet', 'your ears'], {
        audio: 'Ready? Touch your nose! Good job!',
      }),
    ],
  },
  {
    id: 'k-a2-1',
    level: 'A2',
    theme: 'kids',
    audience: 'child',
    title: { th: 'วันที่โรงเรียน 🏫', en: 'My School Day 🏫' },
    canDo: [
      { th: 'เล่ากิจวัตรที่โรงเรียนได้', en: 'I can talk about my day at school.' },
      { th: 'บอกวิชาที่ชอบและไม่ชอบได้', en: 'I can say which subjects I like.' },
    ],
    vocab: [
      { word: 'subject', th: 'วิชา', example: 'My favourite subject is art.' },
      { word: 'maths ➕', th: 'คณิตศาสตร์', example: 'We have maths on Monday.' },
      { word: 'science 🔬', th: 'วิทยาศาสตร์', example: 'Science is fun!' },
      { word: 'break time', th: 'เวลาพัก', example: 'We play football at break time.' },
      { word: 'homework 📚', th: 'การบ้าน', example: 'I do my homework after dinner.' },
    ],
    grammar: {
      title: 'Present simple + like / don\'t like',
      explain: {
        th: 'เล่ากิจวัตรด้วย present simple: I go to school at 7:30. ชอบ/ไม่ชอบ: I like science. I don\'t like maths. ถ้าเป็นเพื่อน (he/she) เติม -s: She likes art.',
        en: "Use the present simple for routines: I go to school at 7:30. Likes: I like science. I don't like maths. With he/she add -s: She likes art.",
      },
      examples: ['I have lunch at twelve.', 'My friend likes music.', "We don't have school on Sunday."],
    },
    reading: {
      title: "Ploy's school day",
      text: "Hi, I'm Ploy. I'm ten. I go to school by bus. School starts at eight o'clock. My favourite subject is science because we do experiments. I don't like maths very much. At break time, I play with my best friend, Kaew. After school, I do my homework and then I watch cartoons.",
    },
    practice: [
      q('p-k-a2-1-1', 'grammar', 'I ___ to school by bus.', ['go', 'goes', 'going', 'am go'], {
        explain: { th: 'I + กริยาช่องที่ 1', en: 'I + base verb.' },
      }),
      q('p-k-a2-1-2', 'grammar', 'My sister ___ art.', ['likes', 'like', 'liking', 'is like'], {
        explain: { th: 'my sister = she เติม -s', en: 'she: likes.' },
      }),
      q('p-k-a2-1-3', 'grammar', 'I ___ like maths.', ["don't", "doesn't", "not", "isn't"], {
        explain: { th: "I + don't", en: "I + don't." },
      }),
      q('p-k-a2-1-4', 'vocabulary', 'You do experiments in ___. 🔬', ['science', 'music', 'PE', 'English'], {
        explain: { th: 'ทดลองในวิชาวิทยาศาสตร์', en: 'Experiments happen in science.' },
      }),
      q('p-k-a2-1-5', 'vocabulary', 'Work from school that you do at home is ___.', ['homework', 'housework', 'break time', 'lunch'], {
        explain: { th: 'homework = การบ้าน (housework = งานบ้าน)', en: 'homework = school work at home.' },
      }),
      q('p-k-a2-1-6', 'grammar', 'What ___ your favourite subject?', ['is', 'are', 'do', 'does'], {
        explain: { th: 'subject เอกพจน์ ใช้ is', en: 'Singular: is.' },
      }),
      q('p-k-a2-1-7', 'reading', 'Why does Ploy like science?', [
        'because they do experiments',
        'because it is easy',
        'because Kaew likes it',
        'because there is no homework',
      ]),
      q('p-k-a2-1-8', 'listening', 'What does the boy do at break time?', ['plays football', 'reads books', 'eats lunch', 'does homework'], {
        audio: 'At break time, I always play football with my friends.',
      }),
    ],
  },
  {
    id: 'k-a2-2',
    level: 'A2',
    theme: 'kids',
    audience: 'child',
    title: { th: 'อาหารที่ฉันชอบ 🍕', en: 'Food I Like 🍕' },
    canDo: [
      { th: 'บอกอาหารที่ชอบและไม่ชอบได้', en: 'I can say what food I like and dislike.' },
      { th: 'ขออาหารอย่างสุภาพได้ (Can I have…, please?)', en: 'I can ask for food politely.' },
    ],
    vocab: [
      { word: 'vegetables 🥦', th: 'ผัก', example: 'Vegetables are good for you.' },
      { word: 'fruit 🍓', th: 'ผลไม้', example: 'I eat fruit every day.' },
      { word: 'sweets 🍬', th: 'ขนมหวาน ลูกอม', example: "Don't eat too many sweets!" },
      { word: 'hungry', th: 'หิว', example: "I'm hungry. Can I have a sandwich?" },
      { word: 'delicious 😋', th: 'อร่อย', example: 'This pizza is delicious!' },
    ],
    grammar: {
      title: 'Can I have…, please? / some & any',
      explain: {
        th: 'ขออาหารสุภาพ: Can I have some water, please? ใช้ some ในประโยคบอกเล่าและการขอ ใช้ any ในประโยคคำถามและปฏิเสธ: Is there any milk? There isn\'t any juice.',
        en: "Ask politely: Can I have some water, please? Use some in positive sentences and requests; any in questions and negatives: Is there any milk? There isn't any juice.",
      },
      examples: ['Can I have an ice cream, please? 🍦', "I don't like any vegetables… except carrots!", 'Would you like some grapes?'],
    },
    reading: {
      title: 'Picnic day',
      text: "Today is picnic day! Mum makes sandwiches. Dad brings fruit: apples, grapes and a big watermelon. My brother wants sweets, but Mum says, 'Eat some fruit first!' The watermelon is delicious. We are happy and full.",
    },
    practice: [
      q('p-k-a2-2-1', 'grammar', 'Can I have ___ water, please?', ['some', 'any', 'a', 'many'], {
        explain: { th: 'ขอของ ใช้ some', en: 'Requests use some.' },
      }),
      q('p-k-a2-2-2', 'grammar', 'Is there ___ milk in the fridge?', ['any', 'some', 'a', 'many'], {
        explain: { th: 'คำถามใช้ any', en: 'Questions use any.' },
      }),
      q('p-k-a2-2-3', 'vocabulary', 'Carrots and broccoli are ___.', ['vegetables', 'fruit', 'sweets', 'drinks'], {
        explain: { th: 'แครอทและบร็อคโคลีเป็นผัก', en: 'They are vegetables.' },
      }),
      q('p-k-a2-2-4', 'vocabulary', 'I want to eat. I am ___.', ['hungry', 'tired', 'sleepy', 'cold'], {
        explain: { th: 'อยากกิน = หิว hungry', en: 'Want to eat = hungry.' },
      }),
      q('p-k-a2-2-5', 'vocabulary', 'Mmm! This cake is ___! 😋', ['delicious', 'dangerous', 'difficult', 'dirty'], {
        explain: { th: 'delicious = อร่อย', en: 'delicious = very tasty.' },
      }),
      q('p-k-a2-2-6', 'grammar', 'My brother ___ like vegetables.', ["doesn't", "don't", "isn't", 'not'], {
        explain: { th: "he + doesn't", en: "he + doesn't." },
      }),
      q('p-k-a2-2-7', 'reading', "What does Mum say to the brother?", [
        'Eat some fruit first!',
        'Eat your sandwich!',
        'No picnic today!',
        'Bring the watermelon!',
      ]),
      q('p-k-a2-2-8', 'listening', 'What does the girl want?', ['an ice cream', 'a sandwich', 'some juice', 'a pizza'], {
        audio: "Mum, it's so hot today. Can I have an ice cream, please?",
      }),
    ],
  },
  {
    id: 'k-a2-3',
    level: 'A2',
    theme: 'kids',
    audience: 'child',
    title: { th: 'วันหยุดแสนสนุก ⚽', en: 'Weekend Fun ⚽' },
    canDo: [
      { th: 'เล่าว่าทำอะไรเมื่อวันหยุดที่ผ่านมาได้', en: 'I can say what I did last weekend.' },
      { th: 'ใช้กริยาอดีตง่าย ๆ ได้ (played, went, saw)', en: 'I can use simple past verbs (played, went, saw).' },
    ],
    vocab: [
      { word: 'park 🌳', th: 'สวนสาธารณะ', example: 'We went to the park.' },
      { word: 'beach 🏖️', th: 'ชายหาด', example: 'I played at the beach.' },
      { word: 'ride a bike 🚲', th: 'ปั่นจักรยาน', example: 'I rode my bike.' },
      { word: 'cousin', th: 'ลูกพี่ลูกน้อง', example: 'I visited my cousins.' },
      { word: 'yesterday', th: 'เมื่อวาน', example: 'Yesterday was Sunday.' },
    ],
    grammar: {
      title: 'Past simple (regular & irregular)',
      explain: {
        th: 'เล่าเรื่องที่ผ่านมาแล้วใช้กริยาช่องที่ 2: คำปกติเติม -ed (play → played) คำพิเศษต้องจำ: go → went, see → saw, eat → ate, have → had',
        en: 'Use the past simple for finished actions: regular verbs add -ed (play → played); irregular ones change: go → went, see → saw, eat → ate, have → had.',
      },
      examples: ['I played football on Saturday.', 'We went to the beach. 🏖️', 'I saw a big turtle! 🐢'],
    },
    reading: {
      title: "Ton's weekend",
      text: "Last weekend, Ton went to Hua Hin with his family. On Saturday, they played in the sea and built a big sandcastle. On Sunday, Ton rode a pony on the beach. In the evening, they ate seafood. Ton was very tired, but very happy!",
    },
    practice: [
      q('p-k-a2-3-1', 'grammar', 'Yesterday I ___ football.', ['played', 'play', 'plays', 'playing'], {
        explain: { th: 'Yesterday = อดีต: played', en: 'Past: played.' },
      }),
      q('p-k-a2-3-2', 'grammar', 'We ___ to the zoo last Sunday.', ['went', 'go', 'goed', 'goes'], {
        explain: { th: 'go → went', en: 'go → went.' },
      }),
      q('p-k-a2-3-3', 'grammar', 'I ___ a big turtle at the beach!', ['saw', 'see', 'seed', 'sees'], {
        explain: { th: 'see → saw', en: 'see → saw.' },
      }),
      q('p-k-a2-3-4', 'vocabulary', 'You build sandcastles at the ___.', ['beach', 'park', 'school', 'library'], {
        explain: { th: 'ก่อปราสาททรายที่ชายหาด', en: 'Sandcastles are built at the beach.' },
      }),
      q('p-k-a2-3-5', 'vocabulary', 'The day before today is ___.', ['yesterday', 'tomorrow', 'weekend', 'tonight'], {
        explain: { th: 'yesterday = เมื่อวาน', en: 'yesterday = the day before today.' },
      }),
      q('p-k-a2-3-6', 'grammar', 'Did you have fun? — Yes, I ___!', ['did', 'do', 'was', 'had'], {
        explain: { th: 'ตอบคำถาม Did…? ด้วย did', en: 'Answer Did…? with did.' },
      }),
      q('p-k-a2-3-7', 'reading', 'What did Ton do on Sunday?', ['rode a pony', 'built a sandcastle', 'swam in the sea', 'visited his cousins']),
      q('p-k-a2-3-8', 'listening', 'Where did the girl go?', ['to the park', 'to the beach', 'to the cinema', 'to school'], {
        audio: 'On Saturday, I went to the park with my dad and we rode our bikes.',
      }),
    ],
  },
  // ───────────── For parents ─────────────
  {
    id: 'k-a1-4',
    level: 'A1',
    theme: 'kids',
    audience: 'parent',
    title: { th: 'พ่อแม่: ภาษาอังกฤษตอนเช้ากับลูก ☀️', en: 'Parents: Morning Routine with Kids ☀️' },
    canDo: [
      { th: 'ใช้ประโยคสั้น ๆ ปลุกลูกและเตรียมตัวไปโรงเรียนได้', en: 'I can use short phrases to wake my child and get ready for school.' },
      { th: 'ชมและให้กำลังใจลูกเป็นภาษาอังกฤษได้', en: 'I can praise and encourage my child in English.' },
    ],
    vocab: [
      { word: 'Time to wake up!', th: 'ได้เวลาตื่นแล้ว!', example: 'Good morning, sweetie! Time to wake up!' },
      { word: 'brush your teeth', th: 'แปรงฟัน', example: 'Go and brush your teeth.' },
      { word: 'get dressed', th: 'แต่งตัว', example: 'Please get dressed for school.' },
      { word: 'Hurry up!', th: 'เร็วเข้า!', example: "Hurry up! The bus is coming." },
      { word: 'Well done!', th: 'เก่งมาก!', example: 'You made your bed. Well done!' },
    ],
    grammar: {
      title: 'Imperatives & let\'s',
      explain: {
        th: 'ภาษาที่ใช้กับลูกส่วนใหญ่เป็นประโยคคำสั่งสั้น ๆ ขึ้นต้นด้วยกริยา (Wash your face.) เติม please ให้สุภาพ ชวนทำด้วยกันใช้ Let\'s + V1 (Let\'s eat breakfast!) ห้ามใช้ Don\'t + V1 (Don\'t run!)',
        en: "Most phrases with kids are short imperatives (Wash your face.). Add please to soften. Invite with Let's + verb (Let's eat breakfast!). Stop with Don't + verb (Don't run!).",
      },
      examples: ["Let's put on your shoes.", "Don't forget your water bottle!", 'Give me a hug! 🤗'],
    },
    reading: {
      title: 'A busy morning',
      text: "Mum: Good morning, Nam! Time to wake up!\nNam: Five more minutes…\nMum: No, sweetie. Let's get up. Brush your teeth and get dressed, please.\nNam: Where are my socks?\nMum: They're on your chair. Hurry up — breakfast is ready!\nNam: I'm ready!\nMum: Well done! Let's go.",
    },
    practice: [
      q('p-k-a1-4-1', 'grammar', '___ your teeth, please.', ['Brush', 'Brushes', 'Brushing', 'To brush'], {
        explain: { th: 'ประโยคคำสั่งขึ้นต้นด้วยกริยาช่องที่ 1', en: 'Imperative: base verb.' },
      }),
      q('p-k-a1-4-2', 'grammar', "___ eat breakfast together!", ["Let's", 'Lets', 'Let', 'Let us to'], {
        explain: { th: "ชวนทำด้วยกัน: Let's + V1", en: "Invitation: Let's + verb." },
      }),
      q('p-k-a1-4-3', 'grammar', "___ run on the stairs!", ["Don't", 'No', 'Not', "Doesn't"], {
        explain: { th: "ห้าม: Don't + V1", en: "Prohibition: Don't + verb." },
      }),
      q('p-k-a1-4-4', 'vocabulary', 'Your child finished their homework. You say: "___"', ['Well done!', 'Hurry up!', 'Wake up!', 'Be quiet!'], {
        explain: { th: 'ชมลูก: Well done!', en: 'Praise: Well done!' },
      }),
      q('p-k-a1-4-5', 'vocabulary', 'Put on your clothes = get ___.', ['dressed', 'dress', 'dressing', 'clothes'], {
        explain: { th: 'get dressed = แต่งตัว', en: 'get dressed = put on clothes.' },
      }),
      q('p-k-a1-4-6', 'vocabulary', 'We are late. ___!', ['Hurry up', 'Slow down', 'Sit down', 'Good night'], {
        explain: { th: 'สาย = เร็วเข้า Hurry up', en: 'Late: Hurry up!' },
      }),
      q('p-k-a1-4-7', 'reading', "Where are Nam's socks?", ['on the chair', 'under the bed', 'in the bag', 'in the kitchen']),
      q('p-k-a1-4-8', 'listening', 'What must the child not forget?', ['the water bottle', 'the lunch box', 'the hat', 'the homework'], {
        audio: "Here's your bag. Don't forget your water bottle! Have a great day at school.",
      }),
    ],
  },
  {
    id: 'k-a2-4',
    level: 'A2',
    theme: 'kids',
    audience: 'parent',
    title: { th: 'พ่อแม่: เวลานอนและความรู้สึก 🌙', en: 'Parents: Bedtime & Feelings 🌙' },
    canDo: [
      { th: 'ถามลูกเรื่องวันนี้และความรู้สึกได้', en: "I can ask my child about their day and feelings." },
      { th: 'ใช้ภาษาอังกฤษช่วงก่อนนอนได้ (อ่านนิทาน ราตรีสวัสดิ์)', en: 'I can use English at bedtime (stories, good night).' },
    ],
    vocab: [
      { word: 'How was your day?', th: 'วันนี้เป็นยังไงบ้าง', example: 'How was your day at school?' },
      { word: 'feel', th: 'รู้สึก', example: 'How do you feel?' },
      { word: 'scared', th: 'กลัว', example: "Don't be scared. I'm here." },
      { word: 'upset', th: 'ไม่สบายใจ เสียใจ', example: 'Why are you upset?' },
      { word: 'bedtime story', th: 'นิทานก่อนนอน', example: "Let's read a bedtime story." },
    ],
    grammar: {
      title: 'Past simple questions & feelings with because',
      explain: {
        th: 'ถามเรื่องที่ผ่านมาใช้ Did + ประธาน + V1? (Did you have fun?) หรือ What did you…? บอกเหตุผลของความรู้สึกด้วย because: I\'m sad because I lost my toy.',
        en: "Ask about the past with Did + subject + verb? or What did you…? Explain feelings with because: I'm sad because I lost my toy.",
      },
      examples: ['What did you eat for lunch?', 'Did you play with your friends?', "You're upset because your friend was mean. I understand."],
    },
    reading: {
      title: 'Before sleep',
      text: "Dad: How was your day, Mint?\nMint: Not good. I'm upset.\nDad: Oh no. Why are you upset?\nMint: Because Jay took my crayons.\nDad: I understand. Did you tell your teacher?\nMint: Yes. She talked to Jay. He said sorry.\nDad: Good. Now, let's read a bedtime story. Which book do you want?\nMint: The dinosaur book! 🦕",
    },
    practice: [
      q('p-k-a2-4-1', 'grammar', 'What ___ you do at school today?', ['did', 'do', 'were', 'are'], {
        explain: { th: 'คำถามอดีต: did', en: 'Past question: did.' },
      }),
      q('p-k-a2-4-2', 'grammar', 'Did you ___ fun?', ['have', 'had', 'has', 'having'], {
        explain: { th: 'หลัง did ใช้ V1', en: 'After did: base verb.' },
      }),
      q('p-k-a2-4-3', 'grammar', "I'm sad ___ my ice cream fell down.", ['because', 'so', 'but', 'and'], {
        explain: { th: 'บอกเหตุผล: because', en: 'Reason: because.' },
      }),
      q('p-k-a2-4-4', 'vocabulary', "The thunder is loud. Your child is ___. You say: \"It's OK, I'm here.\"", ['scared', 'hungry', 'bored', 'excited'], {
        explain: { th: 'ฟ้าร้อง ลูกกลัว: scared', en: 'Thunder: scared.' },
      }),
      q('p-k-a2-4-5', 'vocabulary', 'Ask about feelings: "How do you ___?"', ['feel', 'fell', 'fill', 'feeling'], {
        explain: { th: 'How do you feel? = รู้สึกยังไง', en: 'How do you feel?' },
      }),
      q('p-k-a2-4-6', 'vocabulary', '"Good ___, sleep tight!"', ['night', 'morning', 'evening', 'day'], {
        explain: { th: 'Good night = ราตรีสวัสดิ์', en: 'Good night at bedtime.' },
      }),
      q('p-k-a2-4-7', 'reading', 'Why was Mint upset?', [
        'Jay took her crayons.',
        'She lost her book.',
        'She was tired.',
        'Her teacher was angry.',
      ]),
      q('p-k-a2-4-8', 'listening', 'Which story does the child want?', ['the one about a space rocket', 'the dinosaur book', 'a story about a princess', 'no story'], {
        audio: 'Daddy, can we read the story about the space rocket tonight? Please!',
      }),
    ],
  },
  {
    id: 'k-b1-1',
    level: 'B1',
    theme: 'kids',
    audience: 'parent',
    title: { th: 'พ่อแม่: ช่วยลูกทำการบ้าน 📝', en: 'Parents: Helping with Homework 📝' },
    canDo: [
      { th: 'อธิบายและแนะนำลูกตอนทำการบ้านเป็นภาษาอังกฤษได้', en: 'I can guide my child through homework in English.' },
      { th: 'ใช้คำถามกระตุ้นให้ลูกคิดเอง', en: 'I can ask questions that help my child think for themselves.' },
    ],
    vocab: [
      { word: 'figure out', th: 'คิดหาคำตอบ', example: "Let's figure it out together." },
      { word: 'make a mistake', th: 'ทำผิด', example: "It's OK to make mistakes." },
      { word: 'give it a try', th: 'ลองดู', example: "Give it a try — you can do it!" },
      { word: 'take a break', th: 'พักสักครู่', example: "Let's take a short break." },
      { word: 'concentrate', th: 'ตั้งใจ จดจ่อ', example: 'Turn off the TV so you can concentrate.' },
    ],
    grammar: {
      title: 'Questions to guide thinking & first conditional',
      explain: {
        th: 'แทนที่จะบอกคำตอบ ใช้คำถามให้ลูกคิด: What do you think…? How did you get that answer? ใช้ first conditional ตั้งเงื่อนไข: If you finish your homework, you can play games.',
        en: 'Instead of giving answers, ask: What do you think…? How did you get that? Set conditions with the first conditional: If you finish your homework, you can play games.',
      },
      examples: [
        'What does this word mean, do you think?',
        "If you check your answers, you'll find the mistake.",
        "Great effort! What will you try next?",
      ],
    },
    reading: {
      title: 'Homework time',
      text: "Many parents give answers to save time, but children learn more when they figure things out themselves. Try asking open questions such as 'What do you already know?' Praise effort, not just results: 'You worked really hard on that!' If your child gets frustrated, take a short break. And remember — making mistakes is part of learning.",
    },
    practice: [
      q('p-k-b1-1-1', 'grammar', 'If you ___ your homework, you can watch TV.', ['finish', 'will finish', 'finished', 'finishing'], {
        explain: { th: 'หลัง if ใช้ present simple', en: 'After if: present simple.' },
      }),
      q('p-k-b1-1-2', 'grammar', 'How ___ you get that answer?', ['did', 'do you', 'are', 'were'], {
        explain: { th: 'ถามวิธีที่ทำไปแล้ว: How did you…?', en: 'How did you…? for a finished action.' },
      }),
      q('p-k-b1-1-3', 'vocabulary', "Don't worry. It's OK to make ___.", ['mistakes', 'mistake it', 'wrongs', 'errors it'], {
        explain: { th: 'make mistakes = ทำผิด', en: 'Collocation: make mistakes.' },
      }),
      q('p-k-b1-1-4', 'vocabulary', "Let's work it ___ together.", ['out', 'up', 'on', 'off'], {
        explain: { th: 'work out / figure out = หาคำตอบ', en: 'work out = solve.' },
      }),
      q('p-k-b1-1-5', 'vocabulary', 'Turn off the TV so you can ___.', ['concentrate', 'celebrate', 'complain', 'compete'], {
        explain: { th: 'concentrate = ตั้งใจ', en: 'concentrate = focus.' },
      }),
      q('p-k-b1-1-6', 'vocabulary', 'Which phrase praises effort, not just the result?', [
        'You worked really hard on that!',
        'You got 100%!',
        'You are so clever!',
        'Finally, you finished.',
      ], { explain: { th: 'ชมความพยายาม', en: 'It praises effort.' } }),
      q('p-k-b1-1-7', 'reading', 'What does the text suggest when a child gets frustrated?', [
        'take a short break',
        'give them the answer',
        'finish the homework for them',
        'stop homework for the day',
      ]),
      q('p-k-b1-1-8', 'listening', 'What does the parent want the child to do?', [
        'read the question again',
        'ask the teacher',
        'skip the question',
        'use a calculator',
      ], { audio: "Hmm, I think you're close. Why don't you read the question again carefully?" }),
    ],
  },
  {
    id: 'k-b2-1',
    level: 'B2',
    theme: 'kids',
    audience: 'parent',
    title: { th: 'พ่อแม่: คุยกับครูที่โรงเรียนนานาชาติ 🧑‍🏫', en: 'Parents: Talking with Teachers 🧑‍🏫' },
    canDo: [
      { th: 'ประชุมผู้ปกครองกับครูและถามถึงพัฒนาการของลูกได้', en: "I can discuss my child's progress at a parent–teacher meeting." },
      { th: 'แสดงความกังวลอย่างสุภาพและเสนอทางแก้ร่วมกันได้', en: 'I can raise concerns politely and agree on next steps.' },
    ],
    vocab: [
      { word: 'parent–teacher conference', th: 'การประชุมผู้ปกครอง', example: 'The parent–teacher conference is next Friday.' },
      { word: 'progress report', th: 'รายงานผลการเรียน', example: 'We received the progress report.' },
      { word: 'struggle with', th: 'มีปัญหา ทำได้ยาก', example: 'She struggles with reading.' },
      { word: 'well-behaved', th: 'ประพฤติดี', example: 'He is always well-behaved in class.' },
      { word: 'keep an eye on', th: 'คอยดูแล เฝ้าสังเกต', example: "We'll keep an eye on his progress." },
    ],
    grammar: {
      title: 'Polite concerns & reported speech',
      explain: {
        th: 'แสดงความกังวลอย่างสุภาพ: I was wondering if…, I\'m a little concerned that…, Would it be possible to…? เล่าสิ่งที่ลูกพูดด้วย reported speech: She said (that) she found maths difficult.',
        en: "Raise concerns politely: I was wondering if…, I'm a little concerned that…, Would it be possible to…? Report what your child said: She said (that) she found maths difficult.",
      },
      examples: [
        "I'm a little concerned that he seems tired in class.",
        'I was wondering if you could recommend some books.',
        'My son told me that he had no friends in his new class.',
      ],
    },
    reading: {
      title: 'Meeting notes',
      text: "Teacher: Overall, Pim is doing well. She's well-behaved and very creative. However, she struggles with writing longer texts.\nParent: Thank you. I was wondering if there's anything we can do at home.\nTeacher: Reading together for 15 minutes a day would really help. I'll also give her some extra writing tasks.\nParent: That sounds great. Would it be possible to meet again next term?\nTeacher: Of course. We'll keep an eye on her progress.",
    },
    practice: [
      q('p-k-b2-1-1', 'grammar', 'I was wondering ___ you could give us some advice.', ['if', 'that', 'what', 'unless'], {
        explain: { th: 'I was wondering if… (สุภาพ)', en: 'I was wondering if… is polite.' },
      }),
      q('p-k-b2-1-2', 'grammar', '"I don\'t like PE." → My daughter said she ___ like PE.', ["didn't", "doesn't", "don't", "hasn't"], {
        explain: { th: "don't → didn't (เลื่อนเวลา)", en: "don't → didn't (backshift)." },
      }),
      q('p-k-b2-1-3', 'grammar', '___ it be possible to change his seat?', ['Would', 'Will', 'Is', 'Does'], {
        explain: { th: 'Would it be possible…? สุภาพ', en: 'Would it be possible…? is polite.' },
      }),
      q('p-k-b2-1-4', 'vocabulary', 'He finds reading hard. He ___ with reading.', ['struggles', 'strikes', 'stretches', 'stays'], {
        explain: { th: 'struggle with = มีปัญหากับ', en: 'struggle with = find difficult.' },
      }),
      q('p-k-b2-1-5', 'vocabulary', "We'll keep an ___ on her progress.", ['eye', 'ear', 'hand', 'mind'], {
        explain: { th: 'keep an eye on = คอยดูแล', en: 'Idiom: keep an eye on.' },
      }),
      q('p-k-b2-1-6', 'vocabulary', 'Which is the most polite way to raise a concern?', [
        "I'm a little concerned that she seems unhappy.",
        'She is unhappy because of you.',
        'Why is she unhappy here?',
        'Fix this problem now.',
      ], { explain: { th: 'ภาษานุ่มนวล ไม่กล่าวโทษ', en: 'Soft and not blaming.' } }),
      q('p-k-b2-1-7', 'reading', 'What does the teacher suggest doing at home?', [
        'reading together for 15 minutes a day',
        'extra writing tasks every night',
        'a private tutor',
        'less screen time',
      ]),
      q('p-k-b2-1-8', 'listening', "What is the teacher's main point?", [
        'The child participates more when working in small groups.',
        'The child should change class.',
        'The child talks too much.',
        'The child needs glasses.',
      ], { audio: "He's quite shy in front of the whole class, but in small groups he really comes out of his shell and shares great ideas." }),
    ],
  },
]
