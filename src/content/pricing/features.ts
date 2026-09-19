export type PricingPlanValue = string | boolean

export interface PricingFeatureItem {
  name: string
  free: PricingPlanValue
  extended: PricingPlanValue
  enterprise: PricingPlanValue
}

export interface PricingFeatureCategory {
  title: string
  icon: string
  features: PricingFeatureItem[]
}

export const pricingFeatureCategories: PricingFeatureCategory[] = [
  {
    title: 'Quản lý Đơn hàng Đa kênh',
    icon: 'local_mall',
    features: [
      { name: 'Xử lý đơn hàng tập trung', free: 'Tối đa 100 đơn', extended: 'Tối đa 1000 đơn', enterprise: 'Không giới hạn' },
      { name: 'Kết nối sàn TMĐT (Shopee, TikTok)', free: false, extended: 'Tối đa 3 gian hàng', enterprise: 'Đa nền tảng/Không giới hạn' },
      { name: 'Lập Báo giá / Đơn hàng B2B', free: false, extended: true, enterprise: 'Quy trình duyệt tự động' },
      { name: 'Xử lý đổi/trả hàng (Return)', free: 'Thủ công', extended: 'Cơ bản', enterprise: 'Tự động hoàn tiền/kho' },
      { name: 'Trạng thái xử lý vận đơn', free: 'Cơ bản', extended: 'Chi tiết', enterprise: 'Real-time Tracking' },
    ],
  },
  {
    title: 'Hệ thống POS Sỉ & Lẻ',
    icon: 'point_of_sale',
    features: [
      { name: 'Sử dụng tại quầy thu ngân (POS)', free: '01 điểm', extended: 'Tối đa 03 điểm', enterprise: 'Không giới hạn' },
      { name: 'Thiết lập bảng giá linh hoạt', free: false, extended: true, enterprise: 'Đa chi nhánh/Không giới hạn' },
      { name: 'Chế độ bán hàng Offline (Mất mạng)', free: false, extended: true, enterprise: 'Đồng bộ siêu tốc' },
      { name: 'Quản lý ca làm việc nhân sự', free: 'Thủ công', extended: 'Báo cáo doanh thu ca', enterprise: 'Theo dõi & Phân quyền chặt' },
      { name: 'Thanh toán QR Code / Ví điện tử', free: false, extended: true, enterprise: 'Tích hợp đa kênh' },
    ],
  },
  {
    title: 'Kho bãi & Chuỗi cung ứng',
    icon: 'inventory_2',
    features: [
      { name: 'Số lượng kho bãi', free: '01 kho', extended: 'Tối đa 03 kho', enterprise: 'Đa kho, đa chi nhánh' },
      { name: 'Lập Phiếu nhập kho', free: 'Cơ bản', extended: 'Kiểm soát số lô/HSD', enterprise: 'Barcode/RFID' },
      { name: 'Lập Phiếu xuất kho', free: 'Cơ bản', extended: 'Kiểm soát số lô/HSD', enterprise: 'Barcode/RFID' },
      { name: 'Lập Phiếu chuyển kho nội bộ', free: false, extended: true, enterprise: 'Theo dõi điều chuyển' },
      { name: 'Lập Phiếu kiểm kho', free: 'Thủ công', extended: 'Quét mã vạch', enterprise: 'Cân bằng kho tự động' },
      { name: 'Cảnh báo tồn kho tối thiểu', free: false, extended: true, enterprise: true },
      { name: 'Quản lý vị trí lưu kho (Bin/Shelf)', free: false, extended: false, enterprise: true },
    ],
  },
  {
    title: 'Sổ Quỹ & Đối soát tự động',
    icon: 'account_balance_wallet',
    features: [
      { name: 'Quản lý Sổ quỹ tiền mặt', free: '01 quỹ', extended: 'Đa quỹ', enterprise: 'Không giới hạn' },
      { name: 'Quản lý Sổ tiền gửi Ngân hàng', free: '01 tài khoản', extended: 'Đa tài khoản', enterprise: 'Không giới hạn' },
      { name: 'Lập Phiếu Thu', free: 'Cơ bản', extended: 'Mẫu in tùy chỉnh', enterprise: 'Tự động lập từ Đơn hàng' },
      { name: 'Lập Phiếu Chi', free: 'Cơ bản', extended: 'Mẫu in tùy chỉnh', enterprise: 'Phân quyền duyệt chi' },
      { name: 'Công nợ Phải thu (Khách hàng)', free: 'Cơ bản', extended: 'Cảnh báo quá hạn', enterprise: 'Nhắc nợ tự động Zalo/SMS' },
      { name: 'Công nợ Phải trả (Nhà cung cấp)', free: 'Cơ bản', extended: 'Lịch thanh toán', enterprise: 'Lập kế hoạch thanh toán' },
      { name: 'Đối soát đơn hàng tự động', free: false, extended: 'Bán tự động', enterprise: 'Tự động 100%' },
      { name: 'Gạch nợ qua Smart Banking', free: false, extended: false, enterprise: 'Real-time' },
    ],
  },
  {
    title: 'Vận chuyển & Giao nhận',
    icon: 'local_shipping',
    features: [
      { name: 'Tạo đơn sang đối tác vận chuyển', free: false, extended: true, enterprise: 'Tích hợp đa nền tảng VC' },
      { name: 'Tự động tính & so sánh phí ship', free: false, extended: true, enterprise: 'Đề xuất hãng rẻ nhất' },
      { name: 'Đồng bộ hành trình đơn hàng', free: false, extended: true, enterprise: 'Tự động báo khách Zalo/SMS' },
      { name: 'Đối soát COD hãng vận chuyển', free: false, extended: 'Bán tự động', enterprise: 'Tự động 100%' },
    ],
  },
  {
    title: 'Chăm sóc KH (CRM/Loyalty)',
    icon: 'groups',
    features: [
      { name: 'Lưu trữ tệp khách hàng CRM', free: 'Dưới 500 KH', extended: 'Dưới 2000 KH', enterprise: 'Không giới hạn' },
      { name: 'Gửi tin nhắn Zalo ZNS / SMS', free: false, extended: true, enterprise: 'Automation Flow' },
      { name: 'Thiết lập kịch bản CRM tự động', free: false, extended: 'Cơ bản', enterprise: 'Chuyên sâu đa kênh' },
      { name: 'Thẻ thành viên & Tích điểm', free: false, extended: true, enterprise: 'Omni-channel Loyalty' },
      { name: 'Khởi tạo Voucher/Mã giảm giá', free: false, extended: true, enterprise: 'Theo hành vi cá nhân' },
    ],
  },
  {
    title: 'Báo cáo & Phân tích Đa chiều',
    icon: 'bar_chart',
    features: [
      { name: 'Báo cáo Doanh thu & Lợi nhuận', free: 'Cơ bản', extended: 'Theo khung thời gian', enterprise: 'Phân tích tăng trưởng sâu' },
      { name: 'Báo cáo Hiệu quả Kênh bán hàng', free: false, extended: true, enterprise: 'So sánh đa chiều Real-time' },
      { name: 'Báo cáo Hiệu suất nhân sự', free: false, extended: true, enterprise: 'Phân tích KPI từng ca' },
      { name: 'Phân khúc Insight Khách hàng', free: false, extended: 'Theo nhóm Cơ bản', enterprise: 'Phân tích Mô hình RFM/AI' },
      { name: 'Giao diện Dashboard Tùy biến', free: false, extended: false, enterprise: 'Dashboard Quản trị 360°' },
    ],
  },
  {
    title: 'Hỗ trợ & API Thiết kế riêng',
    icon: 'support_agent',
    features: [
      { name: 'Kênh Tương tác & Hỗ trợ', free: 'Cộng đồng', extended: 'Chuyên viên tư vấn', enterprise: 'Chuyên gia riêng 1-1 24/7' },
      { name: 'Tài liệu Hướng dẫn & Đào tạo', free: 'Video trực tuyến', extended: 'Video trực tuyến', enterprise: 'Khoá training thiết kế riêng' },
      { name: 'Cập nhật Phiên bản nâng cấp', free: 'Định kỳ chung', extended: 'Định kỳ chung', enterprise: 'Ưu tiên bản Early-bird' },
      { name: 'Mở rộng API tích hợp hệ thống', free: false, extended: false, enterprise: 'Sẵn sàng các Module' },
      { name: 'Mở rộng Tính năng may đo', free: false, extended: false, enterprise: 'Có Đội ngũ Support Dev' },
    ],
  },
]
