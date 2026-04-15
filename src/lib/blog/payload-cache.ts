import type { BlogPost } from '@/lib/blog/types'

export interface PayloadCategorySnapshot {
  name: string
  slug: string
  description?: string
}

export interface PayloadBlogSnapshot {
  generatedAt: string
  sourceUrl: string
  posts: BlogPost[]
  categories: PayloadCategorySnapshot[]
}
