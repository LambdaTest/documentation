# KaneAI Automation Code Generation

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI generates automation scripts in multiple frameworks and languages based on natural language inputs from users. KaneAI is available for desktop web applications as well as native mobile applications currently.

KaneAI offers two authoring experiences, Classic and New Experience. New Experience is being rolled out in phases. To enable New Experience for your organization, reach out to our support team. The frameworks and languages supported by each experience are listed below.

Click the `Generate New Code` button to go to code generation page where you can select desired framework and language.

## Supported Frameworks and Languages

The table below shows the frameworks and languages KaneAI can generate code in, and how each is available in Classic and New Experience.

      Framework
      Language
      Classic
      New Experience

      Selenium
      Python
      Available (default)
      Not available

      Java
      Available on request &#42;
      Not available

      Playwright
      Python
      Available on request &#42;
      Available

      C#
      Available on request &#42;
      Not available

      JavaScript
      Available on request &#42;
      Available

      Cypress
      JavaScript
      Coming soon

      WebdriverIO
      JavaScript
      Coming soon

      Appium
      Python
      Available (default)
      Coming soon

**Available on request.** Please reach out to Support to enable it.

## Understanding the Code Tab

The **Code** tab shows your generated exports, their generation outcomes, and actions to view, download, or create a pull request for the code.

### Check Whether Code is Available

Check the export on the **Code** tab to see whether code was generated successfully. The test case's **Test Summary** status is separate: a test case labeled **Unverified** can still have an available code export.

Use **Generate new code** to create an export in a supported framework and language.

### Code Generation Outcomes

The icon beside an export name indicates whether code generation succeeded or failed. It does not indicate whether the test passed an execution.

| Outcome | What it means |
|---|---|
| **Generating** | Code is being created. No actions are available until generation finishes. |
| **Generation succeeded** | The export is available. Click its name to open the code. |
| **Generation failed** | The export shows the failure reason inline. Click **Generate again** to retry. |

These describe generation outcomes, not additional labels on the code card. They do not change the test case's **Test Summary** status.

### Actions Available After Code is Generated

Once code is generated, the following actions are available:

- **Export name**: Opens the generated code. Click the name instead of a separate **View code** button.
- **Download**: Downloads the generated code to your local machine.
- **Create PR**: Creates a pull request through your configured integration, subject to existing permissions.
- **Generate new code**: Creates another export using your chosen framework and language.

### Execute the Test Case

To execute a single case, open **Test Summary** and click **Quick Run**. Select compatible configurations, review the run settings, and click **Start quick run**. This creates one Test Run with one instance per selected configuration. See [Quick Run](/support/docs/kaneai-quick-run/) for the full walkthrough.

- **Classic** executes generated code. Execution requires usable code; resolve missing, in-progress, or failed generation first.
- **New Experience** executes through **Evidence Reporting**, without using generated code. A missing or failed export does not by itself block Evidence execution when the test case and selected configurations are otherwise eligible.

For a run containing multiple test cases, follow [Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/).

KaneAI code export leverages public libraries. The generated automation scripts depend on these published packages:

- Playwright Python: [testmu-playwright-python](https://pypi.org/project/testmu-playwright-python/)
- Playwright C#: [TestmuAI.Playwright.Bindings](https://libraries.io/nuget/TestmuAI.Playwright.Bindings)
- Playwright JavaScript: [@testmuai/playwright-bindings](https://www.npmjs.com/package/@testmuai/playwright-bindings)
- Selenium Java: [testmuai-selenium-bindings](https://mvnrepository.com/artifact/io.github.lambdatest/testmuai-selenium-bindings)
