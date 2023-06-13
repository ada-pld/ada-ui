import '../support/admin-login';

describe('Rendering', () => {
    it('Page rendering', () => {
        cy.adminLogin();
        cy.get('#nav-user-name').should('contain.text', 'admin admin');
        cy.get('#nav-user-email').should('contain.text', 'admin@domestia.fr');
        cy.get('#welcome-message').should('contain.text', 'Welcome on ADA');
    });
});

describe('Access config page', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.adminLogin();
    });

    it('Access config page from navbar', () => {
        cy.get('#navbar-config-link').click();

        cy.url().should('include', '/home/admin/config');
    });

    it('Access config page from stepper shortcut', () => {
        cy.get('#stepper-config-shortcut').click();

        cy.url().should('include', '/home/admin/config');
    });
});

describe('Change ADA config', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.adminLogin();
        cy.get('#stepper-config-shortcut').click();
    });

    it('ADA config modal rendering', () => {
        cy.get('#edit-config-button').click();
        cy.contains('Ada Config').should('be.visible');
    });

    it('ADA config input error', () => {
        cy.get('#edit-config-button').click();
        cy.get('#SMTP_HOST').type('error');
        cy.get('#SMTP_USER').type('error');
        cy.get('#SMTP_PORT').type('error');
        cy.get('#SMTP_PASSWORD').type('error');
        cy.get('#DEFAULT_PASSWORD').type('error');
        cy.get('#HOSTNAME').type('error');
        cy.get('#edit-config-save-button').click();
        cy.contains('SMTP Port must be a number').should('be.visible');
        cy.contains('Hostname is not valid').should('be.visible');
    });

    it('Edit ADA config successfully & check dashboard success', () => {
        cy.get('#edit-config-button').click();
        cy.get('#SMTP_HOST').type('test.ada.smtp');
        cy.get('#SMTP_USER').type('admin');
        cy.get('#SMTP_PORT').type('587');
        cy.get('#SMTP_PASSWORD').type('adminSmtpPassword');
        cy.get('#DEFAULT_PASSWORD').type('password');
        cy.get('#HOSTNAME').type('http://testing-ada.fr');
        cy.get('#edit-config-save-button').click();
        cy.contains('ADA | Configuration').should('be.visible');
        cy.contains('New config has been saved !').should('be.visible');
        cy.get('#navbar-homepage-link').click();
        cy.get('.mantine-Stepper-stepCompletedIcon').should('exist');
    });
});