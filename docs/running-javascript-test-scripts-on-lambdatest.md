---
id: running-javascript-test-scripts-on-lambdatest
title: JavaScript With Selenium – Running JavaScript Automation Scripts On TestMu AI Selenium Grid
hide_title: true
sidebar_label: JavaScript
description: You can now run JavaScript Selenium automated test cases on online scalable TestMu AI Selenium Grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing guide
  - javascript selenium framework
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "JavaScript with Selenium",
          "item": `${BRAND_URL}/support/docs/javascript-with-selenium-running-javascript-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# JavaScript With Selenium – Tutorial to Run Your First Test on <BrandName />
* * *
In this topic, you will learn how to automate your website testing using Selenium with **Javascript** Web Automation on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Javascript** automated testing.
2. Understand & configure **Javascript** desired capabilities for executing a test on a selenium grid.
3. Test your locally hosted pages on <BrandName /> platform.
4. Explore advanced features of <BrandName />.

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/nodejs-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running JavaScript With Selenium
* * *
Before getting started with Selenium automation testing on <BrandName />, you need to:
* Download and install **NodeJS** from official [NodeJS documentation](https://nodejs.org/en/). You should be having **NodeJS v6** or newer.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official [npm website](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on <BrandName />’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the <BrandName />’s [nodejs-selenium-sample](https://github.com/LambdaTest/nodejs-selenium-sample) repository and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/nodejs-selenium-sample
cd nodejs-selenium-sample
```
You need to install the following dependencies to your `package.json` file: 

**Step 2:** You will need to install the `selenium webdriver` to make the connection to the `GRID`: 
```bash
npm install selenium-webdriver
```
**Step 3:** Create a new file as `index.js` in your current project or the sample folder and add the below code snippet which will call the installed driver. 
```js
// index.js
const webdriver = require('selenium-webdriver');
```

### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through [<BrandName /> Profile](https://accounts.lambdatest.com/login).

**Step 4:** Set <BrandName /> `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

### Connecting to The Cloud Grid

**Step 5:** Now you can add the `GRID HOST` which is used to connect your current test suites to be executed on the cloud grid. 
```js
// index.js
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
const driver = new webdriver.Builder().usingServer(gridUrl).withCapabilities(capabilities).build();
```
The above grid connect will create the `Webdriver` for the test suite to execute the `Selenium` commands for your test. 

## Run Your First Test
***
### Configuration of Your Test Capabilities
**Step 6:** In the test script, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
// index.js
const capabilities = {
        build: 'NodeJS build',  // Name of the build
        name: 'Test 1',         // Name of the test
        platform: 'windows 10', // Name of Operating System
        browserName: 'chrome',  // Name of the browser
        version: '67.0',        // Version of the browser
        resolution: '1280x800', // Resolution of the screen 
        network: true,          // Enable to capture browser network logs
        visual: true,           // Enable to capture screenshot on every command
        console: true,          // Enable to capture the console log
        video: true             // Enable to capture the video recording of the test
}
```
> **Note:** You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Writing your Test Cases

**Step 7:** Now you write your selenium test cases in your `index.js` file:
```js
function searchTextOnGoogle() {
    // navigate to a url, search for a text and get title of page
    driver.get('https://www.google.com/ncr').then(function () {
        driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function () {
            driver.getTitle().then(function (title) {
                setTimeout(function () {
                    console.log(title);
                    driver.executeScript('lambda-status=passed');
                    driver.quit();
                }, 5000);
            });
        });
    }).catch(function (err) {
        console.log("test failed with reason " + err)
        driver.executeScript('lambda-status=failed');
        driver.quit();
    });
}
searchTextOnGoogle();
```

### Executing the Test
**Step 8:** Please execute the following command below to run your tests: 
```bash
npm test OR node index.js
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [<BrandName /> Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [<BrandName /> Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **<BrandName /> Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```js
const capabilities = {
        tunnel: true,
}
```

## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate <BrandName /> with CI/CD](/support/docs/integrations-with-ci-cd-tools/)


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      JavaScript Automation Testing  
      </span>
    </li>
  </ul>
</nav>
