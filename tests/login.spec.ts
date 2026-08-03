import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


test('successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(page)
        .toHaveURL(/inventory/);

});
test('login fails with incorrect password', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'wrong_password'
    );

    const errorMessage = await loginPage.getErrorMessage();

    expect(errorMessage)
        .toContain('Username and password do not match');

});