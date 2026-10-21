import { Link } from 'react-router-dom'
import { LEVEL_INFO } from '../data/levels'
import { badges } from '../lib/badges'
import { CATEGORIES, categoryProgress, nextUnit, unitCategory } from '../lib/categories'
import { useAuth } from '../lib/auth'
import { useT } from '../lib/i18n'
import { currentLevel, studyLevel, UNIT_PASS } from '../lib/level'
import { useStore } from '../lib/store'
import { currentStreak } from '../lib/streak'
import { CEFR_LEVELS } from '../types'

export function HomePage() {
  const { t, tr } = useT()
  const { session } = useAuth()
  const store = useStore()
  const { tests, practice, focus, days } = store
  const level = currentLevel(tests)
  const target = level ? studyLevel(level) : undefined
  const next = target ? nextUnit(target, focus, practice, UNIT_PASS) : undefined
  const streak = currentStreak(days)
  const earned = badges(store).filter((b) => b.earned)

  return (
    <>
      <section className="hero-card">
        <div className="hero-text">
          <p className="hero-hello">
            {t('hello')}, {session?.user.displayName} 👋
          </p>
          <h1>{t('heroTitle')}</h1>
          <p className="lead">{t('heroText')}</p>
          <div className="actions">
            {!level ? (
              <Link className="btn btn-lg btn-light" to="/test/pre">
                🎯 {t('startPreTest')} →
              </Link>
            ) : next ? (
              <Link className="btn btn-lg btn-light" to={`/unit/${next.id}`}>
                ▶ {t('continueLearning')}: {tr(next.title)}
              </Link>
            ) : (
              <Link className="btn btn-lg btn-light" to="/test/post">
                🏁 {t('takePost')} →
              </Link>
            )}
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-icon">🔥</span>
            <strong>{streak}</strong>
            <span>{t('dayStreak')}</span>
          </div>
          <div className="stat">
            <span className="stat-icon">🎓</span>
            <strong>{level ?? '—'}</strong>
            <span>{level ? tr(LEVEL_INFO[level].name) : t('noLevelYet')}</span>
          </div>
          <div className="stat">
            <span className="stat-icon">🏆</span>
            <strong>{earned.length}</strong>
            <span>{t('badgesEarned')}</span>
          </div>
        </div>
      </section>

      <div className="cefr-scale" aria-hidden>
        {CEFR_LEVELS.map((l) => (
          <span key={l} className={l === level ? 'active' : l === target ? 'target' : ''}>
            {l}
          </span>
        ))}
      </div>

      {next && (
        <Link to={`/unit/${next.id}`} className={`card next-card cat-${unitCategory(next)}`}>
          <span className="next-icon">{CATEGORIES.find((c) => c.id === unitCategory(next))?.icon}</span>
          <span>
            <span className="muted small">
              {t('upNext')} · {next.level}
            </span>
            <strong className="next-title">{tr(next.title)}</strong>
          </span>
          <span className="next-go">→</span>
        </Link>
      )}

      <h2 className="section-title">{t('chooseCategory')}</h2>
      <section className="category-grid">
        {CATEGORIES.map((c) => {
          const prog = categoryProgress(c.id, practice, UNIT_PASS)
          return (
            <Link key={c.id} to={`/courses/${c.id}`} className={`category-card cat-${c.id}`}>
              <span className="category-icon">{c.icon}</span>
              <h3>{tr(c.title)}</h3>
              <p>{tr(c.blurb)}</p>
              <div className="mini-progress">
                <div style={{ width: `${(prog.passed / prog.total) * 100}%` }} />
              </div>
              <span className="small">
                {prog.passed}/{prog.total} {t('unitsPassedShort')}
                {focus === c.id && ` · ⭐ ${t('myCategory')}`}
              </span>
            </Link>
          )
        })}
      </section>

      <section className="quick-grid">
        <Link to="/vocab" className="card quick-card">
          <span className="quick-icon">🃏</span>
          <strong>{t('navVocab')}</strong>
          <span className="muted small">{t('quickVocab')}</span>
        </Link>
        <Link to="/exams" className="card quick-card">
          <span className="quick-icon">📝</span>
          <strong>{t('navExams')}</strong>
          <span className="muted small">IELTS · TOEIC</span>
        </Link>
        <Link to="/progress" className="card quick-card">
          <span className="quick-icon">📈</span>
          <strong>{t('navProgress')}</strong>
          <span className="muted small">{t('quickProgress')}</span>
        </Link>
      </section>
    </>
  )
}
