import type { BlogContentSection } from '@/lib/blog/types'
import MermaidDiagram from '@/components/common/MermaidDiagram'

function createHeadingId(heading: string) {
  return heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export default function BlogArticleBody({ sections }: { sections: BlogContentSection[] }) {
  return (
    <article className="rounded-[20px] border border-slate-100 bg-white/90 p-4 shadow-[0_16px_50px_-40px_rgba(15,23,42,0.4)] transition-colors duration-500 dark:border-slate-800 dark:bg-slate-900/85 md:p-6 lg:p-8">
      <div className="space-y-10 md:space-y-12">
        {sections.map((section, index) => (
          <section
            key={section.heading}
            id={createHeadingId(section.heading)}
            className={index === 0 ? '' : 'border-t border-slate-100 pt-10 dark:border-slate-800 md:pt-12'}
          >
            <h2 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5">
              {section.heading}
            </h2>

            <div className="space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base font-normal leading-relaxed text-slate-500 dark:text-slate-400">
                  {paragraph}
                </p>
              ))}
            </div>

            {section.bullets?.length ? (
              <ul className="mt-6 space-y-3">
                {section.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    <span className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : null}

            {section.quote ? (
              <blockquote className="mt-6 rounded-[20px] border border-blue-100 bg-blue-50/80 p-4 text-base font-medium leading-relaxed text-blue-900 dark:border-blue-900/50 dark:bg-blue-950/40 dark:text-blue-100 md:p-6">
                {section.quote}
              </blockquote>
            ) : null}

            {section.mermaid ? (
              <MermaidDiagram
                chart={section.mermaid}
                title={section.mermaidTitle ?? 'Sơ đồ minh họa'}
                className="mt-6"
              />
            ) : null}
          </section>
        ))}
      </div>
    </article>
  )
}
