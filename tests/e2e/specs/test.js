// https://docs.cypress.io/api/introduction/api.html

describe('Test startup', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('ion-content', 'PASSED app self-check');
  })
})
