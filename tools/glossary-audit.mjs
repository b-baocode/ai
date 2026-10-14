// Soát bảng thuật ngữ (data/glossary.js): mã bài hợp lệ, không trùng cách viết,
// và đo độ phủ: bao nhiêu câu trắc nghiệm có ít nhất một thuật ngữ được giải thích ở lựa chọn sai.
// Chạy: node tools/glossary-audit.mjs [--miss] [--show <id câu>]
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const files = [...html.matchAll(/<script defer src="(data\/[^"]+)"/g)].map(m => m[1]);
const w = {}; w.window = w; w.console = console; vm.createContext(w);
for (const f of files) vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), w);

const G = w.GLOSSARY || [];
const lessons = Array.isArray(w.LESSONS) ? w.LESSONS : Object.values(w.LESSONS).flat();
const lessonIds = new Set(lessons.map(l => l.id));
const problems = [];
const seen = new Map();
const WORD = /[\p{L}\p{N}_]/u;
const rules = [];
G.forEach((g, gi) => {
  if (g.l && !lessonIds.has(g.l)) problems.push(`"${g.t}": bài ${g.l} không tồn tại`);
  if (!g.d || g.d.length < 20) problems.push(`"${g.t}": giải thích quá ngắn`);
  g.a.forEach(raw => {
    const key = raw.toLowerCase();
    if (seen.has(key)) problems.push(`cách viết "${raw}" trùng giữa "${seen.get(key)}" và "${g.t}"`);
    seen.set(key, g.t);
    const cs = raw[0] === '=';
    const al = cs ? raw.slice(1) : raw;
    const body = al.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&').replace(/ /g, '\\s+');
    const pre = WORD.test(al[0]) ? '(?<![\\p{L}\\p{N}_])' : '';
    const post = WORD.test(al[al.length - 1]) ? '(?![\\p{L}\\p{N}_])' : '';
    rules.push({ gi, re: new RegExp(pre + body + post, cs ? 'gu' : 'giu') });
  });
});

// Cùng thuật toán với glossOf() trong assets/app.js
function glossOf(q) {
  const found = new Map();
  for (const o of q.options) {
    const text = String(o.text).replace(/`/g, '');
    const hits = [];
    for (const r of rules) { r.re.lastIndex = 0; let m; while ((m = r.re.exec(text))) { hits.push([m.index, m.index + m[0].length, r.gi]); if (!m[0].length) r.re.lastIndex++; } }
    const keep = hits.filter(h => !hits.some(k => k[2] !== h[2] && k[0] <= h[0] && k[1] >= h[1] && (k[1] - k[0]) > (h[1] - h[0])));
    keep.forEach(h => { if (!found.has(h[2])) found.set(h[2], []); if (!found.get(h[2]).includes(o.key)) found.get(h[2]).push(o.key); });
  }
  return [...found].map(([gi, keys]) => ({ g: G[gi], keys }));
}

const mcq = w.QUESTIONS.filter(q => q.type === 'mcq');
let any = 0, wrongHit = 0, total = 0, over = 0;
const use = new Map();
const missTerm = {};
const VI = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i;
for (const q of mcq) {
  const items = glossOf(q);
  total++;
  if (items.length) any++;
  if (items.length > 7) over++;
  if (items.some(it => it.keys.some(k => k !== q.answer))) wrongHit++;
  items.forEach(it => use.set(it.g.t, (use.get(it.g.t) || 0) + 1));
  // từ tiếng Anh ở lựa chọn sai chưa có mục nào giải thích
  for (const o of q.options) {
    if (o.key === q.answer) continue;
    const text = String(o.text).replace(/`[^`]*`/g, ' ');
    for (const word of text.split(/[^\p{L}\p{N}\-]+/u)) {
      if (!/^[A-Za-z][A-Za-z\-]{3,}$/.test(word) || VI.test(word)) continue;
      const fake = { options: [{ key: 'X', text: word }] };
      if (!glossOf(fake).length && !items.some(it => it.keys.includes(o.key) && new RegExp(word, 'i').test(o.text) && it.g.a.some(a => a.toLowerCase().includes(word.toLowerCase())))) missTerm[word.toLowerCase()] = (missTerm[word.toLowerCase()] || 0) + 1;
    }
  }
}
const argv = process.argv.slice(2);
if (argv[0] === '--show') {
  const q = w.QUESTIONS.find(x => x.id === argv[1]);
  if (!q) { console.log('Không có câu', argv[1]); process.exit(1); }
  console.log(q.prompt); q.options.forEach(o => console.log(' ', o.key, o.key === q.answer ? '✔' : ' ', o.text));
  glossOf(q).forEach(it => console.log('  🔎', it.g.t, '[' + it.keys.join(',') + ']'));
  process.exit(0);
}
console.log(`Bảng thuật ngữ: ${G.length} mục, ${rules.length} cách viết.`);
console.log(`Trắc nghiệm: ${total} câu | có thuật ngữ được giải thích: ${any} (${Math.round(any / total * 100)}%) | có ở lựa chọn SAI: ${wrongHit} (${Math.round(wrongHit / total * 100)}%) | quá 7 mục: ${over}`);
const unused = G.filter(g => !use.has(g.t)).map(g => g.t);
console.log(`Mục chưa khớp câu nào (${unused.length}): ${unused.join('; ')}`);
if (argv.includes('--miss')) console.log('\nTừ tiếng Anh ở lựa chọn sai chưa có giải thích:\n' + Object.entries(missTerm).sort((a, b) => b[1] - a[1]).slice(0, 220).map(([k, n]) => k + '×' + n).join(' '));
if (argv.includes('--top')) console.log('\nMục khớp nhiều nhất:\n' + [...use].sort((a, b) => b[1] - a[1]).slice(0, 40).map(([k, n]) => k + '×' + n).join(' | '));
if (problems.length) { console.log('\n❌ ' + problems.join('\n❌ ')); process.exit(1); }
console.log('✅ Bảng thuật ngữ hợp lệ.');
