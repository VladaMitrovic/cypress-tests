describe('Task 2 - Network Interception', () => {
  it('intercepts a relevant product page request and validates response', () => {
    cy.intercept('GET', '**/*.js').as('assetRequest')

    cy.visit('/')

    cy.get('[data-test="username"]').type(Cypress.env('USERNAME')!)
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD')!, { log: false })
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

    cy.wait('@assetRequest').then((interception) => {
      expect(interception.response?.statusCode).to.eq(200)
      expect(interception.response?.headers).to.have.property('content-type')
      expect(interception.response?.headers['content-type']).to.include('javascript')
      expect(interception.request).to.have.property('url')
    })
  })
})