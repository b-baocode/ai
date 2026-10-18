/* Câu luyện bổ sung cho bài A6.1 Tư duy định lượng (thêm 2026-10-17 theo yêu cầu người dùng).
   Chia 4 dạng theo đúng các phần của bài để bảng kết quả chỉ ra phần còn yếu:
   ts.quant-fermi (ước lượng nhanh, bậc độ lớn, đơn vị), ts.quant-rate (tốc độ, năng suất, thời gian),
   ts.quant-growth (phần trăm, tăng trưởng tuyến tính/mũ), ts.quant-chart (đọc bảng, biểu đồ, bẫy số liệu),
   và ts.quant-open (tự luận ước lượng). Mọi con số đã được tính lại bằng Python trước khi đưa vào. */

addTS('A', 'ts.quant-fermi', [
  [`Một ứng dụng có 50.000 người dùng mỗi ngày, mỗi người tải lên 4 ảnh, mỗi ảnh khoảng 2 MB. Dung lượng ảnh mới mỗi ngày khoảng:`, ['400 GB', '40 GB', '4 TB', '400 MB'], 'A', '50.000 × 4 × 2 = 400.000 MB = 400 GB (1 GB ≈ 1000 MB).'],
  [`Hệ thống lưu thêm khoảng 400 GB dữ liệu mỗi ngày. Một năm cần thêm khoảng:`, ['146 GB', '14,6 TB', '146 TB', '1,46 PB'], 'C', '400 × 365 = 146.000 GB ≈ 146 TB. Mẹo: 400 × 365 ≈ 400 × 400 = 160.000 cũng cho đúng bậc độ lớn.'],
  [`Giá API là 2 USD cho 1 triệu token. Chatbot dùng khoảng 30 triệu token mỗi ngày. Chi phí một tháng (30 ngày) khoảng:`, ['60 USD', '180 USD', '1.800 USD', '18.000 USD'], 'C', 'Mỗi ngày 30 × 2 = 60 USD; 30 ngày là 60 × 30 = 1.800 USD.'],
  [`Một model có 13 tỉ (13B) tham số, mỗi tham số lưu ở dạng float16 (2 byte). Bộ nhớ để chứa trọng số khoảng:`, ['13 GB', '26 GB', '52 GB', '2,6 GB'], 'B', '13 × 10⁹ × 2 byte = 26 × 10⁹ byte ≈ 26 GB.'],
  [`Một model 7B tham số được nén về 4-bit (0,5 byte mỗi tham số). Bộ nhớ trọng số khoảng:`, ['28 GB', '14 GB', '7 GB', '3,5 GB'], 'D', '7 × 10⁹ × 0,5 byte = 3,5 GB. So với float32 (4 byte, 28 GB) nhỏ hơn 8 lần.'],
  [`2²⁰ (2 mũ 20) xấp xỉ bằng:`, ['1 nghìn', '1 triệu', '1 tỉ', '20 nghìn'], 'B', '2¹⁰ = 1024 ≈ 10³, nên 2²⁰ ≈ 10⁶ = 1 triệu (đúng ra là 1.048.576).'],
  [`Mỗi request mất 250 ms và được xử lý lần lượt từng cái một. Trong 1 phút xử lý được tối đa bao nhiêu request?`, ['4', '24', '240', '2.400'], 'C', '1 phút = 60.000 ms; 60.000 / 250 = 240 request.'],
  [`Một bộ dữ liệu có 2 triệu câu, mỗi câu trung bình 20 token. Tổng số token khoảng:`, ['40 nghìn', '4 triệu', '40 triệu', '400 triệu'], 'C', '2.000.000 × 20 = 40.000.000 = 40 triệu token.'],
  [`Lưu 1 triệu vector embedding, mỗi vector 768 chiều, mỗi số là float32 (4 byte). Cần khoảng bao nhiêu bộ nhớ?`, ['3 MB', '300 MB', '3 GB', '30 GB'], 'C', '10⁶ × 768 × 4 = 3,07 × 10⁹ byte ≈ 3 GB.'],
  [`Mục tiêu của một phép ước lượng nhanh kiểu Fermi là:`, ['Ra đúng tới hàng đơn vị', 'Ra đúng bậc độ lớn (nghìn, triệu hay tỉ) để ra quyết định nhanh', 'Thay thế hoàn toàn việc đo đạc thật', 'Chứng minh một con số là chính xác tuyệt đối'], 'B', 'Tách thành tích các thừa số dễ đoán, làm tròn rồi nhân. Sai vài chục phần trăm vẫn chấp nhận được, sai bậc độ lớn thì không.'],
  [`Một báo cáo viết: "Ứng dụng của chúng tôi có 200 triệu người dùng hằng ngày, tất cả ở Việt Nam." Nhận xét hợp lý nhất là:`, ['Tin được vì là số liệu công ty đưa ra', 'Vô lý, vì dân số Việt Nam chỉ khoảng 100 triệu người', 'Hợp lý nếu ứng dụng miễn phí', 'Không đủ thông tin để nghi ngờ'], 'B', 'Kiểm tra tính hợp lý: con số vượt quá giới hạn hiển nhiên (tổng dân số) thì chắc chắn có lỗi về định nghĩa hoặc dữ liệu.'],
  [`Hệ thống ghi 1 triệu dòng log mỗi ngày, mỗi dòng khoảng 1 KB. Dung lượng log mỗi ngày khoảng:`, ['1 MB', '1 GB', '1 TB', '1 KB'], 'B', '10⁶ × 1 KB = 10⁶ KB = 10³ MB = 1 GB.'],
]);

