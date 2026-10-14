// Câu tự soạn Module C — lấp chỗ trống: loại bài toán, encoding/scaling, mô hình cổ điển,
// metric hồi quy, neural network, CNN/RNN/Transformer, NLP, LLM, triển khai.
addTS('C', 'c.problem-type', [
  [`Phân loại email thành "spam" hoặc "không spam" từ dữ liệu đã gắn nhãn là bài toán:`, ['Hồi quy (regression)', 'Phân loại (classification)', 'Phân cụm (clustering)', 'Giảm chiều'], 'B', 'Output là một trong các NHÃN rời rạc → classification, có giám sát vì có nhãn.'],
  [`Dự đoán doanh thu tháng tới (một con số) từ dữ liệu quá khứ là bài toán:`, ['Phân loại', 'Hồi quy (regression)', 'Phân cụm', 'Học tăng cường'], 'B', 'Output là số liên tục → regression.'],
  [`Có 10.000 khách hàng KHÔNG có nhãn, muốn chia thành các nhóm có hành vi giống nhau. Phù hợp nhất là:`, ['Học có giám sát', 'Học không giám sát: phân cụm (VD k-means)', 'Hồi quy tuyến tính', 'Fine-tune LLM'], 'B', 'Không có nhãn → unsupervised; gom nhóm → clustering.'],
  [`Một AI học chơi game bằng cách thử hành động và nhận điểm thưởng/phạt. Đây là:`, ['Học có giám sát', 'Học không giám sát', 'Học tăng cường (reinforcement learning)', 'Phân cụm'], 'C', 'Agent học từ phần thưởng (reward) qua tương tác với môi trường → reinforcement learning.'],
  [`Điểm khác biệt cốt lõi giữa học có giám sát và không giám sát là:`, ['Có giám sát luôn dùng neural network', 'Có giám sát cần dữ liệu có NHÃN (đáp án đúng), không giám sát thì không', 'Không giám sát luôn chính xác hơn', 'Không có khác biệt'], 'B', 'Supervised học ánh xạ input → nhãn; unsupervised tìm cấu trúc trong dữ liệu không nhãn.'],
]);

addTS('C', 'c.features', [
  [`Cột "màu" có giá trị Đỏ/Xanh/Vàng (không có thứ tự). Cách mã hóa phù hợp nhất cho mô hình tuyến tính là:`, ['Label encoding: Đỏ=0, Xanh=1, Vàng=2', 'One-hot encoding: mỗi màu một cột 0/1', 'Bỏ cột', 'Chuẩn hóa min-max'], 'B', 'Label encoding vô tình tạo thứ tự giả (Vàng > Đỏ). One-hot tránh được điều đó với biến không có thứ tự.'],
  [`Cột "size" có S < M < L. Cách mã hóa giữ được thứ tự là:`, ['One-hot', 'Ordinal encoding: S=1, M=2, L=3', 'Frequency encoding', 'Xóa cột'], 'B', 'Ordinal encoding gán số theo thứ tự có ý nghĩa.'],
  [`Chuẩn hóa z-score (standardization) với x = 70, trung bình μ = 50, độ lệch chuẩn σ = 10. Giá trị mới là:`, ['0,7', '2', '20', '-2'], 'B', 'z = (x − μ)/σ = (70 − 50)/10 = 2.'],
  [`Min-max scaling đưa x = 30 về [0, 1] với min = 10, max = 50. Kết quả là:`, ['0,3', '0,5', '0,6', '0,75'], 'B', '(x − min)/(max − min) = (30 − 10)/(50 − 10) = 20/40 = 0,5.'],
  [`Mô hình nào thường KHÔNG cần scale đặc trưng?`, ['kNN', 'Decision Tree / Random Forest', 'SVM', 'Neural network'], 'B', 'Cây chia theo ngưỡng của từng đặc trưng nên không phụ thuộc thang đo. kNN, SVM, NN dựa vào khoảng cách/gradient nên cần scale.'],
  [`Feature engineering là:`, ['Mua thêm GPU', 'Tạo/biến đổi đặc trưng từ dữ liệu thô để mô hình học tốt hơn (VD tuổi = 2026 − năm sinh)', 'Xóa toàn bộ dữ liệu thiếu', 'Chọn learning rate'], 'B', 'Ví dụ: tách ngày thành thứ trong tuần, tính tuổi, tỉ lệ, đếm số lần mua…'],
]);

