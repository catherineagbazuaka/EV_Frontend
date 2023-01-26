import { selector } from '../../fixtures/constant.json'

export class NavRole {
    get header() {
        return cy.get(selector.HEADER)
    }
    

}
export const navRole = new NavRole
