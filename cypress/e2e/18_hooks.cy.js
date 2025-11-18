// similar to TestNG assertions
describe("Hooks Demo", () => {
  before(() => {
    cy.log("This is before hook");
  });

  beforeEach(() => {
    cy.log("This is before each test");
  });

  it("Demo URL Visit1", () => {
    cy.visit("https://dd-demo-tau.vercel.app/register.html");
  });

  afterEach(() => {
    cy.log("This is after each test");
  });

  it("Demo URL Visit2", () => {
    cy.visit("https://dd-demo-tau.vercel.app/register.html");
  });

  after(() => {
    cy.log("This is after hook");
  });
});
