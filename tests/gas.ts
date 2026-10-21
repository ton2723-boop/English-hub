// Loads apps-script/Code.gs into a Node sandbox with in-memory fakes of the
// Google services it uses, so the backend can be tested without Google.
import { createHash, randomUUID } from 'node:crypto'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import vm from 'node:vm'

const CODE = readFileSync(fileURLToPath(new URL('../apps-script/Code.gs', import.meta.url)), 'utf8')

export function fakeProps() {
  const m = new Map<string, string>()
  return {
    getProperty: (k: string) => (m.has(k) ? m.get(k)! : null),
    setProperty: (k: string, v: string) => void m.set(k, String(v)),
    deleteProperty: (k: string) => void m.delete(k),
    getProperties: () => Object.fromEntries(m),
    _map: m,
  }
}

/** Strict-ish fake sheet: 2D array of strings, 1-based ranges like the real API. */
function fakeSheet(name: string) {
  const rows: string[][] = []
  const sheet = {
    getName: () => name,
    getMaxRows: () => 1000,
    setFrozenRows: () => sheet,
    appendRow: (row: unknown[]) => void rows.push(row.map(stored)),
    getDataRange: () => ({ getValues: () => rows.map((r) => [...r]) }),
    getRange: (r: number, c: number, nr = 1, nc = 1) => ({
      setValues: (vals: unknown[][]) => {
        if (vals.length !== nr || vals.some((v) => v.length !== nc)) throw new Error('setValues: size mismatch')
        vals.forEach((v, i) => {
          while (rows.length < r + i) rows.push([])
          v.forEach((x, j) => (rows[r - 1 + i][c - 1 + j] = stored(x)))
        })
        return { setFontWeight: () => undefined }
      },
      setNumberFormat: () => undefined,
    }),
    _rows: rows,
  }
  return sheet
}

/** Sheets turns a leading ' into "plain text" and hides it; formulas would be evaluated. */
function stored(x: unknown): string {
  const s = String(x)
  if (s.startsWith("'")) return s.slice(1)
  if (s.startsWith('=')) throw new Error('formula written to sheet: ' + s)
  return s
}

function fakeSpreadsheet() {
  const sheets = [fakeSheet('Sheet1')]
  return {
    getId: () => 'SS1',
    getUrl: () => 'https://docs.google.com/spreadsheets/d/SS1',
    getSheets: () => [...sheets],
    getSheetByName: (n: string) => sheets.find((s) => s.getName() === n) ?? null,
    insertSheet: (n: string) => {
      const s = fakeSheet(n)
      sheets.push(s)
      return s
    },
    deleteSheet: (s: { getName(): string }) => {
      if (sheets.length === 1) throw new Error('cannot delete the only sheet')
      sheets.splice(sheets.indexOf(s as never), 1)
    },
  }
}

export interface Backend {
  /** Calls doPost like the web page does and returns the parsed JSON reply. */
  post: (body: Record<string, unknown>) => Record<string, any>
  props: ReturnType<typeof fakeProps>
  ss: ReturnType<typeof fakeSpreadsheet>
  gas: Record<string, any>
}

export function loadBackend(): Backend {
  const props = fakeProps()
  let ss: ReturnType<typeof fakeSpreadsheet> | undefined
  const ctx = vm.createContext({
    console,
    PropertiesService: { getScriptProperties: () => props },
    SpreadsheetApp: {
      create: () => (ss = fakeSpreadsheet()),
      openById: (id: string) => {
        if (!ss || id !== ss.getId()) throw new Error('no spreadsheet ' + id)
        return ss
      },
    },
    Utilities: {
      getUuid: () => randomUUID(),
      DigestAlgorithm: { SHA_256: 'sha256' },
      Charset: { UTF_8: 'utf8' },
      // Apps Script returns signed bytes (-128..127)
      computeDigest: (alg: string, s: string) => [...createHash(alg).update(s, 'utf8').digest()].map((b) => (b > 127 ? b - 256 : b)),
    },
    LockService: { getScriptLock: () => ({ waitLock: () => undefined, releaseLock: () => undefined }) },
    ContentService: {
      MimeType: { JSON: 'json', TEXT: 'text' },
      createTextOutput: (text: string) => ({ setMimeType: () => ({ text }) }),
    },
    Logger: { log: () => undefined },
  })
  const names = [...CODE.matchAll(/^(?:const|function)\s+([A-Za-z_$][\w$]*)/gm)].map((m) => m[1])
  vm.runInContext(CODE + '\n;globalThis.__gas = {' + [...new Set(names)].join(',') + '};', ctx, { filename: 'Code.gs' })
  const gas = (ctx as any).__gas
  return {
    post: (body) => JSON.parse(gas.doPost({ postData: { contents: JSON.stringify(body) } }).text),
    props,
    get ss() {
      return ss!
    },
    gas,
  }
}
