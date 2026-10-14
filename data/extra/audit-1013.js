// Câu luyện cho các bài bổ sung ngày 2026-10-13 sau đợt rà soát độc lập theo 4 tên module của ban tổ chức
// và thông tin chương trình (bảng cấp độ L1–L6, AI & Data Essential, AI Specialized).
// Cú pháp: addTS / addOpen trong data/questions-extra.js (~~~ = khối code, §x§ = code inline).

// ======================= A1.2 Thống kê suy luận =======================
addTS('A', 'ts.inference', [
  [`Độ lệch chuẩn của tổng thể là σ = 10, cỡ mẫu n = 100. Sai số chuẩn (SE) của trung bình mẫu là:`, ['0,1', '1', '10', '100'], 'B', 'SE = σ/√n = 10/√100 = 1.'],
  [`Muốn sai số chuẩn giảm còn một nửa thì cỡ mẫu phải:`, ['Tăng gấp đôi', 'Tăng gấp 4', 'Giảm một nửa', 'Tăng gấp 10'], 'B', 'SE tỉ lệ với 1/√n. Muốn SE giảm 2 lần thì n phải tăng 2² = 4 lần.'],
  [`Trung bình mẫu là 70, sai số chuẩn là 1. Khoảng tin cậy 95% xấp xỉ là:`, ['[69; 71]', '[68,04; 71,96]', '[65; 75]', '[60; 80]'], 'B', '70 ± 1,96 × 1 = [68,04; 71,96].'],
  [`Kiểm định với mức ý nghĩa α = 0,05 cho p-value = 0,03. Kết luận đúng là:`, ['Chấp nhận H₀', 'Bác bỏ H₀: kết quả có ý nghĩa thống kê', 'Xác suất H₀ đúng là 3%', 'Không kết luận được gì'], 'B', 'p < α nên bác bỏ H₀. Lưu ý p-value KHÔNG phải xác suất H₀ đúng.'],
  [`p-value là:`, ['Xác suất giả thuyết H₀ đúng', 'Xác suất quan sát được kết quả cực đoan như vậy hoặc hơn, NẾU H₀ đúng', 'Xác suất mô hình đúng', 'Tỉ lệ mẫu bị lỗi'], 'B', 'p-value đo mức "bất ngờ" của dữ liệu dưới giả định H₀ đúng.'],
  [`Sai lầm loại I là:`, ['Không bác bỏ H₀ khi H₀ sai', 'Bác bỏ H₀ trong khi H₀ thật ra đúng (báo động giả)', 'Chọn sai cỡ mẫu', 'Tính sai trung bình'], 'B', 'Loại I: báo động giả, xác suất là α. Loại II: bỏ sót, xác suất là β.'],
  [`A/B test trên 2 triệu người dùng cho thấy bản mới tăng tỉ lệ nhấp từ 5,00% lên 5,01%, p-value = 0,001. Nhận xét đúng nhất là:`, ['Phải triển khai ngay vì p rất nhỏ', 'Có ý nghĩa thống kê nhưng chênh lệch quá nhỏ, cần cân nhắc ý nghĩa thực tế', 'Kết quả sai vì mẫu quá lớn', 'Bản mới kém hơn'], 'B', 'Mẫu rất lớn làm chênh lệch tí hon cũng có ý nghĩa thống kê. Còn phải hỏi nó có đáng để triển khai không.'],
  [`Mẫu khảo sát chỉ gồm những khách hàng tự nguyện trả lời email. Vấn đề chính là:`, ['Mẫu quá lớn', 'Thiên lệch chọn mẫu: mẫu không đại diện cho toàn bộ khách hàng', 'Sai số chuẩn bằng 0', 'Không có vấn đề'], 'B', 'Người tự nguyện trả lời thường khác người không trả lời. Mẫu lệch thì kết luận sai, dù cỡ mẫu lớn.'],
  [`Hệ số tương quan giữa x và y là r = 0,8. Đường hồi quy tuyến tính giải thích được bao nhiêu phần biến động của y?`, ['80%', '64%', '16%', '40%'], 'B', 'R² = r² = 0,64.'],
  [`Một nhóm thử 20 chỉ số khác nhau và chỉ báo cáo 1 chỉ số có p < 0,05. Vấn đề là:`, ['Không có vấn đề', 'Với α = 0,05, thử 20 lần thì trung bình có 1 lần "có ý nghĩa" chỉ do ngẫu nhiên', 'p-value phải nhỏ hơn 0,5', 'Cần thử thêm 20 chỉ số nữa'], 'B', 'Đây là p-hacking. Thử càng nhiều thì càng dễ gặp kết quả "có ý nghĩa" giả.'],
]);

// ======================= A6.1 Tư duy định lượng =======================
addTS('A', 'ts.quant', [
  [`Một chatbot có 20.000 người dùng mỗi ngày, mỗi người hỏi trung bình 4 câu, mỗi câu tốn khoảng 500 token. Tổng số token mỗi ngày khoảng:`, ['4 triệu', '40 triệu', '400 nghìn', '400 triệu'], 'B', '20.000 × 4 × 500 = 40.000.000 = 40 triệu token.'],
  [`Một GPU xử lý 500 ảnh mỗi phút. Xử lý 3 triệu ảnh bằng 2 GPU như vậy mất khoảng:`, ['25 giờ', '50 giờ', '100 giờ', '5 giờ'], 'B', '2 GPU: 1000 ảnh/phút → 3.000.000/1000 = 3000 phút = 50 giờ.'],
  [`Máy A xử lý xong một lô dữ liệu trong 6 giờ, máy B trong 3 giờ. Hai máy cùng chạy thì mất:`, ['4,5 giờ', '2 giờ', '9 giờ', '1,5 giờ'], 'B', 'Tốc độ: 1/6 + 1/3 = 1/2 lô mỗi giờ → 2 giờ.'],
  [`Số người dùng tăng 10% mỗi tháng. Theo quy tắc 72, số người dùng gấp đôi sau khoảng:`, ['2 tháng', '7 tháng', '10 tháng', '72 tháng'], 'B', '72/10 ≈ 7 tháng.'],
  [`Sản phẩm X tăng 1000 người dùng mỗi tháng. Sản phẩm Y tăng 20% mỗi tháng. Cả hai bắt đầu với 5000 người. Về lâu dài:`, ['X luôn nhiều hơn', 'Y sẽ vượt X vì tăng trưởng mũ vượt tăng trưởng tuyến tính', 'Hai sản phẩm luôn bằng nhau', 'Không so sánh được'], 'B', 'X cộng thêm một lượng cố định; Y nhân với 1,2 mỗi tháng. Tăng trưởng mũ cuối cùng luôn vượt tuyến tính.'],
  [`Một model có 7 tỉ (7B) tham số, mỗi tham số lưu bằng 4 byte. Bộ nhớ cần để chứa trọng số khoảng:`, ['28 MB', '28 GB', '7 GB', '280 GB'], 'B', '7 × 10⁹ × 4 byte = 28 × 10⁹ byte ≈ 28 GB.'],
  [`Tỉ lệ lỗi giảm từ 10% xuống 8%. Phát biểu đúng là:`, ['Giảm 2%', 'Giảm 2 điểm phần trăm, tức giảm 20% tương đối', 'Giảm 20 điểm phần trăm', 'Giảm 80%'], 'B', 'Chênh lệch tuyệt đối: 2 điểm phần trăm. Tương đối: 2/10 = 20%.'],
  [`Tháng trước có 10 lỗi trên 1.000 request. Tháng này có 20 lỗi trên 10.000 request. Nhận xét đúng là:`, ['Chất lượng xấu đi vì số lỗi gấp đôi', 'Tỉ lệ lỗi giảm từ 1% xuống 0,2%', 'Tỉ lệ lỗi không đổi', 'Không so sánh được'], 'B', 'So sánh phải dùng tỉ lệ: 10/1000 = 1%; 20/10.000 = 0,2%.'],
  [`Muốn xem phân phối của một biến số (ví dụ tuổi khách hàng) thì dùng biểu đồ nào?`, ['Biểu đồ tròn', 'Histogram', 'Biểu đồ đường', 'Bản đồ'], 'B', 'Histogram chia giá trị thành các khoảng và đếm số lượng trong mỗi khoảng.'],
  [`Biểu đồ cột có trục tung bắt đầu từ 95 thay vì 0, hai cột có giá trị 96 và 98. Người xem dễ bị:`, ['Hiểu đúng chênh lệch', 'Tưởng chênh lệch rất lớn trong khi thực tế chỉ khoảng 2%', 'Không thấy cột nào', 'Tưởng hai cột bằng nhau'], 'B', 'Trục bị cắt làm cột 98 trông cao gấp 3 lần cột 96.'],
]);

