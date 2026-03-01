---
id: automation-testing-using-jasmine-with-karma
title: Jasmine Test Runner:Run Jasmine Testing on TestMu AI Selenium Grid | TestMu AI
hide_title: true
sidebar_label: Jasmine for BDD
description: Now you can run your automation scripts using Jasmine with Karma on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
keywords:
  - jasmine selenium
  - karma selenium
  - javascript selenium
  - javascript automation testing
  - selenium webdriver javascript
  - selenium javascript testing tutorial
  - javascript selenium framework
url: https://www.testmuai.com/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
site_name: TestMu AI
slug: jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
canonical: https://www.testmuai.com/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/
---
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Jasmine for BDD",
          "item": `${BRAND_URL}/support/docs/jasmine-with-karma-running-jasmine-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Jasmine Test Runner: Run Jasmine Testing on <BrandName /> Selenium Grid
* * *

<BrandName /> Selenium Automation Grid is a cloud-based, scalable Selenium testing platform which enables you to run your automation scripts on 3000+ different browsers and operating systems. You can now run your java Selenium automated test cases on a scalable Selenium infrastructure that is running real browsers and real operating systems.

This topic will help you demonstrate:

* How to run a Jasmine testing and Selenium testing script on <BrandName /> Selenium Cloud with Karma test runner for Angular?
* How to test your locally hosted pages using Jasmine test runner?
* How to run your test cases in parallel to reduce build times?
* How to leverage <BrandName />’s Advanced capabilities?

### Jasmine Testing Using Jasmine Test Runner
* * *
Jasmine test runner is a BDD test automation framework which helps you to write clean and powerful test cases for JavaScript. It executes independently with respect to DOM or other JavaScript frameworks. 

### Karma Test Runner
* * *
Developed by AngularJS team, Karma is a Javascript test runner that helps to evaluate your source code across different browsers on the basis of your test code. The results are displayed using CLI to represent the test’s pass/fail status on various browsers. To know more refer to the [Karma’s official website](http://karma-runner.github.io/3.0/index.html).

## Prerequisites For Running Karma With <BrandName /> Selenium Grid
* * *
>All the code samples in this documentation can be found in the [Jasmine <BrandName /> Repository on <img src={require('../assets/images/GitHub_icon/github-icon.webp').default} alt="Image" width="25" height="25" /> GitHub](https://github.com/LambdaTest/karma-jasmine-sample). You can either download or clone the repository to quickly run your tests.


In order to perform your karma tests with <BrandName />, you would need the below things to be already set up:

#### 1. Global Dependencies

* Make sure to use the latest version of JavaScript.
* A [Git or GitHub repository](https://github.com/)
* Download and [install node.js](https://nodejs.org/en/) and node package manager or npm.
* To install node.js with homebrew use the below command.

`$ brew install node`

* If you have npm already installed, you may want to upgrade it to latest version. Here the code you can run in your terminal to upgrade npm.

`npm install npm@latest -g`

#### 2. <BrandName /> Authentication Credentials

Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

* **For Linux/Mac:**
```
$ export LT_USERNAME=<YOUR_LAMBDATEST_USERNAME> 
$ export LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

* **For Windows:**
```
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
$ set LT_ACCESS_KEY=<YOUR_LAMBDATEST_ACCESS_KEY>
```

