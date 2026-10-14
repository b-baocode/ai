// Câu tự soạn Module B — lấp chỗ trống: Python cơ bản, copy/deepcopy, chuỗi, Big-O, Pandas.
// Cú pháp: xem window.addTS trong data/questions-extra.js
addTS('B', 'py.basics', [
  [`Kết quả của code là gì?
~~~python
print(7 // 2, 7 % 2)
~~~`, ['3.5 1', '3 1', '3 0.5', '4 1'], 'B', '§//§ là chia lấy phần nguyên: 7 // 2 = 3. §%§ là chia lấy dư: 7 % 2 = 1.'],
  [`Trong Python 3, kết quả của §3 / 2§ là:`, ['1', '1.5', '2', 'Lỗi'], 'B', 'Phép §/§ luôn trả về số thực (float): 1.5. Muốn lấy phần nguyên thì dùng §//§.'],
  [`Kết quả của code là gì?
~~~python
print(2 ** 3 + 1)
~~~`, ['7', '64', '9', '6'], 'C', '§**§ là lũy thừa: 2 ** 3 = 8, cộng 1 được 9.'],
  [`Kết quả của code là gì?
~~~python
print('3' * 2)
~~~`, ['6', '33', 'Lỗi', '3 3'], 'B', 'Chuỗi nhân với số nguyên là lặp lại chuỗi: §\'3\' * 2§ = §\'33\'§.'],
  [`Đoạn code sau cho kết quả gì?
~~~python
print('5' + 2)
~~~`, ["'52'", '7', 'Lỗi TypeError', "'5 2'"], 'C', 'Không cộng được chuỗi với số. Muốn ra 7 phải ép kiểu: §int(\'5\') + 2§.'],
  [`Đoạn code in ra gì?
~~~python
x = 0
if x:
    print('A')
else:
    print('B')
~~~`, ['A', 'B', 'A rồi B', 'Lỗi'], 'B', 'Số 0, chuỗi rỗng §\'\'§, list rỗng §[]§, §None§ đều được coi là False trong §if§. Vì vậy in B.'],
  [`Kết quả của code là gì?
~~~python
name = 'AI'
print(f'Hello {name}!')
~~~`, ['Hello {name}!', 'Hello AI!', "Hello 'AI'!", 'Lỗi'], 'B', 'f-string thay §{name}§ bằng giá trị của biến.'],
  [`Kết quả của §print(10 > 5 and 3 > 4)§ là:`, ['True', 'False', '10', 'Lỗi'], 'B', '§and§ chỉ đúng khi cả hai vế đúng. 3 > 4 sai nên kết quả là False.'],
]);

addTS('B', 'py.loop', [
  [`Đoạn code in ra gì?
~~~python
for i in range(1, 10, 3):
    print(i, end=' ')
~~~`, ['1 4 7', '1 4 7 10', '1 3 6 9', '3 6 9'], 'A', '§range(start, stop, step)§: bắt đầu 1, bước 3, dừng TRƯỚC 10 → 1, 4, 7.'],
  [`Giá trị in ra là:
~~~python
n = 0
while n < 10:
    n += 3
print(n)
~~~`, ['9', '10', '12', '3'], 'C', 'Trace: n = 3, 6, 9 (vẫn < 10 nên lặp tiếp), 12 (không còn < 10 thì dừng). In 12.'],
  [`Đoạn code in ra những số nào?
~~~python
for i in range(5):
    if i == 3:
        break
    print(i)
~~~`, ['0 1 2', '0 1 2 3', '0 1 2 4', '3 4'], 'A', '§break§ thoát hẳn vòng lặp khi i == 3, nên chỉ in 0, 1, 2. Khác với §continue§ chỉ bỏ qua một vòng.'],
  [`Giá trị in ra là:
~~~python
total = 0
for i in range(3):
    for j in range(2):
        total += 1
print(total)
~~~`, ['5', '3', '2', '6'], 'D', 'Vòng ngoài chạy 3 lần, mỗi lần vòng trong chạy 2 lần: 3 × 2 = 6.'],
  [`Giá trị in ra là:
~~~python
s = 0
for x in [3, 1, 4]:
    s = s * 10 + x
print(s)
~~~`, ['8', '314', '413', '34'], 'B', 'Lập bảng: s = 0 → 3 → 31 → 314.'],
]);

