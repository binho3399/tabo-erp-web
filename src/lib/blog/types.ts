import type { MetadataInput } from '@/lib/seo/types'

export interface BlogAuthor {
  name: string
  role: string
}

export interface BlogContentSection {
  heading: string
  paragraphs: string[]
  bullets?: string[]
  quote?: string
  codeInsights?: string[]
}

export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  category: string
  tags: string[]
  publishedAt: string
  updatedAt?: string
  readingTimeMinutes: number
  author: BlogAuthor
  coverImage: string
  canonicalPath: string
  noindex?: boolean
}

export interface BlogPost extends BlogPostSummary {
  seo: Omit<MetadataInput, 'canonicalPath'>
  content: BlogContentSection[]
}
