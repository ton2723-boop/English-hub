/**
 * English Hub — backend (Google Apps Script Web App + Google Sheets)
 *
 * ติดตั้ง (ทำครั้งเดียว): สร้างโปรเจกต์ใหม่ที่ script.google.com → วางไฟล์นี้แทน Code.gs
 * → Deploy → New deployment → Web app (Execute as: Me, Who has access: Anyone)
 * → คัดลอก Web app URL ไปใส่ตัวแปร VITE_API_URL ใน Vercel
 * ชีตข้อมูลถูกสร้างเองตอนมีคำขอแรก (หรือรัน setup() เพื่อดูลิงก์ชีตใน Log)
 *
 * รูปแบบเดียวกับ CondoHub: รหัสผ่าน sha256$<salt>$<hash>, token ฝั่งเซิร์ฟเวอร์อายุ 30 วัน
 * (ScriptProperties sess_<token>), ล็อกอินผิด 5 ครั้งล็อก 15 นาที (lock_<username>)
 */

const BACKEND_VERSION = '2026-10-21.1';

/** ชื่อชีตและหัวคอลัมน์ — เพิ่มคอลัมน์ต่อท้ายเท่านั้น ห้ามสลับ/แทรกกลาง */
const SHEETS_ = {
  Users: ['userId', 'username', 'displayName', 'passwordHash', 'role', 'active', 'createdAt', 'lastLoginAt'],
  Progress: ['userId', 'progressJson', 'updatedAt'],
};

const SPREADSHEET_PROP_ = 'SPREADSHEET_ID';
const USERNAME_RE_ = /^[a-z0-9._-]{3,30}$/;
const PASSWORD_MIN_ = 8;
const PASSWORD_MAX_ = 100;
const DISPLAY_NAME_MAX_ = 50;
/** เซลล์ของ Google Sheets เก็บได้ไม่เกิน 50,000 ตัวอักษร */
const PROGRESS_MAX_CHARS_ = 45000;
/** practice key ของชุดเตรียมสอบ (ไม่นับเป็นบทเรียน) */
const EXAM_ID_RE_ = /^(ielts|toeic)-/;
const UNIT_PASS_ = 0.6;
const MASTERED_BOX_ = 3;

/* ================= HTTP ================= */

function doGet() {
  return ContentService.createTextOutput('English Hub backend ✅ ' + BACKEND_VERSION).setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    return jsonResponse_(route_(body));
  } catch (err) {
    return jsonResponse_({ success: false, error: 'เกิดข้อผิดพลาดที่เซิร์ฟเวอร์: ' + (err && err.message ? err.message : err) });
  }
}

/** คำสั่งที่เฉพาะ owner เรียกได้ (ตรวจจาก session ไม่เชื่อค่าที่หน้าเว็บส่งมา) */
const OWNER_ONLY_ACTIONS_ = { adminListUsers: true, adminSetActive: true, adminResetPassword: true };

function route_(body) {
  const action = body.action;
  if (action === 'register') return withLock_(() => handleRegister_(body));
  if (action === 'login') return handleLogin_(body);
  if (action === 'logout') { revokeSession_(body.token); return { success: true }; }

  const session = getSession_(body.token);
  if (!session) return { success: false, authError: true, error: 'หมดเวลาการเข้าสู่ระบบ กรุณาเข้าสู่ระบบใหม่' };
  // บัญชีถูกปิดระหว่างที่ยังมี token อยู่
  const user = findUser_('userId', session.userId);
  if (!user || isInactive_(user.active)) {
    revokeSession_(body.token);
    return { success: false, authError: true, error: 'บัญชีนี้ถูกปิดใช้งาน' };
  }
  if (OWNER_ONLY_ACTIONS_[action] && user.role !== 'owner') return { success: false, error: 'คำสั่งนี้สำหรับเจ้าของระบบเท่านั้น' };

  const handlers = {
    me: () => ({ success: true, user: publicUser_(user), backendVersion: BACKEND_VERSION }),
    getProgress: () => handleGetProgress_(user),
    saveProgress: () => withLock_(() => handleSaveProgress_(user, body)),
    changePassword: () => withLock_(() => handleChangePassword_(user, body)),
    adminListUsers: () => handleAdminListUsers_(),
    adminSetActive: () => withLock_(() => handleAdminSetActive_(user, body)),
    adminResetPassword: () => withLock_(() => handleAdminResetPassword_(user, body)),
  };
  if (!handlers[action]) return { success: false, error: 'ไม่รู้จักคำสั่ง: ' + action };
  return handlers[action]();
}

