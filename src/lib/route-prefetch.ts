import { appRouteDefinitions, type AppRoutePath } from '@/config/routes'

const prefetchedRoutes = new Set<AppRoutePath>()
const routeLoaders = new Map(appRouteDefinitions.map((route) => [route.path, route.load]))
const PREFETCH_MIN_INTERVAL_MS = 350
let lastPrefetchAt = 0

interface NetworkConnectionLike {
  saveData?: boolean
  effectiveType?: string
}

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

function supportsEfficientPrefetch() {
  if (typeof navigator === 'undefined') {
    return true
  }

  const connection = (navigator as Navigator & { connection?: NetworkConnectionLike }).connection
  if (!connection) {
    return true
  }

  if (connection.saveData) {
    return false
  }

  const effectiveType = connection.effectiveType
  return effectiveType !== 'slow-2g' && effectiveType !== '2g'
}

export function canPrefetchRoute(path: string): boolean {
  const routePath = normalizeRoutePath(path)
  if (!routePath) {
    return false
  }

  if (prefetchedRoutes.has(routePath)) {
    return false
  }

  if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
    return false
  }

  const now = Date.now()
  if (now - lastPrefetchAt < PREFETCH_MIN_INTERVAL_MS) {
    return false
  }

  return supportsEfficientPrefetch()
}

export function prefetchRoute(path: string): void {
  const routePath = normalizeRoutePath(path)

  if (!routePath) {
    return
  }

  if (prefetchedRoutes.has(routePath)) {
    return
  }

  if (!canPrefetchRoute(path)) {
    return
  }

  prefetchedRoutes.add(routePath)
  lastPrefetchAt = Date.now()
  void routeLoaders.get(routePath)?.()
}
