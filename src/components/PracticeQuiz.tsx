import { useState } from 'react'
import type { Question } from '../types'
import { useT } from '../lib/i18n'
import { QuestionView } from './QuestionView'

interface Props {
  questions: Question[]
  best?: number
  onFinish: (fraction: number) => void
}

/** One question at a time with instant feedback and explanations. */
export function PracticeQuiz({ questions, best, onFinish }: Props) {
  const { t, tr } = useT()
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<number>()
  const [checked, setChecked] = useState(false)
  const [correct, setCorrect] = useState(0)
  const [done, setDone] = useState(false)

  const current = questions[index]

  function check() {
    if (selected === undefined) return
    setChecked(true)
    if (selected === current.answer) setCorrect((c) => c + 1)
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1)
      setSelected(undefined)
      setChecked(false)
    } else {
      setDone(true)
      onFinish(correct / questions.length)
    }
  }

  function restart() {
    setIndex(0)
    setSelected(undefined)
    setChecked(false)
    setCorrect(0)
    setDone(false)
  }

  if (done) {
    return (
      <div className="card center">
        <h3>{t('practiceDone')}</h3>
        <p className="big-score">
          {correct} / {questions.length}
        </p>
        {best !== undefined && (
          <p className="muted">
            {t('best')}: {Math.round(Math.max(best, correct / questions.length) * 100)}%
          </p>
        )}
        <button type="button" className="btn" onClick={restart}>
          {t('tryAgain')}
        </button>
      </div>
    )
  }

  const isRight = selected === current.answer
  return (
    <div className="card">
      <p className="muted small">
        {t('question')} {index + 1} {t('of')} {questions.length}
      </p>
      <QuestionView
        question={current}
        selected={selected}
        onSelect={setSelected}
        reveal={checked}
        allowTranscript
      />
      {checked && (
        <div className={`feedback ${isRight ? 'ok' : 'bad'}`} role="status">
          <strong>{isRight ? t('correct') : t('incorrect')}</strong>
          {!isRight && (
            <span lang="en">
              {' '}
              {t('answerIs')}: {current.options[current.answer]}
            </span>
          )}
          {current.explain && <p>{tr(current.explain)}</p>}
        </div>
      )}
      <div className="actions">
        {checked ? (
          <button type="button" className="btn" onClick={next}>
            {index + 1 < questions.length ? t('next') : t('finish')}
          </button>
        ) : (
          <button type="button" className="btn" onClick={check} disabled={selected === undefined}>
            {t('check')}
          </button>
        )}
      </div>
    </div>
  )
}
