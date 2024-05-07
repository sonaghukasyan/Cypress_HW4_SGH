import { productDetailsPageLocators } from "./productDetailsPageLocators";

class ProductDetailsPage {
    elements = {
        notificationBar: () => { return cy.xpath(productDetailsPageLocators.notifBarXPath); },
        shoppingCart: () => { return cy.contains('a', productDetailsPageLocators.shoppingCartLinkTest); },
        productNameElement: () => { return cy.get(productDetailsPageLocators.productNameCSS); },
        reviewSection: () => {return cy.css(productDetailsPageLocators.reviewsCSS.replace('%s', '4')); },
        addToCartButton: () => { return cy.get(productDetailsPageLocators.addToCartCSS.replace('%s', '4'));},
        productQuantityField: () => { return cy.xpath(productDetailsPageLocators.productQuantityXPath.replace('%s', '4'));}
    }

    seeReviews() {
        this.elements.reviewSection().click();
    }

    addToCart() {
        this.elements.addToCartButton().click();
    }

    isAddedToCart() {
        this.elements.notificationBar().should('have.class', 'success');
        this.elements.shoppingCart().click();
    }

    scroll() {
        this.elements.reviewSection().scrollIntoView();
    }

    getProductName() {
        return this.elements.productNameElement().invoke('text');
    }

    setProductQuantity(quantity) {
        this.elements.productQuantityField().clear().type(quantity);
    }
}

export const productDetailsPage = new ProductDetailsPage();