// ======================= B2.3 Đệ quy, lỗi, file, JSON =======================
addTS('B', 'ts.py-advanced', [
  [`Kết quả của code là gì?
~~~python
def f(n):
    if n <= 1:
        return 1
    return n * f(n - 1)
print(f(4))
~~~`, ['10', '24', '4', 'Lỗi'], 'B', 'Hàm tính giai thừa: 4 × 3 × 2 × 1 = 24.'],
  [`Kết quả của code là gì?
~~~python
def fib(n):
    if n < 2:
        return n
    return fib(n - 1) + fib(n - 2)
print(fib(6))
~~~`, ['5', '8', '13', '6'], 'B', 'Dãy Fibonacci: 0, 1, 1, 2, 3, 5, 8 → fib(6) = 8.'],
  [`Một hàm đệ quy không có điều kiện dừng sẽ:`, ['Trả về None', 'Gọi mãi cho tới khi Python báo RecursionError', 'Chạy đúng một lần', 'Tự động dừng sau 10 lần'], 'B', 'Mỗi lời gọi tốn bộ nhớ; Python có giới hạn độ sâu đệ quy.'],
  [`Đoạn code in ra gì?
~~~python
try:
    x = int('abc')
except ValueError:
    print('A')
finally:
    print('B')
~~~`, ['A', 'B', 'A rồi B', 'Lỗi, không in gì'], 'C', '§int(\'abc\')§ gây ValueError → in A. Khối §finally§ luôn chạy → in B.'],
  [`Truy cập §d['x']§ khi dict §d§ không có key §'x'§ gây ra lỗi nào?`, ['IndexError', 'KeyError', 'ValueError', 'TypeError'], 'B', 'KeyError cho dict; IndexError cho list khi chỉ số vượt quá độ dài.'],
  [`Vì sao nên dùng §with open(...) as f:§ thay vì §f = open(...)§?`, ['Chạy nhanh hơn', 'File được đóng tự động kể cả khi có lỗi xảy ra', 'Đọc được file lớn hơn', 'Không cần chỉ định tên file'], 'B', '§with§ đảm bảo giải phóng tài nguyên khi ra khỏi khối.'],
  [`Mở file với chế độ §'w'§ khi file đã có nội dung thì:`, ['Nội dung mới được nối vào cuối', 'Nội dung cũ bị xóa và ghi đè', 'Báo lỗi', 'File chỉ đọc được'], 'B', '§\'w\'§ ghi đè; §\'a\'§ mới là ghi nối thêm; §\'r\'§ là chỉ đọc.'],
  [`Kết quả của code là gì?
~~~python
import json
data = json.loads('{"a": [1, 2, 3]}')
print(data['a'][1])
~~~`, ['1', '2', '[1, 2, 3]', 'Lỗi'], 'B', '§json.loads§ chuyển chuỗi JSON thành dict; §data[\'a\']§ là list [1, 2, 3], phần tử ở vị trí 1 là 2.'],
  [`Hàm nào chuyển một dict Python thành CHUỖI JSON?`, ['§json.load§', '§json.loads§', '§json.dumps§', '§json.read§'], 'C', '§dumps§: đối tượng → chuỗi. §loads§: chuỗi → đối tượng. Không có chữ s thì làm việc với file.'],
]);

// ======================= B2.4 OOP =======================
addTS('B', 'ts.oop', [
  [`Kết quả của code là gì?
~~~python
class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return self.name + ' sủa'
d = Dog('Mực')
print(d.speak())
~~~`, ['Dog sủa', 'Mực sủa', 'name sủa', 'Lỗi'], 'B', '§__init__§ gán §self.name = \'Mực\'§; §speak§ nối chuỗi.'],
  [`Trong một phương thức của class, tham số §self§ là:`, ['Tên của class', 'Chính object đang gọi phương thức đó', 'Một biến toàn cục', 'Class cha'], 'B', 'Khi viết §d.speak()§, Python tự truyền §d§ vào §self§.'],
  [`Hàm §__init__§ được gọi khi nào?`, ['Khi xóa object', 'Khi tạo một object mới từ class', 'Khi import module', 'Khi in object'], 'B', 'Đây là hàm khởi tạo, dùng để gán các thuộc tính ban đầu.'],
  [`Kết quả của code là gì?
~~~python
class A:
    def hello(self):
        return 'A'
class B(A):
    def hello(self):
        return 'B'
print(B().hello())
~~~`, ['A', 'B', 'AB', 'Lỗi'], 'B', 'Class B kế thừa A nhưng ghi đè phương thức §hello§, nên chạy bản của B.'],
  [`Class con dùng lại được thuộc tính và phương thức của class cha. Đây là tính chất nào?`, ['Đóng gói', 'Kế thừa', 'Đa hình', 'Trừu tượng'], 'B', 'Kế thừa (inheritance): §class Child(Parent):§.'],
  [`Cùng gọi §shape.area()§ nhưng hình tròn và hình vuông tính theo hai cách khác nhau. Đây là:`, ['Đóng gói', 'Kế thừa', 'Đa hình', 'Đệ quy'], 'C', 'Đa hình (polymorphism): cùng tên phương thức, mỗi class có cách thực hiện riêng.'],
  [`Trong Python, thuộc tính có tên bắt đầu bằng một dấu gạch dưới (§_balance§) theo quy ước nghĩa là:`, ['Hằng số', 'Dùng nội bộ, bên ngoài không nên truy cập trực tiếp', 'Biến toàn cục', 'Thuộc tính bắt buộc'], 'B', 'Đây là cách Python thể hiện tính đóng gói bằng quy ước đặt tên.'],
  [`Trong class con, lệnh §super().__init__(name)§ dùng để:`, ['Xóa class cha', 'Gọi hàm khởi tạo của class cha', 'Tạo class mới', 'Gọi lại chính nó'], 'B', '§super()§ trỏ tới class cha, giúp dùng lại phần khởi tạo có sẵn.'],
]);

// ======================= B3.3 Tìm kiếm, sắp xếp, stack, queue =======================
addTS('B', 'ts.search-sort', [
  [`Điều kiện bắt buộc để dùng tìm kiếm nhị phân là:`, ['Dãy có số phần tử chẵn', 'Dãy đã được sắp xếp', 'Dãy không có phần tử trùng', 'Dãy chỉ gồm số nguyên'], 'B', 'Thuật toán dựa vào thứ tự để loại bỏ một nửa dãy sau mỗi lần so sánh.'],
  [`Tìm kiếm nhị phân trên dãy đã sắp xếp có 1.000.000 phần tử cần tối đa khoảng bao nhiêu lần so sánh?`, ['20', '1.000', '500.000', '1.000.000'], 'A', 'log₂(1.000.000) ≈ 20, vì 2²⁰ ≈ 1 triệu.'],
  [`Tìm số 7 trong dãy [1, 3, 5, 7, 9, 11, 13] bằng tìm kiếm nhị phân. Phần tử được so sánh ĐẦU TIÊN là:`, ['1', '7', '13', '5'], 'B', 'Phần tử giữa của 7 phần tử là ở vị trí 3 (đếm từ 0), có giá trị 7.'],
  [`Thuật toán sắp xếp nào có độ phức tạp trung bình O(n log n)?`, ['Bubble sort', 'Selection sort', 'Merge sort', 'Insertion sort'], 'C', 'Merge sort và quick sort (trung bình) là O(n log n). Ba thuật toán còn lại là O(n²).'],
  [`Một thuật toán sắp xếp "ổn định" (stable) nghĩa là:`, ['Luôn chạy cùng thời gian', 'Các phần tử có khóa bằng nhau giữ nguyên thứ tự tương đối ban đầu', 'Không dùng thêm bộ nhớ', 'Không bao giờ lỗi'], 'B', 'Quan trọng khi sắp xếp nhiều lần theo nhiều tiêu chí. §sorted§ của Python là ổn định.'],
  [`Kết quả của code là gì?
~~~python
stack = []
stack.append(1)
stack.append(2)
stack.append(3)
stack.pop()
print(stack[-1])
~~~`, ['1', '2', '3', 'Lỗi'], 'B', '§pop()§ lấy ra phần tử vào sau cùng (3). Phần tử trên đỉnh còn lại là 2.'],
  [`Kết quả của code là gì?
~~~python
from collections import deque
q = deque([1, 2, 3])
q.append(4)
print(q.popleft())
~~~`, ['1', '4', '3', '2'], 'A', 'Queue là FIFO: phần tử vào trước nhất (1) ra trước.'],
  [`Chức năng "hoàn tác" (undo) trong trình soạn thảo phù hợp nhất với cấu trúc dữ liệu nào?`, ['Queue', 'Stack', 'Set', 'Dict'], 'B', 'Thao tác làm sau cùng phải được hoàn tác trước tiên: LIFO.'],
  [`Tìm một phần tử trong list CHƯA sắp xếp có n phần tử, trường hợp xấu nhất cần bao nhiêu lần so sánh?`, ['log n', 'n', '1', 'n²'], 'B', 'Phải xem lần lượt từng phần tử: O(n).'],
]);

