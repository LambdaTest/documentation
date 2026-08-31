# How to Generate Cypress Mochawesome and ReportPortal Reports on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you run Cypress tests on TestMu AI, you can consolidate their results into a single readable report instead of reading raw console output. The Mochawesome reporter produces standalone, interactive HTML reports with test filtering and failure stack traces, and TestMu AI can also forward results to ReportPortal.io. You configure a reporter in `cypress.config.js`, set the report parameters, then download the generated report from the dashboard.

## Generating a Consolidated HTML Report


The Mochawesome reporter writes per-spec JSON files that TestMu AI merges into one HTML report. Follow these steps to enable the reporter and generate that consolidated report.

### Update Your Cypress Configuration


In your Cypress configuration file `cypress.config.js`, add the following code to enable Mochawesome as a reporter.

```javascript title="cypress.config.js"
"reporter": "cypress-multi-reporters",
"reporterOptions": {
"reporterEnabled": [
"mochawesome"
],
"mochawesomeReporterOptions": {
"reportDir": "cypress/results",
"overwrite": true,
"html": false,
"json": true
}
}
```


- The `overwrite` parameter should be set to `true` to ensure the report is replaced with the latest run results.
- The `html` option should be set to `false` because the JSON files are merged later, and the mocha-merge utility does not support HTML files.
- Ensure the `reportDir` path is set to `"cypress/results"`. This path is used to generate logs that will be visible on the dashboard. **Do not change this path.**


### Configure the HyperExecute YAML File


In your HyperExecute YAML configuration, define the [`report` parameters in the HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/#report) so the run collects the Mochawesome output.

```yaml title="hyperexecute.yaml"
report: true
partialReports:
frameworkName: cypress
location: cypress/results
type: html
```

### Execute Your Tests


Run your Cypress tests on HyperExecute using the CLI. After the job completes, open the HyperExecute dashboard to download and view the consolidated Mochawesome report.





## Send Cypress Results to ReportPortal.io


By default, the TestMu AI Cypress multi-reporter generates a Mochawesome report. To send results to ReportPortal.io instead, define a separate reporter configuration file and add the ReportPortal agent as a dependency.

1. Create a [ReportPortal.io account](http://reportportal.io/) and copy your Report Portal credentials from your profile.
2. In your Cypress project, create a file that holds the ReportPortal reporter configuration and credentials.
3. Set that file's name in the `reporter_config_file` capability of `lambdatest-config.json`.
4. Add the `@reportportal/agent-js-cypress` dependency in `lambdatest-config.json` or `package.json`.
5. Run your tests, then open the dashboard to view the results in ReportPortal.

## Related Cypress Guides


Continue with the guides below to download and debug your Cypress runs on TestMu AI.

- [Download Cypress reports and artefacts](/support/docs/download-artefacts-cypress/) pulls reports, logs, and other build artefacts back from the dashboard.
- [View detailed Cypress command logs](/support/docs/cypress-detailed-command-logs/) helps you debug test results command by command.
- [Configure Cypress run settings](/support/docs/run-settings/) covers reporter options and every other run option.
