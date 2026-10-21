import { describe, expect, it } from 'vitest'
import { loadBackend } from './gas'

const PW = 'secret123'

function registered(n = 1) {
  const b = loadBackend()
  const tokens = Array.from({ length: n }, (_, i) => {
    const r = b.post({ action: 'register', username: `user${i}`, displayName: `User ${i}`, password: PW })
    expect(r.success).toBe(true)
    return r.token as string
  })
  return { ...b, tokens }
}

describe('register & login', () => {
  it('makes the first account the owner and later ones learners', () => {
    const b = registered(2)
    expect(b.post({ action: 'me', token: b.tokens[0] }).user.role).toBe('owner')
    expect(b.post({ action: 'me', token: b.tokens[1] }).user.role).toBe('learner')
  })

  it('stores salted SHA-256 hashes, never the password', () => {
    const b = registered(1)
    const row = b.ss.getSheetByName('Users')!._rows[1]
    expect(row.join(',')).not.toContain(PW)
    expect(row[3]).toMatch(/^sha256\$[0-9a-f]{32}\$[0-9a-f]{64}$/)
  })

  it('normalises usernames and rejects duplicates and bad input', () => {
    const b = registered(1)
    expect(b.post({ action: 'register', username: ' USER0 ', password: PW }).error).toMatch(/มีคนใช้แล้ว/)
    expect(b.post({ action: 'register', username: 'ab', password: PW }).error).toMatch(/3–30/)
    expect(b.post({ action: 'register', username: 'bad name', password: PW }).error).toMatch(/a–z/)
    expect(b.post({ action: 'register', username: 'okname', password: 'short' }).error).toMatch(/อย่างน้อย 8/)
    expect(b.post({ action: 'login', username: 'User0', password: PW }).success).toBe(true)
  })

  it('uses one message for unknown users and wrong passwords', () => {
    const b = registered(1)
    const unknown = b.post({ action: 'login', username: 'nobody', password: PW }).error
    const wrong = b.post({ action: 'login', username: 'user0', password: 'wrongpass' }).error
    expect(unknown).toBe(wrong)
  })

  it('locks a username for 15 minutes after 5 wrong passwords, then the right one fails too', () => {
    const b = registered(1)
    for (let i = 0; i < 4; i++) expect(b.post({ action: 'login', username: 'user0', password: 'nope' }).success).toBe(false)
    expect(b.post({ action: 'login', username: 'user0', password: 'nope' }).error).toMatch(/ล็อกไว้ 15 นาที/)
    expect(b.post({ action: 'login', username: 'user0', password: PW }).error).toMatch(/ลองใหม่ในอีก 15 นาที/)
  })

  it('stops formulas in display names from reaching the sheet', () => {
    const b = loadBackend()
    const r = b.post({ action: 'register', username: 'evil', displayName: '=IMPORTXML("x")', password: PW })
    expect(r.success).toBe(true)
    expect(r.user.displayName).toBe('=IMPORTXML("x")')
  })
})

describe('sessions', () => {
  it('rejects calls without a valid token', () => {
    const b = registered(1)
    expect(b.post({ action: 'getProgress' }).authError).toBe(true)
    expect(b.post({ action: 'getProgress', token: 'made-up' }).authError).toBe(true)
  })

  it('logout revokes the token', () => {
    const b = registered(1)
    b.post({ action: 'logout', token: b.tokens[0] })
    expect(b.post({ action: 'me', token: b.tokens[0] }).authError).toBe(true)
  })

  it('changing the password signs out other devices but keeps this one', () => {
    const b = registered(1)
    const other = b.post({ action: 'login', username: 'user0', password: PW }).token
    const r = b.post({ action: 'changePassword', token: b.tokens[0], oldPassword: PW, newPassword: 'newsecret1' })
    expect(r.success).toBe(true)
    expect(b.post({ action: 'me', token: b.tokens[0] }).success).toBe(true)
    expect(b.post({ action: 'me', token: other }).authError).toBe(true)
    expect(b.post({ action: 'login', username: 'user0', password: 'newsecret1' }).success).toBe(true)
  })
})

