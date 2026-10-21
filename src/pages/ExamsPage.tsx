import { Link, useParams } from 'react-router-dom'
import { PracticeQuiz } from '../components/PracticeQuiz'
import { EXAM_SECTIONS, findExamSection } from '../data/exams'
import { LEVEL_INFO } from '../data/levels'
import { useT } from '../lib/i18n'
import { useStore } from '../lib/store'
import { CEFR_LEVELS } from '../types'
import { NotFound } from './NotFound'

export function ExamsPage() {
  const { t, tr } = useT()
  const { practice } = useStore()
  return (
    <section>
      <h1>{t('examsTitle')}</h1>
      <p className="lead">{t('examsText')}</p>

      {(['IELTS', 'TOEIC'] as const).map((exam) => (
        <div key={exam} className="level-section">
          <div className="level-head">
            <span className="level-pill">{exam}</span>
          </div>
          <div className="unit-grid">
            {EXAM_SECTIONS.filter((s) => s.exam === exam).map((s) => (
              <Link key={s.id} to={`/exams/${s.id}`} className="card unit-card">
                <h3>{tr(s.title)}</h3>
                <p className="muted small">{tr(s.intro).slice(0, 90)}…</p>
                {practice[s.id] !== undefined && (
                  <span className="score-chip">✓ {Math.round(practice[s.id] * 100)}%</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      ))}

      <div className="card">
        <h3>CEFR · IELTS · TOEIC</h3>
        <table className="map-table">
          <thead>
            <tr>
              <th>CEFR</th>
              <th>IELTS</th>
              <th>TOEIC (L+R)</th>
            </tr>
          </thead>
          <tbody>
            {CEFR_LEVELS.map((l) => (
              <tr key={l}>
                <td>
                  <strong>{l}</strong> {tr(LEVEL_INFO[l].name)}
                </td>
                <td>{LEVEL_INFO[l].ielts}</td>
                <td>{LEVEL_INFO[l].toeic}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted small">* {t('equivalent')}</p>
      </div>
    </section>
  )
}

export function ExamSectionPage() {
  const { id = '' } = useParams()
  const { t, tr } = useT()
  const { practice, savePractice } = useStore()
  const section = findExamSection(id)
  if (!section) return <NotFound />

  return (
    <article className="narrow">
      <Link to="/exams" className="back">
        {t('backToExams')}
      </Link>
      <div className="level-head">
        <span className="level-pill">{section.exam}</span>
        <h1>{tr(section.title)}</h1>
      </div>
      <p>{tr(section.intro)}</p>

      <section className="card">
        <h2>💡 {t('tips')}</h2>
        <ul className="checklist">
          {section.tips.map((tip) => (
            <li key={tip.en}>{tr(tip)}</li>
          ))}
        </ul>
      </section>

      {section.prompts && (
        <section className="card">
          <h2>🗣️ {t('prompts')}</h2>
          <p className="muted">{t('promptsHint')}</p>
          <ol lang="en">
            {section.prompts.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ol>
        </section>
      )}

      <h2>🧩 {t('practice')}</h2>
      <PracticeQuiz
        key={section.id}
        questions={section.practice}
        best={practice[section.id]}
        onFinish={(f) => savePractice(section.id, f)}
      />
    </article>
  )
}