addTS('B', 'py.list', [
  [`Kết quả của code là gì?
~~~python
a = [10, 20, 30, 40]
print(a[-1], a[1:3])
~~~`, ['40 [20, 30]', '40 [20, 30, 40]', '10 [10, 20]', '30 [20, 30]'], 'A', 'Chỉ số âm đếm từ cuối: a[-1] = 40. Slice §[1:3]§ lấy vị trí 1 và 2 (không lấy 3).'],
  [`Kết quả của code là gì?
~~~python
a = [1, 2]
a.append([3, 4])
print(len(a))
~~~`, ['4', '2', '3', 'Lỗi'], 'C', '§append§ thêm NGUYÊN list [3, 4] thành MỘT phần tử → [1, 2, [3, 4]], độ dài 3. Muốn thêm từng phần tử thì dùng §extend§.'],
  [`Kết quả của code là gì?
~~~python
a = [3, 1, 2]
b = a.sort()
print(b)
~~~`, ['[1, 2, 3]', '[3, 1, 2]', 'None', 'Lỗi'], 'C', '§list.sort()§ sắp xếp tại chỗ và trả về §None§. Muốn nhận list mới đã sắp xếp thì dùng §sorted(a)§.'],
  [`Kết quả của code là gì?
~~~python
a = [3, 1, 2]
b = sorted(a)
print(a, b)
~~~`, ['[1, 2, 3] [1, 2, 3]', '[3, 1, 2] [1, 2, 3]', '[3, 1, 2] None', '[1, 2, 3] None'], 'B', '§sorted()§ tạo list mới, không thay đổi list gốc.'],
  [`Kết quả của §print([1, 2, 3, 4, 5][::-1])§ là:`, ['[1, 2, 3, 4, 5]', '[5]', '[5, 4, 3, 2, 1]', '[1, 5]'], 'C', 'Slice với bước -1 đảo ngược list.'],
  [`Kết quả của code là gì?
~~~python
a = [1, 2, 3]
a.pop()
a.insert(0, 9)
print(a)
~~~`, ['[9, 1, 2]', '[9, 2, 3]', '[1, 2, 9]', '[9, 1, 2, 3]'], 'A', '§pop()§ không đối số xóa phần tử cuối → [1, 2]. §insert(0, 9)§ chèn 9 vào đầu → [9, 1, 2].'],
]);

addTS('B', 'py.dict-set', [
  [`Kết quả của §print(len(set([1, 2, 2, 3, 3, 3])))§ là:`, ['6', '3', '2', '1'], 'B', 'set chỉ giữ giá trị không trùng: {1, 2, 3} → 3 phần tử.'],
  [`Đoạn code sau cho kết quả gì?
~~~python
t = (1, 2, 3)
t[0] = 10
~~~`, ['t thành (10, 2, 3)', 'Lỗi TypeError', 't thành (10, 1, 2, 3)', 'Không có gì xảy ra'], 'B', 'tuple là bất biến (immutable): không gán lại phần tử được.'],
  [`Kết quả của code là gì?
~~~python
d = {'a': 1, 'b': 2}
print('a' in d, 1 in d)
~~~`, ['True True', 'True False', 'False True', 'False False'], 'B', 'Toán tử §in§ với dict kiểm tra KEY, không kiểm tra value. 1 là value nên False.'],
  [`Kết quả của code là gì?
~~~python
d = {'a': 1}
d['b'] = 2
d['a'] = 5
print(d)
~~~`, ["{'a': 1, 'b': 2}", "{'a': 5, 'b': 2}", "{'a': 1, 'a': 5, 'b': 2}", 'Lỗi'], 'B', 'Gán key mới thì thêm vào; gán key đã có thì ghi đè value. Key trong dict là duy nhất.'],
  [`Muốn duyệt đồng thời key và value của dict §d§, viết:`, ['§for k, v in d:§', '§for k, v in d.items():§', '§for k, v in d.keys():§', '§for k, v in d.values():§'], 'B', '§d.items()§ trả về các cặp (key, value).'],
]);

