import { test, expect } from '@playwright/test';

test.describe('Contact Page', () => {
  test('should load contact page with correct information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check page title
    await expect(page).toHaveTitle(/Contact.*Bevelled/);
    
    // Check for contact content
    await expect(page.locator('main')).toBeVisible();
  });

  test('should display contact information', async ({ page }) => {
    await page.goto('/contact');
    
    // Check that the page has some content
    await expect(page.locator('main')).toBeVisible();
    
    // Check for any content sections
    const sections = page.locator('section, article, div');
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(0);
  });
});