// ======================= B6.2 SQL =======================
addTS('B', 'ts.sql', [
  [`Câu lệnh nào lấy tên các khách hàng ở Hà Nội từ bảng §customers§?`, ["§SELECT name FROM customers WHERE city = 'HN'§", "§GET name FROM customers IF city = 'HN'§", "§SELECT customers WHERE city = 'HN'§", "§FROM customers SELECT name HAVING city = 'HN'§"], 'A', 'Khung cơ bản: SELECT cột FROM bảng WHERE điều kiện.'],
  [`Muốn đếm số đơn hàng của TỪNG thành phố, dùng:`, ['§SELECT city, COUNT(*) FROM orders GROUP BY city§', '§SELECT city, COUNT(*) FROM orders ORDER BY city§', '§SELECT COUNT(city) FROM orders§', '§SELECT city FROM orders WHERE COUNT(*)§'], 'A', 'GROUP BY gom các dòng cùng city thành một nhóm, COUNT(*) đếm số dòng mỗi nhóm.'],
  [`Chỉ muốn giữ lại các thành phố có TỪ 10 đơn hàng trở lên (sau khi GROUP BY), thêm mệnh đề nào?`, ['§WHERE COUNT(*) >= 10§', '§HAVING COUNT(*) >= 10§', '§FILTER COUNT(*) >= 10§', '§LIMIT 10§'], 'B', 'WHERE lọc từng dòng trước khi gom nhóm nên không dùng được hàm gộp. HAVING lọc nhóm sau khi gom.'],
  [`Tìm các dòng có cột §email§ bị thiếu, viết điều kiện nào?`, ['§WHERE email = NULL§', '§WHERE email IS NULL§', "§WHERE email = ''§", '§WHERE email == None§'], 'B', 'So sánh bằng với NULL không bao giờ đúng. Phải dùng IS NULL.'],
  [`§LEFT JOIN§ giữa bảng §users§ (trái) và §orders§ (phải) trả về:`, ['Chỉ user có đơn hàng', 'Mọi user; user chưa có đơn hàng thì các cột của orders là NULL', 'Chỉ đơn hàng không có user', 'Mọi đơn hàng'], 'B', 'LEFT JOIN giữ toàn bộ bảng bên trái. INNER JOIN mới chỉ giữ dòng khớp ở cả hai bảng.'],
  [`Lấy 5 sản phẩm có giá cao nhất:`, ['§SELECT * FROM products ORDER BY price DESC LIMIT 5§', '§SELECT * FROM products ORDER BY price LIMIT 5§', '§SELECT TOP price FROM products§', '§SELECT * FROM products WHERE price MAX 5§'], 'A', 'ORDER BY ... DESC sắp giảm dần, LIMIT 5 lấy 5 dòng đầu.'],
  [`Thứ tự THỰC THI logic của một câu truy vấn là:`, ['SELECT → FROM → WHERE → GROUP BY', 'FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY', 'WHERE → FROM → SELECT → ORDER BY', 'ORDER BY → SELECT → FROM → WHERE'], 'B', 'Lấy bảng, lọc dòng, gom nhóm, lọc nhóm, rồi mới chọn cột và sắp xếp.'],
  [`§COUNT(email)§ khác §COUNT(*)§ ở chỗ nào?`, ['Không khác nhau', '§COUNT(email)§ chỉ đếm các dòng có email khác NULL', '§COUNT(*)§ chỉ đếm dòng không trùng', '§COUNT(email)§ đếm số ký tự'], 'B', 'COUNT(*) đếm mọi dòng; COUNT(cột) bỏ qua giá trị NULL.'],
  [`Chạy §DELETE FROM orders;§ (không có WHERE) thì:`, ['Xóa dòng đầu tiên', 'Xóa TOÀN BỘ dòng trong bảng', 'Báo lỗi cú pháp', 'Không xóa gì'], 'B', 'Thiếu WHERE thì lệnh áp dụng cho mọi dòng. Đây là lỗi nguy hiểm kinh điển.'],
  [`Cột dùng để định danh duy nhất mỗi dòng trong một bảng gọi là:`, ['Khóa ngoại', 'Khóa chính', 'Chỉ mục phụ', 'Cột tính toán'], 'B', 'Khóa chính (primary key) không trùng và không NULL. Khóa ngoại trỏ tới khóa chính của bảng khác.'],
]);

// ======================= B9.1 Kỹ thuật phần mềm =======================
addTS('B', 'ts.se', [
  [`Trong Git, một "commit" là:`, ['Một bản sao lưu toàn bộ máy tính', 'Một ảnh chụp các thay đổi kèm lời mô tả, lưu vào lịch sử dự án', 'Một lệnh xóa file', 'Một tài khoản người dùng'], 'B', 'Lịch sử dự án là chuỗi các commit, cho phép xem lại và quay về phiên bản cũ.'],
  [`Tạo nhánh (branch) riêng để làm một tính năng nhằm mục đích:`, ['Làm code chạy nhanh hơn', 'Phát triển độc lập mà không ảnh hưởng nhánh chính cho tới khi sẵn sàng gộp', 'Xóa lịch sử', 'Mã hóa mã nguồn'], 'B', 'Làm xong thì mở pull request để người khác review rồi gộp (merge).'],
  [`File nào dùng để khai báo những thứ KHÔNG đưa vào Git (như file chứa API key)?`, ['§README.md§', '§.gitignore§', '§requirements.txt§', '§main.py§'], 'B', 'Mật khẩu, API key, file môi trường và dữ liệu lớn không nên nằm trong kho mã.'],
  [`Xung đột (merge conflict) xảy ra khi:`, ['Máy hết bộ nhớ', 'Hai nhánh cùng sửa một chỗ trong cùng một file và Git không tự gộp được', 'Quên đặt tên commit', 'Mất kết nối mạng'], 'B', 'Người gộp phải tự xem và chọn nội dung đúng.'],
  [`Unit test là:`, ['Kiểm thử toàn bộ hệ thống bởi người dùng cuối', 'Đoạn code tự động kiểm tra một hàm nhỏ có trả về đúng kết quả mong đợi không', 'Kiểm tra tốc độ mạng', 'Đo số dòng code'], 'B', 'Chạy lại được bất cứ lúc nào để phát hiện ngay khi một thay đổi làm hỏng thứ đang chạy đúng.'],
  [`Khi viết test cho hàm tính trung bình của một list, trường hợp nào quan trọng cần có?`, ['Chỉ cần list [1, 2, 3]', 'Cả các trường hợp biên như list rỗng, một phần tử, có số âm', 'List có đúng 100 phần tử', 'Không cần test'], 'B', 'Lỗi thường nằm ở trường hợp biên (rỗng → chia cho 0).'],
  [`Chương trình báo lỗi kèm một traceback dài. Nên đọc từ đâu trước?`, ['Dòng đầu tiên', 'Dòng cuối: loại lỗi và thông báo, rồi lần ngược lên chỗ code của mình', 'Dòng giữa', 'Không cần đọc'], 'B', 'Dòng cuối cho biết lỗi gì; các dòng phía trên cho biết lỗi xảy ra ở file và dòng nào.'],
  [`Trong hệ thống chạy thật, vì sao dùng §logging§ tốt hơn §print§?`, ['Vì logging chạy nhanh hơn', 'Vì có mức độ (INFO, WARNING, ERROR), có thời gian, ghi được ra file và bật tắt theo mức', 'Vì print gây lỗi', 'Vì logging tự sửa bug'], 'B', 'Log giúp điều tra sự cố sau khi nó đã xảy ra.'],
  [`File §requirements.txt§ trong dự án Python dùng để:`, ['Ghi yêu cầu của khách hàng', 'Liệt kê các thư viện và phiên bản cần cài để chạy dự án', 'Lưu mật khẩu', 'Lưu kết quả test'], 'B', 'Kết hợp với môi trường ảo để mọi người chạy cùng phiên bản thư viện.'],
]);

