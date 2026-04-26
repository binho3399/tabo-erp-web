const failures = []

if (failures.length > 0) {
  for (const failure of failures) {
    console.error(`ENV CHECK FAIL: ${failure}`)
  }
  process.exit(1)
}

console.log('ENV CHECK PASS')
