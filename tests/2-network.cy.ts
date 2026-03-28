describe('Task 2 - Network Validation', () => {
  it('validates inventory page response after login', () => {
    cy.visit('/')

    cy.get('[data-test="username"]').type(Cypress.env('USERNAME')!)
    cy.get('[data-test="password"]').type(Cypress.env('PASSWORD')!, { log: false })
    cy.get('[data-test="login-button"]').click()

    cy.url().should('include', '/inventory.html')

    cy.request('/inventory.html').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.headers).to.have.property('content-type')
      expect(response.body).to.include('inventory_list')
    })
  })
})