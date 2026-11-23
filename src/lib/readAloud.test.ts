import { describe, expect, it } from 'vitest'
import { parsePrefs, questionSpeech, rateFor, speakable } from './readAloud'

describe('speakable', () => {
  it('reads blanks as "blank"', () => {
    expect(speakable('She ___ to school every day.')).toBe('She blank to school every day.')
  })
  it('drops Thai text so the English voice does not mumble it', () => {
    expect(speakable('apple (แอปเปิล)')).toBe('apple')
  })
})

describe('questionSpeech', () => {
  it('reads the prompt then each option with its letter', () => {
    expect(questionSpeech({ prompt: 'She ___ a teacher.', options: ['is', 'are', 'am'] })).toBe(
      'She blank a teacher. A. is. B. are. C. am.',
    )
  })
  it('keeps question marks and skips empty options', () => {
    expect(questionSpeech({ prompt: 'Where is he?', options: ['At home', 'แมว'] })).toBe('Where is he? A. At home.')
  })
})

describe('parsePrefs', () => {
  it('falls back to defaults for missing or broken data', () => {
    expect(parsePrefs(null)).toEqual({ auto: false, listenFirst: false, slow: false })
    expect(parsePrefs('{oops')).toEqual({ auto: false, listenFirst: false, slow: false })
  })
  it('accepts only real booleans', () => {
    expect(parsePrefs('{"auto":true,"listenFirst":"yes","slow":true}')).toEqual({
      auto: true,
      listenFirst: false,
      slow: true,
    })
  })
  it('slows the voice when asked', () => {
    expect(rateFor({ auto: false, listenFirst: false, slow: true })).toBeLessThan(
      rateFor({ auto: false, listenFirst: false, slow: false }),
    )
  })
})
