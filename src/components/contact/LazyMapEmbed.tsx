import { useEffect, useRef, useState } from 'react'

import { siteMetadata } from '@/config/site'

const mapSrc =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.657512140884!2d106.7118225554199!3d10.798492000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528a45fe27d85%3A0xc4eb0a6cf64ac19b!2sLandmark%2081!5e0!3m2!1svi!2s!4v1714032174360!5m2!1svi!2s'

export default function LazyMapEmbed() {
  const [shouldLoadMap, setShouldLoadMap] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = containerRef.current
    if (!node || shouldLoadMap) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShouldLoadMap(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [shouldLoadMap])

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] md:h-[500px] bg-slate-200 dark:bg-slate-800 rounded-[20px] overflow-hidden relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-slate-200 dark:border-slate-800 transition-colors"
    >
      {shouldLoadMap ? (
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full grayscale-[20%] dark:grayscale-[30%] contrast-125 hover:grayscale-0 transition-all duration-500 cursor-pointer"
          title="Tabo ERP Location"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0.1),rgba(15,23,42,0.3))] p-6 md:p-8">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Bản đồ văn phòng
            </p>
            <h3 className="mt-3 text-2xl font-medium text-slate-900 dark:text-white">
              Landmark 81, Binh Thanh
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              {siteMetadata.address}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Bản đồ chỉ được tải khi khung này đi vào viewport để giảm chi phí load ban đầu.
            </p>
            <button
              type="button"
              onClick={() => setShouldLoadMap(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100"
            >
              Tải bản đồ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
