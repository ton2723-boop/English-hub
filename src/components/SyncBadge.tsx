import { useT, type StringKey } from '../lib/i18n'
import { useStore, type SyncStatus } from '../lib/store'

const LABELS: Record<SyncStatus, { icon: string; key: StringKey } | null> = {
  loading: { icon: '⏳', key: 'syncLoading' },
  idle: null,
  saving: { icon: '⏳', key: 'syncSaving' },
  saved: { icon: '☁️', key: 'syncSaved' },
  error: { icon: '⚠️', key: 'syncError' },
  local: { icon: '💾', key: 'syncLocal' },
}

/** Small header indicator showing whether progress reached the server. */
export function SyncBadge() {
  const { t } = useT()
  const { sync, syncError } = useStore()
  const label = LABELS[sync]
  if (!label) return null
  return (
    <span className={`sync sync-${sync}`} title={sync === 'error' ? `${syncError}\n${t('syncRetryNote')}` : undefined} role="status">
      {label.icon} <span className="sync-text">{t(label.key)}</span>
    </span>
  )
}