describe('progress', () => {
  const pre = { kind: 'pre', date: '2026-10-01T00:00:00.000Z', level: 'A2', score: 14, maxScore: 36 }

  it('saves and returns progress per user', () => {
    const b = registered(2)
    b.post({ action: 'saveProgress', token: b.tokens[1], progress: { tests: { pre }, practice: { 'a1-1': 0.75 }, cards: {} } })
    expect(b.post({ action: 'getProgress', token: b.tokens[1] }).progress.practice['a1-1']).toBe(0.75)
    expect(b.post({ action: 'getProgress', token: b.tokens[0] }).progress).toEqual({})
  })

  it('merges with what is already saved instead of overwriting', () => {
    const b = registered(1)
    const t = b.tokens[0]
    b.post({ action: 'saveProgress', token: t, progress: { practice: { 'a1-1': 0.9 }, cards: { x: 3 } } })
    const r = b.post({ action: 'saveProgress', token: t, progress: { practice: { 'a1-1': 0.5, 'a1-2': 1 }, cards: { x: 0 } } })
    expect(r.progress.practice).toEqual({ 'a1-1': 0.9, 'a1-2': 1 })
    expect(r.progress.cards).toEqual({ x: 0 })
  })

  it('replace:true clears old progress (reset)', () => {
    const b = registered(1)
    const t = b.tokens[0]
    b.post({ action: 'saveProgress', token: t, progress: { practice: { 'a1-1': 0.9 } } })
    const r = b.post({ action: 'saveProgress', token: t, replace: true, progress: { tests: {}, practice: {}, cards: {} } })
    expect(r.progress.practice).toEqual({})
  })
})

describe('owner tools', () => {
  it('only the owner can list users, with a progress summary', () => {
    const b = registered(2)
    b.post({
      action: 'saveProgress',
      token: b.tokens[1],
      progress: { practice: { 'a1-1': 0.75, 'a1-2': 0.5, 'toeic-part5': 1 }, cards: { a: 3, b: 1 } },
    })
    expect(b.post({ action: 'adminListUsers', token: b.tokens[1] }).error).toMatch(/เจ้าของ/)
    const list = b.post({ action: 'adminListUsers', token: b.tokens[0] })
    const learner = list.users.find((u: { username: string }) => u.username === 'user1')
    expect(learner.summary).toMatchObject({ unitsPassed: 1, unitsPracticed: 2, examsPracticed: 1, wordsMastered: 1 })
    expect(JSON.stringify(list)).not.toContain('sha256$')
  })

  it('deactivating an account signs it out and blocks login', () => {
    const b = registered(2)
    const learnerId = b.post({ action: 'me', token: b.tokens[1] }).user.userId
    expect(b.post({ action: 'adminSetActive', token: b.tokens[0], userId: learnerId, active: false }).success).toBe(true)
    expect(b.post({ action: 'me', token: b.tokens[1] }).authError).toBe(true)
    expect(b.post({ action: 'login', username: 'user1', password: PW }).error).toMatch(/ปิดใช้งาน/)
  })

  it('the owner cannot deactivate themselves', () => {
    const b = registered(1)
    const ownerId = b.post({ action: 'me', token: b.tokens[0] }).user.userId
    expect(b.post({ action: 'adminSetActive', token: b.tokens[0], userId: ownerId, active: false }).success).toBe(false)
  })

  it('resetting a password unlocks the account', () => {
    const b = registered(2)
    const learnerId = b.post({ action: 'me', token: b.tokens[1] }).user.userId
    for (let i = 0; i < 5; i++) b.post({ action: 'login', username: 'user1', password: 'nope' })
    b.post({ action: 'adminResetPassword', token: b.tokens[0], userId: learnerId, newPassword: 'fresh-pass1' })
    expect(b.post({ action: 'login', username: 'user1', password: 'fresh-pass1' }).success).toBe(true)
  })
})
