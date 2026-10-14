# Kế hoạch: Web ôn thi năng lực đầu vào AI

## 1. Phân tích yêu cầu

| Yêu cầu | Hiểu là |
|---|---|
| Học kiến thức theo 4 module lớn | Cây nội dung: Module → Chủ đề → Bài học, bám theo cấu trúc Notion |
| Có cả nền tảng | Mỗi module có thêm "Chủ đề 0 – Nền tảng" cho người mới; bài học phải **giải thích**, không chỉ liệt kê |
| Lấy câu hỏi từ AI-TEST | Đưa vào ngân hàng câu hỏi, gắn với từng chủ đề |
| Phân tích Notion thiếu gì | Có ở mục 3, dùng để quyết định phần nội dung phải tự soạn |
| (Từ thông báo chính thức) Câu hỏi random theo module | Có chế độ thi thử bốc ngẫu nhiên theo module, 90 phút |

## 2. Tài nguyên đã có

### Notion "Exam prep" (đã tải đầy đủ → `data/raw/notion_exam_prep.md`)
- Là **dàn ý + câu hỏi gợi mở**, rất ít lời giải thích. Phần lớn chủ đề chỉ có tên (VD: "Bayes' Theorem", "Eigenvalue").
- Có nội dung thật ở: ReLU/Softmax/Cross-entropy, Vanishing/Exploding gradient, bảng Encoding, Build–Test–Monitor, **pipeline làm sạch dữ liệu Pandas** (tốt), Python list/string/OOP/File.
- **Module D gần như trống** (chỉ có tiêu đề).

### AI-TEST (hungbil.github.io/AI-TEST)
- **Bộ E01–E10 (công khai):** 600 câu đã trích → `data/raw/aitest_E01-E10.json`. Có đủ đáp án và giải thích; câu tự luận và code có `modelAnswer` + `rubric`.
  - ⚠️ Thực tế chỉ có **162 câu khác nhau**, vì các đề lặp lại mẫu. Module A có khoảng 12 dạng, chỉ đổi số liệu.

  | Module | Số câu | Câu khác nhau | Loại |
  |---|---|---|---|
  | A | 100 | 82 (12 dạng) | trắc nghiệm |
  | B | 220 | 35 | trắc nghiệm + 20 code |
  | C | 200 | 29 | trắc nghiệm + 20 tự luận |
  | D | 80 | 16 | trắc nghiệm + 10 tự luận |
- **Bộ "Khóa mới 2026" N26 (16 đề, 960 câu, 409 câu khác nhau):** trên web có mật khẩu, nhưng theo `docs/CROWN_SECURITY.md` của tác giả thì *"câu hỏi và đáp án đều công khai"* (MIT). Đề được sinh bằng `scripts/materialize-new-exams.mjs` → `data/raw/aitest-n26/`. Mỗi câu có `skillId` chi tiết (VD `matrix.determinant`, `api.requests`, `numpy.broadcast`), `difficulty`, `hint`.
  - Đề 14–16 mô phỏng **cấu trúc ngày thi đầu** theo phản hồi người thi: A có 3 câu mở (định thức, rank, cập nhật bias); B có 3 câu code (phép toán ma trận, broadcasting, trace Python); C có 3 tự luận (metric bài toán ung thư, RAG vs fine-tune, kiến trúc RAG); D có 1 tự luận (góp ý senior).
  - Tài liệu thiết kế đề (`data/raw/aitest_NEW_EXAM_COVERAGE.md`): **A = 10 xác suất + 10 ma trận, không có giải tích**; **B = Euclid/GCD, `requests`/HTTP, NumPy**; C = confusion matrix, metrics, SVM, backprop 1 nơ-ron, RAG; D = privacy/banking, human review.
- **Cheat sheet** của repo (`data/raw/cheatsheets.json`, `day-one-cheatsheets.json`): bảng tóm tắt theo module, dùng làm tư liệu cho bài học.

### Note của đàn anh
Coding tool, ML, **NLP**, DL, xử lý tình huống, xác suất thống kê, **tổ hợp / chỉnh hợp**, ma trận / vector; Module B: code thuật toán xử lý dữ liệu, lọc dữ liệu với mảng.

## 3. Phân tích: Notion thiếu gì so với đề web và các nguồn khác

