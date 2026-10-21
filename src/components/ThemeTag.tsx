import { useT, type StringKey } from '../lib/i18n'
import type { UnitTheme } from '../types'

const THEMES: Record<UnitTheme, { icon: string; label: StringKey }> = {
  work: { icon: '💼', label: 'workTheme' },
  travel: { icon: '✈️', label: 'travelTheme' },
  life: { icon: '🏠', label: 'lifeTheme' },
}

export function ThemeTag({ theme }: { theme: UnitTheme }) {
  const { t } = useT()
  const { icon, label } = THEMES[theme]
  return (
    <span className="tag tag-work">
      {icon} {t(label)}
    </span>
  )
}
