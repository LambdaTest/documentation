# Report Portal IO Integration for Cypress on TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

This article guides you on how to integrate the **TestMu AI** platform with the **ReportPortal.io** platform for running your **Cypress** automation tests. Before you get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

By default, the **TestMu AI** Cypress-Multi-Reporter mechanism generates **mochawesome**. To override it with another reporting option (ReportPortal in this case), create a separate file to define the reporting configuration and add the ReportPortal agent dependency.

## Steps To Integrate

1. Navigate to [ReportPortal.io](http://reportportal.io/) and log in to your account. Then open your **Report Portal IO Profile**.

2. Copy the ReportPortal credentials shown on your profile page.

3. Open your Cypress project and create a new file for defining the ReportPortal configuration and credentials.

4. Define the file name in the `reporter_config_file` capability of the `lambdatest-config.json` file, as shown in the screenshot below.

5. Define the **ReportPortal.io** dependency (`@reportportal/agent-js-cypress`) in your `lambdatest-config.json` or `package.json` file.

6. The integration is now done. Open the Dashboard to see the results.

That's all. You have successfully integrated **ReportPortal.io** and **TestMu AI** for running your **Cypress** tests. In case you have any questions or need any additional information, reach out at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
