import { Icon, PrefetchLink } from '@/components/ui'

import { getCategoryIconName } from './shared'
import type { BaseNavigationProps } from './shared'

interface DesktopNavigationProps extends BaseNavigationProps {
  isNewsDropdownOpen: boolean
  onOpenNewsDropdown: () => void
  onScheduleCloseNewsDropdown: () => void
  onCloseNewsDropdown: () => void
}

export function DesktopNavigation({
  blogCategories,
  nonBlogRoutes,
  isBlogRouteActive,
  pathname,
  onNavClick,
  isNewsDropdownOpen,
  onOpenNewsDropdown,
  onScheduleCloseNewsDropdown,
  onCloseNewsDropdown,
}: DesktopNavigationProps) {
  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-10">
      {nonBlogRoutes.map((link) => (
        <PrefetchLink
          key={link.path}
          to={link.path}
          onClick={onNavClick(link.path)}
          className={`group relative flex items-center py-1 text-[15px] font-medium transition-colors ${
            pathname === link.path
              ? 'text-slate-900 dark:text-white'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <span>{link.label}</span>
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-full" />
        </PrefetchLink>
      ))}

      <div
        className="group relative py-1"
        onMouseEnter={onOpenNewsDropdown}
        onMouseLeave={onScheduleCloseNewsDropdown}
        onFocus={onOpenNewsDropdown}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            onCloseNewsDropdown()
          }
        }}
      >
        <PrefetchLink
          to="/blog"
          onClick={onNavClick('/blog')}
          aria-haspopup="menu"
          aria-expanded={isNewsDropdownOpen}
          aria-controls="desktop-news-menu"
          className={`relative flex items-center gap-1 text-[15px] font-medium transition-colors ${
            isBlogRouteActive
              ? 'text-slate-900 dark:text-white'
              : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
          }`}
        >
          <span>Tin tức</span>
          <Icon
            name={isNewsDropdownOpen ? 'remove' : 'add'}
            className="text-base text-blue-600 transition-colors duration-200"
            aria-hidden="true"
          />
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-blue-600 transition-all duration-300 group-hover:w-full" />
        </PrefetchLink>

        <div
          id="desktop-news-menu"
          role="menu"
          className={`absolute left-1/2 top-full z-30 w-96 -translate-x-1/2 pt-2 transition-all duration-200 ${
            isNewsDropdownOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-slate-200/70 bg-white/95 p-2 shadow-2xl shadow-slate-900/10 backdrop-blur-md dark:border-slate-700/70 dark:bg-slate-900/95 dark:shadow-black/30">
            {blogCategories.map((category) => (
              <PrefetchLink
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                role="menuitem"
                className="group/item flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-slate-100/80 dark:hover:bg-slate-800/80"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover/item:bg-blue-50 group-hover/item:text-blue-600 dark:bg-slate-800 dark:text-slate-300 dark:group-hover/item:bg-blue-900/40 dark:group-hover/item:text-blue-300">
                  <Icon name={getCategoryIconName(category.slug)} className="text-[18px]" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-700 transition-colors group-hover/item:text-slate-900 dark:text-slate-300 dark:group-hover/item:text-white">
                    {category.name}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-slate-500 transition-colors group-hover/item:text-slate-600 dark:text-slate-400 dark:group-hover/item:text-slate-300">
                    {category.description}
                  </p>
                </div>
              </PrefetchLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
