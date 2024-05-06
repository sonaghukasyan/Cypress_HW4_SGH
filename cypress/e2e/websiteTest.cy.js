/// <reference types="cypress" />

import { homePage } from "../POM/homePage/homePage";
import { productDetailsPage } from "../POM/productDetailsPage/productDetailsPage";

describe('Product Details Page Tests', () => {
    before(() => {
        // Perform setup before all tests
        cy.log("Initializing WebDriver and navigating to the login page");
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');
    });

    it('Test Valid Addition To Cart', () => {
        homePage.navigateToProductDetails(4);
        productDetailsPage.initProductFields();
        productDetailsPage.setProductQuantity("2");
        productDetailsPage.addToCart();
        productDetailsPage.isAddedToCart().should('be.true');
    });

    it('Test Invalid Addition To Cart', () => {
        homePage.navigateToProductDetails(4);
        productDetailsPage.initProductFields();
        productDetailsPage.setProductQuantity("0");
        productDetailsPage.addToCart();
        productDetailsPage.isAddedToCart().should('be.false');
    });

    it('Test Login Button Navigation', () => {
        homePage.navigateToLoginPage();
        cy.url().should('eq', 'https://demo.nopcommerce.com/login?returnUrl=%2F');
        loginPage.isLoginPageDisplayed().should('be.true');
    });

    after(() => {
        // Perform teardown after all tests
        cy.log("Quitting WebDriver");
        // Note: We don't need to quit WebDriver since Cypress manages it automatically
    });
});
