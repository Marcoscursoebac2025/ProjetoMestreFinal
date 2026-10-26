// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('getAlert', (text) => {
  cy.get('#global-alert-container', { timeout: 8000 }).should('contain', text)
})

Cypress.Commands.add('login1', (email, senha) => {

  cy.get('#email').type(email, { log: false })
  cy.get('#password').type(senha, { log: false })
  cy.get('#login-btn').click()
  cy.url().should('include', 'dashboard')

})

Cypress.Commands.add('login2', (email, senha) => {

  cy.get('#email').type(email, { log: false })
  cy.get('#password').type(senha, { log: false })
  cy.get('#login-btn').click()
  cy.contains('Por favor, insira um email válido.').should('be.visible')

})

Cypress.Commands.add('login3', (email, senha) => {

  cy.get('#email').type(email, { log: false })
  cy.get('#password').type(senha, { log: false })
  cy.get('#login-btn').click()
  cy.contains('Email ou senha incorretos.').should('be.visible')

})



