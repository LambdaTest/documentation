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

url: https://www.testmuai.com/support/docs/smartui-cli-responsive-dom/
slug: smartui-cli-responsive-dom/
canonical: https://www.testmuai.com/support/docs/smartui-cli-responsive-dom/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

---

If your application dynamically changes the DOM based on viewport size or specific breakpoints, SmartUI SDKs can be configured to adapt accordingly. When using the SmartUI CLI, the SDK captures the DOM state at the specified viewport size within the test browser, then renders it across the browsers and resolutions defined in your [configuration file](/support/docs/smartui-sdk-config-options/).

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
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-cli-responsive-dom/`
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
      "@id": "https://www.testmuai.com/support/docs/smartui-cli-responsive-dom/"
    },
    "headline": "Capturing Responsive DOM with SmartUI SDK",
    "description": "In this documentation, learn how to capture responsive DOM by capturing multiple screenshots of the same DOM",
    "url": "https://www.testmuai.com/support/docs/smartui-cli-responsive-dom/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "Visual Regression",
      "Visual Regression Testing Guide",
      "Visual Regression Test Automation"
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
        "name": "Step-1",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JSON",
        "text": "\"delayedUpload\" : true"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For example in Selenium NodeJs, you can do it as follows",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "\n        let options =\n        {\n            \"web\": {\n                \"browsers\": [\n                    \"chrome\",\n                    \"firefox\",\n                    \"safari\"\n                ],\n                \"viewports\": [[768]], //required resized dom viewport\n            },\n            ignoreDOM: {\n                class: [\"required-class\"],\n              }\n        };\n  await driver.manage().window().setSize(768, 1024);\n  await smartuiSnapshot(driver, 'Screenshot Name', options);\n\n  let mobileOptions=\n        {\n            \"mobile\": {\n                \"devices\": [\n                    \"iPhone 14\",\n                    \"Galaxy S23\"\n                ],\n                \"fullPage\": true,\n                \"orientation\": \"portrait\"\n            },\n            ignoreDOM: {\n                class: [\"nextAvailDate\"],\n              }\n        };\n    await driver.manage().window().setSize(360, 1024);\n    await smartuiSnapshot(driver, 'Screenshot Name', mobileOptions);"
      }
    ],
    "dateModified": "2026-02-03T20:41:06+05:30"
  }) }}
/>

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
