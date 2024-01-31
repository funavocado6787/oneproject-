describe('routing page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }eventbus`);
        cy.get('h3').contains('Event Bus');
    })

})