describe('Application', () => {
  it('is expected to display message', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'Hello Yo');
  });
});