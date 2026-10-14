// Câu tự soạn Module A — luyện các công thức bổ sung cho đủ bộ của từng chủ đề.
addTS('A', 'ts.percent', [
  [`Giá sau khi tăng 25% là 150. Giá gốc là:`, ['112,5', '120', '125', '187,5'], 'B', 'Giá mới = gốc × 1,25 → gốc = 150 / 1,25 = 120. (Đáp án 112,5 là lấy 150 trừ 25%, sai vì 25% tính trên giá GỐC.)'],
  [`Một chỉ số tăng 20% rồi giảm 20%. So với ban đầu, chỉ số:`, ['Không đổi', 'Giảm 4%', 'Tăng 4%', 'Giảm 2%'], 'B', '1,2 × 0,8 = 0,96 → giảm 4%.'],
  [`Gửi 100 triệu, lãi kép 10%/năm. Sau 2 năm có:`, ['120 triệu', '121 triệu', '110 triệu', '122 triệu'], 'B', '100 × 1,1² = 121 (lãi kép tính lãi trên cả tiền lãi năm trước).'],
  [`30 là 15% của số nào?`, ['4,5', '200', '450', '45'], 'B', 'Tổng = phần / tỉ lệ = 30 / 0,15 = 200.'],
]);

addTS('A', 'ts.algebra', [
  [`Nghiệm của x² − 5x + 6 = 0 là:`, ['x = 1; x = 6', 'x = 2; x = 3', 'x = −2; x = −3', 'Vô nghiệm'], 'B', 'Δ = 25 − 24 = 1 → x = (5 ± 1)/2 = 3 hoặc 2. Kiểm tra bằng Viète: tổng 5, tích 6.'],
  [`Giải bất phương trình −2x + 1 > 7:`, ['x > −3', 'x < −3', 'x > 3', 'x < 3'], 'B', '−2x > 6 → chia cho −2 (số âm) phải ĐỔI CHIỀU → x < −3.'],
  [`Rút gọn 2³ × 2⁴ ÷ 2⁵:`, ['2', '4', '8', '2¹²'], 'B', 'Cộng/trừ số mũ: 3 + 4 − 5 = 2 → 2² = 4.'],
]);

addTS('A', 'ts.stats', [
  [`Khoảng biến thiên (range) của dữ liệu 3, 8, 1, 10 là:`, ['7', '9', '10', '5,5'], 'B', 'max − min = 10 − 1 = 9.'],
  [`Dữ liệu 1, 2, 3, 4, 5, 6, 7, 8. Lấy Q1 = trung vị nửa dưới, Q3 = trung vị nửa trên. IQR bằng:`, ['3', '4', '4,5', '7'], 'B', 'Nửa dưới 1–4 → Q1 = 2,5; nửa trên 5–8 → Q3 = 6,5; IQR = 4.'],
  [`X có trung bình 5, độ lệch chuẩn 2. Y = 2X + 3 có trung bình và độ lệch chuẩn là:`, ['13 và 7', '13 và 4', '10 và 4', '13 và 2'], 'B', 'TB: 2 × 5 + 3 = 13. Độ lệch chuẩn nhân |a| = 2 → 4 (cộng 3 không ảnh hưởng độ phân tán).'],
  [`Hệ số tương quan r = −0,9 giữa hai biến cho biết:`, ['Hai biến không liên quan', 'Tương quan tuyến tính nghịch, mạnh', 'Biến này là nguyên nhân của biến kia', 'Tương quan thuận yếu'], 'B', 'Dấu âm: một biến tăng thì biến kia giảm; |r| gần 1: mạnh. Tương quan không chứng minh nhân quả.'],
  [`Điểm 80, trung bình lớp 70, độ lệch chuẩn 5. Z-score là:`, ['10', '2', '0,5', '16'], 'B', 'z = (80 − 70)/5 = 2.'],
]);

addTS('A', 'ts.prob-rules', [
  [`3 server hoạt động độc lập, mỗi server hỏng với xác suất 0,1. Xác suất có ít nhất một server hỏng là:`, ['0,3', '0,271', '0,001', '0,729'], 'B', '1 − P(không cái nào hỏng) = 1 − 0,9³ = 1 − 0,729 = 0,271.'],
  [`Túi có 5 bi đỏ, 4 bi xanh. Rút liên tiếp 3 bi không hoàn lại. Xác suất cả 3 đều đỏ là:`, ['5/42', '125/729', '1/3', '5/21'], 'A', '5/9 × 4/8 × 3/7 = 60/504 = 5/42.'],
  [`P(A) = 0,5; P(A ∩ B) = 0,2. Xác suất "A xảy ra nhưng B không xảy ra" là:`, ['0,7', '0,3', '0,1', '0,25'], 'B', 'P(A ∩ B̄) = P(A) − P(A ∩ B) = 0,5 − 0,2 = 0,3.'],
]);

