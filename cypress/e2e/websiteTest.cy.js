/// <reference types="cypress" />
import { homePage } from "../POM/homePage/homePage";
import { productDetailsPage } from "../POM/productDetailsPage/productDetailsPage";

describe('Product Details Page Tests', () => {
    beforeEach(() => {
        cy.viewport(1800, 1000);
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');
    })

    it('Test Valid Addition To Cart', () => {
        homePage.navigateToHomePage();
        homePage.navigateToProductDetails(4);
        productDetailsPage.initProductFields();
        productDetailsPage.setProductQuantity("2");
        productDetailsPage.addToCart();
        productDetailsPage.isAddedToCart().should('be.true');
    });

    it('Test Invalid Addition To Cart', () => {
        homePage.navigateToHomePage();
        homePage.navigateToProductDetails(4);
        productDetailsPage.initProductFields();
        productDetailsPage.setProductQuantity("0");
        productDetailsPage.addToCart();
        productDetailsPage.isAddedToCart().should('be.false');
    });

    it('Test Login Button Navigation', () => {
        homePage.navigateToHomePage();
        homePage.navigateToLoginPage();
        cy.url().should('eq', 'https://demo.nopcommerce.com/login?returnUrl=%2F');
        loginPage.isLoginPageDisplayed().should('be.true');
    });
});
