---
id: playwright-lighthouse-library
title: How to Generate Lighthouse Reports With Playwright on TestMu AI
hide_title: true
toc_max_heading_level: 2
sidebar_label: "Playwright Lighthouse Library"
description: Generate Lighthouse performance, accessibility, SEO, and best practices reports with the Playwright Lighthouse Library on TestMu AI, including authenticated pages.
keywords:
- generate lighthouse reports with playwright on testmu ai
- playwright lighthouse library
- playwright performance testing
- lighthouse audit for authenticated pages
url: https://www.testmuai.com/support/docs/playwright-lighthouse-library/
site_name: TestMu AI
slug: playwright-lighthouse-library/
canonical: https://www.testmuai.com/support/docs/playwright-lighthouse-library/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Generating Lighthouse Reports With Playwright Lighthouse Library",
          "item": `${BRAND_URL}/support/docs/playwright-lighthouse-library/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-lighthouse-library/"
    },
    "headline": "How to Generate Lighthouse Reports With Playwright on TestMu AI",
    "description": "Generate Lighthouse performance, accessibility, SEO, and best practices reports with the Playwright Lighthouse Library on TestMu AI, including authenticated pages.",
    "url": "https://www.testmuai.com/support/docs/playwright-lighthouse-library/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "generate lighthouse reports with playwright on testmu ai",
      "playwright lighthouse library",
      "playwright performance testing",
      "lighthouse audit for authenticated pages"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Ensure that you have the Playwright Lighthouse Library installed in your web project.; Export the LIGHTHOUSE_LAMBDATEST environment variable to your project environment.",
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
        "text": "npm install playwright-lighthouse"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "export LIGHTHOUSE_LAMBDATEST='true'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Write Your Test Script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({\n  action: 'lighthouseReport',\n  arguments: { url: 'https://www.example.com' }\n})}`)"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate Reports for Authenticated Pages (Windows)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ \n  action: 'lighthouseReport', \n  arguments: { url: 'https://www.example.com', \n  args: `--extra-headers \n  ${JSON.stringify({ authtoken: \"YOUR_AUTH_TOKEN\" })}` \n} })}` ); "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate Reports for Authenticated Pages (macOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ \n  action: 'lighthouseReport', \n  arguments: { url: 'https://www.example.com', \n  args: '--extra-headers \n  \"{\\\\\"authtoken\\\\\": \\\\\"YOUR_AUTH_TOKEN\\\\\"}\"' \n} })}`);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run Your Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "node RELATIVE_PATH_OF_YOUR_TEST_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# How to Generate Lighthouse Reports With Playwright on TestMu AI
***

If you run Playwright tests and want to measure page quality in the same run, you can generate Lighthouse reports on TestMu AI without a separate audit step. A Lighthouse report scores performance, accessibility, SEO, and best practices using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), the open-source auditing tool from Google. You add the Playwright Lighthouse Library to your project and call the `lighthouseReport` action from within a test to produce the report on the cloud machine.

> Lighthouse reports are supported on **Chrome**, **MicrosoftEdge**, and **Chromium** browsers.

:::tip Sample repository
The code sample for generating Lighthouse performance metrics in a Playwright test is available in the TestMu AI GitHub repository. Download or clone the repository to run the tests as shown. <a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="GitHub icon linking to the TestMu AI Playwright Lighthouse sample script" className="doc_img"/> View on GitHub</a>
:::

## Prerequisites
***

Before you write the test, install the library and enable Lighthouse in your project environment.

- Ensure that you have the Playwright Lighthouse Library installed in your web project.

  <VerifiedTag value="Verified" />

  ```bash
  npm install playwright-lighthouse
  ```

- Export the *LIGHTHOUSE_LAMBDATEST* environment variable to your project environment.

  <VerifiedTag value="Verified" />

  ```bash
  export LIGHTHOUSE_LAMBDATEST='true'
  ```

## Write Your Test Script
***

Add the `lighthouseReport` action to a Playwright test to capture Lighthouse metrics for a target URL during the run.

:::info
Generating a Lighthouse report within the test can increase the test duration. Generate Lighthouse reports only in the tests that need them.
:::

The JavaScript snippet below runs the `lighthouseReport` action against a URL from inside the test.

<VerifiedTag value="Verified" />

```js title="playwright-lighthouse-report.js"
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
  action: 'lighthouseReport',
  arguments: { url: 'https://www.example.com' }
})}`)
```

### Generate Reports for Authenticated Pages
***

Use this approach to audit pages that require a login by passing an authentication token to Lighthouse. It lets you measure performance, accessibility, and SEO for restricted pages in your Playwright tests. This feature is supported on **Windows** and **macOS** platforms only.

> This feature is only supported on **Windows** and **macOS** platforms.

<VerifiedTag value="Verified" />

<Tabs className="docs__val">
<TabItem value="win" label="Windows" default>

```javascript
await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ 
  action: 'lighthouseReport', 
  arguments: { url: 'https://www.example.com', 
  args: `--extra-headers 
  ${JSON.stringify({ authtoken: "YOUR_AUTH_TOKEN" })}` 
} })}` ); 
```
</TabItem>

<TabItem value="mac" label="macOS" default>

```javascript
await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ 
  action: 'lighthouseReport', 
  arguments: { url: 'https://www.example.com', 
  args: '--extra-headers 
  "{\\"authtoken\\": \\"YOUR_AUTH_TOKEN\\"}"' 
} })}`);
```
</TabItem>
</Tabs>

### Sample Test Script
***

The script below runs Playwright automation with the Lighthouse library on TestMu AI. It navigates to the DuckDuckGo search engine, searches for the term "Playwright", then runs a Lighthouse audit on `https://duckduckgo.com` with defined performance thresholds and report formats.

<VerifiedTag value="Verified" />

```javascript reference title="playwright-lighthouse-report.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js
```

## Trigger Your Test on TestMu AI
***

With the script ready, set your credentials and run the test so the report is generated on the TestMu AI cloud machine.

### Set Up Your Authentication
***

You need your TestMu AI credentials to run automation scripts on TestMu AI. To obtain access credentials, [purchase a TestMu AI plan](https://billing.lambdatest.com/billing/plans) or open the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then set your TestMu AI `Username` and `Access Key` in environment variables with the following commands.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### Run Your Test
***

Run the following command in the terminal, replacing the placeholder with the path to your test file.

<VerifiedTag value="Verified" />

```bash
node RELATIVE_PATH_OF_YOUR_TEST_FILE
```

### View Your Test Results
***

To review runs that use the Playwright Lighthouse Library, open the TestMu AI [Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).

## Related Playwright Guides
***

Continue with the guides below to build out your Playwright test coverage on TestMu AI.

- [Get started with Playwright testing on TestMu AI](/support/docs/playwright-testing/) covers the base setup for cloud runs.
- [Set up Playwright test execution on TestMu AI](/support/docs/playwright-test-execution-setup/) walks through configuring a cloud run.
- [Configure Playwright capabilities](/support/docs/capabilities-for-playwright/) lists every capability you can set for a test.