addTS('A', 'ts.quant-rate', [
  [`Một người gán được 300 ảnh mỗi giờ. Cần gán nhãn 60.000 ảnh trong 5 ngày, mỗi ngày làm 8 giờ. Cần ít nhất bao nhiêu người?`, ['2', '5', '10', '25'], 'B', 'Một người làm được 300 × 8 × 5 = 12.000 ảnh trong 5 ngày. 60.000 / 12.000 = 5 người.'],
  [`Huấn luyện 1 epoch mất 45 phút. Huấn luyện 20 epoch mất:`, ['9 giờ', '15 giờ', '20 giờ', '45 giờ'], 'B', '20 × 45 = 900 phút = 15 giờ.'],
  [`Một pipeline xử lý 1.200 bản ghi mỗi giây. Một ngày (86.400 giây) xử lý được khoảng:`, ['1,2 triệu bản ghi', '10 triệu bản ghi', '104 triệu bản ghi', '1 tỉ bản ghi'], 'C', '1.200 × 86.400 = 103.680.000 ≈ 104 triệu. Ước nhanh: 1.000 × 100.000 = 10⁸.'],
  [`Máy A xử lý xong lô dữ liệu trong 4 giờ, máy B trong 12 giờ. Hai máy cùng chạy thì mất:`, ['3 giờ', '6 giờ', '8 giờ', '16 giờ'], 'A', 'Cộng tốc độ, không cộng thời gian: 1/4 + 1/12 = 4/12 = 1/3 lô mỗi giờ → 3 giờ.'],
  [`Máy A làm xong việc trong 10 giờ. Máy B nhanh gấp 4 lần máy A. Hai máy cùng làm thì mất:`, ['2 giờ', '2,5 giờ', '5 giờ', '8 giờ'], 'A', 'B làm xong trong 2,5 giờ. Tốc độ: 1/10 + 4/10 = 1/2 việc mỗi giờ → 2 giờ.'],
  [`Mỗi server xử lý được 50 request/giây. Giờ cao điểm có 300.000 request trong một giờ. Cần ít nhất bao nhiêu server?`, ['1', '2', '6', '60'], 'B', '300.000 / 3.600 ≈ 83,3 request/giây, vượt quá 50 của một server nên cần 2 server.'],
  [`Đi một quãng 60 km với tốc độ 60 km/h, rồi quay về đúng quãng đó với tốc độ 30 km/h. Tốc độ trung bình cả đi lẫn về là:`, ['35 km/h', '40 km/h', '45 km/h', '50 km/h'], 'B', 'Tốc độ trung bình = tổng quãng đường / tổng thời gian = 120 / (1 + 2) = 40 km/h. Không lấy trung bình cộng 45 vì hai chặng mất thời gian khác nhau.'],
  [`Model mới xử lý được nhiều hơn 25% số ảnh mỗi giây so với model cũ. Công việc trước đây mất 10 giờ, nay mất:`, ['7,5 giờ', '8 giờ', '9 giờ', '12,5 giờ'], 'B', 'Tốc độ ×1,25 thì thời gian chia 1,25: 10 / 1,25 = 8 giờ. Trừ thẳng 25% (ra 7,5 giờ) là sai.'],
  [`Tải một file 10 GB qua đường truyền 100 Mbps (megabit mỗi giây). Thời gian tải khoảng:`, ['100 giây', '1,6 phút', '13 phút', '2,2 giờ'], 'C', '10 GB = 10.000 MB = 80.000 megabit (1 byte = 8 bit). 80.000 / 100 = 800 giây ≈ 13 phút. Quên nhân 8 sẽ ra 100 giây.'],
  [`3 người gán được 900 ảnh trong 2 giờ. Với cùng năng suất, 5 người làm trong 6 giờ gán được bao nhiêu ảnh?`, ['1.500', '2.700', '4.500', '7.500'], 'C', 'Năng suất mỗi người mỗi giờ: 900 / (3 × 2) = 150 ảnh. 5 × 6 × 150 = 4.500 ảnh.'],
]);

