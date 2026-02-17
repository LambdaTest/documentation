---
id: cucumberjs-testing-using-lambdatest-selenium-grid
title: Cucumber JS Testing:Run Automation Scripts using Cucumber JS Framework | TestMu AI
hide_title: true
sidebar_label: Cucumberjs for BDD
description: Now you can run your automation scripts using Selenium with Cucumberjs on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - cucumber framework
  - cucumber selenium
  - cucumber vs selenium
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/cucumberjs-with-selenium-running-cucumberjs-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: cucumberjs-with-selenium-running-cucumberjs-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/cucumberjs-with-selenium-running-cucumberjs-automation-scripts-on-testmu-selenium-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import CookieTrackingLogin from '@site/src/component/CookieTracking';

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
          "name": "Cucumber JS with Selenium",
          "item": `${BRAND_URL}/support/docs/cucumberjs-with-selenium-running-cucumberjs-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Cucumber JS with Selenium: Tutorial to Run Your First Test on <BrandName /> 
* * *
In this topic, you will learn how to configure and run your JavaScript automation testing scripts on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation) using **JavaScript** framework **Cucumber**.

## Objective
***
By the end of this topic, you will be able to:

1. Set up an environment for testing your hosted web pages using **CucumberJS** framework with **Selenium**.
2. Understand and configure the core capabilities required for your Selenium test suite.
3. Run test cases in parallel using **JS** with Selenium to reduce build times.
4. Test your locally hosted pages on <BrandName /> platform.
5. Explore advanced features of <BrandName />. 

>**Note:** All the code samples in this documentation can be found in the [<BrandName />'s Repository on GitHub](https://github.com/LambdaTest/NodeJs-Cucumber-Selenium). You can either download or clone the repository to quickly run your tests.

## Prerequisites For Running CucumberJS Test Automation Scripts Using Selenium
* * *
Before getting started with Selenium automation testing on <BrandName />, you need to:
* Download and install **NodeJS** from [official NodeJS website](https://nodejs.org/en/). You should be having **NodeJS v6** or newer. 
* Make sure you are using the latest version of **JavaScript**.
* Install **npm** from the [official npm website](https://www.npmjs.com/).
* Download [Selenium JavaScript bindings](https://www.selenium.dev/downloads/) from the official website. Latest versions of **Selenium Client** and **WebDriver** are ideal for running your JavaScript automation testing script on <BrandName />’s Selenium Grid.

### Installing Selenium Dependencies and tutorial repo

**Step 1:** Clone the <BrandName />’s [NodeJs-Cucumber-Selenium repository](https://github.com/LambdaTest/NodeJs-Cucumber-Selenium) and navigate to the code directory as shown below:
```bash
git clone https://github.com/LambdaTest/NodeJs-Cucumber-Selenium
cd NodeJs-Cucumber-Selenium
```
**Step 2:** Install the required project dependencies using the command below:
```bash
npm install
```

### Setting up Your Authentication
Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName /> Selenium Grid. You can obtain these credentials from the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/build) or through <a href="https://stage-accounts.lambdatestinternal.com/login" onClick={CookieTrackingLogin}><BrandName /> Profile</a>.

**Step 3:** Set <BrandName /> `Username` and `Access Key` in environment variables.
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
### Sample Test with CucumberJS
The example mentioned below would help you to execute your **Cucumber JS** Testing automation testing-
```bash
//nodejs-cucumber-todo/features/todo.feature
Feature: Automate a website
    Scenario: perform click events
      When visit url "https://lambdatest.github.io/sample-todo-app"
      When field with name "First Item" is present check the box
      When field with name "Second Item" is present check the box
      When select the textbox add "Let's add new to do item" in the box
      Then click the "addbutton"
      Then I must see title "Sample page - lambdatest.com"
```
**Step 4:** Now create `step definition` file.
```js
//nodejs-cucumber-todo/features/step_definitions/todo.js
/*
This file contains the code which automate the sample app.
It reads instructions form feature file and find matching
case and execute it.
*/
 
 
'use strict';
 
const assert = require('cucumber-assert');
const webdriver = require('selenium-webdriver');
 
