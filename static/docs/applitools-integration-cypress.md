# How to Integrate Applitools With Cypress on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

If you run Cypress tests with Applitools Visual AI, you can execute those visual checks across real browsers and operating systems by connecting them to TestMu AI. This catches visual regressions on the browser and OS combinations your users actually run, not just your local machine. You configure the Applitools access token and TestMu AI credentials in your project, then run the tests through the TestMu AI CLI.

Before you begin, create accounts on both the TestMu AI and Applitools platforms.

## Set Up Applitools Dependencies and Packages

Start by installing the Applitools packages and adding your API key so Cypress can send visual checks to Applitools. Download or clone the sample GitHub project from the [Cypress-LambdaTest-Applitools-Integration repository](https://github.com/gaurav8760/Cypress-LambdaTest-Applitools-Integration), navigate to your project directory, and follow these steps.

- Install the **NPM dependencies** using the below command:

```bash
npm install
```

- Set up **Applitools Eyes** using the below command:

```bash
npx eyes-setup
```

- Add the access token of your Applitools account in the `applitools.config.js` file as highlighted in the screenshot below. Find your **Applitools API** key by logging into your Applitools account and going to **Profile > My API Key**.

  Set the **testConcurrency** and **browser configuration** values to match your requirements.

- Install Applitools Eyes dependencies using the below command:

```bash
npm install @applitools/eyes-cypress --save-dev
```

  This adds Applitools Eyes to an existing Node.js Cypress project.

## Set Up the TestMu AI CLI and Dependencies

With Applitools ready, configure the TestMu AI CLI so the tests run on the cloud grid. These steps install the CLI, generate a config file, and add your credentials.

- Install the TestMu AI CLI using the below command:

```bash
npm install -g lambdatest-cypress-cli
```

- Set up the configuration for your test run using the below command:

```bash
lambdatest-cypress init
```

  This creates a **lambdatest-config.json** file in the root directory of your project.

- Add the spec file path in the `run_setting` and your **TestMu AI credentials** in the auth section of the `lambdatest-config.json` file as shown in the image below.

## Run the Sample Project

Run the sample tests to generate a baseline and then compare a second run against it. Execute your first test case using the below command:

```bash
lambdatest-cypress run
```

Applitools treats the first test case you execute as the base image by default.

Edit the URL in the `applitoolsIntegration.spec.js` file and run your second test using the same run command.

Applitools compares the base image with this test and highlights the difference.

## Related Cypress Guides

Continue with the guides below to run and report on your Cypress tests on TestMu AI.

- [Run your first Cypress test on TestMu AI](/support/docs/getting-started-with-cypress-testing/) sets up and executes your initial Cypress run on the cloud grid.
- [Integrate the Cypress Dashboard with TestMu AI](/support/docs/integrate-testmu-with-cypress/) views and analyzes your Cypress results across both dashboards.
- [Generate Mochawesome reports for Cypress](/support/docs/cypress-mochaawesome-report/) produces detailed reports for your Cypress test runs.
