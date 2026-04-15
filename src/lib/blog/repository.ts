import { blogPosts } from '@/lib/blog/mock'
import { payloadBlogSnapshot } from '@/lib/blog/payload-cache.generated'
import {
  findBlogCategoryBySlug,
  listBlogCategoryDefinitions,
  resolveBlogCategorySlug,
  type BlogCategoryDefinition,
} from '@/lib/blog/categories'
import type { BlogPost, BlogPostSummary } from '@/lib/blog/types'

export interface BlogCategorySummary extends BlogCategoryDefinition {
  postCount: number
}

const blogSource = (import.meta.env.BLOG_SOURCE as string | undefined) ?? 'mock'
const activePosts = blogSource === 'payload' && payloadBlogSnapshot.posts.length > 0
  ? payloadBlogSnapshot.posts
  : blogPosts

const payloadCategoryDescriptionMap: Record<string, string> = Object.fromEntries(
  payloadBlogSnapshot.categories.map((category) => [category.slug, category.description ?? '']),
)

function sortByPublishedAtDesc<T extends BlogPostSummary>(posts: T[]) {
  return [...posts].sort((left, right) => right.publishedAt.localeCompare(left.publishedAt))
}

function toSummary(post: BlogPost): BlogPostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    tags: post.tags,
    publishedAt: post.publishedAt,
    updatedAt: post.updatedAt,
    readingTimeMinutes: post.readingTimeMinutes,
    author: post.author,
    coverImage: post.coverImage,
    canonicalPath: post.canonicalPath,
    noindex: post.noindex,
  }
}

export const blogRepository = {
  listPosts(): BlogPostSummary[] {
    return sortByPublishedAtDesc(activePosts).map(toSummary)
  },

  listNewestPosts(limit = 5): BlogPostSummary[] {
    return this.listPosts().slice(0, Math.max(limit, 0))
  },

  getPostBySlug(slug: string): BlogPost | null {
    return activePosts.find((post) => post.slug === slug) ?? null
  },

  listIndexablePaths(): string[] {
    return sortByPublishedAtDesc(activePosts)
      .filter((post) => !post.noindex)
      .map((post) => post.canonicalPath)
  },

  listCategories(): BlogCategorySummary[] {
    const posts = this.listPosts()
    const postCountByCategory = posts.reduce<Record<string, number>>((accumulator, post) => {
      accumulator[post.category] = (accumulator[post.category] ?? 0) + 1
      return accumulator
    }, {})

    return listBlogCategoryDefinitions()
      .map((category) => ({
        ...category,
        description: payloadCategoryDescriptionMap[category.slug] || category.description,
        postCount: postCountByCategory[category.name] ?? 0,
      }))
      .filter((category) => category.postCount > 0)
  },

  getCategoryBySlug(slug: string): BlogCategorySummary | null {
    const category = this.listCategories().find((item) => item.slug === slug)
    return category ?? null
  },

  listPostsByCategorySlug(slug: string): BlogPostSummary[] {
    const categoryName = findBlogCategoryBySlug(slug)?.name

    if (!categoryName) {
      return []
    }

    return this.listPosts().filter((post) => post.category === categoryName)
  },

  listCategoryIndexablePaths(): string[] {
    return this.listCategories().map((category) => `/blog/category/${category.slug}`)
  },

  resolveCategorySlugFromName(name: string): string {
    return resolveBlogCategorySlug(name)
  },
}

export function listRelatedPosts(currentSlug: string, limit = 3): BlogPostSummary[] {
  const posts = blogRepository.listPosts()
  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}
