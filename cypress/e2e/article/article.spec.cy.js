// import {When, Then } from "@badeball/cypress-cucumber-preprocessor"

// When("User search for {string}", (searchTerm) => {
//     cy.get('#search-form__input--header').type(searchTerm);
//     cy.get('.search-form__submit').click();
//   });
//   Then("I should see search results for {string}", (searchTerm) => {
//     cy.get('[data-id="post-477496"] > .category-label').should('be.visible',(searchTerm))
//     cy.location().should((location) => {
//       expect(location.hash).to.be.empty
//       expect(location.port).to.eq('')
//       expect(location.protocol).to.eq('https:')
//       expect(location.search).to.not.be.empty
//     })
//   });
//    Then("at least one search result should be displayed", () => {
//      cy.get('.ep-search__filter-title')
//      .should('have.length.gt', 0)
//   });
// Then("I should see a list of articles related to the search term",()=>{
//   cy.get('.search-results .search-item')
//   .should('have.length.gt', 0)
//   .each(($item) => {
//     cy.wrap($item).should('contain.text', searchTerm)
//   })
//   Given("I am on the homepage", () => {
//     cy.visit('https://www.energyvoice.com');
//   });
  
//   When("I click on the first article link", () => {
//     cy.get('.homepage-articles .post')
//       .first()
//       .find('.post-title a')
//       .click();
//   });
  
//   Then("I should be taken to the article page", () => {
//     cy.url().should('include', '/article/');
//   });
  
//   Then("the article title should be displayed", () => {
//     cy.get('.single-post .post-title').should('exist');
//   });
  
//   Then("the article content should be displayed", () => {
//     cy.get('.single-post .post-content').should('exist');
//   });
  
//   When("I navigate to the {string} section", (sectionName) => {
//     cy.contains('.nav-menu li a', sectionName).click();
//   });
  
//   Then("I should be on the {string} page", (sectionName) => {
//     cy.url().should('include', sectionName.toLowerCase());
//   });
// })
// When("I click on search", ()=>{

// }) 
// Then("I type invalid search term",()=>{

// })
// Then("no results are returned",()=>{

// })
  
 