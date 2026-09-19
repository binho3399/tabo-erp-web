# Bản Đồ Kiến Trúc Dự Án Tabo ERP Web (GitNexus-first)

Tài liệu này là bản đồ tra cứu nhanh cho agent và dev khi làm việc trên codebase Tabo ERP Web.
Nguồn sự thật cho quan hệ phụ thuộc và blast radius là GitNexus (query/context/impact/detect_changes); phần sơ đồ tĩnh trong tài liệu chỉ là snapshot tham khảo.

Mục tiêu chính:
- Route nào render page nào.
- Page nào dùng section/component nào.
- Component nào đang kéo dữ liệu từ `constants/`, `types/`, `lib/`, hoặc `assets/`.
- Route metadata, prefetch, và SEO cơ bản đang nằm ở đâu.
- File nào nên đọc trước tùy theo loại task.

## 0. Quy trình GitNexus chuẩn

1. Index/reindex codebase:
   - `npx gitnexus analyze`
2. Kiểm tra trạng thái index:
   - `npx gitnexus status`
3. Tra cứu ngữ cảnh kiến trúc qua MCP tools:
   - `query` -> tìm process/module
   - `context` -> 360 symbol view
   - `impact` hoặc `detect_changes` -> blast radius trước khi sửa
4. Khi cần refresh tài liệu dài:
   - `npx gitnexus wiki`

## 1. Sơ Đồ Kiến Trúc Tổng Thể
Sơ đồ runtime không còn được duy trì thủ công bằng Mermaid trong tài liệu này.
Thay vào đó, dùng GitNexus để truy vấn kiến trúc theo ngữ cảnh thực tế của mã nguồn:

- `query`: tìm process/cluster liên quan feature.
- `context`: xem dependency 360 độ cho symbol hoặc module.
- `impact`/`detect_changes`: xem blast radius trước khi sửa hoặc trước commit.
- `wiki`: sinh tài liệu kiến trúc theo knowledge graph khi cần snapshot dài.

## 2. Bản Đồ Đọc Nhanh Cho Agent

Khi cần sửa một phần cụ thể, đọc theo thứ tự này để giảm research:

| Loại task | File nên mở trước | Lý do |
| --- | --- | --- |
| Đổi route / thêm page | `src/config/routes.ts`, `src/app/AppFrame.tsx`, `src/pages/<Page>.tsx` | Route được khai báo tập trung tại `routes.ts`, render bởi `AppFrame`. |
| Đổi SEO / title / meta route | `src/config/site.ts`, `src/components/seo/RouteDocumentMeta.tsx`, `src/components/seo/MetadataProvider.tsx` | Route metadata và document title/description đã được gom về đây. |
| Đổi layout chung | `src/components/layout/Layout.tsx`, `Navbar.tsx`, `Footer.tsx`, `ScrollToTop.tsx` | Layout bao toàn app, ảnh hưởng mọi trang. |
| Đổi UI primitive | `src/components/ui/index.ts` và các file trong `src/components/ui/` | Đây là public entry của Button, Badge, Icon, Accordion, ThemeToggle, PrefetchLink. |
| Đổi hiệu ứng scroll / viewport | `src/hooks/useViewportActivity.ts` | Hook dùng chung kích hoạt animation khi section vào viewport. |
| Đổi skeleton / loading state | `src/components/common/SkeletonLayouts.tsx`, `src/components/common/Skeleton.tsx` | Mọi fallback của Suspense và DeferredSection kéo skeleton từ đây. |
| Đổi lazy-load boundary | `src/components/common/DeferredSection.tsx` | Bọc IntersectionObserver quanh các lazy section để trì hoãn mount cho đến khi gần viewport. |
| Đổi nội dung landing page | `src/constants/landing/index.ts` | Copy và data của trang đang được tách riêng ở đây. |
| Đổi kiểu dữ liệu dùng chung | `src/types/landing.ts` | Nên cập nhật type trước khi sửa component dùng chung. |
| Đổi Home sections | `src/pages/Home.tsx` và `src/components/home/` | Home có phần tải lười và phụ thuộc data layer. |
| Đổi Pricing | `src/pages/Pricing.tsx` và `src/components/pricing/` | `PricingSection` được dùng lại ở Home và Pricing. |
| Đổi About | `src/pages/About.tsx` và `src/components/about/` | Page này là composition tuyến tính của các section; About sections lazy qua DeferredSection. |
| Đổi Contact | `src/pages/Contact.tsx` và `src/components/contact/` | Contact cũng là composition tuyến tính. |
| Đổi Blog Index / Category | `src/pages/BlogIndex.tsx`, `src/pages/BlogCategory.tsx`, `src/components/blog/BlogCard.tsx`, `src/components/blog/BlogSidebar.tsx` | BlogSidebar dùng tại BlogIndex để lọc category và hiển thị bài nổi bật. |
| Đổi Blog Post detail | `src/pages/BlogPost.tsx`, `BlogPostHeader`, `BlogArticleBody`, `BlogPostSidebar`, `RelatedPostsSection` | BlogPost ghép 4 sub-component; header, body, sidebar và phần gợi ý bài liên quan. |
| Đổi blog data layer | `src/lib/blog/repository.ts`, `src/lib/blog/types.ts`, `src/lib/blog/categories.ts` | Repository là adapter, types là hợp đồng, categories là mapping slug/label. |
| Đổi navigation / prefetch nội bộ | `src/config/site.ts`, `src/components/ui/PrefetchLink.tsx`, `src/lib/route-prefetch.ts` | Đây là lớp điều hướng dùng chung cho route lazy hiện tại. |
| Đổi auth / backend helper | `src/lib/supabase.ts` | Hiện tại chưa nằm trong runtime path chính. Nếu task không liên quan auth/backend, thường không cần mở file này. |
| Đổi branding asset | `src/assets/` | Logo được dùng ở Navbar và Footer. |

