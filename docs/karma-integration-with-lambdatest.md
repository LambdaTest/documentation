---
id: karma-integration-with-lambdatest
title: Karma Test Runner Integration With TestMu AI | TestMu AI
hide_title: true
sidebar_label: Karma Test Runner
description: TestMu AI now integrates with Karma to boost your go-to market delivery. Karma is highly favored in the web developer community due to its outstanding plugin support and integrations with numerous renowned CI packages.
keywords:
  - karma selenium
  - karma integration with testmu ai
  - testmu ai integrations
  - testacular
  - testmu ai app marketplace
image: /assets/images/og-images/default-user-image.png
url: https://www.testmu.ai/support/docs/karma-integration-with-testmu
site_name: LambdaTest
slug: karma-integration-with-testmu
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
          "name": "Karma Test Runner",
          "item": `${BRAND_URL}/support/docs/karma-integration-with-testmu/`
        }]
      })
    }}
></script>

# Karma Test Runner Integration With <BrandName /> 
* * *

Designed for rapid development, Karma testing framework is an open-source test runner for JavaScript that runs on Node.js. It was earlier termed as Testacular. Karma test runner increases web developers daily-basis productivity & ensures their web app stays more robust by offering quick and easy automated testing. Karma is highly favored in the web developer community due to its outstanding plugin support and integrations with numerous renowned CI packages such as Jenkins, Travis, and Semaphore. It is highly configurable to provide web developers a testing environment where they can receive feedback, instantly from their piece of code.

<BrandName /> now integrates with Karma testing framework to boost your go-to market delivery. Perform automated cross browser testing with <BrandName /> to ensure your development code renders seamlessly through an online [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/) providing 3000+ real browsers running through machines, on cloud. Perform automation testing in parallel using <BrandName />’s Selenium Grid to drastically trim down your test cycles.

