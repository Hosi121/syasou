import { defineConfig } from 'vite'
import { readFileSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import { embedBootGuard, unsupportedModules } from './src/generated/moonbit/runtime-policy.js'

let projectRoot = ''

export default defineConfig({
  plugins: [tailwindcss(), {
    name: 'moonbit-runtime-only',
    configResolved(config) { projectRoot = config.root },
    transformIndexHtml: {
      order: 'pre',
      handler(html) {
        return embedBootGuard(html, readFileSync(`${projectRoot}/src/generated/moonbit/boot-guard.js`, 'utf8').trim())
      },
    },
    generateBundle() {
      const unsupported = unsupportedModules(projectRoot, [...this.getModuleIds()])
      if (unsupported.length) this.error(`Non-MoonBit code entered the application bundle:\n${unsupported.join('\n')}`)
    },
  }],
  server: { host: '0.0.0.0', port: 5173 },
})
