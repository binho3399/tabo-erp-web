import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { siteMetadata, siteRoutes } from '@/config/site'

export default function RouteDocumentMeta() {
  const location = useLocation()

  useEffect(() => {
    const activeRoute = siteRoutes.find((route) => route.path === location.pathname)
    if (!activeRoute) {
      return
    }

    document.title = siteMetadata.titleTemplate.replace('%s', activeRoute.title)

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', activeRoute.description)
    }
  }, [location.pathname])

  return null
}