addTS('B', 'py.copy', [
  [`Kết quả của code là gì?
~~~python
a = [1, 2, 3]
b = a.copy()
b.append(4)
print(a)
~~~`, ['[1, 2, 3, 4]', '[1, 2, 3]', '[4]', 'Lỗi'], 'B', '§copy()§ tạo list mới, nên thêm vào b không ảnh hưởng a. So sánh với §b = a§: khi đó a và b là cùng một list.'],
  [`Kết quả của code là gì?
~~~python
import copy
a = [[1, 2], [3, 4]]
b = copy.copy(a)
b[0].append(9)
print(a)
~~~`, ['[[1, 2], [3, 4]]', '[[1, 2, 9], [3, 4]]', '[[1, 2], [3, 4], 9]', 'Lỗi'], 'B', 'Shallow copy chỉ sao chép lớp ngoài. Các list con bên trong vẫn dùng chung, nên sửa b[0] thì a[0] cũng đổi.'],
  [`Kết quả của code là gì?
~~~python
import copy
a = [[1, 2], [3, 4]]
b = copy.deepcopy(a)
b[0].append(9)
print(a)
~~~`, ['[[1, 2], [3, 4]]', '[[1, 2, 9], [3, 4]]', '[[9], [3, 4]]', 'Lỗi'], 'A', '§deepcopy§ sao chép cả các list con, nên a hoàn toàn độc lập với b.'],
  [`Kết quả của code là gì?
~~~python
a = [1, 2]
b = [1, 2]
print(a == b, a is b)
~~~`, ['True True', 'False False', 'True False', 'False True'], 'C', '§==§ so sánh GIÁ TRỊ (bằng nhau). §is§ so sánh có phải CÙNG MỘT đối tượng không (ở đây là hai list khác nhau).'],
  [`Kết quả của code là gì?
~~~python
a = [1, 2, 3]
b = a[:]
b[0] = 99
print(a[0])
~~~`, ['99', '1', 'None', 'Lỗi'], 'B', 'Slice §a[:]§ tạo một bản sao (shallow) của list, nên đổi b không ảnh hưởng a.'],
  [`Đoạn code sau cho kết quả gì?
~~~python
s = 'abc'
s[0] = 'z'
~~~`, ["s thành 'zbc'", 'Lỗi TypeError', "s thành 'zabc'", 'Không có gì xảy ra'], 'B', 'str là bất biến (immutable). Muốn đổi thì tạo chuỗi mới: §s = \'z\' + s[1:]§.'],
]);

addTS('B', 'py.string', [
  [`Kết quả của §print(', '.join(['a', 'b', 'c']))§ là:`, ["['a', 'b', 'c']", 'a, b, c', 'abc', 'a,b,c'], 'B', '§join§ nối các phần tử bằng chuỗi phân cách (ở đây là dấu phẩy + khoảng trắng).'],
  [`Kết quả của §print('hello world'.replace('o', '0'))§ là:`, ['hell0 world', 'hell0 w0rld', 'hello world', '0'], 'B', '§replace§ thay TẤT CẢ các lần xuất hiện.'],
  [`Kết quả của §print('Python'[::-1])§ là:`, ['Python', 'nohtyP', 'P', 'n'], 'B', 'Bước -1 đảo ngược chuỗi.'],
  [`Kết quả của §print('Hello, World!'.find('World'))§ là:`, ['6', '7', '8', '-1'], 'B', 'Đếm từ 0: H(0) e(1) l(2) l(3) o(4) ,(5) khoảng trắng(6) W(7). §find§ trả về -1 nếu không tìm thấy.'],
  [`Kết quả của §print('12a'.isdigit(), '123'.isdigit())§ là:`, ['True True', 'False True', 'True False', 'False False'], 'B', '§isdigit§ chỉ True khi MỌI ký tự đều là chữ số.'],
  [`Kết quả của §print('  data  science '.split())§ là:`, ["['data', 'science']", "['', 'data', '', 'science', '']", "['  data  science ']", "['data science']"], 'A', '§split()§ không đối số tách theo mọi khoảng trắng và bỏ phần rỗng. (Khác với §split(\',\')§ có thể tạo phần rỗng.)'],
]);

