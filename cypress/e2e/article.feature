# */* Author-Chidinma Agbazuaka */
Feature: Energy Voice Website Tests
    As a user of the Energy Voice website
    I want to be able to search for articles, navigate the website, and view article content
    So that I can stay informed about the energy industry

    Scenario: I want to Search for an article
        When User search for "oil and gas"
        Then I should see search results for "OIL & GAS"
        And at least one search result should be displayed
        And I should see a list of articles related to the search term

    Scenario: I want to View an article
        When I click on the first article link
        Then I should be taken to the article page
        And the article title should be displayed
        And the article content should be displayed

    Scenario: I want to filter the articles by the author
        When I click on the search
        Then I type on the search page 'Mark Lammey'
        And I click on the search icon
        Then I should be on Author path
        Then I should see h1 header for the Author#
        Then I should see h2 header for the Author
        Then I should see h3 headers for the Author

    Scenario:I want to Navigate to different sections
        When I navigate to the "Opinion" section
        Then I should be on the "Opinion" page
        And at least one article should be displayed
        When I navigate to the "Markets" section
        Then I should be on the "Markets" page
        And at least one article should be displayed
        When I navigate to the "North Sea" section
        Then I should be on the "North Sea" page
        And at least one article should be displayed

    Scenario: I want to search for an invalid search term
        When I click on search
        Then I type invalid search term
        Then no results are returned