| Module | Đề web/đàn anh có, Notion **thiếu** | Notion có, đề web **ít hỏi** |
|---|---|---|
| A | **Tính toán thực hành**: % tăng/giảm, tỉ lệ, trung bình có trọng số (khoảng 30% câu A), giải phương trình bậc 1, median, P(A\|B), nhân ma trận × vector, định thức, rank. **Tổ hợp/chỉnh hợp** (Notion không có; N26 chỉ có 7 câu tổ hợp nhỏ) | Thống kê suy luận (p-value, CI, kiểm định), phân phối, eigen/PCA |
| B | **Đọc code đoán output** (slicing, `dict.get`, `continue`, `split`, comprehension); **NumPy** (shape, axis, broadcasting; Notion chỉ có tiêu đề); Pandas `merge`/`groupby`/`sort_values`/`value_counts`/`astype`; **Requests/HTTP/JSON**; bài code tự viết hàm | OOP, đọc/ghi file, git/logging/unit test |
| C | Product AI: guardrail, baseline không dùng AI, xử lý khi model ít tự tin, human-in-the-loop, A/B test; **khung trả lời tự luận** (thiết kế RAG, phân loại ticket…); câu hỏi Notion **không có đáp án** | CNN/RNN/Transformer, k-fold, Gini |
| D | **Toàn bộ**: logic mệnh đề (modus tollens), ngụy biện tương quan ≠ nhân quả, tình huống đạo đức AI (tuyển dụng, y tế, ngân hàng, giáo dục), dữ liệu nhạy cảm/PII, góp ý senior, escalation | — |
| Chung | **Không có lời giải thích nền tảng** cho người mới; NLP cơ bản (tokenization, TF-IDF, embedding) | |

**Kết luận:** Notion dùng làm **khung mục lục** được, nhưng phần lớn nội dung bài học phải tự soạn. Có N26 thì ngân hàng câu đã phủ tốt NumPy, API, ma trận, xác suất và Module D. Phần còn phải soạn thêm: NLP cơ bản, tổ hợp/chỉnh hợp, Pandas nâng cao, CNN/RNN/Transformer.

## 4. Thiết kế nội dung (cây chủ đề)

Mỗi bài học theo khuôn: **Vì sao cần → Giải thích dễ hiểu (ví dụ đời thường) → Công thức/code → Ví dụ giải từng bước → Bẫy hay gặp → Luyện ngay (câu từ ngân hàng)**.

**Module A – Toán & Định lượng** ✅ *đã làm (16 bài). Chỉ giữ chủ đề có trong blueprint đề; thống kê suy luận, PCA, tối ưu nâng cao, Fermi đã bỏ vì đề không hỏi*
- A0 Nền tảng tính toán: A0.1 phần trăm & tỉ lệ · A0.2 phương trình & trung bình có trọng số
- A1 Thống kê mô tả: A1.1 mean, median, phương sai, độ lệch chuẩn
- A2 Xác suất: A2.1 cơ bản/bù/hợp · A2.2 có điều kiện · A2.3 độc lập · A2.4 toàn phần & Bayes · A2.5 kỳ vọng, Bernoulli, nhị thức
- A3 Tổ hợp & đếm: A3.1 hoán vị/chỉnh hợp/tổ hợp (+10 câu tự soạn) · A3.2 rút bi không hoàn lại
- A4 Vector & ma trận: A4.1 vector & dot product · A4.2 đọc/cộng/chuyển vị/đơn vị · A4.3 nhân ma trận · A4.4 định thức & nghịch đảo · A4.5 Ax=b & rank
- A5 Đạo hàm & gradient: A5.1 đạo hàm, gradient, cập nhật tham số

**Module B – Lập trình & Dữ liệu** ✅ *18 bài*
- B0 Python từ số 0: B0.1 biến, kiểu, toán tử, if · B0.2 vòng lặp & trace code
- B1 Cấu trúc dữ liệu: B1.1 list & slicing · B1.2 dict/set/tuple · B1.3 =, copy, deepcopy
- B2 Chuỗi & hàm: B2.1 xử lý chuỗi · B2.2 hàm, comprehension, lambda
- B3 Thuật toán: B3.1 Big-O · B3.2 Euclid/GCD
- B4 NumPy: B4.1 shape/reshape/slicing · B4.2 axis & boolean indexing · B4.3 broadcasting & @
- B5 Pandas: B5.1 chọn & lọc (loc/iloc) · B5.2 groupby/sort/value_counts/merge
- B6 Làm sạch dữ liệu: B6.1 pipeline làm sạch (từ Notion)
- B7 API: B7.1 requests GET/POST/params/json/token · B7.2 status code, JSON, schema, exception
- B8 Code tự luận: B8.1 khung 4 bước + các mẫu hàm hay ra

