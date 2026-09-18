import { test, expect } from '@playwright/test'
import type { Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { freezeClock as frozenClock, waitForScene } from './scene'

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.addInitScript(() => { sessionStorage.setItem('syasou.entered.v1', '1'); localStorage.setItem('syasou.onboarding.v1', 'true') })
})

async function openBook(page: Page) {
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await expect(page.getByRole('dialog', { name: '旅の手帳' })).toBeVisible()
}

async function board(page: Page) {
  await page.getByRole('button', { name: '乗車する', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
}
async function putTicketAway(page: Page) {
  await page.getByRole('button', { name: '手帳にしまう', exact: true }).click()
  await expect(page.getByRole('dialog', { name: '到着の切符' })).toHaveCount(0)
  await page.clock.runFor(10)
}

test('the resting scene has no visible copy or dashboard; objects are keyboard accessible', async ({ page }) => {
  await page.goto('/')
  await waitForScene(page)
  await expect(page.locator('body')).toHaveText('車窓') // Only the screen-reader heading.
  await expect(page.locator('header, footer, .journey-toolbar')).toHaveCount(0)
  await page.getByRole('button', { name: '旅の手帳を開く' }).focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: '旅の手帳' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: '旅の手帳を開く' })).toBeFocused()
})

test('boarding closes the book, pause holds time, and arrival waits for the next departure', async ({ page }) => {
  await frozenClock(page)
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await board(page)
  await page.clock.runFor(10)
  await page.clock.fastForward(60_000)
  await openBook(page)
  await expect(page.locator('.time-value')).toHaveText('24:00')
  await page.getByRole('button', { name: '一時停止', exact: true }).click()
  await expect(page.locator('.landscape')).toHaveClass(/landscape-paused/)
  await page.clock.fastForward(5 * 60_000)
  await expect(page.locator('.time-value')).toHaveText('24:00')
  await page.getByRole('button', { name: '旅を再開', exact: true }).click()
  await page.clock.runFor(10)
  await page.clock.fastForward(24 * 60_000)
  await expect(page).toHaveTitle('休憩 — 車窓')
  await expect(page.locator('.landscape')).toHaveClass(/landscape-paused/)
  await putTicketAway(page)
  await openBook(page)
  await expect(page.locator('.time-value')).toHaveText('05:00')
  await page.clock.fastForward(5 * 60_000)
  await expect(page.locator('.paper-phase')).toHaveText('到着')
  await page.getByRole('button', { name: 'もう一度乗車する' }).click()
  await page.clock.runFor(10)
  await openBook(page)
  await expect(page.locator('.time-value')).toHaveText('25:00')
})

test('elapsed time survives reloading and a long absence does not start another journey', async ({ page }) => {
  await frozenClock(page)
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await board(page)
  await page.clock.fastForward(7 * 60_000)
  await page.reload()
  await waitForScene(page)
  await openBook(page)
  await expect(page.locator('.time-value')).toHaveText('18:00')
  await page.clock.fastForward(24 * 60_000)
  await page.reload()
  await waitForScene(page)
  await putTicketAway(page)
  await openBook(page)
  await expect(page.locator('.paper-phase')).toHaveText('到着')
})

test('settings, speed, an untimed journey, and a handwritten note persist', async ({ page }) => {
  await frozenClock(page)
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await page.getByRole('textbox', { name: '手帳のメモ' }).fill('小説のつづき')
  await page.getByRole('button', { name: '旅の設定', exact: true }).click()
  await page.getByRole('radio', { name: '時間を決めずに' }).click()
  await page.getByRole('radio', { name: '夜', exact: true }).click()
  await page.getByRole('radio', { name: '特急', exact: true }).click()
  await page.getByRole('button', { name: '残り時間を表示する' }).click()
  await page.getByRole('button', { name: '手帳に戻る', exact: true }).first().click()
  await board(page)
  await page.clock.fastForward(180 * 60_000)
  await expect(page).toHaveTitle('車窓 — 乗車中')
  await page.reload()
  await waitForScene(page)
  await openBook(page)
  await expect(page.getByRole('textbox', { name: '手帳のメモ' })).toHaveValue('小説のつづき')
  await expect(page.locator('.landscape')).toHaveClass(/scene-night/)
  await expect(page.locator('.paper-speed')).toHaveText('express')
  await expect(page.locator('.time-value')).toHaveCount(0)
  await page.getByRole('button', { name: '旅を終える', exact: true }).click()
  await putTicketAway(page)
  await openBook(page)
  await expect(page.locator('.paper-phase')).toHaveText('到着')
})

