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

    Scenario:verify Oil&Gas category
        When User clicks on 'Oil & Gas' category on the nav bar
        Then User is on 'Oil & Gas' page

    Scenario:verify renewables/energytransition category
        When The User clicks on 'Renewables/Energy Transition' category on the nav bar
        Then The User is on 'Renewables/Energy Transition' page

    Scenario:verify markets category
        When User click on 'Market' category on the nav bar
        Then User lands on 'Market' page

    Scenario:verify expert opinion category
        When User now clicks on 'Opinion' category on the nav bar
        Then User is now on 'Opinion' page

    Scenario:verify podcast category
        When User clicks on 'a[href="https://www.energyvoice.com/category/podcast/"]' category
        Then User on 'Podcast' page

        Scenario:verify submenus category
         Then User should be able to view submenus
         Then User clicks on submenus under category
         Then User checks that Href Attribute exists
         Then User checks Font and color is correct
         Then User expects to be navigate to the correct taxonomy
         

      

