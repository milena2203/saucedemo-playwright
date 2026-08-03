import { Page } from '@playwright/test';

export class CartPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

     // Locators
    removeBackpackButton = '#remove-sauce-labs-backpack';
    cartItem = '.cart_item';
    checkoutButton = '#checkout';


    async removeBackpack() {

        await this.page
            .locator(this.removeBackpackButton)
            .click();

    }


    async getCartItemsCount() {

        return await this.page
            .locator(this.cartItem)
            .count();

    }

    
    async checkout() {

        await this.page
            .locator(this.checkoutButton)
            .click();

    }
}