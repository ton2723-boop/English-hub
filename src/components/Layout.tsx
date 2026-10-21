import { NavLink, Outlet } from 'react-router-dom'
import { useT } from '../lib/i18n'
import { useAuth } from '../lib/auth'
import { useLang } from '../lib/lang'
import { SyncBadge } from './SyncBadge'

export function Layout() {
  const { t } = useT()
  const { lang, setLang } = useLang()
  const { session } = useAuth()
  const isOwner = session?.user.role === 'owner'
  const links = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/test/pre', label: t('navTest') },
    { to: '/courses', label: t('navCourses') },
    { to: '/exams', label: t('navExams') },
    { to: '/vocab', label: t('navVocab') },
    { to: '/progress', label: t('navProgress') },
    ...(isOwner ? [{ to: '/admin', label: t('navAdmin') }] : []),
  ]
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            📘 <span className="brand-text">{t('appName')}</span>
          </NavLink>
          <nav className="nav">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-tools">
            <NavLink to="/account" className="user-chip" title={t('navAccount')}>
              👤 {session?.user.displayName}
              {session?.demo && <span className="badge">{t('demoBadge')}</span>}
            </NavLink>
            <SyncBadge />
            <div className="lang" role="group" aria-label="Language">
              <button type="button" className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>
                TH
              </button>
              <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
                EN
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container main">
        <Outlet />
      </main>
      <footer className="footer container muted small">
        CEFR A1–C2 · IELTS · TOEIC — {t('storageNote')}
      </footer>
    </>
  )
}
