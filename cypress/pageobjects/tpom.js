class HeroKuapp {

    pageElements = {
        itemform: ':nth-child(3) > .controls > .form-control',
        createbtn: '.ng-scope > .btn', 
        editbtn: '//*[@id="content"]/div[1]/div/ul/li[1]/div/div/div[1]/button[1]',
        title: ':nth-child(1) > .media-left > .media-body > :nth-child(2) > .story',
        deleteitembtn: ':nth-child(15) > .media-left > .media-body > .btn-group > [ng-click="strangerlist.open(item)"]',
        confirmdelete: '.btn-primary',
        imgbox: ':nth-child(1) > .media-left > .col-md-3 > .media-object',
        imgbox2: ':nth-child(14) > .media-left > .col-md-3 > .media-object'
        
    }
    typeOnItemDesc() {
        cy.get(this.pageElements.itemform).type("Test created name");
    }
    uploadImg() {
        cy.get('#inputImage')
            .selectFile("cypress/fixtures/testimage2.jpg")
    }
    updateImg() {
        cy.get('#inputImage')
            .selectFile("cypress/fixtures/testimage3.jpg")
    }
    charsImg(){
        cy.get('#inputImage')
            .selectFile("cypress/fixtures/testimage4.jpg")
    }
    clickoncreate(){
        cy.get(this.pageElements.createbtn).click({force:true})
    }

    alertval(){
        cy.on('window:alert',(alert)=>{
            //assertions
            expect(alert).to.contains('You must to select an image');
        })
    }
    createdval(){
        cy.get('#content').should('include.text',"Test created name")
        cy.contains("Test created name")
    }
    editclick(){
        cy.xpath(this.pageElements.editbtn).click()
    }
    editname(){
        cy.get(this.pageElements.itemform).clear().wait(3000)
            .type('Test edited name')
    }
    updatebtn(){
        cy.contains('Update Item').click()
    }
    updatedval(){
        cy.get(this.pageElements.title)
            .should('include.text','Test edited name')
    }
    clickondeleteform(){
        cy.get(this.pageElements.deleteitembtn).click()
    }
    formdeleteval(){
        cy.get('.modal-title').should('include.text','Warning!')
    }
    confirmdelete(){
        cy.get(this.pageElements.confirmdelete).click()
    }
    
    /*
    charsval(){
        cy.get(':nth-child(14) > .media-left > .media-body').should('have.length',1)
    }
    */
    updateval(){
        cy.get(this.pageElements.imgbox).should('have.attr','src', 'assets/images/testimage3.jpg')
    }
    charsval(){
        cy.get(this.pageElements.imgbox2).should('not.have.attr','src', 'assets/images/testimage4.jpg')
    }
}

export default HeroKuapp