// ======================= C1.3 Dữ liệu cho AI =======================
addTS('C', 'ts.data', [
  [`Dữ liệu nào sau đây là dữ liệu PHI cấu trúc?`, ['Bảng khách hàng trong cơ sở dữ liệu', 'File CSV doanh thu', 'Ảnh chụp và bản ghi âm cuộc gọi', 'Bảng tính điểm'], 'C', 'Ảnh, âm thanh, video, văn bản tự do không có sẵn dạng hàng cột.'],
  [`Một ảnh màu kích thước 100 × 200 điểm ảnh với 3 kênh màu được lưu thành bao nhiêu con số?`, ['300', '20.000', '60.000', '600'], 'C', 'Cao × rộng × số kênh = 100 × 200 × 3 = 60.000.'],
  [`Về mặt dữ liệu, một video là:`, ['Một ảnh duy nhất', 'Một chuỗi các ảnh (khung hình) theo thời gian, có thể kèm âm thanh', 'Một bảng số liệu', 'Một đoạn văn bản'], 'B', 'Vì vậy video nặng hơn ảnh rất nhiều và có thêm chiều thời gian.'],
  [`Đám mây điểm (point cloud) là dạng dữ liệu:`, ['Văn bản', 'Tập hợp các điểm có tọa độ (x, y, z) mô tả hình dạng 3D', 'Âm thanh', 'Bảng quan hệ'], 'B', 'Thường thu từ cảm biến LiDAR, dùng cho xe tự lái và robot.'],
  [`Để huấn luyện model PHÁT HIỆN VẬT THỂ trong ảnh, người gán nhãn cần tạo loại nhãn nào?`, ['Một nhãn lớp cho cả ảnh', 'Khung bao (bounding box) quanh từng vật thể kèm tên lớp', 'Bản chép lời', 'Điểm cảm xúc'], 'B', 'Phân loại ảnh chỉ cần một nhãn; phát hiện vật thể cần vị trí; phân đoạn cần mặt nạ từng điểm ảnh.'],
  [`Hai người gán nhãn cho cùng một bộ dữ liệu nhưng kết quả khác nhau rất nhiều. Nguyên nhân có khả năng nhất và cách xử lý là:`, ['Dữ liệu quá ít; thu thêm', 'Hướng dẫn gán nhãn chưa rõ; làm rõ hướng dẫn, bổ sung ví dụ ca khó rồi gán lại', 'Model quá nhỏ; đổi model', 'Không cần xử lý'], 'B', 'Mức đồng thuận giữa những người gán nhãn thấp là dấu hiệu định nghĩa nhãn mập mờ.'],
  [`Câu "rác vào, rác ra" trong AI nghĩa là:`, ['Model lớn thì luôn tốt', 'Dữ liệu kém chất lượng thì model cho kết quả kém, dù thuật toán tốt đến đâu', 'Phải xóa dữ liệu sau khi dùng', 'Dữ liệu càng nhiều càng tốt'], 'B', 'Nhãn sai và dữ liệu lệch được model học lại nguyên vẹn.'],
  [`Vì sao cần đánh phiên bản (versioning) cho dữ liệu huấn luyện?`, ['Để dữ liệu nhẹ hơn', 'Để biết model nào được huấn luyện trên bản dữ liệu nào và tái lập được kết quả', 'Để mã hóa dữ liệu', 'Để tăng độ chính xác'], 'B', 'Dữ liệu thay đổi thì model thay đổi, dù code giữ nguyên.'],
  [`Active learning trong gán nhãn là:`, ['Gán nhãn ngẫu nhiên toàn bộ dữ liệu', 'Ưu tiên gán nhãn những mẫu mà model đang phân vân nhất để tiết kiệm công', 'Không cần người gán nhãn', 'Chỉ gán nhãn dữ liệu dễ'], 'B', 'Các mẫu model đã chắc chắn thì gán thêm ít giúp ích.'],
  [`Bộ dữ liệu khuôn mặt chủ yếu gồm người ở một độ tuổi và một vùng. Rủi ro lớn nhất là:`, ['Model chạy chậm', 'Dữ liệu không đại diện nên model hoạt động kém với các nhóm người còn lại', 'Dữ liệu quá sạch', 'Không có rủi ro'], 'B', 'Tính đại diện là một tiêu chí chất lượng dữ liệu, và liên quan trực tiếp tới công bằng.'],
]);

// ======================= C8.4 LLM engineering =======================
addTS('C', 'ts.llm-eng', [
  [`Trong lời gọi API của LLM, thông điệp có vai trò §system§ dùng để:`, ['Chứa câu trả lời của model', 'Đặt chỉ dẫn chung cho cả hội thoại: vai trò, giọng điệu, giới hạn', 'Lưu mật khẩu', 'Chứa câu hỏi của người dùng'], 'B', 'Câu hỏi của người dùng nằm ở vai trò §user§, câu trả lời ở §assistant§.'],
  [`Tác vụ trích xuất thông tin cần kết quả ổn định, lặp lại được. Nên đặt §temperature§ thế nào?`, ['Cao (gần 1 trở lên)', 'Thấp (gần 0)', 'Không ảnh hưởng', 'Âm'], 'B', 'Temperature thấp cho kết quả nhất quán; cao thì đa dạng, hợp với sáng tác.'],
  [`API của LLM không tự nhớ hội thoại trước đó. Để chatbot "nhớ" ngữ cảnh, ứng dụng phải:`, ['Tăng temperature', 'Gửi lại lịch sử hội thoại (hoặc bản tóm tắt) trong mỗi lần gọi', 'Fine-tune sau mỗi câu', 'Không làm được'], 'B', 'Vì vậy hội thoại càng dài càng tốn token và có thể chạm giới hạn context window.'],
  [`Một prompt template tốt KHÔNG cần có thành phần nào?`, ['Nhiệm vụ rõ ràng', 'Định dạng đầu ra mong muốn', 'Lời đe dọa model', 'Ví dụ mẫu'], 'C', 'Sáu phần nên có: vai trò, nhiệm vụ, ngữ cảnh, ví dụ, định dạng, ràng buộc.'],
  [`Lợi ích chính của việc có "thư viện prompt" dùng chung trong nhóm là:`, ['Model chạy nhanh hơn', 'Tái sử dụng các prompt đã thử nghiệm, kết quả nhất quán và có phiên bản để cải tiến', 'Không cần model nữa', 'Giảm số người dùng'], 'B', 'Mỗi template nên có tên, mục đích, phiên bản và ví dụ đầu vào, đầu ra.'],
  [`Kết quả của LLM sẽ được một chương trình khác đọc tự động. Cách làm an toàn nhất là:`, ['Để model trả lời tự do', 'Yêu cầu trả về JSON theo khuôn cố định và kiểm tra hợp lệ trước khi dùng', 'Chỉ đọc 10 ký tự đầu', 'Tăng max_tokens'], 'B', 'Sai định dạng hoặc thiếu trường thì thử lại hoặc chuyển người xử lý.'],
  [`Sau khi sửa prompt, làm sao biết ứng dụng tốt lên hay tệ đi?`, ['Thử 2–3 câu bằng tay', 'Chạy lại toàn bộ bộ đánh giá cố định và so sánh kết quả với bản trước', 'Hỏi model xem nó có tự tin không', 'Không cần kiểm tra'], 'B', 'Bộ đánh giá gồm nhiều đầu vào tiêu biểu kèm kết quả mong đợi; chạy lại sau mỗi thay đổi.'],
  [`Nên thử các cách cải thiện ứng dụng LLM theo thứ tự nào?`, ['Fine-tuning → RAG → sửa prompt', 'Sửa prompt → RAG → fine-tuning', 'Luôn fine-tuning trước', 'Đổi sang model lớn nhất'], 'B', 'Đi từ rẻ và nhanh tới đắt và chậm. Fine-tuning chỉ khi cần đổi hành vi và đã có nhiều ví dụ chất lượng.'],
  [`LoRA là kỹ thuật:`, ['Tăng kích thước context window', 'Fine-tuning tiết kiệm: giữ nguyên model gốc và chỉ huấn luyện thêm một phần nhỏ tham số', 'Nén ảnh', 'Tìm kiếm vector'], 'B', 'Rẻ và nhanh hơn nhiều so với cập nhật toàn bộ trọng số.'],
  [`Trong hệ multi-agent kiểu "điều phối – thực thi":`, ['Mọi agent làm cùng một việc', 'Một agent chia việc cho các agent chuyên biệt rồi tổng hợp kết quả', 'Không có agent nào dùng LLM', 'Các agent không trao đổi với nhau'], 'B', 'Các mô hình phối hợp khác: dây chuyền (nối tiếp), phản biện (một làm, một soát).'],
  [`Nhược điểm chính của multi-agent so với một lần gọi LLM là:`, ['Không dùng được công cụ', 'Tốn token và thời gian hơn, lỗi dễ lan giữa các agent, khó debug', 'Không trả lời được tiếng Việt', 'Luôn kém chính xác hơn'], 'B', 'Chỉ dùng khi việc thật sự cần nhiều vai trò; bắt đầu từ cách đơn giản nhất.'],
  [`Công cụ no-code/low-code phù hợp nhất cho việc nào?`, ['Xây hệ thống lõi cần tùy biến sâu', 'Thử nhanh ý tưởng và tự động hóa các bước lặp lại mà không cần viết nhiều code', 'Huấn luyện model từ đầu', 'Thay thế hoàn toàn đội kỹ thuật'], 'B', 'Giới hạn: khó tùy biến, khó kiểm thử và quản lý phiên bản, phụ thuộc nền tảng.'],
]);

