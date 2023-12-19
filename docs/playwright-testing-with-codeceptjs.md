---
id: playwright-codeceptjs
title: Run Playwright Tests With CodeceptJS
hide_title: true
sidebar_label: Playwright testing With CodeceptJS 
description: Learn how to integrate and run Playwright tests with CodeceptJS across 40+ browser versions on the LambdaTest platform.
keywords:
 -  playwright testing with codeceptjs
  - playwright e2e testing with codeceptjs
  - playwright mobile testing with codeceptjs
  - playwright testing tool
  - playwright testing on lambdatest with codeceptjs
  - playwright testing lambdatest 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.lambdatest.com/support/docs/playwright-testing-with-codeceptjs/
site_name: LambdaTest
slug: playwright-testing-with-codeceptjs/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Playwright Testing With CodeceptJS",
          "item": "https://www.lambdatest.com/support/docs/playwright-testing-with-codeceptjs/"
        }]
      })
    }}
></script>

# Playwright Testing With CodeceptJS
* * *

CodeceptJS is a framework for testing websites and web applications across multiple backends. It run tests using libraries like Puppeteer, Protractor, and WebDriverIO. In also provides scenario driven testing, PageObjects support, extensive reports, and more.

LambdaTest allows you to run Playwright tests with CodeceptJS on a browser farm of 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing with CodeceptJS on the LambdaTest platform.

## Pre-requisites
***

>Note: All the code samples in this documentation can be found in the LambdaTest's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the LambdaTest-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests with CodeceptJS, you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

<img loading="lazy" src={require('../assets/images/playwright-testing/key.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


**Windows**

```js
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```js
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

4. To run the Playwright CodeceptJS tests on LambdaTest, you need make some tweaks in `codecept.conf.js` file.

```
Script needs to be added
```

4. Now pass the below command to run the test.

```
npx codeceptjs run
```

## View your CodeceptJS Playwright test results
***

The LambdaTest Automation Dashboard is where you can see the results of your CodeceptJS Playwright tests after running them on the LambdaTest platform. 


<img loading="lazy" src={require('../assets/images/playwright-testing/dashboard.webp').default} alt="Image" width="1444" height="703"  className="doc_img"/>


<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="https://www.lambdatest.com">
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
        Playwright Testing With CodeceptJS
      </span>
    </li>
  </ul>
</nav>