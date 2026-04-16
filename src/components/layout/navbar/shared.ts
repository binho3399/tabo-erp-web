import type { MouseEvent } from 'react'
import type { NavRouteDefinition, NavRoutePath } from '@/config/routes'
import type { BlogCategoryDefinition } from '@/lib/blog/categories'
import type { IconName } from '@/components/ui/Icon'

export const mobileRouteDescriptionByPath: Record<NavRoutePath, string> = {
  '/': 'Khám phá giải pháp Tabo ERP',
  '/pricing': 'Giải pháp và bảng giá tối ưu',
  '/about': 'Câu chuyện và sứ mệnh',
  '/contact': 'Hỗ trợ 24/7 cho doanh nghiệp',
  '/blog': 'Kiến thức ERP và vận hành',
}

const blogCategoryIconBySlug: Record<string, IconName> = {
  'kho-van': 'inventory_2',
  'tai-chinh': 'account_balance_wallet',
  'van-hanh': 'settings_suggest',
  'nhan-su': 'groups',
  'chuyen-doi-so': 'insights',
}

export function getCategoryIconName(slug: string): IconName {
  return blogCategoryIconBySlug[slug] ?? 'description'
}

export interface BaseNavigationProps {
  blogCategories: BlogCategoryDefinition[]
  nonBlogRoutes: NavRouteDefinition[]
  isBlogRouteActive: boolean
  pathname: string
  onNavClick: (targetPath: NavRoutePath) => (event: MouseEvent<HTMLElement>) => void
}
