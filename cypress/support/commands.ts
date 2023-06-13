Cypress.Commands.add('adminLogin', () => {
    cy.visit('/');
    cy.get('#email-input').type('admin@domestia.fr');
    cy.get('#password-input').type('admin.147');
    cy.get('#login-button').click();
});