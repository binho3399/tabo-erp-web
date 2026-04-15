import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

const blogSource = process.env.BLOG_SOURCE ?? 'mock'
const outputPath = path.resolve('src/lib/blog/payload-cache.generated.ts')

function asArray(value) {
  return Array.isArray(value) ? value : []
}

function mapSection(section) {
  return {
    heading: section?.heading ?? '',
    paragraphs: asArray(section?.paragraphs).map((item) => item?.paragraph ?? '').filter(Boolean),
    bullets: asArray(section?.bullets).map((item) => item?.bullet ?? '').filter(Boolean),
    quote: section?.quote ?? undefined,
  }
}

function mapPost(document) {
  const category = typeof document?.category === 'string' ? document.category : document?.category?.name
  const coverImage =
    typeof document?.coverImage === 'string'
      ? document.coverImage
      : (document?.coverImage?.url ?? '/noise.svg')

  const tags = asArray(document?.tags)
    .map((tag) => (typeof tag === 'string' ? tag : tag?.value))
    .filter(Boolean)

  return {
    slug: document?.slug ?? '',
    title: document?.title ?? '',
    excerpt: document?.excerpt ?? '',
    category: category ?? '',
    tags,
    publishedAt: document?.publishedAt ?? new Date().toISOString().slice(0, 10),
    updatedAt: document?.updatedAt ?? undefined,
    readingTimeMinutes: Number.isFinite(document?.readingTimeMinutes) ? document.readingTimeMinutes : 1,
    author: {
      name: document?.author?.name ?? 'Ban biên tập Tabo ERP',
      role: document?.author?.role ?? 'Nghiên cứu vận hành doanh nghiệp',
    },
    coverImage,
    canonicalPath: document?.canonicalPath ?? `/blog/${document?.slug ?? ''}`,
    noindex: Boolean(document?.noindex),
    seo: {
      title: document?.seo?.title ?? undefined,
      description: document?.seo?.description ?? undefined,
      openGraph: {
        image: document?.seo?.openGraphImage ?? coverImage,
      },
      twitter: {
        image: document?.seo?.twitterImage ?? coverImage,
      },
    },
    content: asArray(document?.content).map(mapSection),
  }
}

async function fetchCollection(baseUrl, collection, apiKey) {
  const endpoint = new URL(`/api/${collection}`, baseUrl)
  endpoint.searchParams.set('limit', '200')
  endpoint.searchParams.set('depth', '1')

  const headers = apiKey ? { Authorization: `users API-Key ${apiKey}` } : {}
  const response = await fetch(endpoint, { headers })

  if (!response.ok) {
    throw new Error(`Payload request failed for ${collection}: ${response.status} ${response.statusText}`)
  }

  const json = await response.json()
  return asArray(json?.docs)
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

const [postDocs, categoryDocs] = await Promise.all([
  fetchCollection(baseUrl, 'posts', apiKey),
  fetchCollection(baseUrl, 'categories', apiKey),
])

const snapshot = {
  generatedAt: new Date().toISOString(),
  sourceUrl: baseUrl,
  posts: postDocs.map(mapPost),
  categories: categoryDocs.map((category) => ({
    name: category?.name ?? '',
    slug: category?.slug ?? '',
    description: category?.description ?? undefined,
  })),
}

await mkdir(path.dirname(outputPath), { recursive: true })
await writeFile(outputPath, renderCacheModule(snapshot))

console.log(`Synced ${snapshot.posts.length} posts and ${snapshot.categories.length} categories from Payload.`)
