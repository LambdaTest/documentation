# Migrating From Sauce Labs To KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This guide covers your Sauce Labs migration to KaneAI and shows you how to move your testing to TestMu AI. KaneAI is the TestMu AI testing agent that turns natural language into end-to-end tests for web and mobile apps. The steps cover scripts, app builds, test cases and Sauce AI for Test Authoring tests.

[Note: KaneAI does not import or convert Sauce Labs tests. You run your scripts on the TestMu AI cloud, bring test cases into Test Manager, and re-create flows in KaneAI in natural language.]

## What Moves From Sauce Labs and Where It Goes

| Sauce Labs asset | Where it goes on TestMu AI | How |
|---|---|---|
| Selenium scripts  | TestMu AI Selenium grid or HyperExecute | [Sauce Labs to TestMu AI guide](/support/docs/saucelabs-to-testmu-migration-guide/) or [Sauce Labs to HyperExecute](/support/docs/saucelabs-to-hyperexecute-migrate/) |
| Appium scripts  | TestMu AI Appium grid | [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/) |
| Cypress, Playwright, TestCafe, Espresso and XCUITest suites run with saucectl  | TestMu AI cloud | Framework guides for [Cypress](/support/docs/getting-started-with-cypress-testing/), [Playwright](/support/docs/playwright-test-runner/), [TestCafe](/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/?framework=testcafe), [Espresso](/support/docs/getting-started-with-espresso-testing/) and [XCUITest](/support/docs/getting-started-with-xcuitest/) |
| Sauce AI for Test Authoring test cases  | TestMu AI cloud for generated code, and KaneAI | Export the code (Step 1), run it (Step 2) and re-create the test (Step 4) |
| Sauce AI Data Variables  | KaneAI variables and secrets | Re-create them (Step 4) |
| Chrome DevTools recordings replayed with saucectl  | KaneAI | Perform the flow again in KaneAI (Step 4) |
| App builds in Sauce Labs App Storage  | KaneAI app tests and Appium tests | Download them (Step 1), then upload in a [KaneAI app test](/support/docs/author-your-first-mobile-app-test/), or [through the API](/support/docs/application-setup-via-api/) for Appium tests |
| Test cases created in TestRail from Sauce Labs results  | Test Manager | One-click [TestRail importer](/support/docs/one-click-migration-from-testrail/) (Step 3) |
| Sauce Connect tunnels  | TestMu AI Tunnel | A [TestMu AI Tunnel](/support/docs/kane-ai-geolocation-tunnel-proxy/#tunnel-support), selected in KaneAI (Step 5) |

## Before You Start

- **A TestMu AI account.** Create one on the TestMu AI signup page. Copy your Username and Access Key from Account Settings > [Password & Security](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/security/username-accesskey).
- **KaneAI and Test Manager access.** **Automate with KaneAI** and **Create and Automate** require KaneAI access. You create KaneAI test runs in Test Manager.
- **Support requests, if needed.** Reach out to Support to enable New Experience, or code export frameworks marked as available on request.
- **saucectl.** It reads `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` from environment variables or a `credentials.yml` file. The npm install requires Node.js 16 or higher and npm 8 or higher.
- **Sauce AI for Test Authoring, if you use it.** It is a paid add-on for Sauce Labs Enterprise accounts.

## Step 1: Collect What You Need From Sauce Labs

Sauce Labs keeps test assets, including videos, screenshots and logs, for 30 days. Test parameters and metadata remain available.  Download what you need first.

List your jobs, then download the artifacts you want to keep. The list shows 20 jobs per page by default, so add `--page` or `--size` to see more:

```bash
saucectl jobs list --out json
saucectl artifacts download <jobID> <globPattern> --target-dir my-artifacts-dir
```

The default region is `us-west-1`. Add `--region eu-central-1` for the EU Central data center.

Mobile App Storage keeps uploaded apps for up to 60 days.  List your builds, then download the ones you need:

```bash
saucectl storage list --out json
saucectl storage download 0244d466-ff99-4fa2-bee0-64afb2c407b0 --filename app.apk
```

Replace the sample file ID and file name with values from the list.

If you use Sauce AI for Test Authoring, save two things from each test case:

1. **The script.** Open **Test Authoring** > **Test Cases and Suites** and select the test case. On the **Code** tab, pick a language and framework in **Choose language**, then click **Get Code**. Copy the script into your project.
2. **The intent.** The test case workspace shows the original prompts and the intent of each step. Keep them for Step 4.

Code options include Selenium, Playwright, WebdriverIO, Appium, Espresso and XCUITest, by language and platform. The script reflects the current version of the test case, so regenerate it after any edit.

## Step 2: Run Your Existing Scripts on TestMu AI

Your Selenium and Appium scripts keep their test logic. You change the credentials, the endpoint and the capabilities:

```text
https://ondemand.us-west-1.saucelabs.com/wd/hub
```

```text
@hub.lambdatest.com/wd/hub
```

```text
@mobile-hub.lambdatest.com/wd/hub
```

The Sauce Labs endpoint above is for the US West data center.  For TestMu AI, put `https://YOUR_USERNAME:YOUR_ACCESS_KEY` before the grid URL.

Follow the [Sauce Labs to TestMu AI migration guide](/support/docs/saucelabs-to-testmu-migration-guide/) for Selenium and [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/) for Appium. Map `sauce:options` to `LT:Options` with the [capability map](/support/docs/testmu-capability-map/) and the [Capabilities Generator](https://www.testmuai.com/capabilities-generator/).

saucectl runs tests in the Sauce Labs cloud, so its `config.yml` stays behind.  Use each framework's TestMu AI guide instead. For example, the TestMu AI Cypress CLI reads capabilities from `lambdatest-config.json`.

Treat code generated by Sauce AI like your other scripts in that framework. Replace any Sauce Labs endpoint, credentials or capabilities it contains.

## Step 3: Bring Test Cases Into Test Manager

**Automate with KaneAI** starts from a saved test case in Test Manager. Bring your test cases in first:

- **TestRail, qTest, Xray or Zephyr Scale.** Use the one-click importers for [TestRail](/support/docs/one-click-migration-from-testrail/), [qTest](/support/docs/one-click-migration-from-qtest/), [Xray](/support/docs/one-click-migration-from-xray/) (Jira Cloud) or [Zephyr Scale](/support/docs/one-click-migration-from-zephyr-scale/) (Jira Cloud). Sauce Labs documents a TestRail integration in which the TestRail CLI creates test cases from saucectl JUnit reports.
- **Spreadsheets.** Use [CSV import](/support/docs/csv-import/). Map at least one column to **Title**. Each file can be up to 10 MB.
- **Requirements.** The [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/) writes test cases from text and files, including your saved Sauce AI prompts.

If you keep running scripts on TestMu AI, Test Manager can also track those runs:

- **Automatic linking.** Test Manager can create test cases from completed runs in an automatically created **TestMu AI Automation** project. Their BDD scenarios are generated from each run's command logs. This works for Selenium Web frameworks only. See [automatic linking](/support/docs/automated-test-cases-with-ai/#automatic-linking).
- **Capability linking.** Add the `tms.tc_id` key to the `LT:Options` map from Step 2 to link a run to a test case, on HyperExecute and Web Automation tests. The Test Manager docs spell it `lt:Options`, so do not add a second map. See [capability linking](/support/docs/automated-test-cases-with-ai/#capability-linking).

## Step 4: Re-create Your Flows in KaneAI

In a KaneAI session, you add steps in natural language, with slash commands or by interacting with your app. Start from what you have:

- **A test case in Test Manager.** Open it and click **Automate with KaneAI** in its **Automate** section. KaneAI opens a session pre-filled with the steps, where you author and run the test. The action works on one test case at a time. It works with the Manual Test Steps and Behaviour Driven Development templates, and the test case must have steps or scenarios. See [Automate with KaneAI](/support/docs/manual-test-case-creation/#automate-with-kaneai).
- **Generated test cases.** In the AI Test Case Generator, **Create and Automate** saves the selected test cases and sends them to KaneAI. It is experimental, so review the authored steps.
- **A Sauce AI test case.** Create a [KaneAI browser test](/support/docs/author-your-first-desktop-browser-test/) or [app test](/support/docs/author-your-first-mobile-app-test/). Write the objective in natural language from the prompts and step intents you saved.
- **A recorded or manual flow.** [Manual Interaction](/support/docs/kaneai-manual-interaction/) records the clicks, typing and navigation you perform in a KaneAI session as steps. It works on desktop web, Android apps and iOS apps in portrait, not mobile browsers. Write checks as instructions, because interactions cannot record assertions.

Then reuse what you can:

- Group repeated steps into [modules](/support/docs/kane-ai-modules/).
- Re-create Data Variables as [KaneAI variables](/support/docs/kane-ai-using-variables/), and passwords or tokens as [secrets](/support/docs/kane-ai-secrets/).
- Replace Sauce Visual checks with a [Visual Comparison step](/support/docs/kaneai-smartui-visual-testing/).  Its first run captures a new baseline.

A test saved as **Ready**, with every step run and passed, generates code. The [code generation](/support/docs/kane-ai-automation-code-generation/) frameworks depend on the authoring experience:

- **Classic:** Selenium Python and Appium Python by default. Selenium Java and Playwright Python, C# and JavaScript on request.
- **New Experience:** Playwright Python and Playwright JavaScript. Appium Python is coming soon.

## Step 5: Run Your KaneAI Tests

Run KaneAI tests in a Test Manager test run on HyperExecute:

1. In your project, open **Test Runs**, click **Create Test Run** and set **Type** to **KaneAI Generated Test Cases**.
2. Add test cases. Only test cases with generated code are available.
3. Assign each test case and give it at least one configuration. Click **Save test run**.
4. Click **Run on HyperExecute** and choose **Run Instances Now** or **Schedule Test Run**.

See [Execute Test Runs on HyperExecute](/support/docs/kaneai-hyperexecute-test-run-execution/). Replace Sauce AI schedules with **Schedule Test Run** or your CI pipeline.

With the **KaneAI** toggle ON, configurations offer the Desktop and Real Device platforms. Native app testing on Real Devices is available only for KaneAI-generated test runs. Virtual Mobile configurations are available for non-KaneAI test runs only. See [Configurations in KaneAI & Test Manager](/support/docs/test-runs-configurations/).

From CI, copy the Test Run ID from the test run URL and send it in a POST request to `https://test-manager-api.lambdatest.com/api/atm/v1/hyperexecute`. Use your TestMu AI username and access key for Basic Authentication. See [Test Automation with CI/CD](/support/docs/kaneai-ci-cd-automation/).

For a site behind a firewall, start a tunnel with `--env ht-prod`:

{`./LT --user ${YOUR_LAMBDATEST_USERNAME()} --key ${YOUR_LAMBDATEST_ACCESS_KEY()}  --env ht-prod -v -n TUNNEL_NAME`}

When you author a KaneAI web test, select the tunnel under **Advanced Settings**. In a test run, enter its name in **Tunnel** under **Advanced Configurations**. In CI, pass the tunnel name in the `tunnel` field. See [KaneAI tunnel support](/support/docs/kane-ai-geolocation-tunnel-proxy/).

## What Does Not Carry Over

- **Run history.** No TestMu AI importer reads Sauce Labs job history, so your runs start a new history. Sauce Labs purges job asset files after 30 days.
- **Sauce AI test cases, suites and schedules.** KaneAI does not import them. You re-create them.
- **Hidden Data Variables.** Their values cannot be viewed after they are created.  Take them from your own records.
- **saucectl files, recordings and tunnels.** KaneAI does not import saucectl `config.yml` files, Chrome DevTools recordings or Sauce Connect settings. See the table above.
- **Sauce Visual baselines.** A baseline is what a snapshot is compared to.  KaneAI captures a new baseline on the first run of each Visual Comparison step.
- **Cypress and WebdriverIO code export.** KaneAI does not generate Cypress or WebdriverIO code. Keep those suites as scripts on the TestMu AI cloud.
- **Other products.** This guide does not cover Sauce Labs Error Reporting or Mobile App Distribution.

## Related migration guides

- [Sauce Labs To TestMu AI Migration](/support/docs/saucelabs-to-testmu-migration-guide/): Selenium 4 and Selenium 3 scripts.
- [Migrate Appium Tests From Sauce Labs](/support/docs/migrate-appium-tests-from-sauce-labs/): Appium mobile test suites.
- [Sauce Labs to HyperExecute](/support/docs/saucelabs-to-hyperexecute-migrate/): Selenium suites on HyperExecute.
- [TestMu AI Capability Map](/support/docs/testmu-capability-map/): capability mapping for Sauce Labs users.
- [BrowserStack To KaneAI Migration](/support/docs/browserstack-to-kaneai-migration-guide/): the same path for BrowserStack users.