addTS('C', 'c.models', [
  [`Mô hình hồi quy tuyến tính đã học được y = 2x + 1. Với x = 3, dự đoán là:`, ['6', '7', '5', '9'], 'B', 'y = 2×3 + 1 = 7.'],
  [`Logistic regression thường dùng cho:`, ['Dự đoán giá trị liên tục không giới hạn', 'Phân loại nhị phân, output là xác suất (0–1) nhờ hàm sigmoid', 'Phân cụm', 'Sinh văn bản'], 'B', 'Tên có "regression" nhưng là mô hình PHÂN LOẠI.'],
  [`kNN với k = 3: ba điểm gần nhất có nhãn [Mèo, Chó, Mèo]. Dự đoán là:`, ['Chó', 'Mèo', 'Không xác định', 'Cả hai'], 'B', 'kNN bỏ phiếu đa số trong k láng giềng gần nhất: Mèo 2 phiếu.'],
  [`Vì sao cần scale dữ liệu trước khi dùng kNN?`, ['kNN chạy nhanh hơn', 'kNN dựa trên khoảng cách; đặc trưng có thang đo lớn (VD lương) sẽ lấn át đặc trưng nhỏ (VD tuổi)', 'kNN không chạy được với số âm', 'Không cần'], 'B', 'Khoảng cách Euclid bị chi phối bởi đặc trưng có giá trị lớn.'],
  [`Một nút của Decision Tree có 50% lớp A, 50% lớp B. Gini impurity = 1 − Σp² bằng:`, ['0', '0,25', '0,5', '1'], 'C', '1 − (0,5² + 0,5²) = 1 − 0,5 = 0,5 (lẫn lộn nhất với 2 lớp). Nút thuần một lớp có Gini = 0.'],
  [`Random Forest cải thiện so với một Decision Tree đơn lẻ chủ yếu nhờ:`, ['Dùng một cây rất sâu', 'Kết hợp nhiều cây huấn luyện trên mẫu/đặc trưng ngẫu nhiên khác nhau rồi bỏ phiếu → giảm overfitting', 'Không cần dữ liệu', 'Luôn dễ giải thích hơn'], 'B', 'Ensemble (bagging) nhiều cây giảm phương sai (variance) của một cây.'],
  [`Thuật toán k-means cần người dùng chọn trước:`, ['Nhãn của từng điểm', 'Số cụm k', 'Learning rate của LLM', 'Số lớp ẩn'], 'B', 'k-means là phân cụm không giám sát, cần chọn số cụm k; điểm yếu: nhạy với khởi tạo và outlier.'],
  [`Bài toán cần mô hình DỄ GIẢI THÍCH cho nghiệp vụ, dữ liệu dạng bảng nhỏ. Lựa chọn đầu tiên hợp lý là:`, ['Mạng nơ-ron sâu 50 lớp', 'Logistic regression hoặc cây quyết định nhỏ làm baseline', 'Fine-tune LLM', 'Không cần mô hình'], 'B', 'Bắt đầu từ mô hình đơn giản, dễ giải thích; chỉ dùng mô hình phức tạp khi baseline chưa đạt.'],
]);

