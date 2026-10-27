///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('funcionalidade: cadastro-login', () => {

  it('Deve fazer cadastro e login com sucesso', () => {

    cy.visit('/register.html');

    let nome = faker.person.fullName();
    let email = faker.internet.email();
    let telefone = faker.phone.number();
    let senha = faker.internet.password();
    let confirmarSenha = senha;

    cy.preencherCadastro(nome, email, telefone, senha, confirmarSenha);

    cy.visit('/login.html');

    cy.login1(email, senha)

  });

  it('Nao deve permitir fazer login com email invalido', () => {
    cy.visit('/login.html');

    cy.login2('user2_ebachotmail.com', 'senha123')

  });

  it('Nao deve permitir fazer login com senha invalida', () => {

    cy.visit('/login.html');

    cy.login3('user2_ebac@hotmail.com', 'setyu')

  });



})