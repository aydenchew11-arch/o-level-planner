// ===== SUBJECT CATEGORIES =====
const CATEGORIES = {
  'Languages': ['English Language', 'Chinese', 'Higher Chinese', 'Malay Special Programme', 'Chinese Special Programme', 'Literature in English', 'Literature in Chinese'],
  'Mathematics': ['Mathematics', 'Additional Mathematics'],
  'Sciences': ['Chemistry', 'Physics', 'Biology', 'Science (Phy/Chem)', 'Science (Phy/Bio)', 'Science (Chem/Bio)'],
  'Humanities': ['Social Studies', 'Humanities (SS, Geog)', 'Humanities (SS, Hist)', 'Humanities (SS, Lit)', 'Geography', 'History'],
  'Arts & Electives': ['Art', 'Higher Art', 'Music', 'Design & Technology']
};

// ===== DEFAULT SUBJECT COLORS =====
const DEFAULT_SUBJECT_COLORS = {
  'English Language': '#2563eb',
  'Chinese': '#dc2626',
  'Higher Chinese': '#991b1b',
  'Malay Special Programme': '#ea580c',
  'Chinese Special Programme': '#c2410c',
  'Literature in English': '#7c3aed',
  'Literature in Chinese': '#a21caf',
  'Mathematics': '#059669',
  'Additional Mathematics': '#047857',
  'Chemistry': '#d97706',
  'Physics': '#4f46e5',
  'Biology': '#db2777',
  'Science (Phy/Chem)': '#f97316',
  'Science (Phy/Bio)': '#e11d48',
  'Science (Chem/Bio)': '#9333ea',
  'Social Studies': '#0891b2',
  'Humanities (SS, Geog)': '#0d9488',
  'Humanities (SS, Hist)': '#0284c7',
  'Humanities (SS, Lit)': '#6d28d9',
  'Geography': '#14b8a6',
  'History': '#0ea5e9',
  'Art': '#e11d48',
  'Higher Art': '#be123c',
  'Music': '#c026d3',
  'Design & Technology': '#ca8a04'
};

