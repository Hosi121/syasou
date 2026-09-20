import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.beforeEach(async ({ page }) => { await page.emulateMedia({ reducedMotion: 'reduce' }) })

test('first entry delivers a keepsake, puts it in the real notebook, and leaves the timer idle', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: '車窓', exact: true })).toBeVisible()
  const enter = page.getByRole('button', { name: '窓辺へ', exact: true })
  await expect(enter).toBeFocused()
  await expect(page.getByRole('button', { name: '旅の手帳を開く' })).toHaveCount(0)
  const titleAudit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(titleAudit.violations).toEqual([])
  await page.keyboard.press('Enter')
  await expect(page.getByRole('dialog', { name: '旅のしおり' })).toBeVisible()
  await expect(page.getByRole('heading', { name: '手帳で、旅の支度。' })).toBeVisible()
  await expect(page.getByRole('button', { name: '次へ', exact: true })).toBeFocused()
  const guideAudit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(guideAudit.violations).toEqual([])
  await page.getByRole('button', { name: '次へ', exact: true }).click()
  await expect(page.locator('.world')).toHaveClass(/at-window/)
  await expect(page.getByRole('heading', { name: 'ときどき、窓の外へ。' })).toBeVisible()
  await page.getByRole('button', { name: '次へ', exact: true }).click()
  await expect(page.locator('.world')).not.toHaveClass(/at-window/)
  await expect(page.getByRole('heading', { name: 'ひと区切りを、一枚に。' })).toBeVisible()
  await page.getByRole('button', { name: '切符を受け取る', exact: true }).click()
  await expect(page.getByRole('dialog', { name: 'はじめての切符' })).toBeVisible()
  await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toHaveValue('はじめての窓辺')
  await expect(page.getByRole('button', { name: '手帳にしまう', exact: true })).toBeFocused()
  const ticketAudit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze()
  expect(ticketAudit.violations).toEqual([])
  await page.getByRole('button', { name: '切符の裏を見る' }).click()
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toHaveValue(/旅のしおりをめくった記念の一枚/)
  await page.getByRole('button', { name: '手帳にしまう', exact: true }).click()
  await expect(page.getByRole('dialog', { name: '旅の手帳' })).toBeVisible()
  await expect(page.getByRole('button', { name: '集めた切符を見る' })).toBeFocused()
  const saved = await page.evaluate(() => ({ guide: localStorage.getItem('syasou.onboarding.v1'), travel: JSON.parse(localStorage.getItem('syasou.travel.v2')!) }))
  expect(saved.guide).toBe('true')
  expect(saved.travel.journey.phase).toBe('idle')
  expect(saved.travel.journey.running).toBe(false)
  expect(saved.travel.pendingArrivalId).toBeNull()
  expect(saved.travel.tickets).toHaveLength(1)
  expect(saved.travel.tickets[0].kind).toBe('welcome')
  await page.getByRole('button', { name: '集めた切符を見る' }).click()
  await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toHaveValue('はじめての窓辺')
  await page.getByRole('button', { name: '手帳に戻る', exact: true }).click()
  await page.getByRole('textbox', { name: '手帳のメモ' }).fill('今日進めたいこと')
  await page.getByRole('button', { name: '乗車する', exact: true }).click()
  await expect(page).toHaveTitle('車窓 — 乗車中')
})

test('skipping restores the seat, is remembered, and the guide is available from both entry points', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: '窓辺へ', exact: true }).click()
  await page.getByRole('button', { name: '次へ', exact: true }).click()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.locator('.world')).not.toHaveClass(/at-window/)
  await expect(page.getByRole('button', { name: '旅の手帳を開く' })).toBeFocused()
  await page.reload()
  await expect(page.locator('.opening-screen')).toHaveCount(0)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.mouse.move(1350, 860)
  await page.getByRole('button', { name: '使い方を見る' }).click()
  await expect(page.getByRole('dialog', { name: '旅のしおり' })).toBeVisible()
  await page.getByRole('button', { name: 'スキップ' }).click()
  await page.mouse.move(1350, 860)
  await page.getByRole('button', { name: 'タイトルに戻る' }).click()
  await page.getByRole('button', { name: '使い方を見る' }).click()
  await expect(page.getByRole('dialog', { name: '旅のしおり' })).toBeVisible()
})

test('HTML displays a branded loading view even before the application code arrives', async ({ page }) => {
  let release!: () => void
  const hold = new Promise<void>(resolve => { release = resolve })
  await page.route('**/src/generated/moonbit/bootstrap.js*', async route => { await hold; await route.continue() })
  try {
    await page.goto('/', { waitUntil: 'commit' })
    await expect(page.locator('.boot-static .opening-title')).toHaveText('車窓')
    await expect(page.locator('.boot-static .opening-loading')).toBeVisible()
    expect(await page.locator('.boot-static .opening-title').evaluate(el => parseFloat(getComputedStyle(el).fontSize))).toBeGreaterThan(70)
  } finally { release() }
  await expect(page.getByRole('button', { name: '窓辺へ', exact: true })).toBeVisible()
})

