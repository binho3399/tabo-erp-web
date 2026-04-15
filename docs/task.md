# Task Tracker: Tabo ERP Web + CMS

## Đã hoàn thành
- [x] Khởi tạo website marketing bằng `React + Vite + TypeScript`.
- [x] Hoàn thiện UI/UX và responsive cho các trang chính.
- [x] Xây dựng blog routes và luồng prerender/sitemap.
- [x] Thiết kế kế hoạch nhúng Payload CMS theo mô hình app riêng (`apps/cms`).
- [x] Tạo schema CMS cho `posts/categories/authors/media/users`.
- [x] Tích hợp data source blog theo adapter (`mock` / `payload`) qua env.
- [x] Chuyển CMS runtime sang Next.js App Router để hỗ trợ `/admin` và `/api`.
- [x] Kết nối Supabase Postgres bằng `DATABASE_URL` trong `apps/cms/.env`.
- [x] Cập nhật tài liệu `README.md` cho scripts và hướng vận hành CMS.

## Đang mở / cần theo dõi
- [ ] Seed dữ liệu blog từ mock vào CMS trên môi trường ổn định.
- [ ] Tạo user admin đầu tiên cho Payload và xác nhận đăng nhập `/admin`.
- [ ] Kiểm tra e2e luồng publish: CMS -> web blog -> prerender build.
- [ ] Chuẩn hóa tài liệu deploy CMS (staging/production envs).
