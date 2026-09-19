import type { BlogPost } from '@/lib/blog/types'
import { blogRepository } from '@/lib/blog/repository'
import { Badge, Icon, PrefetchLink } from '@/components/ui'

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
})

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const categoryLabel = post.category?.trim() || 'Chuyên mục'
  const articleLabel = post.title?.trim() || 'Bài viết'
  const categorySlug = blogRepository.resolveCategorySlugFromName(categoryLabel)

  return (
    <section className="relative isolate overflow-hidden px-4 pt-32 sm:px-6 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,248,248,0.96))] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.86),rgba(2,6,23,1))]" />
        <div className="relative mx-auto w-full max-w-[1216px]">
          <nav aria-label="Điều hướng bài viết" className="mb-6">
            <ol className="flex items-center gap-3 overflow-x-auto pb-1 text-sm whitespace-nowrap text-slate-500 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden dark:text-slate-400">
              <li>
                <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
                  Trang chủ
                </PrefetchLink>
              </li>
              <li aria-hidden="true">
                <Icon name="chevron_right" className="text-[14px]" />
              </li>
              <li>
                <PrefetchLink to="/blog" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
                  Tin tức
                </PrefetchLink>
              </li>
              <li aria-hidden="true">
                <Icon name="chevron_right" className="text-[14px]" />
              </li>
              <li>
                <PrefetchLink
                  to={`/blog/category/${categorySlug}`}
                  className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {categoryLabel}
                </PrefetchLink>
              </li>
              <li aria-hidden="true">
                <Icon name="chevron_right" className="text-[14px]" />
              </li>
              <li className="min-w-0" aria-current="page" title={articleLabel}>
                <span className="block max-w-[min(65vw,720px)] truncate text-slate-900 dark:text-slate-200">{articleLabel}</span>
              </li>
            </ol>
          </nav>

          <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
            {post.title}
          </h1>
          <p className="max-w-[848px] text-base leading-relaxed text-slate-500 dark:text-slate-400">{post.excerpt}</p>

          <div className="mt-8 mb-12 grid gap-6 md:grid-cols-4 md:gap-6 lg:w-[848px] lg:max-w-full">
            <div>
              <p className="mb-1 text-sm text-slate-400 dark:text-slate-500">Chuyên mục</p>
              <Badge variant="secondary">{post.category}</Badge>
            </div>
            <div>
              <p className="mb-1 text-sm text-slate-400 dark:text-slate-500">Tác giả</p>
              <p className="text-base font-medium text-slate-900 dark:text-slate-100">{post.author.name}</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-slate-400 dark:text-slate-500">Cập nhật</p>
              <p className="text-base font-medium text-slate-900 dark:text-slate-100">
                {dateFormatter.format(new Date(post.updatedAt ?? post.publishedAt))}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm text-slate-400 dark:text-slate-500">Thời lượng đọc</p>
              <p className="text-base font-medium text-slate-900 dark:text-slate-100">{post.readingTimeMinutes} phút</p>
            </div>
          </div>
        </div>
      </section>
  )
}
