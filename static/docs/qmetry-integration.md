# Running Your QMetry Tests On TestMu AI Selenium Grid

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

QMetry is a codeless platform tailored for DevOps and Agile testing teams. It can be used to prepare and execute test scenarios on multiple platforms very easily. Not only that, but QMetry also allows you to record test cases in almost all major languages and frameworks, including the QMetry framework.
TestMu AI now integrates with the QMetry platform to help you execute cross-browser testing of your website, web app, or your mobile website, over 5000+ real devices and 10,000+ browser/device combinations on its cloud-based selenium grid. This document is a comprehensive guide to help you understand how to integrate QMetry with your TestMu AI account.
## How To Setup Your TestMu AI Account With QMetry?

Once you have your project set up in the QMetry app and test suite ready, you need to specify and activate your TestMu AI account in the QMetry app to execute it over the TestMu AI's cloud-based Selenium Grid. Below is the step by step guide to help you do just that:
1.  Once you have your test suite ready, click on the **Execute** button on the app, and select **Remote**.

2.  In the window that opens, navigate to **TestMu AI** tab. Here, you will need to enter your account details and the [desired capabilities](/docs/selenium-automation-capabilities/) to execute the test over your TestMu AI account.

3.  Now, you need to provide access of your TestMu AI account to the QMetry app. To do so, add your _username_ and _access key_ over their corresponding fields, and click on **FETCH PLATFORM LIST** button. This will verify your credentials and connect your TestMu AI account with the QMetry app successfully, based on your current plan.

>To get your Username and Access Key, go to your TestMu AI automation dashboard and click on the "key" icon left to the help button, on the top right corner.

>If you are on _[Lite](https://www.testmuai.com/pricing)_ or _[Live](https://www.testmuai.com/pricing)_ plan, and your provided automation minutes have been exhausted; the above step will throw an error. In such a case, you can wait for the next availability of automation minutes, or you can [upgrade](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/billing/plans) your account. To learn more about how to manage and upgrade your account, refer [this guide](/docs/manage-subscriptions/).
6.  Once done, you will be able to select your desired capabilities in their corresponding fields, like the platform, browser, browser version, resolution, etc. To know more about desired capabilities, refer to [this guide](/docs/selenium-automation-capabilities/).

7.  Click on **Save**, once you have selected the desired capabilities. The current account info and the capabilities will be saved with a name that you provide.

That's it. Your QMetry app has been integrated successfully with your TestMu AI account to execute your tests on its cloud-based Selenium Grid.
## Running Tests From Your QMetry App On TestMu AI Platform

For demo purpose, we have recorded a test scenario, which includes:

```javascript
- Opening [LambdaTest ToDo App](https://lambdatest.github.io/sample-todo-app/)
- Check the first item in the list
- Check the second item in the list
- Add a new item in the list, with text "Yey, Let's add it to list".
```

For the desired capabilities, we have chosen the following details:

```javascript
platform: macOS High Sierra
browserName: Chrome
version: 87
resolution: 1280x800
network: true
visual: true
```

Now just select the profile, and hit **Start**.

The test execution will then start, and you can see the same on the automation dashboard of your TestMu AI account.

Once the test is complete, you can view the test result on the automation dashboard by clicking on the test case. You can see and verify if the test has been passed or failed in the Automation Logs.

For each test executed overthe TestMu AI platform, you can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more.

## Running QMetry Tests on HyperExecute

If you have completed the QMetry setup above, you can also run your QMetry test scripts on [HyperExecute](/support/docs/getting-started-with-hyperexecute/) for faster, parallelized test execution. HyperExecute supports the QMetry framework and its native reporting, so your existing QMetry test suite can be executed at scale without any changes to your test scripts.

To get started, create a [HyperExecute Project](/support/docs/hyperexecute-projects/) connected to your repository containing the QMetry test scripts, configure your [HyperExecute YAML](/support/docs/hyperexecute-yaml-parameters/), and trigger the job via the [CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) or a [Workflow](/support/docs/hyperexecute-workflows/).

> Congrats! You have successfully integrated the QMetry app with your TestMu AI account and ran your test cases over the TestMu AI's cloud based Seleniunm Grid. If you come across any doubts or questions, reach out to us via our **24/7 chat support** or mail us at [support@testmuai.com](mailto:support@testmuai.com). Happy testing! 🙂
