import { cp, mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const cmsPublic = path.join(root, 'apps/cms/public')
const rewritesOut = path.join(root, 'apps/cms/marketing-rewrites.generated.json')

await rm(cmsPublic, { recursive: true, force: true })
await mkdir(cmsPublic, { recursive: true })
await cp(distDir, cmsPublic, { recursive: true })

/**
 * Walk `blog/` under public and emit afterFiles rewrites so `/blog/...` serves
 * `.../index.html` (Next public does not map clean URLs to nested index.html).
 */
async function collectBlogAfterFiles(dir, segments) {
  const entries = await readdir(dir, { withFileTypes: true })
  const hasIndex = entries.some((e) => e.name === 'index.html')
  const out = []

  if (hasIndex) {
    const source = segments.length === 0 ? '/blog' : `/blog/${segments.join('/')}`
    const destination =
      segments.length === 0 ? '/blog/index.html' : `/blog/${segments.join('/')}/index.html`
    out.push({ source, destination })
  }

  for (const e of entries) {
    if (e.isDirectory()) {
      out.push(...(await collectBlogAfterFiles(path.join(dir, e.name), [...segments, e.name])))
    }
  }

  return out
}

const blogRoot = path.join(cmsPublic, 'blog')
let afterFiles = []
try {
  await readdir(blogRoot)
  afterFiles = await collectBlogAfterFiles(blogRoot, [])
} catch {
  // No blog prerender output
}

const payload = { afterFiles }
await writeFile(rewritesOut, `${JSON.stringify(payload, null, 2)}\n`)
console.log(`prepare-cms-public: copied dist -> ${cmsPublic}, ${afterFiles.length} blog rewrites -> ${rewritesOut}`)
