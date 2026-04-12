import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const distDir = path.resolve('dist')
const templatePath = path.join(distDir, 'index.html')
const serverEntryPath = path.join(distDir, 'server', 'entry-server.js')

const template = await readFile(templatePath, 'utf8')
const serverEntry = await import(pathToFileURL(serverEntryPath).href)

const { getPrerenderPaths, renderPath } = serverEntry
const prerenderPaths = await getPrerenderPaths()

function cleanHead(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/<meta\s+name="description"[^>]*>/i, '')
    .replace(/<meta\s+name="robots"[^>]*>/gi, '')
    .replace(/<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/<meta\s+(?:property|name)="(?:og:[^"]+|twitter:[^"]+)"[^>]*>/gi, '')
    .replace(/<script[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '')
}

function renderDocument(baseHtml, appHtml, headHtml) {
  const withHead = cleanHead(baseHtml).replace('</head>', `${headHtml}\n</head>`)
  return withHead.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

function toOutputPath(routePath) {
  const normalized = routePath === '/' ? '' : routePath.replace(/^\//, '')
  return path.join(distDir, normalized, 'index.html')
}

async function writeRoute(routePath) {
  const { appHtml, metadata } = await renderPath(routePath)
  const outputPath = toOutputPath(routePath)
  await mkdir(path.dirname(outputPath), { recursive: true })
  await writeFile(outputPath, renderDocument(template, appHtml, serverEntry.renderMetadataToHead(metadata)))
}

for (const routePath of prerenderPaths) {
  await writeRoute(routePath)
}

const sitemapEntries = [
  '',
  'pricing',
  'about',
  'contact',
  ...prerenderPaths.map((routePath) => routePath.replace(/^\//, '')),
]

const uniqueEntries = [...new Set(sitemapEntries)].map((slug) => `https://tabo.vn/${slug}`.replace(/\/$/, ''))
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueEntries
  .map((url) => `  <url><loc>${url}</loc></url>`)
  .join('\n')}\n</urlset>\n`

await writeFile(path.join(distDir, 'sitemap.xml'), sitemap)
await writeFile(
  path.join(distDir, 'robots.txt'),
  ['User-agent: *', 'Allow: /', 'Sitemap: https://tabo.vn/sitemap.xml', ''].join('\n'),
)

await rm(path.join(distDir, 'server'), { recursive: true, force: true })

console.log(`Prerendered ${prerenderPaths.length} blog routes, sitemap.xml and robots.txt`)
