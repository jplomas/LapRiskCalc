// Import commands.js using ES2015 syntax:
import './commands'

// Import global styles if needed
// import '../src/styles/main.css'

// Import Vue specific support
import { mount } from 'cypress/vue'

// Augment the Cypress namespace to include type definitions for
// your custom command.
declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)

// Example of adding a custom command for Vue component testing
// Cypress.Commands.add('vue', (component, options = {}) => {
//   return mount(component, options)
// }) 