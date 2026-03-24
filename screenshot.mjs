import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pages = ['/', '/pricing', '/about', '/contact'];
  const names = ['home', 'pricing', 'about', 'contact'];
  
  for (let i = 0; i < pages.length; i++) {
    console.log("Navigating to " + pages[i]);
    try {
      await page.goto('http://127.0.0.1:9999' + pages[i], { waitUntil: 'domcontentloaded', timeout: 10000 });
      await page.waitForTimeout(1500); // allow animations/imgs to load
      await page.screenshot({ path: `/Users/macbook/.gemini/antigravity/brain/dddffdb1-afe2-47ef-92ff-0f8b642ca715/${names[i]}_v4.png` });
      console.log("Saved " + names[i]);
    } catch (e) {
      console.error(e);
    }
  }
  await browser.close();
})();
