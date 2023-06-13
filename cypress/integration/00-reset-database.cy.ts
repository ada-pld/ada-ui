describe('Prepare testing env', () => {
    it('Reset ADA database', () => {
        cy.request('GET', 'https://ada-test.hemmer.dev/start_tests');
    });
});