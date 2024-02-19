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
  openAccountPage: {
    accountTypeDropdown: 'select[id="type"]',
    existingAccountIdDropdown: 'select[id="fromAccountId"]',
    openAccountButton: 'input[value="Open New Account"]',
    newAccountIdLink: '[id="newAccountId"]',
    initialAmountText: ":nth-child(5) > b",
  },
  accountDetailsPage: {
    accountTypeText: '[id="accountType"]',
    accountIdText: '[id="accountId"]',
    accountBalanceText: '[id="balance"]',
    accountAvailableBalanceText: '[id="availableBalance"]',
  },
  transferFundPage: {
    amountTextField: '[id="amount"]',
    fromAccountId: '[id="fromAccountId"]',
    toAccountId: '[id="toAccountId"]',
    transferButton: 'input[value="Transfer"]',
  },
  billPaymentPage: {
    payeeNameTextField: 'input[name="payee.name"]',
    addressStreetTextField: 'input[name="payee.address.street"]',
    addressCityTextField: 'input[name="payee.address.city"]',
    addressStateTextField: 'input[name="payee.address.state"]',
    addressZipCodeTextField: 'input[name="payee.address.zipCode"]',
    phoneTextField: 'input[name="payee.phoneNumber"]',
    accountTextField: 'input[name="payee.accountNumber"]',
    repeatAccountTextField: 'input[name="verifyAccount"]',
    amountTextField: 'input[name="amount"]',
    fromAccountIdDropdown: '[name="fromAccountId"]',
    sendBillPaymentButton: 'input[value="Send Payment"]',
    fromAccountIdText: '[id="fromAccountId"]',
    billAmountText: '[id="amount"]',
  },
};
