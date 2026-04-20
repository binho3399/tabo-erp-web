import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const distAssetsDir = path.resolve('dist/assets')
const budgets = {
  entryJs: 120 * 1024,
  /** Entry CSS (Tailwind): allow headroom as utility surface grows. */
  entryCss: 165 * 1024,
  totalJs: 520 * 1024,
  totalCss: 210 * 1024,
  largestChunk: 260 * 1024,
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

async function listAssetSizes(extension) {
  const files = await readdir(distAssetsDir)
  const matchingFiles = files.filter((file) => file.endsWith(extension))
  const assets = await Promise.all(matchingFiles.map(async (file) => ({
    file,
    size: (await stat(path.join(distAssetsDir, file))).size,
  })))
  return assets.sort((left, right) => right.size - left.size)
}

const [entryJs, entryCss, jsAssets, cssAssets] = await Promise.all([
  getAssetSize('index-', '.js'),
  getAssetSize('index-', '.css'),
  listAssetSizes('.js'),
  listAssetSizes('.css'),
])

if (!entryJs || !entryCss) {
  throw new Error('Khong tim thay entry bundle trong dist/assets. Hay chay build truoc.')
}

const results = [
  { label: 'Entry JS', asset: entryJs, budget: budgets.entryJs },
  { label: 'Entry CSS', asset: entryCss, budget: budgets.entryCss },
  {
    label: 'Total JS',
    asset: {
      file: `${jsAssets.length} files`,
      size: jsAssets.reduce((total, asset) => total + asset.size, 0),
    },
    budget: budgets.totalJs,
  },
  {
    label: 'Total CSS',
    asset: {
      file: `${cssAssets.length} files`,
      size: cssAssets.reduce((total, asset) => total + asset.size, 0),
    },
    budget: budgets.totalCss,
  },
  { label: 'Largest JS Chunk', asset: jsAssets[0], budget: budgets.largestChunk },
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

const topJsChunks = jsAssets.slice(0, 5)
console.log('\nTop JS chunks:')
for (const chunk of topJsChunks) {
  console.log(`- ${chunk.file}: ${formatSize(chunk.size)}`)
}

if (hasFailure) {
  process.exitCode = 1
}
