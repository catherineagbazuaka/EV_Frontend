import { selector } from '../../fixtures/constant.json'

export class LoginPage {
    get clickLoginText() {
        return cy.get(selector.LOGIN_TEXT)
    }
    get loginTitle() {
        return cy.get(selector.LOGINPAGE_TITLE)
    }
    get validEmail() {
        return cy.get(selector.LOGIN_EMAIL)
    }
    get validPass() {
        return cy.get(selector.LOGIN_PASS)
    }
    getLoginButton(){
        return cy.get(selector.LOGIN_BUTTON)
        
    }
    verifyClickLoginText() {
        this.clickLoginText.should('exist')
    }
    verifyLoginPage() {
        this.loginTitle.should('be.visible');
        cy.title().should('exist');
    }
    visitPage() { 
    }
    verifyValidEmail(){
        this.validEmail
        this.validEmail.should('exist')
    }
    verifyValidPass(){
        this.validPass
        this.validPass.should('exist')
    }
    verifyLoginButton(){
        this.loginButton
       
    }

}
export const loginPage = new LoginPage