import type { CSSProperties } from 'react'

type SkeletonBlockProps = {
  className?: string
  style?: CSSProperties
  animated?: boolean
}

type SkeletonTextProps = SkeletonBlockProps & {
  lines?: number
  widths?: string[]
  lineClassName?: string
}

type SkeletonCardProps = SkeletonBlockProps & {
  children?: React.ReactNode
}

function cx(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(' ')
}

export function SkeletonBlock({
  className = '',
  style,
  animated = true,
}: SkeletonBlockProps) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        'skeleton-block rounded-[18px]',
        animated && 'skeleton-animated',
        className,
      )}
      style={style}
    />
  )
}

export function SkeletonText({
  lines = 3,
  widths,
  className = '',
  lineClassName = '',
  animated = true,
}: SkeletonTextProps) {
  return (
    <div aria-hidden="true" className={cx('flex flex-col gap-3', className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonBlock
          key={index}
          animated={animated}
          className={cx(
            'h-4 rounded-full',
            index === lines - 1 ? 'max-w-[78%]' : 'w-full',
            lineClassName,
          )}
          style={widths?.[index] ? { width: widths[index] } : undefined}
        />
      ))}
    </div>
  )
}

export function SkeletonBadge({ className = '', animated = true }: SkeletonBlockProps) {
  return <SkeletonBlock animated={animated} className={cx('h-8 w-32 rounded-full', className)} />
}

export function SkeletonButton({ className = '', animated = true }: SkeletonBlockProps) {
  return <SkeletonBlock animated={animated} className={cx('h-12 w-40 rounded-full', className)} />
}

export function SkeletonCard({
  className = '',
  animated = true,
  children,
}: SkeletonCardProps) {
  return (
    <div
      aria-hidden="true"
      className={cx(
        'rounded-[24px] border border-slate-200/70 bg-white/90 p-5 shadow-[0_10px_30px_-20px_rgba(15,23,42,0.25)] dark:border-slate-800 dark:bg-slate-900/90',
        className,
      )}
    >
      {children ?? <SkeletonBlock animated={animated} className={cx('h-40 w-full rounded-[20px]', animated && 'skeleton-animated')} />}
    </div>
  )
}

