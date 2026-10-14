# onthiAI — Web ôn thi năng lực đầu vào AI

Web học + luyện đề cho bài thi đầu vào AI (90 phút, 4 module A–D, 100 điểm, câu hỏi random theo module). Người dùng **chưa có nền tảng** toán/AI và thi trong **dưới 2 tuần** (tính từ 2026-10-10). Kế hoạch chi tiết, phân tích nguồn và cây chủ đề: [PLAN.md](PLAN.md).

## Ngôn ngữ & giọng văn
- Giao diện và nội dung bằng **tiếng Việt**. Giữ thuật ngữ gốc tiếng Anh trong ngoặc khi cần, VD "độ chính xác (precision)".
- Bài học viết cho người mới: **vì sao cần → giải thích bằng ví dụ đời thường → công thức/code → ví dụ giải từng bước → bẫy hay gặp → luyện ngay**. Ngắn, đúng trọng tâm đề thi, không viết dàn trải.

## Kỹ thuật
- **Web tĩnh, không build**: HTML/CSS/JS thuần, mở `index.html` trực tiếp (`file://`) là chạy. Không dùng framework hay bundler.
- Vì `fetch()` không chạy trên `file://`, dữ liệu để dạng **`.js`** gán vào biến global (VD `window.QUESTIONS = [...]`), không để `.json`.
- Thư viện ngoài chỉ qua CDN và ghim phiên bản cụ thể: KaTeX (công thức), highlight.js (code). App vẫn phải dùng được khi CDN lỗi.
- Tiến độ, câu sai, lịch sử thi lưu trong `localStorage`; mọi lệnh đọc/ghi đều bọc `try/catch`.
- Thiết kế mobile-first (người dùng hay học trên điện thoại), có chế độ sáng/tối.
- Sidebar mục lục (`#sidebar`, `renderSidebar()` trong app.js): máy tính thì dính bên trái và thu gọn được bằng nút ☰ (`store.sbHidden`); dưới 900px là ngăn kéo (`body.sidebar-open`). Module đang mở lưu ở `store.sbOpen`. `save()` tự vẽ lại sidebar; dùng `save(true)` khi chỉ lưu trạng thái của chính sidebar.
- Script xử lý dữ liệu viết bằng Node (≥ 22) trong `tools/`, không cần cài thêm package.
- Kiểm tra giao diện: Chrome headless (`C:/Program Files/Google/Chrome/Application/chrome.exe`). Chrome headless có độ rộng tối thiểu khoảng 500px, nên muốn kiểm tra bản điện thoại thì đặt viewport qua puppeteer, không dùng `--window-size`.

## Cấu trúc
```
index.html                 # app một trang, router theo hash (#/m/A, #/l/A4.3, #/l/A4.3/practice, #/l/A4.3/practice/all, #/practice, #/exam, #/attempt/<id>, #/mlq, #/plan, #/formulas, #/glossary, #/wrong)
assets/app.js, style.css   # toàn bộ logic + giao diện
assets/exam-sets.js        # dựng bộ đề cố định phủ hết ngân hàng câu + các phần Quiz ML/DL
data/raw/                  # dữ liệu gốc, KHÔNG sửa tay
data/AI-TEST/              # bản clone repo HungBil/AI-TEST (tham khảo)
data/modules.js            # 4 module + chủ đề + cấu hình thi thử (số câu trắc nghiệm/câu mở, số phút)
data/questions.js          # SINH TỰ ĐỘNG: node tools/build-questions.mjs (không sửa tay)
data/questions-extra.js    # câu tự soạn module A + hàm addTS() dùng để soạn câu (phải nạp trước data/extra/)
data/extra/{A,B,C,D}.js    # câu tự soạn lấp chỗ trống từng module (source 'tu-soan')
data/extra/feedback-1012.js # câu + tình huống bổ sung theo phản hồi người thi 12/10 (code NumPy/Pandas, cosine, agent/MCP, triển khai, đạo đức)
data/extra/audit-1013.js   # câu cho 14 bài thêm sau đợt rà soát 13/10 (xem mục "Rà soát độ phủ")
data/lessons/{A,B,C,D}.js  # bài học; mỗi bài có skills[] = các dạng đề luyện ngay sau bài
tools/build-questions.mjs  # data/raw → data/questions.js
tools/e-skill-map.mjs      # gắn tay dạng đề cho câu bộ E01–E10 (B–D)
tools/check.mjs            # soát dữ liệu: ID trùng, đáp án, mọi dạng đề thuộc đúng 1 bài, số câu mỗi bài
tools/glossary-audit.mjs   # soát bảng thuật ngữ + đo độ phủ trên các lựa chọn sai
tools/formula-audit.mjs    # soát các công thức cần cho đề (hiện 119) đều có trong bài học
data/formulas.js           # bảng công thức tổng hợp (trang #/formulas); thêm công thức mới vào bài thì cập nhật cả đây
data/glossary.js           # bảng thuật ngữ: G(tên, 'cách viết 1|cách viết 2', giải thích một câu, mã bài?); soát bằng node tools/glossary-audit.mjs
data/videos.js             # video YouTube tiếng Việt theo từng bài: { 'C8.2': { items: [[tiêu đề, url, ghi chú?]], q: 'từ khóa tìm thêm' } }
data/plan.js               # trang Kế hoạch (#/plan): ngày thi, 20 vùng kiến thức, điểm kỳ vọng mỗi vùng (ước lượng, tổng 100)
ml_dl_quiz_1.html          # quiz cũ của người dùng, giữ nguyên
```

