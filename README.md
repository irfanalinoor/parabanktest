## E2E Test Automation with Cypress

**Overview:**
Para bank is a realistic online banking application which enables users to manage fund transactions.
This project demonistrate a E2E test automation framework using Cypress for Para bank application covering both UI and API test.
Base URL: https://parabank.parasoft.com/

**Setup**
- GitHub Repo
https://github.com/irfanalinoor/parabanktest
 - Clone GitHub repo:
`git clone git@github.com:irfanalinoor/parabanktest.git`
 - Install dependencies:
 `yarn install`

**Run Tests**
 - Run tests in Cypress Runner (local):
`yarn cy:open`
- Run tests in Terminal (local):
`yarn cy:run`
- Run tests in Cypress Cloud:
`npx cypress run --record --key c93783aa-5b30-4b1e-a48d-459b22602d03`
- View results on Cypress Cloud:
https://cloud.cypress.io/projects/3ishcm/branches/main/runs


**Reports**
- Local Run Test Report on Terminal
- Cypress Cloud Test Report
https://cloud.cypress.io/projects/3ishcm/runs/6/specs

**CI/CD Integration**
- View results on GitHub Actions:
https://github.com/irfanalinoor/parabanktest/actions
- GitHub Actions Test Run on PUSH:
https://github.com/irfanalinoor/parabanktest/actions/runs/7970229002/job/21762532134
