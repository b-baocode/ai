/* Video tiếng Việt trên YouTube cho từng bài học (hiện ở cuối bài, hàm videosHtml() trong app.js).
   Tìm ngày 2026-10-13, chọn theo TIÊU ĐỀ (chưa xem hết nội dung), nên có thể rộng hoặc hẹp hơn bài.
   items: [[tiêu đề, url, ghi chú?]]; q: từ khóa cho link "Tìm thêm trên YouTube".
   Bài không tìm được video tiếng Việt sát nội dung thì để items rỗng, chỉ có q. Không gán video tiếng Anh. */
(function () {
  const Y = id => 'https://www.youtube.com/watch?v=' + id;
  const PL = id => 'https://www.youtube.com/playlist?list=' + id;
  const PY_PL = ['Lập trình Python cơ bản cho người mới bắt đầu (playlist)', PL('PLu-LVHS6JzYgjXy3-Hc5b7eJibjaam3ie'), 'chuỗi bài, chọn bài cần xem'];
  const ML_PL = ['Machine Learning Cơ Bản (playlist)', PL('PLu-LVHS6JzYjoUuPAwcE9sff2NMrEH6KD'), 'chuỗi bài, chọn bài cần xem'];
  const NUMPY = ['Ma trận và vector với NumPy (HowKteam)', Y('oykpEGJrf20')];
  const PANDAS = ['Xử lý dữ liệu bảng với Pandas (Mì AI)', Y('SAXjsQLDnCg')];

  window.VIDEOS = {
    // ---------- Module A ----------
    'A0.1': { items: [], q: 'cách tính phần trăm tăng giảm phần trăm' },
    'A0.2': { items: [], q: 'trung bình có trọng số cách tính' },
    'A1.1': { items: [
      ['[Thống kê căn bản] Bài 4: Phương sai và độ lệch chuẩn, công thức tính và ý nghĩa', Y('zaSt2WkP8eE')],
      ['Phương sai và độ lệch chuẩn là gì?', Y('IiTZkYAMSJI')],
    ], q: 'trung bình trung vị mốt phương sai độ lệch chuẩn' },
    'A1.2': { items: [
      ['Ý nghĩa thống kê và giá trị P rất đơn giản và dễ hiểu', Y('kAH-8JzGAEQ')],
      ['Bài giảng EBM: Ý nghĩa của trị số P', Y('eFYBiPmcKDU')],
      ['XSTK 8. Lý thuyết kiểm định giả thuyết thống kê', Y('DXAI26TVyHg'), 'mức đại học, dài'],
      ['Giải bài tập về khoảng tin cậy cho giá trị trung bình', Y('DaNgU9UYLvU')],
    ], q: 'p-value khoảng tin cậy kiểm định giả thuyết dễ hiểu' },
    'A2.1': { items: [
      ['Bài 1. Biến cố hợp, biến cố giao, biến cố độc lập (Toán 11)', Y('ZZU3BwXUDG8')],
      ['Bài 2. Biến cố xung khắc, quy tắc cộng xác suất (Toán 11)', Y('FCkn4hPIMF4')],
    ], q: 'xác suất cơ bản biến cố đối quy tắc cộng xác suất' },
    'A2.2': { items: [
      ['Bài 2.1. Công thức xác suất toàn phần, xác suất có điều kiện (Toán 12)', Y('2ZsjfFccH0s')],
      ['Xác suất có điều kiện, công thức Bayes (playlist Toán 12)', PL('PLXmeri-X8nVydIoUTujAYaV1uaeavkpjA')],
    ], q: 'xác suất có điều kiện toán 12' },
    'A2.3': { items: [
      ['Bài 3. Công thức nhân xác suất cho hai biến cố độc lập (Toán 11)', Y('La3DbRFClvA')],
      ['Công thức nhân xác suất hai biến cố độc lập (thầy Nguyễn Quốc Chí)', Y('uUYYq1GnleY')],
    ], q: 'biến cố độc lập công thức nhân xác suất' },
    'A2.4': { items: [
      ['Công thức xác suất toàn phần & công thức Bayes', Y('TNi2ytbsHRU')],
      ['Phân biệt: xác suất có điều kiện – xác suất toàn phần – công thức Bayes', Y('T4sPIZXuDZY')],
      ['Bài 2.2. Công thức Bayes, xác suất có điều kiện (Toán 12)', Y('ZN4LSnQLEyc')],
      ['Giải bài tập về định lý Bayes', Y('r6iS53QVrwg')],
    ], q: 'công thức Bayes xác suất toàn phần bài tập' },
    'A2.5': { items: [
      ['Kỳ vọng của biến ngẫu nhiên rời rạc', Y('-Q43020KjWY')],
      ['3.2. Phân phối Bernoulli và nhị thức', Y('sCcdSkMti1k')],
      ['XSTK 3.1 Quy luật nhị thức: lý thuyết và bài tập', Y('HFdjtV24xV4')],
    ], q: 'kỳ vọng biến ngẫu nhiên rời rạc phân phối nhị thức' },
    'A3.1': { items: [
      ['Tổ hợp, chỉnh hợp, hoán vị – cách phân biệt siêu dễ hiểu', Y('5_rpSuVQsvM')],
      ['Hiểu cách sử dụng hoán vị, tổ hợp và chỉnh hợp trong 12 phút', Y('xCMcGIjoV4o')],
      ['Bài 2. Hoán vị – tổ hợp – chỉnh hợp (full dạng, Toán 10)', Y('SirbiX5PONE'), 'dài, nhiều dạng bài'],
    ], q: 'hoán vị chỉnh hợp tổ hợp phân biệt' },
    'A3.2': { items: [], q: 'xác suất lấy bi không hoàn lại tổ hợp' },
    'A3.3': { items: [
      ['Toán rời rạc: bảng chân lý kiểm tra mệnh đề hằng đúng, hằng sai', Y('tb0vDHebOR4')],
      ['Toán rời rạc Bài 1: Logic mệnh đề', Y('itaL_d9P1c4')],
      ['Toán rời rạc: phương pháp đếm, nguyên lý Dirichlet', Y('liMkZzFY7S4')],
      ['Nguyên lý Dirichlet (OLM)', Y('zigb9fL-Vnw')],
    ], q: 'toán rời rạc bảng chân trị tập hợp đồ thị cơ bản' },
    'A4.1': { items: [
      ['Đại số tuyến tính: định nghĩa tích vô hướng', Y('o_ATReI8TU0')],
      ['Bài 4. Tích vô hướng của hai vectơ (Toán 10)', Y('npNRm9lZG30')],
    ], q: 'vector tích vô hướng độ dài vector' },
    'A4.2': { items: [
      ['[Đại số tuyến tính] Ma trận và các phép toán', Y('xLIiMwN9dMA')],
      ['Cộng, trừ, nhân ma trận', Y('1eAGHHJe0yc')],
    ], q: 'ma trận phép cộng nhân số chuyển vị' },
    'A4.3': { items: [
      ['Đại số tuyến tính: phép nhân hai ma trận', Y('ySo2819l0HE')],
      ['Cộng, trừ, nhân ma trận', Y('1eAGHHJe0yc')],
    ], q: 'cách nhân hai ma trận' },
    'A4.4': { items: [
      ['Ma trận nghịch đảo: định nghĩa, công thức tính và các tính chất', Y('KH8cP3u1e1I')],
      ['Tìm ma trận nghịch đảo bằng công thức phần phụ đại số', Y('JXpfA8cEKjQ')],
      ['[Toán cao cấp 1] Bài 1: Ma trận, định thức', Y('5A6GXNuw-tI')],
    ], q: 'định thức ma trận 2x2 3x3 ma trận nghịch đảo' },
    'A4.5': { items: [
      ['[Toán cao cấp 1] Bài 2: Tìm hạng ma trận, giải hệ bằng phương pháp Gauss', Y('oVrhbBUL6no')],
      ['Giải hệ phương trình tuyến tính bằng phương pháp khử Gauss', Y('FvCfLYArUQo')],
      ['Giải bài tập hạng ma trận, ma trận nghịch đảo, phương trình ma trận', 'https://m.youtube.com/watch?v=VONW46U_aHk'],
    ], q: 'hạng ma trận giải hệ phương trình tuyến tính Gauss' },
    'A5.1': { items: [
      ['Thuật toán dạy mọi AI cách học (gradient descent)', Y('w_Rk7JgjDno')],
    ], q: 'đạo hàm cơ bản gradient descent là gì' },
    'A6.1': { items: [], q: 'ước lượng Fermi cách đọc biểu đồ tránh bị đánh lừa' },

    // ---------- Module B ----------
    'B0.1': { items: [
      ['[Python] Bài 4: Biến và kiểu dữ liệu trong Python', Y('Uk8s8_3pNNs')],
      ['Lập trình Python cơ bản – Video 3: Hàm if trong Python', Y('PbQma3p_Nmg')],
      PY_PL,
    ], q: 'python cơ bản biến kiểu dữ liệu if else' },
    'B0.2': { items: [PY_PL], q: 'python vòng lặp for while break continue' },
    'B1.1': { items: [
      ['List comprehension, hàm zip() & mảng 2 chiều', Y('fnXwXe0O6s8')],
      ['Sự khác nhau giữa List, Tuple, Set, Dictionary', Y('SRbtcsmocF8')],
    ], q: 'python list slicing' },
    'B1.2': { items: [
      ['Sự khác nhau giữa List, Tuple, Set, Dictionary', Y('SRbtcsmocF8')],
    ], q: 'python dictionary set tuple' },
    'B1.3': { items: [], q: 'python copy deepcopy tham chiếu' },
    'B2.1': { items: [
      ['Chuỗi ký tự & các hàm xử lý chuỗi trong Python cần biết – Phần 1', Y('H68p4-lCXVM')],
      ['[Python cơ bản] Xử lý chuỗi (String) trong Python', Y('-qfF7myFmR0')],
    ], q: 'python xử lý chuỗi split join strip regex' },
    'B2.2': { items: [
      ['List comprehension, hàm zip() & mảng 2 chiều', Y('fnXwXe0O6s8')],
      PY_PL,
    ], q: 'python hàm lambda list comprehension' },
    'B2.3': { items: [
      ['[PY101] 3.4 – Try và Except trong Python', Y('L7A-eT2iZPU')],
      ['Bài 23: Xử lý lỗi trong Python – try-except, else, finally và raise', Y('LY7VXkCtp-M')],
      ['Các thao tác xử lý file trong Python', Y('eH1sjY5A6oM')],
    ], q: 'python đệ quy try except đọc ghi file json' },
    'B2.4': { items: [
      ['[Khóa học lập trình OOP Python][Bài 1] Lớp và đối tượng (HowKteam)', Y('RUVdcNEqOUE')],
      ['[Khóa học lập trình OOP Python][Bài 4] Kế thừa (HowKteam)', Y('lfxEYreA6ow')],
    ], q: 'python lập trình hướng đối tượng class kế thừa' },
    'B3.1': { items: [
      ['Big O Notation là gì? Hiểu về độ phức tạp của thuật toán', Y('H3cYspcoSaA')],
      ['Giới thiệu độ phức tạp của thuật toán Big O', Y('-JQo4KRZzhE')],
      ['Quy tắc tìm Big O', Y('h0r4AkMftyY')],
    ], q: 'độ phức tạp thuật toán Big O' },
    'B3.2': { items: [
      ['[Lập trình Python] Tìm UCLN bằng thuật toán Euclid', Y('RnPmEtrbugE')],
      ['Lập trình Python – Tìm ước chung lớn nhất của 2 số nguyên dương', Y('-LNzILy1hqU')],
    ], q: 'thuật toán Euclid ước chung lớn nhất python' },
    'B3.3': { items: [
      ['[Cấu trúc dữ liệu và giải thuật] Bài 2 – Thuật toán tìm kiếm và sắp xếp cơ bản', Y('c_QqHOnTu0Q')],
      ['Tìm kiếm nhị phân (Binary Search) trong 4 phút', Y('c3XOLJwdxWU')],
      ['[Cấu trúc dữ liệu và giải thuật] Bài 4 – Ngăn xếp (stack) và hàng đợi (queue)', Y('1aueR7kYLC4')],
    ], q: 'tìm kiếm nhị phân sắp xếp stack queue' },
    'B4.1': { items: [NUMPY], q: 'numpy cơ bản array shape reshape tiếng việt' },
    'B4.2': { items: [NUMPY], q: 'numpy axis boolean indexing tiếng việt' },
    'B4.3': { items: [NUMPY], q: 'numpy broadcasting nhân ma trận tiếng việt' },
    'B5.1': { items: [
      ['Làm quen với Pandas và DataFrame', Y('HPGYTWYM13s')],
      PANDAS,
      ['Lọc dữ liệu với Pandas theo giá trị trong cột', Y('CXxMPcRjk18')],
    ], q: 'pandas dataframe loc iloc lọc dữ liệu tiếng việt' },
    'B5.2': { items: [PANDAS], q: 'pandas groupby merge value_counts tiếng việt' },
    'B6.1': { items: [
      ['Hướng dẫn thực hành Pandas: đọc file CSV và xử lý cơ bản dữ liệu NaN', Y('tZ4gzWAlBQQ')],
      PANDAS,
    ], q: 'pandas làm sạch dữ liệu fillna dropna tiếng việt' },
    'B6.2': { items: [
      ['Tự học SQL cho người mới bắt đầu: tất tần tật về câu lệnh SELECT', Y('cx-OuSRPFgI')],
      ['SQL SUM COUNT GROUP BY – Tự học SQL cùng Vịt, khóa cơ bản phần 2', Y('9mYjH5Gw3_k')],
      ['Tự học SQL cùng Vịt – khóa cơ bản cho người mới bắt đầu (playlist)', PL('PL01fPqVNMdrmtcb_Yui_Oh23X_3laoZoO'), 'dành cho người không học IT'],
    ], q: 'SQL cơ bản SELECT WHERE GROUP BY JOIN' },
    'B7.1': { items: [], q: 'python requests gọi API GET POST tiếng việt' },
    'B7.2': { items: [], q: 'python requests status code json xử lý lỗi tiếng việt' },
    'B8.1': { items: [PY_PL], q: 'bài tập python cơ bản viết hàm có lời giải' },
    'B8.2': { items: [NUMPY, PANDAS], q: 'cosine similarity numpy python' },
    'B9.1': { items: [
      ['Hướng dẫn cài đặt và sử dụng Git và GitHub chi tiết từng bước cho người mới', Y('mZauyDawIxk')],
      ['Sử dụng lệnh Git cơ bản: git add, commit, push…', Y('Itmy5fTw3xk')],
      ['Git cơ bản cho người mới: branch, merge & resolve conflict', Y('Ic0PCffTvkg')],
    ], q: 'git cơ bản cho người mới unit test python' },

    // ---------- Module C ----------
    'C0.1': { items: [
      ['Phân biệt AI, Machine Learning, Deep Learning', Y('_N1Q1o6J0vg')],
      ['Trí tuệ nhân tạo – Máy học là gì?', Y('13R2ytXz7j0')],
    ], q: 'AI machine learning deep learning khác nhau thế nào' },
    'C1.1': { items: [ML_PL], q: 'train validation test cross validation data leakage' },
    'C1.2': { items: [ML_PL], q: 'one hot encoding chuẩn hóa dữ liệu feature scaling' },
    'C1.3': { items: [
      ['Công việc gán nhãn dữ liệu: dự đoán nhu cầu tăng cao trong tương lai', Y('oaySOndl4y8')],
      ['Cách gắn nhãn dữ liệu sử dụng LabelImg', Y('de3issSnfKI'), 'thao tác gán nhãn ảnh thực tế'],
    ], q: 'gán nhãn dữ liệu data labeling là gì' },
    'C2.1': { items: [
      ['Tổng hợp tất cả các thuật toán Machine Learning (bản mới 2025)', Y('59XV4o8hOBk')],
      ['Cây quyết định với Python', Y('CQMp5JdmZdI')],
      ['Tự học Machine Learning: Decision Tree và Random Forest', Y('BmoNAptI1nI')],
      ML_PL,
    ], q: 'kNN decision tree random forest k-means giải thích' },
    'C2.2': { items: [], q: 'SVM support vector machine giải thích tiếng việt' },
    'C3.1': { items: [
      ['Confusion Matrix? Ma trận nhầm lẫn trong Machine Learning', Y('RJkny0zTAA0')],
      ['Kiểm định hồi quy Logistic (P1): Ma trận nhầm lẫn', Y('qvpla7kztV4')],
    ], q: 'confusion matrix precision recall F1' },
    'C3.2': { items: [
      ['Confusion Matrix? Ma trận nhầm lẫn trong Machine Learning', Y('RJkny0zTAA0')],
    ], q: 'precision recall khi nào dùng ROC AUC threshold' },
    'C4.1': { items: [
      ['Tự học Machine Learning: tổng quát hóa, overfitting, underfitting, regularization', Y('mzBR0hbN2Uk')],
    ], q: 'overfitting underfitting regularization là gì' },
    'C5.1': { items: [
      ['Mạng nơ-ron là gì? Giải thích dễ hiểu', Y('3nm8RZggClQ')],
      ['Mạng nơ-ron nhân tạo là gì? (Phần 2)', 'https://m.youtube.com/watch?v=3i5B3cNfer4'],
      ['Xây dựng mạng nơ-ron nhân tạo từ con số 0', Y('VBviWbusHd8'), 'có code'],
    ], q: 'mạng nơ-ron hàm kích hoạt ReLU sigmoid softmax' },
    'C5.2': { items: [
      ['Thuật toán lan truyền ngược trong mạng nơ-ron', Y('TLbzsBWLwOo')],
      ['Thuật toán dạy mọi AI cách học (gradient descent)', Y('w_Rk7JgjDno')],
    ], q: 'backpropagation gradient descent giải thích' },
    'C6.1': { items: [
      ['Mô hình ngôn ngữ và mạng nơ-ron hồi quy (RNN)', Y('t0EoeTYU-fc')],
    ], q: 'CNN là gì transformer attention giải thích tiếng việt' },
    'C7.1': { items: [
      ['Embedding – Vector Embedding là gì? Giải thích dễ hiểu', Y('0leZrwU5EV4')],
    ], q: 'word embedding NLP là gì tiếng việt' },
    'C8.1': { items: [
      ['Cách viết prompt cho AI hiệu quả, ai cũng làm được', Y('JGPwSFftqgU')],
      ['Prompt AI: hướng dẫn viết prompt hiệu quả – P1', Y('RiPLeXEwIXE')],
    ], q: 'LLM mô hình ngôn ngữ lớn hoạt động như thế nào' },
    'C8.2': { items: [
      ['Tất tần tật về RAG cơ bản trong 20 phút', Y('NQOYXmZxqvI')],
      ['Khi nào thì AI đáng tin? RAG là gì?', Y('zEolYcgCP6o')],
      ['Chi tiết về RAG, thực hành triển khai bằng Python và n8n (Mì AI)', Y('kADBUMDCJkM'), 'có code, nâng cao hơn bài'],
    ], q: 'RAG là gì fine-tune khác RAG' },
    'C8.3': { items: [
      ['Cách MCP khiến AI Agent thông minh & tiện lợi hơn', Y('XKae3FgKZnM')],
    ], q: 'AI agent là gì MCP là gì tool calling' },
    'C8.4': { items: [
      ['Tạo AI chatbot với OpenAI và Python', Y('-dxQejVI5lI')],
      ['Hướng dẫn làm một con ChatGPT của riêng bạn, lấy kiến thức từ file tải lên', Y('g_M8rsrmUeM')],
    ], q: 'gọi API LLM python multi-agent là gì' },
    'C9.1': { items: [], q: 'A/B testing là gì product AI' },
    'C9.2': { items: [
      ['Ứng dụng AI trong doanh nghiệp', Y('1nLfbA3ypgQ')],
      ['Lộ trình ứng dụng AI trong phát triển kinh doanh', Y('f87ZzPjJZLs')],
      ['Ứng dụng AI từ góc nhìn của nhà quản trị doanh nghiệp', Y('bwpruqZZLpM')],
    ], q: 'triển khai AI trong doanh nghiệp các bước MVP' },
    'C10.1': { items: [], q: 'MLOps là gì triển khai giám sát mô hình' },
    'C10.2': { items: [], q: 'data lake data warehouse lakehouse ETL là gì' },
    'C11.1': { items: [ML_PL], q: 'deep learning nâng cao tiếng việt' },

    // ---------- Module D ----------
    'D1.1': { items: [
      ['Mệnh đề kéo theo, mệnh đề đảo, hai mệnh đề tương đương, điều kiện cần và đủ (Toán 10)', Y('75sxd-Cjy20')],
      ['Mệnh đề kéo theo và tính đúng/sai của mệnh đề kéo theo', Y('TZzv0gp40WA')],
    ], q: 'mệnh đề kéo theo phủ định mệnh đề phản đảo' },
    'D1.2': { items: [
      ['4 lỗi ngụy biện thường gặp', Y('T7PK5ugtRJY')],
      ['Ngụy biện người rơm', Y('Xs-XukGIM9k')],
      ['Bắt bẻ ngay 6 câu ngụy biện này và rèn luyện tư duy logic', Y('vSgzl_OCOSo')],
    ], q: 'các lỗi ngụy biện thường gặp quy luật dãy số' },
    'D1.3': { items: [
      ['THPT FPT – Hướng dẫn làm bài trắc nghiệm tư duy logic', Y('RYOyX685Tek')],
      ['Những câu đố logic vui đơn giản có đáp án', Y('B5fK4hwA7_s')],
      ['Mệnh đề kéo theo, đảo, tương đương, điều kiện cần và đủ (Toán 10)', Y('75sxd-Cjy20')],
    ], q: 'bài toán logic ai nói thật ai nói dối cách giải' },
    'D2.1': { items: [
      ['Bí quyết giải quyết vấn đề tận gốc với phương pháp 5 Why', Y('Nq7q-5GEsKA')],
      ['5 Whys – câu chuyện thực tế', Y('N_tf6Fd8xBs')],
    ], q: 'phân tích nguyên nhân gốc 5 whys tư duy phản biện' },
    'D3.1': { items: [
      ['Hiểu Luật Bảo vệ dữ liệu cá nhân để tự bảo vệ mình trong môi trường số', Y('WuXncZfZNB8'), 'tin thời sự'],
      ['Luật Bảo vệ dữ liệu cá nhân có hiệu lực từ 1/1/2026', Y('7yGQAeMOOEE'), 'tin thời sự'],
    ], q: 'bảo vệ dữ liệu cá nhân quyền riêng tư là gì' },
    'D4.1': { items: [
      ['Các nguyên tắc đạo đức quan trọng khi sử dụng công cụ AI', Y('SBpObrCYsUs')],
      ['Trí tuệ nhân tạo: công cụ hay mối đe dọa? Tất cả phụ thuộc vào đạo đức phát triển', Y('E_jFmDMALO4')],
    ], q: 'đạo đức AI thiên kiến công bằng minh bạch' },
    'D4.2': { items: [
      ['Thiết lập khung đạo đức cho trí tuệ nhân tạo', Y('YZMQ_pzSAd8'), 'tin thời sự'],
      ['Tranh chấp bản quyền giữa nghệ sĩ và AI', Y('67WM47hB2R4'), 'tin thời sự'],
    ], q: 'AI và bản quyền deepfake đạo đức AI' },
    'D5.1': { items: [
      ['Thay vì ghét bỏ, hãy tìm cách giải quyết mâu thuẫn với đồng nghiệp', Y('V2ghvdj3UWI')],
    ], q: 'cách góp ý với cấp trên nhận lỗi trong công việc' },
    'D5.2': { items: [
      ['Kỹ năng làm việc nhóm hiệu quả – Teamwork', Y('gjHJaF_jKhQ')],
      ['Kỹ năng giải quyết xung đột, mâu thuẫn', Y('JTZotEWgX_M')],
    ], q: 'kỹ năng làm việc nhóm phản hồi giải quyết xung đột' },
  };
})();