addTS('A', 'ts.random-var', [
  [`E[X] = 3, Var(X) = 2. Với Y = 2X + 1 thì:`, ['E[Y] = 7, Var(Y) = 4', 'E[Y] = 7, Var(Y) = 8', 'E[Y] = 6, Var(Y) = 8', 'E[Y] = 7, Var(Y) = 5'], 'B', 'E[aX + b] = aE[X] + b = 7; Var(aX + b) = a²Var(X) = 4 × 2 = 8.'],
  [`X có phân phối Poisson với λ = 4. Kỳ vọng và phương sai của X là:`, ['4 và 2', '4 và 4', '4 và 16', '2 và 4'], 'B', 'Poisson có kỳ vọng = phương sai = λ.'],
  [`Dữ liệu có phân phối chuẩn. Khoảng bao nhiêu % dữ liệu nằm trong μ ± 2σ?`, ['68%', '95%', '99,7%', '50%'], 'B', 'Quy tắc 68–95–99,7.'],
  [`X nhận 0, 1, 2 với xác suất 0,25; 0,5; 0,25. Var(X) bằng:`, ['1', '0,5', '0,25', '1,5'], 'B', 'E[X] = 1; E[X²] = 0 + 0,5 + 4 × 0,25 = 1,5; Var = 1,5 − 1² = 0,5.'],
]);

addTS('A', 'ts.counting', [
  [`Số cách sắp xếp các chữ cái của từ "BANANA" là:`, ['720', '60', '120', '36'], 'B', 'Hoán vị lặp: 6!/(3! × 2! × 1!) = 720/12 = 60 (3 chữ A, 2 chữ N giống nhau).'],
  [`5 người ngồi quanh một bàn tròn (hai cách xếp chỉ khác nhau do xoay bàn được coi là một). Số cách xếp là:`, ['120', '24', '60', '5'], 'B', 'Hoán vị vòng: (n − 1)! = 4! = 24.'],
  [`Hệ số của x² trong khai triển (1 + x)⁵ là:`, ['5', '10', '20', '25'], 'B', 'Nhị thức Newton: hệ số của xᵏ là C(5, k) → C(5, 2) = 10.'],
  [`Một tập hợp có 5 phần tử có bao nhiêu tập con (kể cả tập rỗng)?`, ['25', '32', '10', '120'], 'B', 'C(5,0) + C(5,1) + … + C(5,5) = 2⁵ = 32.'],
  [`Chọn 3 viên kẹo từ 2 loại (dâu, cam), được chọn trùng loại, không quan tâm thứ tự. Số cách là:`, ['8', '4', '6', '3'], 'B', 'Tổ hợp lặp C(n + k − 1, k) = C(4, 3) = 4: {DDD, DDC, DCC, CCC}. (8 = 2³ là khi CÓ thứ tự.)'],
  [`Đi từ A đến B có 3 chuyến bay hoặc 2 chuyến tàu (chọn một). Số cách đi là:`, ['6', '5', '3', '2'], 'B', 'Quy tắc CỘNG (chọn cách này HOẶC cách kia): 3 + 2 = 5. Quy tắc nhân dùng khi làm bước này RỒI bước kia.'],
  [`Giá trị C(5, 2) + C(5, 3) bằng:`, ['C(5, 5)', 'C(6, 3) = 20', 'C(10, 5)', '15'], 'B', 'Hằng đẳng thức Pascal: C(n, k−1) + C(n, k) = C(n+1, k) → C(6, 3) = 20 (= 10 + 10).'],
]);

addTS('A', 'ts.hypergeo', [
  [`Túi có 5 đỏ, 4 xanh. Rút 3 bi không hoàn lại. Xác suất có ĐÚNG 2 bi đỏ là:`, ['10/21', '5/14', '40/729', '2/3'], 'A', 'C(5,2) × C(4,1) / C(9,3) = 10 × 4 / 84 = 40/84 = 10/21.'],
  [`Túi có 5 đỏ, 4 xanh. Rút 2 bi CÓ hoàn lại. Xác suất cả hai đỏ là:`, ['5/18', '25/81', '20/81', '5/9'], 'B', 'Có hoàn lại → mỗi lần độc lập, xác suất giữ nguyên: (5/9)² = 25/81.'],
]);

