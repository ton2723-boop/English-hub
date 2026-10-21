import { useState, type FormEvent } from 'react'
import { SyncBadge } from '../components/SyncBadge'
import { callApi } from '../lib/api'
import { useAuth } from '../lib/auth'
import { useT } from '../lib/i18n'

export function AccountPage() {
  const { t } = useT()
  const { session, logout } = useAuth()
  const [oldPassword, setOld] = useState('')
  const [newPassword, setNew] = useState('')
  const [confirm, setConfirm] = useState('')
  const [msg, setMsg] = useState<{ ok: boolean; text: string }>()
  const [busy, setBusy] = useState(false)
  if (!session) return null
  const { user } = session

  async function changePassword(e: FormEvent) {
    e.preventDefault()
    if (newPassword !== confirm) return setMsg({ ok: false, text: t('passwordMismatch') })
    setBusy(true)
    try {
      await callApi('changePassword', { token: session!.token, oldPassword, newPassword })
      setMsg({ ok: true, text: t('passwordChanged') })
      setOld('')
      setNew('')
      setConfirm('')
    } catch (err) {
      setMsg({ ok: false, text: err instanceof Error ? err.message : String(err) })
    } finally {
      setBusy(false)
    }
  }

  return (
    <section className="narrow">
      <h1>{t('accountTitle')}</h1>
      <div className="card">
        <p className="result-name">👤 {user.displayName}</p>
        <p className="muted">
          {t('username')}: <strong>{user.username}</strong> · {user.role === 'owner' ? t('roleOwner') : t('roleLearner')}
          {session.demo && ` · ${t('demoBadge')}`}
        </p>
        <p>
          <SyncBadge />
        </p>
        <button type="button" className="btn btn-secondary" onClick={() => logout()}>
          {t('logout')}
        </button>
      </div>

      {!session.demo && (
        <form className="card" onSubmit={changePassword}>
          <h2>{t('changePassword')}</h2>
          <label className="field">
            <span>{t('oldPassword')}</span>
            <input type="password" value={oldPassword} onChange={(e) => setOld(e.target.value)} autoComplete="current-password" required />
          </label>
          <label className="field">
            <span>{t('newPassword')}</span>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNew(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              maxLength={100}
              required
            />
            <small className="muted">{t('passwordHint')}</small>
          </label>
          <label className="field">
            <span>{t('confirmPassword')}</span>
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} autoComplete="new-password" required />
          </label>
          {msg && (
            <p className={`feedback ${msg.ok ? 'ok' : 'bad'}`} role="status">
              {msg.text}
            </p>
          )}
          <button type="submit" className="btn" disabled={busy}>
            {busy ? t('pleaseWait') : t('changePassword')}
          </button>
        </form>
      )}
    </section>
  )
}
