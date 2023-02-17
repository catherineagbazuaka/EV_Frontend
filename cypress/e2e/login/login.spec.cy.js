import { loginPage } from "./login";
import { When, Then } from "@badeball/cypress-cucumber-preprocessor"

When('User clicks on loginRegister text', () => {
  loginPage.clickLoginText.click({ force: true });
  loginPage.verifyClickLoginText();
})
Then('User lands on loginpage', () => {
  loginPage.verifyLoginPage();
})
Then('User enter valid email {string}', (email)=> {  
  loginPage.verifyValidEmail(email);
})
Then('User enter valid password {string}', (password)=>{
loginPage.verifyValidPass(password);
})
Then('User clicks on login button', () => {
  loginPage.verifyLoginButton();
  loginPage.validateLoginButtonText;
})
Then('User should be logged in to energy voice page', () => {
  loginPage.verifyHeader;
})
Then('User enters invalid email {string}', (invalidemail) => {
  loginPage.verifyValidEmail(invalidemail);
})
Then('User enters invalid password {string}', (invalidpassword) => {
  loginPage.verifyValidPass(invalidpassword);
}) 
Then('User is unable to be logged in', () => {
  loginPage.verifyInvalidLoginHeader;
});
Then('User clicks on login', () => {
  loginPage.verifyLoginButton
})
Then('User clicks on {string}', () => {
  loginPage.verifyRegisterLink
});
Then('User should be in {string} page', () => {
  loginPage.validateRegisterLink
 });
Then('User clicks on Register button', () => {
  loginPage.registerLink
});
Then('facebook is visible and clickable', () => {
  loginPage.validateFacebookLink
});
Then('google is visible and clickable', () => {
  loginPage.validateGoogleLink
});
