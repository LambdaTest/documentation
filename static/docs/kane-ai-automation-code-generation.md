# How KaneAI Generates Automation Code

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI generates automation scripts in multiple frameworks and languages from your natural language inputs. It supports both desktop web applications and native mobile applications.


KaneAI offers two authoring experiences, Classic and New Experience. New Experience is being rolled out in phases. To enable New Experience for your organization, reach out to our support team. The frameworks and languages supported by each experience are listed below.




Click the **Generate New Code** button to open the code generation page, where you select the framework and language you want.



## Supported Frameworks and Languages


The table below shows the frameworks and languages KaneAI can generate code in, and the experience each is available under.




      Framework
      Language
      Availability
      Classic
      New Experience




      Selenium
      Python
      Generally available (default)
      &#10003;
      &#10007;


      Java
      Available on request &#42;
      &#10003;
      &#10007;


      Playwright
      Python
      Available on request &#42;
      &#10003;
      &#10003;


      C#
      Available on request &#42;
      &#10003;
      &#10007;


      JavaScript
      Available on request &#42;
      &#10007;
      &#10003;


      Cypress
      JavaScript
      Coming soon
      &#10007;
      &#10007;


      WebdriverIO
      JavaScript
      Coming soon
      &#10007;
      &#10007;


      Appium
      Python
      Generally available (default)
      &#10003;
      &#10007;






**&#10003;** Supported &nbsp;&nbsp; **&#10007;** Not available. New Experience currently covers Desktop Web only. Mobile is supported in Classic.


**Available on request.** Please reach out to Support to enable it. These features are partially rolled out and will soon be generally available for all users.


## Understanding the Code Tab


After code generation completes, the **Code** tab shows the status of each generated code entry and lets you run a Sample Run Execution, a quick validation run on [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/), to validate it before adding the test case to a full Test Run.



### Code Generation States


| State | What it means |
|---|---|
| **Generating** | Code is being created. No actions are available until generation finishes. |
| **Unverified** | Code generation is complete, but a Sample Run Execution has not been run, or the test case has changed since the last run. |
| **Verifying** | A Sample Run Execution is in progress via HyperExecute. |
| **Verified** | The most recent Sample Run Execution completed successfully. |

### Actions After Code Generation


Once code is generated, the following actions are available:

- **Execute & Verify**: Triggers a Sample Run Execution on HyperExecute. This runs the generated code the same way a real KaneAI test run would, including respecting assertion outcomes. While the run is in progress, the status changes to **Verifying** and a **Sample execution in progress · View in HyperExecute** link appears. Once complete, the status updates to **Verified** and the button label changes to **Execute**.
- **Download**: Downloads the generated code to your local machine.

### Sample Run Execution Behavior


- Sample Run Execution can only be initiated from the **Code** tab of a test case.
- The **Execute** button is always enabled. You can proceed to run the test on HyperExecute regardless of whether a Sample Run Execution has passed, failed, or not been triggered.

### Adding Test Cases to Runs


Test cases with generated code can be added to a Test Run regardless of the Sample Run Execution status, whether it passed, failed, or was never triggered. The only cases where a test case is not available for selection in a Test Run are:

- Code generation failed or was not initiated.
- Code generation is still in progress.


KaneAI code export uses public libraries. The generated automation scripts depend on these published packages:

- Playwright Python: [testmu-playwright-python](https://pypi.org/project/testmu-playwright-python/)
- Playwright C#: [TestmuAI.Playwright.Bindings](https://libraries.io/nuget/TestmuAI.Playwright.Bindings)
- Playwright JavaScript: [@testmuai/playwright-bindings](https://www.npmjs.com/package/@testmuai/playwright-bindings)
- Selenium Java: [testmuai-selenium-bindings](https://mvnrepository.com/artifact/io.github.lambdatest/testmuai-selenium-bindings)


## Next Steps


Continue with these guides:

- [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/): Add test cases with generated code to a test run and execute them.
- [Test Runs Configurations](/support/docs/test-runs-configurations/): Define the browser and device environments your generated code runs against.
