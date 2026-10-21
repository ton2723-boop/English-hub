import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from 'react'
import { callApi, type PublicUser } from './api'

export interface Session {
  token: string
  user: PublicUser
  /** Demo mode: no server, progress stays in this browser only. */
  demo?: boolean
  /** ms timestamp; the server token lasts 30 days too. */
  exp: number
}

const KEY = 'english-hub:session'
const SESSION_MS = 30 * 24 * 60 * 60 * 1000

const DEMO_USER: PublicUser = { userId: 'demo', username: 'demo', displayName: 'Demo', role: 'learner' }

function load(): Session | null {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) ?? 'null') as Session | null
    return s && s.token && s.user && s.exp > Date.now() ? s : null
  } catch {
    return null
  }
}

function persist(s: Session | null) {
  try {
    if (s) localStorage.setItem(KEY, JSON.stringify(s))
    else localStorage.removeItem(KEY)
  } catch {
    // Storage unavailable: the session lasts until the tab closes.
  }
}

interface Auth {
  session: Session | null
  /** Message shown on the login screen, e.g. after the session expired. */
  notice: string
  login: (username: string, password: string) => Promise<void>
  register: (username: string, displayName: string, password: string) => Promise<void>
  loginDemo: () => void
  /** Ends the session; `notice` explains why (e.g. expired). */
  logout: (notice?: string) => void
  updateUser: (user: PublicUser) => void
}

const AuthContext = createContext<Auth | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(load)
  const [notice, setNotice] = useState('')

  const start = useCallback((token: string, user: PublicUser, demo = false) => {
    const s: Session = { token, user, demo, exp: Date.now() + SESSION_MS }
    persist(s)
    setNotice('')
    setSession(s)
  }, [])

  const login = useCallback(
    async (username: string, password: string) => {
      const r = await callApi<{ token: string; user: PublicUser }>('login', { username, password })
      start(r.token, r.user)
    },
    [start],
  )

  const register = useCallback(
    async (username: string, displayName: string, password: string) => {
      const r = await callApi<{ token: string; user: PublicUser }>('register', { username, displayName, password })
      start(r.token, r.user)
    },
    [start],
  )

  const loginDemo = useCallback(() => start('demo', DEMO_USER, true), [start])

  const logout = useCallback(
    (why = '') => {
      if (session && !session.demo) callApi('logout', { token: session.token }).catch(() => undefined)
      persist(null)
      setSession(null)
      setNotice(why)
    },
    [session],
  )

  const updateUser = useCallback((user: PublicUser) => {
    setSession((s) => {
      if (!s) return s
      const next = { ...s, user }
      persist(next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ session, notice, login, register, loginDemo, logout, updateUser }),
    [session, notice, login, register, loginDemo, logout, updateUser],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth(): Auth {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}
