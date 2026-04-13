import { useMemo } from 'react'

import { usePageMetadata } from '@/components/seo/usePageMetadata'
import { Badge, Icon, PrefetchLink } from '@/components/ui'
import { blogRepository } from '@/lib/blog/repository'
import { buildBlogIndexMetadata } from '@/lib/blog/seo'

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export default function BlogIndex() {
  const posts = blogRepository.listPosts()

  const featuredPost = posts[0] ?? null
  const latestSidePosts = posts.slice(1, 5)
  const categorySections = useMemo(
    () =>
      blogRepository
        .listCategories()
        .map((category) => ({
          ...category,
          posts: blogRepository.listPostsByCategorySlug(category.slug).slice(0, 3),
        }))
        .filter((category) => category.posts.length > 0),
    [posts],
  )

  usePageMetadata(buildBlogIndexMetadata(posts))

  return (
    <div className="overflow-x-hidden bg-white font-sans text-gray-900 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <section className="relative isolate overflow-hidden px-4 pb-14 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_30%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_26%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.86),rgba(2,6,23,1))]" />

        <div className="relative mx-auto w-full max-w-[1216px]">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 dark:text-slate-400 md:mb-5">
            <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Trang chủ
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-slate-900 dark:text-slate-200">Tin tức</span>
          </div>

          <h1 className="mb-4 text-center text-[28px] font-normal leading-[1.15] tracking-tight text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
            Kiến thức ERP, vận hành và tài chính.
          </h1>
          <p className="mx-auto max-w-2xl text-center text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
            Cập nhật bài viết mới nhất cho nhà quản trị muốn vận hành doanh nghiệp nhanh hơn và dữ liệu hơn.
          </p>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white dark:to-slate-950" />
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1216px]">
          {featuredPost ? (
            <div className="grid gap-6 lg:grid-cols-2 xl:gap-8">
              <article className="group overflow-hidden rounded-[20px] border border-transparent bg-white dark:bg-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out dark:border-slate-800">
                <PrefetchLink to={featuredPost.canonicalPath} className="relative block aspect-[16/9] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Badge variant="secondary" className="absolute right-4 top-4 z-20 uppercase tracking-[0.12em]">
                    {featuredPost.category}
                  </Badge>
                  <img
                    src={featuredPost.coverImage}
                    alt={featuredPost.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </PrefetchLink>

                <div className="p-4 md:p-6 lg:p-8">
                  <PrefetchLink
                    to={featuredPost.canonicalPath}
                    className="mb-4 block text-[20px] font-normal leading-[1.2] tracking-tight text-slate-900 transition-colors duration-500 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 md:mb-5 lg:text-[28px]"
                  >
                    {featuredPost.title}
                  </PrefetchLink>

                  <p className="mb-4 text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400 md:mb-5">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                    <span className="font-medium text-slate-900 dark:text-slate-100">{featuredPost.author.name}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{dateFormatter.format(new Date(featuredPost.publishedAt))}</span>
                    <span className="text-slate-300 dark:text-slate-700">•</span>
                    <span>{featuredPost.readingTimeMinutes} phút</span>
                  </div>
                </div>
              </article>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                {latestSidePosts.map((post) => (
                  <article
                    key={post.slug}
                    className="group rounded-[20px] border border-transparent bg-white dark:bg-slate-900 p-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500 ease-out dark:border-slate-800"
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
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </PrefetchLink>

                    <PrefetchLink
                      to={post.canonicalPath}
                      className="mb-3 block text-base font-medium leading-snug text-slate-900 transition-colors duration-500 hover:text-blue-600 dark:text-slate-100 dark:hover:text-blue-400"
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

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
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
                      loading="lazy"
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
