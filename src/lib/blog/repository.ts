import { blogPosts } from '@/lib/blog/mock'
import type { BlogPost, BlogPostSummary } from '@/lib/blog/types'

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
    return sortByPublishedAtDesc(blogPosts).map(toSummary)
  },

  getPostBySlug(slug: string): BlogPost | null {
    return blogPosts.find((post) => post.slug === slug) ?? null
  },

  listIndexablePaths(): string[] {
    return sortByPublishedAtDesc(blogPosts)
      .filter((post) => !post.noindex)
      .map((post) => post.canonicalPath)
  },
}

export function listRelatedPosts(currentSlug: string, limit = 3): BlogPostSummary[] {
  const posts = blogRepository.listPosts()
  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}
