import { test, expect } from '@playwright/test';

test.describe('Navigation and Site Structure', () => {
  test('should load homepage with correct title and structure', async ({ page }) => {
    await page.goto('/');
    
    // Check page title
    await expect(page).toHaveTitle(/Bevelled/);
    
    // Check main navigation elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    
    // Check navigation links exist - use more specific selectors
    await expect(page.locator('nav a[href="/"]').first()).toBeVisible();
    await expect(page.locator('nav a[href="/about"]')).toBeVisible();
    await expect(page.locator('nav a[href="/portfolio"]')).toBeVisible();
    await expect(page.locator('nav a[href="/contact"]')).toBeVisible();
  });

  test('should navigate to About page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/about"]');
    
    await expect(page).toHaveURL('/about');
    await expect(page).toHaveTitle(/About.*Bevelled/);
    
    // Check page content
    await expect(page.locator('main')).toBeVisible();
  });

  test('should navigate to Portfolio page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/portfolio"]');
    
    await expect(page).toHaveURL('/portfolio');
    await expect(page).toHaveTitle(/Portfolio.*Bevelled/);
    
    // Check page content
    await expect(page.locator('main')).toBeVisible();
  });

  test('should navigate to Contact page', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="/contact"]');
    
    await expect(page).toHaveURL('/contact');
    await expect(page).toHaveTitle(/Contact.*Bevelled/);
    
    // Check page content
    await expect(page.locator('main')).toBeVisible();
  });

  test('should have working logo/brand link', async ({ page }) => {
    await page.goto('/about');
    await page.locator('nav a[href="/"]').first().click();
    
    await expect(page).toHaveURL('/');
  });

  test('should maintain navigation state across pages', async ({ page }) => {
    // Test navigation on homepage
    await page.goto('/');
    await expect(page.locator('nav a[href="/about"]')).toHaveClass(/hover:underline/);
    
    // Test navigation on about page
    await page.goto('/about');
    await expect(page.locator('nav a[href="/about"]')).toHaveClass(/font-semibold/);
    
    // Test navigation on portfolio page
    await page.goto('/portfolio');
    await expect(page.locator('nav a[href="/portfolio"]')).toHaveClass(/font-semibold/);
    
    // Test navigation on contact page
    await page.goto('/contact');
    await expect(page.locator('nav a[href="/contact"]')).toHaveClass(/font-semibold/);
  });
});
