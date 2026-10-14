(function () {
  'use strict';

  const MODULES = window.MODULES || [];
  const LESSONS = window.LESSONS || [];
  const QUESTIONS = window.QUESTIONS || [];

  const PASS_RATIO = 0.8;          // đạt bài khi đúng ≥ 80%
  const LESSON_PRACTICE_SIZE = 8;  // số câu luyện mỗi bài
  const OPEN_PASS = 0.6;           // tự chấm ≥ 60% rubric coi như đúng
  const WRONG_CLEAR_STREAK = 2;    // đúng liên tiếp 2 lần thì rời sổ câu sai

  // ---------- Index ----------
  const qById = new Map(QUESTIONS.map(q => [q.id, q]));
  const lessonById = new Map(LESSONS.map(l => [l.id, l]));
  const lessonBySkill = new Map();
  LESSONS.forEach(l => (l.skills || []).forEach(s => lessonBySkill.set(s, l)));
  const modById = new Map(MODULES.map(m => [m.id, m]));

  function lessonsOfModule(mid) { return LESSONS.filter(l => l.module === mid); }
  function lessonsOfTopic(tid) { return LESSONS.filter(l => l.topic === tid); }
  function questionsOfLesson(l) { const set = new Set(l.skills || []); return QUESTIONS.filter(q => set.has(q.skill)); }
  function questionsOfModule(mid) { return QUESTIONS.filter(q => q.module === mid); }

  // ---------- Storage ----------
  const STORE_KEY = 'onthiAI.v1';
  const store = load();

  function load() {
    const empty = { lessons: {}, seen: {}, wrong: {}, exams: [], theme: null };
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? Object.assign(empty, JSON.parse(raw)) : empty;
    } catch (e) { return empty; }
  }

  // quiet = true: chỉ lưu, không vẽ lại sidebar (dùng cho chính trạng thái của sidebar).
  function save(quiet) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* bộ nhớ không khả dụng */ }
    if (!quiet && typeof queueSidebar === 'function') queueSidebar();
  }

  function recordAnswer(q, correct) {
    const s = store.seen[q.id] || (store.seen[q.id] = { c: 0, w: 0 });
    if (correct) s.c++; else s.w++;
    if (!correct) {
      store.wrong[q.id] = { streak: 0, at: Date.now() };
    } else if (store.wrong[q.id]) {
      store.wrong[q.id].streak++;
      if (store.wrong[q.id].streak >= WRONG_CLEAR_STREAK) delete store.wrong[q.id];
    }
    save();
  }

  // ---------- Helpers ----------
  const app = document.getElementById('app');

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function inlineMd(s) {
    return esc(s)
      .replace(/`([^`\n]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*\n]+)\*\*/g, '<b>$1</b>')
      .replace(/\n/g, '<br>');
  }

  // ---------- Bảng thuật ngữ ----------
  // Dò thuật ngữ trong các lựa chọn để giải thích cả những lựa chọn SAI (bài học của câu thường không nhắc tới chúng).
  const GLOSSARY = window.GLOSSARY || [];
  const WORD_CH = /[\p{L}\p{N}_]/u;
  const glossRules = [];
  GLOSSARY.forEach((g, gi) => g.a.forEach(raw => {
    const cs = raw[0] === '=';
    const al = cs ? raw.slice(1) : raw;
    const body = al.replace(/[.*+?^$()|[\]{}\\]/g, '\\$&').replace(/ /g, '\\s+');
    const pre = WORD_CH.test(al[0]) ? '(?<![\\p{L}\\p{N}_])' : '';
    const post = WORD_CH.test(al[al.length - 1]) ? '(?![\\p{L}\\p{N}_])' : '';
    try { glossRules.push({ gi, re: new RegExp(pre + body + post, cs ? 'gu' : 'giu') }); } catch (e) { /* trình duyệt cũ không có lookbehind: bỏ qua mục này */ }
  }));
  // Trả về [{g, keys: ['A','C']}] theo thứ tự xuất hiện; cụm dài che cụm ngắn nằm trong nó ("gradient descent" che "gradient").
  function glossOf(q) {
    if (!q || !q.options || !glossRules.length) return [];
    const found = new Map();
    for (const o of q.options) {
      const text = String(o.text).replace(/`/g, '');
      const hits = [];
      for (const r of glossRules) {
        r.re.lastIndex = 0;
        let m;
        while ((m = r.re.exec(text))) { hits.push([m.index, m.index + m[0].length, r.gi]); if (!m[0].length) r.re.lastIndex++; }
      }
      const keep = hits.filter(h => !hits.some(k => k[2] !== h[2] && k[0] <= h[0] && k[1] >= h[1] && (k[1] - k[0]) > (h[1] - h[0])));
      keep.sort((x, y) => x[0] - y[0]).forEach(h => {
        if (!found.has(h[2])) found.set(h[2], []);
        if (!found.get(h[2]).includes(o.key)) found.get(h[2]).push(o.key);
      });
    }
    return [...found].map(([gi, keys]) => ({ g: GLOSSARY[gi], keys }));
  }
  function glossHtml(q) {
    const items = glossOf(q);
    if (!items.length) return '';
    // Ưu tiên thuật ngữ nằm ở lựa chọn sai, vì đó là phần lời giải không nói tới.
    const onlyRight = it => (it.keys.every(k => k === q.answer) ? 1 : 0);
    items.sort((x, y) => onlyRight(x) - onlyRight(y));
    const rows = items.slice(0, 7).map(({ g, keys }) => {
      const link = g.l && lessonById.has(g.l) ? ' <a href="#/l/' + g.l + '">→ ' + esc(g.l) + '</a>' : '';
      return '<li><b>' + esc(g.t) + '</b> <span class="gloss-keys">' + keys.map(esc).join(', ') + '</span> — ' + esc(g.d) + link + '</li>';
    }).join('');
    return '<details class="gloss" open><summary>🔎 Thuật ngữ trong các lựa chọn</summary><ul>' + rows + '</ul><div class="small"><a href="#/glossary">Xem toàn bộ bảng thuật ngữ</a></div></details>';
  }

  // Markdown tối giản cho đề: khối ```code```, `inline`, **đậm**, xuống dòng.
  function md(text) {
    const s = String(text == null ? '' : text);
    const re = /```(\w*)\n?([\s\S]*?)(```|$)/g;
    let html = '', last = 0, m;
    while ((m = re.exec(s))) {
      html += inlineMd(s.slice(last, m.index).replace(/^\n+|\n+$/g, ''));
      html += '<pre><code class="language-' + (m[1] || 'python') + '">' + esc(m[2].replace(/\n+$/, '')) + '</code></pre>';
      last = re.lastIndex;
      if (!m[3]) break;
    }
    html += inlineMd(s.slice(last).replace(/^\n+/, ''));
    return html;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  function isOpen(q) { return q.type !== 'mcq'; }

  function typeLabel(q) { return q.type === 'mcq' ? 'Trắc nghiệm' : q.type === 'code' ? 'Code' : 'Tự luận'; }

  function enhance(root) {
    try {
      if (window.renderMathInElement) {
        window.renderMathInElement(root, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\(', right: '\\)', display: false },
          ],
          throwOnError: false,
        });
      }
    } catch (e) { /* KaTeX lỗi thì giữ nguyên text */ }
    try {
      if (window.hljs) root.querySelectorAll('pre code').forEach(el => window.hljs.highlightElement(el));
    } catch (e) { /* bỏ qua */ }
  }

  function fmtTime(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function lessonStatus(l) {
    const st = store.lessons[l.id];
    if (!st) return { icon: '⬜', label: 'Chưa học', cls: '' };
    if (st.done) return { icon: '✅', label: 'Đã nắm (' + Math.round(st.best * 100) + '%)', cls: 'ok' };
    return { icon: '🔄', label: 'Đang học' + (st.best != null ? ' (' + Math.round(st.best * 100) + '%)' : ''), cls: 'warn' };
  }

  function moduleProgress(mid) {
    const ls = lessonsOfModule(mid);
    const done = ls.filter(l => store.lessons[l.id] && store.lessons[l.id].done).length;
    const qs = questionsOfModule(mid);
    let c = 0, w = 0;
    qs.forEach(q => { const s = store.seen[q.id]; if (s) { c += s.c; w += s.w; } });
    return { total: ls.length, done, accuracy: c + w ? c / (c + w) : null, questions: qs.length };
  }

  // ---------- Router ----------
  let activeQuiz = null;
  let lastHash = location.hash;

  function confirmLeave() {
    return !(activeQuiz && activeQuiz.mode === 'exam' && !activeQuiz.finished) ||
      confirm('Bạn đang làm bài thi. Thoát sẽ mất bài đang làm. Vẫn thoát?');
  }

  window.addEventListener('hashchange', () => {
    if (!confirmLeave()) { history.replaceState(null, '', lastHash || '#/'); return; }
    route();
  });

  // Bài thi/luyện chạy trên chính trang đã mở nó (hash không đổi), nên link trỏ về đúng hash hiện tại
  // (VD "Về trang thi thử" khi đang ở #/exam) không tạo hashchange. Tự vẽ lại trang trong trường hợp đó.
  document.addEventListener('click', e => {
    const a = e.target.closest && e.target.closest('a[href^="#/"]');
    if (!a || a.getAttribute('href') !== (location.hash || '#/')) return;
    e.preventDefault();
    if (confirmLeave()) route();
  });

  function route() {
    if (activeQuiz) { activeQuiz.destroy(); activeQuiz = null; }
    app.onclick = null;   // listener riêng của trang Quiz ML/DL
    lastHash = location.hash;
    const parts = (location.hash.replace(/^#\/?/, '') || '').split('/').map(decodeURIComponent);
    const [page, a, b, c] = parts;
    document.querySelectorAll('.nav a').forEach(el => el.classList.toggle('active', el.dataset.page === (page || 'home')));
    current = { page: page || 'home', id: a };
    closeDrawer();
    renderSidebar(true);
    window.scrollTo(0, 0);
    if (!page) return viewHome();
    if (page === 'm' && modById.has(a)) return viewModule(a);
    if (page === 'l' && lessonById.has(a)) return b === 'practice' ? viewLessonPractice(a, c === 'all') : viewLesson(a);
    if (page === 'practice') return viewPractice();
    if (page === 'exam') return viewExamHub();
    if (page === 'wrong') return viewWrong();
    if (page === 'formulas') return viewFormulas();
    if (page === 'glossary') return viewGlossary();
    if (page === 'plan') return viewPlan();
    if (page === 'attempt') return viewAttempt(a);
    if (page === 'mlq') return viewMlq();
    return viewHome();
  }

  // ---------- Sidebar (mục lục) ----------
  const sidebar = document.getElementById('sidebar');
  let current = { page: 'home', id: null };
  let sidebarQueued = false;

  function currentModule() {
    if (current.page === 'm') return current.id;
    if (current.page === 'l' && lessonById.has(current.id)) return lessonById.get(current.id).module;
    return null;
  }

  // scrollToActive: chỉ cuộn tới mục đang xem khi đổi trang, không cuộn khi chỉ cập nhật trạng thái.
  function renderSidebar(scrollToActive) {
    if (!sidebar) return;
    const open = new Set(store.sbOpen || []);
    const cur = currentModule();
    if (cur) open.add(cur);
    if (!open.size) { const next = LESSONS.find(l => !(store.lessons[l.id] && store.lessons[l.id].done)); open.add(next ? next.module : 'A'); }
    const wrong = Object.keys(store.wrong).filter(id => qById.has(id)).length;
    const pages = [['home', '#/', '🏠 Trang chủ'], ['plan', '#/plan', '🧭 Kế hoạch'], ['practice', '#/practice', '🎯 Luyện tập'], ['exam', '#/exam', '⏱ Thi thử'],
      ['formulas', '#/formulas', '📐 Bảng công thức'], ['glossary', '#/glossary', '🔎 Thuật ngữ'], ['wrong', '#/wrong', '📕 Sổ câu sai' + (wrong ? ' (' + wrong + ')' : '')]];
    const top = sidebar.scrollTop;

    sidebar.innerHTML = `
      <div class="sb-title">Trang</div>
      <nav class="sb-links">${pages.map(([p, href, label]) => `<a href="${href}" class="${current.page === p ? 'active' : ''}">${label}</a>`).join('')}</nav>
      <div class="sb-title">Bài học</div>
      ${MODULES.map(m => {
        const p = moduleProgress(m.id);
        const topics = m.topics.map(t => {
          const ls = lessonsOfTopic(t.id);
          if (!ls.length) return '';
          return `<div class="sb-topic">${esc(t.title)}</div>` + ls.map(l => {
            const st = lessonStatus(l);
            const active = current.page === 'l' && current.id === l.id;
            return `<a class="sb-lesson ${active ? 'active' : ''}" href="#/l/${l.id}" title="${esc(st.label)}"${active ? ' aria-current="page"' : ''}>
              <span class="st">${st.icon}</span><span class="id">${esc(l.id)}</span><span>${esc(l.title)}</span></a>`;
          }).join('');
        }).join('');
        return `<details class="sb-mod mod-${m.id}" data-sbmod="${m.id}" ${open.has(m.id) ? 'open' : ''}>
          <summary><span class="mod-tag">${m.id}</span><span class="name">${esc(m.name)}</span><span class="count">${p.done}/${p.total}</span></summary>
          <a class="sb-mod-link" href="#/m/${m.id}">Tổng quan module ${m.id} →</a>
          ${topics}
        </details>`;
      }).join('')}
    `;

    sidebar.querySelectorAll('.sb-mod').forEach(d => d.addEventListener('toggle', () => {
      store.sbOpen = [...sidebar.querySelectorAll('.sb-mod[open]')].map(x => x.dataset.sbmod);
      save(true);
    }));
    sidebar.scrollTop = top;
    if (scrollToActive) {
      const act = sidebar.querySelector('.sb-lesson.active');
      if (act) act.scrollIntoView({ block: 'nearest' });
    }
  }

  // Gộp nhiều lần lưu liên tiếp thành một lần vẽ lại sidebar.
  function queueSidebar() {
    if (sidebarQueued) return;
    sidebarQueued = true;
    setTimeout(() => { sidebarQueued = false; renderSidebar(false); }, 0);
  }

  const isDrawer = () => matchMedia('(max-width: 900px)').matches;
  function closeDrawer() { document.body.classList.remove('sidebar-open'); }

  document.getElementById('menuBtn').onclick = () => {
    if (isDrawer()) document.body.classList.toggle('sidebar-open');
    else { store.sbHidden = !store.sbHidden; document.body.classList.toggle('sidebar-collapsed', store.sbHidden); save(true); }
  };
  document.getElementById('sidebarOverlay').onclick = closeDrawer;
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDrawer(); });
  if (sidebar) sidebar.addEventListener('click', e => { if (e.target.closest('a')) closeDrawer(); });

  function setView(html, cls) {
    app.className = cls || '';
    app.innerHTML = html;
    enhance(app);
  }

  // ---------- Views ----------
  function viewHome() {
    const total = LESSONS.length;
    const done = LESSONS.filter(l => store.lessons[l.id] && store.lessons[l.id].done).length;
    const next = LESSONS.find(l => !(store.lessons[l.id] && store.lessons[l.id].done));
    const wrongCount = Object.keys(store.wrong).filter(id => qById.has(id)).length;
    const lastExams = attempts().slice(-3).reverse();

    const cards = MODULES.map(m => {
      const p = moduleProgress(m.id);
      const pct = p.total ? Math.round(p.done / p.total * 100) : 0;
      return `<div class="card module-card mod-${m.id}">
        <div class="row"><span class="mod-tag">${m.id}</span><h3>${esc(m.name)}</h3></div>
        <div class="muted small">${esc(m.desc)}</div>
        <div class="progress"><span style="width:${pct}%"></span></div>
        <div class="stat-row">
          <span><b>${p.done}/${p.total}</b> bài đã nắm</span>
          <span><b>${p.questions}</b> câu luyện</span>
          ${p.accuracy != null ? `<span><b>${Math.round(p.accuracy * 100)}%</b> đúng</span>` : ''}
        </div>
        ${p.total ? '' : '<div class="badge warn">Bài học đang soạn — đã luyện đề được</div>'}
        <div class="row"><a class="btn" href="#/m/${m.id}">Mở module</a></div>
      </div>`;
    }).join('');

    setView(`
      <div class="hero">
        <h1>Ôn thi năng lực đầu vào AI</h1>
        <p class="muted">Học từng bài → luyện ngay đúng dạng đề vừa học → thi thử theo module → thi thử full 60 câu / 90 phút.</p>
        <div class="row">
          ${next ? `<a class="btn primary" href="#/l/${next.id}">▶ Học tiếp: ${esc(next.id + ' ' + next.title)}</a>` : ''}
          <a class="btn" href="#/plan">🧭 Kế hoạch trọng tâm</a>
          <a class="btn" href="#/exam">⏱ Thi thử</a>
          ${wrongCount ? `<a class="btn" href="#/wrong">📕 Câu sai (${wrongCount})</a>` : ''}
        </div>
        <p class="small muted">Tiến độ: ${done}/${total} bài đã nắm.</p>
      </div>
      <div class="grid grid-2">${cards}</div>
      ${lastExams.length ? `<h2>Thi thử gần đây</h2><div class="card"><table class="simple">
        <tr><th>Ngày</th><th>Loại</th><th>Điểm</th></tr>
        ${lastExams.map(e => `<tr><td>${new Date(e.at).toLocaleString('vi-VN')}</td><td>${e.ans ? `<a href="#/attempt/${e.id}">${esc(e.title)}</a>` : esc(e.title)}</td><td><b>${e.score}</b>/100</td></tr>`).join('')}
      </table></div>` : ''}
      <h2>Cách học hiệu quả trong 2 tuần</h2>
      <div class="card"><ol>
        <li>Mỗi ngày học 3–4 bài: đọc bài → bấm <b>Luyện dạng này</b> → đạt ≥ 80% mới sang bài sau.</li>
        <li>Câu sai tự vào <b>Sổ câu sai</b>; cuối ngày luyện lại tới khi đúng 2 lần liên tiếp.</li>
        <li>Học xong một module → làm <b>Thi thử module</b> có bấm giờ.</li>
        <li>3–4 ngày cuối: mỗi ngày 1 đề <b>full 60 câu / 90 phút</b>.</li>
      </ol></div>
    `);
  }

  function viewModule(mid) {
    const m = modById.get(mid);
    const p = moduleProgress(mid);
    const topics = m.topics.map(t => {
      const ls = lessonsOfTopic(t.id);
      const items = ls.length ? ls.map(l => {
        const st = lessonStatus(l);
        const n = questionsOfLesson(l).length;
        return `<a class="lesson-item" href="#/l/${l.id}">
          <span class="status" title="${esc(st.label)}">${st.icon}</span>
          <span><b>${esc(l.id)}</b> ${esc(l.title)}<br><span class="meta">${n} câu luyện · ~${l.minutes || 15} phút · ${esc(st.label)}</span></span>
        </a>`;
      }).join('') : '<div class="muted small">Bài học đang soạn.</div>';
      return `<div class="topic"><div class="topic-title"><span>${esc(t.id)}</span><span>${esc(t.title)}</span></div><div class="lesson-list">${items}</div></div>`;
    }).join('');

    setView(`
      <div class="crumbs"><a href="#/">Trang chủ</a> › Module ${m.id}</div>
      <div class="row"><span class="mod-tag">${m.id}</span><h1>${esc(m.name)}</h1></div>
      <p class="muted">${esc(m.desc)}</p>
      <div class="progress"><span style="width:${p.total ? Math.round(p.done / p.total * 100) : 0}%"></span></div>
      <div class="row" style="margin-top:12px">
        <a class="btn primary" href="#/exam" data-start-module="${m.id}">⏱ Thi thử module ${m.id} (${m.exam.mcq + m.exam.open} câu / ${m.minutes} phút)</a>
        <a class="btn" href="#/practice" data-practice-module="${m.id}">🎯 Luyện ngẫu nhiên cả module</a>
      </div>
      ${topics}
    `, 'mod-' + m.id);

    app.querySelector('[data-start-module]').addEventListener('click', e => { e.preventDefault(); startModuleExam(m.id); });
    app.querySelector('[data-practice-module]').addEventListener('click', e => { e.preventDefault(); pendingPractice = { module: m.id }; location.hash = '#/practice'; });
  }

  function lessonNeighbors(l) {
    const list = lessonsOfModule(l.module);
    const i = list.indexOf(l);
    return { prev: list[i - 1], next: list[i + 1] };
  }

  // Video tiếng Việt cho từng bài (data/videos.js). Bài chưa tìm được video phù hợp thì chỉ có link tìm kiếm.
  function videosHtml(l) {
    const v = (window.VIDEOS || {})[l.id];
    if (!v) return '';
    const list = (v.items || []).map(([title, url, note]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">▶ ${esc(title)}</a>${note ? ` <span class="small muted">— ${esc(note)}</span>` : ''}</li>`).join('');
    const search = v.q ? `<a href="https://www.youtube.com/results?search_query=${encodeURIComponent(v.q)}" target="_blank" rel="noopener">🔍 Tìm thêm trên YouTube: “${esc(v.q)}”</a>` : '';
    return `<div class="card videos"><h3 style="margin-top:0">🎬 Video tiếng Việt cùng chủ đề</h3>
      ${list ? `<ul>${list}</ul>` : '<p class="muted" style="margin:0 0 6px">Chưa tìm được video tiếng Việt sát với bài này.</p>'}
      ${search ? `<div class="small">${search}</div>` : ''}
      <p class="small muted" style="margin:8px 0 0">Video do người khác làm, chọn theo tiêu đề nên có thể rộng hoặc hẹp hơn bài. Nội dung thi vẫn bám theo bài học ở trên.</p></div>`;
  }

  function viewLesson(id) {
    const l = lessonById.get(id);
    const m = modById.get(l.module);
    const topic = m.topics.find(t => t.id === l.topic);
    const qs = questionsOfLesson(l);
    const { prev, next } = lessonNeighbors(l);
    const st = lessonStatus(l);

    // Ví dụ từ đề: mỗi dạng lấy 1 câu trắc nghiệm, tối đa 3 ví dụ.
    const examples = [];
    for (const s of l.skills || []) {
      const q = QUESTIONS.find(x => x.skill === s && x.type === 'mcq');
      if (q && examples.length < 3) examples.push(q);
    }
    const exHtml = examples.map((q, i) => `
      <div class="card example-q" data-ex="${i}" style="margin:12px 0">
        <div class="small muted" style="margin-bottom:6px">Ví dụ ${i + 1} — tự làm trước, chọn một đáp án để xem lời giải</div>
        <div class="q-prompt rich">${md(q.prompt)}</div>
        <div class="options">${(q.options || []).map(o => `<button class="option" data-k="${esc(o.key)}"><span class="key">${esc(o.key)}</span><span>${inlineMd(o.text)}</span></button>`).join('')}</div>
        <div class="ex-fb"></div>
        <div class="quiz-actions"><button class="btn ghost" data-show>Xem đáp án</button></div>
      </div>`).join('');

    setView(`
      <div class="crumbs"><a href="#/">Trang chủ</a> › <a href="#/m/${m.id}">Module ${m.id}</a> › ${esc(topic ? topic.title : '')}</div>
      <h1>${esc(l.id)} · ${esc(l.title)}</h1>
      <div class="row small muted"><span class="badge ${st.cls}">${st.icon} ${esc(st.label)}</span><span>~${l.minutes || 15} phút</span><span>${qs.length} câu luyện</span></div>
      <article class="lesson-body">${l.content}</article>
      ${videosHtml(l)}
      ${exHtml ? `<h2>Ví dụ từ đề luyện</h2>${exHtml}` : ''}
      <div class="card practice-cta">
        <h3 style="margin-top:0">Luyện dạng này</h3>
        <p class="muted">Bài này có <b>${qs.length} câu</b> thuộc <b>${new Set(qs.map(q => q.skill)).size} dạng đề</b>, chấm ngay từng câu. Đúng ≥ ${PASS_RATIO * 100}% là đạt.</p>
        <div class="row" style="justify-content:center">
          <a class="btn primary" href="#/l/${l.id}/practice">🎯 Luyện nhanh (${Math.min(LESSON_PRACTICE_SIZE, qs.length)} câu)</a>
          ${qs.length > LESSON_PRACTICE_SIZE ? `<a class="btn" href="#/l/${l.id}/practice/all">📚 Làm toàn bộ (${qs.length} câu)</a>` : ''}
        </div>
        ${qs.length > LESSON_PRACTICE_SIZE ? '<p class="small muted" style="margin-bottom:0">Luyện nhanh bốc ngẫu nhiên, có thể chưa chạm hết các dạng. Làm toàn bộ thì gặp mọi câu của bài và có bảng kết quả theo từng dạng.</p>' : ''}
        ${store.lessons[l.id] && store.lessons[l.id].full ? `<p class="small" style="margin-bottom:0">Lần làm toàn bộ gần nhất: <b>${store.lessons[l.id].full.c}/${store.lessons[l.id].full.n}</b> câu đúng${store.lessons[l.id].full.n < store.lessons[l.id].full.of ? ' (dừng giữa chừng)' : ''}, ${new Date(store.lessons[l.id].full.at).toLocaleDateString('vi-VN')}.</p>` : ''}
      </div>
      <div class="lesson-nav">
        ${prev ? `<a class="btn ghost" href="#/l/${prev.id}">← ${esc(prev.id)} ${esc(prev.title)}</a>` : '<span></span>'}
        ${next ? `<a class="btn ghost" href="#/l/${next.id}">${esc(next.id)} ${esc(next.title)} →</a>` : ''}
      </div>
    `, 'mod-' + l.module);

    app.querySelectorAll('.example-q').forEach(box => {
      const q = examples[+box.dataset.ex];
      const reveal = picked => {
        box.querySelectorAll('.option').forEach(b => {
          b.disabled = true;
          if (b.dataset.k === q.answer) b.classList.add('correct');
          else if (b.dataset.k === picked) b.classList.add('wrong');
        });
        const ok = picked === q.answer;
        box.querySelector('.ex-fb').innerHTML = `<div class="feedback ${picked == null || ok ? 'ok' : 'bad'}"><div class="title">${picked == null ? 'Đáp án: ' + esc(q.answer) : ok ? '✅ Chính xác' : '❌ Chưa đúng — đáp án ' + esc(q.answer)}</div>${md(q.explanation)}</div>${glossHtml(q)}`;
        box.querySelector('[data-show]').remove();
        enhance(box);
      };
      box.querySelectorAll('.option').forEach(b => b.onclick = () => reveal(b.dataset.k));
      box.querySelector('[data-show]').onclick = () => reveal(null);
    });

    if (!store.lessons[l.id]) { store.lessons[l.id] = { done: false, best: null }; save(); }
  }

  function pickLessonQuestions(l) {
    const pool = questionsOfLesson(l);
    const skills = l.skills.filter(s => pool.some(q => q.skill === s));
    const per = Math.max(1, Math.ceil(LESSON_PRACTICE_SIZE / Math.max(1, skills.length)));
    let picked = [];
    // Ưu tiên câu sai và câu chưa làm.
    const score = q => (store.wrong[q.id] ? 0 : store.seen[q.id] ? 2 : 1) + Math.random();
    for (const s of skills) {
      picked = picked.concat(pool.filter(q => q.skill === s).sort((a, b) => score(a) - score(b)).slice(0, per));
    }
    picked = shuffle(picked).slice(0, LESSON_PRACTICE_SIZE);
    // Câu mở để cuối.
    return picked.filter(q => !isOpen(q)).concat(picked.filter(isOpen));
  }

  // Toàn bộ câu của bài: trắc nghiệm trước (xen kẽ các dạng), câu mở sau.
  function allLessonQuestions(l) {
    const pool = questionsOfLesson(l);
    const bySkill = {};
    shuffle(pool.filter(q => !isOpen(q))).forEach(q => (bySkill[q.skill] = bySkill[q.skill] || []).push(q));
    const groups = l.skills.map(s => bySkill[s] || []);
    const mcq = [];
    while (groups.some(g => g.length)) for (const g of groups) if (g.length) mcq.push(g.shift());
    return mcq.concat(shuffle(pool.filter(isOpen)));
  }

  // Kết quả theo từng dạng đề; mỗi dạng lấy một câu làm ví dụ để người học nhận ra đó là dạng gì.
  function skillBreakdownHtml(l, res) {
    const rows = [];
    for (const s of l.skills) {
      const its = res.items.filter(it => it.q.skill === s);
      if (!its.length) continue;
      const c = its.filter(it => it.correct).length;
      const sample = its[0].q.prompt.replace(/```[\s\S]*?```/g, ' [code] ').replace(/[`*]/g, '').replace(/\s+/g, ' ').trim();
      rows.push({ c, n: its.length, sample: sample.length > 70 ? sample.slice(0, 70) + '…' : sample });
    }
    if (rows.length < 2) return '';
    rows.sort((a, b) => a.c / a.n - b.c / b.n);
    return `<h2>Theo từng dạng đề</h2><div class="card" style="padding:6px 12px"><table class="simple small">
      <tr><th>Dạng (câu ví dụ)</th><th>Đúng</th></tr>
      ${rows.map(r => `<tr><td>${esc(r.sample)}</td><td style="white-space:nowrap"><span class="badge ${r.c === r.n ? 'ok' : r.c / r.n >= 0.5 ? 'warn' : 'bad'}">${r.c}/${r.n}</span></td></tr>`).join('')}
    </table></div>`;
  }

  // full = true: làm toàn bộ câu của bài (được dừng giữa chừng); false: luyện nhanh 8 câu.
  function viewLessonPractice(id, full) {
    const l = lessonById.get(id);
    const { next } = lessonNeighbors(l);
    const qs = full ? allLessonQuestions(l) : pickLessonQuestions(l);
    const totalInLesson = questionsOfLesson(l).length;
    setView(`<div class="crumbs"><a href="#/m/${l.module}">Module ${l.module}</a> › <a href="#/l/${l.id}">${esc(l.id)} ${esc(l.title)}</a> › ${full ? 'Làm toàn bộ' : 'Luyện nhanh'}</div><div id="quiz"></div>`, 'mod-' + l.module);
    activeQuiz = new Quiz(app.querySelector('#quiz'), {
      title: (full ? 'Toàn bộ: ' : 'Luyện: ') + l.title,
      questions: qs,
      mode: 'practice',
      allowEarly: full,
      onFinish(res) {
        const st = store.lessons[l.id] || (store.lessons[l.id] = { done: false, best: null });
        const complete = !res.early;                    // dừng giữa chừng thì không tính là đạt bài
        if (complete || res.total >= LESSON_PRACTICE_SIZE) {
          st.best = Math.max(st.best || 0, res.ratio);
          st.tries = (st.tries || 0) + 1;              // dùng để đo khả năng tiếp thu (trang Kế hoạch)
          if (st.first == null) st.first = res.ratio;
          st.last = res.ratio;
        }
        if (complete && res.ratio >= PASS_RATIO) st.done = true;
        if (full) st.full = { c: res.correct, n: res.total, of: qs.length, at: Date.now() };
        save();
        const pass = complete && res.ratio >= PASS_RATIO;
        const msg = res.early
          ? `Bạn dừng sau ${res.total}/${qs.length} câu (đúng ${Math.round(res.ratio * 100)}%). Làm hết mới được tính là đạt bài.`
          : pass ? (full ? '✅ Đạt! Bạn đã làm hết mọi câu của bài này.' : '✅ Đạt! Bạn đã nắm dạng này.')
            : '🔄 Chưa đạt ' + PASS_RATIO * 100 + '%. Đọc lại phần lý thuyết rồi luyện lại nhé.';
        // Tổng điểm đạt vẫn có thể che một dạng làm sai gần hết → báo riêng các dạng dưới 50%.
        const weak = l.skills.filter(sk => { const its = res.items.filter(it => it.q.skill === sk); return its.length && its.filter(it => it.correct).length / its.length < 0.5; }).length;
        return `<div class="card" style="text-align:center">
          <div class="score-big" style="color:var(${pass ? '--ok' : res.early ? '--warn' : '--bad'})">${res.correct}/${res.total}</div>
          <p><b>${msg}</b></p>
          ${weak ? `<p class="feedback bad" style="text-align:left">⚠️ Còn <b>${weak} dạng</b> bạn làm đúng dưới 50% (xem bảng bên dưới). ${full ? 'Nên đọc lại phần đó rồi làm lại.' : 'Luyện nhanh mỗi dạng chỉ có 1–2 câu; hãy làm toàn bộ để kiểm tra chắc hơn.'}</p>` : ''}
          <div class="row" style="justify-content:center">
            <a class="btn" href="#/l/${l.id}">📖 Đọc lại bài</a>
            <button class="btn" data-again>🔁 ${full ? 'Làm lại toàn bộ' : 'Luyện lại (câu khác)'}</button>
            ${!full && totalInLesson > qs.length ? `<a class="btn" href="#/l/${l.id}/practice/all">📚 Làm toàn bộ ${totalInLesson} câu</a>` : ''}
            ${pass && next ? `<a class="btn primary" href="#/l/${next.id}">Bài tiếp: ${esc(next.title)} →</a>` : ''}
            ${pass && !next ? `<a class="btn primary" href="#/m/${l.module}">Về module ${l.module}</a>` : ''}
          </div>
        </div>
        ${skillBreakdownHtml(l, res)}`;
      },
      onAgain() { viewLessonPractice(id, full); },
    });
  }

  // ---------- Practice hub ----------
  let pendingPractice = null;

  function viewPractice() {
    const pre = pendingPractice || {};
    pendingPractice = null;
    let mod = pre.module || 'A';
    let lesson = 'all';
    let count = 10;
    let kind = 'mcq';

    function render() {
      const m = modById.get(mod);
      const ls = lessonsOfModule(mod);
      setView(`
        <h1>Luyện tập</h1>
        <p class="muted">Chọn phạm vi, làm câu ngẫu nhiên, có đáp án và giải thích ngay sau mỗi câu.</p>
        <div class="card">
          <div class="field"><label>Module</label><div class="chips">${MODULES.map(x => `<button class="chip ${x.id === mod ? 'on' : ''}" data-mod="${x.id}">${x.id} · ${esc(x.name)}</button>`).join('')}</div></div>
          <div class="field"><label for="lsel">Bài học / dạng đề</label>
            <select id="lsel"><option value="all">Tất cả câu của module ${m.id} (${questionsOfModule(mod).length} câu)</option>
            ${ls.map(l => `<option value="${l.id}" ${l.id === lesson ? 'selected' : ''}>${esc(l.id)} ${esc(l.title)} (${questionsOfLesson(l).length})</option>`).join('')}</select></div>
          <div class="field"><label>Loại câu</label><div class="chips">
            ${[['mcq', 'Chỉ trắc nghiệm'], ['open', 'Chỉ tự luận / code'], ['all', 'Cả hai']].map(([k, t]) => `<button class="chip ${k === kind ? 'on' : ''}" data-kind="${k}">${t}</button>`).join('')}
          </div></div>
          <div class="field"><label>Số câu</label><div class="chips">${[5, 10, 20, 30].map(n => `<button class="chip ${n === count ? 'on' : ''}" data-count="${n}">${n}</button>`).join('')}</div></div>
          <button class="btn primary" data-start>Bắt đầu</button>
          <p class="small muted" id="pinfo"></p>
        </div>
      `);
      app.querySelectorAll('[data-mod]').forEach(b => b.onclick = () => { mod = b.dataset.mod; lesson = 'all'; render(); });
      app.querySelectorAll('[data-kind]').forEach(b => b.onclick = () => { kind = b.dataset.kind; render(); });
      app.querySelectorAll('[data-count]').forEach(b => b.onclick = () => { count = +b.dataset.count; render(); });
      app.querySelector('#lsel').onchange = e => { lesson = e.target.value; render(); };
      const pool = poolNow();
      app.querySelector('#pinfo').textContent = 'Có ' + pool.length + ' câu phù hợp.';
      app.querySelector('[data-start]').disabled = !pool.length;
      app.querySelector('[data-start]').onclick = () => start();
    }

    function poolNow() {
      let pool = lesson === 'all' ? questionsOfModule(mod) : questionsOfLesson(lessonById.get(lesson));
      if (kind === 'mcq') pool = pool.filter(q => !isOpen(q));
      if (kind === 'open') pool = pool.filter(isOpen);
      return pool;
    }

    function start() {
      const qs = shuffle(poolNow()).slice(0, count);
      setView('<div id="quiz"></div>', 'mod-' + mod);
      activeQuiz = new Quiz(app.querySelector('#quiz'), {
        title: 'Luyện tập Module ' + mod,
        questions: qs.filter(q => !isOpen(q)).concat(qs.filter(isOpen)),
        mode: 'practice',
        onFinish: res => `<div class="card" style="text-align:center"><div class="score-big">${res.correct}/${res.total}</div>
          <p>${weakSkillsHtml(res)}</p>
          <div class="row" style="justify-content:center"><button class="btn primary" data-again>🔁 Luyện tiếp</button><a class="btn" href="#/practice">Đổi phạm vi</a></div></div>`,
        onAgain: start,
      });
    }

    render();
  }

  function weakSkillsHtml(res) {
    const bad = {};
    res.items.forEach(it => { if (!it.correct) { const l = lessonBySkill.get(it.q.skill); if (l) bad[l.id] = l; } });
    const list = Object.values(bad);
    if (!list.length) return '';
    return 'Nên ôn lại: ' + list.map(l => `<a href="#/l/${l.id}">${esc(l.id)} ${esc(l.title)}</a>`).join(', ');
  }

  // ---------- Exam ----------
  const EXAM = window.buildExamSets ? window.buildExamSets(QUESTIONS, MODULES) : { full: [], mlq: [], bank: 0, covered: 0 };
  const setById = new Map(EXAM.full.concat(EXAM.mlq).map(s => [s.id, s]));
  const MAX_ATTEMPTS = 150;
  const KIND_LABEL = { set: 'Bộ đề', mlq: 'Quiz ML/DL', module: 'Module', random: 'Ngẫu nhiên' };

  // Lịch sử làm bài. Lần đầu chạy bản mới: chuyển các kết quả cũ (chỉ có điểm) sang.
  function attempts() {
    if (!store.attempts) {
      store.attempts = (store.exams || []).map((e, i) => ({ id: 'old' + i, kind: /Module/.test(e.title) ? 'module' : 'random', title: e.title, at: e.at, score: e.score }));
    }
    return store.attempts;
  }

  function attemptsOf(setId) { return attempts().filter(a => a.setId === setId); }

  function fmtDuration(sec) {
    if (sec == null) return '—';
    const m = Math.floor(sec / 60), s = Math.round(sec % 60);
    return m + '′' + String(s).padStart(2, '0') + '″';
  }

  function pickExam(mid) {
    const m = modById.get(mid);
    const pool = questionsOfModule(mid).filter(q => !q.advanced);   // câu nâng cao không vào thi thử
    // Trắc nghiệm: rải đều theo dạng đề để giống đề random theo module.
    const bySkill = {};
    shuffle(pool.filter(q => !isOpen(q))).forEach(q => (bySkill[q.skill] = bySkill[q.skill] || []).push(q));
    const mcq = [];
    const groups = shuffle(Object.values(bySkill));
    while (mcq.length < m.exam.mcq && groups.some(g => g.length)) {
      for (const g of groups) { if (g.length && mcq.length < m.exam.mcq) mcq.push(g.shift()); }
    }
    const open = shuffle(pool.filter(isOpen)).slice(0, m.exam.open);
    return mcq.concat(open);
  }

  function startModuleExam(mid) {
    const m = modById.get(mid);
    runExam('Thi thử Module ' + mid, pickExam(mid), m.minutes, 'mod-' + mid, { kind: 'module', setId: 'mod-' + mid, again: () => startModuleExam(mid) });
  }

  function startFullExam() {
    let qs = [];
    MODULES.forEach(m => { qs = qs.concat(pickExam(m.id)); });
    runExam('Đề ngẫu nhiên 60 câu', qs, MODULES.reduce((s, m) => s + m.minutes, 0), '', { kind: 'random', setId: 'random', again: startFullExam });
  }

  function startSet(id) {
    const s = setById.get(id);
    if (!s) return;
    runExam(s.title, s.ids.map(x => qById.get(x)).filter(Boolean), s.minutes, '', { kind: s.kind, setId: id, again: () => startSet(id) });
  }

  // Tóm tắt một lần làm để lưu: điểm, theo module, và đáp án từng câu (đủ để xem lại sau).
  function snapshot(entry, res, quiz) {
    const byMod = {};
    res.items.forEach(it => {
      const m = byMod[it.q.module] || (byMod[it.q.module] = { c: 0, n: 0, pts: 0, max: 0 });
      m.n++; if (it.correct) m.c++;
      m.pts = Math.round((m.pts + it.earned) * 100) / 100;
      m.max = Math.round((m.max + (it.q.points || 1)) * 100) / 100;
    });
    entry.score = res.score100;
    entry.correct = res.correct;
    entry.total = res.total;
    entry.byMod = byMod;
    entry.ans = res.items.map(it => {
      const o = { q: it.q.id };
      if (it.a.choice != null) o.c = it.a.choice;
      if (it.a.text) o.t = it.a.text;
      if (it.a.checked.some(Boolean)) o.k = it.a.checked.map(x => (x ? 1 : 0));
      return o;
    });
    if (quiz) entry.sec = Math.round(quiz.times.reduce((s, x) => s + x, 0));
    return entry;
  }

  function runExam(title, qs, minutes, cls, meta) {
    setView('<div id="quiz"></div>', cls);
    const entry = { id: 'a' + Date.now().toString(36), kind: meta.kind, setId: meta.setId, title, at: Date.now(), minutes };
    activeQuiz = new Quiz(app.querySelector('#quiz'), {
      title,
      questions: qs,
      mode: 'exam',
      minutes,
      onFinish(res, quiz) {
        snapshot(entry, res, quiz);
        const list = attempts();
        if (!list.includes(entry)) list.push(entry);
        if (list.length > MAX_ATTEMPTS) list.splice(0, list.length - MAX_ATTEMPTS);
        save();
        return null; // dùng màn hình kết quả mặc định của Quiz
      },
      onScoreChange(res) { snapshot(entry, res); save(true); },   // tự chấm tự luận sau khi nộp
      onAgain: meta.again,
    });
  }

  // Xem lại một lần làm cũ: dựng lại màn hình kết quả từ đáp án đã lưu.
  function viewAttempt(id) {
    const a = attempts().find(x => x.id === id);
    if (!a) return viewExamHub();
    const rows = (a.ans || []).filter(x => qById.has(x.q));
    const head = `<div class="crumbs"><a href="#/exam">Thi thử</a> › Lịch sử</div>
      <p class="muted small">Làm lúc ${new Date(a.at).toLocaleString('vi-VN')}${a.sec != null ? ' · thời gian làm ' + fmtDuration(a.sec) + (a.minutes ? ' / ' + a.minutes + '′' : '') : ''}${rows.length < (a.ans || []).length ? ' · một số câu không còn trong ngân hàng nên không hiển thị' : ''}</p>`;
    if (!rows.length) {
      return setView(`${head}<div class="card empty"><b>${esc(a.title)}</b>: ${a.score}/100.<br>Lần làm này được lưu từ bản cũ nên không có chi tiết từng câu.</div>`);
    }
    setView(`${head}<div id="quiz"></div>`);
    activeQuiz = new Quiz(app.querySelector('#quiz'), {
      title: a.title,
      questions: rows.map(x => qById.get(x.q)),
      mode: 'exam',
      restore: rows,
      onScoreChange(res) { snapshot(a, res); save(true); },
      onAgain: () => {
        if (a.kind === 'mlq') location.hash = '#/mlq';          // quiz một trang, không chạy ở chế độ thi
        else if (a.setId && setById.has(a.setId)) startSet(a.setId);
        else location.hash = '#/exam';
      },
    });
  }

  // ---------- Quiz ML/DL: giữ kiểu file gốc (mọi câu trên một trang, chọn xong hiện ngay đáp án + giải thích) ----------
  const MLQ_SET = EXAM.mlq[0] || null;
  const MLQ_IDLE = 180;   // giây: nghỉ lâu hơn mức này giữa hai câu thì không tính vào thời gian làm

  function mlqDraft() {
    if (!store.mlqDraft) store.mlqDraft = { at: Date.now(), ans: {}, sec: 0 };
    return store.mlqDraft;
  }

  function mlqCardBody(q, choice) {
    const done = choice != null;
    const opts = q.options.map(o => {
      const cls = !done ? '' : o.key === q.answer ? 'correct' : o.key === choice ? 'wrong' : '';
      return `<button class="option ${cls}" data-key="${esc(o.key)}" ${done ? 'disabled' : ''}><span class="key">${esc(o.key)}</span><span>${inlineMd(o.text)}</span></button>`;
    }).join('');
    const ok = choice === q.answer;
    const fb = done ? `<div class="feedback ${ok ? 'ok' : 'bad'}"><div class="title">${ok ? '✅ Chính xác' : '❌ Chưa đúng — đáp án ' + esc(q.answer)}</div>${md(q.explanation)}</div>${glossHtml(q)}` : '';
    return `<div class="options">${opts}</div>${fb}`;
  }

  function viewMlq() {
    if (!MLQ_SET) return viewExamHub();
    const qs = MLQ_SET.ids.map(id => qById.get(id)).filter(Boolean);
    const draft = mlqDraft();
    let lastTick = Date.now();
    const count = () => {
      let done = 0, right = 0;
      qs.forEach(q => { const c = draft.ans[q.id]; if (c != null) { done++; if (c === q.answer) right++; } });
      return { done, right };
    };
    const statusHtml = () => {
      const { done, right } = count();
      return `<span>Đã làm <b>${done}/${qs.length}</b></span><span>Đúng <b>${right}</b>${done ? ' (' + Math.round(right / done * 100) + '%)' : ''}</span>
        <span class="spacer"></span><button class="btn primary" data-submit>${done === qs.length ? 'Nộp bài' : 'Nộp bài sớm'}</button>`;
    };

    setView(`
      <div class="crumbs"><a href="#/exam">Thi thử</a> › Quiz ML/DL</div>
      <h1>Bài tập trắc nghiệm ML / Deep Learning (${qs.length} câu)</h1>
      <p class="muted">Chọn câu trả lời ở từng câu, đáp án và giải thích hiện ra ngay. Bài làm dở được tự lưu, thoát ra rồi vào lại vẫn còn. Làm xong bấm <b>Nộp bài</b> để lưu vào lịch sử.</p>
      <div class="card mlq-bar"><div class="row" data-status>${statusHtml()}</div><div class="progress" style="margin-top:8px"><span data-bar style="width:${Math.round(count().done / qs.length * 100)}%"></span></div></div>
      <div id="mlq">
        ${qs.map((q, i) => `<div class="card q-card mlq-q" data-qid="${esc(q.id)}" id="mlq-${i + 1}">
          <div class="q-prompt rich"><b>${i + 1}.</b> ${md(q.prompt)}</div>
          <div data-body>${mlqCardBody(q, draft.ans[q.id])}</div>
        </div>`).join('')}
      </div>
      <div class="row" style="margin-top:16px"><button class="btn primary" data-submit>Nộp bài</button><button class="btn ghost" data-reset>Làm lại từ đầu</button></div>
    `);

    const refreshStatus = () => {
      app.querySelector('[data-status]').innerHTML = statusHtml();
      app.querySelector('[data-bar]').style.width = Math.round(count().done / qs.length * 100) + '%';
    };

    const submit = () => {
      const { done, right } = count();
      if (!done) return alert('Bạn chưa làm câu nào.');
      if (done < qs.length && !confirm(`Còn ${qs.length - done} câu chưa làm (sẽ tính là sai). Nộp bài?`)) return;
      const byMod = {};
      qs.forEach(q => {
        const m = byMod[q.module] || (byMod[q.module] = { c: 0, n: 0, pts: 0, max: 0 });
        m.n++; m.max++;
        if (draft.ans[q.id] === q.answer) { m.c++; m.pts++; }
      });
      const entry = {
        id: 'a' + Date.now().toString(36), kind: 'mlq', setId: MLQ_SET.id, title: MLQ_SET.title, at: Date.now(),
        sec: Math.round(draft.sec || 0), score: Math.round(right / qs.length * 1000) / 10, correct: right, total: qs.length, byMod,
        ans: qs.map(q => (draft.ans[q.id] != null ? { q: q.id, c: draft.ans[q.id] } : { q: q.id })),
      };
      const list = attempts();
      list.push(entry);
      if (list.length > MAX_ATTEMPTS) list.splice(0, list.length - MAX_ATTEMPTS);
      delete store.mlqDraft;
      save();
      location.hash = '#/attempt/' + entry.id;
    };

    // Một listener cho cả trang (200 câu), chỉ vẽ lại đúng câu vừa chọn.
    app.onclick = e => {
      if (e.target.closest('[data-submit]')) return submit();
      if (e.target.closest('[data-reset]')) {
        if (confirm('Xóa toàn bộ bài đang làm dở và làm lại từ đầu?')) { delete store.mlqDraft; save(true); viewMlq(); window.scrollTo(0, 0); }
        return;
      }
      const btn = e.target.closest('.mlq-q .option');
      if (!btn || btn.disabled) return;
      const card = btn.closest('.mlq-q');
      const q = qById.get(card.dataset.qid);
      const now = Date.now();
      draft.sec = (draft.sec || 0) + Math.min(MLQ_IDLE, (now - lastTick) / 1000);
      lastTick = now;
      draft.ans[q.id] = btn.dataset.key;
      recordAnswer(q, btn.dataset.key === q.answer);
      const body = card.querySelector('[data-body]');
      body.innerHTML = mlqCardBody(q, btn.dataset.key);
      enhance(body);
      refreshStatus();
    };
  }

  function mlqHubCard() {
    if (!MLQ_SET) return '';
    const at = attempts().filter(a => a.kind === 'mlq');
    const best = at.length ? Math.max(...at.map(a => a.score)) : null;
    const draft = store.mlqDraft;
    const doing = draft ? Object.keys(draft.ans).length : 0;
    return `<div class="card" style="margin-bottom:12px">
      <div class="row"><b>${esc(MLQ_SET.title)}</b><span class="spacer"></span>${best != null ? `<span class="badge ${best >= 70 ? 'ok' : best >= 50 ? 'warn' : 'bad'}">Cao nhất ${best}</span>` : '<span class="badge">Chưa nộp lần nào</span>'}</div>
      <p class="muted small">Giữ như file gốc: cả ${MLQ_SET.ids.length} câu trên một trang, theo thứ tự gốc (gồm cả câu nâng cao). Chọn đáp án là hiện ngay đúng/sai và giải thích. Bài làm dở được tự lưu.</p>
      ${doing ? `<div class="progress"><span style="width:${Math.round(doing / MLQ_SET.ids.length * 100)}%"></span></div><p class="small muted">Đang làm dở: ${doing}/${MLQ_SET.ids.length} câu.</p>` : ''}
      <div class="row"><a class="btn primary" href="#/mlq">${doing ? 'Làm tiếp' : at.length ? 'Làm lại' : 'Bắt đầu'}</a>${at.length ? `<span class="muted small">Đã nộp ${at.length} lần</span>` : ''}</div>
    </div>`;
  }

  let historyFilter = 'all';

  function viewExamHub() {
    const list = attempts();
    const seenInExams = new Set();
    list.forEach(a => (a.ans || []).forEach(x => seenInExams.add(x.q)));
    const bankIds = new Set(QUESTIONS.filter(q => !q.advanced).map(q => q.id));
    const seenBank = [...seenInExams].filter(id => bankIds.has(id)).length;
    const doneSets = EXAM.full.filter(s => attemptsOf(s.id).length).length;

    const setCard = s => {
      const at = attemptsOf(s.id);
      const best = at.length ? Math.max(...at.map(a => a.score)) : null;
      const last = at.length ? at[at.length - 1] : null;
      const n = s.ids.length;
      return `<div class="card set-card ${at.length ? 'done' : ''}">
        <div class="row"><b>${esc(s.title)}</b><span class="spacer"></span>${best != null ? `<span class="badge ${best >= 70 ? 'ok' : best >= 50 ? 'warn' : 'bad'}">${best}</span>` : '<span class="badge">Chưa làm</span>'}</div>
        <div class="muted small">${s.kind === 'mlq' ? esc(s.range) : s.fresh === n ? n + ' câu mới' : s.fresh + ' câu mới · ' + (n - s.fresh) + ' câu lặp'}</div>
        <div class="muted small">${at.length ? at.length + ' lần · gần nhất ' + new Date(last.at).toLocaleDateString('vi-VN') : n + ' câu · ' + s.minutes + ' phút'}</div>
        <button class="btn ${at.length ? '' : 'primary'}" data-set="${s.id}">${at.length ? 'Làm lại' : 'Làm đề'}</button>
      </div>`;
    };

    const shown = list.slice().reverse().filter(a => historyFilter === 'all' || a.kind === historyFilter);

    setView(`
      <h1>Thi thử</h1>
      <p class="muted">Kết quả hiện sau khi nộp bài; câu tự luận/code bạn tự chấm theo rubric. Mọi lần làm đều được lưu ở mục Lịch sử cuối trang và xem lại được.</p>

      <h2>Bộ đề cố định</h2>
      <div class="card" style="margin-bottom:12px">
        <p style="margin-top:0"><b>${EXAM.full.length} đề</b>, mỗi đề 60 câu / 90 phút, đúng cấu trúc A ${MODULES[0].exam.mcq + MODULES[0].exam.open} · B ${MODULES[1].exam.mcq + MODULES[1].exam.open} · C ${MODULES[2].exam.mcq + MODULES[2].exam.open} · D ${MODULES[3].exam.mcq + MODULES[3].exam.open}. Làm hết ${EXAM.full.length} đề là gặp <b>toàn bộ ${EXAM.covered} câu</b> của ngân hàng (không tính ${EXAM.total - EXAM.bank} câu nâng cao, các câu đó nằm trong Quiz ML/DL bên dưới). Phần nào hết câu mới thì đề lặp lại câu cũ cho đủ cấu trúc.</p>
        <div class="progress"><span style="width:${EXAM.bank ? Math.round(seenBank / EXAM.bank * 100) : 0}%"></span></div>
        <p class="small muted" style="margin-bottom:0">Đã làm ${doneSets}/${EXAM.full.length} đề · đã gặp ${seenBank}/${EXAM.bank} câu trong các lần thi thử (${EXAM.bank ? Math.round(seenBank / EXAM.bank * 100) : 0}%).</p>
      </div>
      <div class="set-grid">${EXAM.full.map(setCard).join('')}</div>

      <h2>Quiz ML/DL (ml_dl_quiz_1)</h2>
      ${mlqHubCard()}

      <h2>Thi nhanh (bốc ngẫu nhiên)</h2>
      <div class="set-grid">
        <div class="card set-card"><b>Đề ngẫu nhiên</b><div class="muted small">60 câu · 90 phút · mỗi lần một đề khác</div><button class="btn" data-full>Làm đề</button></div>
        ${MODULES.map(m => `<div class="card set-card mod-${m.id}" style="border-top:3px solid var(--mod)"><b>Module ${m.id}</b>
          <div class="muted small">${m.exam.mcq} trắc nghiệm + ${m.exam.open} mở · ${m.minutes} phút</div>
          <button class="btn" data-mod="${m.id}">Thi module ${m.id}</button></div>`).join('')}
      </div>

      <h2 id="history">Lịch sử làm bài</h2>
      ${list.length ? `
        <div class="chips" style="margin-bottom:10px">${[['all', 'Tất cả']].concat(Object.entries(KIND_LABEL)).map(([k, t]) => `<button class="chip ${historyFilter === k ? 'on' : ''}" data-hfilter="${k}">${t}${k === 'all' ? ' (' + list.length + ')' : ' (' + list.filter(a => a.kind === k).length + ')'}</button>`).join('')}</div>
        <div class="card" style="padding:6px 12px"><table class="simple history-table">
          <tr><th>Thời điểm</th><th>Đề</th><th>Điểm</th><th>Đúng</th><th>Thời gian</th><th></th></tr>
          ${shown.map(a => `<tr>
            <td class="small">${new Date(a.at).toLocaleString('vi-VN', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })}</td>
            <td>${a.ans ? `<a href="#/attempt/${a.id}">${esc(a.title)}</a>` : esc(a.title)}</td>
            <td><b>${a.score}</b></td>
            <td class="small">${a.total ? a.correct + '/' + a.total : '—'}</td>
            <td class="small">${fmtDuration(a.sec)}</td>
            <td>${a.ans ? `<a href="#/attempt/${a.id}">Xem lại</a>` : ''}</td>
          </tr>`).join('') || '<tr><td colspan="6" class="muted">Chưa có lần làm nào thuộc loại này.</td></tr>'}
        </table></div>` : '<div class="card empty">Chưa có lần làm nào. Làm một đề bất kỳ, kết quả sẽ được lưu ở đây.</div>'}
    `);
    app.querySelector('[data-full]').onclick = startFullExam;
    app.querySelectorAll('[data-mod]').forEach(b => b.onclick = () => startModuleExam(b.dataset.mod));
    app.querySelectorAll('[data-set]').forEach(b => b.onclick = () => startSet(b.dataset.set));
    app.querySelectorAll('[data-hfilter]').forEach(b => b.onclick = () => { const y = window.scrollY; historyFilter = b.dataset.hfilter; viewExamHub(); window.scrollTo(0, y); });
  }

  // ---------- Plan: khoanh vùng trọng tâm theo dữ liệu của người học ----------
  const PLAN = window.PLAN || { groups: [] };
  const MCQ_PACE = 60;   // giây/câu trắc nghiệm để kịp 60 câu trong 90 phút (còn dành giờ cho tự luận)

  function planState() {
    if (!store.plan) store.plan = { hours: PLAN.defaultHours || 4, diag: null, self: {} };
    if (!store.plan.self) store.plan.self = {};
    return store.plan;
  }

  function groupQuestions(g) {
    const skills = new Set();
    g.lessons.forEach(id => { const l = lessonById.get(id); if (l) l.skills.forEach(s => skills.add(s)); });
    return QUESTIONS.filter(q => skills.has(q.skill) && !q.advanced);
  }

  // Bài chẩn đoán: 2–3 câu trắc nghiệm mỗi vùng, ưu tiên câu giống đề và rải qua các bài khác nhau.
  function pickDiagnostic() {
    const out = [];
    for (const g of PLAN.groups) {
      const n = g.points >= 8 ? 3 : 2;
      const byLesson = {};
      shuffle(groupQuestions(g).filter(q => !isOpen(q)))
        .sort((a, b) => (a.source.startsWith('aitest') ? 0 : 1) - (b.source.startsWith('aitest') ? 0 : 1))
        .forEach(q => { const l = lessonBySkill.get(q.skill); (byLesson[l.id] = byLesson[l.id] || []).push(q); });
      const lists = shuffle(Object.values(byLesson));
      const picked = [];
      while (picked.length < n && lists.some(x => x.length)) {
        for (const x of lists) if (x.length && picked.length < n) picked.push(x.shift());
      }
      picked.forEach(q => out.push({ q, g: g.id }));
    }
    return out;
  }

  function startDiagnostic() {
    const picks = pickDiagnostic();
    const groupOf = new Map(picks.map(p => [p.q.id, p.g]));
    setView('<div id="quiz"></div>');
    activeQuiz = new Quiz(app.querySelector('#quiz'), {
      title: 'Bài chẩn đoán',
      questions: picks.map(p => p.q),
      mode: 'exam',
      minutes: 50,
      allowSkip: true,
      noRecord: true,   // không đẩy câu của phần chưa học vào sổ câu sai
      onFinish(res) {
        const groups = {};
        res.items.forEach(it => {
          const x = groups[groupOf.get(it.q.id)] || (groups[groupOf.get(it.q.id)] = { c: 0, n: 0, skip: 0, sec: 0 });
          x.n++;
          if (it.correct) x.c++;
          if (it.a.choice == null || it.a.choice === '?') x.skip++;
          x.sec += it.sec || 0;
        });
        const st = planState();
        st.diag = { at: Date.now(), groups, correct: res.correct, total: res.total };
        save();
        // Không dựa vào hashchange: nếu bắt đầu từ chính #/plan thì hash không đổi và trang sẽ không vẽ lại.
        setTimeout(() => { if (location.hash === '#/plan') route(); else location.hash = '#/plan'; }, 0);
        return '<div class="card empty">Đang lập kế hoạch…</div>';
      },
      onAgain: startDiagnostic,
    });
  }

  const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));
  const pct = x => Math.round(x * 100) + '%';

  // Độ khó → hệ số thời gian học và "trần" mức nắm có thể đạt trong vài ngày.
  const DIFF = {
    1: { label: 'Dễ', cls: 'ok', time: 0.8, ceil: 0.9 },
    2: { label: 'Vừa', cls: 'warn', time: 1, ceil: 0.8 },
    3: { label: 'Khó', cls: 'bad', time: 1.3, ceil: 0.65 },
  };
  const examLike = q => (q.source === 'aitest-n26' || q.source === 'aitest-e') && !q.advanced;

  function computePlan(now) {
    const st = planState();
    const diag = st.diag;

    // 1) Khả năng tiếp thu theo module: điểm luyện LẦN ĐẦU sau khi học (chưa đủ dữ liệu thì tạm dùng kết quả chẩn đoán).
    const absorb = {};
    for (const m of MODULES) {
      const tried = lessonsOfModule(m.id).map(l => store.lessons[l.id]).filter(x => x && x.tries && x.first != null);
      let factor = 1, basis = 'Chưa có dữ liệu';
      if (tried.length >= 2) {
        const avg = tried.reduce((s, x) => s + x.first, 0) / tried.length;
        factor = avg >= 0.8 ? 1.2 : avg >= 0.6 ? 1 : 0.75;
        basis = `Luyện lần đầu đúng trung bình ${pct(avg)} qua ${tried.length} bài đã học`;
      } else if (diag) {
        let c = 0, n = 0;
        PLAN.groups.filter(g => g.module === m.id).forEach(g => { const d = diag.groups[g.id]; if (d) { c += d.c; n += d.n; } });
        const acc = n ? c / n : 0;
        factor = acc >= 0.6 ? 1.1 : acc >= 0.3 ? 1 : 0.85;
        basis = `Tạm tính từ chẩn đoán (${c}/${n} câu); sẽ chính xác hơn sau khi học 2 bài`;
      }
      absorb[m.id] = { factor, basis, label: factor >= 1.1 ? 'Nhanh' : factor >= 1 ? 'Khá' : 'Chậm' };
    }

    // 2) Từng vùng → từng bài: trọng số (điểm), khối lượng (phút), độ khó, mức nắm → điểm tăng thêm trên mỗi giờ.
    const rows = PLAN.groups.map(g => {
      const diff = DIFF[g.difficulty] || DIFF[2];
      const lessons = g.lessons.map(id => lessonById.get(id)).filter(Boolean);
      const d = diag && diag.groups[g.id];
      const dc = d ? d.c : 0, dn = d ? d.n : 0;

      const states = lessons.map(l => store.lessons[l.id] || {});
      const stuck = states.some(x => (x.tries || 0) >= 2 && (x.last || 0) < 0.6);
      const triedHere = states.filter(x => x.tries && x.first != null);
      let ab = absorb[g.module].factor;
      if (triedHere.length) {
        const avg = triedHere.reduce((s, x) => s + x.first, 0) / triedHere.length;
        ab *= avg >= 0.8 ? 1.1 : avg < 0.5 ? 0.85 : 1;
      }
      // Mức nắm có thể đạt: trần theo độ khó (của từng bài), nhích theo khả năng tiếp thu, trừ bớt nếu đang kẹt.
      const lessonDiff = l => DIFF[(PLAN.lessonDifficulty || {})[l.id]] || diff;
      const targetOf = l => clamp(lessonDiff(l).ceil + 0.1 * (ab - 1) - (stuck ? 0.15 : 0), 0.4, 0.92);

      // Chia trọng số của vùng xuống từng bài theo lượng câu giống đề (tính theo điểm) mà bài đó có.
      const weight = lessons.map(l => 1 + questionsOfLesson(l).filter(examLike).reduce((s, q) => s + (q.points || 1), 0));
      // Bài có tỉ trọng khai báo sẵn (PLAN.lessonShare) lấy đúng phần đó; phần còn lại chia theo weight.
      const share = PLAN.lessonShare || {};
      const fixedShare = Math.min(1, lessons.reduce((s, l) => s + (share[l.id] || 0), 0));
      const wsum = lessons.reduce((s, l, i) => s + (share[l.id] ? 0 : weight[i]), 0) || 1;

      const items = lessons.map((l, i) => {
        let c = 0, n = 0;
        questionsOfLesson(l).forEach(q => { const s = store.seen[q.id]; if (s) { c += s.c; n += s.c + s.w; } });
        let m = dn + n > 0 ? (dc + c + 0.25) / (dn + n + 1) : 0.3;
        if (g.essay) m = 0.6 * m + 0.4 * (st.self[g.id] != null ? st.self[g.id] / 2 : 0.3);
        const pts = share[l.id] ? g.points * share[l.id] : g.points * (1 - fixedShare) * weight[i] / wsum;
        const ld = lessonDiff(l), tg = targetOf(l);
        const gain = pts * Math.max(0, tg - m);
        const min = Math.max(5, Math.round((l.minutes || 15) * ld.time * (m >= 0.6 ? 1 : 1.5)));   // đọc + luyện 8 câu
        const done = !!(store.lessons[l.id] && store.lessons[l.id].done);
        return { l, pts, m, gain, min, done, diff: ld, target: tg, roi: gain / (min / 60), day: -1 };
      });

      const mastery = items.reduce((s, x) => s + x.pts * x.m, 0) / g.points;
      const target = items.reduce((s, x) => s + x.pts * x.target, 0) / g.points;
      let todo = items.filter(x => !x.done && x.gain > 0.15);   // bài thêm dưới 0,15 điểm thì không đáng xếp lịch
      // Vùng đã nắm tốt mà cả vùng chỉ còn dưới nửa điểm để lấy → coi là đã vững, không tốn giờ học.
      if (mastery >= 0.75 && todo.reduce((s, x) => s + x.gain, 0) < 0.5) todo = [];
      const gain = todo.reduce((s, x) => s + x.gain, 0);
      const minutes = todo.reduce((s, x) => s + x.min, 0);
      const row = {
        g, diff, items, todo, mastery, hasData: dn > 0 || items.some(x => x.m !== 0.3), stuck, absorb: ab, target, gain, minutes,
        volume: lessons.reduce((s, l) => s + (l.minutes || 15), 0),
        roi: minutes ? gain / (minutes / 60) : 0,
        sec: d && d.n ? d.sec / d.n : null, diag: d, verdict: '',
      };
      items.forEach(x => { x.row = row; });
      return row;
    });

    // 3) Xếp lịch: mỗi ngày trừ giờ cố định, phần còn lại lấy TỪNG BÀI theo điểm/giờ giảm dần.
    const start = new Date(now); start.setHours(0, 0, 0, 0);
    const end = new Date(PLAN.studyEnd + 'T00:00:00');
    const days = [];
    for (let t = new Date(start); t <= end; t.setDate(t.getDate() + 1)) {
      const isToday = t.getTime() === start.getTime();
      let budget = st.hours * 60;
      if (isToday) budget = Math.min(budget, Math.max(0, 23 - new Date(now).getHours()) * 60);
      days.push({ date: new Date(t), isToday, budget, free: budget, fixed: [], lessons: [] });
    }
    const reserve = (day, type, min, label, href) => { if (day && day.free >= min) { day.fixed.push({ type, min, label, href }); day.free -= min; return true; } return false; };
    if (days.length) {
      if (!diag) reserve(days[0], 'diag', 40, 'Bài chẩn đoán (khoảng 43 câu)', '#/plan');
      reserve(days[days.length - 1], 'mock', 110, 'Thi thử một đề full + xem lại bài sai', '#/exam');
      // Lần thi thử giữa kỳ chỉ đáng khi còn đủ ngày; nếu không nó ăn mất giờ học các bài nhiều điểm.
      if (days.length >= 5 && st.hours >= 4) reserve(days[Math.floor(days.length / 2)], 'mock', 110, 'Thi thử một đề full + xem lại bài sai', '#/exam');
      days.forEach(d => reserve(d, 'wrong', 15, 'Luyện lại Sổ câu sai', '#/wrong'));
    }

    const todoById = new Map();
    rows.forEach(r => r.todo.forEach(x => todoById.set(x.l.id, x)));
    const after = PLAN.after || {};
    // Xếp một bài; nếu bài cần bài tiên quyết chưa học thì xếp bài tiên quyết trước (cùng ngày hoặc ngày sớm hơn).
    const place = (x, chain) => {
      if (x.day >= 0) return x.day;
      if (chain.includes(x)) return -1;
      let from = 0;
      for (const pid of after[x.l.id] || []) {
        const p = todoById.get(pid);
        if (!p) continue;                       // đã nắm hoặc không cần học → coi như đạt
        const pd = place(p, chain.concat([x]));
        if (pd < 0) return -1;                  // không xếp được bài tiên quyết → bỏ bài này
        p.pulled = p.pulled || x.l.id;
        from = Math.max(from, pd);
      }
      const idx = days.findIndex((d, i) => i >= from && d.free >= x.min);
      if (idx < 0) return -1;
      days[idx].lessons.push(x); days[idx].free -= x.min; x.day = idx;
      return idx;
    };
    [...todoById.values()].sort((a, b) => b.roi - a.roi).forEach(x => place(x, []));
    const orderOf = new Map(LESSONS.map((l, i) => [l.id, i]));
    days.forEach(d => d.lessons.sort((a, b) => orderOf.get(a.l.id) - orderOf.get(b.l.id)));
    const dropped = [...todoById.values()].filter(x => x.day < 0).sort((a, b) => b.roi - a.roi);

    // 4) Xếp loại từng vùng theo số bài được chọn.
    const ranked = rows.slice().sort((a, b) => b.roi - a.roi);
    for (const r of rows) {
      const picked = r.todo.filter(x => x.day >= 0);
      r.picked = picked;
      r.cut = r.todo.filter(x => x.day < 0);
      r.schedGain = picked.reduce((s, x) => s + x.gain, 0);
      r.schedMin = picked.reduce((s, x) => s + x.min, 0);
      if (!r.todo.length) r.verdict = r.mastery >= 0.75 ? 'ok' : 'practice';
      else if (!picked.length) r.verdict = 'skip';
      else if (r.cut.length) r.verdict = 'partial';
      else r.verdict = !r.stuck && ranked.indexOf(r) < Math.ceil(ranked.filter(x => x.todo.length).length / 2) ? 'focus' : 'learn';   // vùng đang kẹt không bao giờ là trọng tâm
    }

    const scoreNow = rows.reduce((s, r) => s + r.g.points * r.mastery, 0);
    const scoreAfter = scoreNow + rows.reduce((s, r) => s + r.schedGain, 0);
    return { st, diag, absorb, rows, ranked, days, dropped, scoreNow, scoreAfter, daysLeft: Math.round((new Date(PLAN.examDate + 'T00:00:00') - start) / 86400000) };
  }

  const VERDICT = {
    focus: ['🔥 Trọng tâm', 'bad'], learn: ['📘 Nên học', 'warn'], partial: ['✂️ Học một phần', 'warn'],
    practice: ['🎯 Chỉ cần luyện thêm', ''], ok: ['✅ Đã vững', 'ok'], skip: ['🚫 Bỏ', ''],
  };

  function viewPlan() {
    const P = computePlan(Date.now());
    const { st, diag } = P;
    const fmtDay = d => d.toLocaleDateString('vi-VN', { weekday: 'long', day: '2-digit', month: '2-digit' });
    const hm = min => min >= 60 ? Math.floor(min / 60) + ' giờ' + (min % 60 ? ' ' + (min % 60) + '′' : '') : min + '′';
    const essayRows = P.rows.filter(r => r.g.essay);
    const slow = diag ? P.rows.filter(r => r.sec && r.sec > MCQ_PACE * 1.5 && r.diag.c > 0) : [];
    const avgSec = diag ? Object.values(diag.groups).reduce((s, x) => s + x.sec, 0) / Math.max(1, diag.total) : null;
    const lessonLinks = xs => xs.map(x => `<a href="#/l/${x.l.id}">${esc(x.l.id)}</a>`).join(', ');
    const pickedMin = P.rows.reduce((s, r) => s + r.schedMin, 0);
    const allMin = P.rows.reduce((s, r) => s + r.minutes, 0);

    setView(`
      <h1>Kế hoạch khoanh vùng trọng tâm</h1>
      <p class="muted">Mục tiêu: <b>tăng điểm nhiều nhất</b> trong ${P.days.length} ngày còn lại (đến hết ${new Date(PLAN.studyEnd + 'T00:00:00').toLocaleDateString('vi-VN')}), không phải học hết kiến thức. Còn <b>${P.daysLeft} ngày</b> đến ngày thi. Kế hoạch <b>tự tính lại</b> mỗi khi bạn làm thêm bài.</p>

      ${diag ? `
        <div class="card" style="margin-bottom:12px">
          <div class="row"><div><div class="muted small">Điểm ước tính hiện tại</div><div class="score-big">${Math.round(P.scoreNow)}</div></div>
          <div style="font-size:28px" class="muted">→</div>
          <div><div class="muted small">Nếu làm đúng kế hoạch</div><div class="score-big" style="color:var(--ok)">${Math.round(P.scoreAfter)}</div></div>
          <span class="spacer"></span><button class="btn ghost" data-diag>🔁 Làm lại chẩn đoán</button></div>
          <p class="small muted" style="margin-bottom:0">Ước tính thô trên thang 100, dùng để so sánh trước/sau, không phải dự đoán điểm thi. Kế hoạch dùng ${hm(pickedMin)} trên tổng ${hm(allMin)} cần để học hết. Chẩn đoán gần nhất: ${diag.correct}/${diag.total} câu, ${new Date(diag.at).toLocaleString('vi-VN')}.</p>
        </div>` : `
        <div class="card practice-cta" style="margin:12px 0">
          <h3 style="margin-top:0">Bước 1: làm bài chẩn đoán</h3>
          <p>Khoảng 43 câu trắc nghiệm, tối đa 50 phút, phủ 20 vùng kiến thức. Không biết thì bấm <b>"Chưa học / không biết"</b>, <b>đừng đoán mò</b>: đoán trúng sẽ làm kế hoạch bỏ sót chỗ bạn yếu.</p>
          <button class="btn primary" data-diag>▶ Bắt đầu chẩn đoán</button>
          <p class="small muted">Chưa có kết quả nên bảng dưới đang tạm coi vùng nào bạn cũng mới nắm 30%. Lúc này thứ tự chỉ phản ánh trọng số, khối lượng và độ khó.</p>
        </div>`}

      <div class="card" style="margin-bottom:12px">
        <div class="field" style="margin-bottom:0"><label>Mỗi ngày bạn học được bao nhiêu giờ?</label>
        <div class="chips">${[2, 3, 4, 5, 6, 8].map(h => `<button class="chip ${h === st.hours ? 'on' : ''}" data-hours="${h}">${h} giờ</button>`).join('')}</div></div>
      </div>

      <details class="card" style="margin-bottom:12px">
        <summary style="cursor:pointer;font-weight:700">Kế hoạch này tính như thế nào?</summary>
        <div class="small">
        <p>Với <b>từng bài học</b>, web ước lượng số điểm bài đó có thể mang thêm cho bạn, chia cho thời gian phải bỏ ra:</p>
        <div class="box formula" style="font-size:15px"><b>điểm/giờ</b> = trọng số của bài × (mức nắm có thể đạt − mức nắm hiện tại) ÷ thời gian học</div>
        <ul>
          <li><b>Trọng số:</b> số điểm vùng đó chiếm trong đề (ước lượng theo bộ đề mô phỏng), chia xuống từng bài theo lượng câu giống đề mà bài có.</li>
          <li><b>Khối lượng:</b> thời lượng bài (đọc + luyện 8 câu). Đã nắm trên 60% thì tính ít giờ hơn.</li>
          <li><b>Độ khó</b> tác động hai chỗ: phần khó tốn giờ hơn (× 1,3, phần dễ × 0,8), và mức nắm đạt được trong vài ngày thấp hơn (dễ 90%, vừa 80%, khó 65%).</li>
          <li><b>Mức nắm hiện tại:</b> từ bài chẩn đoán và mọi lần luyện tập; vùng có tự luận trộn thêm phần tự đánh giá.</li>
          <li><b>Khả năng tiếp thu:</b> module bạn học vào nhanh thì mức nắm có thể đạt được nâng lên; bài luyện 2 lần vẫn dưới 60% bị trừ.</li>
        </ul>
        <p>Sau đó web lấy bài theo điểm/giờ từ cao xuống thấp cho tới khi hết quỹ giờ. Bài cần bài khác làm nền thì bài nền được kéo vào trước. Bài không lọt vào lịch được ghi rõ là <b>bỏ</b>. Trọng số và độ khó do người soạn ước lượng, không phải số liệu chính thức của đề.</p>
        </div>
      </details>

      <h2>Khoanh vùng: học gì, bỏ gì</h2>
      <p class="small muted">Sắp theo điểm tăng thêm trên mỗi giờ. Mỗi vùng ghi rõ bài nào <b>học</b>, bài nào <b>bỏ</b>.</p>
      <div class="lesson-list">
        ${P.ranked.map(r => {
          const [label, cls] = VERDICT[r.verdict];
          return `<div class="card mod-${r.g.module}" style="border-left:4px solid var(--mod);padding:12px 14px">
            <div class="row"><span class="mod-tag" style="width:24px;height:24px;font-size:13px">${r.g.module}</span><b class="spacer">${esc(r.g.name)}</b>
              <span class="badge ${cls}">${label}</span>${r.stuck ? '<span class="badge bad">⚠️ Đang kẹt</span>' : ''}</div>
            <div class="plan-facts">
              <span>Trọng số <b>~${r.g.points} điểm</b></span>
              <span>Khối lượng <b>${r.items.length} bài · ${hm(r.volume)}</b></span>
              <span>Độ khó <b class="badge ${r.diff.cls}">${r.diff.label}</b></span>
            </div>
            <div class="progress" style="margin:8px 0 6px" title="Mức nắm hiện tại"><span style="width:${Math.round(r.mastery * 100)}%"></span></div>
            <div class="plan-facts">
              <span>Đang nắm <b>${pct(r.mastery)}</b>${r.hasData ? '' : ' (chưa đo)'}</span>
              <span>Có thể đạt <b>${pct(r.target)}</b></span>
              ${r.minutes ? `<span>Tăng tối đa <b>+${r.gain.toFixed(1)} điểm</b> trong <b>${hm(r.minutes)}</b></span><span><b>${r.roi.toFixed(1)}</b> điểm/giờ</span>` : ''}
            </div>
            <p class="small" style="margin:8px 0 0">💡 ${esc(r.g.how || '')}</p>
            ${r.picked.length ? `<p class="small" style="margin:6px 0 0"><b style="color:var(--ok)">Học:</b> ${lessonLinks(r.picked)} <span class="muted">(${hm(r.schedMin)}, +${r.schedGain.toFixed(1)} điểm)</span></p>` : ''}
            ${r.cut.length ? `<p class="small" style="margin:4px 0 0"><b style="color:var(--bad)">Bỏ:</b> ${lessonLinks(r.cut)} <span class="muted">(+${r.cut.reduce((s, x) => s + x.gain, 0).toFixed(1)} điểm nhưng cần ${hm(r.cut.reduce((s, x) => s + x.min, 0))})</span></p>` : ''}
          </div>`;
        }).join('')}
      </div>

      <h2>Lịch từng ngày</h2>
      ${P.days.length ? P.days.map(d => `
        <div class="card" style="margin:10px 0">
          <div class="row"><b>${d.isToday ? 'Hôm nay · ' : ''}${fmtDay(d.date)}</b><span class="spacer"></span><span class="badge">${hm(d.budget - d.free)} / ${hm(d.budget)}</span></div>
          ${d.fixed.filter(f => f.type !== 'wrong').map(f => `<a class="lesson-item" style="margin-top:8px" href="${f.href}"><span class="status">${f.type === 'diag' ? '🧭' : '⏱'}</span><span><b>${esc(f.label)}</b><br><span class="meta">${hm(f.min)}</span></span></a>`).join('')}
          ${d.lessons.map(x => `<a class="lesson-item mod-${x.l.module}" style="margin-top:8px" href="#/l/${x.l.id}"><span class="status">${lessonStatus(x.l).icon}</span><span><b>${esc(x.l.id)}</b> ${esc(x.l.title)}<br><span class="meta">${hm(x.min)} · ${x.diff.label.toLowerCase()} · +${x.gain.toFixed(1)} điểm · ${x.roi.toFixed(1)} điểm/giờ${x.pulled ? ' · học trước để làm nền cho ' + esc(x.pulled) : ''}</span></span></a>`).join('')}
          ${d.fixed.filter(f => f.type === 'wrong').map(f => `<a class="lesson-item" style="margin-top:8px" href="${f.href}"><span class="status">📕</span><span>${esc(f.label)}<br><span class="meta">${hm(f.min)}</span></span></a>`).join('')}
          ${!d.lessons.length && !d.fixed.length ? '<p class="muted small" style="margin-bottom:0">Hết giờ trong ngày.</p>' : ''}
        </div>`).join('') : '<div class="card empty">Đã qua ngày kết thúc kế hoạch. Giờ chỉ nên xem lại Bảng công thức và Sổ câu sai.</div>'}

      ${P.dropped.length ? `<h2>🚫 Chủ động bỏ (${P.dropped.length} bài)</h2>
      <div class="card"><p class="small muted" style="margin-top:0">Các bài này cho ít điểm trên mỗi giờ nhất so với quỹ thời gian hiện có. Tăng số giờ mỗi ngày nếu muốn kéo thêm bài vào lịch; bài đứng trên được kéo vào trước.</p>
        <table class="simple small"><tr><th>Bài</th><th>Điểm/giờ</th><th>Cần</th></tr>
        ${P.dropped.map(x => `<tr><td><a href="#/l/${x.l.id}">${esc(x.l.id)}</a> ${esc(x.l.title)}</td><td>${x.roi.toFixed(1)}</td><td>${hm(x.min)}</td></tr>`).join('')}
        </table>
      </div>` : ''}

      <h2>Khả năng tiếp thu của bạn</h2>
      <div class="card">
        <table class="simple"><tr><th>Module</th><th>Tiếp thu</th><th>Căn cứ</th></tr>
        ${MODULES.map(m => { const a = P.absorb[m.id]; return `<tr><td><b>${m.id}</b></td><td><span class="badge ${a.factor >= 1.1 ? 'ok' : a.factor < 1 ? 'bad' : 'warn'}">${a.label}</span></td><td class="small">${esc(a.basis)}</td></tr>`; }).join('')}
        </table>
        <p class="small muted">Đo bằng điểm luyện <b>lần đầu</b> ngay sau khi học một bài. Bài luyện 2 lần vẫn dưới 60% được coi là <b>đang kẹt</b>.</p>
        ${avgSec != null ? `<p class="small" style="margin-bottom:0">Tốc độ làm bài chẩn đoán: <b>${Math.round(avgSec)} giây/câu</b> (cần khoảng ${MCQ_PACE} giây/câu trắc nghiệm để kịp giờ).
          ${slow.length ? ` Làm đúng nhưng chậm ở: ${slow.map(r => esc(r.g.name)).join('; ')} → cần luyện thêm cho nhanh tay.` : ''}</p>` : ''}
      </div>

      ${essayRows.length ? `<h2>Tự đánh giá phần tự luận / code</h2>
      <div class="card"><p class="small muted" style="margin-top:0">Trắc nghiệm không đo được kỹ năng viết, mà tự luận chiếm khoảng 1/3 số điểm. Hãy tự chấm thật thà:</p>
        ${essayRows.map(r => `<div class="field"><label>${esc(r.g.essay)}</label><div class="chips">
          ${[[0, 'Chưa làm được'], [1, 'Làm được một phần'], [2, 'Làm tốt']].map(([v, t]) => `<button class="chip ${st.self[r.g.id] === v ? 'on' : ''}" data-self="${r.g.id}" data-v="${v}">${t}</button>`).join('')}
        </div></div>`).join('')}
      </div>` : ''}
    `);

    app.querySelectorAll('[data-diag]').forEach(b => b.onclick = startDiagnostic);
    app.querySelectorAll('[data-hours]').forEach(b => b.onclick = () => { st.hours = +b.dataset.hours; save(true); viewPlan(); });
    app.querySelectorAll('[data-self]').forEach(b => b.onclick = () => { const y = window.scrollY; st.self[b.dataset.self] = +b.dataset.v; save(true); viewPlan(); window.scrollTo(0, y); });
  }

  // ---------- Formula sheet ----------
  function viewFormulas() {
    const data = window.FORMULAS || [];
    setView(`
      <h1>Bảng công thức</h1>
      <p class="muted">Toàn bộ công thức cần nhớ, gom theo module. Bấm tên nhóm để mở bài học gốc. Nên đọc lại ngày trước khi thi.</p>
      ${data.map(sec => {
        const m = modById.get(sec.module);
        return `<h2 class="mod-${sec.module}"><span class="mod-tag" style="width:26px;height:26px;font-size:14px">${sec.module}</span> ${esc(m ? m.name : '')}</h2>
          ${sec.groups.map(([title, lessonId, rows]) => `
            <div class="card mod-${sec.module}" style="margin:10px 0;border-left:4px solid var(--mod)">
              <div style="font-weight:700;margin-bottom:6px">${lessonById.has(lessonId) ? `<a href="#/l/${lessonId}">${esc(title)}</a>` : esc(title)}</div>
              <table class="simple formula-table">${rows.map(([k, v]) => `<tr><td style="width:36%"><b>${esc(k)}</b></td><td>${v}</td></tr>`).join('')}</table>
            </div>`).join('')}`;
      }).join('')}
    `);
  }

  // ---------- Bảng thuật ngữ (tra cứu) ----------
  function viewGlossary() {
    const norm = x => x.toLowerCase();
    setView(`
      <h1>Bảng thuật ngữ</h1>
      <p class="muted">${GLOSSARY.length} thuật ngữ hay xuất hiện trong các lựa chọn của đề, mỗi cái một câu giải thích. Sau khi trả lời một câu trắc nghiệm, những thuật ngữ có trong 4 lựa chọn cũng tự hiện ngay dưới lời giải.</p>
      <input type="search" id="glossFind" class="gloss-find" placeholder="Gõ để tìm: epoch, recall, JOIN, người rơm…" autocomplete="off">
      <div id="glossList">${GLOSSARY.map((g, i) => `<div class="card gloss-item" data-i="${i}"><b>${esc(g.t)}</b>${g.l && lessonById.has(g.l) ? ` <a class="small" href="#/l/${g.l}">→ ${esc(g.l)} ${esc(lessonById.get(g.l).title)}</a>` : ''}<div>${esc(g.d)}</div></div>`).join('')}</div>
      <div class="card empty" id="glossNone" hidden>Không tìm thấy thuật ngữ nào.</div>
    `);
    const hay = GLOSSARY.map(g => norm(g.t + ' ' + g.a.join(' ') + ' ' + g.d));
    const items = [...app.querySelectorAll('.gloss-item')];
    app.querySelector('#glossFind').oninput = e => {
      const k = norm(e.target.value.trim());
      let n = 0;
      items.forEach((el, i) => { const show = !k || hay[i].includes(k); el.hidden = !show; if (show) n++; });
      app.querySelector('#glossNone').hidden = n > 0;
    };
  }

  // ---------- Wrong book ----------
  function viewWrong() {
    const ids = Object.keys(store.wrong).filter(id => qById.has(id));
    const qs = ids.map(id => qById.get(id));
    const byMod = {};
    qs.forEach(q => (byMod[q.module] = byMod[q.module] || []).push(q));
    setView(`
      <h1>Sổ câu sai</h1>
      <p class="muted">Câu làm sai tự vào đây. Làm đúng ${WRONG_CLEAR_STREAK} lần liên tiếp thì câu rời sổ.</p>
      ${qs.length ? `<button class="btn primary" data-all>🔁 Luyện lại tất cả (${qs.length})</button>` : '<div class="card empty">Chưa có câu sai nào. 🎉</div>'}
      ${MODULES.filter(m => byMod[m.id]).map(m => {
        const groups = {};
        byMod[m.id].forEach(q => { const l = lessonBySkill.get(q.skill); const k = l ? l.id : '_'; (groups[k] = groups[k] || []).push(q); });
        return `<h2><span class="mod-tag mod-${m.id}" style="width:26px;height:26px;font-size:14px">${m.id}</span> ${esc(m.name)}</h2>
          <div class="lesson-list">${Object.entries(groups).map(([k, list]) => {
            const l = lessonById.get(k);
            return `<div class="lesson-item"><span class="status">📕</span><span class="spacer">${l ? `<b>${esc(l.id)}</b> ${esc(l.title)}` : 'Chưa gắn bài học'}<br><span class="meta">${list.length} câu sai</span></span>
              ${l ? `<a class="btn ghost small" href="#/l/${l.id}">Học lại</a>` : ''}
              <button class="btn small" data-retry="${k}">Luyện</button></div>`;
          }).join('')}</div>`;
      }).join('')}
    `);
    const run = list => {
      setView('<div id="quiz"></div>');
      activeQuiz = new Quiz(app.querySelector('#quiz'), {
        title: 'Luyện lại câu sai',
        questions: shuffle(list),
        mode: 'practice',
        onFinish: res => `<div class="card" style="text-align:center"><div class="score-big">${res.correct}/${res.total}</div>
          <p>${weakSkillsHtml(res)}</p><a class="btn primary" href="#/wrong">Về sổ câu sai</a></div>`,
        onAgain: viewWrong,
      });
    };
    const all = app.querySelector('[data-all]');
    if (all) all.onclick = () => run(qs);
    app.querySelectorAll('[data-retry]').forEach(b => b.onclick = () => {
      const k = b.dataset.retry;
      run(qs.filter(q => { const l = lessonBySkill.get(q.skill); return (l ? l.id : '_') === k; }));
    });
  }

  // ---------- Quiz engine ----------
  function Quiz(el, opts) {
    this.el = el;
    this.opts = opts;
    this.mode = opts.mode;
    this.qs = opts.questions;
    this.idx = 0;
    this.ans = this.qs.map(() => ({ choice: null, text: '', checked: [], revealed: false, flag: false }));
    this.finished = false;
    this.timer = null;
    this.times = this.qs.map(() => 0);   // giây đã dùng cho từng câu
    this.shown = null;
    if (opts.restore) {   // xem lại một lần làm đã lưu: không đồng hồ, vào thẳng màn hình kết quả
      opts.restore.forEach((x, i) => { const a = this.ans[i]; if (!a) return; a.choice = x.c != null ? x.c : null; a.text = x.t || ''; a.checked = (x.k || []).map(Boolean); });
      this.finished = true;
      this.renderExamResult();
      return;
    }
    if (opts.minutes) {
      this.remain = opts.minutes * 60;
      this.timer = setInterval(() => this.tick(), 1000);
    }
    if (!this.qs.length) { el.innerHTML = '<div class="card empty">Chưa có câu hỏi cho phạm vi này.</div>'; this.finished = true; return; }
    this.render();
  }

  Quiz.prototype.destroy = function () { if (this.timer) clearInterval(this.timer); };

  Quiz.prototype.tick = function () {
    this.remain--;
    const t = this.el.querySelector('.timer');
    if (t) { t.textContent = '⏱ ' + fmtTime(Math.max(0, this.remain)); t.classList.toggle('low', this.remain < 120); }
    if (this.remain <= 0) { alert('Hết giờ! Bài được nộp tự động.'); this.finish(); }
  };

  Quiz.prototype.isAnswered = function (i) {
    const q = this.qs[i], a = this.ans[i];
    return isOpen(q) ? (a.text.trim().length > 0 || a.revealed) : a.choice != null;
  };

  Quiz.prototype.openScore = function (i) {
    const q = this.qs[i], a = this.ans[i];
    const n = (q.rubric || []).length;
    return n ? a.checked.filter(Boolean).length / n : (a.checked[0] ? 1 : 0);
  };

  Quiz.prototype.isCorrect = function (i) {
    const q = this.qs[i], a = this.ans[i];
    return isOpen(q) ? this.openScore(i) >= OPEN_PASS : a.choice === q.answer;
  };

  Quiz.prototype.clock = function () {
    const now = Date.now();
    if (this.shown != null) this.times[this.shown] += (now - this.shownAt) / 1000;
    this.shown = this.idx;
    this.shownAt = now;
  };

  Quiz.prototype.render = function () {
    this.clock();
    const q = this.qs[this.idx], a = this.ans[this.idx];
    const practice = this.mode === 'practice';
    const lesson = lessonBySkill.get(q.skill);
    const last = this.idx === this.qs.length - 1;

    let body = '';
    if (!isOpen(q)) {
      const lock = practice && a.choice != null;
      body = '<div class="options">' + q.options.map(o => {
        let cls = '';
        if (lock) { if (o.key === q.answer) cls = 'correct'; else if (o.key === a.choice) cls = 'wrong'; }
        else if (o.key === a.choice) cls = 'selected';
        return `<button class="option ${cls}" data-key="${esc(o.key)}" ${lock ? 'disabled' : ''}><span class="key">${esc(o.key)}</span><span>${inlineMd(o.text)}</span></button>`;
      }).join('') + (this.opts.allowSkip ? `<button class="option skip ${a.choice === '?' ? 'selected' : ''}" data-key="?"><span class="key">🤷</span><span>Chưa học / không biết (đừng đoán mò)</span></button>` : '') + '</div>';
      if (lock) {
        const ok = a.choice === q.answer;
        body += `<div class="feedback ${ok ? 'ok' : 'bad'}"><div class="title">${ok ? '✅ Chính xác' : '❌ Chưa đúng — đáp án ' + esc(q.answer)}</div>${md(q.explanation)}
          ${!ok && lesson ? `<div class="small" style="margin-top:6px">📖 Xem lại: <a href="#/l/${lesson.id}">${esc(lesson.id)} ${esc(lesson.title)}</a></div>` : ''}</div>${glossHtml(q)}`;
      }
    } else {
      body = `<textarea placeholder="Viết câu trả lời / code của bạn ở đây (nháp trên giấy cũng được)..." ${practice && a.revealed ? 'readonly' : ''}>${esc(a.text)}</textarea>`;
      if (practice) {
        body += a.revealed ? this.openReveal(this.idx) : `<div class="quiz-actions"><button class="btn" data-reveal>Xem đáp án mẫu & tự chấm</button></div>`;
        if (!a.revealed && q.hint) body += `<details class="example"><summary>💡 Gợi ý</summary>${md(Array.isArray(q.hint) ? q.hint.join('\n') : q.hint)}</details>`;
      }
    }

    const nav = this.mode === 'exam' ? `<div class="navigator">${this.qs.map((x, i) =>
      `<button data-go="${i}" class="${i === this.idx ? 'current' : ''} ${this.isAnswered(i) ? 'answered' : ''} ${this.ans[i].flag ? 'flag' : ''}" title="Module ${x.module}">${i + 1}</button>`).join('')}</div>` : '';

    const canNext = !practice || this.isAnswered(this.idx) && (!isOpen(q) || a.revealed);

    this.el.innerHTML = `
      <div class="quiz-head">
        <b>${esc(this.opts.title)}</b><span class="spacer"></span>
        <span class="badge">Câu ${this.idx + 1}/${this.qs.length}</span>
        ${this.timer ? `<span class="timer">⏱ ${fmtTime(this.remain)}</span>` : ''}
      </div>
      ${practice ? `<div class="progress" style="margin-bottom:12px"><span style="width:${Math.round(this.idx / this.qs.length * 100)}%"></span></div>` : ''}
      ${nav}
      <div class="card q-card">
        <div class="q-meta">
          <span class="badge">Module ${q.module}</span>
          <span class="badge">${typeLabel(q)}</span>
          ${q.points ? `<span class="badge">${q.points} điểm</span>` : ''}
          ${lesson ? `<span class="badge">${esc(lesson.id)} ${esc(lesson.title)}</span>` : ''}
        </div>
        <div class="q-prompt rich">${md(q.prompt)}</div>
        ${body}
      </div>
      <div class="quiz-actions">
        ${practice && this.opts.allowEarly && !last ? '<button class="btn ghost" data-early>Dừng & xem kết quả</button>' : ''}
        ${this.mode === 'exam' ? `<button class="btn" data-prev ${this.idx === 0 ? 'disabled' : ''}>← Trước</button>
          <button class="btn ghost" data-flag>${a.flag ? '🚩 Bỏ đánh dấu' : '🚩 Đánh dấu'}</button>` : ''}
        <span class="spacer"></span>
        ${last ? `<button class="btn primary" data-finish ${canNext ? '' : 'disabled'}>${this.mode === 'exam' ? 'Nộp bài' : 'Xem kết quả'}</button>`
          : `<button class="btn primary" data-next ${canNext ? '' : 'disabled'}>Câu tiếp →</button>`}
      </div>
      ${this.mode === 'exam' && !last ? '<div class="quiz-actions"><span class="spacer"></span><button class="btn ghost" data-finish>Nộp bài sớm</button></div>' : ''}
    `;
    this.bind();
    enhance(this.el);
  };

  Quiz.prototype.openReveal = function (i) {
    const q = this.qs[i], a = this.ans[i];
    const rubric = q.rubric && q.rubric.length ? q.rubric : ['Câu trả lời của tôi đúng ý đáp án mẫu'];
    return `<div class="model-answer"><b>Đáp án mẫu</b><div class="rich">${md(q.modelAnswer || q.explanation || '')}</div></div>
      <div style="margin-top:10px"><b>Tự chấm:</b> tick những ý bạn đã làm được</div>
      <ul class="rubric">${rubric.map((r, k) => `<li><label><input type="checkbox" data-rub="${k}" ${a.checked[k] ? 'checked' : ''}><span>${inlineMd(r)}</span></label></li>`).join('')}</ul>
      <div class="small muted" data-openscore>Đạt ${Math.round(this.openScore(i) * 100)}% rubric</div>`;
  };

  Quiz.prototype.bind = function () {
    const el = this.el, a = this.ans[this.idx], q = this.qs[this.idx];
    const practice = this.mode === 'practice';
    el.querySelectorAll('.option').forEach(b => b.onclick = () => {
      if (practice && a.choice != null) return;
      a.choice = b.dataset.key;
      if (practice) recordAnswer(q, a.choice === q.answer);
      this.render();
    });
    const ta = el.querySelector('textarea');
    if (ta) ta.oninput = () => {
      a.text = ta.value;
      const btn = el.querySelector('[data-next],[data-finish]');
      if (this.mode === 'exam' && btn) btn.disabled = false;
      const chip = el.querySelector(`.navigator [data-go="${this.idx}"]`);
      if (chip) chip.classList.toggle('answered', this.isAnswered(this.idx));
    };
    const rev = el.querySelector('[data-reveal]');
    if (rev) rev.onclick = () => { a.revealed = true; this.render(); };
    el.querySelectorAll('[data-rub]').forEach(cb => cb.onchange = () => {
      a.checked[+cb.dataset.rub] = cb.checked;
      el.querySelector('[data-openscore]').textContent = 'Đạt ' + Math.round(this.openScore(this.idx) * 100) + '% rubric';
    });
    const go = d => { if (q && isOpen(q) && practice && a.revealed && !a.recorded) { a.recorded = true; recordAnswer(q, this.isCorrect(this.idx)); } this.idx += d; this.render(); window.scrollTo(0, 0); };
    const next = el.querySelector('[data-next]'); if (next) next.onclick = () => go(1);
    const prev = el.querySelector('[data-prev]'); if (prev) prev.onclick = () => go(-1);
    el.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { this.idx = +b.dataset.go; this.render(); });
    const flag = el.querySelector('[data-flag]'); if (flag) flag.onclick = () => { a.flag = !a.flag; this.render(); };
    const early = el.querySelector('[data-early]');
    if (early) early.onclick = () => {
      if (isOpen(q) && a.revealed && !a.recorded) { a.recorded = true; recordAnswer(q, this.isCorrect(this.idx)); }
      this.early = true;   // kết quả chỉ tính trên các câu đã làm
      this.finish();
    };
    el.querySelectorAll('[data-finish]').forEach(f => f.onclick = () => {
      if (this.mode === 'exam') {
        const left = this.qs.filter((_, i) => !this.isAnswered(i)).length;
        if (!confirm(left ? `Còn ${left} câu chưa làm. Nộp bài?` : 'Nộp bài?')) return;
      } else if (isOpen(q) && a.revealed && !a.recorded) { a.recorded = true; recordAnswer(q, this.isCorrect(this.idx)); }
      this.finish();
    });
  };

  Quiz.prototype.result = function () {
    const done = i => (isOpen(this.qs[i]) ? this.ans[i].revealed : this.ans[i].choice != null);
    let items = this.qs.map((q, i) => ({ i, q, a: this.ans[i], sec: this.times[i], correct: this.isCorrect(i), earned: isOpen(q) ? this.openScore(i) * (q.points || 1) : (this.isCorrect(i) ? (q.points || 1) : 0) }));
    if (this.early) items = items.filter(it => done(it.i));   // dừng giữa chừng: chỉ tính các câu đã làm
    const totalPts = items.reduce((s, it) => s + (it.q.points || 1), 0) || 1;
    const earned = items.reduce((s, it) => s + it.earned, 0);
    const correct = items.filter(it => it.correct).length;
    return { items, correct, total: items.length, early: !!this.early, ratio: items.length ? correct / items.length : 0, score100: Math.round(earned / totalPts * 1000) / 10 };
  };

  Quiz.prototype.finish = function () {
    if (this.finished) return;
    this.finished = true;
    this.clock();
    this.destroy();
    if (this.mode === 'exam' && !this.opts.noRecord) {
      // Ghi nhận trắc nghiệm vào thống kê; câu mở ghi nhận sau khi tự chấm.
      this.qs.forEach((q, i) => { if (!isOpen(q) && this.ans[i].choice != null) recordAnswer(q, this.isCorrect(i)); else if (!isOpen(q)) recordAnswer(q, false); });
    }
    const res = this.result();
    const custom = this.opts.onFinish && this.opts.onFinish(res, this);
    if (custom) {
      this.el.innerHTML = custom;
      this.bindAgain();
      enhance(this.el);
      return;
    }
    this.renderExamResult();
  };

  Quiz.prototype.bindAgain = function () {
    const again = this.el.querySelector('[data-again]');
    if (again) again.onclick = () => this.opts.onAgain && this.opts.onAgain();
  };

  Quiz.prototype.renderExamResult = function () {
    const res = this.result();
    const byMod = {};
    res.items.forEach(it => {
      const m = byMod[it.q.module] || (byMod[it.q.module] = { pts: 0, max: 0, c: 0, n: 0 });
      m.pts += it.earned; m.max += it.q.points || 1; m.n++; if (it.correct) m.c++;
    });
    const openCount = res.items.filter(it => isOpen(it.q)).length;
    this.el.innerHTML = `
      <div class="card" style="text-align:center">
        <div class="muted">${esc(this.opts.title)}</div>
        <div class="score-big" data-score>${res.score100}</div><div class="muted">/ 100 điểm</div>
        ${openCount ? `<p class="small">Có ${openCount} câu tự luận/code: mở từng câu bên dưới, đọc đáp án mẫu và tick rubric để cộng điểm.</p>` : ''}
        <p>${weakSkillsHtml(res)}</p>
        <div class="row" style="justify-content:center"><button class="btn primary" data-again>🔁 Làm lại</button><a class="btn" href="#/exam">Về trang thi thử</a></div>
      </div>
      <h2>Theo module</h2>
      <div class="card"><table class="simple"><tr><th>Module</th><th>Đúng</th><th>Điểm</th></tr>
        ${Object.entries(byMod).map(([m, v]) => `<tr><td>${m}</td><td>${v.c}/${v.n}</td><td data-modpts="${m}">${Math.round(v.pts * 10) / 10}/${Math.round(v.max * 10) / 10}</td></tr>`).join('')}
      </table></div>
      <h2>Xem lại từng câu</h2>
      ${res.items.map((it, i) => {
        const q = it.q;
        const head = `<span class="badge ${isOpen(q) ? 'warn' : it.correct ? 'ok' : 'bad'}">${isOpen(q) ? 'Tự chấm' : it.correct ? 'Đúng' : 'Sai'}</span> Câu ${i + 1} · Module ${q.module} · ${typeLabel(q)}`;
        let detail;
        if (isOpen(q)) {
          detail = `<div class="model-answer"><b>Bài làm của bạn</b><pre>${esc(it.a.text || '(bỏ trống)')}</pre></div>` + this.openReveal(i).replace('data-openscore', `data-openscore="${i}"`).replace(/data-rub="/g, `data-q="${i}" data-rub="`);
        } else {
          detail = `<div class="options">${q.options.map(o => `<div class="option ${o.key === q.answer ? 'correct' : o.key === it.a.choice ? 'wrong' : ''}"><span class="key">${esc(o.key)}</span><span>${inlineMd(o.text)}</span></div>`).join('')}</div>
            <div class="feedback ${it.correct ? 'ok' : 'bad'}">${it.a.choice == null ? '<b>Bạn bỏ trống.</b> ' : ''}${md(q.explanation)}</div>${glossHtml(q)}`;
        }
        return `<details class="card result-q" ${isOpen(q) || !it.correct ? '' : ''}><summary>${head}</summary><div class="rich" style="margin:10px 0">${md(q.prompt)}</div>${detail}</details>`;
      }).join('')}
    `;
    this.bindAgain();
    this.el.querySelectorAll('[data-rub]').forEach(cb => cb.onchange = () => {
      const i = +cb.dataset.q;
      this.ans[i].checked[+cb.dataset.rub] = cb.checked;
      const r = this.result();
      this.el.querySelector('[data-score]').textContent = r.score100;
      const sc = this.el.querySelector(`[data-openscore="${i}"]`);
      if (sc) sc.textContent = 'Đạt ' + Math.round(this.openScore(i) * 100) + '% rubric';
      const mod = this.qs[i].module, v = { pts: 0, max: 0 };
      r.items.forEach(it => { if (it.q.module === mod) { v.pts += it.earned; v.max += it.q.points || 1; } });
      const cell = this.el.querySelector(`[data-modpts="${mod}"]`);
      if (cell) cell.textContent = Math.round(v.pts * 10) / 10 + '/' + Math.round(v.max * 10) / 10;
      if (this.opts.onScoreChange) this.opts.onScoreChange(r);
    });
    enhance(this.el);
  };

  // ---------- Theme ----------
  function applyTheme() {
    if (store.theme) document.documentElement.setAttribute('data-theme', store.theme);
    else document.documentElement.removeAttribute('data-theme');
  }

  document.getElementById('themeBtn').onclick = () => {
    const dark = store.theme ? store.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
    store.theme = dark ? 'light' : 'dark';
    save();
    applyTheme();
  };

  applyTheme();
  document.body.classList.toggle('sidebar-collapsed', !!store.sbHidden);
  route();
})();
