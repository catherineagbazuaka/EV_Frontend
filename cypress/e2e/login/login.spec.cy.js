import { loginPage } from "./login";
import { Given, When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";

Given('User is on EV page', () =>{
  loginPage.visitPage()
})
When('User clicks on login', () =>{
  loginPage.clickLoginText.click({ force: true });
  loginPage.verifyClickLoginText();

})
Then('User lands on loginpage', () =>{
  loginPage.verifyLoginPage();
})
// Then('User enter {string} address',(email) =>{
//   cy.get("#login_email").type(email);
Then('User enter email address',(datatable)=>{
  datatable.hashes().forEach((element)=>{
    cy.contains('Email address').click();
    cy.get("#login_email").clear();
    cy.get("#login_email").type(element.email)

  })
//})
})
Then('User enter {string} address',(password) =>{
  cy.get('#login_pass').type(password);
})
Then('User clicks on login button',() =>{
  cy.get('.blaize-form-login > .blaize-validators > .blaize-submit').click({force:true})
})
Then('User should be logged in to energy voice page',()=>{
  cy.get('.site-header__flex').should('be.visible')
})