addTS('A', 'ts.vector', [
  [`Hai vector u = (2, 1) và v = (−1, 2). Nhận xét đúng là:`, ['Cùng hướng', 'Vuông góc', 'Ngược hướng', 'Bằng nhau'], 'B', 'u·v = −2 + 2 = 0 → vuông góc.'],
  [`Chuẩn hóa vector u = (3, 4) thành vector đơn vị, được:`, ['(3, 4)', '(0,6; 0,8)', '(0,75; 1)', '(1, 1)'], 'B', '‖u‖ = 5 → u/‖u‖ = (3/5, 4/5).'],
]);

addTS('A', 'ts.matrix', [
  [`Vết (trace) của ma trận A=[[1,2],[3,4]] là:`, ['10', '5', '−2', '4'], 'B', 'Tổng đường chéo chính: 1 + 4 = 5.'],
  [`Cho A là ma trận 2×2 với det(A) = 2. det(3A) bằng:`, ['6', '18', '9', '2'], 'B', 'det(kA) = kⁿ det(A) với n = 2 → 9 × 2 = 18.'],
  [`det(A) = 2 và det(B) = 5 (cùng cỡ). det(AB) bằng:`, ['7', '10', '2,5', 'Không xác định'], 'B', 'det(AB) = det(A) × det(B) = 10.'],
  [`Ma trận A=[[2,1],[1,2]] có các trị riêng là:`, ['2 và 2', '1 và 3', '0 và 4', '−1 và 3'], 'B', 'λ² − tr(A)λ + det(A) = λ² − 4λ + 3 = 0 → λ = 1 hoặc 3 (tổng = vết 4, tích = det 3).'],
  [`Hệ Ax = b với det(A) = 0 thì:`, ['Luôn có nghiệm duy nhất', 'Vô nghiệm hoặc vô số nghiệm', 'Luôn vô nghiệm', 'Nghiệm là x = 0'], 'B', 'det ≠ 0 mới có nghiệm duy nhất x = A⁻¹b.'],
]);

addTS('A', 'ts.calculus', [
  [`Đạo hàm của f(x) = eˣ + ln x là:`, ['eˣ + 1/x', 'x eˣ⁻¹ + 1/x', 'eˣ − 1/x', 'eˣ ln x'], 'A', '(eˣ)\' = eˣ; (ln x)\' = 1/x.'],
  [`f(x) = x² − 4x + 1 đạt cực tiểu tại:`, ['x = −2', 'x = 2', 'x = 4', 'x = 1'], 'B', 'f\'(x) = 2x − 4 = 0 → x = 2; f\'\' = 2 > 0 → cực tiểu.'],
  [`Đạo hàm của f(x) = (3x + 1)² là:`, ['2(3x + 1)', '6(3x + 1)', '3(3x + 1)²', '6x'], 'B', 'Chain rule: 2(3x + 1) × (3x + 1)\' = 2(3x + 1) × 3.'],
  [`log₂ 8 + log₂ 4 bằng:`, ['12', '5', '32', '3'], 'B', 'log₂8 = 3, log₂4 = 2 → 5 (cũng bằng log₂ 32).'],
]);

