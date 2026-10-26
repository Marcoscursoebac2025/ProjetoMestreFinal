///<reference types="cypress"/>

beforeEach(() => {
  cy.visit('/login.html')

});

describe('funcionalidade: login', () => {

  it('Deve fazer login com sucesso', () => {
    cy.login1('user2_ebac@hotmail.com', 'senha123')

  });

  it('Nao deve permitir fazer login com email invalido', () => {
    cy.login2('user2_ebachotmail.com', 'senha123')

  });

  it('Nao deve permitir fazer login com senha invalida', () => {
    cy.login3('user2_ebac@hotmail.com', 'setyu')

  });



})