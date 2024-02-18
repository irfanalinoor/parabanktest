import * as webElements from "./common/web-elements";
import { faker } from "@faker-js/faker";

const { homePage, registerPage } = webElements.webElements;

describe("SignUp spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(homePage.registerLink).click();
  });

  it("Verify Validations", () => {
    cy.get(registerPage.registerButton).should("be.visible").click();

    cy.get(registerPage.firstNameError)
      .should("be.visible")
      .contains("First name is required");

    cy.get(registerPage.lastNameError)
      .should("be.visible")
      .contains("Last name is required");

    cy.get(registerPage.addressStreetError)
      .should("be.visible")
      .contains("Address is required");

    cy.get(registerPage.addressCityError)
      .should("be.visible")
      .contains("City is required");

    cy.get(registerPage.addressStateError)
      .should("be.visible")
      .contains("State is required");

    cy.get(registerPage.addressZipCodeError)
      .should("be.visible")
      .contains("Zip Code is required");

    cy.get(registerPage.ssnError)
      .should("be.visible")
      .contains("Social Security Number is required");

    cy.get(registerPage.usernameError)
      .should("be.visible")
      .contains("Username is required");

    cy.get(registerPage.passwordError)
      .should("be.visible")
      .contains("Password is required");

    cy.get(registerPage.repeatPasswordError)
      .should("be.visible")
      .contains("Password confirmation is required");
  });

  it("Verify Successful User Registration", () => {
    let username = faker.internet.userName();
    let password = faker.internet.password();

    cy.get(registerPage.firstName).clear().type(faker.person.firstName());
    cy.get(registerPage.lastName).clear().type(faker.person.lastName());
    cy.get(registerPage.addressStreet)
      .clear()
      .type(faker.location.streetAddress(false));
    cy.get(registerPage.addressCity).clear().type(faker.location.city());
    cy.get(registerPage.addressState).clear().type(faker.location.state());
    cy.get(registerPage.addressZipCode).clear().type(faker.location.zipCode());
    cy.get(registerPage.ssn).clear().type(faker.finance.pin());
    cy.get(registerPage.username).clear().type(username);
    cy.get(registerPage.password).clear().clear().type(password);
    cy.get(registerPage.repeatPassword).clear().type(password);

    cy.get(registerPage.registerButton).should("be.visible").click();

    cy.get(registerPage.successTitle).should("be.visible").contains(username);
  });
});
