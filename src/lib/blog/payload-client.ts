import type { BlogPost, BlogContentSection } from '@/lib/blog/types'

interface PayloadListResponse<TDocument> {
  docs: TDocument[]
  page?: number
  totalPages?: number
  hasNextPage?: boolean
}

interface PayloadAuthorDocument {
  name: string
  role: string
}

interface PayloadMediaDocument {
  url?: string
}

interface PayloadCategoryDocument {
  name: string
  slug: string
  description?: string
}

interface PayloadPostSectionDocument {
  heading: string
  paragraphs: { paragraph: string }[]
  bullets?: { bullet: string }[]
  quote?: string
}

interface PayloadPostDocument {
  slug: string
  title: string
  excerpt: string
  tags?: Array<{ value: string }> | string[]
  publishedAt: string
  updatedAt?: string
  readingTimeMinutes?: number
  coverImage?: string | PayloadMediaDocument
  canonicalPath?: string
  noindex?: boolean
  author: PayloadAuthorDocument
  category: string | PayloadCategoryDocument
  seo?: {
    title?: string
    description?: string
    openGraphImage?: string
    twitterImage?: string
  }
  content?: PayloadPostSectionDocument[]
}

export interface PayloadBlogData {
  posts: BlogPost[]
  categories: PayloadCategoryDocument[]
}

function normalizeMediaUrl(coverImage: string | PayloadMediaDocument | undefined): string {
  if (!coverImage) {
    return '/noise.svg'
  }

  if (typeof coverImage === 'string') {
    return coverImage
  }

  return coverImage.url ?? '/noise.svg'
}

function mapContentSections(content: PayloadPostSectionDocument[] | undefined): BlogContentSection[] {
  if (!content?.length) {
    return []
  }

  return content.map((section) => ({
    heading: section.heading,
    paragraphs: section.paragraphs.map((item) => item.paragraph),
    bullets: section.bullets?.map((item) => item.bullet).filter(Boolean),
    quote: section.quote,
  }))
}

function mapPost(document: PayloadPostDocument): BlogPost {
  const categoryName = typeof document.category === 'string' ? document.category : document.category.name
  const canonicalPath = document.canonicalPath || `/blog/${document.slug}`
  const coverImage = normalizeMediaUrl(document.coverImage)

  const tags = (document.tags ?? []).map((tag) => (typeof tag === 'string' ? tag : tag.value))

  return {
    slug: document.slug,
    title: document.title,
    excerpt: document.excerpt,
    category: categoryName,
    tags,
    publishedAt: document.publishedAt,
    updatedAt: document.updatedAt,
    readingTimeMinutes: document.readingTimeMinutes ?? 1,
    author: {
      name: document.author.name,
      role: document.author.role,
    },
    coverImage,
    canonicalPath,
    noindex: document.noindex,
    seo: {
      title: document.seo?.title ?? document.title,
      description: document.seo?.description ?? document.excerpt,
      openGraph: {
        image: document.seo?.openGraphImage ?? coverImage,
      },
      twitter: {
        image: document.seo?.twitterImage ?? coverImage,
      },
    },
    content: mapContentSections(document.content),
  }
}

function buildHeaders(apiKey?: string): HeadersInit {
  if (!apiKey) {
    return {}
  }

  return {
    Authorization: `users API-Key ${apiKey}`,
  }
}

async function fetchPayloadCollection<TDocument>(
  baseUrl: string,
  collection: string,
  apiKey?: string,
): Promise<TDocument[]> {
  const documents: TDocument[] = []
  let page = 1

  while (true) {
    const endpoint = new URL(`/api/${collection}`, baseUrl)
    endpoint.searchParams.set('limit', '200')
    endpoint.searchParams.set('depth', '1')
    endpoint.searchParams.set('page', String(page))

    const response = await fetch(endpoint, {
      headers: buildHeaders(apiKey),
    })

    if (!response.ok) {
      throw new Error(`Payload request failed for ${collection}: ${response.status} ${response.statusText}`)
    }

    const payload = (await response.json()) as PayloadListResponse<TDocument>
    documents.push(...payload.docs)

    const hasNextPage = payload.hasNextPage ?? (payload.totalPages !== undefined ? page < payload.totalPages : false)
    if (!hasNextPage) {
      break
    }

    page += 1
  }

  return documents
}

export async function fetchPayloadBlogData(baseUrl: string, apiKey?: string): Promise<PayloadBlogData> {
  const [postDocuments, categoryDocuments] = await Promise.all([
    fetchPayloadCollection<PayloadPostDocument>(baseUrl, 'posts', apiKey),
    fetchPayloadCollection<PayloadCategoryDocument>(baseUrl, 'categories', apiKey),
  ])

  return {
    posts: postDocuments.map(mapPost),
    categories: categoryDocuments,
  }
}
