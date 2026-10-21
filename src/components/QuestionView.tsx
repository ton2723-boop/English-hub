import type { Question } from '../types'
import { useT } from '../lib/i18n'
import { AudioButton } from './AudioButton'

interface Props {
  question: Question
  selected: number | undefined
  onSelect: (index: number) => void
  /** After checking: highlight the right answer and lock the options. */
  reveal?: boolean
  /** Practice mode lets learners read the transcript of listening items. */
  allowTranscript?: boolean
}

const LETTERS = 'ABCDEF'

export function QuestionView({ question, selected, onSelect, reveal = false, allowTranscript = false }: Props) {
  const { skill } = useT()
  return (
    <div className="question">
      <span className={`tag tag-${question.skill}`}>{skill(question.skill)}</span>
      {question.passage && <blockquote className="passage">{question.passage}</blockquote>}
      {question.audio && <AudioButton text={question.audio} allowTranscript={allowTranscript} />}
      <p className="prompt" lang="en">
        {question.prompt}
      </p>
      <div className="options" role="radiogroup">
        {question.options.map((opt, i) => {
          let cls = 'option'
          if (selected === i) cls += ' selected'
          if (reveal && i === question.answer) cls += ' right'
          if (reveal && selected === i && i !== question.answer) cls += ' wrong'
          return (
            <button
              key={opt}
              type="button"
              role="radio"
              aria-checked={selected === i}
              className={cls}
              disabled={reveal}
              onClick={() => onSelect(i)}
              lang="en"
            >
              <span className="letter">{LETTERS[i]}</span>
              {opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
