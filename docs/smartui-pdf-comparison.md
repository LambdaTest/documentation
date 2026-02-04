---
id: smartui-pdf-comparison
title: SmartUI Visual Regression Testing for PDF Files
sidebar_label: PDF Testing
description: In this documentation, learn how to perform Visual Regression testing of PDFs using SmartUI.
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
url: https://www.testmuai.com/support/docs/smartui-pdf-comparison/
site_name: LambdaTest
slug: smartui-pdf-comparison/
canonical: https://www.testmu.ai/support/docs/smartui-pdf-comparison/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "SmartUI PDF Comparison",
          "item": `${BRAND_URL}/support/docs/smartui-pdf-comparison/`
        }]
      })
    }}
></script>

:::caution
This functionality is exclusive to our enterprise plan subscribers on SmartUI. For additional details or inquiries, please [contact us](https://www.lambdatest.com/demo).
:::

## Prerequisites for Using SmartUI

- Familiarity with HTTP APIs is essential.
- Visit the [`TestMu AI SmartUI`](https://smartui.lambdatest.com/) page and log in with your credentials.
- Obtain your `LT_USERNAME` and `LT_ACCESS_KEY` by clicking on the `Access Key` button, located at the top right corner of your dashboard.

In the following section, we will walk you through the process of conducting your first Visual Regression test using <BrandName />'s SmartUI platform.

<div className='ytframe'>
<div className='youtube' data-embed="H91z4j5_JvQ">
    <div className='play-button'></div>
</div>
</div>

## Getting Started with PDF Comparison

<div className='storylane-iframe'>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className='sl-embed'>
    <iframe loading="lazy" className='sl-demo' src="https://app.storylane.io/demo/czorj4fbzohf?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Step 1: Establishing a SmartUI Project

To initiate a SmartUI PDF Comparison Project, adhere to the following instructions:

1. Navigate to the [SmartUI Projects Page](https://smartui.lambdatest.com/).
2. Tap on the `new project` button.
3. Specify your platform type as `PDF`.
4. Provide your `project` name, designate `approvers`, and add `tags` (optional).
5. Confirm your entry by clicking on **Submit**.

Once your project is active, retrieve your `Project Token` from the application. Here's an example of a project token:

```bash
projectToken = "123456#1234abcd-****-****-****-************"
```

## Upload Methods

SmartUI provides three different methods to upload PDFs for visual regression testing. Choose the method that best fits your workflow:

<div className='support_main'>
  <a href="/support/docs/smartui-pdf-api-upload/">
    <div className='support_inners'>
      <h3>API Upload</h3>
      <p>Upload PDFs using REST API for programmatic integration and automation.</p>
    </div>
  </a>
  <a href="/support/docs/smartui-pdf-cli-upload/">
    <div className='support_inners'>
      <h3>CLI Upload</h3>
      <p>Upload PDFs using command-line interface for quick testing and CI/CD integration.</p>
    </div>
  </a>
  <a href="/support/docs/smartui-pdf-java-sdk/">
    <div className='support_inners'>
      <h3>Java SDK Upload</h3>
      <p>Upload PDFs using Java SDK for enterprise applications and test automation frameworks.</p>
    </div>
  </a>
</div>

:::note
Only files in `.pdf` format are compatible with this feature.
:::

## Use Cases of Smart PDF Comparison

- **Software Documentation**: Track changes and ensure consistency across document versions.
- **Legal & Compliance**: Spot differences in contracts or regulatory documents.
- **Design Validation**: Verify design updates and maintain visual consistency.
- **Proofreading**: Detect edits between document versions for quick review.
- **Quality Assurance**: Compare specs or blueprints to uphold standards.
- **Archiving**: Confirm integrity of records over time by highlighting modifications.
