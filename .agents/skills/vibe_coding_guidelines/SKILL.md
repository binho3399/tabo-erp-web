---
name: Tabo ERP Vibe Coding Guidelines
description: Hướng dẫn phong cách thiết kế (Aesthetic Vibe) và các chuẩn mực UI/UX Frontend cụ thể cho dự án Tabo ERP. Áp dụng Vibe này cho mọi file giao diện mới.
---

# Huong dan Vibe Coding (UI/UX Aesthetics)

Tai lieu nay mo ta phong cach thiet ke cot loi cua Tabo ERP theo huong practical: uu tien token, primitives dung chung, va tinh nhat quan tren toan bo trang public-facing.

## 0. Pham vi va boundary
- Skill nay uu tien cho website public-facing trong `src/pages`, `src/components`, `src/app`.
- Khong ap dung truc tiep cho schema va admin CMS trong `apps/cms/**`.
- Neu task lien quan ca UI website va contract CMS/blog, ket hop skill nay voi skill release-sync/architecture-sync.

## 1. Phong cach cot loi
- Cam giac giao dien: premium, tech-forward, gon gang, de doc, co chieu sau thi giac.
- MUST uu tien mau xanh thuong hieu tren nen sang va slate (`text-slate-900`, `text-slate-500`, `bg-blue-600`, `bg-white`).
- SHOULD dung glow/blur/ambient effects co muc dich de tao do sau, khong dung qua da gay roi mat.

## 2. Design tokens va shared primitives
- MUST uu tien dung primitives truoc khi viet class roi:
  - `SectionHeader`, `SurfaceCard`, `Badge`, `Button`
  - semantic classes trong `src/index.css`: `.section-title`, `.section-description`, `.section-kicker`, `.surface-card`, `.section-container`
- MUST dung `font-sans` theo token theme (`var(--font-sans)`), khong hardcode Inter.
- SHOULD chi override class khi section co yeu cau dac thu, va override phai toi thieu.
- MUST giu support dark mode khi component co context dark.

## 3. Typography system theo ngu canh
- MUST tach ro 4 cap: hero title, section title, card title, body text.
- SHOULD dung `.section-title` va `.section-description` cho section thong thuong thay vi copy class thu cong.
- MAY dung `text-[...]` cho hero/art direction, nhung van giu `tracking-tight` + `leading` de doc tot.
- MUST uu tien do ro rang noi dung, khong ep 1 cap kich thuoc co dinh cho moi trang.

## 4. Spacing scale va rhythm
- MUST dung spacing scale nhat quan: card padding thuong trong nhom `p-4`, `p-5`, `p-6`, desktop co the `p-8`.
- SHOULD dung nhip khoang cach theo nhom:
  - title stack: `mb-4` hoac `mb-5`
  - section rhythm: `gap-6`, `gap-8`, `py-16+` tuy context
- MUST theo mobile-first: kich thuoc nho o mobile, tang nhip qua breakpoint (`sm`, `md`, `lg`).

## 5. Motion guidelines (co chu dich + accessible)
- SHOULD chi them motion cho feedback/hierarchy (hover, focus, vao viewport), khong bat buoc animate moi element.
- MUST uu tien `transition-colors`, `transition-transform`, `opacity`; han che lam dung `transition-all` khi khong can thiet.
- MAY dung `duration-200`, `300`, `500` tuy muc dich; motion nhanh cho control, motion cham hon cho card/hero.
- MUST ton trong `prefers-reduced-motion`.

## 6. Lazy loading va viewport activation
- MUST dung `React.lazy + Suspense` lam mac dinh cho code-splitting.
- SHOULD dung `DeferredSection` cho section nang va nam duoi fold de giam CLS va chi phi render ban dau.
- MUST chon skeleton phu hop layout:
  - `RouteSkeleton`, `PricingTableSkeleton`, `FAQSkeleton`, `ContentGridSkeleton`, `HeroSkeleton`
- MUST dat `minHeight` gan voi chieu cao that khi dung `DeferredSection`.
- SHOULD dung `useViewportActivity` + `motion-gated` cho section can kich hoat animation theo viewport (hero/feature strips/visual blocks).

## 7. Data blocks: tables, faq, badges
- Comparison tables:
  - SHOULD uu tien flat table/grid de de scan.
  - MUST giu cap header va contrast ro.
  - SHOULD hien thi trang thai boolean ro rang (check hoặc ky hieu thay the nhat quan).
- FAQ:
  - SHOULD 2 cot o desktop khi noi dung can bang.
  - MAY 1 cot o desktop neu noi dung dai/technical can readability cao.
  - MUST 1 cot o mobile.
- Badge semantics:
  - MUST dung `Badge variant="primary"` cho section kicker/CTA context.
  - SHOULD dung `variant="secondary"` cho taxonomy/meta (blog category/tag).
  - MUST dam bao badge de doc o ca light/dark mode.

## 8. Content language policy
- MUST uu tien tieng Viet cho toan bo UI public-facing (title, description, CTA, label, empty state).
- MAY giu nguyen thuat ngu/brand kho dich hoac dich gay mat nghia: ERP, API, CRM, POS, Zalo, TikTok.
- SHOULD tranh tron Anh-Viet trong cung mot cum CTA/label neu khong can thiet.

## 9. Trigger va cach AI ap dung
Khi user yeu cau kieu:
- "Lay vibe project lam UI cho section nay"
- "Tao them card dich vu"
- "Design component abc chuan premium"
- "Lam lai giao dien pricing/blog/about theo style hien tai"
- "Can polish UI de dong bo voi trang public-facing"

AI MUST:
- Uu tien token + primitives truoc.
- Chon spacing/typography theo system nay.
- Dam bao language policy (tieng Viet first) truoc khi chot.
- Giu motion vua du, co accessibility.
- Giu nhat quan voi pattern website moi: prefetch link cho CTA dieu huong noi bo, metadata/seo khong bi pha vo.

## 10. Governance va cap nhat guideline
- SHOULD de xuat cap nhat guideline khi pattern moi duoc dung lap lai >= 2 noi hoac duoc user chot thanh chuan moi.
- MUST neu ro pham vi thay doi (token/component/pattern) va vi du ap dung truoc khi cap nhat.
- MAY tam hoan cap nhat tai lieu neu thay doi con dang thu nghiem.

## 11. Guardrail quality gate (truoc khi chot UI)
- Kiem tra primitive-first: da dung `SectionHeader`/`SurfaceCard`/`Badge`/`Button` truoc khi custom class.
- Kiem tra responsive va accessibility: mobile-first, focus state, reduced-motion.
- Kiem tra noi dung: uu tien tieng Viet, khong tron CTA Anh-Viet bat hop ly.
- Kiem tra integration: internal links can prefetch dung pattern (`PrefetchLink`) neu la CTA dieu huong.
- Kiem tra pham vi: neu thay doi va cham SEO/blog data flow, phai kich hoat them skill release-sync.
