import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type SurfaceCardProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
  interactive?: boolean
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export default function SurfaceCard<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  interactive = true,
  ...props
}: SurfaceCardProps<T>) {
  const Component = as ?? 'div'
  const interactiveClass = interactive ? 'surface-card-interactive' : ''

  return (
    <Component className={`surface-card ${interactiveClass} ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
