const path = require("path");

// importa o app do servidor principal
const app = require(path.resolve(__dirname, "../../hub-de-leitura-integrado/src/server"));

// exporta para que o Cypress/start-server-and-test use
module.exports = app;
