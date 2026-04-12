import { Badge, Icon, PrefetchLink } from '@/components/ui'
import type { BlogPostSummary } from '@/lib/blog/types'

const dateFormatter = new Intl.DateTimeFormat('vi-VN', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric',
})

export default function BlogCard({ post, featured = false }: { post: BlogPostSummary; featured?: boolean }) {
  return (
    <article
      className="group relative flex flex-col h-full overflow-hidden rounded-[20px] border border-white/70 bg-white/85 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.45)] transition-all duration-500 ease-out dark:border-slate-800/80 dark:bg-slate-900/88 dark:shadow-[0_28px_90px_-54px_rgba(2,6,23,0.88)]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.14),transparent_28%)] opacity-80 z-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="pointer-events-none absolute -right-10 top-0 h-32 w-32 rounded-full bg-blue-500/15 blur-[70px] z-0" />

      {/* Image header */}
      <PrefetchLink to={post.canonicalPath} className="block aspect-[16/10] w-full shrink-0 overflow-hidden bg-slate-100 dark:bg-slate-800 relative z-10">
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply dark:bg-slate-900/50 dark:mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <img
          src={post.coverImage || 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop'}
          alt={post.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </PrefetchLink>

      <div className={`relative flex h-full flex-col z-10 p-5 md:p-6 ${featured ? 'lg:p-8' : ''}`}>
        <div className="mb-4 flex items-center justify-between gap-3 md:mb-5">
          <Badge variant="primary" className="mb-0">
            {post.category}
          </Badge>
          <span className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
            <Icon name="schedule" className="text-[16px] text-blue-500" />
            {post.readingTimeMinutes} phút đọc
          </span>
        </div>

        <PrefetchLink
          to={post.canonicalPath}
          className="mb-4 block overflow-hidden text-[20px] font-normal leading-[1.2] tracking-tight text-slate-900 transition-colors duration-500 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 lg:text-[28px]"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
          {post.title}
        </PrefetchLink>

        <p className="mb-4 text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400 md:mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-slate-100/90 dark:border-slate-800/80">
          <div>
            <p className="text-sm font-medium text-slate-900 dark:text-slate-100">{post.author.name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{dateFormatter.format(new Date(post.publishedAt))}</p>
          </div>

          <PrefetchLink
            to={post.canonicalPath}
            className="inline-flex items-center justify-center gap-2 rounded-full px-0 py-2.5 text-base font-medium text-blue-600 transition-all duration-500 group-hover:translate-x-1 hover:underline dark:text-blue-400"
          >
            Đọc bài viết
            <Icon name="arrow_outward" className="text-[24px]" />
          </PrefetchLink>
        </div>
      </div>
    </article>
  )
}
