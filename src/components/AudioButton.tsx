import { useEffect, useState } from 'react'
import { useT } from '../lib/i18n'
import { speak, speechSupported, stopSpeaking } from '../lib/speech'

export function AudioButton({ text, allowTranscript = false }: { text: string; allowTranscript?: boolean }) {
  const { t } = useT()
  const [playing, setPlaying] = useState(false)
  const [showText, setShowText] = useState(false)

  // Stop audio when the question changes or the page unmounts.
  useEffect(() => {
    setShowText(false)
    return () => stopSpeaking()
  }, [text])

  if (!speechSupported()) {
    return (
      <div className="audio">
        <p className="muted">{t('noSpeech')}</p>
        <blockquote className="passage">{text}</blockquote>
      </div>
    )
  }

  async function play() {
    setPlaying(true)
    await speak(text)
    setPlaying(false)
  }

  return (
    <div className="audio">
      <button type="button" className="btn btn-secondary" onClick={play} disabled={playing}>
        {playing ? t('playing') : t('play')}
      </button>
      {allowTranscript && (
        <button type="button" className="btn btn-link" onClick={() => setShowText((s) => !s)}>
          {t('showTranscript')}
        </button>
      )}
      {showText && <blockquote className="passage">{text}</blockquote>}
    </div>
  )
}
