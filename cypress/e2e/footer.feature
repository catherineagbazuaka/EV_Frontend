# */* Author-Chidinma Agbazuaka */#
Feature: Footer component on Energy voice
  As an existing user I want to able to click on all categories on the Footer
  As an annonymous user I want to able to click on all categories on the Footer component
  As an existing user who has logged out I want to able to click on all categories on the Footer component

  Scenario: Existing user able to click on all categories on the Footer
    When User clicks on login
    And User enters '<email>' and '<password>'
    Then User submit Login
    Then User should be able to view footer navigations
    Then User should be able to click on all categories on the Footer

  Scenario: Check href attribute on categories on the Footer as a logged out user
    Then User clicks on the 'The Sunday Post' on the footer
    Then User check that Header Div loads correctly
    

