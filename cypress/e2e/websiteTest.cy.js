import { homePage } from "../POM/homePage/homePage";
import { productDetailsPage } from "../POM/productDetailsPage/productDetailsPage";
import { loginPage } from "../POM/loginPage/loginPage.js";

describe('Product Details Page Tests', () => {
    before(() => {
        // Perform setup before all tests
        cy.log("Initializing WebDriver and navigating to the login page");
        cy.visit('/');
    });

    it('Test Login Button Navigation', () => {
        homePage.navigateToLoginPage();
        loginPage.elements.loginButton().should('be.visible');
        loginPage.elements.email().should('be.visible');
        loginPage.elements.password().should('be.visible');
    });

    it('Test Invalid Login', () => {

        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');
        homePage.navigateToLoginPage();

        // Set email and password, and click on the login button
        loginPage.enterEmail("lll@mail.ru");
        loginPage.enterPassword("aaaa");
        loginPage.clickOnLoginButton();
        loginPage.elements.errorMessage().should('be.visible', { timeout: 15000 }); // Increase timeout to 10 seconds
     });

    after(() => {
        // Perform teardown after all tests
        cy.log("Quitting WebDriver");
        // Note: We don't need to quit WebDriver since Cypress manages it automatically
    });
});
