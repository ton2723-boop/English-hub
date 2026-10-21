import { categoryInfo } from '../lib/categories'
import { useT } from '../lib/i18n'
import type { Category, Unit } from '../types'

/** Coloured category badge; kids units also say whether they are for children or parents. */
export function ThemeTag({ theme, audience }: { theme: Category; audience?: Unit['audience'] }) {
  const { t, tr } = useT()
  const info = categoryInfo(theme)
  return (
    <span className={`tag tag-cat cat-${theme}`}>
      {info.icon} {tr(info.title)}
      {audience && ` · ${audience === 'child' ? t('forKids') : t('forParents')}`}
    </span>
  )
}
