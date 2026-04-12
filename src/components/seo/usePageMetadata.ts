import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { useMetadataContext } from '@/components/seo/MetadataProvider'
import type { ResolvedMetadata } from '@/lib/seo/types'

export function usePageMetadata(metadata: ResolvedMetadata) {
  const location = useLocation()
  const { setDynamicPageMetadata, ssrMetadataRef } = useMetadataContext()
  const metadataSignature = useMemo(() => JSON.stringify(metadata), [metadata])
  const stableMetadata = useMemo(() => metadata, [metadataSignature])

  if (typeof window === 'undefined' && ssrMetadataRef) {
    ssrMetadataRef.current = {
      pathname: location.pathname,
      metadata: stableMetadata,
    }
  }

  useEffect(() => {
    setDynamicPageMetadata({
      pathname: location.pathname,
      metadata: stableMetadata,
    })
  }, [location.pathname, setDynamicPageMetadata, stableMetadata])
}
