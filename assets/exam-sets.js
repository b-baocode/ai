// Dựng các bộ đề CỐ ĐỊNH từ ngân hàng câu (dùng chung cho app và tools/check.mjs).
// - Bộ đề full: đúng cấu trúc đề thi (số câu trắc nghiệm / câu mở mỗi module lấy từ MODULES[].exam),
//   số đề = số đề tối thiểu để mọi câu (không tính câu nâng cao) xuất hiện ít nhất một lần.
//   Phần nào hết câu thì quay vòng lấy lại câu cũ cho đủ cấu trúc.
// - Bộ quiz ML/DL: toàn bộ câu của ml_dl_quiz_1 (kể cả câu nâng cao), một bộ duy nhất theo thứ tự gốc.
// Dùng bộ sinh số có hạt giống cố định → cùng một ngân hàng câu luôn cho cùng các đề.
(function () {
  const SEED = 20261018;

  function rng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function shuffled(arr, rnd) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // Xếp câu thành một dãy xen kẽ các dạng đề, để mỗi đoạn liên tiếp (một đề) rải nhiều dạng khác nhau.
  function interleave(pool, rnd) {
    const bySkill = new Map();
    pool.slice().sort((x, y) => (x.id < y.id ? -1 : x.id > y.id ? 1 : 0)).forEach(q => {
      if (!bySkill.has(q.skill)) bySkill.set(q.skill, []);
      bySkill.get(q.skill).push(q);
    });
    const groups = shuffled([...bySkill.values()].map(g => shuffled(g, rnd)), rnd);
    const out = [];
    while (groups.some(g => g.length)) for (const g of groups) if (g.length) out.push(g.shift());
    return out;
  }

  window.buildExamSets = function (QUESTIONS, MODULES) {
    const rnd = rng(SEED);
    const isOpen = q => q.type !== 'mcq';
    const parts = MODULES.map(m => {
      const pool = QUESTIONS.filter(q => q.module === m.id && !q.advanced);
      return { m, mcq: interleave(pool.filter(q => !isOpen(q)), rnd), open: interleave(pool.filter(isOpen), rnd) };
    });

    let count = 0;
    for (const p of parts) {
      if (p.m.exam.mcq) count = Math.max(count, Math.ceil(p.mcq.length / p.m.exam.mcq));
      if (p.m.exam.open) count = Math.max(count, Math.ceil(p.open.length / p.m.exam.open));
    }

    // Lấy c câu cho đề thứ k; hết dãy thì quay vòng. Không lặp câu trong cùng một đề.
    const take = (seq, k, c) => {
      const out = [];
      for (let i = 0; out.length < c && i < seq.length; i++) {
        const q = seq[(k * c + i) % seq.length];
        if (!out.includes(q)) out.push(q);
      }
      return out;
    };

    const minutes = MODULES.reduce((s, m) => s + m.minutes, 0);
    const seen = new Set();
    const full = [];
    for (let k = 0; k < count; k++) {
      let qs = [];
      for (const p of parts) qs = qs.concat(take(p.mcq, k, p.m.exam.mcq), take(p.open, k, p.m.exam.open));
      const fresh = qs.filter(q => !seen.has(q.id)).length;
      qs.forEach(q => seen.add(q.id));
      full.push({ id: 'de-' + String(k + 1).padStart(2, '0'), kind: 'set', title: 'Đề ' + String(k + 1).padStart(2, '0'), minutes, ids: qs.map(q => q.id), fresh });
    }

    // Quiz ML/DL: giữ như file gốc, một bộ duy nhất gồm toàn bộ câu theo thứ tự gốc (app hiển thị cả bộ trên một trang).
    const mlqAll = QUESTIONS.filter(q => q.source === 'ml-quiz').sort((x, y) => (x.id < y.id ? -1 : 1));
    const mlq = mlqAll.length ? [{
      id: 'mlq-all', kind: 'mlq', minutes: 0, title: 'Quiz ML/DL (' + mlqAll.length + ' câu)',
      ids: mlqAll.map(q => q.id), fresh: mlqAll.length,
    }] : [];

    const bank = QUESTIONS.filter(q => !q.advanced).length;
    return { full, mlq, bank, covered: seen.size, total: QUESTIONS.length };
  };
})();
