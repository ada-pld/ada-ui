import { test, expect } from '@playwright/test'

test('Login page rendering', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/login');
    await expect(page.locator('h1')).toContainText('Welcome back !');
})

test('Login with invalid credentials', async ({ page }) => {
    // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
    await page.goto('http://localhost:3000/login');
    await page.getByLabel('Email').fill('test@test.fr');
    await page.getByLabel('Password').fill('Test.147');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('Invalid credentials')).toBeVisible();
})