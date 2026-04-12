import { Button } from '@/components/ui'

interface BlogPostSidebarProps {
  tableOfContents: string[];
  tags: string[];
}

function createHeadingId(heading: string) {
  return heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function BlogPostSidebar({ tableOfContents, tags }: BlogPostSidebarProps) {
  return (
    <aside className="space-y-6">
      <div className="rounded-[20px] border border-slate-100 bg-white/90 p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900/86 md:p-6">
        <p className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Mục lục bài viết
        </p>
        <div className="space-y-1">
          {tableOfContents.map((heading, index) => (
            <a
              key={heading}
              href={`#${createHeadingId(heading)}`}
              className="group grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-3 rounded-[12px] px-2 py-2 text-sm text-slate-600 transition-colors hover:bg-blue-50/70 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-300"
            >
              <span className="pt-0.5 text-[11px] font-semibold text-blue-500 dark:text-blue-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="text-[15px] leading-7">{heading}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-[20px] border border-slate-100 bg-white/90 p-4 shadow-[0_20px_60px_-45px_rgba(15,23,42,0.45)] dark:border-slate-800 dark:bg-slate-900/86 md:p-6">
        <p className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Chủ đề liên quan
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-700 dark:border-blue-900/50 dark:bg-blue-900/25 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="rounded-[20px] border border-slate-100 bg-slate-950 p-4 text-white shadow-[0_28px_90px_-62px_rgba(15,23,42,0.75)] dark:border-slate-800 md:p-6">
        <p className="mb-4 text-sm font-semibold text-blue-300">Tiếp theo</p>
        <p className="mb-6 text-base leading-relaxed text-slate-300">
          Nếu bạn đang đánh giá ERP cho giai đoạn tăng trưởng tiếp theo, đội ngũ Tabo có thể giúp chốt lộ trình phạm vi, KPI và rollout.
        </p>
        <Button to="/contact" fullWidth>
          Đặt lịch tư vấn
        </Button>
      </div>
    </aside>
  )
}