function jsonResponse_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** กันสองคำขอเขียนชีตพร้อมกัน (สมัครชื่อซ้ำ / บันทึกทับกัน) */
function withLock_(fn) {
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try { return fn(); } finally { lock.releaseLock(); }
}

/* ================= SHEETS ================= */

/** รันเองได้จากหน้า Apps Script เพื่อสร้างชีตและดูลิงก์ใน Log */
function setup() {
  const ss = getSpreadsheet_();
  Logger.log('ชีตข้อมูล English Hub: ' + ss.getUrl());
}

function getSpreadsheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty(SPREADSHEET_PROP_);
  if (id) return SpreadsheetApp.openById(id);
  const ss = SpreadsheetApp.create('English Hub – ข้อมูลผู้เรียน');
  props.setProperty(SPREADSHEET_PROP_, ss.getId());
  Object.keys(SHEETS_).forEach(name => getSheet_(ss, name));
  const first = ss.getSheets().filter(s => !SHEETS_[s.getName()])[0];
  if (first && ss.getSheets().length > 1) ss.deleteSheet(first);
  return ss;
}

function getSheet_(ss, name) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.getRange(1, 1, 1, SHEETS_[name].length).setValues([SHEETS_[name]]).setFontWeight('bold');
    sheet.setFrozenRows(1);
    // เก็บทุกช่องเป็นข้อความ (กันชื่อผู้ใช้ "0012" กลายเป็นตัวเลข)
    sheet.getRange(1, 1, sheet.getMaxRows(), SHEETS_[name].length).setNumberFormat('@');
  }
  return sheet;
}

/** อ่านทั้งชีตเป็น object ตามหัวคอลัมน์ ; _row = เลขแถวจริง */
function readRows_(name) {
  const sheet = getSheet_(getSpreadsheet_(), name);
  const values = sheet.getDataRange().getValues();
  const header = values[0] || SHEETS_[name];
  return values.slice(1).map((row, i) => {
    const obj = { _row: i + 2 };
    header.forEach((h, j) => { obj[h] = row[j] === undefined ? '' : String(row[j]); });
    return obj;
  });
}

/** ค่าที่ขึ้นต้นด้วย = + - @ ถูกตีความเป็นสูตร → เติม ' ให้เป็นข้อความ */
function cellText_(v) {
  const s = v === undefined || v === null ? '' : String(v);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function writeRow_(name, obj) {
  const sheet = getSheet_(getSpreadsheet_(), name);
  const row = SHEETS_[name].map(h => cellText_(obj[h]));
  if (obj._row) sheet.getRange(obj._row, 1, 1, row.length).setValues([row]);
  else sheet.appendRow(row);
}

function findUser_(field, value) {
  return readRows_('Users').find(u => u[field] === value) || null;
}

function publicUser_(u) {
  return { userId: u.userId, username: u.username, displayName: u.displayName, role: u.role };
}

function isInactive_(active) {
  return active === false || String(active).toUpperCase() === 'FALSE';
}

/* ================= PASSWORDS & SESSIONS ================= */

const SESSION_DAYS_ = 30;
const SESSION_PREFIX_ = 'sess_';

function bytesToHex_(bytes) {
  return bytes.map(b => (b < 0 ? b + 256 : b).toString(16).padStart(2, '0')).join('');
}
function sha256Hex_(s) {
  return bytesToHex_(Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8));
}
/** รูปแบบที่เก็บในคอลัมน์ passwordHash: sha256$<salt>$<hash> */
function hashPassword_(pw) {
  const salt = Utilities.getUuid().replace(/-/g, '');
  return 'sha256$' + salt + '$' + sha256Hex_(salt + String(pw));
}
function verifyPassword_(pw, stored) {
  const parts = String(stored || '').split('$');
  return parts.length === 3 && parts[0] === 'sha256' && sha256Hex_(parts[1] + String(pw)) === parts[2];
}

