import { Button, Badge } from '@/components/ui'
import { usePageMetadata } from '@/components/seo/usePageMetadata'
import { buildNotFoundMetadata } from '@/lib/blog/seo'

export default function NotFound() {
  usePageMetadata(buildNotFoundMetadata())

  return (
    <div className="bg-[#F7F8F8] px-4 pb-16 pt-32 font-sans text-gray-900 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8 lg:pb-24 lg:pt-40">
      <div className="mx-auto max-w-4xl rounded-[24px] border border-slate-100 bg-white p-6 text-center shadow-[0_28px_90px_-60px_rgba(15,23,42,0.55)] dark:border-slate-800 dark:bg-slate-900 md:p-8 lg:p-10">
        <Badge variant="primary" className="mb-4 md:mb-5">
          404
        </Badge>
        <h1 className="mb-4 text-[28px] font-normal tracking-tight leading-[1.15] text-slate-900 dark:text-white md:mb-5 md:text-4xl">
          Trang nay khong ton tai trong he thong Tabo ERP.
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
          Hay quay lai trang chu hoac vao Blog de tiep tuc kham pha cac tai nguyen ve ERP, ton kho va dieu hanh doanh nghiep.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            Ve trang chu
          </Button>
          <Button to="/blog" variant="outline" size="lg">
            Xem Blog
          </Button>
        </div>
      </div>
    </div>
  )
}
