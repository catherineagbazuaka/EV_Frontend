//import { loginPage } from "./login";
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User is on EV page', () => {
    //loginPage.visitPage()
    cy.visit('/')
  })