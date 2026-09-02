# Accessibility Testing on HyperExecute using Cypress v9

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This document provides a detailed, step-by-step walkthrough for executing automated accessibility tests using TestMu AI's Accessibility Tool on HyperExecute using Cypress v9 and below.

This documentation is applicable for **Cypress v9** and **previous versions**.

Please reach out to our support team to enable the Accessibility feature for your organization.

## Prerequisites
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your [TestMu AI Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

To configure and test the system, you may use your existing project. For demonstration purposes, this guide utilizes a sample repository.

**sample repo**
Download or Clone the code sample from the TestMu AI GitHub repository to run your tests.

 View on GitHub

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable
Export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [TestMu AI Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

### Step 2: Update the Necessary Capabilities and Configurations in your project

#### 1. Install the Cypress CLI
You will have to pass the `npm i lambdatest-cypress-cli` command in your [pre steps](/support/docs/deep-dive-into-hyperexecute-yaml/#pre) to install the TestMu AI Cypress CLI which will be used to execute your Cypress tests.

```yaml title="hyperexecute.yaml"
pre:
- npm install
- npm install cypress@9.6.1 --save-dev
#   highlight-next-line
- npm i lambdatest-cypress-cli
```

#### 2. Add the capabilities in the YAML file

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in the [cypressOps](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag of your YAML file. You can also define other settings capabilities as described below.

```yaml title="hyperexecute.yaml"
cypressOps:
accessibility: true                 #Enable accessibility testing
accessibilityWcagVersion: "wcag21a" #Specify WCAG version (e.g., WCAG 2.1 Level A)
accessibilityBestPractice: false    #Exclude best practice issues from results
accessibilityNeedsReview: true      #Include issues that need review
```

#### 3. In the `support/index.js` file

Add this import statement in your `support/index.js` file to import the acceessibility scanner dependency

```javascript title="cypress/support/index.js"
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 4. In the `plugins/index.js` file

Add this code snippet in your `cypress/plugins/index.jss` file.

```javascript title="cypress/plugins/index.js"
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');

module.exports = (on, config) => {
// `on` is used to hook into various events Cypress emits
// `config` is the resolved Cypress config
lambdatestAccessibility(on, config);
return config;
};
```

### Step 3: Execute and Monitor your Test

Run the below command in your terminal at the root folder of the project:

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 1.

    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}

Now visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) and click on the Accessibility tab to check the report generated.
