---
name: Sync Architecture Graph
description: Đồng bộ kiến trúc bằng GitNexus khi cấu trúc route, component hoặc luồng dữ liệu website thay đổi.
---

# Hướng dẫn đồng bộ kiến trúc bằng GitNexus

## Bối cảnh
Dự án dùng GitNexus làm lớp code-intelligence chính để truy vấn quan hệ phụ thuộc, process flow và blast radius. `ARCHITECTURE.md` giữ vai trò tài liệu tĩnh ở mức định hướng, không còn là nơi phải tự vẽ/cập nhật Mermaid thủ công cho mọi thay đổi nhỏ.

## Phạm vi áp dụng
- Skill này áp dụng cho website public-facing trong `src/`.
- Khi thay đổi ở `apps/cms`, chỉ cập nhật graph nếu thay đổi đó làm đổi luồng dữ liệu website (ví dụ contract blog/SEO giữa CMS va website).

## Trigger (khi nào AI PHẢI chạy skill này)
Bất cứ khi nào AI gặp các thay đổi sau, AI **PHẢI** refresh ngữ cảnh kiến trúc bằng GitNexus:
1. Thêm/sửa/xóa route trong `src/config/routes.ts`, `src/app/*`, `src/pages/*`, hoặc logic render route.
2. Tạo mới, tách nhỏ, đổi tên, xóa component/section trong `src/components/**` có ảnh hưởng component tree.
3. Thay đổi luồng metadata/SEO trong `src/components/seo/**`, `src/lib/blog/seo.ts`.
4. Thay đổi luồng dữ liệu blog trong `src/lib/blog/**` hoặc trang blog (`BlogIndex`, `BlogCategory`, `BlogPost`).
5. Thay đổi prefetch/routing infra trong `src/components/ui/PrefetchLink.tsx` hoặc `src/lib/route-prefetch.ts`.
6. Thay đổi contract dữ liệu từ CMS làm ảnh hưởng website (như `apps/cms/src/collections/Posts.ts`, `Media.ts`).

## Quy trình cập nhật bắt buộc
1. Đọc diff và xác định loại thay đổi: route, component tree, data flow, metadata flow, prefetch flow.
2. Chạy truy vấn GitNexus (MCP tools) theo thứ tự:
   - `query` để định vị module/process liên quan.
   - `context` để lấy 360 symbol view cho file/hàm trọng tâm.
   - `impact` hoặc `detect_changes` để xác nhận blast radius.
3. Cập nhật phần mô tả text trong `ARCHITECTURE.md` (nếu có) để phản ánh:
   - File/thu mục mới.
   - Luồng dữ liệu hoặc SEO/prefetch mới.
4. Khi cần refresh tài liệu dài, dùng `gitnexus wiki` thay vì tự mở rộng sơ đồ thủ công.
5. Nếu thay đổi cũng ảnh hưởng build/runtime/process, cập nhật thêm `README.md`.

## Checklist xác minh trước khi kết thúc task
- Kết quả GitNexus `query/context` khớp route thật tại `src/config/routes.ts`.
- Blast radius qua `impact` hoặc `detect_changes` hợp lý với thay đổi đang làm.
- Các trang blog và dependencies (`repository`, `seo`, `metadata hook`) còn khớp thực tế.
- Không để mô tả tài liệu tham chiếu file cũ sau khi rename/delete.

## Mẫu trigger phrases
- "Them page/route moi cho website"
- "Tach section thanh component nho hon"
- "Refactor luong blog/seo/prefetch"
- "Doi ten component trong src/components"

## Output sau khi hoàn tất
Bao cáo ngắn: `Da dong bo ARCHITECTURE.md va doi chieu bang GitNexus theo thay doi moi.`
