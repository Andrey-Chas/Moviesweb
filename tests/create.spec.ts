import { test, expect } from "@playwright/test";

test('create artist', async ({ page }) => {
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


    await expect(page.getByText('Create', { exact: true })).toBeVisible();
    await page.getByText('Create', { exact: true }).hover();

    await expect(page.getByRole('link', { name: 'Create Artist' })).toBeVisible();
    await page.getByRole('link', { name: 'Create Artist' }).click();
    
    await expect(page.getByRole('heading', { name: 'Create Artist' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter first name')).toBeVisible();
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Jack');

    await expect(page.getByPlaceholder('Enter last name')).toBeVisible();
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Volko');
    
    await expect(page.getByPlaceholder('Enter date of birth')).toBeVisible();
    await page.getByPlaceholder('Enter date of birth').fill('2003-12-07');

    await expect(page.getByPlaceholder('Enter biography')).toBeVisible();
    await page.getByPlaceholder('Enter biography').click();
    await page.getByPlaceholder('Enter biography').fill('Some');

    await expect(page.locator('input[type="file"]')).toBeVisible();
    await page.locator('input[type="file"]').click();
    await page.locator('input[type="file"]').setInputFiles('C:/Users/Andru/Downloads/Screenshot 2024-04-14 at 15-58-59 Create Next App.png');
    
    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByPlaceholder('Enter first name')).toHaveText("");
})

test('create director', async ({ page }) => {
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


    await expect(page.getByText('Create', { exact: true })).toBeVisible();
    await page.getByText('Create', { exact: true }).hover();

    await expect(page.getByRole('link', { name: 'Create Director' })).toBeVisible();
    await page.getByRole('link', { name: 'Create Director' }).click();
    
    await expect(page.getByRole('heading', { name: 'Create Director' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter first name')).toBeVisible();
    await page.getByPlaceholder('Enter first name').click();
    await page.getByPlaceholder('Enter first name').fill('Jack');

    await expect(page.getByPlaceholder('Enter last name')).toBeVisible();
    await page.getByPlaceholder('Enter last name').click();
    await page.getByPlaceholder('Enter last name').fill('Volko');
    
    await expect(page.getByPlaceholder('Enter date of birth')).toBeVisible();
    await page.getByPlaceholder('Enter date of birth').fill('2003-12-07');

    await expect(page.getByPlaceholder('Enter biography')).toBeVisible();
    await page.getByPlaceholder('Enter biography').click();
    await page.getByPlaceholder('Enter biography').fill('Some');

    await expect(page.locator('input[type="file"]')).toBeVisible();
    await page.locator('input[type="file"]').click();
    await page.locator('input[type="file"]').setInputFiles('C:/Users/Andru/Downloads/Screenshot 2024-04-14 at 15-58-59 Create Next App.png');
    
    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByPlaceholder('Enter first name')).toHaveText("");
})

test('create movie', async ({ page }) => {
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


    await expect(page.getByText('Create', { exact: true })).toBeVisible();
    await page.getByText('Create', { exact: true }).hover();

    await expect(page.getByRole('link', { name: 'Create Movie' })).toBeVisible();
    await page.getByRole('link', { name: 'Create Movie' }).click();
    
    await expect(page.getByRole('heading', { name: 'Create Movie' })).toBeVisible();

    await expect(page.getByPlaceholder('Enter name of the movie')).toBeVisible();
    await page.getByPlaceholder('Enter name of the movie').click();
    await page.getByPlaceholder('Enter name of the movie').fill('Movie Name');
    
    await expect(page.getByPlaceholder('Enter year of release')).toBeVisible();
    await page.getByPlaceholder('Enter year of release').fill('2023-10-04');

    await expect(page.getByPlaceholder('Enter genre')).toBeVisible();
    await page.getByPlaceholder('Enter genre').click();
    await page.getByPlaceholder('Enter genre').fill('Action');

    await expect(page.getByRole('listbox').first()).toBeVisible();
    await page.getByRole('listbox').first().selectOption('662ea528a3f4049ec54d4440');
    await page.getByRole('listbox').first().selectOption('662ea647a3f4049ec54d4477');

    await expect(page.getByLabel('director')).toBeVisible();
    await page.getByLabel('director').selectOption('66229e44dc68edbc4f29c742');

    await expect(page.getByPlaceholder('Enter description')).toBeVisible();
    await page.getByPlaceholder('Enter description').click();
    await page.getByPlaceholder('Enter description').fill('Some');
    
    await expect(page.locator('div').filter({ hasText: /^Main Image$/ }).getByRole('textbox')).toBeVisible();
    await page.locator('div').filter({ hasText: /^Main Image$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Main Image$/ }).getByRole('textbox').setInputFiles('C:/Users/Andru/Downloads/Screenshot 2024-04-01 at 01-42-20 Create Next App.png');

    await expect(page.locator('div').filter({ hasText: /^Movie Posters$/ }).getByRole('textbox')).toBeVisible();
    await page.locator('div').filter({ hasText: /^Movie Posters$/ }).getByRole('textbox').click();
    await page.locator('div').filter({ hasText: /^Movie Posters$/ }).getByRole('textbox').setInputFiles(['C:/Users/Andru/Downloads/Screenshot 2024-04-14 at 15-58-59 Create Next App.png', 'C:/Users/Andru/Downloads/Screenshot 2024-04-14 at 15-58-31 Create Next App.png', 'C:/Users/Andru/Downloads/Screenshot 2024-04-01 at 01-42-20 Create Next App.png']);
    
    await expect(page.getByRole('button', { name: 'Create' })).toBeVisible();
    await page.getByRole('button', { name: 'Create' }).click();

    await expect(page.getByPlaceholder('Enter name of the movie')).toHaveText("");
})