// Bài học Module D — Tư duy Logic, Đạo đức & Hành vi.
window.LESSONS = (window.LESSONS || []).concat([

// ======================= D1 LOGIC =======================
{
  id: 'D1.1', module: 'D', topic: 'D1', minutes: 18,
  title: 'Logic mệnh đề: nếu–thì, phủ định, suy luận đúng',
  skills: ['d.logic'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề có câu "Nếu hệ thống bị tấn công thì log bất thường. Log không bất thường. Kết luận?". Chỉ cần nắm <b>2 cách suy luận đúng</b> và <b>2 cách suy luận sai</b> là làm được.</div>

<h2>1. Mệnh đề "Nếu P thì Q" (P → Q)</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Như một lời hứa: "Nếu em đạt 9 điểm thì anh thưởng". Lời hứa chỉ bị <b>phá</b> khi em đạt 9 điểm mà anh <b>không</b> thưởng. Nghĩa là P → Q chỉ <b>sai</b> khi <b>P đúng và Q sai</b>.</div>

<h2>2. Bốn kiểu suy luận (thuộc bảng này)</h2>
<table>
<tr><th>Biết</th><th>Kết luận</th><th>Đúng/Sai</th><th>Ví dụ (P = mưa, Q = đường ướt)</th></tr>
<tr><td>P đúng</td><td>Q đúng</td><td>✅ <b>Modus ponens</b></td><td>Trời mưa → đường ướt</td></tr>
<tr><td>Q sai</td><td>P sai</td><td>✅ <b>Modus tollens</b></td><td>Đường khô → trời không mưa</td></tr>
<tr><td>Q đúng</td><td>P đúng</td><td>❌ Khẳng định hệ quả</td><td>Đường ướt → mưa? Có thể do tưới nước!</td></tr>
<tr><td>P sai</td><td>Q sai</td><td>❌ Phủ định tiền đề</td><td>Không mưa → đường khô? Chưa chắc!</td></tr>
</table>
<p><b>Ví dụ đề:</b> "Nếu bị tấn công thì log bất thường". Log <b>không</b> bất thường (Q sai) → <b>không bị tấn công</b> (modus tollens).</p>
<div class="box formula">"Nếu P thì Q" tương đương với "<b>Nếu không Q thì không P</b>" (phản đảo). KHÔNG tương đương với "Nếu Q thì P".</div>

<h2>3. Phủ định</h2>
<table>
<tr><th>Mệnh đề</th><th>Phủ định</th></tr>
<tr><td><b>Tất cả</b> đơn hàng đều được kiểm tra</td><td><b>Có ít nhất một</b> đơn hàng <b>không</b> được kiểm tra</td></tr>
<tr><td><b>Có ít nhất một</b> bug nghiêm trọng</td><td><b>Không có</b> bug nghiêm trọng nào</td></tr>
<tr><td>A <b>và</b> B</td><td>không A <b>hoặc</b> không B</td></tr>
<tr><td>A <b>hoặc</b> B</td><td>không A <b>và</b> không B</td></tr>
</table>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Phủ định của "tất cả đều được kiểm tra" <b>không phải</b> "không có cái nào được kiểm tra". Chỉ cần <b>một</b> cái không được kiểm tra là đủ làm mệnh đề gốc sai.</div>

<h2>4. Tam đoạn luận</h2>
<p>"Mọi model production đều được giám sát. X không được giám sát." → X không ở production ✅.</p>
<p>"Mọi data scientist đều biết Python. An biết Python." → <b>Không</b> kết luận được An là data scientist ❌.</p>
`},

{
  id: 'D1.2', module: 'D', topic: 'D1', minutes: 15,
  title: 'Ngụy biện & quy luật dãy số',
  skills: ['d.fallacy'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề có câu nhận diện lỗi lập luận ("doanh thu tăng sau khi dùng AI nên AI là nguyên nhân"). Tư duy logic cũng thường có câu tìm quy luật.</div>

<h2>1. Các ngụy biện hay gặp</h2>
<table>
<tr><th>Ngụy biện</th><th>Dấu hiệu</th><th>Ví dụ</th></tr>
<tr><td><b>Tương quan → nhân quả</b></td><td>Hai việc xảy ra cùng lúc/trước sau nên kết luận cái này gây ra cái kia</td><td>"Sau khi dùng AI, doanh thu tăng, vậy AI là nguyên nhân" (có thể do mùa vụ, khuyến mãi…)</td></tr>
<tr><td><b>Strawman</b> (người rơm)</td><td>Bóp méo ý đối phương thành ý cực đoan rồi bác bỏ</td><td>"Bạn muốn kiểm soát nội dung độc hại, vậy là muốn cấm toàn bộ tự do ngôn luận"</td></tr>
<tr><td><b>Ad hominem</b></td><td>Công kích người nói thay vì nội dung</td><td>"Đề xuất sai vì bạn ấy mới vào"</td></tr>
<tr><td><b>Khái quát vội vàng</b></td><td>Kết luận chung từ mẫu quá nhỏ</td><td>"5 khách hài lòng → mọi khách hài lòng"</td></tr>
<tr><td><b>Song đề giả</b></td><td>Chỉ đưa ra 2 lựa chọn cực đoan</td><td>"Hoặc AI làm hết, hoặc bỏ AI"</td></tr>
<tr><td><b>Dựa vào uy tín</b></td><td>"Đúng vì người nổi tiếng/công ty lớn nói vậy"</td><td>"Model tốt vì công ty lớn dùng"</td></tr>
<tr><td><b>Lập luận vòng tròn</b></td><td>Lấy kết luận làm tiền đề</td><td>"Model chính xác vì dự đoán của nó đúng"</td></tr>
</table>

<h2>2. Tìm quy luật dãy số</h2>
<div class="box tip"><span class="box-title">⚡ Thử lần lượt</span>
<ol><li><b>Hiệu</b> giữa các số liên tiếp: có đều không? Có tăng đều không?</li><li><b>Tỉ số</b>: có nhân với cùng một số không?</li><li><b>Kết hợp</b>: ×2 − 1, n(n+1), n²…</li><li><b>Tổng hai số trước</b> (Fibonacci).</li></ol></div>
<table>
<tr><th>Dãy</th><th>Quy luật</th><th>Tiếp theo</th></tr>
<tr><td>1, 2, 4, 8</td><td>×2</td><td>16</td></tr>
<tr><td>2, 6, 12, 20, 30</td><td>Hiệu 4, 6, 8, 10 → +12; hoặc n(n+1)</td><td>42</td></tr>
<tr><td>3, 5, 9, 17</td><td>×2 − 1 (hiệu 2, 4, 8)</td><td>33</td></tr>
<tr><td>1, 1, 2, 3, 5, 8</td><td>Tổng hai số trước</td><td>13</td></tr>
<tr><td>1, 4, 9, 16</td><td>n²</td><td>25</td></tr>
</table>
`},

{
  id: 'D1.3', module: 'D', topic: 'D1', minutes: 20,
  title: 'Các kiểu suy luận & bài tập logic: sắp xếp, nói thật – nói dối, điều kiện cần và đủ',
  skills: ['ts.reasoning'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
"Tư duy Logic" trong tên Module D không chỉ là mệnh đề nếu–thì (bài D1.1). Bài kiểm tra tư duy logic thường có các bài tập suy luận từ dữ kiện: sắp xếp thứ tự, ai nói thật, điều gì chắc chắn đúng. Chúng không cần kiến thức, chỉ cần phương pháp.</div>

<h2>1. Ba kiểu suy luận</h2>
<table>
<tr><th>Kiểu</th><th>Đi từ đâu tới đâu</th><th>Kết luận</th><th>Ví dụ</th></tr>
<tr><td><b>Suy diễn</b> (deductive)</td><td>Quy tắc chung → trường hợp cụ thể</td><td><b>Chắc chắn đúng</b> nếu tiền đề đúng</td><td>Mọi model cần dữ liệu. Đây là một model. Vậy nó cần dữ liệu.</td></tr>
<tr><td><b>Quy nạp</b> (inductive)</td><td>Nhiều quan sát → quy tắc chung</td><td><b>Có khả năng đúng</b>, không chắc chắn</td><td>100 lần chạy model đều ổn, nên model có lẽ ổn định.</td></tr>
<tr><td><b>Suy luận tìm lời giải thích tốt nhất</b></td><td>Hiện tượng → nguyên nhân hợp lý nhất</td><td>Giả thuyết cần kiểm chứng</td><td>Accuracy tụt đột ngột, có lẽ dữ liệu đầu vào đã đổi.</td></tr>
</table>
<p>Machine learning về bản chất là <b>quy nạp</b>: học quy luật từ các ví dụ. Vì vậy nó không bao giờ chắc chắn 100% và có thể sai với dữ liệu chưa từng gặp.</p>

<h2>2. Điều kiện cần và điều kiện đủ</h2>
<div class="box formula">Trong "Nếu P thì Q": <b>P là điều kiện đủ</b> của Q (có P thì chắc chắn có Q); <b>Q là điều kiện cần</b> của P (không có Q thì không thể có P).</div>
<ul>
<li>"Có dữ liệu" là điều kiện <b>cần</b> để huấn luyện model, nhưng <b>chưa đủ</b> (còn cần dữ liệu tốt, thuật toán, tài nguyên).</li>
<li>"Đạt 10 điểm" là điều kiện <b>đủ</b> để qua môn, nhưng <b>không cần</b> (5 điểm cũng qua).</li>
<li>"Khi và chỉ khi": vừa cần vừa đủ.</li>
</ul>

<h2>3. Bài sắp xếp thứ tự</h2>
<p><b>Ví dụ:</b> An, Bình, Chi, Dũng xếp hàng. An đứng trước Bình. Chi đứng ngay sau Bình. Dũng đứng đầu hàng. Ai đứng cuối?</p>
<ol class="steps">
<li><b>Ghi dữ kiện chắc chắn nhất trước:</b> Dũng ở vị trí 1.</li>
<li>"Chi ngay sau Bình" → Bình và Chi là một cặp liền nhau: [Bình, Chi].</li>
<li>An trước Bình → thứ tự: Dũng, An, Bình, Chi.</li>
<li>Kiểm tra lại từng dữ kiện → <b>Chi</b> đứng cuối.</li>
</ol>
<div class="box tip"><span class="box-title">⚡ Phương pháp</span>Vẽ các ô vị trí ra nháp. Điền dữ kiện cố định trước, ghép các cặp "ngay cạnh" thành khối, rồi thử các khả năng còn lại và loại khả năng vi phạm dữ kiện.</div>

<h2>4. Bài nói thật – nói dối</h2>
<p><b>Ví dụ:</b> Trong ba người A, B, C có đúng một người nói thật. A nói: "B nói dối." B nói: "C nói dối." C nói: "Cả A và B đều nói dối." Ai nói thật?</p>
<ol class="steps">
<li><b>Giả sử A nói thật</b> → B nói dối → câu của B sai → C nói thật. Thành ra có 2 người nói thật: mâu thuẫn.</li>
<li><b>Giả sử B nói thật</b> → C nói dối → câu "cả A và B đều nói dối" sai: đúng, vì B nói thật. A nói "B nói dối" là sai → A nói dối. Chỉ có B nói thật: <b>khớp</b>.</li>
<li>Giả sử C nói thật → A và B đều nói dối → câu của B sai → C nói thật (khớp); câu của A sai → B nói thật: mâu thuẫn.</li>
</ol>
<p>Kết luận: <b>B</b> nói thật. Phương pháp chung: <b>giả sử từng trường hợp, suy ra hệ quả, loại trường hợp mâu thuẫn</b>.</p>

<h2>5. "Tất cả", "một số", "không có"</h2>
<table>
<tr><th>Cho biết</th><th>Suy ra được</th><th>KHÔNG suy ra được</th></tr>
<tr><td>Tất cả A là B</td><td>Một số B là A (nếu có A)</td><td>Tất cả B là A</td></tr>
<tr><td>Một số A là B</td><td>Một số B là A</td><td>Một số A không là B</td></tr>
<tr><td>Không có A nào là B</td><td>Không có B nào là A</td><td></td></tr>
<tr><td>Tất cả A là B, tất cả B là C</td><td>Tất cả A là C</td><td>Tất cả C là A</td></tr>
</table>
<p>Vẽ các vòng tròn lồng nhau (biểu đồ Venn) để kiểm tra: kết luận chỉ đúng khi nó đúng trong <b>mọi</b> cách vẽ thỏa dữ kiện.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Chọn đáp án "có thể đúng" khi đề hỏi "<b>chắc chắn</b> đúng".</li>
<li>Thêm giả định mà đề không cho ("chắc là họ đứng cạnh nhau").</li>
<li>"Một số" trong logic nghĩa là "ít nhất một", có thể là tất cả.</li></ul></div>
`},

// ======================= D2 PHÂN TÍCH NGUYÊN NHÂN =======================
{
  id: 'D2.1', module: 'D', topic: 'D2', minutes: 15,
  title: 'Phân tích nguyên nhân gốc & tư duy phản biện',
  skills: ['d.rootcause'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion liệt kê "Root cause analysis" và "Critical thinking trong tình huống kỹ thuật". Các câu tình huống ở C và D đều cần cách nghĩ này.</div>

<h2>1. Triệu chứng ≠ nguyên nhân gốc</h2>
<p>Khởi động lại server mỗi khi chatbot treo chỉ là <b>chữa triệu chứng</b>. Nguyên nhân gốc có thể là rò rỉ bộ nhớ, quá tải, hoặc một phụ thuộc bị lỗi.</p>

<h2>2. Kỹ thuật 5 Whys</h2>
<ol class="steps">
<li>Chatbot trả lời sai lãi suất. <b>Tại sao?</b> → Lấy tài liệu cũ.</li>
<li><b>Tại sao</b> lấy tài liệu cũ? → Kho RAG chưa cập nhật bảng lãi suất mới.</li>
<li><b>Tại sao</b> chưa cập nhật? → Không ai được giao việc cập nhật.</li>
<li><b>Tại sao?</b> → Không có quy trình khi phòng nghiệp vụ đổi chính sách.</li>
<li>→ <b>Nguyên nhân gốc: thiếu quy trình.</b> Sửa quy trình thì lỗi không lặp lại.</li>
</ol>

<h2>3. Quy trình debug</h2>
<ol class="steps"><li><b>Tái hiện</b> lỗi (reproduce) với input cụ thể.</li><li><b>Khoanh vùng</b> (isolate): lỗi ở bước nào: dữ liệu, preprocessing, model hay API?</li><li>Đọc log / stack trace; so sánh "trước và sau" khi có thay đổi.</li><li>Sửa → kiểm tra lại → thêm test để lỗi không quay lại.</li></ol>

<h2>4. Tư duy phản biện với số liệu</h2>
<ul>
<li><b>Tương quan ≠ nhân quả</b>: tìm <b>biến gây nhiễu</b> (kem và đuối nước cùng tăng vì trời nóng).</li>
<li>Đổi <b>nhiều yếu tố cùng lúc</b> thì không biết yếu tố nào tạo ra kết quả → A/B test từng yếu tố.</li>
<li>Mẫu có đủ lớn và đại diện không? Có so với baseline không?</li>
<li>Chẩn đoán trước khi chữa: accuracy giảm sau khi đối tác đổi định dạng dữ liệu → kiểm tra dữ liệu đầu vào trước, chưa retrain vội.</li>
</ul>
`},

// ======================= D3 QUYỀN RIÊNG TƯ =======================
{
  id: 'D3.1', module: 'D', topic: 'D3', minutes: 22,
  title: 'Quyền riêng tư & bảo vệ dữ liệu',
  skills: ['privacy.least-privilege', 'privacy.access-control.group-isolation', 'privacy.data-minimization.demo-data', 'privacy.audit-log.minimal-traceability', 'privacy.purpose-limitation', 'privacy.consent-and-transparency', 'privacy.incident-response.initial-action', 'd.privacy'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Phản hồi người thi: Module D có <b>tình huống banking/privacy</b>: dữ liệu nhạy cảm, quyền nhóm A/B, hậu quả pháp lý. Đây là phần nhiều câu nhất của Module D trong bộ đề mô phỏng.</div>

<div class="box idea"><span class="box-title">💡 Cách làm bài nhanh</span>
Câu privacy gần như luôn có 1 đáp án "an toàn, có kiểm soát, đúng mục đích" và 3 đáp án "tiện nhưng liều" (dùng hết dữ liệu, ẩn bằng giao diện, nhờ prompt, xóa log, công khai). <b>Chọn đáp án bảo vệ người dùng và có thể truy vết.</b></div>

<h2>1. Bảy nguyên tắc phải nhớ</h2>
<table>
<tr><th>Nguyên tắc</th><th>Nghĩa là</th><th>Ví dụ đúng</th></tr>
<tr><td><b>Tối thiểu hóa dữ liệu</b> (data minimization)</td><td>Chỉ thu/dùng dữ liệu <b>cần thiết</b> cho mục tiêu</td><td>Demo chatbot FAQ bằng dữ liệu <b>tổng hợp/khử định danh</b>, không dùng số tài khoản thật</td></tr>
<tr><td><b>Giới hạn mục đích</b></td><td>Thu để làm gì thì chỉ dùng cho việc đó</td><td>Dữ liệu hỗ trợ kỹ thuật không tự ý dùng cho quảng cáo khi chưa có cơ sở và thông báo</td></tr>
<tr><td><b>Đồng ý & minh bạch</b></td><td>Giải thích rõ, cho người dùng lựa chọn</td><td>Không thu âm thầm dữ liệu không cần thiết</td></tr>
<tr><td><b>Quyền tối thiểu</b> (least privilege)</td><td>Chỉ cấp quyền đủ cho nhiệm vụ</td><td>Bot kiểm tra trạng thái hồ sơ không được đọc toàn bộ hệ thống ngân hàng</td></tr>
<tr><td><b>Kiểm soát truy cập</b></td><td>Kiểm tra quyền ở <b>server/data layer</b></td><td>Nhóm B không nhận được dữ liệu nhóm A. Không "ẩn bằng CSS", không "dặn LLM bằng prompt"</td></tr>
<tr><td><b>Audit log</b></td><td>Ghi đủ để truy vết, nhưng <b>không</b> ghi dữ liệu nhạy cảm thô</td><td>Ghi ai/dịch vụ nào, khi nào, phạm vi, hành động, kết quả, trace ID. Không ghi mật khẩu/API key/hồ sơ thô</td></tr>
<tr><td><b>Ứng phó sự cố</b></td><td>Ngăn rò rỉ tiếp diễn + giữ bằng chứng</td><td>Dừng/giới hạn luồng bị ảnh hưởng, <b>giữ log</b>, kích hoạt quy trình sự cố, báo bên liên quan. Không xóa bằng chứng</td></tr>
</table>

<h2>2. Dữ liệu nhạy cảm</h2>
<p>Định danh (CCCD, số tài khoản), sức khỏe, tài chính, sinh trắc học, vị trí… Trước khi gửi sang dịch vụ AI bên ngoài: <b>che/loại PII</b>, chỉ gửi phần cần thiết, kiểm tra điều khoản xử lý dữ liệu.</p>
<ul><li><b>Ẩn danh hóa</b>: không thể truy ngược ra người.</li><li><b>Giả danh hóa</b>: thay tên bằng mã; vẫn có thể liên kết lại nên vẫn là dữ liệu cá nhân.</li><li>Mã hóa khi lưu trữ và khi truyền; quản lý secret bằng biến môi trường / kho bí mật.</li></ul>
`},

// ======================= D4 AI CÓ TRÁCH NHIỆM =======================
{
  id: 'D4.1', module: 'D', topic: 'D4', minutes: 22,
  title: 'AI có trách nhiệm: công bằng, minh bạch, trách nhiệm giải trình, con người giám sát',
  skills: ['ai-responsibility.escalate-high-risk', 'ai-responsibility.human-approval', 'ai-responsibility.evaluate-by-group', 'ai-responsibility.source-citation', 'd.responsible', 'd.ethics-essay', 'ts.ethics-essay'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Các câu tình huống "dùng AI để duyệt vay / sàng lọc CV / khóa người bán / chẩn đoán y tế / chấm điểm rủi ro học sinh" đều chấm theo cùng một bộ nguyên tắc.</div>

<h2>1. Sáu nguyên tắc (khung trả lời chuẩn)</h2>
<table>
<tr><th>Nguyên tắc</th><th>Câu hỏi cần trả lời</th></tr>
<tr><td><b>Privacy</b></td><td>Dữ liệu gì, có cần không, có đồng ý không, bảo vệ thế nào? (bài D3.1)</td></tr>
<tr><td><b>Fairness / Bias</b></td><td>Có bất lợi cho nhóm nào không? <b>Đo lỗi theo từng nhóm</b>, không chỉ nhìn accuracy chung.</td></tr>
<tr><td><b>Transparency</b></td><td>Người dùng có biết AI được dùng, giới hạn của nó, lý do ra quyết định và đường khiếu nại không?</td></tr>
<tr><td><b>Security</b></td><td>Chống truy cập trái phép, prompt injection, lộ dữ liệu.</td></tr>
<tr><td><b>Human oversight</b></td><td>Quyết định ảnh hưởng lớn: <b>AI đề xuất + bằng chứng; người có thẩm quyền quyết định</b>.</td></tr>
<tr><td><b>Accountability</b></td><td><b>Rõ ai chịu trách nhiệm</b>, quy trình sửa sai và khiếu nại, audit log. AI không "tự chịu trách nhiệm".</td></tr>
</table>

<h2>2. Các tình huống hay gặp</h2>
<ul>
<li><b>Model không chắc chắn + quyết định ảnh hưởng quyền lợi (pháp lý/tài chính):</b> nêu giới hạn, không bịa → <b>chuyển người có thẩm quyền</b> / luồng an toàn.</li>
<li><b>Model đánh dấu hồ sơ rủi ro cao:</b> điểm số không phải quyết định cuối; cần <b>người phê duyệt</b>.</li>
<li><b>Phát hiện thiên lệch với một nhóm:</b> đo tác động → tìm nguyên nhân (dữ liệu lịch sử lệch? biến đại diện?) → sửa dữ liệu/model/ngưỡng → giám sát lại. Không bỏ qua chỉ vì điểm tổng cao.</li>
<li><b>Xóa cột nhạy cảm chưa đủ:</b> biến đại diện (mã vùng, trường học…) vẫn mang thông tin đó.</li>
<li><b>Trả lời quy định nội bộ:</b> kèm <b>nguồn + phiên bản/ngày hiệu lực</b> để người dùng kiểm chứng.</li>
</ul>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "Dùng AI cho [duyệt vay / CV / khóa người bán / y tế / học sinh]"</span>
<ol>
<li><b>Vai trò của AI:</b> chỉ <b>hỗ trợ/gợi ý</b>, không tự quyết định ca ảnh hưởng lớn; người có thẩm quyền phê duyệt.</li>
<li><b>Dữ liệu & privacy:</b> chỉ dùng dữ liệu cần thiết, có đồng ý, bảo mật, phân quyền, không dùng thuộc tính nhạy cảm.</li>
<li><b>Fairness:</b> kiểm tra bias trên dữ liệu lịch sử; đo precision/recall theo nhóm trước và sau khi triển khai.</li>
<li><b>Transparency:</b> thông báo có dùng AI, giải thích lý do chính, có <b>kênh khiếu nại</b> và xem xét lại.</li>
<li><b>An toàn vận hành:</b> ngưỡng confidence → ca không chắc chuyển người; pilot nhỏ; monitor; audit log; rollback.</li>
<li><b>Accountability:</b> người/bộ phận chịu trách nhiệm rõ ràng; đánh giá định kỳ.</li>
</ol>
Ví dụ <b>khóa người bán nghi lừa đảo</b>: AI chỉ <b>đánh dấu</b> và tạm giới hạn ở mức nhẹ; khóa hẳn cần nhân viên xem bằng chứng; thông báo lý do cho người bán và cho phép khiếu nại; theo dõi tỉ lệ khóa nhầm.</div>
`},

{
  id: 'D4.2', module: 'D', topic: 'D4', minutes: 20,
  title: 'Đạo đức AI mở rộng: bản quyền, liêm chính khi dùng AI, deepfake, tác động xã hội, pháp lý',
  skills: ['ts.ethics-ext'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Bài D3.1 và D4.1 xoay quanh quyền riêng tư và 6 nguyên tắc cho hệ thống AI trong doanh nghiệp. "Đạo đức" trong tên Module D rộng hơn: còn có chuyện bản quyền, trung thực khi dùng AI, nội dung giả mạo và tác động tới xã hội. Đây cũng là đạo đức của <b>chính người làm AI</b>.</div>

<h2>1. Bản quyền và sở hữu trí tuệ</h2>
<ul>
<li><b>Dữ liệu huấn luyện:</b> lấy được trên mạng không có nghĩa là được phép dùng. Cần xem giấy phép, điều khoản sử dụng, và quyền của tác giả.</li>
<li><b>Mã nguồn và model:</b> mỗi giấy phép có điều kiện riêng (có cái cho dùng thương mại, có cái yêu cầu ghi nguồn hoặc công khai lại mã nguồn). Phải đọc trước khi dùng.</li>
<li><b>Nội dung do AI tạo:</b> AI có thể tạo ra thứ rất giống tác phẩm có bản quyền. Quyền tác giả với sản phẩm do AI tạo được quy định khác nhau ở từng nước và còn đang thay đổi; nhiều nơi yêu cầu phải có đóng góp sáng tạo của con người.</li>
<li><b>Bí mật kinh doanh:</b> không dán mã nguồn, tài liệu nội bộ hay dữ liệu khách hàng vào công cụ AI bên ngoài khi chưa được phép.</li>
</ul>

<h2>2. Liêm chính khi dùng AI trong học tập và công việc</h2>
<table>
<tr><th>Nên</th><th>Không nên</th></tr>
<tr><td>Dùng AI để hiểu, nháp, kiểm tra, rồi <b>tự chịu trách nhiệm</b> về kết quả</td><td>Nộp nguyên văn sản phẩm của AI như của mình ở nơi không cho phép</td></tr>
<tr><td><b>Kiểm chứng</b> số liệu, trích dẫn, code AI đưa ra</td><td>Tin và chuyển tiếp thông tin AI bịa</td></tr>
<tr><td><b>Nói rõ</b> đã dùng AI khi quy định yêu cầu</td><td>Giấu việc dùng AI</td></tr>
<tr><td>Báo cáo trung thực kết quả, kể cả kết quả xấu</td><td>Chọn lọc số liệu đẹp, sửa kết quả đánh giá</td></tr>
</table>
<p>Nguyên tắc: <b>AI là công cụ, người dùng là người chịu trách nhiệm.</b> "AI viết như vậy" không phải lý do bào chữa.</p>

<h2>3. Deepfake và thông tin sai lệch</h2>
<ul>
<li><b>Deepfake:</b> ảnh, giọng nói, video giả do AI tạo, trông như thật. Dùng để lừa đảo, mạo danh, bôi nhọ.</li>
<li>AI tạo sinh làm việc sản xuất tin giả <b>rẻ và nhanh</b> hơn rất nhiều.</li>
<li>Người làm sản phẩm cần: không xây tính năng giả mạo người thật khi chưa có sự đồng ý, <b>gắn nhãn</b> nội dung do AI tạo, có cơ chế báo cáo và gỡ bỏ, chặn các yêu cầu lạm dụng.</li>
<li>Người dùng cần: kiểm tra nguồn, đối chiếu nhiều nơi, cẩn trọng với nội dung gây sốc.</li>
</ul>

<h2>4. An toàn và lạm dụng</h2>
<p>Cùng một khả năng có thể dùng cho việc tốt lẫn việc xấu (viết email hỗ trợ khách hàng và viết email lừa đảo). Hệ thống AI cần giới hạn những việc nó từ chối làm, chống các cách lách luật (jailbreak, prompt injection), và được <b>thử tấn công trước</b> khi phát hành.</p>

<h2>5. Tác động xã hội</h2>
<ul>
<li><b>Việc làm:</b> AI tự động hóa một số việc và tạo ra việc mới. Cách làm có trách nhiệm là thiết kế để AI <b>hỗ trợ</b> con người, và có kế hoạch đào tạo lại.</li>
<li><b>Bất bình đẳng:</b> người không tiếp cận được công nghệ bị bỏ lại; model kém hơn với ngôn ngữ và nhóm người ít xuất hiện trong dữ liệu.</li>
<li><b>Môi trường:</b> huấn luyện và chạy model lớn tốn nhiều điện và nước. Chọn model vừa đủ cho bài toán cũng là một lựa chọn có trách nhiệm.</li>
<li><b>Phụ thuộc quá mức:</b> tin AI mà không kiểm tra làm con người mất dần kỹ năng và sự cảnh giác.</li>
</ul>

<h2>6. Khung pháp lý (mức nhận biết)</h2>
<ul>
<li>Nhiều nước đã có <b>luật bảo vệ dữ liệu cá nhân</b>, trong đó có Việt Nam. Điểm chung: phải có cơ sở hợp pháp (thường là sự đồng ý) khi xử lý dữ liệu cá nhân, dùng đúng mục đích, và chủ thể dữ liệu có quyền biết, sửa, xóa.</li>
<li>Xu hướng quản lý AI là <b>phân theo mức rủi ro</b>: ứng dụng rủi ro không chấp nhận được thì cấm; rủi ro cao (y tế, tuyển dụng, tín dụng, giáo dục) thì phải đáp ứng yêu cầu chặt về dữ liệu, minh bạch và con người giám sát; rủi ro thấp thì chỉ cần minh bạch.</li>
</ul>
<p class="small muted">Luật thay đổi theo thời gian và khác nhau giữa các nước. Khi làm việc thật, phải hỏi bộ phận pháp chế chứ không tự suy đoán. Nội dung tổng quát của từng bộ luật (EU AI Act, GDPR, Luật Trí tuệ nhân tạo của Việt Nam...) ở <a href="#/l/D4.3">bài D4.3</a>.</p>

<div class="box tip"><span class="box-title">✍️ Dùng cho câu tự luận đạo đức</span>
Ngoài 6 nguyên tắc ở bài D4.1, hãy hỏi thêm ba câu: <b>Dữ liệu và nội dung này có được phép dùng không? Tính năng này có thể bị lạm dụng thế nào? Ai bị ảnh hưởng mà chưa được hỏi ý kiến?</b></div>
`},

{
  id: 'D4.3', module: 'D', topic: 'D4', minutes: 25,
  title: 'Luật & khung đạo đức AI: EU AI Act, GDPR, OECD, UNESCO, Mỹ, Trung Quốc, Hàn Quốc, Việt Nam',
  skills: ['ts.ai-law'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Câu đạo đức AI trong đề thường hỏi theo tình huống ("hệ thống này có được phép không, phải làm gì thêm"). Biết <b>khung luật lớn</b> giúp bạn trả lời có căn cứ: hệ thống thuộc mức rủi ro nào, nghĩa vụ là gì, việc nào bị cấm hẳn. Bài này tóm tắt các bộ luật và bộ nguyên tắc quan trọng nhất ở mức <b>nội dung tổng quát</b>, đủ cho câu trắc nghiệm và tự luận.</div>

<div class="box idea"><span class="box-title">💡 Phân biệt trước: luật và bộ nguyên tắc</span>
<b>Luật</b> (EU AI Act, GDPR, Luật Trí tuệ nhân tạo của Việt Nam) là <b>bắt buộc</b>, vi phạm thì bị phạt. <b>Bộ nguyên tắc / khuyến nghị</b> (Hướng dẫn đạo đức của EU 2019, OECD, UNESCO, NIST) là <b>tự nguyện</b>, dùng làm định hướng. Đề hay gài bẫy ở điểm này.</div>

<h2>1. Liên minh châu Âu (EU)</h2>
<p>EU có hai lớp: bộ <b>nguyên tắc đạo đức</b> năm 2019 (tự nguyện) và <b>Đạo luật AI</b> năm 2024 (bắt buộc). Ngoài ra GDPR về dữ liệu cá nhân áp dụng cho mọi hệ thống AI xử lý dữ liệu người dân EU.</p>

<h3>1a. Hướng dẫn đạo đức cho AI đáng tin cậy (2019)</h3>
<p>Do Nhóm chuyên gia cấp cao về AI của Ủy ban châu Âu soạn. AI đáng tin cậy phải <b>hợp pháp, có đạo đức và vững chắc</b> (về kỹ thuật lẫn xã hội), cụ thể hóa thành <b>7 yêu cầu</b>:</p>
<table>
<tr><th>#</th><th>Yêu cầu</th><th>Nghĩa là</th></tr>
<tr><td>1</td><td>Quyền tự quyết và sự giám sát của con người</td><td>AI hỗ trợ con người ra quyết định, có người kiểm soát được (human-in-the-loop, human-on-the-loop)</td></tr>
<tr><td>2</td><td>Vững chắc về kỹ thuật và an toàn</td><td>Chính xác, ổn định, chống tấn công, có phương án dự phòng khi hỏng</td></tr>
<tr><td>3</td><td>Quyền riêng tư và quản trị dữ liệu</td><td>Bảo vệ dữ liệu cá nhân, dữ liệu chất lượng, kiểm soát ai được truy cập</td></tr>
<tr><td>4</td><td>Minh bạch</td><td>Truy vết được, giải thích được, người dùng biết mình đang tương tác với AI</td></tr>
<tr><td>5</td><td>Đa dạng, không phân biệt đối xử, công bằng</td><td>Tránh thiên kiến, ai cũng tiếp cận được, có sự tham gia của các bên liên quan</td></tr>
<tr><td>6</td><td>Phúc lợi xã hội và môi trường</td><td>Bền vững, thân thiện môi trường, tính tới tác động xã hội và dân chủ</td></tr>
<tr><td>7</td><td>Trách nhiệm giải trình</td><td>Kiểm toán được, báo cáo được tác động tiêu cực, có cơ chế khắc phục</td></tr>
</table>
<div class="box tip"><span class="box-title">🎯 Mẹo nhớ</span>7 yêu cầu này gần như trùng với 6 nguyên tắc ở bài D4.1 (công bằng, minh bạch, quyền riêng tư, an toàn, trách nhiệm, con người giám sát), cộng thêm <b>phúc lợi xã hội và môi trường</b>.</div>

<h3>1b. Đạo luật AI của EU (EU AI Act, 2024)</h3>
<p>Đạo luật toàn diện đầu tiên trên thế giới riêng cho AI, có hiệu lực từ <b>1/8/2024</b> và áp dụng dần theo từng giai đoạn. Ý tưởng cốt lõi: <b>quản lý theo mức rủi ro</b>, rủi ro càng cao thì nghĩa vụ càng nặng. Luật áp dụng cho cả công ty ngoài EU nếu đưa hệ thống AI vào thị trường EU hoặc kết quả của nó được dùng ở EU.</p>

<p><b>Bốn mức rủi ro (thuộc lòng):</b></p>
<table>
<tr><th>Mức</th><th>Xử lý</th><th>Ví dụ</th></tr>
<tr><td><b>Không chấp nhận được</b></td><td><b>Cấm hẳn</b></td><td>Chấm điểm tín nhiệm xã hội, thao túng hành vi gây hại</td></tr>
<tr><td><b>Rủi ro cao</b></td><td>Được dùng nhưng phải đáp ứng nhiều nghĩa vụ chặt</td><td>Tuyển dụng, chấm thi, xét tín dụng, thiết bị y tế, hạ tầng thiết yếu, thực thi pháp luật, biên giới, tư pháp</td></tr>
<tr><td><b>Rủi ro hạn chế</b> (nghĩa vụ minh bạch)</td><td>Phải cho người dùng biết</td><td>Chatbot phải nói mình là AI; ảnh, video, giọng nói do AI tạo và deepfake phải được gắn nhãn</td></tr>
<tr><td><b>Rủi ro tối thiểu</b></td><td>Không có nghĩa vụ riêng (khuyến khích tự nguyện tuân thủ)</td><td>Bộ lọc thư rác, AI trong trò chơi điện tử</td></tr>
</table>

<p><b>Các hành vi bị cấm</b> (áp dụng từ 2/2/2025), tóm lược:</p>
<ul>
<li>Dùng kỹ thuật thao túng, đánh lừa hoặc tác động tiềm thức để bóp méo hành vi của người khác, gây hại đáng kể.</li>
<li>Lợi dụng điểm yếu do tuổi tác, khuyết tật hoặc hoàn cảnh kinh tế xã hội.</li>
<li><b>Chấm điểm xã hội</b>: xếp hạng người dân theo hành vi rồi đối xử bất lợi với họ ở những lĩnh vực không liên quan.</li>
<li>Dự đoán một người sẽ phạm tội chỉ dựa trên hồ sơ cá nhân hoặc đặc điểm tính cách.</li>
<li>Thu thập ảnh khuôn mặt tràn lan từ internet hoặc camera để dựng cơ sở dữ liệu nhận diện.</li>
<li>Nhận diện cảm xúc ở nơi làm việc và trường học (trừ lý do y tế, an toàn).</li>
<li>Phân loại sinh trắc học để suy ra thông tin nhạy cảm như chủng tộc, quan điểm chính trị, tôn giáo, xu hướng tính dục.</li>
<li>Nhận diện sinh trắc học từ xa theo thời gian thực ở nơi công cộng cho mục đích thực thi pháp luật, trừ một số ngoại lệ hẹp (tìm nạn nhân bị bắt cóc, ngăn khủng bố sắp xảy ra...).</li>
</ul>

<p><b>Nghĩa vụ chính với hệ thống rủi ro cao:</b></p>
<ol class="steps">
<li>Hệ thống <b>quản lý rủi ro</b> suốt vòng đời.</li>
<li><b>Quản trị dữ liệu</b>: dữ liệu huấn luyện liên quan, đủ đại diện, kiểm soát thiên kiến.</li>
<li><b>Tài liệu kỹ thuật</b> và <b>ghi log</b> tự động để truy vết.</li>
<li><b>Minh bạch</b> với bên sử dụng: hướng dẫn, giới hạn, độ chính xác.</li>
<li><b>Con người giám sát</b>: có người hiểu, can thiệp và dừng được hệ thống.</li>
<li>Độ chính xác, độ vững chắc và an ninh mạng.</li>
<li>Đánh giá sự phù hợp trước khi đưa ra thị trường, đăng ký vào cơ sở dữ liệu của EU, giám sát sau khi triển khai và báo cáo sự cố nghiêm trọng.</li>
</ol>

<p><b>Mô hình AI đa dụng</b> (GPAI, ví dụ các LLM nền tảng), áp dụng từ 2/8/2025:</p>
<ul>
<li>Mọi nhà cung cấp: lập tài liệu kỹ thuật, cung cấp thông tin cho bên tích hợp model, có chính sách tôn trọng <b>bản quyền</b>, công bố bản tóm tắt dữ liệu dùng để huấn luyện.</li>
<li>Model có <b>rủi ro hệ thống</b> (mặc định khi lượng tính toán huấn luyện vượt khoảng 10²⁵ phép tính dấu phẩy động): thêm đánh giá và thử tấn công model, giảm thiểu rủi ro, báo cáo sự cố nghiêm trọng, bảo đảm an ninh mạng.</li>
</ul>

<p><b>Hiểu biết về AI (AI literacy)</b>: từ 2/2/2025, tổ chức cung cấp hoặc sử dụng AI phải bảo đảm nhân viên của mình có đủ hiểu biết về AI tương ứng với công việc.</p>

<p><b>Mức phạt tối đa</b> (lấy mức cao hơn giữa số tiền và % doanh thu toàn cầu; doanh nghiệp nhỏ và vừa lấy mức thấp hơn):</p>
<table>
<tr><th>Vi phạm</th><th>Mức tối đa</th></tr>
<tr><td>Dùng hệ thống AI bị cấm</td><td><b>35 triệu euro hoặc 7%</b> doanh thu toàn cầu</td></tr>
<tr><td>Vi phạm phần lớn nghĩa vụ khác (rủi ro cao, minh bạch, GPAI)</td><td>15 triệu euro hoặc 3%</td></tr>
<tr><td>Cung cấp thông tin sai cho cơ quan quản lý</td><td>7,5 triệu euro hoặc 1%</td></tr>
</table>

<p><b>Lộ trình áp dụng:</b></p>
<table>
<tr><th>Mốc</th><th>Áp dụng</th></tr>
<tr><td>1/8/2024</td><td>Luật có hiệu lực</td></tr>
<tr><td>2/2/2025</td><td>Các hành vi bị cấm; nghĩa vụ hiểu biết về AI</td></tr>
<tr><td>2/8/2025</td><td>Quy định cho mô hình AI đa dụng (GPAI); cơ quan quản lý và chế tài</td></tr>
<tr><td>2/8/2026</td><td>Phần lớn các quy định còn lại, gồm nghĩa vụ minh bạch (gắn nhãn nội dung AI, chatbot báo là AI)</td></tr>
<tr><td>Lùi lại</td><td>Theo gói sửa đổi "Digital Omnibus" (các bản tin pháp lý tháng 7/2026 cho biết đã được thông qua), nghĩa vụ cho hệ thống <b>rủi ro cao</b> lùi tới <b>2/12/2027</b> (nhóm theo lĩnh vực sử dụng) và <b>2/8/2028</b> (AI nằm trong sản phẩm như thiết bị y tế, máy móc). Gói này chỉ lùi thời hạn, không bỏ nghĩa vụ.</td></tr>
</table>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul>
<li>EU AI Act có <b>4 mức</b> rủi ro; Luật AI của Việt Nam có <b>3 mức</b> (mục 3).</li>
<li>Tuyển dụng, chấm thi, xét tín dụng là <b>rủi ro cao</b> (được dùng, nhưng phải tuân thủ), không phải bị cấm. Chấm điểm xã hội mới là <b>bị cấm</b>.</li>
<li>Chatbot thông thường là <b>rủi ro hạn chế</b>: chỉ cần cho người dùng biết đang nói chuyện với AI.</li>
<li>Mức phạt cao nhất (7%) dành cho dùng AI bị cấm, cao hơn cả mức tối đa của GDPR (4%).</li>
</ul></div>

<h3>1c. GDPR: Quy định chung về bảo vệ dữ liệu (2018)</h3>
<p>Không phải luật riêng cho AI, nhưng gần như mọi hệ thống AI dùng dữ liệu cá nhân của người ở EU đều chịu GDPR.</p>
<ul>
<li><b>7 nguyên tắc xử lý dữ liệu</b>: hợp pháp, công bằng và minh bạch; giới hạn mục đích; tối thiểu hóa dữ liệu; chính xác; giới hạn thời gian lưu trữ; toàn vẹn và bảo mật; trách nhiệm giải trình.</li>
<li><b>Cơ sở pháp lý</b>: phải có căn cứ để xử lý dữ liệu (sự đồng ý, thực hiện hợp đồng, nghĩa vụ pháp lý, lợi ích chính đáng...).</li>
<li><b>Quyền của chủ thể dữ liệu</b>: được biết, truy cập, sửa, xóa ("quyền được lãng quên"), hạn chế xử lý, mang dữ liệu đi nơi khác, phản đối.</li>
<li><b>Quyết định hoàn toàn tự động</b> có ảnh hưởng pháp lý hoặc ảnh hưởng đáng kể tới một người (ví dụ từ chối khoản vay): người đó có quyền không bị quyết định chỉ bởi máy, được yêu cầu <b>con người xem xét lại</b> và phản đối quyết định.</li>
<li>Phạt tối đa <b>20 triệu euro hoặc 4%</b> doanh thu toàn cầu.</li>
</ul>

<h2>2. Các khung quốc tế và các nước lớn</h2>
<table>
<tr><th>Khung</th><th>Loại</th><th>Nội dung tổng quát</th></tr>
<tr><td><b>Nguyên tắc AI của OECD</b> (2019, cập nhật 2024)</td><td>Khuyến nghị liên chính phủ, tự nguyện</td><td>5 nguyên tắc giá trị: tăng trưởng bao trùm và phát triển bền vững; tôn trọng pháp quyền, quyền con người và giá trị dân chủ (gồm công bằng, quyền riêng tư); minh bạch và giải thích được; vững chắc, an ninh và an toàn; trách nhiệm giải trình. Bản 2024 bổ sung rủi ro của AI tạo sinh: sở hữu trí tuệ, thông tin sai lệch, môi trường.</td></tr>
<tr><td><b>Khuyến nghị về Đạo đức AI của UNESCO</b> (2021)</td><td>Khuyến nghị, được 193 nước thành viên thông qua, không ràng buộc</td><td>4 giá trị: quyền con người và phẩm giá; môi trường và hệ sinh thái; đa dạng và bao trùm; xã hội hòa bình, công bằng, gắn kết. 10 nguyên tắc: tương xứng và không gây hại; an toàn và an ninh; công bằng, không phân biệt đối xử; bền vững; quyền riêng tư; con người giám sát và quyết định; minh bạch và giải thích được; trách nhiệm; nâng cao nhận thức; quản trị đa bên.</td></tr>
<tr><td><b>Công ước khung về AI của Hội đồng châu Âu</b> (2024)</td><td>Điều ước quốc tế có tính ràng buộc với nước phê chuẩn</td><td>Điều ước quốc tế ràng buộc đầu tiên về AI: hoạt động AI phải tôn trọng quyền con người, dân chủ và pháp quyền; yêu cầu minh bạch, trách nhiệm giải trình, không phân biệt đối xử và có cách khiếu nại.</td></tr>
<tr><td><b>Hoa Kỳ</b></td><td>Chưa có luật liên bang toàn diện về AI</td><td>Sắc lệnh 14110 (2023) về AI an toàn đã bị thu hồi tháng 1/2025 và thay bằng hướng giảm rào cản quản lý. Công cụ hay được nhắc tới là <b>Khung quản lý rủi ro AI của NIST</b> (tự nguyện) với 4 chức năng: <b>Govern</b> (quản trị), <b>Map</b> (xác định bối cảnh, rủi ro), <b>Measure</b> (đo lường), <b>Manage</b> (xử lý rủi ro). Nhiều bang có luật riêng.</td></tr>
<tr><td><b>Trung Quốc</b></td><td>Quy định bắt buộc theo từng loại AI</td><td>Biện pháp tạm thời quản lý dịch vụ AI tạo sinh (hiệu lực 15/8/2023): nội dung phải hợp pháp, dữ liệu huấn luyện hợp pháp, tôn trọng sở hữu trí tuệ, bảo vệ thông tin cá nhân. Quy định gắn nhãn nội dung do AI tạo (hiệu lực 1/9/2025): nhãn <b>hiển thị</b> (người xem thấy được) và nhãn <b>ẩn</b> (nhúng trong dữ liệu của file).</td></tr>
<tr><td><b>Hàn Quốc: Luật cơ bản về AI</b></td><td>Luật bắt buộc, hiệu lực 22/1/2026</td><td>Xác định "AI tác động cao" (y tế, năng lượng, giao thông, tuyển dụng, sinh trắc...) phải có quản lý rủi ro và con người giám sát; thông báo cho người dùng khi sản phẩm dùng AI tạo sinh; gắn nhãn nội dung có thể bị nhầm là thật. Có thời gian ân hạn trước khi xử phạt.</td></tr>
</table>

<h2>3. Việt Nam</h2>
<h3>3a. Luật Trí tuệ nhân tạo (Luật số 134/2025/QH15)</h3>
<p>Quốc hội thông qua ngày <b>10/12/2025</b>, có hiệu lực từ <b>1/3/2026</b>. Đây là luật riêng đầu tiên của Việt Nam về AI, đi theo hướng "quản lý để phát triển": vừa kiểm soát rủi ro vừa khuyến khích đổi mới sáng tạo.</p>
<ul>
<li><b>Nguyên tắc</b>: lấy con người làm trung tâm; AI phục vụ con người và <b>không thay thế thẩm quyền và trách nhiệm của con người</b>; bảo đảm quyền con người, quyền riêng tư, an ninh quốc gia.</li>
<li><b>Phạm vi</b>: chủ yếu điều chỉnh <b>đầu ra và hành vi sử dụng</b> AI cùng các rủi ro mà AI gây ra, thay vì quản lý trực tiếp mô hình.</li>
<li><b>3 mức rủi ro</b>:
  <ul>
  <li><b>Cao</b>: có thể gây thiệt hại đáng kể tới tính mạng, sức khỏe, quyền lợi hợp pháp, lợi ích hoặc an ninh quốc gia. Phải đánh giá sự phù hợp, có hồ sơ kỹ thuật, nhật ký vận hành, bảo đảm con người can thiệp được.</li>
  <li><b>Trung bình</b>: phải minh bạch và giải trình khi cơ quan quản lý yêu cầu.</li>
  <li><b>Thấp</b>: chỉ bị kiểm tra khi có dấu hiệu vi phạm.</li>
  </ul>
  Nhà cung cấp tự phân loại trước khi đưa vào sử dụng, dựa trên mức tác động tới quyền con người, an toàn, an ninh, lĩnh vực và quy mô.</li>
<li><b>Hành vi bị cấm</b>: dùng AI để thao túng hành vi, tạo nội dung giả mạo, lừa đảo, xâm phạm an ninh quốc gia...</li>
<li><b>Nội dung do AI tạo</b> phải được gắn nhãn, cảnh báo.</li>
<li>Gây thiệt hại thì phải bồi thường; vi phạm có thể bị đình chỉ cung cấp dịch vụ.</li>
</ul>
<h3>3b. Luật Bảo vệ dữ liệu cá nhân (Luật số 91/2025/QH15)</h3>
<p>Có hiệu lực từ <b>1/1/2026</b>, thay cho Nghị định 13/2023/NĐ-CP. Tinh thần giống GDPR: xử lý dữ liệu cá nhân phải có căn cứ (thường là sự đồng ý), đúng mục đích, và người có dữ liệu có quyền được biết, sửa, xóa. Dùng dữ liệu khách hàng để huấn luyện AI cũng phải tuân theo luật này.</p>

<h2>4. So sánh nhanh</h2>
<table>
<tr><th></th><th>EU AI Act</th><th>Luật AI Việt Nam</th><th>OECD / UNESCO</th><th>Hoa Kỳ</th></tr>
<tr><td>Bắt buộc?</td><td>Có</td><td>Có</td><td>Không (khuyến nghị)</td><td>Không có luật liên bang chung; NIST tự nguyện</td></tr>
<tr><td>Cách tiếp cận</td><td>4 mức rủi ro</td><td>3 mức rủi ro</td><td>Nguyên tắc giá trị</td><td>Quản lý rủi ro tự nguyện, luật bang</td></tr>
<tr><td>Gắn nhãn nội dung AI</td><td>Có</td><td>Có</td><td>Khuyến khích minh bạch</td><td>Tùy bang</td></tr>
</table>
<p>Điểm chung của mọi khung: <b>quản lý theo rủi ro, minh bạch (cho biết là AI, gắn nhãn), con người giám sát, bảo vệ dữ liệu cá nhân, chống phân biệt đối xử, có người chịu trách nhiệm</b>. Nắm 6 ý này là trả lời được phần lớn câu hỏi về luật.</p>

<div class="box tip"><span class="box-title">✍️ Khung tự luận "hệ thống AI này cần tuân thủ gì?"</span>
<ol>
<li><b>Xếp mức rủi ro</b>: hệ thống dùng làm gì, ảnh hưởng tới ai (tuyển dụng, tín dụng, y tế, giáo dục là rủi ro cao; chấm điểm xã hội, thao túng là bị cấm; chatbot là rủi ro hạn chế).</li>
<li><b>Dữ liệu</b>: có dữ liệu cá nhân không, có căn cứ pháp lý và sự đồng ý không, đã tối thiểu hóa chưa.</li>
<li><b>Minh bạch</b>: người dùng có biết đang dùng AI không, nội dung AI tạo đã gắn nhãn chưa, có giải thích được quyết định không.</li>
<li><b>Con người giám sát</b>: quyết định quan trọng có người duyệt không, người bị ảnh hưởng có quyền yêu cầu xem xét lại không.</li>
<li><b>Công bằng và an toàn</b>: đã kiểm tra thiên kiến theo nhóm, độ chính xác, khả năng chống tấn công chưa.</li>
<li><b>Trách nhiệm</b>: ai chịu trách nhiệm, có log và tài liệu để truy vết, có quy trình xử lý sự cố.</li>
</ol></div>
<p class="small muted">Nội dung là bản tóm tắt để ôn thi, cập nhật tới tháng 10/2026; không phải văn bản luật hay tư vấn pháp lý. Chi tiết và ngoại lệ phải xem văn bản chính thức. Một số mốc (gói sửa đổi Digital Omnibus của EU) mới được thông qua gần đây nên có thể còn được hướng dẫn thêm.</p>
`,
},

{
  id: 'D4.4', module: 'D', topic: 'D4', minutes: 20,
  title: 'Tổng hợp 33 câu đạo đức AI trong nguồn đề (kèm đáp án & khung tự luận)',
  skills: [],
  // Bài tổng hợp: luyện đúng các câu này (sinh bởi scratchpad d44-gen.js); các câu vẫn thuộc dạng đề của bài gốc.
  questionIds: ["E01-D04","E04-D07","N26E01-D02","N26E02-D01","N26E03-D02","N26E09-D02","N26E01-D06","N26E04-D03","N26E01-D03","N26E01-D08","N26E01-D01","N26E02-D02","E01-D05","E01-D06","E01-D07","E02-D07","E05-D07","N26E01-D04","N26E01-D07","N26E01-D05","N26E01-C08","N26E03-D05","E01-D08","E02-D08","E03-D08","E04-D08","E05-D08","N26E14-D08","N26E15-D08","N26E16-D08","N26E01-C11","N26E06-C10","N26E09-C10"],
  content: String.raw`

<div class="box why"><span class="box-title">🎯 Bài này là gì?</span>
Danh sách <b>toàn bộ 33 câu về đạo đức AI có trong nguồn đề</b> (bộ đề cộng đồng AI-TEST: E01–E10 và bộ mô phỏng khóa mới 2026), gom về một chỗ để đọc lướt trước khi thi. Mỗi câu có đáp án, các lựa chọn sai và lời giải; link "→" mở bài học gốc. Câu tự soạn không nằm trong danh sách này. Đây là đề cộng đồng, không phải đề chính thức.</div>

<div class="box idea"><span class="box-title">💡 Quy luật chung của mọi câu đạo đức trong nguồn đề</span>
Đáp án đúng gần như luôn là phương án <b>an toàn, có kiểm soát, đúng mục đích và có người chịu trách nhiệm</b>. Đáp án sai thường là "nhanh nhưng liều": dùng hết dữ liệu, giấu bằng giao diện, dặn LLM bằng prompt, xóa log, để AI tự quyết hoàn toàn. Nhớ 6 chữ khóa: <b>tối thiểu – phân quyền – minh bạch – con người duyệt – truy vết – xử lý sự cố</b>.</div>

<h2>1. Trắc nghiệm: quyền riêng tư và bảo vệ dữ liệu (12 câu)</h2>
<ol class="steps"><li><b>Data minimization nghĩa là:</b><br>
✅ <b>Chỉ thu thập dữ liệu cần thiết cho mục tiêu rõ ràng</b><br>
<span class="small">❌ Lựa chọn sai: Thu thập càng nhiều càng tốt; Không cần consent; Luôn chia sẻ dữ liệu cho đối tác</span><br>
<span class="small">💬 Nguyên tắc này giảm thu thập dư thừa và giảm rủi ro privacy. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Dữ liệu nào cần kiểm soát chặt hơn trong hệ thống AI?</b><br>
✅ <b>Số căn cước/định danh cá nhân</b><br>
<span class="small">❌ Lựa chọn sai: Màu yêu thích; Loại font UI; Số lượng tab đang mở</span><br>
<span class="small">💬 Thông tin định danh cá nhân có rủi ro lạm dụng cao. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Dữ liệu của nhóm A bị hạn chế đối với nhóm B. Cách bảo vệ đúng nhất là:</b> <span class="small muted">(4 câu cùng dạng, chỉ đổi vài chữ)</span><br>
✅ <b>Kiểm tra quyền ở server/data layer và chỉ trả dữ liệu người dùng được phép xem</b><br>
<span class="small">❌ Lựa chọn sai: Tải toàn bộ về frontend rồi ẩn bằng CSS; Nhắc LLM không được đọc bằng prompt; Đổi tên cột để khó hiểu</span><br>
<span class="small">💬 Authorization phải được thực thi trước khi dữ liệu rời lớp tin cậy. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Audit log cho một lần AI truy cập hồ sơ nên ưu tiên ghi:</b><br>
✅ <b>Ai/dịch vụ nào truy cập, thời gian, phạm vi, hành động, kết quả và trace ID; che dữ liệu nhạy cảm</b><br>
<span class="small">❌ Lựa chọn sai: Mật khẩu và API key; Toàn bộ hồ sơ thô; Không ghi gì</span><br>
<span class="small">💬 Audit phải đủ truy vết nhưng không trở thành kho chứa secret hoặc PII thô. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Một ứng dụng muốn thu thêm dữ liệu không cần thiết cho chức năng chính. Cách phù hợp nhất là:</b><br>
✅ <b>Giải thích rõ mục đích, cho người dùng lựa chọn phù hợp và không thu nếu không cần</b><br>
<span class="small">❌ Lựa chọn sai: Thu âm thầm vì người dùng đã cài app; Bắt buộc đồng ý mọi thứ; Đưa dữ liệu vào log công khai</span><br>
<span class="small">💬 Thu thập phải minh bạch, có mục đích và giới hạn dữ liệu cần thiết. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Nhóm muốn demo chatbot FAQ nhưng định dùng bản sao đầy đủ dữ liệu thật gồm tên và số tài khoản. Lựa chọn phù hợp nhất là:</b><br>
✅ <b>Dùng dữ liệu tổng hợp hoặc đã khử định danh và chỉ giữ trường cần thiết</b><br>
<span class="small">❌ Lựa chọn sai: Dùng toàn bộ vì chỉ là demo; Đăng dữ liệu lên kho công khai; Đổi màu giao diện rồi giữ nguyên dữ liệu</span><br>
<span class="small">💬 FAQ không cần dữ liệu giao dịch thật; data minimization giảm rủi ro. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Phát hiện chatbot đã trả nhầm dữ liệu nhạy cảm cho người không có quyền. Hành động đầu tiên phù hợp nhất là:</b><br>
✅ <b>Dừng hoặc giới hạn luồng bị ảnh hưởng, giữ log và kích hoạt xử lý sự cố</b><br>
<span class="small">❌ Lựa chọn sai: Tiếp tục chạy để thu thêm ví dụ; Xóa bằng chứng rồi sửa âm thầm; Đổ lỗi cho người dùng</span><br>
<span class="small">💬 Ưu tiên ngăn rò rỉ tiếp diễn và bảo toàn bằng chứng phục vụ điều tra. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Một trợ lý AI chỉ cần kiểm tra trạng thái hồ sơ nhưng được cấp quyền đọc toàn bộ hệ thống ngân hàng. Nguyên tắc bị vi phạm rõ nhất là:</b><br>
✅ <b>Chỉ cấp quyền tối thiểu cần cho nhiệm vụ</b><br>
<span class="small">❌ Lựa chọn sai: Tăng số epoch; Data augmentation; Batch normalization</span><br>
<span class="small">💬 Quyền truy cập phải giới hạn theo nhiệm vụ và phạm vi dữ liệu. <a href="#/l/D3.1">→ D3.1</a></span></li>
<li><b>Dữ liệu được thu thập để xử lý hỗ trợ kỹ thuật nhưng nhóm muốn dùng ngay cho quảng cáo cá nhân hóa. Việc cần làm trước tiên là:</b><br>
✅ <b>Kiểm tra mục đích, cơ sở cho phép và chỉ dùng dữ liệu trong phạm vi đã thông báo/được chấp thuận</b><br>
<span class="small">❌ Lựa chọn sai: Dùng ngay vì dữ liệu đã có; Ẩn tên cột rồi dùng; Đưa dữ liệu cho mọi nhóm</span><br>
<span class="small">💬 Dữ liệu không nên bị dùng sang mục đích mới nếu chưa có cơ sở và thông báo phù hợp. <a href="#/l/D3.1">→ D3.1</a></span></li></ol>

<h2>2. Trắc nghiệm: AI có trách nhiệm (10 câu)</h2>
<ol class="steps"><li><b>Khi model không chắc chắn trong quyết định ảnh hưởng quyền lợi người dùng, hành vi đúng hơn là:</b><br>
✅ <b>Chuyển sang review/luồng an toàn</b><br>
<span class="small">❌ Lựa chọn sai: Vẫn tự động quyết định để nhanh; Không lưu log; Ẩn kết quả khỏi mọi người</span><br>
<span class="small">💬 Ca không chắc chắn cần cơ chế giám sát và fallback. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Transparency trong sản phẩm AI nghĩa là:</b><br>
✅ <b>Người dùng/vận hành biết AI được dùng ở đâu, giới hạn gì, và có đường khiếu nại phù hợp</b><br>
<span class="small">❌ Lựa chọn sai: Không cần giải thích gì; Chỉ cần log nội bộ; Chỉ cần accuracy cao</span><br>
<span class="small">💬 Minh bạch giúp người bị ảnh hưởng hiểu và kiểm tra quyết định. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Accountability nghĩa là:</b><br>
✅ <b>Rõ ai chịu trách nhiệm, quy trình sửa sai/khiếu nại</b><br>
<span class="small">❌ Lựa chọn sai: AI tự chịu trách nhiệm; Không ai chịu trách nhiệm nếu model sai; Chỉ cần mã hóa dữ liệu</span><br>
<span class="small">💬 Không được đổ lỗi mơ hồ cho AI; cần người/bộ phận chịu trách nhiệm. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Nếu phát hiện model có thiên lệch bất lợi với một nhóm người dùng, nên:</b><br>
✅ <b>Đo tác động, tìm nguyên nhân, sửa dữ liệu/model/ngưỡng và giám sát lại</b><br>
<span class="small">❌ Lựa chọn sai: Bỏ qua nếu điểm tổng thể cao; Che thông tin đó; Đổi tên model</span><br>
<span class="small">💬 Bias cần được đo, xử lý và theo dõi lại có hệ thống. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Với quyết định tự động ảnh hưởng lớn như duyệt vay, điều cần có nhất là:</b><br>
✅ <b>Cơ chế khiếu nại, giám sát định kỳ và trách nhiệm rõ</b><br>
<span class="small">❌ Lựa chọn sai: Không giải thích, miễn nhanh; Chỉ cần tăng tốc inference; Không lưu audit log</span><br>
<span class="small">💬 Quyền lợi người dùng cần oversight, appeal và accountability. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Trợ lý không chắc chắn về câu trả lời có thể ảnh hưởng đến quyết định pháp lý hoặc tài chính. Hệ thống nên:</b><br>
✅ <b>Nêu giới hạn, không bịa và chuyển người có thẩm quyền</b><br>
<span class="small">❌ Lựa chọn sai: Trả lời thật tự tin; Thực hiện giao dịch ngay; Ẩn nguồn để người dùng không biết</span><br>
<span class="small">💬 Tình huống rủi ro cao và thiếu bằng chứng cần abstention và escalation. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Để kiểm tra mô hình có hoạt động khác nhau giữa các nhóm người dùng, nhóm phát triển nên:</b><br>
✅ <b>So sánh precision/recall hoặc lỗi theo nhóm và kiểm tra cỡ mẫu</b><br>
<span class="small">❌ Lựa chọn sai: Chỉ xem accuracy chung; Chọn nhóm có kết quả tốt nhất để báo cáo; Xóa mọi thuộc tính và mặc định mô hình công bằng</span><br>
<span class="small">💬 Chỉ số tổng có thể che giấu chênh lệch theo nhóm. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Mô hình đánh dấu một hồ sơ là rủi ro cao và đề xuất hành động ảnh hưởng lớn. Thiết kế phù hợp nhất là:</b><br>
✅ <b>AI đưa bằng chứng/đề xuất; người có thẩm quyền kiểm tra và phê duyệt</b><br>
<span class="small">❌ Lựa chọn sai: Cho AI tự thực hiện ngay; Xóa log để tránh tranh chấp; Công khai dữ liệu để cộng đồng bình chọn</span><br>
<span class="small">💬 Score không phải quyết định cuối; hành động ảnh hưởng lớn cần human approval. <a href="#/l/D4.1">→ D4.1</a></span></li>
<li><b>Với hành động có ảnh hưởng lớn đến quyền lợi người dùng, vai trò phù hợp của AI là:</b><br>
✅ <b>Đưa ra gợi ý và bằng chứng; người có thẩm quyền kiểm tra và quyết định cuối</b><br>
<span class="small">❌ Lựa chọn sai: Tự quyết định mọi trường hợp; Xóa log để tránh tranh chấp; Công khai dữ liệu để cộng đồng bình chọn</span><br>
<span class="small">💬 Human review cần thiết với quyết định rủi ro cao hoặc có hậu quả pháp lý/tài chính. <a href="#/l/C9.1">→ C9.1</a></span></li>
<li><b>Trợ lý AI trả lời một quy định nội bộ. Cách giúp người dùng kiểm chứng tốt nhất là:</b><br>
✅ <b>Kèm nguồn tài liệu và phiên bản hoặc ngày hiệu lực</b><br>
<span class="small">❌ Lựa chọn sai: Chỉ tăng độ tự tin của câu trả lời; Ẩn tài liệu nguồn; Dùng câu trả lời dài hơn</span><br>
<span class="small">💬 Citation và phiên bản giúp người dùng đối chiếu thông tin. <a href="#/l/D4.1">→ D4.1</a></span></li></ol>

<h2>3. Tự luận: đánh giá một hệ thống AI theo 6 mục (5 câu, bộ E01–E10)</h2>
<p>Cả 5 câu dùng chung một khung trả lời: <b>Privacy, Fairness/Bias, Transparency, Security, Human oversight, Accountability</b>.</p>
<ol class="steps"><li><b>Công ty muốn dùng AI để hỗ trợ xử lý hồ sơ vay trong banking. Trả lời theo 6 mục: Privacy, Fairness/Bias, Transparency, Security, Human oversight, Accountability.</b> <a class="small" href="#/l/D4.1">→ đáp án mẫu ở D4.1</a></li>
<li><b>Đề xuất quy trình an toàn khi dùng AI tự động khóa người bán nghi lừa đảo trên marketplace.</b> <a class="small" href="#/l/D4.1">→ đáp án mẫu ở D4.1</a></li>
<li><b>Công ty muốn dùng AI sàng lọc CV ứng viên. Nêu các kiểm soát đạo đức và vận hành cần có.</b> <a class="small" href="#/l/D4.1">→ đáp án mẫu ở D4.1</a></li>
<li><b>Triển khai AI gợi ý chẩn đoán sơ bộ trong y tế cần đảm bảo gì?</b> <a class="small" href="#/l/D4.1">→ đáp án mẫu ở D4.1</a></li>
<li><b>Dùng AI chấm điểm rủi ro học sinh/sinh viên cần lưu ý gì?</b> <a class="small" href="#/l/D4.1">→ đáp án mẫu ở D4.1</a></li></ol>
<div class="box tip"><span class="box-title">✍️ Khung 6 mục (dùng cho cả 5 câu)</span>
<ol>
<li><b>Quyền riêng tư</b>: dữ liệu nào cần, tối thiểu hóa, che dữ liệu nhạy cảm, phân quyền truy cập, có sự đồng ý.</li>
<li><b>Công bằng / thiên kiến</b>: đo lỗi theo từng nhóm người (giới, tuổi, vùng miền), sửa dữ liệu hoặc ngưỡng nếu lệch.</li>
<li><b>Minh bạch</b>: cho người bị ảnh hưởng biết có AI tham gia, giải thích lý do chính của quyết định.</li>
<li><b>Bảo mật</b>: kiểm soát truy cập, mã hóa, chống tấn công và lạm dụng, ghi audit log.</li>
<li><b>Con người giám sát</b>: AI chỉ đề xuất; quyết định ảnh hưởng lớn (từ chối vay, khóa tài khoản, loại hồ sơ, chẩn đoán) do người có thẩm quyền duyệt; ca AI không chắc thì chuyển người.</li>
<li><b>Trách nhiệm giải trình</b>: rõ ai chịu trách nhiệm, có kênh khiếu nại và sửa sai, giám sát định kỳ sau khi triển khai.</li>
</ol>
Mỗi mục viết 1–2 câu <b>gắn với tình huống cụ thể của đề</b> (vay, CV, y tế...) là đủ ý. Đáp án mẫu chi tiết ở bài <a href="#/l/D4.1">D4.1</a>.</div>

<h2>4. Tự luận: góp ý khi senior đề xuất hướng có rủi ro (3 câu, bộ mô phỏng khóa mới)</h2>
<ol class="steps"><li><b>Senior đề xuất: “bỏ bước validation để kịp deadline và đưa thẳng mô hình lên dùng thử”. Bạn cho rằng hướng này có rủi ro. Bạn sẽ góp ý như thế nào để vừa tôn trọng senior vừa bảo vệ chất lượng/an toàn dự án?</b><br><span class="small">Ý cần có (theo rubric): Tôn trọng và hỏi lại mục tiêu/ràng buộc.; Nêu rủi ro bằng bằng chứng cụ thể.; Đề xuất thử nghiệm/phương án thay thế.; Nêu khi nào cần ghi nhận hoặc escalation..</span> <a class="small" href="#/l/D5.1">→ đáp án mẫu ở D5.1</a></li>
<li><b>Senior đề xuất: “gửi toàn bộ dữ liệu nhạy cảm dạng thô cho một dịch vụ LLM bên ngoài để làm nhanh”. Bạn cho rằng hướng này có rủi ro. Bạn sẽ góp ý như thế nào để vừa tôn trọng senior vừa bảo vệ chất lượng/an toàn dự án?</b><br><span class="small">Ý cần có (theo rubric): Tôn trọng và hỏi lại mục tiêu/ràng buộc.; Nêu rủi ro bằng bằng chứng cụ thể.; Đề xuất thử nghiệm/phương án thay thế.; Nêu khi nào cần ghi nhận hoặc escalation..</span> <a class="small" href="#/l/D5.1">→ đáp án mẫu ở D5.1</a></li>
<li><b>Senior đề xuất: “làm chatbot RAG nhưng bỏ phân quyền tài liệu và citation vì cho rằng người dùng nội bộ đều đáng tin”. Bạn cho rằng hướng này có rủi ro. Bạn sẽ góp ý như thế nào để vừa tôn trọng senior vừa bảo vệ chất lượng/an toàn dự án?</b><br><span class="small">Ý cần có (theo rubric): Tôn trọng và hỏi lại mục tiêu/ràng buộc.; Nêu rủi ro bằng bằng chứng cụ thể.; Đề xuất thử nghiệm/phương án thay thế.; Nêu khi nào cần ghi nhận hoặc escalation..</span> <a class="small" href="#/l/D5.1">→ đáp án mẫu ở D5.1</a></li></ol>
<div class="box tip"><span class="box-title">✍️ Khung góp ý (dùng cho cả 3 câu)</span>
Ghi nhận mục tiêu của senior (kịp deadline, làm nhanh) → nêu <b>rủi ro cụ thể</b> có bằng chứng → đề xuất <b>phương án thay thế</b> vẫn đạt mục tiêu (bản thử nhỏ có kiểm soát, che dữ liệu trước khi gửi, giữ phân quyền và trích nguồn) → đề nghị <b>tiêu chí kiểm tra</b> trước khi mở rộng → nếu vẫn bất đồng về rủi ro lớn thì báo người có thẩm quyền. Giọng tôn trọng, nói về vấn đề chứ không nói về người. Chi tiết ở bài <a href="#/l/D5.1">D5.1</a>.</div>

<h2>5. Tự luận: thiết kế trợ lý FAQ có ràng buộc quyền riêng tư (3 câu, bộ mô phỏng khóa mới)</h2>
<ol class="steps"><li><b>Thiết kế trợ lý FAQ cho học viên dùng mô hình ngôn ngữ cho khoảng 110 câu hỏi thường gặp.</b><br><span class="small"><br>Ràng buộc:<br>- FAQ thông thường được trả lời tự động.<br>- Không gửi dữ liệu nhạy cảm thô cho dịch vụ ngoài.<br>- Yêu cầu thay đổi thông tin, hoàn tiền hoặc quyết định ảnh hưởng lớn phải chuyển người.<br><br>Hãy trình bày: (1) cách phân luồng; (2) một ví dụ hội thoại; (3) cách kiểm thử và giám sát.</span> <span class="small muted">(2 câu cùng khuôn, chỉ đổi số liệu)</span><br><span class="small">Ý cần có (theo rubric): Phân biệt FAQ và yêu cầu rủi ro.; Không gửi dữ liệu nhạy cảm thô.; Có human handoff.; Có ví dụ hội thoại.; Có kiểm thử/monitoring cơ bản..</span> <a class="small" href="#/l/C9.1">→ đáp án mẫu ở C9.1</a></li>
<li><b>Thiết kế trợ lý hỗ trợ dịch vụ dùng mô hình ngôn ngữ cho khoảng 190 câu hỏi thường gặp.</b><br><span class="small"><br>Ràng buộc:<br>- FAQ thông thường được trả lời tự động.<br>- Không gửi dữ liệu nhạy cảm thô cho dịch vụ ngoài.<br>- Yêu cầu thay đổi thông tin, hoàn tiền hoặc quyết định ảnh hưởng lớn phải chuyển người.<br><br>Hãy trình bày: (1) cách phân luồng; (2) một ví dụ hội thoại; (3) cách kiểm thử và giám sát.</span><br><span class="small">Ý cần có (theo rubric): Phân biệt FAQ và yêu cầu rủi ro.; Không gửi dữ liệu nhạy cảm thô.; Có human handoff.; Có ví dụ hội thoại.; Có kiểm thử/monitoring cơ bản..</span> <a class="small" href="#/l/C9.1">→ đáp án mẫu ở C9.1</a></li></ol>

<p class="small muted">Nguồn câu hỏi: <a href="https://github.com/HungBil/AI-TEST" target="_blank" rel="noopener">HungBil/AI-TEST</a> (MIT © 2026 Henry Don). Danh sách được sinh từ ngân hàng câu của web, nên luôn khớp với phần luyện bên dưới.</p>
`,
},

// ======================= D5 HÀNH VI =======================
{
  id: 'D5.1', module: 'D', topic: 'D5', minutes: 18,
  title: 'Hành vi & giao tiếp nghề nghiệp (góp ý senior, ưu tiên, nhận lỗi)',
  skills: ['essay.ethics.feedback-to-senior', 'd.behavior'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ngày thi đầu có câu tự luận: <b>senior đưa hướng chưa phù hợp, bạn góp ý thế nào</b>. Câu hành vi chấm theo thái độ: tôn trọng, dựa trên bằng chứng, có giải pháp, biết khi nào cần escalate.</div>

<h2>1. Nguyên tắc chung (đáp án đúng thường có đủ)</h2>
<ul>
<li><b>Minh bạch sớm</b>: phát hiện vấn đề thì báo ngay, kèm <b>mức ảnh hưởng</b> và <b>đề xuất</b>.</li>
<li><b>Dựa trên dữ liệu, không dựa trên cá nhân</b>: tranh luận bằng thử nghiệm và metric.</li>
<li><b>Tôn trọng + kiên định về an toàn</b>: lịch sự nhưng không thỏa hiệp với vi phạm dữ liệu/pháp lý.</li>
<li><b>Chủ động làm rõ</b>: yêu cầu mơ hồ thì hỏi lại mục tiêu, người dùng, tiêu chí thành công.</li>
<li><b>Nhận trách nhiệm</b>: mắc lỗi thì báo ngay, khắc phục, rút kinh nghiệm, cải tiến quy trình.</li>
<li><b>Ưu tiên minh bạch</b>: quá tải thì sắp xếp theo khẩn cấp × tác động và thống nhất với quản lý.</li>
</ul>
<div class="box trap"><span class="box-title">⚠️ Đáp án sai thường có dạng</span>Im lặng, giấu lỗi, đổ lỗi, làm theo vô điều kiện, từ chối mà không giải thích, "tự làm theo ý mình".</div>

<h2>2. Khung góp ý senior</h2>
<div class="box tip"><span class="box-title">✍️ Mẫu trả lời: "Senior muốn bỏ bước validation để kịp deadline"</span>
<ol>
<li><b>Ghi nhận mục tiêu chung:</b> "Em hiểu mục tiêu là kịp tiến độ."</li>
<li><b>Nêu rủi ro cụ thể kèm bằng chứng:</b> "Em lo nếu bỏ validation, model có thể overfit/sai với dữ liệu mới; lần trước train 95% nhưng thực tế chỉ 72%."</li>
<li><b>Đề xuất phương án thay thế vừa sức:</b> "Em đề xuất chạy validation rút gọn trong 1–2 giờ, hoặc cho dùng thử với nhóm nhỏ có người kiểm tra."</li>
<li><b>Hỏi để hiểu thêm:</b> "Anh có ràng buộc nào em chưa biết không?" Cùng quyết định dựa trên metric.</li>
<li><b>Escalate khi cần:</b> nếu liên quan dữ liệu nhạy cảm, pháp lý hoặc gây hại nghiêm trọng mà vẫn không thống nhất được → báo lên cấp/bộ phận phụ trách theo quy trình.</li>
</ol>
Giọng văn: <b>"em lo… vì… em đề xuất…"</b>, không phải "anh sai rồi".</div>

<h2>3. Giao tiếp với người không chuyên</h2>
<p>Dùng ngôn ngữ đơn giản và ví dụ; nói về <b>tác động</b> (tiết kiệm bao nhiêu giờ, giảm bao nhiêu lỗi), <b>rủi ro</b> và <b>giới hạn</b> của mô hình. Không phóng đại "AI luôn đúng".</p>
`},

{
  id: 'D5.2', module: 'D', topic: 'D5', minutes: 16,
  title: 'Làm việc nhóm & tự quản lý: ưu tiên, phản hồi, xung đột, trách nhiệm',
  skills: ['ts.teamwork'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ban tổ chức nhắc tới "kỹ năng phối hợp để xử lý các bài toán thực tế trong môi trường doanh nghiệp", và bảng cấp độ đo cả <b>tính tự chủ và phạm vi trách nhiệm</b>. Vế "Hành vi" của Module D kiểm tra bạn xử sự thế nào trong tình huống công việc. Bài D5.1 đã có tình huống góp ý cấp trên; bài này phủ các tình huống còn lại.</div>

<h2>1. Xếp ưu tiên: khẩn cấp và quan trọng</h2>
<table>
<tr><th></th><th>Khẩn cấp</th><th>Không khẩn cấp</th></tr>
<tr><th>Quan trọng</th><td><b>Làm ngay</b> (sự cố hệ thống)</td><td><b>Lên lịch làm</b> (học kỹ năng, viết test, cải tiến quy trình)</td></tr>
<tr><th>Không quan trọng</th><td><b>Giao bớt hoặc làm nhanh</b> (phần lớn tin nhắn, cuộc họp không cần mình)</td><td><b>Bỏ</b></td></tr>
</table>
<p>Khi quá tải: <b>nói sớm</b>, đưa danh sách việc kèm ước lượng thời gian, đề xuất thứ tự, và để người giao việc cùng quyết định cái gì lùi lại. Đừng im lặng nhận hết rồi trễ tất cả.</p>

<h2>2. Cho và nhận phản hồi</h2>
<div class="box formula"><b>Cho phản hồi theo 3 bước:</b> Tình huống cụ thể → Hành vi quan sát được → Tác động.<br>
"Trong buổi demo hôm qua (tình huống), phần giải thích kết quả bị bỏ qua (hành vi), nên khách hàng chưa hiểu vì sao model đáng tin (tác động)."</div>
<ul>
<li>Nói về <b>việc làm</b>, không nói về <b>con người</b>. Riêng tư, kịp thời, kèm đề xuất.</li>
<li><b>Khi nhận phản hồi:</b> nghe hết, hỏi lại cho rõ, không vội bào chữa, cảm ơn, rồi nói mình sẽ làm gì khác đi.</li>
</ul>

<h2>3. Xử lý xung đột</h2>
<ol class="steps">
<li>Tách <b>vấn đề</b> ra khỏi <b>con người</b>: hai bên bất đồng về cách làm, không phải ghét nhau.</li>
<li>Nghe để hiểu <b>lý do</b> phía sau quan điểm của người kia.</li>
<li>Tìm <b>mục tiêu chung</b> và <b>tiêu chí khách quan</b> (dữ liệu, thử nghiệm nhỏ) để quyết định.</li>
<li>Không tự giải quyết được thì <b>đưa lên người có thẩm quyền</b>, trình bày cả hai phương án một cách công bằng.</li>
<li>Đã quyết định thì <b>cùng thực hiện</b>, kể cả khi không theo ý mình.</li>
</ol>

<h2>4. Trách nhiệm và tự chủ</h2>
<ul>
<li><b>Nhận việc:</b> hỏi cho rõ mục tiêu, hạn chót, tiêu chí hoàn thành. Việc mơ hồ thì làm rõ trước khi làm.</li>
<li><b>Trong lúc làm:</b> cập nhật tiến độ định kỳ. Gặp vướng thì tự thử trong một khoảng thời gian hợp lý rồi <b>hỏi sớm</b>, kèm những gì đã thử.</li>
<li><b>Có nguy cơ trễ:</b> báo ngay khi biết, không đợi đến hạn.</li>
<li><b>Mắc lỗi:</b> nhận, báo, khắc phục, rút kinh nghiệm thành quy trình.</li>
<li><b>Việc của nhóm:</b> ghi lại tài liệu, chia sẻ kiến thức, hỗ trợ người khác khi họ vướng.</li>
</ul>

<h2>5. Học liên tục</h2>
<p>Lĩnh vực AI thay đổi rất nhanh. Người làm tốt là người <b>chủ động tự học</b>, dám thừa nhận "tôi chưa biết, tôi sẽ tìm hiểu", và coi sai sót là dữ liệu để cải thiện chứ không phải thứ cần che giấu.</p>

<div class="box tip"><span class="box-title">⚡ Quy tắc chọn đáp án cho câu tình huống hành vi</span>
Đáp án đúng thường có đủ: <b>chủ động</b>, <b>minh bạch sớm</b>, <b>dựa trên dữ kiện</b>, <b>tôn trọng người khác</b>, <b>có đề xuất giải pháp</b>, <b>biết khi nào cần báo lên cấp trên</b>. Đáp án sai thường là: im lặng, đổ lỗi, tự ý làm, bỏ mặc, hoặc phản ứng cực đoan.</div>
`},

]);
