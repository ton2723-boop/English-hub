import { useEffect, useState } from 'react'
import type { Question } from '../types'
import { useT } from '../lib/i18n'
import { questionSpeech, rateFor, setPrefs, speakable, useReadAloudPrefs } from '../lib/readAloud'
import { speak, speechSupported, stopSpeaking } from '../lib/speech'
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
  const { t, skill } = useT()
  const prefs = useReadAloudPrefs()
  const canSpeak = speechSupported()
  const [reading, setReading] = useState<'question' | 'passage' | null>(null)
  const [showText, setShowText] = useState(false)

  // Hidden text only in listening-practice mode, until the learner reveals it or checks the answer.
  const hideText = canSpeak && prefs.listenFirst && !showText && !reveal

  async function read(what: 'question' | 'passage') {
    setReading(what)
    const text = what === 'question' ? questionSpeech(question) : speakable(question.passage ?? '')
    await speak(text, rateFor(prefs))
    setReading(null)
  }

  // New question: reset, and read it aloud automatically if the learner asked for that.
  // Listening items play their own audio first, so they are not read automatically.
  useEffect(() => {
    setShowText(false)
    setReading(null)
    let timer: number | undefined
    if (canSpeak && prefs.auto && !question.audio) {
      timer = window.setTimeout(() => void read('question'), 350)
    }
    return () => {
      if (timer) window.clearTimeout(timer)
      stopSpeaking()
    }
    // Runs once per question on purpose.
  }, [question.id])

  return (
    <div className="question">
      <span className={`tag tag-${question.skill}`}>{skill(question.skill)}</span>
      {question.passage && <blockquote className="passage">{question.passage}</blockquote>}
      {question.audio && <AudioButton text={question.audio} allowTranscript={allowTranscript} />}

      {canSpeak && (
        <div className="read-aloud">
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={() => (reading ? (stopSpeaking(), setReading(null)) : void read('question'))}
          >
            {reading === 'question' ? t('readStop') : t('readQuestion')}
          </button>
          {question.passage && !question.audio && (
            <button
              type="button"
              className="btn btn-light btn-sm"
              onClick={() => (reading ? (stopSpeaking(), setReading(null)) : void read('passage'))}
            >
              {reading === 'passage' ? t('readStop') : t('readPassage')}
            </button>
          )}
          <div className="read-prefs">
            <label className="chip">
              <input type="checkbox" checked={prefs.auto} onChange={(e) => setPrefs({ auto: e.target.checked })} />
              {t('readAuto')}
            </label>
            <label className="chip">
              <input
                type="checkbox"
                checked={prefs.listenFirst}
                onChange={(e) => setPrefs({ listenFirst: e.target.checked })}
              />
              {t('listenFirst')}
            </label>
            <label className="chip">
              <input type="checkbox" checked={prefs.slow} onChange={(e) => setPrefs({ slow: e.target.checked })} />
              {t('readSlow')}
            </label>
          </div>
        </div>
      )}

      {hideText ? (
        <p className="prompt hidden-text">
          <span className="muted">{t('listenFirstHint')}</span>{' '}
          <button type="button" className="btn btn-link" onClick={() => setShowText(true)}>
            {t('showQuestionText')}
          </button>
        </p>
      ) : (
        <p className="prompt" lang="en">
          {question.prompt}
        </p>
      )}
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
              aria-label={hideText ? LETTERS[i] : undefined}
              className={cls}
              disabled={reveal}
              onClick={() => onSelect(i)}
              lang="en"
            >
              <span className="letter">{LETTERS[i]}</span>
              {hideText ? <span className="muted">{t('listenOption')}</span> : opt}
            </button>
          )
        })}
      </div>
    </div>
  )
}
