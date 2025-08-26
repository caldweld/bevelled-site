import { test, expect } from '@playwright/test'

test('portfolio page loads', async ({ page }) => {
  await page.goto('/portfolio')
  await expect(page.locator('h1')).toHaveText('Portfolio')
})
