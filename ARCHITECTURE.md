# Sơ đồ Kiến trúc Dự án Tabo ERP Web (Architecture Graph)

Tài liệu này cung cấp cái nhìn tổng quan về cấu trúc mã nguồn của Tabo ERP Web. Nó giúp các lập trình viên mới dễ dàng theo dõi luồng dữ liệu (Data flow) và sơ đồ cây component (Component Tree) của ứng dụng React này.

## 1. Sơ đồ Thành phần (Component Diagram)
*Cấu trúc định tuyến (Routing) và thành phần UI (UI Components) từ cấp độ Root đến các Trang (Pages).*

```mermaid
graph TD
    %% Root Level
    Main[main.tsx] --> ThemeProvider[context/ThemeContext.tsx]
    ThemeProvider --> App[App.tsx]
    
    %% Layout Component (Wrapper)
    App --> C_Scr(components/layout/ScrollToTop.tsx)
    App --> Layout[[components/layout/Layout.tsx]]
    Layout --> Navbar(Navbar.tsx)
    Layout --> Footer(Footer.tsx)
    Layout --> CTA(home/CTASection.tsx)
    Navbar --> ThemeToggle(ui/ThemeToggle.tsx)

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
    Page_Home --- HomeSol(SolutionsSection - Lazy)
    Page_Home --- HomeVis(VisionSection - Lazy)
    Page_Home --- HomeStra(StrategySection - Lazy)
    Page_Home --- HomePri(pricing/PricingSection - Lazy)
    Page_Home --- HomeTest(TestimonialsSection - Lazy)
    Page_Home --- HomeErr(common/ErrorBoundary)

    %% Pricing Page Layout
    Page_Pricing --- PriHero(PricingHero)
    Page_Pricing --- PriHead(PricingSection - Lazy)
    Page_Pricing --- PriFeat(PricingFeatures)
    Page_Pricing --- PriFAQ(PricingFAQ)

    %% About Page Layout
    Page_About --- AboHero(AboutHero)
    Page_About --- AboMiss(AboutMission)
    Page_About --- AboGrid(AboutGrid)
    Page_About --- AboCTA(AboutBottomCTA)
    Page_About --- AboFAQ(AboutFAQ)

    %% Contact Page Layout
    Page_Contact --- ConHero(ContactHero)
    Page_Contact --- ConInfo(ContactInfo)
    Page_Contact --- ConFAQ(ContactFAQ)

    %% Common Reusable Components
    subgraph components/ui [Các UI Components (Atomic)]
        C_Btn(Button.tsx)
        C_Icon(Icon.tsx)
        C_Badge(Badge.tsx)
        C_Acc(Accordion.tsx)
        ThemeToggle
    end
    
    subgraph components/common [Common Components]
        C_Err(ErrorBoundary.tsx)
    end
    
    %% Implicit Usage
    ThemeToggle -.-> ThemeProvider
    C_Btn -.-> Page_Home
    C_Icon -.-> Page_Home
    C_Icon -.-> Page_Pricing
    C_Badge -.-> Page_Pricing
    C_Icon -.-> Page_About
```

## 2. Giải thích Cấu trúc Thư mục

| Đường dẫn / Thư mục | Chức năng (Trách nhiệm) |
| --- | --- |
| `src/main.tsx` | Điểm bắt đầu (Entry point), thiết lập React DOM và Strict Mode. |
| `src/context/` | Chứa `ThemeContext` và `ThemeProvider`, quản lý light/dark mode cho toàn ứng dụng. |
| `src/App.tsx` | Quản lý điều hướng (React Router), chèn `Layout` vào tất cả các lộ trình (Routes) và xử lý `ScrollToTop`. |
| `src/pages/` | Chứa các màn hình cấp cao nhất tương ứng với một URL cụ thể. Chúng hoạt động như những "Container" sắp xếp và gọi các `components/` tương ứng. Thường sử dụng `lazy()` để tối ưu performance. |
| `src/components/layout/` | Chứa thiết kế bố cục bọc ngoài (Navbar, Footer, ScrollToTop). |
| `src/components/ui/` | **Các thành phần Atomic (Button, Badge, Icon, Accordion)**. Được thiết kế riêng theo hệ thống màu sắc của dự án, độc lập với business logic. |
| `src/components/home/` | Chứa các vùng (Sections) cho Trang Chủ (Hero, Features, Vision, v.v.). |
| `src/components/pricing/` | Chứa các khối giao diện cho trang Bảng giá. `PricingSection` được tái sử dụng cả ở trang Home. |
| `src/components/about/` | Chứa các khối giao diện cho trang Giới thiệu. |
| `src/components/contact/` | Chứa các khối giao diện cho trang Liên hệ. |
| `src/components/common/` | Các tiện ích chung cho component như `ErrorBoundary`. |

## 3. Lợi ích của Kiến trúc Này
1. **Lắp ghép tinh gọn:** Logic và UI được chẻ nhỏ (Modularize). Sử dụng `React.lazy` để giảm kích thước bundle ban đầu, giúp trình duyệt kết xuất mượt mà.
2. **Khả năng Tái sử dụng cao:** `PricingSection.tsx` được thiết kế linh hoạt để dùng ở cả trang Home (hooking) và trang Pricing (chi tiết).
3. **Quản lý UI tập trung:** Các component trong `src/components/ui/` giúp đảm bảo tính nhất quán (Consistency) của ngôn ngữ thiết kế trên toàn bộ ứng dụng. 
