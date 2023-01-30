import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "../login/login";
import { navRole } from "../nav/nav";

Given('User is on EV page', () => {
    loginPage.visitPage()
});
When('User check for header banner', () => {
    navRole.verifyHeader()
});
Then('User check Newsletter signup is present', () => {
    navRole.verifyNewsletter()
});
Then('User check Advertiser signup is present', () => {
    navRole.verifyAdvertiseSignup()
});
Then('User check social signup is present', () => {
    navRole.verifySocial()
});
Then('User check logo exists', () => {
    navRole.validateLogo()
});
Then('User check Hamburger menu is present', () => {
    navRole.validateHamburgerMenu()
})
Then('User clicks on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-195967').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User is on {string} page', (page) => {
    navRole.checkLinks(page)
})
When('The User clicks on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-205697 > [href="https://www.energyvoice.com/category/renewables-energy-transition/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('The User is on {string} page', (page) => {
    navRole.checkLinks(page)
})
When('User click on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-343009> [href="https://www.energyvoice.com/category/markets/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User lands on {string} page', (page) => {
    navRole.checkLinks(page)
})
When('User now clicks on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-195985> [href="https://www.energyvoice.com/category/opinion/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User is now on {string} page', (page) => {
    navRole.checkLinks(page)
})
Then('User clicks on {string} category',(text)=>{
    cy.get('#menu-item-235966> [href="https://www.energyvoice.com/category/podcast/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User on {string} page',(page)=>{
    navRole.checkLinks(page)
})




