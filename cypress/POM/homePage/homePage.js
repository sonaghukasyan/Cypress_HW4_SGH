import { homePageLocators } from "./homePageLocators";

class HomePage {
    elements = {
        loginButton: () => { return cy.get(homePageLocators.loginButton); },
        productSection: () => { return cy.xpath(homePageLocators.productSectionXPath); },
        productItems: () => { return cy.xpath(homePageLocators.productItemsXPath); },
        logoutButton: () => { return cy.xpath(homePageLocators.logoutXPath); }
    }

    navigateToLoginPage() {
        if (this.isLoggedIn()) {
            this.logout();
        }
        this.elements.loginButton().click();
    }

    scrollToProductSection() {
        this.elements.productSection().scrollIntoView();
    }

    getProductsList() {
        return this.elements.productItems().then($items => $items.toArray());
    }

    navigateToProductDetails(productIndex) {
        this.getProductsList().eq(productIndex).click();
    }

    isLoggedIn() {
        return cy.get(homePageLocators.logoutXPath).should('exist');
    }

    logout() {
        this.elements.logoutButton().click();
    }
}

export const homePage = new HomePage();
