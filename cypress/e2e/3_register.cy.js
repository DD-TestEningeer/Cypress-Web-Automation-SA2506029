describe("Register Test Suite", () => {
  it("Open register page", () => {
    cy.visit("https://dd-demo-tau.vercel.app/register.html");
  })


    it("Verify the User registration with valid details", () => {

    // step 1 - User navigates to the register page   
    cy.visit("https://dd-demo-tau.vercel.app/register.html");

    // step 2 - Validate the register page title
    cy.title().should('includes', 'Register Demo')

    // step 3 - Enter Username 
    // cy.get() - is used to find the web element similar to driver.findElement()
    // using the css selector 
    // type() - similar sendKeys() - used for typing the data
    cy.get('#userName').type('Demo User')

    // step 4 - Enter Email 
    cy.get('#userEmail').type('demo@gmail.com')

    // step 5 - Enter Password 
    cy.get('#password').type('Test@1234');

    // step 6 - Click on the Register button 
    cy.contains('Register').click()


})


})
