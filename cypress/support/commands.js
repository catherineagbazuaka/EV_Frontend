/// <reference types="cypress" />
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//import 'cypress-fill-command'
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add('loginViaUi', (email) => {
//     cy.session(
//       email,
//       () => {
//         cy.visit('https://www.energyvoice.com/login')
//         cy.get('#login_email').type(user.email)

//         cy.get('#login_pass').type(user.password)
//         cy.click('.blaize-submit blaize-login-password')
//         cy.get('.header-banner').contains('Visit Today')
//       },
//       {
//         validate: () => {
//           cy.getCookie('auth_key').should('exist')
//         },
//       }
//     )
//   })
