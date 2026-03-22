# Sơ đồ Kiến trúc Dự án Tabo ERP Web (Architecture Graph)

Tài liệu này cung cấp cái nhìn tổng quan về cấu trúc mã nguồn của Tabo ERP Web. Nó giúp các lập trình viên mới dễ dàng theo dõi luồng dữ liệu (Data flow) và sơ đồ cây component (Component Tree) của ứng dụng React này.

## 1. Sơ đồ Thành phần (Component Diagram)
*Cấu trúc định tuyến (Routing) và thành phần UI (UI Components) từ cấp độ Root đến các Trang (Pages).*

```mermaid
graph TD
    %% Root Level
    Main[main.tsx] --> App[App.tsx]
    
    %% Layout Component (Wrapper)
    App --> Layout[[components/layout/Layout.tsx]]
    Layout --> Navbar(Navbar.tsx)
    Layout --> Footer(Footer.tsx)
    Layout --> CTA(CTASection.tsx)

    %% Routes/Pages
    App ==> Route_Home(Route: /)
    App ==> Route_Pricing(Route: /pricing)
    App ==> Route_About(Route: /about)
    App ==> Route_Contact(Route: /contact)

    Route_Home --> Page_Home[pages/Home.tsx]
    Route_Pricing --> Page_Pricing[pages/Pricing.tsx]
    Route_About --> Page_About[pages/About.tsx]
    Route_Contact --> Page_Contact[pages/Contact.tsx]

    %% Home Page Layout
    Page_Home --- HomeHero(HeroSection)
    Page_Home --- HomeFeat(FeaturesSection)
    Page_Home --- HomeStrip(StripBanner)
    Page_Home --- HomeSol(SolutionsSection)
    Page_Home --- HomeVis(VisionSection)
    Page_Home --- HomeStra(StrategySection)
    Page_Home --- HomePri(PricingSection)
    Page_Home --- HomeTest(TestimonialsSection)

    %% Pricing Page Layout
    Page_Pricing --- PriHead(PricingSection - Tái sử dụng)
    Page_Pricing --- PriFeat(PricingFeatures - Accordion)

    %% Contact Page Layout
    Page_Contact --- ConHero(ContactHero)
    Page_Contact --- ConInfo(ContactInfo)
    Page_Contact --- ConFAQ(ContactFAQ)

    %% Common Reusable Components
    subgraph components/common [Các Components dùng chung (Common/UI)]
        C_Btn(Button.tsx)
        C_Icon(Icon.tsx)
        C_Badge(Badge.tsx)
        C_Acc(Accordion.tsx)
        C_Scr(ScrollToTop.tsx)
    end
    
    %% Implicit Usage
    C_Btn -.-> Page_Home
    C_Icon -.-> Page_Home
    C_Badge -.-> Page_Pricing
```

## 2. Giải thích Cấu trúc Thư mục

| Đường dẫn / Thư mục | Chức năng (Trách nhiệm) |
| --- | --- |
| `src/main.tsx` | Điểm bắt đầu (Entry point), thiết lập React DOM và Strict Mode. |
| `src/App.tsx` | Quản lý điều hướng (React Router), chèn `Layout` vào tất cả các lộ trình (Routes). |
| `src/pages/` | Chứa các màn hình cấp cao nhất tương ứng với một URL cụ thể. Chúng hoạt động như những "Container" chỉ để sắp xếp và gọi các `components/` tương ứng. |
| `src/components/layout/` | Chứa thiết kế bố cục bọc ngoài (Navbar tĩnh có menu mobile thông minh, Footer đồ họa watermark "TABO ERP" lớn). |
| `src/components/home/` | Chứa tất cả các vùng (Sections) được xây dựng dành cho Trang Chủ, nhưng cũng cho phép tái sử dụng ở trang khác (ví dụ: PricingSection tái sử dụng qua trang Bảng giá). Đặc trưng thiết kế: Đồ họa bóng bẩy, Micro-animations, Thống nhất kích thước Mobile. |
| `src/components/contact/` | Chứa các khối giao diện chuyên cho trang Liên hệ. |
| `src/components/common/` | Các thành phần căn bản, nhỏ nhất (Atomic design) như `Button`, `Badge`, `Icon`, được thiết kế riêng theo hệ thống màu sắc và variant của dự án. Không phụ thuộc vào business logic. |

## 3. Lợi ích của Kiến trúc Này
1. **Lắp ghép tinh gọn:** Thay vì gom tất cả code vào file `Home.tsx` khổng lồ, mọi logic và UI được chẻ nhỏ ra (Modularize). Điều này giúp trình duyệt kết xuất giao diện mượt mà và bảo trì dễ hơn.
2. **Khả năng Tái sử dụng cao:** Lấy ví dụ `PricingSection.tsx` được dùng làm đoạn gọi action (hooking) ở cuối trang Home, lại vừa được dùng làm phần mở đầu ở trang Pricing.
3. **Phân hóa Cấu trúc Atomic rõ ràng:** Việc đóng gói `Button` và `Badge` giúp khi anh/chị đổi thiết kế một nút bấm, nó sẽ đồng loạt cập nhật ở mọi Section mà không cần sửa từng nơi.
