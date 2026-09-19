---
name: Website Release Sync
description: Checklist dieu phoi cap website v2 cho SEO, Blog, Prefetch, Build/Perf va dong bo tai lieu.
---

# Website Release Sync (Website v2)

## Muc tieu
Skill nay dam bao cac thay doi website quan trong duoc validate theo checklist cross-cutting truoc khi ket thuc task, tranh missing o cac lop SEO, blog data, prefetch, build/perf va docs.

## Pham vi ap dung
- Uu tien cho website public-facing trong `src/**` va cac file pipeline/deploy.
- Khong thay the skill UI vibe; skill nay dung de review va dong bo cap he thong.

## Trigger (khi nao PHẢI kich hoat)
Kich hoat skill nay neu task co thay doi o it nhat 1 nhom sau:
1. SEO/meta: `src/components/seo/**`, `src/lib/blog/seo.ts`, page metadata hooks.
2. Blog data flow: `src/lib/blog/**`, `src/pages/Blog*.tsx`, `src/components/blog/**`.
3. Prefetch/routing infra: `src/components/ui/PrefetchLink.tsx`, `src/lib/route-prefetch.ts`, `src/config/routes.ts`.
4. Build/perf/deploy: `scripts/**`, `vite.config.ts`, `vercel.json`, `package.json` scripts lien quan build.

## Checklist bat buoc

### 1) SEO checklist
- Co canonical path hop ly cho page index/category/post.
- Robots policy ro rang (index/noindex) theo dung trang thai.
- OG/Twitter metadata co fallback an toan khi thieu media.
- JSON-LD dung type theo loai trang (index/category/post).

### 2) Blog data contract checklist
- Dynamic paths (slug/categorySlug) va indexable path list khong bi vo.

### 3) Prefetch va routing checklist
- Internal CTA/links quan trong dung pattern prefetch nhat quan.
- Route dong duoc normalize dung (`/blog/:slug`, `/blog/category/:categorySlug`).
- Budget guard con hoat dong: dedupe, throttle, network-aware (`saveData`, 2g), visibility.

### 4) Build/Perf checklist
- Manual chunk strategy trong `vite.config.ts` khong bi pha vo.
- Bundle budget script van duoc goi trong pipeline.
- Cache headers trong `vercel.json` con nhat quan voi nhom route.
- Neu co thay doi env/script runtime, cap nhat huong dan trong `README.md`.

### 5) Docs sync checklist
- Neu doi route/component/data flow: cap nhat `ARCHITECTURE.md`.
- Neu doi build/runtime/process: cap nhat `README.md`.
- Noi dung docs can noi ro "vi sao" thay doi, khong chi liet ke file.

## Trinh tu AI de xuat khi chay skill
1. Xac dinh task thuoc nhom thay doi nao.
2. Chay checklist tuong ung (SEO, Blog-CMS, Prefetch, Perf, Docs).
3. Neu fail 1 muc, phai sua hoac neu ro risk ton dong.
4. Chot task bang tom tat ngan theo 5 nhom checklist.

## Trigger phrases mau
- "Cap nhat website version moi"
- "Refactor blog + seo cho production"
- "Toi uu prefetch va performance"
- "Chinh scripts build/deploy cho web"
- "Dong bo docs sau khi thay doi route/data flow"
