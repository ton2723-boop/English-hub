import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { unitsForLevel } from '../data/courses'
import { LEVEL_INFO } from '../data/levels'
import { ThemeTag } from '../components/ThemeTag'
import { useT } from '../lib/i18n'
import { currentLevel, studyLevel, UNIT_PASS } from '../lib/level'
import { useStore } from '../lib/store'
import { CEFR_LEVELS } from '../types'

export function CoursesPage() {
  const { t, tr } = useT()
  const { tests, practice } = useStore()
  const placed = currentLevel(tests)
  const target = placed ? studyLevel(placed) : undefined
  const { hash } = useLocation()

  // Scroll to the level in the URL hash (e.g. /courses#B1).
  useEffect(() => {
    if (hash) document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

  return (
    <section>
      <h1>{t('coursesTitle')}</h1>
      <p className="lead">{t('coursesText')}</p>
      {CEFR_LEVELS.map((level) => {
        const units = unitsForLevel(level)
        return (
          <div key={level} id={level} className={`level-section ${level === target ? 'target' : ''}`}>
            <div className="level-head">
              <span className="level-pill">{level}</span>
              <h2>{tr(LEVEL_INFO[level].name)}</h2>
              {level === target && <span className="badge">{t('recommended')}</span>}
            </div>
            <p className="muted">{tr(LEVEL_INFO[level].description)}</p>
            <div className="unit-grid">
              {units.map((u) => {
                const best = practice[u.id]
                return (
                  <Link key={u.id} to={`/unit/${u.id}`} className="card unit-card">
                    {u.theme && <ThemeTag theme={u.theme} />}
                    <h3>{tr(u.title)}</h3>
                    <p className="muted small">{u.grammar.title}</p>
                    {best !== undefined && (
                      <span className={`score-chip ${best >= UNIT_PASS ? '' : 'low'}`}>{Math.round(best * 100)}%</span>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>
        )
      })}
    </section>
  )
}
