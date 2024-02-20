import * as webElements from "../common/web-elements";
import * as apiEndpoints from "../constants/endpoints";
import { faker } from "@faker-js/faker";

const { servicesPanel, openAccountPage, accountDetailsPage } =
  webElements.webElements;

describe("Saving Account spec", () => {
  beforeEach(() => {
    var username = faker.internet.userName();
    var password = faker.internet.password();

    cy.visit("/");
    cy.registerUser(username, password);
  });

  it("Verify Saving Account Opening", () => {
    cy.intercept("POST", apiEndpoints.CREATE_ACCOUNT_API).as(
      "postCreateAccount"
    );

    cy.get(servicesPanel.wholePanel)
      .contains("Open New Account")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Open New Account");

    cy.get(openAccountPage.initialAmountText)
      .invoke("text")
      .then((text) => {
        const newAccountType = "SAVINGS";
        // extract initial deposit number from text
        const initialDepositAmount = text.replace(/\D/g, "");
        expect(text.replace(/\D/g, "")).to.include(initialDepositAmount);

        cy.get(openAccountPage.accountTypeDropdown).select(newAccountType);
        cy.wait(1000);
        cy.get(openAccountPage.openAccountButton).click();
        cy.wait(1000);
        cy.get(".title").contains("Account Opened!");

        cy.wait("@postCreateAccount").then((interception) => {
          expect(interception.response.statusCode).to.equal(200);
          expect(interception.response.body).to.have.property("id");
          expect(interception.response.body).to.have.property("type");
          cy.get(openAccountPage.newAccountIdLink)
            .should("be.visible")
            .contains(interception.response.body.id);
        });

        cy.get(openAccountPage.newAccountIdLink)
          .should("be.visible")
          .click({ force: true });

        cy.get(".title").contains("Account Details");

        cy.get(accountDetailsPage.accountIdText).should("be.visible");
        cy.get(accountDetailsPage.accountTypeText)
          .should("be.visible")
          .contains(newAccountType);

        cy.get(accountDetailsPage.accountBalanceText)
          .invoke("text")
          .then((text) => {
            expect(text.replace(/\D/g, "")).to.include(initialDepositAmount);
          });

        cy.get(accountDetailsPage.accountAvailableBalanceText)
          .invoke("text")
          .then((text) => {
            expect(text.replace(/\D/g, "")).to.include(initialDepositAmount);
          });
      });

    cy.logOut();
  });
});
