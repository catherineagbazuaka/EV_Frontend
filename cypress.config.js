const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}
module.exports = defineConfig({
  // projectId: #'ikapjg'
  projectId: 'ikapjg',
  
e2e: {
    baseUrl: 'https://www.energyvoice.com/',
    specPattern: '**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    excludeSpecPattern: ['*.js', '*.md'],
    chromeWebSecurity:false,
    viewportHeight:900,
    viewportWidth:1400,
    watchForFileChanges:true,
    defaultCommandTimeout:15000,
    setupNodeEvents
  }
  
})
