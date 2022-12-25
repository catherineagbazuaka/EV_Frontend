import { loginPage } from "./login";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

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