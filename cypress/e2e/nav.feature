# */* Author-Chidinma Agbazuaka */#
Feature: Nav role

        *As an existing user I want to able to click on all category on the nav bar

    Background: Navigate to page
        *As an existing user I want to be able to click on all category on the nav bar

Given User is on EV page
    Scenario: verify user is on header banner
        When User check for header banner
        Then User check Newsletter signup is present
        And User check Advertiser signup is present
        And User check social signup is present
        And User check logo exists
        And User check Hamburger menu is present

Scenario:Oil&Gas category
When User clicks on 'Oil & Gas' category on the nav bar
Then User is on 'Oil & Gas' page

Scenario:renewables/energytransition category
When The User clicks on 'Renewables/Energy Transition' category on the nav bar
Then The User is on 'Renewables/Energy Transition' page

Scenario:markets category
When User click on 'Market' category on the nav bar
Then User lands on 'Market' page

Scenario:expert opinion category
When User now clicks on 'Opinion' category on the nav bar
Then User is now on 'Opinion' page

Scenario:podcast category
When User clicks on 'Podcast' category 
Then User on 'Podcast' page

# Scenario:africa sub menu category
# When User clicks on 'AFRICA' category
# Then User is on page
# 
# Scenario:america category
# When User clicks on 'AMERICA' category on the nav bar
# Then User is on page
# 
# Scenario:asia category
# When User clicks on 'ASIA' category on the nav bar
# Then User is on page
# 
# Scenario:australasia category
# When User clicks on 'AUSTRALASIA' category on the nav bar
# Then User is on page
# 
# Scenario:europe category
# When User clicks on 'EUROPE' category on the nav bar
# Then User is on page
# 
# Scenario:middle east category
# When User clicks on 'MIDDLE EAST' category on the nav bar
# Then User is on page
# 
# Scenario:northsea category
# When User clicks on 'NORTHSEA' category on the nav bar
# Then User is on page
# 
# Scenario:norway category
# When User clicks on 'NORWAY' category on the nav bar
# Then User is on page






