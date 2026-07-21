# KaneAI Automation Code Generation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI generates automation scripts in multiple frameworks and languages based on natural language inputs from users. KaneAI is available for desktop web applications as well as native mobile applications currently.

> **Note:** KaneAI offers two authoring experiences, Classic and New Experience. New Experience is being rolled out in phases. To enable New Experience for your organization, reach out to our support team. The frameworks and languages supported by each experience are listed below.

Click the `Generate New Code` button to go to code generation page where you can select desired framework and language.

## Supported Frameworks and Languages

The table below shows the frameworks and languages KaneAI can generate code in, and the experience each is available under.

| Framework | Language | Availability | Classic | New Experience |
|---|---|---|:--:|:--:|
| Selenium | Python | Generally available (default) | Yes | No |
| Selenium | Java | Available on request * | Yes | No |
| Playwright | Python | Available on request * | Yes | Yes |
| Playwright | C# | Available on request * | Yes | No |
| Playwright | JavaScript | Available on request * | No | Yes |
| Cypress | JavaScript | Coming soon | No | No |
| WebdriverIO | JavaScript | Coming soon | No | No |
| Appium | Python | Generally available (default) | Yes | No |

New Experience currently covers Desktop Web only. Mobile is supported in Classic.

> **Note:** **Available on request.** Please reach out to Support to enable it. These features are partially rolled out and will soon be generally available for all users.

## Understanding the Code Tab

After code generation completes, the **Code** tab shows the status of each generated code entry and lets you run a Sample Run Execution to validate it before adding the test case to a full Test Run.

### Code Generation States

| State | What it means |
|---|---|
| **Generating** | Code is being created. No actions are available until generation finishes. |
| **Unverified** | Code generation is complete, but a Sample Run Execution has not been run, or the test case has changed since the last run. |
| **Verifying** | A Sample Run Execution is in progress via HyperExecute. |
| **Verified** | The most recent Sample Run Execution completed successfully. |

### Actions Available After Code is Generated

Once code is generated, the following actions are available:

- **Execute & Verify** — Triggers a Sample Run Execution on HyperExecute. This runs the generated code the same way a real KaneAI test run would, including respecting assertion outcomes. While the run is in progress, the status changes to **Verifying** and a **Sample execution in progress · View in HyperExecute** link appears. Once complete, the status updates to **Verified** and the button label changes to **Execute**.
- **Download** — Downloads the generated code to your local machine.

### Sample Run Execution Behavior

- Sample Run Execution can only be initiated from the **Code** tab of a test case.
- The **Execute** button is always enabled — you can proceed to run the test on HyperExecute regardless of whether a Sample Run Execution has passed, failed, or not been triggered.

### Adding Test Cases to a Test Run

Test cases with generated code can be added to a Test Run regardless of the Sample Run Execution status — whether it passed, failed, or was never triggered. The only cases where a test case is not available for selection in a Test Run are:

- Code generation failed or was not initiated.
- Code generation is still in progress.

> **Note:** KaneAI code export leverages public libraries. The generated automation scripts depend on these published packages: Playwright Python (https://pypi.org/project/testmu-playwright-python/), Playwright C# (https://libraries.io/nuget/TestmuAI.Playwright.Bindings), Playwright JavaScript (https://www.npmjs.com/package/@testmuai/playwright-bindings), and Selenium Java (https://mvnrepository.com/artifact/io.github.lambdatest/testmuai-selenium-bindings).
