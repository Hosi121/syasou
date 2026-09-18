import { expect, test, type Page } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { waitForScene } from './scene'

async function enter(page: Page, demo = false) {
  await page.addInitScript(() => {
    for (const suffix of ['', '.demo']) {
      sessionStorage.setItem(`syasou.entered.v1${suffix}`, '1')
      localStorage.setItem(`syasou.onboarding.v1${suffix}`, 'true')
    }
  })
  await page.goto(demo ? '/?demo=1' : '/')
  await waitForScene(page)
}

test('the still train-window image remains visible with reduced motion', async ({ page }) => {
  await enter(page)
  await expect(page.locator('.landscape')).toHaveAttribute('data-renderer', 'webgl')
  // Reading after compositing catches WebKit discarding an idle drawing buffer.
  await page.evaluate(() => new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve()))))
  const brightPixels = await page.locator('.window-canvas').evaluate(element => {
    const canvas = element as HTMLCanvasElement
    const gl = canvas.getContext('webgl')!
    const pixels = new Uint8Array(32 * 32 * 4)
    gl.readPixels(16, canvas.height - 48, 32, 32, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
    let bright = 0
    for (let i = 0; i < pixels.length; i += 4) if (pixels[i] > 128) bright++
    return bright
  })
  expect(brightPixels).toBeGreaterThan(500)
})

test('first visit reaches the welcome ticket, its back, and the notebook by touch', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: '窓辺へ', exact: true }).tap()
  await page.getByRole('button', { name: '次へ', exact: true }).tap()
  await page.getByRole('button', { name: '次へ', exact: true }).tap()
  await page.getByRole('button', { name: '切符を受け取る', exact: true }).tap()
  await expect(page.getByRole('dialog', { name: 'はじめての切符' })).toBeVisible()
  const card = await page.locator('.ticket-handling').boundingBox()
  expect(card!.width).toBeGreaterThan(280)
  await page.getByRole('button', { name: '切符の裏を見る' }).tap()
  await page.getByRole('textbox', { name: '切符のメモ' }).fill('自分のペースで進もう。')
  await page.getByRole('button', { name: '手帳にしまう', exact: true }).tap()
  await expect(page.getByRole('button', { name: '集めた切符を見る' })).toBeFocused()
  await page.getByRole('button', { name: '集めた切符を見る' }).tap()
  await page.getByRole('button', { name: '切符の裏を見る' }).tap()
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toHaveValue('自分のペースで進もう。')
  const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(accessibility.violations).toEqual([])
})

for (const size of [{ width: 320, height: 568 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
  test(`paper and settings remain usable at ${size.width}×${size.height}`, async ({ page }) => {
    await page.setViewportSize(size)
    await enter(page, true)
    await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
    const book = page.getByRole('dialog', { name: '旅の手帳', exact: true })
    const bounds = await book.boundingBox()
    expect(bounds!.x).toBeGreaterThanOrEqual(0)
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(size.width)
    expect(bounds!.y + bounds!.height).toBeLessThanOrEqual(size.height)
    await page.getByRole('textbox', { name: '手帳のメモ' }).fill('旅の続き')
    await page.getByRole('button', { name: '旅の設定', exact: true }).tap()
    await page.getByRole('radio', { name: '45分', exact: true }).tap()
    await page.getByRole('radio', { name: '夜', exact: true }).tap()
    await page.getByRole('button', { name: '残り時間を表示する' }).tap()
    await page.getByRole('button', { name: '手帳に戻る', exact: true }).first().tap()
    await page.getByRole('button', { name: '集めた切符を見る' }).tap()
    await page.getByRole('button', { name: '前の切符を見る' }).tap()
    await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toHaveValue('企画のラフを描く')
    await page.getByRole('button', { name: '手帳に戻る', exact: true }).tap()
    await page.getByRole('button', { name: '手帳を閉じる', exact: true }).tap()
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  })
}

test('touch controls stay discoverable and rotation preserves the running journey', async ({ page }) => {
  await enter(page)
  await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
  await page.getByRole('button', { name: '乗車する', exact: true }).tap()
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('syasou.travel.v2')!).journey)
  await page.waitForTimeout(2400)
  expect(await page.locator('.world-corners').evaluate(node => Number(getComputedStyle(node).opacity))).toBeGreaterThan(.5)
  await page.getByRole('button', { name: '眺めを選ぶ' }).tap()
  await page.getByRole('radio', { name: '雪原の窓' }).tap()
  await expect(page.locator('.snow-landscape')).toHaveAttribute('data-loaded', 'true')
  await page.getByRole('button', { name: '車窓を眺める' }).tap()
  await page.setViewportSize({ width: 844, height: 390 })
  await expect.poll(async () => {
    const box = (await page.locator('.window-world').boundingBox())!
    return box.x + box.width
  }).toBeGreaterThanOrEqual(844)
  const window = await page.locator('.window-world').boundingBox()
  expect(window!.x).toBeLessThanOrEqual(0)
  expect(window!.y).toBeLessThanOrEqual(0)
  expect(window!.x + window!.width).toBeGreaterThanOrEqual(844)
  expect(window!.y + window!.height).toBeGreaterThanOrEqual(390)
  await page.getByRole('button', { name: '眺めを選ぶ' }).tap()
  await page.getByRole('radio', { name: '遠くの列車' }).tap()
  await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
  await page.getByRole('button', { name: '一時停止', exact: true }).tap()
  const after = await page.evaluate(() => JSON.parse(localStorage.getItem('syasou.travel.v2')!).journey)
  expect(after.id).toBe(before.id)
  expect(after.running).toBe(false)
  expect(after.remaining).toBeGreaterThan(24 * 60_000)
})

