export const webElements = {
  homePage: {
    registerLink: 'div[id="loginPanel"]>p>a[href*="register.htm"]',
    signUpTitle: 'div[id="rightPanel"]>h1',
  },
  registerPage: {
    registerButton: 'input[value="Register"]',
    firstNameError: '[id="customer.firstName.errors"]',
    lastNameError: '[id="customer.lastName.errors"]',
    addressStreetError: '[id="customer.address.street.errors"]',
    addressCityError: '[id="customer.address.city.errors"]',
    addressStateError: '[id="customer.address.state.errors"]',
    addressZipCodeError: '[id="customer.address.zipCode.errors"]',
    ssnError: '[id="customer.ssn.errors"]',
    usernameError: '[id="customer.username.errors"]',
    passwordError: '[id="customer.password.errors"]',
    repeatPasswordError: '[id="repeatedPassword.errors"]',

    firstName: 'input[id="customer.firstName"]',
    lastName: 'input[id="customer.lastName"]',
    addressStreet: 'input[id="customer.address.street"]',
    addressCity: 'input[id="customer.address.city"]',
    addressState: 'input[id="customer.address.state"]',
    addressZipCode: 'input[id="customer.address.zipCode"]',
    ssn: 'input[id="customer.ssn"]',
    username: 'input[id="customer.username"]',
    password: 'input[id="customer.password"]',
    repeatPassword: 'input[id="repeatedPassword"]',

    successTitle: 'div[id="rightPanel"]>h1',
  },
};
