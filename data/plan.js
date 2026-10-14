// Cấu hình trang Kế hoạch (#/plan). MỤC TIÊU: tăng điểm tối đa trong thời gian ngắn, KHÔNG phải học hết kiến thức.
//
// Mỗi vùng kiến thức có 3 yếu tố do người soạn ước lượng (không phải số chính thức của đề):
// - points: TRỌNG SỐ = số điểm (trên 100) vùng đó chiếm trong đề, theo blueprint bộ đề mô phỏng N26
//   (A 20, B 28, C 42, D 10) + phản hồi người thi.
//   Chỉnh 2026-10-12 theo một người vừa thi: 2–3 câu triển khai AI theo tình huống, 1–2 câu đạo đức AI,
//   2–3 câu code Pandas/NumPy + cosine similarity; nên đọc RAG, embedding, MCP → tăng các vùng đó,
//   giảm Euclid, requests/HTTP, metrics. Tổng mỗi module giữ nguyên.
// - difficulty: ĐỘ KHÓ để một người chưa có nền tảng làm được câu hỏi ở mức đề thi:
//     1 = Dễ:  thuộc quy tắc / công thức / khung trả lời là làm được
//     2 = Vừa: phải luyện tay cho quen (tính toán nhiều bước, đọc code)
//     3 = Khó: phải hiểu lập luận nhiều bước, dễ sai dù đã học
//   Bài nào khác độ khó chung của vùng thì khai báo riêng ở lessonDifficulty.
// - how: cách lấy điểm nhanh nhất ở vùng đó.
// KHỐI LƯỢNG không khai báo ở đây: lấy từ số bài và số phút của các bài học trong vùng.
// essay: kỹ năng tự luận/code gắn với vùng (người học tự đánh giá 0–2).
window.PLAN = {
  examDate: '2026-10-18',
  studyEnd: '2026-10-16',
  defaultHours: 4,

  // Bài phải học trước (chỉ khai báo chỗ thật sự cần): bài bên trái cần các bài bên phải.
  after: {
    'A2.2': ['A2.1'], 'A2.3': ['A2.2'], 'A2.4': ['A2.2'], 'A3.2': ['A2.1'],
    'A4.3': ['A4.2'], 'A4.4': ['A4.3'], 'A4.5': ['A4.4'],
    'B0.2': ['B0.1'], 'B1.1': ['B0.2'], 'B1.2': ['B0.2'], 'B1.3': ['B1.1'], 'B2.1': ['B0.2'], 'B2.2': ['B1.1'],
    'B3.2': ['B0.2'], 'B4.2': ['B4.1'], 'B4.3': ['B4.1'], 'B5.2': ['B5.1'], 'B6.1': ['B5.1'], 'B7.2': ['B7.1'], 'B8.1': ['B1.2'],
    'C3.2': ['C3.1'], 'C5.2': ['C5.1'], 'C8.2': ['C8.1'], 'C8.3': ['C8.1'],
    'B8.2': ['B4.1', 'B5.1'],
    'A1.2': ['A1.1'], 'B2.3': ['B0.2'], 'B2.4': ['B0.2'], 'B3.3': ['B1.1'], 'C8.4': ['C8.1'], 'C9.2': ['C9.1'],
  },

  // Tỉ trọng điểm riêng của một bài trong vùng của nó (0–1). Dùng cho các bài viết theo phản hồi người thi
  // mà ngân hàng đề mô phỏng không có câu tương ứng (nếu để tự tính theo số câu giống đề thì bài gần như bằng 0).
  // Phần còn lại của vùng chia cho các bài khác theo lượng câu giống đề.
  lessonShare: {
    'B8.2': 0.65,   // code NumPy/Pandas + cosine similarity: người thi 12/10 nói có 2–3 câu
    'C8.3': 0.15,   // agent, MCP: "nên đọc qua"
    'A3.3': 0.12,
    // Các bài thêm sau đợt rà soát độc lập 13/10 (theo tên module + thông tin chương trình của ban tổ chức):
    'A1.2': 0.2, 'A6.1': 0.25,                 // thống kê suy luận, tư duy định lượng (vế thứ hai của tên Module A)
    'B2.3': 0.08, 'B2.4': 0.08, 'B3.3': 0.08, 'B9.1': 0.06, 'B6.2': 0.2,
    'C8.4': 0.15, 'C9.2': 0.25, 'C1.3': 0.6, 'C10.2': 0.4,   // ban tổ chức nêu đích danh: dữ liệu, LLM engineering, AI business, AI infrastructure
    'D1.3': 0.3, 'D4.2': 0.2, 'D5.2': 0.4,   // toán rời rạc: thí sinh K4 nói Toán chủ yếu XSTK, CTRR
  },

  // Độ khó riêng của từng bài khi khác với độ khó chung của vùng.
  lessonDifficulty: {
    'A2.4': 3,              // Bayes: lập luận ngược, dễ nhầm
    'A4.1': 1, 'A4.2': 1,   // tích vô hướng, cộng/chuyển vị ma trận: máy móc
    'C5.1': 2,              // activation, softmax: chủ yếu ghi nhớ
    'C1.2': 1,              // encoding/scaling: ghi nhớ + 2 công thức
    'B0.1': 1,              // toán tử, kiểu dữ liệu
    'B8.1': 3,              // tự viết hàm Python từ đầu
    'C8.3': 1,              // agent/MCP: mức khái niệm
    'A3.3': 1,
    'A1.2': 2, 'A6.1': 1, 'B2.3': 2, 'B2.4': 2, 'B3.3': 2, 'B6.2': 1, 'B9.1': 1, 'C8.4': 1, 'C9.2': 1, 'D1.3': 2, 'D4.2': 1, 'D5.2': 1,              // toán rời rạc: thuộc công thức là làm được
  },

  groups: [
    { id: 'A-prob', module: 'A', name: 'Xác suất, tổ hợp & toán rời rạc', points: 9, difficulty: 2, lessons: ['A2.1', 'A2.2', 'A2.3', 'A2.4', 'A2.5', 'A3.1', 'A3.2', 'A3.3'],
      how: 'Nhận dạng từ khóa ("biết rằng", "ít nhất một", "không hoàn lại") rồi áp đúng một công thức. Bayes: lập bảng 1000 người.' },
    { id: 'A-matrix', module: 'A', name: 'Vector & ma trận (nhân, định thức, nghịch đảo, rank)', points: 8, difficulty: 2, lessons: ['A4.1', 'A4.2', 'A4.3', 'A4.4', 'A4.5'],
      how: 'Toàn phép tính máy móc trên ma trận 2×2: thuộc "hàng nhân cột", ad − bc, công thức nghịch đảo. Câu Ax = b thì thay đáp án vào.' },
    { id: 'A-basic', module: 'A', name: 'Tính toán nền, thống kê, đạo hàm, tư duy định lượng', points: 3, difficulty: 1, lessons: ['A0.1', 'A0.2', 'A1.1', 'A1.2', 'A5.1', 'A6.1'],
      how: 'Mỗi dạng một công thức ngắn (% thay đổi, trung bình có trọng số, median, quy tắc lũy thừa của đạo hàm).' },

    { id: 'B-numpy', module: 'B', name: 'NumPy: shape, axis, broadcasting', points: 7, difficulty: 2, lessons: ['B4.1', 'B4.2', 'B4.3'],
      how: 'Hầu hết câu chỉ hỏi SHAPE: ghi shape từng biến ra nháp rồi áp 3 quy tắc (axis, số nguyên vs slice, broadcasting).' },
    { id: 'B-api', module: 'B', name: 'requests / HTTP / JSON', points: 4, difficulty: 1, lessons: ['B7.1', 'B7.2'],
      how: 'Thuần ghi nhớ: params vs json, timeout, Bearer header, raise_for_status, .json(), bảng mã 401/403/404/429/5xx.' },
    { id: 'B-euclid', module: 'B', name: 'Thuật toán Euclid (GCD)', points: 3, difficulty: 1, lessons: ['B3.2'],
      how: 'Một thuật toán duy nhất, 4 dòng code. Thuộc "a, b = b, a % b" và lập bảng trace là làm được mọi biến thể.' },
    { id: 'B-python', module: 'B', name: 'Python & kỹ thuật lập trình (đọc code, OOP, thuật toán, Git)', points: 4, difficulty: 2, lessons: ['B0.1', 'B0.2', 'B1.1', 'B1.2', 'B1.3', 'B2.1', 'B2.2', 'B2.3', 'B2.4', 'B3.1', 'B3.3', 'B9.1'],
      how: 'Trace bằng bảng trạng thái từng dòng, không đoán. Nhiều bài nhưng ít điểm: chỉ học bài được xếp vào lịch.' },
    { id: 'B-pandas', module: 'B', name: 'Pandas, SQL & làm sạch dữ liệu', points: 4, difficulty: 2, lessons: ['B5.1', 'B5.2', 'B6.1', 'B6.2'],
      how: 'Thuộc tên lệnh và tác dụng (loc/iloc, fillna, dropna, drop_duplicates, groupby, .str.strip).' },
    { id: 'B-code', module: 'B', name: 'Viết code tự luận: hàm Python, NumPy/Pandas, cosine similarity', points: 6, difficulty: 2, lessons: ['B8.2', 'B8.1'],
      how: 'Người thi kể có 2–3 câu code về mảng/bảng và cosine similarity. Thuộc mẫu cosine_similarity và khung làm sạch Pandas 5 dòng; chấm theo ý nên viết đúng khung là có điểm.',
      essay: 'Tự viết được hàm cosine_similarity và một hàm làm sạch bảng bằng Pandas không cần nhìn mẫu' },

    { id: 'C-metrics', module: 'C', name: 'Confusion matrix & metrics (kèm tự luận)', points: 9, difficulty: 1, lessons: ['C3.1', 'C3.2'],
      how: 'Thuộc 4 công thức + câu "lệch lớp thì accuracy đánh lừa, bỏ sót nguy hiểm → ưu tiên recall". Dùng được cho cả trắc nghiệm lẫn tự luận 8 điểm.',
      essay: 'Từ TP/FP/FN/TN tự tính và giải thích được accuracy, precision, recall, F1 và chọn metric ưu tiên' },
    { id: 'C-rag', module: 'C', name: 'LLM, RAG, agent & MCP (kèm tự luận)', points: 12, difficulty: 1, lessons: ['C8.1', 'C8.2', 'C8.3', 'C8.4'],
      how: 'Thuộc lòng pipeline RAG (offline 4 bước, online 4 bước) và bảng RAG vs fine-tune: viết lại được là lấy gần trọn điểm tự luận.',
      essay: 'Tự viết được các bước của một hệ RAG chatbot nội bộ và lý do chọn RAG thay vì fine-tune' },
    { id: 'C-product', module: 'C', name: 'Triển khai AI theo tình huống, AI business & product (tự luận)', points: 9, difficulty: 1, lessons: ['C9.1', 'C9.2', 'C10.1'],
      how: 'Thuộc khung 6 ý (output → dữ liệu → baseline → metric → rủi ro → triển khai) và khung xử lý sự cố 5 bước.',
      essay: 'Tự viết được phương án cho một tình huống (thiết kế tính năng AI / chatbot trả lời sai)' },
    { id: 'C-mlbasic', module: 'C', name: 'ML cơ bản: loại bài toán, chia dữ liệu, overfitting', points: 3, difficulty: 1, lessons: ['C0.1', 'C1.1', 'C4.1'],
      how: 'Câu hỏi khái niệm: có nhãn hay không, số hay loại; train cao mà validation thấp là overfit; test chỉ dùng một lần.' },
    { id: 'C-models', module: 'C', name: 'Các mô hình: hồi quy, kNN, cây, SVM, encoding/scaling', points: 3, difficulty: 2, lessons: ['C2.1', 'C2.2', 'C1.2'],
      how: 'Nhớ mỗi mô hình một câu "nó làm gì, khi nào dùng"; SVM chỉ cần margin, support vector và dấu của f(x).' },
    { id: 'C-nn', module: 'C', name: 'Neural network & backprop', points: 2, difficulty: 3, lessons: ['C5.1', 'C5.2'],
      how: 'Phần khó nhất. Nếu học: chỉ cần ReLU/sigmoid/softmax dùng ở đâu và phép cập nhật w − η × gradient.' },
    { id: 'C-data', module: 'C', name: 'Dữ liệu cho AI & hạ tầng dữ liệu', points: 3, difficulty: 1, lessons: ['C1.3', 'C10.2'],
      how: 'Chủ yếu là khái niệm và phân biệt: loại dữ liệu, kiểu nhãn, tiêu chí chất lượng; ETL vs ELT, lake vs warehouse vs lakehouse, khi nào dùng dữ liệu tổng hợp.' },
    { id: 'C-arch', module: 'C', name: 'CNN / RNN / Transformer, NLP', points: 1, difficulty: 2, lessons: ['C6.1', 'C7.1'],
      how: 'Ít điểm. Nếu học: CNN cho ảnh, RNN cho chuỗi, Transformer dùng attention.' },

    { id: 'D-privacy', module: 'D', name: 'Quyền riêng tư & bảo vệ dữ liệu', points: 3, difficulty: 1, lessons: ['D3.1'],
      how: 'Luôn chọn đáp án: dùng ít dữ liệu nhất, đúng mục đích, kiểm soát ở server, có log, sự cố thì dừng và giữ bằng chứng.' },
    { id: 'D-responsible', module: 'D', name: 'Đạo đức AI theo tình huống (kèm tự luận)', points: 4, difficulty: 1, lessons: ['D4.1', 'D4.2'],
      how: 'Luôn chọn đáp án có người duyệt cho quyết định rủi ro cao; tự luận viết theo 6 nguyên tắc.' },
    { id: 'D-logic', module: 'D', name: 'Logic, ngụy biện, phân tích nguyên nhân', points: 2, difficulty: 2, lessons: ['D1.1', 'D1.2', 'D1.3', 'D2.1'],
      how: 'Thuộc bảng 2 kiểu suy luận đúng / 2 kiểu sai và cách phủ định "tất cả" ↔ "có ít nhất một".' },
    { id: 'D-behavior', module: 'D', name: 'Hành vi, làm việc nhóm & góp ý senior', points: 1, difficulty: 1, lessons: ['D5.1', 'D5.2'],
      how: 'Chọn đáp án: báo sớm, dựa trên dữ liệu, tôn trọng, có đề xuất. Đọc một lần là đủ.' },
  ],
};
