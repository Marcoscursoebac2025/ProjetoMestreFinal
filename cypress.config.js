const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
 
   baseUrl: 'http://127.0.0.1:3000',   // ✅ usa 127.0.0.1 em vez de localhost
    supportFile: 'cypress/support/e2e.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 5000,
    video: false,                       // evita gerar vídeos no CI
    screenshotOnRunFailure: true,       // mantém screenshots só em caso de falha
    allowCypressEnv: false              // remove o aviso de insegurança
  }
  
})