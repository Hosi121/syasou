import { defineConfig, devices } from '@playwright/test'
import base from './playwright.config'

export default defineConfig({
  ...base,
  testMatch: '**/mobile.spec.ts',
  testIgnore: [],
  use: { ...base.use, launchOptions: {}, reducedMotion: 'reduce' },
  projects: [
    { name: 'android', use: { ...devices['Pixel 7'], launchOptions: { executablePath: process.env.CHROMIUM_PATH || undefined } } },
    { name: 'iphone', use: { ...devices['iPhone 13'], launchOptions: {} } },
  ],
})
