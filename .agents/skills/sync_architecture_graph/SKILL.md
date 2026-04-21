---
name: Sync Architecture Graph
description: Tự động đồng bộ `ARCHITECTURE.md` khi cấu trúc route, component hoặc luồng dữ liệu website thay đổi.
---

# Hướng dẫn đồng bộ Sơ đồ Kiến trúc (Graph)

## Bối cảnh
Dự án sử dụng file `ARCHITECTURE.md` để vẽ bản đồ cấu trúc Component và Routing Flow hiển thị bằng `Mermaid.js`. Sơ đồ này phải luôn phản ánh đúng 100% thực trạng file hiện tại trong ổ đĩa.

## Phạm vi áp dụng
- Skill này áp dụng cho website public-facing trong `src/`.
- Khi thay đổi ở `apps/cms`, chỉ cập nhật graph nếu thay đổi đó làm đổi luồng dữ liệu website (ví dụ contract blog/SEO giữa CMS va website).

## Trigger (khi nào AI PHẢI chạy skill này)
Bất cứ khi nào AI gặp các thay đổi sau, AI **PHẢI** review va cập nhật `ARCHITECTURE.md`:
1. Thêm/sửa/xóa route trong `src/config/routes.ts`, `src/app/*`, `src/pages/*`, hoặc logic render route.
2. Tạo mới, tách nhỏ, đổi tên, xóa component/section trong `src/components/**` có ảnh hưởng component tree.
3. Thay đổi luồng metadata/SEO trong `src/components/seo/**`, `src/lib/blog/seo.ts`.
4. Thay đổi luồng dữ liệu blog trong `src/lib/blog/**` hoặc trang blog (`BlogIndex`, `BlogCategory`, `BlogPost`).
5. Thay đổi prefetch/routing infra trong `src/components/ui/PrefetchLink.tsx` hoặc `src/lib/route-prefetch.ts`.
6. Thay đổi contract dữ liệu từ CMS làm ảnh hưởng website (như `apps/cms/src/collections/Posts.ts`, `Media.ts`).

## Quy trình cập nhật bắt buộc
1. Đọc diff và xác định loại thay đổi: route, component tree, data flow, metadata flow, prefetch flow.
2. Cập nhật graph Mermaid trong `ARCHITECTURE.md`:
   - Nối đúng chiều phụ thuộc (Parent -> Child hoặc Consumer -> Provider).
   - Thêm node mới và xóa node không còn dùng.
   - Nếu có route động mới, thể hiện rõ pattern route.
3. Cập nhật phần mô tả text trong `ARCHITECTURE.md` (nếu có) để phản ánh:
   - File/thu mục mới.
   - Luồng dữ liệu hoặc SEO/prefetch mới.
4. Nếu thay đổi cũng ảnh hưởng build/runtime/process, cập nhật thêm `README.md`.

## Checklist xác minh trước khi kết thúc task
- Route trong graph khớp với route thật tại `src/config/routes.ts`.
- Các trang blog và dependencies (`repository`, `seo`, `metadata hook`) được nối đúng.
- Luồng prefetch (`PrefetchLink` -> `route-prefetch`) vẫn được thể hiện.
- Không để node mồ côi hoặc tên file cũ sau khi rename/delete.

## Mẫu trigger phrases
- "Them page/route moi cho website"
- "Tach section thanh component nho hon"
- "Refactor luong blog/seo/prefetch"
- "Doi ten component trong src/components"

## Output sau khi hoàn tất
Bao cáo ngắn: `Da dong bo ARCHITECTURE.md theo thay doi moi.`
