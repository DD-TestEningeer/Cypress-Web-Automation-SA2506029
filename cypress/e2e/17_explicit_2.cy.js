describe("Demo", () => {
  it("sample", () => {
    cy.visit("https://dd-demo-tau.vercel.app/register.html");

    cy.get("h2").then(($el) => {
      const actText = $el.text(); // actual data

      expect(actText).equal("Register Form"); // expected data
    });


     cy.get("h2").then(($el) => {
      const actText = $el.text(); // actual data

     assert.equal(actText, 'Register Form', 'User defined message')
      
    });

  });
});