/** session: sess_<token> → {userId, username, exp} */
function createSession_(user) {
  const props = PropertiesService.getScriptProperties();
  pruneExpiredSessions_(props);
  const token = Utilities.getUuid().replace(/-/g, '') + Utilities.getUuid().replace(/-/g, '');
  props.setProperty(SESSION_PREFIX_ + token, JSON.stringify({
    userId: user.userId, username: user.username, exp: Date.now() + SESSION_DAYS_ * 24 * 60 * 60 * 1000,
  }));
  return token;
}
function getSession_(token) {
  if (!token || typeof token !== 'string') return null;
  const props = PropertiesService.getScriptProperties();
  const raw = props.getProperty(SESSION_PREFIX_ + token);
  if (!raw) return null;
  let s;
  try { s = JSON.parse(raw); } catch (e) { return null; }
  if (!s.exp || s.exp < Date.now()) { props.deleteProperty(SESSION_PREFIX_ + token); return null; }
  return s;
}
function revokeSession_(token) {
  if (token && typeof token === 'string') PropertiesService.getScriptProperties().deleteProperty(SESSION_PREFIX_ + token);
}
/** ยกเลิก session ทั้งหมดของบัญชี (ปิดบัญชี / เปลี่ยนรหัส) — exceptToken = session ปัจจุบันที่ยังใช้ต่อ */
function revokeUserSessions_(userId, exceptToken) {
  const props = PropertiesService.getScriptProperties();
  const all = props.getProperties();
  Object.keys(all).forEach(k => {
    if (k.indexOf(SESSION_PREFIX_) !== 0 || k === SESSION_PREFIX_ + exceptToken) return;
    try { if (JSON.parse(all[k]).userId === userId) props.deleteProperty(k); } catch (e) { props.deleteProperty(k); }
  });
}
function pruneExpiredSessions_(props) {
  const all = props.getProperties(), now = Date.now();
  Object.keys(all).forEach(k => {
    if (k.indexOf(SESSION_PREFIX_) !== 0) return;
    try { if (!(JSON.parse(all[k]).exp > now)) props.deleteProperty(k); } catch (e) { props.deleteProperty(k); }
  });
}

/* ล็อกอินผิด 5 ครั้งติด → ล็อกชื่อผู้ใช้นั้น 15 นาทีแล้วปลดเอง (เหมือน CondoHub) */
const LOGIN_MAX_FAILS_ = 5;
const LOGIN_LOCK_MS_ = 15 * 60 * 1000;
const LOGIN_LOCK_PREFIX_ = 'lock_';
/** ข้อความเดียวกันทั้งชื่อผู้ใช้ไม่มีและรหัสผิด — ไม่บอกว่าชื่อผู้ใช้มีอยู่จริงไหม */
const BAD_LOGIN_MSG_ = 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง';

function loginLockState_(props, username) {
  try { return JSON.parse(props.getProperty(LOGIN_LOCK_PREFIX_ + username) || '{}') || {}; } catch (e) { return {}; }
}
function loginLockedMsg_(props, username, now) {
  const st = loginLockState_(props, username);
  if (st.until && st.until > now) return 'ใส่รหัสผิดหลายครั้ง ระบบล็อกไว้ชั่วคราว ลองใหม่ในอีก ' + Math.ceil((st.until - now) / 60000) + ' นาที';
  return '';
}
function loginRecordFail_(props, username, now) {
  const st = loginLockState_(props, username);
  const fails = ((st.until && st.until <= now) ? 0 : (Number(st.fails) || 0)) + 1;
  if (fails >= LOGIN_MAX_FAILS_) {
    props.setProperty(LOGIN_LOCK_PREFIX_ + username, JSON.stringify({ until: now + LOGIN_LOCK_MS_ }));
    return BAD_LOGIN_MSG_ + ' — ผิดครบ ' + LOGIN_MAX_FAILS_ + ' ครั้ง ระบบล็อกไว้ 15 นาที';
  }
  props.setProperty(LOGIN_LOCK_PREFIX_ + username, JSON.stringify({ fails: fails }));
  const left = LOGIN_MAX_FAILS_ - fails;
  return BAD_LOGIN_MSG_ + (left <= 2 ? ' (ผิดได้อีก ' + left + ' ครั้งก่อนถูกล็อก 15 นาที)' : '');
}
function loginClearFails_(props, username) { props.deleteProperty(LOGIN_LOCK_PREFIX_ + username); }

/* ================= ACCOUNTS ================= */

function normalizeUsername_(u) { return String(u || '').trim().toLowerCase(); }

