export class BasePage {
  constructor(protected path: string) {}

  visit() {
    cy.visit(this.path)
  }
}