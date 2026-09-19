# Kế hoạch Triển khai (Tabo ERP Website)

Website giới thiệu phần mềm Tabo ERP và thông tin doanh nghiệp. Hệ thống được xây dựng bằng React (Vite) và Tailwind CSS, sử dụng Supabase để quản lý Authentication (dành cho các tính năng hệ thống) và cấu hình Database.

## User Review Required

> [!IMPORTANT]
> Vui lòng xem xét file [mvp-requirements.md](file:///Users/macbook/Documents/Tabo%20ERP/docs/mvp-requirements.md) để chốt các tính năng cơ bản mong muốn. Sau khi xác nhận các tính năng này, tôi sẽ tiến hành khởi tạo dự án và bắt đầu code.

## Proposed Changes

### Khởi tạo Dự Án
#### [NEW] Init React App bằng Vite
Khởi tạo cấu trúc dự án React với Tailwind CSS để có giao diện tiếng Việt đẹp, hỗ trợ cả mobile và desktop.

### Tích hợp Supabase
#### [NEW] Cài đặt `supabase-js` và thiết lập biến môi trường
Mọi biến môi trường (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) sẽ được cấu hình trong `.env` và không bao giờ bị hardcode. File `.env.example` sẽ được tạo để hướng dẫn.

### Xây dựng Giao diện (UI Components)
Các trang dự kiến:
- **Trang chủ (Home & Features)**: Giao diện hiện đại, giới thiệu phần mềm và các tính năng chính.
- **Trang giới thiệu công ty (About)**.
- **Trang liên hệ (Contact)**.
- **Trang Đăng nhập (Login)**: Dành riêng cho việc truy cập vào các tính năng hệ thống thông qua Supabase Auth.

## Verification Plan

### Automated Tests
Bước đầu sẽ thiết lập và kiểm tra lỗi thông qua trình biên dịch Vite (`npm run dev` và `npm run build`), đảm bảo dự án không có lỗi cú pháp hay config.

### Manual Verification
1. Chạy `npm run dev` để kiểm tra các trang (Home, About, Contact) trên browser.
2. Kiểm tra tính năng Responsive trên các kích thước màn hình khác nhau (Mobile, Desktop).
3. Đảm bảo form Login được hiển thị đúng định dạng tiếng Việt và tích hợp thành công Supabase Auth.
