# Migrating From Testim To KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide covers your Testim migration to KaneAI: what Testim can export, where it goes on TestMu AI, and how to re-create and run tests.

[Note: KaneAI does not import or convert Testim tests. You export what Testim's docs say it can export and run the exported Playwright code on TestMu AI. You then bring test cases into Test Manager and re-create each flow in KaneAI in natural language.]

## What Moves From Testim and Where It Goes

| Testim asset | Where it goes on TestMu AI | How |
|---|---|---|
| Web tests exported as Playwright code | TestMu AI cloud grid | Export each test, then connect it to the CDP endpoint (Steps 1 and 2) |
| Web tests you keep running in Testim for now | TestMu AI Selenium grid | Testim CLI with the `--grid` flag (Step 2) |
| Test steps in PDF run reports | Test Manager test cases | The AI Test Case Generator writes new test cases from the reports (Step 3) |
| TestRail, qTest or Xray test cases linked to Testim tests | Test Manager test cases | One-click importer for that tool (Step 3) |
| CSV export from the Test List view | Test Manager test cases | CSV import, if the file lists tests rather than runs (Step 3) |
| Web and mobile app test flows | KaneAI web and app tests | Automate with KaneAI, or author in natural language (Step 4) |
| Groups, shared steps, test data, custom code, visual and API steps | KaneAI modules, parameters, datasets, JavaScript, Visual Comparison and API steps | Re-create them in KaneAI (Step 4) |
| Run history and results | Stays in Testim | Export to CSV or PDF for your records |

## Before You Start

- **A TestMu AI account.** Create one on the TestMu AI signup page. Copy your Username and Access Key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI access.** **Automate with KaneAI** and **Create and Automate** both require it.
- **A Testim professional plan.** You need it for the code export, the CSV export, third-party grids or the test management integrations. Testim's docs mark the CSV export, grids and test management integrations as pro features, and its pricing page says Professional plan users can export tests to Playwright.
- **Node.js.** You need it only if you run the Testim CLI.

## Step 1: Export Your Tests From Testim

Three Testim exports can help with this move. KaneAI imports none of them as tests.

**Playwright code.** Testim can export the test that is open in its Editor as code adapted for Playwright. Add this suffix to the end of the URL in your browser, then press Enter.

```text
?embedMode=true&exportPuppeteer=true&exportSelenium=true&exportPlaywright=true
```

The test's code opens in a code viewer. Select the **Playwright** tab, then click **Copy code**. Testim notes that the code may need manual adjustments, as its code comments instruct, and that some steps may not be supported.

**PDF run reports.** After a run, open the three-dot menu on the test screen and select **Generate PDF run report**. Choose a screenshot option, then click **Generate** to download the report. The report lists the test steps and their results.

**Test List CSV.** On the professional plan, go to **Test List > Tests** and click **Export to CSV**. Testim's doc calls this file a CSV of the execution runs and does not list its columns. Check the columns before you import the file.

## Step 2: Run Exported Playwright Code on TestMu AI

Save the copied code in a Playwright project and make the changes its comments call for. Testim's doc does not name the language or test runner of the export, so check the code first.

Set your TestMu AI credentials as environment variables. On Linux or macOS:

{`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}

If the script launches a local browser, replace that launch call with a connection to the TestMu AI CDP endpoint. The `capabilities` object selects the browser and OS for the run. In JavaScript, the connection looks like this:

```javascript
const { chromium } = require('playwright')
const { expect } = require('@playwright/test');

(async () => {
const capabilities = {
'browserName': 'Chrome', // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
'browserVersion': 'latest',
'LT:Options': {
'platform': 'Windows 10',
'build': 'Playwright Sample Build',
'name': 'Playwright Sample Test',
'user': process.env.LT_USERNAME,
'accessKey': process.env.LT_ACCESS_KEY,
}
}

const browser = await chromium.connect({
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
})

// Test code ...

await browser.close()
})()
```

The full walkthrough is in [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/). For Python, follow [Playwright With Python](/support/docs/python-with-playwright/). For a project that uses `playwright.config.js` and the Playwright test runner, follow [Playwright Test Runner](/support/docs/playwright-test-runner/).

### Keep Running Testim Tests During the Move

You can keep running Testim web tests on the TestMu AI Selenium grid while you migrate. In Testim, add a grid of the LambdaTest (now TestMu AI) type. Enter a grid name, the host (for example, `hub.lambdatest.com`), the port (443 by default), and your Username and Access Key. Then pass the grid name to the Testim CLI with `--grid`.

```bash
testim --label "<YOUR LABEL>" --token "<YOUR ACCESS TOKEN>" --project "<YOUR PROJECT ID>" --grid "<Your grid name>" --report-file test-results/testim-tests-report.xml
```

Testim's docs say this integration supports the Selenium testing option only.  For the TestMu AI side, see [Testim Integration](/support/docs/testim-integration/).

## Step 3: Bring Test Cases Into Test Manager

Choose the source that matches how your team tracks Testim tests.

- **TestRail, qTest or Xray.** Testim can link a Testim test to a test case in these tools and send run results there.  If your test cases live there, use the one-click importer for [TestRail](/support/docs/one-click-migration-from-testrail/), [qTest](/support/docs/one-click-migration-from-qtest/) or [Xray (Jira Cloud)](/support/docs/one-click-migration-from-xray/). These importers bring in that tool's test cases, not the Testim tests.
- **PDF run reports.** On the Test Case Listing page of your project, click **Generate With AI** and upload the reports, up to 10 files. The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) accepts PDFs and writes new test cases from them. Click **Create** to save the ones you keep.
- **CSV file.** If the file lists tests rather than runs, import it with [CSV import](/support/docs/csv-import/) from **Add Test Case > Import CSV**. Mapping at least one CSV header to **Title** is mandatory. Each file can be up to 10 MB.

## Step 4: Re-create Your Flows in KaneAI

KaneAI does not run Testim steps, so you re-create each flow in a KaneAI session.

- **From a test case.** Open a saved test case and click **Automate with KaneAI** in its **Automate** section. A KaneAI session opens with the test case's steps filled in, where you author and run the test. [This action](/support/docs/manual-test-case-creation/#automate-with-kaneai) works on one test case at a time, and the test case must have steps or scenarios.
- **From the generator.** **Create and Automate** saves the generated test cases you select and sends them to KaneAI for automated authoring. It is an experimental feature, so review the steps afterwards.
- **From scratch.** Start a [browser test](/support/docs/author-your-first-desktop-browser-test/) or an [app test](/support/docs/author-your-first-mobile-app-test/) and write each step in natural language. [Manual Interaction](/support/docs/kaneai-manual-interaction/) also records your clicks, typing, scrolls and navigation as steps. It cannot record hover actions or checks, and it does not capture mobile browsers. Write those as instructions.

Re-create Testim features with their KaneAI counterparts:

- **Groups and shared steps:** build a [module](/support/docs/kane-ai-modules/) once and import it into other tests.
- **Test data and data-driven tests:** use [parameters](/support/docs/kane-ai-using-parameters/) and [datasets](/support/docs/kane-ai-using-datasets/). A dataset can import rows from a CSV file.
- **Custom JavaScript steps:** add a [JavaScript step](/support/docs/kane-ai-javascript-execution/) from the `/` menu.
- **Conditions:** add an [If / Else block](/support/docs/kaneai-conditional-logic/).
- **Visual validations:** add a [Visual Comparison](/support/docs/kaneai-smartui-visual-testing/) step. Its screenshots go to your SmartUI project.
- **API steps:** paste a curl command into an [API step](/support/docs/kane-ai-api-testing/).
- **MySQL and MongoDB validations:** add a [database connection](/support/docs/kaneai-database/) and query it from the test.

When a test is saved as **Ready**, meaning every step has run and passed, KaneAI generates code. In Classic, Selenium Python and Appium Python are available by default. Classic also offers Selenium Java and Playwright Python, C# and JavaScript on request. In New Experience, which is being rolled out in phases, Playwright Python and JavaScript are available. See [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).

## Step 5: Run Your KaneAI Tests

1. In your project, open **Test Runs**, click **Create Test Run**, and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign the test cases and set their configurations.
4. Save the run, click **Run on HyperExecute**, and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/).

With the **KaneAI** toggle on, a configuration can use Desktop or Real Device. [Configurations](/support/docs/test-runs-configurations/) set these limits:

- Native app testing on Real Devices is available only for KaneAI-generated test runs.
- Virtual Mobile configurations are available for non-KaneAI test runs only.

To run from CI tools such as GitHub Actions or Jenkins, copy the Test Run ID from the test run URL. Send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`, with your TestMu AI username and access key for Basic Authentication. The call starts HyperExecute jobs. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

## What Does Not Carry Over

- **The tests themselves.** KaneAI does not import or convert Testim tests. KaneAI imports tests only from Katalon, for desktop web tests ([Migration from Katalon](/support/docs/one-click-migration-from-katalon/)).
- **Unsupported steps.** Testim says exported Playwright code may need manual adjustments and that some steps may not be supported.
- **Run history.** Results, screenshots and logs stay in Testim. CSV import in Test Manager creates or updates test cases, not runs. Testim keeps your tests for up to 30 days after you cancel, so export what you need first.
- **Visual baselines.** A KaneAI Visual Comparison step captures a new baseline the first time the test runs.
- **CLI steps.** Testim CLI actions run Node.js scripts in your CLI environment.  KaneAI runs JavaScript in the current testing environment, so re-create those checks with API, database or JavaScript steps.
- **Emulators and simulators.** Virtual Mobile configurations are available for non-KaneAI test runs only, so KaneAI test runs use real devices.

## Related migration guides

- [Migration from Katalon](/support/docs/one-click-migration-from-katalon/): import Katalon Studio desktop web tests into KaneAI.
- [Migrate Existing Playwright Tests](/support/docs/migrate-existing-playwright-tests/): connect Playwright scripts to TestMu AI.
- [One Click Migration from TestRail](/support/docs/one-click-migration-from-testrail/): import TestRail projects.
- [mabl To KaneAI Migration](/support/docs/mabl-to-kaneai-migration-guide/): move from mabl.
- [testRigor To KaneAI Migration](/support/docs/testrigor-to-kaneai-migration-guide/): move from testRigor.
- [ACCELQ To KaneAI Migration](/support/docs/accelq-to-kaneai-migration-guide/): move from ACCELQ.
