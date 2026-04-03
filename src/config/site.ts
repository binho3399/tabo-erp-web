import type { ComponentType, LazyExoticComponent } from 'react'

import type { IconName } from '@/components/ui/Icon'

export type RoutePath = '/' | '/pricing' | '/about' | '/contact'

type PageModule = { default: ComponentType }
type PageLoader = () => Promise<PageModule>

export interface SiteRouteDefinition {
  path: RoutePath
  label: string
  navIcon: IconName
  title: string
  description: string
  load: PageLoader
}

export interface SiteRoute extends SiteRouteDefinition {
  Component: LazyExoticComponent<ComponentType>
}

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
  description:
    'Tabo ERP là nền tảng điều hành doanh nghiệp hợp nhất bán hàng, kho bãi và tài chính trên một hệ thống duy nhất.',
  titleTemplate: '%s | Tabo ERP',
  phone: '1800 356 893',
  email: 'contact@tabo.vn',
  salesEmail: 'sales@tabo.vn',
  pressEmail: 'press@tabo.vn',
  address:
    'Tòa nhà Landmark 81, Vinhomes Central Park, Phường 22, Bình Thạnh, TP. Hồ Chí Minh',
} as const

export const siteRoutes: SiteRouteDefinition[] = [
  {
    path: '/',
    label: 'Trang chủ',
    navIcon: 'home',
    title: 'Điều hành doanh nghiệp tất cả trong một',
    description:
      'Theo dõi bán hàng, kho bãi và tài chính theo thời gian thực trên một nền tảng ERP duy nhất.',
    load: () => import('@/pages/Home'),
  },
  {
    path: '/pricing',
    label: 'Bảng giá',
    navIcon: 'payments',
    title: 'Bảng giá dịch vụ',
    description:
      'Khám phá các gói giải pháp Tabo ERP phù hợp với quy mô doanh nghiệp và mục tiêu tăng trưởng.',
    load: () => import('@/pages/Pricing'),
  },
  {
    path: '/about',
    label: 'Về chúng tôi',
    navIcon: 'groups',
    title: 'Câu chuyện và tầm nhìn',
    description:
      'Tìm hiểu cách Tabo ERP xây dựng giải pháp quản trị gọn, mở rộng linh hoạt và hướng đến tăng trưởng bền vững.',
    load: () => import('@/pages/About'),
  },
  {
    path: '/contact',
    label: 'Liên hệ',
    navIcon: 'contact_support',
    title: 'Liên hệ và tư vấn',
    description:
      'Kết nối với Tabo ERP để nhận tư vấn, hỗ trợ kỹ thuật và giải pháp quản trị phù hợp doanh nghiệp.',
    load: () => import('@/pages/Contact'),
  },
]

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
