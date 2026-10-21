import { q } from '../lib/question'
import type { CefrLevel, LevelBlock, Question } from '../types'
import { CEFR_LEVELS } from '../types'

/**
 * Question bank for the placement test: 18 questions per CEFR level
 * (12 grammar/vocabulary, 3 reading, 3 listening), split into three
 * authoring sets. Each attempt draws 6 per level — see drawForm().
 */
const SET_A: LevelBlock[] = [
  {
    level: 'A1',
    questions: [
      q('a-a1-1', 'grammar', 'She ___ a teacher.', ['is', 'are', 'am', 'be']),
      q('a-a1-2', 'vocabulary', 'Which one is a fruit?', ['banana', 'chair', 'bus', 'shirt']),
      q('a-a1-3', 'grammar', 'I ___ coffee every morning.', ['drink', 'drinks', 'drinking', 'am drink']),
      q('a-a1-4', 'vocabulary', "The opposite of 'big' is ___.", ['small', 'tall', 'long', 'old']),
      q('a-a1-5', 'reading', 'Who does Tom live with?', ['his sister', 'his brother', 'his parents', 'his friend'], {
        passage: "Hi, I'm Tom. I live in London with my sister. We have a small dog called Max.",
      }),
      q('a-a1-6', 'listening', 'How old is Anna?', ['25', '15', '35', '52'], {
        audio: 'My name is Anna. I am twenty-five years old.',
      }),
    ],
  },
  {
    level: 'A2',
    questions: [
      q('a-a2-1', 'grammar', 'Yesterday we ___ to the beach.', ['went', 'go', 'goes', 'going']),
      q('a-a2-2', 'grammar', 'This book is ___ than that one.', [
        'more interesting',
        'interestinger',
        'most interesting',
        'interesting',
      ]),
      q('a-a2-3', 'vocabulary', 'I need to ___ an appointment with the dentist.', ['make', 'do', 'take', 'put']),
      q('a-a2-4', 'grammar', "There isn't ___ milk in the fridge.", ['any', 'some', 'many', 'a']),
      q('a-a2-5', 'reading', 'When can you NOT visit the museum?', [
        'on Monday',
        'on Sunday',
        'at 10 a.m. on Tuesday',
        'on Saturday afternoon',
      ], {
        passage:
          'The museum opens at 9 a.m. and closes at 5 p.m. from Tuesday to Sunday. It is closed on Mondays. Tickets are free for children under 12.',
      }),
      q('a-a2-6', 'listening', 'What time does the train leave?', ['6:30', '4:30', '6:04', '4:06'], {
        audio: 'The train to Manchester leaves from platform four at half past six.',
      }),
    ],
  },
  {
    level: 'B1',
    questions: [
      q('a-b1-1', 'grammar', "I've lived here ___ 2015.", ['since', 'for', 'from', 'during']),
      q('a-b1-2', 'grammar', 'If it rains tomorrow, we ___ at home.', ['will stay', 'would stay', 'stayed', 'stay will']),
      q('a-b1-3', 'vocabulary', 'Could you ___ me some money until Friday?', ['lend', 'borrow', 'rent', 'owe']),
      q('a-b1-4', 'grammar', 'The report ___ by the manager last week.', [
        'was written',
        'wrote',
        'has written',
        'is writing',
      ]),
      q('a-b1-5', 'reading', 'What is the main idea of the text?', [
        'Working from home has disadvantages too.',
        'Working from home is always easier.',
        'Colleagues make work harder.',
        'People should stop working from home.',
      ], {
        passage:
          'Many people think working from home is easier, but it has challenges. Without colleagues around, some workers feel lonely, and it can be hard to separate work time from personal time.',
      }),
      q('a-b1-6', 'listening', 'How will the speaker send the details?', [
        'by email',
        'by phone',
        'in person',
        'by text message',
      ], {
        audio:
          "I was going to call you last night, but my phone battery died, so I'll send you the details by email this afternoon.",
      }),
    ],
  },
  {
    level: 'B2',
    questions: [
      q('a-b2-1', 'grammar', 'I wish I ___ more time to travel.', ['had', 'have', 'will have', 'would had']),
      q('a-b2-2', 'grammar', 'By the time we arrived, the film ___.', [
        'had already started',
        'already started',
        'has already started',
        'was already starting',
      ]),
      q('a-b2-3', 'vocabulary', 'The company decided to ___ the meeting until next month.', [
        'put off',
        'put up',
        'put on',
        'put out',
      ]),
      q('a-b2-4', 'grammar', 'She denied ___ the documents.', ['taking', 'to take', 'take', 'to have take']),
      q('a-b2-5', 'reading', 'What do critics believe?', [
        'The problem has moved, not disappeared.',
        'Traffic has been reduced.',
        'The policy was never meant to reduce traffic.',
        'Nearby neighbourhoods now have less congestion.',
      ], {
        passage:
          'Although the new policy was intended to reduce traffic, critics argue that it has merely shifted congestion to surrounding neighbourhoods rather than solving the problem.',
      }),
      q('a-b2-6', 'listening', "What might happen if sales don't improve?", [
        'The expansion plans may change.',
        'The board will expand faster.',
        'Sales will be measured differently.',
        'The quarter will be extended.',
      ], {
        audio:
          'Unless sales improve significantly in the next quarter, the board is likely to reconsider its expansion plans.',
      }),
    ],
  },
  {
    level: 'C1',
    questions: [
      q('a-c1-1', 'grammar', 'Not only ___ late, but he also forgot the tickets.', [
        'was he',
        'he was',
        'he is',
        'did he was',
      ]),
      q('a-c1-2', 'grammar', 'Had I known about the delay, I ___ a later flight.', [
        'would have booked',
        'would book',
        'had booked',
        'will have booked',
      ]),
      q('a-c1-3', 'vocabulary', 'The evidence was so ___ that the jury reached a verdict quickly.', [
        'compelling',
        'compulsive',
        'complacent',
        'compliant',
      ]),
      q('a-c1-4', 'vocabulary', "Her argument doesn't ___ water; there are too many flaws.", [
        'hold',
        'keep',
        'carry',
        'bear',
      ]),
      q('a-c1-5', 'reading', "How does the reviewer feel about the novel?", [
        'She has reservations about it.',
        'She thinks it is a masterpiece.',
        'She dislikes its ambitious scope.',
        'She believes the characters are vivid.',
      ], {
        passage:
          "The reviewer's praise of the novel is, at best, lukewarm: while acknowledging its ambitious scope, she suggests that its characters never quite come to life.",
      }),
      q('a-c1-6', 'listening', "What is the speaker's attitude?", [
        'Supports the idea but doubts it is feasible.',
        'Completely against the proposal.',
        'Enthusiastic and confident.',
        'Unsure what the proposal is about.',
      ], {
        audio:
          "Frankly, the proposal is sound in principle, but I'm not convinced we have the resources to see it through.",
      }),
    ],
  },
  {
    level: 'C2',
    questions: [
      q('a-c2-1', 'grammar', 'Little ___ that the decision would change her life.', [
        'did she realise',
        'she realised',
        'she did realise',
        'realised she',
      ]),
      q('a-c2-2', 'vocabulary', 'His speech was full of ___ remarks that offended many listeners.', [
        'disparaging',
        'disparate',
        'dispassionate',
        'dispensable',
      ]),
      q('a-c2-3', 'vocabulary', 'The negotiations reached an ___, with neither side willing to compromise.', [
        'impasse',
        'impulse',
        'impetus',
        'imprint',
      ]),
      q('a-c2-4', 'grammar', '___ the circumstances, her reaction was entirely understandable.', [
        'Given',
        'Giving',
        'To give',
        'Having giving',
      ]),
      q('a-c2-5', 'reading', 'What does the writer recommend?', [
        'A cautious, balanced view of the theory.',
        'Rejecting the theory immediately.',
        'Accepting the theory fully.',
        'Collecting no further data.',
      ], {
        passage:
          'To dismiss the theory outright would be premature; yet to embrace it uncritically, given the paucity of corroborating data, would be equally ill-advised.',
      }),
      q('a-c2-6', 'listening', "What is the speaker's main concern?", [
        'when the plan will happen',
        'the plan itself',
        'who made the plan',
        'how much the plan costs',
      ], {
        audio: "It's not that I object to the plan per se; it's more that the timing strikes me as somewhat ill-judged.",
      }),
    ],
  },
]