addTS('C', 'c.metrics-extra', [
  [`Mô hình hồi quy có sai số (dự đoán − thật) là [2, −2, 4]. MAE bằng:`, ['4/3', '8/3 ≈ 2,67', '2', '√8 ≈ 2,83'], 'B', 'MAE = trung bình |sai số| = (2 + 2 + 4)/3 = 8/3.'],
  [`Cũng với sai số [2, −2, 4], RMSE bằng:`, ['8/3', '√8 ≈ 2,83', '24', '4'], 'B', 'RMSE = √((4 + 4 + 16)/3) = √8 ≈ 2,83. RMSE ≥ MAE vì bình phương phạt nặng sai số lớn.'],
  [`Khi muốn phạt NẶNG các dự đoán sai lớn, nên ưu tiên metric:`, ['MAE', 'RMSE', 'Accuracy', 'Recall'], 'B', 'RMSE bình phương sai số trước khi lấy trung bình nên nhạy với sai số lớn.'],
  [`ROC-AUC = 0,5 có nghĩa là:`, ['Mô hình hoàn hảo', 'Mô hình không tốt hơn đoán ngẫu nhiên', 'Mô hình luôn sai', 'Precision = 50%'], 'B', 'AUC = 1 là hoàn hảo; 0,5 tương đương tung đồng xu.'],
  [`Khi tăng threshold quyết định (VD từ 0,5 lên 0,8), thường xảy ra:`, ['Precision tăng, recall giảm', 'Precision giảm, recall tăng', 'Cả hai luôn tăng', 'Không thay đổi'], 'A', 'Ít dự đoán dương hơn nhưng chắc chắn hơn → FP giảm (precision tăng), FN tăng (recall giảm).'],
]);

addTS('C', 'c.overfit', [
  [`Mô hình đạt 60% trên train và 58% trên validation, cả hai đều thấp. Đây nhiều khả năng là:`, ['Overfitting', 'Underfitting (high bias)', 'Data leakage', 'Mô hình hoàn hảo'], 'B', 'Kém ngay trên train → mô hình quá đơn giản / chưa học đủ.'],
  [`Cách nào KHÔNG giúp giảm overfitting?`, ['Thêm dữ liệu', 'Regularization (L1/L2), dropout', 'Early stopping', 'Tăng độ phức tạp mô hình và train thêm thật nhiều epoch'], 'D', 'Mô hình phức tạp hơn và train lâu hơn thường làm overfitting nặng hơn.'],
  [`Dropout trong neural network là:`, ['Xóa dữ liệu thiếu', 'Tạm tắt ngẫu nhiên một số nơ-ron khi train để mạng không phụ thuộc vào vài nơ-ron', 'Giảm learning rate', 'Bỏ tập test'], 'B', 'Dropout là một kỹ thuật regularization.'],
  [`Early stopping là:`, ['Dừng train khi loss trên validation ngừng giảm (bắt đầu tăng)', 'Dừng train sau epoch đầu tiên', 'Dừng khi train loss = 0', 'Dừng khi hết RAM'], 'A', 'Validation loss bắt đầu tăng trong khi train loss vẫn giảm là dấu hiệu overfitting.'],
  [`L1 regularization khác L2 ở điểm:`, ['L1 có xu hướng đẩy nhiều trọng số về đúng 0 (chọn lọc đặc trưng)', 'L1 làm trọng số lớn hơn', 'L2 xóa đặc trưng', 'Không khác nhau'], 'A', 'L1 (|w|) tạo nghiệm thưa; L2 (w²) làm trọng số nhỏ đều nhưng hiếm khi bằng 0.'],
]);