addTS('B', 'py.comprehension', [
  [`Kết quả của §print({x: x * x for x in range(3)})§ là:`, ['{0: 0, 1: 1, 2: 4}', '{1: 1, 2: 4, 3: 9}', '[0, 1, 4]', '{0, 1, 4}'], 'A', 'Dict comprehension tạo cặp key: value với x = 0, 1, 2.'],
  [`Kết quả của code là gì?
~~~python
items = [('a', 3), ('b', 1), ('c', 2)]
print(sorted(items, key=lambda t: t[1]))
~~~`, ["[('a', 3), ('b', 1), ('c', 2)]", "[('b', 1), ('c', 2), ('a', 3)]", "[('a', 3), ('c', 2), ('b', 1)]", 'Lỗi'], 'B', '§key=lambda t: t[1]§ nghĩa là sắp xếp theo phần tử thứ 2 (score) tăng dần.'],
  [`Đoạn code in ra gì?
~~~python
for i, w in enumerate(['x', 'y']):
    print(i, w)
~~~`, ['x 0 / y 1', '0 x / 1 y', '1 x / 2 y', 'Lỗi'], 'B', '§enumerate§ trả về (chỉ số, phần tử), chỉ số bắt đầu từ 0.'],
  [`Kết quả của code là gì?
~~~python
def f(a, b=2):
    return a * b
print(f(3), f(3, 4))
~~~`, ['6 12', '6 6', '3 12', 'Lỗi'], 'A', '§b=2§ là giá trị mặc định: f(3) = 3×2 = 6; f(3, 4) ghi đè b = 4 → 12.'],
  [`Kết quả của §print(list(zip([1, 2], ['a', 'b'])))§ là:`, ["[1, 2, 'a', 'b']", "[(1, 'a'), (2, 'b')]", "[[1, 2], ['a', 'b']]", "{1: 'a', 2: 'b'}"], 'B', '§zip§ ghép các phần tử cùng vị trí thành tuple.'],
]);

addTS('B', 'algo.bigo', [
  [`Tìm kiếm nhị phân (binary search) trên list ĐÃ SẮP XẾP có độ phức tạp:`, ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], 'B', 'Mỗi bước loại một nửa dữ liệu → số bước ≈ log₂(n).'],
  [`Kiểm tra §key in my_dict§ (dict Python) có độ phức tạp trung bình:`, ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], 'A', 'dict dùng bảng băm (hash table): tra cứu trung bình O(1). Với list thì §x in list§ là O(n).'],
  [`§sorted(arr)§ với n phần tử có độ phức tạp thường gặp là:`, ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'], 'C', 'Thuật toán sắp xếp của Python (Timsort) có độ phức tạp O(n log n).'],
  [`Đoạn code có 2 vòng lặp KHÔNG lồng nhau, mỗi vòng chạy n lần. Độ phức tạp là:`, ['O(n)', 'O(n²)', 'O(2ⁿ)', 'O(log n)'], 'A', 'n + n = 2n → bỏ hằng số → O(n). Chỉ khi LỒNG nhau mới thành O(n²).'],
  [`Vì sao phép toán vector hóa của NumPy (như §arr * 2§) thường nhanh hơn vòng §for§ Python?`, ['Vì NumPy dùng ít RAM hơn', 'Vì phép tính chạy bằng code C đã tối ưu trên cả mảng, không lặp từng phần tử bằng Python', 'Vì NumPy bỏ qua một số phần tử', 'Vì vòng for luôn sai'], 'B', 'Vectorization đẩy vòng lặp xuống tầng C, tránh chi phí của trình thông dịch Python trên từng phần tử.'],
]);

