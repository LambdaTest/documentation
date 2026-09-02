---
id: smart-wait
title: SmartWait Functionality for Selenium Automation
sidebar_label: Enable SmartWait
description: Use SmartWait to run actionability checks before each Selenium action, reducing explicit waits and flaky tests.
keywords:
  - smartwait selenium actionability checks
  - reduce explicit waits selenium
  - smart wait retry delay configuration
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/smart-wait/
site_name: TestMu AI
slug: smart-wait/
canonical: https://www.testmuai.com/support/docs/smart-wait/
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
          "name": "SmartWait Functionality",
          "item": `${BRAND_URL}/support/docs/smart-wait/`
        }]
      })
    }}
></script>

With TestMu AI's SmartWait feature, you can increase the efficiency and accuracy of automated test execution. Before performing any action on a webpage element, SmartWait conducts a series of actionability checks. It holds off on performing an action until all relevant checks pass. If the checks do not pass within a set timeframe, it returns the appropriate Selenium error message.

You can use this feature to reduce the amount of code dedicated to explicit/implicit waits in your test suite, making it easier to read and maintain.

> **Note:** The **SmartWait** functionality is fully supported on HyperExecute as well, allowing you to leverage intelligent wait handling during parallel and distributed test executions.

## How SmartWait Can Help You
---

SmartWait improves your test automation workflow in multiple ways.

- **Increased Accuracy**: SmartWait ensures that actions are only executed on elements that are ready and actionable, increasing the accuracy of your test results.
- **Code Optimization**: Your test scripts will have fewer explicit and implicit wait commands, making them easier to read and maintain.
- **Enhanced Efficiency**: Your test suite becomes more efficient by eliminating unnecessary waits and performing actions as soon as the elements are ready.
- **Intelligent Error Handling**: When actionability checks fail, SmartWait returns the relevant Selenium error, helping you identify and resolve issues more quickly.

## How to Use SmartWait Functionality
---

Follow the below steps to configure SmartWait for your tests.

1. **Set SmartWait Time Limit:** Specify the maximum amount of time you want your test script to wait until an element becomes actionable.

```javascript
LT:Options {
...
"smartWait": 10 // It accepts integer values as second
"smartWaitRetryDelay": 1
...
}
```

:::info
- Min value of `smartWait` is 5 seconds and max is 120 seconds, default being 1 seconds.
- The capability `smartWaitRetryDelay` to define the time interval of retries. If not provided, default interval of 1 second is considered.
- Min value of `smartWaitRetryDelay` is 1 second and max is 4 seconds, default being 1 second.
:::

2. **Execute Test Suite:** Run your test suite as usual. SmartWait automatically performs actionability checks before each action on a webpage element.

3. **View Test Results:** Review your results after execution. SmartWait returns the relevant Selenium error message if any actionability checks failed within the set timeframe.

TestMu AI's SmartWait feature enhances automated testing by intelligently managing wait times and ensuring actions execute at the most opportune time.

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
        SmartWait Functionality
      </span>
    </li>
  </ul>
</nav>
