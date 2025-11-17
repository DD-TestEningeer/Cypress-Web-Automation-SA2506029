
require('cypress-xpath');

describe('Locators Demo' , ()=>{


 it('TC01', ()=>{


    cy.visit('https://dd-demo-tau.vercel.app/web_elements.html');

    cy.xpath("//a[contains(text(),'25. Sortable Table')]").click()





 })   






})