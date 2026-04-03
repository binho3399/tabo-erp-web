export interface AboutGridItem {
  eyebrow: string
  title?: string
  body: string[]
  emphasis?: string
}

export const aboutGridContent: AboutGridItem[] = [
  {
    eyebrow: 'Giá trị cốt lõi',
    body: [
      'Tại Tabo, chất lượng là danh dự. Chúng tôi xây dựng hệ thống với tiêu chuẩn chặt chẽ, đảm bảo vận hành ổn định và bảo mật cao.',
      'Khách hàng luôn là trung tâm của mọi quyết định sản phẩm. Công nghệ được thiết kế để trở thành đòn bẩy, không phải rào cản.',
    ],
  },
  {
    eyebrow: 'Thành tựu',
    emphasis:
      'Phục vụ hàng ngàn doanh nghiệp trên hành trình chuyển đổi số với mức độ hài lòng cao.',
    body: [
      'Sự tin tưởng của 1,000+ doanh nghiệp là cột mốc quan trọng nhất của Tabo.',
      'Hệ thống vận hành hướng tới tự động hóa, sự đơn giản và khả năng triển khai đồng đều ở mọi cấp nhân sự.',
    ],
  },
  {
    eyebrow: 'Tầm nhìn',
    emphasis: 'Định hình tương lai số hóa qua giải pháp quản trị tinh gọn.',
    body: [
      'Tabo hướng đến vai trò đối tác chiến lược giúp doanh nghiệp mở rộng trên nền tảng dữ liệu thống nhất.',
      'Mỗi sản phẩm được tạo ra để hỗ trợ tăng trưởng bền vững, dễ vận hành và sẵn sàng mở rộng.',
    ],
  },
]

export const aboutTeamHighlights = [
  { value: '1,000+', label: 'doanh nghiệp đồng hành' },
  { value: '24/7', label: 'hỗ trợ đội ngũ vận hành' },
  { value: 'Realtime', label: 'dữ liệu vận hành hợp nhất' },
] as const
