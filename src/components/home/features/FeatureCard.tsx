import { Icon } from '@/components/ui'
import type { FeatureItem } from '@/types/landing'

const colorClassByKey: Record<string, string> = {
  blue: 'bg-blue-50 text-blue-500 dark:bg-blue-900/30 dark:text-blue-400',
  orange: 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
  emerald: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400',
  purple: 'bg-purple-50 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
  pink: 'bg-pink-50 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400',
  cyan: 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-400',
  red: 'bg-red-50 text-red-600 dark:bg-red-900/30 dark:text-red-400',
  teal: 'bg-teal-50 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400',
  indigo: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400',
  amber: 'bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400',
}

export function FeatureCard({ item }: { item: FeatureItem }) {
  return (
    <div className="group flex shrink-0 cursor-default items-center gap-3 rounded-full border border-transparent bg-white py-2 pr-6 pl-2 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900">
      <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClassByKey[item.color]}`}>
        <Icon name={item.icon} className="text-xl" />
      </div>
      <div>
        <h4 className="text-[13px] leading-tight font-normal text-slate-800 dark:text-slate-200">{item.name}</h4>
        <p className="mt-0.5 text-[10px] text-slate-400 dark:text-slate-500">{item.desc}</p>
      </div>
    </div>
  )
}
