---
id: playwright-lighthouse-library
title: Generate Lighthouse Reports With Playwright Lighthouse Library
hide_title: false
sidebar_label: Playwright Lighthouse Library
description: Learn how to generate multiple Lighthouse reports using Playwright Lighthouse Library.
keywords:
- generate lighthouse reports in playwright
- generate lighthouse reports with playwright lighthouse library
- lighthouse reports testmu ai
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
    "headline": "Generate Lighthouse Reports With Playwright Lighthouse Library",
    "description": "Learn how to generate multiple Lighthouse reports using Playwright Lighthouse Library.",
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
      "generate lighthouse reports in playwright",
      "generate lighthouse reports with playwright lighthouse library",
      "lighthouse reports testmu ai"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Ensure that you have the Playwright Lighthouse Library installed in your web project.; Export the LIGHTHOUSE_LAMBDATEST environment variable to your project environment..",
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
        "text": "  npm install playwright-lighthouse"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Prerequisites",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "  export LIGHTHOUSE_LAMBDATEST='true'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Write your Test Script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### For Authenticated Pages\n> This feature is only supported on **Windows** and **macOS** platforms.\n\nThe feature allows you to generate Lighthouse reports for authenticated web pages using Playwright. This is particularly useful for testing performance, accessibility, SEO, and other quality metrics for pages that require authentication. By leveraging authentication tokens, you can analyze restricted pages in your Playwright tests on both **Windows** and **macOS** environments.\n\n<Tabs className=\"docs__val\">\n<TabItem value=\"win\" label=\"Windows\" default>\n\n```javascript\nawait page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ \n  action: 'lighthouseReport', \n  arguments: { url: 'https://www.example.com', \n  args: `--extra-headers \n  ${JSON.stringify({ authtoken: \"YOUR_AUTH_TOKEN\" })}` \n} })}` ); "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "For Authenticated Pages (macOS)",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "await page.evaluate(() => {}, `lambdatest_action: ${JSON.stringify({ \n  action: 'lighthouseReport', \n  arguments: { url: 'https://www.example.com', \n  args: '--extra-headers \n  \"{\\\\\"authtoken\\\\\": \\\\\"YOUR_AUTH_TOKEN\\\\\"}\"' \n} })}`);"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Sample Test Script",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n## Trigger your Test on <BrandName />\n### Set up your authentication\n\nMake sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName />. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set <BrandName /> `Username` and `Access Key` in environment variables with following commands.\n\n<Tabs className=\"docs__val\">\n\n<TabItem value=\"bash\" label=\"Linux / MacOS\" default>\n  <div className=\"lambdatest__codeblock\">\n  <CodeBlock className=\"language-bash\">\n  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}\nexport LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}\n<\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value=\"powershell\" label=\"Windows\" default>\n\n  <div className=\"lambdatest__codeblock\">\n  <CodeBlock className=\"language-powershell\">\n  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}\nset LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}\n<\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n### Run your test\nPass the below command in the terminal to run the test:\n```bash\nnode RELATIVE_PATH_OF_YOUR_TEST_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>
A Lighthouse Report is a performance, accessibility, SEO, and best practices evaluation report generated using [Google Lighthouse](https://developers.google.com/web/tools/lighthouse), an open-source, automated tool developed by Google. It is commonly used to assess and optimize the quality of web pages.

<BrandName /> lets you perform Playwright automation while allowing you to generate Lighthouse reports with Playwright Lighthouse Library in a single test.

> Lighthouse Report is supported on **Chrome**, **MicrosoftEdge** and **Chromium** browsers.

:::tip Sample repository
The code sample for generating the Lighthouse Performance Metrics in the Playwright test can be found on **<BrandName />'s GitHub Repository**. You can either download or clone the repository to quickly run your tests. <a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

## Prerequisites
- Ensure that you have the Playwright Lighthouse Library installed in your web project.
  ```bash
  npm install playwright-lighthouse
  ```

- Export the *LIGHTHOUSE_LAMBDATEST* environment variable to your project environment.
  ```bash
  export LIGHTHOUSE_LAMBDATEST='true'
  ```

## Write your Test Script
:::info
Generating lighthouse report within the test might increase the test duration. It is advisable to generate the lighthouse reports only in the required tests.
:::

You can easily add the Lighthouse Performance Metrics of the website you want to test by using the `lighthouseReport` action via the test. Following is the code snippet for generating Lighthouse report from the Playwright if you are using JavaScript:

<VerifiedTag value="Verified" />

```js title="playwright-lighthouse-report.js"
await page.evaluate(_ => {}, `lambdatest_action: ${JSON.stringify({
  action: 'lighthouseReport',
  arguments: { url: 'https://www.example.com' }
})}`)
```

### For Authenticated Pages
> This feature is only supported on **Windows** and **macOS** platforms.

The feature allows you to generate Lighthouse reports for authenticated web pages using Playwright. This is particularly useful for testing performance, accessibility, SEO, and other quality metrics for pages that require authentication. By leveraging authentication tokens, you can analyze restricted pages in your Playwright tests on both **Windows** and **macOS** environments.

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

This following script performs web automation testing using the Playwright and Lighthouse libraries on the <BrandName /> platform. The script navigates to the DuckDuckGo search engine and searches for the term "Playwright". After that, the script runs a Lighthouse audit on the specified URL (https://duckduckgo.com) with defined performance thresholds and report formats.

<VerifiedTag value="Verified" />

```javascript reference title="playwright-lighthouse-report.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwright-lighthouse-report.js
```

## Trigger your Test on <BrandName />
### Set up your authentication

Make sure you have your <BrandName /> credentials with you to run test automation scripts on <BrandName />. To obtain your access credentials, [purchase a plan](https://billing.lambdatest.com/billing/plans) or access the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/). Then, set <BrandName /> `Username` and `Access Key` in environment variables with following commands.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>
  <div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
  {`export LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
export LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
  <CodeBlock className="language-powershell">
  {`set LT_USERNAME=${ YOUR_LAMBDATEST_USERNAME()}
set LT_ACCESS_KEY=${ YOUR_LAMBDATEST_ACCESS_KEY()}`}
</CodeBlock>
</div>

</TabItem>
</Tabs>

### Run your test
Pass the below command in the terminal to run the test:
```bash
node RELATIVE_PATH_OF_YOUR_TEST_FILE
```

### View Your Test Results
To view your test runs that uses Playwright Lighthouse Library, go to the <BrandName /> [Web Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/).

<img loading="lazy" src={require('../assets/images/playwright-testing/lighthouse-report.png').default} alt="Image" className="doc_img"/>






