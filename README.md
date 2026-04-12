# Tabo ERP Web

Website marketing cho Tabo ERP, xây bằng `React 19 + Vite + TypeScript + Tailwind CSS`.

## Yêu cầu môi trường

- `Node.js >= 20.19.0`
- `npm`

Repo có file [.nvmrc](/Users/macbook/Documents/Tabo%20ERP/.nvmrc) để đồng bộ version Node giữa các máy.

## Scripts

- `npm run dev`: chạy local dev server.
- `npm run build`: build production và kiểm tra budget của entry bundle.
- `npm run build:app`: build production, prerender Blog và sinh `sitemap.xml`/`robots.txt`, không chạy bundle budget check.
- `npm run lint`: chạy ESLint với type-aware rules.
- `npm run preview`: preview bản build.

## Kiến trúc chính

- `src/pages/`: route-level pages, chỉ chịu trách nhiệm compose.
- `src/components/`: UI sections và reusable components.
- `src/config/site.ts`: route metadata, navigation, SEO cơ bản, contact metadata.
- `src/config/routes.ts`: route registry cho navigation, client lazy routes và prefetch.
- `src/content/`: nội dung typed cho các section có tính marketing.
- `src/lib/blog/`: adapter dữ liệu blog, mock source và helper SEO cho bài viết.
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

## Ghi chú vận hành

- Nếu `npm run build` báo warning về Node version, hãy chuyển đúng version theo `.nvmrc`.
- Nếu `npm run lint` lỗi do dependency local bị lệch, chạy `npm install` để đồng bộ lại `node_modules`.
