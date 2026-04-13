import { renderToString } from 'react-dom/server'
import { MemoryRouter } from 'react-router-dom'

import AppFrame from '@/app/AppFrame'
import { MetadataProvider } from '@/components/seo/MetadataProvider'
import { staticPageMetadata } from '@/config/site'
import { ThemeProvider } from '@/context/ThemeContext'
import { blogRepository } from '@/lib/blog/repository'
import { buildNotFoundMetadata } from '@/lib/blog/seo'
import { renderMetadataToHead, resolveMetadata } from '@/lib/seo/metadata'
import type { ResolvedMetadata } from '@/lib/seo/types'
import About from '@/pages/About'
import BlogCategory from '@/pages/BlogCategory'
import BlogIndex from '@/pages/BlogIndex'
import BlogPost from '@/pages/BlogPost'
import Contact from '@/pages/Contact'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import Pricing from '@/pages/Pricing'

const serverRoutes = [
  { path: '/', Component: Home },
  { path: '/pricing', Component: Pricing },
  { path: '/about', Component: About },
  { path: '/contact', Component: Contact },
  { path: '/blog', Component: BlogIndex },
  { path: '/blog/category/:categorySlug', Component: BlogCategory },
  { path: '/blog/:slug', Component: BlogPost },
  { path: '*', Component: NotFound },
]

function resolveFallbackMetadata(pathname: string): ResolvedMetadata {
  const staticMetadata = staticPageMetadata[pathname as keyof typeof staticPageMetadata]
  return staticMetadata ? resolveMetadata(staticMetadata) : buildNotFoundMetadata()
}

export function getPrerenderPaths() {
  const blogPaths = blogRepository.listIndexablePaths()
  const categoryPaths = blogRepository.listCategoryIndexablePaths()
  return ['/blog', ...categoryPaths, ...blogPaths]
}

export function renderPath(pathname: string) {
  const ssrMetadataRef: { current: { pathname: string; metadata: ResolvedMetadata } | null } = { current: null }

  const appHtml = renderToString(
    <ThemeProvider>
      <MetadataProvider ssrMetadataRef={ssrMetadataRef}>
        <MemoryRouter initialEntries={[pathname]}>
          <AppFrame routes={serverRoutes} />
        </MemoryRouter>
      </MetadataProvider>
    </ThemeProvider>,
  )

  return Promise.resolve({
    appHtml,
    metadata: ssrMetadataRef.current?.metadata ?? resolveFallbackMetadata(pathname),
  })
}

export { renderMetadataToHead }
