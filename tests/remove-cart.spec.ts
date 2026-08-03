import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';


test('user can remove product from cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);


    await loginPage.open();

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await productsPage.addBackpackToCart();

    await productsPage.openCart();


    await cartPage.removeBackpack();


    const itemsCount = await cartPage.getCartItemsCount();

    expect(itemsCount).toBe(0);

});