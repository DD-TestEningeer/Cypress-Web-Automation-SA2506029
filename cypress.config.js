// Import required modules
// defineConfig is used to configure Cypress
const { defineConfig } = require("cypress");

// merge is used to merge all Mochawesome JSON reports after the test run
const { merge } = require("mochawesome-merge");

// generate is used to create HTML report using merged Mochawesome JSON
const generate = require("mochawesome-report-generator");

// fs is used to interact with the file system
const fs = require("fs-extra");

// path is used for handling directory paths
const path = require("path");

// Export Cypress configuration
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

      // This event runs after the entire Cypress test run finishes
      on("after:run", async () => {
        const jsonDir = "cypress/reports/mochawesome";

        // Check if the directory containing JSON reports exists
        if (fs.existsSync(jsonDir)) {

          // Merge all mochawesome json files from the reports folder
          const jsonReport = await merge({
            files: [jsonDir + "/*.json"]
          });

          // Generate the final HTML report using the merged JSON
          await generate.create(jsonReport, {
            reportDir: "cypress/reports/html",
            reportFilename: "index",
            inline: true,
            saveJson: false
          });

          console.log("Mochawesome report generated at: cypress/reports/html/index.html");
        }
      });
    },

    // Enable screenshot on test failure
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/reports/screenshots",

    // Enable video recording for test runs
    video: true,
    videosFolder: "cypress/reports/videos",
    trashAssetsBeforeRuns: true,

    // Reporter setup for Mochawesome
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports/mochawesome", // folder to save json reports
      overwrite: false,                         // do not overwrite old reports
      html: false,                               // disable auto html creation
      json: true                                // enable json creation for merging
    }
  }
});
