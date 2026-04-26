import 'dotenv/config'

import { getPayload } from 'payload'

import { blogPosts } from '../../../../src/lib/blog/mock'
import config from '../payload.config'

if (!process.env.PAYLOAD_SECRET) {
  process.env.PAYLOAD_SECRET = 'tabo-cms-local-secret'
}

function toTagRows(tags: string[]) {
  return tags.map((tag) => ({ value: tag }))
}

function toSectionRows(
  sections: {
    heading: string
    paragraphs: string[]
    bullets?: string[]
    quote?: string
    codeInsights?: string[]
  }[],
) {
  return sections.map((section) => ({
    heading: section.heading,
    paragraphs: section.paragraphs.map((paragraph) => ({ paragraph })),
    bullets: section.bullets?.map((bullet) => ({ bullet })),
    quote: section.quote,
    codeInsights: section.codeInsights?.map((insight) => ({ insight })),
  }))
}

function toSlug(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

async function run() {
  const payload = await getPayload({ config })

  const categoryDefinitions = Array.from(
    new Map(
      blogPosts.map((post) => [
        post.category,
        {
          name: post.category,
          slug: toSlug(post.category),
          description: `Nội dung chuyên sâu về ${post.category.toLowerCase()} trong hệ sinh thái Tabo ERP.`,
        },
      ]),
    ).values(),
  )
  const categoryIdByName = new Map<string, number | string>()
  const authorIdByName = new Map<string, number | string>()
  let createdPosts = 0
  let updatedPosts = 0
  let skippedPosts = 0

  for (const category of categoryDefinitions) {
    const existing = await payload.find({
      collection: 'categories',
      where: {
        slug: {
          equals: category.slug,
        },
      },
      limit: 1,
    })

    const categoryRecord =
      existing.docs[0] ??
      (await payload.create({
        collection: 'categories',
        data: {
          name: category.name,
          slug: category.slug,
          description: category.description,
        },
      }))

    categoryIdByName.set(category.name, categoryRecord.id)
  }

  for (const post of blogPosts) {
    const authorKey = `${post.author.name}::${post.author.role}`
    let authorId = authorIdByName.get(authorKey)

    if (!authorId) {
      const existingAuthor = await payload.find({
        collection: 'authors',
        where: {
          name: {
            equals: post.author.name,
          },
        },
        limit: 1,
      })

      const authorRecord =
        existingAuthor.docs[0] ??
        (await payload.create({
          collection: 'authors',
          data: {
            name: post.author.name,
            role: post.author.role,
          },
        }))

      authorId = authorRecord.id
      authorIdByName.set(authorKey, authorId)
    }

    const categoryId = categoryIdByName.get(post.category)
    if (!categoryId || !authorId) {
      skippedPosts += 1
      console.warn(`Skipped post "${post.slug}" because author/category could not be resolved.`)
      continue
    }

    const existingPost = await payload.find({
      collection: 'posts',
      where: {
        slug: {
          equals: post.slug,
        },
      },
      limit: 1,
    })

    const postData = {
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      category: categoryId,
      tags: toTagRows(post.tags),
      publishedAt: post.publishedAt,
      updatedAt: post.updatedAt,
      readingTimeMinutes: post.readingTimeMinutes,
      author: authorId,
      canonicalPath: post.canonicalPath,
      noindex: Boolean(post.noindex),
      seo: {
        title: post.seo.title,
        description: post.seo.description,
        openGraphImage: post.seo.openGraph?.image ?? post.coverImage,
        twitterImage: post.seo.twitter?.image ?? post.coverImage,
      },
      content: toSectionRows(post.content),
    }

    if (existingPost.docs[0]) {
      await payload.update({
        collection: 'posts',
        id: existingPost.docs[0].id,
        data: postData,
      })
      updatedPosts += 1
      continue
    }

    await payload.create({
      collection: 'posts',
      data: postData,
    })
    createdPosts += 1
  }

  console.log(
    `Seed complete. total=${blogPosts.length}, created=${createdPosts}, updated=${updatedPosts}, skipped=${skippedPosts}.`,
  )
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
