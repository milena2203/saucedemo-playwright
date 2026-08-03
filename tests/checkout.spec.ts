import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';


test('user can complete checkout', async ({ page }) => {


    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);


    await loginPage.open();


    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );


    await productsPage.addBackpackToCart();


    await productsPage.openCart();


    await cartPage.checkout();


    await checkoutPage.enterCustomerInformation(
        'John',
        'Smith',
        '12345'
    );


    await checkoutPage.continueCheckout();


    await checkoutPage.finishCheckout();


    const message =
        await checkoutPage.getConfirmationMessage();


    expect(message)
        .toContain('Thank you for your order');

});