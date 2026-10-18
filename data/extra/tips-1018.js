/* Bộ đề luyện mẹo làm bài (bài CM.1), thêm 18/10 theo yêu cầu người dùng.
   Mỗi câu được thiết kế để giải bằng một mẹo trong data/tips.js; mẹo của từng câu khai báo ở TIP_BY_ID bên dưới.
   Câu có số đã tính lại: recall 40/80 = 0,5; ReLU(−2) + ReLU(3) = 3; 1 − 0,1 × (−2) = 1,2; (2 − 5) × 2 = −6; cos((2,0),(0,3)) = 0. */

addTS('C', 'ts.tips-quiz', [
  // --- Nhận dạng loại bài toán ---
  [`Ngân hàng muốn dự đoán một khách hàng có trả nợ đúng hạn hay không (có/không) dựa trên lịch sử đã biết kết quả. Đây là bài toán:`, ['Phân loại', 'Hồi quy', 'Phân cụm', 'Học tăng cường'], 'A', 'Có nhãn, và nhãn là hai giá trị có/không nên là phân loại nhị phân.'],
  [`Dự đoán số lượt truy cập website vào ngày mai là bài toán:`, ['Phân loại', 'Hồi quy', 'Phân cụm', 'Giảm chiều'], 'B', 'Đáp án là một con số nên là hồi quy (cụ thể là dự báo chuỗi thời gian).'],
  [`Một robot hút bụi tự học cách đi trong nhà: đi đúng thì được cộng điểm, đâm vào tường thì bị trừ điểm. Đây là:`, ['Học có giám sát', 'Phân cụm', 'Học tăng cường', 'Hồi quy'], 'C', 'Học từ phần thưởng và hình phạt khi tương tác với môi trường là học tăng cường.'],
  // --- Overfitting / underfitting ---
  [`Một model đạt độ chính xác 99% trên tập train nhưng chỉ 70% trên tập test. Model đang gặp vấn đề gì?`, ['Underfitting', 'Overfitting', 'Dữ liệu quá ít cột', 'Learning rate quá nhỏ'], 'B', 'Chênh lệch lớn giữa train và test là dấu hiệu học vẹt dữ liệu train.'],
  [`Model đạt 62% trên train và 60% trên test, cả hai đều thấp. Hướng xử lý hợp lý là:`, ['Thêm dropout thật mạnh', 'Dùng model phức tạp hơn hoặc thêm đặc trưng', 'Giảm dữ liệu train', 'Dừng huấn luyện sớm hơn'], 'B', 'Kém ngay trên train là underfitting: model quá đơn giản. Dropout và dừng sớm là cách chữa overfitting, sẽ làm tệ hơn.'],
  [`Cách nào giúp giảm overfitting?`, ['Tăng số epoch lên thật nhiều', 'Thêm nhiều lớp ẩn', 'Thêm dữ liệu huấn luyện và dùng regularization', 'Bỏ tập validation'], 'C', 'Ba lựa chọn còn lại đều làm model học vẹt nhiều hơn hoặc mất công cụ phát hiện overfitting.'],
  // --- L1 / L2 ---
  [`Muốn model tự loại bỏ những đặc trưng không quan trọng (đưa trọng số của chúng về đúng 0), nên dùng:`, ['L1 regularization', 'L2 regularization', 'Tăng learning rate', 'One-hot encoding'], 'A', 'L1 tạo nghiệm thưa, nhiều trọng số bằng 0. L2 chỉ làm trọng số nhỏ đi.'],
  // --- Precision / recall ---
  [`Hệ thống sàng lọc ung thư từ ảnh chụp. Bỏ sót một người bệnh là hậu quả nghiêm trọng nhất. Nên ưu tiên metric nào?`, ['Precision', 'Recall', 'Accuracy', 'Tốc độ suy luận'], 'B', 'Bỏ sót là FN; recall = TP/(TP+FN) đo khả năng không bỏ sót.'],
  [`Hệ thống tự động khóa tài khoản nghi gian lận. Khóa nhầm khách hàng thật làm mất khách. Nên ưu tiên metric nào?`, ['Recall', 'Precision', 'Số lượng tài khoản bị khóa', 'Accuracy trên tập train'], 'B', 'Khóa nhầm là FP; precision = TP/(TP+FP) đo tỉ lệ khóa đúng trong số tài khoản bị khóa.'],
  [`Model có TP = 40, FP = 10, FN = 40. Recall bằng:`, ['0,8', '0,5', '0,4', '0,2'], 'B', 'Recall = 40/(40 + 40) = 0,5. Precision mới là 40/(40 + 10) = 0,8.'],
  // --- Lệch lớp ---
  [`Có 1000 giao dịch, trong đó 10 giao dịch gian lận. Một model đoán TẤT CẢ là bình thường và đạt accuracy 99%. Nhận xét đúng là:`, ['Model rất tốt vì accuracy 99%', 'Model vô dụng: recall cho lớp gian lận bằng 0', 'Cần tăng accuracy lên 100%', 'Dữ liệu không có vấn đề gì'], 'B', 'Model không bắt được giao dịch gian lận nào. Với dữ liệu lệch lớp phải nhìn precision và recall của lớp hiếm.'],
  // --- Ngưỡng ---
  [`Hạ ngưỡng quyết định của model phát hiện spam từ 0,5 xuống 0,3 thì thường:`, ['Recall tăng, precision giảm', 'Precision tăng, recall giảm', 'Cả hai cùng tăng', 'Không thay đổi gì'], 'A', 'Ngưỡng thấp hơn thì nhiều email bị báo là spam hơn: bắt được nhiều spam hơn nhưng chặn nhầm cũng nhiều hơn.'],
  // --- Hàm kích hoạt ---
  [`Mạng phân loại ảnh vào 1 trong 10 lớp. Lớp đầu ra nên dùng hàm nào?`, ['ReLU', 'Sigmoid', 'Softmax', 'Không cần hàm kích hoạt'], 'C', 'Softmax cho 10 xác suất có tổng bằng 1. Sigmoid hợp với bài 2 lớp; ReLU dùng cho lớp ẩn.'],
  [`ReLU(−2) + ReLU(3) bằng:`, ['1', '3', '5', '−2'], 'B', 'ReLU(−2) = 0 và ReLU(3) = 3, nên tổng là 3.'],
  // --- Gradient descent ---
  [`Cho w = 1,0; learning rate η = 0,1; gradient = −2. Sau một bước gradient descent, w mới bằng:`, ['0,8', '1,2', '−1,0', '3,0'], 'B', 'w mới = 1,0 − 0,1 × (−2) = 1,0 + 0,2 = 1,2.'],
  [`Nơ-ron ŷ = wx với loss L = ½(ŷ − y)². Cho x = 2, w = 1, y = 5. Gradient dL/dw bằng:`, ['−6', '−3', '6', '3'], 'A', 'ŷ = 1 × 2 = 2; dL/dw = (2 − 5) × 2 = −6.'],
  // --- Learning rate ---
  [`Khi huấn luyện, loss dao động mạnh và có xu hướng tăng dần. Nên điều chỉnh gì trước tiên?`, ['Giảm learning rate', 'Tăng learning rate', 'Tăng số lớp', 'Bỏ hàm kích hoạt'], 'A', 'Bước nhảy quá lớn làm vượt qua điểm cực tiểu, nên giảm learning rate.'],
  // --- Vanishing / exploding ---
  [`Đang huấn luyện thì loss đột ngột thành NaN vì gradient quá lớn. Kỹ thuật phù hợp là:`, ['Gradient clipping', 'Thêm stopword', 'Tăng batch size lên gấp đôi', 'One-hot encoding'], 'A', 'Đây là exploding gradient; clipping cắt gradient về một ngưỡng tối đa.'],
  [`Mạng 50 lớp dùng sigmoid, các lớp đầu gần như không học được. Hướng khắc phục hợp lý là:`, ['Dùng ReLU hoặc kiến trúc có kết nối tắt như ResNet', 'Tăng temperature', 'Dùng sigmoid cho cả lớp đầu ra', 'Xóa tập validation'], 'A', 'Đây là vanishing gradient: đạo hàm sigmoid nhỏ nên tích qua nhiều lớp gần bằng 0.'],
  // --- Kiến trúc ---
  [`Bệnh viện muốn tự động phát hiện bất thường trên ảnh X-quang. Kiến trúc mạng phù hợp nhất là:`, ['CNN', 'RNN', 'k-means', 'Hồi quy tuyến tính'], 'A', 'CNN dùng bộ lọc trượt trên ảnh để bắt các mẫu cục bộ như cạnh, hình khối.'],
  [`Lý do chính khiến Transformer thay thế RNN trong xử lý ngôn ngữ là:`, ['Self-attention cho mỗi từ nhìn mọi từ khác và xử lý song song cả câu', 'Transformer không cần dữ liệu huấn luyện', 'Transformer chỉ xử lý được ảnh', 'RNN không chạy được trên GPU'], 'A', 'RNN phải đọc tuần tự từng từ và khó nhớ thông tin ở xa.'],
  // --- RAG / fine-tune ---
  [`Chatbot trả lời về chính sách nội bộ, chính sách thay đổi hàng tuần và câu trả lời phải ghi nguồn. Nên dùng:`, ['RAG', 'Fine-tune lại model mỗi tuần', 'Tăng temperature', 'Huấn luyện model từ đầu'], 'A', 'RAG chỉ cần cập nhật kho tài liệu, không phải huấn luyện lại, và trích được nguồn.'],
  [`Công ty có 5.000 ví dụ mẫu và muốn chatbot luôn trả lời đúng định dạng và giọng văn riêng của mình. Cách phù hợp nhất là:`, ['RAG', 'Fine-tune', 'Tăng context window', 'Dùng vector database lớn hơn'], 'B', 'Đổi phong cách và định dạng là đổi hành vi của model, việc của fine-tune. RAG đưa thêm kiến thức chứ không đổi giọng văn.'],
  [`Thứ tự hợp lý để cải thiện một ứng dụng LLM là:`, ['Fine-tune → RAG → sửa prompt', 'Sửa prompt → RAG → fine-tune', 'RAG → fine-tune → sửa prompt', 'Luôn fine-tune ngay từ đầu'], 'B', 'Đi từ cách rẻ và nhanh tới cách đắt và chậm.'],
  // --- Hallucination ---
  [`Cách nào giúp giảm hallucination hiệu quả nhất trong chatbot doanh nghiệp?`, ['Tăng temperature lên cao', 'Dùng model nhỏ hơn', 'Dùng RAG, yêu cầu trích nguồn và cho phép trả lời "không có trong tài liệu"', 'Viết prompt thật dài'], 'C', 'Bắt mô hình bám tài liệu và được phép từ chối là biện pháp cơ bản nhất.'],
  // --- Embedding / cosine ---
  [`Embedding của hai câu có cosine similarity bằng 0,97. Điều này cho thấy:`, ['Hai câu có nghĩa rất gần nhau', 'Hai câu dài bằng nhau', 'Hai câu không liên quan', 'Một trong hai câu bị lỗi'], 'A', 'Cosine gần 1 nghĩa là hai vector gần cùng hướng, tức hai câu gần nghĩa.'],
  [`Cosine similarity giữa vector (2, 0) và vector (0, 3) bằng:`, ['1', '0', '−1', '6'], 'B', 'Tích vô hướng 2 × 0 + 0 × 3 = 0, nên cosine bằng 0: hai vector vuông góc.'],
  // --- Loại lựa chọn lạc đề ---
  [`Chatbot nội bộ vô tình hiển thị bảng lương của nhân viên khác cho người không có quyền xem. Cách khắc phục đúng là:`, ['Tăng số epoch huấn luyện', 'Giảm batch size', 'Kiểm tra quyền ở server và chỉ tìm trong tài liệu người dùng được phép xem', 'Dùng data augmentation'], 'C', 'Đây là lỗi phân quyền, phải sửa ở tầng dữ liệu và server. Ba lựa chọn còn lại là kỹ thuật huấn luyện, không liên quan.'],
  [`Người dùng phàn nàn chatbot trả lời quá chậm. Hướng xử lý hợp lý là:`, ['Dùng model nhỏ hơn cho câu đơn giản và lưu sẵn câu trả lời cho câu hỏi lặp lại', 'Thêm dropout', 'Đổi sang one-hot encoding', 'Tăng recall'], 'A', 'Vấn đề là độ trễ. Dropout, one-hot, recall thuộc chuyện huấn luyện và đánh giá, không giải quyết tốc độ.'],
  // --- Phương án an toàn ---
  [`Phát hiện chatbot đã trả lời sai chính sách hoàn tiền cho nhiều khách. Việc nên làm đầu tiên là:`, ['Giữ nguyên và chờ xem có ai khiếu nại không', 'Tạm dừng hoặc giới hạn tính năng, giữ log để điều tra, rồi sửa và thông báo cho khách bị ảnh hưởng', 'Xóa log để tránh rắc rối', 'Tắt giám sát cho đỡ cảnh báo'], 'B', 'Ngăn thiệt hại lan rộng, giữ bằng chứng, rồi khắc phục.'],
  [`Nhóm muốn thử nhanh chatbot bằng dữ liệu khách hàng. Cách làm phù hợp là:`, ['Sao chép toàn bộ dữ liệu thật gồm tên và số tài khoản', 'Dùng dữ liệu tổng hợp hoặc đã khử định danh, chỉ giữ trường cần thiết', 'Gửi nguyên dữ liệu thô cho dịch vụ AI bên ngoài', 'Ẩn các cột nhạy cảm bằng giao diện'], 'B', 'Tối thiểu hóa dữ liệu và bảo vệ thông tin cá nhân. Ẩn bằng giao diện không bảo vệ được dữ liệu thật.'],
  // --- Chữ tuyệt đối ---
  [`Phát biểu nào về model lớn (nhiều tham số) là ĐÚNG?`, ['Model lớn luôn tốt hơn model nhỏ ở mọi mặt', 'Model lớn không bao giờ bịa thông tin', 'Model lớn thường mạnh hơn nhưng tốn chi phí và chậm hơn', 'Model lớn thay thế hoàn toàn con người'], 'C', 'Ba lựa chọn còn lại dùng chữ tuyệt đối (luôn, không bao giờ, hoàn toàn) và đều sai.'],
  [`Phát biểu nào về RAG là ĐÚNG?`, ['RAG loại bỏ hoàn toàn hallucination', 'RAG giảm hallucination nhưng vẫn cần đánh giá và kiểm chứng', 'Dùng RAG thì không bao giờ cần đánh giá', 'RAG luôn tốt hơn fine-tune trong mọi trường hợp'], 'B', 'RAG giúp bám nguồn nhưng bước tìm kiếm vẫn có thể sai, nên vẫn cần đánh giá.'],
]);

// Mẹo áp dụng cho từng câu của bộ đề (thứ tự trùng với danh sách trên).
Object.assign(window.TIP_BY_ID = window.TIP_BY_ID || {}, Object.fromEntries([
  'problem-type', 'problem-type', 'problem-type',
  'overfit', 'overfit', 'overfit',
  'l1l2',
  'precision-recall', 'precision-recall', 'precision-recall',
  'imbalance', 'threshold',
  'activation', 'activation',
  'gd', 'gd', 'lr',
  'grad-problems', 'grad-problems',
  'arch', 'arch',
  'rag-ft', 'rag-ft', 'rag-ft',
  'hallucination',
  'embedding', 'embedding',
  'offtopic', 'offtopic',
  'safe', 'safe',
  'absolute', 'absolute',
].map((tip, i) => ['TS-ts.tips-quiz-' + (i + 1), [tip]])));
