# Exam prep
- ReLU
  - $f(x) = \max(0, x)$
  - Giảm thiểu biến mất đạo hàm (Vanishing Gradient)
- Softmax
  - Nó chuyển đổi một vector các con số (logits) thành một phân phối xác suất.
    - Mỗi giá trị đầu ra nằm trong khoảng (0, 1).
    - Tổng tất cả các giá trị đầu ra luôn bằng 1.
- Cross-Entropy
  - Nó đo lường sự khác biệt giữa xác suất dự đoán (từ Softmax) và nhãn thực tế (Ground Truth).
  - Nếu dự đoán của bạn rất gần với nhãn thật, Cross-Entropy sẽ thấp (gần bằng 0).
▸ Vanishing Gradient and Exploding gradient
  - Vanishing Gradient: gradient trở nên cực kỳ nhỏ (tiến dần về 0) khi lan truyền ngược ⇒ mạng không thay đổi trọng số ⇒ ReLU, He Initialization
  - Exploding Gradient: gradient tăng vọt lên giá trị cực lớn ⇒ loss dao động dữ dội và không thể hội tụ ⇒ Gradient Clipping, LSTM hoặc GRU
▸ Encoding
  -  [table]
    | Cách hoạt động | Kỹ thuật Encoding | Mục đích | Ví dụ |
    | Mỗi giá trị được gán một số | Label Encoding | Chữ → số | Red=0, Green=1, Blue=2 |
    | Mỗi giá trị là một cột | One-Hot Encoding | Mỗi giá trị → vector nhị phân | Red → (1,0,0) |
    | Gán số theo thứ tự | Ordinal Encoding | Chữ → số | Small=1, Medium=2, Large=3 |
    | Chuyển số sang dạng nhị phân | Binary Encoding | Kết hợp Label + Binary | 3 → 011 |
    | Giá trị = số lần xuất hiện | Frequency Encoding | Dùng tần suất xuất hiện | A=10, B=5 |
    | Mỗi category = mean target | Target Encoding | Dùng giá trị trung bình của target | City A → avg price |
▸ Build, Test, Monitor
  - Build
    - Thu thập dữ liệu → feature engineering → train forecasting model
  - Test:
    - Evaluate bằng RMSE/MAE và A/B testing
  - Monitor:
    - Sau khi deploy cần theo dõi 
    - Model performance
      - MAE over time
      - prediction drift
    - Data drift
    - System metrics: 
      - inference latency
      - prediction freshness
    - Retraining strategy
      - Pipeline cập nhật model:
        ```Python
new charging data
↓
feature update
↓
model retrain
↓
validation
↓
redeploy
        ```

### 🎯 From community
- Cấu trúc bài: 60 câu
  ▸ 55 trắc nghiệm:
    - Chủ yếu: ML, DL, Numpy, Pandas
      - LLM, RAG, MLOPs
    ▸ Module A:
      [ ] P&S: Mean, variance, độ lệch chuẩn
      [ ] Tích vô hướng
      [ ] Đạo hàm 2 biến
      [ ] Nhân ma trận, Dot product
    ▸ Module B:
      [ ] Copy trong python: =, copy, deepcopy
    ▸ Module C:
      [ ] Có 1 câu iloc khác j loc
      [ ] Gradient descent
        - Có 1 câu gradient x bình - 3y tại 2 1 ko trl đc ko phải sv khoa toán
      [ ] Softmax, ReLU
      [ ] Linear Regression
Logistic Regression
k-Nearest Neighbors (kNN)
Decision Tree
Random Forest
      [ ] ANN, RNN, …
    ▸ Module D:
  ▸ 5 tự luận:
    - 2 câu code (cho đề xong giải bằng python)
      - 1 câu xử lý chuỗi 
        - dùng pandas nó bảo xoá khoảng trắng xoá none, xóa từ…
      - 1 câu numpy, pandas
    - 3 câu giải quyết vấn đề (ý tưởng, kế hoạch)
      - 1 câu build 1 câu test 1 câu monitor
      - viết các bước để triển khai chatbot trả lời câu hỏi gì đấy rồi giải thích
      - Tự luận nó cho tình huống vấn đề công ty gặp phải rồi hỏi cách xây hệ thống AI ghi rõ các bước, giải pháp
      - Ví dụ một chatbot AI của ngân hàng trả lời sai về lãi suất của ngân hàng khiến cho nhiều khách hàng nhầm lẫn. Hướng giải quyết là gì -> Tạm dừng tính năng chatbot để khắc phục. Như này nhé, những câu này nhìn chung khá dễ, đọc là làm được. Mình thấy khó ở phần code và ML, DL

📄 PAGE: Full ML pipeline


