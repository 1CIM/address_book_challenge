describe('user can toggle visibility of the new contact form', () => {

  before('visits page', () => {
    cy.visit('/')
  })

  it('by clicking the "Add Contact" button', () => {
    cy.get('#new-contact-form').should('not.be.visible')
    cy.get('#add-contact').click()
    cy.get('#new-contact-form').should('be.visible')
    cy.get('#add-contact').click()
    cy.get('#new-contact-form').should('not.be.visible')
  })
})