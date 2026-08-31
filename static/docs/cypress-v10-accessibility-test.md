# Cypress Accessibility Testing

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Cypress accessibility testing runs WCAG accessibility checks against your web pages inside your existing Cypress test flow, then reports the violations in the TestMu AI Automation dashboard. You enable it with a single `accessibility` capability, import the accessibility scanner into your Cypress support file, and review the results alongside the rest of your automation run. Pick your Cypress version in the tabs below to follow the setup that matches your project.

## Prerequisites

Before you run your first accessibility scan, make sure you have the following in place:

- Your [TestMu AI Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/).
- A local machine set up for your testing framework.

## How accessibility automation works with Cypress

Accessibility scans run as part of your standard Cypress run. You turn them on with the `accessibility` capability in `lambdatest-config.json`, then wire the scanner into your project so that scans fire while your tests drive the application.

To enable the accessibility testing within your automated test suite, set `accessibility: true` in your configuration file. You can also refine the scan rules with the additional settings below:

```javascript title="lambdatest-config.json"
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

Once the capability is enabled, you import the `lambdatest-cypress-cli/accessibility/scanner` dependency into your Cypress support file (`e2e.js` on Cypress v10 and later, `support/index.js` on Cypress v9), and register the accessibility plugin where your version requires it. On Cypress v9 you also hook the scanner in through `cypress/plugins/index.js`. With the scanner in place, scans are generated automatically as your test interacts with the page, and each report is published to the Accessibility tab of the Automation dashboard.

For the full list of settings you can tune, including the WCAG version, Best Practice, Beta, and AI rule groups, see the [Supported Automation Capabilities reference](/support/docs/accessibility-automation-scan-configurations/). Once your run finishes, open the [Accessibility dashboard to review, filter, and act on reports](/support/docs/accessibility-testing-navigating-dashboard/).

The version-specific setup and run steps follow. Pick your Cypress version below.

This tab walks you through configuring TestMu AI's Accessibility Tool with Cypress v10 and above to run automated tests for your website.

> **NOTE:** This documentation is applicable for **Cypress v10** and **later versions**.

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub

Configure the desired capabilities based on your test requirements. For example:

```yaml reference title="lambdatest-config.json"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/lambdatest-config.json
```

**Expected result:** Your project uses a valid `lambdatest-config.json` with the desired capabilities set, ready for the accessibility settings you add later.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

**Expected result:** `LT_USERNAME` and `LT_ACCESS_KEY` are set in your shell, so your test authenticates to TestMu AI without hardcoding credentials.

### Step 3: Update the Necessary Capabilities and Configurations in your project

#### 1. Install the Cypress CLI

- If you are passing npm dependencies through **package.json**, then add the below mentioned line there:

```javascript reference title="package.json"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/package.json
```

- If you are using **lambdatest-config.json** to pass the dependency, then pass the given line there:

```javascript title="lambdatest-config.json"
"run_settings": {
//...
"npm_dependencies": {
"cypress": "10.0.0",
"lambdatest-cypress-cli": "^3.0.30"
},
//...
}
```

- if you are not passing npm dependency in **lambdatest-config.json** you can run

```bash
npm i lambdatest-cypress-cli
```

#### 2. In the `e2e.js` file

Add this import statement in your `e2e.js` file to import the acceessibility scanner dependency

```javascript
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 3. In the `cypress.config.js` file

Add this template in your config file.

```javascript reference title="cypress.config.js"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/cypress.config.js
```

#### 4. Add the capabilities in the `lambdatest-config.json` file

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```javascript title="lambdatest-config.json"
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

**Expected result:** The scanner is imported, `cypress.config.js` is configured, and `accessibility: true` is set, so scans are generated during the run.

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
lambdatest-cypress-cli run
```

**Expected result:** The test run completes and the session, along with its accessibility report, appears under the Accessibility tab in the Automation dashboard. Open the report to see the list of WCAG violations detected on each scanned page.

This tab walks you through the step by step guide for executing the automation tests of your website with TestMu AI's Accessibility Tool using Cypress v9 and below.

> **NOTE:** This documentation is applicable for **Cypress v9** and **previous versions**.

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub

Configure the desired capabilities based on your test requirements. For example:

```yaml reference title="lambdatest-config.json"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v9/blob/main/lambdatest-config.json
```

**Expected result:** Your project uses a valid `lambdatest-config.json` with the desired capabilities set, ready for the accessibility settings you add later.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

**Expected result:** `LT_USERNAME` and `LT_ACCESS_KEY` are set in your shell, so your test authenticates to TestMu AI without hardcoding credentials.

### Step 3: Update the Necessary Capabilities and Configurations in your project

#### 1. Install the Cypress CLI

- If you are passing npm dependencies through **package.json**, then add the below mentioned line there:

```javascript title="package.json"
// ...
"devDependencies": {
"@cypress/eslint-plugin-dev": "5.0.0",
// highlight-next-line
"lambdatest-cypress-cli": "^3.0.30"
},
```

- If you are using **TestMu AI-config.json** to pass the dependency, then pass the given line there:

```javascript title="lambdatest-config.json"
"run_settings": {
//...
"npm_dependencies": {
"cypress": "10.0.0",
"lambdatest-cypress-cli": "^3.0.30"
},
//...
}
```

- if you are not passing npm dependency in **TestMu AI-config.json** you can run

```bash
npm i lambdatest-cypress-cli
```

#### 2. In the `support/index.js` file

Add this import statement in your `index.js` file to import the acceessibility scanner dependency

```javascript
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 3. In the `cypress/plugins/index.js` file

Add this template in your `index.js` file.

```javascript title="index.js"
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');

module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config

lambdatestAccessibility(on, config);
return config;
}

```

#### 4. Add the capabilities in the `lambdatest-config.json` file

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```javascript title="lambdatest-config.json"
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

**Expected result:** The scanner is imported, `cypress/plugins/index.js` registers the accessibility plugin, and `accessibility: true` is set, so scans are generated during the run.

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

**Expected result:** The test run completes and the session, along with its accessibility report, appears under the Accessibility tab in the Automation dashboard. Open the report to see the list of WCAG violations detected on each scanned page.
