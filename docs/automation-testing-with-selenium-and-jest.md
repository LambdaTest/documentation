---
id: automation-testing-with-selenium-and-jest
title: Jest Automated Testing With Selenium Jest Integration | TestMu AI
hide_title: true
sidebar_label: Jest Library
description: TestMu AI now integrates with Jest to boost your go-to market delivery. Jest is a JavaScript testing library for React web-applications with which you can perform snapshot testing.
keywords:
  - testmu ai integrations
  - testmu ai app marketplace
  - jest integration
  - testmu ai jest integration
  - jest and selenium
  - jest selenium
image: /assets/images/og-images/automated-testing-with-selenium-jest.jpg  
url: https://www.lambdatest.com/support/docs/automation-testing-with-selenium-and-jest/
site_name: LambdaTest
slug: automation-testing-with-selenium-and-jest/
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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "JavaScript Jest with Selenium",
          "item": "https://www.lambdatest.com/support/docs/automation-testing-with-selenium-and-jest/"
        }]
      })
    }}
></script>

# Jest with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *
In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **Jest**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **Jest** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Test your locally hosted pages on LambdaTest platform.
4. Explore advanced features of LambdaTest. 

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/jest-selenium-webdriver-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Jest Automation Scripts Using Selenium
* * *
Before getting started with Selenium automation testing on LambdaTest, you need to:
* Download and install **NodeJS** from [official NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer. 
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the [official npm website](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the LambdaTest’s [jest-selenium-webdriver-sample repository](https://github.com/LambdaTest/jest-selenium-webdriver-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/jest-selenium-webdriver-sample
cd jest-selenium-webdriver-sample
```
**Step 2:** Next, you need to install **Jest**. Run the below command to install Jest:
```bash
npm install --save-dev jest --force
```

### Setting up Your Authentication
Make sure you have your LambdaTest credentials with you to run test automation scripts on LambdaTest Selenium Grid. You can obtain these credentials from the [LambdaTest Automation Dashboard](https://automation.lambdatest.com/build) or through [LambdaTest Profile](https://accounts.lambdatest.com/login).

**Step 3:** Set LambdaTest `Username` and `Access Key` in environment variables.
  * For **Linux/macOS**:
  ```bash
  export LT_USERNAME="YOUR_USERNAME" export LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```
  * For **Windows**:
  ```bash
  set LT_USERNAME="YOUR_USERNAME" set LT_ACCESS_KEY="YOUR ACCESS KEY"
  ```

## Run Your First Test
***
### Sample Test with Jest
Let’s check a sample **Jest** Selenium code running on LambdaTest Selenium Grid. This is a simple Jest test automation script that tests a sample to-do list app. 
```js
 // single.test.js
const webdriver = require('selenium-webdriver');
const { until } = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const LambdaTestRestClient = require('@lambdatest/node-rest-client');

const username = process.env.LT_USERNAME || '<your username>';
const accessKey = process.env.LT_ACCESS_KEY || '<your accessKey>';

const AutomationClient = LambdaTestRestClient.AutomationClient({
  username,
  accessKey
});
const capabilities = {
  build: 'jest-LambdaTest-Single',
  browserName: 'chrome',
  version: 'latest',
  platform: 'Windows 10',
};

const getElementById = async (driver, id, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.id(id)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByName = async (driver, name, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.name(name)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

const getElementByXpath = async (driver, xpath, timeout = 2000) => {
  const el = await driver.wait(until.elementLocated(By.xpath(xpath)), timeout);
  return await driver.wait(until.elementIsVisible(el), timeout);
};

let sessionId = null;

describe('webdriver', () => {
  let driver;
  beforeAll(async () => {
    driver = new webdriver.Builder()
      .usingServer(
        'https://' + username + ':' + accessKey + '@hub.lambdatest.com/wd/hub'
      )
      .withCapabilities(capabilities)
      .build();
    await driver.getSession().then(function(session) {
      sessionId = session.id_;
    });
    // eslint-disable-next-line no-undef
    await driver.get(`https://lambdatest.github.io/sample-todo-app/`);
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test('test', async () => {
    try {
      const lnk = await getElementByName(driver, 'li1');
      await lnk.click();

      const lnk1 = await getElementByName(driver, 'li2');
      await lnk1.click();

      const inpf = await getElementById(driver, 'sampletodotext');
      await inpf.clear();
      await inpf.sendKeys("Yey, Let's add it to list");

      const btn = await getElementById(driver, 'addbutton');
      await btn.click();

      const output = await getElementByXpath(
        driver,
        '//html/body/div/div/div/ul/li[5]/span'
      );
      const outputVal = await output.getText();
      expect(outputVal).toEqual("Fifth Item");
      await updateJob(sessionId, 'passed');
    } catch (err) {
      await updateJob(sessionId, 'failed');
      await webdriverErrorHandler(err, driver);
      throw err;
    }
  }, 35000);
});

async function webdriverErrorHandler(err, driver) {
  console.error('Unhandled exception! ' + err.message);
  if (driver && sessionId) {
    try {
      await driver.quit();
    } catch (_) {}
    await updateJob(sessionId, 'failed');
  }
}
function updateJob(sessionId, status) {
  return new Promise((resolve, reject) => {
    AutomationClient.updateSessionById(
      sessionId,
      { status_ind: status },
      err => {
        if (err) return reject(err);
        return resolve();
      }
    );
  });
}
```

### Configuration of Your Test Capabilities
**Step 4:** In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
 const capabilities = {
  build: 'jest-LambdaTest-Single',
  browserName: 'chrome',
  version: 'latest',
  platform: 'Windows 10',
};
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 5:** The tests can be executed in the terminal using the following command
```bash
npm test single.test.js
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [LambdaTest Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using LambdaTest Tunnel app. All you would have to do is set up an SSH tunnel using LambdaTest Tunnel app and pass toggle `tunnel = True` via desired capabilities. LambdaTest Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [LambdaTest Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish LambdaTest Tunnel.

>Download the binary file of:
>* [LambdaTest Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
* [LambdaTest Tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
* [LambdaTest Tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Open command prompt and navigate to the binary folder.

Run the following command:
```bash
LT -user {user’s login email} -key {user’s access key}
```
So if your user name is lambdatest@example.com and key is 123456, the command would be:
```bash
LT -user lambdatest@example.com -key 123456
```
Once you are able to connect **LambdaTest Tunnel** successfully, you would just have to pass on tunnel capabilities in the code shown below :

**Tunnel Capability**
```js
const capabilities = {
        tunnel: true,
}
```
### Executing Local Tests with Jest

To run parallel tests using **Jest**, we would have to execute the below command in the terminal:
```bash
npm test local.test.js
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build).

## Additional Links
***
* [Advanced Configuration for Capabilities](/support/docs/selenium-automation-capabilities/)
* [How to test locally hosted apps](/support/docs/testing-locally-hosted-pages/)
* [How to integrate LambdaTest with CI/CD](/support/docs/integrations-with-ci-cd-tools/)

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
       JavaScript Jest with Selenium
      </span>
    </li>
  </ul>
</nav>
