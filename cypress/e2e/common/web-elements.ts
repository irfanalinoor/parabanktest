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
    firstNameTextField: 'input[id="customer.firstName"]',
    lastNameTextField: 'input[id="customer.lastName"]',
    addressStreetTextField: 'input[id="customer.address.street"]',
    addressCityTextField: 'input[id="customer.address.city"]',
    addressStateTextField: 'input[id="customer.address.state"]',
    addressZipCodeTextField: 'input[id="customer.address.zipCode"]',
    phoneTextField: 'input[id="customer.phoneNumber"]',
    ssnTextField: 'input[id="customer.ssn"]',
    usernameTextField: 'input[id="customer.username"]',
    passwordTextField: 'input[id="customer.password"]',
    repeatPasswordTextField: 'input[id="repeatedPassword"]',
    successTitle: 'div[id="rightPanel"]>h1',
  },
  loginPanel: {
    usernameTextField: 'input[name="username"]',
    passwordTextField: 'input[name="password"]',
    loginButton: 'input[value="Log In"]',
  },
  servicesPanel: {
    wholePanel: 'div[id="leftPanel"]',
  },
};
