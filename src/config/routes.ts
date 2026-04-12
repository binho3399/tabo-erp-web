import type { ComponentType, LazyExoticComponent } from 'react'

import type { IconName } from '@/components/ui/Icon'

type PageModule = { default: ComponentType }
type PageLoader = () => Promise<PageModule>

export type NavRoutePath = '/' | '/pricing' | '/about' | '/contact' | '/blog'
export type AppRoutePath = NavRoutePath | '/blog/:slug' | '*'

export interface NavRouteDefinition {
  path: NavRoutePath
  label: string
  navIcon: IconName
  title: string
  description: string
}

export interface AppRouteDefinition {
  path: AppRoutePath
  load: PageLoader
}

export interface ClientRoute extends AppRouteDefinition {
  Component: LazyExoticComponent<ComponentType>
}

export const primaryNavRoutes: NavRouteDefinition[] = [
  {
    path: '/',
    label: 'Trang chủ',
    navIcon: 'home',
    title: 'Điều hành doanh nghiệp tất cả trong một',
    description:
      'Theo dõi bán hàng, kho bãi và tài chính theo thời gian thực trên một nền tảng ERP duy nhất.',
  },
  {
    path: '/pricing',
    label: 'Bảng giá',
    navIcon: 'payments',
    title: 'Bảng giá dịch vụ',
    description:
      'Khám phá các gói giải pháp Tabo ERP phù hợp với quy mô doanh nghiệp và mục tiêu tăng trưởng.',
  },
  {
    path: '/about',
    label: 'Về chúng tôi',
    navIcon: 'groups',
    title: 'Câu chuyện và tầm nhìn',
    description:
      'Tìm hiểu cách Tabo ERP xây dựng giải pháp quản trị gọn, mở rộng linh hoạt và hướng đến tăng trưởng bền vững.',
  },
  {
    path: '/contact',
    label: 'Liên hệ',
    navIcon: 'contact_support',
    title: 'Liên hệ và tư vấn',
    description:
      'Kết nối với Tabo ERP để nhận tư vấn, hỗ trợ kỹ thuật và giải pháp quản trị phù hợp doanh nghiệp.',
  },
  {
    path: '/blog',
    label: 'Blog',
    navIcon: 'menu_book',
    title: 'Blog ERP và vận hành doanh nghiệp',
    description:
      'Không gian chia sẻ kinh nghiệm ERP, tài chính, tồn kho và chuyển đổi số cho doanh nghiệp đang tăng trưởng.',
  },
]

export const appRouteDefinitions: AppRouteDefinition[] = [
  { path: '/', load: () => import('@/pages/Home') },
  { path: '/pricing', load: () => import('@/pages/Pricing') },
  { path: '/about', load: () => import('@/pages/About') },
  { path: '/contact', load: () => import('@/pages/Contact') },
  { path: '/blog', load: () => import('@/pages/BlogIndex') },
  { path: '/blog/:slug', load: () => import('@/pages/BlogPost') },
  { path: '*', load: () => import('@/pages/NotFound') },
]
