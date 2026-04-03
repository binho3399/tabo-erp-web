import type { FocusEventHandler, MouseEventHandler, TouchEventHandler } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

import { prefetchRoute } from '@/lib/route-prefetch'

function callAll<T>(...handlers: Array<((event: T) => void) | undefined>) {
  return (event: T) => {
    handlers.forEach((handler) => handler?.(event))
  }
}

export default function PrefetchLink({
  to,
  onMouseEnter,
  onFocus,
  onTouchStart,
  ...props
}: LinkProps) {
  const route = typeof to === 'string' ? to : to.pathname ?? ''
  const handlePrefetch = () => prefetchRoute(route)
  const handleMouseEnter: MouseEventHandler<HTMLAnchorElement> = (event) => {
    onMouseEnter?.(event)
    handlePrefetch()
  }
  const handleFocus: FocusEventHandler<HTMLAnchorElement> = (event) => {
    onFocus?.(event)
    handlePrefetch()
  }
  const handleTouchStart: TouchEventHandler<HTMLAnchorElement> = (event) => {
    onTouchStart?.(event)
    handlePrefetch()
  }

  return (
    <Link
      to={to}
      onMouseEnter={callAll(handleMouseEnter)}
      onFocus={callAll(handleFocus)}
      onTouchStart={callAll(handleTouchStart)}
      {...props}
    />
  )
}
