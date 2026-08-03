import { Page } from '@playwright/test';

export class LoginPage {

    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';
    errorMessage = '[data-test="error"]';


    // Open website
    async open() {
        await this.page.goto('https://www.saucedemo.com/');
    }


    // Login action
    async login(username: string, password: string) {

        await this.page
            .locator(this.usernameInput)
            .fill(username);

        await this.page
            .locator(this.passwordInput)
            .fill(password);

        await this.page
            .locator(this.loginButton)
            .click();

            
    }
    async getErrorMessage() {
        return await this.page
            .locator(this.errorMessage)
            .innerText();
    }
}