// Phân loại 210 câu của ml_dl_quiz_1.html (data/raw/ml_dl_quiz_1.json) theo dạng đề.
// Key = skill (đã khai báo trong một bài học), value = số thứ tự câu trong file gốc.
// Câu 131–140 trùng gần nguyên văn 101–110 nên bị bỏ.
export const MLQ_SKILL = {
  'mlq.bayes': [120],
  'mlq.vector': [109, 114, 128, 130],
  'mlq.numpy': [171, 178, 179, 181, 183, 185, 187, 194, 196, 199],
  'mlq.numpy-ops': [176, 189, 191],
  'mlq.pandas': [172, 173, 174, 175, 177, 180, 188, 192, 193, 198, 200],
  'mlq.pandas-agg': [184, 190, 195, 197],
  'mlq.pandas-clean': [182, 186],
  'mlq.ml-basics': [1, 3, 157],
  'mlq.eval': [8, 56, 58, 64, 141, 156, 161],
  'mlq.features': [46, 47, 48, 49, 88, 89, 148],
  'mlq.models': [5, 7, 61, 62, 63, 78, 116, 127, 144, 158, 159],
  'mlq.svm': [77],
  'mlq.metrics': [36, 37, 38, 45, 102, 111, 124],
  'mlq.metrics-choice': [6, 10, 39, 40, 57, 106, 160],
  'mlq.overfit': [2, 4, 9, 18, 20, 33, 65, 98, 125, 126, 167],
  'mlq.nn': [11, 12, 13, 14, 101, 103, 105, 112, 117, 142, 143, 201, 202, 203, 204],
  'mlq.training': [15, 16, 17, 26, 27, 31, 32, 34, 35, 66, 113, 118, 119, 145],
  'mlq.arch': [21, 22, 23, 24, 25, 52, 68, 74, 104, 107, 146, 151, 155, 166, 170],
  'mlq.nlp': [55, 72, 73, 75, 85, 115, 149, 150, 163, 164],
  'mlq.llm': [76],
  'mlq.transfer': [51, 165],
  'mlq.deploy': [90],
  // Nâng cao — ít khả năng ra thi, không dùng trong thi thử
  'mlq.advanced': [19, 28, 29, 30, 41, 42, 43, 44, 50, 53, 54, 59, 60, 67, 69, 70, 71, 79, 80, 81, 82, 83, 84, 86, 87,
    91, 92, 93, 94, 95, 96, 97, 99, 100, 108, 110, 121, 122, 123, 129, 147, 152, 153, 154, 162, 168, 169,
    205, 206, 207, 208, 209, 210],
};

export const MLQ_SKIP = [131, 132, 133, 134, 135, 136, 137, 138, 139, 140];

// Sửa lỗi nội dung trong file gốc: số câu → [chuỗi cũ, chuỗi mới] áp dụng cho đề.
export const MLQ_FIX = {
  130: ['tính sự giống nhau góc giữa 2 góc chiếu vector từ 0.0->1.0', 'đo mức giống nhau về hướng của 2 vector, nhận giá trị từ -1 đến 1'],
  85: ['(Sentiment Analysis / Anomaly Detection)', '(Sentiment Analysis)'],
};