addTS('A', 'ts.quant-growth', [
  [`Doanh thu tăng từ 200 lên 250 triệu. Mức tăng là:`, ['2,5%', '20%', '25%', '50%'], 'C', '(250 − 200) / 200 = 0,25 = 25%. Chia cho giá trị BAN ĐẦU, không chia cho giá trị mới (chia 250 ra 20%).'],
  [`Giá một gói dịch vụ tăng 20%, sau đó giảm 20%. So với giá ban đầu, giá hiện tại:`, ['Không đổi', 'Giảm 4%', 'Tăng 4%', 'Giảm 20%'], 'B', '1,2 × 0,8 = 0,96, tức thấp hơn ban đầu 4%. Lần giảm tính trên giá đã tăng nên giảm nhiều hơn.'],
  [`Tỉ lệ chuyển đổi tăng từ 4% lên 5%. Phát biểu đúng là:`, ['Tăng 1%, tức tăng 1 phần trăm tương đối', 'Tăng 1 điểm phần trăm, tức tăng 25% tương đối', 'Tăng 5%', 'Tăng 20 điểm phần trăm'], 'B', 'Chênh lệch tuyệt đối: 5 − 4 = 1 điểm phần trăm. Tương đối: 1 / 4 = 25%.'],
  [`Có 1.000 người dùng, tăng 10% mỗi tháng. Sau 2 tháng có khoảng:`, ['1.020', '1.100', '1.200', '1.210'], 'D', '1.000 × 1,1 × 1,1 = 1.210. Tăng trưởng kép: tháng sau tăng 10% trên con số đã tăng, không phải cộng 2 lần 100.'],
  [`Một khoản tăng đều 6% mỗi năm. Theo quy tắc 72, nó gấp đôi sau khoảng:`, ['6 năm', '7 năm', '12 năm', '72 năm'], 'C', '72 / 6 = 12 năm.'],
  [`Bắt đầu với 1.000 người dùng, số người dùng gấp đôi mỗi tháng. Sau 10 tháng có khoảng:`, ['10.000', '20.000', '100.000', '1 triệu'], 'D', '1.000 × 2¹⁰ = 1.000 × 1.024 ≈ 1 triệu. Tăng trưởng mũ vượt xa trực giác.'],
  [`Sản phẩm X có 10.000 người dùng và thêm 2.000 người mỗi tháng. Sản phẩm Y có 10.000 người dùng và tăng 50% mỗi tháng. Sau 3 tháng:`, ['X nhiều hơn, khoảng 16.000 so với 15.000', 'Hai sản phẩm bằng nhau', 'Y nhiều hơn, khoảng 33.750 so với 16.000', 'Không so sánh được'], 'C', 'X: 10.000 + 3 × 2.000 = 16.000. Y: 10.000 × 1,5³ = 33.750.'],
  [`Chi phí chạy model giảm 30% mỗi năm. Sau 2 năm, chi phí còn bao nhiêu phần trăm so với ban đầu?`, ['40%', '49%', '51%', '60%'], 'B', '0,7 × 0,7 = 0,49 = 49%. Không phải 100% − 2 × 30% = 40%.'],
  [`Trên biểu đồ có trục tung là thang log (mỗi vạch gấp 10 lần vạch trước), một đại lượng tăng trưởng mũ đều đặn sẽ hiện ra là:`, ['Đường thẳng', 'Đường cong vọt lên', 'Đường nằm ngang', 'Đường đi xuống'], 'A', 'Thang log biến phép nhân thành phép cộng, nên tăng theo cấp số nhân trở thành đường thẳng.'],
  [`Doanh thu giảm 50%. Muốn quay về mức cũ thì doanh thu phải tăng:`, ['50%', '100%', '150%', '200%'], 'B', 'Từ 100 xuống 50; từ 50 lên lại 100 là tăng 50/50 = 100%.'],
  [`Tăng trưởng tuyến tính khác tăng trưởng mũ ở chỗ:`, ['Tuyến tính luôn nhanh hơn', 'Tuyến tính cộng một lượng cố định mỗi kỳ, mũ nhân với một hệ số cố định mỗi kỳ', 'Mũ chỉ dùng cho tiền', 'Hai loại giống nhau nếu nhìn trong 1 năm'], 'B', 'y = a + kt so với y = a(1 + r)ᵗ. Về lâu dài tăng trưởng mũ luôn vượt tuyến tính.'],
]);

