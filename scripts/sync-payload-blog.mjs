import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fetchPayloadBlogData } from '../src/lib/blog/payload-client.ts'

const blogSource = process.env.BLOG_SOURCE ?? 'mock'
const outputPath = path.resolve('src/lib/blog/payload-cache.generated.ts')

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
