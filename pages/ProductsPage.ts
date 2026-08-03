import { Page } from '@playwright/test';

export class ProductsPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    backpackButton = '#add-to-cart-sauce-labs-backpack';
    cartIcon = '.shopping_cart_link';


    async addBackpackToCart() {

        await this.page
            .locator(this.backpackButton)
            .click();

    }


    async openCart() {

        await this.page
            .locator(this.cartIcon)
            .click();

    }
}