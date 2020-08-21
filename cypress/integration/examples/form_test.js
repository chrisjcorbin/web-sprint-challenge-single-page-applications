describe("Cypress-Testing", () => {
  it("Open User-Onboarding, localhost:3000", () => {
    cy.visit("http://localhost:3000");
    cy.url().should("include", "localhost");
  });

  it("Get the Name input and type a name in it. Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)", () => {
    cy.get('input[name="name"]').type("Chris").should("have.value", "Chris");
  });

  it("Checking toppings", () => {
    cy.get('input[type="checkbox"]')
      .not("[disabled]")
      .check()
      .should("be.checked");
  });

  it("Selecting a size", () => {
    cy.get('select').should("have.value", "select");
    cy.get('select')
      .select("extra-large")
      // can attach an assertion right away to the element
      .should("have.value", "extra-large");
  });

  it("Check to see if a user can submit the form data", () => {
    cy.get("button").click();
  });

  it("Check for form validation if an input is left empty", () => {
    cy.get('input[name="name"]').should("not.have.value", "");
  });
});
