import { useEffect, useMemo, useState } from 'react'

import { blogRepository } from '@/lib/blog/repository'
import { buildBlogIndexMetadata } from '@/lib/blog/seo'
import { usePageMetadata } from '@/components/seo/usePageMetadata'

import BlogSidebar from '@/components/blog/BlogSidebar'
import BlogCard from '@/components/blog/BlogCard'
import { Badge, Button, Icon } from '@/components/ui'

const INITIAL_POSTS_COUNT = 6
const LOAD_MORE_STEP = 4
const BLOG_VISIBLE_COUNT_STORAGE_KEY = 'tabo-blog-visible-count'

export default function BlogIndex() {
  const posts = blogRepository.listPosts()
  const topPosts = posts.slice(0, 5)
  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(INITIAL_POSTS_COUNT, posts.length),
  )

  usePageMetadata(buildBlogIndexMetadata(posts))

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const rawVisibleCount = window.sessionStorage.getItem(BLOG_VISIBLE_COUNT_STORAGE_KEY)
    const parsedVisibleCount = rawVisibleCount ? Number.parseInt(rawVisibleCount, 10) : Number.NaN

    if (!Number.isFinite(parsedVisibleCount)) {
      setVisibleCount(Math.min(INITIAL_POSTS_COUNT, posts.length))
      return
    }

    setVisibleCount(Math.min(Math.max(parsedVisibleCount, INITIAL_POSTS_COUNT), posts.length))
  }, [posts.length])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.sessionStorage.setItem(BLOG_VISIBLE_COUNT_STORAGE_KEY, String(visibleCount))
  }, [visibleCount])

  const visiblePosts = useMemo(
    () => posts.slice(0, Math.min(visibleCount, posts.length)),
    [posts, visibleCount],
  )

  const hasMorePosts = visibleCount < posts.length

  const handleLoadMore = () => {
    setVisibleCount((currentCount) => Math.min(currentCount + LOAD_MORE_STEP, posts.length))
  }

  return (
    <div className="overflow-x-hidden bg-[#F7F8F8] font-sans text-gray-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden px-4 pb-16 pt-32 sm:px-6 sm:pb-20 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.8),rgba(247,248,248,0.92))] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.86),rgba(2,6,23,1))]" />
        
        <div className="relative mx-auto w-full max-w-[1216px]">
          <div className="mb-10 text-center lg:mb-16">
            <Badge variant="primary" className="mb-4 md:mb-5">
              BLOG TABO ERP
            </Badge>
            <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
              Kiến thức ERP, vận hành và tài chính.
            </h1>
            <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
              Tổng hợp bài viết chuyên sâu giúp đội ngũ điều hành doanh nghiệp có quyết định nhất quán hơn mỗi ngày.
            </p>
          </div>

          <div className="flex flex-col items-start gap-10 lg:flex-row lg:gap-12 xl:gap-16">
            <BlogSidebar topPosts={topPosts} />
            
            <div className="w-full flex-1">
              {visiblePosts.length ? (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 xl:gap-8">
                    {visiblePosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>

                  {hasMorePosts ? (
                    <div className="mt-8 flex justify-center lg:mt-10">
                      <Button type="button" size="lg" onClick={handleLoadMore} className="gap-2">
                        <span>Xem thêm bài viết</span>
                        <Icon name="expand_more" className="text-[20px]" />
                      </Button>
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="rounded-[24px] border border-slate-100 bg-white/90 p-6 text-center shadow-[0_16px_50px_-40px_rgba(15,23,42,0.4)] dark:border-slate-800 dark:bg-slate-900/85 md:p-8">
                  <p className="mb-3 text-lg font-medium text-slate-900 dark:text-white">
                    Chưa có bài viết nào để hiển thị.
                  </p>
                  <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
                    Nội dung mới sẽ sớm được cập nhật tại đây để hỗ trợ doanh nghiệp vận hành và ra quyết định tốt hơn.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
