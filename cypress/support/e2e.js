import './commands'
Cypress.on('uncaught:exception', (err, runable)=>{
    console.table(err.message);
    return false
})
beforeEach(()=>{
    cy.visit('/')
    cy.get('#onetrust-accept-btn-handler').should('be.visible').click()
})
