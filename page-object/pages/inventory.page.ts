import { BasePage } from './base.page'

export class InventoryPage extends BasePage {
  constructor() {
    super('/inventory.html')
  }

  addFirstItem() {
    cy.get('[data-test^="add-to-cart"]').first().click()
  }

  expectCartCount(count: number) {
    cy.get('[data-test="shopping-cart-badge"]').should('have.text', String(count))
  }
}