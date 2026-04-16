import SectionContainer from '@/components/common/SectionContainer'
import {
  SkeletonBadge,
  SkeletonBlock,
  SkeletonButton,
  SkeletonText,
} from '@/components/common/Skeleton'

export function HeaderSkeleton() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/70 bg-white/92 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/88">
      <SectionContainer className="flex h-[76px] items-center">
        <div className="flex flex-1 items-center">
          <SkeletonBlock className="h-10 w-32 rounded-[14px]" />
        </div>
        <div className="hidden items-center gap-5 lg:flex">
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonBlock key={index} className="h-4 w-20 rounded-full" />
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-4">
          <SkeletonBlock className="hidden h-10 w-10 rounded-2xl lg:block" />
          <SkeletonButton className="hidden h-11 w-36 lg:block" />
          <SkeletonBlock className="h-10 w-10 rounded-2xl lg:hidden" />
          <SkeletonBlock className="h-10 w-10 rounded-2xl lg:hidden" />
        </div>
      </SectionContainer>
    </header>
  )
}

export function CTASkeleton() {
  return (
    <section className="overflow-hidden border-t border-white/5 bg-[#020617] py-16 text-white lg:pt-24 lg:pb-32">
      <SectionContainer>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-end">
          <div>
            <SkeletonBadge className="mb-5 w-36 bg-white/10 dark:bg-white/10" />
            <SkeletonBlock className="mb-4 h-12 w-full max-w-[32rem] rounded-[24px] bg-white/12 dark:bg-white/10" />
            <SkeletonBlock className="mb-5 h-12 w-full max-w-[24rem] rounded-[24px] bg-white/12 dark:bg-white/10" />
            <SkeletonText
              className="max-w-[34rem]"
              widths={['100%', '88%', '68%']}
              lineClassName="bg-white/10 dark:bg-white/10"
            />
          </div>
          <div className="w-full max-w-lg space-y-6 lg:ml-auto">
            {Array.from({ length: 2 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4 rounded-[20px] border border-white/8 bg-white/5 p-4 md:gap-8">
                <SkeletonBlock className="h-14 w-14 rounded-xl bg-white/12 dark:bg-white/10 md:h-16 md:w-16" />
                <div className="w-full">
                  <SkeletonBlock className="mb-3 h-3 w-28 rounded-full bg-white/12 dark:bg-white/10" />
                  <SkeletonBlock className="h-8 w-[14rem] rounded-[18px] bg-white/12 dark:bg-white/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}

export function FooterSkeleton() {
  return (
    <footer className="relative overflow-hidden bg-[#020408] pt-16 pb-6 text-gray-500 dark:bg-slate-950 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-full w-1/3 bg-blue-600/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-full w-1/4 bg-blue-900/10 blur-[100px]" />
      </div>
      <SectionContainer className="relative z-10">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <SkeletonBlock className="h-11 w-32 rounded-[14px] bg-white/10 dark:bg-white/8" />
          <div className="grid w-full grid-cols-2 gap-4 md:flex md:w-auto md:gap-x-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <SkeletonBlock key={index} className="h-4 w-20 rounded-full bg-white/10 dark:bg-white/8" />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-8 md:flex-row md:items-center">
          <SkeletonBlock className="h-4 w-52 rounded-full bg-white/10 dark:bg-white/8" />
          <div className="grid w-full grid-cols-2 gap-4 md:flex md:w-auto md:gap-6">
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonBlock key={index} className="h-4 w-24 rounded-full bg-white/10 dark:bg-white/8" />
            ))}
          </div>
        </div>
      </SectionContainer>
    </footer>
  )
}