## Setting Up The Environment For Jasmine Testing Using Selenium
* * *
You need to clone our [GitHub repository](https://github.com/LambdaTest/protractor-selenium-sample) which demonstrates a [sample of Karma-Jasmine](https://github.com/LambdaTest/karma-jasmine-sample).

After cloning, you need to navigate to the cloned directory and install project dependencies using the below command:

`$ npm install`

The example mentioned below would help you to perform Jasmine testing in Google Chrome.

``` js
describe('add', function () {
    it('should add two numbers and return the result', function () {
        expect(window.add(1, 2)).toBe(3);
    });
});
 
describe('subtract', function () {
    it('should subtract two numbers', function () {
        expect(window.subtract(2, 1)).toBe(1);
    });
});
 
describe('updateAppState', function () {
    it('should push a new state into the browser history', function () {
        window.updateAppState({
            message: 'Getting Started with LambdaTest'
        });
        expect(window.history.state).toEqual({
            message: 'Getting Started with LambdaTest'
        })
    });
});
```
## Running Jasmine Tests Using Karma
* * *
Navigate to the directory where you cloned the [sample of Karma-Jasmine](https://github.com/LambdaTest/karma-jasmine-sample) and run the following command.

`$ karma start karma.conf.js`

or you could also run the test using:

`$ npm test`

## Browser Launcher Configuration
* * *
If you look at ***karma.conf.js*** file you will find that we are passing browser, browser version, and operating system information, along with <BrandName /> [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) capabilities via capabilities object. The capabilities object in the above code is defined as:

``` js
customLaunchers: {
        chrome: {
             base: 'WebDriver',
             config: webdriverConfig,
             browserName: 'chrome',
             platform: 'windows 10',
             version: '71.0',
             name: 'Karma With Heartbeat',
             user: process.env.LT_USERNAME,
             accessKey: process.env.LT_ACCESS_KEY,
             pseudoActivityInterval: 15000 // 15000 ms heartbeat to avoid timeouts
        }
    }
```

The most important capabilities to understand here are ‘browserName’, ‘version’, and ‘platform’. They define which browser environment you wish to run the test on. Rest of the capabilities are important in test management and debugging. We have an inbuilt [Capabilities Generator](https://www.lambdatest.com/capabilities-generator/) tool as well that you use to generate capabilities code for your test suite.

## Testing Locally Hosted Projects Using Jasmine Test Runner
* * *
To help you perform cross browser testing of your locally stored web pages, <BrandName /> provides an SSH(Secure Shell) tunnel connection with the name <BrandName /> tunnel. With <BrandName /> tunnel, you can run your Jasmine tests using Karma to perform automated cross browser testing on browsers offered by online Selenium Grid at <BrandName />. So you make sure how well your changes look, even before your customers. Curious to know more about <BrandName /> tunnel?

> Follow our documentation on <BrandName /> tunnel to know it all. OS specific instructions to download and setup tunnel binary can be found at the following links.
> * [Documentation For Windows User](/docs/local-testing-for-windows/)
> * [Documentation For Mac User](/docs/local-testing-for-macos/)
> * [Documentation For Linux User](/docs/local-testing-for-linux/)

> Download the binary file of:
> * [<BrandName /> tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
> * [<BrandName /> tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
> * [<BrandName /> tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Once, the tunnel is successfully set up. You can add the below code to your capabilities for testing internal servers on your network.

``` js
//Test Websites Using Localhost
customLaunchers: { chrome: {
        tunnel: true, // In case karma is running on local machine
    }   }
```
> **Important Note**: Some Safari & IE browsers don’t support automatic resolution of the URL string "localhost". Therefore if you test on URLs like "`http://localhost/`" or "`http://localhost:8080`" etc, you would get an error in these browsers. A possible solution is to use "`localhost.lambdatest.com`" or replace the string "localhost" with machine IP address. For example, if you wanted to test "`http://localhost/dashboard`" or, and your machine IP is 192.168.2.6 you can instead test on "`http://192.168.2.6/dashboard`" or "`http://localhost.lambdatest.com/dashboard`".

## Avoid Timeouts With psuedoActivityInternal
* * *
To make sure our machines are not hold for long due to some incorrect test, we have come up with a restriction on the number of seconds that our machine is kept reserved for you. In cases, where our servers fail to retrieve a request from your local machine for more than 90 seconds, then your tests are aborted from the queue with the error message related to Timeouts.

If you wish to avoid such timeouts, you need to make use of the below parameter:
``` js
customLaunchers: { chrome: {
 pseudoActivityInterval: 5000 // 5000 ms heartbeat to avoid timeouts
 } }
```

> **Note**: psuedoActivityInternal is presented as a default parameter with a value set to 0. Make sure to provide a value more than 0 in order to avoid the timeouts.

Execute Jasmine testing using Karma & increase your test coverage using <BrandName />’s online Selenium Grid. Happy Testing!



## Using the Jasmine Agent Skill with TestMu AI
***

The [jasmine-skill](https://github.com/LambdaTest/agent-skills/tree/main/jasmine-skill) is a part of [TestMu AI Skills](https://github.com/LambdaTest/agent-skills/) that guide AI coding assistants in generating production-ready test automation.

The jasmine-skill package includes:

```
jasmine-skill/
├── SKILL.md
└── reference/
    ├── playbook.md
    └── advanced-patterns.md
```

It provides structured guidance for:

* Project structure and setup
* Dependency configuration
* Local execution
* TestMu AI cloud execution
* Debugging patterns
* CI/CD integration


### Installing Jasmine Agent Skill
***

Install a Jasmine Agent Skill using the command below:

```
# Clone the repo and copy the skill you need
git clone https://github.com/LambdaTest/agent-skills.git
cp -r agent-skills/jasmine-skill .claude/skills/

# Or for Cursor / Copilot
cp -r agent-skills/jasmine-skill .cursor/skills/
```

**Note**: If you prefer installing all available framework skills instead of only jasmine-skill, clone the repository directly into your tool's skills directory (for example, .claude/skills/, .cursor/skills/, .gemini/skills/, or .agent/skills/).

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
        Jasmine for BDD
      </span>
    </li>
  </ul>
</nav>
