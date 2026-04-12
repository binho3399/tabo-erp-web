import { useEffect, useRef, useState } from 'react'

interface ViewportActivityOptions extends IntersectionObserverInit {
  disabled?: boolean
}

export function useViewportActivity<T extends Element>({
  root = null,
  rootMargin = '180px 0px',
  threshold = 0.05,
  disabled = false,
}: ViewportActivityOptions = {}) {
  const ref = useRef<T | null>(null)
  const [isActive, setIsActive] = useState(disabled)

  useEffect(() => {
    if (disabled) {
      setIsActive(true)
      return
    }

    const element = ref.current

    if (!element) {
      return
    }

    if (typeof IntersectionObserver === 'undefined') {
      setIsActive(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting || entry.intersectionRatio > 0)
      },
      { root, rootMargin, threshold },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [disabled, root, rootMargin, threshold])

  return { ref, isActive }
}
