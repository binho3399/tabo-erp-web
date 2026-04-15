# Báo Cáo Tiến Độ - Dự Án Tabo ERP Web + CMS

## 1. Yêu Cầu Tổng Quan
- **Mục tiêu**: Website marketing Tabo ERP kết hợp CMS để quản lý nội dung Tin tức.
- **Stack chính**:
  - Web app: `React 19 + Vite + TypeScript + Tailwind CSS`.
  - CMS app: `Payload v3 + Next.js App Router + Supabase Postgres`.
- **Ngôn ngữ giao diện**: 100% tiếng Việt cho website marketing.

## 2. Trạng thái hiện tại

### Web app (marketing)
- Đã hoàn thiện các trang chính: Home, Pricing, About, Contact.
- Blog route đang hoạt động với prerender (`/blog`, `/blog/:slug`, `/blog/category/:slug`).
- Build pipeline có `blog:sync` để lấy snapshot blog từ Payload khi `BLOG_SOURCE=payload`.

### CMS app (nội dung Tin tức)
- Đã tách app riêng tại `apps/cms`.
- Đã chuyển runtime về chuẩn Payload v3 (Next.js) để dùng được:
  - Admin UI: `/admin`
  - API: `/api/*`
- Đã có collections nền tảng: `users`, `authors`, `categories`, `media`, `posts`.
- Đã có script seed từ mock blog sang Payload: `pnpm cms:seed`.

## 3. Ghi chú vận hành nhanh
- Chạy web: `pnpm dev`.
- Chạy CMS: `pnpm cms:dev` (mặc định port `3001`).
- CMS env local: `apps/cms/.env` cần `PAYLOAD_SECRET` + `DATABASE_URL`.
- Với Supabase pooler local, có thể cần:
  - `uselibpqcompat=true&sslmode=require` trong `DATABASE_URL`.

## 4. Các việc còn lại đề xuất
- Seed dữ liệu blog ban đầu vào CMS và kiểm tra slug/category mapping.
- Tạo user admin đầu tiên và xác nhận luồng publish.
- Kiểm tra e2e: tạo bài trong CMS -> hiển thị tại website blog -> build prerender.
