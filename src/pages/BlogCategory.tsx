import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import BlogCard from '@/components/blog/BlogCard'
import { usePageMetadata } from '@/components/seo/usePageMetadata'
import { Badge, Button, Icon, PrefetchLink } from '@/components/ui'
import { blogRepository } from '@/lib/blog/repository'
import { buildBlogCategoryMetadata, buildNotFoundMetadata } from '@/lib/blog/seo'

const INITIAL_POSTS_COUNT = 6
const LOAD_MORE_STEP = 4
const BLOG_CATEGORY_VISIBLE_COUNT_STORAGE_KEY = 'tabo-blog-category-visible-count'

export default function BlogCategory() {
  const { categorySlug = '' } = useParams()
  const category = blogRepository.getCategoryBySlug(categorySlug)
  const categoryPosts = useMemo(
    () => (category ? blogRepository.listPostsByCategorySlug(category.slug) : []),
    [category],
  )

  const [visibleCount, setVisibleCount] = useState(() =>
    Math.min(INITIAL_POSTS_COUNT, categoryPosts.length),
  )

  const metadata = useMemo(
    () => (category ? buildBlogCategoryMetadata(category, categoryPosts) : buildNotFoundMetadata()),
    [category, categoryPosts],
  )

  usePageMetadata(metadata)

  useEffect(() => {
    if (typeof window === 'undefined' || !category) {
      return
    }

    const storageKey = `${BLOG_CATEGORY_VISIBLE_COUNT_STORAGE_KEY}:${category.slug}`
    const rawVisibleCount = window.sessionStorage.getItem(storageKey)
    const parsedVisibleCount = rawVisibleCount ? Number.parseInt(rawVisibleCount, 10) : Number.NaN

    if (!Number.isFinite(parsedVisibleCount)) {
      setVisibleCount(Math.min(INITIAL_POSTS_COUNT, categoryPosts.length))
      return
    }

    setVisibleCount(Math.min(Math.max(parsedVisibleCount, INITIAL_POSTS_COUNT), categoryPosts.length))
  }, [category, categoryPosts.length])

  useEffect(() => {
    if (typeof window === 'undefined' || !category) {
      return
    }

    const storageKey = `${BLOG_CATEGORY_VISIBLE_COUNT_STORAGE_KEY}:${category.slug}`
    window.sessionStorage.setItem(storageKey, String(visibleCount))
  }, [category, visibleCount])

  const visiblePosts = useMemo(
    () => categoryPosts.slice(0, Math.min(visibleCount, categoryPosts.length)),
    [categoryPosts, visibleCount],
  )

  const hasMorePosts = visibleCount < categoryPosts.length

  const handleLoadMore = () => {
    setVisibleCount((currentCount) => Math.min(currentCount + LOAD_MORE_STEP, categoryPosts.length))
  }

  if (!category) {
    return (
      <div className="bg-white px-4 pb-16 pt-32 font-sans text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-4xl rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-[0_28px_90px_-60px_rgba(15,23,42,0.55)] dark:border-slate-800 dark:bg-slate-900 md:p-8 lg:p-10">
          <Badge variant="primary" className="mb-4 md:mb-5">
            404 CATEGORY
          </Badge>
          <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl">
            Danh mục bạn tìm không tồn tại.
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Hãy quay lại trang tin tức để khám phá các chủ đề ERP mới nhất.
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
    <div className="overflow-x-hidden bg-white font-sans text-gray-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
        <div className="relative mx-auto w-full max-w-[1216px]">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400 md:mb-5">
            <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Trang chủ
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <PrefetchLink to="/blog" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Tin tức
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-slate-900 dark:text-slate-200">{category.name}</span>
          </div>

          <h1 className="mb-4 text-[28px] font-normal leading-[1.15] tracking-tight text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
            {category.name}
          </h1>
          <p className="max-w-3xl text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
            {category.description}
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto w-full max-w-[1216px]">
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
                Chưa có bài viết nào trong danh mục này.
              </p>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
                Bạn có thể khám phá thêm các chủ đề khác tại trang tin tức tổng hợp.
              </p>
              <div className="mt-8 flex justify-center">
                <Button to="/blog" variant="outline" size="lg">
                  Quay lại Tin tức
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
