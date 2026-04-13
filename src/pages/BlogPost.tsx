import { useMemo } from 'react'
import { useParams } from 'react-router-dom'

import BlogArticleBody from '@/components/blog/BlogArticleBody'
import BlogPostHeader from '@/components/blog/BlogPostHeader'
import BlogPostSidebar from '@/components/blog/BlogPostSidebar'
import RelatedPostsSection from '@/components/blog/RelatedPostsSection'
import { Badge, Button } from '@/components/ui'
import { listRelatedPosts, blogRepository } from '@/lib/blog/repository'
import { buildBlogPostMetadata, buildNotFoundMetadata } from '@/lib/blog/seo'
import { usePageMetadata } from '@/components/seo/usePageMetadata'

export default function BlogPost() {
  const { slug = '' } = useParams()
  const post = blogRepository.getPostBySlug(slug)
  const relatedPosts = listRelatedPosts(slug)

  const metadata = useMemo(
    () => (post ? buildBlogPostMetadata(post) : buildNotFoundMetadata()),
    [post],
  )

  usePageMetadata(metadata)

  if (!post) {
    return (
      <div className="bg-[#F7F8F8] px-4 pb-16 pt-32 font-sans text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-4xl rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-[0_28px_90px_-60px_rgba(15,23,42,0.55)] dark:border-slate-800 dark:bg-slate-900 md:p-8 lg:p-10">
          <Badge variant="primary" className="mb-4 md:mb-5">
            404 TIN TỨC
          </Badge>
          <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl">
            Bài viết này không tồn tại hoặc đã được di chuyển.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Hãy quay lại thư viện tin tức để xem các bài viết mới nhất về ERP, vận hành và tài chính doanh nghiệp.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/blog" size="lg">
              Về trang Tin tức
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-x-hidden lg:overflow-x-visible bg-[#F7F8F8] font-sans text-gray-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <BlogPostHeader post={post} />

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid w-full max-w-[1216px] gap-8 items-start lg:grid-cols-[minmax(0,1fr)_320px] xl:gap-12">
          <div>
            <BlogArticleBody sections={post.content} />
          </div>

          <BlogPostSidebar tableOfContents={post.content.map((section) => section.heading)} />
        </div>
      </section>

      <RelatedPostsSection relatedPosts={relatedPosts} />
    </div>
  )
}
