import { useCallback, useEffect, useState } from 'react'
import { UNITS } from '../data/courses'
import { ApiError, callApi } from '../lib/api'
import { useAuth } from '../lib/auth'
import { ALL_CARDS } from '../lib/flashcards'
import { categoryInfo, isCategory } from '../lib/categories'
import { useT } from '../lib/i18n'
import { NotFound } from './NotFound'

interface AdminUser {
  userId: string
  username: string
  displayName: string
  role: 'owner' | 'learner'
  active: boolean
  createdAt: string
  lastLoginAt: string
  progressUpdatedAt: string
  summary: {
    preLevel: string
    preScore: string
    postLevel: string
    postScore: string
    unitsPassed: number
    wordsMastered: number
    focus: string
    studyDays: number
  }
}

export function AdminPage() {
  const { t, tr, lang } = useT()
  const { session, logout } = useAuth()
  const [users, setUsers] = useState<AdminUser[]>()
  const [error, setError] = useState('')
  const [query, setQuery] = useState('')
  const [busyId, setBusyId] = useState('')
  const token = session?.token ?? ''
  const isOwner = session?.user.role === 'owner' && !session.demo

  const fail = useCallback(
    (e: unknown) => {
      if (e instanceof ApiError && e.authError) return logout(e.message)
      setError(e instanceof Error ? e.message : String(e))
    },
    [logout],
  )

  const load = useCallback(() => {
    if (!isOwner) return
    setError('')
    callApi<{ users: AdminUser[] }>('adminListUsers', { token })
      .then((r) => setUsers(r.users))
      .catch(fail)
  }, [token, fail, isOwner])

  useEffect(load, [load])

  if (!session || !isOwner) return <NotFound />

  const fmt = (iso: string) =>
    iso ? new Date(iso).toLocaleString(lang === 'th' ? 'th-TH' : 'en-GB', { dateStyle: 'medium', timeStyle: 'short' }) : '—'
  const lastActive = (u: AdminUser) => [u.progressUpdatedAt, u.lastLoginAt].filter(Boolean).sort().pop() ?? ''

  async function setActive(u: AdminUser, active: boolean) {
    if (!active && !window.confirm(`${t('confirmDisable')}\n\n${u.displayName} (${u.username})`)) return
    setBusyId(u.userId)
    try {
      await callApi('adminSetActive', { token, userId: u.userId, active })
      load()
    } catch (e) {
      fail(e)
    } finally {
      setBusyId('')
    }
  }

  async function resetPassword(u: AdminUser) {
    const pw = window.prompt(`${t('resetPasswordPrompt')} ${u.displayName} (${u.username}) — ${t('passwordHint')}`)
    if (!pw) return
    setBusyId(u.userId)
    try {
      await callApi('adminResetPassword', { token, userId: u.userId, newPassword: pw })
      window.alert(`${t('resetPasswordDone')}\n\n${pw}`)
    } catch (e) {
      fail(e)
    } finally {
      setBusyId('')
    }
  }

  const q = query.trim().toLowerCase()
  const shown = (users ?? [])
    .filter((u) => !q || u.username.includes(q) || u.displayName.toLowerCase().includes(q))
    .sort((a, b) => lastActive(b).localeCompare(lastActive(a)))

  return (
    <section>
      <h1>{t('adminTitle')}</h1>
      <p className="lead">{t('adminIntro')}</p>
      <div className="admin-tools">
        <input className="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('search')} />
        <span className="muted">
          {t('learners')}: <strong>{users?.length ?? '…'}</strong>
        </span>
        <button type="button" className="btn btn-secondary" onClick={load}>
          ↻ {t('refresh')}
        </button>
      </div>
      {error && <p className="feedback bad">{error}</p>}
      {!users && !error && <p className="muted">{t('syncLoading')}</p>}
      {users && shown.length === 0 && <p className="muted">{t('noUsers')}</p>}

      <div className="admin-list">
        {shown.map((u) => {
          const s = u.summary
          const me = u.userId === session.user.userId
          return (
            <div key={u.userId} className={`card admin-row ${u.active ? '' : 'disabled'}`}>
              <div className="admin-who">
                <strong>{u.displayName}</strong> {me && <span className="muted small">({t('you')})</span>}
                <div className="muted small">
                  {u.username} · {u.role === 'owner' ? t('roleOwner') : t('roleLearner')}
                </div>
              </div>
              <dl className="admin-stats">
                <div>
                  <dt>{t('colPre')}</dt>
                  <dd>{s.preLevel ? `${s.preLevel} (${s.preScore})` : '—'}</dd>
                </div>
                <div>
                  <dt>{t('colPost')}</dt>
                  <dd>{s.postLevel ? `${s.postLevel} (${s.postScore})` : '—'}</dd>
                </div>
                <div>
                  <dt>{t('colUnits')}</dt>
                  <dd>
                    {s.unitsPassed}/{UNITS.length}
                  </dd>
                </div>
                <div>
                  <dt>{t('colWords')}</dt>
                  <dd>
                    {s.wordsMastered}/{ALL_CARDS.length}
                  </dd>
                </div>
                <div>
                  <dt>{t('myCategory')}</dt>
                  <dd>{isCategory(s.focus) ? `${categoryInfo(s.focus).icon} ${tr(categoryInfo(s.focus).title)}` : '—'}</dd>
                </div>
                <div>
                  <dt>📅 {t('streakTitle')}</dt>
                  <dd>
                    {s.studyDays ?? 0} {t('days')}
                  </dd>
                </div>
                <div>
                  <dt>{t('colLastActive')}</dt>
                  <dd>{fmt(lastActive(u))}</dd>
                </div>
                <div>
                  <dt>{t('colStatus')}</dt>
                  <dd>{u.active ? `✅ ${t('active')}` : `⛔ ${t('inactive')}`}</dd>
                </div>
              </dl>
              {!me && (
                <div className="actions">
                  <button type="button" className="btn btn-secondary" disabled={busyId === u.userId} onClick={() => resetPassword(u)}>
                    🔑 {t('resetPassword')}
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    disabled={busyId === u.userId}
                    onClick={() => setActive(u, !u.active)}
                  >
                    {u.active ? `⛔ ${t('disable')}` : `✅ ${t('enable')}`}
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
