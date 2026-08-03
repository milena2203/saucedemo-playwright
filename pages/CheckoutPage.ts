import { Page } from '@playwright/test';

export class CheckoutPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }


    firstNameInput = '#first-name';
    lastNameInput = '#last-name';
    postalCodeInput = '#postal-code';

    continueButton = '#continue';

    finishButton = '#finish';

    confirmationMessage = '.complete-header';


    async enterCustomerInformation(
        firstName: string,
        lastName: string,
        postalCode: string
    ) {

        await this.page
            .locator(this.firstNameInput)
            .fill(firstName);

        await this.page
            .locator(this.lastNameInput)
            .fill(lastName);

        await this.page
            .locator(this.postalCodeInput)
            .fill(postalCode);

    }


    async continueCheckout() {

        await this.page
            .locator(this.continueButton)
            .click();

    }


    async finishCheckout() {

        await this.page
            .locator(this.finishButton)
            .click();

    }


    async getConfirmationMessage() {

        return await this.page
            .locator(this.confirmationMessage)
            .innerText();

    }
}