import { Link, useParams } from 'react-router-dom'
import { AudioButton } from '../components/AudioButton'
import { PracticeQuiz } from '../components/PracticeQuiz'
import { findUnit } from '../data/courses'
import { useT } from '../lib/i18n'
import { speak, speechSupported } from '../lib/speech'
import { useStore } from '../lib/store'
import { NotFound } from './NotFound'

export function UnitPage() {
  const { id = '' } = useParams()
  const { t, tr } = useT()
  const { practice, savePractice } = useStore()
  const unit = findUnit(id)
  if (!unit) return <NotFound />

  return (
    <article className="narrow">
      <Link to={`/courses#${unit.level}`} className="back">
        {t('backToCourses')}
      </Link>
      <div className="level-head">
        <span className="level-pill">{unit.level}</span>
        <h1>{tr(unit.title)}</h1>
      </div>

      <section className="card">
        <h2>🎯 {t('goals')}</h2>
        <ul className="checklist">
          {unit.canDo.map((c) => (
            <li key={c.en}>{tr(c)}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>📖 {t('vocabulary')}</h2>
        <table className="vocab">
          <tbody>
            {unit.vocab.map((v) => (
              <tr key={v.word}>
                <td>
                  <strong lang="en">{v.word}</strong>
                  <div className="muted small" lang="en">
                    {v.example}
                  </div>
                </td>
                <td>{v.th}</td>
                <td className="right">
                  <SpeakIcon text={`${v.word}. ${v.example}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="card">
        <h2>✏️ {t('grammar')}: <span lang="en">{unit.grammar.title}</span></h2>
        <p>{tr(unit.grammar.explain)}</p>
        <h4>{t('examples')}</h4>
        <ul className="examples" lang="en">
          {unit.grammar.examples.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </section>

      {unit.reading && (
        <section className="card">
          <h2>📰 {t('reading')}: <span lang="en">{unit.reading.title}</span></h2>
          <blockquote className="passage" lang="en">
            {unit.reading.text}
          </blockquote>
          <AudioButton text={unit.reading.text} />
        </section>
      )}

      <h2>🧩 {t('practice')}</h2>
      <PracticeQuiz key={unit.id} questions={unit.practice} best={practice[unit.id]} onFinish={(f) => savePractice(unit.id, f)} />
    </article>
  )
}

function SpeakIcon({ text }: { text: string }) {
  const { t } = useT()
  if (!speechSupported()) return null
  return (
    <button type="button" className="icon-btn" aria-label={t('listen')} title={t('listen')} onClick={() => speak(text)}>
      🔊
    </button>
  )
}