test('a smaller visual viewport leaves notes, ticket editing, and dismissal reachable', async ({ page }) => {
  await enter(page, true)
  await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
  // Simulate the visual viewport resize event a software keyboard supplies.
  await page.evaluate(() => {
    Object.defineProperty(visualViewport!, 'height', { configurable: true, value: 330 })
    visualViewport!.dispatchEvent(new Event('resize'))
  })
  await expect.poll(async () => (await page.locator('.journal-anchor').boundingBox())!.height).toBeLessThanOrEqual(290)
  await page.getByRole('textbox', { name: '手帳のメモ' }).fill('キーボードを開いたまま書く')
  await page.getByRole('button', { name: '集めた切符を見る' }).tap()
  await expect.poll(async () => (await page.locator('.ticket-tray-dialog').boundingBox())!.height).toBeLessThanOrEqual(306)
  await page.getByRole('button', { name: '切符の裏を見る' }).tap()
  await page.getByRole('textbox', { name: '切符のメモ' }).fill('余白にメモ')
  await page.getByRole('button', { name: '手帳に戻る', exact: true }).tap()
  await page.getByRole('button', { name: '手帳を閉じる' }).tap()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.evaluate(() => {
    delete (visualViewport as unknown as { height?: number }).height
    visualViewport!.dispatchEvent(new Event('resize'))
  })
  await page.reload()
  await waitForScene(page)
  await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
  await expect(page.getByRole('textbox', { name: '手帳のメモ' })).toHaveValue('キーボードを開いたまま書く')
})

test('a real touch drag flips a ticket and a cancelled touch puts it back', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'Native touch-drag injection is available through Chromium CDP.')
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await enter(page, true)
  await page.getByRole('button', { name: '旅の手帳を開く' }).tap()
  await page.getByRole('button', { name: '集めた切符を見る' }).tap()
  const card = page.locator('.ticket-handling')
  await expect(card).toBeVisible()
  const band = page.locator('.ticket-on-top .ticket-band-top')
  await expect.poll(async () => (await band.boundingBox())!.width).toBeGreaterThan(280)
  const bounds = (await band.boundingBox())!
  const cdp = await context.newCDPSession(page)
  const x = bounds.x + bounds.width * .85, y = bounds.y + bounds.height * .5
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] })
  for (let step = 1; step <= 12; step++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x - bounds.width * .6 * step / 12, y }] })
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
  await expect(page.getByRole('button', { name: '切符の表を見る' })).toBeVisible()
  await expect(card).toHaveAttribute('data-held', 'false')
  await page.getByRole('button', { name: '切符の表を見る' }).tap()
  await expect.poll(async () => (await band.boundingBox())!.width).toBeGreaterThan(bounds.width * .95)
  const next = (await band.boundingBox())!
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: next.x + next.width * .8, y: next.y + next.height / 2 }] })
  await expect(card).toHaveAttribute('data-held', 'true')
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchCancel', touchPoints: [] })
  await expect(card).toHaveAttribute('data-held', 'false')
  await expect(page.getByRole('button', { name: '切符の裏を見る' })).toBeVisible()
})
