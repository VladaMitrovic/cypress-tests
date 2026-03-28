import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  constructor() {
    super('/')
  }

  login(username: string, password: string) {
    cy.get('[data-test="username"]').type(username)
    cy.get('[data-test="password"]').type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
  }
}