import { useState, type FormEvent } from 'react'
import { API_URL } from '../lib/api'
import { useAuth } from '../lib/auth'
import { useT } from '../lib/i18n'
import { useLang } from '../lib/lang'

/** Shown instead of the app until the learner signs in. */
export function LoginPage() {
  const { t } = useT()
  const { lang, setLang } = useLang()
  const { login, register, loginDemo, notice } = useAuth()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [username, setUsername] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function submit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (mode === 'register' && password !== confirm) return setError(t('passwordMismatch'))
    setBusy(true)
    try {
      if (mode === 'login') await login(username, password)
      else await register(username, displayName, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      setBusy(false)
    }
  }

  function switchMode(m: 'login' | 'register') {
    setMode(m)
    setError('')
    setConfirm('')
  }

  return (
    <main className="login-wrap">
      <div className="login-top">
        <div className="lang" role="group" aria-label="Language">
          <button type="button" className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>
            TH
          </button>
          <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
            EN
          </button>
        </div>
      </div>
      <form className="card login-card" onSubmit={submit}>
        <p className="brand login-brand">📘 {t('appName')}</p>
        <h1>{mode === 'login' ? t('loginTitle') : t('registerTitle')}</h1>
        <p className="muted">{t('loginIntro')}</p>
        {notice && <p className="notice">{notice}</p>}

        {API_URL ? (
          <>
            <label className="field">
              <span>{t('username')}</span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                autoCapitalize="none"
                spellCheck={false}
                required
                minLength={mode === 'register' ? 3 : undefined}
                maxLength={30}
                pattern={mode === 'register' ? '[A-Za-z0-9._\\-]{3,30}' : undefined}
              />
              {mode === 'register' && <small className="muted">{t('usernameHint')}</small>}
            </label>
            {mode === 'register' && (
              <label className="field">
                <span>{t('displayName')}</span>
                <input value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength={50} autoComplete="name" />
              </label>
            )}
            <label className="field">
              <span>{t('password')}</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                required
                minLength={mode === 'register' ? 8 : undefined}
                maxLength={100}
              />
              {mode === 'register' && <small className="muted">{t('passwordHint')}</small>}
            </label>
            {mode === 'register' && (
              <label className="field">
                <span>{t('confirmPassword')}</span>
                <input
                  type="password"
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  autoComplete="new-password"
                  required
                  maxLength={100}
                />
              </label>
            )}
            {error && (
              <p className="feedback bad" role="alert">
                {error}
              </p>
            )}
            <button type="submit" className="btn btn-lg btn-block" disabled={busy}>
              {busy ? t('pleaseWait') : mode === 'login' ? t('signIn') : t('signUp')}
            </button>
            <p className="center small">
              {mode === 'login' ? t('noAccount') : t('haveAccount')}{' '}
              <button type="button" className="btn-link" onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}>
                {mode === 'login' ? t('signUp') : t('signIn')}
              </button>
            </p>
          </>
        ) : (
          <>
            <p className="notice">{t('demoNote')}</p>
            <button type="button" className="btn btn-lg btn-block" onClick={loginDemo}>
              {t('demoMode')}
            </button>
          </>
        )}
      </form>
    </main>
  )
}
