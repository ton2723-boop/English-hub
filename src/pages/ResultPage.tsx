import { Link, Navigate, useParams } from 'react-router-dom'
import { LEVEL_INFO } from '../data/levels'
import { useT } from '../lib/i18n'
import { studyLevel } from '../lib/level'
import { useStore } from '../lib/store'
import type { Skill, TestKind } from '../types'

export function ResultPage() {
  const params = useParams()
  const kind: TestKind = params.kind === 'post' ? 'post' : 'pre'
  const { t, tr, skill } = useT()
  const { tests } = useStore()
  const result = tests[kind]
  if (!result) return <Navigate to={`/test/${kind}`} replace />

  const info = LEVEL_INFO[result.level]
  const next = studyLevel(result.level)

  return (
    <section className="narrow">
      <h1>
        {t('resultTitle')} — {kind === 'pre' ? t('preTest') : t('postTest')}
      </h1>
      <div className="card result-hero">
        <p className="muted">{t('yourLevel')}</p>
        <p className="result-level">{result.level}</p>
        <p className="result-name">{tr(info.name)}</p>
        <p>{tr(info.description)}</p>
        <p className="muted">
          {t('score')}: {result.score} / {result.maxScore} · {t('equivalent')}: IELTS {info.ielts} · TOEIC {info.toeic}
        </p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>{t('byLevel')}</h3>
          {result.byLevel.map((s) => {
            const reached = s.answered > 0
            return (
              <div key={s.level} className="bar-row">
                <span className="bar-label">{s.level}</span>
                <div className="bar">
                  <div style={{ width: `${(s.correct / s.total) * 100}%` }} />
                </div>
                <span className="bar-value">{reached ? `${s.correct}/${s.total}` : t('notReached')}</span>
              </div>
            )
          })}
        </div>
        <div className="card">
          <h3>{t('bySkill')}</h3>
          {(Object.keys(result.bySkill) as Skill[]).map((k) => {
            const s = result.bySkill[k]
            const pct = s.total ? s.correct / s.total : 0
            return (
              <div key={k} className="bar-row">
                <span className="bar-label">{skill(k)}</span>
                <div className="bar">
                  <div style={{ width: `${pct * 100}%` }} />
                </div>
                <span className="bar-value">
                  {s.correct}/{s.total}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="card">
        <h3>{t('recommended')}</h3>
        <div className="actions">
          <Link className="btn" to={`/courses#${next}`}>
            {t('goToLevel')} {next} →
          </Link>
          <Link className="btn btn-secondary" to="/progress">
            {t('viewProgress')}
          </Link>
        </div>
      </div>
    </section>
  )
}

