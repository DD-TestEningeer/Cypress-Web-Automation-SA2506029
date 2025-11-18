const { text } = require("stream/consumers");

require("cypress-xpath");

describe("Explicit Assertions", () => {
  it("Using explicit assertion in test ", () => {
    // open the url

    cy.visit("https://dd-demo-tau.vercel.app/register.html");

    // Validate the Register Page header text
    cy.get("h1").contains("Register Page").should("have.text", "Register Page");

    // Find the username and add validations
    cy.get("#userName").then(($el) => {
      const value = $el.attr("name"); // gives us the actual value
      //   $el.find
      expect(value).to.equal("userName"); // expected values
    })

    // Find the Email field and add validations

    // cy.xpath('//input[@name="userEmail"]').then(($el2) => {
    //   const value = $el2.attr('type'); // gives us the actual value      
    //   expect(value).to.equal('email'); // expected values
    // })



  });
});
