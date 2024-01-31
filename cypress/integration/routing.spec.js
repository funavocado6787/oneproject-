describe('routing page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }routing`);
        cy.get('h3').contains('Nuxt Routing');
    })

})