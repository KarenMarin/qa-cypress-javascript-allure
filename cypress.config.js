const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const cucumber = require("@badeball/cypress-cucumber-preprocessor");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  env: {
    allure: true,
    allureResultsPath: "allure-results",
  },

  e2e: {
    specPattern: "**/*.feature",

    async setupNodeEvents(on, config) {
      await cucumber.addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({ plugins: [createEsbuildPlugin(config)] })
      );
      allureWriter(on, config);
      return config;
    },
  },
});


