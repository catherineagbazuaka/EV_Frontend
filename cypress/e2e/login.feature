Feature: Login/Register

    *As an existing user I want to be able to login to energy voice page*
    *As a new user I want to be able to register to energy voice*
    *As an existing user I want to be able to do a forgotten password*
    *As a user with facebook account I want to be able to sign in to energy voice facebook page*
    *As a user with google account I want to be able to sign in to energy voice google*
  Background:
    *As an existing user I want to be able to login to energy voice page*

    Given User is on EV page
    When User clicks on login

  Scenario: login/register

    Then User lands on loginpage

# Scenario: login as an existing user
#   Given User is on EV page
#   When User clicks on login
#   And User enter email address
#   And User enter password address
#   And User clicks on login button
#   Then User should be logged in to energy voice page

# Scenario: login with facebook credential(email address)
#   Given User is on EV page
#   When User clicks on login
#   And User clicks on sign in with facebook
#   Then User enters facebook email address
#   Then User enters facebook password
#   Then User clicks on facebook login button
#   Then User should be logged in to energy voice facebook page

# Scenario: login with google credential
#   Given User is on EV page
#   When User clicks on login
#   Then User clicks on sign in with google
#   Then User enters google email address
#   Then User enters google password
#   Then User clicks on google login button

# Scenario: Register new user
# Given User is on EV page
# When User clicks on login
# Then User clicks on 'click here to register'
# Then User should be in 'Register' page
# Then User enters email address register page
# Then User enters password on register page
# Then User clicks on Register button
# Then User should be in 'Register' page



