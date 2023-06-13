import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000',
        supportFile: "cypress/support/commands.ts",
        specPattern: 'cypress/integration/*.cy.{js,jsx,ts,tsx}',
        env: {
            BASE_URL: 'https://ada-test.hemmer.dev/',
        },
        viewportWidth: 1600,
        viewportHeight: 900,
    },
})