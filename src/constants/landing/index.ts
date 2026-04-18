import type { FeatureItem, SectorItem, SolutionItem, PricingPlan } from '@/types/landing';

export const FEATURE_ITEMS: FeatureItem[] = [
    { name: "Tài chính", icon: "account_balance", desc: "Tài chính tổng hợp", color: "blue" },
    { name: "Kho bãi", icon: "inventory_2", desc: "Kiểm soát vật tư", color: "orange" },
    { name: "Nhân sự", icon: "groups", desc: "Chấm công & lương", color: "emerald" },
    { name: "Mua hàng", icon: "local_shipping", desc: "Quản lý nhà cung cấp", color: "purple" },
    { name: "Bán hàng", icon: "point_of_sale", desc: "Đơn hàng & Doanh thu", color: "pink" },
    { name: "Báo cáo", icon: "pie_chart", desc: "Phân tích đa chiều", color: "cyan" },
    { name: "Sản xuất", icon: "precision_manufacturing", desc: "Kế hoạch & Vận hành", color: "red" },
    { name: "CRM", icon: "support_agent", desc: "Chăm sóc khách hàng", color: "teal" },
    { name: "Dự án", icon: "task", desc: "Quản lý tiến độ", color: "indigo" },
    { name: "Tài sản", icon: "category", desc: "Khấu hao & Bảo trì", color: "amber" }
];

export const SECTOR_ITEMS: SectorItem[] = [
    { name: "Thời trang", icon: "checkroom" },
    { name: "Điện thoại & Máy tính", icon: "devices" },
    { name: "Vật liệu xây dựng", icon: "construction" },
    { name: "Nhà thuốc", icon: "medical_services" },
    { name: "Mẹ & Bé", icon: "child_care" },
    { name: "Sách & Văn phòng phẩm", icon: "menu_book" },
    { name: "Sản xuất", icon: "factory" },
    { name: "Tạp hóa & Siêu thị", icon: "shopping_cart" },
    { name: "Mỹ phẩm", icon: "brush" },
    { name: "Nông sản & Thực phẩm", icon: "grass" },
    { name: "Xe, Máy móc", icon: "directions_bike" },
    { name: "Nội thất & Gia dụng", icon: "weekend" },
    { name: "Hoa & Quà tặng", icon: "card_giftcard" },
    { name: "Nhà hàng", icon: "restaurant" },
    { name: "Quán ăn", icon: "ramen_dining" },
    { name: "Cafe, Trà sữa", icon: "coffee" },
    { name: "Karaoke, Bida", icon: "mic" },
    { name: "Bar, Pub & Club", icon: "local_bar" },
    { name: "Căng tin & Trạm nghỉ", icon: "bakery_dining" },
    { name: "Khác", icon: "apps" }
];

export const SOLUTIONS: SolutionItem[] = [
    {
        id: "01",
        title: "Dữ liệu phân tán",
        description: "Hợp nhất và chuẩn hóa nguồn dữ liệu phân tán thành một hệ thống thông tin tập trung duy nhất.",
        features: [
            'Hợp nhất danh mục hàng hóa',
            'Đồng bộ tồn kho liên chi nhánh',
            'Quản lý công nợ tập trung',
            'Hệ thống báo cáo tự động'
        ],
        color: "blue",
        icon: "account_tree"
    },
    {
        id: "02",
        title: "Khó khăn mở rộng",
        description: "Khắc phục nút thắt vận hành bằng quy trình thông minh, ổn định và sẵn sàng cho sự bứt phá.",
        features: [
            'Quy trình chuẩn hóa ISO',
            'Mở rộng chi nhánh không giới hạn',
            'Phân quyền linh hoạt',
            'Hạ tầng Cloud sẵn sàng'
        ],
        color: "indigo",
        icon: "trending_up"
    },
    {
        id: "03",
        title: "Thất thoát tài sản",
        description: "Thiết lập cơ chế kiểm soát chéo chặt chẽ, ngăn chặn thất thoát và minh bạch hóa mọi tài sản.",
        features: [
            'Kiểm kê kho tự động',
            'Cảnh báo gian lận Real-time',
            'Đối soát dòng tiền chính xác',
            'Truy xuất lịch sử giao dịch'
        ],
        color: "slate",
        icon: "security"
    },
    {
        id: "04",
        title: "Quy trình làm việc rườm rà",
        description: "Số hóa và tự động hóa các bước xử lý thủ công, tối ưu hóa năng suất cho toàn bộ đội ngũ.",
        features: [
            'Phê duyệt điện tử',
            'Xử lý đơn hàng tự động',
            'Giao việc thông minh',
            'Cảnh báo đến hạn'
        ],
        color: "cyan",
        icon: "rocket_launch"
    },
    {
        id: "05",
        title: "Thiếu số liệu quyết định",
        description: "Bảng điều khiển thông minh cung cấp cái nhìn toàn cảnh theo thời gian thực, hỗ trợ lãnh đạo ra quyết định nhanh chóng.",
        features: [
            'Báo cáo đa chiều RT',
            'Phân tích hiệu suất',
            'Dự báo doanh thu',
            'Biểu đồ trực quan'
        ],
        color: "purple",
        icon: "insights"
    }
];

export const PRICING_PLANS: PricingPlan[] = [
    {
        name: "Miễn Phí",
        tagline: "Miễn phí cho tất cả mọi người/doanh nghiệp",
        price: "0đ",
        period: "",
        priceSubtitle: "Miễn phí cho tất cả mọi người/doanh nghiệp",
        description: "Giải pháp cơ bản cho hộ kinh doanh",
        features: [
            "1 kênh bán",
            "Chỉ POS Lẻ",
            "1 Kho tự quản",
            "Sổ tay truyền thống",
            "Thủ công cơ bản",
            "-",
            "Tiêu chuẩn",
            "Cộng đồng hỗ trợ"
        ],
        cta: "Bắt đầu ngay",
        variant: "secondary"
    },
    {
        name: "Nâng Cao",
        tagline: "Gói toàn diện",
        price: "Liên hệ",
        period: "",
        priceSubtitle: "Báo giá theo quy mô doanh nghiệp",
        description: "Giải pháp ERP may đo cho doanh nghiệp",
        features: [
            "Đa nền tảng (Shopee, Web,...)",
            "POS Sỉ & Lẻ, nhiều giá",
            "Đồng bộ đa chi nhánh",
            "Smart Banking tự động",
            "Kết nối Hãng VC & Đối soát",
            "Zalo ZNS, Phân hạng KH",
            "Dashboard Real-time 360°",
            "Chuyên gia riêng & Mở API"
        ],
        isPopular: true,
        highlight: true,
        cta: "Liên hệ tư vấn",
        variant: "primary"
    }
];

export const COMPARISON_FEATURES = [
    "Quản lý Đơn hàng Đa kênh",
    "Hệ thống POS Sỉ & Lẻ",
    "Kho bãi & Chuỗi cung ứng",
    "Sổ Quỹ & Đối soát tự động",
    "Vận chuyển & Giao nhận",
    "Chăm sóc KH (CRM/Loyalty)",
    "Báo cáo & Phân tích Đa chiều",
    "Hỗ trợ & API Thiết kế riêng"
];
