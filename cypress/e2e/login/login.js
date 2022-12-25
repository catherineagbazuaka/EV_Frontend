import { selector } from '../../fixtures/constant.json'

export class LoginPage {
    get clickLoginText() {
        return cy.get(selector.LOGIN_TEXT)
    }
    get loginTitle() {
        return cy.get(selector.LOGINPAGE_TITLE)
    }
    verifyClickLoginText() {
        this.clickLoginText.should('exist')
    }
    verifyLoginPage() {
        this.loginTitle.should('be.visible');
        cy.clearCookie('session_id');
        cy.title().should('exist');
    }
    visitPage() {
        cy.visit('/')
    }
}
export const loginPage = new LoginPage