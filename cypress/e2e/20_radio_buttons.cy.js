




describe("Radio Button Interactions", ()=>{


it("Verify the radio button check test", ()=>{

// open url
    cy.visit('https://dd-demo-tau.vercel.app/web_elements.html')

// click on radio button option
cy.contains('5. Radio Buttons').click()


cy.wait(3000)

// check the subscribe checkbox 

cy.get('#maleRadio').check()

cy.wait(3000)

cy.get('#femaleRadio').check()

cy.wait(3000)


})





})