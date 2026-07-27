// ===== GOOGLE FORM =====
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfh9PlBT3YuABzFivtPLhDPe8j8LgwT0j3oV1fPKxIb-vLUrw/viewform';

// ===== SUBJECT CATEGORIES =====
const CATEGORIES = {
  'Languages': ['English Language', 'Chinese', 'Higher Chinese', 'Malay Special Programme', 'Chinese Special Programme', 'Literature in English', 'Literature in Chinese'],
  'Mathematics': ['Mathematics', 'Additional Mathematics'],
  'Sciences': ['Chemistry', 'Physics', 'Biology', 'Science (Phy/Chem)', 'Science (Phy/Bio)', 'Science (Chem/Bio)'],
  'Humanities': ['Social Studies', 'Humanities (SS, Geog)', 'Humanities (SS, Hist)', 'Humanities (SS, Lit)', 'Geography', 'History'],
  'Arts & Electives': ['Art', 'Higher Art', 'Music', 'Design & Technology']
};

const DEFAULT_SUBJECT_COLORS = {
  'English Language': '#2563eb', 'Chinese': '#dc2626', 'Higher Chinese': '#991b1b',
  'Malay Special Programme': '#ea580c', 'Chinese Special Programme': '#c2410c',
  'Literature in English': '#7c3aed', 'Literature in Chinese': '#a21caf',
  'Mathematics': '#059669', 'Additional Mathematics': '#047857',
  'Chemistry': '#d97706', 'Physics': '#4f46e5', 'Biology': '#db2777',
  'Science (Phy/Chem)': '#f97316', 'Science (Phy/Bio)': '#e11d48', 'Science (Chem/Bio)': '#9333ea',
  'Social Studies': '#0891b2', 'Humanities (SS, Geog)': '#0d9488', 'Humanities (SS, Hist)': '#0284c7',
  'Humanities (SS, Lit)': '#6d28d9', 'Geography': '#14b8a6', 'History': '#0ea5e9',
  'Art': '#e11d48', 'Higher Art': '#be123c', 'Music': '#c026d3', 'Design & Technology': '#ca8a04'
};

const COLOR_PALETTE = ['#2563eb','#dc2626','#059669','#d97706','#7c3aed','#db2777','#0891b2','#ea580c','#4f46e5','#ca8a04','#14b8a6','#e11d48','#0284c7','#84cc16','#f97316','#8b5cf6','#06b6d4','#f43f5e','#0ea5e9','#a855f7','#10b981','#eab308','#6366f1','#ec4899'];

