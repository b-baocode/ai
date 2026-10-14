/* Bảng thuật ngữ dùng chung.
   Sau khi trả lời một câu trắc nghiệm, app dò các thuật ngữ này trong cả 4 lựa chọn và giải thích ngắn
   từng cái, để lựa chọn SAI cũng có thông tin (nhiều lựa chọn sai dùng từ mà bài học của câu đó không nhắc).
   Mỗi dòng: G(tên hiển thị, 'cách viết 1|cách viết 2|...', giải thích một câu, mã bài học liên quan?)
   Cách viết không phân biệt hoa thường, khớp theo nguyên từ; thêm dấu = ở đầu để phân biệt hoa thường (VD '=GET'). Xem trang #/glossary. */
(function () {
  const out = [];
  const G = (t, a, d, l) => out.push({ t, a: a.split('|'), d, l: l || null });

  // ---------- Huấn luyện mô hình & deep learning ----------
  G('Epoch', 'epoch|epochs', 'Một lượt mô hình học qua TOÀN BỘ dữ liệu huấn luyện. Tăng số epoch = cho học thêm nhiều lượt; quá nhiều dễ gây overfitting.', 'C5.2');
  G('Batch size', 'batch size|batch_size|mini-batch', 'Số mẫu dữ liệu mô hình xem trong một lần cập nhật trọng số. Đây là tham số huấn luyện, không liên quan tới quyền truy cập hay chất lượng dữ liệu.', 'C5.2');
  G('Batch normalization', 'batch normalization|batchnorm|batch norm', 'Kỹ thuật chuẩn hóa đầu ra của một lớp trong mạng nơ-ron để huấn luyện ổn định và nhanh hơn. Là kỹ thuật huấn luyện, không phải nguyên tắc bảo mật hay đạo đức.', 'C11.1');
  G('Data augmentation', 'data augmentation|augmentation|tăng cường dữ liệu', 'Tạo thêm dữ liệu huấn luyện bằng cách biến đổi dữ liệu sẵn có (xoay, lật ảnh; thay từ đồng nghĩa) để mô hình bớt overfitting.', 'C4.1');
  G('Learning rate', 'learning rate|learning_rate|tốc độ học', 'Độ lớn mỗi bước cập nhật trọng số. Quá lớn thì loss dao động hoặc phân kỳ; quá nhỏ thì học rất chậm.', 'C5.2');
  G('Dropout', 'dropout', 'Tắt ngẫu nhiên một phần nơ-ron khi huấn luyện để chống overfitting. Khi dự đoán thì không tắt.', 'C4.1');
  G('Early stopping', 'early stopping|dừng sớm', 'Dừng huấn luyện khi lỗi trên tập validation bắt đầu tăng, để tránh overfitting.', 'C4.1');
  G('Regularization', 'regularization|regularisation|l1|l2|chính quy hóa', 'Thêm "hình phạt" cho trọng số lớn để mô hình đơn giản hơn và bớt overfitting. L1 đẩy nhiều trọng số về 0, L2 làm trọng số nhỏ đều.', 'C4.1');
  G('Overfitting (quá khớp)', 'overfitting|overfit|quá khớp', 'Mô hình "học thuộc" dữ liệu huấn luyện: điểm trên tập train cao nhưng trên dữ liệu mới thấp.', 'C4.1');
  G('Underfitting (chưa khớp)', 'underfitting|underfit|chưa khớp', 'Mô hình quá đơn giản: điểm thấp ngay cả trên tập huấn luyện.', 'C4.1');
  G('Bias–variance', 'variance|high bias|high variance|phương sai', 'Bias cao = mô hình quá đơn giản (underfitting). Variance cao = mô hình quá nhạy với dữ liệu train (overfitting). Trong thống kê, variance (phương sai) còn là độ phân tán của dữ liệu.', 'C4.1');
  G('Gradient', 'gradient|gradients', 'Vector đạo hàm của loss theo từng trọng số: cho biết chỉnh trọng số theo hướng nào thì loss giảm.', 'A5.1');
  G('Gradient descent', 'gradient descent|sgd|hạ gradient', 'Thuật toán học: lặp lại việc trừ đi (learning rate × gradient) để loss giảm dần. SGD là bản dùng từng lô dữ liệu nhỏ.', 'C5.2');
  G('Vanishing gradient', 'vanishing gradient|vanishing|tiêu biến gradient', 'Gradient nhỏ dần về 0 khi truyền ngược qua nhiều lớp, làm các lớp đầu gần như không học được. Hay gặp với sigmoid/tanh và RNN.', 'C5.2');
  G('Exploding gradient', 'exploding gradient|exploding|bùng nổ gradient', 'Gradient lớn dần tới mức trọng số nhảy lung tung, loss thành NaN. Cách chữa phổ biến: gradient clipping.', 'C5.2');
  G('Gradient clipping', 'gradient clipping|clipping', 'Cắt gradient về một ngưỡng tối đa để tránh exploding gradient.', 'C5.2');
  G('Backpropagation (lan truyền ngược)', 'backpropagation|backprop|lan truyền ngược', 'Cách tính gradient của loss theo mọi trọng số bằng quy tắc dây chuyền, đi ngược từ đầu ra về đầu vào.', 'C5.2');
  G('Loss (hàm mất mát)', 'loss|train loss|validation loss|hàm mất mát', 'Con số đo mô hình sai bao nhiêu; huấn luyện là tìm trọng số làm loss nhỏ nhất. Chỉ nhìn train loss thì không phát hiện được overfitting.', 'C5.1');
  G('Activation (hàm kích hoạt)', 'activation|hàm kích hoạt', 'Hàm phi tuyến đặt sau mỗi nơ-ron (ReLU, sigmoid, tanh, softmax). Không có nó thì cả mạng chỉ tương đương một phép tuyến tính.', 'C5.1');
  G('ReLU', 'relu', 'Hàm kích hoạt max(0, x): số âm thành 0, số dương giữ nguyên. Phổ biến nhất ở các lớp ẩn.', 'C5.1');
  G('Sigmoid', 'sigmoid', 'Hàm ép mọi số về khoảng (0, 1), dùng cho đầu ra phân loại hai lớp.', 'C5.1');
  G('Tanh', 'tanh', 'Hàm kích hoạt ép mọi số về khoảng (−1, 1).', 'C5.1');
  G('Softmax', 'softmax', 'Biến một dãy số thành các xác suất dương có tổng bằng 1; dùng ở lớp ra của phân loại nhiều lớp.', 'C5.1');
  G('Nơ-ron, lớp, trọng số', 'neuron|neurons|layer|layers|weights|nơ-ron', 'Nơ-ron tính tổng có trọng số của đầu vào rồi qua hàm kích hoạt. Nhiều nơ-ron xếp thành lớp (layer). Trọng số (weights) là các con số mô hình học được.', 'C5.1');
  G('Bias', 'bias|thiên kiến|thiên lệch', 'Có hai nghĩa: (1) trong mạng nơ-ron là hệ số tự do b trong w·x + b; (2) trong đạo đức AI là thiên kiến, tức mô hình đối xử lệch với một nhóm người.', 'D4.1');
  G('GPU / CPU / RAM', 'gpu|cpu|ram', 'Phần cứng: GPU tính song song rất nhanh nên dùng để huấn luyện và chạy mô hình; CPU là bộ xử lý chung; RAM là bộ nhớ tạm. Đổi phần cứng không sửa được lỗi về dữ liệu hay quy trình.');
  G('Training / inference', 'inference|training', 'Training (huấn luyện) là lúc mô hình học trọng số từ dữ liệu. Inference (suy luận) là lúc dùng mô hình đã học để dự đoán.', 'C4.1');
  G('Pre-trained & transfer learning', 'pre-trained|pretrained|transfer learning', 'Pre-trained: mô hình đã được huấn luyện sẵn trên dữ liệu lớn. Transfer learning: lấy mô hình đó rồi học tiếp trên dữ liệu của mình thay vì học từ đầu.', 'C8.2');
  G('Fine-tune', 'fine-tune|fine-tuning|finetune|tinh chỉnh', 'Huấn luyện tiếp một mô hình có sẵn bằng dữ liệu riêng để đổi HÀNH VI/phong cách của nó. Không phù hợp để cập nhật kiến thức thay đổi thường xuyên (việc đó dùng RAG).', 'C8.2');
  G('Hyperparameter', 'hyperparameter|hyperparameters|siêu tham số', 'Giá trị người làm chọn TRƯỚC khi huấn luyện (learning rate, số lớp, k của kNN), khác với trọng số là thứ mô hình tự học.', 'C1.1');
  G('Tham số (parameters)', 'parameters|số tham số', 'Các con số mô hình tự học được (trọng số và bias). Mô hình "7B" có 7 tỉ tham số. Nhiều tham số hơn không tự động tốt hơn.', 'C5.1');
  G('Local minimum', 'local minimum|local minima|cực tiểu địa phương', 'Điểm mà loss thấp hơn xung quanh nhưng chưa phải thấp nhất toàn cục; gradient descent có thể mắc kẹt ở đây.', 'C5.2');
  G('CNN', 'cnn|convolution|convolutional|tích chập', 'Mạng tích chập: dùng các bộ lọc nhỏ trượt trên ảnh để bắt đặc trưng (cạnh, góc, hình). Chuyên cho ảnh.', 'C6.1');
  G('Pooling', 'pooling|max pooling', 'Lớp thu nhỏ bản đồ đặc trưng trong CNN (ví dụ lấy giá trị lớn nhất mỗi ô 2×2) để giảm tính toán.', 'C6.1');
  G('RNN / LSTM', 'rnn|lstm|gru', 'Mạng xử lý dữ liệu dạng chuỗi (văn bản, chuỗi thời gian) bằng cách nhớ trạng thái qua từng bước. LSTM/GRU là bản nhớ được xa hơn.', 'C6.1');
  G('Transformer & attention', 'transformer|transformers|attention|self-attention', 'Kiến trúc đứng sau các LLM: cơ chế attention cho mỗi từ "nhìn" mọi từ khác trong câu cùng lúc, xử lý song song được.', 'C6.1');
  G('Encoder / decoder', 'encoder|decoder', 'Encoder đọc và nén đầu vào thành biểu diễn; decoder sinh đầu ra từ biểu diễn đó. BERT chỉ có encoder (để hiểu), GPT chỉ có decoder (để sinh).', 'C6.1');
  G('BERT / GPT', 'bert|gpt', 'Hai họ mô hình Transformer: BERT đọc hai chiều, mạnh về hiểu văn bản; GPT sinh văn bản từ trái sang phải.', 'C6.1');
  G('ResNet & residual', 'resnet|residual|skip connection', 'Mạng CNN có "đường tắt" cộng đầu vào của khối vào đầu ra, giúp huấn luyện được mạng rất sâu mà không bị vanishing gradient.', 'C6.1');
  G('GAN', '=GAN|generator|discriminator', 'Hai mạng đấu nhau: generator tạo dữ liệu giả, discriminator phân biệt thật/giả. Dùng để sinh ảnh.', 'C11.1');
  G('Reinforcement learning', 'reinforcement learning|reinforcement|reward|actor|critic|học tăng cường', 'Học tăng cường: tác tử thử hành động trong môi trường và học từ phần thưởng (reward). Actor chọn hành động, critic chấm điểm hành động.', 'C0.1');
  G('Quantization', 'quantization|4-bit|8-bit|lượng tử hóa', 'Nén mô hình bằng cách lưu trọng số với ít bit hơn (ví dụ 4-bit) để chạy nhẹ và nhanh hơn, đổi lại giảm chút độ chính xác.');

  // ---------- Machine learning ----------
  G('Supervised / unsupervised', 'supervised|unsupervised|có giám sát|không giám sát', 'Học có giám sát: dữ liệu có nhãn đáp án (phân loại, hồi quy). Không giám sát: không có nhãn, mô hình tự tìm cấu trúc (phân cụm).', 'C0.1');
  G('Classification (phân loại)', 'classification|phân loại', 'Bài toán dự đoán một NHÃN rời rạc (spam / không spam).', 'C0.1');
  G('Regression (hồi quy)', 'regression|hồi quy|linear regression', 'Bài toán dự đoán một CON SỐ liên tục (giá nhà, nhiệt độ).', 'C0.1');
  G('Logistic regression', 'logistic regression|logistic', 'Mô hình PHÂN LOẠI (dù tên có chữ regression): tính xác suất thuộc lớp dương bằng hàm sigmoid.', 'C2.1');
  G('Clustering (phân cụm)', 'clustering|phân cụm|k-means|kmeans', 'Gom các điểm giống nhau thành nhóm khi KHÔNG có nhãn. k-means là thuật toán phân cụm phổ biến, phải chọn trước số cụm k.', 'C2.1');
  G('kNN', 'knn|k-nn|k-nearest', 'k láng giềng gần nhất: dự đoán theo đa số của k điểm gần nhất. Không có bước huấn luyện thật sự; nhạy với thang đo nên cần scaling.', 'C2.1');
  G('Decision tree', 'decision tree|decision trees|cây quyết định', 'Mô hình là chuỗi câu hỏi có/không chia dữ liệu thành nhánh. Dễ giải thích nhưng dễ overfitting nếu cây quá sâu.', 'C2.1');
  G('Random forest', 'random forest|rừng ngẫu nhiên', 'Nhiều cây quyết định huấn luyện trên các mẫu ngẫu nhiên rồi bỏ phiếu; ổn định hơn một cây đơn.', 'C2.1');
  G('SVM', 'svm|support vector|support vectors|margin|kernel', 'Tìm đường biên phân tách hai lớp sao cho lề (margin) rộng nhất. Support vectors là các điểm nằm sát lề. Kernel giúp tách dữ liệu không thẳng hàng.', 'C2.2');
  G('Naive Bayes', 'naive bayes', 'Mô hình phân loại dựa trên định lý Bayes, giả định các đặc trưng độc lập với nhau. Nhanh, hay dùng cho lọc spam.', 'C2.1');
  G('Ensemble, bagging, boosting', 'ensemble|bagging|boosting|xgboost', 'Ensemble: ghép nhiều mô hình. Bagging: huấn luyện song song trên các mẫu ngẫu nhiên rồi lấy trung bình (random forest). Boosting: huấn luyện nối tiếp, mô hình sau sửa lỗi mô hình trước.', 'C2.1');
  G('Giảm chiều dữ liệu (PCA)', 'dimensionality reduction|pca|giảm chiều', 'Nén dữ liệu nhiều cột về ít cột hơn mà vẫn giữ phần lớn thông tin, để trực quan hóa hoặc giảm tính toán.', 'C11.1');
  G('Feature (đặc trưng)', 'feature|features|đặc trưng', 'Một cột đầu vào của mô hình (tuổi, thu nhập...). Thêm đặc trưng không phải lúc nào cũng tốt: có thể gây nhiễu hoặc overfitting.', 'C1.2');
  G('Label (nhãn)', 'label|labels|gán nhãn|nhãn dữ liệu|dữ liệu có nhãn', 'Đáp án đúng gắn với mỗi mẫu dữ liệu, thứ mô hình cần học để dự đoán.', 'C1.3');
  G('Dataset', 'dataset|datasets|bộ dữ liệu', 'Bộ dữ liệu. Thường chia thành train (để học), validation (để chọn mô hình/siêu tham số) và test (để đánh giá cuối cùng).', 'C1.1');
  G('Train / validation / test', 'train set|test set|validation|tập validation|tập test|tập train|train', 'Train: mô hình học. Validation: chọn siêu tham số, theo dõi overfitting. Test: chỉ dùng MỘT lần cuối để báo cáo. Bỏ validation hoặc chấm trên train set là sai.', 'C1.1');
  G('Cross-validation', 'cross-validation|cross validation|k-fold|folds|fold', 'Chia dữ liệu thành k phần, lần lượt lấy mỗi phần làm validation rồi lấy trung bình; đánh giá đáng tin hơn khi dữ liệu ít.', 'C1.1');
  G('Data leakage', 'data leakage|leakage|rò rỉ dữ liệu', 'Thông tin của tập test (hoặc của tương lai) lọt vào lúc huấn luyện, làm điểm đánh giá cao giả tạo.', 'C1.1');
  G('Noise & outlier', 'noise|outlier|outliers|nhiễu|ngoại lai', 'Noise: sai lệch ngẫu nhiên trong dữ liệu. Outlier: giá trị khác thường hẳn so với phần còn lại; nó kéo lệch mean nhưng ít ảnh hưởng median.', 'A1.1');
  G('Dữ liệu lệch lớp', 'imbalanced|imbalance|lệch lớp|mất cân bằng', 'Một lớp chiếm áp đảo (99% bình thường, 1% gian lận). Khi đó accuracy cao là vô nghĩa; phải xem precision/recall.', 'C3.2');
  G('Scaling & chuẩn hóa', 'scaling|standardization|normalization|chuẩn hóa|min-max', 'Đưa các cột về cùng thang đo (min-max về [0,1] hoặc z-score). Cần cho kNN, SVM, mạng nơ-ron.', 'C1.2');
  G('One-hot encoding', 'one-hot|one hot|label encoding|encoding', 'Biến cột chữ thành số: one-hot tạo mỗi giá trị một cột 0/1; label encoding gán mỗi giá trị một số nguyên (dễ tạo thứ tự giả).', 'C1.2');
  G('Parametric / non-parametric', 'parametric|non-parametric', 'Parametric: mô hình có số tham số cố định (hồi quy tuyến tính). Non-parametric: độ phức tạp tăng theo dữ liệu (kNN, cây quyết định).', 'C0.1');
  G('Các loại bài toán khác', 'forecasting|ranking|time series|time-series|recommender|anomaly detection', 'Forecasting: dự báo chuỗi thời gian. Ranking: xếp hạng kết quả. Recommender: gợi ý sản phẩm. Anomaly detection: phát hiện bất thường.', 'C0.1');
  G('Computer vision', 'computer vision|object detection|bounding box|bounding|thị giác máy tính|segmentation', 'Nhánh AI xử lý ảnh/video. Object detection: tìm vật thể và vẽ khung (bounding box). Segmentation: tô từng điểm ảnh theo vật thể.', 'C1.3');
  G('NLP', 'nlp|machine translation|sentiment|xử lý ngôn ngữ tự nhiên', 'Xử lý ngôn ngữ tự nhiên: dịch máy, phân tích cảm xúc, tóm tắt, hỏi đáp...', 'C7.1');

  // ---------- Đánh giá ----------
  G('Accuracy', 'accuracy|độ chính xác tổng', 'Tỉ lệ dự đoán đúng trên tổng số. Dễ gây hiểu lầm khi dữ liệu lệch lớp: đoán "bình thường" cho tất cả vẫn được 99%.', 'C3.1');
  G('Precision', 'precision', 'Trong các ca mô hình BÁO dương tính, bao nhiêu phần đúng: TP / (TP + FP). Ưu tiên khi báo động giả tốn kém.', 'C3.1');
  G('Recall', 'recall|sensitivity|độ nhạy', 'Trong các ca THẬT SỰ dương tính, mô hình bắt được bao nhiêu: TP / (TP + FN). Ưu tiên khi bỏ sót nguy hiểm.', 'C3.1');
  G('F1', 'f1|f1-score|f1 score', 'Trung bình điều hòa của precision và recall; thấp nếu một trong hai thấp.', 'C3.1');
  G('Confusion matrix', 'confusion matrix|ma trận nhầm lẫn', 'Bảng đếm TP, FP, FN, TN: dự đoán so với thực tế. Mọi metric phân loại đều tính từ bảng này.', 'C3.1');
  G('TP / FP / FN / TN', '=TP|=FP|=FN|=TN|false positive|false negative|true positive|true negative|positive rate', 'TP: báo dương, đúng. FP: báo dương, sai (báo động giả). FN: báo âm, sai (bỏ sót). TN: báo âm, đúng.', 'C3.1');
  G('ROC / AUC', 'roc|auc|average precision', 'Đường ROC vẽ tỉ lệ bắt đúng theo tỉ lệ báo động giả khi đổi ngưỡng; AUC là diện tích dưới đường đó (1 là hoàn hảo, 0,5 là đoán mò).', 'C3.2');
  G('Threshold (ngưỡng)', 'threshold|ngưỡng', 'Mức xác suất để quyết định "dương tính". Hạ ngưỡng: recall tăng, precision giảm; nâng ngưỡng thì ngược lại.', 'C3.2');
  G('MAE / MSE / RMSE', 'mae|mse|rmse|r²|r2', 'Metric cho HỒI QUY: MAE = trung bình sai số tuyệt đối; MSE = trung bình bình phương sai số; RMSE = căn của MSE. Không dùng cho bài toán phân loại.', 'C3.2');
  G('Baseline', 'baseline', 'Cách làm đơn giản nhất dùng làm mốc so sánh (quy tắc if-else, đoán lớp đa số). Mô hình mới phải thắng baseline mới đáng dùng.', 'C9.1');
  G('A/B test', 'a/b test|a/b testing|ab test', 'Chia ngẫu nhiên người dùng thành hai nhóm dùng hai phiên bản rồi so sánh chỉ số, để biết thay đổi có thật sự tốt hơn.', 'C9.1');
  G('Metric', 'metric|metrics|business metric', 'Con số dùng để đo. Metric mô hình (accuracy, F1) khác metric kinh doanh (doanh thu, tỉ lệ giải quyết); mô hình tốt phải cải thiện được metric kinh doanh.', 'C9.1');

  // ---------- LLM, RAG, agent ----------
  G('LLM', 'llm|llms|mô hình ngôn ngữ lớn', 'Mô hình ngôn ngữ lớn: được huấn luyện để dự đoán token tiếp theo, từ đó sinh văn bản. Kiến thức dừng ở thời điểm huấn luyện.', 'C8.1');
  G('Prompt', 'prompt|prompts|system prompt|prompt template', 'Đoạn chỉ dẫn và ngữ cảnh gửi cho LLM. System prompt đặt vai trò và quy tắc chung. Prompt template là khuôn có chỗ trống để điền.', 'C8.1');
  G('Token', 'token|tokens|tokenization|subword', 'Với LLM: mảnh văn bản nhỏ (từ hoặc một phần từ) mà mô hình đọc và sinh ra; chi phí tính theo token. Với API: token còn là chuỗi bí mật để xác thực.', 'C8.1');
  G('Temperature', 'temperature|top-p|top_p', 'Tham số điều khiển độ ngẫu nhiên khi LLM sinh chữ: thấp thì ổn định, lặp lại được; cao thì sáng tạo hơn nhưng dễ sai. Tăng temperature KHÔNG làm câu trả lời chính xác hơn.', 'C8.1');
  G('Context window', 'context window|context|ngữ cảnh', 'Lượng token tối đa LLM đọc được trong một lần gọi (gồm prompt, tài liệu đính kèm và câu trả lời).', 'C8.1');
  G('Hallucination (ảo giác)', 'hallucination|hallucinate|ảo giác|bịa', 'LLM tự tin đưa ra thông tin sai hoặc bịa. Giảm bằng RAG, yêu cầu dẫn nguồn và cho phép trả lời "không biết".', 'C8.1');
  G('Few-shot / zero-shot', 'few-shot|zero-shot|one-shot', 'Zero-shot: chỉ nêu yêu cầu. Few-shot: kèm vài ví dụ mẫu trong prompt để LLM làm theo.', 'C8.1');
  G('RAG', 'rag|retrieval|retrieval-augmented', 'Tìm tài liệu liên quan trước (retrieval) rồi đưa vào prompt để LLM trả lời dựa trên đó. Dùng khi cần kiến thức riêng, cập nhật và có dẫn nguồn.', 'C8.2');
  G('Chunk', 'chunk|chunks|chunking', 'Đoạn tài liệu được cắt nhỏ trước khi tạo embedding trong RAG. Cắt quá to thì loãng, quá nhỏ thì mất ngữ cảnh.', 'C8.2');
  G('Embedding', 'embedding|embeddings', 'Vector số biểu diễn ý nghĩa của văn bản/ảnh: nội dung giống nhau thì vector gần nhau.', 'C7.1');
  G('Vector database', 'vector database|vector db|vector store', 'Cơ sở dữ liệu lưu embedding và tìm nhanh các vector gần nhất với câu hỏi. Là kho tìm kiếm của RAG.', 'C8.2');
  G('Cosine similarity', 'cosine similarity|cosine', 'Độ giống nhau của hai vector theo góc giữa chúng: tích vô hướng chia cho tích hai độ dài. 1 là cùng hướng, 0 là không liên quan.', 'B8.2');
  G('AI agent', 'agent|agents|agentic|multi-agent', 'LLM được trao công cụ và tự lặp: suy nghĩ, gọi công cụ, xem kết quả, làm tiếp cho tới khi xong việc. Multi-agent: nhiều agent chia vai phối hợp.', 'C8.3');
  G('Tool calling', 'tool calling|function calling|tool use', 'LLM không tự chạy công cụ mà sinh ra yêu cầu có cấu trúc (tên hàm + tham số); chương trình bên ngoài thực thi rồi trả kết quả lại.', 'C8.3');
  G('MCP', 'mcp|model context protocol', 'Chuẩn mở để kết nối ứng dụng AI với công cụ và nguồn dữ liệu bên ngoài theo một giao diện chung, thay vì viết tích hợp riêng cho từng công cụ.', 'C8.3');
  G('Guardrail', 'guardrail|guardrails|rào chắn', 'Lớp kiểm soát quanh mô hình: lọc đầu vào/đầu ra, chặn nội dung cấm, giới hạn hành động được phép.', 'C9.1');
  G('Prompt injection', 'prompt injection|jailbreak', 'Tấn công bằng cách cài chỉ dẫn độc hại vào dữ liệu đầu vào để LLM bỏ qua quy tắc ban đầu.', 'C8.3');
  G('Structured output', 'structured output|json schema|schema', 'Buộc LLM trả về theo khuôn dạng cố định (JSON đúng schema) để chương trình đọc được. Schema = bản mô tả các trường và kiểu dữ liệu.', 'C8.4');
  G('Benchmark', 'benchmark|benchmarks', 'Bộ câu hỏi/nhiệm vụ chuẩn dùng để so sánh các mô hình trên cùng một thước đo.', 'C8.4');
  G('Chatbot', 'chatbot|no-code|low-code', 'Chương trình trò chuyện. No-code/low-code là cách dựng bằng kéo thả, gần như không phải viết code.', 'C8.4');

  // ---------- Sản phẩm, triển khai, hạ tầng ----------
  G('Deploy & production', 'deploy|deployment|production', 'Deploy: đưa mô hình/ứng dụng ra chạy thật. Production: môi trường người dùng thật đang dùng.', 'C10.1');
  G('Monitoring (giám sát)', 'monitoring|monitor|giám sát', 'Theo dõi liên tục sau khi triển khai: chất lượng, độ trễ, lỗi, chi phí, drift. Tắt monitoring nghĩa là hỏng mà không ai biết.', 'C10.1');
  G('Data drift / concept drift', 'data drift|concept drift|drift', 'Data drift: dữ liệu đầu vào thực tế đổi khác so với lúc huấn luyện. Concept drift: quan hệ giữa đầu vào và đáp án thay đổi. Cả hai làm mô hình kém dần.', 'C10.1');
  G('MLOps', 'mlops|ci/cd|model registry', 'Bộ thực hành để đưa mô hình vào vận hành ổn định: quản lý phiên bản dữ liệu/mô hình, tự động huấn luyện, triển khai, giám sát.', 'C10.2');
  G('Data pipeline, ETL, ELT', 'pipeline|etl|elt', 'Pipeline: chuỗi bước tự động đưa dữ liệu từ nguồn tới nơi dùng. ETL: trích xuất, biến đổi rồi mới nạp. ELT: nạp dữ liệu thô trước, biến đổi sau.', 'C10.2');
  G('Data lake / warehouse / lakehouse', 'data lake|data warehouse|lakehouse|warehouse|lake', 'Lake: kho chứa dữ liệu thô đủ mọi dạng, rẻ. Warehouse: kho dữ liệu đã làm sạch, có cấu trúc, để phân tích. Lakehouse: kết hợp cả hai.', 'C10.2');
  G('Synthetic data', 'synthetic data|synthetic|dữ liệu tổng hợp', 'Dữ liệu do máy sinh ra để bổ sung khi dữ liệu thật thiếu, hiếm hoặc nhạy cảm. Vẫn phải kiểm tra bằng dữ liệu thật.', 'C10.2');
  G('Latency', 'latency|độ trễ', 'Thời gian chờ từ lúc gửi yêu cầu tới lúc nhận kết quả.', 'C10.1');
  G('Rollback & triển khai dần', 'rollback|canary|shadow', 'Rollback: quay về phiên bản cũ khi bản mới lỗi. Canary: mở bản mới cho một phần nhỏ người dùng trước. Shadow: chạy ngầm song song để so sánh.', 'C10.1');
  G('Human review', 'human review|human-in-the-loop|human in the loop|con người duyệt', 'Con người kiểm tra trước khi kết quả của AI có hiệu lực, bắt buộc với quyết định rủi ro cao hoặc khi AI không chắc chắn.', 'C9.1');
  G('Escalation', 'escalation|escalate|chuyển cấp', 'Chuyển vấn đề lên người có thẩm quyền hoặc chuyên môn khi vượt quá phạm vi mình được phép tự quyết.', 'D5.1');
  G('MVP', 'mvp|poc|prototype', 'Sản phẩm khả dụng tối thiểu: bản đơn giản nhất dùng được, làm nhanh để kiểm chứng giá trị trước khi đầu tư lớn. PoC là bản thử chỉ để chứng minh làm được.', 'C9.2');
  G('ROI / KPI', 'roi|kpi', 'ROI: lợi ích thu về so với chi phí bỏ ra. KPI: chỉ số đo mức hoàn thành mục tiêu.', 'C9.2');
  G('Log & audit log', 'audit log|logging|xóa log|lưu log|ghi log|log lỗi', 'Log là nhật ký hệ thống ghi lại việc đã xảy ra, dùng để tìm lỗi. Audit log ghi ai đã làm gì, khi nào, để truy vết trách nhiệm. Xóa hoặc không lưu log là mất bằng chứng.', 'B9.1');
  G('API', 'api|endpoint|api key', 'Cổng để chương trình này gọi chương trình khác qua mạng. Endpoint là một địa chỉ cụ thể của API. API key là chuỗi bí mật để xác thực, không được in ra hay đưa vào code công khai.', 'B7.1');
  G('Frontend / backend', 'frontend|backend|css|=UI|server', 'Frontend: phần giao diện người dùng thấy (HTML, CSS). Backend/server: phần xử lý và dữ liệu phía sau. Đổi giao diện không sửa được lỗi của mô hình hay dữ liệu.');
  G('Database & cache', 'database|cache|cơ sở dữ liệu', 'Database: nơi lưu dữ liệu có tổ chức để truy vấn. Cache: bộ nhớ tạm giữ kết quả hay dùng để trả lời nhanh hơn.', 'B6.2');

  // ---------- Python ----------
  G('list / tuple / set / dict', 'list|tuple|dict', 'list: dãy có thứ tự, sửa được. tuple: như list nhưng KHÔNG sửa được. set: tập không trùng, không thứ tự. dict: các cặp khóa–giá trị.', 'B1.2');
  G('Slicing', 'slicing|slice|lỗi slicing', 'Cắt một đoạn bằng [bắt đầu:kết thúc:bước], không lấy phần tử ở vị trí kết thúc. Cắt vượt quá độ dài không gây lỗi.', 'B1.1');
  G('copy / deepcopy', 'deepcopy|shallow copy|copy|bản sao nông', 'Gán "=" chỉ tạo thêm tên cho cùng một đối tượng. copy() sao chép lớp ngoài, phần tử lồng bên trong vẫn dùng chung. deepcopy() sao chép hoàn toàn.', 'B1.3');
  G('Mutable / immutable', 'mutable|immutable', 'Mutable: sửa được tại chỗ (list, dict, set). Immutable: không sửa được (int, str, tuple).', 'B1.3');
  G('None', '=None', 'Giá trị "không có gì" của Python. Hàm không có return thì trả về None.', 'B2.2');
  G('break / continue / return', 'break|continue|return 0', 'break: thoát hẳn vòng lặp. continue: bỏ phần còn lại của lượt này, sang lượt kế. return: kết thúc cả hàm và trả giá trị.', 'B0.2');
  G('Các loại lỗi Python', 'typeerror|valueerror|keyerror|indexerror|zerodivisionerror|importerror|keyboardinterrupt|stopiteration|attributeerror|nameerror', 'TypeError: sai kiểu. ValueError: đúng kiểu nhưng giá trị không hợp lệ. KeyError: dict không có khóa. IndexError: vượt chỉ số. ImportError: không nạp được thư viện. KeyboardInterrupt: người dùng bấm Ctrl+C. StopIteration: hết phần tử để lặp.', 'B2.3');
  G('eval()', 'eval', 'Hàm chạy một chuỗi như code Python. Nguy hiểm với dữ liệu từ bên ngoài vì có thể thực thi mã độc; đọc JSON thì dùng json.loads hoặc response.json().', 'B7.2');
  G('lambda & comprehension', 'lambda|comprehension', 'lambda: hàm một dòng không tên. Comprehension: cách viết gọn để tạo list/dict từ vòng lặp.', 'B2.2');
  G('Đệ quy', 'recursion|đệ quy|recursionerror', 'Hàm tự gọi lại chính nó; bắt buộc có điều kiện dừng, nếu không sẽ lỗi RecursionError.', 'B2.3');
  G('OOP', 'class cha|kế thừa|inheritance|__init__|self|override', 'Class là khuôn, object là sản phẩm. __init__ chạy khi tạo object; self là chính object đó. Class con kế thừa class cha và có thể ghi đè (override) phương thức.', 'B2.4');
  G('Big-O', 'o(1)|o(n)|o(log n)|o(n log n)|o(n²)|o(n^2)|big-o', 'Cách nói thời gian chạy tăng thế nào theo kích thước n: O(1) không đổi, O(log n) rất chậm tăng, O(n) tỉ lệ thuận, O(n²) hai vòng lặp lồng nhau.', 'B3.1');

  // ---------- NumPy / Pandas ----------
  G('shape & reshape', 'shape|reshape', 'shape là kích thước mảng, ví dụ (2, 3) là 2 hàng 3 cột; (3,) là mảng một chiều 3 phần tử. reshape đổi hình dạng nhưng giữ nguyên số phần tử.', 'B4.1');
  G('axis', 'axis|axis=0|axis=1', 'Chiều thực hiện phép tính: axis=0 gộp DỌC theo cột (mỗi cột một kết quả), axis=1 gộp NGANG theo hàng.', 'B4.2');
  G('Broadcasting', 'broadcasting|broadcast|lỗi broadcasting', 'NumPy tự "kéo giãn" mảng nhỏ cho khớp mảng lớn khi tính. Hợp lệ khi so từ phải sang trái, mỗi chiều bằng nhau hoặc một bên bằng 1.', 'B4.3');
  G('Boolean indexing', 'boolean indexing|mask|boolean mask', 'Lọc mảng bằng điều kiện: a[a > 3] chỉ giữ các phần tử thỏa điều kiện.', 'B4.2');
  G('DataFrame & Series', 'dataframe|series', 'DataFrame: bảng dữ liệu của Pandas (nhiều cột). Series: một cột. df["cột"] trả về Series.', 'B5.1');
  G('loc / iloc', 'loc|iloc|label-based|integer-position', 'loc chọn theo NHÃN (tên hàng/cột), lấy cả điểm cuối. iloc chọn theo VỊ TRÍ số nguyên, không lấy điểm cuối.', 'B5.1');
  G('NaN & dữ liệu thiếu', 'nan|dropna|fillna|isna|isnull|dữ liệu thiếu', 'NaN là ô bị thiếu. isna() tìm, dropna() xóa hàng thiếu, fillna(x) điền giá trị thay thế. Xóa hết dữ liệu thiếu không phải lúc nào cũng đúng vì mất mẫu.', 'B6.1');
  G('groupby / merge / concat', 'groupby|merge|concat|value_counts|drop_duplicates|astype', 'groupby: gom nhóm rồi tính. merge: nối hai bảng theo cột khóa. concat: xếp chồng các bảng. value_counts(): đếm mỗi giá trị. drop_duplicates(): bỏ dòng trùng. astype(): đổi kiểu dữ liệu.', 'B5.2');
  G('CSV', 'csv|file csv', 'Tệp văn bản lưu bảng, mỗi dòng một hàng, các cột cách nhau bằng dấu phẩy. Đọc bằng pd.read_csv.', 'B5.1');

  // ---------- HTTP / requests / JSON ----------
  G('GET / POST', '=GET|=POST|requests.get|requests.post', 'GET: lấy dữ liệu, tham số nằm trên URL. POST: gửi dữ liệu lên, nội dung nằm trong thân request.', 'B7.1');
  G('params / data / json (requests)', 'params=|data=|json=|params|payload', 'params=: thêm tham số vào URL (dùng với GET). json=: gửi thân request dạng JSON (dùng với POST). data=: gửi dạng form. Dùng nhầm thì server không nhận được dữ liệu như mong đợi.', 'B7.1');
  G('timeout', 'timeout|timeout=none', 'Thời gian chờ tối đa của một request. Không đặt (hoặc None) thì chương trình có thể treo vô hạn khi server không trả lời.', 'B7.1');
  G('Status code', 'status code|status_code|raise_for_status|response.ok|mã 200|mã 404|mã 500', 'Mã kết quả HTTP: 2xx thành công, 4xx lỗi phía người gọi (404 không tìm thấy, 401 chưa xác thực), 5xx lỗi phía server. raise_for_status() ném lỗi nếu mã là 4xx/5xx.', 'B7.2');
  G('JSON', 'json|json.loads|json.dumps|response.json()|response.text', 'Định dạng văn bản để trao đổi dữ liệu, trông giống dict/list. response.json() đổi thân response thành dict; response.text là chuỗi thô (là thuộc tính, không phải hàm).', 'B7.2');
  G('URL', 'url', 'Địa chỉ của tài nguyên trên mạng. Tham số truy vấn nối sau dấu ?, ví dụ .../search?q=ai. Tự cộng chuỗi vào URL dễ thiếu dấu ? và không mã hóa ký tự đặc biệt.', 'B7.1');

  // ---------- SQL ----------
  G('SELECT … FROM … WHERE', '=SELECT|=FROM|=WHERE', 'SELECT chọn cột, FROM chọn bảng, WHERE lọc DÒNG trước khi gom nhóm.', 'B6.2');
  G('GROUP BY / HAVING / ORDER BY', '=HAVING|=ORDER BY|=LIMIT|=GROUP BY', 'GROUP BY gom nhóm; HAVING lọc NHÓM sau khi gom (WHERE không dùng được với COUNT/AVG); ORDER BY sắp xếp; LIMIT lấy n dòng đầu.', 'B6.2');
  G('JOIN', '=JOIN|left join|inner join', 'Nối hai bảng theo cột chung. INNER JOIN chỉ giữ dòng khớp ở cả hai bảng; LEFT JOIN giữ mọi dòng bảng trái, thiếu thì điền NULL.', 'B6.2');
  G('NULL & khóa chính', 'null|is null|primary key|khóa chính|khóa ngoại', 'NULL là ô trống, phải so bằng IS NULL (không dùng = NULL). Khóa chính định danh duy nhất mỗi dòng; khóa ngoại trỏ tới khóa chính của bảng khác.', 'B6.2');

  // ---------- Toán ----------
  G('Mean / median / mode', 'mean|median|mode|trung vị|trung bình cộng', 'Mean: trung bình cộng (bị outlier kéo lệch). Median: giá trị đứng giữa sau khi sắp xếp. Mode: giá trị xuất hiện nhiều nhất.', 'A1.1');
  G('Độ lệch chuẩn', 'std|độ lệch chuẩn|standard deviation|var', 'Đo dữ liệu phân tán quanh trung bình bao nhiêu; bằng căn bậc hai của phương sai (var).', 'A1.1');
  G('Định thức & rank', 'det|định thức|rank|hạng của ma trận', 'Định thức (det) khác 0 thì ma trận vuông khả nghịch. Rank (hạng) = số hàng/cột độc lập tuyến tính.', 'A4.4');
  G('Chuyển vị & nghịch đảo', 'transpose|chuyển vị|nghịch đảo|ma trận đơn vị|identity', 'Chuyển vị: đổi hàng thành cột. Nghịch đảo A⁻¹: nhân với A ra ma trận đơn vị I; chỉ có khi det khác 0.', 'A4.2');
  G('Tích vô hướng & chuẩn', 'dot product|tích vô hướng|norm|euclid|euclidean', 'Tích vô hướng: nhân từng cặp phần tử rồi cộng lại, ra một số. Chuẩn (norm) là độ dài vector. Khoảng cách Euclid là độ dài đoạn nối hai điểm.', 'A4.1');
  G('Bayes & xác suất có điều kiện', 'bayes|xác suất có điều kiện|prior|posterior', 'P(A|B) là xác suất A xảy ra KHI BIẾT B đã xảy ra. Định lý Bayes đảo chiều điều kiện: P(A|B) = P(B|A)·P(A) / P(B).', 'A2.4');
  G('Kỳ vọng', 'kỳ vọng|expected value|expectation', 'Giá trị trung bình về lâu dài: tổng của (giá trị × xác suất).', 'A2.5');
  G('Hoán vị / chỉnh hợp / tổ hợp', 'hoán vị|chỉnh hợp|tổ hợp', 'Hoán vị: xếp cả n phần tử. Chỉnh hợp: chọn k có xét thứ tự. Tổ hợp: chọn k không xét thứ tự.', 'A3.1');
  G('p-value & kiểm định', 'p-value|p value|khoảng tin cậy|sai số chuẩn|mức ý nghĩa', 'p-value: xác suất thấy kết quả cực đoan như vậy NẾU giả thuyết không H₀ đúng; nhỏ hơn mức ý nghĩa α thì bác bỏ H₀. Nó KHÔNG phải xác suất H₀ đúng.', 'A1.2');
  G('Logarit', 'logarit|log₂|logarithm', 'Phép ngược của lũy thừa: log₂(8) = 3 vì 2³ = 8. Tăng rất chậm, nên thuật toán O(log n) rất nhanh.', 'B3.1');

  // ---------- Quyền riêng tư, đạo đức ----------
  G('Quyền tối thiểu (least privilege)', 'least privilege|quyền tối thiểu|tối thiểu cần', 'Chỉ cấp đúng mức quyền cần cho nhiệm vụ, không hơn. Giảm thiệt hại khi tài khoản hoặc AI bị lạm dụng.', 'D3.1');
  G('Tối thiểu hóa dữ liệu', 'data minimization|tối thiểu hóa dữ liệu', 'Chỉ thu thập và giữ lượng dữ liệu cá nhân thật sự cần cho mục đích đã nêu.', 'D3.1');
  G('PII (dữ liệu cá nhân)', 'pii|dữ liệu cá nhân|thông tin cá nhân', 'Thông tin nhận diện được một người: tên, số điện thoại, email, CCCD, địa chỉ, dữ liệu sức khỏe...', 'D3.1');
  G('Consent (sự đồng ý)', 'consent|sự đồng ý|đồng thuận', 'Người có dữ liệu phải được biết và đồng ý với mục đích sử dụng. Dùng dữ liệu sang mục đích khác thì phải xin lại.', 'D3.1');
  G('Ẩn danh hóa & che dữ liệu', 'anonymization|anonymize|pseudonymization|masking|ẩn danh|che thông tin', 'Ẩn danh hóa: xóa hẳn khả năng nhận diện. Giả danh hóa: thay bằng mã, vẫn truy ngược được nếu có bảng khóa. Masking: che một phần (09****123).', 'D3.1');
  G('Mã hóa (encryption)', 'encryption|encrypt|mã hóa api key|mã hóa dữ liệu', 'Biến dữ liệu thành dạng không đọc được nếu thiếu khóa. Bảo vệ dữ liệu khi lưu và khi truyền, nhưng không thay thế cho việc kiểm soát quyền truy cập.', 'D3.1');
  G('Công bằng (fairness)', 'fairness|công bằng', 'Mô hình không đối xử bất lợi với một nhóm người vì giới tính, tuổi, vùng miền... Phải đo chỉ số theo từng nhóm, không chỉ xem tổng.', 'D4.1');
  G('Minh bạch & giải thích được', 'transparency|explainability|explainable|minh bạch|giải thích được', 'Minh bạch: nói rõ đây là AI, dùng dữ liệu gì, giới hạn ra sao. Giải thích được: nêu được vì sao mô hình ra quyết định đó.', 'D4.1');
  G('Trách nhiệm giải trình', 'accountability|trách nhiệm giải trình', 'Luôn có CON NGƯỜI hoặc tổ chức chịu trách nhiệm về kết quả của hệ thống AI, không đổ cho "máy quyết định".', 'D4.1');
  G('Deepfake & bản quyền', 'deepfake|copyright|bản quyền|đạo văn', 'Deepfake: ảnh/giọng/video giả do AI tạo để mạo danh. Bản quyền: nội dung của người khác không được dùng tùy ý, kể cả để huấn luyện hay khi AI sinh lại.', 'D4.2');

  // ---------- Logic & lập luận ----------
  G('Ngụy biện người rơm (strawman)', 'strawman|straw man|người rơm', 'Bóp méo ý kiến của đối phương thành một phiên bản dễ bác bỏ rồi tấn công phiên bản đó.', 'D1.2');
  G('Công kích cá nhân (ad hominem)', 'ad hominem|hominem|công kích cá nhân', 'Tấn công con người thay vì phản bác lập luận của họ.', 'D1.2');
  G('Song đề giả (false dilemma)', 'false dilemma|dilemma|song đề giả', 'Trình bày như chỉ có hai lựa chọn trong khi thực tế còn phương án khác.', 'D1.2');
  G('Các ngụy biện khác', 'slippery slope|trượt dốc|circular|lập luận vòng tròn|appeal to authority|viện dẫn thẩm quyền|khái quát vội', 'Trượt dốc: cho rằng một bước nhỏ tất dẫn tới thảm họa. Vòng tròn: dùng chính kết luận làm lý do. Viện dẫn thẩm quyền: đúng vì người nổi tiếng nói. Khái quát vội: kết luận từ quá ít ví dụ.', 'D1.2');
  G('Tương quan ≠ nhân quả', 'correlation|causation|tương quan|nhân quả', 'Hai thứ cùng tăng giảm chưa chắc cái này gây ra cái kia: có thể do yếu tố thứ ba hoặc trùng hợp.', 'D2.1');
  G('Nguyên nhân gốc', 'root cause|5 whys|nguyên nhân gốc', 'Lý do sâu nhất gây ra sự cố. Sửa triệu chứng thì lỗi sẽ quay lại; hỏi "vì sao" liên tiếp để tới nguyên nhân gốc.', 'D2.1');
  G('Suy luận nếu–thì', 'modus ponens|modus tollens|phản đảo|mệnh đề đảo|khẳng định hậu kiện', 'Từ "nếu P thì Q": có P suy ra Q (đúng); không Q suy ra không P (đúng, gọi là phản đảo). Có Q suy ra P là SAI (khẳng định hậu kiện).', 'D1.1');
  G('Suy diễn / quy nạp', 'suy diễn|quy nạp|deduction|induction', 'Suy diễn: từ quy tắc chung tới trường hợp riêng, kết luận chắc chắn nếu tiền đề đúng. Quy nạp: từ nhiều quan sát tới quy tắc chung, chỉ có khả năng đúng.', 'D1.3');
  G('Stack / queue', 'stack|queue|lifo|fifo|ngăn xếp|hàng đợi', 'Stack: vào sau ra trước (LIFO), như chồng đĩa. Queue: vào trước ra trước (FIFO), như xếp hàng.', 'B3.3');
  G('Tìm kiếm nhị phân & sắp xếp', 'binary search|tìm kiếm nhị phân|merge sort|quick sort|bubble sort|insertion sort|selection sort', 'Tìm kiếm nhị phân: mỗi bước bỏ một nửa, cần dãy đã sắp xếp, O(log n). Merge/quick sort là O(n log n); bubble, insertion, selection sort là O(n²).', 'B3.3');
  G('Git, test, debug', 'git|commit|branch|unit test|pytest|debug|bug', 'Git: quản lý phiên bản code (commit = lưu một mốc, branch = nhánh làm việc riêng). Unit test: đoạn code kiểm tra một hàm chạy đúng. Debug: tìm và sửa lỗi (bug).', 'B9.1');

  // ---------- Bổ sung ----------
  G('Deep learning & mạng nơ-ron', 'deep learning|neural network|neural networks|neural|mạng nơ-ron|học sâu|shallow', 'Mạng nơ-ron: nhiều lớp nơ-ron nối nhau, học bằng cách chỉnh trọng số. Deep learning (học sâu) là mạng có nhiều lớp ẩn; mạng "shallow" (nông) chỉ có một hai lớp.', 'C5.1');
  G('Các mạng CNN nổi tiếng', 'lenet|alexnet|vggnet|vgg|yolo', 'LeNet, AlexNet, VGG là các kiến trúc CNN phân loại ảnh theo thứ tự ra đời. YOLO là mô hình phát hiện vật thể (object detection) chạy thời gian thực.', 'C11.1');
  G('DBSCAN', 'dbscan', 'Thuật toán phân cụm theo mật độ: không cần chọn trước số cụm và tự đánh dấu điểm nhiễu, khác với k-means.', 'C11.1');
  G('Tensor', 'tensor|tensors', 'Mảng số nhiều chiều (số, vector, ma trận là tensor 0, 1, 2 chiều). Là kiểu dữ liệu cơ bản của các thư viện deep learning.', 'C11.1');
  G('Sampling & shuffle', 'sampling|shuffle|oversampling|undersampling|lấy mẫu', 'Sampling: lấy một phần dữ liệu. Oversampling/undersampling: nhân thêm lớp hiếm hoặc bớt lớp đông để chữa lệch lớp. Shuffle: xáo trộn thứ tự dữ liệu trước khi chia hoặc huấn luyện.', 'C3.2');
  G('Retrain (huấn luyện lại)', 'retrain|retraining|huấn luyện lại', 'Huấn luyện lại mô hình bằng dữ liệu mới, thường làm khi phát hiện drift. Tốn kém nên không phải là phản xạ đầu tiên khi gặp sự cố: trước hết phải tìm nguyên nhân.', 'C10.1');
  G('Imputation (điền giá trị thiếu)', 'imputer|imputation|impute|interpolation', 'Điền ô thiếu bằng giá trị ước lượng (trung bình, trung vị, nội suy) thay vì xóa cả dòng.', 'B6.1');
  G('Element-wise', 'element-wise|elementwise', 'Phép tính theo từng cặp phần tử cùng vị trí. Trong NumPy, a * b là nhân element-wise; nhân ma trận thật sự là a @ b.', 'B4.3');
  G('Stopword & tiền xử lý văn bản', 'stopword|stopwords|stemming|lemmatization', 'Stopword: từ rất phổ biến, ít nghĩa ("và", "là") thường bị loại. Stemming/lemmatization: đưa từ về dạng gốc.', 'C7.1');
  G('Calibration', 'calibration|calibrated', 'Mức xác suất mô hình đưa ra khớp với thực tế tới đâu: nói "80% chắc chắn" thì đúng khoảng 80% số lần.', 'C3.2');
  G('Blockchain', 'blockchain', 'Sổ cái phân tán, không sửa được dữ liệu đã ghi. Là công nghệ khác hẳn, hay được đưa vào làm lựa chọn gây nhiễu trong câu hỏi về AI.');
  G('Chi-squared', 'chi-squared|chi-square', 'Kiểm định thống kê xem hai biến phân loại có liên quan với nhau không.', 'A1.2');

  G('Knowledge cutoff', 'knowledge cutoff|cutoff|mốc dừng kiến thức', 'Thời điểm dữ liệu huấn luyện của một LLM dừng lại. Mô hình không biết những gì xảy ra sau mốc đó nếu không được cung cấp thêm.', 'C8.2');
  G('Knowledge base & dữ liệu riêng', 'knowledge base|private data|dữ liệu riêng', 'Kho tài liệu nội bộ (hợp đồng, quy định, hồ sơ) không có trên internet. Trong RAG, đây là nguồn duy nhất chatbot được dùng để trả lời.', 'C8.2');
  G('Semantic chunking', 'semantic chunking|hierarchical chunking', 'Chia tài liệu theo ý nghĩa: sang đoạn mới khi nội dung đổi chủ đề, để mỗi đoạn trọn một ý. Hierarchical chunking thì chia theo nhiều mức (chương, đoạn, câu).', 'C8.2');
  G('Multimodal', 'multimodal|đa phương thức', 'Mô hình xử lý được nhiều loại dữ liệu cùng lúc: văn bản, ảnh, âm thanh.', 'C8.2');
  G('Self-host', 'self-host|self-hosted|tự host', 'Tự chạy mô hình trên máy chủ của mình thay vì gọi API bên ngoài: giữ được dữ liệu trong nội bộ, đổi lại phải tự lo hạ tầng và GPU.', 'C8.2');

  window.GLOSSARY = out;
})();
