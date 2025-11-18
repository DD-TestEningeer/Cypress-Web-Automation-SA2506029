




describe("Dropdown Interactions", ()=>{


it("Verify the dropdown selections ", ()=>{

// open url
    cy.visit('https://dd-demo-tau.vercel.app/web_elements.html')

// click on dropdown button option
cy.contains('7. Dropdown').click()
cy.wait(3000)

// select the values from dropdown 

// using visible text
cy.get('#dropdownField').select('BMW')
cy.wait(3000)

// using value
cy.get('#dropdownField').select('Audi')
cy.wait(3000)

// using index
cy.get('#dropdownField').select(3)
cy.wait(3000)


})





})