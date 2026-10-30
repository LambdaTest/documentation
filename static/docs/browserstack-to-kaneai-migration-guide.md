# Migrating From BrowserStack To KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide covers your BrowserStack migration to KaneAI: how to move your tests to TestMu AI and re-create the flows you want in KaneAI. It covers Selenium and Playwright scripts on Automate, Appium scripts on App Automate, Low Code Automation tests and Test Management test cases.

[Note: KaneAI does not import or convert BrowserStack tests. You run scripts and exported Low Code Automation tests on the TestMu AI cloud. Then you import test cases into Test Manager and re-create flows in KaneAI in natural language.]

To move only Selenium scripts to the grid, see [How to migrate from BrowserStack to TestMu AI](/support/docs/browserstack-to-testmu-migration-guide/).

## What Moves From BrowserStack and Where It Goes

| BrowserStack asset | Where it goes on TestMu AI | How |
|---|---|---|
| Selenium and Playwright scripts on Automate | TestMu AI cloud grid | Update the credentials, endpoint and capabilities |
| Appium scripts on App Automate | TestMu AI Appium grid | Update the credentials, hub URL and capabilities |
| Low Code Automation tests | TestMu AI Selenium Grid | Export as Selenium IDE (.side) or Nightwatch.js, then run them |
| Test Management test cases | Test Manager | Export a CSV file, then use CSV import |
| Flows you want as KaneAI tests | KaneAI | Re-create them in natural language or with **Automate with KaneAI** |
| Run history, videos and logs | Stay in BrowserStack | No TestMu AI importer reads them |

## Before You Start

- **A TestMu AI account.** Create one on the TestMu AI signup page. Your username and access key are under Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **[KaneAI](/support/docs/getting-started-with-kane-ai/) and [Test Manager](/support/docs/test-manager/) access.** The **Automate with KaneAI** action requires KaneAI access.
- **The Low Code Automation Pro plan, if you export Low Code Automation tests.** BrowserStack offers the Export Tests feature only on this plan. The export API uses your BrowserStack username and access key.
- **Node.js and npm.** You install the Selenium IDE (SIDE) Runner with npm. BrowserStack's bulk export script also needs jq.

## Step 1: Export Your BrowserStack Tests

### Automate and App Automate Scripts

Your Selenium, Playwright and Appium scripts are already code in your project, so there is nothing to export.

### Low Code Automation Tests

Low Code Automation exports recorded tests through its REST API, as Selenium IDE (.side) or Nightwatch.js files.

Copy a test ID with **Copy test ID** under the **Configurations** section, or list every test with its ID:

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" -X GET "https://lcnc-api.browserstack.com/api/v1/test-list"
```

Then download the test. Replace `{test_id}` with the ID. This command saves the test as `test.side`:

```bash
curl -u "YOUR_USERNAME:YOUR_ACCESS_KEY" -X GET "https://lcnc-api.browserstack.com/api/v1/tests/{test_id}/export" -o test.side -L
```

For Nightwatch.js, add `?format=nightwatch` to the export URL and save the output as a `.js` file. The default format is `side`.

To export every test, use the shell script on BrowserStack's **Bulk export tests as code** page. It saves each test as a .side file, then converts the files to code in the language you set: Python, Java, JavaScript, C# or Ruby. On Windows, run it in Git Bash or WSL.

## Step 2: Run Your Tests on the TestMu AI Cloud

### Run Automate and App Automate Scripts

These guides cover the changes for each framework:

- **Selenium:** [How to migrate from BrowserStack to TestMu AI](/support/docs/browserstack-to-testmu-migration-guide/) covers credentials, the hub URL and capabilities.
- **Appium:** [Migrate Appium Tests](/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/) covers authentication, the hub URL and desired capabilities.
- **Playwright:** [How to Migrate Existing Playwright Tests to TestMu AI](/support/docs/migrate-existing-playwright-tests/) shows how to connect Playwright to the TestMu AI CDP endpoint.
- **Capability names:** the [TestMu AI Capability Map](/support/docs/testmu-capability-map/) shows BrowserStack and TestMu AI capabilities side by side.

The scripts keep running as code. They do not become KaneAI tests.

### Exported Low Code Automation Tests

Pick the tab for your export format.

Install the SIDE Runner:

```bash
npm install -g selenium-side-runner
```

Run the file on the TestMu AI Selenium Grid. Put your TestMu AI username and access key in the grid URL:

```bash
selenium-side-runner -w 4 "test.side" --server https://user-name:access-key@hub.lambdatest.com/wd/hub -c "browserName='chrome' browserVersion='latest' platformName='Windows 10'"
```

The `-c` flag passes the capabilities, and `-w` sets the number of parallel processes. Change `browserName`, `browserVersion` and `platformName` to the ones you need. See [Guide to Run Selenium IDE Tests Using TestMu AI](/support/docs/run-selenium-ide-tests-on-testmu-selenium-cloud-grid/).

If you converted the files to code, follow [How to Migrate Your Selenium Suite to TestMu AI](/support/docs/migrate-selenium-test-suite/) instead.

Set your TestMu AI credentials:

{`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

Nightwatch.js reads its grid setup from `nightwatch.conf.js` in the cloned TestMu AI sample project:

```javascript title="nightwatch.conf.js" reference
https://github.com/LambdaTest/nightwatch-selenium-sample/blob/master/nightwatch.conf.js
```

Clone that project, run `npm i`, save your exported files in its `tests` folder, then run `npm run single`. That command runs every file in `tests` on Chrome, including the sample `googleTest.js`, so delete the sample if you don't want it to run. See [Selenium With Nightwatch.js](/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/) for the sample project and run commands.

