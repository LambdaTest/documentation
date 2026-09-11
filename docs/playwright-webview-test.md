---
id: playwright-webview-test
title: Playwright Webview Testing
hide_title: false
sidebar_label: Webview Testing
description: Learn how to perform webview testing on android using playwright framework on TestMu AI platform with real browsers cross platform.
keywords:
  - playwright testing
  - playwright mobile testing
  - playwright testing tool
  - playwright testing on testmu ai
  - playwright testing testmu ai
  - playwright android
url: https://www.testmuai.com/support/docs/playwright-webview-test/
site_name: TestMu AI
slug: playwright-webview-test/
canonical: https://www.testmuai.com/support/docs/playwright-webview-test/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Playwright Android Webview Testing",
          "item": `${BRAND_URL}/support/docs/playwright-webview-test/`
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
      "@id": "https://www.testmuai.com/support/docs/playwright-webview-test/"
    },
    "headline": "Playwright Webview Testing",
    "description": "Learn how to perform webview testing on android using playwright framework on TestMu AI platform with real browsers cross platform.",
    "url": "https://www.testmuai.com/support/docs/playwright-webview-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "playwright testing",
      "playwright mobile testing",
      "playwright testing tool"
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
        "name": "Step 1: Setup your test suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 1: Setup your test suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 2: Update the dependencies\nBefore proceeding forward, run the below command to update the outdated dependencies\n\n```bash\nnpm install"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 3: Update your test Capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n:::tip\nUse our [Capability Generator](https://www.testmuai.com/capabilities-generator/) to select from a wide range of options for customizing your tests.\n:::\n\n### Step 4: Setup your <BrandName /> credentials\n\nIn your terminal (as per your respective Operating System), run these command to setup your <BrandName /> credentials.\n> You can see your credentials below if you have logged into our platform.\n\n<Tabs className=\"docs__val\">\n\n<TabItem value=\"bash\" label=\"Linux / MacOS\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-bash\">\n  {`export LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nexport LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value=\"powershell\" label=\"Windows\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n  {`set LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nset LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n### Step 5: Execute your test\nReplace the `TEST_FILE_NAME` in the below command with your desired test file to execute that particular test on <BrandName />:\n\n```bash\nnode playwrightwebview.js"
      }
    ],
    "dateModified": "2026-09-10T15:46:57+05:30"
  }) }}
/>
WebView testing is an essential process for ensuring the functionality and reliability of applications that rely on embedded web browsers. This guide provides detailed steps to perform WebView testing using Playwright. It is designed for developers, QA engineers, and anyone involved in software quality assurance.

## Steps to perform Webview testing

### Step 1: Setup your test suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

- If you are using your own project, configure the `browserWSEndpoint` (browser end point URL) in your test script to run the test on <BrandName />

```javascript
wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
```

- Here is the sample test script for your reference:

```javascript reference title="playwrightwebview.js"
https://github.com/LambdaTest/playwright-sample/blob/main/playwrightwebview.js
```

### Step 2: Update the dependencies
Before proceeding forward, run the below command to update the outdated dependencies

```bash
npm install
```

### Step 3: Update your test Capabilities
Include the following field in the capabilities object to enable WebView testing:

```javascript title="playwrightwebview.js"
const capabilities = {
  "LT:Options": {
    "platformName": "android",
    "isRealMobile": true, //if true, test will run on real devices
    // highlight-next-line
    "isPwMobileWebviewTest": true, //mandatory capability to enable WebView testing
  },
```

:::tip
Use our [Capability Generator](https://www.testmuai.com/capabilities-generator/) to select from a wide range of options for customizing your tests.
:::

### Step 4: Setup your <BrandName /> credentials

In your terminal (as per your respective Operating System), run these command to setup your <BrandName /> credentials.
> You can see your credentials below if you have logged into our platform.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

### Step 5: Execute your test
Replace the `TEST_FILE_NAME` in the below command with your desired test file to execute that particular test on <BrandName />:

```bash
node playwrightwebview.js
```

Visit the [<BrandName /> Web Automation](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build) page to check the status of your test execution.
<img loading="lazy" src={require('../assets/images/playwright-testing/webview-test.png').default} alt="Image"  className="doc_img"/>

