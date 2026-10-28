///<reference types="cypress"/>

beforeEach(() => {
    cy.intercept('GET', '**/api/books*').as('carregarLivros')

    cy.visit('/catalog.html')

    cy.wait('@carregarLivros')

    cy.get('#catalogo')
        .find('div')
        .should('have.length.greaterThan', 0)
        .and('be.visible')
});
afterEach(() => {
    cy.screenshot
});

describe('Funcionalidade: remover_item', () => {
    it('deve remover item do carrinho com sucesso', () => {

        cy.get('.btn-primary').first().scrollIntoView().click();
        cy.getAlert('1984');
        cy.contains('"1984" foi adicionado à cesta!').should('be.visible');
        cy.get('nav a[href*="basket.html"]').click()
        cy.get('#clear-cart-btn').click();
        cy.contains('Cesta limpa com sucesso!').should('be.visible');

    })
});