addTS('A', 'ts.quant-chart', [
  [`Muốn thể hiện xu hướng doanh thu qua 12 tháng, nên dùng biểu đồ nào?`, ['Biểu đồ tròn', 'Biểu đồ đường', 'Histogram', 'Boxplot'], 'B', 'Biểu đồ đường thể hiện thay đổi theo thời gian.'],
  [`Muốn xem số giờ tự học và điểm thi của 200 sinh viên có liên quan với nhau không, nên dùng:`, ['Biểu đồ tròn', 'Biểu đồ cột', 'Biểu đồ phân tán (scatter)', 'Histogram'], 'C', 'Scatter đặt mỗi người là một điểm theo hai biến, để thấy quan hệ giữa chúng.'],
  [`Muốn thể hiện tỉ trọng của 3 kênh bán hàng trong tổng doanh thu, nên dùng:`, ['Biểu đồ tròn', 'Scatter', 'Histogram', 'Biểu đồ đường'], 'A', 'Biểu đồ tròn hợp cho tỉ trọng trong một tổng khi số nhóm ít.'],
  [`Muốn nhìn nhanh trung vị, tứ phân vị và các giá trị ngoại lai của độ trễ hệ thống, nên dùng:`, ['Biểu đồ tròn', 'Boxplot', 'Biểu đồ đường', 'Bản đồ'], 'B', 'Boxplot vẽ trung vị, hộp tứ phân vị và các điểm outlier.'],
  [`Bảng kết quả ba model:
Model A: accuracy 92%, thời gian 120 ms/request
Model B: accuracy 94%, thời gian 900 ms/request
Model C: accuracy 91%, thời gian 40 ms/request
Yêu cầu: thời gian không quá 200 ms, trong số đó chọn accuracy cao nhất. Chọn model nào?`, ['Model A', 'Model B', 'Model C', 'Không model nào đạt'], 'A', 'B bị loại vì 900 ms > 200 ms. Còn A (92%) và C (91%), chọn A.'],
  [`Bảng theo dõi lỗi:
Tháng 1: 2.000 request, 40 lỗi
Tháng 2: 8.000 request, 80 lỗi
Nhận xét đúng là:`, ['Chất lượng xấu đi vì số lỗi gấp đôi', 'Tỉ lệ lỗi giảm một nửa, từ 2% xuống 1%', 'Tỉ lệ lỗi không đổi', 'Không so sánh được'], 'B', '40 / 2.000 = 2%; 80 / 8.000 = 1%. So sánh phải dùng tỉ lệ, không dùng số tuyệt đối khi quy mô khác nhau.'],
  [`Bộ lọc gian lận đúng 99% (bắt được 99% ca gian lận và báo nhầm 1% giao dịch hợp lệ). Gian lận chỉ chiếm 0,1% giao dịch. Trong các giao dịch bị bộ lọc báo là gian lận, khoảng bao nhiêu phần trăm thật sự là gian lận?`, ['99%', '50%', '9%', '1%'], 'C', 'Trong 100.000 giao dịch: 100 gian lận, bắt được 99; 99.900 hợp lệ, báo nhầm 1% ≈ 999. Tỉ lệ thật: 99 / (99 + 999) ≈ 9%. Đây là bẫy tỉ lệ nền (base rate).'],
  [`Biểu đồ cột có trục tung bắt đầu từ 50. Hai cột có giá trị 52 và 54, nên cột 54 trông cao gấp đôi cột 52. Thực tế 54 lớn hơn 52 khoảng:`, ['2%', '4%', '50%', '100%'], 'B', '(54 − 52) / 52 ≈ 3,8%, tức khoảng 4%. Phần cột nhìn thấy là 2 và 4 nên trông gấp đôi.'],
  [`Bệnh viện A có tỉ lệ điều trị thành công cao hơn bệnh viện B ở CẢ nhóm ca nhẹ lẫn nhóm ca nặng, nhưng tính chung thì A lại thấp hơn B. Lời giải thích hợp lý nhất là:`, ['Số liệu chắc chắn bị sai', 'A nhận nhiều ca nặng hơn hẳn B, nên tỉ lệ chung bị kéo xuống', 'B gian lận số liệu', 'Tỉ lệ chung luôn bằng trung bình của hai nhóm'], 'B', 'Đây là nghịch lý Simpson: cơ cấu nhóm khác nhau làm xu hướng tổng thể ngược với xu hướng trong từng nhóm. Ví dụ A: ca nhẹ 90%, ca nặng 60%, chung 66%; B: 85%, 50%, chung 78% vì B chủ yếu nhận ca nhẹ.'],
  [`Báo cáo ghi "tỉ lệ khách hàng quay lại trong tháng là 130%". Phản ứng hợp lý nhất là:`, ['Rất tốt, khách hàng rất trung thành', 'Kiểm tra lại định nghĩa: một tỉ lệ trên tổng số khách không thể vượt 100%, có thể đang đếm số lượt thay vì số người', 'Làm tròn về 100%', 'Bỏ qua vì không quan trọng'], 'B', 'Tỉ lệ một phần trên tổng không vượt 100%. Con số này có thể đang chia số lượt quay lại cho số khách.'],
  [`Thu nhập tháng của 10 người: 9 người mỗi người 10 triệu, 1 người 500 triệu. Con số nào mô tả mức thu nhập "điển hình" tốt hơn?`, ['Trung bình cộng, 59 triệu', 'Trung vị, 10 triệu', 'Giá trị lớn nhất, 500 triệu', 'Tổng, 590 triệu'], 'B', 'Trung bình bị một giá trị ngoại lai kéo lên 59 triệu, trong khi 9/10 người chỉ có 10 triệu. Trung vị không bị ảnh hưởng.'],
  [`Histogram thời gian phản hồi có đuôi dài kéo về bên phải (vài request rất chậm). Quan hệ thường gặp giữa trung bình và trung vị là:`, ['Trung bình lớn hơn trung vị', 'Trung bình nhỏ hơn trung vị', 'Luôn bằng nhau', 'Không liên quan'], 'A', 'Các giá trị rất lớn ở đuôi phải kéo trung bình lên, còn trung vị gần như đứng yên.'],
]);

