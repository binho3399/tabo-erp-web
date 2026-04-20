const isCi = process.env.CI === 'true'
const isProduction = process.env.NODE_ENV === 'production'
const blogSource = process.env.BLOG_SOURCE ?? 'mock'

const failures = []

if (blogSource === 'payload' && !process.env.PAYLOAD_PUBLIC_URL) {
  failures.push('PAYLOAD_PUBLIC_URL is required when BLOG_SOURCE=payload.')
}

if ((isCi || isProduction) && process.env.PAYLOAD_SECRET === 'tabo-cms-local-secret') {
  failures.push('PAYLOAD_SECRET must not use the local default in CI/production.')
}

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`ENV CHECK FAIL: ${failure}`)
  }
  process.exit(1)
}

console.log('ENV CHECK PASS')
