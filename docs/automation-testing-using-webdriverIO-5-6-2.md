---
id: automation-testing-using-webdriverIO-5-6-2
title: Run Automation Scripts on Cloud Selenium Grid using WebDriverIO 5.6.2 Framework | TestMu AI
hide_title: true
sidebar_label: WebDriverIO 5.6.2
description: Now you can run your automation scripts using Selenium with WebDriverIO 5.6.2 on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - webdriverio selenium grid
  - selenium webdriver tutorial
  - webdriverio
  - webdriverio tutorial
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
image: /assets/images/og-images/WebDriverIO-562-framework.jpg
url: https://www.lambdatest.com/support/docs/webdriverio-5-6-2-with-selenium-running-automation-scripts-on-lambdatest-selenium-grid/
site_name: LambdaTest
slug: webdriverio-5-6-2-with-selenium-running-automation-scripts-on-lambdatest-selenium-grid/
---
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
          "name": "JavaScript WebDriverIO 5.6.2 with Selenium",
          "item": "https://www.lambdatest.com/support/docs/webdriverio-5-6-2-with-selenium-running-automation-scripts-on-lambdatest-selenium-grid/"
        }]
      })
    }}
></script>

# Run Automation Scripts on Cloud Selenium Grid using WebDriverIO 5.6.2 Framework
* * *
LambdaTest Selenium Automation Grid is a cloud-based scalable Selenium testing platform which enables you to run your automation scripts on 3000+ different browsers and operating systems. You can now run your JavaScript Selenium automated test cases on a scalable Selenium infrastructure that is running real browsers and real operating systems.

This guide will help you in getting started with configuring and running your JavaScript based automation test scripts on LambdaTest Selenium cloud platform using WebDriverIO 5.6.2 framework. This doc will help you to:

* Run a sample Selenium Webdriver test using JavaScript on LambdaTest Automation.
* Comprehend and configure Selenium test suite with respect to your capabilities
* Select the specific browsers to run your test on.
* Explore the advanced features of LambdaTest.
* Run your test cases in parallel to reduce build times.
* Test your locally hosted pages.

## Prerequisites For Running WebDriverIO & Selenium
* * *
>All the code samples in this documentation can be found in the [WebDriverIO 5.6.2 LambdaTest Repository on <img src={require('../assets/images/GitHub_icon/github-icon.webp').default} alt="Image" width="25" height="25" /> GitHub](https://github.com/LambdaTest/webdriverio-selenium). You can either download or clone the repository to quickly run your tests.

Before getting started with Automated Scripts using Selenium with WebDriverIO 5.6.2 on LambdaTest Automation, you need to:

* The first step is to download and install node.js and node package manager or npm. You should be having nodejs v6 or newer. Click [here](https://nodejs.org/en/) to download.
* Make sure to use the latest version of JavaScript.
* Make sure you have WD installed in your system, you can install it using the below command through npm:

`npm install webdriverio`

* Download [Selenium JavaScript bindings](http://www.seleniumhq.org/download/) from the official Selenium website.
* Once you download the JavaScript bindings, extract the ZIP file which you’ve downloaded. * After extracting the file, you need to add Selenium Java bindings which is a JAR file and all the dependent libraries to your classpath.

## Installing Selenium Dependencies For Node.js
* * *
Next step is to install Selenium dependencies for Node.js using npm. Here’s the command to run:

`npm i selenium-webdriver`

* Download LambdaTest tunnel binary file if you wish to test your locally hosted or privately hosted projects.

> Follow our documentation on LambdaTest tunnel to know it all. OS specific instructions to download and setup tunnel binary can be found at the following links.
> * [Documentation For Windows User](/docs/local-testing-for-windows/)
> * [Documentation For Mac User](/docs/local-testing-for-macos/)
> * [Documentation For Linux User](/docs/local-testing-for-linux/)

> Download the binary file of:
> * [LambdaTest tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
> * [LambdaTest tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
> * [LambdaTest tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

## Getting Started With WebDriverIO 5.6.2 Framework & LambdaTest
* * *
Running WebDriverIO 5.6.2 test scripts on LambdaTest [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) is as easy as changing a few lines of code. To start with, you would have to invoke Selenium remote webdriver instead of local browser webdriver. In addition, since we are using remote webdriver, we have to define which browser environment we want to run the test. We do that by passing browser environment details to LambdaTest Selenium Grid via desired capabilities class. You can use [LambdaTest Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) to select & pass those browser environment specifications.

Let’s check out sample WebDriverIO 5.6.2 framework code running LambdaTest Selenium Grid. This is a simple WebDriverIO 5.6.2 automation script that test a sample to-do list app. The code marks two list items as done, adds a list item and then finally gives the total number of pending items as output.

You can also find this code at our [GitHub repository for WebDriverIO](https://github.com/LambdaTest/webdriverio-selenium) 5.6.2.
``` js
var assert = require('assert');
 
describe('Lambdatest Demo Test', function() {
  it('Lambdatest Demo TestCase', function () {
    browser
      .url('https://lambdatest.github.io/sample-todo-app/')
      .click('*[name="li1"]')
      .click('*[name="li2"]')
      .setValue('*[id="sampletodotext"]','Lambdatest\n');
     
    assert(browser.getTitle().match(/Sample page - lambdatest.com/i));
  });
});
```

Below is the config.js file where we will be declaring the desired capabilities.

``` js
user= process.env.LT_USERNAME || "<your username>",
key= process.env.LT_ACCESS_KEY || "<your accessKey>",
 
exports.config = {
 
  updateJob: false,
  user,
  key,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],
 
  capabilities: [{
    browserName: 'chrome',
    version:"64.0",
    name:"Test webdriverio",
    build:"build 1",
  }],
  sync: true,
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 100000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 1,
  path: '/wd/hub',
  hostname: 'hub.lambdatest.com',
  port: 80,
 
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
```

The Selenium WebDriver test would open a URL, mark the first two items in the list as done, add an item in the list, and return the total number of pending item. Your results would be displayed on the test console (or command-line interface if you are using terminal/cmd) and on [LambdaTest dashboard](https://accounts.lambdatest.com/dashboard). LambdaTest dashboard will help you view all your text logs, screenshots and video recording for your entire Selenium tests.

## Execute The Test
* * *
You would need to execute the below command in your terminal/cmd.

`npm run single`

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
       JavaScript WebDriverIO 5.6.2 with Selenium
      </span>
    </li>
  </ul>
</nav>
