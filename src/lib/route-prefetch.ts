import { appRouteDefinitions, type AppRoutePath } from '@/config/routes'

const prefetchedRoutes = new Set<AppRoutePath>()
const routeLoaders = new Map(appRouteDefinitions.map((route) => [route.path, route.load]))

function normalizeRoutePath(path: string): AppRoutePath | null {
  if (routeLoaders.has(path as AppRoutePath)) {
    return path as AppRoutePath
  }

  if (path.startsWith('/blog/category/')) {
    return '/blog/category/:categorySlug'
  }

  if (path.startsWith('/blog/')) {
    return '/blog/:slug'
  }

  return null
}

export function prefetchRoute(path: string): void {
  const routePath = normalizeRoutePath(path)

  if (!routePath) {
    return
  }

  if (prefetchedRoutes.has(routePath)) {
    return
  }

  prefetchedRoutes.add(routePath)
  void routeLoaders.get(routePath)?.()
}
