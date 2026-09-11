---
id: accessibility-automation-test
title: Automating Accessibility Testing with Selenium
sidebar_label: Selenium
description: Identify and log accessibility issues with TestMu AI Accessibility Automation, ensuring automated compliance with WCAG accessibility standards.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/accessibility-automation-test/
site_name: TestMu AI
slug: accessibility-automation-test/
canonical: https://www.testmuai.com/support/docs/accessibility-automation-test/
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
          "name": "Selenium Accessibility Automation",
          "item": `${BRAND_URL}/support/docs/accessibility-automation-test/`
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
      "@id": "https://www.testmuai.com/support/docs/accessibility-automation-test/"
    },
    "headline": "Automating Accessibility Testing with Selenium",
    "description": "Identify and log accessibility issues with TestMu AI Accessibility Automation, ensuring automated compliance with WCAG accessibility standards.",
    "url": "https://www.testmuai.com/support/docs/accessibility-automation-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; Setup your local machine as per your testing framework..",
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
        "name": "For example",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "DesiredCapabilities capabilities = new DesiredCapabilities();\ncapabilities.setCapability(\"browserName\", \"chrome\");\ncapabilities.setCapability(\"version\", \"70.0\");\ncapabilities.setCapability(\"platform\", \"win10\"); # If this cap isn't specified, it will just get the any available one\ncapabilities.setCapability(\"build\", \"LambdaTestSampleApp\");\ncapabilities.setCapability(\"name\", \"LambdaTestJavaSample\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "To use this, simply enable accessibility in your capabilities",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capability.setCapability(\"accessibility\", true); // Enable accessibility testing"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Then, trigger the scan directly within your test script when the desired page is fully loaded",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Execute the LambdaTest accessibility scan hook\ndriver.executeScript(\"lambda-accessibility-scan\");"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Continuous Auto-Scanning",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capability.setCapability(\"accessibility\", true); // Enable accessibility testing\ncapability.setCapability(\"accessibility.autoscan\", true); // Scan automatically as the test interacts with the app"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "You can also define other settings capabilities to refine your scan rules as described below",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "capability.setCapability(\"accessibility.wcagVersion\", \"wcag21aa\"); // Specify WCAG version (e.g., WCAG 2.1 Level AA)\ncapability.setCapability(\"accessibility.bestPractice\", false); // Exclude best practice issues from results\ncapability.setCapability(\"accessibility.needsReview\", true); // Include issues that need review"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Step 4: Execute and Monitor your Test",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "mvn test"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Step-by-Step Guide to Trigger Your Test",
      "description": "Identify and log accessibility issues with TestMu AI Accessibility Automation, ensuring automated compliance with WCAG accessibility standards.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup Your Test Suite",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample from the TestMu AI GitHub repository to run your tests. If you are using your own project, make sure you update the Hub endpoint in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution. Configure the desired capabilities based on your test requirements. For example: You can generate capabilities for your test requirements with the help of our inbuilt \ud83d\udd17 Capabilities Generator.",
          "url": "https://www.testmuai.com/support/docs/accessibility-automation-test/#step-1-setup-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Establish User Authentication",
          "text": "Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/accessibility-automation-test/#step-2-establish-user-authentication"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Configure the Necessary Capabilities",
          "text": "To enable the accessibility testing within your automated test suite, set accessibility: true in your configuration file. There are two primary ways to run accessibility tests: For precise control over which pages are scanned, you can trigger scans manually at specific points in your test execution. This is the recommended approach to reduce test execution time and focus only on relevant pages. To use this, simply enable accessibility in your capabilities: Then, trigger the scan directly within your test script when the desired page is fully loaded: Note: If you do not execute the hook in your script when using this method, no accessibility reports will be generated. If you want the accessibility scanner to run automatically as your test drives the application, without writing manual hooks, you can pass the accessibility.autoscan capability: With autoScan enabled, a scan is triggered by interactive commands such as navigation, clicks, and executeScript(). Read only operations such as findElement(), explicit waits, and attribute reads do not trigger a scan. Each triggered scan consumes 1 accessibility scan, so an interaction heavy test consumes more than 1 scan per page. See How scan consumption works. You can also define other settings capabilities to refine your scan rules as described below:",
          "url": "https://www.testmuai.com/support/docs/accessibility-automation-test/#step-3-configure-the-necessary-capabilities"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute and Monitor your Test",
          "text": "Now execute your tests and visit the Automation Dashboard. Click on the Accessibility tab and check the report generated.",
          "url": "https://www.testmuai.com/support/docs/accessibility-automation-test/#step-4-execute-and-monitor-your-test"
        }
      ]
    }
  ]) }}
/>

This document walks you through the process of evaluating the accessibility of your website through the execution of automated tests using <BrandName />'s Accessibility Tool.

> Compatible only with Chrome and Edge browser versions >= 90.

## Prerequisites

- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/lambdatest-accessibility-selenium" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

<VerifiedTag value="Verified" />

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator</a>.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

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

### Step 3: Configure the Necessary Capabilities

To enable the accessibility testing within your automated test suite, set `accessibility: true` in your configuration file.

There are two primary ways to run accessibility tests:

#### 1. On-Demand Scans (via Hooks)
For precise control over which pages are scanned, you can trigger scans manually at specific points in your test execution. This is the recommended approach to reduce test execution time and focus only on relevant pages.

To use this, simply enable accessibility in your capabilities:

<VerifiedTag value="Verified" />

```java
capability.setCapability("accessibility", true); // Enable accessibility testing
```

Then, trigger the scan directly within your test script when the desired page is fully loaded:

<VerifiedTag value="Verified" />

```java
// Execute the LambdaTest accessibility scan hook
driver.executeScript("lambda-accessibility-scan");
```
*Note: If you do not execute the hook in your script when using this method, no accessibility reports will be generated.*

#### 2. Continuous Auto-Scanning
If you want the accessibility scanner to run automatically on every single page navigation throughout the entire test session without writing manual hooks, you can pass the `accessibility.autoscan` capability:

<VerifiedTag value="Verified" />

```java
capability.setCapability("accessibility", true); // Enable accessibility testing
capability.setCapability("accessibility.autoscan", true); // Automatically scan all pages
```

#### Advanced Capabilities
You can also define other settings capabilities to refine your scan rules as described below:

<VerifiedTag value="Verified" />

```java
capability.setCapability("accessibility.wcagVersion", "wcag21aa"); // Specify WCAG version (e.g., WCAG 2.1 Level AA)
capability.setCapability("accessibility.bestPractice", false); // Exclude best practice issues from results
capability.setCapability("accessibility.needsReview", true); // Include issues that need review
```

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
mvn test
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/accessibility-automation.png').default} alt="automation-dashboard" className="doc_img"/>
