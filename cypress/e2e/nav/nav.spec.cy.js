import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../login/login";

Given('User is on EV page',()=>{
 loginPage.visitPage()

});
When('User check for header banner',()=>{
    cy.get('.site-header > .wrap').should('exist')
    // cy.get('a').each(($el) => {
        // cy.request($el.prop('href')).its('status').should('eq', 200);
//});
});