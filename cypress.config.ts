import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "3ishcm",
  e2e: {
    baseUrl: "https://parabank.parasoft.com",
    supportFile: "cypress/support/commands.ts",
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    retries: {
      runMode: 2,
      openMode: 2
    }
  },
});
