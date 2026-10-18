// Kiểm tra dữ liệu: nạp các file data/*.js theo đúng thứ tự trong index.html rồi soát lỗi.
// Chạy: node tools/check.mjs
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script defer src="(data\/[^"]+)"/g)].map(m => m[1]);

const ctx = { window: {} };
ctx.window.window = ctx.window;
vm.createContext(ctx.window);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx.window, { filename: f });

const { MODULES, LESSONS, QUESTIONS } = ctx.window;
let problems = 0;
const warn = (...a) => { problems++; console.log('❌', ...a); };

// ID trùng, đáp án hợp lệ
const ids = new Set();
for (const q of QUESTIONS) {
  if (ids.has(q.id)) warn('ID trùng:', q.id);
  ids.add(q.id);
  if (q.type === 'mcq') {
    const keys = (q.options || []).map(o => o.key);
    if (!keys.includes(q.answer)) warn('Đáp án không nằm trong lựa chọn:', q.id);
    if (!q.explanation) warn('Thiếu giải thích:', q.id);
  } else if (!q.modelAnswer) warn('Câu mở thiếu đáp án mẫu:', q.id);
}

// Bài học ↔ dạng đề
const lessonIds = new Set();
const skillOwner = new Map();
for (const l of LESSONS) {
  if (lessonIds.has(l.id)) warn('Bài trùng ID:', l.id);
  lessonIds.add(l.id);
  const mod = MODULES.find(m => m.id === l.module);
  if (!mod || !mod.topics.some(t => t.id === l.topic)) warn('Bài có topic không tồn tại:', l.id, l.topic);
  if (l.questionIds) {
    for (const id of l.questionIds) if (!QUESTIONS.some(q => q.id === id)) warn('Bài tổng hợp trỏ tới câu không tồn tại:', l.id, id);
    if (l.skills.length) warn('Bài tổng hợp không được sở hữu dạng đề:', l.id);
  }
  for (const s of l.skills) {
    if (skillOwner.has(s)) warn(`Dạng ${s} thuộc 2 bài: ${skillOwner.get(s)} và ${l.id}`);
    skillOwner.set(s, l.id);
    if (!QUESTIONS.some(q => q.skill === s)) warn('Dạng không có câu nào:', l.id, s);
  }
}

for (const m of MODULES) {
  const qs = QUESTIONS.filter(q => q.module === m.id);
  const ls = LESSONS.filter(l => l.module === m.id);
  const orphan = [...new Set(qs.map(q => q.skill))].filter(s => !skillOwner.has(s));
  console.log(`\nModule ${m.id}: ${qs.length} câu (${qs.filter(q => q.source === 'tu-soan').length} tự soạn), ${ls.length} bài`);
  for (const l of ls) {
    const n = l.questionIds ? QUESTIONS.filter(q => l.questionIds.includes(q.id)) : qs.filter(q => l.skills.includes(q.skill));
    const flag = n.length < 5 ? '  ⚠️ ít câu' : '';
    console.log(`  ${l.id.padEnd(6)} ${String(n.length).padStart(3)} câu (${n.filter(q => q.type !== 'mcq').length} mở)  ${l.title}${flag}`);
  }
  if (ls.length && orphan.length) warn(`Module ${m.id} còn dạng chưa gắn bài:`, orphan.join(', '));
  else if (!ls.length) console.log('  (chưa có bài học)');
}

// Bộ đề cố định: phủ hết ngân hàng, đúng cấu trúc, không lặp câu trong một đề.
vm.runInContext(fs.readFileSync(path.join(ROOT, 'assets/exam-sets.js'), 'utf8'), ctx.window, { filename: 'assets/exam-sets.js' });
const EX = ctx.window.buildExamSets(QUESTIONS, MODULES);
const byId = new Map(QUESTIONS.map(q => [q.id, q]));
const inSets = new Set();
for (const s of EX.full) {
  if (new Set(s.ids).size !== s.ids.length) warn('Đề có câu lặp trong chính nó:', s.id);
  for (const m of MODULES) {
    const qs = s.ids.map(id => byId.get(id)).filter(q => q.module === m.id);
    const mcq = qs.filter(q => q.type === 'mcq').length;
    if (mcq !== m.exam.mcq || qs.length - mcq !== m.exam.open) warn(`${s.id} sai cấu trúc module ${m.id}: ${mcq} trắc nghiệm + ${qs.length - mcq} mở`);
  }
  if (s.ids.some(id => byId.get(id).advanced)) warn('Đề chứa câu nâng cao:', s.id);
  s.ids.forEach(id => inSets.add(id));
}
const uncovered = QUESTIONS.filter(q => !q.advanced && !inSets.has(q.id));
if (uncovered.length) warn('Câu chưa nằm trong đề nào:', uncovered.length, uncovered.slice(0, 5).map(q => q.id).join(', '));
const mlqIds = new Set(EX.mlq.flatMap(s => s.ids));
const mlqMissing = QUESTIONS.filter(q => q.source === 'ml-quiz' && !mlqIds.has(q.id));
if (mlqMissing.length) warn('Câu ml-quiz chưa nằm trong phần nào:', mlqMissing.length);
const lastFresh = EX.full.findIndex(s => s.fresh === 0);
console.log(`\nBộ đề: ${EX.full.length} đề × ${EX.full[0].ids.length} câu, phủ ${inSets.size}/${EX.bank} câu (không tính ${EX.total - EX.bank} câu nâng cao).`);
console.log(`  Số câu mới của từng đề: ${EX.full.map(s => s.fresh).join(' ')}`);
console.log(`Quiz ML/DL: một bộ ${EX.mlq.map(s => s.ids.length).join(' + ')} câu.`);

console.log(problems ? `\n${problems} vấn đề.` : '\n✅ Không có vấn đề.');
process.exitCode = problems ? 1 : 0;
