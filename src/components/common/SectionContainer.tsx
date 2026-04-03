import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type SectionContainerProps<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>

export default function SectionContainer<T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: SectionContainerProps<T>) {
  const Component = as ?? 'div'

  return (
    <Component className={`section-container ${className}`.trim()} {...props}>
      {children}
    </Component>
  )
}
