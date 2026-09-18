import { readFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'

// Render the existing vector mark with enough margin for platform icon masks.
// This is a maintenance task; checked-in icons need no browser during a build.
const root = new URL('../', import.meta.url)
const source = readFileSync(new URL('public/favicon.svg', root), 'utf8')
const mark = source.replace('<svg ', '<svg x="8" y="8" width="48" height="48" ')
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#e5e5e5"/>${mark}</svg>`
const destination = new URL('public/icons/', root)
mkdirSync(destination, { recursive: true })
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined })
try {
  const page = await browser.newPage({ deviceScaleFactor: 1 })
  for (const [size, filename] of [[192, 'app-192.png'], [512, 'app-512.png'], [180, 'apple-touch-icon.png']]) {
    await page.setViewportSize({ width: size, height: size })
    await page.setContent(`<html><head><style>html,body{margin:0;width:100%;height:100%;background:#e5e5e5}svg{display:block;width:100%;height:100%}svg svg{width:48px;height:48px}</style></head><body>${svg}</body></html>`)
    await page.screenshot({ path: fileURLToPath(new URL(filename, destination)) })
  }
  console.log('Rendered app icons from the existing train mark.')
} finally { await browser.close() }
