import { LoginPage } from '../page-object/pages/login.page'
import { InventoryPage } from '../page-object/pages/inventory.page'

describe('Task 1 - UI Flow', () => {
  const login = new LoginPage()
  const inventory = new InventoryPage()

  it('logs in and adds a product to the cart', () => {
    login.visit()

    login.login(
      Cypress.env('USERNAME')!,
      Cypress.env('PASSWORD')!
    )

    inventory.addFirstItem()
    inventory.expectCartCount(1)
  })
})