import { Button, Icon } from '@/components/ui'
import { usePageMetadata } from '@/components/seo/usePageMetadata'
import { buildNotFoundMetadata } from '@/lib/blog/seo'

export default function NotFound() {
  usePageMetadata(buildNotFoundMetadata())

  return (
    <div className="w-full bg-[#F5F7FB] font-sans text-slate-900">
      <div className="h-full w-full rounded-[20px] border border-slate-200/80 bg-white shadow-[0_25px_90px_-50px_rgba(15,23,42,0.45)]">
        <div className="flex items-center justify-center rounded-[20px] bg-[radial-gradient(#d7dfeb_0.9px,transparent_0.9px)] bg-[size:14px_14px] px-6 py-[128px] md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h1 className="mb-4 text-[44px] font-semibold tracking-tight leading-[1.05] text-slate-900 md:text-[64px]">
              <span>Rất tiếc, </span>
              <span className="text-slate-400">có vẻ như</span>
              <br />
              <span className="text-slate-400">không có gì ở đây</span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-500">
              Trang bạn tìm hiện không tồn tại hoặc đã được di chuyển. Bạn có thể quay lại trang chính để tiếp tục thao tác.
            </p>
            <div className="mt-10">
              <Button
                to="/"
                size="lg"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-3 text-base font-medium text-white shadow-[0_16px_30px_-14px_rgba(37,99,235,0.9)] transition-all duration-500 ease-out hover:bg-blue-500"
              >
                <Icon name="home" className="text-[18px]" />
                Truy cập trang chủ
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
