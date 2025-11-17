


describe('Chaining ', ()=>{



   it('Using chaining locators ', ()=>{


    cy.visit('https://dd-demo-tau.vercel.app/web_elements.html')

    // Parent=> child element 

    cy.get('#1-text-input').find('input')




   }) 





})