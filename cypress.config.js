const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
 
  "scripts": {
    "start": "http-server ./public -p 3000 -e html",
    "test:e2e": "start-server-and-test 'npm start' http://127.0.0.1:3000 'npx cypress run'"
  }
}
 
})