## Nguồn dữ liệu (`data/raw/`)
- `notion_exam_prep.md`: toàn bộ trang Notion "Exam prep". Là **dàn ý**, ít giải thích; dùng làm khung mục lục.
- `aitest_E01-E10.json`: 600 câu (162 câu khác nhau) từ hungbil.github.io/AI-TEST.
- `aitest-n26/new-2026-*.json`: 16 đề "Khóa mới 2026" (960 câu, 409 câu khác nhau, có `skillId`). Repo gốc đã clone ở `data/AI-TEST/` (đọc tham khảo, không sửa). Sinh lại đề: chạy `node scripts/materialize-new-exams.mjs` trong thư mục đó (không cần `npm install`), kết quả nằm ở `data/AI-TEST/src/data/new-exams/`. Đề 14–16 mô phỏng cấu trúc ngày thi đầu.
- `cheatsheets.json`, `day-one-cheatsheets.json`, `aitest_*.md`: cheat sheet và tài liệu thiết kế đề của AI-TEST.
- `ml_dl_quiz_1.json`: 210 câu trích từ `ml_dl_quiz_1.html` của người dùng (source `ml-quiz`, id `MLQ-xxx`). Phân loại trong `tools/mlq-map.mjs`; câu 131–140 trùng 101–110 nên bỏ. Khoảng 53 câu nâng cao gắn `advanced: true` → bài C11.1, **không đưa vào thi thử**. Lựa chọn được xáo cố định khi build (file gốc dồn đáp án vào B/C).
- Giấy phép AI-TEST: MIT © 2026 Henry Don (`aitest_LICENSE.txt`). **Luôn ghi nguồn** trong web. Đây là đề cộng đồng, không phải đề chính thức; không ghi là "đề thật".

