describe('Rendering', () => {
    it('Page rendering', () => {
        cy.adminLogin();
        cy.get('#nav-user-name').should('contain.text', 'admin admin');
        cy.get('#nav-user-email').should('contain.text', 'admin@domestia.fr');
        cy.get('#welcome-message').should('contain.text', 'Welcome on ADA');
    });
});

describe('Access users page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.adminLogin();
    });

    it('Access users page from navbar', () => {
        cy.get('#navbar-users-link').click();

        cy.url().should('include', '/home/editor/users');
    });

    it('Access users page from stepper shortcut', () => {
        cy.get('#stepper-users-shortcut').click();

        cy.url().should('include', '/home/editor/users');
    });
});

describe('Create users', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.adminLogin();
    });

    it('Create user', () => {
        cy.get('#navbar-users-link').click();
        cy.get('#add-user-button').click();

        cy.get('#add-user-firstname').type("User");
        cy.get('#add-user-lastname').type("Domestia");
        cy.get('#add-user-email').type("user@domestia.fr");

        cy.get('#create-user-button').click();

        cy.contains('User created').should('be.visible');
        cy.contains('user@domestia.fr').should('be.visible');
        cy.contains('USER').should('be.visible');
    });

    it('Create maintener', () => {
        cy.get('#navbar-users-link').click();
        cy.get('#add-user-button').click();

        cy.get('#add-user-firstname').type("Maintener");
        cy.get('#add-user-lastname').type("Domestia");
        cy.get('#add-user-email').type("maintener@domestia.fr");
        cy.get('#add-user-role').click().type('{downarrow}').type("{enter}");

        cy.get('#create-user-button').click();

        cy.contains('User created').should('be.visible');
        cy.contains('maintener@domestia.fr').should('be.visible');
        cy.contains('MAINTENER').should('be.visible');
    });

    it('Create editor', () => {
        cy.get('#navbar-users-link').click();
        cy.get('#add-user-button').click();

        cy.get('#add-user-firstname').type("Editor");
        cy.get('#add-user-lastname').type("Domestia");
        cy.get('#add-user-email').type("editor@domestia.fr");
        cy.get('#add-user-role').click().type('{downarrow}{downarrow}').type("{enter}");

        cy.get('#create-user-button').click();

        cy.contains('User created').should('be.visible');
        cy.contains('editor@domestia.fr').should('be.visible');
        cy.contains('EDITOR').should('be.visible');
    });
});