/**
 * Chromium check: contact hero SMIL nodes should move after SPA navigation.
 * Run with dev server: BASE_URL=http://127.0.0.1:5173 node scripts/verify-contact-hero-motion.mjs
 */
import { chromium } from 'playwright'

async function measurePinMotion(page) {
  return page.evaluate(async () => {
    const g = document.querySelector('[data-testid="contact-hero-mover-pin"]')
    if (!g) return { ok: false, reason: 'pin mover group not found' }
    const r1 = g.getBoundingClientRect()
    await new Promise((r) => setTimeout(r, 500))
    const r2 = g.getBoundingClientRect()
    const moved = Math.abs(r1.x - r2.x) > 0.5 || Math.abs(r1.y - r2.y) > 0.5
    return { ok: true, moved, r1: { x: r1.x, y: r1.y }, r2: { x: r2.x, y: r2.y } }
  })
}

const base = process.env.BASE_URL || 'http://127.0.0.1:5173'

const browser = await chromium.launch()
const page = await browser.newPage()

try {
  await page.goto(`${base}/contact`, { waitUntil: 'domcontentloaded', timeout: 30_000 })
  await page.waitForSelector('[data-testid="contact-hero-mover-pin"]', { timeout: 20_000 })
  await page.waitForTimeout(400)

  let r = await measurePinMotion(page)
  if (!r.ok) throw new Error(r.reason)
  if (!r.moved) {
    console.warn('warn: pin static on first paint — may still be ok if SMIL is slow:', r)
  }

  // Client-side navigation (same as Chrome users) — full page.goto would remount the whole app anyway.
  await page.locator('a[href="/"]').first().click()
  await page.waitForURL((u) => u.pathname === '/', { timeout: 10_000 })
  await page.waitForTimeout(200)
  await page.locator('a[href="/contact"]').first().click()
  await page.waitForURL((u) => u.pathname === '/contact', { timeout: 10_000 })
  await page.waitForSelector('[data-testid="contact-hero-mover-pin"]', { timeout: 20_000 })
  await page.waitForTimeout(400)

  r = await measurePinMotion(page)
  if (!r.ok) throw new Error(r.reason)
  if (!r.moved) {
    console.error('FAIL: pin did not move after navigating away and back', r)
    process.exitCode = 1
  } else {
    console.log('OK: animated pin moved after return visit (Chromium)')
  }
} finally {
  await browser.close()
}
