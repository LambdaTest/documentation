---
id: run-selenium-ide-tests-on-lambdatest-selenium-cloud-grid
title: Guide to Run Selenium IDE Tests Using TestMu AI
hide_title: true
sidebar_label:  Selenium IDE
description: Guide on how to run Selenium IDE tests with TestMu AI online Selenium automation grid, for testing on 3000+ real browsers & browser versions hosted on TestMu AI cloud servers.
keywords:
 - lamdatest
 - selenium ide
 - selenium ide testmu ai
 - selenium ide runner
 - side runner
 - side testmu ai
 - how to run test cases in selenium ide
 - how to run selenium ide tests from command line
 - selenium side runner
 - selenium ide side runner
url: https://www.testmu.ai/support/docs/run-selenium-ide-tests-on-testmu-selenium-cloud-grid
site_name: LambdaTest
slug: run-selenium-ide-tests-on-testmu-selenium-cloud-grid
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Codeless Automation Tools",
          "item": "https://www.lambdatest.com/support/docs/integrations-with-codeless-automation-tools/"
        },{
          "@type": "ListItem",
          "position": 4,
          "name": "Running Selenium IDE Tests",
          "item": "https://www.lambdatest.com/support/docs/run-selenium-ide-tests-on-testmu-selenium-cloud-grid/"
        }]
      })
    }}
></script>

