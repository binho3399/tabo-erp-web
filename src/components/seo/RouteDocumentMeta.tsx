import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useMetadataContext } from '@/components/seo/MetadataProvider'
import { staticPageMetadata } from '@/config/site'
import { resolveMetadata } from '@/lib/seo/metadata'
import type { ResolvedMetadata } from '@/lib/seo/types'

function upsertHeadTag<K extends keyof HTMLElementTagNameMap>(
  selector: string,
  create: () => HTMLElementTagNameMap[K],
) {
  const existing = document.head.querySelector(selector)

  if (existing) {
    return existing as HTMLElementTagNameMap[K]
  }

  const element = create()
  element.setAttribute('data-tabo-managed', 'true')
  document.head.appendChild(element)
  return element
}

function syncMetadataToHead(metadata: ResolvedMetadata) {
  document.title = metadata.title

  const descriptionTag = upsertHeadTag('meta[name="description"]', () => document.createElement('meta'))
  descriptionTag.setAttribute('name', 'description')
  descriptionTag.setAttribute('content', metadata.description)

  const robotsTag = upsertHeadTag('meta[name="robots"]', () => document.createElement('meta'))
  robotsTag.setAttribute('name', 'robots')
  robotsTag.setAttribute('content', metadata.robots)

  const canonicalTag = upsertHeadTag('link[rel="canonical"]', () => document.createElement('link'))
  canonicalTag.setAttribute('rel', 'canonical')
  canonicalTag.setAttribute('href', metadata.canonicalUrl)

  const socialEntries = [
    ['property', 'og:type', metadata.openGraph.type],
    ['property', 'og:title', metadata.openGraph.title],
    ['property', 'og:description', metadata.openGraph.description],
    ['property', 'og:image', metadata.openGraph.image],
    ['property', 'og:url', metadata.openGraph.url],
    ['property', 'og:site_name', 'Tabo ERP'],
    ['name', 'twitter:card', metadata.twitter.card],
    ['name', 'twitter:title', metadata.twitter.title],
    ['name', 'twitter:description', metadata.twitter.description],
    ['name', 'twitter:image', metadata.twitter.image],
    ['name', 'twitter:site', '@taboerp'],
  ] as const

  for (const [attribute, key, value] of socialEntries) {
    const meta = upsertHeadTag(`meta[${attribute}="${key}"]`, () => document.createElement('meta'))
    meta.setAttribute(attribute, key)
    meta.setAttribute('content', value)
  }

  document.head.querySelectorAll('script[data-tabo-managed="jsonld"]').forEach((node) => node.remove())
  for (const entry of metadata.jsonLd) {
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-tabo-managed', 'jsonld')
    script.textContent = JSON.stringify(entry)
    document.head.appendChild(script)
  }
}

function resolveStaticPathMetadata(pathname: string) {
  const staticMetadata = staticPageMetadata[pathname as keyof typeof staticPageMetadata]
  return staticMetadata ? resolveMetadata(staticMetadata) : null
}

export default function RouteDocumentMeta() {
  const location = useLocation()
  const { dynamicPageMetadata } = useMetadataContext()

  useEffect(() => {
    const staticMetadata = resolveStaticPathMetadata(location.pathname)
    const activeMetadata =
      dynamicPageMetadata?.pathname === location.pathname ? dynamicPageMetadata.metadata : staticMetadata

    if (activeMetadata) {
      syncMetadataToHead(activeMetadata)
    }
  }, [dynamicPageMetadata, location.pathname])

  return null
}