const SET_B: LevelBlock[] = [
  {
    level: 'A1',
    questions: [
      q('b-a1-1', 'grammar', 'They ___ from Thailand.', ['are', 'is', 'am', 'be']),
      q('b-a1-2', 'vocabulary', 'Which one is an animal?', ['cat', 'table', 'apple', 'book']),
      q('b-a1-3', 'grammar', 'He ___ to work by bus.', ['goes', 'go', 'going', 'is go']),
      q('b-a1-4', 'vocabulary', "The opposite of 'hot' is ___.", ['cold', 'warm', 'wet', 'dry']),
      q('b-a1-5', 'reading', "What is Lisa's job?", ['nurse', 'doctor', 'teacher', 'cook'], {
        passage: "My name is Lisa. I work in a hospital. I am a nurse. I start work at seven o'clock.",
      }),
      q('b-a1-6', 'listening', 'How many brothers does the speaker have?', ['two', 'one', 'three', 'none'], {
        audio: 'I have two brothers and one sister.',
      }),
    ],
  },
  {
    level: 'A2',
    questions: [
      q('b-a2-1', 'grammar', 'Last weekend I ___ my grandparents.', ['visited', 'visit', 'visits', 'visiting']),
      q('b-a2-2', 'grammar', 'Bangkok is ___ city in Thailand.', [
        'the biggest',
        'bigger',
        'the most big',
        'biggest than',
      ]),
      q('b-a2-3', 'vocabulary', 'Can you ___ me the way to the station?', ['tell', 'say', 'speak', 'talk']),
      q('b-a2-4', 'grammar', 'How ___ apples do you want?', ['many', 'much', 'any', 'lot']),
      q('b-a2-5', 'reading', "Why can't Sam come on Thursday?", [
        "He has a doctor's appointment.",
        'He has football practice.',
        'He is busy on Friday.',
        'He is on holiday.',
      ], {
        passage:
          "Dear Ben, I can't come to football practice on Thursday because I have a doctor's appointment. Can we practise on Friday instead? — Sam",
      }),
      q('b-a2-6', 'listening', 'When is the shop closed?', [
        'on Sunday',
        'on Saturday',
        'every morning',
        'after eight at night',
      ], {
        audio: 'The shop is open from eight in the morning until ten at night, every day except Sunday.',
      }),
    ],
  },
  {
    level: 'B1',
    questions: [
      q('b-b1-1', 'grammar', 'She has worked here ___ ten years.', ['for', 'since', 'from', 'ago']),
      q('b-b1-2', 'grammar', 'If I see him, I ___ him your message.', ['will give', 'would give', 'gave', 'give will']),
      q('b-b1-3', 'vocabulary', "I'm looking ___ to the holidays.", ['forward', 'ahead', 'up', 'after']),
      q('b-b1-4', 'grammar', 'English ___ in many countries.', ['is spoken', 'speaks', 'is speaking', 'has spoke']),
      q('b-b1-5', 'reading', 'What problem do some cyclists mention?', [
        'There are not enough safe bike lanes.',
        'Cycling costs too much.',
        'Cycling causes pollution.',
        'Cycling is bad for their health.',
      ], {
        passage:
          'Cycling to work is becoming more popular in many cities. It saves money, reduces pollution, and helps people stay fit. However, some cyclists complain about the lack of safe bike lanes.',
      }),
      q('b-b1-6', 'listening', 'Why has the meeting been moved?', [
        'The manager is at a conference.',
        'The room is not available.',
        'Thursday is a holiday.',
        'Nobody can come on Tuesday.',
      ], {
        audio: 'Sorry, the meeting has been moved from Tuesday to Thursday because the manager is away at a conference.',
      }),
    ],
  },
  {
    level: 'B2',
    questions: [
      q('b-b2-1', 'grammar', 'If I ___ you, I would accept the offer.', ['were', 'am', 'will be', 'had']),
      q('b-b2-2', 'grammar', 'She ___ for three hours when she finally found the answer.', [
        'had been studying',
        'has been studying',
        'was studied',
        'studies',
      ]),
      q('b-b2-3', 'vocabulary', "We've ___ of sugar; can you buy some?", ['run out', 'run over', 'run into', 'run off']),
      q('b-b2-4', 'grammar', "I'm not used to ___ up so early.", ['getting', 'get', 'got', 'have got']),
      q('b-b2-5', 'reading', 'According to the text, who struggles most with remote learning?', [
        'students with little self-discipline',
        'students who like flexibility',
        'teachers in classrooms',
        'students who dislike structure',
      ], {
        passage:
          'While remote learning offers flexibility, research suggests that students who lack self-discipline often struggle to keep up without the structure a classroom provides.',
      }),
      q('b-b2-6', 'listening', 'What does the speaker imply?', [
        "They didn't invest in better software early.",
        'They invested too much money.',
        'There are no delays.',
        'The software is working well.',
      ], {
        audio: "Had we invested in better software earlier, we wouldn't be facing these delays now.",
      }),
    ],
  },
  {
    level: 'C1',
    questions: [
      q('b-c1-1', 'grammar', 'Rarely ___ such a talented young musician.', [
        'have I seen',
        'I have seen',
        'I saw',
        'did I saw',
      ]),
      q('b-c1-2', 'grammar', "It's high time we ___ a decision.", ['made', 'make', 'will make', 'have made']),
      q('b-c1-3', 'vocabulary', "The manager's ___ approach meant problems were dealt with before they arose.", [
        'proactive',
        'reactive',
        'provocative',
        'productive',
      ]),
      q('b-c1-4', 'vocabulary', 'After months of debate, the plan finally came to ___.', [
        'fruition',
        'fusion',
        'function',
        'fraction',
      ]),
      q('b-c1-5', 'reading', 'What weakness does the writer identify?', [
        'The sample was limited.',
        'The findings were boring.',
        'The university refused to take part.',
        'The study took too long.',
      ], {
        passage:
          "The study's findings, while intriguing, should be treated with caution: the sample was small and drawn exclusively from a single university.",
      }),
      q('b-c1-6', 'listening', 'How does the speaker view the results?', [
        'Reasonably good, considering the circumstances.',
        'An outstanding success.',
        'A complete failure.',
        'Embarrassing.',
      ], {
        audio:
          "I'd hardly call the results a triumph, but given where we started, they're certainly nothing to be ashamed of.",
      }),
    ],
  },
  {
    level: 'C2',
    questions: [
      q('b-c2-1', 'grammar', 'Scarcely ___ the stage when the audience began to cheer.', [
        'had she stepped onto',
        'she had stepped onto',
        'did she stepped onto',
        'she stepped onto',
      ]),
      q('b-c2-2', 'vocabulary', 'The politician gave an ___ answer, avoiding any clear commitment.', [
        'equivocal',
        'unequivocal',
        'equitable',
        'eloquent',
      ]),
      q('b-c2-3', 'vocabulary', 'Her ___ remarks belied the deep concern she actually felt.', [
        'flippant',
        'fervent',
        'frugal',
        'fraught',
      ]),
      q('b-c2-4', 'grammar', '___ he to resign, the company would face a leadership crisis.', [
        'Were',
        'Was',
        'If',
        'Should be',
      ]),
      q('b-c2-5', 'reading', 'What is the writer suggesting?', [
        'The reforms have had the opposite of their stated effect.',
        'The reforms have succeeded.',
        'Bureaucracy has disappeared.',
        'The reforms were never introduced.',
      ], {
        passage:
          'The reforms, ostensibly designed to streamline bureaucracy, have in practice spawned a further layer of administrative oversight.',
      }),
      q('b-c2-6', 'listening', 'What does the speaker think about the mistake?', [
        'It was avoidable.',
        'It was unavoidable.',
        "It was the speaker's own fault.",
        'It was not important.',
      ], {
        audio:
          "I'm loath to criticise a colleague publicly, but this oversight could have been avoided with a modicum of care.",
      }),
    ],
  },
]


