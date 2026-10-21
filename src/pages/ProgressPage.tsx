import { Link } from 'react-router-dom'
import { UNITS } from '../data/courses'
import { EXAM_SECTIONS } from '../data/exams'
import { useT } from '../lib/i18n'
import { useStore } from '../lib/store'
import { CEFR_LEVELS, type PlacementLevel, type Skill, type TestResult } from '../types'

const LEVEL_ORDER: PlacementLevel[] = ['Pre-A1', ...CEFR_LEVELS]

export function ProgressPage() {
  const { t, lang } = useT()
  const { tests, practice, reset } = useStore()
  const { pre, post } = tests

  const unitsDone = UNITS.filter((u) => practice[u.id] !== undefined).length
  const examsDone = EXAM_SECTIONS.filter((s) => practice[s.id] !== undefined).length
  const fmt = (iso: string) => new Date(iso).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-GB')

  return (
    <section>
      <h1>{t('progressTitle')}</h1>

      <div className="card">
        <h2>{t('beforeAfter')}</h2>
        {!pre ? (
          <p>
            {t('noPre')}{' '}
            <Link to="/test/pre" className="btn">
              {t('startPreTest')}
            </Link>
          </p>
        ) : (
          <>
            <div className="compare">
              <ResultTile label={t('preTest')} result={pre} date={fmt(pre.date)} />
              <div className="compare-arrow">→</div>
              {post ? (
                <ResultTile label={t('postTest')} result={post} date={fmt(post.date)} />
              ) : (
                <div className="tile empty">
                  <p className="muted">{t('noPost')}</p>
                  <Link to="/test/post" className="btn">
                    {t('takePost')}
                  </Link>
                </div>
              )}
            </div>
            {post && <Improvement pre={pre} post={post} />}
          </>
        )}
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>{t('unitsDone')}</h3>
          <p className="big-score">
            {unitsDone} / {UNITS.length}
          </p>
          <div className="progress">
            <div style={{ width: `${(unitsDone / UNITS.length) * 100}%` }} />
          </div>
        </div>
        <div className="card">
          <h3>{t('examDone')}</h3>
          <p className="big-score">
            {examsDone} / {EXAM_SECTIONS.length}
          </p>
          <div className="progress">
            <div style={{ width: `${(examsDone / EXAM_SECTIONS.length) * 100}%` }} />
          </div>
        </div>
      </div>

      <p className="muted small">
        {t('storageNote')}{' '}
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            if (window.confirm(t('resetConfirm'))) reset()
          }}
        >
          {t('resetProgress')}
        </button>
      </p>
    </section>
  )
}

function ResultTile({ label, result, date }: { label: string; result: TestResult; date: string }) {
  const { t } = useT()
  return (
    <div className="tile">
      <p className="muted">{label}</p>
      <p className="result-level">{result.level}</p>
      <p>
        {t('score')} {result.score}/{result.maxScore}
      </p>
      <p className="muted small">
        {t('date')}: {date}
      </p>
    </div>
  )
}

function Improvement({ pre, post }: { pre: TestResult; post: TestResult }) {
  const { t, skill } = useT()
  const delta = post.score - pre.score
  const levelDelta = LEVEL_ORDER.indexOf(post.level) - LEVEL_ORDER.indexOf(pre.level)
  const skills = Object.keys(pre.bySkill) as Skill[]
  const pct = (s: { correct: number; total: number }) => (s.total ? Math.round((s.correct / s.total) * 100) : 0)

  return (
    <div className="improvement">
      <p className={`delta ${delta >= 0 ? 'up' : 'down'}`}>
        {t('improvement')}: {delta >= 0 ? '+' : ''}
        {delta} {t('points')}
        {' · '}
        {levelDelta > 0 ? `${t('levelUp')} ${pre.level} → ${post.level} 🎉` : t('sameLevel')}
      </p>
      <table className="map-table">
        <thead>
          <tr>
            <th />
            <th>{t('preTest')}</th>
            <th>{t('postTest')}</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((k) => (
            <tr key={k}>
              <td>{skill(k)}</td>
              <td>{pct(pre.bySkill[k])}%</td>
              <td>{pct(post.bySkill[k])}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
