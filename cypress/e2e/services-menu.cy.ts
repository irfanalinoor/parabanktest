import * as webElements from "./common/web-elements";
import { faker } from "@faker-js/faker";

const { loginPanel, servicesPanel } = webElements.webElements;

describe("Account Service Menu spec", () => {
  beforeEach(() => {
    cy.visit("/");
    var username = faker.internet.userName();
    var password = faker.internet.password();

    cy.registerUser(username, password);
    cy.get(servicesPanel.wholePanel).contains("Log Out").click();
    cy.get(loginPanel.usernameTextField).clear().type(username);
    cy.get(loginPanel.passwordTextField).clear().type(password);
    cy.get(loginPanel.loginButton).should("be.visible").click();
  });

  it("Verify Menu Links", () => {
    cy.get(servicesPanel.wholePanel)
      .contains("Open New Account")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Open New Account");

    cy.get(servicesPanel.wholePanel)
      .contains("Accounts Overview")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Accounts Overview");

    cy.get(servicesPanel.wholePanel)
      .contains("Transfer Funds")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Transfer Funds");

    cy.get(servicesPanel.wholePanel)
      .contains("Bill Pay")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Bill Pay");

    cy.get(servicesPanel.wholePanel)
      .contains("Find Transactions")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Find Transactions");

    cy.get(servicesPanel.wholePanel)
      .contains("Update Contact Info")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Update Profile");

    cy.get(servicesPanel.wholePanel)
      .contains("Request Loan")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Apply for a Loan");

    cy.logOut();
  });
});
