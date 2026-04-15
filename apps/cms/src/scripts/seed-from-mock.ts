import 'dotenv/config'

import { getPayload } from 'payload'

import { blogPosts } from '../../../../src/lib/blog/mock'
import { listBlogCategoryDefinitions } from '../../../../src/lib/blog/categories'
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
  }[],
) {
  return sections.map((section) => ({
    heading: section.heading,
    paragraphs: section.paragraphs.map((paragraph) => ({ paragraph })),
    bullets: section.bullets?.map((bullet) => ({ bullet })),
    quote: section.quote,
  }))
}

async function run() {
  const payload = await getPayload({ config })

  const categoryDefinitions = listBlogCategoryDefinitions()
  const categoryIdByName = new Map<string, number | string>()
  const authorIdByName = new Map<string, number | string>()

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
      continue
    }

    await payload.create({
      collection: 'posts',
      data: postData,
    })
  }

  console.log(`Seeded ${blogPosts.length} posts from mock data.`)
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
