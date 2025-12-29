---
id: running-protractor-test-scripts-on-lambdatest
title: Protractor Selenium Guide:Run Protractor Test Automation Scripts on Selenium Grid | TestMu AI
hide_title: true
sidebar_label: Protractor
description: Now you can run your automation scripts using Selenium with Protractor on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - protractor selenium
  - protractor selenium grid
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
image: /assets/images/og-images/Protractor-Selenium-1.jpg
url: https://www.testmu.ai/support/docs/protractor-with-selenium-running-protractor-automation-scripts-on-testmu-selenium-grid
site_name: LambdaTest
slug: protractor-with-selenium-running-protractor-automation-scripts-on-testmu-selenium-grid
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
          "name": "JavaScript Protractor with Selenium",
          "item": "https://www.lambdatest.com/support/docs/protractor-with-selenium-running-protractor-automation-scripts-on-testmu-selenium-grid/"
        }]
      })
    }}
></script>

# Protractor with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *
In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **Protractor**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **ProtractorJS** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **ProtractorJS** with Selenium to reduce build times.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest. 

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/protractor-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running Protractor Test Automation Scripts Using Selenium
* * *
Before getting started with Selenium automation testing on LambdaTest, you need to:
* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the LambdaTest’s [protractor-selenium-sample repository](https://github.com/LambdaTest/protractor-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/protractor-selenium-sample
cd protractor-selenium-sample
```
**Step 2:** Install the required project dependencies using the command below:
```bash
npm install
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
### Sample Test with ProtractorJS
Let’s check a sample **Protractor** Selenium code running on LambdaTest Selenium Grid. This is a simple Protractor test automation script that tests a sample to-do list app. 
```js
 // single.js

describe('Add todo Lists', function () {
    browser.ignoreSynchronization = true;

    it('Add Customer Test', function () {


        browser.get('https://lambdatest.github.io/sample-todo-app/');

	browser.driver.findElement(by.name('li1')).then(function (foundElement) {
                foundElement.click();
            });

	browser.driver.findElement(by.name('li2')).then(function (foundElement) {
                foundElement.click();
            });

	browser.driver.findElement(by.id('sampletodotext')).then(function (foundElement) {
            foundElement.clear();
            foundElement.sendKeys("Yey, Let's add it to list");
            });

	browser.driver.findElement(by.id('addbutton')).then(function (foundElement) {
                foundElement.click();
            });


		var foo = element(by.xpath('//html/body/div/div/div/ul/li[6]/span'));
        	expect(foo.getText()).toEqual("Yey, Let's add it to list");

    });

});
```

### Configuration of Your Test Capabilities
**Step 4:** In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
 capabilities = {
    build: 'protractor-LambdaTest-Single',
    browserName: 'chrome',
    version:'latest',
    platform: 'Windows 10',
  },
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 5:** The tests can be executed in the terminal using the following command
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Protractor Framework
***
### Executing Parallel Tests with Protractor

To run parallel tests using **Protractor**, we would have to execute the below command in the terminal:
```bash
npm run parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build).

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
       JavaScript Protractor with Selenium
      </span>
    </li>
  </ul>
</nav>
