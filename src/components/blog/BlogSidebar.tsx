import { Icon, PrefetchLink } from '@/components/ui'
import type { BlogPostSummary } from '@/lib/blog/types'

interface BlogSidebarProps {
  topPosts: BlogPostSummary[];
}

const categories = [
  { name: 'Kho bãi', colorFrom: 'from-blue-600', colorTo: 'to-indigo-500' },
  { name: 'Tài chính', colorFrom: 'from-sky-500', colorTo: 'to-cyan-400' },
  { name: 'Vận hành', colorFrom: 'from-emerald-500', colorTo: 'to-teal-400' },
  { name: 'Nhân sự', colorFrom: 'from-orange-500', colorTo: 'to-amber-400' },
  { name: 'Chuyển đổi số', colorFrom: 'from-violet-600', colorTo: 'to-purple-500' },
]

export default function BlogSidebar({ topPosts }: BlogSidebarProps) {
  return (
    <aside className="w-full space-y-12 lg:w-[320px] flex-shrink-0">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          className="w-full rounded-[16px] border border-slate-200 bg-white/60 px-5 py-4 pl-5 pr-12 text-sm text-slate-900 outline-none backdrop-blur-md transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:focus:border-blue-500"
        />
        <Icon
          name="search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[20px] text-slate-400"
        />
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">Danh mục</h3>
        <div className="flex flex-col gap-3">
          {categories.map((cat) => (
            <PrefetchLink
              key={cat.name}
              to="/blog"
              className="group relative h-[72px] w-full overflow-hidden rounded-[16px] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r md:bg-gradient-to-br ${cat.colorFrom} ${cat.colorTo} opacity-80 mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:opacity-60 dark:mix-blend-screen`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                <span className="text-lg font-medium text-white tracking-wide">{cat.name}</span>
              </div>
            </PrefetchLink>
          ))}
        </div>
      </div>

      {/* Top Posts */}
      <div className="space-y-6">
        <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">Bài viết đọc nhiều</h3>
        <div className="flex flex-col gap-6">
          {topPosts.map((post, index) => (
            <PrefetchLink
              key={post.slug}
              to={post.canonicalPath}
              className="group flex items-start gap-4 transition-colors"
            >
              <span className="mt-1 text-3xl font-extrabold text-slate-200 group-hover:text-blue-500 transition-colors duration-300 dark:text-slate-800 dark:group-hover:text-blue-500">
                {index + 1}
              </span>
              <div>
                <h4 className="text-[15px] font-medium leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                  {post.title}
                </h4>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {post.category} - {new Intl.DateTimeFormat('vi-VN', { month: 'short', day: '2-digit', year: 'numeric' }).format(new Date(post.publishedAt))}
                </p>
              </div>
            </PrefetchLink>
          ))}
        </div>
      </div>

      {/* Images / Gallery (Instagram Concept) */}
      <div className="space-y-4">
        <h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-white">Thư viện</h3>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square w-full rounded-[12px] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 shadow-inner"
            >
              {/* Optional: Add an icon or mini-illustration from Tabo inside */}
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
