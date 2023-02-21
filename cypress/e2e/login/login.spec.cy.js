import { loginPage } from "./login";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"
import { selector } from "../../fixtures/constant.json"

When('User clicks on loginRegister text', () => {
  loginPage.clickLoginText.click({ force: true });
  loginPage.verifyClickLoginText();
})
Then('User lands on loginpage', () => {
  loginPage.verifyLoginPage();
})
Then('User enter valid email {string}', (email) => {
  cy.get(selector.EMAIL_FIELD).type(email)
})
Then('User enter valid password {string}', (password) => {
  cy.get(selector.PASSWORD_FIELD).type(password)
})
Then('User clicks on login button', () => {
  loginPage.verifyLoginButton()
})
Then('User should be logged in to energy voice page', () => {
  loginPage.verifyHeader();
})
Then('User enters invalid email {string}', (invalidemail) => {
  cy.get(selector.EMAIL_FIELD).type(invalidemail)
})
Then('User enters invalid password {string}', (invalidpassword) => {
  cy.get(selector.EMAIL_FIELD).type(invalidpassword)
})
Then('User is unable to be logged in', () => {
  loginPage.verifyInvalidLoginHeader;
});
Then('User clicks on login', () => {
  loginPage.verifyLoginButton()
})
Then('User clicks on {string}', () => {
  loginPage.verifyRegisterLink()
});
Then('User should be in {string} page', () => {
  loginPage.validateRegisterLink
});
Then('User clicks on Register button', () => {
  loginPage.registerLink
});
Then('facebook is visible and clickable', () => {
  loginPage.validateFacebookLink()
});
Then('google is visible and clickable', () => {
  loginPage.validateGoogleLink()
});
