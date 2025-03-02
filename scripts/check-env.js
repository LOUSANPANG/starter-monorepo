#!/usr/bin/env node

const requiredMajorVersion = 20
const currentVersion = process.version

const majorVersion = parseInt(currentVersion.replace(/^v/, '').split('.')[0], 10)

if (majorVersion < requiredMajorVersion) {
  console.error(`❌ Node.js ${requiredMajorVersion}+ is required. You are using ${currentVersion}.`)
  console.error(`Please upgrade: https://nodejs.org/`)
  process.exit(1)
}

console.log(`✅ Node.js version check passed: ${currentVersion}`)
