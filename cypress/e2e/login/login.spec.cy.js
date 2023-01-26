import { loginPage } from "./login";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"


Given('User is on EV page', () => {
loginPage.visitPage
})
When('User clicks on loginRegister text', () => {
  loginPage.clickLoginText.click({ force: true });
  loginPage.verifyClickLoginText();
})
Then('User lands on loginpage', () => {
  loginPage.verifyLoginPage();
})
Then('User enter valid email {string}', (email)=> {  
  loginPage.verifyValidEmail(email)
})
Then('User enter valid password {string}', (password)=>{
loginPage.verifyValidPass(password)

})
Then('User clicks on login button', () => {
  loginPage.verifyLoginButton()
  loginPage.validateLoginButtonText
  //cy.get('.blaize-form-login > .blaize-validators > .blaize-submit').click({ force: true })
})
Then('User should be logged in to energy voice page', () => {
  cy.get('.site-header__flex').should('be.visible')
})
Then('User enters invalid email {string}', (invalidemail) => {
     cy.get("#login_email").type(invalidemail)
})
Then('User enters invalid password {string}', (invalidpassword) => {
  cy.get("#login_pass").type(invalidpassword)
}) 
Then('User is unable to be logged in', () => {
  cy.get('.blaize-form-login > .blaize-validators > .blaize-error').should({display:none})
});
Then('User clicks on login', () => {
  cy.get('.blaize-form-login > .blaize-validators > .blaize-submit').click({ force: true })
})
// Then('User clicks on {string}', () => {
  // cy.get('.blaize-to-register > a').click({ force: true })

// });
// Then('User should be in {string} page', () => {
  // cy.get('.blaize-form-register > .blaize-title').within(() => {
    // return cy.contains('Register').should('be.visible')
  // });
// });
// Then('User enters email address register page', () => {
  // cy.get('#reg_email').type('zuaka200@gmail.com')
  
// });
// Then('User enters password on register page', () => {
  // cy.get('#reg_pass').type('Patricia88')
 
// });
// Then('User clicks on Register button', () => {
  
  // cy.get('.blaize-form-register > .blaize-validators > .blaize-submit').click({ force: true })
// });
// Then('facebook is visible and clickable', () => {
  // cy.get('.blaize-form-login > .blaize-identifiers > [data-oauth-provider="facebook"]')
    // .scrollIntoView()
    // .should('exist')
    // .contains('Sign in with Facebook')
    // .click()
// });
// Then('google is visible and clickable', () => {
  // cy.get('.blaize-form-login > .blaize-identifiers > [data-oauth-provider="google"]').scrollIntoView()
    // .should('exist')
    // .contains('Sign in with Google')
    // .click()
// });
// 