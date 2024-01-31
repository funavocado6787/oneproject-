describe('home page', () => {
    it('should render with an img', () => {
        cy.visit(`${ Cypress.env().url }`);
        cy.get('img');
    })
})