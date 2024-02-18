import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
      baseUrl: 'https://parabank.parasoft.com',
      supportFile: 'cypress/support/commands.ts',
      watchForFileChanges: false
  },
});
