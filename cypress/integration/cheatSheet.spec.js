describe('Cheat Sheet page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }cheatsheet`);
        cy.get('h3').contains('Vue JS - Cheat Sheet');
    })

})