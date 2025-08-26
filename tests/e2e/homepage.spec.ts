import { test, expect } from '@playwright/test';

test.describe('Homepage Content and Functionality', () => {
  test('should display hero section with correct content', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section exists
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
    
    // Check for hero content - use more specific selectors
    await expect(page.locator('h1')).toBeVisible();
    // Check for the main hero paragraph specifically
    await expect(page.locator('p').filter({ hasText: /Bespoke pieces in Australian timbers/ })).toBeVisible();
  });

  test('should have working call-to-action buttons', async ({ page }) => {
    await page.goto('/');
    
    // Look for buttons and test their functionality
    const buttons = page.locator('button, a[role="button"]');
    const buttonCount = await buttons.count();
    
    if (buttonCount > 0) {
      // Test that buttons are visible and clickable
      for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        await expect(button).toBeVisible();
        await expect(button).toBeEnabled();
      }
    }
  });

  test('should display portfolio preview section', async ({ page }) => {
    await page.goto('/');
    
    // Check for portfolio-related content
    const portfolioSection = page.locator('section').filter({ hasText: /portfolio|work|projects/i });
    if (await portfolioSection.count() > 0) {
      await expect(portfolioSection.first()).toBeVisible();
    }
  });

  test('should have proper meta tags and SEO elements', async ({ page }) => {
    await page.goto('/');
    
    // Check for meta description
    const metaDescription = page.locator('meta[name="description"]');
    if (await metaDescription.count() > 0) {
      await expect(metaDescription).toHaveAttribute('content');
    }
    
    // Check for Open Graph tags
    const ogTitle = page.locator('meta[property="og:title"]');
    if (await ogTitle.count() > 0) {
      await expect(ogTitle).toHaveAttribute('content');
    }
  });

  test('should be responsive on different screen sizes', async ({ page }) => {
    await page.goto('/');
    
    // Test desktop view
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test tablet view
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.locator('nav')).toBeVisible();
    
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.locator('nav')).toBeVisible();
  });

  test('should load images correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check for images and ensure they load
    const images = page.locator('img');
    const imageCount = await images.count();
    
    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const img = images.nth(i);
        await expect(img).toBeVisible();
        
        // Check if image has src attribute
        const src = await img.getAttribute('src');
        expect(src).toBeTruthy();
      }
    }
  });
});
