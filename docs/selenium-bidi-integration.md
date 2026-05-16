---
id: selenium-bidi-integration
title: BiDi Testing with Selenium WebDriver on TestMu AI
sidebar_label: Use Selenium BiDi Protocol
description: Run BiDi tests with Selenium WebDriver on the cloud grid for event-driven, cross-browser automation.
keywords:
  - selenium bidi protocol testing
  - webdriver bidi cross browser
  - bidi event driven automation
  - webdriverio bidi lambdatest
  - selenium bidirectional communication
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/selenium-bidi-integration/
site_name: TestMu AI
slug: selenium-bidi-integration/
canonical: https://www.testmuai.com/support/docs/selenium-bidi-integration/
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
          "name": "Knowledge Base",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Selenium BiDi Testing",
          "item": `${BRAND_URL}/support/docs/selenium-bidi-integration/`
        }]
      })
    }}
></script>
Selenium WebDriver BiDi is a W3C standard protocol used to establish communication between a test script and a remote WebDriver server. It introduces bi-directional communication, meaning both the script and the browser can send requests and responses, leading to a more dynamic and reactive testing experience.

> BiDi is compatible with **Chrome**, **Firefox**, and **Edge** browsers. For more information, refer to the [documentation](https://wpt.fyi/results/webdriver/tests/bidi?label=stable&label=master&aligned).

## Why Use WebDriver BiDi Protocol?
---
BiDi provides event-driven, bi-directional communication for more adaptable cross-browser automation.

There are several reasons to use BiDi testing with Selenium WebDriver on TestMu AI:

- **Better Test Maintainability:** Traditional WebDriver relies on a request-response model, where the test script dictates every action. BiDi introduces a standardized protocol, making your tests less vulnerable to breaking due to browser version changes. This reduces maintenance overhead as your tests adapt more gracefully to browser updates.

- **Expanded Automation Capabilities:** BiDi's key strength lies in its bi-directional communication and event-driven architecture. This allows for a more dynamic and responsive testing experience compared to the traditional approach. Your tests can react to events happening within the browser itself, leading to more adaptable automation.

- **Cross-Browser Support:** BiDi is a W3C standard, meaning it strives for consistent implementation across different browsers. This eliminates the need to write and maintain separate test scripts for each browser. With the TestMu AI browser grid, you can use BiDi for wider test coverage with a single, unified test suite.

- **Fine-Grained Control over Browser Interactions:** BiDi offers access to lower-level browser functionalities that were not available with traditional WebDriver. You can now interact with browser features like console logs and network traffic, providing finer control over the testing process. This is useful for debugging complex test scenarios or monitoring browser behavior in detail.

- **Future-Proofing Your Test Suite:** BiDi represents the future of web browser automation. By adopting BiDi early on, you future-proof your test suite and ensure compatibility with upcoming browser advancements that use this protocol.

## Steps to Run Tests
---
Set up and run BiDi tests using WebdriverIO on the cloud grid.

Follow these steps to run tests on TestMu AI using **WebdriverIO with BiDi Protocol**:

### Prerequisites
1. Install Node.js >= 12.
2. Get your TestMu AI [Username and Access Key](https://accounts.lambdatest.com/dashboard).

### Step 1: Set Up the Project

You can use your own project to configure and test it. For demo purposes, we use the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Selenium WebdriverIO BiDi from the TestMu AI GitHub repository to run the tests.

<a href="https://github.com/4DvAnCeBoY/wdio-bidi-tests" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

Install all the necessary dependencies of the project by running the following command:

```bash
npm install
```

### Step 2: Set Up Your Credentials

1. Create a `.env` file in the root folder of your project.
2. Add your TestMu AI [Username and Access Key](/support/docs/using-environment-variables-for-authentication-credentials/) in place of `<YOUR_USERNAME>` and `<YOUR_ACCESS_KEY>`.

```yaml
LT_USERNAME = <YOUR_USERNAME>
LT_ACCESS_KEY = <YOUR_ACCESS_KEY>
```

### Step 3: Trigger the Tests

1. Pass the `webSocketUrl` as true in the `wdio.lambdatest.conf.js` file to enable BiDi support.

  ```yaml
  webSocketUrl: true
  ```

2. Run the following command in your terminal to trigger the tests on TestMu AI platform using the specified configuration.

  ```bash
  npm run wdio
  ```

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
        BiDi Testing with Selenium WebDriver on TestMu AI
      </span>
    </li>
  </ul>
</nav>