module.exports = function() {
 
  this.When(/^visit url "([^"]*)"$/, function (url, next) {
    this.driver.get('https://lambdatest.github.io/sample-todo-app').then(next);
  });
 
  this.When(/^field with name "First Item" is present check the box$/, function (next) {
      this.driver.findElement({ name: 'li1' })
      .click().then(next);
  });
 
  this.When(/^field with name "Second Item" is present check the box$/, function (next) {
      this.driver.findElement({ name: 'li3' })
      .click().then(next);
  });
 
  this.When(/^select the textbox add "([^"]*)" in the box$/, function (text, next) {
      this.driver.findElement({ id: 'sampletodotext' }).click();
      this.driver.findElement({ id: 'sampletodotext' }).sendKeys(text).then(next);
  });
 
  this.Then(/^click the "([^"]*)"$/, function (button, next) {
    this.driver.findElement({ id: button }).click().then(next);
  });
 
  this.Then(/^I must see title "([^"]*)"$/, function (titleMatch, next) {
    this.driver.getTitle()
      .then(function(title) {
        assert.equal(title, titleMatch, next, 'Expected title to be ' + titleMatch);
      });
  });
};
```
**Step 5:** Now create `cucumber js` framework `runner` file.
```js
//nodejs-cucumber-todo/scripts/cucumber-runner.js
#!/usr/bin/env node
/*
This is parallel test runner file.
It creates child processes equals the number of
test environments passed.
*/
let child_process = require('child_process');
let config_file = '../conf/' + (process.env.CONFIG_FILE || 'single') + '.conf.js';
let config = require(config_file).config;
 
process.argv[0] = 'node';
process.argv[1] = './node_modules/.bin/cucumber-js';
 
const getValidJson = function(jenkinsInput) {
    let json = jenkinsInput;
    json = json.replace(/\\n/g, "");
    json = json.replace('\\/g', '');
    return json;
};
 
let lt_browsers = null;
if(process.env.LT_BROWSERS) {
    let jsonInput = getValidJson(process.env.LT_BROWSERS);
    lt_browsers = JSON.parse(jsonInput);
}
 
for( let i in (lt_browsers || config.capabilities) ){
  let env = Object.create( process.env );
  env.TASK_ID = i.toString();
  let p = child_process.spawn('/usr/bin/env', process.argv, { env: env } ); 
  p.stdout.pipe(process.stdout);
}
```

### Configuration of Your Test Capabilities
**Step 6:** In `conf/single.conf.js`  file, you need to update your test capabilities. In this code, we are passing browser, browser version, and operating system information, along with <BrandName /> Selenium grid capabilities via capabilities object. The capabilities object in the above code are defined as:
```js
 capabilities: [{
    browserName: 'chrome',
    platform: 'Windows 10',
    version: 'latest',
    name: "cucumber-js-single-test",
    build: "cucumber-js-LambdaTest-single"
  }]
```
> You can generate capabilities for your test requirements with the help of our inbuilt **<a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>**.

### Executing the Test

**Step 7:** The tests can be executed in the terminal using the following command
```bash
npm run single
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build). <BrandName /> Automation Dashboard will help you view all your text logs, screenshots and video recording for your entire automation tests.

## Running Your Parallel Tests Using Cucumber Framework
***
### Executing Parallel Tests with Cucumber

To run parallel tests using **CucumberJS**, we would have to execute the below command in the terminal:
```bash
npm run parallel
```
Your test results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [<BrandName /> automation dashboard](https://automation.lambdatest.com/build).

## Testing Locally Hosted or Privately Hosted Projects
***
You can test your locally hosted or privately hosted projects with [<BrandName /> Selenium grid cloud](https://www.lambdatest.com/selenium-automation) using <BrandName /> Tunnel app. All you would have to do is set up an SSH tunnel using <BrandName /> Tunnel app and pass toggle `tunnel = True` via desired capabilities. <BrandName /> Tunnel establishes a secure SSH protocol based tunnel that allows you in testing your locally hosted or privately hosted pages, even before they are made live.

>Refer our [<BrandName /> Tunnel documentation](/support/docs/testing-locally-hosted-pages/) for more information.

Here’s how you can establish <BrandName /> Tunnel.

>Download the binary file of:
>* [<BrandName /> Tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
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
### Executing the local tests
To run local tests using **CucumberJS**, we would have to execute the below command in the terminal:
```bash
npm run local
```

## Executing all the tests 
To run all the tests at once using **CucumberJS**, we would have to execute the below command in the terminal:

```bash
npm run test
```

>If you wish to set up your CucumberJS testing through Jenkins, then refer to our [Jenkins documentation](/support/docs/jenkins-with-testmu/).


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
       Cucumber JS with Selenium
      </span>
    </li>
  </ul>
</nav>
