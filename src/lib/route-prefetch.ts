import type { RoutePath } from '@/config/site'
import { siteRoutes } from '@/config/site'

const prefetchedRoutes = new Set<RoutePath>()
const routeLoaders = new Map(siteRoutes.map((route) => [route.path, route.load]))

export function prefetchRoute(path: string): void {
  if (!routeLoaders.has(path as RoutePath)) {
    return
  }

  const routePath = path as RoutePath
  if (prefetchedRoutes.has(routePath)) {
    return
  }

  prefetchedRoutes.add(routePath)
  void routeLoaders.get(routePath)?.()
}