## Prerequisites
* * *
>All the code samples in this documentation can be found in the [Karma <BrandName /> Repository on <img src={require('../assets/images/GitHub_icon/github-icon.webp').default} alt="Image" width="25" height="25" /> GitHub](https://github.com/LambdaTest/angular-karma-sample). You can either download or clone the repository to quickly run your tests.



In order to perform tests with <BrandName /> using Karma testing framework, you would need the below things to be already set up:

**1. Global Dependencies**
* Make sure to use the latest version of JavaScript.
* A Git or GitHub repository
* Download and install node.js and node package manager or npm.
To install node.js with homebrew use the below command.

`$ brew install node`

* If you have npm already installed, you may want to upgrade it to latest version. Here the code you can run in your terminal to upgrade npm.

`npm install npm@latest -g`

* Install [Angular CLI](https://cli.angular.io/)(Command Line Interface) with the below command.

`$ npm install -g @angular/cli`

**2. <BrandName /> Authentication Credentials**

Be aware of your <BrandName /> authentication credentials i.e. your <BrandName /> username, access key and HubURL. You need to set them up as your environment variables. You can retrieve them from your [<BrandName /> automation dashboard](https://automation.lambdatest.com/) by clicking on the key icon near the help button.

* For Windows user:
```
set LT_USERNAME="YOUR_USERNAME"
set LT_ACCESS_KEY="YOUR ACCESS KEY"
```

* For macOS/Linux user:
```
export LT_USERNAME="YOUR_USERNAME"
export LT_ACCESS_KEY="YOUR ACCESS KEY"
```

## Getting Started With Karma Test Runner Installation By Creating A Sample Project
* * *
Clone the sample project from <BrandName /> GitHub repository by using the below command in your cmd/terminal.

`git clone https://github.com/LambdaTest/angular-karma-sample && cd angular-karma-sample`

Install the node.js dependencies and Karma CLI globally using the below command.

`npm install -g karma-cli && npm install`

> **Change Browsers & Framework For Sample Project:**
> If you wish to add more browsers or change the framework to something other than the one used in our Sample project then you can do so by editing the browser array/ framework array in the *karma.conf.js* file.

## Configuring <BrandName /> tunnel To Run Karma Tests With <BrandName />
* * *
To help you perform cross browser testing of your locally stored web pages, <BrandName /> provides an SSH(Secure Shell) tunnel connection with the name <BrandName /> tunnel. With <BrandName /> tunnel, you can execute a test your local Karma tests on cloud for performing automated cross browser testing on more than 2000 browsers offered by Selenium Grid on <BrandName />. So you make sure how well your changes look, even before your customers. Curious to know more about <BrandName /> tunnel?

> Follow our documentation on <BrandName /> tunnel to know it all. OS specific instructions to download and setup tunnel binary can be found at the following links.
> * [Documentation For Windows User](/docs/local-testing-for-windows/)
> * [Documentation For Mac User](/docs/local-testing-for-macos/)
> * [Documentation For Linux User](/docs/local-testing-for-linux/)

> Download the binary file of:
> * [<BrandName /> tunnel for Windows](https://downloads.lambdatest.com/tunnel/v3/windows/64bit/LT_Windows.zip)
> * [<BrandName /> tunnel for Mac](https://downloads.lambdatest.com/tunnel/v3/mac/64bit/LT_Mac.zip)
> * [<BrandName /> tunnel for Linux](https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip)

Once, the tunnel is successfully set up. You can add the below code to your capabilities for testing internal servers on your network.

`tunnel: true,`

## Integrating Your Karma Testing Framework With <BrandName />
* * *
To integrate Karma test runner with <BrandName /> you need to set up <BrandName /> authentication credentials **(access key & username)** as your environment variables in the ***karma.conf.js*** file.

Below is a sample config file for integrating Karma test runner with <BrandName />. You can use the sample file to test your own automation test suite by replacing the environment variables according to your need. All the code used for the demonstration of this topic can be find in our [GitHub repository for Karma](https://github.com/LambdaTest/angular-karma-sample).

``` js
// Karma testing framework configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
 
module.exports = function(config) {
    // Lambdatest grid hostname and port
 
    var webdriverConfig = {
        hostname: 'hub.lambdatest.com',
        port: 80
    }
    config.set({
        hostname: 'localhost', // hostname, where karma web server will run
        port: 9876,
        basePath: './',
 
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
 
        plugins: [
            'karma-jasmine',
            'karma-webdriver-launcher',
            'karma-jasmine-html-reporter',
            'karma-coverage-istanbul-reporter',
            require('@angular-devkit/build-angular/plugins/karma')
        ],
 
        client: {
            clearContext: false
        },
 
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, '../coverage/karma-sample'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
 
        captureTimeout: 600000,
        retryLimit: 1, 
        browserDisconnectTimeout: 90000,
        browserDisconnectTolerance: 1,
        browserNoActivityTimeout: 90000,
        reporters: ['progress', 'kjhtml'],
        colors: true,
        concurrency: 1,
        logLevel: config.LOG_DEBUG,
        browsers: ['chrome'],
 
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
                pseudoActivityInterval: 5000 // 5000 ms heartbeat
            }
        },
        singleRun: true,
        autoWatch: true
    });
};
```

After declaring the required environment variable, comes the time to execute your test using the below command.

karma start karma.conf.js

`karma start karma.conf.js`

If you wish to use Jenkins, then [follow this documentation](/docs/jenkins-with-testmu/).

## Parallel Testing
* * *

Parallel testing is one of the most in-demand feature of <BrandName /> Selenium Grid. By parallel testing, you can run more than one test case, simultaneously. This means that, parallel testing would allow you to execute numerous automation test cases altogether. So you execute a single test scenario across different browsers or could run different test scenarios across the same browser but with different browser versions.

To perform parallel testing, navigate to sample project "**angular-karma-sample**" and run the below command.

`$ ng test`

Monitor and analyze your test result ont the [<BrandName /> Automation Dashboard](https://automation.lambdatest.com/).

## Avoid Timeouts With psuedoActivityInterval
* * *
To make sure our machines are not hold for long due to some incorrect test, we have come up with a restriction on the number of seconds that our machine is kept reserved for you. In cases, where our servers fail to retrieve a request from your local machine for more than 90 seconds, then your tests are aborted from the queue with the error message related to Timeouts.

If you wish to avoid such timeouts, you need to make use of the below parameter:

``` js
customLaunchers: { chrome: {
 pseudoActivityInterval: 5000 // 5000 ms heartbeat to avoid timeouts
 } }
```

> **Note**: psuedoActivityInterval is presented as a default parameter with a value set to 0. Make sure to provide a value more than 0 in order to avoid the timeouts.

Deploy your code in a reliable manner at scale using Karma test runner integration with <BrandName />, and ensure it looks robust across every browser to provide a seamless user experience to all your visitors. Happy Testing!

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
        Karma Test Runner
      </span>
    </li>
  </ul>
</nav>
