# ReportPortal.io Integration With TestMu AI For Cypress

This article will guide you on how to integrate the **TestMu AI** platform with **ReportPortal.io** platform for running your **Cypress** automation tests. Before you can get started, make sure you have an account on [ReportPortal.io](http://reportportal.io/).

> By default, the TestMu AI **Cypress-Multi-Reporter** mechanism generates **mochaawesome**. To override it with some other reporting options (report portal in this case), you have to create a different file to define the reporting configuration.

## Steps To Integrate

- Navigate to [ReportPortal.io](http://reportportal.io/) and login into your account. Then open your **Report Portal IO Profile**.

- Copy the Report Portal Credentials

- Open your Cypress project and create a new file for defining report portal configuration/credentials

- Define the file name in the "`reporter_config_file`" capability of `lambdatest-config.json` file as mentioned in the below screenshot

- Define the **reportportal.io** dependency (`@reportportal/agent-js-cypress`) in your **lambdatest-config.json** or **package.json** file

- Integration is now done, open the Dashboard to see the results.

> That's all! you have successfully integrated **ReportPortal.io** and **TestMu AI** for running your **Cypress** tests. In case you have any questions or need any additional information, you could reach out at our **24X7 Chat Support** or mail us directly at support@testmuai.com.