// ===== BUILT-IN EXAM DATA =====
const BUILTIN_EXAMS = {
  'o-level': { key: 'o-level', name: 'GCE O-Level 2026', categories: CATEGORIES, colors: DEFAULT_SUBJECT_COLORS, papers: [
    { id:'eng-oral', subject:'English Language', code:'1184', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'20 min', notes:'Students take turns on exam day (13-17 Jul). Check your scheduled slot.' },
    { id:'eng-lc', subject:'English Language', code:'1184', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'14:00', endTime:'14:45', mode:'Listening Comprehension', duration:'45 min', notes:'Be seated 30 minutes before start.' },
    { id:'eng-p1', subject:'English Language', code:'1184', paper:'Paper 1', paperName:'Writing', date:'2026-10-19', startTime:'13:30', endTime:'15:20', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'eng-p2', subject:'English Language', code:'1184', paper:'Paper 2', paperName:'Comprehension', date:'2026-10-19', startTime:'16:05', endTime:'17:55', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'chi-p1', subject:'Chinese', code:'1160', paper:'Paper 1', paperName:'Writing', date:'2026-06-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Mid-Year Mother Tongue paper.' },
    { id:'chi-p2', subject:'Chinese', code:'1160', paper:'Paper 2', paperName:'Comprehension', date:'2026-06-02', startTime:'11:00', endTime:'12:30', mode:'Written', duration:'1 hr 30 min', notes:'Mid-Year Mother Tongue paper.' },
    { id:'chi-oral', subject:'Chinese', code:'1160', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
    { id:'chi-lc', subject:'Chinese', code:'1160', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'hchi-p1', subject:'Higher Chinese', code:'1116', paper:'Paper 1', paperName:'Writing', date:'2026-11-03', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'Year-End paper.' },
    { id:'hchi-p2', subject:'Higher Chinese', code:'1116', paper:'Paper 2', paperName:'Comprehension', date:'2026-11-03', startTime:'11:00', endTime:'12:45', mode:'Written', duration:'1 hr 45 min', notes:'Year-End paper.' },
    { id:'hchi-oral', subject:'Higher Chinese', code:'1116', paper:'Oral', paperName:'Oral Examination', date:'2026-07-13', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day (13-17 Jul).' },
    { id:'hchi-lc', subject:'Higher Chinese', code:'1116', paper:'LC', paperName:'Listening Comprehension', date:'2026-07-07', startTime:'14:00', endTime:'14:30', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'math-p1', subject:'Mathematics', code:'4052', paper:'Paper 1', paperName:'', date:'2026-10-21', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'math-p2', subject:'Mathematics', code:'4052', paper:'Paper 2', paperName:'', date:'2026-10-23', startTime:'14:30', endTime:'16:45', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'amath-p1', subject:'Additional Mathematics', code:'4049', paper:'Paper 1', paperName:'', date:'2026-10-26', startTime:'14:00', endTime:'16:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'amath-p2', subject:'Additional Mathematics', code:'4049', paper:'Paper 2', paperName:'', date:'2026-10-28', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'' },
    { id:'ss-p1', subject:'Social Studies', code:'2260/2261/2262', paper:'Paper 1', paperName:'Social Studies', date:'2026-10-26', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'For all Combined Humanities candidates.' },
    { id:'humg-p2', subject:'Humanities (SS, Geog)', code:'2260', paper:'Paper 2', paperName:'Geography Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'humh-p2', subject:'Humanities (SS, Hist)', code:'2261', paper:'Paper 2', paperName:'History Elective', date:'2026-10-20', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'huml-p2', subject:'Humanities (SS, Lit)', code:'2262', paper:'Paper 2', paperName:'Literature Elective', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'geog-p1', subject:'Geography', code:'2279', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'geog-p2', subject:'Geography', code:'2279', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'hist-p1', subject:'History', code:'2174', paper:'Paper 1', paperName:'', date:'2026-10-22', startTime:'14:00', endTime:'15:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'hist-p2', subject:'History', code:'2174', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'08:00', endTime:'09:50', mode:'Written', duration:'1 hr 50 min', notes:'' },
    { id:'lit-p1', subject:'Literature in English', code:'2065', paper:'Paper 1', paperName:'', date:'2026-10-29', startTime:'08:00', endTime:'09:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'lit-p2', subject:'Literature in English', code:'2065', paper:'Paper 2', paperName:'', date:'2026-10-27', startTime:'10:30', endTime:'12:00', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'litcn-p1', subject:'Literature in Chinese', code:'2031', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'14:00', endTime:'15:30', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'litcn-p2', subject:'Literature in Chinese', code:'2031', paper:'Paper 2', paperName:'', date:'2026-11-04', startTime:'14:00', endTime:'15:40', mode:'Written', duration:'1 hr 40 min', notes:'' },
    { id:'msp-oral', subject:'Malay Special Programme', code:'1133', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
    { id:'msp-lc', subject:'Malay Special Programme', code:'1133', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'msp-p1', subject:'Malay Special Programme', code:'1133', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'msp-p2', subject:'Malay Special Programme', code:'1133', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'csp-oral', subject:'Chinese Special Programme', code:'1166', paper:'Oral', paperName:'Oral Examination', date:'2026-07-22', startTime:'14:15', endTime:null, mode:'Oral', duration:'15 min', notes:'Students take turns on exam day.' },
    { id:'csp-lc', subject:'Chinese Special Programme', code:'1166', paper:'LC', paperName:'Listening Comprehension', date:'2026-10-15', startTime:'16:30', endTime:'17:00', mode:'Listening Comprehension', duration:'30 min', notes:'Be seated 30 min before start.' },
    { id:'csp-p1', subject:'Chinese Special Programme', code:'1166', paper:'Paper 1', paperName:'', date:'2026-11-05', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'csp-p2', subject:'Chinese Special Programme', code:'1166', paper:'Paper 2', paperName:'', date:'2026-11-05', startTime:'10:30', endTime:'11:45', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'chem-prac', subject:'Chemistry', code:'6092', paper:'Practical', paperName:'Science Practical', date:'2026-09-30', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'chem-p2', subject:'Chemistry', code:'6092', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-27', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'chem-p1', subject:'Chemistry', code:'6092', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'phy-prac', subject:'Physics', code:'6091', paper:'Practical', paperName:'Science Practical', date:'2026-10-05', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'phy-p2', subject:'Physics', code:'6091', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-29', startTime:'14:00', endTime:'15:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'phy-p1', subject:'Physics', code:'6091', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-06', startTime:'14:30', endTime:'15:30', mode:'Written', duration:'1 hr', notes:'' },
    { id:'bio-prac', subject:'Biology', code:'6093', paper:'Practical', paperName:'Science Practical', date:'2026-10-13', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 50 min', notes:'Conducted in shifts (08:00-16:50).' },
    { id:'bio-p2', subject:'Biology', code:'6093', paper:'Paper 2', paperName:'Structured & Free Response', date:'2026-10-30', startTime:'08:00', endTime:'09:45', mode:'Written', duration:'1 hr 45 min', notes:'' },
    { id:'bio-p1', subject:'Biology', code:'6093', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'14:00', endTime:'15:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-pc-prac', subject:'Science (Phy/Chem)', code:'5086', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-pc-p3', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pc-p2', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pc-p1', subject:'Science (Phy/Chem)', code:'5086', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-pb-prac', subject:'Science (Phy/Bio)', code:'5087', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-pb-p2', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 2', paperName:'Physics', date:'2026-10-29', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pb-p4', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-pb-p1', subject:'Science (Phy/Bio)', code:'5087', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'sc-cb-prac', subject:'Science (Chem/Bio)', code:'5088', paper:'Practical', paperName:'Science Practical', date:'2026-10-08', startTime:null, endTime:null, mode:'Science Practical', duration:'1 hr 30 min', notes:'Conducted in shifts.' },
    { id:'sc-cb-p3', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 3', paperName:'Chemistry', date:'2026-10-27', startTime:'14:00', endTime:'15:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-cb-p4', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 4', paperName:'Biology', date:'2026-10-30', startTime:'08:00', endTime:'09:15', mode:'Written', duration:'1 hr 15 min', notes:'' },
    { id:'sc-cb-p1', subject:'Science (Chem/Bio)', code:'5088', paper:'Paper 1', paperName:'Multiple Choice', date:'2026-11-10', startTime:'08:00', endTime:'09:00', mode:'Written', duration:'1 hr', notes:'' },
    { id:'art-p1', subject:'Art', code:'6114', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },
    { id:'hart-p1', subject:'Higher Art', code:'6124', paper:'Paper 1', paperName:'Coursework / Study', date:'2026-11-02', startTime:'08:00', endTime:'10:15', mode:'Written', duration:'2 hr 15 min', notes:'Revised syllabus.' },
    { id:'music-prac', subject:'Music', code:'6085', paper:'Practical', paperName:'Practical Examination', date:'2026-09-22', startTime:'08:00', endTime:null, mode:'Practical', duration:'10 min', notes:'Conducted 22-25 Sep. Check scheduled slot.' },
    { id:'music-p1', subject:'Music', code:'6085', paper:'Paper 1', paperName:'Written', date:'2026-11-02', startTime:'08:00', endTime:'09:30', mode:'Written', duration:'1 hr 30 min', notes:'' },
    { id:'dt-p1', subject:'Design & Technology', code:'7059', paper:'Paper 1', paperName:'', date:'2026-11-02', startTime:'08:00', endTime:'10:00', mode:'Written', duration:'2 hr', notes:'' }
  ]},
  'n-level': { key: 'n-level', name: 'GCE N-Level 2026', categories: {
    'Languages': ['English Language', 'Chinese', 'Malay', 'Tamil'],
    'Mathematics': ['Mathematics', 'Additional Mathematics'],
    'Sciences': ['Science', 'Science (Phy/Chem)', 'Science (Chem/Bio)', 'Science (Phy/Bio)'],
    'Humanities': ['Social Studies', 'Geography', 'History', 'Literature in English'],
    'Applied Subjects': ['Art', 'Design & Technology', 'Food & Nutrition', 'Music', 'Drama']
  }, colors: {}, papers: [] },
  'a-level': { key: 'a-level', name: 'GCE A-Level 2026', categories: {
    'H1 Subjects': ['General Paper', 'Mathematics (H1)', 'Economics (H1)', 'Geography (H1)', 'History (H1)', 'Literature (H1)', 'Art (H1)', 'Music (H1)'],
    'H2 Subjects': ['Mathematics (H2)', 'Physics (H2)', 'Chemistry (H2)', 'Biology (H2)', 'Economics (H2)', 'Geography (H2)', 'History (H2)', 'Literature (H2)', 'Art (H2)', 'Music (H2)', 'Computing (H2)'],
    'H3 Subjects': ['Mathematics (H3)', 'Physics (H3)', 'Chemistry (H3)', 'Biology (H3)', 'Economics (H3)'],
    'Others': ['Project Work (H1)', 'Mother Tongue A (H1)', 'General Studies in Chinese']
  }, colors: {}, papers: [] }
};

// ===== INDEXED DB for PDF Notes =====
const DB_NAME = 'ExamNotesDB';
const DB_VERSION = 1;
const STORE_NAME = 'notes';

function openDB() { return new Promise((resolve, reject) => { const req = indexedDB.open(DB_NAME, DB_VERSION); req.onupgradeneeded = (e) => { const db = e.target.result; if (!db.objectStoreNames.contains(STORE_NAME)) db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true }); }; req.onsuccess = () => resolve(req.result); req.onerror = () => reject(req.error); }); }
async function addNoteDB(note) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readwrite'); const s = tx.objectStore(STORE_NAME); const req = s.add(note); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }
async function deleteNoteDB(id) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readwrite'); const s = tx.objectStore(STORE_NAME); const req = s.delete(id); req.onsuccess = () => r(); req.onerror = () => j(req.error); }); }
async function getAllNotesDB() { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readonly'); const s = tx.objectStore(STORE_NAME); const req = s.getAll(); req.onsuccess = () => r(req.result || []); req.onerror = () => j(req.error); }); }
async function getNoteDB(id) { const db = await openDB(); return new Promise((r, j) => { const tx = db.transaction(STORE_NAME, 'readonly'); const s = tx.objectStore(STORE_NAME); const req = s.get(id); req.onsuccess = () => r(req.result); req.onerror = () => j(req.error); }); }

const GOAL_TEMPLATES = ['Complete TYS (past 5 years)', 'Review all lecture notes', 'Practice Section A questions', 'Practice Section B questions', 'Create summary mind maps', 'Do timed practice papers', 'Focus on weak topics', 'Review past mistakes', 'Memorise key formulas', 'Study with flashcards'];
let notesCache = [];
async function loadNotesCache() { try { notesCache = await getAllNotesDB(); } catch { notesCache = []; } }

// ===== STATE =====
const STORAGE_KEY = 'exam_planner_data_v2';
const DEFAULTS = { examSets: {}, activeSetId: '', darkMode: false, notifications: false, notificationsEnabled: false, firstVisit: true };
let state = {};

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state = JSON.parse(raw);
      Object.keys(DEFAULTS).forEach(k => { if (state[k] === undefined) state[k] = DEFAULTS[k]; });
    } else { state = { ...DEFAULTS }; }
  } catch { state = { ...DEFAULTS }; }
}
function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {} }

function getEnabledSetIds() {
  return Object.entries(state.examSets).filter(([id, s]) => s.enabled !== false).map(([id]) => id);
}

function getAllEnabledPapers() {
  const ids = getEnabledSetIds();
  const papers = [];
  ids.forEach(id => {
    const set = state.examSets[id];
    if (!set) return;
    const builtin = set.type === 'builtin' ? BUILTIN_EXAMS[set.builtinKey] : null;
    const allPapers = builtin ? builtin.papers : (set.papers || []);
    const selected = set.selectedIds || [];
    allPapers.filter(p => selected.includes(p.id)).forEach(p => papers.push(p));
  });
  return papers;
}

function getSetPapers(setId) {
  const set = state.examSets[setId];
  if (!set) return [];
  if (set.type === 'builtin') {
    const builtin = BUILTIN_EXAMS[set.builtinKey];
    return builtin ? builtin.papers : [];
  }
  return set.papers || [];
}

function getSetCategories(setId) {
  const set = state.examSets[setId];
  if (!set || set.type !== 'builtin') return {};
  const builtin = BUILTIN_EXAMS[set.builtinKey];
  return builtin ? builtin.categories || {} : {};
}

function getSetSubjectColors(setId) {
  const set = state.examSets[setId];
  if (!set) return {};
  const builtin = set.type === 'builtin' ? BUILTIN_EXAMS[set.builtinKey] : null;
  const baseColors = builtin ? { ...builtin.colors } : {};
  return { ...baseColors, ...(set.subjectColors || {}) };
}

function getActivePapers() { return getSetPapers(state.activeSetId); }
function getActiveCategories() { return getSetCategories(state.activeSetId); }
function getActiveColors() { return getSetSubjectColors(state.activeSetId); }
function getActiveSet() { return state.examSets[state.activeSetId]; }

function getDefaultColor(subject) { return DEFAULT_SUBJECT_COLORS[subject] || '#6b7280'; }

function getSelectedExams() { return getAllEnabledPapers(); }

function getSetProgress(setId) { const s = state.examSets[setId]; return s ? s.progress || {} : {}; }
function getSetNotes(setId) { const s = state.examSets[setId]; return s ? s.notes || {} : {}; }
function getSetGoals(setId) { const s = state.examSets[setId]; return s ? s.goals || {} : {}; }
function getActiveProgress() { return getSetProgress(state.activeSetId); }
function getActiveNotes() { return getSetNotes(state.activeSetId); }
function getActiveGoals() { return getSetGoals(state.activeSetId); }

let colorIdx = 0;
function nextColor() { const c = COLOR_PALETTE[colorIdx % COLOR_PALETTE.length]; colorIdx++; return c; }

// ===== EXAM SET MANAGEMENT =====
function ensureBuiltinExams(keys) {
  let changed = false;
  keys.forEach(key => {
    const id = 'builtin-' + key;
    if (!state.examSets[id] && BUILTIN_EXAMS[key]) {
      state.examSets[id] = { name: BUILTIN_EXAMS[key].name, type: 'builtin', builtinKey: key, enabled: true, selectedIds: [], progress: {}, notes: {}, goals: {}, subjectColors: {} };
      changed = true;
    }
  });
  if (changed) saveState();
}

function createCustomExamSet(name, papers) {
  const id = 'custom-' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
  const uniqueSubjects = [...new Set(papers.map(p => p.subject))];
  const colors = {};
  colorIdx = 0;
  uniqueSubjects.forEach(s => { colors[s] = nextColor(); });
  state.examSets[id] = {
    name, type: 'custom', enabled: true, papers: papers.map((p, i) => ({
      id: id + '-p' + i, subject: p.subject, code: p.code || '', paper: p.paper || '',
      paperName: p.paperName || p.paper || '', date: p.date, startTime: p.startTime || null,
      endTime: null, mode: 'Written', duration: '', notes: ''
    })),
    selectedIds: papers.map((_, i) => id + '-p' + i), progress: {}, notes: {}, goals: {}, subjectColors: colors
  };
  state.activeSetId = id;
  saveState();
  refreshExamSwitcher();
  refreshAll();
  showToast('Exam set "' + name + '" created with ' + papers.length + ' entries.');
}

function deleteExamSet(id) {
  const set = state.examSets[id];
  if (!set) return;
  if (set.type === 'builtin') {
    set.enabled = !set.enabled;
    saveState(); refreshExamSwitcher(); refreshAll();
    showToast(set.enabled ? 'Enabled: ' + set.name : 'Disabled: ' + set.name);
    return;
  }
  if (!confirm('Delete exam set "' + set.name + '"? This cannot be undone.')) return;
  delete state.examSets[id];
  if (state.activeSetId === id) {
    const keys = Object.keys(state.examSets);
    state.activeSetId = keys[0] || '';
  }
  saveState(); refreshExamSwitcher(); refreshAll();
}

function switchExamSet(id) {
  if (id === state.activeSetId) return;
  state.activeSetId = id;
  saveState();
  renderSettings();
  refreshAll();
}

// ===== DATE HELPERS =====
function nowSG() { const now = new Date(); const sgOffset = 8 * 60; const localOffset = now.getTimezoneOffset(); return new Date(now.getTime() + (localOffset + sgOffset) * 60000); }
function dateStrToSG(dateStr) { const [y, m, d] = dateStr.split('-').map(Number); return new Date(Date.UTC(y, m - 1, d)); }
function daysBetween(a, b) { return Math.round((a.getTime() - b.getTime()) / 86400000); }
function getExamStatus(exam) { const now = nowSG(); const todayStart = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())); const examDay = dateStrToSG(exam.date); if (examDay < todayStart) return 'past'; if (examDay.getTime() === todayStart.getTime()) return 'today'; return 'upcoming'; }
function daysUntilExam(exam) { const todayStart = new Date(Date.UTC(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate())); return daysBetween(dateStrToSG(exam.date), todayStart); }
function formatDate(dateStr) { return dateStrToSG(dateStr).toLocaleDateString('en-SG', { weekday:'short', day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' }); }
function formatTime(t) { if (!t) return ''; const [h, m] = t.split(':'); const hour = parseInt(h); return `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`; }

// ===== GOALS CRUD =====
function getGoals(setId, subject) { const g = getSetGoals(setId); return g[subject] || []; }
function addGoal(setId, subject, text) { if (!text.trim()) return; const set = state.examSets[setId]; if (!set) return; if (!set.goals[subject]) set.goals[subject] = []; set.goals[subject].push({ id: Date.now().toString(36) + Math.random().toString(36).slice(2,6), text: text.trim(), completed: false }); saveState(); }
function toggleGoal(setId, subject, goalId) { const g = getSetGoals(setId); if (!g[subject]) return; const goal = g[subject].find(x => x.id === goalId); if (goal) { goal.completed = !goal.completed; saveState(); } }
function deleteGoal(setId, subject, goalId) { const g = getSetGoals(setId); if (!g[subject]) return; g[subject] = g[subject].filter(x => x.id !== goalId); if (!g[subject].length) delete g[subject]; saveState(); }

// ===== RENDER HELPERS =====
function getSubjectColor(subject, setId) { const colors = setId ? getSetSubjectColors(setId) : getActiveColors(); return colors[subject] || getDefaultColor(subject); }
function getPeriodProgress() {
  const selected = getSelectedExams();
  if (!selected.length) return { pct: 0, totalDays: 0, elapsedDays: 0, remainingDays: 0 };
  const dates = selected.map(e => dateStrToSG(e.date)).sort((a, b) => a - b);
  const first = dates[0], last = dates[dates.length - 1];
  const total = daysBetween(last, first); const elapsed = daysBetween(nowSG(), first);
  if (total <= 0) return { pct: 1, totalDays: 1, elapsedDays: 1, remainingDays: 0 };
  return { pct: Math.max(0, Math.min(1, elapsed / total)), totalDays: total, elapsedDays: Math.max(0, elapsed), remainingDays: Math.max(0, total - elapsed) };
}
function getStatusBadge(status) { const m = { upcoming:'Upcoming', today:'Today', past:'Completed' }; return `<span class="exam-badge badge-${status}">${m[status]}</span>`; }
function getCountdownHTML(exam, days) { const s = getExamStatus(exam); if (s === 'past') return '<div class="exam-countdown countdown-past">Completed</div>'; if (s === 'today') return '<div class="exam-countdown countdown-today">Today!</div>'; let cls = 'countdown-normal'; if (days <= 7) cls = 'countdown-danger'; else if (days <= 30) cls = 'countdown-warning'; return `<div class="exam-countdown ${cls}">${days}</div><div class="exam-countdown-label">days remaining</div>`; }
function getTrafficHTML(examId, p) { const levels = ['red', 'yellow', 'green'], labels = ['Not Started', 'Revising', 'Ready']; const current = p[examId] || 'red'; return `<div class="traffic-lights" data-exam="${examId}">${levels.map((l, i) => `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`).join('')}<span class="traffic-label">${labels[levels.indexOf(current)]}</span></div>`; }
function getTrafficSelectHTML(examId, p) { const levels = ['red', 'yellow', 'green'], labels = ['Not Started', 'Revising', 'Ready']; const current = p[examId] || 'red'; return levels.map((l, i) => `<span class="traffic-light traffic-${l}${l === current ? ' active' : ''}" data-level="${l}" title="${labels[i]}"></span>`).join(''); }

function renderHero() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  const hero = document.getElementById('hero'), card = document.getElementById('hero-card');
  if (!selected.length) { hero.classList.add('hidden'); return; }
  hero.classList.remove('hidden');
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const next = selected[0], days = daysUntilExam(next), status = getExamStatus(next), prog = getPeriodProgress();
  const seasonInfo = prog.totalDays > 0 ? `Day ${Math.min(prog.elapsedDays + 1, prog.totalDays)} of ${prog.totalDays}` : '';
  const remains = prog.remainingDays > 0 ? ` &middot; ${prog.remainingDays}d to go` : '';
  if (status === 'past') card.innerHTML = `<div class="hero-label">All Examinations</div><div class="hero-countdown">&#10003;</div><div class="hero-unit">COMPLETED</div><div class="hero-subject">All exams are done!</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:100%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}</div>`;
  else if (status === 'today') card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">0</div><div class="hero-unit">TODAY</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>`;
  else card.innerHTML = `<div class="hero-label">Next Examination</div><div class="hero-countdown">${days}</div><div class="hero-unit">DAYS</div><div class="hero-subject">${next.subject} ${next.paper}</div><div class="hero-date">${formatDate(next.date)}</div><div class="hero-progress-bar"><div class="hero-progress-fill" style="width:${prog.pct*100}%"></div></div><div class="hero-progress-text">Exam Season ${seasonInfo}${remains}</div>`;
}

function renderStatsBar() {
  const selected = getSelectedExams();
  const bar = document.getElementById('stats-bar');
  if (!selected.length) { bar.classList.add('hidden'); return; }
  bar.classList.remove('hidden');
  document.getElementById('stat-exams').textContent = selected.length;
  document.getElementById('stat-subjects').textContent = new Set(selected.map(e => e.subject)).size;
  const p = getPeriodProgress();
  document.getElementById('stat-days-until').textContent = p.remainingDays > 0 ? `${p.remainingDays}d` : 'Done!';
}

function findExamSetForPaper(paperId) {
  for (const [id, set] of Object.entries(state.examSets)) {
    const papers = getSetPapers(id);
    if (papers.some(p => p.id === paperId)) return id;
  }
  return null;
}

function renderExamCard(exam) {
  const days = daysUntilExam(exam), status = getExamStatus(exam);
  const setId = findExamSetForPaper(exam.id);
  const color = getSubjectColor(exam.subject, setId);
  const timeStr = exam.startTime ? formatTime(exam.startTime) + (exam.endTime ? ' - ' + formatTime(exam.endTime) : '') : '';
  const modeTag = exam.mode !== 'Written' ? `<span style="font-size:11px;color:var(--text2);background:var(--surface2);padding:1px 6px;border-radius:4px;margin-left:6px">${exam.mode}</span>` : '';
  const hasNotes = notesCache.some(n => n.examId === exam.id || n.subject === exam.subject);
  const setNote = setId ? getSetNotes(setId)[exam.id] || '' : '';
  return `<div class="exam-card status-${status}" data-id="${exam.id}"><div class="exam-card-accent" style="background:${color}"></div><div class="exam-card-header"><div class="exam-subject"><span class="exam-subject-dot" style="background:${color}"></span>${exam.subject}${modeTag}</div>${getStatusBadge(status)}</div><div class="exam-paper">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div><div class="exam-date">${formatDate(exam.date)}${timeStr ? ' &middot; ' + timeStr : ''}</div>${getCountdownHTML(exam, days)}${getTrafficHTML(exam.id, setId ? getSetProgress(setId) : {})}${setNote ? `<div class="note-indicator has-notes">📝 ${setNote.slice(0, 50)}${setNote.length > 50 ? '...' : ''}</div>` : ''}${hasNotes ? `<div class="note-indicator has-notes">📎 Notes attached</div>` : ''}</div>`;
}

function renderGoalsList(setId) {
  const selected = getAllEnabledPapers();
  const section = document.getElementById('goals-section'), container = document.getElementById('goals-container'), toggleBtn = document.getElementById('btn-goals-toggle');
  if (!selected.length) { section.classList.add('hidden'); return; }
  section.classList.remove('hidden');
  const subjSet = [...new Set(selected.map(e => e.subject))].sort();
  const set = state.examSets[setId];
  const isCollapsed = set ? set.goalsCollapsed : true;
  toggleBtn.textContent = isCollapsed ? 'Show' : 'Hide';
  if (isCollapsed) { container.classList.add('hidden'); container.innerHTML = ''; return; }
  container.classList.remove('hidden');
  let html = '';
  subjSet.forEach(subj => {
    const color = getSubjectColor(subj, setId), goals = getGoals(setId, subj);
    html += `<div class="goal-subject-group"><div class="goal-subject-title"><span style="width:8px;height:8px;border-radius:50%;background:${color};display:inline-block"></span>${subj}</div>`;
    if (goals.length) goals.forEach(g => { html += `<div class="goal-item"><input type="checkbox" class="goal-check" data-set="${setId}" data-subject="${subj}" data-id="${g.id}" ${g.completed ? 'checked' : ''}><span class="goal-text${g.completed ? ' done' : ''}">${g.text}</span><button class="goal-delete" data-set="${setId}" data-subject="${subj}" data-id="${g.id}" title="Delete goal">&times;</button></div>`; });
    html += `<div class="goal-add-row"><input type="text" class="goal-new-input" data-set="${setId}" data-subject="${subj}" placeholder="Add a study goal..." maxlength="200"><select class="goal-template-select" data-subject="${subj}"><option value="">Template...</option>${GOAL_TEMPLATES.map(t => `<option value="${t}">${t}</option>`).join('')}</select><button class="btn btn-primary goal-add-btn" data-set="${setId}" data-subject="${subj}">+ Add</button></div></div>`;
  });
  container.innerHTML = html;
  container.querySelectorAll('.goal-check').forEach(cb => { cb.addEventListener('change', () => { toggleGoal(cb.dataset.set, cb.dataset.subject, cb.dataset.id); renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-delete').forEach(btn => { btn.addEventListener('click', () => { deleteGoal(btn.dataset.set, btn.dataset.subject, btn.dataset.id); renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-template-select').forEach(sel => { sel.addEventListener('change', () => { if (sel.value) { sel.closest('.goal-add-row').querySelector('.goal-new-input').value = sel.value; sel.value = ''; } }); });
  container.querySelectorAll('.goal-add-btn').forEach(btn => { btn.addEventListener('click', () => { const row = btn.closest('.goal-add-row'); const inp = row.querySelector('.goal-new-input'); addGoal(btn.dataset.set, btn.dataset.subject, inp.value); inp.value = ''; renderGoalsList(setId); }); });
  container.querySelectorAll('.goal-new-input').forEach(inp => { inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') { addGoal(inp.dataset.set, inp.dataset.subject, inp.value); inp.value = ''; renderGoalsList(setId); } }); });
}

function renderList() {
  const exams = getSelectedExams();
  const sortBy = document.getElementById('sort-by').value;
  const filterSubj = document.getElementById('filter-subject').value;
  const searchQ = document.getElementById('search-exams').value.toLowerCase().trim();
  const view = document.querySelector('.view-tab.active')?.dataset?.view || 'upcoming';
  let filtered = exams;
  if (filterSubj) filtered = filtered.filter(e => e.subject === filterSubj);
  if (searchQ) filtered = filtered.filter(e => e.subject.toLowerCase().includes(searchQ) || e.paper.toLowerCase().includes(searchQ) || e.paperName.toLowerCase().includes(searchQ));
  if (view === 'upcoming') filtered = filtered.filter(e => { const s = getExamStatus(e); return s === 'upcoming' || s === 'today'; });
  filtered.sort((a, b) => sortBy === 'subject' ? (a.subject.localeCompare(b.subject) || dateStrToSG(a.date) - dateStrToSG(b.date)) : dateStrToSG(a.date) - dateStrToSG(b.date));
  const container = document.getElementById('exam-list'), empty = document.getElementById('empty-state');
  if (!filtered.length) { container.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  container.innerHTML = filtered.map(renderExamCard).join('');
}

let calDate = new Date(); calDate.setHours(0, 0, 0, 0);
let selectedCalDate = null;

function renderCalendar() {
  const year = calDate.getFullYear(), month = calDate.getMonth();
  document.getElementById('cal-month-year').textContent = new Date(year, month).toLocaleDateString('en-SG', { month:'long', year:'numeric', timeZone:'Asia/Singapore' });
  const firstDay = new Date(year, month, 1).getDay(), daysInMonth = new Date(year, month + 1, 0).getDate(), daysInPrev = new Date(year, month, 0).getDate();
  const selected = getSelectedExams();
  const today = new Date(nowSG().getFullYear(), nowSG().getMonth(), nowSG().getDate());
  let html = '';
  ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => { html += `<div class="cal-day-header">${d}</div>`; });
  for (let i = firstDay - 1; i >= 0; i--) html += `<div class="cal-day other-month">${daysInPrev - i}</div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(year, month, d), isToday = dateObj.getTime() === today.getTime();
    const dateStr = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const examsToday = selected.filter(e => e.date === dateStr);
    let cls = 'cal-day';
    if (isToday) cls += ' today';
    if (examsToday.length) cls += ' has-exam';
    if (selectedCalDate === dateStr) cls += ' selected';
    html += `<div class="${cls}" data-date="${dateStr}">${d}`;
    if (examsToday.length) { html += `<div class="cal-dots">`; examsToday.forEach(ex => { html += `<span class="cal-dot" style="background:${getSubjectColor(ex.subject, findExamSetForPaper(ex.id))}" title="${ex.subject} ${ex.paper}"></span>`; }); html += `</div>`; }
    else if (!isToday && year === calDate.getFullYear() && month === calDate.getMonth()) html += `<div class="cal-no-exams-label">none</div>`;
    html += `</div>`;
  }
  for (let i = 1; i <= (7 - (firstDay + daysInMonth) % 7) % 7; i++) html += `<div class="cal-day other-month">${i}</div>`;
  document.getElementById('cal-grid').innerHTML = html;
  document.getElementById('cal-exam-detail').innerHTML = '<p class="cal-no-selection">Click a date with exam dots to see details.</p>';
  document.querySelectorAll('.cal-day:not(.other-month)').forEach(el => { el.addEventListener('click', () => { selectedCalDate = el.dataset.date; renderCalendar(); const examsToday = getSelectedExams().filter(e => e.date === el.dataset.date); const panel = document.getElementById('cal-exam-detail'); if (!examsToday.length) { panel.innerHTML = `<p class="cal-no-selection">No exams on ${formatDate(el.dataset.date)}.</p>`; return; } panel.innerHTML = `<div style="font-size:14px;font-weight:600;margin-bottom:10px">${formatDate(el.dataset.date)}</div>` + examsToday.map(ex => `<div class="cal-exam-item" data-id="${ex.id}"><span class="subj-dot" style="background:${getSubjectColor(ex.subject, findExamSetForPaper(ex.id))}"></span><span><strong>${ex.subject}</strong> ${ex.paper}${ex.startTime ? ' &middot; ' + formatTime(ex.startTime) : ''}</span></div>`).join(''); panel.querySelectorAll('.cal-exam-item').forEach(item => { item.addEventListener('click', () => showExamDetail(item.dataset.id)); }); }); });
}

function renderSettings() {
  const setId = state.activeSetId;
  const set = state.examSets[setId];
  if (!set) return;

  // Exam sets list with enable/disable
  const setContainer = document.getElementById('settings-exam-sets');
  let setHtml = '<div class="exam-set-list">';
  Object.entries(state.examSets).forEach(([id, es]) => {
    const isEnabled = es.enabled !== false;
    setHtml += `<div class="exam-set-card"><span>${es.name} <span style="font-size:11px;color:var(--text2)">(${es.type})</span></span><label class="toggle-row" style="border:none;padding:0;margin:0"><input type="checkbox" class="exam-set-toggle" data-id="${id}" ${isEnabled ? 'checked' : ''}><span class="toggle-slider" style="transform:scale(0.7)"></span></label><button class="btn btn-small exam-set-switch" data-id="${id}" ${id === setId ? 'disabled style="opacity:0.5"' : ''}>Select</button><button class="btn btn-small btn-danger exam-set-delete" data-id="${id}" ${es.type === 'builtin' ? 'title="Toggle to disable/enable"' : ''}>${es.type === 'builtin' ? '' : '&times;'}</button></div>`;
  });
  setHtml += '</div>';
  setContainer.innerHTML = setHtml;
  setContainer.querySelectorAll('.exam-set-toggle').forEach(cb => { cb.addEventListener('change', () => { const s = state.examSets[cb.dataset.id]; if (s) { s.enabled = cb.checked; saveState(); refreshAll(); } }); });
  setContainer.querySelectorAll('.exam-set-switch').forEach(btn => { btn.addEventListener('click', () => { switchExamSet(btn.dataset.id); }); });
  setContainer.querySelectorAll('.exam-set-delete').forEach(btn => { btn.addEventListener('click', () => { deleteExamSet(btn.dataset.id); renderSettings(); }); });

  // Subjects for active set
  const papers = getActivePapers();
  const subjContainer = document.getElementById('settings-subjects');
  if (!papers.length && set.type === 'builtin') {
    subjContainer.innerHTML = '<p style="color:var(--text2);font-size:14px">This built-in exam set has no paper dates yet. Use <strong>Paste from Sheets</strong> or <strong>OCR Import</strong> to add them, or create a custom exam set.</p>';
  } else if (papers.length && set.type === 'builtin') {
    const cats = getActiveCategories();
    const groupsByCat = {};
    Object.entries(cats).forEach(([cat, subjects]) => {
      const entries = subjects.map(s => {
        const pts = papers.filter(e => e.subject === s);
        if (!pts.length) return null;
        return `<div class="setup-group" data-subject="${s}"><div class="setup-group-header"><input type="checkbox" class="subject-check" ${pts.every(p => set.selectedIds.includes(p.id)) ? 'checked' : ''}><label>${s}</label></div><div class="setup-papers">${pts.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" ${set.selectedIds.includes(p.id) ? 'checked' : ''}><label>${p.paper}${p.paperName ? ' &mdash; ' + p.paperName : ''}</label></div>`).join('')}</div></div>`;
      }).filter(Boolean);
      if (entries.length) groupsByCat[cat] = entries.join('');
    });
    subjContainer.innerHTML = '<div class="setup-select-all"><button id="settings-select-all-btn" class="btn btn-secondary">Select All</button></div>';
    ['Languages','Mathematics','Sciences','Humanities','Arts & Electives','Applied Subjects','H1 Subjects','H2 Subjects','H3 Subjects','Others'].forEach(cat => { if (groupsByCat[cat]) subjContainer.innerHTML += `<div class="setup-category"><div class="setup-category-title">${cat}</div>${groupsByCat[cat]}</div>`; });
    subjContainer.querySelectorAll('.subject-check').forEach(cb => { cb.addEventListener('change', () => { cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked); }); });
    subjContainer.querySelectorAll('.paper-check').forEach(cb => { cb.addEventListener('change', () => { const g = cb.closest('.setup-group'); g.querySelector('.subject-check').checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length; }); });
    document.getElementById('settings-select-all-btn')?.addEventListener('click', () => { const allChecked = [...document.querySelectorAll('#settings-subjects .paper-check')].every(c => c.checked); document.querySelectorAll('#settings-subjects .paper-check').forEach(c => c.checked = !allChecked); document.querySelectorAll('#settings-subjects .subject-check').forEach(c => { c.checked = c.closest('.setup-group').querySelectorAll('.paper-check').length === c.closest('.setup-group').querySelectorAll('.paper-check:checked').length; }); });
  } else if (papers.length) {
    const uniqueSubj = [...new Set(papers.map(p => p.subject))];
    subjContainer.innerHTML = uniqueSubj.map(s => {
      const pts = papers.filter(e => e.subject === s);
      return `<div class="setup-group" data-subject="${s}"><div class="setup-group-header"><input type="checkbox" class="subject-check" ${pts.every(p => set.selectedIds.includes(p.id)) ? 'checked' : ''}><label>${s}</label></div><div class="setup-papers">${pts.map(p => `<div class="setup-paper"><input type="checkbox" class="paper-check" data-id="${p.id}" ${set.selectedIds.includes(p.id) ? 'checked' : ''}><label>${p.paper || formatDate(p.date)}</label></div>`).join('')}</div></div>`;
    }).join('');
    subjContainer.querySelectorAll('.subject-check').forEach(cb => { cb.addEventListener('change', () => { cb.closest('.setup-group').querySelectorAll('.paper-check').forEach(p => p.checked = cb.checked); }); });
    subjContainer.querySelectorAll('.paper-check').forEach(cb => { cb.addEventListener('change', () => { const g = cb.closest('.setup-group'); g.querySelector('.subject-check').checked = g.querySelectorAll('.paper-check').length === g.querySelectorAll('.paper-check:checked').length; }); });
  } else {
    subjContainer.innerHTML = '<p style="color:var(--text2);font-size:14px">No papers in this exam set. Add them in the custom exam editor, or paste from Sheets.</p>';
  }

  // Colors
  const colorContainer = document.getElementById('settings-colors');
  const allSubj = [...new Set(papers.map(e => e.subject))].sort();
  colorContainer.innerHTML = allSubj.map(s => `<div class="color-row"><label>${s}</label><input type="color" class="subject-color-input" data-subject="${s}" value="${getSubjectColor(s, setId)}"></div>`).join('');

  // Goals
  const goalContainer = document.getElementById('settings-goals');
  goalContainer.innerHTML = allSubj.map(s => `<div class="goal-row" style="flex-wrap:wrap"><span style="min-width:140px;font-size:14px;font-weight:500">${s}</span><span style="font-size:12px;color:var(--text2)">${getGoals(setId, s).length ? getGoals(setId, s).filter(g => !g.completed).length + ' pending' : 'No goals'}</span></div>`).join('');
}

async function renderNotes() {
  await loadNotesCache();
  const allNotes = notesCache, container = document.getElementById('notes-list'), empty = document.getElementById('notes-empty');
  if (!allNotes.length) { container.innerHTML = ''; empty.classList.remove('hidden'); return; }
  empty.classList.add('hidden');
  container.innerHTML = allNotes.map(n => `<div class="note-card"><div class="note-icon">&#128196;</div><div class="note-info"><div class="note-subject" style="color:${getSubjectColor(n.subject, n.examId ? findExamSetForPaper(n.examId) : null)}">${n.subject}</div><div class="note-paper">${n.paper || 'General notes'}</div><div class="note-filename">${n.filename}</div><div class="note-date">Uploaded ${new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short', year:'numeric', timeZone:'Asia/Singapore' })}</div></div><div class="note-actions"><button class="btn btn-primary note-download" data-id="${n.id}">Download</button><button class="btn btn-danger note-delete" data-id="${n.id}">Delete</button></div></div>`).join('');
  container.querySelectorAll('.note-download').forEach(btn => { btn.addEventListener('click', async () => { const note = await getNoteDB(parseInt(btn.dataset.id)); if (note) { const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' }); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = note.filename; a.click(); URL.revokeObjectURL(url); } }); });
  container.querySelectorAll('.note-delete').forEach(btn => { btn.addEventListener('click', async () => { if (confirm('Delete this note?')) { await deleteNoteDB(parseInt(btn.dataset.id)); await loadNotesCache(); renderNotes(); refreshAll(); } }); });
}

function showExamDetail(examId) {
  const setId = findExamSetForPaper(examId);
  if (!setId) return;
  const set = state.examSets[setId];
  if (!set) return;
  const exam = getSetPapers(setId).find(e => e.id === examId);
  if (!exam) return;
  const days = daysUntilExam(exam), status = getExamStatus(exam), color = getSubjectColor(exam.subject, setId);
  const timeStr = exam.startTime ? formatTime(exam.startTime) + (exam.endTime ? ' &ndash; ' + formatTime(exam.endTime) : '') : (exam.mode === 'Science Practical' || exam.mode === 'Practical') ? 'Multiple shifts (see notes)' : '';
  const note = (set.notes || {})[exam.id] || '';
  const modal = document.getElementById('modal-body');
  modal.innerHTML = `<div style="display:flex;align-items:center;gap:8px;margin-bottom:12px"><span style="width:12px;height:12px;border-radius:50%;background:${color};display:inline-block"></span><span class="detail-value">${exam.subject}${exam.code ? ' (' + exam.code + ')' : ''}</span></div><div class="detail-field"><div class="detail-label">Paper</div><div class="detail-value">${exam.paper}${exam.paperName ? ' &mdash; ' + exam.paperName : ''}</div></div><div class="detail-field"><div class="detail-label">Date</div><div class="detail-value">${formatDate(exam.date)}</div></div>${exam.mode ? `<div class="detail-field"><div class="detail-label">Mode</div><div class="detail-value">${exam.mode}${exam.duration ? ' &middot; ' + exam.duration : ''}</div></div>` : ''}${timeStr ? `<div class="detail-field"><div class="detail-label">Time</div><div class="detail-value">${timeStr}</div></div>` : ''}<div class="detail-countdown ${status === 'past' ? 'countdown-past' : status === 'today' ? 'countdown-today' : days <= 7 ? 'countdown-danger' : days <= 30 ? 'countdown-warning' : 'countdown-normal'}">${status === 'past' ? 'Completed' : status === 'today' ? 'Today!' : days + ' days remaining'}</div>${exam.notes ? `<div class="detail-field"><div class="detail-label">Notes</div><div class="detail-value" style="font-size:14px;color:var(--text2)">${exam.notes}</div></div>` : ''}<div class="detail-traffic"><h4>Preparation Progress</h4><div class="traffic-select" data-exam="${exam.id}">${getTrafficSelectHTML(exam.id, set.progress || {})}</div></div><div class="detail-notes"><label class="detail-label" for="detail-note-input">Personal Notes</label><textarea id="detail-note-input" placeholder="Add your notes here...">${note}</textarea></div><div class="detail-upload"><h4>Upload PDF Notes</h4><p style="font-size:13px;color:var(--text2);margin-bottom:8px">Choose a PDF file, then pick where to attach it.</p><input type="file" id="note-upload-input" accept=".pdf" style="display:block;margin-bottom:8px;font-size:13px"><div style="display:flex;gap:8px;flex-wrap:wrap"><button id="btn-upload-note" class="btn btn-primary" style="flex:1"><span style="font-size:16px">&#128196;</span> Attach to this paper</button><button id="btn-upload-subject-note" class="btn btn-secondary" style="flex:1"><span style="font-size:16px">&#128194;</span> Attach to ${exam.subject} (all papers)</button></div><div id="uploaded-files-container" class="uploaded-files"></div></div>`;
  document.getElementById('exam-modal').classList.remove('hidden');
  modal.querySelectorAll('.traffic-light').forEach(el => { el.addEventListener('click', () => { const level = el.dataset.level; if (!set.progress) set.progress = {}; set.progress[exam.id] = level; saveState(); modal.querySelectorAll('.traffic-light').forEach(l => l.classList.toggle('active', l.dataset.level === level)); refreshAll(); }); });
  modal.querySelector('#detail-note-input').addEventListener('input', () => { if (!set.notes) set.notes = {}; set.notes[exam.id] = modal.querySelector('#detail-note-input').value; saveState(); refreshAll(); });
  const fileInput = modal.querySelector('#note-upload-input');
  modal.querySelector('#btn-upload-note').addEventListener('click', async () => { if (!fileInput.files.length) return alert('Please select a PDF file first.'); await uploadNote(fileInput.files[0], exam.subject, exam.paper, exam.id); fileInput.value = ''; renderUploadedFiles(exam); });
  modal.querySelector('#btn-upload-subject-note').addEventListener('click', async () => { if (!fileInput.files.length) return alert('Please select a PDF file first.'); await uploadNote(fileInput.files[0], exam.subject, 'General notes', null); fileInput.value = ''; renderUploadedFiles(exam); });
  renderUploadedFiles(exam);
}

async function uploadNote(file, subject, paper, examId) { const filedata = await file.arrayBuffer(); await addNoteDB({ subject, paper, examId, filename: file.name, filetype: file.type || 'application/pdf', filedata, uploadDate: new Date().toISOString() }); await loadNotesCache(); }

async function renderUploadedFiles(exam) {
  const allNotes = await getAllNotesDB();
  const related = allNotes.filter(n => n.examId === exam.id || (n.subject === exam.subject && !n.examId));
  const container = document.getElementById('uploaded-files-container');
  if (!related.length) { container.innerHTML = ''; return; }
  container.innerHTML = related.map(n => `<div class="uploaded-file"><span>&#128196;</span><span>${n.filename}</span><span style="font-size:11px;color:var(--text2)">${new Date(n.uploadDate).toLocaleDateString('en-SG', { day:'numeric', month:'short' })}</span><button class="btn btn-small note-download" data-id="${n.id}">Open</button><button class="btn btn-small btn-danger note-delete" data-id="${n.id}">&times;</button></div>`).join('');
  container.querySelectorAll('.note-download').forEach(btn => { btn.addEventListener('click', async () => { const note = await getNoteDB(parseInt(btn.dataset.id)); if (note) { const blob = new Blob([note.filedata], { type: note.filetype || 'application/pdf' }); window.open(URL.createObjectURL(blob), '_blank'); } }); });
  container.querySelectorAll('.note-delete').forEach(btn => { btn.addEventListener('click', async () => { await deleteNoteDB(parseInt(btn.dataset.id)); await loadNotesCache(); renderUploadedFiles(exam); renderNotes(); refreshAll(); }); });
}

function applySettings() {
  const setId = state.activeSetId;
  const set = state.examSets[setId];
  if (!set) return;
  const ids = [];
  document.querySelectorAll('#settings-subjects .paper-check:checked').forEach(cb => ids.push(cb.dataset.id));
  set.selectedIds = ids;
  document.querySelectorAll('.subject-color-input').forEach(inp => { set.subjectColors[inp.dataset.subject] = inp.value; });
  state.darkMode = document.getElementById('settings-darkmode').checked;
  state.notifications = document.getElementById('settings-notifications').checked;
  saveState(); refreshAll(); showToast('Settings saved.');
  document.getElementById('settings-modal').classList.add('hidden');
}

// ===== NOTIFICATIONS =====
function requestNotificationPermission() { if (!('Notification' in window)) return false; if (Notification.permission === 'granted') return true; if (Notification.permission === 'denied') return false; Notification.requestPermission(); return false; }
function checkAndNotify() {
  if (!state.notifications || !state.notificationsEnabled) return;
  if (!('Notification' in window) || Notification.permission !== 'granted') return;
  getSelectedExams().forEach(ex => { const days = daysUntilExam(ex); if ((days === 7 || days === 3 || days === 1 || days === 0) && days >= 0) { const key = `notified_${ex.id}_${days}`; if (!localStorage.getItem(key)) { const msg = days === 0 ? `${ex.subject} ${ex.paper} is TODAY!` : `${ex.subject} ${ex.paper} in ${days} day${days > 1 ? 's' : ''}!`; try { new Notification('Exam Countdown', { body: msg }); } catch {} localStorage.setItem(key, '1'); } } });
}

function exportData() {
  const data = { examSets: {}, darkMode: state.darkMode, notifications: state.notifications, exportedAt: new Date().toISOString() };
  Object.entries(state.examSets).forEach(([id, set]) => {
    data.examSets[id] = {
      name: set.name, type: set.type, builtinKey: set.builtinKey, enabled: set.enabled,
      selectedIds: set.selectedIds, progress: set.progress, notes: set.notes,
      goals: set.goals, subjectColors: set.subjectColors, papers: set.papers
    };
  });
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = `exam-config-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.examSets) {
        Object.entries(data.examSets).forEach(([id, set]) => {
          state.examSets[id] = set;
          if (!state.activeSetId) state.activeSetId = id;
        });
      }
      if (data.darkMode !== undefined) state.darkMode = data.darkMode;
      if (data.notifications !== undefined) state.notifications = data.notifications;
      saveState(); refreshExamSwitcher(); refreshAll(); showToast('Configuration imported successfully!');
    } catch { showToast('Invalid file format.', 4000); }
  };
  reader.readAsText(file);
}

function updateTitle() {
  const selected = getSelectedExams().filter(e => getExamStatus(e) !== 'past');
  if (!selected.length) { document.title = 'Exam Countdown Planner'; return; }
  selected.sort((a, b) => dateStrToSG(a.date) - dateStrToSG(b.date));
  const days = daysUntilExam(selected[0]);
  if (days === 0) document.title = '📢 TODAY - Exam Countdown';
  else document.title = `${days}d to ${selected[0].subject} - Exam Countdown`;
}

function showToast(msg, duration) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.remove('hidden'); clearTimeout(t._timer); t._timer = setTimeout(() => t.classList.add('hidden'), duration || 3000); }

function refreshExamSwitcher() {
  const sel = document.getElementById('exam-switcher');
  sel.innerHTML = Object.entries(state.examSets).map(([id, set]) => `<option value="${id}"${id === state.activeSetId ? ' selected' : ''}>${set.name}${set.enabled === false ? ' (disabled)' : ''}</option>`).join('');
}

function refreshAll() {
  document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
  const darkCb = document.getElementById('settings-darkmode');
  const notifCb = document.getElementById('settings-notifications');
  if (darkCb) darkCb.checked = state.darkMode;
  if (notifCb) notifCb.checked = state.notifications;
  refreshExamSwitcher();
  const filterSel = document.getElementById('filter-subject');
  const currentVal = filterSel.value;
  const subjSet = new Set(getSelectedExams().map(e => e.subject));
  filterSel.innerHTML = '<option value="">All Subjects</option>' + [...subjSet].sort().map(s => `<option value="${s}">${s}</option>`).join('');
  filterSel.value = currentVal || '';
  renderHero(); renderStatsBar();
  if (document.getElementById('goals-section').classList.contains('hidden') === false || true) {
    renderGoalsList(state.activeSetId);
  }
  renderList(); renderCalendar();
  if (document.getElementById('notes-view').classList.contains('active')) renderNotes();
}

// ===== OCR =====
async function runOCR(file) {
  const statusEl = document.getElementById('ocr-status'), uploadArea = document.getElementById('ocr-upload-area'), resultsDiv = document.getElementById('ocr-results'), entriesDiv = document.getElementById('ocr-entries');
  statusEl.classList.remove('hidden'); uploadArea.classList.add('hidden'); resultsDiv.classList.add('hidden');
  statusEl.textContent = 'Processing...';
  try {
    let imageData;
    if (file.type === 'application/pdf') {
      statusEl.textContent = 'Converting PDF to image...';
      const arrayBuffer = await file.arrayBuffer();
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
      const page = await pdf.getPage(1);
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement('canvas'); canvas.width = viewport.width; canvas.height = viewport.height;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport }).promise;
      imageData = canvas.toDataURL('image/png');
    } else {
      const img = new Image();
      imageData = await new Promise((resolve) => { img.onload = () => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; c.getContext('2d').drawImage(img, 0, 0); resolve(c.toDataURL('image/png')); }; img.src = URL.createObjectURL(file); });
    }
    statusEl.textContent = 'Running OCR (may take a moment)...';
    const { data: { text } } = await window.Tesseract.recognize(imageData, 'eng', { logger: m => { if (m.status === 'recognizing text') statusEl.textContent = `OCR: ${Math.round(m.progress * 100)}%`; } });
    statusEl.textContent = 'Parsing dates...';
    const lines = text.split('\n').filter(l => l.trim());
    const extracted = parseExamLines(lines);
    if (!extracted.length) { statusEl.textContent = 'Could not find any exam entries. Try Paste from Sheets instead.'; uploadArea.classList.remove('hidden'); return; }
    statusEl.textContent = `Found ${extracted.length} entries. Review below.`;
    entriesDiv.innerHTML = extracted.map((entry, i) => `<div class="ocr-entry"><input class="ocr-date-input" type="date" value="${entry.date}" data-idx="${i}"><input class="ocr-subject-input" type="text" value="${entry.subject}" placeholder="Subject" data-idx="${i}"><input class="ocr-paper-input" type="text" value="${entry.paper || ''}" placeholder="Paper" data-idx="${i}"><input class="ocr-time-input" type="time" value="${entry.time || ''}" data-idx="${i}"></div>`).join('');
    resultsDiv.classList.remove('hidden');
  } catch (e) { statusEl.textContent = 'Error: ' + e.message; uploadArea.classList.remove('hidden'); }
}

function parseExamLines(lines) {
  const results = [];
  const datePatterns = [/(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?/gi, /(\d{4})[-/](\d{1,2})[-/](\d{1,2})/g, /(\d{1,2})[-/](\d{1,2})[-/](\d{4})/g];
  const monthMap = { jan:0,feb:0,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };
  const dayNames = ['mon','tue','wed','thu','fri','sat','sun','monday','tuesday','wednesday','thursday','friday','saturday','sunday'];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.length < 3) continue;
    let dateStr = '', dateFound = false;
    for (const pattern of datePatterns) {
      const m = pattern.exec(line);
      if (m) {
        if (m[2] && monthMap[m[2].toLowerCase().slice(0,3)] !== undefined) { const day = m[1].padStart(2,'0'); const month = String(monthMap[m[2].toLowerCase().slice(0,3)] + 1).padStart(2,'0'); const year = m[3] || '2026'; dateStr = `${year}-${month}-${day}`; }
        else if (m[1].length === 4) dateStr = `${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
        else dateStr = `${m[3]}-${m[2].padStart(2,'0')}-${m[1].padStart(2,'0')}`;
        dateFound = true; break;
      }
    }
    if (!dateFound) continue;
    let subject = line.replace(/^\d{1,2}\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?\s*/gi, '').replace(/^\d{4}[-/]\d{1,2}[-/]\d{1,2}\s*/g, '').replace(/^\d{1,2}[-/]\d{1,2}[-/]\d{4}\s*/g, '');
    dayNames.forEach(d => { subject = subject.replace(new RegExp(d, 'gi'), ''); });
    subject = subject.replace(/\d{1,2}:\d{2}(?:\s*(?:am|pm))?/gi, '').replace(/[|(){}\[\]]/g, ' ').replace(/\s+/g, ' ').trim();
    const timeMatch = line.match(/(\d{1,2}:\d{2})(?:\s*(?:am|pm))?/i);
    if (dateStr && subject && subject.length > 1 && !results.some(r => r.date === dateStr && r.subject === subject)) results.push({ date: dateStr, subject, paper: '', time: timeMatch ? timeMatch[1] : '' });
  }
  return results;
}

// ===== SHEETS IMPORT =====
function parseSheetData(text) {
  const lines = text.split('\n').filter(l => l.trim());
  const results = [];
  const datePattern = /(\d{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s*(\d{4})?/i;
  const monthMap = { jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11 };
  const isoDate = /^\d{4}-\d{2}-\d{2}$/;

  lines.forEach(line => {
    // Split by tab or comma
    const parts = line.split(/\t|,(?=(?:[^"]*"[^"]*")*[^"]*$)/).map(p => p.trim().replace(/^"|"$/g, ''));
    if (parts.length < 2) return;

    let date = '', subject = '', paper = '', time = '';
    let dateFound = false;

    // Look for a date in any column
    for (let col = 0; col < parts.length; col++) {
      const val = parts[col];
      if (isoDate.test(val)) { date = val; dateFound = true; break; }
      const m = val.match(datePattern);
      if (m) {
        const day = m[1].padStart(2, '0');
        const month = String((monthMap[m[2].toLowerCase().slice(0,3)] || 0) + 1).padStart(2, '0');
        const year = m[3] || '2026';
        date = `${year}-${month}-${day}`;
        dateFound = true;
        break;
      }
    }
    if (!dateFound) return;

    // Remaining non-date, non-time fields are subject/paper
    const nonDateParts = parts.filter(p => !p.match(datePattern) && !isoDate.test(p) && !p.match(/\d{1,2}:\d{2}/));
    if (nonDateParts.length >= 1) subject = nonDateParts[0];
    if (nonDateParts.length >= 2) paper = nonDateParts[1];

    // Find time
    for (const p of parts) {
      const t = p.match(/(\d{1,2}:\d{2})/);
      if (t) { time = t[1]; break; }
    }

    if (date && subject) results.push({ date, subject, paper, time });
  });
  return results;
}

// ===== INIT =====
(async () => {
  loadState();

  // First visit — show setup wizard
  if (state.firstVisit) {
    document.getElementById('setup-overlay').classList.remove('hidden');
    document.getElementById('setup-save').addEventListener('click', () => {
      const checked = [...document.querySelectorAll('.setup-type-cb:checked')].map(cb => cb.value);
      ensureBuiltinExams(checked);
      state.firstVisit = false;
      if (!state.activeSetId && checked.length) state.activeSetId = 'builtin-' + checked[0];
      if (!state.activeSetId) {
        // Create empty custom set if nothing checked
        state.activeSetId = 'custom-default';
        state.examSets['custom-default'] = { name: 'My Exams', type: 'custom', enabled: true, papers: [], selectedIds: [], progress: {}, notes: {}, goals: {}, subjectColors: {} };
      }
      saveState();
      document.getElementById('setup-overlay').classList.add('hidden');
      document.getElementById('app').classList.remove('hidden');
      refreshAll();
    });
  } else {
    ensureBuiltinExams(['o-level', 'n-level', 'a-level']);
    document.getElementById('app').classList.remove('hidden');
  }

  if (state.darkMode) document.documentElement.setAttribute('data-theme', 'dark');

  // View tabs
  document.querySelectorAll('.view-tab').forEach(tab => { tab.addEventListener('click', () => { document.querySelectorAll('.view-tab').forEach(t => t.classList.remove('active')); tab.classList.add('active'); document.querySelectorAll('.view-content').forEach(v => v.classList.remove('active')); const view = tab.dataset.view; if (view === 'calendar') document.getElementById('calendar-view').classList.add('active'); else if (view === 'notes') { document.getElementById('notes-view').classList.add('active'); renderNotes(); } else document.getElementById('list-view').classList.add('active'); refreshAll(); }); });

  document.querySelectorAll('.modal-close').forEach(btn => { btn.addEventListener('click', () => btn.closest('.overlay').classList.add('hidden')); });
  document.querySelectorAll('.overlay').forEach(o => { o.addEventListener('click', (e) => { if (e.target === o) o.classList.add('hidden'); }); });

  // Exam card clicks
  document.getElementById('exam-list').addEventListener('click', (e) => { const card = e.target.closest('.exam-card'); if (card) showExamDetail(card.dataset.id); });

  document.getElementById('cal-prev').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() - 1); renderCalendar(); });
  document.getElementById('cal-next').addEventListener('click', () => { calDate.setMonth(calDate.getMonth() + 1); renderCalendar(); });

  document.getElementById('btn-empty-settings').addEventListener('click', () => { document.querySelector('.view-tab[data-view="all"]')?.click(); document.getElementById('settings-modal').classList.remove('hidden'); renderSettings(); });

  // Settings
  document.getElementById('btn-settings').addEventListener('click', () => { document.getElementById('settings-modal').classList.remove('hidden'); renderSettings(); });
  document.getElementById('settings-save').addEventListener('click', applySettings);

  // Dark mode
  document.getElementById('btn-darkmode').addEventListener('click', () => { state.darkMode = !state.darkMode; saveState(); refreshAll(); });
  document.getElementById('settings-darkmode').addEventListener('change', () => { state.darkMode = document.getElementById('settings-darkmode').checked; document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light'); saveState(); });

  // Notifications
  document.getElementById('btn-notifications').addEventListener('click', () => {
    if (!('Notification' in window)) { showToast('Notifications not supported.'); return; }
    if (Notification.permission === 'denied') { showToast('Notifications were blocked.', 4000); return; }
    if (Notification.permission === 'granted') { state.notificationsEnabled = true; state.notifications = true; saveState(); showToast('Notifications enabled!'); return; }
    Notification.requestPermission().then(perm => { if (perm === 'granted') { state.notificationsEnabled = true; state.notifications = true; saveState(); showToast('Notifications enabled!'); } });
  });
  document.getElementById('settings-notifications').addEventListener('change', () => { state.notifications = document.getElementById('settings-notifications').checked; saveState(); });
  document.getElementById('notif-close').addEventListener('click', () => { document.getElementById('notification-banner').classList.add('hidden'); });

  // Exam switcher
  document.getElementById('exam-switcher').addEventListener('change', (e) => { switchExamSet(e.target.value); });

  // Goals toggle
  document.getElementById('btn-goals-toggle').addEventListener('click', () => { const set = state.examSets[state.activeSetId]; if (set) { set.goalsCollapsed = !set.goalsCollapsed; saveState(); renderGoalsList(state.activeSetId); } });

  // Filter / sort / search
  document.getElementById('filter-subject').addEventListener('change', () => refreshAll());
  document.getElementById('sort-by').addEventListener('change', () => renderList());
  document.getElementById('search-exams').addEventListener('input', () => renderList());

  // Export / Import
  document.getElementById('btn-export').addEventListener('click', () => document.getElementById('export-modal').classList.remove('hidden'));
  document.getElementById('btn-do-export').addEventListener('click', exportData);
  document.getElementById('btn-do-import').addEventListener('click', () => { const f = document.getElementById('import-file').files[0]; if (f) importData(f); else showToast('Select a JSON file first.'); });

  // Feedback
  document.getElementById('btn-feedback').addEventListener('click', () => document.getElementById('feedback-modal').classList.remove('hidden'));
  document.getElementById('btn-feedback-open').addEventListener('click', () => { window.open(state.googleFormUrl || GOOGLE_FORM_URL, '_blank'); });

  // Exam set management
  document.getElementById('btn-add-exam-set').addEventListener('click', () => {
    document.getElementById('exam-set-modal-title').textContent = 'New Custom Exam Set';
    document.getElementById('exam-set-name').value = '';
    document.getElementById('exam-set-entries').innerHTML = '<div class="exam-set-row"><input type="text" class="es-subject" placeholder="Subject" style="flex:2"><input type="text" class="es-paper" placeholder="Paper" style="flex:1"><input type="date" class="es-date" style="flex:1"><input type="time" class="es-time" placeholder="Time" style="flex:0.7"><button class="btn btn-small btn-danger es-remove">&times;</button></div>';
    document.getElementById('exam-set-modal').classList.remove('hidden');
  });
  document.getElementById('btn-add-entry').addEventListener('click', () => {
    const container = document.getElementById('exam-set-entries');
    const row = document.createElement('div'); row.className = 'exam-set-row';
    row.innerHTML = '<input type="text" class="es-subject" placeholder="Subject" style="flex:2"><input type="text" class="es-paper" placeholder="Paper" style="flex:1"><input type="date" class="es-date" style="flex:1"><input type="time" class="es-time" placeholder="Time" style="flex:0.7"><button class="btn btn-small btn-danger es-remove">&times;</button>';
    container.appendChild(row);
    row.querySelector('.es-remove').addEventListener('click', () => row.remove());
  });
  document.getElementById('btn-save-exam-set').addEventListener('click', () => {
    const name = document.getElementById('exam-set-name').value.trim();
    if (!name) { showToast('Please enter a name.'); return; }
    const rows = document.querySelectorAll('#exam-set-entries .exam-set-row');
    const papers = [];
    rows.forEach(row => { const s = row.querySelector('.es-subject').value.trim(); const p = row.querySelector('.es-paper').value.trim(); const d = row.querySelector('.es-date').value; const t = row.querySelector('.es-time').value; if (s && d) papers.push({ subject: s, paper: p, paperName: p, date: d, startTime: t || null }); });
    if (!papers.length) { showToast('Add at least one subject with a date.'); return; }
    createCustomExamSet(name, papers);
    document.getElementById('exam-set-modal').classList.add('hidden');
  });
  document.querySelectorAll('.es-remove').forEach(btn => { btn.addEventListener('click', () => btn.closest('.exam-set-row').remove()); });

  // OCR
  document.getElementById('btn-import-timetable').addEventListener('click', () => {
    document.getElementById('ocr-modal').classList.remove('hidden');
    document.getElementById('ocr-upload-area').classList.remove('hidden');
    document.getElementById('ocr-results').classList.add('hidden');
    document.getElementById('ocr-status').classList.add('hidden');
    document.getElementById('ocr-entries').innerHTML = '';
    document.getElementById('ocr-file-input').value = '';
  });
  document.getElementById('btn-ocr-start').addEventListener('click', async () => { const file = document.getElementById('ocr-file-input').files[0]; if (!file) { showToast('Please select a file.'); return; } await runOCR(file); });
  document.getElementById('btn-ocr-save').addEventListener('click', () => {
    const entries = document.querySelectorAll('#ocr-entries .ocr-entry');
    const papers = [];
    entries.forEach(row => { const d = row.querySelector('.ocr-date-input').value; const s = row.querySelector('.ocr-subject-input').value.trim(); const p = row.querySelector('.ocr-paper-input').value.trim(); const t = row.querySelector('.ocr-time-input').value; if (d && s) papers.push({ subject: s, paper: p, paperName: p, date: d, startTime: t || null }); });
    if (!papers.length) { showToast('No valid entries.'); return; }
    createCustomExamSet('Imported ' + new Date().toLocaleDateString('en-SG'), papers);
    document.getElementById('ocr-modal').classList.add('hidden');
  });
  document.getElementById('btn-ocr-cancel').addEventListener('click', () => { document.getElementById('ocr-modal').classList.add('hidden'); });

  // Sheets import
  document.getElementById('btn-import-sheets').addEventListener('click', () => {
    document.getElementById('sheets-modal').classList.remove('hidden');
    document.getElementById('sheets-preview').classList.add('hidden');
    document.getElementById('sheets-paste-area').value = '';
    document.getElementById('sheets-set-name').value = '';
  });
  document.getElementById('btn-sheets-parse').addEventListener('click', () => {
    const text = document.getElementById('sheets-paste-area').value;
    if (!text.trim()) { showToast('Paste your exam data first.'); return; }
    const entries = parseSheetData(text);
    const preview = document.getElementById('sheets-entries');
    if (!entries.length) { showToast('Could not parse any entries. Check the format.'); return; }
    preview.innerHTML = entries.map((e, i) => `<div class="ocr-entry"><span style="font-size:13px;min-width:100px">${e.date}</span><span style="font-size:13px;flex:1">${e.subject}</span><span style="font-size:13px;min-width:80px">${e.paper || ''}</span><span style="font-size:13px;min-width:60px">${e.time || ''}</span></div>`).join('');
    preview.dataset.entries = JSON.stringify(entries);
    document.getElementById('sheets-preview').classList.remove('hidden');
    showToast(`Found ${entries.length} entries.`);
  });
  document.getElementById('btn-sheets-save').addEventListener('click', () => {
    const name = document.getElementById('sheets-set-name').value.trim() || ('Sheets ' + new Date().toLocaleDateString('en-SG'));
    const preview = document.getElementById('sheets-entries');
    if (!preview.dataset.entries) { showToast('Parse the data first.'); return; }
    const entries = JSON.parse(preview.dataset.entries);
    createCustomExamSet(name, entries);
    document.getElementById('sheets-modal').classList.add('hidden');
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') document.querySelectorAll('.overlay:not(.hidden)').forEach(o => o.classList.add('hidden'));
    if (e.key === '?' && !e.ctrlKey && !e.metaKey) showToast('Shortcuts: ? Help | Esc Close modal | D Dark mode', 4000);
    if ((e.key === 'd' || e.key === 'D') && !e.ctrlKey && !e.metaKey && !e.target.closest('input,textarea,select')) { state.darkMode = !state.darkMode; saveState(); refreshAll(); }
  });

  window.matchMedia('print').addEventListener('change', (mql) => { if (mql.matches) document.querySelectorAll('.overlay').forEach(o => o.classList.add('hidden')); });

  setInterval(() => { checkAndNotify(); }, 60000);
  checkAndNotify();

  // Initial render if not first visit
  if (!state.firstVisit) {
    refreshAll();
  }
})();
