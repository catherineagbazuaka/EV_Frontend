# */* Author-Chidinma Agbazuaka */
Feature: Login/Register
As a user of the Energy Voice website I want to login:
    *As an existing user I want to be able to login to energy voice page*
    *As a new user I want to be able to register to energy voice*
    *As an existing user I want to be able to do a forgotten password*
    *As a user with facebook account I want to be able to sign in to energy voice facebook page*
    *As a user with google account I want to be able to sign in to energy voice google*

  Background:
    *As an existing user I want to be able to login to energy voice page*

    When User clicks on loginRegister text
@prod
  Scenario: User login/register
    Then User lands on loginpage
@prod
  Scenario Outline: User logs in as an existing user
    And User enter valid email '<email>'
    And User enter valid password '<password>'
    Then User clicks on login button
    Then User should be logged in to energy voice page
    Examples:
      | email                              | password      |
      | catherine.chidinma@dcthomson.co.uk | Marshmallow12 |
@prod
  Scenario Outline: User logs in as an existing user, invalid email or password
    And User enters invalid email '<invalidemail>'
    And User enters invalid password '<invalidpassword>'
    And User clicks on login
    And User is unable to be logged in
    Examples:
      | invalidemail                 | invalidpassword |
      | elvie.bins@gmail.com1**      | Password278     |
      | catherine.rau@hotmail89.com@ | Password12800   |
@prod
  Scenario:Register new user
    Then User clicks on 'click here to register'
    Then User should be in 'Register' page
@prod
  Scenario: Signs in with a facebook account
    Then facebook is visible and clickable
@prod
  Scenario: Signs in with a google account
    Then google is visible and clickable




