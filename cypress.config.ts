/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineConfig } from 'cypress';

const cypressConfig = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

export default cypressConfig;
