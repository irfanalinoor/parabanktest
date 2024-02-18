import * as webElements from "./common/web-elements";

const { homePage } = webElements.webElements;

describe("Landing spec", () => {
  before(() => {
    cy.visit("/");
  });

  it("Verify Register Link Exist", () => {
    cy.get(homePage.registerLink).should("be.visible").click();

    cy.get(homePage.signUpTitle).contains("Signing up is easy!");
  });
});
