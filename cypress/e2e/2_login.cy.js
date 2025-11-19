Cypress.Screenshot.defaults({
  screenshotOnRunFailure: true,
})


describe("Login Test Suite", () => {
  it("Open login page", () => {
    cy.visit("https://dd-demo-tau.vercel.app/login.html");
  });



    it("Verify user login scenario", () => {
    
    // step 1 - page navigation 
      cy.visit("https://dd-demo-tau.vercel.app/login.html");

    // step 2 - enter the username 

    cy.get('#username').should('have.text', 'demo')

    // cy.get('#username').type('demo user');


    // step 3 - enter the password
    cy.get('#password').type('Test@1234')

    // step 4 - click on the login button 
    cy.contains('Login').click()


  });



});
