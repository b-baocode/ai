// Bài học Module C — Kiến thức AI & Tư duy sản phẩm AI.
window.LESSONS = (window.LESSONS || []).concat([

// ======================= C0 BẢN ĐỒ AI =======================
{
  id: 'C0.1', module: 'C', topic: 'C0', minutes: 15,
  title: 'Bản đồ AI & các loại bài toán',
  skills: ['ml.supervised.classification', 'c.problem-type', 'mlq.ml-basics'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Câu đầu tiên của mọi bài toán AI là: <b>đây là loại bài toán gì?</b> Xác định đúng loại thì mới chọn đúng mô hình, metric và dữ liệu. Đề hỏi dạng này rất thường xuyên.</div>

<h2>1. AI, ML, DL, GenAI lồng nhau</h2>
<p><b>AI</b> (máy làm việc "thông minh") ⊃ <b>Machine Learning</b> (máy tự học quy luật từ dữ liệu) ⊃ <b>Deep Learning</b> (ML dùng mạng nơ-ron nhiều lớp) ⊃ <b>Generative AI / LLM</b> (mô hình sinh nội dung mới: văn bản, ảnh…).</p>

<h2>2. Ba kiểu học</h2>
<table>
<tr><th>Kiểu học</th><th>Dữ liệu</th><th>Ví dụ</th></tr>
<tr><td><b>Có giám sát</b> (supervised)</td><td>Có <b>nhãn</b> (đáp án đúng)</td><td>Email → spam/không spam; nhà → giá</td></tr>
<tr><td><b>Không giám sát</b> (unsupervised)</td><td><b>Không nhãn</b></td><td>Gom nhóm khách hàng, phát hiện bất thường</td></tr>
<tr><td><b>Tăng cường</b> (reinforcement)</td><td>Phần thưởng/phạt từ môi trường</td><td>AI chơi game, robot</td></tr>
</table>

<h2>3. Các loại bài toán hay gặp</h2>
<table>
<tr><th>Bài toán</th><th>Output</th><th>Ví dụ</th></tr>
<tr><td><b>Phân loại</b> (classification)</td><td>Nhãn rời rạc</td><td>Ticket khẩn cấp hay thường; ung thư hay không</td></tr>
<tr><td><b>Hồi quy</b> (regression)</td><td>Số liên tục</td><td>Giá nhà, doanh thu tháng tới</td></tr>
<tr><td><b>Phân cụm</b> (clustering)</td><td>Nhóm (không có nhãn trước)</td><td>Phân khúc khách hàng theo hành vi</td></tr>
<tr><td><b>Xếp hạng / gợi ý</b></td><td>Thứ tự</td><td>Gợi ý sản phẩm, xếp kết quả tìm kiếm</td></tr>
<tr><td><b>Sinh</b> (generation)</td><td>Nội dung mới</td><td>Chatbot, tóm tắt, sinh ảnh</td></tr>
</table>

<div class="box tip"><span class="box-title">⚡ Cách nhận diện trong 5 giây</span>
<ol><li>Dữ liệu <b>có nhãn</b> không? Không → unsupervised (thường là phân cụm).</li>
<li>Có nhãn: output là <b>con số</b> → regression; là <b>loại/nhóm</b> → classification.</li></ol></div>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span><b>Logistic regression</b> là mô hình <b>phân loại</b>, dù tên có chữ "regression".</div>
<h2>Bổ sung: mô hình có tham số và phi tham số</h2>
<p><b>Có tham số</b> (parametric, VD linear regression): số tham số cố định, không phụ thuộc lượng dữ liệu. <b>Phi tham số</b> (VD kNN, cây quyết định): độ phức tạp tăng theo dữ liệu.</p>
<h2>Bổ sung: các lĩnh vực ứng dụng của AI</h2>
<table>
<tr><th>Lĩnh vực</th><th>Dữ liệu</th><th>Bài toán tiêu biểu</th></tr>
<tr><td><b>Thị giác máy tính</b></td><td>Ảnh, video</td><td>Phân loại ảnh (ảnh này là gì), <b>phát hiện vật thể</b> (ở đâu, khung bao), <b>phân đoạn</b> (từng điểm ảnh thuộc vật nào), nhận dạng chữ</td></tr>
<tr><td><b>Xử lý ngôn ngữ tự nhiên</b></td><td>Văn bản</td><td>Phân loại, dịch, tóm tắt, hỏi đáp, chatbot</td></tr>
<tr><td><b>Xử lý tiếng nói</b></td><td>Âm thanh</td><td>Chuyển giọng nói thành văn bản và ngược lại</td></tr>
<tr><td><b>Hệ gợi ý</b></td><td>Lịch sử hành vi</td><td>Gợi ý sản phẩm, phim, bài viết</td></tr>
<tr><td><b>Dự báo chuỗi thời gian</b></td><td>Số liệu theo thời gian</td><td>Dự báo nhu cầu, phát hiện bất thường</td></tr>
<tr><td><b>AI tạo sinh</b></td><td>Văn bản, ảnh, âm thanh, video</td><td>Sinh văn bản (LLM), sinh ảnh từ mô tả (mô hình khuếch tán), sinh giọng nói</td></tr>
</table>
<p><b>AI hẹp</b> giỏi một nhiệm vụ cụ thể: mọi hệ thống đang dùng hiện nay đều thuộc loại này, kể cả LLM. <b>AI tổng quát</b> (AGI), làm được mọi việc trí tuệ như con người, vẫn là mục tiêu nghiên cứu.</p>
`},

// ======================= C1 QUY TRÌNH ML =======================
{
  id: 'C1.1', module: 'C', topic: 'C1', minutes: 18,
  title: 'Train / validation / test, cross-validation & data leakage',
  skills: ['ml.evaluation.validation-role', 'ml.evaluation.train-validation-test', 'c.split-cv', 'essay.ml.data-split-and-leakage', 'mlq.eval'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đánh giá sai cách thì con số "accuracy 95%" chỉ là ảo. Phần này có trong mọi bộ đề, kể cả câu tự luận về data leakage.</div>

<h2>1. Ba tập dữ liệu</h2>
<div class="box idea"><span class="box-title">💡 Ví dụ ôn thi</span>
<b>Train</b> = bài tập trong sách (học từ đây). <b>Validation</b> = đề thi thử (để chọn cách học, chỉnh tham số). <b>Test</b> = đề thi thật (chỉ làm <b>một lần</b> ở cuối để biết trình độ thật).</div>
<table>
<tr><th>Tập</th><th>Dùng để</th><th>Tỉ lệ thường gặp</th></tr>
<tr><td>Train</td><td>Học tham số (trọng số) của mô hình</td><td>60–80%</td></tr>
<tr><td>Validation</td><td>Chọn mô hình, <b>siêu tham số</b>, threshold; so sánh phiên bản</td><td>10–20%</td></tr>
<tr><td>Test</td><td><b>Đánh giá cuối</b>, khách quan; không dùng để chỉnh</td><td>10–20%</td></tr>
</table>
<p>Nếu dùng test để chỉnh mô hình nhiều lần thì mô hình "học tủ" tập test, và điểm test không còn khách quan.</p>

<h2>2. Cross-validation (k-fold)</h2>
<p>Khi dữ liệu <b>ít</b>, chia một lần dễ bị may/rủi. k-fold chia dữ liệu thành k phần; lần lượt dùng 1 phần làm validation, k−1 phần còn lại để train; lấy <b>trung bình</b> k kết quả. Đánh giá ổn định hơn.</p>

<h2>3. Data leakage (rò rỉ dữ liệu)</h2>
<p>Thông tin mà lúc dự đoán thật <b>không có</b> lại lọt vào lúc train, khiến điểm cao giả tạo.</p>
<table>
<tr><th>Nguồn rò rỉ</th><th>Ví dụ</th><th>Cách tránh</th></tr>
<tr><td>Từ tương lai</td><td>Cột "đã hoàn tiền" khi dự đoán "khách có khiếu nại không"</td><td>Bỏ cột chỉ có SAU thời điểm dự đoán</td></tr>
<tr><td>Từ preprocessing</td><td>Tính mean/scaler trên toàn bộ dữ liệu trước khi chia</td><td><b>Chia trước</b>, fit preprocessing chỉ trên train</td></tr>
<tr><td>Bản ghi trùng</td><td>Bản gần trùng nằm ở cả train và test</td><td>Gom/xóa trùng trước khi chia</td></tr>
<tr><td>Dữ liệu thời gian</td><td>Chia ngẫu nhiên → train chứa dữ liệu tương lai</td><td>Chia theo thời gian: quá khứ train, tương lai test</td></tr>
</table>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "chia dữ liệu & leakage"</span>
(1) Xóa/gom bản ghi trùng → chia train/val/test (phân tầng theo nhãn nếu lệch lớp; theo thời gian nếu có thời gian). (2) Chỉ ra cột gây leakage và loại bỏ. (3) Fit preprocessing trên train; kiểm tra phân phối nhãn từng tập; giữ test đến cuối.</div>
<h2>Bổ sung</h2>
<ul>
<li><b>k-fold với K = 5</b>: chia 5 phần, train 5 lần, mỗi lần 1 phần làm validation, lấy trung bình.</li>
<li><b>Stratified k-fold</b>: giữ <b>tỉ lệ nhãn</b> giống nhau ở mỗi fold. Rất cần khi lệch lớp.</li>
<li><b>Dữ liệu chuỗi thời gian</b>: không xáo trộn; dùng <b>Time Series Split</b> (train quá khứ, validate tương lai).</li>
<li><b>Grid search</b>: thử mọi tổ hợp siêu tham số, chọn bộ tốt nhất trên validation/cross-validation.</li>
</ul>
`},

{
  id: 'C1.2', module: 'C', topic: 'C1', minutes: 15,
  title: 'Feature engineering: encoding & scaling',
  skills: ['c.features', 'mlq.features'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Mô hình chỉ hiểu <b>số</b>. Chữ phải được mã hóa, và các số có thang đo chênh lệch phải được đưa về cùng thang. Notion có hẳn một bảng Encoding cho phần này.</div>

<h2>1. Mã hóa biến phân loại (encoding)</h2>
<table>
<tr><th>Kỹ thuật</th><th>Cách làm</th><th>Khi nào dùng</th></tr>
<tr><td><b>One-hot</b></td><td>Mỗi giá trị một cột 0/1: Đỏ → (1,0,0)</td><td>Biến <b>không có thứ tự</b> (màu, thành phố)</td></tr>
<tr><td><b>Label</b></td><td>Đỏ=0, Xanh=1, Vàng=2</td><td>Mô hình cây; cẩn thận vì tạo thứ tự giả</td></tr>
<tr><td><b>Ordinal</b></td><td>S=1, M=2, L=3</td><td>Biến <b>có thứ tự</b> thật</td></tr>
<tr><td>Frequency</td><td>Giá trị = số lần xuất hiện</td><td>Nhiều giá trị khác nhau</td></tr>
<tr><td>Target</td><td>Giá trị = trung bình target của nhóm</td><td>Mạnh nhưng dễ leakage</td></tr>
</table>
<p>Pandas: <code>pd.get_dummies(df, columns=['color'])</code> tạo one-hot.</p>

<h2>2. Đưa về cùng thang đo (scaling)</h2>
<div class="box formula">
<b>Standardization (z-score):</b> $$z = \frac{x - \mu}{\sigma}$$ → trung bình 0, độ lệch chuẩn 1.<br>
<b>Min-max normalization:</b> $$x' = \frac{x - \min}{\max - \min}$$ → về khoảng [0, 1].
</div>
<p><b>Ví dụ:</b> x = 70, μ = 50, σ = 10 → z = 2 (cao hơn trung bình 2 độ lệch chuẩn).</p>
<table>
<tr><th>Cần scale</th><th>Không cần scale</th></tr>
<tr><td>kNN, k-means, SVM (dựa vào <b>khoảng cách</b>), neural network, hồi quy có regularization</td><td>Decision Tree, Random Forest (chia theo ngưỡng từng đặc trưng)</td></tr>
</table>

<h2>3. Feature engineering</h2>
<p>Tạo đặc trưng mới có ý nghĩa: tuổi = năm hiện tại − năm sinh; tách ngày thành thứ/tháng; tỉ lệ (chi tiêu / thu nhập); đếm số lần mua trong 30 ngày. Đặc trưng tốt thường giúp nhiều hơn đổi sang mô hình phức tạp.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Fit scaler trên toàn bộ dữ liệu trước khi chia train/test gây <b>data leakage</b>.</div>
<h2>Bổ sung</h2>
<ul>
<li><b>Giá trị thiếu</b>: xóa, điền mean/median/mode, hoặc dùng mô hình để dự đoán giá trị thiếu.</li>
<li><b>Outlier</b>: phát hiện bằng z-score hoặc IQR; xử lý bằng cắt ngưỡng (clip) hoặc loại bỏ.</li>
<li><b>Lệch lớp</b>: oversampling lớp ít (VD <b>SMOTE</b> tạo mẫu tổng hợp), undersampling lớp nhiều, hoặc class weight.</li>
<li>One-hot với biến có <b>rất nhiều giá trị</b> (VD từ vựng) tạo ma trận rất thưa, rất nhiều chiều → tốn bộ nhớ (curse of dimensionality).</li>
</ul>
<h2>Đầy đủ: các cách biến đổi số</h2>
<ul>
<li>Sau standardization: trung bình 0, độ lệch chuẩn 1. Sau min-max: trong [0, 1].</li>
<li><b>Robust scaling:</b> \(\frac{x - \text{median}}{IQR}\), ít bị outlier ảnh hưởng.</li>
<li><b>Log transform:</b> \(\log(1 + x)\) cho dữ liệu lệch phải (thu nhập, lượt xem).</li>
</ul>
`},

{
  id: 'C1.3', module: 'C', topic: 'C1', minutes: 25,
  title: 'Dữ liệu cho AI: các loại dữ liệu, thu thập, gán nhãn, chất lượng & quản lý',
  skills: ['ts.data'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ban tổ chức mô tả chặng đầu của chương trình là <b>"Valuable Data for AI Systems"</b>: thu thập, xử lý, quản lý dữ liệu; làm quen nhiều loại dữ liệu (hình ảnh, video, 2D/3D); hiểu dữ liệu được dùng thế nào khi xây hệ thống AI. Bảng cấp độ cũng nhắc <b>gán nhãn dữ liệu</b> ở cả L2 và L3. Chất lượng model không thể vượt quá chất lượng dữ liệu.</div>

<h2>1. Các loại dữ liệu</h2>
<table>
<tr><th>Loại</th><th>Ví dụ</th><th>Đặc điểm</th></tr>
<tr><td><b>Có cấu trúc</b></td><td>Bảng trong cơ sở dữ liệu, file CSV</td><td>Có hàng, cột, kiểu dữ liệu rõ ràng</td></tr>
<tr><td><b>Bán cấu trúc</b></td><td>JSON, XML, log</td><td>Có nhãn trường nhưng không cố định dạng bảng</td></tr>
<tr><td><b>Phi cấu trúc</b></td><td>Văn bản, ảnh, âm thanh, video</td><td>Chiếm phần lớn dữ liệu thực tế; phải biến thành số (embedding, đặc trưng) mới dùng được</td></tr>
</table>
<table>
<tr><th>Dạng dữ liệu</th><th>Máy lưu như thế nào</th><th>Bài toán thường gặp</th></tr>
<tr><td>Ảnh (2D)</td><td>Lưới điểm ảnh: cao × rộng × số kênh màu</td><td>Phân loại, phát hiện vật thể, phân đoạn</td></tr>
<tr><td>Video</td><td>Chuỗi các ảnh (khung hình) theo thời gian, có thể kèm âm thanh</td><td>Nhận diện hành động, theo dõi vật thể</td></tr>
<tr><td>Dữ liệu 3D</td><td>Đám mây điểm (point cloud, mỗi điểm có tọa độ x, y, z), lưới (mesh), ảnh độ sâu</td><td>Xe tự lái, robot, dựng mô hình 3D</td></tr>
<tr><td>Âm thanh</td><td>Dãy biên độ theo thời gian</td><td>Nhận dạng giọng nói</td></tr>
<tr><td>Văn bản</td><td>Dãy token</td><td>Phân loại, tóm tắt, hỏi đáp</td></tr>
<tr><td>Chuỗi thời gian</td><td>Giá trị kèm mốc thời gian</td><td>Dự báo, phát hiện bất thường</td></tr>
</table>

<h2>2. Thu thập dữ liệu</h2>
<ul>
<li><b>Nguồn:</b> dữ liệu nội bộ (giao dịch, log), khảo sát, cảm biến, bộ dữ liệu công khai, mua từ bên thứ ba, thu thập từ web, dữ liệu tổng hợp.</li>
<li><b>Câu hỏi phải trả lời trước:</b> có được phép dùng không (đồng ý, bản quyền, điều khoản)? Có đại diện cho người dùng thật không? Có đủ các trường hợp hiếm không?</li>
<li>Thu <b>đúng thứ cần</b> cho bài toán, không thu tràn lan (nguyên tắc tối thiểu hóa dữ liệu, bài D3.1).</li>
</ul>

<h2>3. Gán nhãn dữ liệu (annotation)</h2>
<p>Học có giám sát cần "đáp án đúng" cho từng mẫu. Người gán nhãn (annotator) tạo ra đáp án đó.</p>
<table>
<tr><th>Kiểu nhãn</th><th>Dùng cho</th></tr>
<tr><td>Nhãn lớp cho cả mẫu</td><td>Phân loại ảnh, phân loại văn bản, cảm xúc</td></tr>
<tr><td>Khung bao (bounding box)</td><td>Phát hiện vật thể</td></tr>
<tr><td>Mặt nạ từng điểm ảnh</td><td>Phân đoạn ảnh (segmentation)</td></tr>
<tr><td>Điểm mốc (keypoint)</td><td>Tư thế người, khuôn mặt</td></tr>
<tr><td>Đánh dấu đoạn văn bản</td><td>Nhận dạng thực thể (tên người, địa điểm)</td></tr>
<tr><td>Chép lời</td><td>Nhận dạng giọng nói</td></tr>
<tr><td>Xếp hạng, chấm điểm câu trả lời</td><td>Đánh giá và tinh chỉnh LLM</td></tr>
</table>
<p><b>Đảm bảo chất lượng nhãn:</b></p>
<ul>
<li><b>Hướng dẫn gán nhãn</b> rõ ràng, có ví dụ cho các ca khó và ca mập mờ.</li>
<li>Cho <b>nhiều người gán cùng một mẫu</b> rồi đo <b>mức đồng thuận</b> (inter-annotator agreement). Đồng thuận thấp thường do hướng dẫn chưa rõ.</li>
<li>Kiểm tra ngẫu nhiên, có người duyệt lại; dùng một bộ mẫu chuẩn (gold set) để đánh giá người gán nhãn.</li>
<li>Tiết kiệm công: cho model gán trước rồi người sửa; ưu tiên gán những mẫu model còn phân vân (active learning).</li>
</ul>

<h2>4. Chất lượng dữ liệu</h2>
<table>
<tr><th>Tiêu chí</th><th>Câu hỏi kiểm tra</th></tr>
<tr><td>Đầy đủ</td><td>Có thiếu giá trị, thiếu nhóm đối tượng nào không?</td></tr>
<tr><td>Chính xác</td><td>Giá trị và nhãn có đúng không?</td></tr>
<tr><td>Nhất quán</td><td>Cùng một thứ có được ghi cùng một cách không (đơn vị, định dạng)?</td></tr>
<tr><td>Đại diện, cân bằng</td><td>Có phản ánh đúng người dùng thật không? Có lớp nào quá ít không?</td></tr>
<tr><td>Kịp thời</td><td>Dữ liệu có còn đúng với hiện tại không?</td></tr>
<tr><td>Không trùng lặp</td><td>Có bản ghi lặp làm lệch thống kê và gây rò rỉ giữa train/test không?</td></tr>
</table>
<div class="box idea"><span class="box-title">💡 "Rác vào, rác ra"</span>Model học đúng những gì dữ liệu dạy. Nhãn sai, dữ liệu lệch thì model sai và lệch theo. Cải thiện dữ liệu thường hiệu quả hơn đổi sang model phức tạp.</div>

<h2>5. Quản lý dữ liệu</h2>
<ul>
<li><b>Đánh phiên bản</b> dữ liệu: biết model nào được huấn luyện trên bản dữ liệu nào, để tái lập kết quả.</li>
<li><b>Metadata và tài liệu mô tả</b> bộ dữ liệu: nguồn, thời gian, cách gán nhãn, giới hạn, quyền sử dụng.</li>
<li><b>Phân quyền và bảo mật</b>: ai được xem gì; che dữ liệu cá nhân.</li>
<li><b>Bộ đánh giá cố định</b> (benchmark): một tập dữ liệu kiểm tra giữ nguyên, không dùng để huấn luyện, để so sánh công bằng các phiên bản model.</li>
</ul>

<h2>6. Dữ liệu đi qua vòng đời một hệ thống AI</h2>
<p>Thu thập → làm sạch → gán nhãn → chia train/validation/test → huấn luyện → đánh giá → triển khai → <b>thu dữ liệu thực tế và phản hồi</b> → quay lại cải thiện. Dữ liệu không phải việc làm một lần.</p>
`},

// ======================= C2 MÔ HÌNH =======================
{
  id: 'C2.1', module: 'C', topic: 'C2', minutes: 25,
  title: 'Các mô hình cổ điển: Linear/Logistic Regression, kNN, Decision Tree, Random Forest, k-means',
  skills: ['c.models', 'essay.ml.select-model-under-constraints', 'mlq.models', 'ts.c-models'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Người thi trước liệt kê đúng các mô hình này. Bộ đề mô phỏng không có câu nào về chúng, nên đây là phần <b>dễ bị hổng</b>.</div>

<h2>1. Linear Regression: dự đoán số</h2>
<div class="box formula">$$\hat{y} = w_1x_1 + w_2x_2 + \dots + b$$</div>
<p>Tìm đường thẳng (mặt phẳng) khớp dữ liệu nhất bằng cách tối thiểu <b>MSE</b>. VD giá nhà = 30 × diện tích + 200. Ưu: đơn giản, dễ giải thích (mỗi w cho biết ảnh hưởng của đặc trưng).</p>

<h2>2. Logistic Regression: phân loại nhị phân</h2>
<div class="box formula">$$P(y=1) = \sigma(w\cdot x + b) = \frac{1}{1 + e^{-(w\cdot x + b)}}$$</div>
<p>Tính tổng có trọng số như linear regression, rồi đưa qua <b>sigmoid</b> để ra xác suất (0–1). Xác suất ≥ threshold (thường 0,5) → lớp 1. Đây là <b>baseline mặc định</b> cho bài phân loại vì nhanh và dễ giải thích.</p>

<h2>3. kNN (k-Nearest Neighbors)</h2>
<p>Muốn đoán nhãn của điểm mới: tìm <b>k điểm gần nhất</b> trong dữ liệu train, rồi <b>bỏ phiếu đa số</b> (phân loại) hoặc lấy trung bình (hồi quy).</p>
<ul><li>Không "train" gì cả (lazy learning), nhưng dự đoán chậm khi dữ liệu lớn.</li><li><b>Bắt buộc scale</b> dữ liệu vì dựa trên khoảng cách.</li><li>k nhỏ → nhạy nhiễu (overfit); k lớn → quá mượt (underfit).</li></ul>

<h2>4. Decision Tree</h2>
<p>Chuỗi câu hỏi có/không: "thu nhập > 20tr?" → "đã có nợ xấu?" → ... → kết luận. Mỗi lần chia chọn câu hỏi làm các nhóm con <b>thuần nhất</b> nhất.</p>
<div class="box formula">Gini impurity: $$G = 1 - \sum_k p_k^2$$
Nút thuần một lớp: G = 0. Nút 50/50: G = 1 − (0,25 + 0,25) = 0,5.</div>
<p>Ưu: <b>dễ giải thích</b>, không cần scale. Nhược: cây sâu dễ <b>overfit</b>.</p>

<h2>5. Random Forest</h2>
<p>Huấn luyện <b>nhiều cây</b>, mỗi cây trên một mẫu ngẫu nhiên của dữ liệu và đặc trưng (bagging), rồi <b>bỏ phiếu</b>. Giảm overfitting của cây đơn; thường mạnh với dữ liệu bảng.</p>

<h2>6. k-means (không giám sát)</h2>
<ol class="steps"><li>Chọn k tâm cụm ban đầu.</li><li>Gán mỗi điểm vào tâm gần nhất.</li><li>Cập nhật tâm = trung bình các điểm trong cụm. Lặp lại tới khi ổn định.</li></ol>
<p>Phải chọn k trước; nhạy với khởi tạo và outlier; cần scale.</p>

<h2>7. Chọn mô hình thế nào? (dạng tự luận)</h2>
<div class="box tip"><span class="box-title">✍️ Khung trả lời</span>
<ol><li><b>Baseline đơn giản trước:</b> logistic regression (phân loại) / linear regression (hồi quy), hoặc rule-based không dùng AI.</li>
<li><b>Thử tiếp theo thứ tự tăng độ phức tạp:</b> cây / Random Forest / SVM → neural network nhỏ, chỉ khi baseline chưa đạt và có lý do rõ.</li>
<li><b>Tiêu chí quyết định:</b> metric trên validation (F1/recall nếu lệch lớp), độ dễ giải thích, tốc độ, chi phí, thời hạn MVP.</li></ol></div>
<h2>Bổ sung: ensemble & các khái niệm hay hỏi</h2>
<table>
<tr><th></th><th>Bagging (VD Random Forest)</th><th>Boosting (VD XGBoost, LightGBM)</th></tr>
<tr><td>Cách train</td><td>Nhiều mô hình <b>song song, độc lập</b> trên mẫu bootstrap</td><td><b>Tuần tự</b>: mô hình sau sửa lỗi của mô hình trước</td></tr>
<tr><td>Giảm chủ yếu</td><td>Variance (overfit)</td><td>Bias (và cả variance)</td></tr>
</table>
<ul>
<li><b>Elbow method</b>: vẽ tổng khoảng cách trong cụm theo k, chọn k ở "khuỷu tay" cho k-means.</li>
<li><b>Naive Bayes</b> "ngây thơ" vì giả định các đặc trưng <b>độc lập</b> với nhau khi biết lớp.</li>
<li>Tâm cụm k-means = <b>trung bình</b> tọa độ các điểm: (1,2) và (3,4) → (2, 3).</li>
</ul>
<h2>Đầy đủ: công thức của từng mô hình</h2>
<table>
<tr><th>Mô hình</th><th>Công thức chính</th></tr>
<tr><td>Linear regression</td><td>Tối thiểu MSE; nghiệm đóng \(w = (X^TX)^{-1}X^Ty\)</td></tr>
<tr><td>Logistic regression</td><td>\(\sigma(w\cdot x + b)\); loss = binary cross-entropy (C5.1)</td></tr>
<tr><td>kNN</td><td>Khoảng cách Euclid (A4.1) → k láng giềng → bỏ phiếu / trung bình</td></tr>
<tr><td>Decision tree: Gini</td><td>\(1 - \sum p_k^2\)</td></tr>
<tr><td>Decision tree: Entropy</td><td>\(H = -\sum p_k\log_2 p_k\) (thuần: 0; 50/50: 1)</td></tr>
<tr><td>Information gain</td><td>\(IG = H(\text{cha}) - \sum \frac{n_{\text{con}}}{n} H(\text{con})\); chọn cách chia có IG lớn nhất</td></tr>
<tr><td>k-means</td><td>Tối thiểu \(\sum \|x - \text{tâm cụm}\|^2\); tâm = trung bình các điểm</td></tr>
<tr><td>Naive Bayes</td><td>\(P(y\mid x) \propto P(y)\prod_i P(x_i\mid y)\)</td></tr>
</table>
<p>VD nút cha 50/50 (H = 1) chia thành 2 nút con đều thuần (H = 0) → IG = 1 − 0 = 1 (cách chia hoàn hảo).</p>
`},

{
  id: 'C2.2', module: 'C', topic: 'C2', minutes: 15,
  title: 'SVM: margin & support vectors',
  skills: ['ml.svm.maximum-margin', 'ml.svm.support-vectors', 'ml.svm.compare-margins', 'ml.svm.linear-decision-function', 'essay.ml.svm-pipeline', 'mlq.svm', 'ts.c-svm'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Phản hồi của người thi có nhắc <b>SVM</b>. Đề chỉ hỏi ở mức trực giác: margin, support vectors, hàm quyết định tuyến tính.</div>

<h2>1. Ý tưởng</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Có nhiều đường thẳng tách được hai lớp. SVM chọn đường có <b>"lề đường" rộng nhất</b> (maximum margin), tức cách đều và xa nhất so với hai lớp. Lề rộng thì đường ranh giới <b>ổn định hơn với dữ liệu mới</b>.</div>
<ul>
<li><b>Siêu phẳng (hyperplane)</b>: ranh giới phân tách (2D là đường thẳng).</li>
<li><b>Margin</b>: khoảng cách từ ranh giới tới các điểm gần nhất của mỗi lớp.</li>
<li><b>Support vectors</b>: các điểm <b>nằm sát lề</b>. Chỉ chúng quyết định vị trí ranh giới; xóa các điểm ở xa không làm ranh giới thay đổi.</li>
</ul>

<h2>2. Hàm quyết định tuyến tính</h2>
<div class="box formula">$$f(x) = w\cdot x + b$$ $$f(x) \ge 0 \Rightarrow \text{lớp } +1,\quad f(x) \lt 0 \Rightarrow \text{lớp } -1$$</div>
<p><b>Ví dụ:</b> \(f(x) = x_1 - x_2 + 1\), với \(x = (2, 2)\): \(f = 2 - 2 + 1 = 1 \ge 0\) → <b>lớp +1</b>.</p>

<h2>3. Thực hành</h2>
<ul><li><b>Cần scale</b> đặc trưng (SVM dựa vào khoảng cách).</li><li>Tham số <b>C</b>: C lớn → cố phân loại đúng mọi điểm train (margin hẹp, dễ overfit); C nhỏ → chấp nhận vài lỗi để margin rộng.</li><li>Kernel (RBF…) cho ranh giới cong. Đề chỉ yêu cầu SVM tuyến tính.</li></ul>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "SVM pipeline"</span>
(1) Giải thích margin và support vectors như trên. (2) Chuẩn hóa đặc trưng → chia train/val/test → thử vài giá trị C trên validation → đánh giá bằng confusion matrix, F1 trên test. (3) So với logistic regression: giữ SVM nếu tốt hơn rõ trên validation và đáp ứng tốc độ; nếu không thì quay về baseline đơn giản, dễ giải thích hơn.</div>
<h2>Bổ sung: kernel trick</h2>
<p>Khi dữ liệu không tách được bằng đường thẳng, <b>kernel</b> (VD RBF) giúp SVM làm việc như thể dữ liệu đã được đưa lên không gian nhiều chiều hơn, nơi chúng tách được, mà không cần tính trực tiếp tọa độ mới.</p>
<h2>Đầy đủ: công thức SVM</h2>
<div class="box formula">Ràng buộc phân loại đúng có lề: $$y_i(w\cdot x_i + b) \ge 1$$
Độ rộng lề: $$\text{margin} = \frac{2}{\|w\|}$$
Khoảng cách từ điểm tới siêu phẳng: $$\frac{|w\cdot x + b|}{\|w\|}$$
Hinge loss: $$\max(0,\ 1 - y\,f(x))$$</div>
<p>VD w = (3, 4) → ‖w‖ = 5 → margin = 2/5 = 0,4. Tối đa margin ⇔ tối thiểu ‖w‖.</p>
`},

// ======================= C3 METRICS =======================
{
  id: 'C3.1', module: 'C', topic: 'C3', minutes: 22,
  title: 'Confusion matrix & cách tính accuracy, precision, recall, F1',
  skills: ['ml.metrics.identify-false-negative', 'ml.metrics.compute-accuracy', 'ml.metrics.compute-precision', 'ml.metrics.compute-recall', 'ml.metrics.compute-f1', 'essay.ml.classifier-confusion-matrix', 'mlq.metrics', 'ts.c-metrics'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đây là dạng <b>chắc chắn có</b> trong Module C, gồm cả trắc nghiệm tính số lẫn tự luận. Chỉ cần thuộc 4 công thức và biết đọc bảng là lấy được điểm.</div>

<h2>1. Confusion matrix</h2>
<table>
<tr><th></th><th>Dự đoán <b>Dương</b></th><th>Dự đoán <b>Âm</b></th></tr>
<tr><th>Thật <b>Dương</b></th><td><b>TP</b>: bắt đúng</td><td><b>FN</b>: <b>bỏ sót</b></td></tr>
<tr><th>Thật <b>Âm</b></th><td><b>FP</b>: <b>báo nhầm</b></td><td><b>TN</b>: bỏ qua đúng</td></tr>
</table>
<div class="box idea"><span class="box-title">💡 Cách nhớ</span>Chữ thứ hai (P/N) là <b>mô hình đoán gì</b>. Chữ thứ nhất (T/F) là <b>đoán đúng hay sai</b>. FN = đoán Âm (N) và đoán Sai (F) → thật ra là Dương → bị <b>bỏ sót</b>.</div>

<h2>2. Bốn công thức</h2>
<div class="box formula">
$$\text{Accuracy} = \frac{TP + TN}{\text{Tổng}}$$ $$\text{Precision} = \frac{TP}{TP + FP}$$ $$\text{Recall} = \frac{TP}{TP + FN}$$
$$F1 = \frac{2 \cdot P \cdot R}{P + R}$$
</div>
<table>
<tr><th>Metric</th><th>Trả lời câu hỏi</th></tr>
<tr><td>Accuracy</td><td>Tổng cộng đoán đúng bao nhiêu %?</td></tr>
<tr><td>Precision</td><td>Trong những ca mô hình <b>báo dương</b>, bao nhiêu % là thật?</td></tr>
<tr><td>Recall (độ nhạy)</td><td>Trong những ca <b>dương thật</b>, mô hình bắt được bao nhiêu %?</td></tr>
<tr><td>F1</td><td>Trung bình điều hòa của P và R, cân bằng cả hai</td></tr>
</table>

<h2>3. Ví dụ đúng dạng đề</h2>
<p>TP = 30, FP = 10, FN = 5, TN = 55 (tổng 100).</p>
<ol class="steps">
<li>Bỏ sót (FN) = <b>5</b></li>
<li>Accuracy = (30 + 55)/100 = <b>85%</b></li>
<li>Precision = 30/(30 + 10) = 30/40 = <b>75%</b></li>
<li>Recall = 30/(30 + 5) = 30/35 ≈ <b>85,7%</b></li>
<li>F1 = 2 × 0,75 × 0,857 / (0,75 + 0,857) = 1,286/1,607 ≈ <b>80%</b></li>
</ol>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Precision chia cho <b>cột dự đoán dương</b> (TP + FP); Recall chia cho <b>hàng thật dương</b> (TP + FN). Đáp án nhiễu thường là kết quả của việc đổi lẫn hai mẫu số này.</li>
<li>F1 <b>không phải</b> trung bình cộng (75 + 85,7)/2 = 80,4. F1 luôn ≤ trung bình cộng.</li></ul></div>
<div class="box tip"><span class="box-title">✍️ Khung tự luận "classifier + confusion matrix"</span>
(1) Baseline: logistic regression hoặc cây nhỏ; chia train/val/test. (2) Tính 4 metric từ bảng, giải thích ý nghĩa; lệch lớp thì ưu tiên recall/F1 của lớp quan trọng thay vì accuracy. (3) Thử nghiệm: chạy song song (shadow) hoặc cho một nhóm nhỏ dùng, có người review ca rủi ro, theo dõi metric và phản hồi.</div>
<h2>Đầy đủ: các chỉ số từ confusion matrix</h2>
<table>
<tr><th>Chỉ số</th><th>Công thức</th></tr>
<tr><td>Error rate</td><td>1 − accuracy</td></tr>
<tr><td>Recall / TPR / sensitivity</td><td>TP/(TP + FN)</td></tr>
<tr><td>FNR (tỉ lệ bỏ sót)</td><td>FN/(TP + FN) = 1 − recall</td></tr>
<tr><td>Specificity / TNR</td><td>TN/(TN + FP)</td></tr>
<tr><td>FPR (tỉ lệ báo nhầm)</td><td>FP/(FP + TN) = 1 − specificity</td></tr>
<tr><td>NPV</td><td>TN/(TN + FN)</td></tr>
<tr><td>F-beta</td><td>\(\frac{(1+\beta^2)PR}{\beta^2P + R}\): β = 2 nặng recall, β = 0,5 nặng precision</td></tr>
</table>
<p><b>Nhiều lớp:</b> tính precision/recall cho từng lớp (lớp đó là "dương", còn lại là "âm"). <b>Macro</b> = trung bình cộng các lớp; <b>micro</b> = gộp TP/FP/FN của mọi lớp rồi mới tính; <b>weighted</b> = trung bình theo số mẫu mỗi lớp.</p>
`},

{
  id: 'C3.2', module: 'C', topic: 'C3', minutes: 20,
  title: 'Chọn metric: lệch lớp, threshold, precision vs recall, metric hồi quy',
  skills: ['ml.metrics.choose-recall', 'ml.metrics.accuracy-misleading-imbalance', 'ml.metrics.precision-interpretation', 'ml.metrics.recall-interpretation', 'ml.metrics.prioritize-recall-costly-false-negative', 'essay.ml.threshold-precision-recall-tradeoff', 'essay.ml.cancer-metrics', 'c.metric-choice', 'c.metrics-extra', 'mlq.metrics-choice'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ngày thi đầu có câu tự luận <b>"dữ liệu ung thư lệch lớp, accuracy cao chưa chắc model tốt"</b>. Biết <b>chọn metric theo hậu quả</b> là tư duy sản phẩm cốt lõi.</div>

<h2>1. Accuracy đánh lừa khi lệch lớp</h2>
<p>1000 người, chỉ 60 người bị ung thư. Một mô hình "lười" đoán <b>tất cả</b> đều khỏe vẫn đạt accuracy 940/1000 = <b>94%</b>, nhưng bỏ sót 100% người bệnh!</p>
<p><b>Ví dụ tự luận:</b> TP = 40, FP = 10, FN = 20, TN = 930.</p>
<ul><li>Accuracy = 970/1000 = <b>97%</b> (cao nhờ TN rất nhiều)</li><li>Precision = 40/50 = <b>80%</b>; Recall = 40/60 ≈ <b>66,7%</b>; F1 ≈ <b>72,7%</b></li><li>→ Vẫn <b>bỏ sót 20 ca ung thư</b>: accuracy che giấu điều này.</li></ul>

<h2>2. Ưu tiên metric nào? Nhìn vào HẬU QUẢ</h2>
<table>
<tr><th>Lỗi nào đắt hơn?</th><th>Ưu tiên</th><th>Ví dụ</th></tr>
<tr><td><b>Bỏ sót</b> (FN) nguy hiểm</td><td><b>Recall</b></td><td>Ung thư, gian lận, ticket khẩn cấp, an toàn</td></tr>
<tr><td><b>Báo nhầm</b> (FP) tốn kém</td><td><b>Precision</b></td><td>Lọc spam (chặn nhầm email quan trọng), khóa nhầm tài khoản</td></tr>
<tr><td>Cả hai quan trọng</td><td><b>F1</b></td><td>Đa số bài toán lệch lớp</td></tr>
</table>

<h2>3. Threshold: núm vặn giữa precision và recall</h2>
<p>Mô hình trả xác suất; ta chọn ngưỡng để quyết định "dương".</p>
<ul><li><b>Hạ</b> threshold → báo dương nhiều hơn → <b>recall tăng</b>, precision thường <b>giảm</b> (FP tăng).</li>
<li><b>Tăng</b> threshold → báo dương ít nhưng chắc → <b>precision tăng</b>, recall giảm.</li></ul>
<p>Chọn threshold trên <b>validation</b>, không chọn trên test.</p>

<h2>4. ROC-AUC & PR-AUC</h2>
<p><b>ROC-AUC</b> đo khả năng xếp hạng ca dương cao hơn ca âm trên mọi threshold: 1 là hoàn hảo, 0,5 là đoán bừa. Khi lệch lớp nặng, <b>PR-AUC</b> phản ánh tốt hơn.</p>

<h2>5. Metric cho hồi quy</h2>
<div class="box formula">
$$\text{MAE} = \frac{1}{n}\sum|y - \hat{y}|$$ $$\text{RMSE} = \sqrt{\frac{1}{n}\sum (y-\hat{y})^2}$$
</div>
<p>Sai số [2, −2, 4]: MAE = 8/3 ≈ 2,67; RMSE = √8 ≈ 2,83. <b>RMSE phạt nặng sai số lớn</b>. R² cho biết mô hình giải thích được bao nhiêu % biến động (1 là hoàn hảo).</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "metric ung thư / threshold"</span>
(1) Tính đủ 4 metric từ bảng. (2) Giải thích accuracy cao vì lớp âm chiếm đa số, che giấu FN. (3) FN nguy hiểm → ưu tiên <b>recall</b> (vẫn theo dõi precision/F1 để không báo nhầm quá nhiều): hạ threshold trên validation, dùng class weight hoặc resampling, cho bác sĩ review ca nghi ngờ.</div>
<h2>Bổ sung</h2>
<ul>
<li><b>ROC curve</b> vẽ <b>TPR</b> (= recall) theo <b>FPR</b> khi thay đổi threshold. <b>AUC</b> = diện tích dưới đường ROC.</li>
<li><b>Specificity</b> (TNR) = TN/(TN + FP); <b>FPR = 1 − specificity</b>. VD specificity 0,9 → FPR 0,1.</li>
<li><b>R²</b>: tỉ lệ phương sai của y được mô hình giải thích.</li>
<li><b>MAE</b> ít bị ảnh hưởng bởi outlier hơn <b>MSE/RMSE</b>.</li>
</ul>
<h2>Đầy đủ: metric hồi quy</h2>
<div class="box formula">$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}}$$ $$SS_{res} = \sum (y - \hat{y})^2$$ $$SS_{tot} = \sum (y - \bar{y})^2$$
$$\text{MAPE} = \frac{100\%}{n}\sum\frac{|y - \hat{y}|}{|y|}$$</div>
<p>VD SS_res = 20, SS_tot = 100 → R² = 0,8. Mô hình luôn đoán bằng trung bình → R² = 0.</p>
`},

// ======================= C4 OVERFITTING =======================
{
  id: 'C4.1', module: 'C', topic: 'C4', minutes: 18,
  title: 'Overfitting, underfitting & regularization',
  skills: ['ml.generalization.detect-overfit', 'c.overfit', 'essay.ml.diagnose-validation-gap', 'mlq.overfit'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
"Train 97% mà validation 70%" là dạng câu kinh điển. Có cả tự luận: chẩn đoán nguyên nhân và đề xuất cách sửa.</div>

<h2>1. Overfit vs underfit</h2>
<table>
<tr><th></th><th>Train</th><th>Validation</th><th>Tên gọi</th><th>Ví dụ ôn thi</th></tr>
<tr><td><b>Underfitting</b></td><td>Thấp</td><td>Thấp</td><td>High bias</td><td>Chưa học bài</td></tr>
<tr><td><b>Overfitting</b></td><td><b>Rất cao</b></td><td><b>Thấp hơn nhiều</b></td><td>High variance</td><td>Học thuộc lòng đáp án, đổi đề là sai</td></tr>
<tr><td>Vừa đẹp</td><td>Cao</td><td>Cao, gần train</td><td></td><td>Hiểu bản chất</td></tr>
</table>

<h2>2. Cách giảm overfitting</h2>
<ul>
<li><b>Thêm dữ liệu</b> / data augmentation.</li>
<li><b>Mô hình đơn giản hơn</b> (ít tham số, cây nông hơn).</li>
<li><b>Regularization</b>: phạt trọng số lớn trong hàm loss.
<div class="box formula">$$L_{\text{mới}} = L + \lambda\sum|w| \ (\text{L1})$$ $$L_{\text{mới}} = L + \lambda\sum w^2 \ (\text{L2})$$
L1 đẩy nhiều trọng số về đúng 0 (chọn đặc trưng); L2 làm trọng số nhỏ đều.</div></li>
<li><b>Dropout</b> (neural network): tạm tắt ngẫu nhiên một số nơ-ron khi train.</li>
<li><b>Early stopping</b>: dừng train khi validation loss bắt đầu tăng.</li>
<li><b>Cross-validation</b> để đánh giá đáng tin hơn.</li>
</ul>
<p><b>Cách giảm underfitting:</b> mô hình phức tạp hơn, thêm đặc trưng tốt, train lâu hơn, giảm regularization.</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "train 95%, validation 72%, recall thấp"</span>
(1) <b>Nguyên nhân có thể:</b> overfit, leakage/trùng giữa train–val, chia tập sai, lệch lớp, threshold chưa hợp lý. (2) <b>Ba kiểm tra:</b> trùng lặp/leakage giữa các tập; phân phối nhãn mỗi tập; confusion matrix + learning curve. (3) <b>Cải thiện không cần thêm dữ liệu:</b> regularization/giảm độ phức tạp, class weight, chỉnh threshold trên validation, feature tốt hơn. <b>Không dùng test để tune</b>; giữ baseline để so sánh.</div>
<h2>Bổ sung</h2>
<ul>
<li><b>Weight decay</b> chính là L2 regularization.</li>
<li>Tính phạt: λ = 0,1, w = [−0,5; 1; 2] → L1 = 0,1 × (0,5 + 1 + 2) = 0,35. w = [1, 2] → L2 = 0,1 × (1 + 4) = 0,5.</li>
<li><b>Dropout chỉ bật khi train</b>; khi dự đoán (inference) thì tắt và dùng toàn bộ mạng.</li>
<li><b>Bias–variance tradeoff</b>: giảm bias (mô hình phức tạp hơn) thường làm tăng variance và ngược lại; cần cân bằng.</li>
</ul>
<h2>Đầy đủ</h2>
<ul>
<li><b>Elastic Net</b> = kết hợp L1 + L2: \(L + \lambda_1\sum|w| + \lambda_2\sum w^2\).</li>
<li>Phân rã lỗi: <b>lỗi kỳ vọng = bias² + variance + nhiễu</b> (nhiễu không giảm được).</li>
<li>Dropout tỉ lệ p: khi train mỗi nơ-ron bị tắt với xác suất p (giữ lại 1 − p).</li>
</ul>
`},

// ======================= C5 NEURAL NETWORK =======================
{
  id: 'C5.1', module: 'C', topic: 'C5', minutes: 22,
  title: 'Neural network: nơ-ron, activation (ReLU, sigmoid, softmax) & loss',
  skills: ['c.nn', 'ml.backprop.relu-derivative', 'mlq.nn'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion ghi đề có <b>Softmax, ReLU, ANN</b>. Người thi kể phần ML/DL là phần khó. Bài này đi từ một nơ-ron, rồi mới tới cả mạng.</div>

<h2>1. Một nơ-ron làm gì?</h2>
<div class="box formula">$$z = w_1x_1 + w_2x_2 + \dots + b$$ $$a = f(z)$$
Tổng có trọng số (giống trung bình có trọng số ở bài A0.2) → đưa qua <b>hàm kích hoạt</b> f.</div>
<p><b>Ví dụ:</b> x = [1, 2], w = [0,5; 1], b = −1: z = 0,5 + 2 − 1 = 1,5 → ReLU(1,5) = 1,5.</p>
<p><b>Mạng nơ-ron</b> = nhiều nơ-ron xếp thành lớp: lớp vào → các lớp ẩn → lớp ra. Mỗi lớp thực chất là phép nhân ma trận \(Wx + b\) (bài A4.3) rồi qua activation.</p>

<h2>2. Hàm kích hoạt</h2>
<table>
<tr><th>Hàm</th><th>Công thức</th><th>Khoảng giá trị</th><th>Dùng ở</th></tr>
<tr><td><b>ReLU</b></td><td>\(\max(0, z)\)</td><td>[0, +∞)</td><td>Lớp ẩn (mặc định). Giảm vanishing gradient</td></tr>
<tr><td><b>Sigmoid</b></td><td>\(\frac{1}{1+e^{-z}}\)</td><td>(0, 1)</td><td>Output phân loại <b>nhị phân</b></td></tr>
<tr><td><b>Softmax</b></td><td>\(\frac{e^{z_i}}{\sum_j e^{z_j}}\)</td><td>Mỗi giá trị (0, 1), <b>tổng = 1</b></td><td>Output phân loại <b>nhiều lớp</b></td></tr>
<tr><td>Tanh</td><td></td><td>(−1, 1)</td><td>RNN</td></tr>
</table>
<p><b>Đạo hàm ReLU:</b> bằng 1 khi z &gt; 0, bằng 0 khi z &lt; 0. ReLU(−3) = 0; ReLU'(4) = 1.</p>
<p><b>Softmax ví dụ:</b> logits [2, 2, 2] → [1/3, 1/3, 1/3]; logits [0, 0] → [0,5; 0,5].</p>
<div class="box idea"><span class="box-title">💡 Vì sao cần activation phi tuyến?</span>Không có nó, chồng 100 lớp tuyến tính vẫn chỉ tương đương <b>1 lớp tuyến tính</b>, và mạng không học được quan hệ phức tạp.</div>

<h2>3. Hàm mất mát (loss): đo mức sai</h2>
<ul>
<li><b>Hồi quy:</b> MSE \(= \frac{1}{n}\sum (y - \hat{y})^2\).</li>
<li><b>Phân loại:</b> <b>Cross-entropy</b> \(= -\log P(\text{lớp đúng})\). Đoán đúng và tự tin (P = 0,9) cho loss ≈ 0,1, thấp; đoán sai tự tin (P = 0,1) cho loss ≈ 2,3, rất cao.</li>
</ul>

<h2>4. Thuật ngữ huấn luyện</h2>
<p><b>Batch</b>: một nhóm mẫu dùng cho một lần cập nhật. <b>Epoch</b>: một lượt đi qua <b>toàn bộ</b> tập train. <b>Learning rate</b>: độ lớn mỗi bước cập nhật.</p>
<h2>Bổ sung</h2>
<ul>
<li><b>Tanh</b> cho giá trị trong khoảng (−1, 1), đối xứng quanh 0.</li>
<li><b>Dying ReLU</b>: nơ-ron luôn nhận z &lt; 0 → output 0 và gradient 0 → không học nữa. <b>Leaky ReLU</b> cho nhánh âm một độ dốc nhỏ (VD 0,01z).</li>
<li><b>Output layer</b>: hồi quy → tuyến tính (linear); nhị phân → sigmoid; nhiều lớp → softmax.</li>
<li>Số tham số lớp Dense: <b>số_vào × số_ra + số_ra</b> (bias). 10 vào, 5 ra → 50 + 5 = 55.</li>
<li>Ví dụ ReLU: x = [2, −1, 3], w = [0,5; 2; −1], b = −1 → z = 1 − 2 − 3 − 1 = −5 → ReLU = 0.</li>
</ul>
<h2>Bổ sung: binary cross-entropy</h2>
<div class="box formula">$$L = -\big[\,y\log p + (1-y)\log(1-p)\,\big]$$
y là nhãn thật (0 hoặc 1), p là xác suất mô hình dự đoán lớp 1.</div>
<ul><li>y = 1, p = 1 → L = 0 (đúng hoàn toàn).</li><li>y = 1, p = 0,1 → L = −log 0,1 ≈ 2,3 (sai mà tự tin → phạt nặng).</li><li>y = 0 thì chỉ còn số hạng \(-\log(1-p)\).</li></ul>
<h2>Đầy đủ: công thức các hàm kích hoạt & loss</h2>
<table>
<tr><th>Hàm</th><th>Công thức</th></tr>
<tr><td>Tanh</td><td>\(\frac{e^z - e^{-z}}{e^z + e^{-z}}\), tanh(0) = 0</td></tr>
<tr><td>Leaky ReLU</td><td>\(\max(0{,}01z,\ z)\)</td></tr>
<tr><td>Một lớp mạng</td><td>\(a = f(Wx + b)\), W cỡ (số_ra × số_vào)</td></tr>
<tr><td>Categorical cross-entropy</td><td>\(-\sum_k y_k \log p_k\); nhãn one-hot → \(-\log p_{\text{đúng}}\)</td></tr>
<tr><td>MSE loss</td><td>\(\frac{1}{n}\sum(y - \hat{y})^2\)</td></tr>
</table>
`},

{
  id: 'C5.2', module: 'C', topic: 'C5', minutes: 20,
  title: 'Backpropagation & gradient descent',
  skills: ['ml.backprop.purpose', 'ml.backprop.single-neuron-gradient', 'ml.backprop.weight-update', 'c.backprop-extra', 'essay.ml.neural-backprop-pipeline', 'mlq.training', 'ts.c-training'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề có câu <b>backprop một nơ-ron</b>: tính gradient, cập nhật trọng số. Nghe đáng sợ nhưng thật ra chỉ là đạo hàm (bài A5.1) cộng một phép trừ.</div>

<h2>1. Vòng lặp huấn luyện</h2>
<ol class="steps">
<li><b>Forward pass</b>: đưa input qua mạng → dự đoán \(\hat{y}\).</li>
<li><b>Tính loss</b>: so \(\hat{y}\) với nhãn thật y.</li>
<li><b>Backpropagation</b>: dùng <b>chain rule</b> tính gradient của loss theo <b>từng trọng số</b>, đi ngược từ output về input.</li>
<li><b>Cập nhật</b>: \(w \leftarrow w - \eta \cdot \frac{\partial L}{\partial w}\). Lặp lại nhiều epoch.</li>
</ol>

<h2>2. Ví dụ một nơ-ron (đúng dạng đề)</h2>
<p>\(\hat{y} = wx\), loss \(L = \frac{1}{2}(\hat{y} - y)^2\). Cho x = 2, w = 0,5, y = 3.</p>
<ol class="steps">
<li>Forward: \(\hat{y} = 0{,}5 \times 2 = 1\)</li>
<li>Chain rule: \(\frac{\partial L}{\partial w} = \frac{\partial L}{\partial \hat{y}}\cdot\frac{\partial \hat{y}}{\partial w} = (\hat{y} - y)\cdot x\)</li>
<li>Thay số: \((1 - 3) \times 2 = -4\)</li>
<li>Cập nhật với η = 0,1: \(w = 0{,}5 - 0{,}1\times(-4) = 0{,}9\). w tăng, nên \(\hat{y}\) tiến gần y = 3 hơn. Đúng hướng!</li>
</ol>
<p><b>Ví dụ cập nhật:</b> w = 0,8, η = 0,05, gradient = 2 → w = 0,8 − 0,1 = <b>0,7</b>.</p>

<h2>3. Các vấn đề của gradient</h2>
<table>
<tr><th>Vấn đề</th><th>Biểu hiện</th><th>Khắc phục</th></tr>
<tr><td><b>Vanishing gradient</b></td><td>Gradient tiến về 0 qua nhiều lớp → lớp đầu không học</td><td>ReLU, khởi tạo He, LSTM/GRU, residual</td></tr>
<tr><td><b>Exploding gradient</b></td><td>Gradient tăng vọt → loss dao động dữ dội</td><td>Gradient clipping, LSTM/GRU, learning rate nhỏ hơn</td></tr>
<tr><td>Learning rate quá lớn</td><td>Không hội tụ</td><td>Giảm learning rate</td></tr>
</table>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "huấn luyện neural network nhỏ"</span>
(1) Flow: chuẩn bị dữ liệu, chia tập → forward → loss (cross-entropy) → backprop (chain rule) → cập nhật \(w - \eta\,\nabla\) → lặp theo epoch. (2) Ví dụ số như mục 2. (3) Phát hiện overfit: theo dõi train và validation loss; validation tăng trong khi train giảm → early stopping, dropout, L2.</div>
<h2>Bổ sung: optimizer & các mẹo huấn luyện</h2>
<ul>
<li><b>SGD / mini-batch</b>: batch nhỏ → gradient "nhiễu" hơn nhưng cập nhật nhanh.</li>
<li><b>Momentum</b>: cộng dồn hướng các bước trước → giảm dao động, đi nhanh hơn.</li>
<li><b>Adam</b>: learning rate <b>tự điều chỉnh</b> cho từng tham số (kết hợp momentum); là optimizer phổ biến nhất.</li>
<li><b>Không khởi tạo mọi trọng số bằng 0</b>: các nơ-ron sẽ cập nhật giống hệt nhau (đối xứng) → mạng không học được.</li>
<li>Đạo hàm hay gặp: MSE \((\hat{y}-y)^2\) → \(2(\hat{y}-y)\); sigmoid → \(s(1-s)\), lớn nhất bằng 0,25 tại s = 0,5.</li>
</ul>
<h2>Đầy đủ: công thức huấn luyện</h2>
<ul>
<li>Số lần cập nhật mỗi epoch = \(\lceil N / \text{batch size}\rceil\). VD 1000 mẫu, batch 100 → 10 lần/epoch; 5 epoch → 50 lần.</li>
<li><b>Momentum:</b> \(v \leftarrow \beta v + g\), \(w \leftarrow w - \eta v\).</li>
<li>Learning rate decay: giảm dần η theo thời gian, VD \(\eta_t = \frac{\eta_0}{1 + kt}\).</li>
</ul>
`},

// ======================= C6 KIẾN TRÚC =======================
{
  id: 'C6.1', module: 'C', topic: 'C6', minutes: 15,
  title: 'CNN, RNN & Transformer (trực giác)',
  skills: ['c.arch', 'mlq.arch', 'ts.c-arch'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion có <b>"ANN, RNN, …"</b> và mục CNN/RNN/Transformer. Đề chỉ hỏi ở mức trực giác: mỗi loại mạng hợp với dữ liệu gì và vì sao.</div>

<table>
<tr><th></th><th>CNN</th><th>RNN / LSTM / GRU</th><th>Transformer</th></tr>
<tr><td>Dữ liệu</td><td><b>Ảnh</b>, dữ liệu dạng lưới</td><td><b>Chuỗi</b>: văn bản, chuỗi thời gian</td><td>Văn bản (LLM), cả ảnh, âm thanh</td></tr>
<tr><td>Ý tưởng</td><td>Bộ lọc nhỏ trượt trên ảnh, phát hiện mẫu cục bộ (cạnh → hình → vật thể)</td><td>Đọc lần lượt từng bước, "nhớ" qua hidden state</td><td><b>Self-attention</b>: mỗi từ nhìn trực tiếp mọi từ khác</td></tr>
<tr><td>Điểm mạnh</td><td>Dùng chung trọng số, ít tham số</td><td>Xử lý độ dài thay đổi</td><td>Nắm quan hệ xa, <b>train song song</b></td></tr>
<tr><td>Điểm yếu</td><td>Không hợp với chuỗi dài</td><td>Vanishing gradient, chậm (tuần tự)</td><td>Tốn tài nguyên với chuỗi rất dài</td></tr>
</table>

<h2>CNN</h2>
<p><b>Convolution</b>: trượt bộ lọc (VD 3×3) trên ảnh, tại mỗi vị trí tính tổng có trọng số. <b>Pooling</b>: thu nhỏ bản đồ đặc trưng. Lớp đầu học cạnh, lớp sau học hình dạng, lớp cuối học vật thể.</p>
<h2>RNN → LSTM/GRU</h2>
<p>RNN khó nhớ thông tin xa do <b>vanishing gradient</b>. LSTM/GRU thêm các "cổng" (gate) quyết định nhớ gì, quên gì.</p>
<h2>Transformer</h2>
<p>Trong câu "Con mèo không ăn vì <b>nó</b> no", self-attention giúp "nó" chú ý mạnh vào "con mèo". Transformer là nền tảng của GPT, Claude, BERT.</p>
<h2>Bổ sung: công thức kích thước & các khái niệm</h2>
<div class="box formula">Kích thước đầu ra của tích chập: $$O = \frac{W - F + 2P}{S} + 1$$
28×28, F = 3, S = 1, P = 0 → (28 − 3)/1 + 1 = <b>26×26</b>. Max pooling 2×2, stride 2 → chia đôi: 32×32 → <b>16×16</b>.</div>
<ul>
<li><b>Positional encoding</b>: Transformer không đọc tuần tự nên phải "gắn" thông tin <b>vị trí</b> cho từng token.</li>
<li><b>ResNet</b>: <b>skip connection</b> (kết nối tắt) giúp train mạng rất sâu, giảm vanishing gradient.</li>
<li><b>GRU</b> ít cổng hơn LSTM → đơn giản, nhanh hơn.</li>
<li><b>Conv 1D</b> dùng cho dữ liệu chuỗi (chuỗi thời gian, văn bản).</li>
<li>Conv + pooling giúp CNN nhận ra vật thể dù nó dịch chuyển trong ảnh (bất biến tịnh tiến).</li>
</ul>
<h2>Đầy đủ</h2>
<ul>
<li>Kích thước sau pooling: \(\frac{W - F}{S} + 1\).</li>
<li>Số tham số một lớp conv: \((F\times F\times C_{in} + 1)\times C_{out}\). VD bộ lọc 3×3, vào 3 kênh, 16 bộ lọc → (27 + 1) × 16 = 448.</li>
<li><b>Self-attention:</b> \(\text{Attention}(Q,K,V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V\).</li>
</ul>
`},

// ======================= C7 NLP =======================
{
  id: 'C7.1', module: 'C', topic: 'C7', minutes: 18,
  title: 'NLP & Embedding',
  skills: ['c.nlp', 'rag.embedding.semantic-search', 'mlq.nlp', 'ts.c-nlp'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đàn anh dặn có <b>NLP (xử lý ngôn ngữ tự nhiên)</b>. Embedding là nền tảng của tìm kiếm ngữ nghĩa và RAG.</div>

<h2>1. Pipeline NLP cổ điển</h2>
<ol class="steps">
<li><b>Làm sạch</b>: chữ thường, bỏ ký tự thừa, chuẩn hóa (bài B2.1).</li>
<li><b>Tokenization</b>: tách văn bản thành token: "Tôi học AI" → [Tôi, học, AI].</li>
<li><b>Bỏ stopwords</b> ("và", "là", "của"): xuất hiện nhiều nhưng ít ý nghĩa.</li>
<li><b>Biểu diễn thành số</b> → đưa vào mô hình.</li>
</ol>

<h2>2. Biểu diễn văn bản thành số</h2>
<table>
<tr><th>Cách</th><th>Ý tưởng</th><th>Nhược điểm</th></tr>
<tr><td><b>Bag-of-words</b></td><td>Đếm số lần mỗi từ xuất hiện</td><td>Mất thứ tự, không hiểu nghĩa</td></tr>
<tr><td><b>TF-IDF</b></td><td>Từ nhiều trong tài liệu này nhưng <b>hiếm</b> trong kho → trọng số cao</td><td>Vẫn không hiểu nghĩa ("ô tô" ≠ "xe hơi")</td></tr>
<tr><td><b>Embedding</b></td><td>Vector số dày; nghĩa gần thì vector gần</td><td>Cần mô hình để tạo</td></tr>
</table>

<h2>3. Embedding</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Embedding đặt mỗi từ/câu/tài liệu vào một "bản đồ nghĩa" nhiều chiều. "Xe hơi" nằm gần "ô tô", xa "quả chuối". Nổi tiếng nhất: king − man + woman ≈ queen.</div>
<p>Đo độ giống nhau bằng <b>cosine similarity</b> (bài A4.1): gần 1 → nghĩa rất giống. Embedding không chỉ cho văn bản: người dùng, sản phẩm, ảnh đều có thể embedding.</p>
<p><b>Tìm kiếm ngữ nghĩa</b> (dùng trong RAG): embedding câu hỏi → tìm các đoạn tài liệu có embedding gần nhất.</p>

<h2>4. Các bài toán NLP</h2>
<p>Phân loại văn bản (spam, chủ đề), <b>phân tích cảm xúc</b> (tích cực/tiêu cực), nhận dạng thực thể (tên người, địa điểm), dịch máy, tóm tắt, hỏi đáp. Ngày nay hầu hết làm bằng Transformer/LLM.</p>
<h2>Bổ sung</h2>
<ul>
<li><b>TF-IDF = TF × IDF</b>. VD TF = 2, IDF = 1,5 → 3,0.</li>
<li><b>Word2Vec</b>: học embedding cho từng từ (vector dày).</li>
<li><b>Subword tokenization</b> (BPE, WordPiece): tách từ hiếm thành mảnh nhỏ → từ điển gọn, giảm lỗi <b>OOV</b> (gặp từ ngoài từ điển).</li>
<li><b>BERT</b>: encoder <b>hai chiều</b> của Transformer, nhìn ngữ cảnh cả trước lẫn sau; huấn luyện bằng <b>Masked Language Modeling</b> (che từ rồi đoán).</li>
</ul>
<h2>Đầy đủ: TF-IDF</h2>
<div class="box formula">$$\text{TF} = \frac{\text{số lần từ xuất hiện trong tài liệu}}{\text{tổng số từ của tài liệu}}$$ $$\text{IDF} = \log\frac{N}{df}$$ $$\text{TF-IDF} = \text{TF}\times\text{IDF}$$
N: số tài liệu; df: số tài liệu chứa từ đó.</div>
<p>VD N = 100, df = 10 → IDF = log₁₀(10) = 1. Từ có trong <b>mọi</b> tài liệu → IDF = log 1 = 0 (không phân biệt được tài liệu).</p>
`},

// ======================= C8 LLM & RAG =======================
{
  id: 'C8.1', module: 'C', topic: 'C8', minutes: 20,
  title: 'LLM: cách hoạt động, prompting & giới hạn',
  skills: ['llm.foundation.next-token-generation', 'llm.application.common-assistant-tasks', 'llm.context.private-knowledge-requires-retrieval', 'c.llm', 'mlq.llm'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ngày thi đầu có câu về <b>nhiệm vụ của LLM</b> và các tác vụ thường gặp của trợ lý như ChatGPT/Claude.</div>

<h2>1. LLM làm gì?</h2>
<p>LLM (Large Language Model) được huấn luyện trên lượng văn bản khổng lồ để <b>dự đoán token tiếp theo</b> dựa trên ngữ cảnh. Từ khả năng đó mới có hỏi đáp, tóm tắt, viết, dịch, giải thích, hỗ trợ code.</p>
<div class="box trap"><span class="box-title">⚠️ LLM KHÔNG phải</span>
<ul><li>Một database luôn đúng.</li><li>Tự biết tài liệu <b>nội bộ</b> của công ty. Muốn dùng thì phải đưa vào context qua RAG/file/tool, và kiểm soát quyền truy cập.</li><li>Người chịu trách nhiệm cho quyết định pháp lý/y tế.</li></ul></div>

<h2>2. Thuật ngữ cần biết</h2>
<table>
<tr><th>Thuật ngữ</th><th>Ý nghĩa</th></tr>
<tr><td><b>Token</b></td><td>Đơn vị văn bản cỡ một từ hoặc một phần của từ. Chi phí tính theo token.</td></tr>
<tr><td><b>Context window</b></td><td>Lượng token tối đa mô hình xử lý trong một lượt (prompt + trả lời)</td></tr>
<tr><td><b>Temperature</b></td><td>Độ ngẫu nhiên/sáng tạo. Thấp → ổn định, nhất quán; cao → đa dạng</td></tr>
<tr><td><b>Hallucination</b></td><td>Trả lời nghe hợp lý nhưng <b>sai</b> hoặc không có nguồn</td></tr>
<tr><td><b>Prompt injection</b></td><td>Nội dung độc hại dụ mô hình bỏ qua chỉ dẫn hệ thống hoặc tiết lộ dữ liệu</td></tr>
<tr><td>Kích thước model (6B, 8B…)</td><td>Lớn hơn thường mạnh hơn nhưng chậm và tốn tài nguyên hơn → trade-off</td></tr>
</table>

<h2>3. Prompting</h2>
<table>
<tr><th>Kỹ thuật</th><th>Ý nghĩa</th></tr>
<tr><td>Zero-shot</td><td>Chỉ mô tả nhiệm vụ, không có ví dụ</td></tr>
<tr><td><b>Few-shot</b></td><td>Đưa <b>vài ví dụ mẫu</b> trong prompt</td></tr>
<tr><td>Chain-of-thought</td><td>Yêu cầu suy luận từng bước trước khi trả lời</td></tr>
</table>
<p>Prompt tốt thì rõ vai trò, nhiệm vụ, ngữ cảnh, định dạng output, ràng buộc, và nói rõ được phép trả lời "không biết".</p>

<h2>4. Giảm hallucination</h2>
<p>RAG (bám tài liệu nguồn) + yêu cầu <b>trích dẫn</b> + cho phép <b>từ chối khi thiếu bằng chứng</b> + temperature thấp + kiểm chứng/người review với nội dung rủi ro cao.</p>
`},

{
  id: 'C8.2', module: 'C', topic: 'C8', minutes: 40,
  title: 'RAG, fine-tune & thiết kế chatbot nội bộ',
  skills: ['rag.retrieval.role', 'rag.answer.abstain-without-evidence', 'rag.choice.changing-knowledge-vs-finetune', 'rag.architecture.internal-chatbot-order', 'c.rag', 'c.rag-essay', 'essay.rag.internal-access-controlled', 'essay.rag.evaluate-retrieval-and-answer', 'essay.rag-vs-finetune', 'essay.rag.internal-architecture', 'mlq.transfer', 'ts.rag-pipeline'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
RAG là chủ đề <b>tự luận lớn nhất</b> của Module C: chọn RAG hay fine-tune, thiết kế kiến trúc RAG chatbot nội bộ. Nắm khung trả lời ở bài này là viết được mọi biến thể.</div>

<h2>0. LLM thiếu gì mà phải cần RAG?</h2>
<p>Một LLM chỉ biết những gì có trong dữ liệu huấn luyện của nó. Từ đó sinh ra ba vấn đề, và RAG ra đời để giải cả ba.</p>
<table>
<tr><th>Vấn đề</th><th>Nghĩa là</th><th>Ví dụ</th></tr>
<tr><td><b>Knowledge cutoff</b> (mốc dừng kiến thức)</td><td>Dữ liệu huấn luyện dừng ở một thời điểm. Mô hình không biết những gì xảy ra <b>sau</b> mốc đó.</td><td>Mô hình có mốc dừng đầu năm thì không biết đội nào vô địch giải đấu diễn ra cuối năm đó.</td></tr>
<tr><td><b>Dữ liệu riêng</b> (private data)</td><td>Thông tin nội bộ không nằm trong dữ liệu huấn luyện, và cũng <b>không có trên internet</b> để mô hình tra.</td><td>"Điều khoản phạt trong hợp đồng công ty tôi ký với khách hàng B là bao nhiêu?"</td></tr>
<tr><td><b>Hallucination</b> (ảo giác)</td><td>Không biết nhưng vẫn trả lời, nghe rất hợp lý mà sai.</td><td>Bịa ra một con số tiền phạt trông có vẻ đúng.</td></tr>
</table>
<p>Nhiều chatbot hiện nay đã có công cụ tìm kiếm web nên vấn đề mốc dừng nhẹ đi. Nhưng tìm web <b>không giải quyết được dữ liệu riêng</b>: hồ sơ bệnh án của bệnh viện, tài khoản khách hàng của ngân hàng, hợp đồng và quy định nội bộ của công ty đều không có trên mạng, và cũng không được phép đưa lên mạng.</p>

<h3>Sao không đính kèm file vào mỗi câu hỏi?</h3>
<p>Đính kèm tài liệu rồi bảo "hãy trả lời dựa trên file này" là cách chữa cháy được, nhưng có ba hạn chế:</p>
<ul>
<li><b>Bất tiện:</b> mỗi lần hỏi lại phải tự tìm và đính kèm đúng file.</li>
<li><b>Người hỏi thường không có file:</b> nhân viên biết "có quy định ở đâu đó" nhưng không biết nó nằm trong tài liệu nào.</li>
<li><b>Giới hạn số file và độ dài:</b> mỗi lượt chỉ đính kèm được vài file; kho tài liệu công ty có hàng nghìn file.</li>
</ul>
<div class="box idea"><span class="box-title">💡 RAG tự động hóa đúng việc đó</span>
Đưa <b>toàn bộ</b> kho tài liệu riêng vào hệ thống <b>một lần, từ trước</b>. Khi có câu hỏi, hệ thống <b>tự tìm</b> những đoạn liên quan và đưa cho LLM. Chatbot chỉ trả lời từ kho này, không lấy từ internet.</div>

<h3>Hai góc nhìn về cùng một hệ thống</h3>
<p><b>Người dùng thấy:</b> hỏi một câu → chatbot tìm thông tin liên quan trong kho riêng → dùng thông tin đó làm <b>ngữ cảnh (context)</b> → trả lời.</p>
<p>Ví dụ chatbot của một trường đại học được hỏi: "Liệt kê các bài báo năm qua về chuyển đổi số". Hệ thống tìm được ba mẩu: giảng viên A có bài X, giảng viên B có bài Y, giảng viên C có bài Z. LLM <b>tổng hợp</b> ba mẩu này thành câu trả lời. LLM không chỉ chép lại: nó có thể suy luận và ghép thông tin từ nhiều đoạn, nhưng <b>chỉ trong phạm vi các đoạn được đưa cho</b>.</p>
<p><b>Người xây hệ thống thấy:</b> hai giai đoạn, giai đoạn chuẩn bị kho (làm một lần, trước khi có người dùng) và giai đoạn trả lời (mỗi lần có câu hỏi). Mục 1 dưới đây là hai giai đoạn đó.</p>

<h2>1. RAG = Retrieval-Augmented Generation</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Cho LLM làm bài thi <b>"được mở tài liệu"</b>: trước khi trả lời, hệ thống <b>tìm (retrieve)</b> các đoạn liên quan trong kho tài liệu, rồi đưa vào prompt để LLM <b>trả lời dựa trên đó</b> và trích nguồn.</div>

<h3>Pipeline (thuộc lòng)</h3>
<p><b>Offline: chuẩn bị kho</b></p>
<ol class="steps"><li>Thu thập & làm sạch tài liệu</li><li>Chia thành đoạn nhỏ (<b>chunking</b>)</li><li>Gắn <b>metadata</b>: nguồn, phiên bản, <b>quyền truy cập</b></li><li>Tạo <b>embedding</b> cho mỗi đoạn → lưu vào <b>vector index</b></li></ol>
<p><b>Online: khi người dùng hỏi</b></p>
<ol class="steps"><li><b>Xác thực</b> người dùng → <b>lọc quyền</b> (nhóm A chỉ thấy tài liệu của A)</li><li>Embedding câu hỏi → <b>retrieve</b> top-k đoạn liên quan (có thể <b>rerank</b> để sắp lại)</li><li>Tạo prompt: câu hỏi + các đoạn + chỉ dẫn "chỉ dùng tài liệu, ghi nguồn, thiếu thì nói không biết"</li><li>LLM trả lời <b>kèm nguồn</b>; thiếu bằng chứng thì <b>từ chối / chuyển người</b></li></ol>
<div class="box trap"><span class="box-title">⚠️ Thứ tự quan trọng</span><b>Lọc quyền TRƯỚC retrieval</b>, không phải để LLM trả lời xong mới kiểm tra quyền.</div>

<h2>1b. Đi sâu từng bước của pipeline</h2>
<p>Bốn khái niệm dưới đây là bốn mắt xích của pipeline ở mục 1. Đề hay hỏi "bước này để làm gì" và "làm sai thì hậu quả gì".</p>

<h3>Knowledge base: kho tài liệu</h3>
<p>Kho dữ liệu riêng gom từ nhiều nguồn và nhiều định dạng: văn bản, PDF, ảnh, âm thanh, video, mã nguồn. Tài liệu trong kho cũng rất khác nhau về <b>độ dài</b>: một hóa đơn chỉ vài dòng, một báo cáo nghiên cứu có thể hàng trăm trang.</p>

<h3>Chunking: chia tài liệu thành đoạn nhỏ</h3>
<p><b>Vì sao phải chia?</b> Đưa nguyên một tài liệu 100 trang cho LLM thì nó dễ bỏ sót chi tiết, giống người phải đọc một lèo cả tập hồ sơ. Chia nhỏ thì bước tìm kiếm trả về đúng <b>đoạn</b> chứa câu trả lời, prompt ngắn hơn và rẻ hơn.</p>
<table>
<tr><th>Cách chia</th><th>Làm thế nào</th><th>Ưu / nhược</th></tr>
<tr><td><b>Theo độ dài cố định</b></td><td>Mỗi đoạn tối đa N token, ví dụ 1000 token</td><td>Đơn giản nhất. Nhược: có thể <b>cắt ngang một ý</b> đang nói dở</td></tr>
<tr><td><b>Theo câu / theo đoạn văn</b></td><td>Cắt ở ranh giới câu hoặc đoạn</td><td>Tự nhiên hơn, nhưng một ý dài vẫn có thể bị tách ra hai đoạn</td></tr>
<tr><td><b>Phân cấp</b> (hierarchical)</td><td>Kết hợp nhiều mức: chương → đoạn → câu</td><td>Giữ được cấu trúc tài liệu, phức tạp hơn</td></tr>
<tr><td><b>Theo ngữ nghĩa</b> (semantic chunking)</td><td>Sang đoạn mới <b>khi nội dung đổi chủ đề</b></td><td>Mỗi đoạn trọn một ý, không bị cắt ngang. Tốn công tính toán hơn</td></tr>
</table>
<div class="box example"><span class="box-title">📝 Ví dụ</span>
Một file PDF 100 trang, chia mỗi trang một đoạn → 100 chunk. Câu hỏi về "mức phạt chậm thanh toán" chỉ cần lấy ra 2–3 chunk nói về điều khoản đó, thay vì đưa cả 100 trang cho LLM.</div>
<div class="box trap"><span class="box-title">⚠️ Bẫy: token không phải là từ</span>
<b>Token</b> là đơn vị nhỏ nhất mà mô hình xử lý. Với văn bản, một token có thể là <b>một từ hoặc một phần của từ</b> (đầu từ, đuôi từ, dấu câu). Tài liệu nhập môn hay nói "1 token ≈ 1 từ" cho dễ hình dung, nhưng đó chỉ là ước lượng. Độ dài chunk, giới hạn context và chi phí đều tính bằng token, không tính bằng từ.</div>
<div class="box trap"><span class="box-title">⚠️ Chunk quá to hay quá nhỏ đều hỏng</span>
Quá to: đoạn chứa nhiều chủ đề, tìm kém chính xác và tốn token. Quá nhỏ: mất ngữ cảnh, đoạn tìm được không đủ để trả lời.</div>

<h3>Embedding: biến mỗi đoạn thành vector số</h3>
<p><b>Vì sao?</b> Máy không so sánh trực tiếp "ý nghĩa" của hai đoạn chữ được. <b>Embedding model</b> nhận một chunk và trả ra một vector số, sao cho hai đoạn có <b>nghĩa gần nhau thì vector gần nhau</b>. Từ đó "tìm đoạn liên quan" trở thành phép tính khoảng cách giữa các vector.</p>
<ul>
<li>Có model chỉ nhận văn bản, có model nhận ảnh, và có model <b>đa phương thức (multimodal)</b> nhận được cả văn bản, ảnh, âm thanh.</li>
<li>Embedding model phải huấn luyện trên rất nhiều dữ liệu, nên thường do các công ty lớn làm ra; người xây RAG chọn dùng một model có sẵn.</li>
</ul>
<table>
<tr><th></th><th>Dùng qua API</th><th>Tự chạy trên máy chủ của mình (self-host)</th></tr>
<tr><td>Triển khai</td><td>✅ Rất đơn giản, không lo hạ tầng</td><td>❌ Tự cài đặt, cần GPU đủ mạnh</td></tr>
<tr><td>Chất lượng</td><td>✅ Thường cao</td><td>Tùy model; model mã nguồn mở nhỏ thường kém hơn một chút</td></tr>
<tr><td>Dữ liệu</td><td>❌ <b>Phải gửi dữ liệu cho bên thứ ba</b></td><td>✅ Dữ liệu không rời hệ thống; chạy được cả khi không có internet</td></tr>
<tr><td>Tùy biến</td><td>❌ Không fine-tune được model</td><td>✅ Có thể fine-tune cho lĩnh vực riêng</td></tr>
</table>
<div class="box tip"><span class="box-title">🎯 Mẹo cho câu tình huống</span>
Bệnh viện, ngân hàng, hoặc bất kỳ nơi nào đề nói "dữ liệu không được ra ngoài": chọn <b>self-host</b> (hoặc che dữ liệu nhạy cảm trước khi gửi). Dự án nhỏ, dữ liệu công khai, cần làm nhanh: chọn <b>API</b>.</div>

<h3>Vector database: nơi lưu và tìm vector</h3>
<p>Mỗi chunk cho ra một vector; kho lớn có hàng triệu vector. <b>Vector database</b> là cơ sở dữ liệu chuyên lưu, quản lý và <b>tìm nhanh những vector gần nhất</b> với một vector cho trước. Có loại miễn phí, hợp cho người mới và dự án nhỏ; loại trả phí hợp cho môi trường production khi dữ liệu lớn và cần phản hồi nhanh.</p>

<h3>Khi có câu hỏi: so khớp bằng cosine similarity</h3>
<ol class="steps">
<li>Câu hỏi đi qua <b>đúng embedding model đã dùng cho các chunk</b> → ra một vector cùng số chiều.</li>
<li>Vector database tìm các chunk có vector <b>tương đồng nhất</b> với vector câu hỏi. Thước đo phổ biến nhất là <b>cosine similarity</b>: đo góc giữa hai vector, <b>góc càng nhỏ thì càng giống</b>.</li>
<li>Các chunk tìm được (top-k) trở thành <b>context</b>.</li>
<li>Ghép prompt = câu hỏi + context + chỉ dẫn → gửi LLM → trả câu trả lời cho người dùng.</li>
</ol>
$$\text{cosine}(u, v) = \frac{u \cdot v}{\|u\|\,\|v\|}$$
<div class="box example"><span class="box-title">📝 Ví dụ tính</span>
Câu hỏi có vector \(q = (1, 0)\). Hai chunk có vector \(a = (2, 0)\) và \(b = (0, 3)\).<br>
\(\text{cosine}(q, a) = \dfrac{1\cdot 2 + 0\cdot 0}{1 \times 2} = 1\) → cùng hướng, rất liên quan.<br>
\(\text{cosine}(q, b) = \dfrac{1\cdot 0 + 0\cdot 3}{1 \times 3} = 0\) → vuông góc, không liên quan.<br>
Hệ thống chọn chunk \(a\). Để ý \(a\) dài gấp đôi \(q\) mà điểm vẫn là 1: cosine chỉ xét <b>hướng</b>, không xét độ dài.</div>
<div class="box trap"><span class="box-title">⚠️ Bẫy: phải dùng cùng một embedding model</span>
Chunk và câu hỏi phải được mã hóa bằng <b>cùng một model</b> thì mới nằm trong cùng một không gian vector và so sánh được. Đổi embedding model thì phải <b>tạo lại embedding cho toàn bộ kho</b>.</div>
<p class="small muted">Dàn ý mục 0 và 1b bám theo video "Tất tần tật về RAG cơ bản trong 20 phút" (link ở cuối bài). Phần trình bày, ví dụ tính và mẹo làm bài là của bài học này. Video chỉ nói mức tổng quát; lọc quyền, rerank và đánh giá ở các mục khác là phần đề hay hỏi thêm.</p>

<h2>2. RAG hay fine-tune?</h2>
<table>
<tr><th></th><th>RAG</th><th>Fine-tune</th></tr>
<tr><td>Làm gì</td><td>Đưa <b>kiến thức</b> vào lúc hỏi</td><td>Huấn luyện thêm để đổi <b>hành vi</b>/phong cách/định dạng</td></tr>
<tr><td>Kiến thức thay đổi thường xuyên</td><td>✅ Chỉ cần cập nhật kho</td><td>❌ Phải train lại</td></tr>
<tr><td>Cần trích nguồn</td><td>✅</td><td>❌ Khó</td></tr>
<tr><td>Tài nguyên (GPU)</td><td>Ít</td><td>Nhiều hơn</td></tr>
<tr><td>Hợp khi</td><td>Hỏi đáp tài liệu, quy định, FAQ</td><td>Tác vụ lặp lại với nhiều ví dụ chất lượng, cần giọng văn/format riêng</td></tr>
</table>
<p>Có thể <b>kết hợp</b>: fine-tune cho format/giọng văn, RAG cho kiến thức.</p>

<h2>3. Đánh giá RAG: lỗi do retrieval hay generation?</h2>
<p>Tạo bộ câu hỏi mà đã biết tài liệu đúng. Kiểm tra <b>retrieval</b> trước: đoạn đúng có nằm trong top-k không (recall@k)? Nếu retrieval đúng mà câu trả lời vẫn sai → lỗi ở <b>generation/prompt</b>. Theo dõi: tỉ lệ retrieve đúng, câu trả lời có bám nguồn (faithfulness), trích nguồn đúng, tỉ lệ từ chối hợp lý, latency.</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "thiết kế RAG chatbot nội bộ"</span>
<ol><li><b>Kiến trúc:</b> offline (làm sạch → chunk → metadata nguồn + quyền → embedding → index) và online (đăng nhập → lọc quyền → retrieve top-k → prompt có chỉ dẫn → trả lời kèm nguồn / từ chối khi thiếu).</li>
<li><b>Ví dụ hỏi–đáp:</b> "Quy định nghỉ phép năm 2026?" → trả lời 2–3 câu + [Nguồn: Sổ tay nhân sự v3, mục 4.2]. Câu ngoài tài liệu → "Chưa tìm thấy trong tài liệu, vui lòng liên hệ phòng nhân sự."</li>
<li><b>Kiểm thử:</b> bộ câu hỏi mẫu có đáp án; test phân quyền (nhóm A không thấy tài liệu B); test câu không có trong tài liệu; test prompt injection; cho nhóm nhỏ dùng thử, thu phản hồi, theo dõi chất lượng.</li></ol></div>
<div class="box tip"><span class="box-title">✍️ Khung tự luận "RAG hay fine-tune"</span>
Chọn <b>RAG</b> khi kiến thức thay đổi hàng tuần, cần nguồn, ít GPU: cập nhật kho không cần train lại. Fine-tune chỉ cân nhắc sau, nếu cần đổi giọng văn/format và có đủ dữ liệu mẫu. Kế hoạch: dựng RAG trên vài chục tài liệu → bộ test câu hỏi → đo retrieve đúng và trả lời đúng nguồn → mở rộng dần.</div>
<h2>Bổ sung: transfer learning</h2>
<p>Lấy một mô hình đã huấn luyện sẵn (pre-trained) trên dữ liệu lớn, giữ nguyên (đóng băng) phần lớn các lớp và huấn luyện lại vài lớp cuối cho bài toán mới. Cách này cần ít dữ liệu và ít tài nguyên hơn train từ đầu. Fine-tune LLM cũng là một dạng transfer learning.</p>
`},

{
  id: 'C8.3', module: 'C', topic: 'C8', minutes: 20,
  title: 'AI agent, tool calling & MCP (kỹ thuật agentic)',
  skills: ['ts.agent', 'ts.agent-essay'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Một người vừa thi khuyên nên đọc qua <b>các kỹ thuật agentic như RAG, embedding, MCP</b>. RAG và embedding đã có ở bài C8.2 và C7.1; bài này bổ sung phần còn thiếu: agent, tool calling và MCP. Chỉ cần nắm ở mức khái niệm và biết đưa vào câu tự luận thiết kế hệ thống.</div>

<h2>1. Từ chatbot đến agent</h2>
<table>
<tr><th></th><th>LLM / chatbot thường</th><th>RAG</th><th>AI agent</th></tr>
<tr><td>Làm gì</td><td>Trả lời từ kiến thức đã học</td><td>Tìm tài liệu rồi trả lời theo tài liệu</td><td>Tự lập kế hoạch, <b>gọi công cụ</b>, xem kết quả, lặp lại tới khi xong việc</td></tr>
<tr><td>Ví dụ</td><td>Giải thích một khái niệm</td><td>Hỏi đáp quy định nội bộ</td><td>"Kiểm tra đơn hàng 123 rồi tạo yêu cầu hoàn tiền"</td></tr>
</table>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
<b>Agent = LLM + công cụ + vòng lặp.</b> Vòng lặp: <b>suy nghĩ</b> (cần làm gì tiếp?) → <b>hành động</b> (gọi một công cụ) → <b>quan sát</b> (đọc kết quả) → lặp lại, cho tới khi có câu trả lời.</div>

<h2>2. Tool calling (function calling)</h2>
<ol class="steps">
<li>Ứng dụng mô tả cho model các công cụ có sẵn: tên, tác dụng, tham số.</li>
<li>Model <b>không tự chạy</b> gì cả. Nó chỉ sinh ra một <b>yêu cầu gọi công cụ</b> có cấu trúc, ví dụ <code>get_order(order_id="123")</code>.</li>
<li><b>Ứng dụng</b> kiểm tra quyền và tham số, chạy công cụ thật, rồi gửi kết quả lại cho model.</li>
<li>Model đọc kết quả, quyết định gọi tiếp công cụ khác hay trả lời người dùng.</li>
</ol>

<h2>3. MCP (Model Context Protocol)</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
MCP là một <b>giao thức mở</b> chuẩn hóa cách ứng dụng AI kết nối tới <b>công cụ và nguồn dữ liệu bên ngoài</b>. Hay được ví như <b>"cổng USB-C cho ứng dụng AI"</b>: một chuẩn cắm chung thay cho mỗi thiết bị một loại dây.</div>
<ul>
<li><b>Vấn đề nó giải quyết:</b> không có chuẩn thì N ứng dụng AI × M công cụ phải viết N × M tích hợp riêng. Có MCP: mỗi công cụ viết <b>một server</b>, dùng lại cho mọi ứng dụng (N + M).</li>
<li><b>Kiến trúc:</b> <b>host</b> (ứng dụng AI chứa LLM, ví dụ ứng dụng chat hoặc IDE) chạy các <b>MCP client</b>; mỗi client nối tới một <b>MCP server</b>; server bọc một công cụ hoặc nguồn dữ liệu.</li>
<li><b>Server cung cấp 3 thứ:</b> <b>tools</b> (hàm để model gọi), <b>resources</b> (dữ liệu để đọc), <b>prompts</b> (mẫu prompt dựng sẵn).</li>
<li>MCP <b>không phải</b> một model, không phải vector database, và <b>không thay thế RAG</b>. RAG là kỹ thuật đưa tri thức vào ngữ cảnh; MCP là chuẩn kết nối, có thể dùng để lấy dữ liệu cho RAG.</li>
</ul>
<p class="small muted">MCP được Anthropic công bố mã nguồn mở vào cuối năm 2024 và đang được nhiều công cụ AI hỗ trợ.</p>

<h2>4. Agentic RAG</h2>
<p>RAG thường truy xuất <b>đúng một lần</b> rồi trả lời. Trong agentic RAG, truy xuất là một công cụ: agent <b>tự quyết định</b> có cần tìm không, tìm bằng câu truy vấn nào, và tìm lại nếu chưa đủ bằng chứng.</p>

<h2>5. Rủi ro của agent & cách kiểm soát</h2>
<table>
<tr><th>Rủi ro</th><th>Kiểm soát</th></tr>
<tr><td>Agent thực hiện hành động sai có hậu quả thật (gửi email, chuyển tiền, xóa dữ liệu)</td><td><b>Quyền tối thiểu</b>; tách công cụ đọc và ghi; <b>người duyệt</b> với hành động rủi ro cao</td></tr>
<tr><td><b>Prompt injection</b> qua nội dung công cụ trả về (trang web, email chứa "bỏ qua chỉ dẫn…")</td><td>Coi kết quả công cụ là <b>dữ liệu không tin cậy</b>, không phải mệnh lệnh; giới hạn dữ liệu được gửi ra ngoài</td></tr>
<tr><td>Lặp vô hạn, tốn chi phí</td><td>Giới hạn số bước, timeout, ngân sách token</td></tr>
<tr><td>Khó biết agent đã làm gì</td><td><b>Ghi log</b> mọi lần gọi công cụ (ai, lúc nào, tham số, kết quả)</td></tr>
<tr><td>Dùng server/công cụ không đáng tin</td><td>Chỉ dùng công cụ đã kiểm duyệt</td></tr>
</table>

<h2>6. Khi nào KHÔNG cần agent?</h2>
<p>Việc <b>một bước, cố định</b> (phân loại email, tóm tắt văn bản, hỏi đáp tài liệu) thì dùng một lần gọi LLM hoặc RAG theo quy trình cố định: rẻ hơn, nhanh hơn, dễ kiểm soát hơn. Chỉ dùng agent khi việc cần <b>nhiều bước</b> và phải <b>tự quyết định bước tiếp theo</b>.</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "thiết kế trợ lý AI có dùng công cụ"</span>
<ol><li><b>Công cụ:</b> liệt kê từng công cụ và việc nó làm (tra đơn hàng, tìm chính sách bằng RAG, tạo yêu cầu…); ghi rõ cái nào chỉ đọc, cái nào thay đổi dữ liệu.</li>
<li><b>Luồng:</b> người dùng hỏi → model chọn công cụ → ứng dụng kiểm tra quyền và thực thi → model tổng hợp, trả lời kèm nguồn.</li>
<li><b>Kiểm soát:</b> quyền tối thiểu, người duyệt hành động rủi ro, chống prompt injection, giới hạn số bước, ghi log, không biết thì chuyển người.</li>
<li><b>Thử nghiệm:</b> bộ tình huống mẫu, nhóm nhỏ dùng trước, theo dõi tỉ lệ đúng và số lần gọi công cụ sai.</li></ol></div>
`},

{
  id: 'C8.4', module: 'C', topic: 'C8', minutes: 25,
  title: 'LLM engineering: gọi API, prompt template, đầu ra có cấu trúc, đánh giá, fine-tuning, multi-agent',
  skills: ['ts.llm-eng'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Bảng cấp độ của ban tổ chức đi từ "tạo template prompt" (L1), "thư viện prompt, chatbot no-code" (L2), "chatbot dùng LLM API, tự động hóa workflow" (L3) tới "ứng dụng agentic, RAG, benchmark và đánh giá mô hình" (L4) và "fine-tuning" (L5). Mảng <b>AI Application</b> ghi rõ: LLM Engineering, RAG, Multi-Agent. Bài này nối các mảnh đó lại.</div>

<h2>1. Gọi một LLM qua API</h2>
<pre><code class="language-python">messages = [
    {"role": "system", "content": "Bạn là trợ lý chăm sóc khách hàng. Trả lời ngắn gọn."},
    {"role": "user", "content": "Đơn hàng của tôi bao giờ tới?"},
]
# Gửi messages + tham số tới API của nhà cung cấp, nhận về câu trả lời của "assistant".</code></pre>
<table>
<tr><th>Thành phần</th><th>Ý nghĩa</th></tr>
<tr><td>Vai trò <code>system</code></td><td>Chỉ dẫn chung: vai trò, giọng điệu, giới hạn. Áp dụng cho cả cuộc hội thoại</td></tr>
<tr><td>Vai trò <code>user</code> / <code>assistant</code></td><td>Lời người dùng / câu trả lời của model</td></tr>
<tr><td><code>temperature</code></td><td>Độ ngẫu nhiên: thấp thì ổn định (trích xuất, phân loại), cao thì đa dạng (sáng tác)</td></tr>
<tr><td><code>max_tokens</code></td><td>Giới hạn độ dài câu trả lời</td></tr>
<tr><td>Context window</td><td>Tổng số token model xử lý được trong một lượt (đầu vào + đầu ra)</td></tr>
</table>
<ul>
<li><b>API không có trí nhớ:</b> mỗi lần gọi phải gửi lại lịch sử hội thoại. Hội thoại càng dài càng tốn token.</li>
<li><b>Chi phí</b> tính theo token đầu vào và đầu ra, thường đầu ra đắt hơn. Giảm chi phí: prompt gọn, model nhỏ cho việc dễ, lưu lại kết quả đã có (cache).</li>
<li>Cần xử lý: hết thời gian chờ, bị giới hạn tốc độ (thử lại sau), câu trả lời sai định dạng.</li>
</ul>

<h2>2. Prompt template và thư viện prompt</h2>
<p><b>Template</b> là prompt có chỗ trống để điền dữ liệu, dùng lại được nhiều lần và cho kết quả ổn định.</p>
<pre><code class="language-text">Vai trò: Bạn là chuyên viên phân loại yêu cầu hỗ trợ.
Nhiệm vụ: Phân loại yêu cầu dưới đây vào một trong các nhãn: {danh_sach_nhan}.
Ngữ cảnh: Công ty bán hàng trực tuyến; khách thường hỏi về giao hàng và hoàn tiền.
Ví dụ: "Tôi muốn trả hàng" → hoan_tien
Định dạng: Chỉ trả về một nhãn, không giải thích.
Ràng buộc: Không chắc thì trả về "khac".
Yêu cầu: {noi_dung}</code></pre>
<p>Sáu phần nên có: <b>vai trò, nhiệm vụ, ngữ cảnh, ví dụ, định dạng đầu ra, ràng buộc</b>.</p>
<p><b>Thư viện prompt</b>: nơi nhóm lưu các template đã thử nghiệm, có tên, mục đích, phiên bản, ví dụ đầu vào và đầu ra. Nhờ đó không ai phải viết lại từ đầu và kết quả nhất quán giữa mọi người.</p>

<h2>3. Đầu ra có cấu trúc</h2>
<p>Khi kết quả của LLM được <b>chương trình khác đọc</b> (không phải người), hãy yêu cầu trả về JSON theo một khuôn cố định, rồi <b>kiểm tra</b> trước khi dùng: đúng JSON không, đủ trường không, giá trị hợp lệ không. Sai thì thử lại hoặc chuyển người xử lý.</p>

<h2>4. Đánh giá ứng dụng LLM</h2>
<ol class="steps">
<li>Lập <b>bộ đánh giá</b>: vài chục đến vài trăm đầu vào tiêu biểu kèm kết quả mong đợi, có cả ca khó và ca dễ gây lỗi.</li>
<li>Chọn cách chấm: so khớp chính xác (phân loại, trích xuất); <b>người chấm</b> theo tiêu chí; hoặc dùng <b>một LLM khác chấm</b> theo thang điểm (nhanh, rẻ, nhưng phải đối chiếu với người chấm).</li>
<li>Mỗi lần đổi prompt hay đổi model thì <b>chạy lại cả bộ</b> để biết tốt lên hay tệ đi (kiểm thử hồi quy).</li>
</ol>
<p><b>Benchmark</b> là bộ đánh giá chuẩn dùng chung để so sánh nhiều model. Điểm benchmark công khai chỉ để tham khảo; thứ quyết định là điểm trên bộ đánh giá của <b>chính bài toán của mình</b>.</p>

<h2>5. Fine-tuning: khi nào và như thế nào</h2>
<table>
<tr><th>Thử theo thứ tự</th><th>Khi nào đủ</th></tr>
<tr><td>1. Viết prompt tốt hơn, thêm ví dụ</td><td>Phần lớn trường hợp</td></tr>
<tr><td>2. RAG</td><td>Model thiếu <b>kiến thức</b> riêng hoặc kiến thức hay thay đổi</td></tr>
<tr><td>3. Fine-tuning</td><td>Cần đổi <b>hành vi</b>: giọng văn, định dạng, tác vụ hẹp lặp lại, và đã có hàng trăm đến hàng nghìn ví dụ chất lượng</td></tr>
</table>
<ul>
<li><b>Fine-tuning toàn bộ:</b> cập nhật mọi trọng số, tốn tài nguyên.</li>
<li><b>LoRA / PEFT:</b> giữ nguyên model gốc, chỉ huấn luyện thêm một phần nhỏ tham số. Rẻ và nhanh hơn nhiều.</li>
<li>Rủi ro: overfit vào dữ liệu ít, quên khả năng cũ, tốn công bảo trì khi model gốc có bản mới. Luôn giữ một tập kiểm tra riêng.</li>
</ul>

<h2>6. Multi-agent</h2>
<p>Thay vì một agent làm tất cả, chia việc cho <b>nhiều agent chuyên biệt</b>, mỗi agent có vai trò, prompt và công cụ riêng.</p>
<table>
<tr><th>Mô hình phối hợp</th><th>Cách chạy</th></tr>
<tr><td>Điều phối – thực thi</td><td>Một agent điều phối chia việc cho các agent con rồi tổng hợp kết quả</td></tr>
<tr><td>Dây chuyền</td><td>Agent này làm xong chuyển cho agent kế tiếp (nghiên cứu → viết → kiểm tra)</td></tr>
<tr><td>Phản biện</td><td>Một agent làm, một agent khác soát lỗi và yêu cầu sửa</td></tr>
</table>
<ul>
<li><b>Lợi:</b> mỗi agent tập trung một việc, làm song song được, dễ kiểm tra từng phần.</li>
<li><b>Hại:</b> tốn token và thời gian hơn nhiều, lỗi của agent trước lan sang agent sau, khó debug.</li>
<li><b>Nguyên tắc:</b> bắt đầu bằng cách đơn giản nhất (một lần gọi LLM → quy trình cố định → một agent). Chỉ dùng multi-agent khi việc thật sự cần nhiều vai trò khác nhau.</li>
</ul>

<h2>7. Công cụ no-code/low-code và tự động hóa quy trình</h2>
<p>Công cụ kéo thả cho phép dựng chatbot hoặc nối các bước (nhận email → LLM phân loại → ghi vào bảng tính → gửi thông báo) mà gần như không cần viết code. Phù hợp để <b>thử ý tưởng nhanh</b> và tự động hóa việc lặp lại. Giới hạn: khó tùy biến sâu, khó kiểm thử và quản lý phiên bản, phụ thuộc nền tảng, và vẫn phải lo bảo mật dữ liệu đi qua các bước.</p>
`},

// ======================= C9 SẢN PHẨM AI =======================
{
  id: 'C9.1', module: 'C', topic: 'C9', minutes: 22,
  title: 'Tư duy sản phẩm AI: baseline, A/B test, trade-off, guardrail & human review',
  skills: ['c.product', 'c.product-essay', 'ai-responsibility.human-review', 'essay.llm.faq-privacy-handoff', 'ts.deploy-essay'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Tên module là "Kiến thức AI <b>& Tư duy sản phẩm AI</b>". Câu tự luận tình huống chấm theo việc bạn có nghĩ như người làm sản phẩm hay không: output gì, dữ liệu gì, đo bằng gì, rủi ro gì.</div>

<h2>1. Những khái niệm sản phẩm hay hỏi</h2>
<table>
<tr><th>Khái niệm</th><th>Ý nghĩa</th></tr>
<tr><td><b>Baseline không-AI</b></td><td>Cách làm đơn giản (rule-based, quy trình thủ công) để so sánh. AI phải tốt hơn baseline mới đáng làm.</td></tr>
<tr><td><b>A/B testing</b></td><td>Chia người dùng ngẫu nhiên: nhóm A (cũ) và B (mới), đo metric thật. <b>Chỉ đổi một yếu tố</b> mỗi lần để kết luận được.</td></tr>
<tr><td><b>Guardrail</b></td><td>Cơ chế giới hạn/kiểm soát output hoặc hành động rủi ro (lọc nội dung, chặn chủ đề, giới hạn quyền).</td></tr>
<tr><td><b>Human-in-the-loop</b></td><td>AI gợi ý + đưa bằng chứng; <b>người có thẩm quyền quyết định</b> với ca rủi ro cao.</td></tr>
<tr><td>Confidence thấp + rủi ro cao</td><td>Chuyển sang <b>luồng an toàn</b> hoặc người review; không tự động quyết định.</td></tr>
<tr><td>Trade-off model lớn/nhỏ</td><td>Chất lượng ↔ tốc độ, chi phí, khả năng chạy trên thiết bị.</td></tr>
<tr><td>Offline vs online evaluation</td><td>Offline: đo trên dữ liệu test. Online: đo trên người dùng thật (A/B, phản hồi).</td></tr>
</table>

<h2>2. Khung trả lời mọi câu "thiết kế tính năng AI"</h2>
<div class="box tip"><span class="box-title">✍️ Khung 6 ý (nhớ là đủ điểm rubric)</span>
<ol>
<li><b>Mục tiêu & output:</b> AI trả ra cái gì? (nhãn + điểm ưu tiên, gợi ý câu trả lời, thông tin trích xuất…)</li>
<li><b>Dữ liệu đầu vào:</b> ít nhất 2 nguồn hợp lý; nhắc quyền riêng tư.</li>
<li><b>Baseline không-AI:</b> rule theo từ khóa / quy trình thủ công.</li>
<li><b>Metric:</b> metric mô hình (recall/precision/F1) + metric sản phẩm (thời gian xử lý, tỉ lệ dùng gợi ý, sự hài lòng).</li>
<li><b>Rủi ro & kiểm soát:</b> sai, bias, lộ dữ liệu → human review ca quan trọng, guardrail, ngưỡng confidence, log.</li>
<li><b>Triển khai & theo dõi:</b> pilot nhóm nhỏ → A/B → mở rộng; monitor chất lượng, drift, phản hồi; có rollback.</li>
</ol></div>

<h2>3. Ví dụ ngắn</h2>
<p><b>"AI gợi ý câu trả lời cho nhân viên CS, tăng năng suất mà không trả lời sai":</b> AI chỉ <b>gợi ý</b>, nhân viên duyệt rồi mới gửi; gợi ý dựa trên RAG từ tài liệu đã duyệt và có nguồn; chủ đề nhạy cảm (hoàn tiền, pháp lý) không gợi ý tự động; đo thời gian xử lý, tỉ lệ nhân viên dùng/sửa gợi ý, khiếu nại; pilot một nhóm trước.</p>
<p><b>"Trợ lý FAQ, không gửi dữ liệu nhạy cảm, yêu cầu quan trọng phải chuyển người":</b> bước <b>phân luồng</b>: FAQ thường → trả lời tự động từ tài liệu đã duyệt; yêu cầu đổi thông tin/hoàn tiền/quyết định lớn → <b>handoff</b> cho người. <b>Che/loại dữ liệu nhạy cảm</b> trước khi gửi dịch vụ ngoài. Test bằng bộ câu hỏi mẫu, giám sát tỉ lệ chuyển người và phản hồi.</p>
<p><b>"Chọn model 6B nhanh/rẻ hay 8B chất lượng cho app mobile":</b> tiêu chí: chất lượng trên bộ test của chính tác vụ, độ trễ, chi phí/thiết bị, bộ nhớ, quyền riêng tư (chạy on-device?). Thử cả hai trên cùng bộ test rồi chọn model nhỏ nhất đạt ngưỡng chất lượng.</p>
`},

{
  id: 'C9.2', module: 'C', topic: 'C9', minutes: 22,
  title: 'AI Business & Product: hiểu bài toán doanh nghiệp, tính khả thi, hiệu quả, MVP',
  skills: ['ts.ai-business', 'ts.ai-business-essay'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ban tổ chức ghi rõ mảng <b>AI Business & Product</b>: "hiểu bài toán doanh nghiệp, quản lý sản phẩm AI và đánh giá hiệu quả, tính khả thi của sản phẩm". Bài C9.1 dạy cách thiết kế một tính năng AI. Bài này lùi lại một bước: <b>có nên làm không, có làm được không, và làm xong thì đo bằng gì</b>.</div>

<h2>1. Hiểu bài toán doanh nghiệp trước khi nghĩ tới model</h2>
<ol class="steps">
<li><b>Vấn đề là gì, của ai?</b> Ai đang khổ vì nó, khổ thế nào, hiện họ giải quyết ra sao?</li>
<li><b>Đo bằng con số nào?</b> Thời gian xử lý, chi phí, doanh thu, tỉ lệ lỗi, mức hài lòng.</li>
<li><b>Thành công trông như thế nào?</b> Ví dụ "giảm thời gian trả lời từ 4 giờ xuống 30 phút".</li>
<li><b>Ràng buộc:</b> ngân sách, thời hạn, pháp lý, dữ liệu, con người.</li>
</ol>
<div class="box idea"><span class="box-title">💡 Câu hỏi quan trọng nhất</span><b>Có cần AI không?</b> Nếu vài quy tắc đơn giản hoặc sửa quy trình đã giải quyết được thì đừng dùng AI. AI đáng dùng khi quy tắc quá nhiều hoặc không viết ra được, có dữ liệu để học, và chấp nhận được việc thỉnh thoảng sai.</div>

<h2>2. Đánh giá tính khả thi</h2>
<table>
<tr><th>Khía cạnh</th><th>Câu hỏi</th></tr>
<tr><td><b>Dữ liệu</b></td><td>Có dữ liệu không? Đủ nhiều, đủ sạch, có nhãn không? Có được phép dùng không?</td></tr>
<tr><td><b>Kỹ thuật</b></td><td>Bài toán này đã có ai giải được ở mức chất lượng cần thiết chưa? Độ trễ có đáp ứng không?</td></tr>
<tr><td><b>Kinh tế</b></td><td>Lợi ích có lớn hơn chi phí xây dựng và vận hành không?</td></tr>
<tr><td><b>Vận hành</b></td><td>Ai dùng, ai bảo trì, có gắn được vào quy trình hiện tại không?</td></tr>
<tr><td><b>Pháp lý, đạo đức</b></td><td>Có rủi ro về quyền riêng tư, thiên lệch, trách nhiệm khi sai không?</td></tr>
</table>

<h2>3. Chi phí, lợi ích, ROI</h2>
<div class="box formula">$$ROI = \frac{\text{lợi ích} - \text{chi phí}}{\text{chi phí}}$$</div>
<ul>
<li><b>Chi phí:</b> nhân sự, dữ liệu và gán nhãn, hạ tầng hoặc phí API theo token, bảo trì, giám sát, xử lý khi sai.</li>
<li><b>Lợi ích:</b> giờ công tiết kiệm, doanh thu tăng, lỗi giảm.</li>
<li><b>Ví dụ:</b> hệ thống tiết kiệm 500 giờ/tháng, mỗi giờ 100 nghìn đồng → lợi ích 50 triệu/tháng. Chi phí vận hành 20 triệu/tháng → ROI = (50 − 20)/20 = 1,5 = 150%.</li>
</ul>
<p><b>Tự xây hay mua?</b> Dùng API hoặc sản phẩm có sẵn thì nhanh và ít rủi ro, hợp khi bài toán phổ biến. Tự xây khi đó là lợi thế cạnh tranh cốt lõi, dữ liệu quá nhạy cảm, hoặc quy mô lớn tới mức tự làm rẻ hơn.</p>

<h2>4. MVP và làm theo vòng lặp</h2>
<ul>
<li><b>MVP</b> (sản phẩm khả dụng tối thiểu): phiên bản nhỏ nhất đủ để người dùng thật dùng thử và cho phản hồi.</li>
<li>Với AI, luôn bắt đầu bằng <b>baseline đơn giản</b> để biết phương án phức tạp có đáng hay không.</li>
<li>Vòng lặp: <b>làm nhỏ → đo → học → cải tiến</b>. Dự án AI có nhiều bất định hơn phần mềm thường, vì chưa chắc dữ liệu cho phép đạt chất lượng mong muốn.</li>
</ul>

<h2>5. Đo hiệu quả sản phẩm AI</h2>
<table>
<tr><th>Tầng</th><th>Ví dụ</th></tr>
<tr><td><b>Chỉ số mô hình</b></td><td>Precision, recall, F1, tỉ lệ trả lời đúng trên bộ đánh giá</td></tr>
<tr><td><b>Chỉ số sản phẩm</b></td><td>Tỉ lệ người dùng chấp nhận gợi ý, tỉ lệ dùng lại, thời gian hoàn thành việc</td></tr>
<tr><td><b>Chỉ số kinh doanh</b></td><td>Chi phí mỗi yêu cầu, doanh thu, số khiếu nại</td></tr>
<tr><td><b>Chỉ số an toàn</b> (không được xấu đi)</td><td>Tỉ lệ trả lời sai nghiêm trọng, độ trễ, khiếu nại về quyền riêng tư</td></tr>
</table>
<p>Model tốt hơn trên bộ kiểm tra <b>chưa chắc</b> làm sản phẩm tốt hơn. Phải đo trên người dùng thật (A/B test).</p>

<h2>6. Xếp ưu tiên</h2>
<p>Khi có nhiều ý tưởng, so sánh theo <b>tác động</b> (bao nhiêu người, lợi ích bao nhiêu), <b>độ chắc chắn</b> (có bằng chứng không) và <b>công sức</b>. Làm trước việc tác động lớn, công sức nhỏ.</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "đánh giá một đề xuất dùng AI"</span>
<ol><li><b>Bài toán:</b> của ai, đo bằng chỉ số nào, hiện đang ở mức nào.</li>
<li><b>Có cần AI không:</b> so với quy tắc đơn giản hoặc đổi quy trình.</li>
<li><b>Khả thi:</b> dữ liệu, kỹ thuật, kinh tế, vận hành, pháp lý.</li>
<li><b>Chi phí và lợi ích:</b> ước lượng bằng con số, kể cả chi phí khi model sai.</li>
<li><b>Cách thử:</b> MVP nhỏ, baseline, tiêu chí thành công đặt ra từ trước.</li>
<li><b>Kết luận:</b> làm, chưa làm, hay không làm, và điều kiện để đổi quyết định.</li></ol></div>
`},

// ======================= C10 TRIỂN KHAI =======================
{
  id: 'C10.1', module: 'C', topic: 'C10', minutes: 20,
  title: 'Triển khai, giám sát (build–test–monitor) & xử lý sự cố',
  skills: ['ml.deployment.basic-monitoring', 'c.monitoring', 'essay.ml.deploy-model-api', 'essay.ml.debug-api-preprocessing', 'mlq.deploy'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion ghi đề tự luận có <b>"1 câu build, 1 câu test, 1 câu monitor"</b> và tình huống <b>chatbot ngân hàng trả lời sai lãi suất</b>. Bài này cho bạn khung trả lời các câu đó.</div>

<h2>1. Build → Test → Monitor (từ Notion)</h2>
<table>
<tr><th>Giai đoạn</th><th>Làm gì</th></tr>
<tr><td><b>Build</b></td><td>Thu thập dữ liệu → feature engineering → train mô hình → đóng gói thành API (validate input JSON → preprocessing <b>giống lúc train</b> → predict → trả label/score/model_version)</td></tr>
<tr><td><b>Test</b></td><td>Đánh giá offline (RMSE/MAE, F1…) trên test; test API (schema, input thiếu/sai kiểu, độ trễ); A/B testing / pilot</td></tr>
<tr><td><b>Monitor</b></td><td>Chất lượng mô hình theo thời gian, <b>data drift</b>, phân phối dự đoán, latency, lỗi, chi phí, phản hồi người dùng → chiến lược retrain</td></tr>
</table>
<pre><code>Dữ liệu mới → cập nhật feature → retrain → validation → redeploy</code></pre>

<h2>2. Drift</h2>
<ul><li><b>Data drift:</b> phân phối input thay đổi (VD người dùng trẻ hơn, mùa vụ khác).</li><li><b>Concept drift:</b> quan hệ input → output thay đổi (VD hành vi gian lận kiểu mới).</li></ul>
<p>Phát hiện: so sánh phân phối input/dự đoán với lúc train; theo dõi metric khi có nhãn thật.</p>

<h2>3. Triển khai an toàn</h2>
<ul>
<li><b>Lưu version</b> model + dữ liệu + code; luôn có khả năng <b>rollback</b>.</li>
<li><b>Shadow</b>: model mới chạy song song nhưng không ảnh hưởng người dùng. <b>Canary</b>: mở cho 5% traffic trước.</li>
<li><b>Batch</b> (chấm điểm định kỳ) vs <b>real-time API</b> (cần trả lời ngay).</li>
<li>Không log dữ liệu nhạy cảm thô.</li>
</ul>

<h2>4. Xử lý sự cố (incident)</h2>
<div class="box tip"><span class="box-title">✍️ Khung tự luận "chatbot ngân hàng trả lời sai lãi suất"</span>
<ol>
<li><b>Ngăn thiệt hại ngay:</b> tạm dừng / tắt tính năng trả lời lãi suất, hiển thị thông báo và chuyển sang nhân viên hoặc trang chính thức. Rollback nếu do bản mới.</li>
<li><b>Thông báo & khắc phục hậu quả:</b> báo các bên liên quan; liên hệ khách hàng bị ảnh hưởng (dựa trên log).</li>
<li><b>Tìm nguyên nhân gốc:</b> tài liệu cũ trong kho RAG? retrieval sai? prompt? model bịa (hallucination)?</li>
<li><b>Sửa & kiểm thử:</b> cập nhật nguồn dữ liệu chính thức, yêu cầu trích nguồn, câu hỏi về số liệu tài chính lấy trực tiếp từ hệ thống/API thay vì để LLM tự sinh; thêm test cho các câu này.</li>
<li><b>Phòng ngừa:</b> monitor, guardrail cho chủ đề nhạy cảm, human review, quy trình cập nhật tài liệu.</li>
</ol></div>

<div class="box tip"><span class="box-title">✍️ Khung "notebook đúng nhưng API sai"</span>
Debug theo thứ tự: chạy <b>cùng một input</b> qua notebook và API, so sánh từng bước → kiểm tra schema/kiểu dữ liệu (VD tuổi gửi dạng chuỗi), thứ tự feature, xử lý missing, scaler/encoder có phải bản đã fit lúc train không, version model. Phòng ngừa: đóng gói preprocessing cùng model (pipeline), validate schema đầu vào, test so khớp notebook–API trước khi deploy, monitor phân phối dự đoán.</div>
`},

{
  id: 'C10.2', module: 'C', topic: 'C10', minutes: 22,
  title: 'Hạ tầng dữ liệu & MLOps: data pipeline, lake, warehouse, lakehouse, synthetic data',
  skills: ['ts.infra'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ban tổ chức ghi mảng <b>AI Infrastructure</b>: "xây dựng hạ tầng và nền tảng dữ liệu cho AI (Data Pipeline, Lakehouse, Synthetic Data)". Ở mức đầu vào, bạn chỉ cần biết mỗi khái niệm là gì, dùng để làm gì và khác nhau chỗ nào.</div>

<h2>1. Data pipeline</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>Data pipeline là <b>dây chuyền tự động</b> đưa dữ liệu từ nơi sinh ra (ứng dụng, cảm biến, log) tới nơi dùng (báo cáo, huấn luyện model), qua các bước lấy, làm sạch, biến đổi, lưu.</div>
<table>
<tr><th></th><th>ETL</th><th>ELT</th></tr>
<tr><td>Thứ tự</td><td>Lấy → <b>biến đổi</b> → nạp</td><td>Lấy → nạp → <b>biến đổi</b></td></tr>
<tr><td>Biến đổi ở đâu</td><td>Trước khi vào kho</td><td>Ngay trong kho, sau khi đã nạp dữ liệu thô</td></tr>
<tr><td>Hợp khi</td><td>Kho đích yêu cầu dữ liệu sạch, có khuôn sẵn</td><td>Kho đủ mạnh, muốn giữ dữ liệu thô để dùng nhiều cách</td></tr>
</table>
<table>
<tr><th></th><th>Xử lý theo lô (batch)</th><th>Xử lý theo luồng (streaming)</th></tr>
<tr><td>Cách chạy</td><td>Gom dữ liệu rồi chạy định kỳ (mỗi đêm)</td><td>Xử lý liên tục khi dữ liệu vừa tới</td></tr>
<tr><td>Ví dụ</td><td>Báo cáo doanh thu ngày, huấn luyện lại model hàng tuần</td><td>Phát hiện gian lận khi đang giao dịch</td></tr>
</table>
<p>Một pipeline tốt cần: chạy tự động theo lịch và đúng thứ tự phụ thuộc (điều phối), <b>kiểm tra chất lượng</b> dữ liệu ở từng bước, ghi log và cảnh báo khi lỗi, chạy lại được mà không tạo dữ liệu trùng.</p>

<h2>2. Nơi lưu dữ liệu</h2>
<table>
<tr><th></th><th>Data warehouse</th><th>Data lake</th><th>Lakehouse</th></tr>
<tr><td>Lưu gì</td><td>Dữ liệu <b>có cấu trúc</b>, đã làm sạch</td><td><b>Mọi loại</b> dữ liệu ở dạng thô (bảng, ảnh, video, log)</td><td>Mọi loại, như data lake</td></tr>
<tr><td>Khuôn dữ liệu</td><td>Định sẵn trước khi ghi</td><td>Áp khuôn khi đọc</td><td>Có lớp quản lý khuôn và giao dịch trên nền lưu trữ rẻ</td></tr>
<tr><td>Mạnh</td><td>Truy vấn SQL nhanh, đáng tin cho báo cáo</td><td>Rẻ, linh hoạt, hợp cho học máy</td><td>Vừa phân tích SQL vừa học máy trên cùng một kho</td></tr>
<tr><td>Yếu</td><td>Đắt, không hợp dữ liệu phi cấu trúc</td><td>Dễ thành "đầm lầy" dữ liệu nếu không quản lý</td><td>Phức tạp hơn khi thiết lập</td></tr>
</table>
<p><b>Lakehouse</b> = lưu trữ rẻ và linh hoạt của data lake + khả năng quản lý, giao dịch và truy vấn của data warehouse.</p>

<h2>3. Dữ liệu tổng hợp (synthetic data)</h2>
<p>Dữ liệu <b>do máy tạo ra</b> (bằng quy tắc, mô phỏng, hoặc mô hình sinh) thay vì thu từ thế giới thật.</p>
<table>
<tr><th>Dùng khi</th><th>Rủi ro</th></tr>
<tr><td>Dữ liệu thật hiếm hoặc đắt (tình huống tai nạn cho xe tự lái)</td><td>Không giống thực tế → model học tốt trên dữ liệu giả nhưng kém trên dữ liệu thật</td></tr>
<tr><td>Dữ liệu thật nhạy cảm (y tế, tài chính)</td><td>Vẫn có thể lộ thông tin nếu sinh ra quá sát dữ liệu gốc</td></tr>
<tr><td>Cần bù cho lớp hiếm, cần ca thử nghiệm</td><td>Nhân bản luôn thiên lệch của dữ liệu hoặc mô hình tạo ra nó</td></tr>
</table>
<p><b>Nguyên tắc:</b> dùng để bổ sung chứ không thay hoàn toàn dữ liệu thật, và <b>luôn đánh giá model trên dữ liệu thật</b>.</p>

<h2>4. MLOps: đưa model vào vận hành một cách có kỷ luật</h2>
<table>
<tr><th>Thành phần</th><th>Việc nó làm</th></tr>
<tr><td>Đánh phiên bản code, dữ liệu, model</td><td>Tái lập được kết quả, quay lại bản cũ khi cần</td></tr>
<tr><td>Theo dõi thí nghiệm</td><td>Ghi lại tham số, dữ liệu, kết quả của từng lần huấn luyện</td></tr>
<tr><td>Kho model (model registry)</td><td>Lưu các phiên bản model kèm trạng thái: thử nghiệm, đang dùng, đã ngừng</td></tr>
<tr><td>Feature store</td><td>Kho đặc trưng dùng chung, đảm bảo lúc huấn luyện và lúc chạy thật tính giống nhau</td></tr>
<tr><td>Container (Docker)</td><td>Đóng gói code cùng môi trường để chạy giống nhau ở mọi máy</td></tr>
<tr><td>CI/CD</td><td>Tự động kiểm thử và triển khai mỗi khi có thay đổi</td></tr>
<tr><td>Giám sát</td><td>Chất lượng, drift, độ trễ, chi phí (bài C10.1)</td></tr>
</table>
<p>Điểm khác với phần mềm thường: hệ thống AI có <b>ba thứ cùng thay đổi</b> là code, dữ liệu và model. Dữ liệu đổi thì hành vi hệ thống đổi dù không ai sửa code.</p>
`},

// ======================= C11 MỞ RỘNG (ÍT RA THI) =======================
{
  id: 'C11.1', module: 'C', topic: 'C11', minutes: 25,
  title: 'Mở rộng: Deep Learning & ML nâng cao (ít khả năng ra thi)',
  skills: ['mlq.advanced'],
  content: String.raw`
<div class="box trap"><span class="box-title">⚠️ Đọc trước</span>
Bài này gom các khái niệm <b>nâng cao</b> trong bộ quiz ML/DL của bạn. Đề thi đầu vào ở mức "áp dụng cơ bản", nên phần này <b>ít khả năng ra thi</b> và <b>không có trong thi thử</b>. Chỉ học khi đã nắm chắc các bài C0–C10.</div>

<h2>1. Huấn luyện mạng sâu</h2>
<table>
<tr><th>Khái niệm</th><th>Ý nghĩa ngắn</th></tr>
<tr><td>Batch Normalization</td><td>Chuẩn hóa đầu ra mỗi lớp theo mean/variance của batch → train ổn định, nhanh hơn. VD batch [2, 4, 4, 6]: mean = 4, variance = 2.</td></tr>
<tr><td>Xavier / He initialization</td><td>Khởi tạo trọng số để phương sai ổn định qua các lớp; He hợp với ReLU.</td></tr>
<tr><td>Learning rate scheduling / warmup</td><td>Thay đổi learning rate trong lúc train; warmup = bắt đầu nhỏ rồi tăng dần.</td></tr>
<tr><td>Data augmentation</td><td>Lật, xoay, cắt ảnh để tăng dữ liệu (thị giác máy tính). Tránh phép biến đổi làm đổi nhãn (lật số 6 thành 9).</td></tr>
<tr><td>GELU, Swish, ELU, Maxout</td><td>Các hàm kích hoạt thay thế ReLU, trơn hơn hoặc xử lý nhánh âm tốt hơn. GELU dùng trong BERT/GPT.</td></tr>
<tr><td>Softmax tràn số</td><td>\(e^x\) rất lớn gây overflow → thực tế trừ đi giá trị lớn nhất trước khi tính.</td></tr>
<tr><td>Cổng của LSTM/GRU</td><td>Dùng sigmoid (giá trị 0–1) để "mở/đóng" luồng thông tin. Tanh có dạng chữ S giống sigmoid nhưng trong khoảng (−1, 1).</td></tr>
</table>

<h2>2. Mạng CNN: tính tham số & kích thước</h2>
<ul>
<li>Một bộ lọc 3×3 trên đầu vào 3 kênh: 3 × 3 × 3 trọng số + 1 bias = <b>28</b> tham số.</li>
<li>Transposed convolution (phóng to): \(O = (I - 1)S + F - 2P\). VD I = 2, S = 2, F = 3, P = 0 → 5.</li>
<li>Receptive field: mỗi lớp conv 3×3 stride 1 mở rộng thêm 2 → 3×3, 5×5, 7×7…</li>
</ul>

<h2>3. Thị giác máy tính</h2>
<ul>
<li><b>Bounding box</b>: 4 số (x tâm, y tâm, rộng, cao). <b>IoU</b> = diện tích giao / diện tích hợp của hai box; cũng dùng cho segmentation.</li>
<li><b>AP</b> tính từ đường precision–recall; <b>mAP</b> = trung bình AP của các lớp (object detection).</li>
</ul>

<h2>4. Giảm chiều, phân cụm, gợi ý</h2>
<ul>
<li><b>PCA</b>: giảm chiều, giữ các hướng có phương sai lớn nhất. Tỉ lệ phương sai giải thích của PC1 = \(\lambda_1/\sum\lambda\). VD 10/(10 + 2 + 0,5) = 80%.</li>
<li><b>t-SNE</b>: trực quan hóa dữ liệu nhiều chiều xuống 2D/3D.</li>
<li><b>Curse of dimensionality</b>: quá nhiều chiều khiến dữ liệu thưa, khoảng cách kém ý nghĩa.</li>
<li><b>Autoencoder</b>: nén rồi tái tạo dữ liệu → giảm chiều, khử nhiễu, phát hiện bất thường.</li>
<li><b>DBSCAN</b>: phân cụm theo mật độ, không cần chọn k, phát hiện được điểm nhiễu.</li>
<li><b>Hệ gợi ý</b>: content-based (dựa đặc tính sản phẩm và sở thích) vs collaborative filtering (dựa hành vi người dùng tương tự, nền tảng là SVD/phân rã ma trận). <b>Cold start</b>: người dùng/sản phẩm mới chưa có dữ liệu.</li>
</ul>

<h2>5. Các hướng học khác</h2>
<ul>
<li><b>GAN</b>: Generator tạo dữ liệu giả, Discriminator phân biệt thật/giả; hai bên huấn luyện đối kháng.</li>
<li><b>Học tăng cường</b>: MDP gồm trạng thái, hành động, phần thưởng; Q-learning là phương pháp dựa trên giá trị; <b>exploration vs exploitation</b>: thử cái mới hay dùng cái đã biết tốt.</li>
<li><b>Self-supervised learning</b>: tự tạo nhãn từ chính dữ liệu (VD che từ rồi đoán). <b>Contrastive learning</b>: kéo gần mẫu giống nhau, đẩy xa mẫu khác nhau.</li>
<li><b>Federated learning</b>: dữ liệu ở lại thiết bị, chỉ gửi cập nhật mô hình → bảo vệ quyền riêng tư.</li>
<li>Entropy của đồng xu công bằng = 1 bit (độ bất định lớn nhất).</li>
</ul>

<h2>6. Sinh văn bản & triển khai</h2>
<ul>
<li><b>Encoder–decoder (seq2seq)</b>: dịch máy, sinh văn bản. <b>Beam search</b>: giữ top-k chuỗi tốt nhất khi sinh. <b>BLEU</b> chấm dịch máy, <b>ROUGE</b> chấm tóm tắt.</li>
<li><b>Nén mô hình</b>: quantization (FP32 → INT8, nhỏ và nhanh hơn), pruning (bỏ trọng số ít quan trọng). <b>ONNX/TensorRT</b>: tối ưu khi triển khai.</li>
</ul>
`},

]);
