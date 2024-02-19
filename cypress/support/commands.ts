/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
import * as webElements from "../e2e/common/web-elements";
const { homePage, registerPage, servicesPanel, billPaymentPage } =
  webElements.webElements;

Cypress.Commands.add("registerUser", (username, password) => {
  cy.get(homePage.registerLink).click();
  cy.get(registerPage.firstNameTextField)
    .clear()
    .type(faker.person.firstName());
  cy.get(registerPage.lastNameTextField).clear().type(faker.person.lastName());
  cy.get(registerPage.addressStreetTextField)
    .clear()
    .type(faker.location.streetAddress(false));
  cy.get(registerPage.addressCityTextField).clear().type(faker.location.city());
  cy.get(registerPage.addressStateTextField)
    .clear()
    .type(faker.location.state());
  cy.get(registerPage.addressZipCodeTextField)
    .clear()
    .type(faker.location.zipCode());
  cy.get(registerPage.phoneTextField).clear().type("0403345987");
  cy.get(registerPage.ssnTextField).clear().type(faker.finance.pin());
  cy.get(registerPage.usernameTextField).clear().type(username);
  cy.get(registerPage.passwordTextField).clear().type(password);
  cy.get(registerPage.repeatPasswordTextField).clear().type(password);

  cy.get(registerPage.registerButton).should("be.visible").click();
  cy.get(registerPage.successTitle).should("be.visible").contains(username);
});

Cypress.Commands.add("logOut", () => {
  cy.get(servicesPanel.wholePanel)
    .contains("Log Out")
    .should("be.visible")
    .click();
});

Cypress.Commands.add("insertPayeeInfo", () => {
  cy.get(billPaymentPage.payeeNameTextField)
    .clear()
    .type(faker.person.firstName());
  cy.get(billPaymentPage.addressStreetTextField)
    .clear()
    .type(faker.location.streetAddress(false));
  cy.get(billPaymentPage.addressCityTextField)
    .clear()
    .type(faker.location.city());
  cy.get(billPaymentPage.addressStateTextField)
    .clear()
    .type(faker.location.state());
  cy.get(billPaymentPage.addressZipCodeTextField)
    .clear()
    .type(faker.location.zipCode());
  cy.get(billPaymentPage.phoneTextField).clear().type("0403345987");
});

export {};
declare global {
  namespace Cypress {
    interface Chainable {
      registerUser(username: string, password: string): Chainable<void>;
      logOut(): Chainable<void>;
      insertPayeeInfo(): Chainable<void>;
    }
  }
}
