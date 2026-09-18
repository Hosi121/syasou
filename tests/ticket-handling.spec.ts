import { test, expect, type Page } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.addInitScript(() => {
    sessionStorage.setItem('syasou.entered.v1.demo', '1')
    localStorage.setItem('syasou.onboarding.v1.demo', 'true')
  })
  await page.goto('/?demo=1')
  await page.getByRole('button', { name: '旅の手帳を開く' }).click()
  await page.getByRole('button', { name: '集めた切符を見る' }).click()
  await expect(page.locator('.ticket-on-top')).toHaveCSS('opacity', '1')
})

async function grip(page: Page, side = 'right') {
  const box = await page.locator('.ticket-handling').boundingBox()
  const x = box!.x + box!.width * (side === 'right' ? .85 : .15)
  const y = box!.y + box!.height * .075
  await page.mouse.move(x, y)
  await page.mouse.down()
  await expect(page.locator('.ticket-handling')).toHaveAttribute('data-held', 'true')
  return { x, y, width: box!.width }
}

test('holding lifts the paper, a partial turn springs back, and handling does not modify the ticket', async ({ page }) => {
  const before = await page.evaluate(() => localStorage.getItem('syasou.travel.v2.demo'))
  const front = page.locator('.ticket-on-top .ticket-front')
  const initial = await front.boundingBox()
  const point = await grip(page)
  await page.mouse.move(point.x - point.width * .2, point.y - 24, { steps: 12 })
  await expect.poll(async () => (await front.boundingBox())!.width).toBeLessThan(initial!.width * .95)
  await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toBeVisible()
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toHaveCount(0)
  await page.mouse.up()
  await expect(page.locator('.ticket-handling')).toHaveAttribute('data-held', 'false')
  await expect.poll(async () => (await front.boundingBox())!.width).toBeGreaterThan(initial!.width * .98)
  expect(await page.evaluate(() => localStorage.getItem('syasou.travel.v2.demo'))).toBe(before)
})

test('dragging reveals the back before release, settles on it, and can turn the card back from the other edge', async ({ page }) => {
  const point = await grip(page)
  await page.mouse.move(point.x - point.width * .56, point.y + 18, { steps: 24 })
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toBeVisible()
  await expect(page.locator('.ticket-handling')).toHaveAttribute('data-held', 'true')
  await page.mouse.up()
  await expect(page.getByRole('button', { name: '切符の表を見る' })).toBeVisible()
  // Wait until the back is resting before editing or gripping it again.
  await expect.poll(async () => (await page.locator('.ticket-on-top .ticket-back').boundingBox())!.width).toBeGreaterThan(point.width * .97)
  await page.getByRole('textbox', { name: '切符のメモ' }).fill('めくって、書き残す。')
  const reverse = await grip(page, 'left')
  await page.mouse.move(reverse.x + reverse.width * .56, reverse.y - 12, { steps: 24 })
  await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toBeVisible()
  await page.mouse.up()
  await expect(page.getByRole('button', { name: '切符の裏を見る' })).toBeVisible()
  await page.getByRole('button', { name: '前の切符を見る' }).click()
  await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toHaveValue('企画のラフを描く')
  await expect(page.locator('.ticket-handling')).toHaveAttribute('data-side', 'front')
  await page.getByRole('button', { name: '新しい切符を見る' }).click()
  await page.getByRole('button', { name: '切符の裏を見る' }).click()
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toHaveValue('めくって、書き残す。')
})

test('Escape, pointer cancellation and a lost window focus release the card without closing the tray', async ({ page }) => {
  for (const cancel of ['escape', 'pointer', 'blur']) {
    const point = await grip(page)
    await page.mouse.move(point.x - point.width * .55, point.y, { steps: 12 })
    await expect(page.getByRole('textbox', { name: '切符のメモ' })).toBeVisible()
    if (cancel === 'escape') await page.keyboard.press('Escape')
    else if (cancel === 'pointer') await page.locator('.ticket-handling').dispatchEvent('pointercancel', { pointerId: 1 })
    else await page.evaluate(() => window.dispatchEvent(new Event('blur')))
    await page.mouse.up()
    await expect(page.getByRole('dialog', { name: '集めた切符' })).toBeVisible()
    await expect(page.locator('.ticket-handling')).toHaveAttribute('data-held', 'false')
    await expect(page.getByRole('textbox', { name: '切符に残す作業' })).toBeVisible()
    await expect.poll(async () => (await page.locator('.ticket-on-top .ticket-front').boundingBox())!.width).toBeGreaterThan(point.width * .97)
  }
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog', { name: '旅の手帳' })).toBeVisible()
})

test('text fields keep normal selection, editing and keyboard flipping; reduced motion still supports drag turns', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  const title = page.getByRole('textbox', { name: '切符に残す作業' })
  await title.click()
  await expect(page.locator('.ticket-handling')).toHaveAttribute('data-held', 'false')
  await title.press('ControlOrMeta+A')
  await title.pressSequentially('My quiet journey')
  await expect(title).toHaveValue('My quiet journey')
  const flip = page.getByRole('button', { name: '切符の裏を見る' })
  await flip.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toBeVisible()
  const point = await grip(page, 'left')
  await page.mouse.move(point.x + point.width * .55, point.y, { steps: 14 })
  // With reduced motion the face only changes when the gesture is released.
  await expect(page.getByRole('textbox', { name: '切符のメモ' })).toBeVisible()
  await page.mouse.up()
  await expect(title).toHaveValue('My quiet journey')
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('syasou.travel.v2.demo')!).tickets[0])
  expect(saved.title).toBe('My quiet journey')
})
