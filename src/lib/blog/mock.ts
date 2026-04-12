import type { BlogPost } from '@/lib/blog/types'

const author = {
  name: 'Ban biên tập Tabo ERP',
  role: 'Nghiên cứu vận hành doanh nghiệp',
} as const

export const blogPosts: BlogPost[] = [
  {
    slug: 'erp-cho-doanh-nghiep-vua-va-nho',
    title: 'ERP cho doanh nghiệp vừa và nhỏ: bắt đầu từ đâu để không "vỡ trận" dữ liệu',
    excerpt:
      'Khung 5 bước để doanh nghiệp SMB chuẩn hóa quy trình, đồng bộ dữ liệu và chọn phạm vi ERP hợp lý ngay từ đầu.',
    category: 'Chuyển đổi số',
    tags: ['ERP', 'SMB', 'Vận hành'],
    publishedAt: '2026-03-11',
    updatedAt: '2026-03-16',
    readingTimeMinutes: 8,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/erp-cho-doanh-nghiep-vua-va-nho',
    seo: {
      title: 'ERP cho doanh nghiệp vừa và nhỏ: 5 bước triển khai thực tế',
      description:
        'Hướng dẫn từng bước để doanh nghiệp vừa và nhỏ triển khai ERP mà không gây vỡ quy trình, vỡ dữ liệu hay tăng chi phí vận hành.',
    },
    content: [
      {
        heading: 'Bắt đầu từ bài toán vận hành, không bắt đầu từ tính năng',
        paragraphs: [
          'Sai lầm phổ biến nhất khi chọn ERP là liệt kê tính năng trước khi xác định nút thắt vận hành. Doanh nghiệp cần biết mình đang mất doanh thu ở đâu, chậm chốt sổ ở đâu và bổ sung tồn kho ở đâu.',
          'Khi bài toán được mô tả bằng dòng doanh thu, kho vận và tài chính, nhóm triển khai sẽ ưu tiên đúng phạm vi và tránh dự án bị phình to theo cảm xúc.',
        ],
        bullets: [
          'Chốt 3 KPI vận hành cần cải thiện trong 90 ngày.',
          'Xác định 3 quy trình gây thất thoát nhiều nhất.',
          'Đồng bộ danh sách dữ liệu cần làm sạch trước khi đi vào hệ thống.',
        ],
      },
      {
        heading: 'Chọn MVP ERP vừa đủ để đội ngũ chấp nhận',
        paragraphs: [
          'Giai đoạn đầu nên tập trung vào đơn hàng, tồn kho, công nợ và báo cáo quản trị cơ bản. Đây là phần tạo ra hiệu quả để đội ngũ thấy lợi ích sớm.',
          'Nếu đưa quá nhiều module vào đợt 1, doanh nghiệp sẽ tán lực đào tạo và khó xác định nguyên nhân khi quy trình bị tắc.',
        ],
        quote:
          'ERP thành công không phải là dự án đầy tính năng, mà là dự án làm cho dữ liệu và quy trình trở nên thông suốt hơn mỗi ngày.',
      },
      {
        heading: 'Đặt kỷ luật dữ liệu ngay từ ngày đầu',
        paragraphs: [
          'Một hệ thống ERP tốt vẫn thất bại nếu mã hàng, khách hàng hay đơn vị tính bị nhập không đồng nhất. Hãy định nghĩa quy tắc đặt tên, phê duyệt dữ liệu và quyền tạo mới.',
          'Khi có quản trị dữ liệu, doanh nghiệp sẽ có nền tảng để mở rộng sang mua hàng, sản xuất, CRM hoặc BI về sau mà không cần làm lại.',
        ],
      },
    ],
  },
  {
    slug: 'toi-uu-ton-kho-da-kenh-voi-erp',
    title: 'Tối ưu tồn kho đa kênh với ERP: giảm hết hàng mà không phóng đại tồn',
    excerpt:
      'Cách kết nối bán hàng, kho và nhập hàng trong cùng một luồng dữ liệu để cân bằng giữa mức độ phục vụ và vòng quay tồn kho.',
    category: 'Kho vận',
    tags: ['Tồn kho', 'Đa kênh', 'Dự báo'],
    publishedAt: '2026-02-27',
    updatedAt: '2026-03-05',
    readingTimeMinutes: 7,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/toi-uu-ton-kho-da-kenh-voi-erp',
    seo: {
      title: 'Tối ưu tồn kho đa kênh với ERP để giảm hết hàng',
      description:
        'Mô hình quản trị tồn kho đa kênh bằng ERP để cân đối dự báo, ngưỡng cảnh báo và đề xuất mua hàng theo dữ liệu thời gian thực.',
    },
    content: [
      {
        heading: 'Vấn đề lớn nhất không nằm ở kho, mà nằm ở sự lệch dữ liệu',
        paragraphs: [
          'Nhiều doanh nghiệp nhìn thấy kho quá tải nhưng nguyên nhân thực sự lại nằm ở đơn online, POS, sale admin và mua hàng đang chạy trên nhiều bảng tính khác nhau.',
          'ERP đưa các điểm chạm này về một nguồn sự thật duy nhất, từ đó mới báo cáo tồn kho, vòng quay và cảnh báo bổ sung hàng mới có giá trị.',
        ],
      },
      {
        heading: 'Dùng ngưỡng cảnh báo theo nhóm sản phẩm',
        paragraphs: [
          'Không nên áp một mức tồn tối thiểu cho toàn bộ danh mục. Sản phẩm bán nhanh, hàng mua theo mùa vụ và SKU có lead time dài cần những logic khác nhau.',
        ],
        bullets: [
          'Nhóm A: theo dõi hàng ngày và cảnh báo sớm.',
          'Nhóm B: đặt ngưỡng bổ sung theo tuần.',
          'Nhóm C: ưu tiên giải phóng tồn và không đặt mua theo cảm tính.',
        ],
      },
      {
        heading: 'Kết nối dự báo với quyết định nhập hàng',
        paragraphs: [
          'Khi ERP hiện được bán chạy theo kênh, xu hướng mua lại và lead time NCC, bộ phận mua hàng có thể đặt hàng theo xác suất thay vì theo cảm giác.',
          'Lợi ích lớn nhất là giảm tồn chết mà vẫn giữ được tỷ lệ đáp ứng đơn hàng ở mức mục tiêu.',
        ],
      },
    ],
  },
  {
    slug: 'bao-cao-tai-chinh-thoi-gian-thuc-cho-ceo',
    title: 'Báo cáo tài chính thời gian thực cho CEO: những chỉ số cần có mỗi sáng',
    excerpt:
      'Bức tranh tài chính điều hành mà CEO cần nhìn mỗi ngày để ra quyết định nhanh hơn về doanh thu, biên lợi nhuận và dòng tiền.',
    category: 'Tài chính',
    tags: ['CEO Dashboard', 'Tài chính', 'Thời gian thực'],
    publishedAt: '2026-01-19',
    updatedAt: '2026-02-01',
    readingTimeMinutes: 6,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/bao-cao-tai-chinh-thoi-gian-thuc-cho-ceo',
    seo: {
      title: 'Báo cáo tài chính thời gian thực cho CEO trong ERP',
      description:
        'Danh sách chỉ số tài chính và dashboard điều hành CEO nên theo dõi mỗi ngày để phản ứng nhanh với biến động doanh thu và dòng tiền.',
    },
    content: [
      {
        heading: 'CEO cần dashboard quyết định, không cần thêm một báo cáo tổng hợp',
        paragraphs: [
          'Mỗi buổi sáng, nhà quản lý cần thấy ba câu hỏi: tiền đang vào ra thế nào, biên lợi nhuận đang thay đổi ở đâu và có khoản mục nào đang vượt ngưỡng rủi ro.',
          'ERP giúp biến dữ liệu giao dịch thành một dashboard điều hành mà không cần ghép tay từ nhiều phòng ban.',
        ],
      },
      {
        heading: '5 nhóm chỉ số nên có trên một màn hình',
        paragraphs: [
          'Dashboard CEO nên ngắn gọn, ưu tiên xu hướng và cảnh báo, tránh biến thành một bài toán kế toán đầy cột số.',
        ],
        bullets: [
          'Doanh thu theo kênh và so với kế hoạch.',
          'Biên lợi nhuận gộp theo nhóm sản phẩm.',
          'Công nợ thu và công nợ trả đến hạn.',
          'Dòng tiền thuần và dự báo 2-4 tuần.',
          'Tồn kho giá trị cao có nguy cơ chậm quay.',
        ],
      },
      {
        heading: 'Có báo cáo nhanh chưa đủ, cần có cơ chế drill-down',
        paragraphs: [
          'Khi một chỉ số vượt ngưỡng, CEO và CFO cần lần ngược về giao dịch gốc để biết chính xác đơn hàng, kho hay bộ phận nào đang gây biến động.',
          'Đó là lý do ERP cần kết nối dữ liệu vận hành và tài chính trong cùng một hệ thống thay vì chỉ dùng BI độc lập.',
        ],
      },
    ],
  },
  {
    slug: 'chu-standard-hoa-quy-trinh-mua-hang-truoc-khi-len-erp',
    title: 'Chuẩn hóa quy trình mua hàng trước khi lên ERP để tránh tắc phê duyệt',
    excerpt:
      'Cách thiết kế luồng đề nghị mua, báo giá, phê duyệt và đặt hàng để ERP phản ánh đúng vai trò và điểm kiểm soát.',
    category: 'Vận hành',
    tags: ['Mua hàng', 'Phê duyệt', 'Quy trình'],
    publishedAt: '2025-12-22',
    updatedAt: '2025-12-28',
    readingTimeMinutes: 7,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/chu-standard-hoa-quy-trinh-mua-hang-truoc-khi-len-erp',
    seo: {
      title: 'Chuẩn hóa quy trình mua hàng trước khi triển khai ERP',
      description:
        'Khung chuẩn hóa quy trình mua hàng và phân quyền phê duyệt để doanh nghiệp giảm chậm trễ và sai sót khi triển khai ERP.',
    },
    content: [
      {
        heading: 'Bắt đầu từ vai trò và điểm phê duyệt',
        paragraphs: [
          'Nhiều doanh nghiệp đưa quy trình mua hàng vào ERP nhưng lại chưa xác định rõ ai là người đề nghị, ai kiểm tra ngân sách và ai chốt quyết định cuối cùng.',
          'Khi luồng vai trò không rõ, hệ thống sẽ chỉ số hóa sự lộn xộn thay vì tạo ra kiểm soát tốt hơn.',
        ],
      },
      {
        heading: 'Chuẩn hóa biểu mẫu và trạng thái xử lý',
        paragraphs: [
          'Mỗi bước nên có một bộ dữ liệu bắt buộc như NCC, mã hàng, số lượng, ngân sách dự kiến và thời gian cần hàng.',
        ],
        bullets: [
          'Phân biệt rõ đề nghị mua và đơn đặt hàng.',
          'Thiết lập trạng thái chờ duyệt, cần bổ sung, đã duyệt và đã đặt.',
          'Không cho phép bỏ qua bước kiểm tra dữ liệu tối thiểu.',
        ],
      },
      {
        heading: 'Đo hiệu quả bằng thời gian xử lý và tỷ lệ đúng hạn',
        paragraphs: [
          'Sau khi lên ERP, chỉ số quan trọng không chỉ là số phiếu đã xử lý mà còn là thời gian duyệt và tỷ lệ giao hàng đúng kế hoạch.',
        ],
      },
    ],
  },
  {
    slug: 'lam-sach-du-lieu-khach-hang-truoc-khi-migrate-he-thong',
    title: 'Làm sạch dữ liệu khách hàng trước khi migrate hệ thống: bắt đầu từ đâu',
    excerpt:
      'Các bước rà soát trùng lặp, chuẩn hóa tên gọi và kiểm tra trường dữ liệu bắt buộc trước khi chuyển đổi sang ERP mới.',
    category: 'Chuyển đổi số',
    tags: ['Dữ liệu', 'Migration', 'Khách hàng'],
    publishedAt: '2025-11-30',
    updatedAt: '2025-12-03',
    readingTimeMinutes: 6,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/lam-sach-du-lieu-khach-hang-truoc-khi-migrate-he-thong',
    seo: {
      title: 'Làm sạch dữ liệu khách hàng trước khi migrate ERP',
      description:
        'Hướng dẫn làm sạch dữ liệu khách hàng trước khi migrate để giảm lỗi mapping, giảm trùng lặp và tăng độ tin cậy cho báo cáo.',
    },
    content: [
      {
        heading: 'Không migrate mọi thứ nếu dữ liệu gốc đang sai',
        paragraphs: [
          'Một trong những lỗi tốn chi phí nhất là mang toàn bộ dữ liệu cũ sang hệ thống mới mà không lọc và chuẩn hóa trước.',
          'Dữ liệu khách hàng cần được xem như tài sản vận hành chứ không chỉ là file import.',
        ],
      },
      {
        heading: 'Ưu tiên rà trùng và chuẩn hóa trường khóa',
        paragraphs: [
          'Tên khách hàng, mã số thuế, số điện thoại và email là những trường nên được chuẩn hóa trước để tránh tạo nhiều bản ghi cho cùng một đối tượng.',
        ],
        bullets: [
          'Gắn quy tắc viết tắt và tên pháp lý thống nhất.',
          'Xử lý dữ liệu thiếu ở các trường bắt buộc.',
          'Quyết định rõ đâu là nguồn dữ liệu chuẩn để import.',
        ],
      },
      {
        heading: 'Xây checklist kiểm thử sau import',
        paragraphs: [
          'Sau khi migrate, cần kiểm tra chéo số lượng bản ghi, tính đúng của nhóm khách hàng và khả năng tra cứu trên hệ thống mới.',
        ],
      },
    ],
  },
  {
    slug: 'thiet-ke-dashboard-kho-cho-doi-van-hanh',
    title: 'Thiết kế dashboard kho cho đội vận hành: ít chỉ số nhưng phải hành động được',
    excerpt:
      'Một dashboard kho hiệu quả cần tập trung vào độ chính xác tồn, tốc độ xử lý và cảnh báo sai lệch thay vì dàn trải quá nhiều biểu đồ.',
    category: 'Kho vận',
    tags: ['Dashboard', 'Kho', 'Hiệu suất'],
    publishedAt: '2025-10-14',
    updatedAt: '2025-10-20',
    readingTimeMinutes: 5,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/thiet-ke-dashboard-kho-cho-doi-van-hanh',
    seo: {
      title: 'Thiết kế dashboard kho cho đội vận hành trong ERP',
      description:
        'Gợi ý cấu trúc dashboard kho theo hướng hành động để đội vận hành xử lý lệch tồn, chậm xuất và hàng quay vòng chậm.',
    },
    content: [
      {
        heading: 'Chọn chỉ số theo quyết định cần đưa ra',
        paragraphs: [
          'Dashboard tốt không phải dashboard nhiều số, mà là dashboard trả lời được hôm nay đội kho cần xử lý điều gì trước.',
          'Điểm quan trọng là mỗi chỉ số phải dẫn đến một hành động cụ thể của người vận hành.',
        ],
      },
      {
        heading: 'Nhóm chỉ số nên đi cùng nhau trên một màn hình',
        paragraphs: [
          'Độ chính xác tồn, thời gian xử lý đơn, tỷ lệ đơn chậm và danh sách SKU sai lệch là nhóm chỉ số nên xem cùng nhau để tạo bối cảnh.',
        ],
        bullets: [
          'Hiển thị ngưỡng cảnh báo thay vì chỉ hiển thị số tuyệt đối.',
          'Ưu tiên xu hướng 7 ngày và 30 ngày.',
          'Cho phép drill-down đến SKU hoặc nhân sự phụ trách.',
        ],
      },
      {
        heading: 'Tránh dashboard chỉ đẹp mà không dùng được',
        paragraphs: [
          'Nếu dashboard không được mở mỗi ngày bởi trưởng kho và đội vận hành, rất có thể nó đang thiếu tính hành động hoặc quá phức tạp.',
        ],
      },
    ],
  },
  {
    slug: 'cach-chot-so-noi-bo-nhanh-hon-cuoi-thang',
    title: 'Cách chốt sổ nội bộ nhanh hơn cuối tháng bằng ERP và kỷ luật dữ liệu',
    excerpt:
      'Rút ngắn thời gian chốt sổ bằng cách kiểm soát dữ liệu đầu vào, phân quyền trách nhiệm và khóa kỳ đúng thời điểm.',
    category: 'Tài chính',
    tags: ['Chốt sổ', 'Kế toán', 'ERP'],
    publishedAt: '2025-09-18',
    updatedAt: '2025-09-22',
    readingTimeMinutes: 7,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/cach-chot-so-noi-bo-nhanh-hon-cuoi-thang',
    seo: {
      title: 'Cách chốt sổ nội bộ nhanh hơn cuối tháng bằng ERP',
      description:
        'Những thay đổi quy trình và dữ liệu giúp doanh nghiệp rút ngắn thời gian chốt sổ mà vẫn giữ chất lượng kiểm soát.',
    },
    content: [
      {
        heading: 'Chốt sổ nhanh bắt đầu từ dữ liệu đúng trong tháng',
        paragraphs: [
          'Nếu chứng từ bị dồn cuối kỳ hoặc dữ liệu thiếu mã đối tượng, kế toán sẽ luôn bị động vào giai đoạn chốt sổ.',
          'ERP giúp giải quyết vấn đề này khi các bộ phận nhập liệu theo cùng chuẩn và theo cùng thời điểm.',
        ],
      },
      {
        heading: 'Khóa kỳ và cảnh báo ngoại lệ phải đi cùng nhau',
        paragraphs: [
          'Doanh nghiệp nên xác định rõ thời điểm khóa kỳ mềm, khóa kỳ cứng và quy trình xử lý ngoại lệ được phép mở lại.',
        ],
        bullets: [
          'Thiết lập deadline theo từng phòng ban gửi dữ liệu.',
          'Theo dõi các bút toán điều chỉnh lặp lại hằng tháng.',
          'Tự động cảnh báo chứng từ chưa hoàn tất trước ngày khóa.',
        ],
      },
      {
        heading: 'Đo tiến bộ bằng số ngày chốt sổ thực tế',
        paragraphs: [
          'KPI quan trọng là số ngày từ cuối tháng đến lúc ban điều hành nhận được báo cáo tin cậy để ra quyết định.',
        ],
      },
    ],
  },
  {
    slug: 'phan-quyen-nguoi-dung-trong-erp-khong-lam-cham-van-hanh',
    title: 'Phân quyền người dùng trong ERP mà không làm chậm vận hành hằng ngày',
    excerpt:
      'Cân bằng giữa kiểm soát và tốc độ xử lý bằng cách thiết kế quyền theo vai trò, theo ngoại lệ và theo mức độ rủi ro.',
    category: 'Nhân sự',
    tags: ['Phân quyền', 'Kiểm soát', 'Người dùng'],
    publishedAt: '2025-08-09',
    updatedAt: '2025-08-15',
    readingTimeMinutes: 6,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/phan-quyen-nguoi-dung-trong-erp-khong-lam-cham-van-hanh',
    seo: {
      title: 'Phân quyền người dùng trong ERP không làm chậm vận hành',
      description:
        'Hướng dẫn thiết kế quyền theo vai trò và ngoại lệ để kiểm soát hệ thống mà không tạo ma sát cho đội ngũ vận hành.',
    },
    content: [
      {
        heading: 'Đừng phân quyền theo cá nhân ngay từ đầu',
        paragraphs: [
          'Phân quyền theo từng cá nhân rất nhanh dẫn đến chồng chéo và khó kiểm soát khi nhân sự thay đổi.',
          'Doanh nghiệp nên bắt đầu từ vai trò điển hình và chỉ tạo ngoại lệ ở những trường hợp thực sự cần thiết.',
        ],
      },
      {
        heading: 'Xác định giao dịch rủi ro cao để siết trước',
        paragraphs: [
          'Không phải màn hình nào cũng cần mức kiểm soát như nhau. Những giao dịch ảnh hưởng đến giá, tồn kho và công nợ nên được ưu tiên siết quyền trước.',
        ],
        bullets: [
          'Khóa sửa dữ liệu sau khi chứng từ đã duyệt.',
          'Yêu cầu lý do khi hủy hoặc hoàn tác giao dịch.',
          'Ghi nhận log thao tác cho các chức năng nhạy cảm.',
        ],
      },
      {
        heading: 'Rà soát quyền định kỳ theo thay đổi tổ chức',
        paragraphs: [
          'Phân quyền hiệu quả cần được xem lại khi cơ cấu tổ chức, vai trò hoặc quy trình thay đổi, thay vì chỉ cấu hình một lần.',
        ],
      },
    ],
  },
  {
    slug: 'giam-sai-lech-ton-kho-bang-kiem-ke-chu-ky',
    title: 'Giảm sai lệch tồn kho bằng kiểm kê chu kỳ thay vì chờ kiểm kê toàn kho',
    excerpt:
      'Kiểm kê chu kỳ giúp phát hiện lệch tồn sớm hơn, ít gián đoạn vận hành hơn và tạo dữ liệu tốt hơn cho ERP.',
    category: 'Kho vận',
    tags: ['Kiểm kê', 'Tồn kho', 'Chu kỳ'],
    publishedAt: '2025-07-01',
    updatedAt: '2025-07-06',
    readingTimeMinutes: 5,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/giam-sai-lech-ton-kho-bang-kiem-ke-chu-ky',
    seo: {
      title: 'Giảm sai lệch tồn kho bằng kiểm kê chu kỳ trong ERP',
      description:
        'Thiết kế lịch kiểm kê chu kỳ theo nhóm SKU để giảm sai lệch tồn và hạn chế gián đoạn vận hành kho.',
    },
    content: [
      {
        heading: 'Kiểm kê toàn kho không phải lúc nào cũng hiệu quả',
        paragraphs: [
          'Kiểm kê toàn kho thường tạo áp lực lớn cho đội vận hành và chỉ phát hiện vấn đề khi sai lệch đã tích tụ quá lâu.',
          'Kiểm kê chu kỳ cho phép doanh nghiệp sửa lệch tồn sớm và học được nguyên nhân phát sinh nhanh hơn.',
        ],
      },
      {
        heading: 'Ưu tiên SKU có giá trị cao hoặc biến động mạnh',
        paragraphs: [
          'Không cần kiểm kê mọi SKU với cùng tần suất. Nhóm hàng có giá trị cao hoặc quay vòng nhanh nên được theo dõi sát hơn.',
        ],
        bullets: [
          'Thiết kế lịch kiểm kê theo nhóm A, B, C.',
          'Theo dõi nguyên nhân lệch tồn sau mỗi lần kiểm kê.',
          'Đưa dữ liệu kiểm kê về cùng dashboard giám sát kho.',
        ],
      },
      {
        heading: 'Dùng ERP để tạo vòng lặp cải tiến',
        paragraphs: [
          'Mục tiêu cuối cùng không chỉ là cập nhật tồn đúng mà còn là giảm số lần phát sinh sai lệch trong tương lai.',
        ],
      },
    ],
  },
  {
    slug: 'xay-kpi-cho-doi-ban-hang-khi-du-lieu-da-lien-thong',
    title: 'Xây KPI cho đội bán hàng khi dữ liệu đã liên thông giữa CRM và ERP',
    excerpt:
      'Khi dữ liệu khách hàng, đơn hàng và công nợ đã liền mạch, doanh nghiệp có thể thiết kế KPI sát hiệu quả thực tế hơn.',
    category: 'Vận hành',
    tags: ['KPI', 'Bán hàng', 'CRM'],
    publishedAt: '2025-06-11',
    updatedAt: '2025-06-17',
    readingTimeMinutes: 6,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/xay-kpi-cho-doi-ban-hang-khi-du-lieu-da-lien-thong',
    seo: {
      title: 'Xây KPI cho đội bán hàng khi dữ liệu CRM và ERP đã liên thông',
      description:
        'Gợi ý bộ KPI cho đội bán hàng dựa trên dữ liệu thật về doanh thu, tỷ lệ chuyển đổi, công nợ và chất lượng đơn hàng.',
    },
    content: [
      {
        heading: 'KPI nên đi từ doanh thu thực nhận, không chỉ từ đơn tạo mới',
        paragraphs: [
          'Khi CRM và ERP tách rời, nhiều KPI bán hàng chỉ phản ánh lượng cơ hội hoặc đơn hàng tạo ra mà không phản ánh chất lượng doanh thu.',
          'Khi dữ liệu đã liên thông, KPI có thể tính đến giao hàng, thu tiền và tỷ lệ hoàn trả.',
        ],
      },
      {
        heading: 'Kết hợp chỉ số đầu ra với chỉ số chất lượng',
        paragraphs: [
          'Một bộ KPI tốt nên cân bằng giữa tăng trưởng doanh số và chất lượng xử lý đơn, tránh tạo động lực bán bằng mọi giá.',
        ],
        bullets: [
          'Theo dõi doanh thu thuần thay vì doanh thu gộp.',
          'Đưa tỷ lệ giao đúng hạn vào đánh giá.',
          'Theo dõi công nợ quá hạn theo từng nhân sự phụ trách.',
        ],
      },
      {
        heading: 'KPI phải đọc được theo nhóm, theo kênh và theo thời gian',
        paragraphs: [
          'Khả năng phân tích theo kênh và theo chu kỳ giúp doanh nghiệp ra quyết định tuyển dụng, thưởng và đào tạo tốt hơn.',
        ],
      },
    ],
  },
  {
    slug: 'lam-the-nao-de-trien-khai-erp-theo-tung-giai-doan',
    title: 'Làm thế nào để triển khai ERP theo từng giai đoạn mà không mất đà nội bộ',
    excerpt:
      'Một roadmap nhiều giai đoạn giúp đội ngũ chấp nhận hệ thống tốt hơn và giảm rủi ro quá tải thay đổi trong doanh nghiệp.',
    category: 'Chuyển đổi số',
    tags: ['Roadmap', 'Triển khai', 'Thay đổi'],
    publishedAt: '2025-05-20',
    updatedAt: '2025-05-26',
    readingTimeMinutes: 8,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/lam-the-nao-de-trien-khai-erp-theo-tung-giai-doan',
    seo: {
      title: 'Triển khai ERP theo từng giai đoạn để giảm rủi ro thay đổi',
      description:
        'Cách chia roadmap ERP thành nhiều giai đoạn để doanh nghiệp hấp thụ thay đổi tốt hơn mà vẫn tạo kết quả sớm.',
    },
    content: [
      {
        heading: 'Không cần đưa mọi quy trình vào cùng một lúc',
        paragraphs: [
          'Khi phạm vi triển khai quá lớn, đội dự án rất dễ mất trọng tâm và đội vận hành khó cảm nhận được lợi ích sớm.',
          'Triển khai theo giai đoạn giúp mỗi đợt thay đổi có mục tiêu rõ ràng và dễ đo lường hơn.',
        ],
      },
      {
        heading: 'Mỗi giai đoạn cần có kết quả vận hành cụ thể',
        paragraphs: [
          'Một giai đoạn tốt không chỉ kết thúc bằng việc go-live mà còn phải chứng minh được một thay đổi về tốc độ, độ chính xác hoặc khả năng kiểm soát.',
        ],
        bullets: [
          'Giai đoạn 1 tập trung vào dữ liệu lõi và giao dịch chính.',
          'Giai đoạn 2 tối ưu báo cáo và cảnh báo.',
          'Giai đoạn 3 mở rộng tích hợp và nâng cao năng lực phân tích.',
        ],
      },
      {
        heading: 'Truyền thông nội bộ là điều kiện bắt buộc',
        paragraphs: [
          'Đội ngũ sẽ chấp nhận thay đổi tốt hơn khi họ hiểu mục tiêu của từng giai đoạn và lợi ích công việc hằng ngày mà họ nhận được.',
        ],
      },
    ],
  },
  {
    slug: 'toi-uu-dong-tien-voi-dashboard-cong-no',
    title: 'Tối ưu dòng tiền với dashboard công nợ: CFO nên xem gì mỗi tuần',
    excerpt:
      'Một dashboard công nợ tốt giúp ưu tiên khoản phải thu, theo dõi nghĩa vụ phải trả và giảm áp lực dòng tiền ngắn hạn.',
    category: 'Tài chính',
    tags: ['Dòng tiền', 'Công nợ', 'CFO'],
    publishedAt: '2025-04-08',
    updatedAt: '2025-04-12',
    readingTimeMinutes: 6,
    author,
    coverImage: '/noise.svg',
    canonicalPath: '/blog/toi-uu-dong-tien-voi-dashboard-cong-no',
    seo: {
      title: 'Tối ưu dòng tiền với dashboard công nợ cho CFO',
      description:
        'Danh sách chỉ số công nợ và dòng tiền mà CFO nên theo dõi mỗi tuần để chủ động với áp lực thanh khoản.',
    },
    content: [
      {
        heading: 'Không nên nhìn công nợ như một bảng số tĩnh',
        paragraphs: [
          'Công nợ phải được đọc theo mức độ ưu tiên, mức độ rủi ro và ảnh hưởng đến dòng tiền trong 7-14 ngày tới.',
          'Khi ERP gom dữ liệu bán hàng, thu tiền và thanh toán vào cùng một bức tranh, CFO có thể hành động nhanh hơn.',
        ],
      },
      {
        heading: 'Tập trung vào khoản mục cần gọi hành động',
        paragraphs: [
          'Dashboard công nợ nên giúp đội tài chính trả lời ngay câu hỏi cần thu khoản nào trước và khoản nào phải trả cần đàm phán lại.',
        ],
        bullets: [
          'Nhóm khoản phải thu đến hạn và quá hạn.',
          'Nhóm NCC có lịch thanh toán tập trung trong cùng tuần.',
          'Đánh dấu khách hàng có lịch sử thanh toán bất thường.',
        ],
      },
      {
        heading: 'Kết nối công nợ với kế hoạch tiền mặt',
        paragraphs: [
          'Mục tiêu cuối cùng là ra quyết định dòng tiền tốt hơn, không chỉ là nhìn thấy một danh sách công nợ chi tiết.',
        ],
      },
    ],
  },
]
