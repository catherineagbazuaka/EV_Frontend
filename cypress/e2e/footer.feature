# */* Author-Chidinma Agbazuaka */#
Feature: Footer component

    *As an existing user I want to able to click on all categories on the Footer
    *As an annonymous user I want to able to click on all categories on the Footer
    *As an existing user who has logged out I want to able to click on all categories on the Footer

  Scenario: existing user able to click on all categories on the Footer
  When User clicks on 'Login'
  And User clicks enters '<email>' and '<password>'
  Then User submit Login
  Then User should be able to view footer navigations
  Then User should be able to click on all categories on the Footer