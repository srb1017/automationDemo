const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    //baseUrl: 'https://codepen.io/',
    specPattern: 'cypress/e2e/**',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
