describe('Application', () => {

  before(() => {
    cy.visit('/')
    cy.get('#add-contact').click()
  });
  it('checks page content', () => {
    cy.get('h1').should('contain.text', 'The Simple Address Book');
    cy.get('h2').should('contain.text', 'Contacts');
  });

  describe('user can create a contact', () => {

    it('tests the contact inputs', () => {
      cy.get('#name').type('Kim')
      cy.get('#nickname').type('Svampen')
      cy.get('#email').type('kim.haaga@live.se')
      cy.get('#phone').type('0703 373737')
      cy.get('#countrie').type('Sweden')
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
      cy.get('#contact-list').should('contain', '0703373737')
    });
  });

  describe('User need to fill in required', () => {
    it('tests if required is filled in', () => {
      cy.get('#submit').click()
      cy.get('input:invalid').should('have.length', 3)
      cy.get('#name').then(($input) => {
        expect($input[0].validationMessage).to.eq('Please fill in this field.')
      });
    });
  });
});