function cleanDisplayName_(name) {
  return String(name || '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, DISPLAY_NAME_MAX_);
}

function passwordProblem_(pw) {
  pw = String(pw || '');
  if (pw.length < PASSWORD_MIN_) return 'รหัสผ่านต้องมีอย่างน้อย ' + PASSWORD_MIN_ + ' ตัวอักษร';
  if (pw.length > PASSWORD_MAX_) return 'รหัสผ่านยาวเกินไป';
  return '';
}

function handleRegister_(body) {
  const username = normalizeUsername_(body.username);
  const displayName = cleanDisplayName_(body.displayName) || username;
  if (!USERNAME_RE_.test(username)) return { success: false, error: 'ชื่อผู้ใช้ต้องยาว 3–30 ตัว ใช้ได้เฉพาะ a–z, 0–9, จุด ขีดกลาง ขีดล่าง' };
  const pwErr = passwordProblem_(body.password);
  if (pwErr) return { success: false, error: pwErr };

  const users = readRows_('Users');
  if (users.some(u => u.username === username)) return { success: false, error: 'ชื่อผู้ใช้นี้มีคนใช้แล้ว' };
  const now = new Date().toISOString();
  const user = {
    userId: 'U' + Utilities.getUuid().replace(/-/g, '').slice(0, 12),
    username: username,
    displayName: displayName,
    passwordHash: hashPassword_(body.password),
    // บัญชีแรกของระบบ = เจ้าของ (ดูผลผู้เรียนทุกคนได้)
    role: users.length === 0 ? 'owner' : 'learner',
    active: 'TRUE',
    createdAt: now,
    lastLoginAt: now,
  };
  writeRow_('Users', user);
  return { success: true, token: createSession_(user), user: publicUser_(user) };
}

function handleLogin_(body) {
  const username = normalizeUsername_(body.username);
  const props = PropertiesService.getScriptProperties();
  const now = Date.now();
  // ตรวจล็อกก่อน (แม้ชื่อผู้ใช้ไม่มีจริง) เพื่อไม่ให้ใช้ความต่างของข้อความเดาชื่อผู้ใช้
  const locked = loginLockedMsg_(props, username, now);
  if (locked) return { success: false, error: locked };
  const user = username ? findUser_('username', username) : null;
  if (!user || !verifyPassword_(body.password, user.passwordHash)) {
    return { success: false, error: username ? loginRecordFail_(props, username, now) : BAD_LOGIN_MSG_ };
  }
  if (isInactive_(user.active)) return { success: false, error: 'บัญชีนี้ถูกปิดใช้งาน กรุณาติดต่อผู้ดูแล' };
  loginClearFails_(props, username);
  user.lastLoginAt = new Date(now).toISOString();
  writeRow_('Users', user);
  return { success: true, token: createSession_(user), user: publicUser_(user) };
}

function handleChangePassword_(user, body) {
  if (!verifyPassword_(body.oldPassword, user.passwordHash)) return { success: false, error: 'รหัสผ่านเดิมไม่ถูกต้อง' };
  const pwErr = passwordProblem_(body.newPassword);
  if (pwErr) return { success: false, error: pwErr };
  user.passwordHash = hashPassword_(body.newPassword);
  writeRow_('Users', user);
  revokeUserSessions_(user.userId, body.token);
  return { success: true };
}

/* ================= PROGRESS ================= */

function readProgress_(userId) {
  const row = readRows_('Progress').find(p => p.userId === userId);
  let progress = {};
  if (row && row.progressJson) {
    try { progress = JSON.parse(row.progressJson) || {}; } catch (e) { progress = {}; }
  }
  return { row: row, progress: progress };
}

function handleGetProgress_(user) {
  const r = readProgress_(user.userId);
  return { success: true, progress: r.progress, updatedAt: r.row ? r.row.updatedAt : '' };
}

/**
 * บันทึกโดยรวมกับของเดิมในเซิร์ฟเวอร์ (mergeProgress_) — กันเครื่องหนึ่งเขียนทับผลของอีกเครื่อง
 * replace:true = แทนที่ทั้งหมด (ใช้ตอนผู้เรียนกด "ล้างข้อมูลทั้งหมด")
 */
function handleSaveProgress_(user, body) {
  const incoming = body.progress;
  if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) return { success: false, error: 'ข้อมูลไม่ถูกต้อง' };
  const r = readProgress_(user.userId);
  const merged = body.replace ? sanitizeProgress_(incoming) : mergeProgress_(r.progress, incoming);
  const json = JSON.stringify(merged);
  if (json.length > PROGRESS_MAX_CHARS_) return { success: false, error: 'ข้อมูลความก้าวหน้ามีขนาดใหญ่เกินไป' };
  const updatedAt = new Date().toISOString();
  writeRow_('Progress', { _row: r.row ? r.row._row : 0, userId: user.userId, progressJson: json, updatedAt: updatedAt });
  return { success: true, progress: merged, updatedAt: updatedAt };
}

/** เก็บเฉพาะฟิลด์ที่รู้จัก */
function sanitizeProgress_(p) {
  return mergeProgress_({}, p || {});
}

