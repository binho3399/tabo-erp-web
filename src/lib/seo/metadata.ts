import { siteMetadata } from '@/config/site'
import type { MetadataInput, ResolvedMetadata } from '@/lib/seo/types'

function ensureLeadingSlash(path: string) {
  if (!path) {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path}`
}

function stripTrailingSlash(path: string) {
  return path.length > 1 && path.endsWith('/') ? path.slice(0, -1) : path
}

export function buildAbsoluteUrl(path: string) {
  const normalizedPath = stripTrailingSlash(ensureLeadingSlash(path))
  return new URL(normalizedPath, siteMetadata.siteUrl).toString()
}

export function resolveMetadata(input: MetadataInput): ResolvedMetadata {
  const canonicalPath = stripTrailingSlash(ensureLeadingSlash(input.canonicalPath))
  const canonicalUrl = input.openGraph?.url ?? buildAbsoluteUrl(canonicalPath)

  return {
    title: siteMetadata.titleTemplate.replace('%s', input.title),
    description: input.description,
    canonicalPath,
    canonicalUrl: buildAbsoluteUrl(canonicalPath),
    robots: input.robots ?? 'index, follow',
    openGraph: {
      type: input.openGraph?.type ?? 'website',
      title: input.openGraph?.title ?? siteMetadata.titleTemplate.replace('%s', input.title),
      description: input.openGraph?.description ?? input.description,
      image: buildAbsoluteUrl(input.openGraph?.image ?? siteMetadata.defaultOgImage),
      url: canonicalUrl,
    },
    twitter: {
      card: input.twitter?.card ?? 'summary_large_image',
      title: input.twitter?.title ?? siteMetadata.titleTemplate.replace('%s', input.title),
      description: input.twitter?.description ?? input.description,
      image: buildAbsoluteUrl(input.twitter?.image ?? input.openGraph?.image ?? siteMetadata.defaultOgImage),
    },
    jsonLd: input.jsonLd ?? [],
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

export function renderMetadataToHead(metadata: ResolvedMetadata) {
  const lines = [
    `<title data-tabo-head="true">${escapeHtml(metadata.title)}</title>`,
    `<meta data-tabo-head="true" name="description" content="${escapeHtml(metadata.description)}">`,
    `<meta data-tabo-head="true" name="robots" content="${escapeHtml(metadata.robots)}">`,
    `<link data-tabo-head="true" rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}">`,
    `<meta data-tabo-head="true" property="og:type" content="${escapeHtml(metadata.openGraph.type)}">`,
    `<meta data-tabo-head="true" property="og:title" content="${escapeHtml(metadata.openGraph.title)}">`,
    `<meta data-tabo-head="true" property="og:description" content="${escapeHtml(metadata.openGraph.description)}">`,
    `<meta data-tabo-head="true" property="og:image" content="${escapeHtml(metadata.openGraph.image)}">`,
    `<meta data-tabo-head="true" property="og:url" content="${escapeHtml(metadata.openGraph.url)}">`,
    `<meta data-tabo-head="true" property="og:site_name" content="${escapeHtml(siteMetadata.organizationName)}">`,
    `<meta data-tabo-head="true" name="twitter:card" content="${escapeHtml(metadata.twitter.card)}">`,
    `<meta data-tabo-head="true" name="twitter:title" content="${escapeHtml(metadata.twitter.title)}">`,
    `<meta data-tabo-head="true" name="twitter:description" content="${escapeHtml(metadata.twitter.description)}">`,
    `<meta data-tabo-head="true" name="twitter:image" content="${escapeHtml(metadata.twitter.image)}">`,
  ]

  if (siteMetadata.twitterHandle) {
    lines.push(
      `<meta data-tabo-head="true" name="twitter:site" content="${escapeHtml(siteMetadata.twitterHandle)}">`,
    )
  }

  for (const entry of metadata.jsonLd) {
    lines.push(
      `<script data-tabo-head="true" type="application/ld+json">${JSON.stringify(entry)}</script>`,
    )
  }

  return lines.join('\n')
}
