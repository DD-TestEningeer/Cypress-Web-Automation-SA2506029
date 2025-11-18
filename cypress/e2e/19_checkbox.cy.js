


describe("Checkbox Interactions", ()=>{


it("Verify the checkbox check/uncheck test", ()=>{

// open url
    cy.visit('https://dd-demo-tau.vercel.app/web_elements.html')

// click on checkbox option
cy.contains('6. Checkboxes').click()


cy.wait(3000)

// check the subscribe checkbox 

cy.get('#subscribeChk').check()

cy.wait(3000)

// uncheck it 

cy.get('#subscribeChk').uncheck()








})





})