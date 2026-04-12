import { useEffect, useRef, type FocusEventHandler, type MouseEventHandler } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { prefetchRoute } from '@/lib/route-prefetch'

const HOVER_INTENT_DELAY_MS = 120

export default function PrefetchLink({
  to,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  ...props
}: LinkProps) {
  const route = typeof to === 'string' ? to : to.pathname ?? ''
  const hoverIntentTimeoutRef = useRef<number | null>(null)

  const clearHoverIntent = () => {
    if (hoverIntentTimeoutRef.current) {
      window.clearTimeout(hoverIntentTimeoutRef.current)
      hoverIntentTimeoutRef.current = null
    }
  }

  useEffect(() => clearHoverIntent, [])

  const handlePrefetch = () => {
    clearHoverIntent()
    prefetchRoute(route)
  }

  const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onMouseEnter?.(event)

    if (!route) {
      return
    }

    clearHoverIntent()
    hoverIntentTimeoutRef.current = window.setTimeout(handlePrefetch, HOVER_INTENT_DELAY_MS)
  }

  const handleMouseLeave: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onMouseLeave?.(event)
    clearHoverIntent()
  }

  const handleFocus: FocusEventHandler<HTMLAnchorElement> = (event) => {
    onFocus?.(event)

    if (!route) {
      return
    }

    handlePrefetch()
  }

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      {...props}
    />
  )
}
