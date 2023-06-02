describe('Default', () => {
    it('Page rendering', () => {
      cy.visit('/login');

      cy.get('h1').contains('Welcome back !');
    });
});

describe('Login form', () => {
    it('Login with invalid credentials', () => {
      cy.visit('/login');

      cy.get('#email-input').type('test@test.fr');
      cy.get('#password-input').type('Test.147');

      cy.get('#login-button').click();

      cy.contains('body', 'Invalid credentials').should('be.visible');
    });
});