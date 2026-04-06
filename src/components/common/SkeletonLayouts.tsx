import SectionContainer from '@/components/common/SectionContainer'
import {
  SkeletonBadge,
  SkeletonBlock,
  SkeletonButton,
  SkeletonCard,
  SkeletonText,
} from '@/components/common/Skeleton'

function SkeletonSectionTitle({ centered = false }: { centered?: boolean }) {
  return (
    <div className={centered ? 'flex flex-col items-start lg:items-center' : 'flex flex-col items-start'}>
      <SkeletonBadge className="mb-5" />
      <SkeletonBlock className="mb-4 h-12 w-full max-w-[26rem] rounded-[24px]" />
      <SkeletonBlock className="mb-4 h-12 w-full max-w-[20rem] rounded-[24px]" />
      <SkeletonText className="max-w-[36rem]" widths={['100%', '88%', '62%']} />
    </div>
  )
}

export function HeroSkeleton() {
  return (
    <section className="relative overflow-hidden bg-[#F7F8F8] pt-32 pb-16 lg:min-h-[80vh] lg:pt-[164px] lg:pb-24 dark:bg-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-8%] hidden h-[32rem] w-[32rem] rounded-full bg-blue-200/30 blur-[120px] lg:block dark:bg-blue-600/10" />
        <div className="absolute right-[-6%] bottom-[-8%] hidden h-[26rem] w-[26rem] rounded-full bg-cyan-200/25 blur-[120px] lg:block dark:bg-cyan-600/10" />
        <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <SectionContainer className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <SkeletonBadge className="mb-5" />
          <SkeletonBlock className="mb-4 h-14 w-full max-w-[32rem] rounded-[28px]" />
          <SkeletonBlock className="mb-4 h-14 w-full max-w-[27rem] rounded-[28px]" />
          <SkeletonBlock className="mb-6 h-14 w-full max-w-[22rem] rounded-[28px]" />
          <SkeletonText className="mb-8 max-w-[34rem]" widths={['100%', '92%', '74%']} />
          <div className="flex flex-col gap-4 sm:flex-row">
            <SkeletonButton />
            <SkeletonButton className="w-36" />
          </div>
        </div>

        <div className="relative hidden min-h-[30rem] flex-1 lg:block">
          <SkeletonCard className="absolute top-2 left-0 w-[15rem] rotate-[-8deg]">
            <SkeletonBlock className="mb-4 h-5 w-28 rounded-full" />
            <SkeletonBlock className="mb-6 h-10 w-36 rounded-[18px]" />
            <div className="flex h-24 items-end gap-2">
              <SkeletonBlock className="h-[42%] flex-1 rounded-t-[10px] rounded-b-md" />
              <SkeletonBlock className="h-[58%] flex-1 rounded-t-[10px] rounded-b-md" />
              <SkeletonBlock className="h-[86%] flex-1 rounded-t-[10px] rounded-b-md" />
              <SkeletonBlock className="h-[68%] flex-1 rounded-t-[10px] rounded-b-md" />
              <SkeletonBlock className="h-full flex-1 rounded-t-[10px] rounded-b-md" />
            </div>
          </SkeletonCard>

          <SkeletonCard className="absolute top-14 right-6 w-[22rem] rounded-[28px] p-6">
            <SkeletonBlock className="mb-4 h-5 w-40 rounded-full" />
            <SkeletonBlock className="mb-3 h-10 w-52 rounded-[20px]" />
            <SkeletonText className="mb-6" widths={['100%', '84%']} lines={2} />
            <div className="grid grid-cols-2 gap-4">
              <SkeletonBlock className="h-24 rounded-[20px]" />
              <SkeletonBlock className="h-24 rounded-[20px]" />
              <SkeletonBlock className="h-28 rounded-[20px]" />
              <SkeletonBlock className="h-28 rounded-[20px]" />
            </div>
          </SkeletonCard>

          <SkeletonCard className="absolute right-0 bottom-0 w-[12.5rem] rotate-[10deg]">
            <SkeletonBlock className="mb-4 h-4 w-24 rounded-full" />
            <SkeletonBlock className="mb-4 h-8 w-20 rounded-[16px]" />
            <SkeletonBlock className="mb-3 h-10 w-full rounded-[16px]" />
            <SkeletonBlock className="h-10 w-full rounded-[16px]" />
          </SkeletonCard>
        </div>
      </SectionContainer>
    </section>
  )
}