Before you run a file, replace any secret names and AI prompts in it with real values. Also check validation steps, which BrowserStack's sample exports as an `assert` on an internal variable.

## Step 3: Bring Test Cases Into Test Manager

Test Management exports test cases as CSV files, or as .feature files for BDD scenarios. The CSV export works for all test cases. It includes steps, preconditions, expected results and metadata.

In Test Management, open the folder, select the test cases, click the arrow next to **Export**, choose **Export as CSV**, then click **Export**.  Choose CSV for BDD test cases too, because the Test Manager import reads `.csv` files. BrowserStack recommends .feature files for BDD test cases, so check that your CSV includes the scenarios.

Then import the file:

1. In your Test Manager project, go to **Add Test Case > Import CSV**.
2. Pick **Test cases use a single row** or **Test cases use multiple rows**, to match your file.
3. Map the CSV headers to fields. Mapping at least one CSV header to **Title** is mandatory. Steps, outcomes, BDD scenarios, folders and custom fields are optional, but **Automate with KaneAI** needs steps or scenarios.
4. Map the values, review the preview, and start the import.

Create any custom fields and link them to the project before you import. Each file can be up to 10 MB. See [Import Test Cases from CSV](/support/docs/csv-import/).

## Step 4: Re-create Your Flows in KaneAI

KaneAI does not import or convert BrowserStack tests, so you re-create the flows you want to keep.

### Start From a Test Case

Open an imported test case and click **Automate with KaneAI** in its **Automate** section. A KaneAI session opens, pre-filled with the test case's steps, where you author and execute the test. KaneAI reads manual steps and `Given` / `When` / `Then` scenarios directly. The action works on one test case at a time, and the test case must have steps or scenarios. See [Create & Manage Test Cases](/support/docs/manual-test-case-creation/#automate-with-kaneai).

### Start a New Test

On the KaneAI dashboard, click **Author Browser Test** or **Author App Test** and set up the session. Then describe each step in natural language. See [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/) and [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/).

[Manual Interaction](/support/docs/kaneai-manual-interaction/) records your clicks, typing, scrolling and navigation as steps. It works in desktop browsers, Android apps and iOS apps in portrait, but not in mobile browsers. It cannot record hovers or checks, so write verify and assert steps as instructions.

While you author, you can also use these features:

- **Reusable steps and data:** save repeated steps as a [module](/support/docs/kane-ai-modules/), and keep test data in [variables](/support/docs/kane-ai-using-variables/).
- **Single steps:** **Run This Step** in the [authoring session](/support/docs/kaneai-authoring-session/#run-this-step) runs one step. The run actions are available on request and partially rolled out.

### Rebuild What Did Not Export

- **Visual checks:** add a **Visual Comparison** step from the `/` menu. See [Visual Test Creation with KaneAI](/support/docs/kaneai-smartui-visual-testing/).
- **API calls:** add an API step with the slash command and paste a curl command. See [KaneAI - API Testing](/support/docs/kane-ai-api-testing/).
- **Secrets:** create [KaneAI secrets](/support/docs/kane-ai-secrets/) and reference them with double curly braces.

### Generate Code

A test saved as **Ready**, where every step has run and passed, generates code. The options depend on the authoring experience. New Experience is being rolled out in phases. Contact support to enable New Experience or any option marked available on request.

| Framework | Language | Classic | New Experience |
|---|---|---|---|
| Selenium | Python | Available (default) | Not available |
| Selenium | Java | Available on request | Not available |
| Playwright | Python | Available on request | Available |
| Playwright | C# | Available on request | Not available |
| Playwright | JavaScript | Available on request | Available |
| Appium | Python | Available (default) | Coming soon |

See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/) for the full list.

## Step 5: Run Your KaneAI Tests

1. In your project, open **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

With the KaneAI toggle on, test runs offer Desktop and Real Device configurations. [Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/) also states:

- "Native app testing on Real Devices is available only for KaneAI-generated test runs."
- "Virtual Mobile configurations are available for non-KaneAI test runs only."

To start a test run from CI, such as GitHub Actions or Jenkins, copy its Test Run ID from the test run URL. Send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`, with your TestMu AI username and access key for Basic Authentication. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

## What Does Not Carry Over

- **Run history and results.** No TestMu AI importer reads BrowserStack builds, session videos or logs.
- **Secret values and AI-generated test data.** The Low Code Automation export replaces them with secret names and AI prompts.
- **AI healing.** Low Code Automation's element selection with AI healing is not exported. KaneAI-generated scripts that run on HyperExecute use [Auto-Heal](/support/docs/kaneai-auto-heal/) instead.
- **Visual Validation, API and Open Email steps.** BrowserStack does not currently export them. Step 4 shows how to rebuild visual checks and API calls.
- **Unsupported step types.** BrowserStack's sample .side response shows one as an `echo` command reading "This step type is currently not supported". Search your files for that text.

## Related migration guides

- [BrowserStack To TestMu AI Migration](/support/docs/browserstack-to-testmu-migration-guide/): move Selenium tests to the TestMu AI grid.
- [Migrate Appium Tests](/support/docs/migrate-appium-tests-from-browserstack-and-saucelabs/): move Appium suites from BrowserStack or Sauce Labs.
- [Sauce Labs To KaneAI Migration](/support/docs/saucelabs-to-kaneai-migration-guide/): move from Sauce Labs to KaneAI.
- [Import Test Cases from CSV](/support/docs/csv-import/): bring test cases into Test Manager.
- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web tests into KaneAI.
