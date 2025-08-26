import { test, expect } from '@playwright/test'

test('contact form has required fields', async ({ page }) => {
  await page.goto('/contact')
  
  // Check that required fields exist
  await expect(page.locator('input[name="name"]')).toBeVisible()
  await expect(page.locator('input[name="email"]')).toBeVisible()
  await expect(page.locator('textarea[name="message"]')).toBeVisible()
  
  // Check that submit button exists
  await expect(page.locator('button[type="submit"]')).toBeVisible()
})

test('health endpoint works', async ({ request }) => {
  const res = await request.get('/api/health')
  expect(res.status()).toBe(200)
  const json = await res.json()
  expect(json.ok).toBeTruthy()
})
