/** Google Apps Script Web App URL, set as VITE_API_URL in Vercel (kept out of the repo). */
export const API_URL: string = import.meta.env.VITE_API_URL ?? ''

export class ApiError extends Error {
  constructor(
    message: string,
    /** The session is no longer valid; the user must sign in again. */
    readonly authError = false,
  ) {
    super(message)
  }
}

export interface PublicUser {
  userId: string
  username: string
  displayName: string
  role: 'owner' | 'learner'
}

/**
 * Calls the backend. Uses a text/plain body so the browser sends a "simple"
 * request — Apps Script cannot answer CORS preflight requests.
 */
export async function callApi<T = Record<string, unknown>>(action: string, body: Record<string, unknown> = {}): Promise<T> {
  if (!API_URL) throw new ApiError('ยังไม่ได้ตั้งค่าเซิร์ฟเวอร์ (VITE_API_URL)')
  let res: Response
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action, ...body }),
    })
  } catch {
    throw new ApiError('เชื่อมต่อเซิร์ฟเวอร์ไม่ได้ ตรวจสอบอินเทอร์เน็ตแล้วลองใหม่')
  }
  let data: { success?: boolean; error?: string; authError?: boolean }
  try {
    data = await res.json()
  } catch {
    throw new ApiError('เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง (ตรวจสอบ VITE_API_URL และการ Deploy Apps Script)')
  }
  if (!data.success) throw new ApiError(data.error ?? 'เกิดข้อผิดพลาด', Boolean(data.authError))
  return data as T
}
