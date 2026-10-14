// Câu hỏi tự soạn để lấp chỗ trống của ngân hàng AI-TEST (source: 'tu-soan').
window.QUESTIONS = window.QUESTIONS || [];
window.QUESTIONS.push(
  // ---- A3.1 Tổ hợp, chỉnh hợp, hoán vị ----
  { id: 'TS-A-COMB-01', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Có bao nhiêu cách xếp 5 người ngồi vào 5 ghế xếp thành một hàng ngang?',
    options: [{ key: 'A', text: '25' }, { key: 'B', text: '60' }, { key: 'C', text: '120' }, { key: 'D', text: '3125' }],
    answer: 'C', explanation: 'Hoán vị 5 phần tử: 5! = 5×4×3×2×1 = 120.' },
  { id: 'TS-A-COMB-02', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Từ 7 bạn, chọn 1 lớp trưởng và 1 lớp phó (hai vai trò khác nhau). Số cách chọn là:',
    options: [{ key: 'A', text: '21' }, { key: 'B', text: '42' }, { key: 'C', text: '49' }, { key: 'D', text: '14' }],
    answer: 'B', explanation: 'Có thứ tự (đổi vai trò là cách khác) → chỉnh hợp A(7,2) = 7×6 = 42. Đáp án 21 là tổ hợp, sai vì bỏ qua thứ tự.' },
  { id: 'TS-A-COMB-03', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Từ 7 người, chọn 3 người đi họp (không phân biệt vai trò). Số cách chọn là:',
    options: [{ key: 'A', text: '210' }, { key: 'B', text: '21' }, { key: 'C', text: '35' }, { key: 'D', text: '343' }],
    answer: 'C', explanation: 'Không thứ tự → tổ hợp C(7,3) = (7×6×5)/(3×2×1) = 35. 210 là chỉnh hợp A(7,3).' },
  { id: 'TS-A-COMB-04', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Mã PIN gồm 3 chữ số (mỗi chữ số từ 0 đến 9, được phép lặp lại). Có bao nhiêu mã PIN?',
    options: [{ key: 'A', text: '1000' }, { key: 'B', text: '720' }, { key: 'C', text: '120' }, { key: 'D', text: '30' }],
    answer: 'A', explanation: 'Quy tắc nhân, mỗi vị trí có 10 lựa chọn: 10×10×10 = 1000.' },
  { id: 'TS-A-COMB-05', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Mã PIN gồm 3 chữ số đôi một khác nhau (mỗi chữ số từ 0 đến 9). Có bao nhiêu mã PIN?',
    options: [{ key: 'A', text: '1000' }, { key: 'B', text: '120' }, { key: 'C', text: '504' }, { key: 'D', text: '720' }],
    answer: 'D', explanation: 'Không lặp và có thứ tự: 10×9×8 = 720 = A(10,3). 120 là C(10,3), sai vì mã 123 khác mã 321.' },
  { id: 'TS-A-COMB-06', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Một nhóm có 4 nam và 3 nữ. Có bao nhiêu cách chọn 2 người gồm đúng 1 nam và 1 nữ?',
    options: [{ key: 'A', text: '12' }, { key: 'B', text: '21' }, { key: 'C', text: '7' }, { key: 'D', text: '24' }],
    answer: 'A', explanation: 'Chọn 1 nam (4 cách) rồi 1 nữ (3 cách): 4×3 = 12. 21 = C(7,2) là chọn 2 người bất kỳ.' },
  { id: 'TS-A-COMB-07', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Chọn ngẫu nhiên 2 người từ một nhóm 4 nam và 2 nữ. Xác suất chọn được 2 nữ là:',
    options: [{ key: 'A', text: '1/3' }, { key: 'B', text: '1/15' }, { key: 'C', text: '2/15' }, { key: 'D', text: '1/6' }],
    answer: 'B', explanation: 'P = C(2,2)/C(6,2) = 1/15.' },
  { id: 'TS-A-COMB-08', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Biết C(n, 2) = 10. Giá trị của n là:',
    options: [{ key: 'A', text: '4' }, { key: 'B', text: '10' }, { key: 'C', text: '20' }, { key: 'D', text: '5' }],
    answer: 'D', explanation: 'C(n,2) = n(n−1)/2 = 10 → n(n−1) = 20 → n = 5 (5×4 = 20).' },
  { id: 'TS-A-COMB-09', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Một quán có 5 món tráng miệng. Khách chọn 2 món khác nhau cho một combo (thứ tự không quan trọng). Số combo khác nhau là:',
    options: [{ key: 'A', text: '20' }, { key: 'B', text: '10' }, { key: 'C', text: '25' }, { key: 'D', text: '7' }],
    answer: 'B', explanation: 'Tổ hợp C(5,2) = (5×4)/2 = 10.' },
  { id: 'TS-A-COMB-10', module: 'A', skill: 'tu-soan.counting', type: 'mcq', points: 1, source: 'tu-soan',
    prompt: 'Một dataset có 4 đặc trưng (feature). Muốn thử mọi cặp 2 đặc trưng khác nhau để vẽ biểu đồ tương quan. Cần vẽ bao nhiêu biểu đồ?',
    options: [{ key: 'A', text: '6' }, { key: 'B', text: '8' }, { key: 'C', text: '12' }, { key: 'D', text: '16' }],
    answer: 'A', explanation: 'Cặp (x1, x2) và (x2, x1) là một biểu đồ → không thứ tự → C(4,2) = 6.' },
);

// ---------------------------------------------------------------------------
// Trợ giúp soạn câu: [prompt, [4 lựa chọn], đáp án 'A'..'D', giải thích]
// Trong chuỗi: ~~~ thay cho ``` (khối code), §x§ thay cho `x` (code inline).
(function () {
  const fix = s => String(s).replace(/~~~/g, '```').replace(/§([^§\n]+)§/g, '`$1`');
  // Xáo vị trí lựa chọn cố định theo id (khi soạn hay vô tình dồn đáp án đúng vào một ô).
  function order(id) {
    let h = 2166136261;
    for (let i = 0; i < id.length; i++) { h ^= id.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    const idx = [0, 1, 2, 3];
    for (let i = 3; i > 0; i--) { h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0; const j = h % (i + 1); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return idx;
  }
  // Câu tự luận / code tự soạn: [prompt, đáp án mẫu, [các ý rubric], gợi ý?]. type = 'code' | 'essay'.
  window.addOpen = function (module, skill, type, points, items) {
    items.forEach((it, i) => {
      const q = { id: 'TS-' + skill + '-' + (i + 1), module, skill, type, points, source: 'tu-soan', prompt: fix(it[0]), modelAnswer: fix(it[1]), rubric: it[2].map(fix) };
      if (it[3]) q.hint = fix(it[3]);
      window.QUESTIONS.push(q);
    });
  };

  window.addTS = function (module, skill, items) {
    items.forEach((it, i) => {
      const id = 'TS-' + skill + '-' + (i + 1);
      const ord = order(id);
      const correct = 'ABCD'.indexOf(it[2]);
      window.QUESTIONS.push({
        id, module, skill, type: 'mcq', points: 1, source: 'tu-soan',
        prompt: fix(it[0]),
        options: ord.map((src, k) => ({ key: 'ABCD'[k], text: fix(it[1][src]) })),
        answer: 'ABCD'[ord.indexOf(correct)], explanation: fix(it[3]),
      });
    });
  };
})();
