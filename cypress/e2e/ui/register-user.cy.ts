import * as webElements from "../common/web-elements";
import { faker } from "@faker-js/faker";

const { homePage, registerPage, servicesPanel } = webElements.webElements;

describe("User Registration spec", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(homePage.registerLink).click();
  });

  it("Verify SignUp Page Validations", () => {
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

    cy.get(registerPage.firstNameTextField)
      .clear()
      .type(faker.person.firstName());
    cy.get(registerPage.lastNameTextField)
      .clear()
      .type(faker.person.lastName());
    cy.get(registerPage.addressStreetTextField)
      .clear()
      .type(faker.location.streetAddress(false));
    cy.get(registerPage.addressCityTextField)
      .clear()
      .type(faker.location.city());
    cy.get(registerPage.addressStateTextField)
      .clear()
      .type(faker.location.state());
    cy.get(registerPage.addressZipCodeTextField)
      .clear()
      .type(faker.location.zipCode());
    cy.get(registerPage.phoneTextField).clear().type("0403345987");
    cy.get(registerPage.ssnTextField).clear().type(faker.finance.pin());
    cy.get(registerPage.usernameTextField).clear().type(username);
    cy.get(registerPage.passwordTextField).clear().clear().type(password);
    cy.get(registerPage.repeatPasswordTextField).clear().type(password);

    cy.get(registerPage.registerButton).should("be.visible").click();
    cy.get(registerPage.successTitle).should("be.visible").contains(username);

    cy.logOut();
  });
});
