import { Icon } from '@/components/ui'
import type { SectorItem } from '@/types/landing'

function SectorTickerGroup({ items }: { items: SectorItem[] }) {
  return (
    <div className="flex shrink-0 whitespace-nowrap gap-4 pr-4">
      {items.map((sector) => (
        <div
          key={sector.name}
          className="flex shrink-0 items-center gap-3 rounded-full border border-slate-100 bg-white px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <Icon name={sector.icon} className="text-lg text-blue-500 dark:text-blue-400" />
          <span className="text-[13px] font-medium text-slate-700 dark:text-slate-300">{sector.name}</span>
        </div>
      ))}
    </div>
  )
}

export function SectorTicker({
  items,
  reverse,
  isActive,
}: {
  items: SectorItem[]
  reverse?: boolean
  isActive: boolean
}) {
  return (
    <div
      className={`motion-gated flex w-max animate-marquee whitespace-nowrap ${reverse ? 'flex-row-reverse' : ''}`}
      style={
        reverse
          ? { animationDirection: 'reverse', animationDuration: '80s', animationPlayState: isActive ? 'running' : 'paused' }
          : { animationDuration: '80s', animationPlayState: isActive ? 'running' : 'paused' }
      }
    >
      <SectorTickerGroup items={items} />
      <SectorTickerGroup items={items} />
    </div>
  )
}