addTS('C', 'c.nn', [
  [`Một nơ-ron có x = [1, 2], w = [0,5; 1], b = −1, activation ReLU. Output là:`, ['0', '1,5', '2,5', '−1'], 'B', 'z = 0,5×1 + 1×2 − 1 = 1,5; ReLU(1,5) = 1,5.'],
  [`ReLU(−3) bằng:`, ['−3', '0', '3', '1'], 'B', 'ReLU(z) = max(0, z).'],
  [`Hàm sigmoid đưa output về khoảng:`, ['(−1, 1)', '(0, 1)', '[0, +∞)', 'Mọi số thực'], 'B', 'sigmoid(z) = 1/(1 + e^(−z)), dùng cho xác suất nhị phân; sigmoid(0) = 0,5.'],
  [`Output của softmax cho 3 lớp có tính chất:`, ['Mỗi giá trị trong (0, 1) và tổng bằng 1', 'Tổng bằng 0', 'Mỗi giá trị là 0 hoặc 1', 'Có thể âm'], 'A', 'Softmax biến logits thành phân phối xác suất.'],
  [`Softmax của logits [2, 2, 2] là:`, ['[2, 2, 2]', '[1/3, 1/3, 1/3]', '[1, 0, 0]', '[0, 0, 0]'], 'B', 'Logits bằng nhau → xác suất bằng nhau, tổng bằng 1.'],
  [`Vì sao neural network cần hàm kích hoạt phi tuyến (ReLU, sigmoid…)?`, ['Để chạy nhanh hơn', 'Không có nó, nhiều lớp tuyến tính chồng lên vẫn chỉ là một hàm tuyến tính → không học được quan hệ phức tạp', 'Để giảm số tham số', 'Để không cần dữ liệu'], 'B', 'Tính phi tuyến cho phép mạng biểu diễn các ranh giới phức tạp.'],
  [`Nhãn thật là lớp A. Dự đoán nào cho cross-entropy loss THẤP nhất?`, ['P(A) = 0,1', 'P(A) = 0,5', 'P(A) = 0,9', 'Như nhau'], 'C', 'Loss = −log P(lớp đúng). P(A) càng gần 1 thì loss càng gần 0.'],
  [`Một epoch là:`, ['Một lần cập nhật trọng số', 'Một lượt mô hình đi qua TOÀN BỘ tập train', 'Một lớp của mạng', 'Một batch dữ liệu'], 'B', 'Một epoch gồm nhiều batch; mỗi batch là một lần cập nhật.'],
]);

addTS('C', 'c.backprop-extra', [
  [`Vanishing gradient là hiện tượng:`, ['Gradient rất lớn làm loss dao động', 'Gradient nhỏ dần về 0 khi lan truyền ngược qua nhiều lớp → các lớp đầu gần như không học', 'Mất dữ liệu train', 'Model chạy chậm'], 'B', 'Hay gặp với sigmoid/tanh ở mạng sâu và RNN. Khắc phục: ReLU, khởi tạo He, LSTM/GRU, residual.'],
  [`Exploding gradient thường được xử lý bằng:`, ['Tăng learning rate', 'Gradient clipping (giới hạn độ lớn gradient)', 'Bỏ activation', 'Thêm epoch'], 'B', 'Gradient quá lớn làm loss dao động dữ dội; clipping cắt gradient về ngưỡng.'],
  [`Backpropagation dựa trên quy tắc toán học nào?`, ['Định lý Bayes', 'Quy tắc dây chuyền (chain rule) của đạo hàm', 'Định lý Pytago', 'Quy tắc nhân xác suất'], 'B', 'Gradient của loss theo từng trọng số được tính lần ngược từ output về input bằng chain rule.'],
  [`Learning rate quá lớn thường gây:`, ['Loss giảm rất chậm', 'Loss dao động hoặc tăng vọt, không hội tụ', 'Mô hình chắc chắn tốt hơn', 'Không ảnh hưởng'], 'B', 'Bước nhảy quá xa vượt qua điểm cực tiểu.'],
]);

