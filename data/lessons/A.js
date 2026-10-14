// Bài học Module A — Toán & Tư duy định lượng.
// Mỗi bài: skills = các dạng đề (skill trong data/questions.js) được luyện sau khi học.
// Công thức: \( ... \) (inline) và $$ ... $$ (khối), render bằng KaTeX.
window.LESSONS = (window.LESSONS || []).concat([

// ======================= A0 NỀN TẢNG TÍNH TOÁN =======================
{
  id: 'A0.1', module: 'A', topic: 'A0', minutes: 12,
  title: 'Phần trăm & tỉ lệ',
  skills: ['e.percentage', 'e.ratio', 'ts.percent'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề hay có câu "giá tăng từ 90 lên 112, tăng bao nhiêu %", "tỉ lệ Dev : Tester = 4 : 3". Trong AI bạn cũng đọc số liệu dạng này liên tục: "accuracy tăng từ 90% lên 93%".</div>

<h2>1. Phần trăm là gì?</h2>
<p>"Phần trăm" = "trên 100". \(20\%\) nghĩa là 20 phần trên 100 phần, tức \(\frac{20}{100} = 0{,}2\).</p>
<ul>
  <li>Đổi % → số thập phân: chia 100. \(35\% = 0{,}35\)</li>
  <li>Tính 35% của 80: \(0{,}35 \times 80 = 28\)</li>
</ul>

<h2>2. Phần trăm thay đổi (tăng/giảm)</h2>
<div class="box formula">
$$\text{\% thay đổi} = \frac{\text{giá trị mới} - \text{giá trị cũ}}{\text{giá trị cũ}} \times 100\%$$
</div>
<p><b>Ví dụ:</b> Giá tăng từ 90 lên 112. Tăng bao nhiêu %?</p>
<ol class="steps">
  <li>Chênh lệch: \(112 - 90 = 22\)</li>
  <li>Chia cho giá trị <b>cũ</b>: \(22 / 90 \approx 0{,}244\)</li>
  <li>Nhân 100: \(\approx 24\%\)</li>
</ol>
<p><b>Ví dụ giảm:</b> 100 → 80: chênh \(-20\), \(-20/100 = -20\%\) → giảm 20%.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
  <li><b>Chia nhầm cho giá trị mới.</b> Luôn chia cho giá trị <b>cũ</b> (giá trị gốc).</li>
  <li>Tăng 20% rồi giảm 20% <b>không</b> về chỗ cũ: 100 → 120 → 96.</li>
  <li>Accuracy 90% → 93% là tăng <b>3 điểm phần trăm</b>, nhưng tăng tương đối \(3/90 \approx 3{,}3\%\).</li>
</ul></div>

<h2>3. Tỉ lệ a : b</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Tỉ lệ 4 : 3 nghĩa là chia tổng thành \(4 + 3 = 7\) <b>phần bằng nhau</b>; nhóm đầu lấy 4 phần, nhóm sau lấy 3 phần.</div>
<p><b>Ví dụ:</b> Dev : Tester = 4 : 3, tổng 35 người. Số Dev?</p>
<ol class="steps">
  <li>Tổng số phần: \(4 + 3 = 7\)</li>
  <li>Giá trị một phần: \(35 / 7 = 5\) người</li>
  <li>Dev: \(4 \times 5 = 20\) người (Tester: \(3 \times 5 = 15\), cộng lại đúng 35 ✓)</li>
</ol>

<div class="box tip"><span class="box-title">⚡ Mẹo làm nhanh khi thi</span>
Ước lượng trước khi tính: 22/90 "hơi hơn 1/4 một chút" → khoảng 24–25%. Loại ngay các đáp án quá xa. Với tỉ lệ, kiểm tra lại bằng cách cộng các nhóm xem có ra đúng tổng không.</div>
<h2>Đầy đủ: các dạng phần trăm & tỉ lệ</h2>
<p class="small muted">p viết dạng thập phân: 20% = 0,2.</p>
<table>
<tr><th>Bài toán</th><th>Công thức</th><th>Ví dụ</th></tr>
<tr><td>p% của A</td><td>\(A \times p\)</td><td>15% của 200 = 30</td></tr>
<tr><td>A là bao nhiêu % của B</td><td>\(A / B \times 100\%\)</td><td>30/200 = 15%</td></tr>
<tr><td>Biết phần = p% của tổng → tìm tổng</td><td>\(\text{phần} / p\)</td><td>30 là 15% → tổng = 30/0,15 = 200</td></tr>
<tr><td>Sau khi tăng p%</td><td>\(A(1 + p)\)</td><td>100 tăng 20% → 120</td></tr>
<tr><td>Sau khi giảm p%</td><td>\(A(1 - p)\)</td><td>120 giảm 20% → 96</td></tr>
<tr><td>Tìm giá gốc khi biết giá sau tăng p%</td><td>\(\text{mới} / (1 + p)\)</td><td>Sau tăng 25% là 150 → gốc 150/1,25 = 120</td></tr>
<tr><td>Thay đổi liên tiếp</td><td>\(A(1+p_1)(1+p_2)\cdots\) (giảm thì p âm)</td><td>+20% rồi −20%: 1,2 × 0,8 = 0,96 → <b>giảm 4%</b></td></tr>
<tr><td>Lãi kép / tăng trưởng mũ</td><td>\(A(1 + r)^n\)</td><td>100 triệu, 10%/năm, 2 năm → 121 triệu</td></tr>
<tr><td>Tỉ lệ 3 phần a : b : c, tổng T</td><td>một phần = \(T / (a+b+c)\)</td><td>2 : 3 : 5, tổng 50 → 10, 15, 25</td></tr>
</table>
`},

{
  id: 'A0.2', module: 'A', topic: 'A0', minutes: 12,
  title: 'Phương trình bậc nhất & trung bình có trọng số',
  skills: ['e.algebra', 'e.weighted-average', 'ts.algebra'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Giải phương trình là kỹ năng nền cho mọi bài toán sau (hệ phương trình, tìm ẩn trong ma trận). Trung bình có trọng số chính là phép tính một nơ-ron làm: \(w_1x_1 + w_2x_2 + b\).</div>

<h2>1. Phương trình bậc nhất</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Phương trình như một cái <b>cân thăng bằng</b>: làm gì với bên trái thì phải làm y như vậy với bên phải. "Chuyển vế" một số hạng sang bên kia thì <b>đổi dấu</b>.</div>
<p><b>Ví dụ:</b> \(3x + 5 = 2x + 9\)</p>
<ol class="steps">
  <li>Đưa \(x\) về trái, số về phải: \(3x - 2x = 9 - 5\)</li>
  <li>Rút gọn: \(x = 4\)</li>
  <li>Thử lại: \(3 \cdot 4 + 5 = 17\) và \(2 \cdot 4 + 9 = 17\) ✓</li>
</ol>
<p><b>Ví dụ 2:</b> \(3x + 14 = 2x + 27 \Rightarrow x = 27 - 14 = 13\).</p>

<h2>2. Trung bình có trọng số</h2>
<p>Trung bình thường coi mọi giá trị quan trọng như nhau. Trung bình <b>có trọng số</b> cho mỗi giá trị một "độ quan trọng" \(w\).</p>
<div class="box formula">
$$\bar{x} = w_1 x_1 + w_2 x_2 + \dots + w_n x_n \quad (\text{khi } w_1 + \dots + w_n = 1)$$
Nếu trọng số không cộng lại bằng 1 (ví dụ số tín chỉ) thì chia cho tổng trọng số:
$$\bar{x} = \frac{w_1 x_1 + \dots + w_n x_n}{w_1 + \dots + w_n}$$
</div>
<p><b>Ví dụ:</b> Bài 1 = 62 điểm, trọng số 40%; bài 2 = 81 điểm, trọng số 60%.</p>
<ol class="steps">
  <li>\(0{,}4 \times 62 = 24{,}8\)</li>
  <li>\(0{,}6 \times 81 = 48{,}6\)</li>
  <li>Cộng: \(24{,}8 + 48{,}6 = 73{,}4 \approx 73\)</li>
</ol>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
Lấy trung bình thường \((62 + 81)/2 = 71{,}5\) là <b>sai</b>, và đáp án nhiễu thường chính là con số này. Kết quả đúng luôn nằm <b>gần giá trị có trọng số lớn hơn</b>, ở đây gần 81 hơn.</div>
<h2>Đầy đủ: phương trình, bất phương trình & lũy thừa</h2>
<table>
<tr><th>Dạng</th><th>Công thức / quy tắc</th><th>Ví dụ</th></tr>
<tr><td>Bậc nhất \(ax + b = 0\)</td><td>\(x = -b/a\) (a ≠ 0)</td><td>\(2x + 6 = 0 \Rightarrow x = -3\)</td></tr>
<tr><td>Bất phương trình</td><td>Nhân/chia số <b>âm</b> thì <b>đổi chiều</b></td><td>\(-2x \gt 4 \Rightarrow x \lt -2\)</td></tr>
<tr><td>Bậc hai \(ax^2+bx+c=0\)</td><td>\(\Delta = b^2 - 4ac\); \(x = \frac{-b \pm \sqrt{\Delta}}{2a}\). Δ &lt; 0: vô nghiệm thực; Δ = 0: nghiệm kép</td><td>\(x^2 - 5x + 6 = 0\): Δ = 1 → x = 2; 3</td></tr>
<tr><td>Viète</td><td>\(x_1 + x_2 = -b/a\), \(x_1x_2 = c/a\)</td><td>Trên: 2 + 3 = 5, 2 × 3 = 6</td></tr>
<tr><td>Trung bình cộng</td><td>\(\bar{x} = \frac{x_1 + \dots + x_n}{n}\) ⇒ tổng = \(\bar{x} \times n\)</td><td>TB 4 bài = 7 → tổng 28</td></tr>
</table>
<div class="box formula">Lũy thừa:
$$a^m a^n = a^{m+n}$$
$$\frac{a^m}{a^n} = a^{m-n}$$
$$(a^m)^n = a^{mn}$$
$$a^0 = 1,\quad a^{-n} = \frac{1}{a^n},\quad a^{1/2} = \sqrt{a}$$
Logarit là phép ngược của lũy thừa: \(\log_a b = c \iff a^c = b\). Quy tắc log xem bài A5.1.</div>
`},

// ======================= A1 THỐNG KÊ MÔ TẢ =======================
{
  id: 'A1.1', module: 'A', topic: 'A1', minutes: 15,
  title: 'Mean, median, phương sai, độ lệch chuẩn',
  skills: ['e.statistics', 'ts.stats'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Trước khi đưa dữ liệu vào mô hình, bạn phải mô tả được nó: giá trị "điển hình" là bao nhiêu, dữ liệu có phân tán nhiều không, có giá trị bất thường (outlier) không.</div>

<h2>1. Ba cách đo "giá trị trung tâm"</h2>
<table>
<tr><th>Đại lượng</th><th>Cách tính</th><th>Ví dụ với 1, 2, 3, 5, 9, 10</th></tr>
<tr><td><b>Mean</b> (trung bình)</td><td>Tổng chia số phần tử</td><td>\(30/6 = 5\)</td></tr>
<tr><td><b>Median</b> (trung vị)</td><td><b>Sắp xếp tăng dần</b>, lấy giá trị ở giữa. Số phần tử chẵn → trung bình hai số giữa</td><td>Hai số giữa là 3 và 5 → \((3+5)/2 = 4\)</td></tr>
<tr><td><b>Mode</b> (yếu vị)</td><td>Giá trị xuất hiện nhiều nhất</td><td>Không có (mỗi số 1 lần)</td></tr>
</table>

<div class="box idea"><span class="box-title">💡 Mean vs Median</span>
Lương của 5 người: 10, 10, 12, 12, 200 (triệu). Mean = 48,8, nghe như ai cũng giàu! Median = 12 phản ánh đúng hơn. <b>Median ít bị ảnh hưởng bởi outlier</b>, còn mean bị kéo về phía outlier.</div>

<h2>2. Đo độ phân tán: phương sai & độ lệch chuẩn</h2>
<div class="box formula">
$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$ $$\sigma = \sqrt{\sigma^2}$$
</div>
<p>Hiểu đơn giản: lấy từng giá trị trừ trung bình, bình phương lên cho hết dấu âm, rồi lấy trung bình. Độ lệch chuẩn \(\sigma\) là căn bậc hai của phương sai, nên có cùng đơn vị với dữ liệu.</p>
<p><b>Ví dụ:</b> 2, 4, 6</p>
<ol class="steps">
  <li>Mean: \((2+4+6)/3 = 4\)</li>
  <li>Độ lệch: \(-2, 0, 2\) → bình phương: \(4, 0, 4\)</li>
  <li>Phương sai: \(8/3 \approx 2{,}67\); độ lệch chuẩn: \(\sqrt{2{,}67} \approx 1{,}63\)</li>
</ol>
<p class="small muted">Với <b>mẫu</b> (sample), một số tài liệu chia cho \(n-1\) thay vì \(n\). Đề trắc nghiệm thường nói rõ; nếu không nói gì, dùng \(n\).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
  <li><b>Quên sắp xếp</b> trước khi tìm median.</li>
  <li>Số phần tử chẵn mà chỉ lấy một số ở giữa.</li>
  <li>Phương sai luôn ≥ 0. Mọi giá trị bằng nhau thì phương sai = 0.</li>
</ul></div>
<h2>Đầy đủ: các đại lượng thống kê mô tả</h2>
<table>
<tr><th>Đại lượng</th><th>Công thức</th><th>Ghi chú / ví dụ</th></tr>
<tr><td>Khoảng biến thiên (range)</td><td>max − min</td><td>3, 8, 1, 10 → 9</td></tr>
<tr><td>Tứ phân vị</td><td>Q1 = trung vị nửa dưới, Q2 = median, Q3 = trung vị nửa trên</td><td>1…8: Q1 = 2,5; Q3 = 6,5</td></tr>
<tr><td>IQR</td><td>\(Q_3 - Q_1\)</td><td>Ví dụ trên: 4</td></tr>
<tr><td>Outlier (quy tắc IQR)</td><td>ngoài \([Q_1 - 1{,}5\,IQR;\ Q_3 + 1{,}5\,IQR]\)</td><td></td></tr>
<tr><td>Z-score</td><td>\(z = \frac{x - \bar{x}}{\sigma}\)</td><td>x = 80, TB 70, σ = 5 → z = 2</td></tr>
<tr><td>Biến đổi \(Y = aX + b\)</td><td>\(\bar{Y} = a\bar{X} + b\); \(\sigma_Y = |a|\sigma_X\); \(\mathrm{Var}(Y) = a^2\mathrm{Var}(X)\)</td><td>Cộng hằng số không đổi độ lệch chuẩn</td></tr>
<tr><td>Hiệp phương sai</td><td>\(\mathrm{Cov}(X,Y) = \frac{1}{n}\sum (x_i - \bar{x})(y_i - \bar{y})\)</td><td>&gt; 0: cùng tăng; &lt; 0: ngược chiều</td></tr>
<tr><td>Hệ số tương quan Pearson</td><td>\(r = \frac{\mathrm{Cov}(X,Y)}{\sigma_X\sigma_Y} \in [-1, 1]\)</td><td>r ≈ ±1: tuyến tính mạnh; r = 0: không tương quan <b>tuyến tính</b>. Tương quan ≠ nhân quả</td></tr>
</table>
`},

{
  id: 'A1.2', module: 'A', topic: 'A1', minutes: 22,
  title: 'Thống kê suy luận: mẫu, khoảng tin cậy, kiểm định giả thuyết, p-value',
  skills: ['ts.inference'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Thống kê mô tả (bài A1.1) chỉ tóm tắt dữ liệu đang có. <b>Thống kê suy luận</b> trả lời câu hỏi khó hơn: từ một <b>mẫu</b> nhỏ, ta kết luận được gì về <b>toàn bộ</b>? Đây là nền của mọi câu "model mới có thật sự tốt hơn model cũ không?" và của A/B test.</div>

<h2>1. Tổng thể và mẫu</h2>
<ul>
<li><b>Tổng thể</b> (population): toàn bộ đối tượng ta quan tâm (mọi khách hàng). <b>Mẫu</b> (sample): phần ta đo được (1000 khách được khảo sát).</li>
<li>Mẫu phải <b>ngẫu nhiên và đại diện</b>. Nếu chỉ hỏi người dùng đang hài lòng thì mẫu bị <b>thiên lệch</b> (sampling bias) và mọi kết luận đều sai, dù mẫu lớn đến đâu.</li>
</ul>

<h2>2. Sai số chuẩn: mẫu lớn thì ước lượng chắc hơn</h2>
<div class="box formula">$$SE = \frac{\sigma}{\sqrt{n}}$$
SE (standard error) đo mức dao động của <b>trung bình mẫu</b>. n càng lớn thì SE càng nhỏ.</div>
<p>Muốn giảm sai số <b>một nửa</b> phải tăng cỡ mẫu <b>gấp 4</b> (vì có căn bậc hai).</p>

<h2>3. Khoảng tin cậy (confidence interval)</h2>
<div class="box formula">$$\text{Khoảng tin cậy 95\%} = \bar{x} \pm 1{,}96 \times SE$$</div>
<p><b>Ví dụ:</b> điểm trung bình mẫu \(\bar{x} = 70\), \(\sigma = 10\), \(n = 100\).</p>
<ol class="steps">
<li>\(SE = 10/\sqrt{100} = 1\)</li>
<li>Khoảng 95%: \(70 \pm 1{,}96 \times 1 = [68{,}04;\ 71{,}96]\)</li>
</ol>
<p><b>Cách hiểu đúng:</b> nếu lặp lại việc lấy mẫu nhiều lần thì khoảng 95% số khoảng dựng được sẽ chứa giá trị thật. Khoảng <b>rộng</b> nghĩa là còn nhiều bất định (mẫu nhỏ hoặc dữ liệu phân tán).</p>

<h2>4. Kiểm định giả thuyết & p-value</h2>
<ol class="steps">
<li>Đặt <b>H₀</b> (giả thuyết không): "không có khác biệt" (model mới = model cũ). <b>H₁</b>: có khác biệt.</li>
<li>Chọn <b>mức ý nghĩa α</b>, thường là 0,05.</li>
<li>Tính <b>p-value</b>: nếu H₀ đúng thì xác suất quan sát được kết quả <b>cực đoan như vậy (hoặc hơn)</b> là bao nhiêu.</li>
<li><b>p &lt; α</b> → bác bỏ H₀ ("có ý nghĩa thống kê"). <b>p ≥ α</b> → <b>chưa đủ bằng chứng</b> để bác bỏ (không có nghĩa là H₀ đúng).</li>
</ol>
<table>
<tr><th></th><th>H₀ thật ra đúng</th><th>H₀ thật ra sai</th></tr>
<tr><th>Bác bỏ H₀</th><td><b>Sai lầm loại I</b> (báo động giả), xác suất = α</td><td>Đúng (power = 1 − β)</td></tr>
<tr><th>Không bác bỏ H₀</th><td>Đúng</td><td><b>Sai lầm loại II</b> (bỏ sót), xác suất = β</td></tr>
</table>
<p>Liên hệ với bài metrics: loại I giống <b>false positive</b>, loại II giống <b>false negative</b>.</p>

<h2>5. Ý nghĩa thống kê khác ý nghĩa thực tế</h2>
<p>Với mẫu rất lớn (1 triệu người dùng), chênh lệch 0,01% cũng có thể "có ý nghĩa thống kê" nhưng không đáng để triển khai. Luôn hỏi thêm: <b>mức chênh lệch có đủ lớn để quan trọng không?</b></p>
<p><b>A/B test:</b> chia ngẫu nhiên người dùng thành nhóm A (cũ) và B (mới), đo cùng một chỉ số, rồi kiểm định xem chênh lệch có ý nghĩa không.</p>

<h2>6. Tương quan và hồi quy đơn</h2>
<div class="box formula">Đường hồi quy: $$\hat{y} = a + bx$$ $$b = r\,\frac{s_y}{s_x}$$ $$R^2 = r^2$$</div>
<p>r là hệ số tương quan (bài A1.1). b cho biết x tăng 1 đơn vị thì y thay đổi trung bình bao nhiêu. R² là tỉ lệ biến động của y mà đường thẳng giải thích được (r = 0,8 → R² = 0,64).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li><b>p-value KHÔNG phải xác suất H₀ đúng.</b> p = 0,04 không có nghĩa "96% chắc chắn có khác biệt".</li>
<li>"Không bác bỏ H₀" khác với "chứng minh H₀ đúng".</li>
<li>Thử 20 chỉ số rồi chỉ báo cáo cái có p &lt; 0,05 (p-hacking): với α = 0,05, trung bình cứ 20 phép thử là có 1 cái "có ý nghĩa" do may rủi.</li>
<li>Tương quan không chứng minh nhân quả.</li>
</ul></div>
`},

// ======================= A2 XÁC SUẤT =======================
{
  id: 'A2.1', module: 'A', topic: 'A2', minutes: 15,
  title: 'Xác suất cơ bản, biến cố bù & hợp',
  skills: ['probability.union.inclusion-exclusion', 'probability.complement.at-least-one'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Khoảng một nửa Module A là xác suất. Mô hình phân loại cũng trả về xác suất ("email này 92% là spam"). Bài này là gốc cho mọi bài xác suất sau.</div>

<h2>1. Xác suất là gì?</h2>
<p>Khi mọi kết quả có khả năng như nhau:</p>
<div class="box formula">$$P(A) = \frac{\text{số kết quả thuận lợi cho } A}{\text{tổng số kết quả có thể}}$$</div>
<p>Gieo xúc xắc: không gian mẫu \(\Omega = \{1,2,3,4,5,6\}\). \(P(\text{chẵn}) = 3/6 = 1/2\).</p>
<p>Luôn có \(0 \le P(A) \le 1\). Tính ra lớn hơn 1 hoặc âm nghĩa là đã sai ở đâu đó.</p>

<h2>2. Biến cố bù: "không A"</h2>
<div class="box formula">$$P(\text{không } A) = 1 - P(A)$$</div>
<div class="box idea"><span class="box-title">💡 Mẹo vàng: "ít nhất một" → dùng biến cố bù</span>
"Ít nhất một lần thành công" có rất nhiều trường hợp. Ngược lại của nó chỉ có <b>một</b> trường hợp: "thất bại tất cả".
$$P(\text{ít nhất 1 thành công}) = 1 - P(\text{tất cả thất bại})$$</div>
<p><b>Ví dụ:</b> Một phép thử độc lập có xác suất thất bại \(2/5\). Làm 2 lần. Xác suất ít nhất một lần thành công?</p>
<ol class="steps">
  <li>Thất bại cả 2 lần (độc lập → nhân): \((2/5)^2 = 4/25\)</li>
  <li>Lấy bù: \(1 - 4/25 = 21/25\)</li>
</ol>

<h2>3. Hợp của hai biến cố: "A hoặc B"</h2>
<div class="box formula">$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$</div>
<div class="box idea"><span class="box-title">💡 Vì sao phải trừ?</span>
Lớp có 40% biết Python, 50% biết SQL, 20% biết cả hai. Cộng 40% + 50% thì nhóm "biết cả hai" bị <b>đếm 2 lần</b>, nên phải trừ đi một lần: \(40 + 50 - 20 = 70\%\) biết ít nhất một thứ.</div>
<p><b>Ví dụ:</b> \(P(A)=0{,}4;\ P(B)=0{,}5;\ P(A\cap B)=0{,}2 \Rightarrow P(A\cup B) = 0{,}4+0{,}5-0{,}2 = 0{,}7\).</p>
<p><b>Xung khắc</b> (mutually exclusive): A và B không thể cùng xảy ra, nên \(P(A\cap B)=0\) và \(P(A\cup B) = P(A)+P(B)\).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
  <li>Cộng thẳng \(P(A)+P(B)\) khi A, B không xung khắc.</li>
  <li>"Ít nhất một" mà ngồi liệt kê từng trường hợp: vừa lâu vừa dễ sót.</li>
</ul></div>
<h2>Đầy đủ: các quy tắc xác suất cơ bản</h2>
<ul>
<li>Tổng xác suất của mọi kết quả = 1.</li>
<li>Xung khắc: \(P(A\cup B) = P(A) + P(B)\).</li>
<li>"A mà không B": \(P(A \cap \bar{B}) = P(A) - P(A\cap B)\).</li>
<li>"Không A và không B": \(P(\bar{A}\cap\bar{B}) = 1 - P(A\cup B)\) (De Morgan).</li>
</ul>
<div class="box formula">Ba biến cố:
$$P(A\cup B\cup C) = P(A)+P(B)+P(C) - P(A\cap B) - P(A\cap C) - P(B\cap C) + P(A\cap B\cap C)$$</div>
`},

{
  id: 'A2.2', module: 'A', topic: 'A2', minutes: 18,
  title: 'Xác suất có điều kiện',
  skills: ['probability.conditional.dice', 'probability.conditional.from-subgroup', 'probability.conditional.from-count-table', 'probability.tree.joint-from-conditional', 'e.conditional-probability', 'ts.prob-rules'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đây là dạng xuất hiện nhiều nhất trong Module A (cả trong phản hồi người thi lẫn đề luyện). Nó cũng là bước đệm để hiểu Bayes và precision/recall ở Module C.</div>

<h2>1. Ý tưởng</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
\(P(A \mid B)\) đọc là "xác suất A <b>khi đã biết</b> B xảy ra". Biết B rồi thì thế giới của bạn <b>thu hẹp lại chỉ còn B</b>. Bạn đếm xem trong B có bao nhiêu phần cũng thuộc A.</div>
<div class="box formula">$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$ $$\Longleftrightarrow$$ $$P(A \cap B) = P(B)\,P(A \mid B)$$</div>
<p>Dấu hiệu nhận biết trong đề: <b>"biết rằng…", "trong số những người…", "nếu đã…", "chọn trong nhóm…"</b>.</p>

<h2>2. Năm dạng đề thường gặp</h2>
<h3>Dạng 1: Xúc xắc / liệt kê</h3>
<p>Gieo xúc xắc. Biết kết quả lớn hơn 2, xác suất ra số chẵn?</p>
<ol class="steps">
  <li>Không gian mới (đã biết >2): \(\{3,4,5,6\}\), gồm 4 kết quả</li>
  <li>Trong đó số chẵn: \(\{4,6\}\), gồm 2 kết quả</li>
  <li>\(P = 2/4 = 1/2\)</li>
</ol>
<h3>Dạng 2: Nhóm con</h3>
<p>14 người biết Python, trong đó 5 người biết cả SQL. Chọn ngẫu nhiên một người <b>trong số người biết Python</b>. Xác suất người đó biết SQL?</p>
<p>Mẫu số là nhóm điều kiện (14 người biết Python): \(P = 5/14\).</p>
<h3>Dạng 3: Bảng đếm</h3>
<p>24 người có kết quả dương tính, trong đó 14 người thật sự mắc bệnh. Chọn một người trong nhóm dương tính: \(P(\text{bệnh} \mid +) = 14/24 = 7/12\).</p>
<h3>Dạng 4: Áp công thức</h3>
<p>\(P(A\cap B) = 0{,}15;\ P(B) = 0{,}5 \Rightarrow P(A\mid B) = 0{,}15/0{,}5 = 0{,}3\).</p>
<h3>Dạng 5: Quy tắc nhân (cây xác suất)</h3>
<p>\(P(A) = 0{,}4;\ P(B\mid A) = 0{,}5\). Xác suất A và B cùng xảy ra: \(P(A\cap B) = 0{,}4 \times 0{,}5 = 0{,}2\).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
  <li>\(P(A\mid B) \ne P(B\mid A)\). "Xác suất dương tính khi có bệnh" khác hẳn "xác suất có bệnh khi dương tính".</li>
  <li><b>Mẫu số phải là nhóm "đã biết"</b>, không phải tổng tất cả mọi người. Đáp án nhiễu hay chia cho tổng.</li>
</ul></div>
<h2>Đầy đủ</h2>
<ul>
<li>Bù có điều kiện: \(P(\bar{A}\mid B) = 1 - P(A\mid B)\).</li>
<li>Quy tắc nhân cho 3 biến cố: \(P(A\cap B\cap C) = P(A)\,P(B\mid A)\,P(C\mid A\cap B)\).<br>VD túi 5 đỏ, 4 xanh, rút 3 đều đỏ: \(\frac{5}{9}\cdot\frac{4}{8}\cdot\frac{3}{7} = \frac{60}{504} = \frac{5}{42}\).</li>
</ul>
`},

{
  id: 'A2.3', module: 'A', topic: 'A2', minutes: 12,
  title: 'Biến cố độc lập',
  skills: ['probability.independence.product-rule', 'probability.independence.from-count-table'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Rất nhiều phép tính (tung đồng xu nhiều lần, xét nghiệm 2 lần, Naive Bayes) dựa trên giả định "độc lập". Đề hay hỏi: "Cho số liệu, A và B có độc lập không?"</div>

<h2>1. Định nghĩa</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
A và B <b>độc lập</b> khi biết A xảy ra <b>không làm thay đổi</b> khả năng B xảy ra. Ví dụ: hôm nay trời mưa không ảnh hưởng tới việc bạn tung đồng xu ra mặt ngửa.</div>
<div class="box formula">$$A, B \text{ độc lập} \iff P(A \cap B) = P(A)\cdot P(B) \iff P(A\mid B) = P(A)$$</div>

<h2>2. Cách kiểm tra (2 dạng đề)</h2>
<p><b>Dạng xác suất:</b> \(P(A)=0{,}5;\ P(B)=0{,}333;\ P(A\cap B)=0{,}167\).</p>
<ol class="steps">
  <li>Tính \(P(A)P(B) = 0{,}5 \times 0{,}333 \approx 0{,}167\)</li>
  <li>So với \(P(A\cap B) = 0{,}167\): bằng nhau → <b>độc lập</b></li>
</ol>
<p><b>Dạng bảng đếm:</b> 100 quan sát, 50 thuộc A, 40 thuộc B, 20 thuộc cả hai.</p>
<ol class="steps">
  <li>Đổi ra xác suất: \(P(A)=0{,}5;\ P(B)=0{,}4;\ P(A\cap B)=0{,}2\)</li>
  <li>\(0{,}5 \times 0{,}4 = 0{,}2\) → bằng nhau → <b>độc lập</b></li>
</ol>

<h2>3. Độc lập ≠ Xung khắc</h2>
<table>
<tr><th></th><th>Độc lập</th><th>Xung khắc</th></tr>
<tr><td>Ý nghĩa</td><td>Không ảnh hưởng nhau</td><td>Không thể cùng xảy ra</td></tr>
<tr><td>Công thức</td><td>\(P(A\cap B) = P(A)P(B)\)</td><td>\(P(A\cap B) = 0\)</td></tr>
<tr><td>Ví dụ</td><td>Tung 2 đồng xu</td><td>Một lần gieo xúc xắc ra 1 và ra 6</td></tr>
</table>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
Hai biến cố xung khắc (mỗi cái có xác suất > 0) thì <b>không độc lập</b>: biết A xảy ra thì chắc chắn B không xảy ra, nên A rõ ràng ảnh hưởng tới B.</div>
<h2>Đầy đủ</h2>
<ul>
<li>A, B độc lập thì A và \(\bar{B}\), \(\bar{A}\) và \(\bar{B}\) cũng độc lập.</li>
<li>n biến cố độc lập: \(P(\text{tất cả}) = p_1p_2\cdots p_n\).</li>
<li>\(P(\text{ít nhất một}) = 1 - (1-p_1)(1-p_2)\cdots(1-p_n)\).<br>VD 3 server độc lập, mỗi cái hỏng với xác suất 0,1: P(ít nhất 1 hỏng) = 1 − 0,9³ = <b>0,271</b>.</li>
</ul>
`},

{
  id: 'A2.4', module: 'A', topic: 'A2', minutes: 20,
  title: 'Xác suất toàn phần & định lý Bayes',
  skills: ['probability.total-probability.two-sources', 'probability.bayes.one-positive-test', 'probability.bayes.two-positive-tests', 'mlq.bayes'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Bayes là dạng "khó nhưng chắc chắn có" trong đề. Nó cũng giải thích vì sao một xét nghiệm "chính xác 80%" vẫn có thể cho rất nhiều kết quả dương tính sai.</div>

<h2>1. Xác suất toàn phần</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Sản phẩm lỗi có thể đến từ máy A <b>hoặc</b> máy B. Tính phần lỗi đến từ mỗi máy rồi cộng lại.</div>
<div class="box formula">$$P(L) = P(A)\,P(L\mid A) + P(B)\,P(L\mid B)$$</div>
<p><b>Ví dụ:</b> Máy A làm 60% sản phẩm, lỗi 2%; máy B làm 40%, lỗi 5%.</p>
<p>\(P(\text{lỗi}) = 0{,}6\times0{,}02 + 0{,}4\times0{,}05 = 0{,}012 + 0{,}020 = 0{,}032 = 3{,}2\%\)</p>

<h2>2. Định lý Bayes: "lật ngược" điều kiện</h2>
<p>Đề cho \(P(+ \mid \text{bệnh})\) (độ nhạy), nhưng hỏi \(P(\text{bệnh} \mid +)\).</p>
<div class="box formula">$$P(\text{bệnh}\mid +) = \frac{P(\text{bệnh})\,P(+\mid \text{bệnh})}{P(\text{bệnh})\,P(+\mid\text{bệnh}) + P(\text{không})\,P(+\mid \text{không})}$$
Tử số: nhánh "bệnh và dương tính". Mẫu số: <b>mọi cách</b> để ra dương tính (đúng là xác suất toàn phần ở trên).</div>

<h3>Cách dễ nhất cho người mới: tưởng tượng 1000 người</h3>
<p><b>Ví dụ:</b> Tỉ lệ mắc bệnh 20%. Độ nhạy 75% (người bệnh → dương tính). Dương tính giả 25% (người khỏe vẫn ra dương tính). Một người dương tính, xác suất thật sự mắc bệnh?</p>
<table>
<tr><th></th><th>Số người</th><th>Dương tính</th></tr>
<tr><td>Bệnh (20%)</td><td>200</td><td>\(200 \times 75\% = 150\)</td></tr>
<tr><td>Không bệnh (80%)</td><td>800</td><td>\(800 \times 25\% = 200\)</td></tr>
<tr><td><b>Tổng</b></td><td>1000</td><td><b>350</b></td></tr>
</table>
<p>\(P(\text{bệnh}\mid +) = 150 / 350 \approx 42{,}86\%\). Chưa tới một nửa, dù xét nghiệm "đúng 75%"!</p>

<h3>Hai lần xét nghiệm đều dương tính</h3>
<p>Tỉ lệ bệnh 10%, độ nhạy 80%, dương tính giả 20%; hai lần độc lập khi đã biết tình trạng bệnh.</p>
<ol class="steps">
  <li>Có bệnh, ra ++: \(0{,}8^2 = 0{,}64\) → tử số: \(0{,}1 \times 0{,}64 = 0{,}064\)</li>
  <li>Không bệnh, ra ++: \(0{,}2^2 = 0{,}04\) → \(0{,}9 \times 0{,}04 = 0{,}036\)</li>
  <li>\(P = 0{,}064 / (0{,}064 + 0{,}036) = 0{,}064/0{,}1 = 64\%\)</li>
</ol>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
  <li>Trả lời luôn bằng độ nhạy (75%, 80%). Đó là \(P(+\mid\text{bệnh})\), <b>không phải</b> câu đề hỏi.</li>
  <li>Quên nhóm "không bệnh nhưng dương tính giả". Nhóm khỏe thường rất đông, nên số dương tính giả lớn.</li>
  <li>Hai lần xét nghiệm: phải bình phương cả xác suất dương tính giả.</li>
</ul></div>
<h2>Đầy đủ: dạng tổng quát</h2>
<p>Các giả thuyết \(H_1, \dots, H_n\) rời nhau và phủ hết mọi khả năng:</p>
<div class="box formula">$$P(B) = \sum_i P(H_i)\,P(B\mid H_i)$$ $$P(H_k\mid B) = \frac{P(H_k)\,P(B\mid H_k)}{\sum_i P(H_i)\,P(B\mid H_i)}$$</div>
<p>Thuật ngữ: \(P(H)\) là <b>prior</b> (tiên nghiệm); \(P(B\mid H)\) là <b>likelihood</b>; \(P(H\mid B)\) là <b>posterior</b> (hậu nghiệm).</p>
`},

{
  id: 'A2.5', module: 'A', topic: 'A2', minutes: 15,
  title: 'Kỳ vọng, Bernoulli & phân phối nhị thức',
  skills: ['probability.expectation.discrete', 'probability.bernoulli.variance', 'probability.binomial.exact-successes', 'ts.random-var'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Kỳ vọng là "giá trị trung bình về lâu dài". Bernoulli (đúng/sai, 1/0) là mô hình của mọi bài toán phân loại nhị phân.</div>

<h2>1. Kỳ vọng E[X]</h2>
<div class="box formula">$$E[X] = \sum x \cdot P(X = x)$$</div>
<p><b>Ví dụ:</b> X nhận 0, 1, 2 với xác suất 0,25; 0,5; 0,25.</p>
<p>\(E[X] = 0\times0{,}25 + 1\times0{,}5 + 2\times0{,}25 = 0 + 0{,}5 + 0{,}5 = 1\)</p>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>Kỳ vọng là trung bình có trọng số (bài A0.2), với trọng số chính là xác suất.</div>

<h2>2. Bernoulli: một lần thử, kết quả 1 hoặc 0</h2>
<div class="box formula">$$P(X=1) = p,\quad E[X] = p,\quad \mathrm{Var}(X) = p(1-p)$$</div>
<p><b>Ví dụ:</b> \(p = 0{,}25 \Rightarrow \mathrm{Var} = 0{,}25 \times 0{,}75 = 0{,}1875 \approx 0{,}188\).</p>

<h2>3. Nhị thức: n lần thử độc lập, đúng k lần thành công</h2>
<div class="box formula">$$P(X = k) = C(n,k)\; p^k (1-p)^{n-k}$$
\(C(n,k)\) là số cách chọn <b>vị trí</b> của k lần thành công (xem bài A3.1).</div>
<p><b>Ví dụ:</b> Tung đồng xu công bằng 3 lần, xác suất đúng 2 lần ngửa (N = ngửa, S = sấp)?</p>
<ol class="steps">
  <li>Các chuỗi có đúng 2 N: NNS, NSN, SNN → \(C(3,2) = 3\) chuỗi</li>
  <li>Mỗi chuỗi có xác suất \((1/2)^3 = 1/8\)</li>
  <li>\(P = 3 \times 1/8 = 3/8\)</li>
</ol>
<p>Thêm: kỳ vọng của nhị thức là \(E[X] = np\). Tung 10 lần thì trung bình được 5 lần ngửa.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
Quên nhân \(C(n,k)\), tức chỉ tính một chuỗi: được \(1/8\) thay vì \(3/8\). Đáp án nhiễu thường đúng là con số này.</div>
<h2>Bổ sung: phương sai của biến ngẫu nhiên</h2>
<div class="box formula">$$\mathrm{Var}(X) = E[X^2] - (E[X])^2$$
Nhị thức (n lần, xác suất p): $$E[X] = np$$ $$\mathrm{Var}(X) = np(1-p)$$</div>
<p><b>Ví dụ:</b> X nhận 0, 1, 2 với xác suất 0,25; 0,5; 0,25. \(E[X] = 1\); \(E[X^2] = 0 + 0{,}5 + 4\times0{,}25 = 1{,}5\) → \(\mathrm{Var} = 1{,}5 - 1 = 0{,}5\).</p>
<p>Tung đồng xu 10 lần: \(E = 10 \times 0{,}5 = 5\), \(\mathrm{Var} = 10 \times 0{,}5 \times 0{,}5 = 2{,}5\).</p>
<h2>Đầy đủ: tính chất kỳ vọng, phương sai & các phân phối hay gặp</h2>
<div class="box formula">
$$E[aX + b] = aE[X] + b$$
$$\mathrm{Var}(aX + b) = a^2\,\mathrm{Var}(X)$$
$$E[X + Y] = E[X] + E[Y]$$
$$\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y) \ (\text{nếu độc lập})$$
</div>
<p>VD E[X] = 3, Var(X) = 2, Y = 2X + 1 → E[Y] = 7, Var(Y) = 8.</p>
<table>
<tr><th>Phân phối</th><th>Mô tả</th><th>Kỳ vọng</th><th>Phương sai</th></tr>
<tr><td>Bernoulli(p)</td><td>1 lần thử, 1/0</td><td>p</td><td>p(1−p)</td></tr>
<tr><td>Nhị thức(n, p)</td><td>số lần thành công trong n lần</td><td>np</td><td>np(1−p)</td></tr>
<tr><td>Hình học(p)</td><td>số lần thử đến lần thành công đầu tiên</td><td>1/p</td><td>(1−p)/p²</td></tr>
<tr><td>Poisson(λ)</td><td>số sự kiện trong một khoảng; \(P(k) = \frac{e^{-\lambda}\lambda^k}{k!}\)</td><td>λ</td><td>λ</td></tr>
<tr><td>Đều [a, b]</td><td>mọi giá trị trong [a, b] như nhau</td><td>(a+b)/2</td><td>(b−a)²/12</td></tr>
<tr><td>Chuẩn N(μ, σ²)</td><td>hình chuông</td><td>μ</td><td>σ²</td></tr>
</table>
<div class="box idea"><span class="box-title">💡 Quy tắc 68–95–99,7 (phân phối chuẩn)</span>Khoảng 68% dữ liệu nằm trong μ ± σ, 95% trong μ ± 2σ, 99,7% trong μ ± 3σ.</div>
`},

// ======================= A3 TỔ HỢP, ĐẾM & TOÁN RỜI RẠC =======================
{
  id: 'A3.1', module: 'A', topic: 'A3', minutes: 18,
  title: 'Quy tắc nhân, hoán vị, chỉnh hợp, tổ hợp',
  skills: ['probability.combinations.choose-k', 'tu-soan.counting', 'ts.counting'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Muốn tính xác suất thì phải <b>đếm</b> được số trường hợp. Phần này các anh chị đi thi trước có nhắc, và nó cũng là nền của bài nhị thức, bài rút bi.</div>

<h2>1. Quy tắc nhân</h2>
<p>Có 3 áo và 2 quần. Số bộ đồ: \(3 \times 2 = 6\). Một việc gồm nhiều bước liên tiếp thì <b>nhân</b> số cách của từng bước.</p>

<h2>2. Hoán vị: xếp n người thành hàng</h2>
<div class="box formula">$$P_n = n! = n \times (n-1) \times \dots \times 1$$</div>
<p>Xếp 4 người vào 4 ghế: \(4! = 24\) cách. Quy ước \(0! = 1\).</p>

<h2>3. Câu hỏi then chốt: thứ tự có quan trọng không?</h2>
<div class="box idea"><span class="box-title">💡 Thử đổi chỗ hai người được chọn</span>
<ul>
<li>Đổi chỗ mà ra <b>cách khác</b> (A làm lớp trưởng, B làm lớp phó ≠ B lớp trưởng, A lớp phó) → <b>có thứ tự</b> → <b>Chỉnh hợp</b></li>
<li>Đổi chỗ mà <b>vẫn là một cách</b> (nhóm {A, B} = nhóm {B, A}) → <b>không thứ tự</b> → <b>Tổ hợp</b></li>
</ul></div>
<div class="box formula">
$$A(n,k) = \frac{n!}{(n-k)!}$$ $$C(n,k) = \binom{n}{k} = \frac{n!}{k!\,(n-k)!}$$
</div>
<p><b>Ví dụ (đúng dạng đề):</b> 6 người, chọn 2 người vào một nhóm, không phân biệt thứ tự.</p>
<ol class="steps">
  <li>Không thứ tự → tổ hợp</li>
  <li>\(C(6,2) = \frac{6 \times 5}{2 \times 1} = 15\)</li>
</ol>
<p><b>So sánh:</b> chọn 1 lớp trưởng và 1 lớp phó từ 6 người → có thứ tự → \(A(6,2) = 6 \times 5 = 30\). Đúng gấp \(2! = 2\) lần tổ hợp.</p>

<div class="box tip"><span class="box-title">⚡ Tính nhanh</span>
<ul>
<li>\(C(n,2) = \frac{n(n-1)}{2}\); \(C(n,k) = C(n, n-k)\)</li>
<li>Nhớ sẵn: \(C(4,2)=6,\ C(5,2)=10,\ C(5,3)=10,\ C(6,2)=15,\ C(6,3)=20,\ C(10,2)=45\)</li>
<li>Tính \(C(n,k)\) bằng tay: nhân k số giảm dần từ n, rồi chia \(k!\). Ví dụ \(C(7,3) = \frac{7\cdot6\cdot5}{3\cdot2\cdot1} = 35\)</li>
</ul></div>

<h2>4. Ghép với xác suất</h2>
<p>Chọn ngẫu nhiên 2 người từ 4 nam và 2 nữ. Xác suất chọn được 2 nữ?</p>
<p>\(P = \frac{C(2,2)}{C(6,2)} = \frac{1}{15}\)</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
Đáp án nhiễu thường là \(A(n,k)\) (dùng nhầm khi đề nói "không phân biệt thứ tự") hoặc \(n^k\) (cho phép chọn trùng một người).</div>
<h2>Đầy đủ: toàn bộ công thức đếm</h2>
<table>
<tr><th>Công thức</th><th>Khi nào dùng</th><th>Ví dụ</th></tr>
<tr><td><b>Quy tắc cộng</b>: m + n</td><td>Làm bằng cách này <b>HOẶC</b> cách kia (không trùng)</td><td>3 chuyến bay hoặc 2 chuyến tàu → 5 cách</td></tr>
<tr><td><b>Quy tắc nhân</b>: m × n</td><td>Làm bước này <b>RỒI</b> bước kia</td><td>3 áo × 2 quần = 6</td></tr>
<tr><td><b>Hoán vị</b>: \(n!\)</td><td>Xếp n vật khác nhau thành hàng</td><td>4 người → 24</td></tr>
<tr><td><b>Hoán vị lặp</b>: \(\frac{n!}{n_1!\,n_2!\cdots}\)</td><td>Có vật giống nhau</td><td>BANANA: \(\frac{6!}{3!\,2!\,1!} = 60\)</td></tr>
<tr><td><b>Hoán vị vòng</b>: \((n-1)!\)</td><td>Xếp quanh bàn tròn (xoay không tính khác)</td><td>5 người → 4! = 24</td></tr>
<tr><td><b>Chỉnh hợp</b>: \(A(n,k) = \frac{n!}{(n-k)!}\)</td><td>Chọn k, <b>có thứ tự</b>, không lặp</td><td>Lớp trưởng + lớp phó từ 6 → 30</td></tr>
<tr><td><b>Chỉnh hợp lặp</b>: \(n^k\)</td><td>Có thứ tự, <b>được lặp</b></td><td>PIN 3 chữ số → 10³ = 1000</td></tr>
<tr><td><b>Tổ hợp</b>: \(C(n,k) = \frac{n!}{k!(n-k)!}\)</td><td>Chọn k, <b>không thứ tự</b>, không lặp</td><td>Nhóm 2 từ 6 → 15</td></tr>
<tr><td><b>Tổ hợp lặp</b>: \(C(n+k-1,\ k)\)</td><td>Chọn k từ n loại, được lặp, không thứ tự</td><td>3 viên kẹo từ 2 loại → C(4,3) = 4</td></tr>
</table>
<div class="box tip"><span class="box-title">⚡ Bảng chọn công thức</span>
<table>
<tr><th></th><th>Không lặp</th><th>Được lặp</th></tr>
<tr><th>Có thứ tự</th><td>\(A(n,k)\)</td><td>\(n^k\)</td></tr>
<tr><th>Không thứ tự</th><td>\(C(n,k)\)</td><td>\(C(n+k-1,k)\)</td></tr>
</table></div>
<h3>Tính chất của C(n,k)</h3>
<ul>
<li>\(C(n,0) = C(n,n) = 1\); \(C(n,1) = n\); \(C(n,k) = C(n,n-k)\)</li>
<li>\(A(n,k) = C(n,k)\cdot k!\)</li>
<li><b>Pascal:</b> \(C(n,k) = C(n-1,k-1) + C(n-1,k)\). VD C(5,2) + C(5,3) = 10 + 10 = 20 = C(6,3).</li>
<li>\(C(n,0) + C(n,1) + \dots + C(n,n) = 2^n\) = số tập con của tập n phần tử (5 phần tử → 32).</li>
</ul>
<div class="box formula"><b>Nhị thức Newton:</b>
$$(a+b)^n = \sum_{k=0}^{n} C(n,k)\,a^{n-k}b^k$$
VD \((a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\). Hệ số của \(x^2\) trong \((1+x)^5\) là C(5,2) = 10.</div>
`},

{
  id: 'A3.2', module: 'A', topic: 'A3', minutes: 15,
  title: 'Rút bi không hoàn lại',
  skills: ['probability.without-replacement.same-colour', 'probability.without-replacement.different-colours', 'e.probability', 'ts.hypergeo'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Dạng "túi có x bi đỏ, y bi xanh, rút 2 bi" gần như luôn có trong đề. Chỉ cần nắm 2 cách tính là làm được.</div>

<h2>1. "Không hoàn lại" nghĩa là gì?</h2>
<p>Rút bi ra thì <b>không bỏ lại</b> vào túi. Sau mỗi lần rút, <b>tổng số bi giảm 1</b> và số bi của màu vừa rút cũng giảm 1.</p>

<h2>2. Cả hai bi cùng màu</h2>
<p><b>Ví dụ:</b> Túi có 5 đỏ, 4 xanh (9 bi). Rút 2 bi. Xác suất cả hai đỏ?</p>
<p><b>Cách 1, nhân theo từng lần rút:</b></p>
<ol class="steps">
  <li>Lần 1 đỏ: \(5/9\)</li>
  <li>Lần 2 đỏ (còn 4 đỏ / 8 bi): \(4/8\)</li>
  <li>\(P = \frac{5}{9}\times\frac{4}{8} = \frac{20}{72} = \frac{5}{18}\)</li>
</ol>
<p><b>Cách 2, tổ hợp:</b> \(P = \frac{C(5,2)}{C(9,2)} = \frac{10}{36} = \frac{5}{18}\). Hai cách cho cùng kết quả.</p>

<h2>3. Hai bi khác màu</h2>
<p>Có <b>2 thứ tự</b>: đỏ rồi xanh, <b>hoặc</b> xanh rồi đỏ.</p>
<ol class="steps">
  <li>Đỏ → xanh: \(\frac{5}{9}\times\frac{4}{8} = \frac{20}{72}\)</li>
  <li>Xanh → đỏ: \(\frac{4}{9}\times\frac{5}{8} = \frac{20}{72}\)</li>
  <li>Cộng: \(\frac{40}{72} = \frac{5}{9}\). Hoặc dùng tổ hợp: \(\frac{C(5,1)\,C(4,1)}{C(9,2)} = \frac{20}{36} = \frac{5}{9}\)</li>
</ol>

<div class="box tip"><span class="box-title">⚡ Kiểm tra nhanh</span>
P(2 đỏ) + P(2 xanh) + P(khác màu) phải bằng 1:
\(\frac{5}{18} + \frac{4\cdot3}{9\cdot8} + \frac{5}{9} = \frac{5}{18}+\frac{3}{18}+\frac{10}{18} = 1\) ✓</div>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li>Lần rút thứ hai vẫn giữ mẫu số 9: đó là rút <b>có hoàn lại</b>, khác đề.</li>
<li>Khác màu mà quên nhân 2 (quên thứ tự xanh → đỏ).</li>
</ul></div>
<h2>Đầy đủ: rút có / không hoàn lại tổng quát</h2>
<table>
<tr><th></th><th>Công thức</th><th>Ví dụ (5 đỏ, 4 xanh)</th></tr>
<tr><td><b>Có hoàn lại</b> (mỗi lần độc lập)</td><td>\(P(\text{2 đỏ}) = (R/N)^2\); k đỏ trong n lần → nhị thức</td><td>\((5/9)^2 = 25/81\)</td></tr>
<tr><td><b>Không hoàn lại</b>, đúng k đỏ khi rút n bi (siêu bội)</td><td>\(\dfrac{C(R,k)\,C(N-R,\,n-k)}{C(N,n)}\)</td><td>Rút 3, đúng 2 đỏ: \(\frac{C(5,2)C(4,1)}{C(9,3)} = \frac{40}{84} = \frac{10}{21}\)</td></tr>
<tr><td>Ít nhất 1 đỏ</td><td>\(1 - \dfrac{C(N-R,\,n)}{C(N,n)}\)</td><td>Rút 2: \(1 - \frac{C(4,2)}{C(9,2)} = 1 - \frac{6}{36} = \frac{5}{6}\)</td></tr>
</table>
`},

{
  id: 'A3.3', module: 'A', topic: 'A3', minutes: 22,
  title: 'Toán rời rạc: bảng chân trị, tập hợp, nguyên lý Dirichlet, đồ thị',
  skills: ['ts.discrete'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Một thí sinh khóa K4 kể phần Toán "chủ yếu XSTK, CTRR". <b>CTRR = Cấu trúc rời rạc</b> (toán rời rạc). Ba mảng lớn của môn này đã có bài riêng: <b>đếm/tổ hợp</b> (A3.1), <b>logic mệnh đề</b> (D1.1), <b>thuật toán Euclid</b> (B3.2). Bài này bổ sung bốn mảng còn lại ở mức "biết công thức là làm được".</div>

<h2>1. Bảng chân trị</h2>
<table>
<tr><th>P</th><th>Q</th><th>P ∧ Q<br>(AND)</th><th>P ∨ Q<br>(OR)</th><th>P ⊕ Q<br>(XOR)</th><th>P → Q<br>(nếu–thì)</th><th>P ↔ Q</th></tr>
<tr><td>Đ</td><td>Đ</td><td>Đ</td><td>Đ</td><td>S</td><td>Đ</td><td>Đ</td></tr>
<tr><td>Đ</td><td>S</td><td>S</td><td>Đ</td><td>Đ</td><td><b>S</b></td><td>S</td></tr>
<tr><td>S</td><td>Đ</td><td>S</td><td>Đ</td><td>Đ</td><td>Đ</td><td>S</td></tr>
<tr><td>S</td><td>S</td><td>S</td><td>S</td><td>S</td><td>Đ</td><td>Đ</td></tr>
</table>
<ul>
<li><b>AND</b>: đúng khi <b>cả hai</b> đúng. <b>OR</b>: đúng khi <b>ít nhất một</b> đúng. <b>XOR</b>: đúng khi <b>đúng một trong hai</b> (khác nhau).</li>
<li><b>NOT</b> (¬P): đảo giá trị. <b>P → Q</b> chỉ sai ở dòng "P đúng, Q sai". <b>P ↔ Q</b> đúng khi hai bên cùng giá trị.</li>
<li>Bảng chân trị với <b>n biến có \(2^n\) dòng</b>: 2 biến → 4 dòng, 3 biến → 8 dòng.</li>
</ul>
<div class="box formula"><b>Luật De Morgan:</b>
$$\neg(P \wedge Q) \equiv \neg P \vee \neg Q$$
$$\neg(P \vee Q) \equiv \neg P \wedge \neg Q$$
Các luật khác: \(P \to Q \equiv \neg P \vee Q\); \(\neg(\neg P) \equiv P\).</div>
<p>Trong Python: <code>and</code>, <code>or</code>, <code>not</code>; thứ tự ưu tiên là <code>not</code> → <code>and</code> → <code>or</code>. VD <code>True and False or True</code> = <code>(True and False) or True</code> = <code>True</code>.</p>

<h2>2. Tập hợp</h2>
<table>
<tr><th>Phép toán</th><th>Ký hiệu</th><th>Nghĩa</th><th>Ví dụ: A = {1,2,3,4}, B = {3,4,5}</th><th>Python</th></tr>
<tr><td>Hợp</td><td>\(A \cup B\)</td><td>thuộc A <b>hoặc</b> B</td><td>{1,2,3,4,5}</td><td><code>A | B</code></td></tr>
<tr><td>Giao</td><td>\(A \cap B\)</td><td>thuộc <b>cả</b> A và B</td><td>{3,4}</td><td><code>A &amp; B</code></td></tr>
<tr><td>Hiệu</td><td>\(A \setminus B\)</td><td>thuộc A, <b>không</b> thuộc B</td><td>{1,2}</td><td><code>A - B</code></td></tr>
<tr><td>Hiệu đối xứng</td><td>\(A \,\triangle\, B\)</td><td>thuộc đúng một trong hai</td><td>{1,2,5}</td><td><code>A ^ B</code></td></tr>
<tr><td>Phần bù</td><td>\(\bar{A}\)</td><td>trong tập nền nhưng không thuộc A</td><td></td><td></td></tr>
<tr><td>Tập con</td><td>\(A \subseteq B\)</td><td>mọi phần tử của A đều thuộc B</td><td>{3,4} ⊆ B</td><td><code>A &lt;= B</code></td></tr>
</table>
<div class="box formula">
$$|A \cup B| = |A| + |B| - |A \cap B|$$
$$\text{Số tập con của tập có } n \text{ phần tử} = 2^n$$
$$|A \times B| = |A| \cdot |B|$$
</div>
<p><b>Ví dụ hay ra:</b> Lớp 40 học sinh, 25 thích Toán, 20 thích Văn, 10 thích cả hai. Bao nhiêu bạn không thích môn nào?</p>
<ol class="steps">
<li>Thích ít nhất một môn: \(25 + 20 - 10 = 35\)</li>
<li>Không thích môn nào: \(40 - 35 = 5\)</li>
</ol>
<p class="small muted">Đây chính là công thức \(P(A \cup B)\) ở bài A2.1, chỉ khác là đếm số phần tử thay vì xác suất.</p>

<h2>3. Nguyên lý Dirichlet (chuồng bồ câu)</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Nhốt <b>n + 1</b> con bồ câu vào <b>n</b> chuồng thì chắc chắn có một chuồng chứa <b>ít nhất 2</b> con.</div>
<div class="box formula">Tổng quát: xếp N vật vào k hộp thì có một hộp chứa ít nhất \(\lceil N/k \rceil\) vật.<br>
Muốn <b>chắc chắn</b> có m vật cùng hộp: cần ít nhất \(k(m-1) + 1\) vật.</div>
<ul>
<li>Cần ít nhất <b>13</b> người để chắc chắn có 2 người sinh cùng tháng (12 tháng + 1).</li>
<li>Ngăn kéo có tất 3 màu: lấy <b>4</b> chiếc thì chắc chắn có 2 chiếc cùng màu.</li>
<li>Muốn chắc chắn có <b>3</b> người sinh cùng tháng: \(12 \times 2 + 1 = 25\) người.</li>
</ul>
<p>Cách nghĩ: xét <b>trường hợp xui nhất</b> (mỗi hộp vừa đủ thiếu một), rồi cộng thêm 1.</p>

<h2>4. Đồ thị</h2>
<p>Đồ thị gồm các <b>đỉnh</b> (điểm) và các <b>cạnh</b> (đường nối hai đỉnh). VD: mạng xã hội (người là đỉnh, quan hệ bạn bè là cạnh), bản đồ đường đi, và chính neural network cũng là một đồ thị.</p>
<ul>
<li><b>Bậc</b> của một đỉnh = số cạnh nối vào đỉnh đó.</li>
<li><b>Vô hướng</b>: cạnh không có chiều (bạn bè). <b>Có hướng</b>: cạnh có chiều (theo dõi).</li>
<li><b>Đường đi</b>: dãy cạnh nối tiếp nhau. <b>Chu trình</b>: đường đi quay về đỉnh xuất phát. <b>Liên thông</b>: giữa hai đỉnh bất kỳ luôn có đường đi.</li>
<li><b>Cây</b>: đồ thị liên thông, không có chu trình.</li>
</ul>
<div class="box formula">
<b>Bổ đề bắt tay:</b> $$\sum \text{bậc} = 2 \times \text{số cạnh}$$ nên tổng bậc luôn là số <b>chẵn</b>.<br>
<b>Đồ thị đầy đủ</b> n đỉnh (mọi cặp đỉnh đều nối): $$\text{số cạnh} = \frac{n(n-1)}{2} = C(n, 2)$$
<b>Cây</b> có n đỉnh: $$\text{số cạnh} = n - 1$$
</div>
<ul>
<li>Bậc các đỉnh là 2, 2, 3, 3, 4 → tổng 14 → có 7 cạnh.</li>
<li>Không tồn tại đồ thị có bậc 3, 3, 3 (tổng 9, lẻ).</li>
<li>6 người, ai cũng bắt tay với mọi người còn lại: \(6 \times 5 / 2 = 15\) cái bắt tay.</li>
</ul>
<p class="small muted">Duyệt đồ thị: BFS (theo chiều rộng, dùng hàng đợi, tìm đường đi ít cạnh nhất) và DFS (theo chiều sâu, dùng ngăn xếp/đệ quy). Chỉ cần biết tên và ý tưởng.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li>Nhầm OR với XOR: "A hoặc B" trong toán là OR, <b>vẫn đúng khi cả hai cùng đúng</b>.</li>
<li>Đếm \(|A \cup B|\) mà quên trừ phần giao.</li>
<li>Dirichlet: quên cộng 1, hoặc không xét trường hợp xui nhất.</li>
<li>Tính số cạnh mà quên chia 2 (mỗi cạnh được đếm ở cả hai đầu).</li>
</ul></div>
`},

// ======================= A4 VECTOR & MA TRẬN =======================
{
  id: 'A4.1', module: 'A', topic: 'A4', minutes: 12,
  title: 'Vector & tích vô hướng',
  skills: ['e.vector', 'mlq.vector', 'ts.vector'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Trong AI, mọi thứ đều được biểu diễn thành vector: một ngôi nhà (diện tích, số phòng, tuổi nhà), một câu văn (embedding). Tích vô hướng là phép tính cốt lõi của neural network và tìm kiếm ngữ nghĩa (RAG).</div>

<h2>1. Vector là gì?</h2>
<p>Vector là một <b>danh sách số có thứ tự</b>. \(u = (2, -1, 2)\) có 3 thành phần (3 chiều).</p>

<h2>2. Tích vô hướng (dot product)</h2>
<div class="box formula">$$u \cdot v = u_1v_1 + u_2v_2 + \dots + u_nv_n$$
Nhân <b>từng cặp cùng vị trí</b> rồi <b>cộng lại</b>. Kết quả là <b>một con số</b>.</div>
<p><b>Ví dụ:</b> \(u = (2,-1,2),\ v = (2,1,3)\)</p>
<ol class="steps">
  <li>Từng cặp: \(2\times2 = 4;\ (-1)\times1 = -1;\ 2\times3 = 6\)</li>
  <li>Cộng: \(4 - 1 + 6 = 9\)</li>
</ol>

<h2>3. Ý nghĩa: hai vector "giống nhau" cỡ nào?</h2>
<ul>
  <li>\(u\cdot v > 0\): cùng hướng (giống nhau)</li>
  <li>\(u\cdot v = 0\): vuông góc (không liên quan)</li>
  <li>\(u\cdot v \lt 0\): ngược hướng</li>
</ul>
<div class="box formula">
Độ dài (chuẩn L2): \(\|u\| = \sqrt{u_1^2 + \dots + u_n^2}\)
$$\text{cosine similarity} = \frac{u\cdot v}{\|u\|\,\|v\|} \in [-1, 1]$$
</div>
<p>Ví dụ: \(u=(3,4)\) có \(\|u\| = \sqrt{9+16} = 5\). Cosine similarity được dùng để so sánh embedding của hai câu văn trong RAG.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
Sai dấu khi nhân với số âm. Đáp án nhiễu thường là kết quả của việc quên dấu trừ: \(4+1+6 = 11\).</div>
<h2>Bổ sung: khoảng cách giữa hai điểm</h2>
<div class="box formula">
<b>Euclid (L2)</b>, đường chim bay: $$d(A,B) = \sqrt{(a_1-b_1)^2 + (a_2-b_2)^2 + \dots}$$
<b>Manhattan (L1)</b>, đi theo ô bàn cờ: $$d(A,B) = |a_1-b_1| + |a_2-b_2| + \dots$$
</div>
<ul>
<li>A(1, 1, 0), B(1, −2, 4): Euclid = \(\sqrt{0 + 9 + 16} = \sqrt{25} = 5\).</li>
<li>A(1, 2), B(4, 6): Manhattan = \(3 + 4 = 7\); Euclid = \(\sqrt{9+16} = 5\).</li>
</ul>
<p>kNN, k-means dùng khoảng cách Euclid. Vì vậy phải scale dữ liệu trước khi dùng các mô hình này.</p>
<h2>Đầy đủ: phép toán & tính chất vector</h2>
<ul>
<li>Cộng/trừ: theo từng thành phần. \(k\cdot u\): nhân từng thành phần.</li>
<li>\(u\cdot v = v\cdot u\); \(u\cdot u = \|u\|^2\).</li>
<li>\(u\cdot v = \|u\|\,\|v\|\cos\theta\); <b>vuông góc</b> \(\iff u\cdot v = 0\).</li>
<li>Vector đơn vị (chuẩn hóa): \(\hat{u} = u / \|u\|\). VD (3, 4) → (0,6; 0,8).</li>
<li>Chuẩn L1: \(\|u\|_1 = \sum|u_i|\); chuẩn L2: \(\|u\|_2 = \sqrt{\sum u_i^2}\).</li>
</ul>
`},

{
  id: 'A4.2', module: 'A', topic: 'A4', minutes: 15,
  title: 'Ma trận: đọc, cộng, nhân số, chuyển vị, ma trận đơn vị',
  skills: ['matrix.addition.full-2x2', 'matrix.scalar-multiplication', 'matrix.transpose.2x2', 'matrix.transpose.of-sum', 'matrix.identity.product'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Khoảng một nửa Module A là ma trận. Bài này dạy cách <b>đọc</b> ma trận và các phép tính dễ, làm nền cho phép nhân ma trận và định thức.</div>

<h2>1. Đọc ký hiệu trong đề</h2>
<div class="box idea"><span class="box-title">💡 Rất quan trọng</span>
Đề viết ma trận theo kiểu Python: <code>A=[[1,2],[3,4]]</code>. Mỗi cặp ngoặc vuông bên trong là <b>một hàng</b>:
$$A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}$$
Hàng 1 là (1, 2), hàng 2 là (3, 4).</div>
<ul>
  <li><b>Kích thước</b> m×n = số hàng × số cột. A ở trên là 2×2.</li>
  <li>\(a_{ij}\) là phần tử ở <b>hàng i, cột j</b>. Ở trên \(a_{12} = 2\), \(a_{21} = 3\).</li>
</ul>

<h2>2. Cộng ma trận & nhân với một số</h2>
<p><b>Cộng:</b> hai ma trận phải cùng kích thước; cộng các phần tử <b>cùng vị trí</b>.</p>
$$\begin{bmatrix}1&2\\1&3\end{bmatrix} + \begin{bmatrix}1&2\\2&1\end{bmatrix} = \begin{bmatrix}2&4\\3&4\end{bmatrix}$$
<p><b>Nhân với số:</b> nhân <b>mọi</b> phần tử với số đó.</p>
$$3\begin{bmatrix}1&1\\2&3\end{bmatrix} = \begin{bmatrix}3&3\\6&9\end{bmatrix}$$

<h2>3. Chuyển vị \(A^T\): hàng thành cột</h2>
$$A = \begin{bmatrix}1&2\\3&4\end{bmatrix} \Rightarrow A^T = \begin{bmatrix}1&3\\2&4\end{bmatrix}$$
<p>Hàng 1 (1, 2) trở thành cột 1. Với 2×2, chỉ cần <b>đổi chỗ hai phần tử chéo phụ</b> (góc trên phải ↔ góc dưới trái).</p>
<ul>
  <li>Ma trận đối xứng (VD <code>[[1,2],[2,3]]</code>) có \(A^T = A\).</li>
  <li>\((A+B)^T = A^T + B^T\). Làm nhanh: <b>cộng trước rồi chuyển vị</b>.</li>
</ul>
<p><b>Ví dụ:</b> \(A=\)<code>[[1,2],[2,3]]</code>, \(B=\)<code>[[0,1],[3,2]]</code>. \(A+B=\)<code>[[1,3],[5,5]]</code>, nên \((A+B)^T=\)<code>[[1,5],[3,5]]</code>.</p>

<h2>4. Ma trận đơn vị I & ma trận chéo</h2>
$$I = \begin{bmatrix}1&0\\0&1\end{bmatrix}$$ $$\mathrm{diag}(2,3) = \begin{bmatrix}2&0\\0&3\end{bmatrix}$$
<p>\(I\) giống "số 1" của ma trận: \(AI = IA = A\). Nhân với I thì ma trận <b>không đổi</b>.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li>Đọc nhầm <code>[[1,2],[3,4]]</code> thành các cột.</li>
<li>Chuyển vị (A+B) mà chỉ chuyển vị A, quên B.</li>
</ul></div>
<h2>Bổ sung: tính chất chuyển vị</h2>
<div class="box formula">$$(A^T)^T = A$$ $$(A+B)^T = A^T + B^T$$ $$(kA)^T = kA^T$$ $$(AB)^T = B^T A^T$$</div>
<p>Chú ý: chuyển vị của tích thì <b>đảo thứ tự</b> các ma trận.</p>
<h2>Đầy đủ: tính chất phép cộng & các loại ma trận</h2>
<ul>
<li>\(A + B = B + A\); \((A+B)+C = A+(B+C)\); \(k(A+B) = kA + kB\); \(A + 0 = A\).</li>
<li><b>Vết</b> (trace): \(\mathrm{tr}(A)\) = tổng đường chéo chính. <code>[[1,2],[3,4]]</code> → 5.</li>
<li>Ma trận <b>đối xứng</b>: \(A^T = A\). Ma trận <b>chéo</b>: ngoài đường chéo toàn 0. Ma trận <b>tam giác</b>: toàn 0 ở dưới (hoặc trên) đường chéo.</li>
</ul>
`},

{
  id: 'A4.3', module: 'A', topic: 'A4', minutes: 22,
  title: 'Nhân ma trận',
  skills: ['matrix.multiplication.dimensions', 'matrix.multiplication.single-entry', 'matrix.multiplication.full-2x2', 'matrix.multiplication.non-commutative', 'matrix.multiplication.solve-unknown-entry', 'matrix.diagonal-times-vector', 'e.matrix'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Một lớp neural network chính là phép tính \(y = Wx + b\): nhân ma trận với vector. Đây là dạng đề có nhiều câu nhất trong Module A.</div>

<h2>1. Khi nào nhân được? Kích thước kết quả?</h2>
<div class="box formula">$$(m \times \underline{n}) \cdot (\underline{n} \times p) = (m \times p)$$
Hai số <b>ở giữa phải bằng nhau</b>; kết quả có kích thước bằng hai số <b>ở ngoài</b>.</div>
<p><b>Ví dụ:</b> A là 2×3, B là 3×2 → AB là <b>2×2</b> (còn BA là 3×3).</p>

<h2>2. Quy tắc: "hàng nhân cột"</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Phần tử ở <b>hàng i, cột j</b> của AB = <b>tích vô hướng</b> (bài A4.1) của <b>hàng i của A</b> với <b>cột j của B</b>.</div>
$$\begin{bmatrix}a&b\\c&d\end{bmatrix}\begin{bmatrix}e&f\\g&h\end{bmatrix} = \begin{bmatrix}ae+bg & af+bh\\ ce+dg & cf+dh\end{bmatrix}$$

<p><b>Ví dụ đầy đủ:</b> \(A=\)<code>[[2,1],[1,1]]</code>, \(B=\)<code>[[1,2],[3,1]]</code></p>
<ol class="steps">
  <li>(1,1): hàng 1 của A (2, 1) · cột 1 của B (1, 3) = \(2\cdot1 + 1\cdot3 = 5\)</li>
  <li>(1,2): (2, 1) · cột 2 (2, 1) = \(2\cdot2 + 1\cdot1 = 5\)</li>
  <li>(2,1): hàng 2 (1, 1) · (1, 3) = \(1 + 3 = 4\)</li>
  <li>(2,2): (1, 1) · (2, 1) = \(2 + 1 = 3\)</li>
</ol>
<p>\(AB = \)<code>[[5,5],[4,3]]</code></p>

<p><b>Chỉ hỏi một phần tử?</b> Chỉ tính đúng ô đó. \(A=\)<code>[[1,2],[3,4]]</code>, \(B=\)<code>[[2,1],[1,2]]</code>, phần tử (1,2): hàng 1 (1, 2) · cột 2 (1, 2) = \(1 + 4 = 5\).</p>

<h2>3. Ma trận × vector</h2>
<p>Coi vector là một cột. <code>[[2,2],[0,2]]</code> · (2, 2):</p>
<p>Hàng 1: \(2\cdot2+2\cdot2 = 8\); hàng 2: \(0\cdot2 + 2\cdot2 = 4\) → <b>(8, 4)</b></p>
<p><b>Ma trận chéo × vector:</b> chỉ cần nhân từng phần tử tương ứng: \(\mathrm{diag}(2,3)\cdot(2,3) = (4, 9)\).</p>

<h2>4. Không giao hoán: AB ≠ BA</h2>
<p>Với A, B ở ví dụ trên: \(AB=\)<code>[[5,5],[4,3]]</code> nhưng \(BA=\)<code>[[4,3],[7,4]]</code>. Thứ tự nhân rất quan trọng.</p>

<h2>5. Tìm ẩn trong ma trận</h2>
<p>\(A=\)<code>[[x,2],[1,3]]</code>, \(B=\)<code>[[2,0],[1,1]]</code>, biết phần tử (1,1) của AB bằng 8.</p>
<p>(1,1) = \(x\cdot2 + 2\cdot1 = 2x + 2 = 8 \Rightarrow x = 3\).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li>Nhân <b>từng phần tử cùng vị trí</b> (element-wise, kiểu <code>A*B</code> trong NumPy). Đó <b>không phải</b> nhân ma trận (<code>A@B</code>).</li>
<li>Lấy nhầm hàng của B thay vì cột của B.</li>
</ul></div>
<div class="box tip"><span class="box-title">⚡ Mẹo</span>Đề trắc nghiệm hỏi cả ma trận: thường chỉ cần tính 1–2 ô là đủ loại hết đáp án sai.</div>
<h2>Đầy đủ: tính chất phép nhân ma trận</h2>
<ul>
<li>Kết hợp: \((AB)C = A(BC)\). Phân phối: \(A(B+C) = AB + AC\). \(k(AB) = (kA)B\).</li>
<li>\(AI = IA = A\); \(A^2 = AA\) (chỉ với ma trận vuông).</li>
<li><b>Không</b> giao hoán: nói chung \(AB \ne BA\).</li>
<li>\(AB = 0\) <b>không</b> suy ra A = 0 hoặc B = 0.</li>
<li>\((AB)^T = B^TA^T\) (bài A4.2).</li>
</ul>
`},

{
  id: 'A4.4', module: 'A', topic: 'A4', minutes: 22,
  title: 'Định thức & ma trận nghịch đảo',
  skills: ['matrix.determinant.2x2', 'matrix.determinant.written-calculation', 'matrix.inverse.single-entry-2x2', 'matrix.inverse.full-2x2', 'matrix.inverse.singular-recognition', 'ts.matrix'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Theo phản hồi của người thi ngày đầu, có câu <b>tự luận tính định thức</b>. Định thức cũng cho biết ma trận có nghịch đảo hay không.</div>

<h2>1. Định thức 2×2</h2>
<div class="box formula">$$\det\begin{bmatrix}a&b\\c&d\end{bmatrix} = ad - bc$$
"Đường chéo chính trừ đường chéo phụ".</div>
<p><b>Ví dụ:</b> <code>[[2,1],[3,4]]</code>: \(2\times4 - 1\times3 = 8 - 3 = 5\).</p>
<p><b>Ý nghĩa:</b> \(\det = 0\) → ma trận <b>suy biến</b>: các hàng "trùng hướng" nhau (hàng này là bội của hàng kia), và <b>không có nghịch đảo</b>.</p>

<h3>Định thức 3×3 (phòng khi gặp)</h3>
<ul>
<li><b>Ma trận tam giác</b> (toàn số 0 ở dưới hoặc trên đường chéo): det = <b>tích đường chéo</b>. <code>[[1,2,3],[0,1,4],[0,0,2]]</code> → \(1\cdot1\cdot2 = 2\).</li>
<li>Tổng quát, khai triển theo hàng 1:
$$\det\begin{bmatrix}a&b&c\\d&e&f\\g&h&i\end{bmatrix} = a(ei-fh) - b(di-fg) + c(dh-eg)$$
Mẹo: chọn hàng/cột có nhiều số 0 nhất để khai triển. Nhớ dấu xen kẽ <b>+ − +</b>.</li>
</ul>

<h2>2. Ma trận nghịch đảo 2×2</h2>
<p>\(A^{-1}\) là ma trận thỏa \(A A^{-1} = I\), giống như \(5 \times \frac{1}{5} = 1\).</p>
<div class="box formula">$$A^{-1} = \frac{1}{ad-bc}\begin{bmatrix} d & -b\\ -c & a\end{bmatrix}$$
Thuộc theo câu: <b>"đổi chỗ a và d, đổi dấu b và c, chia cho det"</b>. Chỉ làm được khi \(\det \ne 0\).</div>
<p><b>Ví dụ:</b> \(A = \)<code>[[1,1],[1,2]]</code></p>
<ol class="steps">
  <li>\(\det = 1\cdot2 - 1\cdot1 = 1\)</li>
  <li>Đổi chỗ a, d; đổi dấu b, c: <code>[[2,-1],[-1,1]]</code></li>
  <li>Chia det (= 1): \(A^{-1} = \)<code>[[2,-1],[-1,1]]</code></li>
  <li>Thử lại: \(AA^{-1}\) có ô (1,1) = \(1\cdot2 + 1\cdot(-1) = 1\) ✓</li>
</ol>
<p class="small muted">Lưu ý: đề luyện có khi ghi dạng <code>2/1</code>, <code>-1/1</code> (tức chia det = 1). Đó vẫn là 2 và −1.</p>
<p><b>Chỉ hỏi một phần tử:</b> \(A=\)<code>[[2,1],[1,1]]</code>, \(\det = 1\). Phần tử (1,1) của \(A^{-1}\) = \(d/\det = 1/1 = 1\).</p>

<h2>3. Nhận biết ma trận không khả nghịch</h2>
<p><code>[[1,2],[3,6]]</code>: \(\det = 6 - 6 = 0\) → <b>không có nghịch đảo</b>. Hàng 2 = 3 × hàng 1.</p>

<div class="box tip"><span class="box-title">✍️ Mẫu trình bày câu tự luận</span>
"det(A) = ad − bc = 2×4 − 1×3 = 8 − 3 = 5. Vậy det(A) = 5."<br>
Luôn ghi <b>công thức → thay số → kết quả</b>; đề yêu cầu "ghi phép tính chính, không chỉ ghi đáp số".</div>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Tính \(ad + bc\) hoặc \(bc - ad\) (sai dấu).</li><li>Nghịch đảo: đổi dấu nhầm a, d thay vì b, c.</li><li>Quên chia cho det khi det ≠ 1.</li></ul></div>
<h2>Bổ sung: tính chất của định thức</h2>
<table>
<tr><th>Tính chất</th><th>Ghi nhớ</th></tr>
<tr><td>\(\det(AB) = \det A \cdot \det B\)</td><td>Định thức của tích = tích các định thức</td></tr>
<tr><td>\(\det(A^T) = \det A\)</td><td>Chuyển vị không đổi định thức</td></tr>
<tr><td>\(\det(kA) = k^n \det A\)</td><td>A cỡ n×n. VD 2×2: \(\det(3A) = 9\det A\)</td></tr>
<tr><td>\(\det(A^{-1}) = 1/\det A\)</td><td></td></tr>
<tr><td>Đổi chỗ 2 hàng</td><td>Định thức <b>đổi dấu</b></td></tr>
<tr><td>Có 2 hàng tỉ lệ / một hàng toàn 0</td><td>\(\det = 0\)</td></tr>
<tr><td>\(\det I = 1\)</td><td></td></tr>
</table>
<p>Nghịch đảo của tích cũng đảo thứ tự: \((AB)^{-1} = B^{-1}A^{-1}\).</p>
<h2>Đầy đủ</h2>
<p><b>Quy tắc Sarrus</b> (chỉ cho 3×3): cộng 3 đường chéo xuôi, trừ 3 đường chéo ngược.</p>
<div class="box formula">$$\det = aei + bfg + cdh - ceg - bdi - afh$$</div>
<ul>
<li>\(AA^{-1} = A^{-1}A = I\); \((A^{-1})^{-1} = A\); \((A^T)^{-1} = (A^{-1})^T\); \((kA)^{-1} = \frac{1}{k}A^{-1}\).</li>
<li>Khả nghịch \(\iff \det A \ne 0 \iff\) các hàng độc lập (rank đầy đủ).</li>
<li>VD det A = 2 (ma trận 2×2) → det(3A) = 3² × 2 = 18.</li>
</ul>
`},

{
  id: 'A4.5', module: 'A', topic: 'A4', minutes: 18,
  title: 'Hệ phương trình, Ax = b & rank',
  skills: ['matrix.linear-system.two-equations', 'matrix.solve-ax-equals-b', 'matrix.rank.proportional-rows', 'matrix.rank.written-row-dependence'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
"Giải Ax = b" và "tính rank" đều có trong đề, và rank từng ra dạng tự luận ngày thi đầu. Cả hai đều quy về giải hệ 2 ẩn và nhận ra hàng nào "thừa".</div>

<h2>1. Hệ 2 phương trình, 2 ẩn</h2>
<p><b>Ví dụ:</b> \(x + y = 3\) và \(2x - y = 0\)</p>
<ol class="steps">
  <li><b>Phương pháp cộng:</b> cộng hai phương trình để triệt tiêu y: \(3x = 3 \Rightarrow x = 1\)</li>
  <li>Thay vào phương trình 1: \(1 + y = 3 \Rightarrow y = 2\)</li>
  <li>Thử lại phương trình 2: \(2\cdot1 - 2 = 0\) ✓ → nghiệm \((1, 2)\)</li>
</ol>

<h2>2. Ax = b chỉ là hệ phương trình viết gọn</h2>
$$\begin{bmatrix}1&1\\2&-1\end{bmatrix}\begin{bmatrix}x_1\\x_2\end{bmatrix} = \begin{bmatrix}4\\2\end{bmatrix} \iff \begin{cases}x_1 + x_2 = 4\\ 2x_1 - x_2 = 2\end{cases}$$
<p>Cộng hai phương trình: \(3x_1 = 6 \Rightarrow x_1 = 2,\ x_2 = 2\). Vậy \(x = [2, 2]\).</p>
<p>Cách khác: \(x = A^{-1}b\) (bài A4.4).</p>
<div class="box tip"><span class="box-title">⚡ Mẹo trắc nghiệm nhanh nhất</span>
<b>Thay từng đáp án vào</b> hệ phương trình. Đáp án nào thỏa cả hai phương trình là đúng. Thường chỉ mất 30 giây.</div>

<h2>3. Rank (hạng) của ma trận</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Rank = số hàng <b>thật sự mang thông tin mới</b> (độc lập tuyến tính). Hàng nào là <b>bội</b> hoặc <b>tổng</b> của các hàng khác thì "thừa", không làm rank tăng.</div>
<table>
<tr><th>Ma trận</th><th>Nhận xét</th><th>Rank</th></tr>
<tr><td><code>[[1,2],[2,4]]</code></td><td>Hàng 2 = 2 × hàng 1</td><td>1</td></tr>
<tr><td><code>[[1,2],[3,4]]</code></td><td>det = 4 − 6 = −2 ≠ 0</td><td>2</td></tr>
<tr><td><code>[[0,0],[0,0]]</code></td><td>Toàn số 0</td><td>0</td></tr>
<tr><td>3×3 có R3 = R1 + R2, R1 và R2 không tỉ lệ</td><td>R3 thừa</td><td>2</td></tr>
</table>
<div class="box formula">Quy tắc nhanh cho 2×2: \(\det \ne 0 \Rightarrow\) rank 2; \(\det = 0\) và không toàn số 0 \(\Rightarrow\) rank 1.<br>
Luôn có: rank ≤ min(số hàng, số cột).</div>

<div class="box tip"><span class="box-title">✍️ Mẫu trình bày câu tự luận</span>
"Hàng 2 = 2 × hàng 1, nên chỉ có 1 hàng độc lập tuyến tính. Vậy rank(A) = 1."</div>
<h2>Đầy đủ: quy tắc Cramer, số nghiệm & trị riêng</h2>
<div class="box formula"><b>Cramer (2×2):</b> với \(ax + by = e,\ cx + dy = f\):
$$D = ad - bc$$ $$D_x = ed - bf$$ $$D_y = af - ec$$ $$x = \frac{D_x}{D}, \quad y = \frac{D_y}{D}$$</div>
<p>VD \(x + y = 3,\ 2x - y = 0\): D = −1 − 2 = −3; \(D_x\) = −3 − 0 = −3 → x = 1; \(D_y\) = 0 − 6 = −6 → y = 2.</p>
<table>
<tr><th>det A</th><th>Hệ Ax = b</th></tr>
<tr><td>≠ 0</td><td>Nghiệm <b>duy nhất</b> \(x = A^{-1}b\)</td></tr>
<tr><td>= 0</td><td><b>Vô nghiệm</b> hoặc <b>vô số nghiệm</b></td></tr>
</table>
<ul><li>rank(A) ≤ min(số hàng, số cột); rank(Aᵀ) = rank(A).</li></ul>
<h3>Trị riêng & vector riêng (ít ra thi; nền tảng của PCA)</h3>
<div class="box formula">$$Av = \lambda v$$ Với ma trận 2×2: $$\lambda^2 - \mathrm{tr}(A)\,\lambda + \det A = 0$$ $$\lambda_1 + \lambda_2 = \mathrm{tr}(A), \quad \lambda_1\lambda_2 = \det A$$</div>
<p>VD <code>[[2,1],[1,2]]</code>: tr = 4, det = 3 → \(\lambda^2 - 4\lambda + 3 = 0\) → λ = 1 và 3. Ma trận chéo <code>[[2,0],[0,3]]</code> có trị riêng chính là 2 và 3.</p>
`},

// ======================= A5 ĐẠO HÀM & GRADIENT =======================
{
  id: 'A5.1', module: 'A', topic: 'A5', minutes: 18,
  title: 'Đạo hàm, gradient & cập nhật tham số',
  skills: ['e.calculus', 'ml.optimization.update-bias-one-step', 'ts.calculus'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Huấn luyện mô hình = điều chỉnh tham số để <b>giảm lỗi</b>, và đạo hàm cho biết nên chỉnh theo hướng nào. Có câu tự luận "update bias một bước"; cộng đồng cũng kể có câu tính gradient của \(x^2 - 3y\).</div>

<h2>1. Đạo hàm là độ dốc</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Đạo hàm \(f'(x)\) cho biết khi x tăng một chút thì f tăng/giảm <b>nhanh cỡ nào</b>. Dương: đang đi lên dốc. Âm: đang đi xuống. Bằng 0: đang ở đỉnh hoặc đáy.</div>
<table>
<tr><th>Quy tắc</th><th>Công thức</th><th>Ví dụ</th></tr>
<tr><td>Hằng số</td><td>\((c)' = 0\)</td><td>\((7)' = 0\)</td></tr>
<tr><td>Lũy thừa</td><td>\((x^n)' = n\,x^{n-1}\)</td><td>\((x^3)' = 3x^2\)</td></tr>
<tr><td>Nhân hằng số</td><td>\((c\,f)' = c\,f'\)</td><td>\((3x^3)' = 9x^2\)</td></tr>
<tr><td>Tổng</td><td>\((f+g)' = f' + g'\)</td><td>\((x^2 + 5x)' = 2x + 5\)</td></tr>
</table>

<h2>2. Đạo hàm riêng & gradient (nhiều biến)</h2>
<p>Hàm nhiều biến: đạo hàm theo một biến thì <b>coi các biến khác là hằng số</b>.</p>
<p><b>Ví dụ:</b> \(f(x,y) = x^2 - 3y\)</p>
<ol class="steps">
  <li>\(\frac{\partial f}{\partial x} = 2x\) (coi y là hằng số → \(-3y\) có đạo hàm 0)</li>
  <li>\(\frac{\partial f}{\partial y} = -3\)</li>
  <li>Gradient tại (2, 1): \(\nabla f = (2\cdot2,\ -3) = (4, -3)\)</li>
</ol>
<p><b>Gradient</b> là vector các đạo hàm riêng, chỉ hướng hàm số <b>tăng nhanh nhất</b>.</p>

<h2>3. Gradient descent: đi ngược gradient để giảm lỗi</h2>
<div class="box formula">$$w_{\text{mới}} = w - \eta \cdot \frac{\partial L}{\partial w}$$
\(\eta\) (learning rate) là độ dài bước. Dấu <b>trừ</b>: đi ngược hướng tăng, tức đi xuống dốc.</div>
<p><b>Ví dụ (đúng dạng tự luận):</b> \(b = 0{,}5\), learning rate \(= 0{,}1\), gradient theo bias \(= -0{,}4\).</p>
<ol class="steps">
  <li>\(b_{\text{mới}} = 0{,}5 - 0{,}1 \times (-0{,}4)\)</li>
  <li>\(= 0{,}5 + 0{,}04 = 0{,}54\)</li>
  <li>Giải thích dấu: gradient <b>âm</b> → tăng b sẽ làm loss giảm → b <b>tăng</b>.</li>
</ol>
<div class="box tip"><span class="box-title">✍️ Nhớ dấu</span>Gradient dương → tham số giảm. Gradient âm → tham số tăng. Luôn <b>đặt gradient trong ngoặc</b> để không nhầm dấu.</div>

<h2>4. Learning rate</h2>
<ul>
<li><b>Quá lớn:</b> bước nhảy quá xa, vượt qua đáy, loss dao động hoặc tăng vọt (không hội tụ).</li>
<li><b>Quá nhỏ:</b> học rất chậm.</li>
</ul>
<p class="small muted">Chain rule (đạo hàm hàm hợp) và backpropagation sẽ học ở Module C (bài neural network).</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>\((3x^3)' = 3x^2\): quên nhân số mũ. Đúng là \(9x^2\).</li><li>Update tham số bằng phép cộng thay vì trừ.</li></ul></div>
<h2>Bổ sung: đạo hàm & logarit hay dùng trong AI</h2>
<table>
<tr><th>Hàm</th><th>Đạo hàm</th></tr>
<tr><td>\(e^x\)</td><td>\(e^x\)</td></tr>
<tr><td>\(\ln x\)</td><td>\(1/x\)</td></tr>
<tr><td>Tích \(u\cdot v\)</td><td>\(u'v + uv'\)</td></tr>
<tr><td>Thương \(u/v\)</td><td>\((u'v - uv')/v^2\)</td></tr>
<tr><td>Hàm hợp \(f(g(x))\) (chain rule)</td><td>\(f'(g(x))\cdot g'(x)\). VD \(((3x+1)^2)' = 2(3x+1)\cdot 3\)</td></tr>
<tr><td>Sigmoid \(\sigma(z)\)</td><td>\(\sigma(z)(1-\sigma(z))\)</td></tr>
</table>
<div class="box formula">Quy tắc logarit: $$\log(ab) = \log a + \log b$$ $$\log\frac{a}{b} = \log a - \log b$$ $$\log a^n = n\log a$$
\(\log 1 = 0\); \(\log_2 8 = 3\); \(\ln e = 1\). Xác suất càng nhỏ thì \(-\log p\) càng lớn (đây là lý do cross-entropy phạt nặng dự đoán sai mà tự tin).</div>
<h2>Đầy đủ: bảng đạo hàm & cực trị</h2>
<table>
<tr><th>Hàm</th><th>Đạo hàm</th></tr>
<tr><td>\(c\) (hằng)</td><td>0</td></tr>
<tr><td>\(x\)</td><td>1</td></tr>
<tr><td>\(\sqrt{x}\)</td><td>\(\frac{1}{2\sqrt{x}}\)</td></tr>
<tr><td>\(1/x\)</td><td>\(-1/x^2\)</td></tr>
<tr><td>\(a^x\)</td><td>\(a^x \ln a\)</td></tr>
</table>
<p><b>Cực trị:</b> tại điểm cực trị \(f'(x) = 0\). Nếu \(f''(x) \gt 0\) → cực tiểu; \(f''(x) \lt 0\) → cực đại.<br>
VD \(f(x) = x^2 - 4x + 1\): \(f' = 2x - 4 = 0 \Rightarrow x = 2\); \(f'' = 2 \gt 0\) → cực tiểu, f(2) = −3. Gradient descent chính là cách đi dần tới điểm có gradient = 0.</p>
<h2>Bổ sung: tích phân (mức nhận biết)</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>Đạo hàm đo <b>độ dốc</b>. Tích phân làm việc ngược lại: cộng dồn vô số phần rất nhỏ, tức là tính <b>diện tích dưới đường cong</b>.</div>
<div class="box formula">$$\int x^n\,dx = \frac{x^{n+1}}{n+1} + C \quad (n \ne -1)$$
$$\int_a^b f(x)\,dx = F(b) - F(a) \quad \text{với } F' = f$$</div>
<p>VD \(\int_0^2 x\,dx = \frac{x^2}{2}\Big|_0^2 = 2\): đúng bằng diện tích tam giác đáy 2, cao 2.</p>
<p>Trong AI: với biến ngẫu nhiên liên tục, <b>xác suất là diện tích</b> dưới hàm mật độ (tổng diện tích bằng 1); chỉ số <b>AUC</b> cũng là một diện tích dưới đường cong.</p>
`},

// ======================= A6 TƯ DUY ĐỊNH LƯỢNG =======================
{
  id: 'A6.1', module: 'A', topic: 'A6', minutes: 22,
  title: 'Tư duy định lượng: ước lượng nhanh, tốc độ, tăng trưởng, đọc bảng & biểu đồ',
  skills: ['ts.quant'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Tên Module A có hẳn vế <b>"Tư duy Định lượng"</b>: khả năng suy nghĩ bằng con số trong tình huống thực, không cần công thức phức tạp. Người làm AI dùng nó hằng ngày: ước lượng chi phí, thời gian huấn luyện, đọc số liệu và phát hiện con số vô lý.</div>

<h2>1. Ước lượng nhanh (Fermi)</h2>
<div class="box idea"><span class="box-title">💡 Cách làm</span>
Tách đại lượng cần tìm thành <b>tích của vài thừa số dễ đoán</b>, làm tròn từng thừa số, rồi nhân lại. Mục tiêu là đúng <b>bậc độ lớn</b> (nghìn, triệu hay tỉ), không cần chính xác.</div>
<p><b>Ví dụ:</b> Chatbot có 10.000 người dùng mỗi ngày, mỗi người hỏi khoảng 5 câu, mỗi câu cả hỏi lẫn đáp khoảng 500 token. Mỗi ngày tốn bao nhiêu token?</p>
<p>\(10\,000 \times 5 \times 500 = 25\,000\,000\) = <b>25 triệu token/ngày</b>. Nếu giá là 1 USD cho 1 triệu token thì khoảng 25 USD/ngày, tức khoảng 750 USD/tháng.</p>

<h2>2. Bậc độ lớn & đơn vị</h2>
<table>
<tr><th>Ký hiệu</th><th>Giá trị</th><th>Ví dụ</th></tr>
<tr><td>K (nghìn)</td><td>\(10^3\)</td><td>10K người dùng</td></tr>
<tr><td>M (triệu)</td><td>\(10^6\)</td><td>model 7M tham số, 1 MB</td></tr>
<tr><td>B hoặc G (tỉ)</td><td>\(10^9\)</td><td>model 7B tham số, 1 GB</td></tr>
<tr><td>T (nghìn tỉ)</td><td>\(10^{12}\)</td><td>1 TB</td></tr>
</table>
<p>Mẹo: \(2^{10} = 1024 \approx 10^3\), nên \(2^{20} \approx 10^6\), \(2^{30} \approx 10^9\). 1 giây = 1000 ms. Một model 7B tham số, mỗi tham số 4 byte (float32) cần khoảng \(7 \times 4 = 28\) GB bộ nhớ.</p>

<h2>3. Tốc độ, năng suất, thời gian</h2>
<div class="box formula">$$\text{khối lượng} = \text{tốc độ} \times \text{thời gian}$$
Nhiều máy cùng làm: <b>cộng tốc độ</b> lại (không cộng thời gian).</div>
<p><b>Ví dụ:</b> 1 GPU xử lý 200 ảnh/phút. Xử lý 1 triệu ảnh mất bao lâu? Dùng 4 GPU thì sao?</p>
<ol class="steps">
<li>1 GPU: \(1\,000\,000 / 200 = 5000\) phút ≈ 83 giờ</li>
<li>4 GPU: tốc độ 800 ảnh/phút → \(1\,000\,000 / 800 = 1250\) phút ≈ 21 giờ</li>
</ol>
<p>Dạng "A làm xong trong 6 giờ, B trong 3 giờ, cùng làm mất bao lâu": tốc độ là 1/6 và 1/3 → tổng 1/2 → <b>2 giờ</b>.</p>

<h2>4. Tăng trưởng tuyến tính và tăng trưởng mũ</h2>
<table>
<tr><th></th><th>Tuyến tính</th><th>Mũ (theo cấp số nhân)</th></tr>
<tr><td>Mỗi bước</td><td><b>cộng</b> một lượng cố định</td><td><b>nhân</b> với một hệ số cố định</td></tr>
<tr><td>Công thức</td><td>\(y = a + kt\)</td><td>\(y = a(1+r)^t\)</td></tr>
<tr><td>Ví dụ</td><td>+100 người dùng/tháng</td><td>+10% người dùng/tháng</td></tr>
</table>
<div class="box formula"><b>Quy tắc 72:</b> tăng r% mỗi kỳ thì sau khoảng \(72 / r\) kỳ sẽ <b>gấp đôi</b>. Tăng 10%/tháng → gấp đôi sau khoảng 7 tháng.</div>
<p>Tăng trưởng mũ ban đầu trông chậm rồi vọt lên rất nhanh. <b>Thang log</b> (mỗi vạch gấp 10 lần vạch trước) biến đường cong mũ thành đường thẳng, dùng khi dữ liệu trải qua nhiều bậc độ lớn.</p>

<h2>5. Đọc bảng và biểu đồ</h2>
<table>
<tr><th>Biểu đồ</th><th>Dùng để</th></tr>
<tr><td>Cột</td><td>So sánh giữa các nhóm</td></tr>
<tr><td>Đường</td><td>Xu hướng theo thời gian</td></tr>
<tr><td>Tròn</td><td>Tỉ trọng trong một tổng (ít nhóm)</td></tr>
<tr><td>Histogram</td><td>Phân phối của một biến số</td></tr>
<tr><td>Boxplot</td><td>Trung vị, tứ phân vị, outlier</td></tr>
<tr><td>Scatter (phân tán)</td><td>Quan hệ giữa hai biến số</td></tr>
</table>
<div class="box trap"><span class="box-title">⚠️ Bẫy khi đọc số liệu</span>
<ul>
<li><b>Trục không bắt đầu từ 0</b> làm chênh lệch nhỏ trông rất lớn.</li>
<li><b>Số tuyệt đối và tỉ lệ:</b> "lỗi tăng từ 10 lên 20" nghe xấu, nhưng nếu số request tăng từ 1000 lên 10.000 thì tỉ lệ lỗi giảm từ 1% xuống 0,2%.</li>
<li><b>Phần trăm và điểm phần trăm:</b> từ 10% lên 15% là tăng 5 điểm phần trăm, nhưng tăng 50% tương đối.</li>
<li><b>Tỉ lệ nền</b> (base rate): 99% chính xác vẫn sai rất nhiều lần nếu sự kiện cực hiếm (bài A2.4).</li>
<li><b>Trung bình che giấu nhóm con:</b> xu hướng của tổng thể có thể ngược với xu hướng trong từng nhóm (nghịch lý Simpson).</li>
</ul></div>

<h2>6. Kiểm tra tính hợp lý</h2>
<p>Trước khi tin một con số, hỏi nhanh: <b>đơn vị có đúng không? Bậc độ lớn có hợp lý không? Có vượt quá giới hạn hiển nhiên không</b> (tỉ lệ trên 100%, xác suất âm, số người dùng nhiều hơn dân số)?</p>
`},

]);
