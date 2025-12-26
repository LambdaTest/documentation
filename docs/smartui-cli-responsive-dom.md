---
id: smartui-cli-responsive-dom
title: Capturing Responsive DOM with SmartUI SDK
sidebar_label: Capture Responsive DOM
description: In this documentation, learn how to capture responsive DOM by capturing multiple screenshots of the same DOM
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests

url: https://www.lambdatest.com/support/docs/smartui-cli-responsive-dom/
slug: smartui-cli-responsive-dom/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

---

If your application dynamically changes the DOM based on viewport size or specific breakpoints, SmartUI SDKs can be configured to adapt accordingly. When using the SmartUI CLI, the SDK captures the DOM state at the specified viewport size within the test browser, then renders it across the browsers and resolutions defined in your [configuration file](https://www.lambdatest.com/support/docs/smartui-sdk-config-options/).

Therefore, if your application adjusts DOM elements between different screen sizes, ensure that you resize the viewport of your test browser and capture a snapshot at each required width.

## Prerequisites

1. **SmartUI CLI Version:** Ensure you are using `@lambdatest/smartui-cli` version 4.1.43 or higher
2. **SDK Installation:** Install the **SDK** with the specified compatible version.
3. **Recommended Frameworks:** For optimal performance, use either Playwright or Selenium frameworks.

:::note
If you face any problems executing tests with SmartUI-CLI `versions >= v4.x.x`, upgrade your Node.js version to `v20.3` or above.
:::

## Steps to Use

### Step-1
Specify `delayedUpload` to true in your configuration file.

```json
"delayedUpload" : true
```

### Step-2

Resize your viewport according to your framework and take the screenshot. For example in **Selenium NodeJs**, you can do it as follows:

```js

        let options =
        {
            "web": {
                "browsers": [
                    "chrome",
                    "firefox",
                    "safari"
                ],
                "viewports": [[768]], //required resized dom viewport
            },
            ignoreDOM: {
                class: ["required-class"],
              }
        };
  await driver.manage().window().setSize(768, 1024);
  await smartuiSnapshot(driver, 'Screenshot Name', options);

  let mobileOptions=
        {
            "mobile": {
                "devices": [
                    "iPhone 14",
                    "Galaxy S23"
                ],
                "fullPage": true,
                "orientation": "portrait"
            },
            ignoreDOM: {
                class: ["nextAvailDate"],
              }
        };
    await driver.manage().window().setSize(360, 1024);
    await smartuiSnapshot(driver, 'Screenshot Name', mobileOptions);
```

>Note :: Any existing screenshots with same screenshot name,browser and resolution will get over-written.

## Things to keep in mind:

1. **Viewport and Browser Configuration:** You can set the viewport size or specify browsers for individual snapshots either globally in the configuration file or at the snapshot level based on your needs.
2. **Firefox Limitation:** Firefox can only capture snapshots at DOM widths of `450px` or larger due to resizing limitations.
3. **Chrome Resizing in Selenium:** In Selenium, Chrome’s viewport cannot be resized below `500px` due to a limitation in Selenium.

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-cli-responsive-dom/`
        }]
      })
    }}
></script>

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'> SmartUI Responsive DOM </span>
    </li>
  </ul>
</nav>
