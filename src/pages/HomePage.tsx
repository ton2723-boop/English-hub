import { Link } from 'react-router-dom'
import { useT } from '../lib/i18n'
import { currentLevel, studyLevel } from '../lib/level'
import { useStore } from '../lib/store'
import { CEFR_LEVELS } from '../types'

export function HomePage() {
  const { t } = useT()
  const { tests } = useStore()
  const level = currentLevel(tests)

  const steps = [
    { n: 1, title: t('step1'), text: t('step1Text'), to: '/test/pre' },
    { n: 2, title: t('step2'), text: t('step2Text'), to: '/courses' },
    { n: 3, title: t('step3'), text: t('step3Text'), to: '/exams' },
    { n: 4, title: t('step4'), text: t('step4Text'), to: '/test/post' },
  ]

  return (
    <>
      <section className="hero">
        <h1>{t('heroTitle')}</h1>
        <p className="lead">{t('heroText')}</p>
        <div className="actions">
          {level ? (
            <Link className="btn btn-lg" to={`/courses#${studyLevel(level)}`}>
              {t('continueLearning')} ({level}) →
            </Link>
          ) : (
            <Link className="btn btn-lg" to="/test/pre">
              {t('startPreTest')} →
            </Link>
          )}
        </div>
        <div className="cefr-scale" aria-hidden>
          {CEFR_LEVELS.map((l) => (
            <span key={l} className={l === level ? 'active' : ''}>
              {l}
            </span>
          ))}
        </div>
      </section>

      <section className="steps">
        {steps.map((s) => (
          <Link key={s.n} to={s.to} className="card step">
            <span className="step-n">{s.n}</span>
            <h3>{s.title}</h3>
            <p className="muted">{s.text}</p>
          </Link>
        ))}
      </section>
    </>
  )
}
