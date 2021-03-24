describe('Application', () => {

  before(() => {
    cy.visit('http://localhost:3000')
  });
  it('checks page content', () => {
    cy.visit('/');
    cy.get('h1').should('contain.text', 'The Simple Address Book');
    cy.get('h2').should('contain.text', 'Contacts');
  });

  describe('user can create a contact', () => {

    it('tests the contact inputs', () => {
      cy.get('#add-contact').click()
      cy.get('#name').type('Kim')
      cy.get('#nickname').type('Svampen')
      cy.get('#email').type('kim.haaga@live.se')
      cy.get('#phone').type('0703 373737')
      cy.get('#company').type('Student')
      cy.get('#notes').type('Decent r6s player')
      cy.get('#twitter').type('none')
      cy.get('#github').type('1cim')
      cy.get('#submit').click()
    });

    it('displays a name of the new contact', () => {
      cy.get('#contact-list').should('contain', 'Kim')
    });

    it('displays the phone number of the new contact', () => {
      cy.get('#contact-list').should('contain', '0703 373737')
    });
  });
});
