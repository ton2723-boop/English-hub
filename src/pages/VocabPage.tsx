import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useT } from '../lib/i18n'
import { ALL_CARDS, nextCard } from '../lib/flashcards'
import { speak, speechSupported } from '../lib/speech'
import { MASTERED_BOX, useStore } from '../lib/store'
import { CEFR_LEVELS, type CefrLevel } from '../types'

export function VocabPage() {
  const { t, tr } = useT()
  const { cards, rateCard } = useStore()
  const [level, setLevel] = useState<CefrLevel | 'all'>('all')
  const [flipped, setFlipped] = useState(false)
  const [lastKey, setLastKey] = useState<string>()

  const deck = level === 'all' ? ALL_CARDS : ALL_CARDS.filter((c) => c.level === level)
  const card = nextCard(deck, cards, lastKey)
  const mastered = deck.filter((c) => (cards[c.key] ?? 0) >= MASTERED_BOX).length
  const learning = deck.filter((c) => {
    const box = cards[c.key]
    return box !== undefined && box < MASTERED_BOX
  }).length

  function rate(known: boolean) {
    if (!card) return
    rateCard(card.key, known)
    setLastKey(card.key)
    setFlipped(false)
  }

  function chooseLevel(l: CefrLevel | 'all') {
    setLevel(l)
    setFlipped(false)
    setLastKey(undefined)
  }

  return (
    <section className="narrow">
      <h1>{t('vocabTitle')}</h1>
      <p className="lead">{t('vocabText')}</p>

      <div className="chips" role="group">
        {(['all', ...CEFR_LEVELS] as const).map((l) => (
          <button key={l} type="button" className={level === l ? 'chip active' : 'chip'} onClick={() => chooseLevel(l)}>
            {l === 'all' ? t('allLevels') : l}
          </button>
        ))}
      </div>

      <div className="deck-stats">
        <span>
          ✅ {t('mastered')} <strong>{mastered}</strong>
        </span>
        <span>
          🔁 {t('learning')} <strong>{learning}</strong>
        </span>
        <span>
          🆕 {t('newWords')} <strong>{deck.length - mastered - learning}</strong>
        </span>
      </div>
      <div className="progress">
        <div style={{ width: `${(mastered / deck.length) * 100}%` }} />
      </div>

      {card ? (
        <>
          <button
            type="button"
            className={`flashcard ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped((f) => !f)}
            aria-live="polite"
          >
            <span className="level-pill">{card.level}</span>
            <span className="fc-word" lang="en">
              {card.word}
            </span>
            {flipped ? (
              <>
                <span className="fc-th">{card.th}</span>
                <span className="fc-example" lang="en">
                  {card.example}
                </span>
              </>
            ) : (
              <span className="muted small">{t('tapToFlip')}</span>
            )}
          </button>
          <div className="actions center-actions">
            {speechSupported() && (
              <button type="button" className="btn btn-secondary" onClick={() => speak(`${card.word}. ${card.example}`)}>
                🔊 {t('listen')}
              </button>
            )}
            <button type="button" className="btn btn-secondary" onClick={() => rate(false)}>
              {t('againLater')}
            </button>
            <button type="button" className="btn" onClick={() => rate(true)}>
              {t('knowIt')}
            </button>
          </div>
          <p className="muted small center">
            {t('fromUnit')}: <Link to={`/unit/${card.unitId}`}>{tr(card.unitTitle)}</Link>
          </p>
        </>
      ) : (
        <div className="card center">
          <p className="big-score">{t('deckDone')}</p>
        </div>
      )}

      <details className="card">
        <summary>
          <strong>
            {t('wordList')} ({deck.length})
          </strong>
        </summary>
        <table className="vocab">
          <tbody>
            {deck.map((c) => (
              <tr key={c.key}>
                <td>
                  <strong lang="en">{c.word}</strong>
                  <div className="muted small" lang="en">
                    {c.example}
                  </div>
                </td>
                <td>{c.th}</td>
                <td className="right">
                  {(cards[c.key] ?? 0) >= MASTERED_BOX ? '✅' : ''} <span className="muted small">{c.level}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </details>
    </section>
  )
}
