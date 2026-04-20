import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useMetadataContext } from '@/components/seo/MetadataProvider'
import type { ResolvedMetadata } from '@/lib/seo/types'

export function usePageMetadata(metadata: ResolvedMetadata) {
  const location = useLocation()
  const { setDynamicPageMetadata, ssrMetadataRef } = useMetadataContext()

  if (typeof window === 'undefined' && ssrMetadataRef) {
    ssrMetadataRef.current = {
      pathname: location.pathname,
      metadata,
    }
  }

  useEffect(() => {
    setDynamicPageMetadata({
      pathname: location.pathname,
      metadata,
    })
  }, [location.pathname, metadata, setDynamicPageMetadata])
}
