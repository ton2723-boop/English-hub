import { Link } from 'react-router-dom'
import { useT } from '../lib/i18n'

export function NotFound() {
  const { t } = useT()
  return (
    <section className="narrow center">
      <h1>{t('notFound')}</h1>
      <Link className="btn" to="/">
        {t('navHome')}
      </Link>
    </section>
  )
}
