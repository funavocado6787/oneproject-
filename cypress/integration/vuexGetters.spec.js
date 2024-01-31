describe('Vuex Getters page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }vuexgetters`);
        cy.get('h3').contains('Vuex - Getters');
    })
})