## 3. Cấu Trúc Thư Mục Và Vai Trò

| Đường dẫn / Thư mục | Trách nhiệm |
| --- | --- |
| `src/main.tsx` | Entry point, mount React root, bọc `ThemeProvider`, import global stylesheet. |
| `src/context/` | Quản lý theme state toàn cục. |
| `src/App.tsx` | Khởi tạo `BrowserRouter`, bọc `MetadataProvider` và render `AppFrame`. |
| `src/app/AppFrame.tsx` | Shell ứng dụng: gắn `Routes`, `Layout`, `ScrollToTop`, `RouteDocumentMeta`. Phân tách logic routing khỏi `App.tsx`. |
| `src/config/routes.ts` | Khai báo tập trung toàn bộ route definitions (`appRouteDefinitions`) dùng cho cả AppFrame và MetadataProvider. |
| `src/config/site.ts` | Nguồn sự thật cho site metadata, navigation labels, contact info và SEO cơ bản. |
| `src/pages/` | Mỗi file là một route-level page, chủ yếu chỉ lắp ráp các section. |
| `src/components/layout/` | Navbar, Footer, ScrollToTop, và shell bố cục chung. |
| `src/components/layout/navbar/` | Sub-components cho điều hướng desktop/mobile và shared navbar mappings. |
| `src/components/home/` | Các section của Home, trong đó một phần được lazy load qua `DeferredSection`. |
| `src/components/home/features/` | Primitive cho `FeaturesSection` (feature chip + ticker) để tách layout khỏi view primitives. |
| `src/components/home/hero/` | Primitive cho `HeroSection` (avatar badge và phần tử con). |
| `src/components/pricing/` | Các khối giao diện của trang Pricing; `PricingSection` được tái sử dụng ở Home. |
| `src/components/about/` | Các section của trang About; phần dưới lazy qua `DeferredSection`. |
| `src/components/contact/` | Các section của trang Contact; FAQ lazy qua `DeferredSection`. |
| `src/components/blog/` | Components Blog: `BlogCard` (card chung), `BlogSidebar` (lọc/bài nổi bật), `BlogPostHeader`, `BlogArticleBody`, `BlogPostSidebar`, `RelatedPostsSection`. |
| `src/components/ui/` | Primitive UI layer. File `index.ts` là entry public để import gọn. |
| `src/components/common/` | Cross-cutting concerns: `ErrorBoundary`, `DeferredSection` (IntersectionObserver lazy mount), `SkeletonLayouts` (fallback templates), `Skeleton` (atoms). |
| `src/components/seo/` | Đồng bộ document title/description theo route; `MetadataProvider` cung cấp context metadata toàn app. |
| `src/hooks/` | Custom hooks dùng chung: `useViewportActivity` kích hoạt data-motion-active khi section vào viewport. |
| `src/content/` | Nội dung typed cho các section marketing (home, about, faqs). |
| `src/constants/` | Dữ liệu, copy, và cấu hình tĩnh cho landing pages. |
| `src/types/` | TypeScript contracts dùng chung cho data layer và component props. |
| `src/lib/` | Helper hạ tầng và integration layer (blog repository, blog seo helpers, supabase, route-prefetch). |
| `src/lib/blog/` | Blog data layer: `repository.ts` (adapter/fetcher), `types.ts` (contracts), `categories.ts` (slug mapping), `seo.ts` (metadata builders), `mock.ts` (dev data). |
| `src/assets/` | Tài nguyên tĩnh như logo, ảnh thương hiệu. |

