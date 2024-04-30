import { test, expect } from "@playwright/test";

test('register', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h3').first()).toBeVisible();
    await expect(page).toHaveTitle(/Moviesweb/);

    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign up' }).click();

    await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter name')).toBeVisible();
    await page.getByPlaceholder('Enter name').click();
    await page.getByPlaceholder('Enter name').fill('Sometest');

    await expect(page.getByPlaceholder('Enter email')).toBeVisible();
    await page.getByPlaceholder('Enter email').click();
    await page.getByPlaceholder('Enter email').fill('test3@gmail.com');

    await expect(page.getByPlaceholder('Enter age')).toBeVisible();
    await page.getByPlaceholder('Enter age').click();
    await page.getByPlaceholder('Enter age').fill('27');

    await expect(page.getByRole('radio')).toHaveCount(3);
    await expect(page.getByRole('radio').first()).toHaveValue('Male');
    await expect(page.getByRole('radio').nth(1)).toHaveValue('Female');
    await expect(page.getByRole('radio').nth(2)).toHaveValue('Other');
    await page.getByRole('radio').first().check();

    await expect(page.getByPlaceholder('Enter country')).toBeVisible();
    await page.getByPlaceholder('Enter country').click();
    await page.getByPlaceholder('Enter country').fill('Bulgaria');

    await expect(page.getByPlaceholder('Enter password')).toBeVisible();
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('sometest123');

    await expect(page.getByRole('button', { name: 'Create an account' })).toBeVisible();
    await page.getByRole('button', { name: 'Create an account' }).click();

    await expect(page.getByRole('heading', { name: 'Log in', exact: true })).toBeVisible();
})

test('user already exists', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('h3').first()).toBeVisible();
    await expect(page).toHaveTitle(/Moviesweb/);

    await expect(page.getByRole('button', { name: 'Sign Up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign up' }).click();

    await expect(page.getByRole('heading', { name: 'Create an account' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter name')).toBeVisible();
    await page.getByPlaceholder('Enter name').click();
    await page.getByPlaceholder('Enter name').fill('Sometest');

    await expect(page.getByPlaceholder('Enter email')).toBeVisible();
    await page.getByPlaceholder('Enter email').click();
    await page.getByPlaceholder('Enter email').fill('test@gmail.com');

    await expect(page.getByPlaceholder('Enter age')).toBeVisible();
    await page.getByPlaceholder('Enter age').click();
    await page.getByPlaceholder('Enter age').fill('27');

    await expect(page.getByRole('radio')).toHaveCount(3);
    await expect(page.getByRole('radio').first()).toHaveValue('Male');
    await expect(page.getByRole('radio').nth(1)).toHaveValue('Female');
    await expect(page.getByRole('radio').nth(2)).toHaveValue('Other');
    await page.getByRole('radio').first().check();

    await expect(page.getByPlaceholder('Enter country')).toBeVisible();
    await page.getByPlaceholder('Enter country').click();
    await page.getByPlaceholder('Enter country').fill('Bulgaria');

    await expect(page.getByPlaceholder('Enter password')).toBeVisible();
    await page.getByPlaceholder('Enter password').click();
    await page.getByPlaceholder('Enter password').fill('sometest123');

    await expect(page.getByRole('button', { name: 'Create an account' })).toBeVisible();
    await page.getByRole('button', { name: 'Create an account' }).click();

    await expect(page.getByText('User already exists')).toBeVisible();
})