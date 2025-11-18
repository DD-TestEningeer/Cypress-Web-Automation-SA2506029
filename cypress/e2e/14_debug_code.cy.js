
require('cypress-xpath');

// test suite 
describe('locators demo',()=>{


    // test case 1
    it('tc01',()=>{

  // page navigation       
  cy.visit('https://dd-demo-tau.vercel.app/web_elements.html#1-text-input')

  // finding element using xpath 
 //a[text()='1. Text Input']
 //a[contains(text(),'1. Text Inp')]


  cy.xpath("//a[contains(text(),'1 Text Input')]")
})
});

