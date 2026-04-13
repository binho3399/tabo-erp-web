export interface BlogCategoryDefinition {
  name: string
  slug: string
  description: string
  colorFrom: string
  colorTo: string
}

const categoryDefinitions: BlogCategoryDefinition[] = [
  {
    name: 'Kho vận',
    slug: 'kho-van',
    description:
      'Tối ưu tồn kho, luồng xuất nhập và năng suất kho theo dữ liệu thời gian thực trong ERP.',
    colorFrom: 'from-blue-600',
    colorTo: 'to-indigo-500',
  },
  {
    name: 'Tài chính',
    slug: 'tai-chinh',
    description:
      'Chiến lược dòng tiền, công nợ và dashboard tài chính giúp nhà quản trị ra quyết định nhanh hơn.',
    colorFrom: 'from-sky-500',
    colorTo: 'to-cyan-400',
  },
  {
    name: 'Vận hành',
    slug: 'van-hanh',
    description:
      'Chuẩn hóa quy trình vận hành liên phòng ban để giảm ma sát và tăng tốc độ xử lý công việc.',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-teal-400',
  },
  {
    name: 'Nhân sự',
    slug: 'nhan-su',
    description:
      'Thiết kế vai trò, phân quyền và quy trình phối hợp giúp đội ngũ làm việc nhất quán trong hệ thống ERP.',
    colorFrom: 'from-orange-500',
    colorTo: 'to-amber-400',
  },
  {
    name: 'Chuyển đổi số',
    slug: 'chuyen-doi-so',
    description:
      'Lộ trình triển khai ERP theo từng giai đoạn để chuyển đổi số hiệu quả và bền vững.',
    colorFrom: 'from-violet-600',
    colorTo: 'to-purple-500',
  },
]

function slugifyCategoryName(name: string): string {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function listBlogCategoryDefinitions(): BlogCategoryDefinition[] {
  return categoryDefinitions
}

export function findBlogCategoryByName(name: string): BlogCategoryDefinition | null {
  return categoryDefinitions.find((category) => category.name === name) ?? null
}

export function findBlogCategoryBySlug(slug: string): BlogCategoryDefinition | null {
  return categoryDefinitions.find((category) => category.slug === slug) ?? null
}

export function resolveBlogCategorySlug(name: string): string {
  return findBlogCategoryByName(name)?.slug ?? slugifyCategoryName(name)
}
