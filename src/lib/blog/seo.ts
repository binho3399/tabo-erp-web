import type { BlogPost, BlogPostSummary } from '@/lib/blog/types'
import type { BlogCategorySummary } from '@/lib/blog/repository'
import { buildAbsoluteUrl, resolveMetadata } from '@/lib/seo/metadata'
import type { MetadataInput, ResolvedMetadata } from '@/lib/seo/types'
import { siteMetadata } from '@/config/site'

export function buildBlogIndexMetadata(posts: BlogPostSummary[]): ResolvedMetadata {
  return resolveMetadata({
    title: 'Tin tức ERP, vận hành và chuyển đổi số',
    description:
      'Tin tức Tabo ERP chia sẻ kinh nghiệm vận hành, tồn kho, tài chính và chuyển đổi số để doanh nghiệp ra quyết định nhanh hơn.',
    canonicalPath: '/blog',
    openGraph: {
      type: 'website',
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: `${siteMetadata.name} Tin tức`,
        description:
          'Nội dung chuyên sâu về ERP, vận hành, tài chính và kho vận cho doanh nghiệp đang tăng trưởng.',
        url: buildAbsoluteUrl('/blog'),
        publisher: {
          '@type': 'Organization',
          name: siteMetadata.organizationName,
          url: siteMetadata.siteUrl,
        },
        blogPost: posts.slice(0, 6).map((post) => ({
          '@type': 'BlogPosting',
          headline: post.title,
          url: buildAbsoluteUrl(post.canonicalPath),
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
        })),
      },
    ],
  })
}

export function buildBlogPostMetadata(post: BlogPost): ResolvedMetadata {
  return resolveMetadata({
    title: post.seo.title ?? post.title,
    description: post.seo.description ?? post.excerpt,
    canonicalPath: post.canonicalPath,
    robots: post.noindex ? 'noindex, nofollow' : 'index, follow',
    openGraph: {
      type: 'article',
      image: post.seo.openGraph?.image ?? post.coverImage,
    },
    twitter: {
      image: post.seo.twitter?.image ?? post.coverImage,
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        url: buildAbsoluteUrl(post.canonicalPath),
        image: [buildAbsoluteUrl(post.coverImage)],
        datePublished: post.publishedAt,
        dateModified: post.updatedAt ?? post.publishedAt,
        author: {
          '@type': 'Person',
          name: post.author.name,
        },
        publisher: {
          '@type': 'Organization',
          name: siteMetadata.organizationName,
          url: siteMetadata.siteUrl,
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
      },
    ],
  })
}

export function buildBlogCategoryMetadata(
  category: BlogCategorySummary,
  posts: BlogPostSummary[],
): ResolvedMetadata {
  const canonicalPath = `/blog/category/${category.slug}`

  return resolveMetadata({
    title: `${category.name}: Bài viết mới nhất`,
    description: category.description,
    canonicalPath,
    openGraph: {
      type: 'website',
    },
    jsonLd: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${category.name} | ${siteMetadata.name} Tin tức`,
        description: category.description,
        url: buildAbsoluteUrl(canonicalPath),
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: posts.slice(0, 10).map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: buildAbsoluteUrl(post.canonicalPath),
            name: post.title,
          })),
        },
      },
    ],
  })
}

export function buildNotFoundMetadata(): ResolvedMetadata {
  return resolveMetadata({
    title: 'Không tìm thấy trang',
    description: 'Trang bạn tìm không tồn tại hoặc đã được di chuyển.',
    canonicalPath: '/404',
    robots: 'noindex, nofollow',
  })
}

export function createStaticMetadataMap(
  pages: Record<string, MetadataInput>,
): Record<string, ResolvedMetadata> {
  return Object.fromEntries(
    Object.entries(pages).map(([path, metadata]) => [path, resolveMetadata(metadata)]),
  )
}
