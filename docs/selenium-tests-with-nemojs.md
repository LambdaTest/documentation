---
id: selenium-tests-with-nemojs
title: Run Selenium Tests With NemoJS | TestMu AI
hide_title: true
sidebar_label: NemoJS
description: This document will help you run Selenium automated tests with NemoJS across 3000+ browsers and operating systems on TestMu AI cloud Selenium Grid.
keywords:
- nemo selenium
- nemojs selenium
- nemojs automation testing
- nemojs automation framework
url: https://www.testmu.ai/support/docs/selenium-tests-with-nemojs/
site_name: LambdaTest
slug: selenium-tests-with-nemojs/
canonical: https://www.testmu.ai/support/docs/selenium-tests-with-nemojs/
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
          "name": "Selenium NemoJS Test",
          "item": `${BRAND_URL}/support/docs/selenium-tests-with-nemojs/`
        }]
      })
    }}
></script>

# Run Selenium Tests With NemoJS
* * *

NemoJS is an open-source NodeJS automation framework developed by PayPal. Nemo makes it easy to integrate Selenium automation into your NodeJS web projects.

This document will help you run Selenium automated tests with NemoJS on <BrandName /> cloud [Selenium Grid](https://www.lambdatest.com/blog/why-selenium-grid-is-ideal-for-automated-browser-testing/). You can run NemoJS automated test cases across 3000+ different browsers and operating systems.

## Prerequisites
* * *
>
All the code samples in this documentation can be found in the [NemoJS <BrandName /> Repository on <img src={require('../assets/images/GitHub_icon/github-icon.webp').default} alt="Image" width="25" height="25" /> GitHub](https://github.com/LambdaTest/Nemo-Lambdatest-sample). You can either download or clone the repository to quickly run your tests.

Before starting running your Selenium tests with NemoJS, ensure you have the following things configured.

1. Make sure you have NodeJS installed. You can install it from the official [NodeJS website](https://nodejs.org/en/#home-downloadhead). You can also install NodeJS by running the following command in the terminal.

``` js
$ brew install node
```

2. Run the below command to download npm.

``` js
$ npm init
```

3. To download NemoJS, run the following command in the terminal.

``` js
$ npm install --save-dev nemo
```

4. To run your Selenium tests with NemoJS, you would need to set your <BrandName /> username and access key in the environment variables. To get it, visit [Automation Dashboard](https://automation.lambdatest.com/) and click on the Key button from the top-right.

**For Windows:**

``` js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**For Mac/Linux:**

``` js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

5. Install the dependencies by executing the following command.

``` js
npm install
```

6. Set the environment variables in `nemo.config.js` file with your <BrandName /> Username and Access Key.

## Running The Single Test Case With NemoJS
* * *

To run your single test case with NemoJS on <BrandName />, let’s understand our test case scenario, the below Nemo.js automation script will test a sample to-do list app. The code marks two list items as done, adds a list item, and then outputs the total number of pending items.

``` js
//nemo.test.js file
const assert = require('assert');
var status = "";
describe('@firstTest@', function () {
  before(async function () {
    this.nemo.driver.executeScript("lambda-name=sample-todo-app-test");
  });
  after(async function () {
    this.nemo.driver.executeScript("lambda-status=" + status);  
  });
  it('should load a website', async function () {
    this.nemo.driver.manage().timeouts().implicitlyWait(5000);
    await this.nemo.driver.get(this.nemo.data.baseUrl);
    await this.nemo.driver.get("https://lambdatest.github.io/sample-todo-app/");
    await this.nemo.view._waitVisible('name:li1', 5000);
    this.nemo.view._find('name:li1').click();
    this.nemo.view._find('name:li2').click();
    this.nemo.view._find('id:sampletodotext').sendKeys("Yey, Let's add it to list");
    this.nemo.view._find('id:addbutton').click();
    await this.nemo.view._waitVisible('name:li6', 5000);
    var page_title = this.nemo.driver.getTitle();
    if (page_title === "Sample page - lambdatest.com"){
      status = "passed";
    }
    else {
      status = "failed";
    }
  });
});
```

To run the single test, execute the below command in the terminal.

``` js
npx nemo -P chrome
```

## Running The Parallel Tests With NemoJS
* * *

<BrandName /> Selenium Grid allows you to perform parallel testing across 3000+ browsers and OS to automate your several test cases simultaneously. You can execute a single test case across various browsers, or you can run multiple test case scenarios across the same browser but with different browser versions.

Below is the code sample for the Parallel tests. In this code, we will test our Sample to-do app in three browser versions and operating systems.

``` js
//nemo.config.js file
const path = require('path');

module.exports = {
  plugins: {
    view: {
      module: 'nemo-view'
    }
  },
  output: {
    reports: path.resolve('test/functional', 'report')
  },
  profiles: {
    base: {
      tests: path.resolve('test/functional', '*test.js'),
      "driver": {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Chrome",
            "version" : "89.0",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      data: {
        baseUrl: 'https://www.google.com'
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    chrome: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Chrome",
            "version" : "latest",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    chrome_2: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 7",
            "browserName" : "Chrome",
            "version" : "83.0",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    },
    firefox: {
      driver: {
        "builders": {
          "usingServer": [ "http://hub.lambdatest.com/wd/hub" ],
          "withCapabilities": [{
            "build": "LT Nemo Sample Tests",
            "name": "LT Nemo sample test",
            "platform" : "Windows 10",
            "browserName" : "Firefox",
            "version" : "latest",
            "user": "env:LT_USERNAME",
            "accessKey": "env:LT_ACCESS_KEY"

          }]
        }
      },
      mocha: {
        timeout: 180000,
        reporter: 'mochawesome',
        reporterOptions: {
          quiet: true
        }
      }
    }
  }
}
```

Now run the below command to run the parallel tests.

``` js
npx nemo -P chrome,chrome_2,firefox
```

>
That’s all! You have successfully performed your Selenium tests with Nemo.js. In case you come across any doubts, feel free to reach out through our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24/7 chat support**</span> or you can also drop a mail to [support@testmuai.com](mailto:support@testmuai.com). <br/>Happy testing!

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
        Selenium NemoJS Test
      </span>
    </li>
  </ul>
</nav>
