import { Suspense, type ComponentType } from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from '@/components/layout/Layout'
import { RouteSkeleton } from '@/components/common/SkeletonLayouts'
import ScrollToTop from '@/components/layout/ScrollToTop'
import RouteDocumentMeta from '@/components/seo/RouteDocumentMeta'

export interface RouteComponentDefinition {
  path: string
  Component: ComponentType
}

const routeFallback = (
  <Layout loadingState="route">
    <RouteSkeleton />
  </Layout>
)

export default function AppFrame({ routes }: { routes: RouteComponentDefinition[] }) {
  return (
    <>
      <ScrollToTop />
      <RouteDocumentMeta />
      <Suspense fallback={routeFallback}>
        <Layout>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Layout>
      </Suspense>
    </>
  )
}