**Module C – AI & Sản phẩm AI** ✅ *16 bài*
- C0.1 loại bài toán · C1.1 train/val/test, CV, leakage · C1.2 encoding & scaling
- C2.1 Linear/Logistic, kNN, Tree, RF, k-means · C2.2 SVM
- C3.1 confusion matrix & 4 metric · C3.2 chọn metric, threshold, metric hồi quy
- C4.1 overfitting & regularization · C5.1 nơ-ron, activation, loss · C5.2 backprop
- C6.1 CNN/RNN/Transformer · C7.1 NLP & embedding · C8.1 LLM & prompting · C8.2 RAG vs fine-tune
- C9.1 tư duy sản phẩm (khung 6 ý) · C10.1 build–test–monitor & xử lý sự cố

**Module D – Logic, Đạo đức & Hành vi** ✅ *6 bài*
- D1.1 logic mệnh đề · D1.2 ngụy biện & dãy số · D2.1 nguyên nhân gốc & phản biện
- D3.1 quyền riêng tư (7 nguyên tắc) · D4.1 AI có trách nhiệm (khung 6 nguyên tắc) · D5.1 hành vi & góp ý senior

## 5. Thiết kế web

**Công nghệ:** HTML/CSS/JS thuần, **không cần cài đặt hay build**, chỉ cần mở `index.html` là chạy (dữ liệu lưu dạng `.js` để không bị lỗi khi mở file trực tiếp). Tiến độ học lưu trong `localStorage`. Công thức toán hiển thị bằng KaTeX, code tô màu bằng highlight.js (qua CDN). Giao diện chạy được trên điện thoại, có chế độ sáng/tối.

**Các trang:**
1. **Tổng quan:** % tiến độ từng module, chủ đề yếu nhất, nút "học tiếp".
2. **Học:** sidebar 4 module → chủ đề → bài; cuối mỗi bài có câu luyện tập có chấm ngay; đánh dấu "đã hiểu".
3. **Luyện tập:** chọn module/chủ đề, làm câu ngẫu nhiên, xem giải thích ngay.
4. **Thi thử:** 60 câu bốc ngẫu nhiên theo tỉ lệ A20/B20/C12/D8, 90 phút, có gợi ý thời gian mỗi module, chấm điểm /100, phân tích theo chủ đề.
5. **Sổ câu sai:** tự gom câu làm sai, ôn lại tới khi đúng 2 lần liên tiếp.
6. **Tự luận/Code:** hiện đề → bạn viết → mở đáp án mẫu + rubric để **tự chấm** theo checklist.

**Cấu trúc thư mục:**
```
onthiAI/
  index.html            # app một trang
  assets/app.js, style.css
  data/
    raw/                # dữ liệu gốc đã trích
    questions.js        # ngân hàng đã chuẩn hóa + gắn topic
    lessons/A.js … D.js # nội dung bài học
  tools/                # script trích/gắn tag (Node)
```

**Dữ liệu câu hỏi chuẩn hóa:** `{id, module, topic, type, prompt, options, answer, explanation, modelAnswer, rubric, source: "aitest" | "tự soạn", variants}`. Các câu cùng mẫu chỉ đổi số được gộp thành một câu kèm danh sách `variants`, để luyện không bị lặp.

## 6. Lộ trình làm

