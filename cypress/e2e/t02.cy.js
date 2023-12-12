//import { beforeEach } from "mocha"
import HeroKuapp from "../pageobjects/tpom";
//import herokuapp.json from "../fixtures/herokuapp.json";
const HeroTest = new HeroKuapp

describe("Testing on Hero Kuapp",()=>{

    beforeEach(() => {
        //cy.visit('http://immense-hollows-74271.herokuapp.com/')
        cy.visit({ url: 'http://immense-hollows-74271.herokuapp.com/', failOnStatusCode: false })
    });

    it("Images can not be uploaded",()=> {
        HeroTest.editclick()
        HeroTest.updateImg()
        cy.get('.ng-scope > .pull-right').click()
        cy.requestimg()
        HeroTest.updateval()
    })

    it.only("Item should not be uploaded if exceed chars",()=> {
        HeroTest.charsImg()
        cy.fixture('herokuapp').then(herokuapp => {
            const exceedchars = herokuapp.exceedchars // 301 characters
            cy.get(':nth-child(3) > .controls > .form-control').type(exceedchars)
        })
        HeroTest.clickoncreate()
        HeroTest.charsval()

    })
})