addTS('C', 'c.arch', [
  [`CNN (mạng tích chập) phù hợp nhất với loại dữ liệu nào?`, ['Bảng số liệu nhỏ', 'Ảnh (dữ liệu có cấu trúc không gian)', 'Chuỗi thời gian rất dài', 'Dữ liệu không nhãn'], 'B', 'Bộ lọc tích chập phát hiện mẫu cục bộ (cạnh, góc, kết cấu) và dùng chung trọng số trên toàn ảnh.'],
  [`Phép tích chập (convolution) trong CNN thực chất là:`, ['Trượt một bộ lọc nhỏ trên ảnh, tại mỗi vị trí tính tổng có trọng số để phát hiện mẫu cục bộ', 'Xoay ảnh', 'Nén ảnh JPEG', 'Đổi ảnh màu sang xám'], 'A', 'Mỗi bộ lọc học một kiểu mẫu; pooling giảm kích thước bản đồ đặc trưng.'],
  [`RNN được thiết kế cho dữ liệu:`, ['Ảnh tĩnh', 'Dạng chuỗi (văn bản, chuỗi thời gian) nhờ trạng thái ẩn truyền qua từng bước', 'Bảng không thứ tự', 'Đồ thị'], 'B', 'RNN đọc lần lượt từng phần tử và "nhớ" thông tin trước đó trong hidden state.'],
  [`LSTM/GRU ra đời chủ yếu để khắc phục điểm yếu nào của RNN?`, ['Chạy quá nhanh', 'Khó nhớ phụ thuộc xa do vanishing gradient', 'Không xử lý được số', 'Quá ít tham số'], 'B', 'Cơ chế cổng (gate) giúp giữ thông tin qua nhiều bước.'],
  [`Ưu điểm chính của Transformer so với RNN trong xử lý ngôn ngữ là:`, ['Không cần dữ liệu', 'Self-attention cho mỗi từ "nhìn" trực tiếp mọi từ khác và xử lý song song cả câu', 'Chỉ dùng cho ảnh', 'Không có tham số'], 'B', 'Self-attention nắm quan hệ xa tốt hơn và train song song nhanh hơn RNN. Đây là nền tảng của LLM.'],
  [`Self-attention giúp mô hình học được điều gì?`, ['Mức độ liên quan giữa các từ trong câu, VD "nó" ám chỉ danh từ nào', 'Kích thước file', 'Tốc độ mạng', 'Màu sắc ảnh'], 'A', 'Mỗi token tính trọng số chú ý tới các token khác để tạo biểu diễn theo ngữ cảnh.'],
]);

addTS('C', 'c.nlp', [
  [`Tokenization trong NLP là:`, ['Mã hóa mật khẩu', 'Tách văn bản thành các đơn vị nhỏ (từ, cụm ký tự) để mô hình xử lý', 'Dịch văn bản', 'Xóa văn bản'], 'B', 'VD "Tôi học AI" → ["Tôi", "học", "AI"]. LLM dùng token cỡ một phần của từ.'],
  [`Stopwords (như "và", "là", "của") thường bị loại trong mô hình bag-of-words vì:`, ['Chúng sai chính tả', 'Xuất hiện rất nhiều nhưng mang ít thông tin phân biệt', 'Chúng là số', 'Chúng quá dài'], 'B', 'Bỏ stopwords giảm nhiễu cho các phương pháp đếm từ.'],
  [`Bag-of-words biểu diễn văn bản bằng:`, ['Thứ tự chính xác của từng từ', 'Vector đếm số lần xuất hiện của từng từ (bỏ qua thứ tự)', 'Ảnh của văn bản', 'Độ dài văn bản'], 'B', 'Đơn giản, hiệu quả cho baseline, nhưng mất thông tin thứ tự và ngữ nghĩa.'],
  [`Trong TF-IDF, một từ có trọng số CAO khi:`, ['Xuất hiện trong mọi tài liệu', 'Xuất hiện nhiều trong tài liệu đang xét nhưng hiếm trong toàn bộ kho', 'Là stopword', 'Rất ngắn'], 'B', 'TF (tần suất trong tài liệu) cao × IDF (độ hiếm trong kho) cao → từ đặc trưng cho tài liệu.'],
  [`Hai câu có embedding với cosine similarity ≈ 0,95. Điều này gợi ý:`, ['Hai câu không liên quan', 'Hai câu có nghĩa rất gần nhau', 'Hai câu dài bằng nhau', 'Một câu bị lỗi'], 'B', 'Cosine gần 1 → hai vector cùng hướng → ngữ nghĩa tương tự. Đây là cơ sở của tìm kiếm ngữ nghĩa trong RAG.'],
  [`Phân tích cảm xúc (sentiment analysis) đánh giá review là tích cực/tiêu cực thuộc loại bài toán:`, ['Hồi quy', 'Phân loại văn bản', 'Phân cụm ảnh', 'Học tăng cường'], 'B', 'Input là văn bản, output là nhãn → text classification.'],
  [`Ưu điểm của word embedding (VD word2vec) so với one-hot là:`, ['Vector rất dài toàn số 0', 'Vector dày, ngắn; từ có nghĩa gần nhau thì vector gần nhau', 'Không cần train', 'Giữ đúng chính tả'], 'B', 'One-hot không thể hiện quan hệ nghĩa; embedding thì có, VD king − man + woman ≈ queen.'],
]);

