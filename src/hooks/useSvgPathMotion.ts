import { type RefObject, useLayoutEffect } from 'react'

/**
 * Drives an SVG <g> along a path (same idea as SMIL animateMotion) without SMIL.
 * Chrome and other browsers can leave <animateMotion> frozen after SPA remount; this stays in sync.
 */
export function useSvgPathMotion(
  pathRef: RefObject<SVGPathElement | null>,
  gRef: RefObject<SVGGElement | null>,
  options: {
    durationSec: number
    /** Seconds already elapsed into the loop at mount (matches SMIL `begin="-Xs"` with X here). */
    phaseSec?: number
    rotateAuto?: boolean
    enabled?: boolean
  },
): void {
  const { durationSec, phaseSec = 0, rotateAuto = false, enabled = true } = options

  useLayoutEffect(() => {
    if (!enabled) {
      return
    }

    const path = pathRef.current
    const g = gRef.current
    if (!path || !g) {
      return
    }

    const length = path.getTotalLength()
    if (!Number.isFinite(length) || length <= 0) {
      return
    }

    const startMs = performance.now() - phaseSec * 1000
    let raf = 0

    const apply = (now: number) => {
      const elapsedSec = (now - startMs) / 1000
      const u = ((((elapsedSec % durationSec) + durationSec) % durationSec) / durationSec)
      const dist = u * length
      const p = path.getPointAtLength(dist)

      let angleDeg = 0
      if (rotateAuto) {
        const lookAhead = Math.min(4, length * 0.006)
        const dist2 = dist + lookAhead > length ? lookAhead : dist + lookAhead
        const p2 = path.getPointAtLength(dist2)
        angleDeg = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI
      }

      g.setAttribute('transform', `translate(${p.x}, ${p.y}) rotate(${angleDeg})`)
    }

    apply(performance.now())

    const tick = (now: number) => {
      apply(now)
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationSec, phaseSec, rotateAuto, enabled])
}