```Python
import pandas as pd

# 1. Đọc dữ liệu
df = pd.read_csv("data.csv")

# 2. Xem nhanh dữ liệu
print(df.head())
print(df.info())

# 3. Xóa dữ liệu trùng lặp
df = df.drop_duplicates()

# 4. Xử lý giá trị thiếu
df['age'] = df['age'].fillna(df['age'].mean())      # numeric
df['sex'] = df['sex'].fillna(df['sex'].mode()[0])   # categorical

# 5. Làm sạch chuỗi
df['name'] = df['name'].str.strip()

# 6. Chuyển kiểu dữ liệu
df['yearofbirth'] = df['yearofbirth'].astype(int)

# 7. Feature engineering
df['age'] = 2026 - df['yearofbirth']

# 8. Encode categorical variables
df = pd.get_dummies(df, columns=['sex'], drop_first=True)

# 9. Chọn feature và target
X = df.drop(columns=['target'])
y = df['target']

# 10. Kiểm tra dữ liệu trước khi training
print(X.shape)
print(X.head())
```

Xử lý giá trị thiếu (Missing values)
```Python
Load data
   ↓
Check structure (info, shape)
   ↓
Handle missing values
   ↓
Remove duplicates
   ↓
Fix data types
   ↓
Clean strings
   ↓
Handle outliers
```
▸ Xử lý giá trị thiếu (Missing values)
  - Kiểm tra NaN
    ```Python
df.isnull()
df.isnull().sum()
    ```
  - Xóa dữ liệu thiếu
    ```Python
df.dropna() # xóa dòng có NaN
df.dropna(axis=1) # xóa cột có NaN
    ```
  - Thay thế NaN
    ```Python
df['age'] = df['age'].fillna(0)
df['age'] = df['age'].fillna(df['age'].mean())
    ```
▸ Xóa dữ liệu trùng lặp
  - Kiểm tra:
    ```Python
df.duplicated()
    ```
  - Xóa:
    ```Python
df.drop_duplicates()
    ```
▸ Sửa kiểu dữ liệu
  - Kiểm tra:
    ```Python
df.dtypes
    ```
  - Chuyển kiểu:
    ```Python
df['age'] = df['age'].astype(int)
df['date'] = pd.to_datetime(df['date'])
    ```
▸ Chuẩn hóa chuỗi (string cleaning)
  - Ví dụ cột name có khoảng trắng hoặc chữ hoa/thường.
    ```Python
df['name'] = df['name'].str.strip()   # bỏ khoảng trắng
df['name'] = df['name'].str.lower()   # chữ thường
df['name'] = df['name'].str.upper()
    ```
  - Thay thế text:
    ```Python
df['city'] = df['city'].str.replace("hanoi", "Hà Nội")
    ```
▸ Lọc dữ liệu không hợp lệ
  ```Python
df = df[df['age'] > 0]
df = df[df['salary'] < 100000]
  ```
▸ Đổi tên cột
  ```Python
df.rename(columns={'yearofbirth': 'birth_year'})
  ```
▸ Xử lý outliers
  - Ví dụ lọc tuổi quá lớn:
    ```Python
df=df[df['age']<100]
    ```
  - Hoặc dùng quantile:
    ```Python
q1=df['salary'].quantile(0.25)
q3=df['salary'].quantile(0.75)
    ```

📄 PAGE: AI product life circle
- Andrew Ng (From Agentic AI course - Evaluation)
  - Build a quick and dirty start, then try it out and improve
  - It’s sometimes less useful to sit around for many weeks theorizing and hypothesizing how to build it.
  - Overall process:
    [image]
  - “I'll look for places where the performance is worse than that of an expert human, and that often gives me inspiration for where to focus my efforts”
  - Error analysis and prioritizing next steps: 
    - One of the biggest predictors for how efficient and how good a team is, is whether or not they're able to drive a disciplined error analysis process to tell you where to focus your efforts.
    - Any step of the workflow could have contributed to the problem

Machine learning is an "iterative" process, meaning that an AI team often has to try many ideas before coming up with something that's good enough, rather than have the first thing they try work.

- Question: How do you approach defining the scope and requirements for an AI product
  - Answer: I believe in a user-centric approach. I conduct thorough market research and engage with stakeholders to understand user needs. I then collaborate with cross-functional teams to define clear goals, prioritize features, and develop a roadmap that aligns with business objectives.
- Question: How do you handle the ethical considerations associated with AI products?
  - Answer: Ethical considerations are crucial in AI development. I ensure transparency and fairness by conducting bias assessments, implementing privacy safeguards, and regularly monitoring models for unintended consequences. Additionally, I promote diverse and inclusive datasets to mitigate biases in AI systems.
- 