export function ContentGridSkeleton({
  variant = 'cards',
}: {
  variant?: 'cards' | 'split' | 'about-grid' | 'contact'
}) {
  if (variant === 'split') {
    return (
      <section className="bg-white py-16 lg:py-24 dark:bg-slate-950">
        <SectionContainer>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SkeletonSectionTitle />
              <SkeletonButton className="mt-8 hidden lg:block" />
            </div>
            <div className="lg:col-span-7 space-y-8">
              {Array.from({ length: 3 }).map((_, index) => (
                <SkeletonCard key={index} className="p-6 lg:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <SkeletonBlock className="h-8 w-14 rounded-full" />
                    <SkeletonBlock className="h-11 w-11 rounded-2xl" />
                  </div>
                  <SkeletonBlock className="mb-4 h-9 w-56 rounded-[20px]" />
                  <SkeletonText className="mb-6" widths={['100%', '90%', '75%']} />
                  <div className="space-y-3">
                    {Array.from({ length: 4 }).map((__, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        <SkeletonBlock className="h-5 w-5 rounded-full" />
                        <SkeletonBlock className="h-4 w-full max-w-[22rem] rounded-full" />
                      </div>
                    ))}
                  </div>
                </SkeletonCard>
              ))}
            </div>
          </div>
        </SectionContainer>
      </section>
    )
  }

  if (variant === 'about-grid') {
    return (
      <section className="bg-[#F7F8F8] pb-16 dark:bg-slate-950 lg:pb-24">
        <SectionContainer>
          <div className="grid grid-cols-1 gap-x-12 gap-y-12 lg:grid-cols-3 lg:gap-x-16">
            <div className="lg:pr-8">
              <SkeletonBlock className="mb-8 h-[3px] w-full rounded-full" />
              <SkeletonBadge className="mb-6 w-28" />
              <SkeletonBlock className="mb-4 h-10 w-full rounded-[22px]" />
              <SkeletonBlock className="mb-4 h-10 w-[88%] rounded-[22px]" />
              <SkeletonBlock className="h-10 w-[72%] rounded-[22px]" />
            </div>
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-20 lg:gap-x-16">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index}>
                    <SkeletonBlock className="mb-8 h-[3px] w-full rounded-full" />
                    <SkeletonBadge className="mb-6 w-24" />
                    <SkeletonText widths={['100%', '92%', '78%', '58%']} lines={4} />
                  </div>
                ))}
                <div>
                  <SkeletonCard className="h-[265px] overflow-hidden p-0">
                    <div className="relative h-full w-full">
                      <SkeletonBlock className="absolute inset-0 rounded-[24px]" />
                      <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-3 rounded-2xl border border-white/30 bg-white/65 p-4 dark:border-slate-700/50 dark:bg-slate-900/65">
                        {Array.from({ length: 3 }).map((_, index) => (
                          <div key={index}>
                            <SkeletonBlock className="mx-auto mb-2 h-5 w-12 rounded-full" />
                            <SkeletonBlock className="mx-auto h-3 w-16 rounded-full" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </SkeletonCard>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </section>
    )
  }

  if (variant === 'contact') {
    return (
      <section className="bg-slate-50 py-16 dark:bg-slate-950 lg:py-24">
        <SectionContainer>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div className="space-y-5">
              <SkeletonSectionTitle />
              <SkeletonCard className="p-6">
                <SkeletonBlock className="mb-6 h-14 w-14 rounded-2xl" />
                <SkeletonBlock className="mb-4 h-9 w-40 rounded-[18px]" />
                <SkeletonText widths={['100%', '82%']} lines={2} />
              </SkeletonCard>
            </div>
            <div className="space-y-5">
              {Array.from({ length: 2 }).map((_, index) => (
                <SkeletonCard key={index} className="p-6">
                  <SkeletonBlock className="mb-6 h-14 w-14 rounded-2xl" />
                  <SkeletonBlock className="mb-4 h-9 w-36 rounded-[18px]" />
                  <SkeletonText widths={['88%', '72%']} lines={2} />
                </SkeletonCard>
              ))}
            </div>
            <SkeletonCard className="min-h-[26rem] overflow-hidden border-transparent bg-blue-600/90 p-6 dark:bg-blue-600/75">
              <SkeletonBadge className="mb-6 w-28 bg-white/20 dark:bg-white/10" />
              <SkeletonBlock className="mb-4 h-9 w-52 rounded-[20px] bg-white/20 dark:bg-white/10" />
              <SkeletonText
                className="mb-8"
                widths={['100%', '84%']}
                lines={2}
                lineClassName="bg-white/20 dark:bg-white/10"
              />
              <div className="mt-auto space-y-3">
                <SkeletonBlock className="h-12 w-full rounded-full bg-white/25 dark:bg-white/10" />
                <SkeletonBlock className="h-12 w-full rounded-full bg-white/18 dark:bg-white/10" />
              </div>
            </SkeletonCard>
          </div>
          <SkeletonCard className="mt-16 overflow-hidden p-0">
            <div className="relative aspect-[16/8] min-h-[18rem] w-full">
              <SkeletonBlock className="absolute inset-0 rounded-[24px]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-70 dark:opacity-30" />
            </div>
          </SkeletonCard>
        </SectionContainer>
      </section>
    )
  }

  return (
    <section className="bg-white py-16 lg:py-24 dark:bg-slate-950">
      <SectionContainer>
        <SkeletonSectionTitle centered />
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <SkeletonCard key={index} className="min-h-[22rem] p-6">
              <SkeletonBlock className="mb-6 h-40 w-full rounded-[20px]" />
              <SkeletonBlock className="mb-4 h-8 w-3/4 rounded-[18px]" />
              <SkeletonText widths={['100%', '90%', '70%']} />
            </SkeletonCard>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export function PricingTableSkeleton({
  withHeader = true,
  compact = false,
}: {
  withHeader?: boolean
  compact?: boolean
}) {
  return (
    <section className="relative overflow-clip bg-white py-16 dark:bg-slate-950 lg:py-24">
      <SectionContainer className="relative z-10">
        {withHeader ? (
          <div className="mb-16 flex flex-col items-start lg:items-center">
            <SkeletonBadge className="mb-5" />
            <SkeletonBlock className="mb-4 h-12 w-full max-w-[34rem] rounded-[24px]" />
            <SkeletonBlock className="h-12 w-full max-w-[26rem] rounded-[24px]" />
          </div>
        ) : null}

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-[22%_1fr_1fr] lg:gap-8">
            <div className="hidden md:flex items-end pb-8">
              <SkeletonBlock className="h-5 w-28 rounded-full" />
            </div>
            {Array.from({ length: 2 }).map((_, index) => (
              <SkeletonCard
                key={index}
                className={index === 1 ? 'overflow-hidden border-blue-400/20 bg-slate-950 p-6 dark:bg-slate-900' : 'p-6'}
              >
                {index === 1 ? <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_40%)]" /> : null}
                <div className="relative">
                  <SkeletonBlock className={index === 1 ? 'mb-4 h-8 w-24 rounded-full bg-white/15 dark:bg-white/10' : 'mb-4 h-8 w-24 rounded-full'} />
                  <SkeletonBlock className={index === 1 ? 'mb-3 h-10 w-32 rounded-[18px] bg-white/15 dark:bg-white/10' : 'mb-3 h-10 w-32 rounded-[18px]'} />
                  <SkeletonText
                    className="mb-8"
                    widths={['100%', '78%']}
                    lines={2}
                    lineClassName={index === 1 ? 'bg-white/15 dark:bg-white/10' : ''}
                  />
                  <SkeletonBlock className={index === 1 ? 'h-12 w-full rounded-full bg-white/15 dark:bg-white/10' : 'h-12 w-full rounded-full'} />
                </div>
              </SkeletonCard>
            ))}
          </div>

          {!compact ? (
            <div className="mt-6 hidden md:block">
              {Array.from({ length: 6 }).map((_, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-[22%_1fr_1fr] items-center gap-8 border-b border-slate-100/70 px-6 py-6 dark:border-slate-800/70">
                  <SkeletonBlock className="h-4 w-[70%] rounded-full" />
                  <div className="flex justify-center">
                    <SkeletonBlock className="h-5 w-24 rounded-full" />
                  </div>
                  <div className="flex justify-center">
                    <SkeletonBlock className="h-5 w-24 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-8 space-y-4 md:hidden">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} className="p-5">
                <SkeletonBlock className="mb-4 h-5 w-32 rounded-full" />
                <SkeletonText widths={['100%', '85%']} lines={2} />
              </SkeletonCard>
            ))}
          </div>
        </div>
      </SectionContainer>
      <div className="pointer-events-none absolute top-1/2 left-0 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-[120px] dark:bg-blue-600/10" />
    </section>
  )
}

export function FAQSkeleton({
  rows = 5,
  centered = true,
}: {
  rows?: number
  centered?: boolean
}) {
  return (
    <section className="bg-[#F7F8F8] py-16 dark:bg-slate-950 lg:py-24">
      <SectionContainer>
        <SkeletonSectionTitle centered={centered} />
        <div className="mt-12 space-y-4">
          {Array.from({ length: rows }).map((_, index) => (
            <SkeletonCard key={index} className="rounded-[20px] p-5 lg:p-6">
              <div className="flex items-center justify-between gap-4">
                <SkeletonBlock className="h-6 w-[72%] rounded-full" />
                <SkeletonBlock className="h-8 w-8 rounded-full" />
              </div>
              {index === 0 ? <SkeletonText className="mt-4 max-w-[42rem]" widths={['100%', '88%', '64%']} /> : null}
            </SkeletonCard>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}

export function RouteSkeleton() {
  return (
    <div className="bg-[#F7F8F8] text-gray-900 dark:bg-slate-950 dark:text-white">
      <HeroSkeleton />
      <ContentGridSkeleton variant="split" />
      <PricingTableSkeleton />
      <FAQSkeleton />
    </div>
  )
}

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
