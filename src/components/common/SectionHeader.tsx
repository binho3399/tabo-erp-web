import type { ReactNode } from 'react'

import { Badge } from '@/components/ui'

interface SectionHeaderProps {
  badge?: string
  title: ReactNode
  description?: ReactNode
  centered?: boolean
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  className = '',
  titleClassName = '',
  descriptionClassName = '',
}: SectionHeaderProps) {
  const alignmentClass = centered ? 'items-start text-left lg:items-center lg:text-center' : 'items-start text-left'

  return (
    <div className={`section-header ${alignmentClass} ${className}`.trim()}>
      {badge ? <Badge variant="primary" className="section-kicker">{badge}</Badge> : null}
      <h2 className={`section-title ${titleClassName}`.trim()}>{title}</h2>
      {description ? (
        <p className={`section-description ${descriptionClassName}`.trim()}>{description}</p>
      ) : null}
    </div>
  )
}
