	        */* Author-Chidinma Agbazuaka */

Feature: Nav role

        *As an existing user I want to able to click on all category on the nav bar

    Background: Navigate to page
        *As an existing user I want to be able to click on all category on the nav bar

        Given User is on EV page

    Scenario: check ordered list for nav role
        When User checks for order list on the header section of the nav bar
        Then User checks for un-order list on the header section of the nav bar
        Then User checks for href on the order list on the header section of the page
        Then User checks for the presence of text, font style on the header section of the page

    Scenario:Oil&Gas category
        When User clicks on 'OIL & GAS' category on the nav bar
        Then User is on 'OIL & GAS' page

    Scenario:renewables/energytransition category
        When User clicks on 'RENEWABLES/ENERGY TRANSITION' category on the nav bar
        Then User is on 'RENEWABLES/ENERGY TRANSITION' page

    Scenario:markets category
        When User clicks on 'MARKET' category on the nav bar
        Then User is on 'MARKET' page

    Scenario:expert opinion category
        When User clicks on 'EXPERT OPINION' category on the nav bar
        Then User is on 'EXPERT' page

    Scenario:podcast category
        When User clicks on 'PODCAST' category on the nav bar
        Then User is on 'PODCAST' page

    Scenario:africa category
        When User clicks on 'AFRICA' category
        Then User is on page

    Scenario:america category
        When User clicks on 'AMERICA' category on the nav bar
        Then User is on page

    Scenario:asia category
        When User clicks on 'ASIA' category on the nav bar
        Then User is on page

    Scenario:australasia category
        When User clicks on 'AUSTRALASIA' category on the nav bar
        Then User is on page

    Scenario:europe category
        When User clicks on 'EUROPE' category on the nav bar
        Then User is on page

    Scenario:middle east category
        When User clicks on 'MIDDLE EAST' category on the nav bar
        Then User is on page

    Scenario:northsea category
        When User clicks on 'NORTHSEA' category on the nav bar
        Then User is on page

    Scenario:norway category
        When User clicks on 'NORWAY' category on the nav bar
        Then User is on page