### 🎯 Hình thức thi tuyển
  Hình thức thi tuyển: Ứng viên tham gia bài kiểm tra năng lực đầu vào với tổng thời lượng 90 phút, gồm 04 module độc lập:
  - Module A: Nền tảng Toán học & Tư duy Định lượng
  - Module B: Kỹ thuật Lập trình & Xử lý dữ liệu
  - Module C: Kiến thức AI & Tư duy sản phẩm AI
  - Module D: Tư duy Logic, Đạo đức & Hành vi
  - Bài thi được tổ chức dưới hình thức trắc nghiệm kết hợp bài tập tình huống và/hoặc câu hỏi tự luận ngắn.Thang điểm tổng: 100 điểm. Hội đồng tuyển sinh quy định ngưỡng điểm đạt yêu cầu cho từng đợt tuyển sinh.
  - Phân bổ thời gian trong 90 phút
    - 20 phút: Module A
    - 25 phút: Module B
    - 25 phút: Module C
    - 20 phút: Module D
    - 🔥 ~ 3 phút/câu.
---

## Module A: Nền tảng Toán học & Tư duy Định lượng

### 1/ Nền tảng Toán học
▸ Xác suất & thống kê
  ▸ 🎯 Why this?
    Xác suất và thống kê là nền móng của toàn bộ machine learning, vì hầu hết các mô hình AI thực chất đang ước lượng xác suất xảy ra của một sự kiện dựa trên dữ liệu quan sát được. Khi bạn huấn luyện một mô hình classification, bạn không chỉ “dự đoán nhãn”, mà đang ước lượng xác suất một điểm dữ liệu thuộc về một lớp nhất định. Nếu không hiểu xác suất, bạn sẽ không thực sự hiểu ý nghĩa của loss function như cross-entropy, không hiểu vì sao calibration quan trọng, và cũng không thể diễn giải confidence của mô hình một cách chính xác. 
    Thống kê giúp bạn hiểu dữ liệu phân bố như thế nào, độ biến động ra sao, và liệu kết quả bạn nhìn thấy có phải là tín hiệu thật hay chỉ là nhiễu. Với Applied AI Engineer, đây là nền tảng để đọc đúng các metric, tránh bị đánh lừa bởi những con số có vẻ “đẹp” nhưng không phản ánh thực tế.
  ▸  ❓ Questions
    - What is the purpose of the term "confounding variable" in statistical analysis?
      - Confounding variables are additional variables that can impact the relationship between the independent and dependent variables.
    - What is the key difference between correlation and causation?
      - Correlation measures the strength of a relationship, causation implies a cause-and-effect relationship
  ▸ To-review
    - standard deviation
      - The standard deviation measures the amount of variation or dispersion in a set of values.
    - 
  ▸ Các khái niệm
    - Mean
    - Variance
    - Standard deviation
    - Skewness (mức khái niệm)
  ▸ Xác suất cơ bản
    ▸ ❓ Questions
      - Conditional probability là gì?
      - Phân biệt independent vs mutually exclusive?
      - Bayes theorem dùng khi nào?
    - Probability axioms
    - Conditional probability
    - Bayes’ Theorem
    - Independent vs Dependent events
    - Law of total probability
  ▸ Phân phối xác suất (Distribution)
    ▸ ❓ Questions
      - Khi nào dùng Gaussian assumption?
      - Nếu dữ liệu skewed thì mean có đáng tin không?
      - Standard deviation thể hiện điều gì?
    - Bernoulli
    - Binomial
    - Gaussian (Normal distribution)
    - Uniform distribution
    - Poisson (mức cơ bản)
  ▸ Ứng dụng trong ML
    - Likelihood là gì?
    - Log-likelihood
    - Cross-entropy loss
    - Mối liên hệ giữa Maximum Likelihood Estimation (MLE) và training model
  ▸ Metrics
    ▸ ❓ Questions
      - Accuracy có đáng tin khi dataset imbalance?
      - Precision vs Recall khi nào quan trọng hơn?
      - ROC-AUC đo cái gì?
      - Khi nào dùng PR-AUC thay vì ROC-AUC?
      - Nếu model 95% accuracy nhưng dataset 95% thuộc class 0 thì sao?
      - Nếu tăng threshold thì precision thay đổi thế nào?
    - Accuracy
    - Precision
    - Recall
    - F1-score
    - ROC-AUC
    - PR-AUC
    - Sensitivity / Specificity
▸ Thống kê suy luận (Statistical inference)
  ▸ 🎯 Why this?
  ▸ ❓ Questions
    - Khi nào không nên tin vào p-value?
    - Làm sao biết model mới tốt hơn model cũ?
    - Sampling
      - Sampling bias là gì?
      - Train/test split không ngẫu nhiên gây vấn đề gì?
    - Confidence interval
      - 95% CI nghĩa là gì?
      - CI rộng thì nói lên điều gì?
    - Hypothesis testing
      - p-value là gì?
      - Type I error vs Type II error?
      - Nếu p = 0.04 thì kết luận gì?
    - A/B Testing
      - Làm sao biết model mới thực sự tốt hơn?
      - Statistical significance khác practical significance thế nào?
      - Sample size ảnh hưởng thế nào?
  ▸ Sampling
    - Population vs Sample
    - Sampling bias
    - Overfitting vs sampling noise
  ▸ Confidence interval
  ▸ Hypothesis testing
    - Null hypothesis (H0)
    - Alternative hypothesis (H1)
    - p-value
    - Type I error
    - Type II error
  ▸ A/B Testing
    - Control vs Treatment
    - Statistical significance
    - Practical significance
