import { Icon, PrefetchLink } from '@/components/ui'
import type { BlogPostSummary } from '@/lib/blog/types'

interface BlogSidebarProps {
  topPosts: BlogPostSummary[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

export const blogCategories = [
  { label: 'Kho bãi', value: 'Kho vận', colorFrom: 'from-blue-600', colorTo: 'to-indigo-500' },
  { label: 'Tài chính', value: 'Tài chính', colorFrom: 'from-sky-500', colorTo: 'to-cyan-400' },
  { label: 'Vận hành', value: 'Vận hành', colorFrom: 'from-emerald-500', colorTo: 'to-teal-400' },
  { label: 'Nhân sự', value: 'Nhân sự', colorFrom: 'from-orange-500', colorTo: 'to-amber-400' },
  { label: 'Chuyển đổi số', value: 'Chuyển đổi số', colorFrom: 'from-violet-600', colorTo: 'to-purple-500' },
]

export default function BlogSidebar({ topPosts, selectedCategory, onCategorySelect }: BlogSidebarProps) {
  return (
    <aside className="w-full space-y-12 lg:w-[320px] flex-shrink-0">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Tìm kiếm bài viết..."
          className="w-full rounded-[16px] border border-slate-200 bg-white/60 px-5 py-4 pl-5 pr-14 text-base text-slate-900 outline-none backdrop-blur-md transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-800 dark:bg-slate-900/60 dark:text-white dark:focus:border-blue-500"
        />
        <Icon
          name="search"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-[24px] text-slate-400"
        />
      </div>

      {/* Categories */}
      <div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Danh mục</h3>
          <button
            type="button"
            onClick={() => onCategorySelect(null)}
            className="text-xs font-semibold uppercase tracking-[0.08em] text-blue-600 transition-colors hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Tất cả
          </button>
        </div>
        <div className="mt-4 flex flex-col gap-3">
          {blogCategories.map((cat) => {
            const isActive = selectedCategory === cat.value

            return (
            <button
              type="button"
              key={cat.value}
              aria-pressed={isActive}
              onClick={() => onCategorySelect(cat.value)}
              className={`group relative h-[56px] w-full overflow-hidden rounded-[20px] shadow-sm transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-md ${isActive ? 'ring-2 ring-blue-500/70 ring-offset-2 ring-offset-[#F7F8F8] dark:ring-blue-400/70 dark:ring-offset-slate-950' : ''}`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r md:bg-gradient-to-br ${cat.colorFrom} ${cat.colorTo} ${isActive ? 'opacity-100' : 'opacity-80'} mix-blend-multiply transition-transform duration-500 group-hover:scale-110 dark:mix-blend-screen ${isActive ? 'dark:opacity-80' : 'dark:opacity-60'}`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                <span className="text-[16px] font-semibold text-white tracking-wide">{cat.label}</span>
              </div>
            </button>
          )})}
        </div>
      </div>

      {/* Top Posts */}
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Bài viết đọc nhiều</h3>
        <div className="mt-4 flex flex-col gap-6">
          {topPosts.map((post, index) => (
            <PrefetchLink
              key={post.slug}
              to={post.canonicalPath}
              className="group flex items-start gap-4 transition-colors"
            >
              <span className="mt-1 inline-block w-[20px] flex-shrink-0 text-3xl font-extrabold text-slate-200 group-hover:text-blue-500 transition-colors duration-300 dark:text-slate-800 dark:group-hover:text-blue-500">
                {index + 1}
              </span>
              <div>
                <h4 className="text-[16px] font-medium leading-snug text-slate-900 transition-colors group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
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
    </aside>
  )
}
