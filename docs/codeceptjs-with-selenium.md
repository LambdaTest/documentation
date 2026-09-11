---
id: codeceptjs-with-selenium
title: CodeceptJS With Selenium - Run Tests on TestMu AI
hide_title: true
sidebar_label: CodeceptJS
description: Run CodeceptJS Selenium tests on TestMu AI's cloud grid across 3000+ browsers and OS. Use codeceptjs-lambdatest-service to auto-sync test names and statuses.
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/codeceptjs-with-selenium/"
    },
    "headline": "CodeceptJS With Selenium - Run Tests on TestMu AI",
    "description": "Run CodeceptJS Selenium tests on TestMu AI's cloud grid across 3000+ browsers and OS. Use codeceptjs-lambdatest-service to auto-sync test names and statuses.",
    "url": "https://www.testmuai.com/support/docs/codeceptjs-with-selenium/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "codeceptjs selenium",
      "codeceptjs lambdatest",
      "codeceptjs selenium grid"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "codeRepository": "https://github.com/LambdaTest/lambdatest-codeceptjs-sample",
        "text": "git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample.git\ncd lambdatest-codeceptjs-sample"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "set LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nset LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 4",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LT_USERNAME=\"YOUR_LAMBDATEST_USERNAME\"\nexport LT_ACCESS_KEY=\"YOUR_LAMBDATEST_ACCESS_KEY\""
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 5",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "codeRepository": "https://github.com/LambdaTest/codeceptjs-lambdatest-service",
        "text": "\n:::note\nUse the **[<BrandName /> Capabilities Generator](https://www.testmuai.com/capabilities-generator/)** to generate the `desiredCapabilities` object for any browser, OS, or device combination.\n:::\n\n## Use the codeceptjs-lambdatest-service\n\n---\n\nThe [codeceptjs-lambdatest-service](https://github.com/LambdaTest/codeceptjs-lambdatest-service) package is a CodeceptJS helper that automatically syncs test names and test results with <BrandName /> after each test run. It uses CodeceptJS's built-in `_passed` and `_failed` hooks to push the outcome to the <BrandName /> platform in real time.\n\n### Install the Package\n\nThe package is included as a dev dependency in the sample repo. To add it to your own project:\n\n```bash\nnpm install codeceptjs-lambdatest-service --save-dev"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Add the LTHelper block inside the helpers section of codecept.conf.js",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "helpers: {\n  // ... your WebDriver helper config\n\n  LTHelper: {\n    require: 'codeceptjs-lambdatest-service',\n    user: process.env.LT_USERNAME,\n    key: process.env.LT_ACCESS_KEY,\n    updateTestName: true\n  }\n}"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Test Name Updates",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nThe session will appear on the dashboard as **test something** under the **GoogleTest** feature.\n\n### Test Status Updates\n\nThe service uses the `_passed` and `_failed` hooks to mark each session as **Passed** or **Failed** on <BrandName /> immediately after the test finishes. This is required for accurate status reporting on the dashboard - without it, all sessions show as **Unknown** regardless of the actual result.\n\nNo additional configuration is needed beyond adding `LTHelper` to your helpers.\n\n## Run Your Tests\n\n---\n\n**Run desktop tests:**\n\n```bash\nnpm test\n# or\nnpm run test:desktop"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "or",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "npx codeceptjs run --steps googleTest_test.js"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# CodeceptJS With Selenium

---

CodeceptJS is a modern end-to-end testing framework with a human-readable syntax. It supports Selenium via the WebDriver helper, making it straightforward to run browser automation tests on TestMu AI cloud Selenium Grid across 10,000+ browser/device combinations.

## Prerequisites

---

1. You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or clone the CodeceptJS Selenium sample from the <BrandName /> GitHub repository to run the tests.

<a href="https://github.com/LambdaTest/lambdatest-codeceptjs-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

<VerifiedTag value="Verified" />

```bash
git clone https://github.com/LambdaTest/lambdatest-codeceptjs-sample.git
cd lambdatest-codeceptjs-sample
```

2. Install the dependencies.

<VerifiedTag value="Verified" />

```bash
npm install
```

3. Get your <BrandName /> username and access key from your <BrandName /> Profile > Account Settings > Password & Security.

<img loading="lazy" src={require('../assets/images/auth_lt.png').default} alt="Access Key on TestMu AI Automation Dashboard" width="1444" height="703" className="doc_img"/>

4. Set your credentials as environment variables.

**Windows**

<VerifiedTag value="Verified" />

```bash
set LT_USERNAME="YOUR_LAMBDATEST_USERNAME"
set LT_ACCESS_KEY="YOUR_LAMBDATEST_ACCESS_KEY"
```

**macOS/Linux**

<VerifiedTag value="Verified" />

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

:::note
Use the **[<BrandName /> Capabilities Generator](https://www.testmuai.com/capabilities-generator/)** to generate the `desiredCapabilities` object for any browser, OS, or device combination.
:::

## Use the codeceptjs-lambdatest-service

---

The [codeceptjs-lambdatest-service](https://github.com/LambdaTest/codeceptjs-lambdatest-service) package is a CodeceptJS helper that automatically syncs test names and test results with <BrandName /> after each test run. It uses CodeceptJS's built-in `_passed` and `_failed` hooks to push the outcome to the <BrandName /> platform in real time.

### Install the Package

The package is included as a dev dependency in the sample repo. To add it to your own project:

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

```bash
npm test
# or
npm run test:desktop
```

**Run a specific test file:**

<VerifiedTag value="Verified" />

```bash
npx codeceptjs run --steps googleTest_test.js
```

## View Test Results

---

Visit the **[<BrandName /> Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build)** to view your test results. Each test session shows:

- Test name (synced from your scenario title via `codeceptjs-lambdatest-service`)
- Pass/fail status
- Video recording, screenshots, and network/console logs
- Build grouping based on the `build` capability


<img loading="lazy" src={require('../assets/images/codeceptjs-test-execution.png').default} alt="CodeceptJS test results on TestMu AI Automation Dashboard" width="1281" height="721" className="doc_img"/>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.testmuai.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.testmuai.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">CodeceptJS With Selenium</span>
    </li>
  </ul>
</nav>
