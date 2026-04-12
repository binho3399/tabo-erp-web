import type { BlogPost } from '@/lib/blog/types'
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
  return (
    <section className="relative isolate overflow-hidden px-4 pt-32 sm:px-6 lg:px-8 lg:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(247,248,248,0.96))] dark:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(14,165,233,0.16),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.86),rgba(2,6,23,1))]" />
        <div className="relative mx-auto w-full max-w-[1216px]">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <PrefetchLink to="/" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Trang chủ
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <PrefetchLink to="/blog" className="transition-colors duration-500 hover:text-blue-600 dark:hover:text-blue-400">
              Blog
            </PrefetchLink>
            <Icon name="chevron_right" className="text-[14px]" />
            <span className="text-slate-900 dark:text-slate-200">{post.category}</span>
          </div>

          <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl lg:text-[56px]">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base leading-relaxed text-slate-500 dark:text-slate-400">{post.excerpt}</p>

          <div className="mt-8 mb-12 grid gap-6 md:inline-grid md:grid-cols-4 md:gap-12">
            <div>
              <p className="mb-1 text-sm text-slate-400 dark:text-slate-500">Chuyên mục</p>
              <Badge variant="primary">{post.category}</Badge>
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
