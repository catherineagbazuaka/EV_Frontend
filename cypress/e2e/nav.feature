# */* Author-Chidinma Agbazuaka */#
Feature: Nav role

        *As an existing user I want to able to click on all category on the nav bar

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
        When User clicks on 'a[href="https://www.energyvoice.com/category/podcast/"]' category
        Then User on 'Podcast' page