// ===== DATA: SEAB 2026 GCE O-Level Timetable =====
const EXAM_DATA = [
  // --- English Language (1184) ---
  { id:'eng-oral', subject:'English Language', code:'1184', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Students take turns on exam day (13-17 Jul). Check your scheduled slot.' },
  { id:'eng-lc', subject:'English Language', code:'1184', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'14:00', endTime:'14:45', mode:'Listening Comprehension', duration:'45 min', notes:'Be seated 30 minutes before start.' },
  { id:'eng-p1', subject:'English Language', code:'1184', paper:'Paper 1', paperName:'Writing', date:'2026-10-19', startTime:'13:30', endTime:'15:20', mode:'Written', duration:'1 hr 50 min', notes:'' },
  { id:'eng-p2', subject:'English Language', code:'1184', paper:'Paper 2', paperName:'Comprehension', date:'2026-10-19', startTime:'16:05', endTime:'17:55', mode:'Written', duration:'1 hr 50 min', notes:'' },

  // --- Chinese (1160) ---
  { id:'chi-p1', subject:'Chinese', code:'1160', paper:'Paper 1', paperName:'Writing', date:'2026-06-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Mid-Year Mother Tongue paper.' },
  { id:'chi-p2', subject:'Chinese', code:'1160', paper:'Paper 2', paperName:'Comprehension', date:'2026-06-02', startTime:'11:00', endTime:'12:30', mode:'Written', duration:'1 hr 30 min', notes:'Mid-Year Mother Tongue paper.' },
  { id:'chi-oral', subject:'Chinese', code:'1160', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
  { id:'chi-lc', subject:'Chinese', code:'1160', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },

  // --- Higher Chinese (1116) ---
  { id:'hchi-p1', subject:'Higher Chinese', code:'1116', paper:'Paper 1', paperName:'Writing', date:'2026-11-03', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Year-End paper.' },
  { id:'hchi-p2', subject:'Higher Chinese', code:'1116', paper:'Paper 2', paperName:'Comprehension', date:'2026-11-03', startTime:'11:00', endTime:'12:45', mode:'Written', duration:'1 hr 45 min', notes:'Year-End paper.' },
  { id:'hchi-oral', subject:'Higher Chinese', code:'1116', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
  { id:'hchi-lc', subject:'Higher Chinese', code:'1116', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },

  // --- Mathematics (4052) ---
  { id:'math-p1', subject:'Mathematics', code:'4052', paper:'Paper 1', paperName:'', date:'2026-10-21', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
  { id:'math-p2', subject:'Mathematics', code:'4052', paper:'Paper 2', paperName:'', date:'2026-10-23', startTime:'14:30', endTime:'16:45', mode:'Written', duration:'2 hr 15 min', notes:'' },

  // --- Additional Mathematics (4049) ---
  { id:'amath-p1', subject:'Additional Mathematics', code:'4049', paper:'Paper 1', paperName:'', date:'2026-10-26', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
  { id:'amath-p2', subject:'Additional Mathematics', code:'4049', paper:'Paper 2', paperName:'', date:'2026-10-28', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'' },

  // --- Social Studies (Combined Humanities Paper 1) ---
  { id:'ss-p1', subject:'Social Studies', code:'2260/2261/2262', paper:'Paper 1', paperName:'Social Studies', date:'2026-10-26', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'For all Combined Humanities candidates.' },

  // --- Combined Humanities (SS, Geography) (2260) ---
  { id:'humg-p2', subject:'Humanities (SS, Geog)', code:'2260', paper:'Paper 2', paperName:'Geography Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },

  // --- Combined Humanities (SS, History) (2261) ---
  { id:'humh-p2', subject:'Humanities (SS, Hist)', code:'2261', paper:'Paper 2', paperName:'History Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },

  // --- Combined Humanities (SS, Literature) (2262) ---
  { id:'huml-p2', subject:'Humanities (SS, Lit)', code:'2262', paper:'Paper 2', paperName:'Literature Elective', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },

  // --- Pure Geography (2279) ---
  { id:'geog-p1', subject:'Geography', code:'2279', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'geog-p2', subject:'Geography', code:'2279', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },

  // --- Pure History (2174) ---
  { id:'hist-p1', subject:'History', code:'2174', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
  { id:'hist-p2', subject:'History', code:'2174', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:50', mode:'Written', duration:'1 hr 50 min', notes:'' },

  // --- Pure Literature in English (2065) ---
  { id:'lit-p1', subject:'Literature in English', code:'2065', paper:'Paper 1', paperName:'', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
  { id:'lit-p2', subject:'Literature in English', code:'2065', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'10:30', endTime:'12:00', mode:'Written', duration:'1 hr 30 min', notes:'' },

  // --- Literature in Chinese (2031) ---
  { id:'litcn-p1', subject:'Literature in Chinese', code:'2031', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 hr 30 min', notes:'' },
  { id:'litcn-p2', subject:'Literature in Chinese', code:'2031', paper:'Paper 2', paperName:'', date:'2026-11-04', startTime:'14:00', endTime:'15:40', mode:'Written', duration:'1 hr 40 min', notes:'' },

  // --- Malay Special Programme (1133) ---
  { id:'msp-oral', subject:'Malay Special Programme', code:'1133', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
  { id:'msp-lc', subject:'Malay Special Programme', code:'1133', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
  { id:'msp-p1', subject:'Malay Special Programme', code:'1133', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'msp-p2', subject:'Malay Special Programme', code:'1133', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },

  // --- Chinese Special Programme (1166) ---
  { id:'csp-oral', subject:'Chinese Special Programme', code:'1166', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
  { id:'csp-lc', subject:'Chinese Special Programme', code:'1166', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
  { id:'csp-p1', subject:'Chinese Special Programme', code:'1166', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'csp-p2', subject:'Chinese Special Programme', code:'1166', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },

  // --- Chemistry (6092) ---
  { id:'chem-prac', subject:'Chemistry', code:'6092', paper:'Practical', paperName:'Science Practical', date:'2026-09-30', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50). Check scheduled shift.' },
  { id:'chem-p2', subject:'Chemistry', code:'6092', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-27', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'chem-p1', subject:'Chemistry', code:'6092', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },

  // --- Physics (6091) ---
  { id:'phy-prac', subject:'Physics', code:'6091', paper:'Practical', paperName:'Science Practical', date:'2026-10-05', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50). Check scheduled shift.' },
  { id:'phy-p2', subject:'Physics', code:'6091', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-29', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'phy-p1', subject:'Physics', code:'6091', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'14:30', endTime:'15:30', mode:'Written', duration:'1 hr', notes:'' },

  // --- Biology (6093) ---
  { id:'bio-prac', subject:'Biology', code:'6093', paper:'Practical', paperName:'Science Practical', date:'2026-10-13', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50). Check scheduled shift.' },
  { id:'bio-p2', subject:'Biology', code:'6093', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-30', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
  { id:'bio-p1', subject:'Biology', code:'6093', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 hr', notes:'' },

  // --- Combined Science (Phy/Chem) (5086) ---
  { id:'sc-pc-prac', subject:'Science (Phy/Chem)', code:'5086', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts (08:00-15:30). Check scheduled shift.' },
  { id:'sc-pc-p3', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-pc-p2', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-pc-p1', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },

  // --- Combined Science (Phy/Bio) (5087) ---
  { id:'sc-pb-prac', subject:'Science (Phy/Bio)', code:'5087', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts (08:00-15:30). Check scheduled shift.' },
  { id:'sc-pb-p2', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-pb-p4', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-pb-p1', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },

  // --- Combined Science (Chem/Bio) (5088) ---
  { id:'sc-cb-prac', subject:'Science (Chem/Bio)', code:'5088', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts (08:00-15:30). Check scheduled shift.' },
  { id:'sc-cb-p3', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-cb-p4', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
  { id:'sc-cb-p1', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },

  // --- Art (6114) ---
  { id:'art-p1', subject:'Art', code:'6114', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },

  // --- Higher Art (6124) ---
  { id:'hart-p1', subject:'Higher Art', code:'6124', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },

  // --- Music (6085) ---
  { id:'music-prac', subject:'Music', code:'6085', paper:'Practical', paperName:'Practical Examination', date:'2026-09-22', startTime:'08:00', endTime:null, mode:'Practical', duration:'10 min', notes:'Conducted 22-25 Sep. Check scheduled slot.' },
  { id:'music-p1', subject:'Music', code:'6085', paper:'Paper 1', paperName:'Written', date:'2026-11-02', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 hr 30 min', notes:'' },

  // --- Design & Technology (7059) ---
  { id:'dt-p1', subject:'Design & Technology', code:'7059', paper:'Paper 1', paperName:'', date:'2026-11-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'' },
];

// ===== INDEXED DB for PDF Notes =====
const DB_NAME = 'OLevelNotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function addNoteDB(note) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.add(note);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function deleteNoteDB(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.delete(id);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

async function getAllNotesDB() {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

async function getNoteDB(id) {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(id);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

// ===== GOAL TEMPLATES =====
const GOAL_TEMPLATES = [
  'Complete TYS (past 5 years)',
  'Review all lecture notes',
  'Practice Section A questions',
  'Practice Section B questions',
  'Create summary mind maps',
  'Do timed practice papers',
  'Focus on weak topics',
  'Review past mistakes',
  'Memorise key formulas',
  'Study with flashcards'
];

// ===== NOTES CACHE (loaded from IndexedDB) =====
let notesCache = [];

async function loadNotesCache() {
  try { notesCache = await getAllNotesDB(); } catch { notesCache = []; }
}

// ===== STATE =====
const STORAGE_KEY = 'olevel_planner_data';
const DEFAULTS = {
  selectedIds: [],
  darkMode: false,
  notifications: false,
  notificationsEnabled: false,
  progress: {},
  notes: {},
  goals: {}, // { subject: [ { id, text, completed } ] }
  goalsCollapsed: true,
  subjectColors: {},
  firstVisit: true
};
let state = {};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state = { ...DEFAULTS, ...saved };
    } else {
      state = { ...DEFAULTS };
    }
  } catch {
    state = { ...DEFAULTS };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) { console.warn('Save failed:', e); }
}

// ===== GOALS CRUD =====
function getGoals(subject) {
  return state.goals[subject] || [];
}

function addGoal(subject, text) {
  if (!text.trim()) return;
  if (!state.goals[subject]) state.goals[subject] = [];
  state.goals[subject].push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), text: text.trim(), completed: false });
  saveState();
}

function toggleGoal(subject, goalId) {
  const goals = state.goals[subject];
  if (!goals) return;
  const g = goals.find(g => g.id === goalId);
  if (g) { g.completed = !g.completed; saveState(); }
}

function deleteGoal(subject, goalId) {
  if (!state.goals[subject]) return;
  state.goals[subject] = state.goals[subject].filter(g => g.id !== goalId);
  if (!state.goals[subject].length) delete state.goals[subject];
  saveState();
}

// ===== DATE HELPERS (Singapore Time UTC+8) =====
function nowSG() {
  const now = new Date();
  const sgOffset = 8 * 60;
  const localOffset = now.getTimezoneOffset();
  return new Date(now.getTime() + (localOffset + sgOffset) * 60000);
}

function dateStrToSG(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function daysBetween(a, b) {
  return Math.round((a.getTime() - b.getTime()) / 86400000);
}

function getExamStatus(exam) {
  const now = nowSG();
  const todayStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  const examDay = dateStrToSG(exam.date);
  if (examDay < todayStart) return 'past';
  if (examDay.getTime() === todayStart.getTime()) return 'today';
  return 'upcoming';
}

function daysUntilExam(exam) {
  const todayStart = new Date(Date.UTC(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate()));
  return daysBetween(dateStrToSG(exam.date), todayStart);
}

function formatDate(dateStr) {
  return dateStrToSG(dateStr).toLocaleDateString('en-SG', { weekday:'short', day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' });
}

function formatTime(t) {
  if (!t) return '';
  const [h, m] = t.split(':');
  const hour = parseInt(h);
  return `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`;
}

// ===== SUBJECT COLOR HELPERS =====
function getSubjectColor(subject) {
  return state.subjectColors[subject] || DEFAULT_SUBJECT_COLORS[subject] || '#6b7280';
}

// ===== SELECTED EXAMS =====
function getSelectedExams() {
  return EXAM_DATA.filter(e => state.selectedIds.includes(e.id));
}

function getPeriodProgress() {
  const selected = getSelectedExams();
  if (!selected.length) return { pct: 0, totalDays: 0, elapsedDays: 0, remainingDays: 0 };
  const dates = selected.map(e => dateStrToSG(e.date)).sort((a, b) => a - b);
  const first = dates[0];
  const last = dates[dates.length - 1];
  const total = daysBetween(last, first);
  const elapsed = daysBetween(nowSG(), first);
  if (total <= 0) return { pct: 1, totalDays: 1, elapsedDays: 1, remainingDays: 0 };
  return {
    pct: Math.max(0, Math.min(1, elapsed / total)),
    totalDays: total,
    elapsedDays: Math.max(0, elapsed),
    remainingDays: Math.max(0, total - elapsed)
  };
}

function renderStatsBar() {
  const selected = getSelectedExams();
  const bar = document.getElementById('stats-bar');
  if (!selected.length) { bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  const subjSet = new Set(selected.map(e => e.subject));
  document.getElementById('stat-exams').textContent = selected.length;
  document.getElementById('stat-subjects').textContent = subjSet.size;
  const progress = getPeriodProgress();
  document.getElementById('stat-days-until').textContent = progress.remainingDays > 0 ? `${progress.remainingDays}d` : 'Done!';
}

// ===== RENDER HELPERS =====
function getStatusBadge(status) {
  const map = { upcoming:'Upcoming', today:'Today', past:'Completed' };
  return `<span class="exam-badge badge-${status}">${map[status]}</span>`;
}

function getCountdownHTML(exam, days) {
  const s = getExamStatus(exam);
  if (s === 'past') return `<div class="exam-countdown countdown-past">Completed</div>`;
  if (s === 'today') return `<div class="exam-countdown countdown-today">Today!</div>`;
  let cls = 'countdown-normal';
  if (days <= 7) cls = 'countdown-danger';
  else if (days <= 30) cls = 'countdown-warning';
  return `<div class="exam-countdown ${cls}">${days}</div><div class="exam-countdown-label">days remaining</div>`;
}

function getTrafficHTML(examId) {
  const levels = ['red', 'yellow', 'green'];
  const labels = ['Not Started', 'Revising', 'Ready'];
  const current = state.progress[examId] || 'red';
  return `<div class="traffic-lights" data-exam="${examId}">
    ${levels.map((l, i) => `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`).join('')}
    <span class="traffic-label">${labels[levels.indexOf(current)]}</span>
  </div>`;
}

function getTrafficSelectHTML(examId) {
  const levels = ['red', 'yellow', 'green'];
  const labels = ['Not Started', 'Revising', 'Ready'];
  const current = state.progress[examId] || 'red';
  return levels.map((l, i) =>
    `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`
  ).join('');
}

// ===== RENDER HERO =====
function renderHero() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  const hero = document.getElementById('hero');
  const card = document.getElementById('hero-card');
  if (!selected.length) { hero.classList.add('hidden'); return; }
  hero.classList.remove('hidden');
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const next = selected[0];
  const days = daysUntilExam(next);
  const status = getExamStatus(next);
  const pct = getPeriodProgress();

  const prog = getPeriodProgress();
  const seasonInfo = prog.totalDays > 0 ? `Day ${Math.min(prog.elapsedDays + 1, prog.totalDays)} of ${prog.totalDays}` : '';
  const remains = prog.remainingDays > 0 ? ` &middot; ${prog.remainingDays}d to go` : '';

  if (status === 'past') {
    card.innerHTML = `<div class="hero-label">All Examinations</div><div class="hero-countdown">&#10003;</div><div class="hero-unit">COMPLETED</div><div class="hero-subject">All exams are done!</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:100%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}</div>`;
  } else if (status === 'today') {
    card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">0</div><div class="hero-unit">TODAY</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>`;
  } else {
    card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">${days}</div><div class="hero-unit">DAYS</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>`;
  }
}

// ===== RENDER EXAM CARD =====
function renderExamCard(exam) {
  const days = daysUntilExam(exam);
  const status = getExamStatus(exam);
  const note = state.notes[exam.id] || '';
  const goal = state.goals[exam.subject];
  const color = getSubjectColor(exam.subject);
  const timeStr = exam.startTime ? formatTime(exam.startTime) + (exam.endTime ? ' - ' + formatTime(exam.endTime) : '') : '';
  const modeTag = exam.mode !== 'Written' ? `<span style="font-size:11px;color:var(--text2);background:var(--surface2);padding:1px 6px;border-radius:4px;margin-left:6px">${exam.mode}</span>` : '';

  // Check if notes exist for this exam or subject (from IndexedDB cache)
  const hasNotes = notesCache.some(n => n.examId === exam.id || n.subject === exam.subject);

  return `<div class="exam-card status-${status}" data-id="${exam.id}">
    <div class="exam-card-accent" style="background:${color}"></div>
    <div class="exam-card-header">
      <div class="exam-subject"><span class="exam-subject-dot" style="background:${color}"></span>${exam.subject}${modeTag}</div>
      ${getStatusBadge(status)}
    </div>
    <div class="exam-paper">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div>
    <div class="exam-date">${formatDate(exam.date)}${timeStr ? ' &middot; ' + timeStr : ''}</div>
    ${getCountdownHTML(exam, days)}
    ${getTrafficHTML(exam.id)}
    ${note ? `<div class="note-indicator has-notes">📝 ${note.slice(0, 50)}${note.length > 50 ? '...' : ''}</div>` : ''}
    ${hasNotes ? `<div class="note-indicator has-notes">📎 Notes attached</div>` : ''}
    ${goal ? `<div style="font-size:11px;color:var(--text2);margin-top:4px">🎯 ${goal.slice(0, 50)}${goal.length > 50 ? '...' : ''}</div>` : ''}
  </div>`;
}

// ===== RENDER GOALS =====
function renderGoals() {
  const selected = getSelectedExams();
  const section = document.getElementById('goals-section');
  const container = document.getElementById('goals-container');
  const toggleBtn = document.getElementById('btn-goals-toggle');

  if (!selected.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');

  const subjSet = [...new Set(selected.map(e => e.subject))].sort();
  const isCollapsed = state.goalsCollapsed;
  toggleBtn.textContent = isCollapsed ? 'Show' : 'Hide';

  if (isCollapsed) { container.classList.add('hidden'); container.innerHTML = ''; return; }
  container.classList.remove('hidden');

  let html = '';
  subjSet.forEach(subj => {
    const color = getSubjectColor(subj);
    const goals = getGoals(subj);
    html += `<div class="goal-subject-group">
      <div class="goal-subject-title"><span style="width:8px;height:8px;border-radius:50%;background:${color};display:inline-block"></span>${subj}</div>`;
    if (goals.length) {
      goals.forEach(g => {
        html += `<div class="goal-item">
          <input type="checkbox" class="goal-check" data-subject="${subj}" data-id="${g.id}" ${g.completed ? 'checked' : ''}>
          <span class="goal-text${g.completed ? ' done' : ''}">${g.text}</span>
          <button class="goal-delete" data-subject="${subj}" data-id="${g.id}" title="Delete goal">&times;</button>
        </div>`;
      });
    }
    html += `<div class="goal-add-row">
      <input type="text" class="goal-new-input" data-subject="${subj}" placeholder="Add a study goal..." maxlength="200">
      <select class="goal-template-select" data-subject="${subj}">
        <option value="">Template...</option>
        ${GOAL_TEMPLATES.map(t => `<option value="${t}">${t}</option>`).join('')}
      </select>
      <button class="btn btn-primary goal-add-btn" data-subject="${subj}">+ Add</button>
    </div>`;
    html += `</div>`;
  });
  container.innerHTML = html;

  // Wire up goal checkboxes
  container.querySelectorAll('.goal-check').forEach(cb => {
    cb.addEventListener('change', () => {
      toggleGoal(cb.dataset.subject, cb.dataset.id);
      renderGoals();
    });
  });

  // Wire up delete buttons
  container.querySelectorAll('.goal-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      deleteGoal(btn.dataset.subject, btn.dataset.id);
      renderGoals();
    });
  });

  // Wire up template selects
  container.querySelectorAll('.goal-template-select').forEach(sel => {
    sel.addEventListener('change', () => {
      if (sel.value) {
        const input = sel.closest('.goal-add-row').querySelector('.goal-new-input');
        input.value = sel.value;
        sel.value = '';
      }
    });
  });

  // Wire up add buttons
  container.querySelectorAll('.goal-add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const row = btn.closest('.goal-add-row');
      const input = row.querySelector('.goal-new-input');
      addGoal(btn.dataset.subject, input.value);
      input.value = '';
      renderGoals();
    });
  });

  // Wire up Enter key in inputs
  container.querySelectorAll('.goal-new-input').forEach(inp => {
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        addGoal(inp.dataset.subject, inp.value);
        inp.value = '';
        renderGoals();
      }
    });
  });
}

// ===== RENDER LIST =====
function renderList(ids) {
  const exams = ids.map(id => EXAM_DATA.find(e => e.id === id)).filter(Boolean);
  const sortBy = document.getElementById('sort-by').value;
  const filterSubj = document.getElementById('filter-subject').value;
  const searchQ = document.getElementById('search-exams').value.toLowerCase().trim();
  const view = document.querySelector('.view-tab.active')?.dataset?.view || 'upcoming';

  let filtered = exams;
  if (filterSubj) filtered = filtered.filter(e => e.subject === filterSubj);
  if (searchQ) filtered = filtered.filter(e =>
    e.subject.toLowerCase().includes(searchQ) ||
    e.paper.toLowerCase().includes(searchQ) ||
    e.paperName.toLowerCase().includes(searchQ)
  );
  if (view === 'upcoming') filtered = filtered.filter(e => { const s = getExamStatus(e); return s === 'upcoming' || s === 'today'; });

  filtered.sort((a, b) => {
    if (sortBy === 'subject') { const c = a.subject.localeCompare(b.subject); return c !== 0 ? c : dateStrToSG(a.date) - dateStrToSG(b.date); }
    return dateStrToSG(a.date) - dateStrToSG(b.date);
  });

  const container = document.getElementById('exam-list');
  const empty = document.getElementById('empty-state');
  if (!filtered.length) { container.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  container.innerHTML = filtered.map(renderExamCard).join('');
}

// ===== RENDER CALENDAR =====
let calDate = new Date(); calDate.setHours(0, 0, 0, 0);
let selectedCalDate = null;

function renderCalendar() {
  const year = calDate.getFullYear();
  const month = calDate.getMonth();
  document.getElementById('cal-month-year').textContent =
    new Date(year, month).toLocaleDateString('en-SG', { month:'long', year:'numeric', timeZone:'Asia/Singapore' });

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();
  const selected = getSelectedExams();
  const today = new Date(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate());

  let html = '';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => { html += `<div class="cal-day-header">${d}</div>`; });

  for (let i = firstDay - 1; i >= 0; i--) html += `<div class="cal-day other-month">${daysInPrev - i}</div>`;

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d);
    const isToday = dateObj.getTime() === today.getTime();
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const examsToday = selected.filter(e => e.date === dateStr);
    let cls = 'cal-day';
    if (isToday) cls += ' today';
    if (examsToday.length) cls += ' has-exam';

    if (selectedCalDate === dateStr) cls += ' selected';
    html += `<div class="${cls}" data-date="${dateStr}">${d}`;
    if (examsToday.length) {
      html += `<div class="cal-dots">`;
      examsToday.forEach(ex => {
        const color = getSubjectColor(ex.subject);
        html += `<span class="cal-dot" style="background:${color}" title="${ex.subject} ${ex.paper}"></span>`;
      });
      html += `</div>`;
    } else if (!isToday && year === calDate.getFullYear() && month === calDate.getMonth()) {
      html += `<div class="cal-no-exams-label">none</div>`;
    }
    html += `</div>`;
  }

  const total = firstDay + daysInMonth;
  for (let i = 1; i <= (7 - total % 7) % 7; i++) html += `<div class="cal-day other-month">${i}</div>`;

  document.getElementById('cal-grid').innerHTML = html;
  const sidebar = document.getElementById('cal-exam-detail');
  sidebar.innerHTML = '<p class="cal-no-selection">Click a date with exam dots to see details.</p>';

  // Click on any day -> update selection + show sidebar
  document.querySelectorAll('.cal-day:not(.other-month)').forEach(el => {
    el.addEventListener('click', () => {
      selectedCalDate = el.dataset.date;
      renderCalendar(); // re-render to update selected highlight

      const date = el.dataset.date;
      const examsToday = getSelectedExams().filter(e => e.date === date);
      const panel = document.getElementById('cal-exam-detail');
      if (!examsToday.length) {
        panel.innerHTML = `<p class="cal-no-selection">No exams on ${formatDate(date)}.</p>`;
        return;
      }
      panel.innerHTML = `<div style="font-size:14px;font-weight:600;margin-bottom:10px">${formatDate(date)}</div>` +
        examsToday.map(ex => {
          const color = getSubjectColor(ex.subject);
          const timeStr = ex.startTime ? ' &middot; ' + formatTime(ex.startTime) : '';
          return `<div class="cal-exam-item" data-id="${ex.id}">
            <span class="subj-dot" style="background:${color}"></span>
            <span><strong>${ex.subject}</strong> ${ex.paper}${timeStr}</span>
          </div>`;
        }).join('');
      panel.querySelectorAll('.cal-exam-item').forEach(item => {
        item.addEventListener('click', () => showExamDetail(item.dataset.id));
      });
    });
  });
}

// ===== RENDER SETUP (first visit, all deselected) =====
function renderSetup() {
  const container = document.getElementById('setup-subjects');
  container.innerHTML = '<div class="setup-select-all"><button id="setup-select-all-btn" class="btn btn-secondary">Select All</button></div>';
  const groupsByCat = {};
  Object.entries(CATEGORIES).forEach(([cat, subjects]) => {
    const entries = subjects.map(s => {
      const papers = EXAM_DATA.filter(e => e.subject === s);
      if (!papers.length) return null;
      return `<div class="setup-group" data-subject="${s}">
        <div class="setup-group-header">
          <input type="checkbox" class="subject-check">
          <label>${s} <span style="font-size:12px;color:var(--text2)">(${papers[0].code})</span></label>
        </div>
        <div class="setup-papers">
          ${papers.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}"><label>${p.paper}${p.paperName ? ' &mdash; ' + p.paperName : ''}</label></div>`).join('')}
        </div>
      </div>`;
    }).filter(Boolean);
    if (entries.length) {
      groupsByCat[cat] = entries.join('');
    }
  });

  // Render categories in order
  const catOrder = ['Languages', 'Mathematics', 'Sciences', 'Humanities', 'Arts & Electives'];
  catOrder.forEach(cat => {
    if (groupsByCat[cat]) {
      container.innerHTML += `<div class="setup-category"><div class="setup-category-title">${cat}</div>${groupsByCat[cat]}</div>`;
    }
  });

  // Wire up subject checkboxes
  container.querySelectorAll('.subject-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const group = cb.closest('.setup-group');
      group.querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked);
    });
  });
  container.querySelectorAll('.paper-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const group = cb.closest('.setup-group');
      const all = group.querySelectorAll('.paper-check');
      const checked = group.querySelectorAll('.paper-check:checked');
      group.querySelector('.subject-check').checked = all.length === checked.length;
    });
  });

  // Select All button
  document.getElementById('setup-select-all-btn').addEventListener('click', () => {
    const allChecked = [...document.querySelectorAll('#setup-subjects .paper-check')].every(c => c.checked);
    document.querySelectorAll('#setup-subjects .paper-check').forEach(c => c.checked = !allChecked);
    document.querySelectorAll('#setup-subjects .subject-check').forEach(c => {
      const group = c.closest('.setup-group');
      const all = group.querySelectorAll('.paper-check');
      const checked = group.querySelectorAll('.paper-check:checked');
      c.checked = all.length === checked.length;
    });
  });
}

// ===== RENDER SETTINGS =====
function renderSettings() {
  // Subjects
  const groupsByCat = {};
  Object.entries(CATEGORIES).forEach(([cat, subjects]) => {
    const entries = subjects.map(s => {
      const papers = EXAM_DATA.filter(e => e.subject === s);
      if (!papers.length) return null;
      const allSelected = papers.every(p => state.selectedIds.includes(p.id));
      return `<div class="setup-group" data-subject="${s}">
        <div class="setup-group-header">
          <input type="checkbox" class="subject-check" ${allSelected ? 'checked' : ''}>
          <label>${s}</label>
        </div>
        <div class="setup-papers">
          ${papers.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" ${state.selectedIds.includes(p.id) ? 'checked' : ''}><label>${p.paper}${p.paperName ? ' &mdash; ' + p.paperName : ''}</label></div>`).join('')}
        </div>
      </div>`;
    }).filter(Boolean);
    if (entries.length) groupsByCat[cat] = entries.join('');
  });

  const container = document.getElementById('settings-subjects');
  container.innerHTML = '<div class="setup-select-all"><button id="settings-select-all-btn" class="btn btn-secondary">Select All</button></div>';
  const catOrder = ['Languages', 'Mathematics', 'Sciences', 'Humanities', 'Arts & Electives'];
  catOrder.forEach(cat => {
    if (groupsByCat[cat]) container.innerHTML += `<div class="setup-category"><div class="setup-category-title">${cat}</div>${groupsByCat[cat]}</div>`;
  });

  container.querySelectorAll('.subject-check').forEach(cb => {
    cb.addEventListener('change', () => {
      cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked);
    });
  });
  container.querySelectorAll('.paper-check').forEach(cb => {
    cb.addEventListener('change', () => {
      const g = cb.closest('.setup-group');
      const a = g.querySelectorAll('.paper-check');
      g.querySelector('.subject-check').checked = a.length === g.querySelectorAll('.paper-check:checked').length;
    });
  });
  document.getElementById('settings-select-all-btn')?.addEventListener('click', () => {
    const allChecked = [...document.querySelectorAll('#settings-subjects .paper-check')].every(c => c.checked);
    document.querySelectorAll('#settings-subjects .paper-check').forEach(c => c.checked = !allChecked);
    document.querySelectorAll('#settings-subjects .subject-check').forEach(c => {
      const g = c.closest('.setup-group');
      c.checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length;
    });
  });

  // Colors
  const colorContainer = document.getElementById('settings-colors');
  const subjSet = [...new Set(EXAM_DATA.map(e => e.subject))].sort();
  colorContainer.innerHTML = subjSet.map(s =>
    `<div class="color-row"><label>${s}</label><input type="color" class="subject-color-input" data-subject="${s}" value="${getSubjectColor(s)}"></div>`
  ).join('');

  // Goals
  const goalContainer = document.getElementById('settings-goals');
  goalContainer.innerHTML = subjSet.map(s => {
      const goals = getGoals(s);
      return `<div class="goal-row" style="flex-wrap:wrap">
        <span style="min-width:140px;font-size:14px;font-weight:500">${s}</span>
        <span style="font-size:12px;color:var(--text2)">${goals.length ? goals.filter(g => !g.completed).length + ' pending' : 'No goals'}</span>
      </div>`;
    }).join('');
}

// ===== RENDER NOTES VIEW =====
async function renderNotes() {
  await loadNotesCache();
  const allNotes = notesCache;
  const container = document.getElementById('notes-list');
  const empty = document.getElementById('notes-empty');
  if (!allNotes.length) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  container.innerHTML = allNotes.map(n => {
    const color = getSubjectColor(n.subject);
    const dateStr = new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' });
    return `<div class="note-card">
      <div class="note-icon">&#128196;</div>
      <div class="note-info">
        <div class="note-subject" style="color:${color}">${n.subject}</div>
        <div class="note-paper">${n.paper || 'General notes'}</div>
        <div class="note-filename">${n.filename}</div>
        <div class="note-date">Uploaded ${dateStr}</div>
      </div>
      <div class="note-actions">
        <button class="btn btn-primary note-download" data-id="${n.id}">Download</button>
        <button class="btn btn-danger note-delete" data-id="${n.id}">Delete</button>
      </div>
    </div>`;
  }).join('');

  container.querySelectorAll('.note-download').forEach(btn => {
    btn.addEventListener('click', async () => {
      const note = await getNoteDB(parseInt(btn.dataset.id));
      if (note) {
        const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = note.filename;
        a.click();
        URL.revokeObjectURL(url);
      }
    });
  });

  container.querySelectorAll('.note-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      if (confirm('Delete this note?')) {
        await deleteNoteDB(parseInt(btn.dataset.id));
        await loadNotesCache();
        renderNotes();
        refreshAll();
      }
    });
  });
}

// ===== SHOW EXAM DETAIL MODAL =====
function showExamDetail(examId) {
  const exam = EXAM_DATA.find(e => e.id === examId);
  if (!exam) return;
  const days = daysUntilExam(exam);
  const status = getExamStatus(exam);
  const color = getSubjectColor(exam.subject);
  const timeStr = exam.startTime
    ? formatTime(exam.startTime) + (exam.endTime ? ' &ndash; ' + formatTime(exam.endTime) : '')
    : (exam.mode === 'Science Practical' || exam.mode === 'Practical') ? 'Multiple shifts (see notes)' : '';
  const note = state.notes[exam.id] || '';

  const modal = document.getElementById('modal-body');
  modal.innerHTML = `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:12px">
      <span style="width:12px;height:12px;border-radius:50%;background:${color};display:inline-block"></span>
      <span class="detail-value">${exam.subject} (${exam.code})</span>
    </div>
    <div class="detail-field"><div class="detail-label">Paper</div><div class="detail-value">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div></div>
    <div class="detail-field"><div class="detail-label">Date</div><div class="detail-value">${formatDate(exam.date)}</div></div>
    <div class="detail-field"><div class="detail-label">Mode</div><div class="detail-value">${exam.mode}${exam.duration ? ' &middot; ' + exam.duration : ''}</div></div>
    ${timeStr ? `<div class="detail-field"><div class="detail-label">Time</div><div class="detail-value">${timeStr}</div></div>` : ''}
    <div class="detail-countdown ${status === 'past' ? 'countdown-past' : status === 'today' ? 'countdown-today' : days <= 7 ? 'countdown-danger' : days <= 30 ? 'countdown-warning' : 'countdown-normal'}">
      ${status === 'past' ? 'Completed' : status === 'today' ? 'Today!' : days + ' days remaining'}
    </div>
    ${exam.notes ? `<div class="detail-field"><div class="detail-label">Notes</div><div class="detail-value" style="font-size:14px;color:var(--text2)">${exam.notes}</div></div>` : ''}
    <div class="detail-traffic">
      <h4>Preparation Progress</h4>
      <div class="traffic-select" data-exam="${exam.id}">
        ${getTrafficSelectHTML(exam.id)}
      </div>
    </div>
    <div class="detail-notes">
      <label class="detail-label" for="detail-note-input">Personal Notes</label>
      <textarea id="detail-note-input" placeholder="Add your notes here...">${note}</textarea>
    </div>
    <div class="detail-upload">
      <h4>Upload PDF Notes</h4>
      <p style="font-size:13px;color:var(--text2);margin-bottom:8px">Choose a PDF file, then pick where to attach it.</p>
      <input type="file" id="note-upload-input" accept=".pdf" style="display:block;margin-bottom:8px;font-size:13px">
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button id="btn-upload-note" class="btn btn-primary" style="flex:1">
          <span style="font-size:16px">&#128196;</span> Attach to this paper
        </button>
        <button id="btn-upload-subject-note" class="btn btn-secondary" style="flex:1">
          <span style="font-size:16px">&#128194;</span> Attach to ${exam.subject} (all papers)
        </button>
      </div>
      <div id="uploaded-files-container" class="uploaded-files"></div>
    </div>
  `;

  document.getElementById('exam-modal').classList.remove('hidden');

  // Traffic light clicks
  modal.querySelectorAll('.traffic-light').forEach(el => {
    el.addEventListener('click', () => {
      const level = el.dataset.level;
      state.progress[exam.id] = level;
      saveState();
      modal.querySelectorAll('.traffic-light').forEach(l => l.classList.toggle('active', l.dataset.level === level));
      refreshAll();
    });
  });

  // Notes textarea
  modal.querySelector('#detail-note-input').addEventListener('input', () => {
    state.notes[exam.id] = modal.querySelector('#detail-note-input').value;
    saveState();
    refreshAll();
  });

  // PDF upload
  const fileInput = modal.querySelector('#note-upload-input');
  modal.querySelector('#btn-upload-note').addEventListener('click', async () => {
    if (!fileInput.files.length) return alert('Please select a PDF file first.');
    await uploadNote(fileInput.files[0], exam.subject, exam.paper, exam.id);
    fileInput.value = '';
    renderUploadedFiles(exam);
  });
  modal.querySelector('#btn-upload-subject-note').addEventListener('click', async () => {
    if (!fileInput.files.length) return alert('Please select a PDF file first.');
    await uploadNote(fileInput.files[0], exam.subject, 'General notes', null);
    fileInput.value = '';
    renderUploadedFiles(exam);
  });

  renderUploadedFiles(exam);
}

async function uploadNote(file, subject, paper, examId) {
  const filedata = await file.arrayBuffer();
  await addNoteDB({
    subject,
    paper,
    examId,
    filename: file.name,
    filetype: file.type || 'application/pdf',
    filedata,
    uploadDate: new Date().toISOString()
  });
  await loadNotesCache();
}

async function renderUploadedFiles(exam) {
  const allNotes = await getAllNotesDB();
  const related = allNotes.filter(n => n.examId === exam.id || (n.subject === exam.subject && !n.examId));
  const container = document.getElementById('uploaded-files-container');
  if (!related.length) { container.innerHTML = ''; return; }
  container.innerHTML = related.map(n => {
    const dateStr = new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short' });
    return `<div class="uploaded-file"><span>&#128196;</span><span>${n.filename}</span><span style="font-size:11px;color:var(--text2)">${dateStr}</span>
      <button class="btn btn-small note-download" data-id="${n.id}">Open</button>
      <button class="btn btn-small btn-danger note-delete" data-id="${n.id}">&times;</button>
    </div>`;
  }).join('');
  container.querySelectorAll('.note-download').forEach(btn => {
    btn.addEventListener('click', async () => {
      const note = await getNoteDB(parseInt(btn.dataset.id));
      if (note) {
        const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
      }
    });
  });
  container.querySelectorAll('.note-delete').forEach(btn => {
    btn.addEventListener('click', async () => {
      await deleteNoteDB(parseInt(btn.dataset.id));
      await loadNotesCache();
      renderUploadedFiles(exam);
      renderNotes();
      refreshAll();
    });
  });
}

// ===== APPLY SETTINGS =====
function applySelectionFromUI(containerId) {
  const ids = [];
  document.querySelectorAll(`#${containerId} .paper-check:checked`).forEach(cb => ids.push(cb.dataset.id));
  state.selectedIds = ids;
}

function applyGoalsFromUI() {}

function applyColorsFromUI() {
  document.querySelectorAll('.subject-color-input').forEach(inp => {
    state.subjectColors[inp.dataset.subject] = inp.value;
  });
}

// ===== NOTIFICATIONS =====
function requestNotificationPermission() {
  if (!('Notification' in window)) return false;
  if (Notification.permission === 'granted') return true;
  if (Notification.permission === 'denied') return false;
  Notification.requestPermission();
  return false;
}

function checkAndNotify() {
  if (!state.notifications || !state.notificationsEnabled) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  const selected = getSelectedExams();
  selected.forEach(ex => {
    const days = daysUntilExam(ex);
    if ((days === 7 || days === 3 || days === 1 || days === 0) && days >= 0) {
      const key = `notified_${ex.id}_${days}`;
      if (!localStorage.getItem(key)) {
        const msg = days === 0 ? `${ex.subject} ${ex.paper} is TODAY!` : `${ex.subject} ${ex.paper} in ${days} day${days > 1 ? 's' : ''}!`;
        try { new Notification('O-Level Countdown', { body: msg }); } catch {}
        localStorage.setItem(key, '1');
      }
    }
  });
}

// ===== EXPORT / IMPORT =====
function exportData() {
  const data = JSON.stringify({
    selectedIds: state.selectedIds,
    progress: state.progress,
    notes: state.notes,
    goals: state.goals,
    subjectColors: state.subjectColors,
    darkMode: state.darkMode,
    notifications: state.notifications,
    exportedAt: new Date().toISOString()
  }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `o-level-config-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.selectedIds) state.selectedIds = data.selectedIds;
      if (data.progress) state.progress = data.progress;
      if (data.notes) state.notes = data.notes;
      if (data.goals) state.goals = data.goals;
      if (data.subjectColors) state.subjectColors = data.subjectColors;
      if (data.darkMode !== undefined) state.darkMode = data.darkMode;
      if (data.notifications !== undefined) state.notifications = data.notifications;
      saveState();
      refreshAll();
      showToast('Configuration imported successfully!');
    } catch { showToast('Invalid file format.', 4000); }
  };
  reader.readAsText(file);
}

// ===== DYNAMIC PAGE TITLE =====
function updateTitle() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  if (!selected.length) { document.title = 'O-Level Countdown Planner'; return; }
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const days = daysUntilExam(selected[0]);
  if (days === 0) document.title = '📢 TODAY - O-Level Countdown';
  else document.title = `${days}d to ${selected[0].subject} - O-Level Countdown`;
}

// ===== TOAST NOTIFICATION =====
function showToast(msg, duration) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('hidden');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.add('hidden'), duration || 3000);
}

// ===== REFRESH ALL =====
function refreshAll() {
  updateTitle();
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  document.getElementById('settings-darkmode').checked = state.darkMode;
  document.getElementById('settings-notifications').checked = state.notifications;

  const filterSel = document.getElementById('filter-subject');
  const currentVal = filterSel.value;
  const subjSet = new Set(getSelectedExams().map(e => e.subject));
  filterSel.innerHTML = '<option value="">All Subjects</option>' +
    [...subjSet].sort().map(s => `<option value="${s}">${s}</option>`).join('');
  filterSel.value = currentVal || '';

  renderHero();
  renderStatsBar();
  renderGoals();
  renderList(state.selectedIds);
  renderCalendar();
  // Notes view re-rendered separately when tab is clicked
  if (document.getElementById('notes-view').classList.contains('active')) renderNotes();

  // If notes view is active, re-render
  if (document.getElementById('notes-view').classList.contains('active')) {
    renderNotes();
  }
}

// ===== EVENT WIRING =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  if (state.darkMode) document.documentElement.setAttribute('data-theme', 'dark');

  // First visit setup
  if (state.firstVisit) {
    renderSetup();
    document.getElementById('setup-overlay').classList.remove('hidden');
  } else {
    refreshAll();
  }

  // Setup save
  document.getElementById('setup-save').addEventListener('click', () => {
    applySelectionFromUI('setup-subjects');
    state.firstVisit = false;
    saveState();
    document.getElementById('setup-overlay').classList.add('hidden');
    refreshAll();
  });

  // View tabs
  document.querySelectorAll('.view-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active'));
      const view = tab.dataset.view;
      if (view === 'calendar') document.getElementById('calendar-view').classList.add('active');
      else if (view === 'notes') {
        document.getElementById('notes-view').classList.add('active');
        renderNotes();
      } else document.getElementById('list-view').classList.add('active');
      if (view === 'upcoming' || view === 'all') renderList(state.selectedIds);
      // Clear calendar selection when switching away
    });
  });

  // Filters
  document.getElementById('filter-subject').addEventListener('change', () => renderList(state.selectedIds));
  document.getElementById('sort-by').addEventListener('change', () => renderList(state.selectedIds));
  document.getElementById('search-exams').addEventListener('input', () => renderList(state.selectedIds));

  // Exam card click -> detail modal (ignore traffic light clicks)
  document.getElementById('exam-list').addEventListener('click', (e) => {
    if (e.target.closest('.traffic-lights')) return;
    const card = e.target.closest('.exam-card');
    if (card) showExamDetail(card.dataset.id);
  });

  // Traffic light clicks on cards
  document.getElementById('exam-list').addEventListener('click', (e) => {
    const light = e.target.closest('.traffic-light');
    if (!light) return;
    const examId = light.closest('.traffic-lights').dataset.exam;
    const level = light.dataset.level;
    state.progress[examId] = level;
    saveState();
    refreshAll();
  });

  // Modal close
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => btn.closest('.overlay').classList.add('hidden'));
  });
  document.querySelectorAll('.overlay').forEach(o => {
    o.addEventListener('click', (e) => { if (e.target === o) o.classList.add('hidden'); });
  });

  // Dark mode toggle
  document.getElementById('btn-darkmode').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    saveState();
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    document.getElementById('settings-darkmode').checked = state.darkMode;
  });

  // Settings
  document.getElementById('btn-settings').addEventListener('click', () => {
    renderSettings();
    document.getElementById('settings-darkmode').checked = state.darkMode;
    document.getElementById('settings-notifications').checked = state.notifications;
    document.getElementById('settings-modal').classList.remove('hidden');
  });
  document.getElementById('settings-save').addEventListener('click', () => {
    applySelectionFromUI('settings-subjects');
    applyGoalsFromUI();
    applyColorsFromUI();
    state.darkMode = document.getElementById('settings-darkmode').checked;
    state.notifications = document.getElementById('settings-notifications').checked;
    saveState();
    document.getElementById('settings-modal').classList.add('hidden');
    refreshAll();
  });

  // Export/Import
  document.getElementById('btn-export').addEventListener('click', () => document.getElementById('export-modal').classList.remove('hidden'));
  document.getElementById('btn-do-export').addEventListener('click', exportData);
  document.getElementById('btn-do-import').addEventListener('click', () => {
    const fi = document.getElementById('import-file');
    if (fi.files.length) importData(fi.files[0]);
    else alert('Please select a file first.');
  });

  // Notifications
  document.getElementById('btn-notifications').addEventListener('click', () => {
    const ok = requestNotificationPermission();
    if (ok) { state.notificationsEnabled = true; state.notifications = true; saveState(); document.getElementById('settings-notifications').checked = true; }
  });
  document.getElementById('settings-notifications').addEventListener('change', (e) => {
    if (e.target.checked && !state.notificationsEnabled) requestNotificationPermission();
  });

  // Calendar nav
  document.getElementById('cal-prev').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
  document.getElementById('cal-next').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });

  // Goals toggle
  document.getElementById('btn-goals-toggle').addEventListener('click', () => {
    state.goalsCollapsed = !state.goalsCollapsed;
    saveState();
    renderGoals();
  });

  // Feedback
  document.getElementById('btn-feedback').addEventListener('click', () => {
    document.getElementById('feedback-modal').classList.remove('hidden');
  });
  document.getElementById('btn-feedback-send').addEventListener('click', () => {
    const statusEl = document.getElementById('feedback-status');
    const name = document.getElementById('feedback-name').value.trim();
    const email = document.getElementById('feedback-email').value.trim();
    const msg = document.getElementById('feedback-message').value.trim();
    if (!msg) { statusEl.textContent = 'Please enter a message.'; return; }
    statusEl.textContent = 'Sending...';
    fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message: msg })
    }).then(res => {
      if (!res.ok) throw new Error();
      statusEl.textContent = 'Thank you! Feedback submitted.';
    }).catch(() => {
      const feedbacks = JSON.parse(localStorage.getItem('owner_feedback') || '[]');
      feedbacks.push({ id: Date.now().toString(36), name: name || 'Anonymous', email, message: msg, date: new Date().toISOString() });
      localStorage.setItem('owner_feedback', JSON.stringify(feedbacks));
      statusEl.textContent = 'Saved locally (server offline).';
    }).then(() => {
      document.getElementById('feedback-name').value = '';
      document.getElementById('feedback-email').value = '';
      document.getElementById('feedback-message').value = '';
      setTimeout(() => {
        document.getElementById('feedback-modal').classList.add('hidden');
        statusEl.textContent = '';
      }, 2000);
    });
  });

  // ESC key to close modals, ? for help
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.overlay:not(.hidden)').forEach(o => o.classList.add('hidden'));
    }
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) {
      const help = [
        'Keyboard shortcuts:',
        '  ?        Show this help',
        '  Escape   Close modals',
        '  D        Toggle dark mode',
        '',
        'Click an exam card to see details.',
        'Upload PDF notes from the exam detail modal.',
        'Customise subject colours in Settings.'
      ].join('\n');
      alert(help);
    }
    if (e.key === 'd' || e.key === 'D') {
      if (!e.ctrlKey && !e.metaKey && !e.target.closest('input,textarea,select')) {
        e.preventDefault();
        document.getElementById('btn-darkmode').click();
      }
    }
  });

  // Empty state settings
  document.getElementById('btn-empty-settings').addEventListener('click', () => {
    renderSettings();
    document.getElementById('settings-modal').classList.remove('hidden');
  });

  // Notification banner
  document.getElementById('notif-close').addEventListener('click', () => document.getElementById('notification-banner').classList.add('hidden'));

  // Load notes cache from IndexedDB
  loadNotesCache();

  // Check notifications on load
  checkAndNotify();
  setInterval(() => { refreshAll(); checkAndNotify(); }, 60000);
});
