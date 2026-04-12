export interface MetadataInput {
  title: string
  description: string
  canonicalPath: string
  robots?: string
  openGraph?: {
    type?: string
    title?: string
    description?: string
    image?: string
    url?: string
  }
  twitter?: {
    card?: 'summary' | 'summary_large_image'
    title?: string
    description?: string
    image?: string
  }
  jsonLd?: Array<Record<string, unknown>>
}

export interface ResolvedMetadata {
  title: string
  description: string
  canonicalPath: string
  canonicalUrl: string
  robots: string
  openGraph: {
    type: string
    title: string
    description: string
    image: string
    url: string
  }
  twitter: {
    card: 'summary' | 'summary_large_image'
    title: string
    description: string
    image: string
  }
  jsonLd: Array<Record<string, unknown>>
}
