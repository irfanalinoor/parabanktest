import * as webElements from "../e2e/common/web-elements";

const { home } = webElements.webElements;

describe("Home Page spec", () => {
  before(() => {
    cy.visit("/");
  });

  it("Verify Register Link Exist", () => {
    cy.get(home.registerLink)
      .should("be.visible")
      .click();

    cy.get('.title').contains('Signing up is easy!');
  });
});
