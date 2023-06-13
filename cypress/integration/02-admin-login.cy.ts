describe('Rendering', () => {
    it('Page rendering', () => {
        cy.visit('/');
        cy.get('#login-screen-title').should('exist');
    });
});

describe('Admin login errors', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Register with invalid email', () => {
        cy.get('#email-input').type('admin.domestia.fr');
        cy.get('#password-input').type('admin.147');

        cy.get('#login-button').click();

        cy.get('#email-input-error').should('exist');
    });

    it('Register with bad email & password', () => {
        cy.get('#email-input').type('bad@domestia.fr');
        cy.get('#password-input').type('admin.bad');

        cy.get('#login-button').click();

        cy.get('#password-input-error').should('exist');
    });

    it('Register with bad email', () => {
        cy.get('#email-input').type('bad@domestia.fr');
        cy.get('#password-input').type('admin.147');

        cy.get('#login-button').click();

        cy.get('#password-input-error').should('exist');
    });

    it('Register with bad password', () => {
        cy.get('#email-input').type('admin@domestia.fr');
        cy.get('#password-input').type('admin.bad');

        cy.get('#login-button').click();

        cy.get('#password-input-error').should('exist');
    });
});

describe('Admin login', () => {
    it('Login with admin account', () => {
        cy.visit('/');
        cy.get('#email-input').type('admin@domestia.fr');
        cy.get('#password-input').type('admin.147');

        cy.get('#login-button').click();

        cy.get('#nav-user-name').should('contain.text', 'admin admin');
        cy.get('#nav-user-email').should('contain.text', 'admin@domestia.fr');
        cy.get('#welcome-message').should('contain.text', 'Welcome on ADA');
    });
});