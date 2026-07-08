# Ghost Inspector Integration With TestMu AI’s Cloud

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/llms.txt).

TestMu AI provides support with Selenium WebDriver for pacing the execution of your automation test scripts. TestMu AI is a cloud-based, cross browser testing tool, providing a [Selenium Grid](https://www.testmuai.com/selenium-automation/) of 3000+ browsers and browser versions running through real operating systems to speed up automation testing of your web-app or website. This topic will help you to automate your website testing using Ghost Inspector on TestMu AI.

## What is Ghost Inspector?

Ghost Inspector is a codeless automation tool that lets a software tester automate the process of writing test scripts.

This integration between TestMu AI and Ghost Inspector enables you to automate the cross-browser testing process through the Selenium Grid of more than 2,000 browsers.

As a result, you’ll be able to expand your test coverage, analyze and extract insightful test reports, and enhance your team collaboration.

# How To Integrate TestMu AI With Ghost Inspector?

* All the test suites will be reflected in the Ghost Inspector dashboard.

* Click on the desired test suite.
* Click on the desired test case under test suites.

* Once you have selected the desired test case, click on **More** -> **Export Suite** and select the format as New Selenium IDE (.side).

### Setup Selenium IDE Side Runner:

* Node.js programming language (version 8 or 10).
* NPM or Node.js Package Manager.
* Selenium IDE Plugin, for either Google Chrome and Mozilla Firefox.
* Selenium IDE (SIDE) Runner. You can download SIDE runner using below code:

```bash
npm install -g selenium-side-runner
```
* You also need your TestMu AI authentication credentials, which includes your TestMu AI username, and access key. These will be set up as the Secrets for configuring the pipeline. To get your Username and Access Key, go to your TestMu AI automation dashboard and click on the "key" icon left to the help button, on the top right corner.

* Open Selenium IDE and click on ‘Open an existing project'.

* Right click on the test suite and go to Settings. Test Suite Settings.

* In the Settings window, tick the Run in Parallel checkbox. Test Suite Properties.

* Save the SIDE project.
* We have successfully activated Parallel Testing in Selenium IDE. Now we can execute tests Selenium IDE tests in parallel on TestMu AI Selenium Cloud Grid.

## Executing Selenium IDE Tests on TestMu AI Selenium Cloud Grid

* Set the Desired Capabilities in Selenium. For this article, we have set the Chrome browser (version 72.0) for Windows 10, to run our Selenium IDE tests.
* The TestMu AI Selenium Desired Capabilities Generator is used to generate the capabilities. Below are the desired capabilities used in this article for the required test combination, provided in Python Language.

```bash
capabilities = {
"platform" : "Windows 10",
"browserName" : "Chrome",
"version" : "72.0"
}
```

In the string format, it will be represented as:
```bash
**"browserName='chrome' version='72.0' platform='Windows 10'"**
```

* Get the Grid URL for executing tests on TestMu AI. Get your username and access key from your TestMu AI's Profile section (as shown in the prerequisites), and replace it in the below URL.

```bash
https://user-name:access-key@hub.lambdatest.com/wd/hub
```

* Specify the desired capabilities along with the Grid URL. Replace the desired capabilities and the Grid URL from the above steps in the below code:

```bash
selenium-side-runner --server <lambdatest grid="" url=""> --capabilities </lambdatest>
```
* Mention the number of parallel processes to be executed at a time. You can use any of the below syntax to specify the count of parallel processes to be executed at the above mentioned Grid URL:

```bash
selenium-side-runner --w <num of="" parallel="" processes="">--server
https://user-name:access-key@hub.lambdatest.com/wd/hub</num>
```

OR

```bash
selenium-side-runner --max-workers <num of="" parallel="" processes="">--server
https://user-name:access-key@hub.lambdatest.com/wd/hub</num>
```

For this article, we have set the number of parallel processes as '4'.

* Now we have all the components of the SIDE Runner command to execute the tests. So we will run the Selenium IDE tests on TestMu AI Selenium Cloud Grid. Navigate to the directory where the .SIDE file is located (here it is located at "TestMu AI-IDE.side") and execute the below command in the terminal, after replacing the GRID URL:

```bash
selenium-side-runner -w 4 "LambdaTest-IDE.side" --server
https://user-name:acces-key@hub.lambdatest.com/wd/hub -c "browserName='chrome'
version='72.0' platform='Windows 10'"
```

* We have successfully executed all the steps to run Selenium IDE tests on TestMu AI Selenium Cloud Grid. Now you can see our tests being executed along with their status in the Automation Timeline of your TestMu AI profile.

* Below are the execution snapshots of the SIDE Runner and the automation timeline instance, that shows the successful execution of the desired tests: test execution snapshots automation test timeline.
