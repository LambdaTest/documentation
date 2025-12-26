---
id: run-wd-atomation-test-on-lambdatest-selenium-grid
title: Running Selenium WD Automation Scripts on Selenium Grid Cloud | LambdaTest
hide_title: true
sidebar_label: WD
description: Now you can run your automation scripts using WD with Selenium on LambdaTest online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - wd framework
  - wd docs
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
image: /assets/images/og-images/Selenium-WD-Famework.jpg  
url: https://www.lambdatest.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: wd-with-selenium-running-wd-automation-scripts-on-lambdatest-selenium-grid/
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
          "name": "JavaScript WD with Selenium",
          "item": "https://www.lambdatest.com/support/docs/wd-with-selenium-running-wd-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# WD with Selenium: Tutorial to Run Your First Test on LambdaTest
* * *
In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [LambdaTest Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **WD**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **WD** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **WD** with Selenium to reduce build times.
4. Test your locally hosted pages on LambdaTest platform.
5. Explore advanced features of LambdaTest. 

>**Note:** All the code samples in this documentation can be found in the [LambdaTest's Repository on GitHub](https://github.com/LambdaTest/wd-selenium-sample). You can either download or clone the repository to quickly run your tests.

## Prerequisites To Run Automation Tests With WD Framework
* * *
Before getting started with Automated Scripts using Selenium with **WD** framework on LambdaTest Automation, you need to:

* Download and install **NodeJS**. You should be having **NodeJS v6** or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the official website by clicking [here](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on LambdaTest’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the LambdaTest’s [wd-selenium-sample repository](https://github.com/LambdaTest/wd-selenium-sample) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/wd-selenium-sample
cd wd-selenium-sample
```
**Step 2:** Install the required project dependencies using the command below:
```bash
npm i
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
### Sample Test with WD
Let’s check out a sample **WD** framework code running on LambdaTest Selenium Grid. This is a simple WD automation script that tests a sample to-do list app. The code marks two list items as done, adds a list item and then finally gives the total number of pending items as output.
```js
//single_test.js

module.exports = {
  name: 'Wd-selenium-sample Todo Test',
  run : function (browser) {
    return browser
      .get("https://lambdatest.github.io/sample-todo-app/").then(function(){
        browser.elementById('li1').clickElement().then(function(){
            console.log("Successfully clicked first list item.");
        });
        browser.elementById('li2').clickElement().then(function(){
            console.log("Successfully clicked second list item.");
          });

          browser.elementById('sampletodotext').sendKeys('Complete Lambdatest Tutorial\n').then(function(){
            browser.elementById('addbutton').clickElement().then(function(){
                  console.log("Successfully added a new task.");
              });
          });
      });
  }
};
```
### Configuration of Your Test Capabilities
**Step 4:** In `conf/single.conf.js`, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with LambdaTest Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    name: "single-test",
    build: "wd-lambdatest-sample",
    geoLocation : "US"
  }]
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 5:** The tests can be executed in the terminal using the following command
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest automation dashboard](https://automation.lambdatest.com/build). LambdaTest Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using WD Framework
***
### Setting up the Parallel Environment
You can go to `conf/parallel.conf.js` file in the repo to configure your parallel test cases: 
```js
user= process.env.LT_USERNAME || "<your username>",       // Your Username
key=  process.env.LT_ACCESS_KEY || "<your accessKey>",    // Your Access Key

exports.config = {

  seleniumHost: 'hub.lambdatest.com',
  seleniumPort: 80,

  test: '../tests/single_test.js',

  commonCapabilities: {
    name: "parallel-test",
    build: "wd-lambdatest-sample"
  },

  capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    geoLocation : "US"
  },{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest-1',
    geoLocation : "US"
  },{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest-2',
    geoLocation : "US"
  }]
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
```
### Executing Parallel Tests with WD

To run parallel tests using **WD**, we would have to execute the below command in the terminal:
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
       JavaScript WD with Selenium
      </span>
    </li>
  </ul>
</nav>