const SET_C: LevelBlock[] = [
  {
    level: 'A1',
    questions: [
      q('c-a1-1', 'grammar', '___ you like tea?', ['Do', 'Does', 'Are', 'Is']),
      q('c-a1-2', 'grammar', 'This is ___ umbrella.', ['an', 'a', 'the a', 'some']),
      q('c-a1-3', 'vocabulary', 'Monday, Tuesday, ___ …', ['Wednesday', 'Thursday', 'Sunday', 'Friday']),
      q('c-a1-4', 'vocabulary', 'You use a ___ to write.', ['pen', 'cup', 'bed', 'door']),
      q('c-a1-5', 'reading', 'How much is a coffee?', ['50 baht', '8 baht', '80 baht', '15 baht'], {
        passage: 'The café is next to the bank. It opens at 8 a.m. A coffee is 50 baht.',
      }),
      q('c-a1-6', 'listening', 'Where is the toilet?', ['on the second floor', 'on the first floor', 'next to the stairs', 'outside'], {
        audio: "Excuse me, where is the toilet? — It's on the second floor, next to the lift.",
      }),
    ],
  },
  {
    level: 'A2',
    questions: [
      q('c-a2-1', 'grammar', 'I ___ TV when the phone rang.', ['was watching', 'watched', 'am watching', 'watch']),
      q('c-a2-2', 'grammar', "You ___ wear a uniform at work. It's a rule.", ['have to', 'can', "don't have to", 'might']),
      q('c-a2-3', 'vocabulary', "I'm ___ because I didn't sleep last night.", ['tired', 'bored', 'angry', 'hungry']),
      q('c-a2-4', 'vocabulary', 'Please ___ off your phone during the film.', ['turn', 'take', 'make', 'put']),
      q('c-a2-5', 'reading', 'Which sentence is true?', [
        'The shoe sale ends after this weekend.',
        'Bags are 30% off.',
        'The bag sale is this weekend only.',
        'Shoes are 20% off.',
      ], {
        passage: 'SALE! All shoes 30% off this weekend only. Bags 20% off until the end of the month.',
      }),
      q('c-a2-6', 'listening', 'How many people is the table for?', ['four', 'seven', 'three', 'two'], {
        audio: 'Can I book a table for four people at seven thirty on Friday, please?',
      }),
    ],
  },
  {
    level: 'B1',
    questions: [
      q('c-b1-1', 'grammar', 'She asked me where I ___.', ['lived', 'do live', 'live did', 'did live']),
      q('c-b1-2', 'grammar', "You ___ smoke here; it's forbidden.", ["mustn't", "don't have to", "needn't", 'could']),
      q('c-b1-3', 'vocabulary', 'Our flight was ___ because of the storm.', ['cancelled', 'missed', 'lost', 'refused']),
      q('c-b1-4', 'vocabulary', "He's very ___; he always arrives on time.", ['punctual', 'patient', 'polite', 'popular']),
      q('c-b1-5', 'reading', 'What does the shop want the customer to do?', [
        'Choose between waiting and a refund.',
        'Pay more money.',
        'Order a different colour.',
        'Return the jacket.',
      ], {
        passage:
          'Dear customer, thank you for your order. Unfortunately, the blue jacket you ordered is out of stock. We can send it in two weeks or give you a full refund. Please reply to let us know.',
      }),
      q('c-b1-6', 'listening', 'Where should the listener park?', [
        'behind the building',
        'in front of the building',
        'in the visitor car park',
        'on the street',
      ], {
        audio:
          "If you're coming by car, it's best to park behind the building, because the front car park is reserved for visitors.",
      }),
    ],
  },
  {
    level: 'B2',
    questions: [
      q('c-b2-1', 'grammar', 'The building, ___ was designed in 1920, is now a museum.', ['which', 'that', 'who', 'where']),
      q('c-b2-2', 'grammar', "You'd better ___ now or you'll miss the train.", ['leave', 'to leave', 'leaving', 'left']),
      q('c-b2-3', 'vocabulary', 'The new manager quickly ___ the trust of her team.', ['gained', 'raised', 'made', 'took']),
      q('c-b2-4', 'vocabulary', "The figures don't ___ up — there must be a mistake.", ['add', 'sum', 'count', 'make']),
      q('c-b2-5', 'reading', 'What did the study find?', [
        'Short breaks improved productivity.',
        'Working without breaks is best.',
        'Most people believe breaks are useful.',
        'Long breaks work better than short ones.',
      ], {
        passage:
          'Contrary to popular belief, the study found that employees who took regular short breaks were more productive than those who worked continuously for long periods.',
      }),
      q('c-b2-6', 'listening', "Why hasn't the report been finished?", [
        'The system crashed.',
        'The speaker was ill.',
        'The deadline changed.',
        'The speaker forgot.',
      ], {
        audio: "I'd have finished the report by now if the system hadn't crashed twice this morning.",
      }),
    ],
  },
  {
    level: 'C1',
    questions: [
      q('c-c1-1', 'grammar', '___ the weather, the event went ahead as planned.', ['Despite', 'Although', 'However', 'Even though']),
      q('c-c1-2', 'grammar', "She must ___ the email; otherwise she'd have replied.", [
        'not have received',
        'not receive',
        'have not receiving',
        'not to have received',
      ]),
      q('c-c1-3', 'vocabulary', "The CEO's resignation ___ a wave of speculation.", ['sparked', 'sparkled', 'ignited up', 'struck']),
      q('c-c1-4', 'vocabulary', 'We need to ___ the pros and cons before deciding.', ['weigh up', 'weigh down', 'pull up', 'carry out']),
      q('c-c1-5', 'reading', 'What does the writer imply?', [
        'Personal reasons influenced the decision.',
        'The move was purely about cost.',
        'The founder opposed the move.',
        'Costs rose after the move.',
      ], {
        passage:
          "The company's decision to relocate, though framed as a cost-saving measure, appears to have been driven at least as much by the founder's personal preference for the coastal city.",
      }),
      q('c-c1-6', 'listening', 'What does the speaker think?', [
        'Good parts of the scheme would be lost.',
        'The scheme should be scrapped.',
        'The other person is completely right.',
        'The scheme is too expensive.',
      ], {
        audio:
          "I take your point, but I think we're in danger of throwing the baby out with the bathwater if we scrap the whole scheme.",
      }),
    ],
  },
  {
    level: 'C2',
    questions: [
      q('c-c2-1', 'grammar', 'So ___ the response that the organisers had to add extra dates.', [
        'overwhelming was',
        'was overwhelming',
        'overwhelming it was',
        'it was overwhelming',
      ]),
      q('c-c2-2', 'grammar', 'Were the proposal ___, it would transform the industry.', [
        'to be adopted',
        'adopted being',
        'adopting',
        'to adopt',
      ]),
      q('c-c2-3', 'vocabulary', "The minister's statement did little to ___ public fears.", ['allay', 'alloy', 'allure', 'allege']),
      q('c-c2-4', 'vocabulary', 'His account of events was ___ with inconsistencies.', ['riddled', 'rid', 'riddance', 'ridded']),
      q('c-c2-5', 'reading', 'What criticism does the writer make?', [
        'The success measures may be biased.',
        'The report is too long.',
        'The programme was cancelled.',
        'The metrics were set independently.',
      ], {
        passage:
          'What the report conspicuously omits is any acknowledgement that the very metrics used to declare the programme a success were devised by those running it.',
      }),
      q('c-c2-6', 'listening', 'What is the speaker really doing?', [
        'Criticising indirectly.',
        'Praising the department.',
        'Refusing to give advice.',
        'Asking for a bigger budget.',
      ], {
        audio:
          'Far be it from me to tell you how to run your department, but you might want to have a word with whoever approved this budget.',
      }),
    ],
  },
]

