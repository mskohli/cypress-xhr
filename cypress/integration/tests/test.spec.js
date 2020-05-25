/// <reference types="Cypress" />

describe('My First Test', () => {
  beforeEach(() => {
    cy.server()
  })
  it('finds the content "type"', () => {
    cy.route({
      method: 'POST',
      url: '/lsp',
      response: []
    })
    cy.visit('https://www.bing.com')

  })
})