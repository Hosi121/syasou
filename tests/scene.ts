import { expect, type Page } from '@playwright/test'

const frozenPages = new WeakSet<Page>()

export async function freezeClock(page: Page) {
  await page.clock.install({ time: new Date('2026-09-18T10:00:00+09:00') })
  await page.clock.pauseAt(new Date('2026-09-18T10:01:00+09:00'))
  frozenPages.add(page)
}

export async function waitForScene(page: Page) {
  // Let React's lazy/Suspense commit finish even when the journey clock is paused.
  // Resource loading happens in real time; advance only the necessary scheduler ticks.
  await expect.poll(async () => {
    if (frozenPages.has(page)) await page.clock.runFor(50)
    return page.locator('.opening-screen').count()
  }, { intervals: [25, 50, 100], timeout: 10_000 }).toBe(0)
}
