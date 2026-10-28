const { defineConfig } = require('cypress');
const { allureCypress } = require('allure-cypress/reporter');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí se registran las tareas de Allure
      allureCypress(on, config, {
        resultsDir: "allure-results",
      });

      return config;
    },
    defaultCommandTimeout: 10000,
    baseUrl: "http://localhost:3000",
    projectId: "btjvyg",
    video: true,
    specPattern: "cypress/e2e/**/*.cy.js"
  }
});