// ======================= C9.2 AI Business & Product =======================
addTS('C', 'ts.ai-business', [
  [`Trước khi chọn model cho một dự án AI, việc đầu tiên nên làm là:`, ['Thuê thật nhiều GPU', 'Làm rõ vấn đề kinh doanh, ai gặp vấn đề và đo thành công bằng chỉ số nào', 'Thu thập mọi dữ liệu có thể', 'Viết bài quảng bá'], 'B', 'Không rõ bài toán và thước đo thì không biết thế nào là thành công.'],
  [`Trường hợp nào KHÔNG nên dùng AI?`, ['Quy tắc xử lý rất nhiều và khó viết ra hết', 'Vài quy tắc đơn giản đã giải quyết tốt và sai sót không được phép xảy ra', 'Có nhiều dữ liệu lịch sử đã gán nhãn', 'Chấp nhận được việc thỉnh thoảng sai'], 'B', 'AI luôn có xác suất sai. Bài toán giải được bằng quy tắc rõ ràng thì quy tắc rẻ và chắc hơn.'],
  [`Một hệ thống AI tiết kiệm 400 giờ công mỗi tháng (100 nghìn đồng/giờ), chi phí vận hành 10 triệu đồng/tháng. ROI hàng tháng là:`, ['75%', '300%', '400%', '30%'], 'B', 'Lợi ích 40 triệu; ROI = (40 − 10)/10 = 3 = 300%.'],
  [`"Tính khả thi về dữ liệu" của một dự án AI trả lời câu hỏi nào?`, ['Dự án có lãi không', 'Có đủ dữ liệu phù hợp, đủ chất lượng và được phép dùng không', 'Giao diện có đẹp không', 'Đối thủ có làm chưa'], 'B', 'Năm khía cạnh khả thi: dữ liệu, kỹ thuật, kinh tế, vận hành, pháp lý và đạo đức.'],
  [`MVP (sản phẩm khả dụng tối thiểu) là:`, ['Sản phẩm hoàn chỉnh với mọi tính năng', 'Phiên bản nhỏ nhất đủ để người dùng thật dùng thử và cho phản hồi', 'Bản trình chiếu ý tưởng', 'Model lớn nhất có thể huấn luyện'], 'B', 'Mục đích là học từ người dùng thật càng sớm càng tốt.'],
  [`Model mới có F1 trên bộ kiểm tra cao hơn model cũ. Để biết nó có làm SẢN PHẨM tốt hơn không, cần:`, ['Không cần gì thêm', 'Đo trên người dùng thật bằng A/B test với chỉ số sản phẩm và kinh doanh', 'Tăng kích thước model', 'Hỏi ý kiến đội phát triển'], 'B', 'Chỉ số mô hình tốt hơn chưa chắc dẫn tới trải nghiệm hay doanh thu tốt hơn.'],
  [`Khi nào nên dùng dịch vụ AI có sẵn (mua) thay vì tự xây?`, ['Khi đó là lợi thế cạnh tranh cốt lõi của công ty', 'Khi bài toán phổ biến, cần nhanh và công ty chưa có đội chuyên sâu', 'Khi dữ liệu tuyệt mật không được ra ngoài', 'Khi muốn kiểm soát toàn bộ hệ thống'], 'B', 'Tự xây khi đó là năng lực cốt lõi, dữ liệu quá nhạy cảm, hoặc quy mô đủ lớn để tự làm rẻ hơn.'],
  [`Chỉ số nào là chỉ số KINH DOANH (không phải chỉ số mô hình)?`, ['Precision', 'Recall', 'Chi phí xử lý mỗi yêu cầu hỗ trợ', 'Loss trên tập validation'], 'C', 'Ba tầng: chỉ số mô hình, chỉ số sản phẩm, chỉ số kinh doanh. Thêm chỉ số an toàn không được xấu đi.'],
  [`Có hai ý tưởng: A tác động lớn, công sức nhỏ; B tác động nhỏ, công sức lớn. Nên:`, ['Làm B trước vì khó hơn', 'Làm A trước', 'Làm cả hai cùng lúc', 'Không làm cái nào'], 'B', 'Xếp ưu tiên theo tác động, độ chắc chắn và công sức.'],
  [`Vì sao dự án AI có nhiều bất định hơn dự án phần mềm thông thường?`, ['Vì lập trình viên AI ít kinh nghiệm hơn', 'Vì chưa chắc dữ liệu cho phép đạt chất lượng mong muốn, phải thử mới biết', 'Vì AI không cần kiểm thử', 'Vì không có thời hạn'], 'B', 'Do đó cần baseline, MVP và tiêu chí thành công đặt ra từ đầu.'],
]);

addOpen('C', 'ts.ai-business-essay', 'essay', 8, [
  [`Trưởng phòng kinh doanh đề xuất: "Dùng AI dự đoán khách hàng nào sắp rời bỏ dịch vụ để gọi điện giữ chân." Hãy đánh giá đề xuất này: có nên làm không, cần những điều kiện gì, và thử nghiệm ra sao.`,
   `1. Bài toán và thước đo: khách hàng rời bỏ gây mất doanh thu. Thước đo: tỉ lệ rời bỏ hàng tháng, doanh thu giữ lại được, chi phí mỗi cuộc gọi giữ chân.
2. Có cần AI không: nếu vài quy tắc đơn giản (không dùng dịch vụ 30 ngày, vừa khiếu nại) đã bắt được phần lớn thì dùng quy tắc làm baseline. AI đáng thử nếu dấu hiệu phức tạp và có dữ liệu lịch sử.
3. Khả thi: (dữ liệu) có lịch sử sử dụng, thanh toán, khiếu nại và biết ai đã rời bỏ không, có được phép dùng không; (kỹ thuật) phân loại nhị phân, dữ liệu lệch lớp, dùng precision/recall; (kinh tế) lợi ích giữ được một khách so với chi phí gọi; (vận hành) đội chăm sóc có đủ người gọi không; (pháp lý) dùng dữ liệu đúng mục đích.
4. Chi phí và lợi ích: ước lượng bằng số, ví dụ giữ thêm 50 khách/tháng × giá trị mỗi khách, trừ chi phí gọi và vận hành; tính cả chi phí khi dự đoán nhầm (gọi làm phiền khách không định rời đi).
5. Thử nghiệm: xây MVP với model đơn giản, chia khách bị dự đoán rời bỏ thành nhóm được gọi và nhóm đối chứng không gọi, so sánh tỉ lệ ở lại sau 1–2 tháng.
6. Kết luận: nên thử ở quy mô nhỏ nếu có dữ liệu; mở rộng khi nhóm được gọi ở lại nhiều hơn rõ rệt và lợi ích vượt chi phí.`,
   ['Nêu rõ bài toán kinh doanh và chỉ số đo.', 'Có so sánh với phương án không dùng AI (quy tắc/baseline).', 'Xét tính khả thi về dữ liệu và ít nhất một khía cạnh khác.', 'Ước lượng lợi ích so với chi phí, có tính tới chi phí khi dự đoán sai.', 'Đề xuất thử nghiệm nhỏ có nhóm đối chứng.', 'Có kết luận kèm điều kiện.'],
   'Đi theo khung: bài toán → có cần AI không → khả thi → chi phí/lợi ích → cách thử → kết luận.'],
  [`Công ty có ngân sách cho đúng một dự án AI trong quý này. Có ba đề xuất: (A) chatbot trả lời câu hỏi thường gặp cho khách hàng; (B) model dự báo doanh thu 5 năm tới; (C) hệ thống tự động duyệt hợp đồng pháp lý không cần người xem lại. Hãy chọn một đề xuất và giải thích.`,
   `Chọn (A).
(A) Chatbot FAQ: bài toán rõ, có sẵn tài liệu và lịch sử câu hỏi, dùng được RAG, đo được ngay (tỉ lệ câu hỏi giải quyết tự động, thời gian chờ), rủi ro kiểm soát được bằng cách chỉ trả lời từ tài liệu đã duyệt và chuyển người với yêu cầu phức tạp. Tác động lớn, công sức vừa phải, làm MVP được trong vài tuần.
(B) Dự báo 5 năm: quá xa, dữ liệu lịch sử ít và môi trường thay đổi, không kiểm chứng được trong quý; tác động thực tế không rõ.
(C) Tự động duyệt hợp đồng không cần người: rủi ro pháp lý và tài chính cao, sai một lần là thiệt hại lớn. Chỉ chấp nhận được nếu AI hỗ trợ đánh dấu điều khoản rủi ro và luật sư quyết định; khi đó có thể là dự án tiếp theo.
Tiêu chí dùng để chọn: tác động, độ chắc chắn và tính khả thi, công sức, mức rủi ro.`,
   ['Chọn một phương án rõ ràng.', 'Nêu tiêu chí so sánh (tác động, khả thi, công sức, rủi ro).', 'Giải thích điểm mạnh của phương án được chọn, có nhắc cách đo.', 'Chỉ ra vấn đề của hai phương án còn lại.', 'Nhận ra rủi ro của việc tự động hoàn toàn quyết định pháp lý và đề xuất có người duyệt.']],
]);

