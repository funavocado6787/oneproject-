describe('routing page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }vuebasics`);
        cy.get('h3').contains('Components');
    })
})