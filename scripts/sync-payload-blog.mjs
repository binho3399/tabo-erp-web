import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const blogSource = process.env.BLOG_SOURCE ?? 'mock'
const outputPath = path.resolve('src/lib/blog/payload-cache.generated.ts')

function normalizeMediaUrl(coverImage) {
  if (!coverImage) {
    return '/noise.svg'
  }

  if (typeof coverImage === 'string') {
    return coverImage
  }

  return coverImage.url ?? '/noise.svg'
}

function mapContentSections(content) {
  if (!Array.isArray(content) || content.length === 0) {
    return []
  }

  return content.map((section) => ({
    heading: section.heading,
    paragraphs: (section.paragraphs ?? []).map((item) => item.paragraph),
    bullets: section.bullets?.map((item) => item.bullet).filter(Boolean),
    quote: section.quote,
  }))
}

function mapPost(document) {
  const categoryName = typeof document.category === 'string' ? document.category : document.category?.name ?? ''
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
      name: document.author?.name ?? '',
      role: document.author?.role ?? '',
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

function buildHeaders(apiKey) {
  if (!apiKey) {
    return {}
  }

  return {
    Authorization: `users API-Key ${apiKey}`,
  }
}

async function fetchPayloadCollection(baseUrl, collection, options = {}, apiKey) {
  const documents = []
  let page = 1
  const limit = options.limit ?? 100
  const depth = options.depth ?? 1

  while (true) {
    const endpoint = new URL(`/api/${collection}`, baseUrl)
    endpoint.searchParams.set('limit', String(limit))
    endpoint.searchParams.set('depth', String(depth))
    if (options.sort) {
      endpoint.searchParams.set('sort', options.sort)
    }
    endpoint.searchParams.set('page', String(page))

    const response = await fetch(endpoint, {
      headers: buildHeaders(apiKey),
    })

    if (!response.ok) {
      throw new Error(`Payload request failed for ${collection}: ${response.status} ${response.statusText}`)
    }

    const payload = await response.json()
    documents.push(...(payload.docs ?? []))

    const hasNextPage = payload.hasNextPage ?? (payload.totalPages !== undefined ? page < payload.totalPages : false)
    if (!hasNextPage) {
      break
    }

    page += 1
  }

  return documents
}

async function fetchPayloadBlogData(baseUrl, apiKey) {
  const [postDocuments, categoryDocuments] = await Promise.all([
    fetchPayloadCollection(baseUrl, 'posts', { limit: 100, depth: 1, sort: '-publishedAt' }, apiKey),
    fetchPayloadCollection(baseUrl, 'categories', { limit: 100, depth: 0 }, apiKey),
  ])

  return {
    posts: postDocuments.map(mapPost),
    categories: categoryDocuments,
  }
}

function renderCacheModule(snapshot) {
  return `import type { PayloadBlogSnapshot } from '@/lib/blog/payload-cache'

export const payloadBlogSnapshot: PayloadBlogSnapshot = ${JSON.stringify(snapshot, null, 2)}\n`
}

async function resetSnapshot() {
  const emptySnapshot = {
    generatedAt: '',
    sourceUrl: '',
    posts: [],
    categories: [],
  }

  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderCacheModule(emptySnapshot))
}

if (blogSource !== 'payload') {
  await resetSnapshot()
  console.log('BLOG_SOURCE is not payload, skipped Payload sync.')
  process.exit(0)
}

const baseUrl = process.env.PAYLOAD_PUBLIC_URL
const apiKey = process.env.PAYLOAD_API_KEY

if (!baseUrl) {
  throw new Error('PAYLOAD_PUBLIC_URL is required when BLOG_SOURCE=payload')
}

const payloadBlogData = await fetchPayloadBlogData(baseUrl, apiKey)

const snapshot = {
  generatedAt: new Date().toISOString(),
  sourceUrl: baseUrl,
  posts: payloadBlogData.posts,
  categories: payloadBlogData.categories.map((category) => ({
    name: category?.name ?? '',
    slug: category?.slug ?? '',
    description: category?.description ?? undefined,
  })),
}

await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, renderCacheModule(snapshot))

console.log(`Synced ${snapshot.posts.length} posts and ${snapshot.categories.length} categories from Payload.`)
