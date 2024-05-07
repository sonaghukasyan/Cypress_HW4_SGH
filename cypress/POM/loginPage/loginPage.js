import { loginPageLocators } from "./loginPageLocators";

class LoginPage {
    elements = {
        email: () => { return cy.get(loginPageLocators.email); },
        password: () => { return cy.get(loginPageLocators.password); },
        loginButton: () => { return cy.get(loginPageLocators.loginButton).filter(':visible'); },
        incorrectLogin: () => { return cy.get(loginPageLocators.loginError); }
    }

    enterEmail(email) {
        this.elements.email().clear().type(email);
    }

    enterPassword(password) {
        this.elements.password().clear().type(password);
    }

    clickOnLoginButton() {
        this.elements.loginButton().click();
    }

    isLoginPageDisplayed() {
        return (
            cy.get(loginPageLocators.email).should('be.visible') &&
            cy.get(loginPageLocators.password).should('be.visible')
        );
    }

    isErrorMessageDisplayed() {
        return cy.get(loginPageLocators.loginError).should('be.visible');
    }

    getErrorMessage() {
        return cy.get(loginPageLocators.loginError).invoke('text');
    }
}

export const loginPage = new LoginPage();
