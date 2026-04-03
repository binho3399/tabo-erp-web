import { type ReactNode, useEffect, useRef, useState } from 'react'

interface DeferredSectionProps {
  children: ReactNode
  fallback?: ReactNode
  className?: string
  minHeight?: number
  rootMargin?: string
}

export default function DeferredSection({
  children,
  fallback,
  className = '',
  minHeight = 320,
  rootMargin = '300px 0px',
}: DeferredSectionProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    const node = containerRef.current
    if (!node || shouldRender) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldRender(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [rootMargin, shouldRender])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ minHeight: shouldRender ? undefined : `${minHeight}px` }}
    >
      {shouldRender ? children : fallback}
    </div>
  )
}