test('duration changes during a journey apply at the next departure', async ({ page }) => {
  await frozenClock(page)
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await board(page)
  await page.clock.runFor(10)
  await openBook(page)
  await page.getByRole('button', { name: '旅の設定', exact: true }).click()
  await page.getByRole('radio', { name: '45分', exact: true }).click()
  await expect(page.getByText('時間の変更は次の乗車から')).toBeVisible()
  await page.getByRole('button', { name: '手帳に戻る', exact: true }).first().click()
  await expect(page.locator('.time-value')).toHaveText('25:00')
  await page.getByRole('button', { name: '旅を終える', exact: true }).click()
  await putTicketAway(page)
  await openBook(page)
  await page.getByRole('button', { name: 'もう一度乗車する' }).click()
  await page.clock.runFor(10)
  await openBook(page)
  await expect(page.locator('.time-value')).toHaveText('45:00')
})

test('sound, the physical window latch, looking outside and fullscreen work', async ({ page }) => {
  const errors: string[] = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto('/')
  await waitForScene(page)
  await page.getByRole('button', { name: '窓をひらく', exact: true }).click()
  await expect(page.getByRole('button', { name: '窓を閉める' })).toHaveAttribute('aria-pressed', 'true')
  await openBook(page)
  await page.getByRole('button', { name: '音を入れる', exact: true }).click()
  await expect(page.getByRole('button', { name: '音を消す' })).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: '旅の設定', exact: true }).click()
  await page.getByRole('slider', { name: '雨の音' }).fill('30')
  await page.getByRole('slider', { name: '風の音' }).fill('70')
  await page.getByRole('button', { name: '音を消す' }).click()
  await page.keyboard.press('Escape')
  await page.getByRole('button', { name: '車窓を眺める' }).click()
  await expect(page.locator('.world')).toHaveClass(/at-window/)
  await expect(page.getByRole('button', { name: '旅の手帳を開く' })).toHaveCount(0)
  const bounds = await page.locator('.window-world').boundingBox()
  expect(bounds!.x + bounds!.width).toBeGreaterThanOrEqual(1440)
  await page.keyboard.press('Escape')
  await expect(page.locator('.world')).not.toHaveClass(/at-window/)
  await page.mouse.move(1390, 870)
  await page.getByRole('button', { name: '全画面で見る' }).click()
  await expect(page.getByRole('button', { name: '全画面を終了' })).toHaveAttribute('aria-pressed', 'true')
  await page.getByRole('button', { name: '全画面を終了' }).click()
  expect(errors).toEqual([])
})

test('paper controls remain inside laptop and desktop viewports', async ({ page }) => {
  await page.goto('/')
  await waitForScene(page)
  for (const [width, height] of [[1280, 720], [1440, 900], [1920, 1080]]) {
    await page.setViewportSize({ width, height })
    await openBook(page)
    await page.getByRole('button', { name: '旅の設定', exact: true }).click()
    const fit = await page.evaluate(() => {
      const book = document.querySelector('.journal')!.getBoundingClientRect()
      const clock = document.querySelector('.clock-setting')!.getBoundingClientRect()
      return book.x >= 0 && book.y >= 0 && book.right <= innerWidth && book.bottom <= innerHeight && clock.bottom < book.bottom
    })
    expect(fit).toBe(true)
    await page.keyboard.press('Escape')
  }
})

test('storage failures do not block boarding or writing in the book', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('syasou.preferences.v1', '{broken')
    localStorage.setItem('syasou.journey.v1', JSON.stringify({ phase: 'focus', running: true }))
    Storage.prototype.setItem = () => { throw new DOMException('Unavailable', 'QuotaExceededError') }
  })
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await board(page)
  await openBook(page)
  await page.getByRole('textbox', { name: '手帳のメモ' }).fill('ここにいよう')
  await expect(page.getByRole('textbox', { name: '手帳のメモ' })).toHaveValue('ここにいよう')
})

