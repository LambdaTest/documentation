---
id: guide-to-nodejs
title: Guide:Running NodeJS Tests On Cloud Selenium Grid
hide_title: true
sidebar_label: Quick Guide To Run Node.js
description: Guide to running Node.js and Selenium test scripts on TestMu AI Selenium automation grid online. Automated cross browser testing online using Selenium and Node.js on 3000+ browsers on cloud.
keywords:
  - testmu ai automation using Node.js
  - Node.js and Selenium automation
  - Node.js documentation testmu ai
  - node.js and selenium tutorial
  - node.js and testmu ai tutorial
  - node.js on testmu ai selenium grid
  - getting started with node.js and selenium
  - selenium testing using node.js
  - node.js selenium scripts
image: /assets/images/og-images/run-nodejs-tests-on-selenium-grid-cloud.jpg
url: https://www.testmu.ai/support/docs/quick-guide-to-run-node-js-tests-on-testmu-selenium-grid
site_name: LambdaTest
slug: quick-guide-to-run-node-js-tests-on-testmu-selenium-grid
---
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
          "name": "Quick Guide To Run Node.js Tests On Cloud Selenium Grid",
          "item": `${BRAND_URL}/support/docs/quick-guide-to-run-node-js-tests-on-testmu-selenium-grid/`
        }]
      })
    }}
></script>

# Quick Guide To Run Node.js Tests On Cloud Selenium Grid
***

<BrandName />’s [Selenium grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) enables you to perform end-to-end automation tests on a secure, reliable, and scalable Selenium cloud infrastructure. You can run your Node.js automation test scripts on 3000+ browser and operating system environments giving you higher test coverage and significantly less built times. This document will help you quickly get started with running your Node.js test scripts on the <BrandName /> Selenium automation grid.

## Prerequisites
***

- The first step is to download and install Node.js and node package manager or npm. We recommend using the latest version of node.js.

- You can download it from [official NodeJS website](https://nodejs.org/en/).

- If you have npm already installed, you may want to upgrade it to the latest version. Here the code you can run in your terminal to upgrade npm.

        npm install npm@latest -g

## Installing Selenium Dependencies For Node.js
***

The next step is to install Selenium dependencies for Node.js using npm. Here’s the command that you can run:

        npm i selenium-webdriver

## Sample Node.js & Selenium Test To Get You Started
***

Once you have installed the necessary dependencies, you are all set to run your Node.js automation scripts on the <BrandName /> Selenium grid. To get started, you can try out the code below. It’s a simple Node.js script that opens up Google.com, searches <BrandName /> in Google search, and then outputs the search result page's title. You can also fork it from our [Node.js GitHub repository](https://github.com/LambdaTest/nodejs-selenium-sample). Make sure to create the JS file in the same folder where you have downloaded Selenium.


## Sample Node.js & Selenium Automation Script
***

Do make sure to add the **Username** and **Key** in the code below. You can find your username and access key using the key icon on the [Automation dashboard](https://automation.lambdatest.com/) or in your [Profile](https://accounts.lambdatest.com/detail/profile) section.

```javascript
/*
    LambdaTest selenium automation sample example
    Configuration
    ----------
    username: Username can be found at automation dashboard
    accessKey:  AccessKey can be generated from automation dashboard or profile section
 
    Result
    -------
    Execute NodeJS Automation Tests on LambdaTest Distributed Selenium Grid
*/
const webdriver = require('selenium-webdriver');
 
/*
    Setup remote driver
    Params
    ----------
    platform : Supported platform - (Windows 10, Windows 8.1, Windows 8, Windows 7,  macOS High Sierra, macOS Sierra, OS X El Capitan, OS X Yosemite, OS X Mavericks)
    browserName : Supported platform - (chrome, firefox, Internet Explorer, MicrosoftEdge, Safari)
    version :  Supported list of version can be found at https://www.lambdatest.com/capabilities-generator/
*/
 
// username: Username can be found at automation dashboard
const USERNAME = '{YOUR_LAMBDATEST_USERNAME}';
 
// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = '{YOUR_LAMBDATEST_ACCESS_KEY}';
 
// gridUrl: gridUrl can be found at automation dashboard
const GRID_HOST = 'hub.lambdatest.com/wd/hub';
 
function searchTextOnGoogle() {
    // Setup Input capabilities
    const capabilities = {
        platform: 'windows 10',
        browserName: 'chrome',
        version: '67.0',
        resolution: '1280x800',
        network: true,
        visual: true,
        console: true,
        video: true,
        name: 'Test 1', // name of the test
        build: 'NodeJS build' // name of the build
    }
 
    // URL: https://{username}:{accessKey}@hub.lambdatest.com/wd/hub
    const gridUrl = 'https://' + USERNAME + ':' + KEY + '@' + GRID_HOST;
 
    // setup and build selenium driver object
    const driver = new webdriver.Builder()
        .usingServer(gridUrl)
        .withCapabilities(capabilities)
        .build();
 
    // navigate to a url, search for a text and get title of page
    driver.get('https://www.google.com/ncr').then(function() {
        driver.findElement(webdriver.By.name('q')).sendKeys('LambdaTest\n').then(function() {
            driver.getTitle().then(function(title) {
                setTimeout(function() {
                    console.log(title);
                    driver.quit();
                }, 5000);
            });
        });
    });
}
searchTextOnGoogle();
```
You can execute the test from your terminal through this command.

        node index.js

Do note the use of the remote webdriver here. We have passed browser environment configurations through the capabilities class. You can set the environment details as per your requirements.

To set up your own choice of environment for the test in the code, you can leverage our Capability Generator tool.

<div className="download_btn mb-10">
<a href="https://www.lambdatest.com/capabilities-generator">LambdaTest Capability Generator Tool</a>
</div>

> **Tear Down**: The tear down method helps the <BrandName /> platform understand when the test’s execution is finished. It’s important to tear down each test, or else it will give timeout errors.

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
       Quick Guide To Run Node.js Tests On Cloud Selenium Grid
      </span>
    </li>
  </ul>
</nav>