# Run Selenium IDE Tests with LambdaTest Selenium Grid
* * *
[Selenium IDE](https://www.lambdatest.com/blog/selenium-ide-what-is-it-why-is-it-must-for-every-qa/) is one of the most popular record and playback tool for testing which is widely used for automated browser testing. The Selenium IDE is a very easy-to-use solution for getting started with automation testing. It also provides instant feedback and has cross-browser and operating system compatibility, with the help of Selenium IDE (SIDE) Runner.

In this document, we will see how to run Selenium IDE tests on LambdaTest cloud [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/).

## Prerequisites

* * *

*   [Node.js](https://nodejs.org/en/download/) programming language (version 8 or 10).
*   [NPM or Node.js Package Manager](https://www.npmjs.com/get-npm).
*   Selenium IDE Plugin, for either [Google Chrome](https://chrome.google.com/webstore/detail/selenium-ide/mooikfkahbdckldjjndioackbalphokd?hl=en) and [Mozilla Firefox](https://addons.mozilla.org/en-US/firefox/addon/selenium-ide/).
*   Selenium IDE (SIDE) Runner. You can download SIDE runner using below code:

```javascript
    npm install -g selenium-side-runner
```


*   You also need your LambdaTest authentication credentials, which includes your LambdaTest username, and access key. These will be set up as the Secrets for configuring the pipeline. To get your Username and Access Key, go to your [LambdaTest automation dashboard](https://automation.lambdatest.com/) and click on the "key" icon left to the help button, on the top right corner. 

<img loading="lazy" src={require('../assets/images/uploads/profile-1.webp').default} alt="LambdaTest Access Key" width="462" height="325" className="doc_img"/>

For the demonstration of executing Selenium IDE tests on the LambdaTest grid, we’ll create a test suite that comprises of four test cases- two to perform a search for ‘LambdaTest’ on Google & DuckDuckGo, and the other two to perform a search for ‘LambdaTest Blog’ on Google & DuckDuckGo.

## Enabling Parallel Testing for Selenium IDE

* * *

The parallel testing on the [Cloud Selenium Grid](https://www.lambdatest.com/selenium-automation) works only when the tests are executed using the SIDE Runner, and not the Selenium IDE. So we will enable the Parallel testing for Selenium IDE.

*   Right click on the test suite and go to Settings. <img loading="lazy" src={require('../assets/images/uploads/open-settings-in-Selenium-IDE.webp').default} alt="Test Suite Settings" width="898" height="422" className="doc_img"/>
*   In the Settings window, tick the **Run in Parallel** checkbox. <img loading="lazy" src={require('../assets/images/uploads/enable-parallel-testing-in-Selenium-ide.webp').default} alt="Test Suite Properties" width="893" height="323" className="doc_img"/>
*   Save the SIDE project.

We have successfully activated Parallel Testing in Selenium IDE. Now we can execute tests Selenium IDE tests in parallel on LambdaTest Selenium Cloud Grid.

## Executing Selenium IDE Tests on LambdaTest Selenium Cloud Grid

* * *

1.  **Set the [Desired Capabilities in Selenium](/docs/selenium-automation-capabilities/).** For this article, we have set the Chrome browser (version 72.0) for Windows 10, to run our Selenium IDE tests.

    The [LambdaTest Selenium Desired Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) is used to generate the capabilities. Below are the desired capabilities used in this article for the required test combination, provided in Python Language.
```javascript
        capabilities = {
                "platform" : "Windows 10",
                "browserName" : "Chrome",
                "version" : "72.0"
        }
 ```       
```javascript
    In the string format, it will be represented as: **"browserName='chrome' version='72.0' platform='Windows 10'"**
```

2.  **Get the Grid URL for executing tests on LambdaTest.** Get your username and access key from your LambdaTest's Profile section (as shown in the prerequisites), and replace it in the below URL.

    ```javascript
    https://user-name:access-key@hub.lambdatest.com/wd/hub
    ```


3.  **Specify the desired capabilities along with the Grid URL.** Replace the desired capabilities and the Grid URL from the above steps in the below code:

```javascript
selenium-side-runner --server <lambdatest grid="" url=""> --capabilities </lambdatest>
```


4.  **Mention the number of parallel processes to be executed at a time.** You can use any of the below syntax to specify the count of parallel processes to be executed at the above mentioned Grid URL:
```javascript
 selenium-side-runner --w <num of="" parallel="" processes="">--server https://user-name:access-key@hub.lambdatest.com/wd/hub</num> 
```
OR

```javascript
selenium-side-runner --max-workers <num of="" parallel="" processes="">--server https://user-name:access-key@hub.lambdatest.com/wd/hub</num>
```    
        
    For this article, we have set the number of parallel processes as '4'

5.  Now we have all the components of the SIDE Runner command to execute the tests. So we will **run the Selenium IDE tests on LambdaTest Selenium Cloud Grid.** Navigate to the directory where the .SIDE file is located (here it is located at "_LambdaTest-IDE.side_") and execute the below command in the terminal, after replacing the GRID URL:

```javascript
selenium-side-runner -w 4 "LambdaTest-IDE.side" --server https://user-name:acces-key@hub.lambdatest.com/wd/hub -c "browserName='chrome' version='72.0' platform='Windows 10'"
```


We have successfully executed all the steps to run Selenium IDE tests on LambdaTest Selenium Cloud Grid. Now you can see our tests being executed along with their status in the [Automation Timeline of your LambdaTest profile](https://automation.lambdatest.com/timeline).

Below are the execution snapshots of the SIDE Runner and the automation timeline instance, that shows the successful execution of the desired tests: <img loading="lazy" src={require('../assets/images/uploads/SIDE-Runner-execution-snapshot-1.webp').default} alt="test execution snapshots" width="1353" height="493" className="doc_img"/> <img loading="lazy" src={require('../assets/images/uploads/automation-timeline-snapshot.webp').default} alt="automation test timeline" width="1353" height="493" className="doc_img"/>

## How To Run Multiple Test Cases Within Same Test Suite?

* * *

You might have lots of individual tests in a single test suite to test all features of a site. When you run these tests normally, you might experience that the test suites get broken into individual tests, thereby requiring a new session and the variables being passed again each time.

Selenium IDE provides the feature to overcome this as well. In order to run multiple test cases within the same test suite with a single instance of a browser, the Persist session option in the Selenium IDE can be used. Below are the steps for how to do so:

1.  Click over the three dot option of the test suite. Choose the setting option. <img loading="lazy" src={require('../assets/images/uploads/click-on-3-dots-1.webp').default} alt="test suite settings" width="1905" height="1025"  className="doc_img"/>
2.  Then choose persist session option and submit. <img loading="lazy" src={require('../assets/images/uploads/select-persist-sessions-1.webp').default} alt="persist session" width="1905" height="1025" className="doc_img"/>
3.  For the second query, you pass the variable value through the SIDE Runner using command line. You can use the SIDE Runner's "**param**" flag to pass the values. For example:

```javascript
selenium-side-runner --params "a='example-value' a.b='another example-value' a.b.c=[1,2,3]" 
```


* * *

Congrats! We have successfully executed our Selenium IDE tests on LambdaTest Selenium Cloud Grid, which allows you to perform live interactive and automated [cross browser testing](https://www.lambdatest.com) on 3000+ real browsers and operating systems online.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Running Selenium IDE Tests</span>
    </li>
  </ul>
</nav>
