import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    integrationFolder: 'tests/e2e/specs',
    supportFile: 'tests/e2e/support/index.js',
    testFiles: '**/*.{js,jsx,ts,tsx}',
    video: false,
    screenshotOnRunFailure: false,
    baseUrl: 'http://localhost:8080',
  },
  component: {
    testFiles: 'tests/unit/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    supportFile: false,
  },
}) 