addTS('B', 'pd.select', [
  [`DataFrame §df§ có index là [10, 20, 30]. §df.iloc[0]§ và §df.loc[10]§ trả về:`, ['Hai dòng khác nhau', 'Cùng là dòng đầu tiên', 'df.loc[10] bị lỗi', 'df.iloc[0] bị lỗi'], 'B', '§iloc§ chọn theo VỊ TRÍ (0 = dòng đầu). §loc§ chọn theo NHÃN index (nhãn 10 cũng là dòng đầu).'],
  [`§df[['name', 'age']]§ trả về:`, ['Một Series', 'DataFrame chỉ gồm 2 cột name và age', 'Dòng có tên name và age', 'Lỗi'], 'B', 'Truyền một LIST tên cột → DataFrame gồm các cột đó. §df[\'name\']§ (một tên) → Series.'],
  [`Lọc các dòng có §age > 18§ VÀ §city == 'HN'§, viết đúng là:`, ["§df[df['age'] > 18 and df['city'] == 'HN']§", "§df[(df['age'] > 18) & (df['city'] == 'HN')]§", "§df[df['age'] > 18 & df['city'] == 'HN']§", "§df.filter(age > 18, city == 'HN')§"], 'B', 'Pandas dùng §&§ (và), §|§ (hoặc), §~§ (phủ định), và PHẢI có ngoặc quanh từng điều kiện. §and§ gây lỗi.'],
  [`DataFrame có 100 dòng và 5 cột. §df.shape§ là:`, ['(5, 100)', '(100, 5)', '500', '(100,)'], 'B', 'shape = (số dòng, số cột).'],
  [`§df.loc[df['age'] > 30, 'name']§ trả về:`, ['Cột name của những dòng có age > 30', 'Toàn bộ dòng có age > 30', 'Cột age', 'Lỗi'], 'A', '§loc[điều_kiện_dòng, cột]§: lọc dòng theo điều kiện và lấy cột name.'],
  [`§df.iloc[:2, 1]§ chọn:`, ['2 dòng đầu, cột ở vị trí 1 (cột thứ hai)', 'Dòng 2, cột 1', '2 cột đầu, dòng 1', 'Cột có tên 1'], 'A', '§iloc[dòng, cột]§ theo vị trí: §:2§ là dòng 0 và 1; §1§ là cột thứ hai.'],
]);

addTS('B', 'pd.aggregate', [
  [`§df.groupby('city')['salary'].mean()§ cho kết quả:`, ['Lương trung bình của toàn bảng', 'Lương trung bình theo từng city', 'Số dòng của mỗi city', 'Sắp xếp theo city'], 'B', 'groupby chia nhóm theo city, rồi tính mean của cột salary trong từng nhóm.'],
  [`Cho §df§ có city = [HN, HN, HCM] và amount = [10, 20, 5]. §df.groupby('city')['amount'].sum()§ là:`, ['HCM 5, HN 30', 'HN 10, HN 20, HCM 5', 'HCM 35', 'HN 15, HCM 5'], 'A', 'Nhóm HN: 10 + 20 = 30; nhóm HCM: 5. Kết quả mặc định sắp theo tên nhóm.'],
  [`§pd.merge(a, b, on='id', how='inner')§ giữ lại:`, ['Mọi dòng của a', 'Mọi dòng của b', 'Chỉ các id có ở CẢ HAI bảng', 'Mọi id của cả hai bảng'], 'C', 'inner = giao. left = giữ hết bảng trái, right = giữ hết bảng phải, outer = hợp.'],
  [`Cho §s = pd.Series(['a', 'b', 'a'])§. §s.value_counts()§ là:`, ['a 2, b 1', 'a 1, b 1', '3', "['a', 'b']"], 'A', 'value_counts đếm số lần xuất hiện của từng giá trị, sắp giảm dần.'],
  [`§df.sort_values(['city', 'age'])§ làm gì?`, ['Sắp theo age rồi city', 'Sắp theo city, các dòng cùng city thì sắp theo age', 'Chỉ giữ 2 cột city và age', 'Lỗi'], 'B', 'Sắp theo cột đầu tiên trước, cột sau dùng để phân định khi cột trước bằng nhau.'],
]);