// ======================= C10.2 Hạ tầng dữ liệu & MLOps =======================
addTS('C', 'ts.infra', [
  [`Data pipeline là:`, ['Một loại model', 'Dây chuyền tự động đưa dữ liệu từ nguồn tới nơi dùng, qua các bước lấy, làm sạch, biến đổi, lưu', 'Một biểu đồ', 'Một ngôn ngữ lập trình'], 'B', 'Pipeline tốt chạy theo lịch, kiểm tra chất lượng từng bước và cảnh báo khi lỗi.'],
  [`ETL khác ELT ở điểm nào?`, ['ETL không lưu dữ liệu', 'ETL biến đổi dữ liệu TRƯỚC khi nạp vào kho; ELT nạp dữ liệu thô vào kho rồi mới biến đổi', 'ELT chỉ dùng cho ảnh', 'Hai thứ giống hệt nhau'], 'B', 'E = lấy, T = biến đổi, L = nạp. Thứ tự chữ cái chính là thứ tự bước.'],
  [`Phát hiện giao dịch gian lận ngay lúc khách đang thanh toán cần kiểu xử lý nào?`, ['Theo lô mỗi đêm', 'Theo luồng (streaming), xử lý ngay khi dữ liệu tới', 'Thủ công', 'Hàng tháng'], 'B', 'Xử lý theo lô hợp với báo cáo định kỳ và huấn luyện lại model.'],
  [`Data warehouse phù hợp nhất để:`, ['Lưu video thô', 'Lưu dữ liệu có cấu trúc đã làm sạch, phục vụ truy vấn SQL và báo cáo', 'Huấn luyện mô hình ảnh', 'Lưu log chưa xử lý'], 'B', 'Warehouse yêu cầu khuôn dữ liệu định sẵn và mạnh về truy vấn phân tích.'],
  [`Data lake khác data warehouse ở chỗ:`, ['Data lake chỉ lưu bảng', 'Data lake lưu được mọi loại dữ liệu ở dạng thô với chi phí thấp', 'Data lake luôn nhanh hơn', 'Data lake không lưu được ảnh'], 'B', 'Đổi lại, không quản lý tốt thì data lake dễ thành "đầm lầy dữ liệu".'],
  [`Lakehouse là:`, ['Một loại GPU', 'Kiến trúc kết hợp lưu trữ rẻ, linh hoạt của data lake với khả năng quản lý và truy vấn của data warehouse', 'Một thư viện Python để vẽ biểu đồ', 'Một thuật toán phân cụm'], 'B', 'Mục tiêu: một kho dùng được cho cả phân tích SQL lẫn học máy.'],
  [`Dữ liệu tổng hợp (synthetic data) hữu ích nhất khi:`, ['Đã có rất nhiều dữ liệu thật chất lượng cao', 'Dữ liệu thật hiếm, đắt hoặc quá nhạy cảm để dùng trực tiếp', 'Muốn thay toàn bộ dữ liệu thật', 'Không cần đánh giá model'], 'B', 'Ví dụ: tình huống tai nạn hiếm gặp cho xe tự lái, hồ sơ y tế.'],
  [`Rủi ro chính khi huấn luyện chỉ bằng dữ liệu tổng hợp là:`, ['Tốn quá ít bộ nhớ', 'Dữ liệu không giống thực tế nên model kém khi gặp dữ liệu thật', 'Model huấn luyện quá nhanh', 'Không có rủi ro'], 'B', 'Luôn đánh giá model trên dữ liệu thật.'],
  [`Container (như Docker) giải quyết vấn đề gì?`, ['Tăng độ chính xác của model', 'Đóng gói code cùng môi trường để chạy giống nhau trên mọi máy', 'Gán nhãn dữ liệu', 'Giảm số tham số'], 'B', 'Tránh tình trạng "chạy được trên máy tôi nhưng không chạy trên máy chủ".'],
  [`Kho model (model registry) dùng để:`, ['Lưu dữ liệu thô', 'Lưu các phiên bản model kèm thông tin và trạng thái, để triển khai và quay lại bản cũ khi cần', 'Viết prompt', 'Vẽ biểu đồ'], 'B', 'Là một phần của MLOps cùng với theo dõi thí nghiệm, CI/CD và giám sát.'],
  [`Điểm khác biệt của hệ thống AI so với phần mềm thông thường về mặt vận hành là:`, ['Không cần kiểm thử', 'Hành vi có thể thay đổi khi dữ liệu thay đổi, dù không ai sửa code', 'Không cần máy chủ', 'Không bao giờ lỗi'], 'B', 'Ba thứ cùng thay đổi: code, dữ liệu và model. Vì vậy phải đánh phiên bản và giám sát cả ba.'],
]);

// ======================= D1.3 Suy luận & bài tập logic =======================
addTS('D', 'ts.reasoning', [
  [`"Mọi hệ thống AI đều cần dữ liệu. Chatbot này là một hệ thống AI. Vậy chatbot này cần dữ liệu." Đây là kiểu suy luận nào?`, ['Quy nạp', 'Suy diễn', 'Phỏng đoán', 'Ngụy biện'], 'B', 'Đi từ quy tắc chung tới trường hợp cụ thể; kết luận chắc chắn đúng nếu tiền đề đúng.'],
  [`"Model đã chạy đúng trong 500 lần thử, vậy lần tới nó cũng sẽ chạy đúng." Nhận xét đúng là:`, ['Suy diễn, kết luận chắc chắn đúng', 'Quy nạp, kết luận có khả năng đúng nhưng không chắc chắn', 'Lập luận vòng tròn', 'Kết luận chắc chắn sai'], 'B', 'Quy nạp đi từ nhiều quan sát tới quy tắc chung. Machine learning về bản chất là quy nạp.'],
  [`"Có kết nối mạng" là điều kiện gì để "gọi được API trực tuyến"?`, ['Điều kiện đủ', 'Điều kiện cần nhưng chưa đủ', 'Không liên quan', 'Vừa cần vừa đủ'], 'B', 'Không có mạng thì không gọi được (cần). Nhưng có mạng chưa chắc gọi được: còn cần khóa hợp lệ, máy chủ hoạt động.'],
  [`An, Bình, Chi, Dũng xếp thành một hàng. Dũng đứng đầu. An đứng trước Bình. Chi đứng ngay sau Bình. Ai đứng cuối hàng?`, ['An', 'Bình', 'Chi', 'Dũng'], 'C', 'Dũng ở vị trí 1; Bình và Chi liền nhau theo thứ tự đó; An trước Bình → Dũng, An, Bình, Chi.'],
  [`Bốn bạn thi chạy. Lan về trước Mai. Nam về sau Mai. Oanh về trước Lan. Ai về đích thứ hai?`, ['Lan', 'Mai', 'Nam', 'Oanh'], 'A', 'Oanh trước Lan, Lan trước Mai, Mai trước Nam → Oanh, Lan, Mai, Nam.'],
  [`Trong ba người A, B, C có đúng một người nói thật. A nói: "B nói dối." B nói: "C nói dối." C nói: "A và B đều nói dối." Ai nói thật?`, ['A', 'B', 'C', 'Không xác định được'], 'B', 'Thử từng trường hợp: nếu A thật thì C cũng thật (2 người); nếu C thật thì B cũng thật (mâu thuẫn). Chỉ trường hợp B nói thật là không mâu thuẫn.'],
  [`Cho biết: "Tất cả kỹ sư trong nhóm đều biết Python" và "Một số người biết Python cũng biết SQL". Kết luận nào CHẮC CHẮN đúng?`, ['Mọi kỹ sư trong nhóm đều biết SQL', 'Một số kỹ sư trong nhóm biết SQL', 'Không kết luận nào trong ba kết luận còn lại chắc chắn đúng', 'Không kỹ sư nào biết SQL'], 'C', 'Những người biết cả Python lẫn SQL có thể nằm ngoài nhóm kỹ sư. Hai dữ kiện không đủ để kết luận về kỹ sư và SQL.'],
  [`"Tất cả A là B. Tất cả B là C." Kết luận nào chắc chắn đúng?`, ['Tất cả C là A', 'Tất cả A là C', 'Không có A nào là C', 'Một số C không là B'], 'B', 'Tính bắc cầu: A nằm trong B, B nằm trong C nên A nằm trong C. Chiều ngược lại thì không chắc.'],
  [`Có 3 hộp: một hộp chỉ có táo, một hộp chỉ có cam, một hộp có cả hai. Cả 3 nhãn "Táo", "Cam", "Táo và Cam" đều bị dán sai hộp. Bạn được lấy 1 quả từ đúng 1 hộp để xác định cả ba. Nên lấy từ hộp nào?`, ['Hộp dán nhãn "Táo"', 'Hộp dán nhãn "Cam"', 'Hộp dán nhãn "Táo và Cam"', 'Hộp nào cũng được'], 'C', 'Hộp này chắc chắn KHÔNG chứa cả hai, nên quả lấy ra cho biết ngay nó chứa gì. Hai hộp còn lại suy ra được vì mọi nhãn đều sai.'],
]);

