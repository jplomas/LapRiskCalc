// https://docs.cypress.io/api/introduction/api.html

describe('LapRiskCalc Tests', () => {
  beforeEach(() => {
    cy.visit('/')
    // Add debugging to see what's happening with the self-check
    cy.window().then((win) => {
      cy.log('Initial store.pass:', win.store?.pass)
    })

    // Wait for the self-check to pass and store.pass to be true
    cy.contains('PASSED app self-check', { timeout: 10000 }).should('exist')
    
    // Wait and verify store.pass is true
    cy.window().then((win) => {
      cy.log('After self-check store.pass:', win.store?.pass)
    })

    // Wait for the tab bar with a longer timeout
    cy.get('ion-tab-bar', { timeout: 15000 }).should('exist')
  })

  it('Loads the application successfully', () => {
    cy.contains('PASSED app self-check').should('exist')
  })

  it('Has functioning navigation tabs', () => {
    // First verify the tab bar exists
    cy.get('ion-tab-bar').within(() => {
      // Then look for the specific tab buttons
      cy.get('ion-tab-button').should('have.length.at.least', 2)
      cy.contains('ion-tab-button', 'Home').should('exist')
      cy.contains('ion-tab-button', 'Info').should('exist')
    })
  })

  it('Can navigate to Info page', () => {
    // Find the Info tab by its label text
    cy.contains('ion-tab-button', 'Info').click()
    cy.wait(1000) // Wait for navigation
    cy.contains('Dr JP Lomas').should('exist')
    cy.contains('Disclaimer').should('exist')
    cy.contains('License').should('exist')
  })

  it('Has working dark mode toggle', () => {
    // Check initial state
    cy.get('html').then(($html) => {
      const isDark = $html.hasClass('dark')
      // Get the specific dark mode toggle button
      cy.get('ion-buttons[slot="end"]').find('ion-button').then(($button) => {
        cy.wrap($button).should('exist')
        cy.wrap($button).click()
        cy.get('html').should('have.class', isDark ? '' : 'dark')
      })
    })
  })
})
