import { productDetailsPageLocators } from "./productDetailsPageLocators";

class ProductDetailsPage {
    elements = {
        notificationBar: () => { return cy.xpath(productDetailsPageLocators.notifBarXPath); },
        shoppingCart: () => { return cy.contains('a', productDetailsPageLocators.shoppingCartLinkTest); },
        productNameElement: () => { return cy.get(productDetailsPageLocators.productNameCSS); }
    }

    initProductFields() {
        const productId = cy.xpath(productDetailsPageLocators.dataProductXPath).invoke('attr', productDetailsPageLocators.productIdAttributeName);
        this.reviewSection = cy.get(productDetailsPageLocators.reviewsCSS.replace('%s', productId)).should('have.css', 'color', 'rgb(255, 0, 0)');
        this.addToCartButton = cy.get(productDetailsPageLocators.addToCartCSS.replace('%s', productId));
        this.productQuantityField = cy.xpath(productDetailsPageLocators.productQuantityXPath.replace('%s', productId));
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
