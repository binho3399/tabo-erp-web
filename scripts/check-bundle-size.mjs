import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const distAssetsDir = path.resolve('dist/assets')
const budgets = {
  entryJs: 120 * 1024,
  /** Entry CSS (Tailwind): allow small headroom above gzip-neutral growth from utility classes. */
  entryCss: 155 * 1024,
}

function formatSize(bytes) {
  return `${(bytes / 1024).toFixed(2)} kB`
}

async function getAssetSize(prefix, extension) {
  const files = await readdir(distAssetsDir)
  const match = files.find((file) => file.startsWith(prefix) && file.endsWith(extension))

  if (!match) {
    return null
  }

  const filePath = path.join(distAssetsDir, match)
  const assetStat = await stat(filePath)

  return {
    file: match,
    size: assetStat.size,
  }
}

const [entryJs, entryCss] = await Promise.all([
  getAssetSize('index-', '.js'),
  getAssetSize('index-', '.css'),
])

if (!entryJs || !entryCss) {
  throw new Error('Khong tim thay entry bundle trong dist/assets. Hay chay build truoc.')
}

const results = [
  { label: 'Entry JS', asset: entryJs, budget: budgets.entryJs },
  { label: 'Entry CSS', asset: entryCss, budget: budgets.entryCss },
]

let hasFailure = false

for (const result of results) {
  const status = result.asset.size <= result.budget ? 'PASS' : 'FAIL'
  if (status === 'FAIL') {
    hasFailure = true
  }

  console.log(
    `${status} ${result.label}: ${result.asset.file} = ${formatSize(result.asset.size)} / budget ${formatSize(result.budget)}`,
  )
}

if (hasFailure) {
  process.exitCode = 1
}
