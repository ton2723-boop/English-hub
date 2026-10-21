import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Lang } from '../types'

const KEY = 'english-hub:lang'

function load(): Lang {
  try {
    const v = localStorage.getItem(KEY)
    if (v === 'th' || v === 'en') return v
    // Older versions kept the language inside the progress data.
    const legacy = JSON.parse(localStorage.getItem('english-hub:v1') ?? '{}')
    return legacy.lang === 'en' ? 'en' : 'th'
  } catch {
    return 'th'
  }
}

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void } | null>(null)

/** UI language, kept per device (also used on the login screen). */
export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(load)
  useEffect(() => {
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      // ignore: language just won't be remembered
    }
    document.documentElement.lang = lang
  }, [lang])
  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}
