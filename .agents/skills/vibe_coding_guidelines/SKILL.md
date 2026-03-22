---
name: Tabo ERP Vibe Coding Guidelines
description: Hướng dẫn phong cách thiết kế (Aesthetic Vibe) và các chuẩn mực UI/UX Frontend cụ thể cho dự án Tabo ERP. Áp dụng Vibe này cho mọi file giao diện mới.
---

# 🎨 Hướng dẫn Vibe Coding (UI/UX Aesthetics)

Skill (Tài liệu) này cung cấp **"Vibe" (Phong cách và Cảm quan)** lõi của dự án Tabo ERP. Mọi thành phần UI được tạo ra từ bây giờ **PHẢI** tuân thủ 100% các nguyên tắc thị giác (Aesthetics) và hệ thống khoảng cách dưới đây để đảm bảo giao diện luôn đạt chất lượng "Premium" ở đẳng cấp cao nhất.

## 1. Phong cách Cốt lõi (The Vibe)
- **Cảm giác mang lại:** Cao cấp (Premium), Đậm chất Công nghệ (Tech-forward), Tinh gọn (Minimalist nhưng phong phú chi tiết), mượt mà như các sản phẩm của Apple hay Stripe.
- **Micro-animations là Bắt buộc:** Bất kỳ Card, Button hay Hover State nào cũng phải có hiệu ứng mượt. Sử dụng các Class phổ biến: `transition-all duration-500 ease-out`. Không bao giờ để giao diện hiển thị tĩnh (static) nhàm chán.
- **Glassmorphism & Glow:** Thường xuyên sử dụng bóng đổ nhòe màu (blur glow) lót dưới nền (ví dụ: `bg-blue-500/20 blur-[120px] rounded-full` ở phía góc thẻ) hoặc kính mờ (`backdrop-blur-md lg:bg-white/80`) để tạo chiều sâu thay vì nền màu khối cứng nhắc.

## 2. Hệ thống Khoảng cách (Spacing System) Tiêu chuẩn
Đây là quy chuẩn đã thống nhất, AI tuyệt đối không sử dụng class ngẫu nhiên:
- **Tiêu chuẩn Mobile:** 
  - Padding của các thẻ (Cards): Luôn là `p-4` (tương đương 16px).
  - Margin bottom (Khoảng cách dưới) giữa Tag, Tiêu đề và Mô tả: Đều chuẩn hóa dùng `mb-4`.
  - Chiều rộng/cao của khung chứa Icon: Chuẩn xác là `w-11 h-11`.
- **Tiêu chuẩn Desktop:** 
  - Padding của các thẻ: Từ `p-6` đến `p-8`.
  - Margin bottom cho Tiêu đề Chính (Section Titles): Luôn là `mb-5` (tương đương 20px).
  - Khung chứa Icon: `w-12 h-12`.
  - Cả khung bo góc chuẩn: `rounded-xl` hoặc `rounded-2xl`.

## 3. Hệ thống Typography (Kiểu chữ) Vibe Đồng bộ
- **Font chữ gốc:** Inter (`font-sans`).
- **Section Headers (Tiêu đề Lớn của từng vùng):** 
  - Mobile: Cố định `text-[28px]`.
  - Desktop: `text-4xl md:text-5xl`.
  - Class bắt buộc đi kèm: `font-normal tracking-tight leading-[1.15] text-slate-900 mb-4 md:mb-5`. Chữ chính luôn mỏng và thanh thoát, khoảng cách dưới mobile 16px, desktop 20px.
- **Card Titles (Tiêu đề trong các Thẻ con):** 
  - Mobile: Cố định `text-[20px]`.
  - Desktop: `lg:text-[28px]`.
  - Class bắt buộc: `font-normal text-slate-900 tracking-tight`. (Ví dụ: `Hộ Kinh Doanh`, `Kế Toán`).
