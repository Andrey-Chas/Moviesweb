import { test, expect } from "@playwright/test";

test('login', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h3').first()).toBeVisible();
    await expect(page).toHaveTitle(/Moviesweb/);

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'Log in to your account' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter email')).toBeVisible();
    await page.getByPlaceholder('Enter email').click();
    await page.getByPlaceholder('Enter email').fill('john@gmail.com');

    await expect(page.getByPlaceholder('Enter password')).toBeVisible();
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('john123');

    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByRole('button', { name: 'Sign Out' })).toBeVisible();
})

test('incorrect credentials', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h3').first()).toBeVisible();
    await expect(page).toHaveTitle(/Moviesweb/);

    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
    await page.getByRole('link', { name: 'Login' }).click();

    await expect(page.getByRole('heading', { name: 'Log in to your account' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter email')).toBeVisible();
    await page.getByPlaceholder('Enter email').click();
    await page.getByPlaceholder('Enter email').fill('john@gmail.com');

    await expect(page.getByPlaceholder('Enter password')).toBeVisible();
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('john');

    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.getByText('Invalid Credentials')).toBeVisible();
})