// ======================= D4.2 Đạo đức AI mở rộng =======================
addTS('D', 'ts.ethics-ext', [
  [`Bạn tìm được một bộ ảnh trên mạng rất hợp để huấn luyện model thương mại. Việc cần làm trước tiên là:`, ['Tải về dùng ngay vì ảnh công khai', 'Kiểm tra giấy phép và điều khoản sử dụng xem có được phép dùng cho mục đích này không', 'Xóa thông tin tác giả rồi dùng', 'Chỉ cần ghi nguồn là đủ trong mọi trường hợp'], 'B', 'Công khai không có nghĩa là được phép dùng, nhất là cho mục đích thương mại.'],
  [`Để nhờ AI sửa lỗi nhanh, một đồng nghiệp định dán mã nguồn nội bộ và dữ liệu khách hàng vào một công cụ AI miễn phí bên ngoài. Bạn nên:`, ['Làm theo cho nhanh', 'Nhắc rằng việc này có thể làm lộ bí mật và dữ liệu khách hàng; dùng công cụ công ty cho phép hoặc loại bỏ phần nhạy cảm', 'Im lặng', 'Báo với khách hàng ngay'], 'B', 'Thông tin gửi ra dịch vụ ngoài có thể bị lưu lại. Phải theo quy định của công ty.'],
  [`Bạn dùng AI viết phần lớn một báo cáo công việc, trong đó có vài con số bạn chưa kiểm tra. Cách làm đúng là:`, ['Nộp luôn vì AI thường đúng', 'Kiểm chứng số liệu và nội dung, chịu trách nhiệm về báo cáo, và nói rõ việc dùng AI nếu quy định yêu cầu', 'Ghi "AI viết" để khỏi chịu trách nhiệm', 'Xóa hết số liệu'], 'B', 'AI là công cụ; người dùng là người chịu trách nhiệm về sản phẩm cuối cùng.'],
  [`Deepfake là:`, ['Một loại cơ sở dữ liệu', 'Ảnh, giọng nói hoặc video giả do AI tạo ra, trông như thật', 'Một thuật toán mã hóa', 'Một kỹ thuật nén model'], 'B', 'Thường bị dùng để lừa đảo, mạo danh, bôi nhọ.'],
  [`Khách hàng yêu cầu làm tính năng tạo video quảng cáo có giọng nói và hình ảnh của một người nổi tiếng mà không xin phép người đó. Phản ứng phù hợp là:`, ['Làm vì khách hàng trả tiền', 'Từ chối hoặc yêu cầu có sự đồng ý của người đó; nội dung do AI tạo cần được gắn nhãn rõ', 'Làm nhưng không ghi tên mình', 'Làm bản chất lượng thấp'], 'B', 'Giả mạo người thật khi chưa được đồng ý là vi phạm quyền của họ và có thể gây hại.'],
  [`Kết quả đánh giá model kém hơn kỳ vọng ngay trước buổi báo cáo. Hành động đúng là:`, ['Chỉ trình bày các chỉ số đẹp', 'Báo cáo trung thực kết quả, nêu nguyên nhân có thể và kế hoạch cải thiện', 'Sửa lại số liệu cho đạt', 'Hủy buổi báo cáo'], 'B', 'Chọn lọc hay sửa số liệu là vi phạm liêm chính và dẫn tới quyết định sai.'],
  [`Xu hướng quản lý AI "theo mức rủi ro" nghĩa là:`, ['Mọi ứng dụng AI bị cấm', 'Ứng dụng càng ảnh hưởng lớn tới con người (y tế, tuyển dụng, tín dụng) thì yêu cầu về dữ liệu, minh bạch và giám sát càng chặt', 'Chỉ quản lý các công ty lớn', 'Chỉ quản lý chatbot'], 'B', 'Rủi ro không chấp nhận được thì cấm; rủi ro cao thì yêu cầu chặt; rủi ro thấp chủ yếu cần minh bạch.'],
  [`Về tác động môi trường, lựa chọn có trách nhiệm khi xây ứng dụng AI là:`, ['Luôn dùng model lớn nhất', 'Chọn model vừa đủ cho bài toán và tránh tính toán lãng phí', 'Không quan tâm vì không đo được', 'Chỉ chạy model vào ban đêm'], 'B', 'Huấn luyện và chạy model lớn tốn nhiều điện và nước.'],
  [`Một nhân viên tin hoàn toàn vào gợi ý của AI và không còn tự kiểm tra. Rủi ro là:`, ['Không có rủi ro', 'Phụ thuộc quá mức: lỗi của AI không được phát hiện và kỹ năng của con người mai một', 'AI sẽ chạy chậm hơn', 'Tốn thêm chi phí token'], 'B', 'Thiết kế tốt giữ con người trong vai trò kiểm tra, nhất là với quyết định quan trọng.'],
]);

// ======================= D5.2 Làm việc nhóm & tự quản lý =======================
addTS('D', 'ts.teamwork', [
  [`Theo cách phân loại khẩn cấp và quan trọng, việc "viết test và cải tiến quy trình" (quan trọng nhưng không khẩn cấp) nên:`, ['Bỏ qua', 'Lên lịch cụ thể để làm', 'Làm ngay lập tức, bỏ mọi việc khác', 'Giao hết cho người khác'], 'B', 'Nhóm việc này dễ bị trì hoãn mãi nếu không được xếp lịch, dù nó quyết định chất lượng lâu dài.'],
  [`Giữa tuần bạn nhận ra mình sẽ không kịp hạn chót vào thứ Sáu. Bạn nên:`, ['Cố làm và đến thứ Sáu mới báo', 'Báo ngay cho người phụ trách, nêu tiến độ, nguyên nhân và đề xuất phương án', 'Nộp bản làm dở mà không nói gì', 'Nhờ đồng nghiệp làm thay mà không báo'], 'B', 'Báo sớm để nhóm còn thời gian điều chỉnh.'],
  [`Cách cho phản hồi hiệu quả nhất về một buổi thuyết trình chưa tốt là:`, ['"Bạn thuyết trình kém quá."', '"Trong buổi hôm qua, phần kết quả không có biểu đồ nên người nghe khó theo dõi. Lần sau thêm một biểu đồ tóm tắt nhé."', 'Không nói gì', 'Nói với người khác về việc đó'], 'B', 'Nêu tình huống cụ thể, hành vi quan sát được, tác động, kèm đề xuất. Nói về việc làm, không nói về con người.'],
  [`Quản lý góp ý rằng báo cáo của bạn khó hiểu. Phản ứng phù hợp nhất là:`, ['Giải thích ngay vì sao mình đúng', 'Lắng nghe, hỏi rõ chỗ nào khó hiểu, cảm ơn và nêu cách mình sẽ sửa', 'Im lặng và bỏ qua', 'Nói rằng người khác cũng viết như vậy'], 'B', 'Nhận phản hồi: nghe hết, hỏi cho rõ, không vội bào chữa, rồi hành động.'],
  [`Hai thành viên tranh cãi gay gắt về việc chọn thư viện. Là người điều phối, bạn nên:`, ['Chọn theo người thâm niên hơn', 'Đưa cuộc trao đổi về mục tiêu chung, thống nhất tiêu chí và làm một thử nghiệm nhỏ để quyết định', 'Để họ tự giải quyết', 'Bỏ cả hai phương án'], 'B', 'Tách vấn đề khỏi con người và dùng tiêu chí khách quan.'],
  [`Nhóm đã thống nhất phương án A dù bạn ủng hộ phương án B. Bạn nên:`, ['Làm theo B một cách âm thầm', 'Cùng thực hiện A nghiêm túc; nếu có dữ liệu mới cho thấy A có vấn đề thì nêu ra', 'Làm chậm lại để chứng minh A sai', 'Rời nhóm'], 'B', 'Đã góp ý và nhóm đã quyết thì cam kết thực hiện.'],
  [`Bạn bị vướng một lỗi kỹ thuật. Cách làm hợp lý là:`, ['Hỏi ngay mà chưa thử gì', 'Tự tìm hiểu trong một khoảng thời gian hợp lý, rồi hỏi kèm mô tả những gì đã thử', 'Vật lộn nhiều ngày không nói với ai', 'Bỏ việc đó'], 'B', 'Cân bằng giữa tự lực và không lãng phí thời gian của cả nhóm.'],
  [`Một đồng nghiệp mới liên tục hỏi bạn những câu cơ bản. Cách ứng xử tốt nhất là:`, ['Phớt lờ', 'Hướng dẫn, chỉ chỗ có tài liệu, và ghi lại câu trả lời để người sau dùng lại', 'Báo với quản lý rằng người đó kém', 'Làm hộ toàn bộ'], 'B', 'Chia sẻ kiến thức và viết tài liệu giúp cả nhóm, giảm việc lặp lại.'],
  [`Bạn được giao một công nghệ mình chưa từng dùng. Thái độ phù hợp là:`, ['Giả vờ đã biết', 'Nói rõ mình chưa biết, đề xuất kế hoạch tự học và mốc thời gian', 'Từ chối nhận việc', 'Chờ người khác làm'], 'B', 'Trung thực về giới hạn của mình và chủ động học là điều lĩnh vực AI đòi hỏi.'],
]);

