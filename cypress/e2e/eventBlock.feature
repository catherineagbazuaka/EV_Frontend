# */* Author-Chidinma Agbazuaka */
Feature: Event block on Energy Voice page
   
   As a user of the Energy Voice website
  I want to be able to view upcoming events,
  register, view details and read more

  Scenario: I want to view an event
    Then User view H1 text
    Then User view event descriptions
    Then User view event date
    Then User view event details
    Then User view event image
    Then User foont,color is as per design
    Then Ensure that the block can be viewed in the correct place on the page.

  Scenario: I want to read more details of the event
    Then User click 'Read More' CTA
    Then User should be on the event page

  Scenario: I want to register now
    Then User click 'Register Now' CTA
    Then User checks Hero banner
    Then User checks heading
    Then User clicks on 'reserve a spot' 
