import * as webElements from "../common/web-elements";
import * as apiEndpoints from "../constants/endpoints";
import { faker } from "@faker-js/faker";

const { servicesPanel, openAccountPage, billPaymentPage } =
  webElements.webElements;

describe("Bill Payment spec", () => {
  beforeEach(() => {
    var username = faker.internet.userName();
    var password = faker.internet.password();

    cy.visit("/");
    cy.registerUser(username, password);
  });

  it("Verify Bill Payment from Saving Account", () => {
    cy.intercept("POST", apiEndpoints.CREATE_ACCOUNT_API).as(
      "postCreateAccount"
    );
    cy.intercept("POST", apiEndpoints.BILL_PAY_API).as("postPayBill");

    cy.get(servicesPanel.wholePanel)
      .contains("Open New Account")
      .should("be.visible")
      .click();
    cy.get(".title").contains("Open New Account");

    const newAccountType = "SAVINGS";
    const billAmount = "999";
    const billAccount = faker.finance.pin();

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

      cy.get(openAccountPage.newAccountIdLink)
        .should("be.visible")
        .click({ force: true });
      cy.get(".title").contains("Account Details");

      cy.get(servicesPanel.wholePanel)
        .contains("Bill Pay")
        .should("be.visible")
        .click();
      cy.wait(1000);
      cy.get(".title").contains("Bill Payment Service");

      cy.insertPayeeInfo();
      cy.get(billPaymentPage.accountTextField).clear().type(billAccount);
      cy.get(billPaymentPage.repeatAccountTextField).clear().type(billAccount);
      cy.get(billPaymentPage.amountTextField).clear().type(billAmount);
      cy.wait(1000);
      cy.get(billPaymentPage.fromAccountIdDropdown).select(newAccountId, {
        force: true,
      });
      cy.get(billPaymentPage.sendBillPaymentButton)
        .should("be.visible")
        .click();

      cy.wait("@postPayBill").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
        expect(interception.response.body).to.have.property("amount");
        expect(interception.response.body).to.have.property("accountId");
        expect(JSON.stringify(interception.response.body.amount)).to.equal(
          billAmount
        );
        expect(JSON.stringify(interception.response.body.accountId)).to.equal(
          newAccountId
        );
      });
      cy.get(".title").contains("Bill Payment Complete");
      cy.get(billPaymentPage.billAmountText)
        .should("be.visible")
        .contains(billAmount);
      cy.get(billPaymentPage.fromAccountIdText)
        .should("be.visible")
        .contains(newAccountId);
    });

    cy.logOut();
  });
});
