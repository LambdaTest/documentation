---
id: run-webdriverio-automation-scripts-on-lambdatest
title: Selenium WebDriver IO:Run WebDriverIO Automation Scripts on Selenium Grid | TestMu AI
hide_title: true
sidebar_label: WebDriverIO
description: Now you can run your automation scripts using Selenium with WebDriverIO on TestMu AI online grid of 3000+ real desktop browsers and real operating systems.
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
image: /assets/images/og-images/selenium-testing-og.png
url: https://www.testmuai.com/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/
site_name: TestMu AI
slug: webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/
canonical: https://www.testmu.ai/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/
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
          "name": "JavaScript WebDriverIO with Selenium",
          "item": `${BRAND_URL}/support/docs/webdriverio-with-selenium-running-webdriverio-automation-scripts-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# WebDriverIO with Selenium: Tutorial to Run Your First Test on <BrandName />
* * *
In this topic, you will learn how to automate your website testing using Selenium with WebDriverIO Automation on [<BrandName /> Selenium cloud platform](https://www.lambdatest.com/selenium-automation).

## Objective
***
By the end of this topic, you will be able to:

1. Run a sample Selenium Webdriver test using JavaScript on <BrandName /> Automation.
2. Comprehend and configure Selenium test suite with respect to your capabilities.
3. Select the specific browsers to run your test on.
4. Explore the advanced features of <BrandName />.
5. Run your test cases in parallel to reduce build times.


## Prerequisites For Running WebDriverIO Selenium Tests
* * *
Before getting started with Automated Scripts using WebDriverIO Selenium on <BrandName /> Automation, you need to:

* The first step is to download and install node.js and node package manager or npm. You should be having nodejs v6 or newer. Download it from [official NodeJS website](https://nodejs.org/en/).
* Make sure to use the latest version of JavaScript.
* Download [Selenium JavaScript bindings](http://www.seleniumhq.org/download/) from the official Selenium website.
* Once you download the JavaScript bindings, extract the ZIP file which you’ve downloaded. After extracting the file, you need to add Selenium Java bindings which is a JAR file and all the dependent libraries to your classpath.

### Installing Selenium Dependencies and Tutorial Repo

**Step 1:** Clone our repo to see the sample test case to run the first test on Lambdatest.
```bash
git clone https://github.com/LambdaTest/webdriverio-selenium.git
```
**Step 2:** Install all the required dependencies for the project.
```bash
npm i webdriverio
npm i selenium-webdriver
cd webdriverio-selenium
npm i
```
## Run Your First Test 

**Step 3:** Go to you project file and open `tests/specs/single_test.js` to see the test case.
```
//single_test.js
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
### Configuration of Your Test Capabilities
You can use **[<BrandName /> Capabilities Generator tool](https://www.lambdatest.com/capabilities-generator/)** to select and pass those browser environment specifications.

**Step 4:** Go to your `conf/single.conf.js` file where you can set your test capabilities.
```
//single.conf.js
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

  beforeSession: function (config, capabilities, specs) {
    capabilities.name=specs[0].split(/(\\|\/)/g).pop() || undefined;
    },
    after: function (result, capabilities, specs) {
      driver.execute("lambda-status=".concat(result==0?"passed":"failed"),undefined);
    },

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}
```
## Sample Test
***
**Step 5:** Now you can explore the sample test case to be run on the cloud using `WD` framework in `scripts/lambdatest.js`: 
```
// lambdatest.js
var chai = require("chai"),
  chaiAsPromised = require("chai-as-promised"),
  wd = require('wd'),
  colors = require('colors'),
  child_process = require('child_process')

chai.use(chaiAsPromised);
chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

wd.addPromiseChainMethod(
  'onQuit', function (done) {
    if (done) done();
    return this;
  }
);

function runOnlambdatest(caps, test, done) {
  console.log("Starting Test: " + test.name.green + '\n');
  var browser = wd.promiseChainRemote(config.seleniumHost, config.seleniumPort, username, accessKey);

  // optional extra logging
  browser.on('status', function (info) {
    console.log(info.cyan);
  });
  browser.on('command', function (eventType, command, response) {
    console.log(' > ' + eventType.green, command, (response || '').grey);
  });
  browser.on('http', function (meth, path, data) {
    console.log(' > ' + meth.yellow, path, (data || '').grey);
  });

  test.run(browser.init(caps)).fin(function () { return browser.quit(); }).onQuit(done).done();
}

var config_file = process.argv[2] || 'conf.js'
var config = require(config_file).config;
var test = require(config.test);

var username = process.env.LT_USERNAME || config.user;
var accessKey = process.env.LT_ACCESS_KEY || config.key;

for (var i in config.capabilities) {
  var caps = config.capabilities[i];
  if (caps["tunnel"]) {
    //start tunnel
  }
  else {
    runOnlambdatest(caps, test);
  }
}
```
**Step 6:** Now you can create or update your `package.json` file. 
```
//package.json
{
  "name": "webdriverio-Lambdatest",
  "version": "0.1.0",
  "readme": "WendriverIO Integration with [Lambdatest](https://www.Lambdatest.com)",
  "description": "Selenium examples for WebdriverIO and Lambdatest Automate",
  "scripts": {
    "test": "npm run single && npm run local && npm run parallel",
    "single": "./node_modules/.bin/wdio conf/single.conf.js",
    "parallel": "./node_modules/.bin/wdio conf/parallel.conf.js",
    "local": "./node_modules/.bin/wdio conf/local.conf.js",
    "multiple": "./node_modules/.bin/wdio conf/multiple.conf.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Lambdatest/webdriverio-Lambdatest.git"
  },
  "keywords": [
    "webdriverio",
    "Lambdatest",
    "selenium",
    "tests"
  ],
  "bugs": {},
  "homepage": "https://github.com/Lambdatest/webdriverio-Lambdatest#readme",
  "dependencies": {
    "webdriverio": "^4.14.2"
  },
  "devDependencies": {
    "wdio-mocha-framework": "^0.6.4"
  }
}
```
## Run Your First Test
***
**Step 7:** You can run the following command below to execute your test.
```bash
npm run single
```
### In case of Parallel Testing 
You can go to `conf/parallel.conf.js` file in the repo to configure your parallel test cases: 
```
exports.config = {
  user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
  key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',

  updateJob: false,
  specs: [
    './tests/specs/single_test.js'
  ],
  exclude: [],

  maxInstances: 10,
  commonCapabilities: {
    name: 'webdriverIO-parallel_test',
    build: 'webdriverIO-lambdatest',
    visual:false,
    video:true,
    console:false,
    network:false
  },

  capabilities: [{
    browserName: 'chrome',
    version: '65.0',
    platform: 'WIN10'
  },{
    browser: 'firefox',
    version: '64.0',
    platform: 'WIN7',
  },{
    browser: 'internet explorer'
    version: '10.0',
    platform: 'WIN10',
  },{
    browser: 'MicrosoftEdge'
    version: '18.0',
    platform: 'WIN10',
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  host: 'hub.lambdatest.com',
  port:'80',
  
  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd'
  }
}

// Code to support common capabilities
exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
```
After you configure your tests you can run the following command to execute the tests: 
```bash
npm run parallel
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
       JavaScript WebDriver IO with Selenium
      </span>
    </li>
  </ul>
</nav>
