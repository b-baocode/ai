/* Mẹo làm bài: hiện dưới lời giải ("💡 Mẹo áp dụng") ngay khi chọn đáp án, ở mọi nơi có đáp án.
   Cấu trúc file (thêm 18/10 theo yêu cầu người dùng):
   1) window.TIPS          định nghĩa từng mẹo: { id: [tiêu đề, nội dung] }. Nội dung dùng Markdown tối giản như đề.
   2) window.TIP_BY_SKILL  dạng đề → các mẹo áp dụng cho MỌI câu thuộc dạng đó.
   3) window.TIP_BY_ID     mã câu → các mẹo riêng cho câu đó (cộng thêm vào mẹo theo dạng).
   Hàm tipHtml(q) trong assets/app.js gộp (2) và (3), bỏ trùng, hiện theo thứ tự khai báo. */

window.TIPS = {
  'problem-type': ['Nhận dạng loại bài toán',
    `Có nhãn → **có giám sát**: đáp án là nhãn → **phân loại**; đáp án là con số → **hồi quy**.
Không có nhãn, muốn gom nhóm → **phân cụm** (k-means).
Thử hành động, nhận thưởng/phạt → **học tăng cường**.`],
  'overfit': ['Overfitting hay underfitting',
    `Train **cao**, test **thấp** → **overfitting** (học vẹt). Chữa: thêm dữ liệu, regularization, dropout, early stopping, model đơn giản hơn.
Train **thấp**, test cũng **thấp** → **underfitting**. Chữa: model phức tạp hơn, thêm đặc trưng, train lâu hơn.`],
  'l1l2': ['L1 khác L2',
    `**L1** đẩy nhiều trọng số về **đúng 0** (tự chọn đặc trưng).
**L2** làm các trọng số **nhỏ đều**, hiếm khi bằng 0.
Cả hai đều là regularization để giảm overfitting.`],
  'precision-recall': ['Precision hay recall',
    `Precision = TP/(TP+FP); recall = TP/(TP+FN); F1 = 2PR/(P+R).
**Báo nhầm đắt** (chặn nhầm email, khóa nhầm tài khoản) → ưu tiên **precision**.
**Bỏ sót đắt** (ung thư, gian lận) → ưu tiên **recall**.`],
  'imbalance': ['Dữ liệu lệch lớp',
    `Một lớp chiếm áp đảo (99% bình thường) → **không tin accuracy**: đoán "bình thường" cho tất cả vẫn được 99%.
Xem precision, recall, F1, PR-AUC của **lớp hiếm**.`],
  'threshold': ['Đổi ngưỡng quyết định',
    `**Nâng ngưỡng** → ít báo dương hơn → **precision tăng, recall giảm**.
**Hạ ngưỡng** → ngược lại. Đổi ngưỡng không cần huấn luyện lại model.`],
  'activation': ['Hàm kích hoạt',
    `**ReLU** = max(0, z): số âm thành 0, dùng cho lớp ẩn.
**Sigmoid** ra khoảng (0, 1): phân loại nhị phân.
**Softmax** ra các xác suất dương có **tổng bằng 1**: phân loại nhiều lớp.`],
  'gd': ['Công thức gradient descent',
    `**w mới = w − η × gradient** (η là learning rate).
Gradient **dương** → w **giảm**; gradient **âm** → trừ số âm là cộng → w **tăng**.
Một nơ-ron ŷ = wx, loss ½(ŷ − y)²: **dL/dw = (ŷ − y) × x**.`],
  'lr': ['Learning rate',
    `**Quá lớn** → loss dao động hoặc tăng vọt, **không hội tụ**.
**Quá nhỏ** → học rất chậm.`],
  'grad-problems': ['Vanishing và exploding gradient',
    `**Vanishing** (gradient nhỏ dần về 0 ở mạng sâu, RNN) → dùng ReLU, LSTM/GRU, ResNet.
**Exploding** (gradient phình to, loss thành NaN) → **gradient clipping**.`],
  'arch': ['Chọn kiến trúc mạng',
    `**CNN** cho **ảnh**. **RNN/LSTM** cho **chuỗi** (văn bản, chuỗi thời gian).
**Transformer** dùng **self-attention**, xử lý song song cả câu, là nền tảng của LLM.`],
  'rag-ft': ['RAG hay fine-tune',
    `**RAG** = tìm tài liệu rồi đưa vào prompt: hợp khi **kiến thức hay thay đổi** và **cần trích nguồn**.
**Fine-tune** = đổi **giọng văn, định dạng, hành vi**: cần nhiều ví dụ và GPU.
Thứ tự thử: **sửa prompt → RAG → fine-tune** (rẻ tới đắt).`],
  'hallucination': ['Giảm hallucination',
    `LLM bịa vì nó sinh chữ "nghe hợp lý nhất", không kiểm chứng sự thật.
Giảm bằng: **RAG + trích nguồn**, cho phép trả lời **"không biết"**, **temperature thấp**, người duyệt câu quan trọng.
Tăng temperature hay đổi sang model nhỏ **không** giúp giảm bịa.`],
  'embedding': ['Embedding và cosine',
    `**Embedding** = biến văn bản/ảnh thành **vector số**; nghĩa gần → vector gần.
**Cosine similarity** đo góc: **gần 1 là cùng nghĩa**, gần 0 là không liên quan. Cosine chỉ xét hướng, không xét độ dài.`],
  'offtopic': ['Loại lựa chọn lạc đề',
    `Lựa chọn thuộc **lĩnh vực khác hẳn** câu hỏi thì loại ngay. Ví dụ câu về bảo mật, sản phẩm hay quy trình mà lựa chọn nói "tăng epoch", "batch size", "mua GPU", "đổi font", "tăng temperature".
Thường loại được 2–3 lựa chọn mà không cần hiểu sâu thuật ngữ.`],
  'safe': ['Chọn phương án an toàn',
    `Câu đạo đức, triển khai, xử lý sự cố: chọn phương án **an toàn, có kiểm soát, có người duyệt, có log, đúng mục đích**.
Loại phương án "nhanh nhưng liều": dùng hết dữ liệu, xóa log, giấu bằng giao diện, dặn LLM bằng prompt thay vì kiểm tra quyền thật, để AI tự quyết hoàn toàn.`],
  'absolute': ['Cẩn thận với chữ tuyệt đối',
    `Lựa chọn có **"luôn", "không bao giờ", "tất cả", "hoàn toàn", "chắc chắn"** thường **sai**, vì trong AI hầu như mọi thứ đều có đánh đổi.
Đáp án đúng hay dùng chữ mềm: "thường", "có thể", "tùy", "đánh đổi".`],
};

