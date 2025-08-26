import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test('should load portfolio page with projects', async ({ page }) => {
    await page.goto('/portfolio');
    
    // Check page title
    await expect(page).toHaveTitle(/Portfolio.*Bevelled/);
    
    // Check for portfolio content
    await expect(page.locator('main')).toBeVisible();
  });

  test('should display portfolio content', async ({ page }) => {
    await page.goto('/portfolio');
    
    // Check that the page has some content
    await expect(page.locator('main')).toBeVisible();
    
    // Check for any content sections
    const sections = page.locator('section, article, div');
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThan(0);
  });
});
