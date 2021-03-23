describe('Application', () => {
  it('is expected to display message', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'The Simple Address Book');
    cy.get('h2').should('contain.text', 'Contacts');
    cy.get('#add-contact').click()
  });
});