/**
 * รวมความก้าวหน้าสองชุด — ต้องตรงกับ mergeProgress ใน src/lib/merge.ts (แก้ต้องแก้คู่ ; tests/parity ตรวจ)
 * tests: ผลที่วันที่ใหม่กว่า ; practice: คะแนนสูงสุด ; cards: ค่าจากชุดที่ส่งมาใหม่ (b) ทับ
 */
function mergeProgress_(a, b) {
  a = a || {}; b = b || {};
  const tests = {};
  ['pre', 'post'].forEach(kind => {
    const x = a.tests && a.tests[kind], y = b.tests && b.tests[kind];
    if (x && y) tests[kind] = String(y.date) >= String(x.date) ? y : x;
    else if (x || y) tests[kind] = x || y;
  });
  const practice = {};
  [a.practice || {}, b.practice || {}].forEach(src => {
    Object.keys(src).forEach(k => {
      const v = Number(src[k]);
      if (isFinite(v)) practice[k] = Math.max(practice[k] === undefined ? -Infinity : practice[k], Math.min(Math.max(v, 0), 1));
    });
  });
  const cards = {};
  [a.cards || {}, b.cards || {}].forEach(src => {
    Object.keys(src).forEach(k => {
      const v = Number(src[k]);
      if (isFinite(v)) cards[k] = Math.min(Math.max(Math.round(v), 0), MASTERED_BOX_);
    });
  });
  return { tests: tests, practice: practice, cards: cards };
}

/** สรุปผลรายคนสำหรับหน้าผู้ดูแล — ต้องตรงกับ summarizeProgress ใน src/lib/merge.ts */
function summarizeProgress_(p) {
  p = p || {};
  const t = p.tests || {};
  const practice = p.practice || {};
  const unitKeys = Object.keys(practice).filter(k => !EXAM_ID_RE_.test(k));
  const examKeys = Object.keys(practice).filter(k => EXAM_ID_RE_.test(k));
  const cards = p.cards || {};
  return {
    preLevel: t.pre ? t.pre.level : '',
    preScore: t.pre ? t.pre.score + '/' + t.pre.maxScore : '',
    preDate: t.pre ? t.pre.date : '',
    postLevel: t.post ? t.post.level : '',
    postScore: t.post ? t.post.score + '/' + t.post.maxScore : '',
    postDate: t.post ? t.post.date : '',
    unitsPassed: unitKeys.filter(k => Number(practice[k]) >= UNIT_PASS_).length,
    unitsPracticed: unitKeys.length,
    examsPracticed: examKeys.length,
    wordsMastered: Object.keys(cards).filter(k => Number(cards[k]) >= MASTERED_BOX_).length,
  };
}

/* ================= ADMIN (owner) ================= */

function handleAdminListUsers_() {
  const progress = {};
  readRows_('Progress').forEach(r => {
    let p = {};
    try { p = JSON.parse(r.progressJson || '{}') || {}; } catch (e) { p = {}; }
    progress[r.userId] = { summary: summarizeProgress_(p), updatedAt: r.updatedAt };
  });
  const users = readRows_('Users').map(u => {
    const pr = progress[u.userId];
    return {
      userId: u.userId, username: u.username, displayName: u.displayName, role: u.role,
      active: !isInactive_(u.active), createdAt: u.createdAt, lastLoginAt: u.lastLoginAt,
      progressUpdatedAt: pr ? pr.updatedAt : '',
      summary: pr ? pr.summary : summarizeProgress_({}),
    };
  });
  return { success: true, users: users };
}

function handleAdminSetActive_(owner, body) {
  const user = findUser_('userId', body.userId);
  if (!user) return { success: false, error: 'ไม่พบบัญชีนี้' };
  if (user.userId === owner.userId) return { success: false, error: 'ปิดบัญชีของตัวเองไม่ได้' };
  user.active = body.active ? 'TRUE' : 'FALSE';
  writeRow_('Users', user);
  if (!body.active) revokeUserSessions_(user.userId);
  return { success: true };
}

function handleAdminResetPassword_(owner, body) {
  const user = findUser_('userId', body.userId);
  if (!user) return { success: false, error: 'ไม่พบบัญชีนี้' };
  const pwErr = passwordProblem_(body.newPassword);
  if (pwErr) return { success: false, error: pwErr };
  user.passwordHash = hashPassword_(body.newPassword);
  writeRow_('Users', user);
  revokeUserSessions_(user.userId, user.userId === owner.userId ? body.token : undefined);
  // ตั้งรหัสใหม่ = ปลดล็อกด้วย
  loginClearFails_(PropertiesService.getScriptProperties(), user.username);
  return { success: true };
}
