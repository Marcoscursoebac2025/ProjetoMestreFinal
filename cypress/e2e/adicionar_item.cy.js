///<reference types="cypress"/>

beforeEach(() => {
  cy.visit('/catalog.html')
  cy.wait(500)
  cy.get('.btn-primary').should('have.length.at.least', 1)

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