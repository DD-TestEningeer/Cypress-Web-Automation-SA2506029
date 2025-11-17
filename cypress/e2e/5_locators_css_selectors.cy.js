




describe('Demo for Locators : ', ()=>{

it('1) Using css selectors ', ()=>{

// cy.get('.class-name')

// visit the demo site 

cy.visit('https://dd-demo-tau.vercel.app/web_elements.html');

// find the text element on the webpage 
cy.get('.theory')

// find web-element with css - id 
cy.get('#textInputField')

// find the web-element with tagname 
cy.get('section>h2')

})




})