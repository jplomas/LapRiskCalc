import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'tests/e2e/specs/**/*.(spec|cy)?.js',
    supportFile: 'tests/e2e/support/index.js',
    baseUrl: 'http://localhost:8080',
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
    },
    specPattern: 'tests/unit/**/*.(spec|cy)?.js',
    supportFile: false,
  },
}) 