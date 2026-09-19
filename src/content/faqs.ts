export interface FaqItem {
  question: string
  answer: string
}

export const aboutFaqItems: FaqItem[] = [
  {
    question: 'Thời gian triển khai thông thường là bao lâu?',
    answer:
      'Phụ thuộc vào quy mô và mức độ phức tạp, thông thường quy trình triển khai chuẩn của Tabo kéo dài từ 2 đến 4 tuần cho một doanh nghiệp SME.',
  },
  {
    question: 'Hệ thống có dễ sử dụng cho người không rành công nghệ?',
    answer:
      'Toàn bộ giao diện của Tabo được thiết kế tối giản, tập trung vào UX/UI tối ưu nhất để bất kỳ nhân sự nào cũng có thể làm quen chỉ sau 1-2 ngày training.',
  },
  {
    question: 'Chi phí nâng cấp và bảo trì hàng năm như thế nào?',
    answer:
      'Tabo cung cấp chính sách miễn phí cập nhật các tính năng mới trong cơ bản. Phí bảo trì và server hàng năm sẽ được tính cố định và minh bạch theo từng gói dịch vụ.',
  },
  {
    question: 'Tabo có giải pháp riêng cho từng ngành nghề không?',
    answer:
      'Chúng tôi đã xây dựng sẵn nhiều phiên bản Customize đặc thù cho các ngành: Bán lẻ, Sản xuất, F&B, Logistics và Dịch vụ.',
  },
  {
    question: 'Hỗ trợ khách hàng sau khi triển khai ra sao?',
    answer:
      'Chúng tôi triển khai mô hình hỗ trợ 24/7 qua 3 kênh: Zalo chat, Hotline và Ticket trên hệ thống, kèm theo cam kết SLA rõ ràng cho từng sự cố.',
  },
  {
    question: 'Có giới hạn số lượng user truy cập đồng thời không?',
    answer:
      'Tùy thuộc vào gói dịch vụ bạn đăng ký. Tabo hỗ trợ linh hoạt từ 5 users đến không giới hạn users trên các gói Enterprise.',
  },
]

export const contactFaqItems: FaqItem[] = [
  {
    question: 'Thời gian phản hồi thông thường là bao lâu?',
    answer:
      'Đội ngũ CSKH của chúng tôi cam kết phản hồi các yêu cầu hỗ trợ trong vòng tối đa 2 giờ làm việc kể từ khi nhận được yêu cầu trên hệ thống.',
  },
  {
    question: 'Tabo có hỗ trợ demo trực tiếp không?',
    answer:
      'Có, chúng tôi hỗ trợ demo trực tiếp 1-1 qua Google Meet hoặc Zoom để hướng dẫn chi tiết các phân hệ phù hợp với nghiệp vụ doanh nghiệp của bạn.',
  },
  {
    question: 'Chính sách dùng thử như thế nào?',
    answer:
      'Tabo cung cấp gói dùng thử 14 ngày miễn phí với đầy đủ phân hệ. Trong thời gian này, bạn sẽ nhận được sự hỗ trợ setup hoàn toàn từ chuyên gia.',
  },
  {
    question: 'Làm sao để yêu cầu tích hợp tính năng riêng?',
    answer:
      'Bạn có thể điền form liên hệ và nêu rõ yêu cầu ở phần Lời nhắn, đội ngũ kỹ thuật sẽ trao đổi để khảo sát và đưa ra lộ trình tích hợp (Custom ERP).',
  },
  {
    question: 'Dữ liệu của tôi có được bảo mật không?',
    answer:
      'Tất cả dữ liệu được mã hóa chuẩn AES-256 và lưu trữ trên hạ tầng đám mây đạt tiêu chuẩn quốc tế, đảm bảo an toàn tuyệt đối.',
  },
  {
    question: 'Tabo ERP có thể tích hợp với các hệ thống khác không?',
    answer:
      'Chúng tôi hỗ trợ API mở cho phép kết nối linh hoạt với các phần mềm kế toán, CRM, ngân hàng và các nền tảng thương mại điện tử phổ biến.',
  },
  {
    question: 'Tôi có thể nâng cấp gói dịch vụ sau này không?',
    answer:
      'Hoàn toàn có thể. Doanh nghiệp có thể nâng cấp lên các gói cao hơn hoặc bổ sung thêm user bất cứ lúc nào một cách nhanh chóng ngay trên website.',
  },
  {
    question: 'Có hỗ trợ hướng dẫn sử dụng cho nhân viên không?',
    answer:
      'Chúng tôi cung cấp thư viện video hướng dẫn, tài liệu chi tiết và các buổi training trực tiếp tùy theo quy mô của gói dịch vụ bạn lựa chọn.',
  },
  {
    question: 'Tabo có hỗ trợ chuyển đổi dữ liệu cũ không?',
    answer:
      'Có. Đội ngũ kỹ thuật hỗ trợ nhập liệu và cấu trúc lại dữ liệu từ file Excel hoặc từ phần mềm cũ sang hệ thống của Tabo hoàn chỉnh.',
  },
  {
    question: 'Chi phí triển khai ban đầu bao gồm những gì?',
    answer:
      'Tùy thuộc vào gói dịch vụ, thông thường bao gồm phí bản quyền sử dụng, phí thiết lập ban đầu và phí đào tạo nhân sự trực tuyến hoặc offline.',
  },
]

export const pricingFaqItems: FaqItem[] = [
  {
    question: 'Có phí ẩn nào ngoài gói dịch vụ không?',
    answer:
      'Tabo ERP cam kết minh bạch 100% về biểu phí. Ngoài cước phí đã thống nhất, bạn sẽ không bao giờ gặp phải các khoản phí server, phí nâng cấp hay phí tính năng ngầm.',
  },
  {
    question: 'Tôi có được xuất hóa đơn VAT không?',
    answer:
      'Chắc chắn rồi. Mọi giao dịch hợp pháp đăng ký gói phần mềm Tabo đều sẽ được hỗ trợ xuất Hóa đơn Giá trị gia tăng (VAT) hợp lệ 100% cho nhu cầu hạch toán.',
  },
  {
    question: 'Khác biệt giữa Hộ Kinh Doanh và Nâng Cao?',
    answer:
      'Gói Hộ Kinh Doanh tối ưu cho quy trình 1 điểm bán lẻ cốt lõi. Nâng Cao mở khóa toàn bộ nền tảng: Đa chi nhánh, hệ sinh thái API, phân quyền tùy chỉnh và chuyên gia 24/7.',
  },
  {
    question: 'Hình thức thanh toán như thế nào?',
    answer:
      'Chúng tôi hỗ trợ chu kỳ linh hoạt: theo 6 tháng, 1 năm hoặc 2 năm. Đặc biệt, các hợp đồng thanh toán từ 1 năm trở lên sẽ được áp dụng chính sách chiết khấu rất hấp dẫn.',
  },
  {
    question: 'Chính sách nâng cấp giữa chừng ra sao?',
    answer:
      'Nếu doanh nghiệp mở rộng quy mô, bạn có thể chủ động nâng cấp gói cước cao hơn bất cứ lúc nào. Hệ thống sẽ tự động đối trừ số ngày chưa dùng của gói cũ.',
  },
  {
    question: 'Có hỗ trợ chính sách hoàn tiền không?',
    answer:
      'Có. Chúng tôi tự tin với chính sách hoàn trả 100% số tiền trong 14 ngày đầu tiên trải nghiệm nếu giải pháp không thật sự phù hợp với quy trình hoạt động của bạn.',
  },
]
