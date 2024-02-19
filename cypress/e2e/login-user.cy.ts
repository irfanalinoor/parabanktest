import * as webElements from "./common/web-elements";
import { faker } from "@faker-js/faker";

const { loginPanel, servicesPanel } = webElements.webElements;

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(
    "Verify User Login",
    {
      retries: {
        runMode: 1,
        openMode: 1,
      },
    },
    () => {
      var username = faker.internet.userName();
      var password = faker.internet.password();

      cy.registerUser(username, password);
      cy.get(servicesPanel.wholePanel).contains("Log Out").click();
      cy.get(loginPanel.usernameTextField).clear().type(username);
      cy.get(loginPanel.passwordTextField).clear().type(password);
      cy.get(loginPanel.loginButton).should("be.visible").click();

      cy.get(".title").contains("Accounts Overview").should("be.visible");

      cy.logOut();
    }
  );
});
