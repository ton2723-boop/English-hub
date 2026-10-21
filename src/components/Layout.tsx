import { NavLink, Outlet } from 'react-router-dom'
import { useT } from '../lib/i18n'
import { useStore } from '../lib/store'

export function Layout() {
  const { t } = useT()
  const { lang, setLang } = useStore()
  const links = [
    { to: '/', label: t('navHome'), end: true },
    { to: '/test/pre', label: t('navTest') },
    { to: '/courses', label: t('navCourses') },
    { to: '/exams', label: t('navExams') },
    { to: '/vocab', label: t('navVocab') },
    { to: '/progress', label: t('navProgress') },
  ]
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <NavLink to="/" className="brand">
            📘 {t('appName')}
          </NavLink>
          <nav className="nav">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="lang" role="group" aria-label="Language">
            <button type="button" className={lang === 'th' ? 'active' : ''} onClick={() => setLang('th')}>
              TH
            </button>
            <button type="button" className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>
              EN
            </button>
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