▸ Đại số tuyến tính
  ▸ 🎯 Why this?
    Toàn bộ ML đều dựa trên vector & matrix:
    - Embedding là vector
    - Neural network là chuỗi phép nhân ma trận
    - PCA là eigen decomposition
  ▸ ❓ Questions
    - Vì sao embedding là vector?
    - Vì sao cosine similarity dùng dot product?
  ▸ Vector & Matrix
    ▸ ❓ Questions
      - Dot product thể hiện điều gì?
      - Cosine similarity dùng khi nào?
      - Matrix multiplication đại diện cho gì trong NN?
    - Vector representation
    - Dot product
    - Matrix multiplication
    - Transpose
  ▸ Linear transformation
    ▸ ❓ Questions
      - Vì sao embedding có thể biểu diễn semantic similarity?
      - Nếu dimension embedding tăng thì chuyện gì xảy ra?
    - Ax = b
    - Feature space
  ▸ Eigenvalue / Eigenvector
    ▸ ❓ Questions
      - PCA dùng để làm gì?
      - Eigenvector trong PCA đại diện điều gì?
    - Ý nghĩa trong PCA
    - Dimensionality reduction
  ▸ Norm
    ▸ ❓ Questions
      - L1 vs L2 khác nhau thế nào?
      - Vì sao L2 regularization làm weight nhỏ lại?
    - L1 norm
    - L2 norm
    - Liên hệ với regularization
▸ Calculus (applied)
  ▸ 🎯 Why this?
    - Training model = tối thiểu hóa loss, Backpropagation = chain rule. Nếu không hiểu:
      - Không hiểu learning rate
      - Không hiểu exploding gradient
      - Không hiểu vì sao model không converge
  ▸ ❓ Questions
    - Derivative
      - Đạo hàm thể hiện điều gì trong optimization?
      - Nếu gradient = 0 nghĩa là gì?
    - Gradient
      - Gradient vector là gì?
      - Vì sao phải đi ngược gradient?
      - Vì sao đi ngược gradient để tối thiểu hóa loss?
      - Learning rate quá lớn gây gì?
      - Learning rate quá nhỏ gây gì?
    - Chain rule
      - Backpropagation dựa trên nguyên lý nào?
      - Vì sao deep network có thể gặp vanishing gradient?
  ▸ Đạo hàm (Derivative)
    - Ý nghĩa hình học (slope)
    - Ý nghĩa trong optimization
  ▸ Partial derivative (mức cơ bản)
    - Khi có nhiều biến
    - Neural network có nhiều tham số
  ▸ Chain rule
    - Backpropagation dựa trên chain rule
  ▸ Gradient
    - Gradient vector
    - Vì sao đi ngược gradient để tối thiểu hóa loss?
  ▸ Convex vs non-convex (khái niệm)
▸ Tối ưu hóa
  ▸ 🎯 Why this?
    Applied AI Engineer thường phải:
    - Tune hyperparameters
    - Chọn optimizer
    - Hiểu convergence behavior
    Không hiểu optimization → chỉ trial-and-error.
  ▸ ❓ Questions
    - Gradient Descent
      - Batch vs Mini-batch khác gì?
      - Tại sao SGD có noise?
      - Local minimum là gì?
    - Convergence
      - Làm sao biết model converge?
      - Early stopping dùng để làm gì?
    - Regularization
      - L1 vs L2 regularization?
      - Regularization giúp giảm overfitting thế nào?
    - Bias-Variance
      - High bias là gì?
      - High variance là gì?
      - Làm sao giảm variance?
  ▸ Gradient Descent
    - Learning rate
    - Convergence
    - Local minimum vs Global minimum
    - Saddle point (khái niệm)
  ▸ Variants
    - Batch GD
    - Mini-batch
    - SGD
  ▸ Regularization
    - L1
    - L2
    - Dropout
  ▸ Bias-Variance Tradeoff
    - High bias = underfitting
    - High variance = overfitting

