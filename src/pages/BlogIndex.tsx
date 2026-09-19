import { useMemo } from 'react'

import { usePageMetadata } from '@/components/seo/usePageMetadata'
import { Badge, Icon, PrefetchLink } from '@/components/ui'
import { useViewportActivity } from '@/hooks/useViewportActivity'
import { blogRepository } from '@/lib/blog/repository'
import { buildBlogIndexMetadata } from '@/lib/blog/seo'

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export default function BlogIndex() {
  const { ref: heroRef, isActive: isHeroActive } = useViewportActivity<HTMLElement>()
  const posts = useMemo(() => blogRepository.listPosts(), [])
  const categories = useMemo(() => blogRepository.listCategories(), [])

  const featuredPost = posts[0] ?? null
  const latestSidePosts = posts.slice(1, 5)
  const categorySections = useMemo(
    () =>
      categories
        .map((category) => ({
          ...category,
          posts: blogRepository.listPostsByCategorySlug(category.slug).slice(0, 3),
        }))
        .filter((category) => category.posts.length > 0),
    [categories],
  )

  const pageMetadata = useMemo(() => buildBlogIndexMetadata(posts), [posts])
  usePageMetadata(pageMetadata)

  return (
    <div className="overflow-x-hidden bg-white font-sans text-gray-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <section
        ref={heroRef}
        data-motion-active={isHeroActive}
        className="relative isolate overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.2),transparent_32%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.2),transparent_26%),linear-gradient(180deg,rgba(2,6,23,0.88),rgba(2,6,23,1))]" />
        <div className="pointer-events-none absolute inset-0 ambient-grid opacity-[0.03] dark:opacity-[0.06]" />
        <div className="pointer-events-none absolute inset-0">
          <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 420">
            <defs>
              <linearGradient id="blogHeroFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0" />
                <stop offset="50%" stopColor="#2563eb" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M -80 90 C 220 120, 340 60, 540 98 C 760 138, 920 80, 1280 110"
              fill="none"
              stroke="url(#blogHeroFlow)"
              strokeWidth="1.25"
              className="opacity-45 dark:opacity-35"
            />
            <path
              d="M -120 250 C 170 210, 340 300, 560 250 C 790 200, 980 282, 1320 230"
              fill="none"
              stroke="url(#blogHeroFlow)"
              strokeWidth="1.15"
              pathLength="1000"
              strokeDasharray="80 920"
              className="motion-gated animate-grid-dash opacity-65 dark:opacity-40"
              style={{ animationDuration: '16s' }}
            />
            <path
              d="M -100 170 C 200 132, 390 206, 590 164 C 790 122, 960 210, 1290 180"
              fill="none"
              stroke="url(#blogHeroFlow)"
              strokeWidth="1.1"
              pathLength="1000"
              strokeDasharray="60 940"
              className="motion-gated animate-grid-dash opacity-55 dark:opacity-35"
              style={{ animationDuration: '20s', animationDelay: '1.2s' }}
            />
            {[
              { x: 170, y: 214 },
              { x: 420, y: 146 },
              { x: 710, y: 196 },
              { x: 980, y: 126 },
            ].map((point) => (
              <g key={`${point.x}-${point.y}`} className="opacity-70 dark:opacity-50">
                <circle cx={point.x} cy={point.y} r="2.8" className="fill-blue-500 dark:fill-blue-400" />
                <circle cx={point.x} cy={point.y} r="10" className="fill-blue-400/20 dark:fill-blue-500/20 motion-gated animate-soft-pulse" />
              </g>
            ))}
          </svg>
        </div>

        <div className="relative mx-auto w-full max-w-[1216px]">
          <div className="mb-4 flex flex-wrap items-center justify-start gap-3 text-sm text-slate-500 dark:text-slate-400 md:mb-5">
            <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Trang chủ
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-slate-900 dark:text-slate-200">Tin tức</span>
          </div>

          <h1 className="mb-4 text-left text-[28px] font-normal leading-[1.15] tracking-tight text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
            Kiến thức ERP, vận hành và tài chính.
          </h1>
          <p className="max-w-2xl text-left text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
            Cập nhật bài viết mới nhất cho nhà quản trị muốn vận hành doanh nghiệp nhanh hơn và dữ liệu hơn.
          </p>
          <div className="mt-6 hidden items-center gap-2 lg:flex">
            {categories.slice(0, 4).map((category) => (
              <span
                key={category.slug}
                className="inline-flex items-center gap-1 rounded-full border border-blue-100/80 bg-white/70 px-3 py-1 text-xs tracking-[0.1em] text-slate-500 backdrop-blur-sm dark:border-blue-900/40 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <Icon name="menu_book" className="text-[13px] text-blue-600 dark:text-blue-400" />
                {category.name.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
      </section>

      <section className="px-4 pt-0 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1216px]">
          {featuredPost ? (
            <div className="grid gap-4 lg:grid-cols-2 lg:gap-6">
              <article className="group rounded-[20px] border border-transparent bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out dark:border-slate-800">
                <PrefetchLink to={featuredPost.canonicalPath} className="relative mb-4 block aspect-[16/9] overflow-hidden rounded-[16px] bg-slate-100 dark:bg-slate-800">
                  <Badge variant="secondary" className="absolute right-3 top-3 z-20 uppercase tracking-[0.1em]">
                    {featuredPost.category}
                  </Badge>
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    width={1280}
                    height={720}
                    loading="eager"
                    fetchPriority="high"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </PrefetchLink>

                <div>
                  <PrefetchLink
                    to={featuredPost.canonicalPath}
                    className="mb-4 line-clamp-2 text-[20px] font-normal leading-[1.2] tracking-tight text-slate-900 transition-colors duration-500 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 md:mb-5 lg:text-[28px]"
                  >
                    {featuredPost.title}
                  </PrefetchLink>

                  <p className="mb-4 text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400 md:mb-5">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span>{dateFormatter.format(new Date(featuredPost.publishedAt))}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{featuredPost.readingTimeMinutes} phút</span>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6">
                {latestSidePosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-[20px] border border-transparent bg-white dark:bg-slate-900 p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out dark:border-slate-800"
                  >
                    <PrefetchLink
                      to={post.canonicalPath}
                      className="relative mb-3 block aspect-[16/10] overflow-hidden rounded-[16px] bg-slate-100 dark:bg-slate-800"
                    >
                      <Badge variant="secondary" className="absolute right-3 top-3 z-20 uppercase tracking-[0.1em]">
                        {post.category}
                      </Badge>
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        width={960}
                        height={600}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </PrefetchLink>

                    <PrefetchLink
                      to={post.canonicalPath}
                      className="mb-3 overflow-hidden text-ellipsis line-clamp-2 text-base font-medium leading-snug text-slate-900 transition-colors duration-500 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
                    >
                      {post.title}
                    </PrefetchLink>

                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {dateFormatter.format(new Date(post.publishedAt))} • {post.readingTimeMinutes} phút
                    </p>
                  </article>
                ))}
              </div>
            </div>
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
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1216px]">
          <div className="mb-6 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="text-[28px] font-normal leading-[1.15] tracking-tight text-slate-900 dark:text-white md:text-[42px]">
              Theo danh mục
            </h2>
          </div>

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {categorySections.map((section) => {
              const [mainPost, ...sidePosts] = section.posts

              if (!mainPost) {
                return null
              }

              return (
                <article
                  key={section.slug}
                  className="group rounded-[20px] border border-transparent bg-white dark:bg-slate-900 p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out dark:border-slate-800 md:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-4 md:mb-5">
                    <h3 className="text-[28px] font-normal leading-[1.15] tracking-tight text-slate-900 dark:text-white">
                      {section.name}
                    </h3>
                    <PrefetchLink
                      to={`/blog/category/${section.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-base font-medium text-blue-600 transition-all duration-500 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-500 dark:border-blue-900/50 dark:bg-slate-900 dark:text-blue-400 dark:hover:border-blue-700 dark:hover:bg-slate-800 dark:hover:text-blue-300"
                    >
                      Xem tất cả
                      <Icon name="arrow_outward" className="text-[18px]" />
                    </PrefetchLink>
                  </div>

                  <PrefetchLink
                    to={mainPost.canonicalPath}
                    className="mb-4 block overflow-hidden rounded-[16px] bg-slate-100 dark:bg-slate-800 md:mb-5"
                  >
                    <img
                      src={mainPost.coverImage}
                      alt={mainPost.title}
                      width={960}
                      height={600}
                      loading="lazy"
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="aspect-[16/10] h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </PrefetchLink>

                  <PrefetchLink
                    to={mainPost.canonicalPath}
                    className="mb-4 block text-base font-semibold leading-snug text-slate-900 transition-colors duration-500 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400 md:mb-5"
                  >
                    {mainPost.title}
                  </PrefetchLink>

                  <div className="space-y-3 border-t border-slate-100 pt-3 dark:border-slate-800 md:space-y-4 md:pt-4">
                    {sidePosts.map((post) => (
                      <PrefetchLink key={post.slug} to={post.canonicalPath} className="group/item flex items-center gap-3">
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          width={320}
                          height={224}
                          loading="lazy"
                          className="h-14 w-20 shrink-0 rounded-xl object-cover"
                        />
                        <div className="min-w-0">
                          <p className="line-clamp-2 text-sm font-medium leading-snug text-slate-700 transition-colors duration-500 group-hover/item:text-blue-600 dark:text-slate-300 dark:group-hover/item:text-blue-400">
                            {post.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">
                            {dateFormatter.format(new Date(post.publishedAt))}
                          </p>
                        </div>
                      </PrefetchLink>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
