import { primaryNavRoutes, type NavRoutePath } from '@/config/routes'
import type { IconName } from '@/components/ui/Icon'
import type { MetadataInput } from '@/lib/seo/types'

interface ContactLine {
  label: string
  value: string
  href?: string
}

interface ContactCard {
  title: string
  icon: IconName
  lines: ContactLine[]
}

export const siteMetadata = {
  name: 'Tabo ERP',
  shortName: 'Tabo',
  organizationName: 'Tabo ERP',
  description:
    'Tabo ERP là nền tảng điều hành doanh nghiệp hợp nhất bán hàng, kho bãi và tài chính trên một hệ thống duy nhất.',
  titleTemplate: '%s | Tabo ERP',
  siteUrl: 'https://tabo.vn',
  defaultOgImage: '/favicon.svg',
  twitterHandle: '@taboerp',
  phone: '1800 356 893',
  email: 'contact@tabo.vn',
  salesEmail: 'sales@tabo.vn',
  pressEmail: 'press@tabo.vn',
  address:
    'Tòa nhà Landmark 81, Vinhomes Central Park, Phường 22, Bình Thạnh, TP. Hồ Chí Minh',
} as const

export const siteRoutes = primaryNavRoutes

export const staticPageMetadata: Record<NavRoutePath, MetadataInput> = {
  '/': {
    title: 'Điều hành doanh nghiệp tất cả trong một',
    description:
      'Theo dõi bán hàng, kho bãi và tài chính theo thời gian thực trên một nền tảng ERP duy nhất.',
    canonicalPath: '/',
  },
  '/pricing': {
    title: 'Bảng giá dịch vụ',
    description:
      'Khám phá các gói giải pháp Tabo ERP phù hợp với quy mô doanh nghiệp và mục tiêu tăng trưởng.',
    canonicalPath: '/pricing',
  },
  '/about': {
    title: 'Câu chuyện và tầm nhìn',
    description:
      'Tìm hiểu cách Tabo ERP xây dựng giải pháp quản trị gọn, mở rộng linh hoạt và hướng đến tăng trưởng bền vững.',
    canonicalPath: '/about',
  },
  '/contact': {
    title: 'Liên hệ và tư vấn',
    description:
      'Kết nối với Tabo ERP để nhận tư vấn, hỗ trợ kỹ thuật và giải pháp quản trị phù hợp doanh nghiệp.',
    canonicalPath: '/contact',
  },
  '/blog': {
    title: 'Tin tức ERP và vận hành doanh nghiệp',
    description:
      'Tin tức Tabo ERP chia sẻ kinh nghiệm ERP, tài chính, tồn kho và chuyển đổi số để doanh nghiệp ra quyết định nhanh hơn.',
    canonicalPath: '/blog',
  },
}

export const legalLinks = [
  { label: 'Chính sách bảo mật', href: '#' },
  { label: 'Điều khoản dịch vụ', href: '#' },
] as const

export const contactCards: ContactCard[] = [
  {
    title: 'Đường dây nóng',
    icon: 'phone_in_talk' as IconName,
    lines: [
      { label: 'Doanh nghiệp', value: '1900 1234' },
      { label: 'Kỹ thuật', value: '(028) 3888 9999' },
    ],
  },
  {
    title: 'Email hỗ trợ',
    icon: 'mail' as IconName,
    lines: [
      { label: 'Kinh doanh', value: siteMetadata.salesEmail, href: `mailto:${siteMetadata.salesEmail}` },
      { label: 'Truyền thông', value: siteMetadata.pressEmail, href: `mailto:${siteMetadata.pressEmail}` },
    ],
  },
] as const
