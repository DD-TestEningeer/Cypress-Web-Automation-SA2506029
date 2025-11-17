


describe('text based locators', ()=>{


    it('Using contains to use the element text ', ()=>{


        cy.visit('https://dd-demo-tau.vercel.app/web_elements.html')

        // cy.contains('Button Text’)

        cy.contains('Show Alert');




    })




})