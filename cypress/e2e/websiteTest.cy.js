import { homePage } from "../POM/homePage/homePage";
import { productDetailsPage } from "../POM/productDetailsPage/productDetailsPage";
import { loginPage } from "../POM/loginPage/loginPage.js";

describe('Product Details Page Tests', () => {
    before(() => {
        // Perform setup before all tests
        cy.log("Initializing WebDriver and navigating to the login page");
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');
    });

    it('Test Login Button Navigation', () => {
        homePage.navigateToLoginPage();
        cy.url().should('eq', 'https://demo.nopcommerce.com/login?returnUrl=%2F');
        loginPage.isLoginPageDisplayed().should('be.true');
    });

    it('Test Invalid Login', () => {
        homePage.navigateToLoginPage();

        // Set email and password, and click on the login button
        loginPage.enterEmail("lll@mail.ru");
        loginPage.enterPassword("aaaa");
        loginPage.clickOnLoginButton();

        // Assert that login fails and error message is displayed
        loginPage.isErrorMessageDisplayed().should('be.true');
        loginPage.getErrorMessage().should('eq', "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found");
    });

    after(() => {
        // Perform teardown after all tests
        cy.log("Quitting WebDriver");
        // Note: We don't need to quit WebDriver since Cypress manages it automatically
    });
});
