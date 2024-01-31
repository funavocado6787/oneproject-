describe('vuex setup page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }vuexsetup`);
        cy.get('h3').contains('State Management (Vuex)');
    })
})