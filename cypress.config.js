const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  chromeWebSecurity: false, 
  e2e: {
    retries:{
     runMode: 1, 
     openMode: 0
    },
    defaultCommandTimeout: 6000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
