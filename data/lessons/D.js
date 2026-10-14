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
<p class="small muted">Luật thay đổi theo thời gian và khác nhau giữa các nước. Khi làm việc thật, phải hỏi bộ phận pháp chế chứ không tự suy đoán.</p>

<div class="box tip"><span class="box-title">✍️ Dùng cho câu tự luận đạo đức</span>
Ngoài 6 nguyên tắc ở bài D4.1, hãy hỏi thêm ba câu: <b>Dữ liệu và nội dung này có được phép dùng không? Tính năng này có thể bị lạm dụng thế nào? Ai bị ảnh hưởng mà chưa được hỏi ý kiến?</b></div>
`},

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
