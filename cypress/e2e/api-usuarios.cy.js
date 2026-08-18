///<reference types="cypress"/>

const { expect } = require("chai");

let token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG1pbkBiaWJsaW90ZWNhLmNvbSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTc4NTcxOTQ3NSwiZXhwIjoxNzg1NzQ4Mjc1fQ._KiLr9aAZ1kb37srqr7tV90v_2YWcCDHupGymwSC4zs"

describe('GET Teste-api gestao de usuario', () => {
  it('Deve listar usuarios com sucesso', () => {
    cy.request({
      method: 'GET',
      url: 'users',
      headers: { 'Authorization': token }
    }).should(response => {
      expect(response.status).to.equal(200)
      expect(response.body.users).to.be.an('array')
    })
  });

  it('Deve validar propiedades de usuario', () => {
    cy.request({
      method: 'GET',
      url: 'users',
      headers: { 'Authorization': token }
    }).should(response => {
      expect(response.status).to.equal(200)
      expect(response.body.users[0]).to.have.property('id')
      expect(response.body.users[0]).to.have.property('name')
      expect(response.body.users[0]).to.have.property('email')
    });
  });
});

describe('POST-Teste-api Gestao de usuario', () => {
  it('Deve cadastrar usuario com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'users',
      body: {
        "name": "Marcos Perez",
        "email": "marcosteste5179517@email.com",
        "password": "senha123"
      }
    }).should(response => {
      expect(response.status).to.equal(201)
      expect(response.body.message).to.equal('Usuário criado com sucesso.')
    })
  });

  it('Nao deve permitir cadastrar usuario com email invalido', () => {
    cy.request({
      method: 'POST',
      url: 'users',
       failOnStatusCode: false,
      body: {
        "name": "Marcos Fabian",
        "email": "marcosteste511email.com", // inválido
        "password": "senha123"
      }
    }).should(response => {
      expect(response.status).to.equal(400)
      expect(response.body.message).to.equal('Formato de email inválido.')
    })
  });
});
