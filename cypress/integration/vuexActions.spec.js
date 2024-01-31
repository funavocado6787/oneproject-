describe('Vuex Actions page', () => {
    it('should render with a title', () => {
        cy.visit(`${ Cypress.env().url }vuexactions`);
        cy.get('h3').contains('Vuex - Actions');
    })
})