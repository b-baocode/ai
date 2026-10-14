// Bài học Module B — Lập trình & Xử lý dữ liệu.
// Code trong bài: <pre><code class="language-python">…</code></pre>, ký tự < phải viết &lt;.
window.LESSONS = (window.LESSONS || []).concat([

// ======================= B0 PYTHON TỪ SỐ 0 =======================
{
  id: 'B0.1', module: 'B', topic: 'B0', minutes: 15,
  title: 'Biến, kiểu dữ liệu, toán tử & if',
  skills: ['py.basics'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Module B hỏi rất nhiều câu "đoạn code sau in ra gì?". Muốn đọc được code thì trước hết phải nắm biến, kiểu dữ liệu và toán tử.</div>

<h2>1. Biến & kiểu dữ liệu cơ bản</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>Biến là một <b>cái nhãn</b> dán lên một giá trị. <code>x = 5</code> nghĩa là "dán nhãn x lên số 5".</div>
<table>
<tr><th>Kiểu</th><th>Ví dụ</th><th>Ghi chú</th></tr>
<tr><td><code>int</code></td><td><code>5</code>, <code>-3</code></td><td>Số nguyên</td></tr>
<tr><td><code>float</code></td><td><code>1.5</code>, <code>3.0</code></td><td>Số thực</td></tr>
<tr><td><code>str</code></td><td><code>'AI'</code>, <code>"data"</code></td><td>Chuỗi</td></tr>
<tr><td><code>bool</code></td><td><code>True</code>, <code>False</code></td><td>Đúng/sai</td></tr>
<tr><td><code>None</code></td><td><code>None</code></td><td>"Không có giá trị"</td></tr>
</table>
<p>Ép kiểu: <code>int('5')</code> → 5, <code>str(5)</code> → <code>'5'</code>, <code>float('2.5')</code> → 2.5. Kiểm tra kiểu: <code>type(x)</code> hoặc <code>isinstance(x, int)</code>.</p>

<h2>2. Toán tử số học (hay bị hỏi)</h2>
<table>
<tr><th>Toán tử</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td><code>/</code></td><td>Chia, <b>luôn ra float</b></td><td><code>7 / 2</code> = 3.5</td></tr>
<tr><td><code>//</code></td><td>Chia lấy <b>phần nguyên</b></td><td><code>7 // 2</code> = 3</td></tr>
<tr><td><code>%</code></td><td>Chia lấy <b>dư</b></td><td><code>7 % 2</code> = 1 (dùng để kiểm tra chẵn/lẻ)</td></tr>
<tr><td><code>**</code></td><td>Lũy thừa</td><td><code>2 ** 3</code> = 8</td></tr>
</table>
<p>Với chuỗi: <code>'a' + 'b'</code> = <code>'ab'</code>; <code>'ab' * 2</code> = <code>'abab'</code>. Nhưng <code>'5' + 2</code> → <b>lỗi TypeError</b>, vì không cộng chuỗi với số được.</p>

<h2>3. So sánh & logic</h2>
<p><code>==</code> (bằng), <code>!=</code> (khác), <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>. Kết hợp điều kiện bằng <code>and</code>, <code>or</code>, <code>not</code>.</p>

<h2>4. Câu lệnh if</h2>
<pre><code class="language-python">score = 7
if score >= 8:
    print('Giỏi')
elif score >= 5:
    print('Đạt')      # ← chạy dòng này
else:
    print('Chưa đạt')</code></pre>
<p>Python dùng <b>thụt lề</b> (4 dấu cách) để biết dòng nào thuộc khối if.</p>
<div class="box idea"><span class="box-title">💡 Giá trị "falsy"</span>Trong <code>if</code>, những giá trị sau được coi là <b>False</b>: <code>0</code>, <code>0.0</code>, <code>''</code>, <code>[]</code>, <code>{}</code>, <code>None</code>. Mọi giá trị khác là True.</div>

<h2>5. f-string: chèn biến vào chuỗi</h2>
<pre><code class="language-python">name = 'AI'
print(f'Hello {name}!')   # Hello AI!</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Nhầm <code>/</code> với <code>//</code>.</li><li>Nhầm <code>=</code> (gán) với <code>==</code> (so sánh).</li><li>Quên rằng <code>if 0:</code> là False.</li></ul></div>
`},

{
  id: 'B0.2', module: 'B', topic: 'B0', minutes: 18,
  title: 'Vòng lặp, break/continue & kỹ năng trace code',
  skills: ['py.loop', 'python.code.trace-continue-dict'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề có câu "không chạy code, cho biết kết quả". Kỹ năng quan trọng nhất là <b>trace</b>: lập bảng ghi lại giá trị biến sau mỗi vòng lặp. Đây là chỗ người mới hay sai nhất, và cũng dễ gỡ điểm nhất nếu làm cẩn thận.</div>

<h2>1. for & range</h2>
<pre><code class="language-python">for i in range(5):        # 0, 1, 2, 3, 4  (KHÔNG có 5)
for i in range(2, 6):     # 2, 3, 4, 5
for i in range(1, 10, 3): # 1, 4, 7  (bước 3)
for x in [10, 20]:        # duyệt từng phần tử của list</code></pre>
<div class="box formula"><code>range(start, stop, step)</code>: bắt đầu từ <code>start</code>, <b>dừng TRƯỚC</b> <code>stop</code>.</div>

<h2>2. while</h2>
<pre><code class="language-python">n = 0
while n &lt; 10:   # còn đúng thì còn lặp
    n += 3      # n = 3, 6, 9, 12
print(n)        # 12</code></pre>

<h2>3. break & continue</h2>
<table>
<tr><th></th><th>Tác dụng</th></tr>
<tr><td><code>break</code></td><td>Thoát <b>hẳn</b> vòng lặp</td></tr>
<tr><td><code>continue</code></td><td>Bỏ qua <b>phần còn lại của vòng hiện tại</b>, sang vòng tiếp theo</td></tr>
</table>

<h2>4. Kỹ năng trace: lập bảng trạng thái</h2>
<p><b>Ví dụ (đúng dạng đề):</b></p>
<pre><code class="language-python">total = 0
for i in range(5):
    if i == 3:
        continue
    total += i
print(total)</code></pre>
<table>
<tr><th>i</th><th>i == 3?</th><th>total sau vòng</th></tr>
<tr><td>0</td><td>không</td><td>0</td></tr>
<tr><td>1</td><td>không</td><td>1</td></tr>
<tr><td>2</td><td>không</td><td>3</td></tr>
<tr><td>3</td><td><b>có → continue</b></td><td>3 (bỏ qua)</td></tr>
<tr><td>4</td><td>không</td><td>7</td></tr>
</table>
<p>Kết quả: <b>7</b>.</p>

<p><b>Ví dụ 2 (dạng câu mở):</b></p>
<pre><code class="language-python">values = [1, 2, 3, 4, 5]
result = {}
for x in values:
    if x % 2 == 0:
        continue          # bỏ số chẵn
    result[x] = x * x
print(sum(result.values()))</code></pre>
<p>Số lẻ 1, 3, 5 → <code>result = {1: 1, 3: 9, 5: 25}</code> → tổng <b>35</b>.</p>

<h2>5. Vòng lặp lồng nhau</h2>
<p>Vòng ngoài chạy m lần, mỗi lần vòng trong chạy n lần → thân vòng trong chạy <b>m × n</b> lần.</p>

<div class="box tip"><span class="box-title">⚡ Mẹo trace khi thi</span>
<ol><li>Viết tên mọi biến thành cột của bảng.</li><li>Mỗi vòng lặp là một dòng.</li><li>Đặc biệt cẩn thận ở <b>vòng đầu</b>, <b>vòng cuối</b> và vòng gặp <code>break</code>/<code>continue</code>.</li></ol></div>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Tưởng <code>range(5)</code> có số 5.</li><li>Nhầm <code>break</code> với <code>continue</code>.</li><li><code>print</code> nằm trong hay ngoài vòng lặp (xem thụt lề!).</li></ul></div>
`},

// ======================= B1 CẤU TRÚC DỮ LIỆU =======================
{
  id: 'B1.1', module: 'B', topic: 'B1', minutes: 15,
  title: 'List & slicing',
  skills: ['py.list'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
List là cấu trúc dùng nhiều nhất trong Python. Slicing (cắt list) dùng y hệt cho chuỗi và NumPy, nên học kỹ ở đây sẽ dùng lại được cho các bài sau.</div>

<h2>1. Chỉ số (index)</h2>
<pre><code class="language-python">a = [10, 20, 30, 40]
a[0]    # 10  ← bắt đầu từ 0
a[-1]   # 40  ← số âm đếm từ cuối
a[-2]   # 30
len(a)  # 4</code></pre>

<h2>2. Slicing: <code>a[start:stop:step]</code></h2>
<div class="box formula">Lấy từ <code>start</code> đến <b>trước</b> <code>stop</code>, bước <code>step</code>. Bỏ trống start = từ đầu; bỏ trống stop = đến hết.</div>
<pre><code class="language-python">a = [0, 1, 2, 3, 4, 5, 6]
a[2:5]    # [2, 3, 4]
a[:3]     # [0, 1, 2]
a[4:]     # [4, 5, 6]
a[2:7:2]  # [2, 4, 6]
a[::-1]   # [6, 5, 4, 3, 2, 1, 0]  ← đảo ngược</code></pre>

<h2>3. Các phương thức hay gặp</h2>
<pre><code class="language-python">nums = [1, 2, 3]
nums.append(4)      # [1, 2, 3, 4]        thêm 1 phần tử vào cuối
nums.insert(1, 10)  # [1, 10, 2, 3, 4]    chèn vào vị trí 1
nums.remove(2)      # [1, 10, 3, 4]       xóa GIÁ TRỊ 2 (lần đầu)
nums.pop(2)         # [1, 10, 4]          xóa VỊ TRÍ 2, trả về 3
nums.pop()          # [1, 10]             không đối số → xóa cuối
nums.extend([7, 8]) # [1, 10, 7, 8]       thêm TỪNG phần tử
nums.append([7, 8]) # [..., [7, 8]]       thêm NGUYÊN list thành 1 phần tử</code></pre>

<h2>4. sort() vs sorted(), reverse() vs reversed()</h2>
<table>
<tr><th>Lệnh</th><th>Thay đổi list gốc?</th><th>Trả về</th></tr>
<tr><td><code>a.sort()</code></td><td>Có (tại chỗ)</td><td><b>None</b></td></tr>
<tr><td><code>sorted(a)</code></td><td>Không</td><td>List mới đã sắp xếp</td></tr>
<tr><td><code>a.reverse()</code></td><td>Có</td><td>None</td></tr>
<tr><td><code>a[::-1]</code></td><td>Không</td><td>List mới đảo ngược</td></tr>
</table>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li><code>b = a.sort()</code> → b là <b>None</b>.</li><li><code>append</code> một list → độ dài chỉ tăng 1.</li><li>Slice không bao gồm vị trí <code>stop</code>.</li></ul></div>
`},

{
  id: 'B1.2', module: 'B', topic: 'B1', minutes: 15,
  title: 'Dict, set, tuple',
  skills: ['py.dict-set', 'python.code.word-count-sorted-items'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Dict là công cụ đếm và gom nhóm (đếm từ, tổng tiền theo user). Mẫu <code>d.get(key, 0) + 1</code> xuất hiện trong cả câu trắc nghiệm lẫn câu viết code.</div>

<h2>1. So sánh nhanh</h2>
<table>
<tr><th></th><th>Ví dụ</th><th>Có thứ tự?</th><th>Sửa được?</th><th>Trùng lặp?</th></tr>
<tr><td>list</td><td><code>[1, 2, 2]</code></td><td>Có</td><td>Có</td><td>Cho phép</td></tr>
<tr><td>tuple</td><td><code>(1, 2, 2)</code></td><td>Có</td><td><b>Không</b></td><td>Cho phép</td></tr>
<tr><td>set</td><td><code>{1, 2}</code></td><td>Không</td><td>Có</td><td><b>Không</b></td></tr>
<tr><td>dict</td><td><code>{'a': 1}</code></td><td>Có (theo thứ tự thêm)</td><td>Có</td><td>Key không trùng</td></tr>
</table>

<h2>2. Dict: cặp key → value</h2>
<pre><code class="language-python">d = {'x': 1}
d['y'] = 2            # thêm key mới
d['x'] = 5            # ghi đè value của key đã có
d.get('z', 0)         # 0 ← key không có thì trả default, KHÔNG lỗi
d['z']                # KeyError!
'x' in d              # True ← in kiểm tra KEY
list(d.keys())        # ['x', 'y']
list(d.values())      # [5, 2]
for k, v in d.items():  # duyệt cặp (key, value)
    print(k, v)</code></pre>

<h2>3. Mẫu đếm bằng dict (rất hay ra)</h2>
<pre><code class="language-python">words = ['AI', 'rag', 'AI', 'llm']
counts = {}
for word in words:
    key = word.lower()
    counts[key] = counts.get(key, 0) + 1
print(sorted(counts.items()))
# [('ai', 2), ('llm', 1), ('rag', 1)]</code></pre>
<p>Lần đầu gặp 'ai': <code>get</code> trả 0 → 0 + 1 = 1. Lần sau: 1 + 1 = 2. <code>sorted(items)</code> sắp theo key theo thứ tự chữ cái.</p>

<h2>4. Set: loại trùng & kiểm tra nhanh</h2>
<pre><code class="language-python">set([1, 2, 2, 3])   # {1, 2, 3}
3 in {1, 2, 3}      # True, rất nhanh (O(1))</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li><code>value in dict</code> kiểm tra key, không kiểm tra value.</li><li>Gán vào tuple → TypeError.</li><li><code>d['khong_co']</code> → KeyError; muốn an toàn thì dùng <code>get</code>.</li></ul></div>
`},

{
  id: 'B1.3', module: 'B', topic: 'B1', minutes: 15,
  title: 'Tham chiếu: =, copy, deepcopy',
  skills: ['py.copy'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Người thi trước kể có câu về <b>"copy trong Python: =, copy, deepcopy"</b>. Hiểu sai phần này còn gây bug thật: sửa dữ liệu ở chỗ này mà dữ liệu ở chỗ khác cũng đổi theo.</div>

<h2>1. Phép gán = không tạo bản sao</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
Biến chỉ là <b>nhãn</b>. <code>y = x</code> là dán thêm nhãn y lên <b>cùng một</b> list. Sửa qua y thì nhìn qua x cũng thấy thay đổi.</div>
<pre><code class="language-python">x = [1, 2]
y = x
y.append(3)
print(x)   # [1, 2, 3]  ← x cũng đổi!</code></pre>

<h2>2. Shallow copy: sao chép lớp ngoài</h2>
<pre><code class="language-python">a = [1, 2, 3]
b = a.copy()     # hoặc a[:] hoặc list(a) hoặc copy.copy(a)
b.append(4)
print(a)         # [1, 2, 3]  ← a không đổi</code></pre>
<p>Nhưng nếu bên trong có list con thì list con vẫn <b>dùng chung</b>:</p>
<pre><code class="language-python">import copy
a = [[1, 2], [3, 4]]
b = copy.copy(a)
b[0].append(9)
print(a)   # [[1, 2, 9], [3, 4]]  ← list con bị ảnh hưởng</code></pre>

<h2>3. Deep copy: sao chép toàn bộ</h2>
<pre><code class="language-python">b = copy.deepcopy(a)
b[0].append(9)
print(a)   # [[1, 2], [3, 4]]  ← hoàn toàn độc lập</code></pre>

<table>
<tr><th>Cách</th><th>Lớp ngoài</th><th>Phần tử lồng bên trong</th></tr>
<tr><td><code>b = a</code></td><td>Dùng chung</td><td>Dùng chung</td></tr>
<tr><td><code>a.copy()</code>, <code>a[:]</code>, <code>copy.copy(a)</code></td><td><b>Riêng</b></td><td>Dùng chung</td></tr>
<tr><td><code>copy.deepcopy(a)</code></td><td><b>Riêng</b></td><td><b>Riêng</b></td></tr>
</table>

<h2>4. == và is</h2>
<ul><li><code>==</code>: hai giá trị <b>bằng nhau</b> không?</li><li><code>is</code>: có phải <b>cùng một đối tượng</b> không?</li></ul>
<pre><code class="language-python">a = [1, 2]; b = [1, 2]
a == b   # True
a is b   # False (hai list khác nhau)</code></pre>

<h2>5. Mutable vs immutable</h2>
<p><b>Sửa được (mutable):</b> list, dict, set. <b>Bất biến (immutable):</b> int, float, str, tuple. Không thể <code>s[0] = 'z'</code> với chuỗi, mà phải tạo chuỗi mới.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Tưởng <code>copy()</code> là sao chép hoàn toàn. Với list lồng nhau thì phải dùng <code>deepcopy</code>.</div>
`},

// ======================= B2 CHUỖI & HÀM =======================
{
  id: 'B2.1', module: 'B', topic: 'B2', minutes: 15,
  title: 'Xử lý chuỗi',
  skills: ['py.string'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Người thi kể có <b>câu tự luận xử lý chuỗi</b> (xóa khoảng trắng, xóa None, xóa từ…). Dữ liệu văn bản (NLP) luôn phải làm sạch chuỗi trước khi dùng.</div>

<h2>1. Các phương thức phải thuộc</h2>
<pre><code class="language-python">s = '  Hello, World!  '
s.strip()          # 'Hello, World!'   bỏ khoảng trắng 2 đầu
s.lower()          # '  hello, world!  '
s.upper()          # '  HELLO, WORLD!  '
s.strip().split(',')   # ['Hello', ' World!']
'a b  c'.split()   # ['a', 'b', 'c']   không đối số: tách mọi khoảng trắng
'a,b,,c'.split(',')    # ['a', 'b', '', 'c']  ← có phần rỗng!
'-'.join(['a', 'b'])   # 'a-b'
'hello'.replace('l', 'L')  # 'heLLo'
'Hello'.find('l')  # 2  (không thấy → -1)
'Python'[::-1]     # 'nohtyP'
len('AI')          # 2</code></pre>

<h2>2. Kiểm tra nội dung</h2>
<pre><code class="language-python">'Python'.isalpha()   # True   chỉ chữ cái
'12345'.isdigit()    # True   chỉ chữ số
'Py123'.isalnum()    # True   chữ + số
'HELLO'.isupper()    # True
'   '.isspace()      # True
'data.csv'.endswith('.csv')  # True</code></pre>

<h2>3. Mẫu làm sạch danh sách chuỗi</h2>
<pre><code class="language-python">raw = ['  AI ', None, '', 'Data  ', '   ']
clean = [s.strip().lower() for s in raw if s and s.strip()]
# ['ai', 'data']</code></pre>
<p>Điều kiện <code>if s and s.strip()</code> loại <code>None</code>, chuỗi rỗng và chuỗi chỉ toàn khoảng trắng.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Chuỗi là bất biến: <code>s.strip()</code> trả về chuỗi MỚI; phải gán lại <code>s = s.strip()</code>.</li><li><code>split(',')</code> có thể tạo phần tử rỗng. <code>'a,b,,c'</code> cho 4 phần.</li><li>Gọi <code>.strip()</code> trên <code>None</code> → lỗi. Phải lọc None trước.</li></ul></div>
<h2>Bổ sung: biểu thức chính quy (regex)</h2>
<p>Regex là một mẫu để <b>tìm, trích xuất hoặc thay thế</b> văn bản theo quy luật, thay vì tìm một chuỗi cố định.</p>
<table>
<tr><th>Ký hiệu</th><th>Khớp với</th></tr>
<tr><td><code>\d</code></td><td>Một chữ số</td></tr>
<tr><td><code>\w</code></td><td>Một chữ cái, chữ số hoặc dấu gạch dưới</td></tr>
<tr><td><code>\s</code></td><td>Một khoảng trắng</td></tr>
<tr><td><code>.</code></td><td>Một ký tự bất kỳ</td></tr>
<tr><td><code>+</code> / <code>*</code> / <code>?</code></td><td>Lặp ít nhất 1 lần / lặp 0 hoặc nhiều lần / có hoặc không</td></tr>
<tr><td><code>^</code> / <code>$</code></td><td>Đầu chuỗi / cuối chuỗi</td></tr>
<tr><td><code>[abc]</code></td><td>Một trong các ký tự a, b, c</td></tr>
</table>
<pre><code class="language-python">import re
re.findall(r'\d+', 'Đơn 12 có 3 món, giá 450')   # ['12', '3', '450']
re.sub(r'\s+', ' ', 'a   b    c')                 # 'a b c'  gộp khoảng trắng thừa
bool(re.search(r'^\d{10}$', '0912345678'))        # True  đúng 10 chữ số</code></pre>
<p><code>findall</code> trả về mọi chỗ khớp, <code>search</code> tìm chỗ khớp đầu tiên, <code>sub</code> thay thế. Viết mẫu dưới dạng <code>r'...'</code> để Python không xử lý dấu gạch chéo ngược.</p>
`},

{
  id: 'B2.2', module: 'B', topic: 'B2', minutes: 15,
  title: 'Hàm, comprehension & lambda',
  skills: ['py.comprehension', 'python.code.list-comprehension-slice'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
List comprehension là cách viết "pythonic" mà đề rất hay cho đọc. Bài code tự luận thì yêu cầu bạn viết hàm.</div>

<h2>1. Hàm</h2>
<pre><code class="language-python">def area(w, h=1):       # h có giá trị mặc định
    return w * h

area(3)       # 3
area(3, 4)    # 12
area(h=2, w=5)  # 10 (gọi theo tên)</code></pre>
<p>Hàm không có <code>return</code> sẽ trả về <code>None</code>.</p>

<h2>2. List comprehension</h2>
<div class="box formula"><code>[biểu_thức for x in dãy if điều_kiện]</code><br>Đọc là: "với mỗi x trong dãy, <b>nếu</b> thỏa điều kiện thì lấy biểu thức".</div>
<pre><code class="language-python">nums = [1, 2, 3, 4, 5]
[x * 2 for x in nums]              # [2, 4, 6, 8, 10]
[x for x in nums if x % 2 == 0]    # [2, 4]
[x * 2 for x in nums if x % 2 == 1]  # [2, 6, 10]  (lọc TRƯỚC, nhân SAU)
sum(x for x in nums if x % 2 == 0) # 6   (generator, không tạo list)

# tương đương vòng for:
out = []
for x in nums:
    if x % 2 == 1:
        out.append(x * 2)</code></pre>
<p>Dict comprehension: <code>{x: x*x for x in range(3)}</code> → <code>{0: 0, 1: 1, 2: 4}</code>.</p>

<h2>3. lambda: hàm ngắn một dòng</h2>
<pre><code class="language-python">items = [('a', 3), ('b', 1), ('c', 2)]
sorted(items, key=lambda t: t[1])               # theo score tăng: b, c, a
sorted(items, key=lambda t: t[1], reverse=True) # giảm dần: a, c, b</code></pre>

<h2>4. enumerate & zip</h2>
<pre><code class="language-python">for i, w in enumerate(['x', 'y']):   # (0,'x'), (1,'y')
    ...
list(zip([1, 2], ['a', 'b']))        # [(1, 'a'), (2, 'b')]</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Trong comprehension, <code>if</code> lọc <b>trước</b>, biểu thức tính <b>sau</b>. Đề hay kết hợp thêm slicing <code>out[1:]</code> ở cuối, nên phải trace cẩn thận.</div>
`},

{
  id: 'B2.3', module: 'B', topic: 'B2', minutes: 22,
  title: 'Đệ quy, xử lý lỗi (try/except), đọc ghi file & JSON',
  skills: ['ts.py-advanced'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ba kỹ thuật lập trình nền tảng mà chương trình nào cũng dùng: hàm tự gọi lại mình, chương trình không sập khi gặp lỗi, và đọc ghi dữ liệu ra file. JSON còn là định dạng trao đổi dữ liệu của hầu hết API và LLM.</div>

<h2>1. Đệ quy</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>Hàm đệ quy là hàm <b>tự gọi chính nó</b> với bài toán nhỏ hơn. Luôn cần hai phần: <b>điều kiện dừng</b> và <b>bước đệ quy</b> tiến dần về điều kiện dừng.</div>
<pre><code class="language-python">def factorial(n):
    if n &lt;= 1:                 # điều kiện dừng
        return 1
    return n * factorial(n - 1)   # bước đệ quy

factorial(4)   # 4 * 3 * 2 * 1 = 24</code></pre>
<p>Trace: <code>factorial(4)</code> → 4 × <code>factorial(3)</code> → 4 × 3 × <code>factorial(2)</code> → 4 × 3 × 2 × <code>factorial(1)</code> → 4 × 3 × 2 × 1 = 24.</p>
<pre><code class="language-python">def fib(n):
    if n &lt; 2:
        return n
    return fib(n - 1) + fib(n - 2)   # fib(6) = 8</code></pre>
<p>Thiếu điều kiện dừng thì hàm gọi mãi và Python báo <code>RecursionError</code>.</p>

<h2>2. Xử lý lỗi với try / except</h2>
<pre><code class="language-python">def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:      # chỉ bắt đúng loại lỗi mình xử lý được
        return None
    finally:
        print('xong')              # luôn chạy, dù có lỗi hay không</code></pre>
<table>
<tr><th>Lỗi</th><th>Khi nào xảy ra</th></tr>
<tr><td><code>ZeroDivisionError</code></td><td>Chia cho 0</td></tr>
<tr><td><code>KeyError</code></td><td>Truy cập key không có trong dict</td></tr>
<tr><td><code>IndexError</code></td><td>Chỉ số vượt quá độ dài list</td></tr>
<tr><td><code>TypeError</code></td><td>Sai kiểu, VD <code>'5' + 2</code></td></tr>
<tr><td><code>ValueError</code></td><td>Đúng kiểu nhưng sai giá trị, VD <code>int('abc')</code></td></tr>
<tr><td><code>FileNotFoundError</code></td><td>Mở file không tồn tại</td></tr>
</table>
<p>Tự báo lỗi bằng <code>raise ValueError('thông báo')</code>. Khối <code>else</code> (nếu có) chạy khi <b>không</b> có lỗi.</p>
<div class="box trap"><span class="box-title">⚠️ Không nên</span>Viết <code>except:</code> trống rồi <code>pass</code>: lỗi bị nuốt mất, rất khó tìm bug. Hãy bắt đúng loại lỗi và ghi log.</div>

<h2>3. Đọc ghi file</h2>
<pre><code class="language-python">with open('data.txt', 'r', encoding='utf-8') as f:   # with tự đóng file
    text = f.read()            # cả file thành một chuỗi
    # hoặc: for line in f: ...  đọc từng dòng

with open('out.txt', 'w', encoding='utf-8') as f:    # 'w' ghi đè, 'a' ghi nối thêm
    f.write('xin chào\n')</code></pre>

<h2>4. JSON</h2>
<p>JSON là văn bản biểu diễn dữ liệu có cấu trúc. Object của JSON tương ứng với <code>dict</code>, array với <code>list</code>, <code>true/false/null</code> với <code>True/False/None</code>.</p>
<pre><code class="language-python">import json

s = '{"name": "An", "scores": [8, 9]}'
data = json.loads(s)            # chuỗi JSON → dict
data['scores'][0]               # 8
json.dumps(data, ensure_ascii=False)   # dict → chuỗi JSON

with open('data.json', encoding='utf-8') as f:
    data = json.load(f)         # đọc JSON từ file (không có chữ s)</code></pre>
<p>Nhớ: có chữ <b>s</b> (<code>loads</code>, <code>dumps</code>) là làm việc với <b>string</b>; không có chữ s là làm việc với <b>file</b>.</p>
`},

{
  id: 'B2.4', module: 'B', topic: 'B2', minutes: 18,
  title: 'Lập trình hướng đối tượng (OOP) cơ bản',
  skills: ['ts.oop'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Mọi thư viện AI đều viết theo hướng đối tượng: <code>model.fit()</code>, <code>df.head()</code>, <code>response.json()</code> đều là gọi phương thức của một đối tượng. Hiểu OOP thì đọc code và dùng thư viện dễ hơn nhiều.</div>

<h2>1. Class và object</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span><b>Class</b> là bản thiết kế. <b>Object</b> (đối tượng) là một sản phẩm cụ thể làm ra từ bản thiết kế đó. Object có <b>thuộc tính</b> (dữ liệu) và <b>phương thức</b> (hàm của nó).</div>
<pre><code class="language-python">class Student:
    def __init__(self, name, score):   # hàm khởi tạo, chạy khi tạo object
        self.name = name               # thuộc tính
        self.score = score

    def passed(self):                  # phương thức
        return self.score >= 5

an = Student('An', 8)     # tạo object
an.name                   # 'An'
an.passed()               # True</code></pre>
<p><code>self</code> là chính object đang được gọi. Khi viết <code>an.passed()</code>, Python tự truyền <code>an</code> vào tham số <code>self</code>.</p>

<h2>2. Bốn tính chất của OOP</h2>
<table>
<tr><th>Tính chất</th><th>Ý nghĩa</th><th>Trong Python</th></tr>
<tr><td><b>Đóng gói</b> (encapsulation)</td><td>Gom dữ liệu và hàm xử lý vào một class, hạn chế truy cập trực tiếp từ ngoài</td><td>Quy ước <code>_ten</code> là "nội bộ, đừng đụng vào"</td></tr>
<tr><td><b>Trừu tượng</b> (abstraction)</td><td>Chỉ lộ ra cách dùng, ẩn chi tiết bên trong</td><td>Gọi <code>model.predict(x)</code> mà không cần biết bên trong</td></tr>
<tr><td><b>Kế thừa</b> (inheritance)</td><td>Class con dùng lại thuộc tính và phương thức của class cha</td><td><code>class Child(Parent):</code></td></tr>
<tr><td><b>Đa hình</b> (polymorphism)</td><td>Cùng tên phương thức nhưng mỗi class làm một kiểu</td><td>Class con <b>ghi đè</b> (override) phương thức của cha</td></tr>
</table>

<h2>3. Kế thừa và ghi đè</h2>
<pre><code class="language-python">class Model:
    def __init__(self, name):
        self.name = name
    def predict(self, x):
        return 0

class Doubler(Model):                  # kế thừa Model
    def predict(self, x):              # ghi đè phương thức của cha
        return x * 2

m = Doubler('gấp đôi')    # dùng __init__ của cha
m.name                    # 'gấp đôi'
m.predict(3)              # 6  ← chạy bản của class con</code></pre>
<p>Trong class con, <code>super().__init__(name)</code> gọi hàm khởi tạo của class cha.</p>

<h2>4. Thuộc tính của class và của object</h2>
<pre><code class="language-python">class Counter:
    total = 0                 # thuộc tính của CLASS: mọi object dùng chung
    def __init__(self):
        self.count = 0        # thuộc tính của OBJECT: mỗi object một bản riêng</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Quên <code>self</code> ở tham số đầu của phương thức, hoặc quên <code>self.</code> khi dùng thuộc tính.</li>
<li>Nhầm class với object: <code>Student.passed()</code> báo lỗi vì chưa có object nào.</li>
<li>Tên hàm khởi tạo là <code>__init__</code>, hai dấu gạch dưới mỗi bên.</li></ul></div>
`},

// ======================= B3 THUẬT TOÁN =======================
{
  id: 'B3.1', module: 'B', topic: 'B3', minutes: 15,
  title: 'Độ phức tạp Big-O',
  skills: ['algo.bigo'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Big-O mô tả code <b>chậm đi bao nhiêu</b> khi dữ liệu tăng. Dữ liệu AI rất lớn, nên chọn sai cấu trúc dữ liệu có thể khiến chương trình chậm đi hàng nghìn lần.</div>

<h2>1. Các mức thường gặp (nhanh → chậm)</h2>
<table>
<tr><th>Big-O</th><th>Tên</th><th>Ví dụ</th></tr>
<tr><td>O(1)</td><td>Hằng số</td><td><code>d[key]</code>, <code>x in set</code>, <code>list.append</code>, <code>a[i]</code></td></tr>
<tr><td>O(log n)</td><td>Logarit</td><td>Tìm kiếm nhị phân, thuật toán Euclid</td></tr>
<tr><td>O(n)</td><td>Tuyến tính</td><td>Một vòng for qua n phần tử, <code>x in list</code>, <code>list.insert(0, x)</code></td></tr>
<tr><td>O(n log n)</td><td></td><td><code>sorted()</code>, <code>list.sort()</code></td></tr>
<tr><td>O(n²)</td><td>Bình phương</td><td>Hai vòng for <b>lồng nhau</b></td></tr>
</table>

<h2>2. Cách đếm</h2>
<ul>
<li>Vòng lặp nối tiếp: <b>cộng</b> (n + n = 2n → O(n)).</li>
<li>Vòng lặp lồng nhau: <b>nhân</b> (n × n → O(n²)).</li>
<li>Bỏ hằng số và bậc thấp: O(3n + 5) → O(n); O(n² + n) → O(n²).</li>
</ul>
<pre><code class="language-python">for i in range(n):
    for j in range(i):   # chạy 0 + 1 + ... + (n-1) ≈ n²/2 lần
        s += 1
# → O(n²)</code></pre>

<h2>3. Chọn cấu trúc dữ liệu đúng</h2>
<p>Cần kiểm tra "đã có x chưa?" nhiều lần → dùng <b>set</b> hoặc <b>dict</b> (O(1)) thay vì list (O(n)).</p>
<p>Xử lý mảng số → dùng <b>NumPy vectorization</b> thay vì vòng <code>for</code>: phép tính chạy bằng C, nhanh hơn rất nhiều.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Hai vòng for <b>không lồng nhau</b> vẫn là O(n), không phải O(n²).</div>
`},

{
  id: 'B3.2', module: 'B', topic: 'B3', minutes: 20,
  title: 'Thuật toán Euclid (ƯCLN / GCD)',
  skills: ['euclid.compute-gcd', 'euclid.trace-one-iteration', 'euclid.read-recursive-code', 'euclid.time-complexity', 'euclid.trace-full-process', 'euclid.debug-loop', 'euclid.handle-negative-inputs', 'euclid.code.loop-implementation', 'euclid.code.debug-implementation', 'euclid.code.trace-and-implement'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Theo phản hồi người thi, Module B có <b>thuật toán Euclid</b>, và bộ đề mô phỏng có tới khoảng 30 câu về nó: tính GCD, trace, đọc code đệ quy, sửa bug, tự viết hàm. Học một lần là ăn trọn cả dạng.</div>

<h2>1. Ý tưởng</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
ƯCLN của (a, b) cũng chính là ƯCLN của (b, a % b). Cứ thay cặp số như vậy, số càng lúc càng nhỏ. Đến khi <b>b = 0</b> thì <b>a là kết quả</b>.</div>
<div class="box formula">$$\gcd(a, b) = \gcd(b,\ a \bmod b),$$ $$\gcd(a, 0) = a$$</div>

<h2>2. Trace bằng tay (đúng dạng đề)</h2>
<p><b>gcd(84, 30):</b></p>
<table>
<tr><th>a</th><th>b</th><th>a % b</th><th>Phép chia</th></tr>
<tr><td>84</td><td>30</td><td>24</td><td>84 = 2×30 + 24</td></tr>
<tr><td>30</td><td>24</td><td>6</td><td>30 = 1×24 + 6</td></tr>
<tr><td>24</td><td>6</td><td>0</td><td>24 = 4×6 + 0</td></tr>
<tr><td><b>6</b></td><td>0</td><td colspan="2">b = 0 → dừng, GCD = <b>6</b></td></tr>
</table>
<p><b>gcd(252, 105):</b> (252, 105) → (105, 42) → (42, 21) → (21, 0) → <b>21</b>.</p>
<p>"Số chia cuối cùng khác 0" chính là GCD.</p>

<h2>3. Code vòng lặp (phải viết được)</h2>
<pre><code class="language-python">def gcd(a, b):
    a, b = abs(a), abs(b)     # xử lý số âm
    while b != 0:             # còn b khác 0 thì lặp
        a, b = b, a % b       # gán ĐỒNG THỜI
    return a                  # khi b = 0, a là GCD

print(gcd(252, 105))   # 21
print(gcd(-48, 18))    # 6</code></pre>
<div class="box idea"><span class="box-title">💡 Gán đồng thời <code>a, b = b, a % b</code></span>
Vế phải được tính <b>hết trước</b> (dùng a, b cũ), rồi mới gán. Bắt đầu a = 252, b = 105: vế phải = (105, 252 % 105) = (105, 42). Sau một lần lặp, (a, b) = <b>(105, 42)</b>.</div>

<h2>4. Code đệ quy</h2>
<pre><code class="language-python">def gcd(a, b):
    return a if b == 0 else gcd(b, a % b)</code></pre>

<h2>5. Sửa bug (dạng đề hay gặp)</h2>
<pre><code class="language-python">def gcd(a, b):          # CODE SAI
    while b == 0:       # lỗi 1: điều kiện bị đảo → phải là b != 0
        a, b = a % b, b # lỗi 2: cập nhật sai → phải là a, b = b, a % b
    return b            # lỗi 3: phải return a</code></pre>

<h2>6. Độ phức tạp</h2>
<p>Số bước tăng theo <b>logarit</b> của số nhỏ hơn: \(O(\log(\min(a,b)))\). Rất nhanh.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Viết tách hai dòng <code>a = b</code> rồi <code>b = a % b</code>: sai, vì a đã bị ghi đè.</li><li>Trả về b thay vì a.</li><li>Quên <code>abs()</code> nên kết quả bị âm.</li></ul></div>
`},

{
  id: 'B3.3', module: 'B', topic: 'B3', minutes: 20,
  title: 'Tìm kiếm, sắp xếp, stack & queue',
  skills: ['ts.search-sort'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Tìm kiếm và sắp xếp là hai bài toán thuật toán kinh điển nhất, thường dùng để hỏi về độ phức tạp. Stack và queue là hai cấu trúc dữ liệu cơ bản đứng sau rất nhiều thứ, từ nút "hoàn tác" đến hàng đợi xử lý request.</div>

<h2>1. Tìm kiếm</h2>
<table>
<tr><th></th><th>Tìm kiếm tuần tự</th><th>Tìm kiếm nhị phân</th></tr>
<tr><td>Cách làm</td><td>Xem lần lượt từng phần tử</td><td>So với phần tử <b>giữa</b>, bỏ đi một nửa, lặp lại</td></tr>
<tr><td>Điều kiện</td><td>Không cần gì</td><td>Dãy <b>đã sắp xếp</b></td></tr>
<tr><td>Độ phức tạp</td><td>O(n)</td><td>O(log n)</td></tr>
</table>
<pre><code class="language-python">def binary_search(arr, target):      # arr đã sắp xếp tăng dần
    lo, hi = 0, len(arr) - 1
    while lo &lt;= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            return mid
        if arr[mid] &lt; target:
            lo = mid + 1             # bỏ nửa trái
        else:
            hi = mid - 1             # bỏ nửa phải
    return -1                        # không tìm thấy</code></pre>
<div class="box formula">Số lần so sánh tối đa của tìm kiếm nhị phân với n phần tử là khoảng \(\log_2 n\): 1000 phần tử cần tối đa 10 lần, 1 triệu phần tử cần tối đa 20 lần.</div>

<h2>2. Sắp xếp</h2>
<table>
<tr><th>Thuật toán</th><th>Ý tưởng</th><th>Độ phức tạp</th></tr>
<tr><td>Bubble sort (nổi bọt)</td><td>Đổi chỗ hai phần tử kề nhau nếu sai thứ tự, lặp nhiều lượt</td><td>O(n²)</td></tr>
<tr><td>Selection sort (chọn)</td><td>Mỗi lượt tìm phần tử nhỏ nhất đưa về đầu</td><td>O(n²)</td></tr>
<tr><td>Insertion sort (chèn)</td><td>Chèn từng phần tử vào đúng chỗ trong phần đã sắp xếp</td><td>O(n²), nhanh khi dãy gần như đã sắp</td></tr>
<tr><td>Merge sort (trộn)</td><td>Chia đôi, sắp từng nửa, trộn lại</td><td>O(n log n)</td></tr>
<tr><td>Quick sort</td><td>Chọn chốt, chia thành nhỏ hơn và lớn hơn chốt</td><td>Trung bình O(n log n), xấu nhất O(n²)</td></tr>
</table>
<p>Trong Python: <code>sorted(arr)</code> và <code>arr.sort()</code> có độ phức tạp O(n log n) và <b>ổn định</b> (stable): các phần tử bằng nhau giữ nguyên thứ tự ban đầu.</p>

<h2>3. Stack và queue</h2>
<table>
<tr><th></th><th>Stack (ngăn xếp)</th><th>Queue (hàng đợi)</th></tr>
<tr><td>Nguyên tắc</td><td><b>LIFO</b>: vào sau, ra trước</td><td><b>FIFO</b>: vào trước, ra trước</td></tr>
<tr><td>Hình dung</td><td>Chồng đĩa</td><td>Xếp hàng mua vé</td></tr>
<tr><td>Ứng dụng</td><td>Hoàn tác (undo), gọi hàm đệ quy, duyệt DFS</td><td>Hàng đợi request, duyệt BFS</td></tr>
</table>
<pre><code class="language-python">stack = []
stack.append(1); stack.append(2); stack.append(3)
stack.pop()          # 3  ← phần tử vào SAU cùng

from collections import deque
queue = deque([1, 2, 3])
queue.append(4)
queue.popleft()      # 1  ← phần tử vào TRƯỚC nhất</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Dùng tìm kiếm nhị phân trên dãy <b>chưa sắp xếp</b>: kết quả sai.</li>
<li>Dùng <code>list.pop(0)</code> làm queue: mỗi lần mất O(n). Dùng <code>deque.popleft()</code> thì O(1).</li></ul></div>
`},

// ======================= B4 NUMPY =======================
{
  id: 'B4.1', module: 'B', topic: 'B4', minutes: 20,
  title: 'NumPy: array, shape, reshape, indexing & slicing',
  skills: ['numpy.shape.read', 'numpy.reshape.ndim', 'numpy.slice.column-one-dimensional', 'numpy.slice.column-two-dimensional', 'numpy.code.compare-integer-and-slice', 'mlq.numpy'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
NumPy là phần <b>nhiều câu nhất</b> của Module B (khoảng 50 câu trong bộ đề mô phỏng). Hầu hết các câu xoay quanh một chuyện: <b>shape</b> của mảng là gì.</div>

<h2>1. Tạo mảng & đọc shape</h2>
<pre><code class="language-python">import numpy as np
a = np.array([1, 2, 3])         # shape (3,)    1 chiều
x = np.zeros((3, 4))            # shape (3, 4)  3 hàng, 4 cột
np.ones((2, 3))                 # toàn số 1
np.arange(6)                    # [0 1 2 3 4 5]
np.arange(6).reshape(2, 3)      # [[0 1 2]
                                #  [3 4 5]]   shape (2, 3)</code></pre>
<table>
<tr><th>Thuộc tính</th><th>Ý nghĩa</th><th>Với <code>np.zeros((3,4))</code></th></tr>
<tr><td><code>.shape</code></td><td>Kích thước từng chiều</td><td>(3, 4)</td></tr>
<tr><td><code>.ndim</code></td><td>Số chiều</td><td>2</td></tr>
<tr><td><code>.size</code></td><td>Tổng số phần tử</td><td>12</td></tr>
</table>
<p><code>reshape</code> phải giữ nguyên tổng số phần tử: 6 phần tử thì reshape được thành (2,3), (3,2), (6,1), nhưng không thành (4,2). <code>reshape(-1)</code> làm phẳng thành 1 chiều.</p>

<h2>2. Chỉ số & slicing 2 chiều: <code>x[hàng, cột]</code></h2>
<pre><code class="language-python">x = np.arange(12).reshape(3, 4)
# [[ 0  1  2  3]
#  [ 4  5  6  7]
#  [ 8  9 10 11]]
x[1, 2]      # 6         hàng 1, cột 2
x[0]         # [0 1 2 3] cả hàng 0
x[:, 1]      # [1 5 9]   mọi hàng, cột 1
x[:2, 1:3]   # [[1 2] [5 6]]  2 hàng đầu, cột 1–2</code></pre>

<h2>3. Điểm quan trọng nhất: số nguyên vs slice</h2>
<div class="box idea"><span class="box-title">💡 Quy tắc vàng</span>
Chọn bằng <b>một số nguyên</b> → chiều đó <b>biến mất</b>.<br>
Chọn bằng <b>slice</b> (có dấu <code>:</code>) → chiều đó <b>được giữ lại</b>.</div>
<pre><code class="language-python">x[:, 2]     # [ 2  6 10]        shape (3,)    ← mất chiều cột
x[:, 2:3]   # [[ 2] [ 6] [10]]  shape (3, 1)  ← giữ chiều cột</code></pre>
<p>Cùng một cột dữ liệu, nhưng shape khác nhau. Đề có câu hỏi đúng điểm này.</p>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Nhầm shape (3, 4) là 4 hàng 3 cột. Luôn đọc là (<b>hàng</b>, <b>cột</b>).</li><li><code>x.shape</code> là thuộc tính, không có dấu ngoặc ().</li><li>Quên rằng <code>arange(6)</code> bắt đầu từ 0.</li></ul></div>
<h2>Bổ sung: lệnh NumPy hay hỏi</h2>
<pre><code class="language-python">a = np.array([1, 2, 3])
a.dtype                  # mọi phần tử CÙNG một kiểu → gọn và nhanh hơn list Python
np.arange(1, 10, 2)      # [1 3 5 7 9]   (bước 2, dừng trước 10)
a[-1]                    # 3   chỉ số âm: phần tử cuối
A.T                      # chuyển vị, giống A.transpose()
np.where(a > 1, 1, 0)    # [0 1 1]   "if-else" trên cả mảng</code></pre>
`},

{
  id: 'B4.2', module: 'B', topic: 'B4', minutes: 18,
  title: 'NumPy: axis & boolean indexing (lọc mảng)',
  skills: ['numpy.axis.sum-zero', 'numpy.axis.mean-one', 'numpy.boolean-indexing.parity', 'numpy.code.explain-slice-mean-mask'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đàn anh dặn <b>"mảng: lọc data với mảng"</b>. Đó chính là boolean indexing. Còn <code>axis</code> là chỗ người mới nhầm nhiều nhất.</div>

<h2>1. axis: tính dọc hay ngang?</h2>
<div class="box idea"><span class="box-title">💡 Mẹo nhớ</span>
<b>axis=0</b>: tính <b>dọc xuống</b> (gộp các hàng) → mỗi <b>cột</b> cho 1 kết quả.<br>
<b>axis=1</b>: tính <b>ngang qua</b> (gộp các cột) → mỗi <b>hàng</b> cho 1 kết quả.<br>
Chiều nào được chọn làm axis thì <b>chiều đó biến mất</b> khỏi shape.</div>
<pre><code class="language-python">x = np.array([[1, 2, 3],
              [4, 5, 6]])      # shape (2, 3)
x.sum()          # 21              tổng tất cả
x.sum(axis=0)    # [5 7 9]         tổng từng CỘT → shape (3,)
x.sum(axis=1)    # [ 6 15]         tổng từng HÀNG → shape (2,)
x.mean(axis=1)   # [2. 5.]         trung bình từng hàng</code></pre>
<p>Shape (3, 4) mà <code>sum(axis=0)</code> → bỏ chiều 0 → shape <b>(4,)</b>.</p>

<h2>2. Boolean indexing: lọc phần tử theo điều kiện</h2>
<pre><code class="language-python">x = np.array([1, 2, 3, 4, 5])
x % 2 == 1          # [ True False  True False  True]  ← "mặt nạ" (mask)
x[x % 2 == 1]       # [1 3 5]   giữ chỗ True
x[x > 2]            # [3 4 5]
x[(x > 1) &amp; (x &lt; 5)]   # [2 3 4]   kết hợp: &amp; (và), | (hoặc), có ngoặc!
(x > 2).sum()       # 3   đếm số phần tử thỏa (True = 1)
(x >= 3).mean()     # 0.6 tỉ lệ phần tử thỏa</code></pre>
<p>Với mảng 2 chiều, kết quả lọc luôn là mảng <b>1 chiều</b>.</p>

<h2>3. Dạng câu mở: giải thích từng dòng</h2>
<pre><code class="language-python">x = np.array([[1, 2, 3], [5, 6, 7]])   # shape (2, 3)
y = x[:, 1:]          # [[2 3] [6 7]]   shape (2, 2)
z = y.mean(axis=0)    # [4. 5.]         shape (2,)
m = x[x % 2 == 0]     # [2 6]           shape (2,)  ← 1 chiều</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Đảo ngược axis=0 và axis=1.</li><li>Dùng <code>and</code>/<code>or</code> thay vì <code>&amp;</code>/<code>|</code> → lỗi.</li><li>Nhầm kết quả là mask True/False (chưa lọc) với mảng đã lọc.</li></ul></div>
`},

{
  id: 'B4.3', module: 'B', topic: 'B4', minutes: 22,
  title: 'NumPy: broadcasting & nhân ma trận',
  skills: ['numpy.broadcast.scalar', 'numpy.broadcast.row-vector', 'numpy.broadcast.compute-row-vector', 'numpy.broadcast.column-vector', 'numpy.broadcast.multi-dimensional-shape', 'numpy.code.matmul-vs-elementwise', 'numpy.code.matmul-reshape-add', 'numpy.code.transpose-matmul', 'mlq.numpy-ops'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Ngày thi đầu có câu code về <b>broadcasting và shape sau broadcasting</b>, cùng phép nhân/cộng ma trận. Phần này nối thẳng với bài nhân ma trận ở Module A (A4.3).</div>

<h2>1. Phép toán từng phần tử (element-wise)</h2>
<pre><code class="language-python">a = np.array([1, 2, 3])
a * 2        # [2 4 6]   (list Python [1,2,3]*2 lại cho [1,2,3,1,2,3]!)
a + a        # [2 4 6]
a * a        # [1 4 9]</code></pre>

<h2>2. Broadcasting: "kéo giãn" mảng nhỏ cho khớp mảng lớn</h2>
<div class="box formula"><b>Quy tắc:</b> so shape từ <b>phải sang trái</b>. Hai chiều tương ứng khớp được khi <b>bằng nhau</b> hoặc <b>một trong hai bằng 1</b>. Chiều thiếu thì coi như 1. Shape kết quả lấy số <b>lớn hơn</b> ở mỗi chiều.</div>
<table>
<tr><th>A</th><th>B</th><th>Kết quả</th></tr>
<tr><td>(2, 3)</td><td>số vô hướng</td><td>(2, 3)</td></tr>
<tr><td>(2, 3)</td><td>(3,)</td><td>(2, 3): B được cộng vào <b>từng hàng</b></td></tr>
<tr><td>(2, 3)</td><td>(2, 1)</td><td>(2, 3): B được cộng vào <b>từng cột</b></td></tr>
<tr><td>(2, 1, 3)</td><td>(1, 4, 1)</td><td>(2, 4, 3)</td></tr>
<tr><td>(2, 3)</td><td>(2,)</td><td><b>Lỗi</b> (3 ≠ 2 và không có số 1)</td></tr>
</table>

<p><b>Vector hàng:</b></p>
<pre><code class="language-python">x = np.array([[1, 2, 3], [4, 5, 6]])   # (2, 3)
v = np.array([10, 20, 30])             # (3,)
x + v    # [[11 22 33]
         #  [14 25 36]]  shape (2, 3)</code></pre>
<p><b>Vector cột:</b></p>
<pre><code class="language-python">A = np.arange(6).reshape(2, 3)   # [[0 1 2] [3 4 5]]
b = np.array([[10], [20]])       # (2, 1)
A + b    # [[10 11 12]
         #  [23 24 25]]  hàng 1 cộng 10, hàng 2 cộng 20</code></pre>
<p><b>Nhiều chiều:</b> <code>np.ones((2,1,3)) + np.arange(4).reshape(1,4,1)</code>: so từ phải: 3 với 1 → 3; 1 với 4 → 4; 2 với 1 → 2. Shape <b>(2, 4, 3)</b>.</p>

<h2>3. <code>*</code> khác <code>@</code></h2>
<table>
<tr><th></th><th><code>A * B</code></th><th><code>A @ B</code></th></tr>
<tr><td>Là gì</td><td>Nhân <b>từng phần tử</b> cùng vị trí</td><td><b>Nhân ma trận</b> (hàng × cột, bài A4.3)</td></tr>
<tr><td>Yêu cầu shape</td><td>Bằng nhau / broadcast được</td><td>(m×n) @ (n×p) → (m×p)</td></tr>
</table>
<pre><code class="language-python">A = np.array([[1, 2], [3, 4]])
B = np.array([[2, 0], [1, 2]])
A * B   # [[2 0] [3 8]]
A @ B   # [[4 4] [10 8]]   ô (0,0) = 1×2 + 2×1 = 4</code></pre>
<p><b>Chuyển vị:</b> <code>x.T</code>. Nếu x có shape (2, 3) thì <code>x.T @ x</code> có shape (3, 2) @ (2, 3) = <b>(3, 3)</b>.</p>
<p><b>Kết hợp:</b> <code>A</code> (2×3) <code>@ B</code> (3×1) → (2×1) <code>.reshape(2)</code> → (2,), cộng được với vector (2,).</p>

<div class="box tip"><span class="box-title">⚡ Quy trình khi gặp câu shape</span>
<ol><li>Ghi shape của từng biến.</li><li>Áp quy tắc broadcasting / quy tắc nhân ma trận để ra shape kết quả.</li><li>Chỉ tính giá trị khi đề hỏi; thường chỉ cần tính 1–2 ô.</li></ol></div>
<h2>Bổ sung</h2>
<ul><li><code>np.dot(A, B)</code> với hai ma trận 2 chiều là <b>nhân ma trận</b>, cho kết quả giống <code>A @ B</code>.</li>
<li><code>np.random.seed(42)</code>: cố định bộ sinh số ngẫu nhiên → chạy lại ra đúng kết quả cũ (tái lập thí nghiệm).</li></ul>
`},

// ======================= B5 PANDAS =======================
{
  id: 'B5.1', module: 'B', topic: 'B5', minutes: 20,
  title: 'Pandas: DataFrame, chọn & lọc dữ liệu (loc / iloc)',
  skills: ['pd.select', 'mlq.pandas'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion ghi rõ đề <b>"có 1 câu iloc khác gì loc"</b> và câu tự luận dùng Pandas. Bộ đề mô phỏng gần như không có Pandas, nên phần này rất dễ bị hổng nếu chỉ luyện đề.</div>

<h2>1. DataFrame là một bảng</h2>
<pre><code class="language-python">import pandas as pd
df = pd.DataFrame({
    'name': ['An', 'Bình', 'Chi'],
    'age':  [17, 25, 32],
    'city': ['HN', 'HCM', 'HN'],
})
df.shape      # (3, 3)  (số dòng, số cột)
df.head(2)    # 2 dòng đầu
df.info()     # kiểu dữ liệu, số giá trị khác null
df.describe() # thống kê mô tả cột số
df['age']     # một cột → Series
df[['name', 'age']]   # nhiều cột → DataFrame</code></pre>

<h2>2. loc vs iloc</h2>
<table>
<tr><th></th><th><code>loc</code></th><th><code>iloc</code></th></tr>
<tr><td>Chọn theo</td><td><b>Nhãn</b> (tên index, tên cột)</td><td><b>Vị trí</b> số (0, 1, 2…)</td></tr>
<tr><td>Slice</td><td><code>loc[0:2]</code> <b>gồm cả</b> nhãn 2</td><td><code>iloc[0:2]</code> <b>không gồm</b> vị trí 2</td></tr>
<tr><td>Ví dụ</td><td><code>df.loc[0, 'name']</code></td><td><code>df.iloc[0, 0]</code></td></tr>
</table>
<p>Nếu index là [10, 20, 30] thì <code>df.loc[10]</code> và <code>df.iloc[0]</code> đều là dòng đầu, còn <code>df.loc[0]</code> báo lỗi.</p>

<h2>3. Lọc dòng theo điều kiện</h2>
<pre><code class="language-python">df[df['age'] >= 18]                              # dòng có age >= 18
df[(df['age'] > 18) &amp; (df['city'] == 'HN')]     # VÀ: &amp;, mỗi điều kiện trong ngoặc
df[(df['city'] == 'HN') | (df['city'] == 'HCM')] # HOẶC: |
df[df['city'].isin(['HN', 'HCM'])]               # thuộc danh sách
df.loc[df['age'] > 30, 'name']                   # lọc dòng + chọn cột</code></pre>
<div class="box idea"><span class="box-title">💡 Giống NumPy</span><code>df['age'] >= 18</code> tạo ra một cột True/False (mask), rồi <code>df[mask]</code> giữ các dòng True. Cùng ý tưởng với boolean indexing ở bài B4.2.</div>

<h2>4. Thêm / sửa cột</h2>
<pre><code class="language-python">df['adult'] = df['age'] >= 18
df['age_next'] = df['age'] + 1
df = df.rename(columns={'name': 'full_name'})</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Dùng <code>and</code>/<code>or</code> → lỗi. Phải là <code>&amp;</code>/<code>|</code> kèm ngoặc.</li><li><code>df['age' >= 18]</code> sai cú pháp.</li><li>Nhầm loc/iloc khi index không phải 0, 1, 2…</li></ul></div>
<h2>Bổ sung: lệnh Pandas hay hỏi</h2>
<pre><code class="language-python">pd.read_csv('file.csv')        # đọc CSV
# Series = mảng 1 chiều có nhãn; DataFrame = bảng 2 chiều
df.head()                      # 5 dòng đầu (mặc định n=5)
df.describe()                  # count, mean, std, min, quartile, max
df['name'].apply(str.upper)    # áp một hàm lên từng ô của cột
df.sum(axis=0)                 # theo từng CỘT (dọc xuống);  axis=1: theo từng HÀNG
df.dropna(inplace=True)        # inplace=True: sửa thẳng df, không trả bảng mới
df.reset_index(drop=True)      # đánh lại index 0, 1, 2… sau khi lọc</code></pre>
`},

{
  id: 'B5.2', module: 'B', topic: 'B5', minutes: 15,
  title: 'Pandas: groupby, sort, value_counts, merge',
  skills: ['pd.aggregate', 'mlq.pandas-agg'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Gom nhóm, đếm, sắp xếp và nối bảng là 4 thao tác phân tích dữ liệu dùng hằng ngày.</div>

<h2>1. value_counts: đếm tần suất</h2>
<pre><code class="language-python">df['status'].value_counts()   # mỗi giá trị xuất hiện bao nhiêu lần, giảm dần
df['status'].value_counts(normalize=True)   # tỉ lệ thay vì số lượng
df['status'].nunique()        # số giá trị khác nhau</code></pre>

<h2>2. groupby: chia nhóm rồi tính</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>"Chia bảng theo user → trong mỗi nhóm lấy cột amount → cộng lại."</div>
<pre><code class="language-python">df.groupby('user')['amount'].sum()     # tổng amount theo từng user
df.groupby('city')['salary'].mean()    # lương trung bình theo city
df.groupby('city').size()              # số dòng mỗi city
df.groupby('city')['salary'].agg(['mean', 'max'])</code></pre>
<p><b>Ví dụ:</b> city = [HN, HN, HCM], amount = [10, 20, 5] → <code>groupby('city')['amount'].sum()</code> = HCM 5, HN 30.</p>

<h2>3. sort_values</h2>
<pre><code class="language-python">df.sort_values('score')                     # tăng dần
df.sort_values('score', ascending=False)    # giảm dần
df.sort_values(['city', 'age'])             # theo city, cùng city thì theo age
df.nlargest(3, 'score')                     # 3 dòng score cao nhất</code></pre>

<h2>4. merge: nối hai bảng theo cột chung</h2>
<pre><code class="language-python">pd.merge(users, orders, on='id', how='left')</code></pre>
<table>
<tr><th>how</th><th>Giữ lại</th></tr>
<tr><td><code>inner</code> (mặc định)</td><td>Chỉ id có ở <b>cả hai</b> bảng</td></tr>
<tr><td><code>left</code></td><td><b>Mọi dòng bảng trái</b>; không khớp thì để NaN</td></tr>
<tr><td><code>right</code></td><td>Mọi dòng bảng phải</td></tr>
<tr><td><code>outer</code></td><td>Mọi id của cả hai bảng</td></tr>
</table>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>Viết sai tên hàm: <code>count_values</code>, <code>value_count</code> đều sai; đúng là <code>value_counts()</code>.</div>
<h2>Bổ sung</h2>
<ul><li><code>df.nunique()</code>: đếm số giá trị <b>khác nhau</b> ở mỗi cột.</li>
<li><code>merge</code> = nối theo cột khóa (giống JOIN trong SQL); <code>pd.concat</code> = <b>xếp chồng</b> các bảng theo dòng hoặc cột.</li></ul>
`},

// ======================= B6 LÀM SẠCH DỮ LIỆU =======================
{
  id: 'B6.1', module: 'B', topic: 'B6', minutes: 22,
  title: 'Làm sạch dữ liệu với Pandas',
  skills: ['pd.clean', 'mlq.pandas-clean'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Notion có hẳn một trang "Full ML pipeline" về làm sạch dữ liệu, và câu tự luận có thể yêu cầu <b>"xóa khoảng trắng, xóa None…"</b>. Làm sạch dữ liệu cũng chiếm khoảng 80% công việc thực tế của người làm AI.</div>

<h2>1. Quy trình chuẩn</h2>
<pre><code class="language-python">Đọc dữ liệu → Xem cấu trúc → Xử lý thiếu → Xóa trùng
→ Sửa kiểu dữ liệu → Làm sạch chuỗi → Xử lý outlier → Encode</code></pre>

<h2>2. Code mẫu đầy đủ (từ Notion, có chú thích)</h2>
<pre><code class="language-python">import pandas as pd

df = pd.read_csv('data.csv')             # 1. đọc
print(df.info())                         # 2. xem kiểu, số null
print(df.isnull().sum())                 #    số giá trị thiếu mỗi cột

df = df.drop_duplicates()                # 3. xóa dòng trùng

# 4. xử lý giá trị thiếu
df['age'] = df['age'].fillna(df['age'].mean())      # cột SỐ → mean/median
df['sex'] = df['sex'].fillna(df['sex'].mode()[0])   # cột PHÂN LOẠI → mode
df = df.dropna(subset=['target'])                   # thiếu nhãn → bỏ dòng

# 5. làm sạch chuỗi
df['name'] = df['name'].str.strip()                 # bỏ khoảng trắng 2 đầu
df['city'] = df['city'].str.strip().str.lower()     # ' HaNoi ' → 'hanoi'
df['city'] = df['city'].str.replace('hanoi', 'Hà Nội')

# 6. đổi kiểu dữ liệu
df['price'] = df['price'].astype(int)
df['date'] = pd.to_datetime(df['date'])

# 7. lọc giá trị không hợp lệ / outlier
df = df[(df['age'] > 0) &amp; (df['age'] &lt; 100)]

# 8. encode biến phân loại
df = pd.get_dummies(df, columns=['sex'], drop_first=True)</code></pre>

<h2>3. Giá trị thiếu: xóa hay điền?</h2>
<table>
<tr><th>Tình huống</th><th>Cách làm</th></tr>
<tr><td>Rất ít dòng thiếu, dữ liệu nhiều</td><td><code>dropna()</code></td></tr>
<tr><td>Cột số</td><td><code>fillna(mean)</code>; có outlier thì dùng <b>median</b></td></tr>
<tr><td>Cột phân loại</td><td><code>fillna(mode()[0])</code> hoặc giá trị 'Unknown'</td></tr>
<tr><td>Cột thiếu quá nhiều (>50%)</td><td>Cân nhắc bỏ cả cột: <code>dropna(axis=1)</code> / <code>drop(columns=...)</code></td></tr>
</table>

<h2>4. Outlier bằng IQR</h2>
<pre><code class="language-python">q1, q3 = df['salary'].quantile(0.25), df['salary'].quantile(0.75)
iqr = q3 - q1
df = df[(df['salary'] >= q1 - 1.5*iqr) &amp; (df['salary'] &lt;= q3 + 1.5*iqr)]</code></pre>

<h2>5. Đếm nhanh</h2>
<pre><code class="language-python">s = pd.Series([10, None, 30])
s.isna().sum()          # 1
df.duplicated().sum()   # số dòng trùng
df.drop_duplicates(subset=['user_id'])   # mỗi user_id giữ dòng ĐẦU TIÊN</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li><code>df['name'].strip()</code> → lỗi. Thao tác chuỗi trên cả cột phải qua <code>.str</code>.</li><li><code>int(df['price'])</code> → lỗi. Dùng <code>.astype(int)</code>.</li><li><b>Data leakage:</b> tính mean để fillna trên TOÀN bộ dữ liệu trước khi tách train/test. Đúng là tính trên train rồi áp dụng cho test.</li></ul></div>
`},

{
  id: 'B6.2', module: 'B', topic: 'B6', minutes: 22,
  title: 'SQL cơ bản: truy vấn, lọc, gom nhóm, nối bảng',
  skills: ['ts.sql'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Phần lớn dữ liệu của doanh nghiệp nằm trong cơ sở dữ liệu, và SQL là ngôn ngữ để lấy nó ra. "Xử lý dữ liệu" trong tên Module B không chỉ có Pandas. Nếu đã học Pandas thì SQL rất dễ, vì hai thứ làm cùng một việc với cú pháp khác nhau.</div>

<h2>1. Khung một câu truy vấn</h2>
<pre><code class="language-sql">SELECT city, COUNT(*) AS so_don, AVG(amount) AS tb
FROM orders
WHERE amount > 0
GROUP BY city
HAVING COUNT(*) >= 2
ORDER BY tb DESC
LIMIT 3;</code></pre>
<table>
<tr><th>Mệnh đề</th><th>Việc nó làm</th><th>Pandas tương ứng</th></tr>
<tr><td><code>SELECT</code></td><td>Chọn cột (<code>*</code> là mọi cột); <code>DISTINCT</code> bỏ trùng</td><td><code>df[['a', 'b']]</code></td></tr>
<tr><td><code>FROM</code></td><td>Lấy từ bảng nào</td><td><code>df</code></td></tr>
<tr><td><code>WHERE</code></td><td>Lọc <b>từng dòng</b> trước khi gom nhóm</td><td><code>df[df.a > 0]</code></td></tr>
<tr><td><code>GROUP BY</code></td><td>Gom các dòng thành nhóm</td><td><code>df.groupby('city')</code></td></tr>
<tr><td><code>HAVING</code></td><td>Lọc <b>nhóm</b> sau khi gom (dùng được hàm gộp)</td><td>lọc trên kết quả groupby</td></tr>
<tr><td><code>ORDER BY</code></td><td>Sắp xếp; <code>DESC</code> là giảm dần</td><td><code>sort_values</code></td></tr>
<tr><td><code>LIMIT</code></td><td>Lấy n dòng đầu</td><td><code>head(n)</code></td></tr>
</table>
<div class="box formula"><b>Thứ tự thực thi</b> (khác thứ tự viết):<br>FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY → LIMIT</div>
<p>Vì thế <code>WHERE</code> không dùng được hàm gộp như <code>COUNT(*)</code>. Muốn lọc theo kết quả gộp thì dùng <code>HAVING</code>.</p>

<h2>2. Hàm gộp</h2>
<p><code>COUNT(*)</code> đếm số dòng · <code>COUNT(cot)</code> đếm số giá trị <b>khác NULL</b> · <code>SUM</code> · <code>AVG</code> · <code>MIN</code> · <code>MAX</code>.</p>

<h2>3. Điều kiện lọc</h2>
<pre><code class="language-sql">WHERE age >= 18 AND city = 'HN'
WHERE city IN ('HN', 'HCM')
WHERE name LIKE 'Ng%'          -- bắt đầu bằng "Ng"
WHERE price BETWEEN 10 AND 20
WHERE email IS NULL            -- KHÔNG viết = NULL</code></pre>

<h2>4. Nối bảng (JOIN)</h2>
<pre><code class="language-sql">SELECT u.name, o.amount
FROM users u
LEFT JOIN orders o ON o.user_id = u.id;</code></pre>
<table>
<tr><th>Loại</th><th>Giữ lại</th></tr>
<tr><td><code>INNER JOIN</code></td><td>Chỉ các dòng khớp ở <b>cả hai</b> bảng</td></tr>
<tr><td><code>LEFT JOIN</code></td><td>Mọi dòng bảng <b>trái</b>; không khớp thì cột bên phải là NULL</td></tr>
<tr><td><code>RIGHT JOIN</code></td><td>Mọi dòng bảng phải</td></tr>
<tr><td><code>FULL OUTER JOIN</code></td><td>Mọi dòng của cả hai bảng</td></tr>
</table>
<p>Giống hệt <code>pd.merge(..., how='inner' / 'left' / 'right' / 'outer')</code> ở bài B5.2.</p>

<h2>5. Khái niệm nền</h2>
<ul>
<li><b>Khóa chính</b> (primary key): cột định danh duy nhất mỗi dòng. <b>Khóa ngoại</b> (foreign key): cột trỏ tới khóa chính của bảng khác.</li>
<li>Thay đổi dữ liệu: <code>INSERT INTO</code>, <code>UPDATE ... SET ... WHERE</code>, <code>DELETE FROM ... WHERE</code>.</li>
</ul>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li><code>= NULL</code> luôn không khớp dòng nào. Phải dùng <code>IS NULL</code>.</li>
<li>Dùng hàm gộp trong <code>WHERE</code> thay vì <code>HAVING</code>.</li>
<li><code>UPDATE</code> hoặc <code>DELETE</code> quên <code>WHERE</code>: thay đổi <b>toàn bộ</b> bảng.</li>
<li>Cột trong <code>SELECT</code> không nằm trong <code>GROUP BY</code> và cũng không nằm trong hàm gộp.</li></ul></div>
`},

// ======================= B7 API & REQUESTS =======================
{
  id: 'B7.1', module: 'B', topic: 'B7', minutes: 20,
  title: 'HTTP & requests: gửi request đúng cách',
  skills: ['api.requests.get-params-timeout', 'api.requests.post-json', 'api.requests.params-vs-json', 'api.auth.bearer-header', 'api.secret.basic-handling'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Phản hồi người thi xác nhận Module B có <b>"Python gọi API"</b> (khoảng 70 câu trong bộ mô phỏng). Sản phẩm AI thật luôn gọi API, ví dụ gọi LLM hay lấy dữ liệu.</div>

<h2>1. API & HTTP là gì?</h2>
<div class="box idea"><span class="box-title">💡 Hiểu nhanh</span>
API giống <b>quầy gọi món</b>: bạn gửi một <b>yêu cầu (request)</b> theo đúng mẫu, máy chủ trả lại <b>phản hồi (response)</b>. HTTP là "ngôn ngữ" của cuộc trao đổi đó.</div>
<table>
<tr><th>Method</th><th>Dùng để</th></tr>
<tr><td><code>GET</code></td><td><b>Lấy</b> dữ liệu (tham số nằm trên URL)</td></tr>
<tr><td><code>POST</code></td><td><b>Gửi</b> dữ liệu lên (nằm trong body)</td></tr>
<tr><td><code>PUT</code> / <code>DELETE</code></td><td>Cập nhật / xóa</td></tr>
</table>

<h2>2. GET với tham số & timeout</h2>
<pre><code class="language-python">import requests
r = requests.get(
    'https://api.example.com/search',
    params={'q': 'ai', 'limit': 5},   # → ...search?q=ai&amp;limit=5
    timeout=4,                        # chờ tối đa 4 giây
)</code></pre>
<p>Luôn đặt <b>timeout</b>: không có timeout thì chương trình có thể treo mãi khi server không trả lời.</p>

<h2>3. POST gửi JSON</h2>
<pre><code class="language-python">payload = {'text': 'xin chào', 'lang': 'vi'}
r = requests.post(url, json=payload, timeout=6)</code></pre>
<table>
<tr><th>Tham số</th><th>Đi vào đâu</th></tr>
<tr><td><code>params=</code></td><td><b>Query string</b> trên URL (<code>?q=ai</code>), thường dùng với GET</td></tr>
<tr><td><code>json=</code></td><td><b>Body</b> dạng JSON, tự đặt header Content-Type: application/json</td></tr>
<tr><td><code>data=</code></td><td>Body dạng form</td></tr>
<tr><td><code>headers=</code></td><td>Header (xác thực, kiểu dữ liệu…)</td></tr>
</table>

<h2>4. Xác thực bằng token & bảo vệ API key</h2>
<pre><code class="language-python">import os
token = os.environ['API_TOKEN']          # đọc từ biến môi trường
r = requests.get(url,
                 headers={'Authorization': f'Bearer {token}'},
                 timeout=5)</code></pre>
<div class="box trap"><span class="box-title">⚠️ Không bao giờ</span>
<ul><li>Ghi thẳng key vào code rồi đẩy lên GitHub.</li><li>Đưa key vào URL (<code>url + token</code>).</li><li><code>print(token)</code> hoặc ghi key vào log.</li></ul></div>
`},

{
  id: 'B7.2', module: 'B', topic: 'B7', minutes: 20,
  title: 'Xử lý response: status code, JSON, kiểm tra dữ liệu, bắt lỗi',
  skills: ['api.http.raise-for-status', 'api.http.status', 'api.response.parse-json', 'api.response.schema-validation', 'api.response.required-field', 'api.requests.exception-handling'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Gọi API xong thì phải <b>kiểm tra kết quả trước khi dùng</b>. Đề hỏi nhiều về mã HTTP, <code>raise_for_status</code>, <code>response.json()</code>, kiểm tra schema và bắt lỗi.</div>

<h2>1. Mã trạng thái HTTP</h2>
<table>
<tr><th>Mã</th><th>Ý nghĩa</th></tr>
<tr><td><b>200</b> OK / 201 Created</td><td>Thành công</td></tr>
<tr><td><b>400</b> Bad Request</td><td>Request sai định dạng/tham số</td></tr>
<tr><td><b>401</b> Unauthorized</td><td><b>Chưa xác thực</b> hoặc token sai</td></tr>
<tr><td><b>403</b> Forbidden</td><td>Đã xác thực nhưng <b>không có quyền</b></td></tr>
<tr><td><b>404</b> Not Found</td><td>Không tìm thấy tài nguyên</td></tr>
<tr><td><b>429</b> Too Many Requests</td><td>Gọi quá nhiều, bị giới hạn tốc độ</td></tr>
<tr><td><b>500</b> / 502 / 503</td><td>Lỗi phía máy chủ</td></tr>
</table>
<p>Nhớ nhanh: <b>2xx</b> thành công · <b>4xx</b> lỗi phía người gọi · <b>5xx</b> lỗi phía server.</p>

<h2>2. Khung xử lý chuẩn (thuộc lòng)</h2>
<pre><code class="language-python">import requests

def get_score(url):
    try:
        r = requests.get(url, timeout=5)
        r.raise_for_status()          # 4xx/5xx → ném HTTPError
        data = r.json()               # JSON → dict/list Python
    except requests.RequestException as exc:   # lớp cha mọi lỗi của requests
        raise RuntimeError('Gọi API thất bại') from exc

    # Kiểm tra schema: KHÔNG tin dữ liệu từ bên ngoài
    if not isinstance(data, dict) or 'score' not in data:
        raise ValueError('Thiếu trường score')
    if not isinstance(data['score'], (int, float)):
        raise ValueError('score phải là số')
    return data['score']</code></pre>

<h2>3. Giải thích từng phần</h2>
<ul>
<li><code>raise_for_status()</code>: biến mã lỗi 4xx/5xx thành ngoại lệ, tránh xử lý nhầm một phản hồi lỗi như thể dữ liệu đúng.</li>
<li><code>r.json()</code>: chuyển body JSON thành dict/list. <b>Không dùng <code>eval(r.text)</code></b>, vì nó chạy code lạ từ mạng và rất nguy hiểm.</li>
<li><code>requests.RequestException</code>: bắt được timeout, mất kết nối, HTTPError…</li>
<li><b>Kiểm tra schema</b>: đúng kiểu (dict), có trường bắt buộc, danh sách không rỗng, giá trị là số.</li>
</ul>

<h2>4. Ví dụ kiểm tra danh sách</h2>
<pre><code class="language-python">values = data.get('values') if isinstance(data, dict) else None
if not isinstance(values, list) or not values \
   or not all(isinstance(v, (int, float)) for v in values):
    raise ValueError('values phải là danh sách số không rỗng')</code></pre>

<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li>Nhầm 401 (chưa xác thực) với 403 (không có quyền).</li><li><code>response.json</code> là phương thức nên cần <code>()</code>.</li><li>Tin rằng API luôn trả đúng schema.</li></ul></div>
`},

// ======================= B8 CODE TỰ LUẬN =======================
{
  id: 'B8.1', module: 'B', topic: 'B8', minutes: 25,
  title: 'Luyện viết hàm (câu code tự luận)',
  skills: ['py.code-function', 'api.code.fetch-validate-average', 'api.code.debug-unsafe-request', 'api-numpy.code.fetch-pass-rate'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Đề có <b>2 câu code</b> (khoảng 2,5 điểm mỗi câu). Bạn không cần code hay, chỉ cần <b>đúng, rõ ràng, có xử lý trường hợp đặc biệt</b>. Bài chấm theo rubric từng ý, nên viết được một phần vẫn có điểm.</div>

<h2>1. Khung 4 bước cho mọi bài</h2>
<ol class="steps">
<li><b>Đọc kỹ input/output:</b> nhận gì (list? dict? chuỗi?), trả về gì?</li>
<li><b>Xử lý trường hợp đặc biệt trước:</b> list rỗng, None, chia cho 0, tất cả giá trị bằng nhau…</li>
<li><b>Viết logic chính</b> bằng vòng for đơn giản; ưu tiên dễ hiểu.</li>
<li><b>Thử lại bằng ví dụ của đề</b>, ghi kết quả kèm một dòng giải thích.</li>
</ol>

<h2>2. Các mẫu hay ra (đã có trong đề luyện)</h2>
<p><b>Đếm bằng dict</b></p>
<pre><code class="language-python">def count_words(text):
    counts = {}
    for word in text.split():
        counts[word] = counts.get(word, 0) + 1
    return counts</code></pre>
<p><b>Lọc theo điều kiện</b></p>
<pre><code class="language-python">def sum_even(arr):
    return sum(x for x in arr if x % 2 == 0)

def filter_non_empty(strings):
    return [s.strip() for s in strings if s and s.strip()]

def label_by_threshold(scores, threshold):
    return [1 if s >= threshold else 0 for s in scores]</code></pre>
<p><b>Trường hợp đặc biệt</b></p>
<pre><code class="language-python">def safe_mean(arr):
    if not arr:              # list rỗng
        return 0
    return sum(arr) / len(arr)

def min_max_scale(arr):
    lo, hi = min(arr), max(arr)
    if hi == lo:             # tránh chia cho 0
        return [0 for _ in arr]
    return [(x - lo) / (hi - lo) for x in arr]</code></pre>
<p><b>Loại trùng giữ thứ tự</b> (dùng set để kiểm tra nhanh)</p>
<pre><code class="language-python">def dedupe_preserve_order(arr):
    seen, out = set(), []
    for x in arr:
        if x not in seen:
            seen.add(x)
            out.append(x)
    return out</code></pre>
<p><b>Gom nhóm & top-k</b></p>
<pre><code class="language-python">def build_user_total(records):
    totals = {}
    for r in records:
        totals[r['user']] = totals.get(r['user'], 0) + r['amount']
    return totals

def top_k_scores(items, k):
    return sorted(items, key=lambda t: t[1], reverse=True)[:k]</code></pre>

<h2>3. Mẫu kết hợp API + NumPy</h2>
<pre><code class="language-python">import requests
import numpy as np

def fetch_pass_rate(url):
    r = requests.get(url, timeout=5)
    r.raise_for_status()
    payload = r.json()
    scores = payload.get('scores') if isinstance(payload, dict) else None
    if not isinstance(scores, list) or not scores:
        raise ValueError('scores phải là danh sách không rỗng')
    arr = np.array(scores, dtype=float)
    return float((arr >= 50).mean())   # tỉ lệ phần tử >= 50</code></pre>

<div class="box tip"><span class="box-title">✍️ Mẹo lấy điểm rubric</span>
<ul><li>Đặt tên biến rõ nghĩa và thêm 1–2 dòng chú thích.</li><li>Ghi rõ "Ví dụ: <code>count_words('a b a')</code> → <code>{'a': 2, 'b': 1}</code>".</li><li>Không nhớ cú pháp chính xác thì vẫn viết đúng logic. Rubric chấm theo ý.</li></ul></div>
`},

{
  id: 'B8.2', module: 'B', topic: 'B8', minutes: 30,
  title: 'Code tự luận với NumPy/Pandas: xử lý mảng, bảng & khoảng cách vector (cosine similarity)',
  skills: ['ts.cosine', 'ts.code-vector', 'ts.code-numpy', 'ts.code-pandas'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
Một người vừa thi kể: có <b>2–3 câu code</b>, yêu cầu <b>xử lý array hoặc bảng dữ liệu bằng Pandas/NumPy</b> và <b>viết các hàm khoảng cách vector như cosine similarity</b>. Bài này gom đúng các mẫu đó. Mục tiêu: nhìn đề là viết ra được khung, vì câu code chấm theo từng ý.</div>

<h2>1. Cosine similarity: mẫu quan trọng nhất</h2>
<div class="box formula">$$\cos(u, v) = \frac{u \cdot v}{\|u\|\,\|v\|}$$
Tử số: tích vô hướng. Mẫu số: tích hai độ dài. Kết quả từ −1 đến 1; càng gần 1 thì hai vector càng cùng hướng.</div>
<p><b>Bằng NumPy (nên thuộc lòng):</b></p>
<pre><code class="language-python">import numpy as np

def cosine_similarity(u, v):
    u = np.asarray(u, dtype=float)
    v = np.asarray(v, dtype=float)
    denom = np.linalg.norm(u) * np.linalg.norm(v)   # tích hai độ dài
    if denom == 0:                                  # vector 0 → tránh chia cho 0
        return 0.0
    return float(u @ v / denom)                     # u @ v: tích vô hướng</code></pre>
<p><b>Bằng Python thuần</b> (khi đề không cho dùng NumPy):</p>
<pre><code class="language-python">import math

def cosine_similarity(u, v):
    dot = sum(a * b for a, b in zip(u, v))
    norm_u = math.sqrt(sum(a * a for a in u))
    norm_v = math.sqrt(sum(b * b for b in v))
    if norm_u == 0 or norm_v == 0:
        return 0.0
    return dot / (norm_u * norm_v)</code></pre>
<p><b>Tính tay để kiểm tra:</b> u = (3, 4), v = (4, 3): tích vô hướng = 12 + 12 = 24; độ dài đều là 5 → 24/25 = <b>0,96</b>.</p>

<h2>2. Khoảng cách Euclid & Manhattan</h2>
<pre><code class="language-python">def euclidean(a, b):
    a, b = np.asarray(a, dtype=float), np.asarray(b, dtype=float)
    return float(np.sqrt(np.sum((a - b) ** 2)))    # hoặc np.linalg.norm(a - b)

def manhattan(a, b):
    a, b = np.asarray(a, dtype=float), np.asarray(b, dtype=float)
    return float(np.sum(np.abs(a - b)))</code></pre>
<p>a = [1, 2], b = [4, 6] → Euclid 5.0, Manhattan 7.0.</p>

<h2>3. Tìm tài liệu giống nhất (bước "retrieve" của RAG)</h2>
<pre><code class="language-python">def most_similar(query, docs):
    q = np.asarray(query, dtype=float)       # shape (d,)
    D = np.asarray(docs, dtype=float)        # shape (n, d): mỗi hàng một tài liệu
    sims = (D @ q) / (np.linalg.norm(D, axis=1) * np.linalg.norm(q))   # shape (n,)
    return int(np.argmax(sims))              # chỉ số tài liệu giống nhất

# top-k: np.argsort(-sims)[:k].tolist()</code></pre>
<div class="box idea"><span class="box-title">💡 Ghi shape ra nháp</span><code>D</code> là (n, d), <code>q</code> là (d,) → <code>D @ q</code> là (n,). <code>norm(D, axis=1)</code> là độ dài của từng hàng, cũng (n,).</div>

<h2>4. Xử lý mảng bằng NumPy: 4 thao tác hay hỏi</h2>
<pre><code class="language-python">x = np.asarray(data, dtype=float).copy()   # copy nếu đề bảo không sửa dữ liệu gốc
x[x &lt; 0] = 0               # thay theo điều kiện
x[x > x.mean()]            # lọc theo điều kiện
x.mean(axis=0)             # theo từng CỘT;  axis=1: theo từng HÀNG
(x >= 50).mean()           # TỈ LỆ phần tử thỏa điều kiện
(x - x.mean(axis=0)) / x.std(axis=0)   # chuẩn hóa z-score theo cột</code></pre>

<h2>5. Làm sạch bảng bằng Pandas: khung 5 dòng</h2>
<pre><code class="language-python">def clean_users(df):
    df = df.copy()                                          # không sửa dữ liệu gốc
    df['name'] = df['name'].str.strip()                     # bỏ khoảng trắng thừa
    df = df[df['name'].notna() &amp; (df['name'] != '')].copy() # bỏ dòng thiếu / rỗng
    df['age'] = df['age'].fillna(df['age'].median())        # điền giá trị thiếu
    df = df.drop_duplicates()                               # xóa dòng trùng
    return df.reset_index(drop=True)</code></pre>
<table>
<tr><th>Đề yêu cầu</th><th>Viết</th></tr>
<tr><td>Bỏ khoảng trắng / đưa về chữ thường</td><td><code>df[c].str.strip()</code>, <code>.str.lower()</code></td></tr>
<tr><td>Xóa dòng thiếu</td><td><code>df.dropna(subset=[c])</code></td></tr>
<tr><td>Điền giá trị thiếu</td><td><code>df[c].fillna(df[c].mean())</code> (hoặc median, mode()[0])</td></tr>
<tr><td>Xóa trùng</td><td><code>df.drop_duplicates()</code></td></tr>
<tr><td>Lọc dòng</td><td><code>df[(df[a] > 0) &amp; (df[b] == 'x')]</code></td></tr>
<tr><td>Tính theo nhóm</td><td><code>df.groupby(g)[c].mean()</code></td></tr>
<tr><td>Đếm giá trị</td><td><code>df[c].value_counts()</code></td></tr>
<tr><td>Sắp xếp, lấy top</td><td><code>.sort_values(ascending=False).head(k)</code></td></tr>
<tr><td>Thêm cột</td><td><code>df['revenue'] = df['price'] * df['quantity']</code></td></tr>
</table>

<div class="box tip"><span class="box-title">✍️ Cách lấy điểm câu code</span>
<ol><li>Viết <b>chữ ký hàm</b> và <code>return</code> trước, rồi điền phần giữa.</li>
<li>Xử lý <b>trường hợp đặc biệt</b> (rỗng, chia cho 0, thiếu dữ liệu): thường là một ý trong rubric.</li>
<li>Thêm chú thích ngắn cho từng bước và <b>một dòng thử lại</b> bằng ví dụ của đề.</li>
<li>Quên tên hàm chính xác thì vẫn viết đúng logic bằng lời/giả mã, vẫn có điểm phần ý.</li></ol></div>
<div class="box trap"><span class="box-title">⚠️ Bẫy hay gặp</span>
<ul><li><code>u * v</code> là nhân từng phần tử (ra một mảng); tích vô hướng phải là <code>u @ v</code> hoặc <code>np.dot(u, v)</code>.</li>
<li>Quên trường hợp vector có độ dài 0.</li>
<li>Pandas: dùng <code>and</code> thay cho <code>&amp;</code>, quên ngoặc quanh từng điều kiện, quên <code>.str</code>.</li>
<li>Xóa trùng <b>trước</b> khi chuẩn hóa chuỗi: "An" và " An " sẽ không bị coi là trùng.</li></ul></div>
`},

// ======================= B9 KỸ THUẬT PHẦN MỀM =======================
{
  id: 'B9.1', module: 'B', topic: 'B9', minutes: 18,
  title: 'Kỹ thuật phần mềm: Git, kiểm thử, debug, logging',
  skills: ['ts.se'],
  content: String.raw`
<div class="box why"><span class="box-title">🎯 Vì sao cần?</span>
"Kỹ thuật lập trình" không chỉ là viết code chạy được, mà còn là viết code người khác đọc được, kiểm chứng được và sửa được. Đây là phần phân biệt người mới học với người làm việc được trong nhóm.</div>

<h2>1. Git: quản lý phiên bản</h2>
<table>
<tr><th>Khái niệm</th><th>Ý nghĩa</th></tr>
<tr><td>Repository (repo)</td><td>Thư mục dự án cùng toàn bộ lịch sử thay đổi</td></tr>
<tr><td>Commit</td><td>Một "ảnh chụp" thay đổi kèm lời mô tả</td></tr>
<tr><td>Branch (nhánh)</td><td>Một dòng phát triển riêng, để làm tính năng mà không ảnh hưởng nhánh chính</td></tr>
<tr><td>Merge</td><td>Gộp thay đổi của nhánh này vào nhánh khác</td></tr>
<tr><td>Pull request</td><td>Đề nghị gộp code, để người khác <b>review</b> trước khi gộp</td></tr>
<tr><td>Conflict</td><td>Hai người sửa cùng một chỗ, Git không tự gộp được, phải sửa tay</td></tr>
</table>
<pre><code class="language-bash">git clone &lt;url&gt;          # tải repo về
git checkout -b feature  # tạo nhánh mới
git add .                # chọn thay đổi
git commit -m "mô tả"    # lưu một phiên bản
git push                 # đẩy lên máy chủ
git pull                 # lấy thay đổi mới về</code></pre>
<p>File <code>.gitignore</code> liệt kê những thứ <b>không</b> đưa vào Git: mật khẩu, API key, file <code>.env</code>, dữ liệu lớn.</p>

<h2>2. Kiểm thử (testing)</h2>
<pre><code class="language-python">def safe_mean(arr):
    return sum(arr) / len(arr) if arr else 0

def test_safe_mean():                 # chạy bằng pytest
    assert safe_mean([1, 2, 3]) == 2
    assert safe_mean([]) == 0         # trường hợp biên: list rỗng</code></pre>
<ul>
<li><b>Unit test</b>: kiểm tra từng hàm nhỏ một cách độc lập.</li>
<li>Luôn thử <b>trường hợp biên</b>: rỗng, một phần tử, số âm, giá trị thiếu.</li>
<li>Trong dự án AI, test bước <b>tiền xử lý dữ liệu</b> đặc biệt quan trọng: một lỗi nhỏ ở đó không làm chương trình sập mà âm thầm làm model kém đi.</li>
</ul>

<h2>3. Debug</h2>
<ol class="steps">
<li><b>Đọc thông báo lỗi</b> (traceback): dòng cuối cùng cho biết loại lỗi, phía trên cho biết lỗi ở file và dòng nào.</li>
<li><b>Tái hiện</b> lỗi bằng một input nhỏ nhất có thể.</li>
<li><b>Khoanh vùng</b>: in giá trị trung gian hoặc tắt bớt từng phần để tìm chỗ sai.</li>
<li>Sửa, chạy lại, rồi <b>thêm test</b> để lỗi không quay lại.</li>
</ol>

<h2>4. Logging thay cho print</h2>
<pre><code class="language-python">import logging
logging.basicConfig(level=logging.INFO)
logging.info('bắt đầu xử lý %d dòng', 100)
logging.warning('thiếu cột age, dùng giá trị mặc định')
logging.error('không gọi được API')</code></pre>
<p>Logging có <b>mức độ</b> (DEBUG &lt; INFO &lt; WARNING &lt; ERROR &lt; CRITICAL), có thời gian, ghi được ra file và bật tắt theo mức mà không cần sửa code. <code>print</code> thì không.</p>

<h2>5. Thói quen viết code tốt</h2>
<ul>
<li>Tên biến và tên hàm nói rõ ý nghĩa; mỗi hàm làm <b>một việc</b>.</li>
<li>Không lặp lại code (DRY): đoạn giống nhau thì tách thành hàm.</li>
<li><b>Môi trường ảo</b> (venv) và file <code>requirements.txt</code> để người khác cài đúng phiên bản thư viện.</li>
<li>Không ghi mật khẩu hay API key trong code.</li>
</ul>
`},

]);
