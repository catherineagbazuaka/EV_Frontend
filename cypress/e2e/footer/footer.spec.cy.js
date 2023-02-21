import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { loginPage } from "../login/login"
import { selector } from "../../fixtures/constant.json"
import { paths } from "../../fixtures/urlPaths.json"

When('User clicks on login', () => {
    loginPage.clickLoginText.click({ force: true });
})
Then('User enters {string} and {string}', () => {
    cy.get(selector.EMAIL_FIELD).type(selector.username)
    cy.get(selector.PASSWORD_FIELD).type(selector.password)
})
Then('User submit Login', () => {
    cy.get(selector.LOGIN_BUTTON).click({ force: true })
})
Then('User should be able to view footer navigations', () => {
    loginPage.verifyNavlinksFooter()
})
Then('User should be able to click on all categories on the Footer', () => {
    loginPage.validateFooterLinks()
})
Then('User clicks on the {string} on the footer', () => {
    cy.get(selector.THE_SUNDAY_POST).click()
    cy.get('#onetrust-accept-btn-handler').click()
})
Then('User check that Header Div loads correctly', () => {
    cy.get(selector.SUNDAYPOSTHEADER).should('be.visible')
})


