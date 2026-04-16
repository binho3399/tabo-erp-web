# Yêu Cầu Sản Phẩm (MVP) - Website Giới Thiệu Tabo ERP

## 1. Mục tiêu
Xây dựng một website giới thiệu phần mềm Tabo ERP và cung cấp các thông tin cơ bản về doanh nghiệp. Hệ thống cần có giao diện hiện đại, chuyên nghiệp, hỗ trợ hoàn toàn tiếng Việt, và hoạt động tốt trên mọi thiết bị (Responsive).

## 2. Tính năng chính (Dành cho khách vãng lai)
- **Trang Chủ (Home)**: Banner ấn tượng, tóm tắt về phần mềm Tabo ERP, các lợi ích chính, và kêu gọi hành động (Call to Action).
- **Tính năng (Features)**: Giới thiệu chi tiết các phân hệ/tính năng của Tabo ERP.
- **Về chúng tôi (About Us)**: Thông tin cơ bản về công ty, sứ mệnh, tầm nhìn.
- **Liên hệ (Contact)**: Form liên hệ cơ bản kèm thông tin địa chỉ, số điện thoại, email.

## 3. Quản lý hệ thống & Yêu cầu Kỹ thuật
Theo các nguyên tắc đã thống nhất:
- **Xác thực (Auth)**: Website được thiết kế dạng tĩnh (Static site) không yêu cầu xác thực người dùng.
- **Cơ sở dữ liệu (Database)**: Không sử dụng cơ sở dữ liệu.
- **Bảo mật**: Các biến cấu hình (nếu có) được đặt trong file `.env`.

## 4. Giao diện & Trải nghiệm Người dùng (UI/UX)
- Ngôn ngữ: 100% tiếng Việt.
- Framework: **React** kết hợp với **Tailwind CSS**.
- Thiết kế: Theo phong cách hiện đại, bố cục rõ ràng, sử dụng các components tái sử dụng được. Hỗ trợ hiển thị trên Desktop và Mobile (Responsive).

## 5. Các bước triển khai tiếp theo (Bản thiết kế kỹ thuật)
- Khởi tạo dự án React (Vite).
- Cài đặt Tailwind CSS.
- Tích hợp Supabase (Auth & Database).
- Dựng UI các trang (Home, Features, About Us, Contact, Login/System).
- Tích hợp và kiểm thử.
