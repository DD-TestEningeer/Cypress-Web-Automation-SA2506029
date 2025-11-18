require("cypress-xpath");

describe("Implicit Assertions", () => {
  it("Use of implicit assertions", () => {
    // Open url
    cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // Login page header validation/assertion
    cy.xpath('//h1[text()="Login Page"]').should("have.text", "Login Page"); // Expected Text => Login Page
    //  cy.xpath('//h1[text()="Login Page"]').should('be.visible'); // visibility check

    // Enter Username field 
    cy.get('#username').should('be.visible').and('be.enabled').type('Demo User')


    // Enter Password field
    cy.xpath('//form[@method="post"]').find('#password').should('be.visible').type('Test@456')


    // Click on the Login button 
    cy.get('button').contains('Login').should('be.enabled').click();

  });
});
