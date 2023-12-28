---
id: playwright-jest
title: Run Playwright Tests With Jest
hide_title: true
sidebar_label: Playwright Testing With Jest
description: Learn how to integrate and run Playwright tests with Jest across 40+ browser versions on the LambdaTest platform.
keywords:
 -  playwright testing with jest
  - playwright e2e testing with jest
  - playwright mobile testing with jest
  - playwright testing tool
  - playwright testing on lambdatest with jest
  - playwright testing lambdatest 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.lambdatest.com/support/docs/playwright-testing-with-jest/
site_name: LambdaTest
slug: playwright-testing-with-jest/
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
          "name": "Playwright Testing With Jest",
          "item": "https://www.lambdatest.com/support/docs/playwright-testing-with-jest/"
        }]
      })
    }}
></script>

# Playwright Testing With Jest
* * *

Jest is a Facebook-maintained framework for developing frontend and backend unit tests in JavaScript and executing end-to-end testing using Playwright. It provides you with the flexibility to target a single test, delivering structured output, or an entire suite for common assertions.

LambdaTest allows you to run Playwright tests with Jest on a browser farm of 40+ real browsers and operating system combinations. This guide will cover the basics of getting started with Playwright testing with Jest on the LambdaTest platform.

## Pre-requisites
***

>Note: All the code samples in this documentation can be found in the LambdaTest's Repository on GitHub. You can either download or clone the repository to quickly run your tests.
<a href="https://github.com/LambdaTest/playwright-sample/" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image"  className="doc_img"/> View on GitHub</a>

1. Clone the LambdaTest-Playwright repository on your system.

2. Install the npm dependencies.

```
npm install
```

3. In order to run your Playwright tests with Jest, you will need to set your LambdaTest username and access key in the environment variables. Click the **Access Key** button at the top-right of the Automation Dashboard to access it.

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

4. To run the Playwright CodeceptJS tests on LambdaTest, you need make some tweaks in `jest.conf.js` file.

```
Script needs to be added
```

5. Pass the below command to run the test.

```
jest
```

## View your Jest Playwright test results
***

The LambdaTest Automation Dashboard is where you can see the results of your Jest Playwright tests after running them on the LambdaTest platform. 


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
        Playwright Testing With Jest
      </span>
    </li>
  </ul>
</nav>