| Giai đoạn | Nội dung | Kết quả dùng được ngay |
|---|---|---|
| 1 ✅ | Khung web + ngân hàng 581 câu (E01–E10 + N26 + tự soạn) + Luyện tập/Thi thử/Sổ câu sai + **Module A đầy đủ** | Học + luyện Module A; luyện đề/thi thử cả 4 module |
| 2 ✅ | Module B (18 bài) + Module C (16 bài) | |
| 3 ✅ | Module A làm ở đợt 1 | |
| 4 ✅ | Module D (6 bài) + khung tự luận trong từng bài | |
| 5 ✅ | 173 câu tự soạn (A 10, B 65, C 62, D 36) | Tổng 744 câu, 56 bài |
| 6 ✅ | Nhập 200 câu từ ml_dl_quiz_1.html (bỏ 10 câu trùng), gắn vào bài; 53 câu nâng cao → bài C11.1 (không vào thi thử) | Tổng 944 câu, 57 bài |
| 7 ✅ | Theo phản hồi người thi 12/10: bài B8.2 (code NumPy/Pandas, cosine similarity), bài C8.3 (agent, tool calling, MCP), thêm tình huống triển khai AI và đạo đức AI; chỉnh trọng số trang Kế hoạch | 59 bài, 32 bộ đề |
| 8 ✅ | Theo phản hồi thí sinh K4 (13/10, "Toán chủ yếu XSTK, CTRR"): bài A3.3 Toán rời rạc (bảng chân trị, tập hợp, Dirichlet, đồ thị) + 18 câu | 60 bài |
| 9 ✅ | Rà soát độ phủ theo 4 tên module + mô tả chương trình của ban tổ chức (13/10), không dựa vào bộ đề cộng đồng: thêm 14 bài (thống kê suy luận, tư duy định lượng, OOP, đệ quy/file/JSON, tìm kiếm–sắp xếp, SQL, Git/test, dữ liệu cho AI, LLM engineering/multi-agent, AI business, hạ tầng dữ liệu/MLOps, bài tập logic, đạo đức mở rộng, làm việc nhóm) + 137 câu | 74 bài, 1192 câu, 37 bộ đề |

## 7. Quyết định đã chốt
- **Còn dưới 2 tuần đến ngày thi:** giai đoạn 1 làm trước (khung web + luyện đề). Bài học viết **ngắn gọn, đúng trọng tâm**, theo thứ tự B → C → A → D, ưu tiên những dạng đề hay ra.
- **Bộ N26:** dùng. Tác giả công bố câu hỏi và đáp án là công khai, giấy phép MIT. Ngân hàng câu hỏi gồm khoảng 570 câu khác nhau (162 từ E01–E10 và 409 từ N26).
- **Ưu tiên theo blueprint N26:** A tập trung **xác suất + ma trận** (đạo hàm chỉ cần ở mức gradient/backprop đơn giản); B tập trung **NumPy, `requests`/HTTP/JSON, Euclid/GCD, trace code**; C tập trung **metrics/confusion matrix, RAG, backprop, SVM**.
- **Ghi nguồn:** câu hỏi lấy từ github.com/HungBil/AI-TEST (MIT, © 2026 Henry Don), ghi rõ nguồn trong web.
- Chưa quyết: có gộp các câu trong `ml_dl_quiz_1.html` vào ngân hàng câu hỏi không.

## 8. Nguyên tắc nội dung: không học riêng theo N26
Bộ N26 ("Bộ mô phỏng khóa mới 2026" / Crown của AI-TEST) do tác giả **tự soạn bằng script** từ phản hồi của người thi. Bộ này khớp với cấu trúc đề nhưng **chỉ phủ một phần nội dung**. Đề thật random theo module, nên mỗi nguồn chỉ thấy được một phần ngân hàng câu.

| Có trong Notion / lời đàn anh | N26 | E01–E10 | Cách xử lý |
|---|---|---|---|
| Pandas (`loc`/`iloc`, làm sạch chuỗi) | 0 | 9 | Bài học B6–B7 + câu tự soạn |
| copy / deepcopy | 0 | 0 | Bài B1 + câu tự soạn |
| kNN, Decision Tree, Random Forest | 0 | 0 | Bài C2 + câu tự soạn |
| Softmax/ReLU, CNN/RNN/Transformer | ~1 | 0 | Bài C5–C6 + câu tự soạn |
| NLP, embedding | 4 | 3 | Bài C7 + câu tự soạn |
| Tổ hợp/chỉnh hợp | 4 | 0 | Bài A3.1 + 10 câu tự soạn ✅ |

**Quy tắc:**
- Mỗi module phủ **hợp của mọi nguồn**: N26, E01–E10, Notion, ghi chú đàn anh, thông báo chính thức.
- Dạng đề nào ngân hàng có dưới khoảng 5 câu thì soạn thêm câu, ghi `source: 'tu-soan'`.
- Câu tự soạn phải có giải thích, mức khó tương đương đề luyện (áp dụng cơ bản, tính được bằng giấy nháp).