/** All questions per level, from every authoring set. */
export const POOLS: Record<CefrLevel, Question[]> = Object.fromEntries(
  CEFR_LEVELS.map((level) => [
    level,
    [SET_A, SET_B, SET_C].flatMap((set) => set.find((b) => b.level === level)!.questions),
  ]),
) as Record<CefrLevel, Question[]>

/** Questions drawn per level in one attempt, by kind. */
const BLUEPRINT: { kind: 'language' | 'reading' | 'listening'; count: number }[] = [
  { kind: 'language', count: 4 },
  { kind: 'reading', count: 1 },
  { kind: 'listening', count: 1 },
]

function kindOf(qn: Question): 'language' | 'reading' | 'listening' {
  return qn.skill === 'grammar' || qn.skill === 'vocabulary' ? 'language' : qn.skill
}

function shuffled<T>(items: T[], rng: () => number): T[] {
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

/**
 * Draws a fresh test form: 6 questions per level following BLUEPRINT.
 * Questions in `seen` (from earlier attempts) are avoided while unseen ones
 * remain, so the post-test never repeats pre-test questions.
 */
export function drawForm(seen: Iterable<string> = [], rng: () => number = Math.random): LevelBlock[] {
  const seenSet = new Set(seen)
  return CEFR_LEVELS.map((level) => {
    const questions = BLUEPRINT.flatMap(({ kind, count }) => {
      const candidates = shuffled(
        POOLS[level].filter((qn) => kindOf(qn) === kind),
        rng,
      )
      const fresh = candidates.filter((qn) => !seenSet.has(qn.id))
      const reused = candidates.filter((qn) => seenSet.has(qn.id))
      return [...fresh, ...reused].slice(0, count)
    })
    return { level, questions: shuffled(questions, rng) }
  })
}
