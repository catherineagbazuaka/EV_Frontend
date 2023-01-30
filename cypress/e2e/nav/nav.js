import { selector } from '../../fixtures/constant.json'

const pages = [
    'Oil & Gas',
    'Renewables/Energy Transition',
    'Markets',
    'Opinion',
    'Podcast',
    // 'Subscribe',
    // 'Nuclear',
    // 'Wind',
    // 'Solar',
    // 'Wave & Tidal',
    // 'Hydro',
    // 'Hydrogen',
    // 'CCS',
    // 'Biofuels',
    // 'Grids & Retail',
    // 'Storage',
    // 'Transport'
]
export class NavRole {
    get header() {
        return cy.get(selector.HEADER);
    }
    get newsletter() {
        return cy.get(selector.NEWSLETTER_SIGNUP);
    }
    get advertiseSignup() {
        return cy.get(selector.ADVERTISE);
    }
    get socialSignup() {
        return cy.get(selector.SOCIAL);
    }
    get logo() {
        return cy.get(selector.EVLOGO)
    }
    get hamburgerMenu() {
        return cy.get(selector.HAMBURGER)
    }
    verifyHeader() {
        this.header.should('exist');
    }
    verifyNewsletter() {
        this.newsletter.should('exist');
    }
    verifyAdvertiseSignup() {
        this.advertiseSignup.should('exist')
    }
    verifySocial() {
        this.socialSignup.should('exist')
    }
    validateLogo() {
        this.logo
            .should('exist')
    }
    validateHamburgerMenu() {
        this.hamburgerMenu
            .should('exist')

    }
    checkLinks() {
        pages.forEach((page) => {
            cy.contains(page).then((link) => {
                cy.log(link.prop('href'))
            })
        })
    }
}
export const navRole = new NavRole
