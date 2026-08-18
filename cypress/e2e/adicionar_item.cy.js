///<reference types="cypress"/>

beforeEach(() => {
  cy.visit('catalog.html')

});

afterEach(() => {
  cy.screenshot()
});

describe('Funcionalidade: adicionar item', () => {
  it('deve clicar no primeiro botao adicionar a cesta', () => {
    cy.get('.btn-primary').first().click()
    cy.get('#global-alert-container').should('contain', '1984')

  })
  it('deve clicar no terceiro botao adicionar a cesta', () => {
    cy.get('.btn-primary').eq(2).click()
    cy.get('#global-alert-container').should('contain', 'A Divina Comédia')

  });

  it('deve clicar no ultimo botao adicionar a cestar ', () => {
    cy.get('.btn-primary').last().click()
    cy.get('#global-alert-container').should('contain', 'O Alquimista')

  });

  it('deve clicar em tudos os botoes adicionar a cesta', () => {
    cy.get('.btn-primary').click({ multiple: true })

  });

})