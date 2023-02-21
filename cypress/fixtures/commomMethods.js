import { selector } from '../../fixtures/constant.json'

export class CommonMethods{
    scrollIntoViewFor(selector){
        selector.scrollIntoView().should('be.visible');
    }
    clickLinkWithText(linkText){
        cy.contains(linkText).as('textLink');
        cy.get('@textLink').scrollIntoView();
        cy.get('@textLink').click();
    }
    handleResultsPageApiFeatures(url){
        cy.fixture(url).then((sessionRes)=>{
            cy.intercept('GET', '**/session-data',(req)=>{
                req.reply({
                    body: JSON.parse(JSON.stringify(sessionRes)),
                });
            }).as('resSessionData');
        })
    }
        validateWindowUrl(expUrl){
            cy.location('href').should('include', expUrl);
        }
    validateButtonOnSubspack(tile,productType){
            cy.wrap(tile)
            .find('selector')
            .then((button)=>{
                if (productType === 'Annual contract'){
                    cy.wrap(button).should('have.text','SUBSCRIBE');
                }
                    else{
                    cy.wrap(button).should('have.text','SUBSCRIBE')
                    } 
                })
        }
        validateLoginButtonText() {
            cy.get(selector.LOGIN_BUTTON)
            .within(()=>{
                cy.contains('Login')
            })
        }
    }

export const commonMethods= new CommonMethods();