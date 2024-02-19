import * as webElements from "../common/web-elements";
import * as apiEndpoints from "../constants/endpoints";
import { faker } from "@faker-js/faker";

const { servicesPanel, openAccountPage, transferFundPage } =
  webElements.webElements;

describe("Transfer Funds spec", () => {
  beforeEach(() => {
    var username = faker.internet.userName();
    var password = faker.internet.password();

    cy.visit("/");
    cy.registerUser(username, password);
  });

  it("Verify Funds Transfer from Saving Account", () => {
    cy.intercept("POST", apiEndpoints.CREATE_ACCOUNT_API).as(
      "postCreateAccount"
    );
    cy.intercept("POST", apiEndpoints.TRANSFER_FUND_API).as("postTransferFund");

    cy.get(servicesPanel.wholePanel)
      .contains("Open New Account")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Open New Account");

    const newAccountType = "SAVINGS";
    const transferFundAmount = "999";

    cy.get(openAccountPage.accountTypeDropdown).select(newAccountType);
    cy.wait(1000);
    cy.get(openAccountPage.openAccountButton).click({ force: true });

    cy.get(".title").contains("Account Opened!");

    cy.wait("@postCreateAccount").then((interception) => {
      expect(interception.response.statusCode).to.equal(200);
      cy.get(openAccountPage.newAccountIdLink)
        .should("be.visible")
        .contains(interception.response.body.id);

      const newAccountId = JSON.stringify(interception.response.body.id);

      cy.get(servicesPanel.wholePanel)
        .contains("Transfer Funds")
        .should("be.visible")
        .click();
      cy.wait(2000);
      cy.get(".title").contains("Transfer Funds");
      cy.get(transferFundPage.amountTextField).clear().type(transferFundAmount);

      cy.get(transferFundPage.fromAccountId).select(newAccountId, {
        force: true,
      });
      cy.get(transferFundPage.transferButton).should("be.visible").click();

      cy.wait("@postTransferFund").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
      cy.get(".title").contains("Transfer Complete!");
      cy.get(transferFundPage.amountTextField)
        .should("be.visible")
        .contains(transferFundAmount);
      cy.get(transferFundPage.fromAccountId)
        .should("be.visible")
        .contains(newAccountId);
    });

    cy.logOut();
  });
});
