const fs = require('fs');
const path = require('path');
const { chromium, devices } = require('playwright');

const BASE = process.env.BASE_URL || 'http://127.0.0.1:8080';
const PAGES = ['/', '/about/', '/projects/'];
const OUT = path.join(process.cwd(), 'screenshots');

function fnameFor(p) {
  const n = p.replace(/(^\/+|\/+$)/g, '') || 'home';
  return n.replace(/[^a-z0-9\-]/gi, '_');
}

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

  const browser = await chromium.launch();

  // Desktop
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  for (const p of PAGES) {
    const url = BASE.replace(/\/$/, '') + p;
    console.log('Capturing desktop:', url);
    await page.goto(url, { waitUntil: 'networkidle' });
    const file = path.join(OUT, `${fnameFor(p)}-desktop.png`);
    await page.screenshot({ path: file, fullPage: true });
  }
  await context.close();

  // Mobile (iPhone 12)
  const mobile = devices['iPhone 12'];
  const mctx = await browser.newContext({ ...mobile });
  const mpage = await mctx.newPage();
  for (const p of PAGES) {
    const url = BASE.replace(/\/$/, '') + p;
    console.log('Capturing mobile:', url);
    await mpage.goto(url, { waitUntil: 'networkidle' });
    const file = path.join(OUT, `${fnameFor(p)}-mobile.png`);
    await mpage.screenshot({ path: file, fullPage: true });
  }
  await mctx.close();

  await browser.close();
  console.log('Screenshots saved to', OUT);
})().catch(err => {
  console.error(err);
  process.exit(1);
});
