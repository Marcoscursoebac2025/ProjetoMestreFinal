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


describe('Funcionalidade: adicionar item', () => {
  it('deve clicar no primeiro botao adicionar a cesta', () => {
    cy.get('.btn-primary').first().scrollIntoView().click()
    cy.getAlert('1984')

  })
  it('deve clicar no terceiro botao adicionar a cesta', () => {
    cy.get('.btn-primary').eq(2).scrollIntoView().click()
    cy.getAlert('A Divina Comédia')
  });

  it('deve clicar no ultimo botao adicionar a cestar ', () => {
    cy.get('.btn-primary').last().scrollIntoView().click()
    cy.getAlert('O Alquimista')

  });

  it('deve clicar em tudos os botoes adicionar a cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })
    cy.getAlert('O Alquimista')
  });

})