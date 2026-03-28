import { defineConfig } from 'cypress'
import * as dotenv from 'dotenv'

dotenv.config({ path: 'config/default.env' })

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL,

    specPattern: 'tests/**/*.cy.ts',
    supportFile: 'support/e2e.ts',

    env: {
      USERNAME: process.env.SAUCE_USERNAME,
      PASSWORD: process.env.SAUCE_PASSWORD,
      API_URL: process.env.API_BASE_URL,
    },
  },

  screenshotOnRunFailure: true,
  video: true,
  defaultCommandTimeout: 5000,
})