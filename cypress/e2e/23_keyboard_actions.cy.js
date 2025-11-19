describe("Keyboard Actions", () => {
  it("Keyboard Actions Use", () => {
    // visit register page url

    cy.visit("https://dd-demo-tau.vercel.app/register.html");

    // click on the Login link > Login page url
    cy.contains("Login").click();

    // username

    cy.get('#username').type('DemoUser{enter}')

    // password
    cy.get('#password').type('DemoUser{enter}')

    cy.xpath('abc')
    
  });
});