// ---- A3.3 Toán rời rạc (bổ sung 2026-10-13 theo phản hồi "Toán chủ yếu XSTK, CTRR") ----
addTS('A', 'ts.discrete', [
  [`Bảng chân trị của một biểu thức logic có 3 biến P, Q, R gồm bao nhiêu dòng?`, ['3', '6', '8', '9'], 'C', 'Mỗi biến có 2 giá trị (đúng/sai) → 2³ = 8 dòng.'],
  [`Với P đúng, Q sai. Giá trị của P ⊕ Q (XOR) và P ∧ Q (AND) lần lượt là:`, ['Đúng, Đúng', 'Đúng, Sai', 'Sai, Đúng', 'Sai, Sai'], 'B', 'XOR đúng khi hai bên KHÁC nhau → đúng. AND chỉ đúng khi cả hai cùng đúng → sai.'],
  [`Biểu thức nào tương đương với ¬(P ∨ Q)?`, ['¬P ∨ ¬Q', '¬P ∧ ¬Q', 'P ∧ Q', '¬P ∨ Q'], 'B', 'Luật De Morgan: phủ định của "hoặc" là "và" của các phủ định.'],
  [`Trong 4 dòng của bảng chân trị P ∨ Q (OR), có bao nhiêu dòng cho kết quả ĐÚNG?`, ['1', '2', '3', '4'], 'C', 'OR chỉ sai khi cả P và Q đều sai → đúng ở 3 dòng còn lại.'],
  [`Kết quả của biểu thức Python §True and False or True§ là:`, ['True', 'False', 'None', 'Lỗi'], 'A', '§and§ được tính trước §or§: (True and False) or True = False or True = True.'],
  [`Cho A = {1, 2, 3, 4} và B = {3, 4, 5}. Tập A ∩ B là:`, ['{1, 2, 3, 4, 5}', '{3, 4}', '{1, 2}', '{5}'], 'B', 'Giao: các phần tử thuộc CẢ hai tập.'],
  [`Cho A = {1, 2, 3, 4} và B = {3, 4, 5}. Tập A \\ B (hiệu) là:`, ['{3, 4}', '{5}', '{1, 2}', '{1, 2, 5}'], 'C', 'Hiệu: thuộc A nhưng không thuộc B. ({1, 2, 5} là hiệu đối xứng.)'],
  [`Lớp có 40 học sinh: 25 bạn thích Toán, 20 bạn thích Văn, 10 bạn thích cả hai. Số bạn không thích môn nào là:`, ['5', '0', '15', '10'], 'A', 'Thích ít nhất một môn: 25 + 20 − 10 = 35. Không thích môn nào: 40 − 35 = 5.'],
  [`Tập {a, b, c} có bao nhiêu tập con (kể cả tập rỗng và chính nó)?`, ['3', '6', '8', '9'], 'C', 'Số tập con của tập n phần tử là 2ⁿ = 2³ = 8.'],
  [`|A| = 3 và |B| = 4. Tích Descartes A × B có bao nhiêu phần tử?`, ['7', '12', '64', '81'], 'B', '|A × B| = |A| × |B| = 12 cặp (a, b).'],
  [`Kết quả của §{1, 2, 3} & {2, 3, 4}§ trong Python là:`, ['{1, 2, 3, 4}', '{2, 3}', '{1, 4}', '{1}'], 'B', '§&§ là phép giao; §|§ là hợp; §-§ là hiệu; §^§ là hiệu đối xứng.'],
  [`Cần ít nhất bao nhiêu người để CHẮC CHẮN có 2 người sinh cùng tháng?`, ['12', '13', '24', '2'], 'B', 'Dirichlet: trường hợp xui nhất là 12 người sinh 12 tháng khác nhau; người thứ 13 chắc chắn trùng tháng với một người.'],
  [`Ngăn kéo có rất nhiều tất thuộc 3 màu. Lấy ngẫu nhiên trong bóng tối, cần lấy ít nhất bao nhiêu chiếc để chắc chắn có 2 chiếc CÙNG màu?`, ['3', '4', '6', '2'], 'B', 'Xui nhất: 3 chiếc đầu mỗi chiếc một màu. Chiếc thứ 4 chắc chắn trùng màu với một chiếc trước đó.'],
  [`Cần ít nhất bao nhiêu người để chắc chắn có 3 người sinh cùng tháng?`, ['25', '24', '36', '13'], 'A', 'Xui nhất: mỗi tháng đúng 2 người = 24 người. Người thứ 25 tạo ra một tháng có 3 người: k(m − 1) + 1 = 12 × 2 + 1.'],
  [`Một đồ thị vô hướng có 5 đỉnh với bậc lần lượt là 2, 2, 3, 3, 4. Đồ thị có bao nhiêu cạnh?`, ['14', '7', '5', '10'], 'B', 'Tổng bậc = 2 × số cạnh → 14 / 2 = 7.'],
  [`Trong một buổi họp có 6 người, ai cũng bắt tay đúng một lần với từng người còn lại. Tổng số cái bắt tay là:`, ['30', '15', '12', '36'], 'B', 'Đồ thị đầy đủ 6 đỉnh: n(n − 1)/2 = 6 × 5 / 2 = 15 (= C(6, 2)).'],
  [`Một cây (đồ thị liên thông, không có chu trình) có 10 đỉnh thì có bao nhiêu cạnh?`, ['10', '9', '11', '45'], 'B', 'Cây n đỉnh luôn có n − 1 cạnh.'],
  [`Có tồn tại đồ thị vô hướng có 3 đỉnh mà mỗi đỉnh có bậc 3, 3, 3 (không tính cạnh lặp, khuyên) hay không?`, ['Có, là tam giác', 'Không, vì tổng bậc bằng 9 là số lẻ', 'Có, là đồ thị đầy đủ', 'Không xác định được'], 'B', 'Tổng bậc phải bằng 2 × số cạnh nên luôn chẵn. Tam giác có bậc 2, 2, 2.'],
]);
