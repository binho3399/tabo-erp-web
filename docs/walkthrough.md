# Báo Cáo Tiến Độ - Dự Án Tabo ERP Web

## 1. Yêu Cầu Tổng Quan
- **Mục tiêu**: Website marketing Tabo ERP với hệ thống blog tĩnh từ dữ liệu mock.
- **Stack chính**:
  - Web app: `React 19 + Vite + TypeScript + Tailwind CSS`.
- **Ngôn ngữ giao diện**: 100% tiếng Việt cho website marketing.

## 2. Trạng thái hiện tại

### Web app (marketing)
- Đã hoàn thiện các trang chính: Home, Pricing, About, Contact.
- Blog route đang hoạt động với prerender (`/blog`, `/blog/:slug`, `/blog/category/:slug`).
- Build pipeline prerender blog tĩnh từ dữ liệu nội bộ trong `src/lib/blog/mock.ts`.

## 3. Ghi chú vận hành nhanh
- Chạy web: `pnpm dev`.

## 4. Các việc còn lại đề xuất
- Mở rộng nội dung trong `src/lib/blog/mock.ts` theo kế hoạch SEO.
- Kiểm tra e2e: cập nhật bài mock -> hiển thị tại website blog -> build prerender.