// ---------- C8.2: các mắt xích của pipeline RAG (bổ sung 13/10 theo dàn ý video người dùng gửi) ----------
addTS('C', 'ts.rag-pipeline', [
  [`"Knowledge cutoff" của một LLM là gì?`, ['Giới hạn số token mỗi lần hỏi', 'Thời điểm mà dữ liệu huấn luyện của mô hình dừng lại', 'Số lượng file tối đa được đính kèm', 'Thời gian chờ tối đa của một request'], 'B', 'Mô hình không biết các sự kiện xảy ra sau mốc dừng kiến thức, trừ khi được cung cấp thêm thông tin.'],
  [`Nhân viên hỏi chatbot công cộng: "Điều khoản phạt trong hợp đồng công ty tôi ký với khách hàng B là bao nhiêu?". Vì sao chatbot không thể trả lời đúng?`, ['Vì câu hỏi quá dài', 'Vì hợp đồng đó không nằm trong dữ liệu huấn luyện và cũng không có trên internet', 'Vì temperature đặt quá thấp', 'Vì chatbot không hiểu tiếng Việt'], 'B', 'Đây là dữ liệu riêng của công ty. Muốn trả lời được phải đưa tài liệu đó cho mô hình, và RAG tự động hóa việc này.'],
  [`Mô hình không có thông tin nhưng vẫn trả lời một con số nghe rất hợp lý mà sai. Hiện tượng này gọi là:`, ['Overfitting', 'Data drift', 'Hallucination', 'Data leakage'], 'C', 'Hallucination (ảo giác): không biết nhưng vẫn trả lời như thật. RAG giảm hiện tượng này bằng cách buộc trả lời theo tài liệu.'],
  [`Vì sao cách "đính kèm file vào mỗi câu hỏi" không thay thế được RAG trong một công ty?`, ['Vì LLM không đọc được file', 'Vì bất tiện, người hỏi thường không có đúng file, và số file đính kèm mỗi lượt bị giới hạn', 'Vì đính kèm file làm mô hình bị huấn luyện lại', 'Vì file đính kèm luôn bị công khai lên internet'], 'B', 'RAG nạp toàn bộ kho một lần từ trước, rồi tự tìm đoạn liên quan cho từng câu hỏi.'],
  [`Mục đích chính của bước chunking trong RAG là:`, ['Mã hóa tài liệu để bảo mật', 'Chia tài liệu dài thành đoạn nhỏ để tìm đúng đoạn chứa câu trả lời', 'Dịch tài liệu sang tiếng Anh', 'Huấn luyện lại LLM trên tài liệu'], 'B', 'Tài liệu dài đưa nguyên khối thì mô hình dễ bỏ sót chi tiết; chia nhỏ giúp truy xuất chính xác và prompt gọn hơn.'],
  [`Nhược điểm điển hình của việc chia chunk theo độ dài cố định (ví dụ cứ 1000 token cắt một lần) là:`, ['Không chạy được trên GPU', 'Có thể cắt ngang một ý đang trình bày dở', 'Làm mất toàn bộ dữ liệu', 'Bắt buộc phải fine-tune mô hình'], 'B', 'Cắt theo độ dài không quan tâm nội dung, nên một ý có thể bị tách ra hai đoạn.'],
  [`"Semantic chunking" chia đoạn dựa vào đâu?`, ['Số trang của file', 'Số token cố định', 'Sự thay đổi về nội dung, ý nghĩa của văn bản', 'Thứ tự bảng chữ cái'], 'C', 'Khi nội dung chuyển sang ý khác thì bắt đầu một chunk mới, nhờ đó mỗi chunk trọn một ý.'],
  [`Phát biểu nào về token là đúng?`, ['Một token luôn bằng đúng một từ', 'Một token có thể là một từ hoặc một phần của từ', 'Token là một trang tài liệu', 'Token là một vector embedding'], 'B', 'Token là đơn vị nhỏ nhất mô hình xử lý. "1 token ≈ 1 từ" chỉ là cách ước lượng cho dễ hình dung.'],
  [`Embedding model trong RAG làm việc gì?`, ['Sinh câu trả lời cuối cùng cho người dùng', 'Biến một đoạn dữ liệu thành vector số sao cho nội dung gần nghĩa thì vector gần nhau', 'Kiểm tra quyền truy cập của người dùng', 'Nén file PDF cho nhẹ'], 'B', 'Nhờ embedding, việc tìm đoạn liên quan trở thành phép so sánh khoảng cách giữa các vector.'],
  [`Một bệnh viện xây RAG trên hồ sơ bệnh án và quy định dữ liệu không được rời khỏi hệ thống. Nên chọn embedding model theo hướng nào?`, ['Gọi API của bên thứ ba cho nhanh', 'Tự chạy model trên máy chủ của bệnh viện', 'Không cần embedding', 'Đăng hồ sơ lên web để chatbot tự tìm'], 'B', 'Dùng API thì phải gửi dữ liệu cho bên thứ ba. Tự chạy tốn công hạ tầng và GPU nhưng kiểm soát được dữ liệu.'],
  [`Vì sao câu hỏi của người dùng phải được mã hóa bằng CÙNG embedding model đã dùng cho các chunk?`, ['Để tiết kiệm tiền', 'Để vector câu hỏi và vector chunk nằm trong cùng một không gian, so sánh được với nhau', 'Vì LLM yêu cầu như vậy', 'Để câu hỏi ngắn hơn'], 'B', 'Hai model khác nhau cho ra hai không gian vector khác nhau; khoảng cách giữa chúng không có ý nghĩa.'],
  [`Vector database trong RAG dùng để:`, ['Lưu các embedding và tìm nhanh những vector gần nhất với vector câu hỏi', 'Huấn luyện LLM', 'Lưu mật khẩu người dùng', 'Vẽ biểu đồ'], 'A', 'Đây là kho tìm kiếm của RAG: lưu, quản lý và truy xuất vector hiệu quả.'],
  [`Với cosine similarity, hai vector được coi là càng tương đồng khi:`, ['Góc giữa chúng càng lớn', 'Góc giữa chúng càng nhỏ', 'Chúng càng dài', 'Chúng có càng nhiều chiều'], 'B', 'Cosine similarity đo góc giữa hai vector: góc nhỏ thì giá trị gần 1, tức rất giống nhau.'],
  [`Câu hỏi có vector q = (1, 0). Chunk X có vector (3, 0), chunk Y có vector (0, 5). Theo cosine similarity, chunk nào liên quan hơn?`, ['Chunk X, vì cùng hướng với q (cosine = 1)', 'Chunk Y, vì vector dài hơn', 'Hai chunk như nhau', 'Không tính được'], 'A', 'cosine(q, X) = 3/(1×3) = 1; cosine(q, Y) = 0/(1×5) = 0. Cosine chỉ xét hướng, không xét độ dài.'],
  [`Sau khi tìm được các chunk liên quan nhất, hệ thống RAG làm gì với chúng?`, ['Xóa khỏi kho', 'Đưa vào prompt làm ngữ cảnh để LLM trả lời câu hỏi', 'Dùng để huấn luyện lại LLM', 'Gửi thẳng cho người dùng mà không qua LLM'], 'B', 'Prompt cuối = câu hỏi + các đoạn tìm được + chỉ dẫn. LLM tổng hợp câu trả lời từ đó.'],
  [`Công ty đổi sang một embedding model mới tốt hơn. Việc bắt buộc phải làm là:`, ['Không cần làm gì', 'Tạo lại embedding cho toàn bộ chunk trong kho bằng model mới', 'Chỉ cần đổi model cho câu hỏi', 'Xóa toàn bộ tài liệu gốc'], 'B', 'Vector cũ và vector mới không cùng không gian. Phải tạo lại embedding cho cả kho thì mới so sánh được với câu hỏi.'],
]);
