/* Kiến thức thêm cho từng câu: hiện dưới lời giải ("📚 Kiến thức thêm"), ở mọi nơi có đáp án.
   Viết khi lời giải có sẵn quá ngắn: khái niệm nền, vì sao các lựa chọn khác sai, mẹo nhớ.
   Định dạng: Markdown tối giản như đề (**đậm**, `code`, xuống dòng). Khóa = id câu hỏi.
   Bắt đầu 18/10 theo yêu cầu người dùng: "ngoài phần giải thích có sẵn hãy cung cấp thêm kiến thức, check từng câu". */
window.QNOTES = Object.assign(window.QNOTES || {}, {
  // ===================== Module C, bộ AI-TEST E01–E10 =====================
  'E01-C01': `Ba câu hỏi để nhận dạng bài toán:
• Có **nhãn đáp án** sẵn không? Không có → học không giám sát (clustering).
• Đáp án là **nhãn rời rạc** (spam/không spam) → classification.
• Đáp án là **con số liên tục** (giá, doanh thu) → regression.
Forecasting là regression theo **thời gian** (dự báo tuần sau). Gom khách hàng thành nhóm (phân khúc) là ví dụ kinh điển của clustering, thuật toán hay dùng là k-means.`,
  'E01-C02': `Regression dự đoán một **số liên tục**. Cùng dữ liệu nhà đất nhưng hỏi "nhà này bán được trong 30 ngày không?" thì thành classification.
Ranking là sắp xếp thứ tự (kết quả tìm kiếm, gợi ý sản phẩm), không phải dự đoán một con số.
Metric của regression: MAE, MSE, RMSE, R²; **không** dùng accuracy hay F1.`,
  'E01-C03': `**k-fold cross-validation**: chia dữ liệu thành k phần, lần lượt lấy 1 phần làm validation và k−1 phần còn lại để train, rồi lấy trung bình k kết quả. Mỗi mẫu đều được dùng để đánh giá đúng một lần.
Vì sao hợp khi dữ liệu ít: chia một lần thì kết quả phụ thuộc may rủi vào lần chia đó.
Vẫn phải giữ riêng một tập **test** cuối cùng ngoài cross-validation. Các lựa chọn còn lại (tăng learning rate, tăng epoch, nhìn train loss) là thao tác huấn luyện, không phải cách đánh giá.`,
  'E01-C04': `Regularization cộng thêm "hình phạt" vào loss để model không dựa quá nhiều vào vài trọng số lớn.
• **L2** (Ridge, weight decay): phạt tổng bình phương trọng số → các trọng số nhỏ đều nhau.
• **L1** (Lasso): phạt tổng trị tuyệt đối → đẩy nhiều trọng số về đúng 0, tức tự chọn đặc trưng.
Các cách chống overfitting khác: thêm dữ liệu, data augmentation, dropout, early stopping, giảm độ phức tạp của model.`,
  'E01-C05': `Đáp án đúng chính là **precision cao**: trong số email bị chặn, phần lớn phải thật sự là spam.
Quy tắc chọn metric:
• Báo nhầm (FP) đắt → ưu tiên **precision** (lọc spam, khóa tài khoản).
• Bỏ sót (FN) đắt → ưu tiên **recall** (sàng lọc ung thư, phát hiện gian lận).
Muốn precision cao hơn thì **nâng ngưỡng** quyết định; đổi lại recall giảm (lọt nhiều spam hơn).`,
  'E01-C06': `A/B test: chia **ngẫu nhiên** người dùng thật thành nhóm A (bản cũ, nhóm đối chứng) và nhóm B (bản mới), chạy cùng thời gian, rồi so sánh một chỉ số đã chọn trước (tỉ lệ nhấp, tỉ lệ chuyển đổi...).
Điều kiện: đủ cỡ mẫu, chỉ đổi một yếu tố, kiểm tra ý nghĩa thống kê (bài A1.2).
Chạy trên train set hay nhìn loss chỉ cho biết model khớp dữ liệu cũ thế nào, không nói gì về tác động lên người dùng.`,
  'E01-C07': `Hai loại drift:
• **Data drift**: phân phối đầu vào thay đổi (khách hàng trẻ hơn, sản phẩm mới).
• **Concept drift**: quan hệ giữa đầu vào và đáp án thay đổi (cùng hành vi nhưng nay không còn là gian lận).
Cách xử lý: giám sát phân phối dữ liệu và chất lượng model theo thời gian, đặt ngưỡng cảnh báo, huấn luyện lại khi cần.`,
  'E01-C08': `RAG = **R**etrieval (tìm tài liệu liên quan) + **A**ugmented (đưa vào prompt) + **G**eneration (LLM trả lời dựa trên đó).
Lợi ích: trả lời theo tài liệu riêng và mới nhất, có trích nguồn, giảm bịa.
RAG **không** xóa được mọi thiên kiến, không làm GPU nhanh hơn, và vẫn phải đánh giá chất lượng tìm kiếm lẫn câu trả lời (bài C8.2).`,
  'E01-C09': `Embedding biến văn bản, ảnh, sản phẩm hay người dùng thành **vector số**, sao cho hai thứ có nghĩa gần nhau thì vector gần nhau.
Đo độ gần bằng **cosine similarity** (góc giữa hai vector) hoặc khoảng cách Euclid.
Ứng dụng: tìm kiếm theo nghĩa, RAG, gợi ý sản phẩm, gom nhóm văn bản. Kho lưu và tìm nhanh các vector gọi là vector database.`,
  'E01-C10': `Context window đo bằng **token**, gồm tất cả: system prompt, lịch sử hội thoại, tài liệu đính kèm và cả câu trả lời.
Vượt giới hạn thì phần cũ bị cắt hoặc request bị từ chối. Context dài hơn thì tốn tiền hơn và chậm hơn.
Vì vậy RAG chỉ đưa vài đoạn liên quan nhất vào prompt, thay vì cả kho tài liệu.`,
  'E01-C11': `Vì sao LLM bịa: nó được huấn luyện để sinh chữ **nghe hợp lý nhất**, không phải để kiểm chứng sự thật.
Cách giảm: RAG kèm trích nguồn; dặn "không có trong tài liệu thì nói không biết"; temperature thấp; kiểm chứng bằng nguồn khác; con người duyệt các nội dung quan trọng.`,
  'E01-C12': `• **Zero-shot**: chỉ nêu yêu cầu.
• **One-shot / few-shot**: kèm 1 hoặc vài ví dụ đầu vào → đầu ra mẫu ngay trong prompt.
Few-shot **không** huấn luyện lại model (trọng số không đổi); nó chỉ hướng dẫn định dạng và cách làm qua ví dụ. Muốn đổi hẳn hành vi bằng hàng nghìn ví dụ thì mới cần fine-tune.`,
  'E01-C13': `"6B", "8B" là số tham số (tỉ). Model lớn hơn thường giỏi hơn nhưng **tốn bộ nhớ hơn, chậm hơn, đắt hơn**.
Ước lượng bộ nhớ trọng số: số tham số × số byte mỗi tham số. Ví dụ 8B ở float16 (2 byte) ≈ 16 GB; 6B ≈ 12 GB.
Cách chọn đúng: đo trên **bộ câu hỏi thật của bài toán** (chất lượng, độ trễ, chi phí) rồi mới quyết, không mặc định model lớn luôn tốt hơn.`,
  'E01-C14': `Temperature điều chỉnh độ ngẫu nhiên khi LLM chọn token tiếp theo:
• Thấp (0–0,3): ổn định, lặp lại được → hợp trích xuất dữ liệu, hỏi đáp có căn cứ, code.
• Cao (0,8 trở lên): đa dạng, sáng tạo → hợp viết ý tưởng, nhưng dễ sai và lạc đề.
Tăng temperature **không** làm câu trả lời chính xác hơn.`,
  'E01-C15': `Bảng nhớ nhanh:
• **RAG**: thêm **kiến thức** (thay đổi thường xuyên, cần trích nguồn, ít GPU).
• **Fine-tune**: đổi **hành vi** (giọng văn, định dạng đầu ra, một tác vụ lặp lại), cần nhiều ví dụ chất lượng và tài nguyên huấn luyện.
Hai cách có thể kết hợp: fine-tune cho định dạng, RAG cho kiến thức. Các lựa chọn sai ở đây đều là tình huống của RAG (tài liệu cập nhật mỗi giờ, tra cứu chính sách mới).`,
  'E01-C16': `Hai giai đoạn của RAG:
• **Chuẩn bị (offline)**: làm sạch tài liệu → chia đoạn (chunking) → tạo embedding → lưu vào vector database.
• **Khi có câu hỏi (online)**: lọc quyền → **retrieve** (embedding câu hỏi, lấy top-k đoạn gần nhất) → rerank → ghép prompt → LLM trả lời kèm nguồn.
Retrieve sai thì LLM giỏi đến đâu cũng trả lời sai, nên phải đánh giá riêng bước này (đoạn đúng có nằm trong top-k không).`,
  'E01-C17': `Retrieve bằng embedding thì nhanh nhưng thô. **Reranker** là model thứ hai chấm lại từng cặp (câu hỏi, đoạn văn) chính xác hơn, rồi sắp xếp lại.
Quy trình thường gặp: lấy rộng khoảng 20–50 đoạn → rerank → giữ khoảng 3–5 đoạn tốt nhất đưa vào prompt.`,
  'E01-C18': `Guardrail đặt ở nhiều tầng:
• **Đầu vào**: chặn prompt injection, nội dung cấm, dữ liệu nhạy cảm.
• **Đầu ra**: lọc thông tin sai chính sách, che dữ liệu cá nhân, kiểm tra định dạng.
• **Hành động**: giới hạn công cụ được gọi, yêu cầu người duyệt với thao tác rủi ro (chuyển tiền, xóa dữ liệu).
Guardrail chỉ là lớp kiểm soát quanh model, không thay thế việc đánh giá và con người giám sát.`,
  'E01-C19': `Khung trả lời cho mọi câu "xây AI cho bài toán X":
1. **Đầu ra**: model trả về gì (nhãn, điểm ưu tiên, thứ hạng).
2. **Dữ liệu**: đầu vào nào, lấy từ đâu, nhãn ở đâu, có quyền dùng không.
3. **Metric**: metric model (precision/recall cho nhãn quan trọng) kèm metric kinh doanh (thời gian xử lý, tỉ lệ đúng hạn SLA).
4. **Baseline**: cách làm không cần AI để so sánh (quy tắc theo từ khóa, theo SLA).
5. **Rủi ro**: ưu tiên sai, thiên kiến, dữ liệu cá nhân, rò rỉ dữ liệu → người duyệt với ca quan trọng, giám sát sau khi triển khai.`,
  'E01-C20': `Tiêu chí so sánh hai model nên trình bày thành bảng: chất lượng trên **bộ câu hỏi thật**, độ trễ trên thiết bị, chi phí mỗi lần gọi, bộ nhớ (RAM/VRAM), lượng request, hậu quả khi trả lời sai.
Phương án hay được chấm điểm cao là **định tuyến**: model nhỏ xử lý câu dễ, chuyển model lớn khi câu khó hoặc model nhỏ không chắc. Kết luận dựa trên số đo, không dựa trên cảm giác.`,
  'E02-C17': `Baseline là mốc so sánh đơn giản nhất: quy tắc if-else, đoán lớp chiếm đa số, hoặc quy trình thủ công đang có.
Nếu model AI không thắng baseline rõ ràng thì không đáng chi phí và rủi ro. Baseline còn giúp phát hiện lỗi: model kém hơn cả đoán bừa thường là do lỗi dữ liệu hoặc lỗi code.`,
  'E02-C18': `Nguyên tắc A/B test đúng: **chỉ đổi một yếu tố**, chia nhóm **ngẫu nhiên**, chọn chỉ số và cỡ mẫu **trước** khi chạy, chạy đủ lâu (ít nhất trọn một chu kỳ tuần), không dừng sớm khi vừa thấy kết quả đẹp.
Đổi cùng lúc giao diện, model và giá thì kết quả tốt lên cũng không biết nhờ đâu.`,
  'E02-C19': `Bổ sung cho đáp án mẫu:
• **Lọc quyền trước khi retrieve**: nhân viên chỉ tìm trong tài liệu mình được xem.
• **Đánh giá hai tầng**: retrieve có lấy đúng đoạn không, và câu trả lời có bám đúng đoạn đó không.
• **Cập nhật kho**: tài liệu mới hoặc đã sửa phải được tạo lại embedding; ghi phiên bản và ngày hiệu lực để trích nguồn.
Chi tiết từng bước ở bài C8.2.`,
  'E02-C20': `Các bước thường gặp: PDF scan thì cần **OCR** (đọc chữ trong ảnh); PDF số thì đọc trực tiếp → trích từng trường → kiểm tra ràng buộc (định dạng ngày, tổng tiền khớp chi tiết, mã số hợp lệ) → trả kèm **độ tin cậy**.
Chấm chất lượng **theo từng trường** trên bộ hồ sơ đã gán nhãn, vì lỗi ở trường quan trọng (số tiền, số tài khoản) nặng hơn nhiều lỗi ở trường phụ.
Người duyệt: trường quan trọng, độ tin cậy thấp, dữ liệu mâu thuẫn.`,
  'E03-C17': `Ba tập dữ liệu:
• **Train**: model học.
• **Validation**: chọn model, chỉnh siêu tham số, quyết định dừng sớm.
• **Test**: chỉ dùng **một lần** ở cuối để báo cáo.
Dùng test để chọn model nhiều lần là rò rỉ dữ liệu (data leakage): điểm báo cáo sẽ cao giả tạo. Một dạng rò rỉ khác hay gặp: chuẩn hóa hay điền giá trị thiếu bằng thống kê tính trên **toàn bộ** dữ liệu trước khi chia; đúng ra chỉ được tính trên tập train.`,
  'E03-C18': `Bốn nhóm cần giám sát sau khi triển khai:
1. **Chất lượng**: metric trên mẫu có nhãn, phản hồi và khiếu nại của người dùng.
2. **Vận hành**: độ trễ, tỉ lệ lỗi, thời gian hệ thống chạy ổn định.
3. **Chi phí**: token, GPU, số request.
4. **Dữ liệu**: drift so với dữ liệu lúc huấn luyện.
Mỗi chỉ số có ngưỡng cảnh báo và kế hoạch xử lý khi vượt ngưỡng (rollback, huấn luyện lại, chuyển người).`,
  'E03-C20': `Mô hình "AI gợi ý, người quyết định" (human-in-the-loop): AI soạn sẵn câu trả lời, nhân viên sửa rồi mới gửi.
Đo hiệu quả bằng: thời gian xử lý mỗi ticket, **tỉ lệ nhân viên phải sửa nhiều** khi dùng gợi ý, điểm hài lòng của khách (CSAT), và số lỗi bị bộ phận kiểm tra chất lượng phát hiện.
Nên triển khai dần: nhóm nhỏ trước, so sánh với nhóm không dùng AI, rồi mới mở rộng.`,
  'E04-C17': `Ngưỡng độ tin cậy: trên ngưỡng thì tự động, dưới ngưỡng thì chuyển người (hoặc luồng an toàn hơn).
Với luồng rủi ro cao (tài chính, y tế, pháp lý), quyết định cuối nên do người có thẩm quyền đưa ra; AI chỉ đề xuất kèm bằng chứng.
Lưu ý: độ tin cậy mà model tự báo không phải lúc nào cũng đúng (cần kiểm tra calibration), nên vẫn phải kiểm tra ngẫu nhiên cả các ca model "chắc chắn".`,
  'E04-C18': `Hai dạng prompt injection:
• **Trực tiếp**: người dùng gõ "bỏ qua mọi chỉ dẫn trước đó…".
• **Gián tiếp**: chỉ dẫn độc hại nằm sẵn trong tài liệu, trang web hay email mà LLM đọc vào (rất nguy hiểm với RAG và agent).
Cách giảm: quyền tối thiểu cho công cụ, không để LLM tự quyết thao tác nhạy cảm, tách rõ chỉ dẫn hệ thống với dữ liệu, lọc đầu vào và đầu ra, kiểm tra quyền ở server chứ không dựa vào lời dặn trong prompt.`,

  // ===================== Module C, câu tự soạn (đợt 1) =====================
  'TS-c.problem-type-1': `Phân loại có hai kiểu: **nhị phân** (2 lớp: spam/không spam) và **nhiều lớp** (chọn 1 trong nhiều lớp: chủ đề bài báo).
Model phân loại thường trả ra **xác suất** từng lớp; nhãn cuối cùng có được khi so với **ngưỡng** (mặc định 0,5 với nhị phân).
Metric dùng: accuracy, precision, recall, F1, ROC-AUC (bài C3.1, C3.2).`,
  'TS-c.problem-type-2': `Dự báo theo thời gian (forecasting) là trường hợp đặc biệt của hồi quy: phải chia train/test **theo thời gian** (train trên quá khứ, test trên tương lai), không xáo trộn ngẫu nhiên, nếu không model sẽ "nhìn thấy tương lai" (rò rỉ dữ liệu).`,
  'TS-c.problem-type-3': `Phân cụm không có "đáp án đúng" để chấm, nên khó đánh giá hơn: dùng chỉ số như silhouette score, hoặc xem các cụm có ý nghĩa kinh doanh không.
k-means cần chọn trước số cụm k; cách chọn hay dùng là **phương pháp khuỷu tay** (elbow): vẽ tổng khoảng cách trong cụm theo k và chọn chỗ đường cong gãy.`,
  'TS-c.problem-type-4': `Thuật ngữ của học tăng cường: **agent** (tác tử) quan sát **state** (trạng thái), chọn **action** (hành động), nhận **reward** (thưởng/phạt) từ **environment** (môi trường), và học **policy** (chiến lược) sao cho tổng phần thưởng lâu dài lớn nhất.
Ví dụ thực tế: chơi game, điều khiển robot, và giai đoạn RLHF dùng để tinh chỉnh LLM theo đánh giá của con người.`,
  'TS-c.problem-type-5': `Nhóm thứ ba hay gặp: **học tự giám sát** (self-supervised), tự tạo nhãn từ chính dữ liệu, ví dụ che một từ rồi đoán lại từ đó. LLM được huấn luyện trước theo cách này (đoán token tiếp theo) nên không cần người gán nhãn.
Bán giám sát (semi-supervised): một ít dữ liệu có nhãn cộng nhiều dữ liệu không nhãn.`,
  'TS-c.features-1': `Nhược điểm của one-hot: cột có rất nhiều giá trị (ví dụ 10.000 mã sản phẩm) sẽ sinh ra 10.000 cột thưa. Khi đó dùng cách khác như embedding, hoặc gộp các giá trị hiếm thành "khác".
Với mô hình cây, label encoding thường vẫn chấp nhận được vì cây chỉ chia theo ngưỡng.`,
  'TS-c.features-3': `z-score cho biết x cách trung bình bao nhiêu **độ lệch chuẩn**: z = 2 nghĩa là cao hơn trung bình 2σ. Sau khi chuẩn hóa, dữ liệu có trung bình 0 và độ lệch chuẩn 1.
Quy tắc quan trọng: μ và σ **chỉ tính trên tập train**, rồi dùng đúng các số đó cho validation và test, để tránh rò rỉ dữ liệu.`,
  'TS-c.features-4': `Min-max đưa dữ liệu về đoạn [0, 1] nhưng **rất nhạy với outlier**: một giá trị cực lớn làm mọi giá trị khác bị ép sát về 0. Dữ liệu có outlier thì z-score hoặc robust scaling (dùng trung vị và IQR) phù hợp hơn.`,
  'TS-c.features-5': `Nhóm cần scale: các mô hình dựa trên **khoảng cách** (kNN, k-means, SVM) và các mô hình học bằng **gradient** (hồi quy tuyến tính/logistic có regularization, mạng nơ-ron).
Nhóm không cần: các mô hình dạng **cây** (Decision Tree, Random Forest, gradient boosting), vì cây chỉ hỏi "x có lớn hơn ngưỡng không".`,
  'TS-c.features-6': `Với dữ liệu dạng bảng, feature engineering tốt thường đem lại nhiều hơn đổi sang model phức tạp. Ví dụ hay gặp: ngày → thứ trong tuần, tháng, có phải ngày lễ không; số tiền → log của số tiền; hai cột → tỉ lệ giữa chúng; lịch sử → số lần mua trong 30 ngày qua.
Cẩn thận rò rỉ dữ liệu: không được tạo đặc trưng bằng thông tin chỉ có **sau** thời điểm dự đoán.`,
  'TS-ts.data-6': `Đo mức đồng thuận giữa những người gán nhãn bằng chỉ số **Cohen's kappa** (2 người) hoặc Fleiss' kappa (nhiều người). Gần 1 là rất thống nhất, gần 0 là ngang đoán bừa.
Quy trình chuẩn: viết hướng dẫn gán nhãn có ví dụ ca khó → gán thử một mẫu nhỏ → đo đồng thuận → sửa hướng dẫn → mới gán toàn bộ.`,
  'TS-ts.data-9': `Ba chiến lược chọn mẫu thường gặp trong active learning: mẫu model **ít chắc chắn nhất** (xác suất gần 0,5), mẫu mà nhiều model **bất đồng** nhất, và mẫu **đa dạng** (khác hẳn những gì đã gán).
Lợi ích: đạt cùng độ chính xác với ít nhãn hơn, tiết kiệm chi phí gán nhãn.`,
  'TS-ts.data-10': `Đây vừa là vấn đề **chất lượng dữ liệu** (thiếu tính đại diện) vừa là vấn đề **đạo đức** (công bằng). Cách phát hiện: đo lỗi **theo từng nhóm** (tuổi, giới, vùng miền) thay vì chỉ nhìn tổng. Cách xử lý: thu thêm dữ liệu cho nhóm thiếu, cân bằng lại mẫu, báo rõ giới hạn của model.`,
  'TS-c.models-2': `Cơ chế: logistic regression tính z = w·x + b rồi đưa qua sigmoid để ra xác suất p = 1/(1 + e^(−z)), sau đó so với ngưỡng (thường 0,5).
Hàm loss là **cross-entropy** (log loss). Mở rộng cho nhiều lớp: thay sigmoid bằng softmax (softmax regression).`,
  'TS-c.models-3': `Chọn k: k quá nhỏ (k = 1) thì nhạy với nhiễu, dễ overfitting; k quá lớn thì ranh giới quá mượt, underfitting. Với 2 lớp nên chọn k **lẻ** để không hòa phiếu.
kNN "lười": không học gì lúc train, mọi tính toán dồn vào lúc dự đoán (phải tính khoảng cách tới mọi điểm), nên chậm khi dữ liệu lớn.`,
  'TS-c.models-5': `Hai thước đo độ "lẫn lộn" của một nút:
• Gini = 1 − Σp², với 2 lớp tối đa là 0,5.
• Entropy = −Σ p·log₂p, với 2 lớp tối đa là 1.
Cây chọn cách chia làm độ lẫn lộn giảm nhiều nhất (information gain lớn nhất). Ví dụ nút 80% A, 20% B: Gini = 1 − (0,64 + 0,04) = 0,32.`,
  'TS-c.models-6': `Hai họ ensemble:
• **Bagging** (Random Forest): nhiều cây huấn luyện **song song** trên các mẫu lấy ngẫu nhiên có hoàn lại, mỗi lần chia chỉ xét một phần đặc trưng ngẫu nhiên, rồi bỏ phiếu → giảm **variance**.
• **Boosting** (AdaBoost, XGBoost): các cây huấn luyện **nối tiếp**, cây sau tập trung sửa lỗi của cây trước → giảm **bias**.`,
  'TS-c.models-7': `Các bước của k-means: chọn ngẫu nhiên k tâm → gán mỗi điểm vào tâm gần nhất → tính lại tâm bằng trung bình các điểm trong cụm → lặp đến khi tâm không đổi.
Điểm yếu: phải chọn k trước, kết quả phụ thuộc cách khởi tạo (chạy nhiều lần, dùng k-means++), nhạy với outlier, và hợp với các cụm tròn có kích thước gần nhau.`,
  'TS-ts.c-models-1': `Công thức đầy đủ: IG = H(cha) − Σ (n_con / n_cha) × H(con).
Ví dụ chia chưa hoàn hảo: nút cha 10 mẫu (5A, 5B), H = 1. Con trái 4 mẫu toàn A (H = 0); con phải 6 mẫu (1A, 5B), H ≈ 0,65. IG = 1 − (0,4 × 0 + 0,6 × 0,65) ≈ 0,61.`,
  'TS-ts.c-svm-1': `Margin là khoảng trống giữa hai lớp, đo bằng 2/‖w‖. **‖w‖ càng nhỏ thì margin càng rộng**, nên SVM huấn luyện bằng cách tối thiểu hóa ‖w‖ trong khi vẫn phân loại đúng.
Support vector là các điểm nằm sát mép margin; chỉ chúng quyết định đường biên. Tham số C điều chỉnh mức phạt khi có điểm vi phạm margin: C lớn thì margin hẹp, ít lỗi trên train (dễ overfitting).`,
  'TS-ts.c-metrics-1': `Bộ đôi bổ sung nhau: recall + FNR = 1 (bỏ sót), và specificity + FPR = 1 (báo nhầm), với specificity = TN/(TN + FP) và FPR = FP/(FP + TN).
Trong y tế: recall gọi là **độ nhạy** (sensitivity), specificity gọi là **độ đặc hiệu**.`,
  'TS-ts.c-metrics-2': `Công thức chung: Fβ = (1 + β²)·P·R / (β²·P + R).
• β = 1 (F1): precision và recall quan trọng như nhau.
• β = 2 (F2): coi trọng **recall** hơn, hợp với sàng lọc bệnh.
• β = 0,5: coi trọng **precision** hơn, hợp với lọc spam.`,
  'TS-ts.c-metrics-3': `Ba cách lấy trung bình khi có nhiều lớp:
• **Macro**: trung bình cộng từng lớp, mỗi lớp quan trọng như nhau, nên lớp hiếm làm kém sẽ kéo điểm xuống rõ.
• **Weighted**: trung bình có trọng số theo số mẫu mỗi lớp.
• **Micro**: cộng gộp TP, FP, FN của mọi lớp rồi mới tính; bị lớp đông chi phối.
Dữ liệu lệch lớp mà muốn thấy lớp hiếm có bị bỏ quên không thì xem **macro**.`,
  'TS-ts.c-metrics-4': `R² = 1 − SS_res/SS_tot cho biết model giải thích được bao nhiêu phần biến động của y so với việc luôn đoán bằng trung bình.
• R² = 1: hoàn hảo. • R² = 0: không hơn đoán trung bình. • R² âm: còn tệ hơn đoán trung bình (có thể xảy ra trên tập test).`,
  'TS-c.metrics-extra-2': `So sánh MAE và RMSE: cùng đơn vị với y. RMSE luôn ≥ MAE; chênh lệch càng lớn thì càng có vài sai số rất lớn. Chọn RMSE khi một lần sai nặng gây hậu quả lớn (dự báo tải điện); chọn MAE khi muốn ít bị outlier chi phối.
MSE = RMSE², đơn vị bình phương, thường dùng làm hàm loss khi huấn luyện.`,
  'TS-c.metrics-extra-4': `Đường ROC vẽ TPR (recall) theo FPR khi đổi ngưỡng từ 1 xuống 0. AUC là xác suất model chấm một mẫu dương ngẫu nhiên **cao hơn** một mẫu âm ngẫu nhiên.
AUC < 0,5 nghĩa là model đang dự đoán ngược (đảo nhãn sẽ tốt hơn). Dữ liệu cực kỳ lệch lớp thì nên xem thêm đường precision-recall (PR-AUC), vì ROC-AUC có thể trông đẹp giả tạo.`,
  'TS-c.metrics-extra-5': `Chọn ngưỡng theo chi phí lỗi: báo nhầm đắt thì nâng ngưỡng; bỏ sót đắt thì hạ ngưỡng. Ngưỡng nên chọn trên tập **validation**, không chọn trên tập test.
Đổi ngưỡng không cần huấn luyện lại model, chỉ đổi cách đọc xác suất mà model trả ra.`,
  'TS-c.overfit-1': `Bảng chẩn đoán nhanh:
• Train thấp, validation thấp → **underfitting** (high bias): tăng độ phức tạp, thêm đặc trưng, train lâu hơn, giảm regularization.
• Train cao, validation thấp hơn nhiều → **overfitting** (high variance): thêm dữ liệu, regularization, dropout, early stopping, đơn giản hóa model.
• Validation cao bất thường, gần như hoàn hảo → nghi **rò rỉ dữ liệu**.`,
  'TS-c.overfit-3': `Dropout chỉ bật khi **huấn luyện**. Khi dự đoán, mọi nơ-ron đều dùng (đầu ra được hiệu chỉnh theo tỉ lệ để giữ cùng độ lớn). Tỉ lệ tắt thường từ 0,2 đến 0,5.
Trực giác: mỗi bước huấn luyện là một mạng con khác nhau, nên tổng thể giống như lấy trung bình của nhiều mạng (tương tự ensemble).`,
  'TS-c.overfit-4': `Cách làm thực tế: theo dõi validation loss sau mỗi epoch, đặt "độ kiên nhẫn" (patience, ví dụ 5 epoch không cải thiện thì dừng), và **giữ lại trọng số ở epoch có validation loss tốt nhất**, chứ không lấy trọng số ở epoch cuối.`,
  'TS-c.nn-1': `Mọi câu "tính output của một nơ-ron" làm theo 2 bước:
① z = w·x + b (nhân từng cặp rồi cộng, cộng thêm bias).
② a = hàm kích hoạt(z).
Đổi activation thì chỉ bước ② thay đổi: ví dụ với cùng z = 1,5 thì sigmoid ≈ 0,82 và tanh ≈ 0,91.`,
  'TS-c.nn-3': `So sánh ba hàm hay gặp:
• **sigmoid**: (0, 1), dùng ở đầu ra phân loại nhị phân; dễ vanishing gradient ở các lớp ẩn.
• **tanh**: (−1, 1), cân đối quanh 0.
• **ReLU**: max(0, z), mặc định cho lớp ẩn vì nhanh và ít vanishing gradient; nhược điểm là nơ-ron có thể "chết" (luôn ra 0).`,
  'TS-c.nn-4': `Chọn hàm ở lớp đầu ra theo bài toán:
• Hồi quy: không dùng hàm kích hoạt (tuyến tính), loss MSE.
• Nhị phân: sigmoid, loss binary cross-entropy.
• Nhiều lớp (chọn 1): softmax, loss categorical cross-entropy.
• Nhiều nhãn cùng lúc (một ảnh có cả mèo lẫn chó): sigmoid cho từng nhãn.`,
  'TS-c.nn-5': `Công thức: softmax(zᵢ) = e^(zᵢ) / Σ e^(zⱼ). Cộng cùng một số vào mọi logit thì kết quả **không đổi**, nên [2, 2, 2] cho kết quả giống [0, 0, 0].
Ví dụ logits khác nhau [1, 2, 0]: e¹ ≈ 2,72; e² ≈ 7,39; e⁰ = 1; tổng ≈ 11,1 → xác suất ≈ [0,24; 0,67; 0,09].`,
  'TS-c.nn-6': `Chứng minh ngắn: hai lớp tuyến tính W₂(W₁x) = (W₂W₁)x vẫn chỉ là một phép nhân ma trận, tức một lớp tuyến tính. Thêm bao nhiêu lớp cũng vậy.
Có hàm phi tuyến xen giữa thì mạng biểu diễn được ranh giới cong. Ví dụ kinh điển: XOR không tách được bằng một đường thẳng nhưng mạng có 1 lớp ẩn làm được.`,
  // ===================== Module C, câu tự soạn (đợt 2) =====================
  'TS-c.nn-7': `Cross-entropy cho một mẫu: loss = −log(xác suất model gán cho **lớp đúng**). Với log tự nhiên: P = 0,9 → 0,105; P = 0,5 → 0,693; P = 0,1 → 2,303.
Đoán sai mà còn **rất tự tin** thì bị phạt rất nặng. Đây là lý do cross-entropy được dùng làm loss cho phân loại thay vì accuracy (accuracy không có đạo hàm để học).`,
  'TS-c.nn-8': `Ba khái niệm hay bị lẫn:
• **Batch size**: số mẫu dùng cho **một lần cập nhật** trọng số.
• **Iteration** (bước): một lần cập nhật = một batch.
• **Epoch**: đi hết toàn bộ tập train một lượt.
Số bước mỗi epoch = số mẫu ÷ batch size (làm tròn lên). Ví dụ 1000 mẫu, batch 100 → 10 bước mỗi epoch.`,
  'TS-c.backprop-extra-1': `Vì sao xảy ra: theo quy tắc dây chuyền, gradient ở lớp đầu là **tích** của nhiều đạo hàm ở các lớp sau. Đạo hàm của sigmoid tối đa chỉ 0,25, nhân qua 10 lớp còn khoảng 0,25¹⁰ ≈ 10⁻⁶, gần như bằng 0.
Cách khắc phục: dùng ReLU, khởi tạo trọng số hợp lý (He, Xavier), batch normalization, kết nối tắt kiểu ResNet, và LSTM/GRU cho chuỗi.`,
  'TS-c.backprop-extra-2': `Exploding gradient là chiều ngược lại của vanishing: tích các đạo hàm lớn hơn 1 làm gradient phình rất nhanh, trọng số nhảy lung tung, loss thành NaN.
Gradient clipping: nếu độ lớn gradient vượt ngưỡng (ví dụ 1 hoặc 5) thì thu nhỏ lại về đúng ngưỡng, **giữ nguyên hướng**. Hay dùng khi huấn luyện RNN và Transformer.`,
  'TS-c.backprop-extra-3': `Quy tắc dây chuyền: nếu L phụ thuộc vào ŷ, và ŷ phụ thuộc vào w, thì dL/dw = (dL/dŷ) × (dŷ/dw).
Ví dụ một nơ-ron ŷ = wx, L = ½(ŷ − y)²: dL/dŷ = ŷ − y và dŷ/dw = x, nên dL/dw = (ŷ − y)·x. Đây đúng là công thức trong các câu tính gradient của bộ đề (bài A5.2).`,
  'TS-c.backprop-extra-4': `Learning rate quá **nhỏ** thì ngược lại: loss giảm rất chậm, tốn thời gian, dễ kẹt lâu ở vùng phẳng.
Mẹo thực tế: thử theo thang log (0,1; 0,01; 0,001…) và chọn giá trị làm validation loss giảm ổn định nhất; hoặc dùng learning rate giảm dần theo thời gian. Adam tự điều chỉnh bước cho từng tham số nên ít nhạy với lựa chọn này hơn.`,
  'TS-ts.c-training-1': `Công thức: số lần cập nhật = (số mẫu ÷ batch size) × số epoch.
Nếu chia không hết thì làm tròn lên mỗi epoch: 1050 mẫu, batch 100 → 11 bước mỗi epoch (batch cuối chỉ có 50 mẫu).
Các trường hợp đặc biệt: batch size = 1 là SGD thuần (cập nhật sau từng mẫu); batch size = toàn bộ dữ liệu là batch gradient descent (mỗi epoch chỉ 1 lần cập nhật).`,
  'TS-c.arch-1': `Hai ý tưởng làm CNN hợp với ảnh:
• **Kết nối cục bộ**: mỗi bộ lọc chỉ nhìn một vùng nhỏ (ví dụ 3×3).
• **Dùng chung trọng số**: cùng một bộ lọc trượt trên cả ảnh, nên con mèo ở góc trái hay góc phải đều được nhận ra.
Nhờ vậy CNN cần ít tham số hơn rất nhiều so với mạng kết nối đầy đủ. Cấu trúc thường gặp: [conv → ReLU → pooling] lặp vài lần → flatten → lớp kết nối đầy đủ → softmax.`,
  'TS-c.arch-2': `Công thức kích thước đầu ra của lớp conv hay pooling: **(W − F + 2P) / S + 1**, với W là kích thước đầu vào, F kích thước bộ lọc, P padding, S stride.
Ví dụ ảnh 32×32, bộ lọc 5×5, P = 0, S = 1 → (32 − 5)/1 + 1 = 28 → đầu ra 28×28.
Số kênh đầu ra = **số bộ lọc**.`,
  'TS-c.arch-3': `Tại mỗi bước, RNN nhận phần tử hiện tại và **trạng thái ẩn** của bước trước để tạo trạng thái mới; cùng một bộ trọng số dùng lại ở mọi bước.
Nhược điểm: phải xử lý **tuần tự** (không song song được nên chậm), và khó nhớ thông tin ở xa do vanishing gradient.`,
  'TS-c.arch-4': `LSTM có một "băng chuyền" trạng thái (cell state) và ba **cổng**: cổng quên (bỏ thông tin cũ), cổng vào (thêm thông tin mới), cổng ra (chọn phần nào đưa ra ngoài). GRU gọn hơn với hai cổng.
Nhờ các cổng, gradient đi qua nhiều bước mà ít bị triệt tiêu. Ngày nay Transformer thay thế phần lớn LSTM trong xử lý ngôn ngữ.`,
  'TS-c.arch-5': `Ba họ Transformer:
• **Encoder** (BERT): đọc hai chiều, giỏi hiểu văn bản (phân loại, tìm kiếm, tạo embedding).
• **Decoder** (GPT, đa số LLM hiện nay): sinh văn bản từ trái sang phải.
• **Encoder-decoder** (T5, model dịch máy gốc): đọc vào rồi sinh ra.
Vì self-attention không biết thứ tự từ, Transformer phải thêm **positional encoding** (mã hóa vị trí).`,
  'TS-c.arch-6': `Cơ chế attention: mỗi token tạo ba vector **Query**, **Key**, **Value**. Mức chú ý từ token A tới token B tỉ lệ với tích Q_A·K_B (chia cho √d rồi qua softmax). Biểu diễn mới của A là trung bình có trọng số các Value.
"Multi-head attention" chạy nhiều bộ Q, K, V song song để nắm nhiều kiểu quan hệ cùng lúc (ngữ pháp, đồng tham chiếu...).`,
  'TS-ts.c-arch-1': `Công thức tổng quát: số tham số lớp conv = (F × F × số kênh vào + 1) × số bộ lọc; "+1" là bias của mỗi bộ lọc.
So sánh với lớp kết nối đầy đủ: đầu vào 28×28×3 = 2352 giá trị nối với 16 nơ-ron đã cần 2352 × 16 + 16 = 37.648 tham số. Lớp conv chỉ cần 448 vì dùng chung trọng số.
Pooling **không có tham số** nào để học.`,
  'TS-ts.c-arch-2': `Max pooling lấy giá trị lớn nhất trong mỗi ô F×F; average pooling lấy trung bình. Pooling 2×2, stride 2 làm **giảm một nửa** chiều dài và chiều rộng, **giữ nguyên số kênh**.
Mục đích: giảm tính toán và làm model bớt nhạy với vị trí chính xác của đặc trưng.`,
  'TS-c.nlp-1': `Ba mức tách token:
• **Theo từ**: đơn giản, nhưng gặp từ chưa thấy bao giờ thì bó tay.
• **Theo ký tự**: không bao giờ thiếu từ, nhưng chuỗi rất dài.
• **Theo cụm ký tự** (subword, ví dụ BPE): cách LLM dùng, từ hiếm được ghép từ các mảnh quen thuộc.
Tiếng Việt thường tốn nhiều token hơn tiếng Anh cho cùng một ý, nên chi phí API cũng cao hơn.`,
  'TS-c.nlp-4': `Công thức: TF-IDF = TF × IDF, với IDF = log(N / df) (N là tổng số tài liệu, df là số tài liệu chứa từ đó).
• Từ xuất hiện ở **mọi** tài liệu → IDF = log 1 = 0, nên trọng số bằng 0.
• Từ hiếm, chỉ có trong vài tài liệu → IDF lớn.
TF-IDF và bag-of-words chỉ đếm từ, không hiểu nghĩa ("xe hơi" và "ô tô" là hai từ khác hẳn). Embedding khắc phục điều này.`,
  'TS-c.nlp-5': `Cosine similarity = (u·v) / (‖u‖·‖v‖), giá trị trong khoảng [−1, 1]. Gần 1: cùng nghĩa; gần 0: không liên quan.
Với embedding của các model hiện đại, hai câu không liên quan thường vẫn có cosine dương (ví dụ 0,2–0,4), nên ngưỡng "giống nhau" phải chọn theo dữ liệu thực tế, không mặc định 0,5. Cách viết hàm bằng NumPy ở bài B8.2.`,
  'TS-c.nlp-7': `word2vec học vector cho mỗi từ bằng cách đoán từ xung quanh (hoặc đoán từ từ ngữ cảnh). Nhược điểm: mỗi từ chỉ có **một** vector, nên "đường" (đi lại) và "đường" (ăn) bị gộp làm một.
Embedding **theo ngữ cảnh** (BERT, các embedding model hiện nay) cho cùng một từ những vector khác nhau tùy câu, và tạo được vector cho cả câu hay cả đoạn văn (dùng trong RAG).`,
  'TS-c.llm-2': `Biến thể: "hãy suy nghĩ từng bước", hoặc cho ví dụ mẫu có ghi lời giải từng bước (few-shot chain-of-thought).
Hữu ích với toán, logic, bài nhiều bước; ít tác dụng với câu tra cứu đơn giản, và tốn thêm token. Các model "suy luận" (reasoning model) mới hiện nay tự làm bước này bên trong.`,
  'TS-c.llm-3': `Bộ biện pháp đầy đủ để giảm bịa: RAG kèm trích nguồn → dặn rõ "chỉ dùng tài liệu được cung cấp, không có thì nói không biết" → temperature thấp → kiểm tra câu trả lời có khớp nguồn không (có thể dùng model thứ hai để kiểm tra) → người duyệt các câu rủi ro cao → thu phản hồi người dùng.
Không có cách nào đưa hallucination về 0, nên luôn cần kiểm chứng ở tác vụ quan trọng.`,
  'TS-c.llm-4': `Ước lượng nhanh: tiếng Anh khoảng 0,75 từ mỗi token (1000 token ≈ 750 từ); tiếng Việt tốn token hơn.
Giá API thường tính riêng token **vào** và token **ra** (token ra đắt hơn). Context window và giới hạn max_tokens đều đo bằng token.`,
  'TS-ts.agent-1': `Vòng lặp của agent: **suy nghĩ** (cần làm gì) → **hành động** (gọi công cụ) → **quan sát** (đọc kết quả) → lặp lại tới khi xong. Kiểu thiết kế này hay được gọi là ReAct.
Thành phần của một agent: model, danh sách công cụ, bộ nhớ (lịch sử, ghi chú), và điều kiện dừng. Vì tự quyết định nên agent khó đoán trước hơn một workflow cố định, cần giới hạn quyền và số bước.`,
  'TS-ts.agent-2': `Luồng tool calling:
1. Ứng dụng gửi câu hỏi kèm **mô tả các công cụ** (tên, mô tả, tham số dạng JSON schema).
2. Model trả về "muốn gọi công cụ X với tham số Y".
3. **Ứng dụng** kiểm tra quyền rồi thực thi.
4. Ứng dụng gửi kết quả lại cho model.
5. Model viết câu trả lời cuối cùng.
Vì ứng dụng là bên thực thi, mọi kiểm soát an toàn (quyền, người duyệt, log) đặt ở bước 3.`,
  'TS-ts.agent-3': `Hình dung: trước đây mỗi ứng dụng AI phải tự viết tích hợp riêng cho Google Drive, Slack, cơ sở dữ liệu... MCP đặt ra **một chuẩn chung**: viết một MCP server cho Slack là mọi ứng dụng hỗ trợ MCP đều dùng được.
Ba thành phần: **host** (ứng dụng AI), **client** (bộ kết nối nằm trong host), **server** (bọc công cụ hoặc dữ liệu). Server cung cấp tools, resources, prompts.`,
  'TS-ts.agent-7': `Ba lớp bảo vệ cho agent có hành động thật:
• **Quyền tối thiểu**: chỉ cấp công cụ và phạm vi cần thiết (chỉ đọc nếu chỉ cần đọc; hạn mức chuyển tiền).
• **Người duyệt**: hành động không đảo ngược được (chuyển tiền, gửi email ra ngoài, xóa dữ liệu) phải có xác nhận của con người.
• **Audit log**: ghi ai yêu cầu, công cụ nào, tham số gì, kết quả ra sao, để truy vết khi có sự cố.`,
  'TS-ts.agent-8': `Đây là rủi ro lớn nhất của agent đọc dữ liệu từ bên ngoài (web, email, tài liệu tải lên).
Nguyên tắc: **mọi thứ công cụ trả về đều là dữ liệu, không phải mệnh lệnh**. Biện pháp: tách rõ chỉ dẫn hệ thống với nội dung lấy về; quyền tối thiểu (agent đọc web thì không được cầm công cụ gửi dữ liệu ra ngoài); người duyệt trước các hành động nhạy cảm; lọc và theo dõi các yêu cầu bất thường.`,
  'TS-ts.agent-10': `Thang độ phức tạp, chọn mức **thấp nhất đủ dùng**:
1. Một lần gọi LLM (phân loại, tóm tắt, trích xuất).
2. Workflow cố định nhiều bước (chuỗi các lần gọi theo thứ tự định sẵn).
3. Agent tự quyết định bước tiếp theo.
4. Nhiều agent phối hợp.
Lên mức cao hơn thì linh hoạt hơn nhưng đắt, chậm và khó kiểm soát hơn.`,
  'TS-ts.agent-essay-1': `Gợi ý chấm điểm cao: trả lời đủ ba phần đề hỏi, mỗi phần gắn với tình huống cụ thể.
• **Công cụ**: chỉ đọc cho tra cứu; công cụ có tác động (tạo yêu cầu hoàn tiền) chỉ tạo ở trạng thái **chờ duyệt**.
• **Luồng xử lý**: xác thực nhân viên → hiểu yêu cầu → tra đơn hàng → tra chính sách (kèm nguồn) → đề xuất → nhân viên xác nhận → tạo yêu cầu.
• **Kiểm soát**: quyền tối thiểu, người duyệt hoàn tiền, ghi log, giới hạn số bước, chống prompt injection, che dữ liệu cá nhân.`,
  'TS-ts.deploy-essay-1': `Khung trả lời cho mọi câu "công ty gặp vấn đề X, xây hệ thống AI":
1. **Bài toán và đầu ra** (loại bài toán gì, model trả ra gì, ai dùng kết quả).
2. **Dữ liệu** (nguồn, làm sạch, nhãn, quyền dùng).
3. **Baseline** không cần AI để so sánh.
4. **Model và cách đánh giá** (metric model và metric kinh doanh).
5. **Triển khai** (thử nhỏ trước, A/B test, người duyệt).
6. **Giám sát** (drift, chất lượng, chi phí) và kế hoạch huấn luyện lại.
7. **Rủi ro và đạo đức** (dữ liệu cá nhân, thiên kiến, sai sót).
Với bài dự báo tồn kho: metric hay dùng là MAE hoặc MAPE của dự báo, kèm chỉ số kinh doanh (tỉ lệ hết hàng, giá trị hàng tồn).`,
  'TS-ts.deploy-essay-2': `Điểm cộng trong câu này: tách rõ hai luồng (chatbot trả lời câu đơn giản; phân loại và chuyển câu phức tạp cho đúng bộ phận), có **đường chuyển sang nhân viên** bất cứ lúc nào, và đo bằng chỉ số kinh doanh: thời gian chờ, tỉ lệ được giải quyết tự động, điểm hài lòng, tỉ lệ khách phải liên hệ lại.
Đừng quên quyền riêng tư: che số điện thoại, số giấy tờ trong dữ liệu hội thoại trước khi dùng để huấn luyện hoặc đưa vào LLM bên ngoài.`,
  'TS-ts.deploy-essay-3': `Ý ăn điểm riêng của bài gian lận:
• **Lệch lớp rất mạnh** (gian lận thường dưới 1%): không dùng accuracy; dùng precision, recall, PR-AUC.
• **Chọn ngưỡng theo chi phí**: bỏ sót gian lận thì mất tiền; chặn nhầm thì khách khó chịu → nên có vùng giữa "yêu cầu xác thực thêm" thay vì chặn thẳng.
• **Thời gian thực**: phải chấm điểm trong vài chục mili giây lúc quẹt thẻ (xử lý theo luồng).
• **Concept drift**: kẻ gian liên tục đổi chiêu → giám sát và huấn luyện lại thường xuyên.
• Có quy trình khiếu nại cho khách bị chặn nhầm.`,
  'TS-c.monitoring-2': `Muốn rollback được thì phải chuẩn bị từ trước: lưu phiên bản model cũ (model registry), cấu hình triển khai cho phép chuyển nhanh, và ghi log đủ để so sánh hai phiên bản.
Sau khi rollback, phân tích nguyên nhân: dữ liệu thật khác dữ liệu đánh giá? Lỗi tiền xử lý giữa lúc huấn luyện và lúc chạy thật? Tập kiểm tra chưa đại diện?`,
  'TS-c.monitoring-3': `Các cách triển khai an toàn:
• **Shadow**: model mới chạy ngầm song song, không ảnh hưởng người dùng, chỉ để so sánh kết quả.
• **Canary**: vài phần trăm người dùng dùng model mới; ổn thì tăng dần.
• **A/B test**: chia ngẫu nhiên để đo tác động bằng chỉ số sản phẩm.
• **Blue-green**: hai môi trường đầy đủ, chuyển toàn bộ lưu lượng sang môi trường mới và quay lại được ngay.`,
  'TS-c.monitoring-4': `So sánh nhanh:
• **Batch** (theo lô): chạy định kỳ cho nhiều bản ghi, rẻ, đơn giản, kết quả có độ trễ (ví dụ điểm rời bỏ của khách tính mỗi đêm).
• **Real-time** (API trực tuyến): trả lời từng yêu cầu ngay, cần hạ tầng luôn chạy và nhanh (chatbot, chống gian lận lúc thanh toán).
Câu hỏi chọn: người dùng có cần kết quả **ngay lúc đó** không?`,
});
