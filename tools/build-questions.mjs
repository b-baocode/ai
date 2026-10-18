// Chuẩn hóa ngân hàng câu hỏi từ data/raw → data/questions.js
// Chạy: node tools/build-questions.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { E_SKILL } from './e-skill-map.mjs';
import { MLQ_SKILL, MLQ_SKIP, MLQ_FIX } from './mlq-map.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const RAW = path.join(ROOT, 'data', 'raw');

const out = [];
const seen = new Set();

function push(q, source, skill, exam) {
  const key = q.module + '|' + q.prompt.trim();
  if (seen.has(key)) return;
  seen.add(key);
  const item = {
    id: q.id,
    module: q.module,
    skill,
    type: q.type,
    points: q.points,
    prompt: q.prompt,
    source,
    exam,
  };
  for (const k of ['options', 'answer', 'explanation', 'modelAnswer', 'rubric', 'hint', 'difficulty', 'advanced']) {
    if (q[k] !== undefined && q[k] !== '') item[k] = q[k];
  }
  out.push(item);
}

// Bộ N26 (có skillId chi tiết). Bỏ hậu tố số/chữ đơn lẻ để gộp biến thể cùng dạng.
const n26Dir = path.join(RAW, 'aitest-n26');
for (const f of fs.readdirSync(n26Dir).filter(f => f.endsWith('.json')).sort()) {
  const exam = JSON.parse(fs.readFileSync(path.join(n26Dir, f), 'utf8'));
  for (const q of exam.questions) {
    const skill = (q.skillId || 'misc').replace(/-\d+$/, '').replace(/\.(\d+|[a-z])$/, '');
    if (/^api[.-]/.test(skill)) continue;   // requests/HTTP: người dùng bỏ phần này (18/10), xóa bài B7.1, B7.2
    push(q, 'aitest-n26', skill, exam.id);
  }
}

// Bộ E01–E10 (chỉ có tag chung): module A dùng "e.<tag>", module B–D gắn tay trong tools/e-skill-map.mjs.
const eSet = JSON.parse(fs.readFileSync(path.join(RAW, 'aitest_E01-E10.json'), 'utf8'));
const unmapped = [];
for (const q of eSet.questions) {
  const exam = 'exam-' + q.id.slice(1, 3);
  let skill = E_SKILL[q.id];
  if (!skill && q.module === 'A') skill = 'e.' + q.tags[0];
  if (!skill) { skill = 'e.' + q.module.toLowerCase() + '.unmapped'; if (!seen.has(q.module + '|' + q.prompt.trim())) unmapped.push(q.id); }
  push(q, 'aitest-e', skill, exam);
}
if (unmapped.length) console.log('⚠️  Chưa gắn skill:', unmapped.join(', '));

// Quiz cũ của người dùng (ml_dl_quiz_1.html → data/raw/ml_dl_quiz_1.json).
// File gốc dồn đáp án đúng vào B/C và tự xáo khi hiển thị; ở đây xáo cố định (seed theo số câu).
const mlq = JSON.parse(fs.readFileSync(path.join(RAW, 'ml_dl_quiz_1.json'), 'utf8'));
const owner = new Map();
for (const [skill, nums] of Object.entries(MLQ_SKILL)) {
  for (const n of nums) {
    if (owner.has(n)) throw new Error(`Câu ${n} bị gán 2 dạng`);
    owner.set(n, skill);
  }
}
const missing = mlq.filter(x => !owner.has(x.n) && !MLQ_SKIP.includes(x.n)).map(x => x.n);
if (missing.length) throw new Error('Câu chưa phân loại: ' + missing.join(', '));
const moduleOf = s => /^mlq\.(bayes|vector)$/.test(s) ? 'A' : /^mlq\.(numpy|pandas)/.test(s) ? 'B' : 'C';
for (const x of mlq) {
  const skill = owner.get(x.n);
  if (!skill) continue;
  let prompt = x.q;
  if (MLQ_FIX[x.n]) prompt = prompt.replace(MLQ_FIX[x.n][0], MLQ_FIX[x.n][1]);
  let seed = x.n * 9301 + 49297;
  const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  // Câu có lựa chọn "Tất cả các phương pháp trên" phụ thuộc vị trí → giữ nguyên thứ tự.
  const keepOrder = x.options.some(o => /^Tất cả các phương (pháp|án) trên/.test(o));
  const order = keepOrder ? [0, 1, 2, 3] : [0, 1, 2, 3].map(i => [rnd(), i]).sort((a, b) => a[0] - b[0]).map(p => p[1]);
  const q = {
    id: 'MLQ-' + String(x.n).padStart(3, '0'), module: moduleOf(skill), type: 'mcq', points: 1, prompt,
    options: order.map((src, k) => ({ key: 'ABCD'[k], text: x.options[src] })),
    answer: 'ABCD'[order.indexOf(x.answer)], explanation: x.explanation,
  };
  if (skill === 'mlq.advanced') q.advanced = true;
  push(q, 'ml-quiz', skill, 'ml_dl_quiz_1');
}

const header = '// Sinh tự động bởi tools/build-questions.mjs — không sửa tay.\n' +
  '// Nguồn: github.com/HungBil/AI-TEST (MIT © 2026 Henry Don) và ml_dl_quiz_1.html của người dùng.\n';
fs.writeFileSync(path.join(ROOT, 'data', 'questions.js'), header + 'window.QUESTIONS = ' + JSON.stringify(out) + ';\n');

const stat = {};
out.forEach(q => { const k = q.module + ':' + q.type; stat[k] = (stat[k] || 0) + 1; });
console.log(`✅ ${out.length} câu →`, stat);