addTS('C', 'c.llm', [
  [`Zero-shot prompting là:`, ['Đưa nhiều ví dụ mẫu trong prompt', 'Yêu cầu mô hình làm nhiệm vụ mà KHÔNG đưa ví dụ mẫu nào', 'Huấn luyện lại mô hình', 'Tắt mô hình'], 'B', 'Few-shot thì có vài ví dụ mẫu trong prompt.'],
  [`Chain-of-thought prompting là:`, ['Yêu cầu mô hình trình bày các bước suy luận trước khi đưa ra đáp án', 'Nối nhiều mô hình', 'Giảm số token', 'Tăng temperature'], 'A', 'Thường cải thiện các bài cần suy luận nhiều bước như toán, logic.'],
  [`Cách nào giúp GIẢM hallucination hiệu quả nhất trong chatbot doanh nghiệp?`, ['Tăng temperature', 'Dùng RAG cung cấp tài liệu nguồn, yêu cầu trích dẫn và cho phép trả lời "không đủ thông tin"', 'Cấm người dùng hỏi', 'Dùng model nhỏ hơn'], 'B', 'Bám nguồn + được phép từ chối + kiểm chứng là các biện pháp cơ bản.'],
  [`Token trong LLM gần đúng nhất là:`, ['Một câu', 'Một đơn vị văn bản cỡ một từ hoặc một phần của từ', 'Một trang tài liệu', 'Một tham số mô hình'], 'B', 'Chi phí và context window của LLM được tính theo số token.'],
]);

addTS('C', 'c.monitoring', [
  [`Data drift khác concept drift ở chỗ:`, ['Data drift: phân phối INPUT thay đổi; concept drift: QUAN HỆ input → output thay đổi', 'Hai khái niệm giống hệt nhau', 'Data drift chỉ xảy ra khi train', 'Concept drift là lỗi phần cứng'], 'A', 'VD data drift: khách hàng trẻ hơn trước; concept drift: cùng hành vi nhưng nay mang ý nghĩa gian lận khác.'],
  [`Phiên bản model mới sau khi deploy cho kết quả kém hơn bản cũ trên traffic thật. Hành động phù hợp nhất là:`, ['Giữ nguyên và chờ', 'Rollback về phiên bản cũ, rồi phân tích nguyên nhân', 'Xóa log', 'Tắt monitoring'], 'B', 'Luôn giữ khả năng rollback và lưu version model để quay lại an toàn.'],
  [`Canary deployment là:`, ['Triển khai cho 100% người dùng ngay', 'Cho một phần nhỏ traffic dùng model mới trước, theo dõi rồi mới mở rộng', 'Chỉ chạy offline', 'Xóa model cũ trước khi test'], 'B', 'Giảm rủi ro khi rollout; nếu lỗi chỉ ảnh hưởng một nhóm nhỏ.'],
  [`Batch prediction phù hợp hơn real-time API khi:`, ['Cần trả lời người dùng trong 200ms', 'Dự đoán định kỳ cho nhiều bản ghi, VD chấm điểm toàn bộ khách hàng mỗi đêm', 'Chatbot hội thoại', 'Phát hiện gian lận khi đang quẹt thẻ'], 'B', 'Không cần phản hồi tức thì → chạy theo lô rẻ và đơn giản hơn.'],
]);