## Học → luyện đúng dạng
- Câu hỏi có trường `skill` = dạng đề (N26: `skillId` đã bỏ hậu tố; E01–E10: `e.<tag>` cho module A, `e.<module>.<type>` cho B–D, chưa gắn tay).
- Bài học khai báo `skills: [...]`; app tự lấy câu theo các skill đó để luyện ngay sau bài. Mọi skill phải thuộc đúng một bài.
- Luyện theo bài có hai chế độ: **luyện nhanh** (`#/l/<id>/practice`, 8 câu rải theo dạng) và **làm toàn bộ** (`#/l/<id>/practice/all`, mọi câu của bài, trắc nghiệm xen kẽ các dạng rồi tới câu mở). Người dùng thêm chế độ toàn bộ vì 8 câu ngẫu nhiên đánh giá phiến diện. Chế độ toàn bộ cho dừng giữa chừng (`opts.allowEarly`; kết quả chỉ tính câu đã làm, không được tính đạt bài) và lưu `store.lessons[id].full`. Cả hai chế độ đều có bảng kết quả theo từng dạng và cảnh báo khi còn dạng đúng dưới 50%, kể cả khi tổng điểm đạt.
- Đúng ≥ 80% thì bài được đánh dấu "đã nắm". Câu sai vào sổ câu sai, đúng 2 lần liên tiếp thì rời sổ.
- Sau khi thêm bài hoặc câu: chạy `node tools/build-questions.mjs && node tools/check.mjs`; phải ra "✅ Không có vấn đề". File data mới phải thêm thẻ `<script defer>` vào index.html (check.mjs đọc đúng danh sách đó).
- Soạn câu mới bằng `addTS(module, skill, [[prompt, [4 lựa chọn], 'A'..'D', giải thích], ...])`. Trong chuỗi, `~~~` thay cho ``` và `§x§` thay cho `` `x` ``. Câu tự luận/code dùng `addOpen(module, skill, 'code'|'essay', điểm, [[prompt, đáp án mẫu, [rubric], gợi ý?], ...])`; **đáp án code phải được chạy thử** (Python + NumPy/Pandas) trước khi đưa vào. `addTS` tự xáo vị trí lựa chọn cố định theo id, nên không viết lựa chọn phụ thuộc vị trí ("Tất cả các đáp án trên") và không nhắc chữ cái đáp án trong giải thích. Mỗi skill chỉ gọi `addTS` một lần (id = skill + số thứ tự).
- Mỗi bài có công thức phải có **đủ bộ công thức của chủ đề** (không chỉ phần đề đang hỏi); công thức mới thêm vào cả `data/formulas.js` và `tools/formula-audit.mjs`.
- Bài học không viết dàn ý suông: mỗi bài có giải thích cho người mới, ví dụ giải từng bước, bẫy hay gặp; dạng tự luận có "khung trả lời".
- Công thức hiển thị (`$$…$$`) mỗi cái một dòng, không ghép bằng `\qquad`, vì sẽ tràn ngang trên điện thoại.
- Công thức **trong dòng** viết bằng `\(…\)`, không dùng `$…$` (app chỉ vẽ `$$…$$` và `\(…\)`; viết `$…$` sẽ hiện nguyên dấu `$`).
- Khi người dùng gửi một video và muốn đưa nội dung vào bài: lấy phụ đề để nắm dàn ý, rồi **viết lại bằng lời của bài học** (không chép phụ đề), ghi nguồn dàn ý ở cuối mục, bỏ phần quảng cáo và không lặp lại chi tiết mà phụ đề tự động ghi không rõ. Thêm câu luyện cho phần mới.
- Bài học viết trong `String.raw` template; không dùng chuỗi `${` hay dấu backtick trong nội dung. Dùng `\lt`/`\gt` thay cho `<`/`>` trong công thức.

## Kế hoạch khoanh vùng (`#/plan`, `computePlan()` trong app.js)
- **Mục tiêu của người dùng là tăng điểm tối đa, không phải học hết kiến thức.** Ngày thi 2026-10-18, kế hoạch đến hết 2026-10-16 (`data/plan.js`). Chấp nhận bỏ bài ít hiệu quả.
- Ba yếu tố khoanh vùng khai báo trong `data/plan.js` (đều là ước lượng của người soạn, không phải số chính thức): **trọng số** `points` của 20 vùng (tổng 100), **độ khó** `difficulty` 1–3 (ghi đè từng bài bằng `lessonDifficulty`), **khối lượng** lấy từ số phút của bài học. Mỗi vùng có `how` = cách lấy điểm nhanh nhất; `after` = bài tiên quyết.
- Tính tới **từng bài**: điểm/giờ = trọng số bài × (mức nắm có thể đạt − mức nắm hiện tại) ÷ phút học. Trọng số vùng chia xuống bài theo tổng điểm các câu giống đề (`aitest-*`) của bài; bài viết theo phản hồi người thi mà đề mô phỏng không có câu tương ứng (B8.2, C8.3, A3.3) phải khai báo tỉ trọng riêng trong `PLAN.lessonShare`, nếu không trọng số của bài gần như bằng 0. Độ khó tác động vào thời gian (×0,8 / 1 / 1,3) và trần mức nắm (90% / 80% / 65%).
- **Mức nắm** = (đúng chẩn đoán của vùng + đúng khi luyện bài đó + 0,25) / (tổng + 1); vùng có tự luận trộn 40% điểm tự đánh giá (`store.plan.self`). **Chẩn đoán**: 2–3 câu/vùng (~43 câu), có nút "Chưa học / không biết", `noRecord`.
- **Tiếp thu** theo module = điểm luyện lần đầu (`store.lessons[id].first`, cần ≥ 2 bài; chưa đủ thì suy từ chẩn đoán) → ±0,1 vào trần. Bài luyện ≥ 2 lần mà lần cuối < 60% = "đang kẹt": trừ 0,15 và không bao giờ gắn nhãn Trọng tâm.
- Xếp lịch: lấy bài theo điểm/giờ giảm dần; bài tiên quyết chưa học được kéo vào trước; bài thêm < 0,15 điểm hoặc vùng đã nắm ≥ 75% mà còn < 0,5 điểm thì không xếp. Mỗi ngày trừ 15′ sổ câu sai; thi thử full ngày cuối (thêm một lần giữa kỳ nếu còn ≥ 5 ngày và ≥ 4 giờ/ngày). Trang hiện rõ mỗi vùng "Học: …" / "Bỏ: …".
- Mọi con số điểm trên trang này là ước lượng để so sánh, không trình bày như dự đoán điểm thi.

## Rà soát độ phủ (2026-10-13)
- Người dùng yêu cầu: độ phủ kiến thức phải dựa vào **4 tên module của ban tổ chức** và mô tả chương trình (bảng cấp độ L1–L6; L2→3 "AI & Data Essential", L3→4 "Road to AI Engineer"), **không dựa vào bộ đề cộng đồng hay Notion** vì các nguồn đó có thể thiếu hoặc thừa. Khi thêm bài, soát theo tên module trước, nguồn câu hỏi sau.
- Đợt này thêm 14 bài (tổng 74) cho những phần các nguồn bỏ sót: A1.2 thống kê suy luận, A6.1 tư duy định lượng, B2.3 đệ quy/try-except/file/JSON, B2.4 OOP, B3.3 tìm kiếm/sắp xếp/stack/queue, B6.2 SQL, B9.1 Git/test/debug/logging, C1.3 dữ liệu cho AI (gán nhãn, ảnh/video/3D, chất lượng), C8.4 LLM engineering/multi-agent/no-code, C9.2 AI business & product, C10.2 hạ tầng dữ liệu & MLOps (pipeline, lakehouse, synthetic data), D1.3 suy luận & bài tập logic, D4.2 đạo đức AI mở rộng, D5.2 làm việc nhóm. Bổ sung đoạn vào A5.1 (tích phân), B2.1 (regex), C0.1 (lĩnh vực ứng dụng).
- Các bài này **chưa có bằng chứng từ người thi** là sẽ ra đề, nên trọng số trong `data/plan.js` để thấp (khai báo qua `lessonShare`); nhóm mới `C-data` 3 điểm lấy từ C-metrics, C-mlbasic, C-nn. Không tăng trọng số nếu chưa có phản hồi mới.

## Thuật ngữ ở lựa chọn sai & video theo bài (2026-10-13)
- Người dùng phản ánh: làm sai xong chỉ biết đáp án đúng, **không có thông tin gì về các lựa chọn sai** (nhiều lựa chọn sai dùng thuật ngữ mà bài của câu đó không nhắc, VD câu D3.1 có "epoch", "data augmentation", "batch normalization"). Cách xử lý: `glossOf(q)`/`glossHtml(q)` trong app.js dò `window.GLOSSARY` trên cả 4 lựa chọn và hiện khối "🔎 Thuật ngữ trong các lựa chọn" ngay dưới lời giải, ở cả 4 nơi có đáp án (luyện tập, ví dụ trong bài, xem lại bài thi, Quiz ML/DL). Thuật ngữ ở lựa chọn sai xếp trước, tối đa 7 mục; cụm dài che cụm ngắn nằm trong nó.
- Khi soạn câu mới có thuật ngữ lạ ở lựa chọn sai: thêm mục vào `data/glossary.js` rồi chạy `node tools/glossary-audit.mjs` (`--miss` liệt kê từ tiếng Anh chưa có mục, `--show <id câu>` xem một câu khớp những gì). Tránh cách viết quá chung dễ khớp nhầm ("hạng" dính "xếp hạng", `join` của SQL dính `'-'.join` của Python); thêm `=` ở đầu để phân biệt hoa thường (`=JOIN`, `=GET`). `glossary-audit.mjs` dùng lại đúng thuật toán của `glossOf`, sửa một bên phải sửa cả hai.
- Giới hạn đã biết: bảng thuật ngữ chỉ giải thích được **thuật ngữ**. Lựa chọn sai là con số hoặc câu tiếng Việt thường ("Xóa log", "Ẩn việc thiếu nguồn") thì chưa có lời giải thích riêng "vì sao sai"; muốn có phải viết tay vào `explanation` của từng câu.
- Video: người dùng muốn **video tiếng Việt** cho từng bài. `data/videos.js` có đủ 74 bài; chọn theo tiêu đề (chưa xem nội dung), nên bài nào không tìm được video tiếng Việt sát chủ đề thì để `items: []` và chỉ có link tìm kiếm `q`. Không gán video tiếng Anh, không gán video lệch chủ đề cho đủ số.

## Thi thử, bộ đề cố định & lịch sử
- `assets/exam-sets.js` (`buildExamSets`, dùng chung cho app và `tools/check.mjs`): sinh **bộ đề cố định** bằng hạt giống cố định. Số đề = số tối thiểu để mọi câu không nâng cao xuất hiện ít nhất một lần (hiện 37 đề, do Module C chỉ lấy 9 trắc nghiệm/đề); phần hết câu thì quay vòng. Thêm/bớt câu trong ngân hàng sẽ làm nội dung các đề thay đổi.
- Quiz ML/DL (`#/mlq`, `viewMlq()`): người dùng yêu cầu **giữ như file gốc**: một bộ duy nhất (`mlq-all`) gồm cả 200 câu của ml_dl_quiz_1 trên **một trang**, theo thứ tự gốc, gồm cả câu `advanced`; chọn đáp án là hiện ngay đúng/sai + giải thích và khóa câu đó. Không chạy qua `Quiz`, không có đồng hồ. Bài làm dở tự lưu ở `store.mlqDraft` (`{at, ans: {id: key}, sec}`); "Nộp bài" tạo một dòng lịch sử `kind: 'mlq'` rồi xóa bản nháp. Trang này gắn `app.onclick` (một listener cho 200 câu), `route()` gỡ listener đó khi rời trang.
- Lịch sử: `store.attempts[]` = `{id, kind: 'set'|'mlq'|'module'|'random', setId, title, at, sec, minutes, score, correct, total, byMod, ans: [{q, c?, t?, k?}]}`; tối đa 150 lần. `store.exams` kiểu cũ (chỉ có điểm) được chuyển sang khi chạy lần đầu. Xem lại: `#/attempt/<id>` dựng lại màn hình kết quả qua `Quiz` với `opts.restore`; tự chấm khi xem lại ghi vào đúng lần làm đó.
- Bài thi/luyện chạy trên chính trang mở nó (hash không đổi); link trỏ về đúng hash hiện tại được xử lý bằng một click listener chung gọi `route()`.

## Schema câu hỏi chuẩn hóa
`{id, module: "A"|"B"|"C"|"D", skill, type: "mcq"|"code"|"essay", points, prompt, options?: [{key,text}], answer?, explanation?, modelAnswer?, rubric?, hint?, difficulty?, source: "aitest-e"|"aitest-n26"|"tu-soan", exam?}`
- Prompt hỗ trợ Markdown tối giản: khối ```` ```python ````, `` `inline` ``, `**đậm**`, xuống dòng.
- Câu trùng nguyên văn bị loại khi build. Câu cùng dạng nhưng khác số liệu được giữ riêng (cùng `skill`), để luyện lại vẫn gặp số mới.
- Bài học gắn với chủ đề qua `lesson.topic` (mã chủ đề trong `data/modules.js`, VD `A2`, `B5`).
- Thi thử: mỗi module lấy câu trắc nghiệm rải đều theo dạng đề, cộng thêm số câu mở theo `exam.open`; điểm = tổng điểm đạt / tổng điểm tối đa × 100.

## Trọng tâm ôn (theo blueprint N26 + phản hồi người thi)
- **Phản hồi mới nhất (2026-10-12, `data/raw/feedback_2026-10-12.md`)**, ưu tiên cao hơn blueprint N26 khi mâu thuẫn: 2–3 câu **triển khai AI theo tình huống công ty**, 1–2 câu **tình huống đạo đức AI**, 2–3 câu **code Pandas/NumPy + hàm khoảng cách vector (cosine similarity)**; nên đọc **RAG, embedding, MCP** và Pandas làm sạch dữ liệu mức đơn giản. Người đó khuyên tập trung vào đạo đức và giải pháp triển khai AI.
- Phản hồi 2026-10-13 (thí sinh K4): Toán chủ yếu **XSTK và CTRR** (cấu trúc rời rạc), lập trình cơ bản, AI/ML/CNN/RAG, system design, đạo đức AI; khoảng 10 câu điền/tự luận trên 60 câu. Bài A3.3 bổ sung phần CTRR còn thiếu (bảng chân trị, tập hợp, Dirichlet, đồ thị).
- A: xác suất (Bayes, có điều kiện, không hoàn lại, kỳ vọng) + ma trận (nhân, định thức, nghịch đảo, rank, `Ax=b`).
- B: NumPy (shape/axis/broadcasting/boolean indexing), `requests`/HTTP/JSON, Euclid/GCD, đọc code; Pandas làm sạch dữ liệu.
- C: confusion matrix và metrics, RAG, backprop một nơ-ron, SVM cơ bản, tự luận RAG/fine-tune.
- D: privacy, human review, escalation, góp ý senior.