addTS('B', 'pd.clean', [
  [`Điền giá trị thiếu ở cột số §age§ bằng trung bình của cột, viết:`, ["§df['age'] = df['age'].fillna(df['age'].mean())§", "§df['age'] = df['age'].dropna()§", "§df['age'].mean().fillna()§", "§df.fillna('age')§"], 'A', '§fillna(giá_trị)§ thay NaN bằng giá trị đó. Cột phân loại (categorical) thì thường điền bằng mode: §.fillna(df[col].mode()[0])§.'],
  [`§df.isnull().sum()§ cho biết:`, ['Tổng giá trị các cột', 'Số giá trị thiếu (NaN) ở mỗi cột', 'Số dòng trùng', 'Số cột'], 'B', 'isnull() tạo bảng True/False, sum() đếm số True theo từng cột.'],
  [`§df.dropna()§ (không đối số) làm gì?`, ['Xóa các CỘT có NaN', 'Xóa các DÒNG có ít nhất một NaN', 'Điền NaN bằng 0', 'Xóa dòng trùng'], 'B', 'Mặc định xóa dòng. §dropna(axis=1)§ mới xóa cột.'],
  [`Cột §name§ có giá trị như §'  An '§. Lệnh bỏ khoảng trắng ở hai đầu là:`, ["§df['name'].strip()§", "§df['name'].str.strip()§", "§strip(df['name'])§", "§df['name'].replace(' ')§"], 'B', 'Thao tác chuỗi trên cả cột phải qua §.str§: §.str.strip()§, §.str.lower()§, §.str.replace()§...'],
  [`§df.duplicated().sum()§ cho biết:`, ['Số dòng trùng lặp (tính từ lần xuất hiện thứ hai)', 'Số cột trùng', 'Tổng các giá trị trùng', 'Số giá trị thiếu'], 'A', '§duplicated()§ đánh dấu True cho những dòng đã xuất hiện trước đó. Xóa chúng bằng §drop_duplicates()§.'],
  [`Cột §date§ đang là chuỗi §'2026-10-10'§. Chuyển sang kiểu ngày tháng:`, ["§df['date'].astype(date)§", "§pd.to_datetime(df['date'])§", "§df['date'].str.date()§", "§int(df['date'])§"], 'B', '§pd.to_datetime§ chuyển chuỗi thành kiểu datetime để so sánh, lấy năm/tháng...'],
  [`Cột city có các giá trị §'Hanoi'§, §' hanoi'§, §'HANOI '§. Để chuẩn hóa về cùng một giá trị, dùng:`, ["§df['city'].str.strip().str.lower()§", "§df['city'].drop_duplicates()§", "§df['city'].astype(str)§", "§df['city'].fillna('hanoi')§"], 'A', 'Bỏ khoảng trắng + đưa về chữ thường → cả ba thành §\'hanoi\'§.'],
  [`Trong pipeline làm sạch, vì sao nên tách train/test TRƯỚC khi tính mean để fillna?`, ['Cho code ngắn hơn', 'Tránh rò rỉ dữ liệu (data leakage): thông tin của tập test lọt vào lúc train', 'Vì fillna chỉ chạy được trên train', 'Không cần thiết'], 'B', 'Mean phải tính trên train rồi dùng cho test. Nếu tính trên toàn bộ dữ liệu, mô hình "nhìn trộm" test và điểm đánh giá bị ảo.'],
]);