### 2/ Tư duy Định lượng (quantitative reasoning)
▸ ❓ Quiz
  - https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-quantitative-reasoning.pdf (https://accuplacer.collegeboard.org/accuplacer/pdf/next-generation-sample-questions-quantitative-reasoning.pdf)
  - https://www.gmat-prep-milano.com/images/yootheme/pdf/GRE_Practice_Test_3_Quant.pdf (https://www.gmat-prep-milano.com/images/yootheme/pdf/GRE_Practice_Test_3_Quant.pdf)
▸ Suy luận định lượng
  ▸ 🎯 Why this?
    Applied AI Engineer không chỉ code mà phải:
    - Đọc metric và hiểu ý nghĩa
    - Phản biện số liệu
    - Ước lượng impact
    Đây là phần phân biệt engineer biết suy nghĩ với engineer chỉ chạy script.
  ▸ ❓ Questions
    - Dataset bao nhiêu mẫu?
    - Khi dataset imbalance → nên dùng gì?
    - Trade-off precision vs recall
    - Statistical significance?
    - Model tăng 1% accuracy có đáng kể không?
    - Model cải thiện accuracy từ 94% lên 95% có ý nghĩa không?
    - Nếu dataset 1 triệu mẫu vs 1000 mẫu thì interpret khác gì?
    - Nếu precision cao nhưng recall thấp thì chuyện gì xảy ra?
    - Nếu traffic tăng 10x thì latency tăng bao nhiêu?
    - Exponential growth khác linear growth thế nào?
  - Ước lượng nhanh (Fermi estimation)
  - Log scale intuition
  - Growth rate (linear vs exponential)
  - Hiểu % thay đổi
  - So sánh tỷ lệ
▸ Phân tích dữ liệu định lượng
  ▸ 🎯 Why this?
    Bạn phải:
    - Hiểu distribution
    - Nhận diện outlier
    - Phát hiện data leakage
    - Không nhầm correlation với causation
    Rất nhiều AI project fail vì hiểu sai dữ liệu.
  ▸ ❓ Questions
    - Distribution
      - Mean vs Median khác gì?
      - Outlier ảnh hưởng model thế nào?
      - Khi nào nên log transform?
      - Khi nào cần scale?
    - Correlation
      - Correlation cao có nghĩa là causation không?
      - Multicollinearity gây vấn đề gì?
    - Scaling
      - Khi nào cần normalization?
      - Tree-based model có cần scaling không?
    - Imbalance
      - Class imbalance xử lý thế nào?
      - Oversampling vs Undersampling?
  ▸ Distribution
    - Mean vs Median
    - Outlier
    - Skewed distribution
  ▸ Correlation vs Causation
    - Pearson correlation
    - Spurious correlation
    - Confounding variable
  ▸ Data scaling
    - Standardization
    - Normalization
  ▸ Data imbalance
    - Resampling
    - Class weighting

## Module B: Kỹ thuật Lập trình & Xử lý dữ liệu

### 1/ Kỹ thuật Lập trình
▸ ❓ Questions
  ▸ 1/ Python Fundamentals 
    1. Sự khác nhau giữa list, tuple và set trong Python là gì? Khi nào nên dùng mỗi loại?
    1. Dictionary trong Python hoạt động dựa trên cơ chế gì và tại sao việc lookup thường nhanh?
    1. Sự khác nhau giữa `==` và `is` trong Python?
    1. List comprehension là gì? Hãy viết lại đoạn loop sau bằng list comprehension.
    1. Sự khác nhau giữa deep copy và shallow copy?
    1. Khi nào nên dùng generator (`yield`) thay vì return list?
    1. Sự khác nhau giữa mutable và immutable objects trong Python?
    1. Trong pandas, sự khác nhau giữa:
      - `.loc`
      - `.iloc`
  ▸ 2/ Data Structures & Algorithms
    1. Tại sao dictionary lookup thường là O(1)?
    1. Khi dataset rất lớn, tại sao linear search không hiệu quả?
    1. Sự khác nhau giữa stack và queue? Cho ví dụ sử dụng.
    1. Khi nào nên dùng set thay vì list?
    1. Giả sử bạn cần kiểm tra xem một phần tử đã xuất hiện trong danh sách hay chưa. Cấu trúc dữ liệu nào tối ưu nhất?
    1. Độ phức tạp thời gian của các thao tác sau trong Python list là gì?
      - append
      - insert
      - search
  ▸ 3/ Software Engineering Fundamentals
    1. Tại sao code organization quan trọng trong AI project?
    1. Một script AI dài 2000 dòng nên được refactor như thế nào?
    1. Khi debugging một model pipeline bị lỗi, bạn sẽ tiếp cận như thế nào?
    1. Tại sao unit test quan trọng cho data preprocessing?
    1. Git branch dùng để làm gì trong workflow development?
    1. Tại sao logging tốt hơn print() trong production system?
  ▸ 4/ Data Engineering Basics
    1. Các bước cơ bản khi clean một dataset mới là gì?
    1. Bạn phát hiện 20% dữ liệu bị missing, bạn sẽ xử lý như thế nào?
    1. Khi nào nên:
      - drop missing values
      - fill bằng mean/median
    1. Feature engineering là gì? Vì sao nó quan trọng?
    1. Ví dụ về categorical encoding.
    1. Data leakage là gì?
    1. Cho ví dụ một situation gây data leakage.
    1. Tại sao preprocessing phải được thực hiện sau khi split train/test?
  ▸ 5/ Complexity & Performance
    1. Big-O notation dùng để làm gì?
    1. Sự khác nhau giữa:
      - O(n)
      - O(n log n)
      - O(n²)
    1. Tại sao vectorized operations trong numpy/pandas nhanh hơn loop?
    1. Khi dataset quá lớn để fit vào RAM, bạn có thể xử lý như thế nào?
    1. Khi pipeline quá chậm, bạn sẽ kiểm tra những phần nào trước?
▸ Python fundamentals (Mar 5, 6)
  ▸ To review
    [ ] Data structure: List, Tuple, Set, Dictionary
    [ ] Python descriptors
  ▸ Re-check
    ```Python
What is the correct way to check if a variable is of a specific type in Python?
isinstance(var, int)

How do you swap the values of two variables in Python without using a third variable?
x, y = y, x

How can you iterate over a string in reverse order using a for loop?
for char in reversed(string):

What is the purpose of the else clause in a for loop?
In Python, a for ... else loop means that the else block runs only if the loop finishes normally (without hitting break).

How can you iterate over the keys and values of a dictionary using a for loop?
for key, value in dictionary.items():

What is the purpose of the pass statement in a for loop?
To do nothing and continue to the next iteration

What is the purpose of the locals() function in a while loop?
locals() function returns a dictionary of the current local symbol table, providing access to all local variables in the current scope.



    ```
    
    - Reverse:
      - `list.reverse()` : in-place reverse
      - `reversed()` : return a copy of reversed version
      - Slicing `[::-1]`: return a copy of reversed version
    - pop() will delete and return the element whose index was passed as parameter
    ```Python
numbers = [1, 2, 3]

numbers.append(4)      # [1,2,3,4]
numbers.insert(1, 10)  # [1,10,2,3,4]
numbers.remove(2)      # [1,10,3,4]
numbers.pop(2)         # [1, 10, 4]
numbers.reverse()      # [4, 10, 1]
    ```
    - String
      ```Python
text = "Hello, World!"
index = text.find("World")
print(index)        # Output: 7
      ```
    ▸ String
      ```Python
text1 = "Python"
text2 = "12345"
text3 = "Python123"
text4 = "HELLO"
text5 = "hello"
text6 = "Hello World"
text7 = "   "

print(text1.isalpha())   # True  (alphabets)
print(text2.isdigit())   # True  (digits)
print(text3.isalnum())   # True  (alpha + digit)
print(text4.isupper())   # True  (tất cả chữ đều viết hoa)
print(text5.islower())   # True  (tất cả chữ đều viết thường)
print(text6.istitle())   # True  (mỗi từ bắt đầu bằng chữ hoa)
print(text7.isspace())   # True  (chỉ chứa khoảng trắng)
      ```
    ▸ OOP
      - An abstract class is a class that defines abstract methods, which must be implemented by its subclasses.
      - 
      -  [table]
        | Nguyên lý | Ý nghĩa | Ví dụ ngắn |
        | Encapsulation | Đóng gói dữ liệu và method trong một class, hạn chế truy cập trực tiếp | dùng `_attribute`, `__attribute`, `property` |
        | Abstraction | Ẩn chi tiết implementation, chỉ cung cấp interface cần thiết | dùng `abstract class` hoặc method |
        | Inheritance | Class con kế thừa thuộc tính và method của class cha | `class Child(Parent)` |
        | Polymorphism | Cùng một method nhưng hoạt động khác nhau tùy object | method override |
    ▸ File
      -  [table]
        | Function / Method | Chức năng |
        | `open()` | Mở file |
        | `close()` | Đóng file |
        | `read()` | Đọc toàn bộ nội dung |
        | `read(size)` | Đọc `size` ký tự |
        | `readline()` | Đọc 1 dòng |
        | `readlines()` | Đọc tất cả dòng → list |
        | `write()` | Ghi chuỗi vào file |
        | `writelines()` | Ghi list các dòng |
        | `seek(pos)` | Di chuyển con trỏ |
        | `tell()` | Xem vị trí con trỏ |
        | `flush()` | Đẩy buffer xuống file |
        | `with open()` | Tự động đóng file |
  ▸ Core syntax
    - Variables & basic types (int, float, str, bool)
    - List, tuple, set, dictionary
    - List comprehension
    - Conditional statements
    - Loops
  ▸ Functions
    - Function definition
    - Default arguments
    - args / **kwargs
    - Lambda functions
  ▸ Modules & packages
    - Import system
    - Virtual environment (concept)
    - Structure Python project
  ▸ File handling
    - Read/write files
    - JSON
    - CSV
▸ Data structures & algorithms (Mar 5)
  ▸ ❓ Questions
    - xử lý duplicate
    - streaming data
    - large dataset
  ▸ Data structures
    - List
    - Dictionary (hash table concept)
    - Set
    - Stack / Queue (concept)
    - Heap (basic idea)
  ▸ Algorithms basics
    - Searching (linear vs binary search)
    - Sorting basics
    - Hashing concept
▸ Software engineering fundamentals
  ▸ Code organization
    - modules
    - functions
    - classes
  ▸ Debugging
    - đọc stack trace
    - isolate bug
    - reproduce issue
  ▸ Testing (unit test cơ bản)
    - test function behavior
    - test edge cases
    - Tools: 
      - pytest
      - unittest
  ▸ Logging & monitoring
    - logging levels (INFO, WARNING, ERROR)
    - logging model outputs
    - logging errors
    - detect model drift
    - detect pipeline failure
▸ Complexity & performance
  ▸ Time complexity
  ▸ Memory considerations
    - dataframe size
    - batch processing
    - streaming vs loading all data
  ▸ Optimization tư duy
    - vectorization (numpy/pandas)
    - tránh loops khi xử lý data
    - caching intermediate results

### 2/ Xử lý dữ liệu
- Xử lý chuỗi, mảng, DB

## Module C: Kiến thức AI & Tư duy sản phẩm AI

### 1/ Kiến thức AI
▸ ❓ Questions
  ▸ ML – Supervised / Unsupervised
    1. Supervised learning và unsupervised learning khác nhau như thế nào? Khi nào nên dùng mỗi loại?
    1. Cho ví dụ một bài toán thực tế có thể giải bằng supervised learning.
    1. K-means clustering hoạt động như thế nào? Điểm yếu của thuật toán này là gì?
    1. Nếu dataset không có label, bạn sẽ tiếp cận bài toán machine learning như thế nào?
    1. Trong thực tế, unsupervised learning thường được dùng cho những mục đích gì?
  ▸ ML – Evaluation metrics
    1. Khi nào nên dùng accuracy, precision, recall và F1-score?
    1. Vì sao accuracy có thể gây hiểu nhầm trong bài toán classification?
    1. ROC-AUC đo lường điều gì? Khi nào nên sử dụng metric này?
    1. Nếu dataset bị imbalance mạnh, bạn nên chọn metric nào để đánh giá model?
    1. Trong bài toán regression, MAE và RMSE khác nhau như thế nào?
  ▸ ML – Overfitting / Regularization
    1. Overfitting là gì và làm sao để nhận biết model đang overfit?
    1. Bias–variance tradeoff là gì?
    1. Regularization giúp giảm overfitting như thế nào?
    1. L1 và L2 regularization khác nhau ra sao?
    1. Những cách phổ biến để giảm overfitting trong machine learning là gì?
  ▸ Neural Network basics
    1. Neural network hoạt động như thế nào ở mức trực giác?
    1. Activation function có vai trò gì trong neural network?
    1. Vì sao cần backpropagation?
    1. Gradient descent hoạt động như thế nào?
    1. Vì sao neural networks cần nhiều data để hoạt động tốt?
  ▸ CNN / RNN / Transformer intuition
    1. CNN phù hợp với loại dữ liệu nào và vì sao?
    1. Convolution trong CNN thực chất đang làm gì?
    1. RNN giải quyết bài toán gì mà feedforward network không làm tốt?
    1. Vì sao RNN gặp vấn đề vanishing gradient?
    1. Transformer khác gì so với RNN trong xử lý ngôn ngữ?
    1. Self-attention trong transformer giúp model học được điều gì?
  ▸ LLM & Generative AI
    1. Prompt engineering là gì và vì sao nó quan trọng với LLM?
    1. Zero-shot, few-shot và chain-of-thought prompting khác nhau thế nào?
    1. Khi model trả lời không đúng, bạn sẽ cải thiện prompt như thế nào?
    1. RAG là gì và nó giải quyết vấn đề gì của LLM?
    1. Pipeline cơ bản của một hệ thống RAG gồm những bước nào?
    1. Embedding được dùng như thế nào trong hệ thống RAG?
    1. Những vấn đề thường gặp khi xây dựng RAG là gì?
    1. Khi nào nên fine-tune model thay vì chỉ prompt engineering?
    1. Fine-tuning khác gì so với RAG?
    1. Những rủi ro khi fine-tuning LLM là gì?
    1. Embedding là gì và vì sao chúng quan trọng trong AI hiện đại?
    1. Embeddings được dùng trong những ứng dụng nào?
    1. Vector similarity hoạt động như thế nào?
    1. Hallucination trong LLM là gì?
    1. Vì sao LLM lại hallucinate?
    1. Những cách phổ biến để giảm hallucination là gì?
▸ DS
  ▸ ❓ Quiz
    - https://www.geeksforgeeks.org/quizzes/data-science-quiz/ (https://www.geeksforgeeks.org/quizzes/data-science-quiz/)
  ▸ ❓ Questions
    - Handling missing values: khi nào nên drop, khi nào nên fill
    - khi nào outlier là signal, khi nào là noise?
    - Normalization và Standardization khác nhau như thế nào?
    - Outliers có thể ảnh hưởng đến model như thế nào?
    - Hai phương pháp phổ biến để phát hiện outlier là gì?
    - Khi nào tree-based models không cần feature scaling?
    - In statistics, what does the term "p-value" represent in hypothesis testing?
    - 
  ▸ To-review
    [ ] Feature engineering
    [ ] Feature scaling
    [ ] Word embedding
    [ ] Hypothesis testing
    [ ] Bayesian
    [ ] Visualization plots
  - Numpy
  - Pandas
  ▸ Data cleaning strategy 
    xử lý:
    - duplicates
    - invalid values
    - inconsistent formats
    Ví dụ:
    - date format
    - currency format
  ▸ Handling missing / outliers
    - Missing values:
      - drop
      - mean/median imputation
      - model-based imputation
    - Outliers:
      - z-score detection
      - IQR method
      - clipping
  ▸ Data preprocessing
    - convert categorical data
  ▸ Feature engineering
    - one-hot encoding
    - label encoding
    - binning
    - polynomial features
    - feature scaling
  ▸ Data leakage
    - leakage từ future data
    - leakage từ target
    - leakage từ preprocessing
▸ ML 
  ▸ ❓ Questions
    1. Tại sao phải tách:
      - training set
      - validation set
      - test set?
    1. K-fold cross validation giúp giải quyết vấn đề gì?
    1. Khi dataset imbalanced, accuracy có còn là metric tốt không? Vì sao?
    1. Explain the term "Gini impurity" in the context of decision trees.
  ▸ Train/test split
  ▸ Cross-validation
    - k-fold cross validation
      - đánh giá model ổn định hơn
      - dùng khi dataset nhỏ
  ▸ Supervised / Unsupervised
  ▸ Evaluation metrics
    ▸ Classification:
      - accuracy
      - precision
      - recall
      - F1
      - ROC-AUC
    ▸ Regression:
      - MAE
      - MSE
      - RMSE
      - R²
  ▸ Overfitting / regularization
  ▸ To-review
    - PCA
    - Ensemble learning
    - A/B testing
      - A/B testing involves comparing two versions (A and B) to identify which performs better in terms of user engagement or other metrics.
    - k-nearest neighbors (KNN)
    - cross-validation
    - one-hot encoding
    - 
▸ Deep Learning
  - Neural network basics
  - CNN / RNN / Transformer intuition
▸ LLM & GenAI
  - Prompting
  - RAG
  - Fine-tuning
  - Embeddings
  - Hallucination

### 2/ Tư duy sản phẩm AI
▸ Basic deployment concepts
  ▸ Model serving
    - API inference
    - batch prediction
  ▸ Monitoring
    - model performance
    - data drift
    - prediction distribution
▸ AI System & Product Thinking
  ▸ ❓ Questions
    - Khi bắt đầu một bài toán AI, làm thế nào để chọn model phù hợp?
    - Khi nào nên dùng model đơn giản thay vì deep learning?
    - Làm thế nào để đánh giá một hệ thống AI trong môi trường production?
    - Offline evaluation và online evaluation khác nhau như thế nào?
    - Sau khi deploy model, bạn nên monitor những chỉ số gì?
    - Khi model performance giảm theo thời gian, bạn sẽ xử lý như thế nào?
    - Vì sao cost và latency là yếu tố quan trọng khi xây dựng AI product?
    - Nếu một model quá chậm nhưng rất chính xác, bạn sẽ tối ưu như thế nào?
    - Làm thế nào để thu thập feedback của user cho hệ thống AI?
    - User feedback có thể giúp cải thiện model như thế nào?
  - Model selection
  - Evaluation strategy
  - Monitoring & iteration
  - Cost / latency trade-offs
  - User feedback loop
▸ Risk management
  ▸ ❓ Questions
    1. Model drift là gì và vì sao nó xảy ra?
    1. Làm sao để phát hiện model drift trong production?
    1. Những rủi ro phổ biến khi deploy AI system là gì?
    1. Làm thế nào để giảm rủi ro khi rollout một model mới?
    1. Khi nào nên rollback model trong production?
    1. Những chiến lược deployment an toàn cho AI system là gì?
  - Model drift
  - Deployment risk
  - Rollback decision

## Module D: Tư duy Logic, Đạo đức & Hành vi

### 1/ Tư duy Logic (Logical reasoning)
▸ Suy luận 
  - Deductive reasoning
  - Inductive reasoning
▸ Pattern recognition
▸ If-then reasoning (Analytical thinking)
▸ Root cause analysis
▸ Critical thinking trong tình huống kỹ thuật

### 2/ Đạo đức (AI Ethics)
▸ Bias & fairness
▸ Explainability
▸ Privacy & consent
▸ Responsible AI principles

### 3/ Hành vi & teamwork
- Conflict handling
- Prioritization
- Communication
