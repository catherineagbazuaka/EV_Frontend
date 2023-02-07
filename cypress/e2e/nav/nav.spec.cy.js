import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { navRole } from "../nav/nav";

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
Then('The User clicks on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-205697 > [href="https://www.energyvoice.com/category/renewables-energy-transition/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('The User is on {string} page', (page) => {
    navRole.checkLinks(page)
})
Then('User click on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-343009> [href="https://www.energyvoice.com/category/markets/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User lands on {string} page', (page) => {
    navRole.checkLinks(page)
})
Then('User now clicks on {string} category on the nav bar', (text) => {
    cy.get('#menu-item-195985> [href="https://www.energyvoice.com/category/opinion/"]').then(($el) => {
        cy.wrap($el).invoke('text').should('contain', text)
        cy.wrap($el).click()
    })
})
Then('User is now on {string} page', (page) => {
    navRole.checkLinks(page)
})
Then('User clicks on {string} category', (text) => {
    cy.get(`${text}`).eq(0).click()
})
Then('User on {string} page', (page) => {
    navRole.checkLinks(page)
})

// Then('User clicks on {string} on the page', () => {
    // cy.get('#menu-item-205697').click()
// })
// 