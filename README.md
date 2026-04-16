# Tabo ERP Web

Website marketing cho Tabo ERP, xây bằng `React 19 + Vite + TypeScript + Tailwind CSS`.

## Project URLs

- Marketing website (local): `http://localhost:5173`
- Marketing website (Vercel/production): `https://tabo.vn`
- CMS app (local): `http://localhost:3001`
- CMS app (Vercel/production): `https://<your-cms-project>.vercel.app`
- CMS admin (local): `http://localhost:3001/admin`
- CMS API (local): `http://localhost:3001/api/*`

## Yêu cầu môi trường

- `Node.js >= 20.19.0`
- `pnpm@10.19.0`

Repo có file [.nvmrc](/Users/macbook/Documents/Tabo%20ERP/.nvmrc) để đồng bộ version Node giữa các máy.

## Scripts

- `pnpm dev`: chạy local dev server.
- `pnpm build`: build production và kiểm tra budget của entry bundle.
- `pnpm build:app`: build production, prerender Blog và sinh `sitemap.xml`/`robots.txt`, không chạy bundle budget check.
- `pnpm lint`: chạy ESLint với type-aware rules.
- `pnpm preview`: preview bản build.
- `pnpm blog:sync`: đồng bộ snapshot dữ liệu blog từ Payload về web app (khi `BLOG_SOURCE=payload`).
- `pnpm cms:dev`: chạy Payload CMS app tại `apps/cms` (Next.js runtime).
- `pnpm cms:build`: generate import map + types và build CMS app.
- `pnpm cms:seed`: import dữ liệu blog mock hiện tại vào Payload.

## Kiến trúc chính

- `src/pages/`: route-level pages, chỉ chịu trách nhiệm compose.
- `src/components/`: UI sections và reusable components.
- `src/config/site.ts`: route metadata, navigation, SEO cơ bản, contact metadata.
- `src/config/routes.ts`: route registry cho navigation, client lazy routes và prefetch.
- `src/content/`: nội dung typed cho các section có tính marketing.
- `src/lib/blog/`: adapter dữ liệu blog, mock source và helper SEO cho bài viết.
- `apps/cms/`: ứng dụng Payload CMS (admin + API) dùng Postgres/Supabase.
- `src/lib/route-prefetch.ts`: prefetch route modules khi hover/focus link nội bộ.

Sơ đồ chi tiết nằm trong [ARCHITECTURE.md](/Users/macbook/Documents/Tabo%20ERP/ARCHITECTURE.md).

## Checklist hiệu năng hiện tại

- Route-level lazy loading cho các page chính.
- Section-level lazy loading cho phần dưới fold của Home/Pricing.
- Không dùng Google-hosted fonts hoặc Material Symbols trong critical path.
- Prefetch module cho internal routes ở navigation và buttons dùng router links.
- Google Maps chỉ tải khi section đi vào viewport.
- Build có bundle budget check cho entry JS/CSS.
- HTTP cache đã được cấu hình trong `vercel.json` và `public/_headers`:
  HTML cache ngắn với `must-revalidate`, static assets cache dài hạn với `immutable`.
- Blog được prerender ra HTML tĩnh cho `/blog` và từng `/blog/:slug`; build cũng sinh `sitemap.xml` và `robots.txt`.
- Khi `BLOG_SOURCE=payload`, bước build sẽ chạy `blog:sync` để lấy dữ liệu blog từ Payload API trước khi prerender.

## Ghi chú vận hành

- CMS admin mặc định chạy tại `http://localhost:3001/admin`; REST API nằm dưới `http://localhost:3001/api/*`.
- File env local của CMS là `apps/cms/.env`; bắt buộc có `DATABASE_URL` (Supabase/Postgres) và `PAYLOAD_SECRET`.
- Với Supabase Pooler, ưu tiên thêm `uselibpqcompat=true&sslmode=require` trong `DATABASE_URL` để tránh lỗi SSL chain khi chạy local.
- Nếu `pnpm build` báo warning về Node version, hãy chuyển đúng version theo `.nvmrc`.
- Nếu `pnpm lint` lỗi do dependency local bị lệch, chạy `pnpm install` để đồng bộ lại `node_modules`.
