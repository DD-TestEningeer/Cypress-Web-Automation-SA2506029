describe("Page Navigation", () => {
  it("Navigation Commands", () => {
    // visit register page url

    cy.visit("https://dd-demo-tau.vercel.app/register.html");

    // click on the Login link > Login page url
    cy.contains("Login").click();

    cy.wait(5000);

    // navigate back to the register page
    cy.go("back");

    cy.wait(5000);

    // navigate forward to the login page again
    cy.go("forward");

    cy.wait(5000);
    // page refresh
    cy.reload();

    cy.wait(5000);
  });
});