## 4. Các Điểm Quan Trọng Để Giảm Research

1. `App.tsx` không còn tự render Routes trực tiếp. Nó bọc `MetadataProvider` và delegate sang `AppFrame.tsx` — đây là shell thực sự xử lý routing.
2. `src/config/routes.ts` là nguồn sự thật duy nhất cho route definitions. Khi thêm route mới, đọc file này trước.
3. `Home.tsx` không render toàn bộ section cùng lúc. Phần nặng hơn được bọc trong `DeferredSection` + `React.lazy` + `Suspense` để trì hoãn mount cho đến khi gần viewport.
4. `PricingSection.tsx` là component dùng lại giữa Home và Pricing, nên sửa ở đây sẽ ảnh hưởng cả hai route.
5. `components/ui/index.ts` là lớp export công khai. Nếu agent cần UI primitive, nên đọc file này trước thay vì mò từng file một.
6. `src/constants/landing/index.ts` là nơi giữ nội dung chính của landing pages. Nhiều task chỉ cần sửa data ở đây, không cần đụng logic component.
7. `src/types/landing.ts` là hợp đồng dữ liệu. Nếu thay cấu trúc `constants/landing`, nên cập nhật type trước để tránh lan lỗi.
8. `src/config/site.ts` là nguồn sự thật cho route metadata, label navigation và SEO cơ bản. Nếu thêm route, sửa ở đây trước.
9. `src/hooks/useViewportActivity.ts` được dùng rộng rãi ở hầu hết các Hero section để kích hoạt animation CSS (`data-motion-active`). Nếu animation không chạy, đây là điểm kiểm tra đầu tiên.
10. `DeferredSection` dùng IntersectionObserver để trì hoãn mount React. Khác với `Suspense`, nó cũng bọc cả trigger mount, không chỉ fallback. About, Contact, Home, và Pricing đều dùng pattern này.
11. `SkeletonLayouts.tsx` export nhiều template skeleton chuyên biệt (`RouteSkeleton`, `PricingTableSkeleton`, `FAQSkeleton`, `ContentGridSkeleton`...). `RouteSkeleton` được dùng bởi AppFrame làm fallback default cho toàn bộ route.
12. Blog dùng adapter ở `src/lib/blog/repository.ts` và metadata động qua `components/seo/usePageMetadata.ts`; page/component không đọc mock data trực tiếp.
13. Build production hiện có thêm bước prerender blog routes qua `src/entry-server.tsx` và `scripts/prerender.mjs`.
14. Blog category detail route dùng path `/blog/category/:categorySlug`; mapping slug/category nằm ở `src/lib/blog/categories.ts`.
15. `src/lib/supabase.ts` hiện chưa nằm trong runtime path chính. Nếu task không liên quan auth/backend, thường không cần mở file này.

## 5. Quy Tắc Đồng Bộ Cho Agent

Khi thêm hoặc sửa kiến trúc, ưu tiên đối chiếu qua GitNexus và chỉ cập nhật `ARCHITECTURE.md` ở mức định hướng nếu có một trong các thay đổi sau:
- Thêm route mới hoặc page mới.
- Tách thêm section lớn ra component con.
- Thêm hoặc đổi metadata route, navigation, hoặc prefetch flow.
- Tạo thêm shared data mới trong `constants/`.
- Tạo thêm content module mới trong `content/`.
- Tạo thêm type dùng chung trong `types/`.
- Tạo thêm integration/helper ở `lib/`.
- Đổi hoặc thêm asset branding ở `assets/`.

Nếu chỉ sửa text nhỏ bên trong cùng một section, thường không cần cập nhật snapshot tĩnh. Tuy nhiên vẫn nên kiểm tra nhanh qua `context`/`impact` để tránh bỏ sót side effect.