test('the loading indicator waits for the real world module and then reveals the entrance', async ({ page }) => {
  let release!: () => void
  const hold = new Promise<void>(resolve => { release = resolve })
  await page.route('**/src/world.css*', async route => { await hold; await route.continue() })
  try {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    await expect(page.locator('.opening-screen:not(.boot-static)')).toHaveAttribute('aria-busy', 'true')
    await expect(page.getByRole('status')).toHaveText('旅の支度をしています')
    await expect(page.getByRole('button', { name: '窓辺へ', exact: true })).toHaveCount(0)
  } finally { release() }
  await expect(page.getByRole('button', { name: '窓辺へ', exact: true })).toBeEnabled()
  await expect(page.locator('.opening-loading')).toHaveCount(0)
})

test('a failed world download offers a working retry', async ({ page }) => {
  await page.route('**/src/world.css*', route => route.abort())
  await page.goto('/')
  await expect(page.getByRole('alert')).toContainText('景色をひらけませんでした')
  await expect(page.getByRole('button', { name: '窓辺へ', exact: true })).toHaveCount(0)
  await page.unroute('**/src/world.css*')
  await page.getByRole('button', { name: 'もう一度ひらく' }).click()
  await expect(page.getByRole('button', { name: '窓辺へ', exact: true })).toBeVisible()
})

test('optional font and paper failures do not block entry or the guide', async ({ page }) => {
  await page.route('**/fonts/*.woff2', route => route.abort())
  await page.route('**/paper-grain.png', route => route.abort())
  await page.goto('/')
  await page.getByRole('button', { name: '窓辺へ', exact: true }).click()
  await expect(page.getByRole('dialog', { name: '旅のしおり' })).toBeVisible()
  await page.getByRole('button', { name: 'スキップ' }).click()
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await expect(page.getByRole('button', { name: '乗車する', exact: true })).toBeVisible()
})

test('an existing journey is preserved and does not receive automatic onboarding', async ({ page }) => {
  await page.addInitScript(() => {
    if (!localStorage.getItem('syasou.travel.v2')) {
      localStorage.setItem('syasou.journey.v1', JSON.stringify({ phase: 'focus', running: false, deadline: null, remaining: 720000, focusMinutes: 25, restMinutes: 5 }))
      localStorage.setItem('syasou.note.v1', JSON.stringify('大切な下書き'))
    }
  })
  await page.goto('/')
  await page.getByRole('button', { name: '窓辺へ', exact: true }).click()
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await expect(page.locator('.time-value')).toHaveText('12:00')
  await expect(page.getByRole('textbox', { name: '手帳のメモ' })).toHaveValue('大切な下書き')
  await page.reload()
  await expect(page.locator('.opening-screen')).toHaveCount(0)
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await expect(page.locator('.time-value')).toHaveText('12:00')
})

test('title, guide and keyboard controls fit laptop and desktop screens', async ({ page }) => {
  await page.goto('/')
  for (const [width, height] of [[1280, 720], [1440, 900], [1920, 1080]]) {
    await page.setViewportSize({ width, height })
    const title = await page.locator('.opening-brand').boundingBox()
    expect(title!.x).toBeGreaterThanOrEqual(0)
    expect(title!.y).toBeGreaterThanOrEqual(0)
    expect(title!.y + title!.height).toBeLessThanOrEqual(height)
  }
  await page.setViewportSize({ width: 1280, height: 720 })
  await page.getByRole('button', { name: '窓辺へ', exact: true }).click()
  for (let step = 0; step < 3; step++) {
    const paper = await page.locator('.guide-paper').boundingBox()
    expect(paper!.x).toBeGreaterThanOrEqual(0)
    expect(paper!.y).toBeGreaterThanOrEqual(0)
    expect(paper!.y + paper!.height).toBeLessThanOrEqual(720)
    if (step < 2) await page.getByRole('button', { name: '次へ', exact: true }).click()
  }
})

test('blocked browser storage still allows the first visit and skipping', async ({ page }) => {
  await page.addInitScript(() => { Storage.prototype.setItem = () => { throw new DOMException('Unavailable', 'QuotaExceededError') } })
  await page.goto('/')
  await page.getByRole('button', { name: '窓辺へ', exact: true }).click()
  await page.getByRole('button', { name: 'スキップ' }).click()
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await page.getByRole('button', { name: '乗車する', exact: true }).click()
  await expect(page).toHaveTitle('車窓 — 乗車中')
})
