//import { beforeEach } from "mocha"
import HeroKuapp from "../pageobjects/tpom";
//import herokuapp.json from "../fixtures/herokuapp.json";
const HeroTest = new HeroKuapp



/* Login scenarios:

 * 1. User tryies to create an item
 * 2. User tryies to edit an item
 * 3. User tryies to delete an item
 * 4. User tryies to exceed characters limit
 * 5. User tryies to search an item

*/

describe("Testing on Hero Kuapp",()=>{
    beforeEach(() => {
        //cy.visit('http://immense-hollows-74271.herokuapp.com/')
        cy.visit({ url: 'http://immense-hollows-74271.herokuapp.com/', failOnStatusCode: false })
    });
    
    it("Item should be created", () => {
        HeroTest.typeOnItemDesc()
        HeroTest.uploadImg()
        //HeroTest.alertval()
        cy.wait(2000)
        HeroTest.clickoncreate()
        HeroTest.createdval()
    });

    it('Item should be edited properly', () => {
        HeroTest.editclick()
        HeroTest.editname()
        HeroTest.updatebtn()
        HeroTest.editclick()
        HeroTest.updatedval()
    })
    it('Item should be deleted properly', () => {
        HeroTest.clickondeleteform()
        HeroTest.formdeleteval()
        HeroTest.confirmdelete()
        /*
        cy.get('.modal-title').should('include.text','Warning!')
        cy.get('.btn-primary').click()
        //cy.contains('Yes,delete it!').click()
        */
    })
    it.only('Text should not exceed 300 characters', () => {
        HeroTest.uploadImg()
        cy.fixture('herokuapp').then(herokuapp => {
            const exceedchars = herokuapp.exceedchars // 301 characters
            cy.get(':nth-child(3) > .controls > .form-control').type(exceedchars)
        })
        cy.wait(2000)
        cy.get('.ng-scope > .btn').should('be.disabled')
        HeroTest.clickoncreate()
    })
    it("Search an item",() => {
        cy.get('#content').contains("Creators: Matt Duffer, Ross Duffer")
    })   
})



