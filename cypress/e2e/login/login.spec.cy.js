import { loginPage } from "./login";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User is on EV page', () => {
  loginPage.visitPage()
})
When('User clicks on login', () => {
  loginPage.clickLoginText.click({force: true});
  loginPage.verifyClickLoginText();
})
Then('User lands on loginpage', () => {
  loginPage.verifyLoginPage();
})
  Then('User enter',(datatable)=>{
    datatable.hashes().forEach((element)=>{
      cy.get("#login_email").clear();
      cy.get("#login_email").type(element.email)
      cy.get("#login_pass").clear();
      cy.get("#login_pass").type(element.password)
  })
})
Then('User clicks on login button',() =>{
  cy.get('.blaize-form-login > .blaize-validators > .blaize-submit').click({force:true})
})
Then('User should be logged in to energy voice page',()=>{
  cy.get('.site-header__flex').should('be.visible')
})
Then('User enters',(datatable)=>{
  datatable.hashes().forEach((element)=>{
    cy.get("#login_email").clear();
    cy.get("#login_email").type(element.invalidemail)
    cy.get("#login_pass").clear();
    cy.get("#login_pass").type(element.invalidpassword)
  })
})
Then('User is unable to be logged in',()=>{
  cy.get('.blaize-form-login > .blaize-validators > .blaize-error').should('be.visible')
})
Then('User clicks on sign in with facebook',()=>{
cy.get('.blaize-form-login > .blaize-identifiers > [data-oauth-provider="facebook"]')
})
