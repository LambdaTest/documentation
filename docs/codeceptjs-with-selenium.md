---
id: codeceptjs-with-selenium
title: CodeceptJS With Selenium - Run Tests on TestMu AI
hide_title: true
sidebar_label: JavaScript - CodeceptJS
description: Run your CodeceptJS Selenium tests on TestMu AI's cloud grid across 3000+ real browsers, devices, and operating systems. Use the codeceptjs-lambdatest-service to sync test names and statuses automatically.
keywords:
  - codeceptjs selenium
  - codeceptjs lambdatest
  - codeceptjs selenium grid
  - codeceptjs webdriver
  - codeceptjs automation testing
  - run codeceptjs tests on lambdatest
  - codeceptjs-lambdatest-service
  - test name update codeceptjs
  - test status update codeceptjs
  - selenium automation with codeceptjs
url: https://www.testmuai.com/support/docs/codeceptjs-with-selenium/
site_name: TestMu AI
slug: codeceptjs-with-selenium/
canonical: https://www.testmuai.com/support/docs/codeceptjs-with-selenium/
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
          "name": "CodeceptJS With Selenium",
          "item": `${BRAND_URL}/support/docs/codeceptjs-with-selenium/`
        }]
      })
    }}
></script>

# CodeceptJS With Selenium

---

[CodeceptJS](https://codecept.io/) is a modern end-to-end testing framework with a human-readable syntax. It supports Selenium via the WebDriver helper, making it straightforward to run browser automation tests on <BrandName />'s cloud Selenium Grid across 3000+ browser and OS combinations.

## Prerequisites

---

:::tip Sample repo
Download or clone the CodeceptJS Selenium sample from the <BrandName /> GitHub repository to run the tests.



1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

<a href="https://github.com/LambdaTest/lambdatest-codeceptjs-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

```bash
git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample.git
cd lambdatest-codeceptjs-sample
```

2. Install the dependencies.

```bash
npm install
```

3. Retrieve your <BrandName /> username and access key from your TestMu AI Profile > Account Settings > Password & Security.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Access Key on TestMu AI Automation Dashboard" width="1444" height="703" className="doc_img"/>

4. Set your credentials as environment variables.

**Windows**

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

```bash
export LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
export LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

## Configure CodeceptJS for TestMu AI

---

The `codecept.conf.js` file connects your tests to the <BrandName /> Selenium Grid using the `WebDriver` helper. Set `host` to `hub.lambdatest.com` and pass your credentials via environment variables.

```js title="codecept.conf.js"
exports.config = {
  tests: './*_test.js',
  output: './output',

  helpers: {
    WebDriver: {
      url: 'http://google.com/ncr',
      browser: 'chrome',
      host: 'hub.lambdatest.com',
      port: 80,
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,

      desiredCapabilities: {
        name: '[CodeceptJS] Automation Sample',
        build: '[CodeceptJS] Automation Sample',
        platformName: 'Windows 11',
        browserName: 'Chrome',
        browserVersion: 'dev'
      }
    },

    LTHelper: {
      require: 'codeceptjs-lambdatest-service',
      user: process.env.LT_USERNAME,
      key: process.env.LT_ACCESS_KEY,
      updateTestName: true
    }
  },

  include: {
    I: './steps_file.js'
  },

  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS'
}
```

### Capability Reference

Use the **[<BrandName /> Capabilities Generator](https://www.lambdatest.com/capabilities-generator/)** to generate the `desiredCapabilities` object for any browser, OS, or device combination.

## Use the codeceptjs-lambdatest-service

---

The `codeceptjs-lambdatest-service` package is a CodeceptJS helper that automatically syncs test names and test results with <BrandName /> after each test run. It uses CodeceptJS's built-in `_passed` and `_failed` hooks to push the outcome to the <BrandName /> platform in real time.

### Install the Package

The package is included as a dev dependency in the sample repo. To add it to your own project:

```bash
npm install codeceptjs-lambdatest-service --save-dev
```

### Add the LTHelper to Your Config

Add the `LTHelper` block inside the `helpers` section of `codecept.conf.js`:

```js
helpers: {
  // ... your WebDriver helper config

  LTHelper: {
    require: 'codeceptjs-lambdatest-service',
    user: process.env.LT_USERNAME,
    key: process.env.LT_ACCESS_KEY,
    updateTestName: true
  }
}
```

### Test Name Updates

When `updateTestName: true` is set, the service reads the CodeceptJS scenario title and updates the test name on <BrandName /> dynamically. This means each test in the <BrandName /> Automation Dashboard reflects the exact scenario name from your test file instead of the default session name.

For example, if your test is:

```js title="googleTest_test.js"
Feature('GoogleTest');

Scenario('test something', async ({ I }) => {
  await I.amOnPage('http://google.com/ncr');
  await I.seeInTitle('Google');
});
```

The session will appear on the dashboard as **test something** under the **GoogleTest** feature.

### Test Status Updates

The service uses the `_passed` and `_failed` hooks to mark each session as **Passed** or **Failed** on <BrandName /> immediately after the test finishes. This is required for accurate status reporting on the dashboard - without it, all sessions show as **Unknown** regardless of the actual result.

No additional configuration is needed beyond adding `LTHelper` to your helpers.

## Run Your Tests

---

**Run desktop tests:**

```bash
npm test
# or
npm run test:desktop
```

**Run a specific test file:**

```bash
npx codeceptjs run --steps googleTest_test.js
```

## View Test Results

---

Visit the **[<BrandName /> Web Automation Dashboard](https://automation.lambdatest.com/build)** to view your test results. Each test session shows:

- Test name (synced from your scenario title via `codeceptjs-lambdatest-service`)
- Pass/fail status
- Video recording, screenshots, and network/console logs
- Build grouping based on the `build` capability


<img loading="lazy" src={require('../assets/images/codeceptjs-test-execution.png').default} alt="CodeceptJS test results on TestMu AI Automation Dashboard" width="1281" height="721" className="doc_img"/>

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
      <span className="breadcrumbs__link">CodeceptJS With Selenium</span>
    </li>
  </ul>
</nav>