// ---- Luyện các công thức bổ sung cho đủ bộ của từng chủ đề ----
addTS('C', 'ts.c-models', [
  [`Nút cha có 50% lớp A, 50% lớp B (entropy = 1). Một cách chia tạo 2 nút con đều thuần (entropy = 0). Information gain là:`, ['0', '0,5', '1', '2'], 'C', 'IG = H(cha) − trung bình có trọng số H(con) = 1 − 0 = 1.'],
  [`Entropy (log₂) của một nút có 100% mẫu thuộc cùng một lớp là:`, ['1', '0', '0,5', 'Vô cực'], 'B', 'Nút thuần không có bất định → H = 0 (giống Gini = 0).'],
]);
addTS('C', 'ts.c-svm', [
  [`SVM tuyến tính có w = (3, 4). Độ rộng margin 2/‖w‖ bằng:`, ['0,4', '2,5', '5', '0,2'], 'A', '‖w‖ = √(9 + 16) = 5 → 2/5 = 0,4.'],
]);
addTS('C', 'ts.c-metrics', [
  [`Recall = 0,8. Tỉ lệ bỏ sót FNR = FN/(TP + FN) bằng:`, ['0,8', '0,2', '0,25', 'Không đủ dữ kiện'], 'B', 'FNR = 1 − recall = 0,2.'],
  [`Precision = 0,5; recall = 1. F2-score (β = 2, coi trọng recall) bằng:`, ['0,667', '≈ 0,833', '0,75', '1'], 'B', 'F2 = (1 + 4) × 0,5 × 1 / (4 × 0,5 + 1) = 2,5 / 3 ≈ 0,833, cao hơn F1 = 0,667 vì recall cao được ưu tiên.'],
  [`Phân loại 2 lớp: precision lớp A = 0,9, lớp B = 0,5. Macro precision là:`, ['0,9', '0,7', '0,5', '1,4'], 'B', 'Macro = trung bình cộng các lớp: (0,9 + 0,5)/2 = 0,7.'],
  [`Mô hình hồi quy có SS_res = 20, SS_tot = 100. R² bằng:`, ['0,2', '0,8', '5', '80'], 'B', 'R² = 1 − 20/100 = 0,8.'],
]);
addTS('C', 'ts.c-training', [
  [`Tập train có 1000 mẫu, batch size 100, train 5 epoch. Tổng số lần cập nhật trọng số là:`, ['5', '10', '50', '500'], 'C', 'Mỗi epoch 1000/100 = 10 lần cập nhật → 5 epoch = 50 lần.'],
]);
addTS('C', 'ts.c-arch', [
  [`Lớp conv có 16 bộ lọc 3×3, đầu vào 3 kênh. Số tham số (kể cả bias) là:`, ['144', '432', '448', '160'], 'C', '(3 × 3 × 3 + 1) × 16 = 28 × 16 = 448.'],
  [`Max pooling F = 2, stride S = 2 trên đầu vào 28×28 cho đầu ra:`, ['27×27', '14×14', '26×26', '56×56'], 'B', '(28 − 2)/2 + 1 = 14.'],
]);
addTS('C', 'ts.c-nlp', [
  [`Kho có 100 tài liệu, từ "model" xuất hiện trong 10 tài liệu. IDF = log₁₀(N/df) bằng:`, ['10', '1', '0,1', '2'], 'B', 'log₁₀(100/10) = log₁₀ 10 = 1.'],
  [`Một từ xuất hiện trong TẤT CẢ tài liệu của kho. IDF của nó là:`, ['1', '0', 'Rất lớn', 'Bằng số tài liệu'], 'B', 'log(N/N) = log 1 = 0 → từ đó không giúp phân biệt tài liệu.'],
]);
