---
name: Sync Architecture Graph
description: Tự động cập nhật sơ đồ Component (ARCHITECTURE.md) khi mã nguồn thay đổi.
---

# Hướng dẫn đồng bộ Sơ đồ Kiến trúc (Graph)

## Bối cảnh
Dự án sử dụng file `ARCHITECTURE.md` để vẽ bản đồ cấu trúc Component và Routing Flow hiển thị bằng `Mermaid.js`. Sơ đồ này phải luôn phản ánh đúng 100% thực trạng file hiện tại trong ổ đĩa.

## TRÍCH XUẤT TRIGGER (Khi nào AI phải tự động chạy lệnh này?)
Bất cứ khi nào AI thực hiện những tương tác sau, AI **PHẢI** tự động review lại sơ đồ này:
1. Tạo một trang (Page) mới, một nhánh đường dẫn (Router) mới trong App.
2. Tạo thêm hoặc chia tách một khối (Section) UI lớn thành các component nhỏ hơn.
3. Xóa hoặc đổi tên file `.tsx` trong thư mục `src/pages` hay `src/components/`.

## Các bước AI cần thực hiện
1. Sau khi code và build xong file UI mới, sử dụng công cụ `replace_file_content` hoặc `multi_replace_file_content` lên file `ARCHITECTURE.md`.
2. Bổ sung các Node liên kết mới vào sơ đồ `mermaid`. Cố gắng nối dây đúng từ Component Mẹ -> Component Con.
3. Đối với các trang chính mới tạo, bổ sung dòng ghi chú mô tả vào phần [2. Giải thích Cấu trúc Thư mục].
4. KHÔNG báo cáo dài dòng, sau khi thực hiện xong, chỉ cần thông báo: *"✅ Đã đồng bộ sơ đồ thành phần vào file ARCHITECTURE.md!"*