test('the shader produces neutral high contrast grain and reduced motion freezes it', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  await waitForScene(page)
  await expect(page.locator('.landscape')).toHaveAttribute('data-renderer', 'webgl')
  const pixels = await page.evaluate(() => new Promise<{ chroma: number; range: number }>((resolve, reject) => {
    const canvas = document.querySelector('canvas')!
    const gl = canvas.getContext('webgl')!
    const draw = gl.drawArrays.bind(gl)
    const timeout = setTimeout(() => reject(new Error('No frame was rendered')), 2500)
    gl.drawArrays = (mode, first, count) => {
      draw(mode, first, count)
      const data = new Uint8Array(64 * 64 * 4)
      gl.readPixels(Math.floor(canvas.width / 2), Math.floor(canvas.height / 2), 64, 64, gl.RGBA, gl.UNSIGNED_BYTE, data)
      let chroma = 0; let min = 255; let max = 0
      for (let i = 0; i < data.length; i += 4) {
        chroma = Math.max(chroma, Math.abs(data[i] - data[i + 1]), Math.abs(data[i] - data[i + 2]))
        min = Math.min(min, data[i]); max = Math.max(max, data[i])
      }
      gl.drawArrays = draw
      clearTimeout(timeout)
      resolve({ chroma, range: max - min })
    }
  }))
  expect(pixels.chroma).toBe(0)
  expect(pixels.range).toBeGreaterThan(180)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const still = await page.locator('canvas').screenshot()
  await page.waitForTimeout(180)
  expect(await page.locator('canvas').screenshot()).toEqual(still)
})

test('the passing landscape moves, holds its position when paused, and resumes', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/')
  await waitForScene(page)
  await expect(page.locator('.landscape')).toHaveAttribute('data-renderer', 'webgl')
  // Read the actual landscape independently of the notebook and the room camera.
  const fingerprint = () => page.evaluate(() => {
    const canvas = document.querySelector('canvas')!
    const gl = canvas.getContext('webgl')!
    gl.drawArrays(gl.TRIANGLES, 0, 6)
    const height = Math.floor(canvas.height * .5)
    const pixels = new Uint8Array(canvas.width * height * 4)
    gl.readPixels(0, 0, canvas.width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
    let hash = 2166136261
    for (let i = 0; i < pixels.length; i += 4) hash = Math.imul(hash ^ pixels[i], 16777619)
    return hash >>> 0
  })
  const before = await fingerprint()
  await page.waitForTimeout(300)
  expect(await fingerprint()).not.toBe(before)
  await openBook(page)
  await board(page)
  await openBook(page)
  await page.getByRole('button', { name: '一時停止', exact: true }).click()
  await expect(page.locator('.landscape')).toHaveClass(/landscape-paused/)
  const paused = await fingerprint()
  await page.waitForTimeout(300)
  expect(await fingerprint()).toBe(paused)
  await page.getByRole('button', { name: '旅を再開', exact: true }).click()
  await page.waitForTimeout(300)
  expect(await fingerprint()).not.toBe(paused)
})

test('a browser without WebGL retains the scenery, grain and working controls', async ({ page }) => {
  await page.addInitScript(() => {
    const original = HTMLCanvasElement.prototype.getContext
    HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
      if (kind === 'webgl') return null
      return original.call(this, kind, ...args)
    } as typeof original
  })
  await page.goto('/')
  await waitForScene(page)
  await expect(page.locator('.landscape')).toHaveAttribute('data-renderer', 'css')
  await expect(page.locator('.window-fallback-grain')).toBeVisible()
  await expect(page.locator('.window-fallback-scene svg')).toHaveCount(3)
  await openBook(page)
  await board(page)
  await expect(page).toHaveTitle('車窓 — 乗車中')
})

test('book controls keep accessible names, contrast and focus trapping', async ({ page }) => {
  await page.goto('/')
  await waitForScene(page)
  await openBook(page)
  await expect(page.getByRole('button', { name: '乗車する', exact: true })).toBeFocused()
  await page.getByRole('button', { name: '旅の設定', exact: true }).click()
  const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(results.violations).toEqual([])
  await page.keyboard.press('Escape')
  await expect(page.getByRole('button', { name: '旅の手帳を開く' })).toBeFocused()
})
