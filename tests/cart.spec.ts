import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';


test('user can add backpack to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);


    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await productsPage.addBackpackToCart();

    await productsPage.openCart();


    await expect(page)
        .toHaveURL(/cart/);

});