- **Đoạn mô tả (Description/Body):** Cố định `text-base text-slate-500 font-normal leading-relaxed`.
- **Badges (Nhãn dán Khởi vị Tiêu đề):** 
  - TOÀN BỘ Nhãn dán trên đỉnh các Section (Ví dụ: "GIẢI ĐÁP THẮC MẮC", "LIÊN HỆ", "SO SÁNH CHI TIẾT") **phải dùng** tone Xanh chủ đạo (Tương đương `variant="primary"` trong Component `Badge.tsx` với cấu trúc: `bg-blue-50 text-blue-700 border border-blue-100 px-4 py-1.5 text-xs shadow-sm`). 
  - Không được dùng nhãn dán nền xám trầm cho các khối chính của trang.
  - Các nhãn luôn viết hoa `uppercase`, kiểu chữ `text-xs` hoặc siêu nhỏ `text-[10px]`, font `font-semibold` hoặc `font-bold tracking-widest` theo hệ thống Vibe.

## 4. UI Tables & Accordions (Cấu trúc Khối dữ liệu)
- **Bảng So Sánh (Comparison Tables):** Tuyệt đối không dùng cấu trúc Accordion lồng ghép phức tạp gây cản trở tầm nhìn. Các Bảng Giá/Tính năng lớn (như PricingFeatures) phải dùng giao diện **Flat Table** trải phẳng, chia `grid` với Max Width `max-w-7xl` (1280px).
  - Tiêu đề cột (vd: "Nhóm tính năng"): `text-[17px] font-semibold text-slate-900`.
  - Hàng phân loại (Category Headers): Phải làm nổi bật bằng nền xám/xanh nhẹ (`bg-slate-50/60`), chữ màu xanh dương (`text-blue-600 font-bold`).
  - Dữ liệu Boolean (True/False): True = Text icon check xanh trơn (không bọc nền circle), False = Dấu gạch ngang xám nhạt (`—`).
- **Khối Giải đáp (FAQ Accordions):** Cố định cấu trúc hiển thị chia 2 cột logic trên giao diện lưới `grid-cols-2`. Mọi thành phần đều đồng bộ giao diện đóng mở cơ bản với viền bo tròn thẩm mỹ.

## 5. Bảng màu & Hình khối (Color & Shapes)
- **Màu chủ đạo:** Xanh dương (`text-blue-500`, `bg-blue-600`) trên nền trắng xám sáng nhẹ (`bg-slate-50`, `text-slate-500`, `text-slate-900`). 
- **Chế độ Thẻ Cao cấp (Dark/Premium Card):** Dùng nền tông xanh đêm `#0F172A` kết hợp `#001D3D`, đi kèm chữ `text-white`.
- **Góc bo (Border Radius):** 
  - Các khối Card bọc lớn: Cố định `rounded-[20px]`.
  - Nút bấm (Button): Bao giờ cũng bo tròn dẹt `rounded-full`.
  - Viền chia (Borders): Viền tàng hình siêu mỏng `border border-slate-50` hoặc `border-slate-100`.

## 6. Tự động Kích hoạt (Trigger) & Thao tác của AI
Kể từ bây giờ, khi User sử dụng lệnh (prompt) ngắn gọn như: 
*   "Lấy Vibe project làm UI cho section này"
*   "Tạo thêm Card Dịch vụ"
*   "Design component abc chuẩn Apple"

👉 **Nhận diện Vibe Coding:** AI **BẮT BUỘC** tự động áp dụng toàn bộ Class Tailwind, Font size (`text-[20px]`, `text-[28px]`), Spacing (`p-4`, `mb-4` trên Mobile), Micro-animation theo đúng tài liệu này, giúp sinh ra đoạn Code hoàn chỉnh thẩm mỹ nhất mà KHÔNG CẦN User chỉ định kích thước class bằng tay.

## 7. Liên tục Cập nhật Cẩm nang (Auto-Evolution)
Vibe của dự án là một hệ thống **SỐNG**. AI **PHẢI TỰ ĐỘNG MỞ VÀ CẬP NHẬT FILE SKILL NÀY** (`SKILL.md`) ngay lập tức nếu:
1. User yêu cầu điều chỉnh một quy tắc thị giác chung (VD: "Từ nay đổi font tiêu đề sang 24px", "Chốt dùng padding 20px thay vì 16px nhé").
2. AI và User vừa sáng tạo & chốt xong một Mẫu (Pattern) Component mới chưa có trong cẩm nang (VD: Phong cách làm Accordion, Popup, hay Dropdown).
👉 **Hành động của AI:** Nạp thêm/cập nhật quy tắc mới (class, spacing, color...) vào các Mục ở trên để cẩm nang Vibe Code luôn phản ánh phiên bản thiết kế hoàn hảo nhất.
