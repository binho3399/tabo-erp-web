import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type MutableRefObject,
  type ReactNode,
} from 'react'

import type { ResolvedMetadata } from '@/lib/seo/types'

interface DynamicPageMetadata {
  pathname: string
  metadata: ResolvedMetadata
}

interface MetadataContextValue {
  dynamicPageMetadata: DynamicPageMetadata | null
  setDynamicPageMetadata: (value: DynamicPageMetadata) => void
  ssrMetadataRef?: MutableRefObject<DynamicPageMetadata | null>
}

const MetadataContext = createContext<MetadataContextValue | null>(null)

interface MetadataProviderProps {
  children: ReactNode
  ssrMetadataRef?: MutableRefObject<DynamicPageMetadata | null>
}

function buildMetadataCacheKey(metadata: ResolvedMetadata): string {
  const openGraphImage = metadata.openGraph.image
  const twitterImage = metadata.twitter.image
  const robots = metadata.robots
  const structuredDataSignature = metadata.jsonLd.length
  return [
    metadata.title,
    metadata.description,
    metadata.canonicalUrl,
    robots,
    openGraphImage,
    twitterImage,
    String(structuredDataSignature),
  ].join('|')
}

export function MetadataProvider({ children, ssrMetadataRef }: MetadataProviderProps) {
  const [dynamicPageMetadata, setDynamicPageMetadataState] = useState<DynamicPageMetadata | null>(null)

  const setDynamicPageMetadata = useCallback(
    (value: DynamicPageMetadata) => {
      setDynamicPageMetadataState((current) => {
        if (!current) {
          return value
        }

        const isSamePathname = current.pathname === value.pathname
        const isSameMetadata = buildMetadataCacheKey(current.metadata) === buildMetadataCacheKey(value.metadata)
        return isSamePathname && isSameMetadata ? current : value
      })
      if (ssrMetadataRef) {
        ssrMetadataRef.current = value
      }
    },
    [ssrMetadataRef],
  )

  const value = useMemo(
    () => ({
      dynamicPageMetadata,
      setDynamicPageMetadata,
      ssrMetadataRef,
    }),
    [dynamicPageMetadata, setDynamicPageMetadata, ssrMetadataRef],
  )

  return <MetadataContext.Provider value={value}>{children}</MetadataContext.Provider>
}

export function useMetadataContext() {
  const context = useContext(MetadataContext)

  if (!context) {
    throw new Error('useMetadataContext must be used within MetadataProvider')
  }

  return context
}