addOpen('A', 'ts.quant-open', 'essay', 4, [
  [`Ước lượng chi phí API mỗi tháng của một chatbot chăm sóc khách hàng: mỗi ngày có 5.000 cuộc trò chuyện, mỗi cuộc khoảng 6 lượt hỏi đáp, mỗi lượt khoảng 400 token (tính cả câu hỏi và câu trả lời). Giá là 3 USD cho 1 triệu token. Trình bày từng bước và nêu một cách giảm chi phí.`,
   `1. Token mỗi ngày: 5.000 × 6 × 400 = 12.000.000 = 12 triệu token.
2. Chi phí mỗi ngày: 12 × 3 = 36 USD.
3. Chi phí mỗi tháng (30 ngày): 36 × 30 = 1.080 USD, tức khoảng 1.100 USD.
4. Kiểm tra hợp lý: khoảng 0,007 USD mỗi cuộc trò chuyện (36 / 5.000), nhỏ so với chi phí một nhân viên trả lời.
5. Cách giảm chi phí: rút gọn prompt hệ thống và lịch sử hội thoại gửi kèm; trả lời các câu hỏi lặp lại bằng cache hoặc FAQ có sẵn; dùng model nhỏ hơn cho câu đơn giản và chỉ chuyển model lớn khi cần.`,
   ['Tách đúng thành tích các thừa số: số cuộc × số lượt × token mỗi lượt', 'Tính đúng 12 triệu token mỗi ngày', 'Đổi đúng sang tiền: 36 USD/ngày, khoảng 1.080 USD/tháng', 'Có bước kiểm tra tính hợp lý hoặc nêu đúng đơn vị ở mỗi bước', 'Nêu ít nhất một cách giảm chi phí hợp lý'],
   'Nhân các thừa số để ra token mỗi ngày, đổi sang triệu token rồi nhân giá, cuối cùng nhân 30 ngày.'],
]);
