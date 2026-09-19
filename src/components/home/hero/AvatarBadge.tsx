export function AvatarBadge({
  initials,
  className,
  sizeClassName,
}: {
  initials: string
  className: string
  sizeClassName: string
}) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full border border-[#1A1A1A] font-semibold tracking-[0.08em] dark:border-slate-900 ${className} ${sizeClassName}`}
    >
      {initials}
    </span>
  )
}
