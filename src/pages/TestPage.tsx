import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { QuestionView } from '../components/QuestionView'
import { drawForm } from '../data/placement'
import { useT } from '../lib/i18n'
import { scoreTest, shouldStopAfter, type Answers } from '../lib/scoring'
import { useStore } from '../lib/store'
import { postTestGate } from '../lib/level'
import type { LevelBlock, TestKind } from '../types'

/** "Not sure" is stored as -1 so it counts as seen-but-wrong. */
const NOT_SURE = -1

export function TestPage() {
  const params = useParams()
  const kind: TestKind = params.kind === 'post' ? 'post' : 'pre'
  return <PlacementTest key={kind} kind={kind} />
}

function PlacementTest({ kind }: { kind: TestKind }) {
  const { t, tr } = useT()
  const { tests, practice, saveTest } = useStore()
  const navigate = useNavigate()

  const [form, setForm] = useState<LevelBlock[]>()
  const [blockIdx, setBlockIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number>()
  const [answers, setAnswers] = useState<Answers>({})

  const title = kind === 'pre' ? t('preTest') : t('postTest')
  const previous = tests[kind]
  const gate = postTestGate(tests, practice)
  const locked = kind === 'post' && !gate.unlocked

  function start() {
    // Avoid questions from earlier attempts so the post-test is a fresh form.
    const seen = [...(tests.pre?.questionIds ?? []), ...(tests.post?.questionIds ?? [])]
    setForm(drawForm(seen))
  }

  if (!form) {
    return (
      <section className="narrow">
        <h1>{title}</h1>
        <p>{t('testIntro')}</p>
        {kind === 'post' && <p className="muted">{t('postIntroNote')}</p>}
        <p className="muted">🎧 {t('needsSound')}</p>
        {kind === 'post' && !tests.pre && (
          <p className="notice">
            {t('noPre')} <Link to="/test/pre">{t('preTest')} →</Link>
          </p>
        )}
        {locked && gate.level && (
          <div className="notice">
            <p>
              🔒 {t('postLocked')} {gate.level}
            </p>
            <ul className="gate-list">
              {gate.units.map(({ unit, best, passed }) => (
                <li key={unit.id} className={passed ? 'passed' : ''}>
                  {passed ? '✅' : '⬜'} <Link to={`/unit/${unit.id}`}>{tr(unit.title)}</Link>
                  <span className="muted small"> {best === undefined ? '—' : `${Math.round(best * 100)}%`}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="actions">
          <button type="button" className="btn btn-lg" onClick={start} disabled={locked}>
            {previous ? t('retake') : t('begin')}
          </button>
          {previous && (
            <Link className="btn btn-secondary btn-lg" to={`/result/${kind}`}>
              {t('resultTitle')}
            </Link>
          )}
        </div>
      </section>
    )
  }

  const block = form[blockIdx]
  const question = block.questions[qIdx]
  const answeredCount = form.slice(0, blockIdx).reduce((n, b) => n + b.questions.length, 0) + qIdx
  const totalCount = form.reduce((n, b) => n + b.questions.length, 0)

  const activeForm = form

  function submit(choice: number) {
    const next = { ...answers, [question.id]: choice }
    setAnswers(next)
    setSelected(undefined)

    if (qIdx + 1 < block.questions.length) {
      setQIdx(qIdx + 1)
      return
    }
    const finished = blockIdx + 1 >= activeForm.length || shouldStopAfter(block, next)
    if (finished) {
      saveTest(scoreTest(kind, activeForm, next))
      navigate(`/result/${kind}`)
      return
    }
    setBlockIdx(blockIdx + 1)
    setQIdx(0)
  }

  return (
    <section className="narrow">
      <div className="test-head">
        <h2>{title}</h2>
        <span className="level-pill">
          {t('level')} {block.level}
        </span>
      </div>
      <div className="progress" aria-hidden>
        <div style={{ width: `${(answeredCount / totalCount) * 100}%` }} />
      </div>
      <div className="level-steps">
        {form.map((b, i) => (
          <span key={b.level} className={i < blockIdx ? 'done' : i === blockIdx ? 'current' : ''}>
            {b.level}
          </span>
        ))}
      </div>
      <div className="card">
        <p className="muted small">
          {t('question')} {qIdx + 1} {t('of')} {block.questions.length}
        </p>
        <QuestionView key={question.id} question={question} selected={selected} onSelect={setSelected} />
        <div className="actions">
          <button type="button" className="btn btn-secondary" onClick={() => submit(NOT_SURE)}>
            {t('notSure')}
          </button>
          <button type="button" className="btn" disabled={selected === undefined} onClick={() => submit(selected!)}>
            {t('next')}
          </button>
        </div>
      </div>
    </section>
  )
}
