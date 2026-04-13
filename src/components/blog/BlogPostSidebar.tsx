import { useEffect, useRef, useState } from 'react'

interface BlogPostSidebarProps {
  tableOfContents: string[];
}

function createHeadingId(heading: string) {
  return heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function BlogPostSidebar({ tableOfContents }: BlogPostSidebarProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [lineOffsets, setLineOffsets] = useState({ top: 19, bottom: 19 })
  const tocContainerRef = useRef<HTMLDivElement | null>(null)
  const firstDotRef = useRef<HTMLSpanElement | null>(null)
  const lastDotRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const ids = tableOfContents.map((h) => createHeadingId(h))
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0.1, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [tableOfContents])

  useEffect(() => {
    const updateLineOffsets = () => {
      const container = tocContainerRef.current
      const firstDot = firstDotRef.current
      const lastDot = lastDotRef.current

      if (!container || !firstDot || !lastDot) return

      const containerRect = container.getBoundingClientRect()
      const firstRect = firstDot.getBoundingClientRect()
      const lastRect = lastDot.getBoundingClientRect()

      const top = firstRect.top - containerRect.top + firstRect.height / 2
      const bottom = containerRect.bottom - (lastRect.top + lastRect.height / 2)

      setLineOffsets({
        top: Math.max(0, Math.round(top)),
        bottom: Math.max(0, Math.round(bottom)),
      })
    }

    const frame = requestAnimationFrame(updateLineOffsets)
    window.addEventListener('resize', updateLineOffsets)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', updateLineOffsets)
    }
  }, [tableOfContents, activeId])

  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start lg:z-20">
      <div>
        <p className="mb-4 text-sm font-semibold text-blue-600 dark:text-blue-400">
          Mục lục bài viết
        </p>
        <div ref={tocContainerRef} className="relative pl-0">
          <div
            className="absolute left-[13px] z-0 w-px bg-slate-300 dark:bg-slate-600"
            style={{ top: `${lineOffsets.top}px`, bottom: `${lineOffsets.bottom}px` }}
          />
          <div className="space-y-0">
            {tableOfContents.map((heading, index) => (
              <a
                key={heading}
                href={`#${createHeadingId(heading)}`}
                className="group grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-3 rounded-[12px] px-2 py-2 text-[14px] leading-[1.5] text-slate-600 transition-colors hover:bg-blue-50/70 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-blue-300"
                onClick={(e) => {
                  e.preventDefault()
                  const id = createHeadingId(heading)
                  const el = document.getElementById(id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <span className="relative z-10 pt-0.5 flex items-start">
                  <span
                    ref={
                      index === 0
                        ? firstDotRef
                        : index === tableOfContents.length - 1
                          ? lastDotRef
                          : undefined
                    }
                    className={`mt-1 h-2.5 w-2.5 rounded-full transition-colors ${
                      activeId === createHeadingId(heading)
                        ? 'bg-blue-500 dark:bg-blue-400'
                        : 'bg-slate-200 dark:bg-slate-700'
                    }`}
                  />
                </span>
                <span className="grid min-w-0">
                  {/* Ghost span (always semibold) reserves bold-width/height so font-weight toggle never shifts layout */}
                  <span
                    aria-hidden="true"
                    className="invisible col-start-1 row-start-1 select-none pointer-events-none font-semibold text-[14px] leading-[1.5]"
                  >
                    {heading}
                  </span>
                  <span
                    className={`col-start-1 row-start-1 transition-colors text-[14px] leading-[1.5] ${
                      activeId === createHeadingId(heading)
                        ? 'font-semibold text-slate-900 dark:text-white'
                        : 'font-normal text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {heading}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Related topics and CTA removed per design request */}
    </aside>
  )
}
