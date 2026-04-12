import { lazy } from 'react'
import { BrowserRouter } from 'react-router-dom'

import AppFrame from '@/app/AppFrame'
import { MetadataProvider } from '@/components/seo/MetadataProvider'
import { appRouteDefinitions, type ClientRoute } from '@/config/routes'

const routes: ClientRoute[] = appRouteDefinitions.map((route) => ({
  ...route,
  Component: lazy(route.load),
}))

export default function App() {
  return (
    <MetadataProvider>
      <BrowserRouter>
        <AppFrame routes={routes} />
      </BrowserRouter>
    </MetadataProvider>
  )
}
