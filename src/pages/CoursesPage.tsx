import { useEffect } from 'react'
import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
import { ThemeTag } from '../components/ThemeTag'
import { LEVEL_INFO } from '../data/levels'
import { CATEGORIES, categoryInfo, categoryProgress, isCategory, unitsInCategory } from '../lib/categories'
import { useT } from '../lib/i18n'
import { currentLevel, studyLevel, UNIT_PASS } from '../lib/level'
import { useStore } from '../lib/store'
import { CEFR_LEVELS, type Unit } from '../types'

/** /courses — pick a category. Old links like /courses#B1 go to the learner's category. */
export function CoursesPage() {
  const { t, tr } = useT()
  const { practice, focus } = useStore()
  const { hash } = useLocation()
  if (hash) return <Navigate to={`/courses/${focus ?? 'core'}${hash}`} replace />

  return (
    <section>
      <h1>{t('coursesTitle')}</h1>
      <p className="lead">{t('chooseCategory')}</p>
      <div className="category-grid">
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
      </div>
    </section>
  )
}

/** /courses/:category — that category's units, level by level. */
export function CategoryPage() {
  const { category } = useParams()
  const { t, tr } = useT()
  const { tests, practice, focus, setFocus } = useStore()
  const { hash } = useLocation()
  const placed = currentLevel(tests)
  const target = placed ? studyLevel(placed) : undefined

  // Scroll to the level in the URL hash (e.g. /courses/work#B1).
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  if (!isCategory(category)) return <Navigate to="/courses" replace />
  const info = categoryInfo(category)
  const prog = categoryProgress(category, practice, UNIT_PASS)
  const levels = CEFR_LEVELS.filter((l) => unitsInCategory(category, l).length > 0)

  return (
    <section>
      <Link to="/courses" className="back">
        {t('allCategories')}
      </Link>
      <header className={`category-hero cat-${category}`}>
        <span className="category-icon big">{info.icon}</span>
        <div>
          <h1>{tr(info.title)}</h1>
          <p>{tr(info.blurb)}</p>
          <div className="mini-progress light">
            <div style={{ width: `${(prog.passed / prog.total) * 100}%` }} />
          </div>
          <span className="small">
            {prog.passed}/{prog.total} {t('unitsPassedShort')}
          </span>
        </div>
        {category !== 'core' && (
          <div className="category-hero-action">
            {focus === category ? (
              <span className="pill-light">{t('isMyCategory')}</span>
            ) : (
              <button type="button" className="btn btn-light" onClick={() => setFocus(category)}>
                {t('setMyCategory')}
              </button>
            )}
          </div>
        )}
      </header>
      {category !== 'core' && <p className="muted small">{t('myCategoryHint')}</p>}

      <nav className="level-jump" aria-label="Levels">
        {levels.map((l) => (
          <Link key={l} to={`/courses/${category}#${l}`} className={l === target ? 'target' : ''}>
            {l}
          </Link>
        ))}
      </nav>

      {levels.map((level) => (
        <div key={level} id={level} className={`level-section ${level === target ? 'target' : ''}`}>
          <div className="level-head">
            <span className="level-pill">{level}</span>
            <h2>{tr(LEVEL_INFO[level].name)}</h2>
            {level === target && <span className="badge">{t('recommended')}</span>}
          </div>
          <div className="unit-grid">
            {unitsInCategory(category, level).map((u, i) => (
              <UnitCard key={u.id} unit={u} index={i + 1} best={practice[u.id]} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}

function UnitCard({ unit, index, best }: { unit: Unit; index: number; best?: number }) {
  const { tr } = useT()
  const passed = (best ?? 0) >= UNIT_PASS
  const cat = unit.theme ?? 'core'
  return (
    <Link to={`/unit/${unit.id}`} className={`card unit-card cat-${cat} ${passed ? 'passed' : ''}`}>
      <span className="unit-num">{passed ? '✓' : index}</span>
      {unit.audience && <ThemeTag theme={cat} audience={unit.audience} />}
      <h3>{tr(unit.title)}</h3>
      <p className="muted small">{unit.grammar.title}</p>
      {best !== undefined && (
        <span className={`score-chip ${passed ? '' : 'low'}`}>{Math.round(best * 100)}%</span>
      )}
    </Link>
  )
}
