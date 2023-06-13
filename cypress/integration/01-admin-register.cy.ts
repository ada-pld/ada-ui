describe('Rendering', () => {
    it('Page rendering', () => {
        cy.visit('/');
        cy.get('h1').contains('Thanks for installing ADA');
    });
});

describe('Admin creation errors', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Register with invalid first name', () => {
        cy.get('#first-name').type('t');
        cy.get('#last-name').type('admin');
        cy.get('#email').type('admin@domestia.fr');
        cy.get('#password').type('Admin.147');

        cy.get('#save-button').click();

        cy.get('#first-name-error').should('exist');
    });

    it('Register with invalid last name', () => {
        cy.get('#first-name').type('admin');
        cy.get('#last-name').type('t');
        cy.get('#email').type('admin@domestia.fr');
        cy.get('#password').type('Admin.147');

        cy.get('#save-button').click();

        cy.get('#last-name-error').should('exist');
    });

    it('Register with invalid email', () => {
        cy.get('#first-name').type('admin');
        cy.get('#last-name').type('admin');
        cy.get('#email').type('admin.domestia.fr');
        cy.get('#password').type('Admin.147');

        cy.get('#save-button').click();

        cy.get('input#email[data-invalid=true]').should('exist');
    });

    it('Register with invalid password', () => {
        cy.get('#first-name').type('admin');
        cy.get('#last-name').type('admin');
        cy.get('#email').type('admin@domestia.fr');
        cy.get('#password').type('test');

        cy.get('#save-button').click();

        cy.get('#password-error').should('exist');
    });
});

describe('Admin creation', () => {
    it('Create the admin', () => {
        cy.visit('/');
        cy.get('#first-name').type('admin');
        cy.get('#last-name').type('admin');
        cy.get('#email').type('admin@domestia.fr');
        cy.get('#password').type('admin.147');

        cy.get('#save-button').click();

        cy.contains('Admin created').should('be.visible');
        cy.get('#login-screen-title').should('exist');
    });
});