window.TIP_BY_SKILL = {
  // ---- bài trọng tâm Module C (áp dụng cho mọi câu của dạng) ----
  'c.problem-type': ['problem-type'],
  'ml.supervised.classification': ['problem-type'],
  'c.overfit': ['overfit'],
  'c.split-cv': ['overfit'],
  'c.metric-choice': ['precision-recall', 'imbalance'],
  'c.metrics-extra': ['threshold'],
  'ts.c-metrics': ['precision-recall'],
  'c.nn': ['activation'],
  'c.backprop-extra': ['grad-problems', 'lr'],
  'ts.c-training': ['gd'],
  'c.arch': ['arch'],
  'c.nlp': ['embedding'],
  'c.llm': ['hallucination'],
  'c.rag': ['rag-ft'],
  'c.rag-essay': ['rag-ft', 'hallucination'],
  'ts.rag-pipeline': ['embedding'],
  'c.product': ['safe'],
  'c.product-essay': ['safe'],
  'c.monitoring': ['safe'],
  'ts.agent': ['safe'],
  'ts.agent-essay': ['safe'],
  'ts.deploy-essay': ['safe'],
};

window.TIP_BY_ID = Object.assign(window.TIP_BY_ID || {}, {
  // ---- CE.1: AI-TEST E01–E10, Module C ----
  'E01-C03': ['offtopic'],
  'E01-C04': ['l1l2', 'offtopic'],
  'E01-C05': ['absolute'],
  'E01-C06': ['absolute'],
  'E01-C07': ['offtopic'],
  'E01-C08': ['absolute'],
  'E01-C09': ['offtopic'],
  'E01-C10': ['offtopic'],
  'E01-C11': ['offtopic'],
  'E01-C12': ['rag-ft'],
  'E01-C13': ['absolute'],
  'E01-C14': ['offtopic'],
  'E01-C16': ['offtopic'],
  'E01-C17': ['offtopic'],
  'E01-C18': ['offtopic'],
  'E03-C18': ['offtopic'],
  'E04-C17': ['offtopic'],
  'E04-C18': ['offtopic'],
  // ---- CT.1: câu tự soạn Module C (bổ sung cho mẹo theo dạng) ----
  'TS-c.overfit-5': ['l1l2'],
  'TS-c.metrics-extra-5': ['precision-recall'],
  'TS-c.llm-3': ['rag-ft'],
  'TS-c.arch-4': ['grad-problems'],
  'TS-ts.llm-eng-2': ['hallucination'],
  'TS-ts.llm-eng-8': ['rag-ft'],
  'TS-ts.llm-eng-9': ['rag-ft'],
  'TS-ts.rag-pipeline-3': ['hallucination'],
  'TS-ts.rag-pipeline-10': ['safe'],
  'TS-ts.rag-pipeline-14': ['embedding'],
  'TS-ts.data-10': ['imbalance'],
  'TS-ts.ai-business-2': ['safe'],
  'TS-ts.infra-11': ['absolute'],
});
