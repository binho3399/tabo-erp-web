import { Button, Icon } from '@/components/ui'

import { mobileRouteDescriptionByPath } from './shared'
import type { BaseNavigationProps } from './shared'

interface MobileNavigationProps extends BaseNavigationProps {
  isOpen: boolean
  isNewsExpanded: boolean
  onToggleNewsExpanded: () => void
  onCloseMenu: () => void
}

export function MobileNavigation({
  blogCategories,
  nonBlogRoutes,
  isOpen,
  isNewsExpanded,
  onNavClick,
  onToggleNewsExpanded,
  onCloseMenu,
}: MobileNavigationProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div
      id="mobile-nav-panel"
      className="fixed inset-x-0 top-[76px] bottom-0 z-50 max-h-[calc(100dvh-76px)] overflow-y-auto overscroll-y-contain border-b border-slate-100 bg-white shadow-2xl animate-[mobileNavEnter_320ms_cubic-bezier(0.22,1,0.36,1)_forwards] touch-pan-y [-webkit-overflow-scrolling:touch] dark:border-slate-800 dark:bg-slate-900 lg:hidden"
    >
      <div className="min-h-full space-y-2 px-2 py-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <div className="grid grid-cols-1 gap-1">
          {nonBlogRoutes.map((link, idx) => (
            <Button
              key={link.path}
              to={link.path}
              variant="ghost"
              className="group !h-auto !rounded-2xl !border-none !p-2 !font-normal flex items-center justify-start gap-4 transition-all duration-200 hover:bg-slate-50 active:bg-slate-100 dark:hover:bg-slate-800 dark:active:bg-slate-700"
              onClick={onNavClick(link.path)}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-colors group-hover:bg-blue-50 dark:bg-slate-800 dark:group-hover:bg-blue-900/30">
                <Icon
                  name={link.navIcon}
                  className="text-xl text-slate-500 transition-colors group-hover:text-blue-600 dark:text-slate-400 dark:group-hover:text-blue-400"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[17px] font-medium text-slate-900 dark:text-slate-100">{link.label}</span>
                <span className="translate-y-[-2px] text-[13px] font-light text-slate-500 dark:text-slate-400">
                  {mobileRouteDescriptionByPath[link.path]}
                </span>
              </div>
              <Icon
                name="chevron_right"
                className="ml-auto translate-x-1 text-lg text-slate-300 opacity-0 transition-all group-hover:opacity-100 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
              />
            </Button>
          ))}

          <button
            type="button"
            onClick={onToggleNewsExpanded}
            className="flex w-full items-center justify-start gap-4 rounded-2xl p-2 text-left transition-all duration-200 hover:bg-slate-50 active:bg-slate-100 dark:hover:bg-slate-800 dark:active:bg-slate-700"
            aria-expanded={isNewsExpanded}
            aria-controls="mobile-news-categories"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 transition-colors dark:bg-slate-800">
              <Icon name="menu_book" className="text-xl text-slate-500 dark:text-slate-400" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[17px] font-medium text-slate-900 dark:text-slate-100">Tin tức</span>
              <span className="translate-y-[-2px] text-[13px] font-light text-slate-500 dark:text-slate-400">
                Kiến thức ERP và vận hành
              </span>
            </div>
            <Icon
              name={isNewsExpanded ? 'remove' : 'add'}
              className="ml-auto text-lg text-blue-600 transition-colors duration-200"
              aria-hidden="true"
            />
          </button>

          <div
            id="mobile-news-categories"
            className={`overflow-hidden transition-all duration-250 ${
              isNewsExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="ml-7 mt-1 space-y-1 border-l border-slate-200 pl-5 dark:border-slate-700">
              <Button
                to="/blog"
                variant="ghost"
                fullWidth
                className="!h-auto !justify-start !rounded-xl !px-3 !py-2 !font-normal text-slate-600 dark:text-slate-300"
                onClick={onCloseMenu}
              >
                Tất cả bài viết
              </Button>
              {blogCategories.map((category) => (
                <Button
                  key={category.slug}
                  to={`/blog/category/${category.slug}`}
                  variant="ghost"
                  fullWidth
                  className="!h-auto !justify-start !rounded-xl !px-3 !py-2 !font-normal text-slate-600 dark:text-slate-300"
                  onClick={onCloseMenu}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-4 pt-4 pb-2">
          <Button to="/contact" onClick={onCloseMenu} variant="primary" size="lg" fullWidth>
            Liên hệ ngay
          </Button>
        </div>
      </div>
    </div>
  )
}
