# Vividus Tests On TestMu AI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Vividus is a codeless test automation tool, developed with the aim to help testers perform automation testing for any application, test, or scenario, using a single tool and common language.

TestMu AI now integrates with the Vividus tool to help you execute automation tests on its cloud-based Selenium Grid. This TestMu AI-Vividus integration will help you perform cross-browser testing of your website, web app, or your mobile website, over 5000+ real devices and 10,000+ browser/device combinations on TestMu AI platform. This document is a comprehensive guide to help you understand how to integrate Vividus with your TestMu AI account.

## How To Setup Your TestMu AI Account With Vividus?

Once you have your project set up using the Vividus tool, here's a step by step guide to help you setup your TestMu AI account with Vividus tool:

1. Once you have your test scenario ready, you need to add the TestMu AI plugin in the build.gradle -> dependencies, using the below command.

```javascript
implementation(group: 'org.vividus', name: 'vividus-plugin-lambdatest', version: vividusVersion)
```

2. Next you need to add the TestMu AI cloud as the executing platform. To do so, open the configuration.properties file and add the below profile in it:

```javascript
Next you need to add the TestMu AI cloud as the executing platform. To do so, open the configuration.properties file and add the below profile in it:
```

3. Now you need to specify you TestMu AI username and access key in the same configuration.properties file, using below syntax:

```javascript
selenium.grid.username=<LT_USERNAME>
selenium.grid.password=<LT_ACCESS_KEY>
```

This will verify your credentials and connect your TestMu AI account with the Vividus tool successfully, based on your current plan.

To get your Username and Access Key, go to your [TestMu AI automation dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/timeline/) and click on the "key" icon left to the help button, on the top right corner.

Once done, you will be able to select your desired capabilities in their corresponding fields, like the platform, browser, browser version, resolution, etc. To know more about desired capabilities, refer to our [Capabilities Generator Guide](/docs/selenium-automation-capabilities/).

That's it. Vividus tool has been integrated successfully with your TestMu AI account. Now you can execute your automated tests on TestMu AI's cloud-based Selenium Grid.

## Running Tests From Your Vividus App On TestMu AI Platform

For demo purpose, we have recorded a test scenario, which includes:

```javascript
- Opening <a href="https://lambdatest.github.io/sample-todo-app/" rel="noopener" target="_blank">LambdaTest ToDo App</a>
- Check the first item in the list
- Check the second item in the list
- Add a new item in the list, with text "Yey, Let's add it to list".
```

* Use the below syntax to pass the desired capabilities:

```javascript
selenium.grid.capabilities.<capability>=<value>
```

For example, we have used the below desired capabilities for demo purpose:

```javascript
selenium.grid.capabilities.build=VividusDemo
selenium.grid.capabilities.visual=true
selenium.grid.capabilities.console=true
selenium.grid.capabilities.network=true
selenium.grid.capabilities.version=13.0
selenium.grid.capabilities.platform=MacOS Big Sur
```

> Note: If no browser version or OS capability is passed, it will take the latest version of the browser available on TestMu AI platform, along with latest Windows OS version.

* Now you need to select the desired browser, on which you want to run your tests. To do so, open the configuration.properties file, and change the name of the browser to the desired one, from Chrome.

Syntax:

```javascript
configuration.profiles=lambdatest/web,web/desktop/<browser name>
```

For example, let’s change the browser to Safari:

```javascript
configuration.profiles=lambdatest/web,web/desktop/safari

// Previously it was configuration.profiles=lambdatest/web,web/desktop/chrome
```

* To run your test, using the below command:

```javascript
./gradlew runStories
```

* The test execution will then start, and you can see the same on the automation dashboard of your TestMu AI account.

* Once the test is complete, you can view the test result on the automation dashboard by clicking on the test case. You can see and verify if the test has been passed or failed in the Automation Logs.

For each test executed overthe TestMu AI platform, you can view logs, [mark bugs](/docs/mark-as-bug-in-automation-testing/), and do much more.

## Running Tests From Vividus In Parallel On TestMu AI Platform

Parallel execution is available out of the box and limited only with machine resources and cloud concurrency. In Vividus, concurrency is available at the story level, i.e., each story will use a new session. To configure how many threads you would like to use you need to change the value threads value in the suite.properties file, as shown below:

> Congrats! You have successfully integrated the Vividus tool with your TestMu AI account. Now run your test cases over the TestMu AI's cloud-based Seleniunm Grid. If you come across any doubts or questions, reach out to us via our **24/7 chat support** or mail us at support@testmuai.com. Happy testing! 🙂
