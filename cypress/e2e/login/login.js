import { selector } from '../../fixtures/constant.json'

const pages = [
    'Contact',
    'Terms & Conditions',
    'Cookie Policy',
    'Sustainable Growth Voice',
    'Privacy Policy',
    'Cookie Preferences',
    'The Press and Journal',
    'The Sunday Post',
    'SG Voice',
];
export class LoginPage {
    get clickLoginText() {
        return cy.get(selector.LOGIN_TEXT)
    }
    get loginTitle() {
        return cy.get(selector.LOGINPAGE_TITLE)
    }
    get validEmail() {
        return cy.get(selector.LOGIN_EMAIL).type(email)
    }
    get validPass() {
        return cy.get(selector.LOGIN_PASS)
    }
    get loginButton() {
        return cy.get(selector.LOGIN_BUTTON)
    }
    get header() {
        return cy.get(selector.HEADER)
    }
    get invalidLoginHeader() {
        return cy.get(selector.INVALIDLOGINHEADER)
    }
    get registerLink() {
        return cy.get(selector.REGISTERLINK)
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
    verifyValidEmail() {
        this.validEmail.should('exist')
    }
    verifyValidPass() {
        this.validPass.should('exist')
    }
    verifyLoginButton() {
        this.loginButton
        .click({ force: true })
    }
    verifyHeader() {
        this.header.should('be.visible')
        cy.contains('My Account').should('be.visible')
    }
    verifyInvalidLoginHeader() {
        this.invalidLoginHeader.should('contain', 'Login')
    }
    verifyRegisterLink() {
        this.registerLink.click({ force: true })
    }
    validateRegisterLink() {
        this.registerLink.within(() => {
            return cy.contains('Register').should('be.visible')
        });
    }
    validateGoogleLink() {
        cy.get(selector.GOOGLELINK)
            .scrollIntoView()
            .should('exist')
            .contains('Sign in with Google')
            .click()
    }
    validateFacebookLink() {
        cy.get(selector.FACEBOOKLINK)
            .scrollIntoView()
            .should('exist')
            .contains('Sign in with Facebook')
            .click()
    }
    verifyNavlinksFooter(){
        cy.get('ul').should('exist')
        cy.get(selector.FOOTER_DCT_LINK).each(($els)=>{
        cy.log($els.text())
       })
       cy.get(selector.MORE_INFO).each(($els)=>{
       cy.log($els.text())
       })
       cy.get(selector.FOOTER_NAV).each(($els)=>{
       cy.log($els.text())
      })
    }
    validateFooterLinks(){
    pages.forEach((page) =>{
        cy.contains(page).then((link)=>{
            cy.request(link.prop('href'))
            cy.log(link.prop('href'))
        })
    })
    }
    validateUrl(expUrl) {
        cy.url().should('include.value',expUrl)
}
}
export const loginPage = new LoginPage