---
id: accessibility-automation-test
title: Automating Accessibility Testing with Selenium
sidebar_label: Automate First Accessibility Test
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
hide_title: true
toc_max_heading_level: 2
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



# Automating Accessibility Testing with Selenium

---

Selenium accessibility automation runs WCAG accessibility checks against your web pages inside your existing Selenium test flow, then reports the violations in the <BrandName /> Automation dashboard. Enable it with a single capability, choose whether scans fire on demand or automatically, and review the results alongside the rest of your automation run.

> Compatible only with Chrome and Edge browser versions >= 90.

## Prerequisites

Before you run your first accessibility scan, make sure you have the following in place:

- Your [<BrandName /> Username and Access Key](/support/docs/using-environment-variables-for-authentication-credentials/).
- A local machine set up for your testing framework.
- Chrome or Edge, version 90 or later, since accessibility scans run only on these browsers.

## Step-by-Step Guide to Trigger Your Test

Follow the numbered steps below in order. By the end, the session and its accessibility report appear in the Automation dashboard.

### Step 1: Set Up Your Test Suite

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

**Expected result:** Your test file points at the <BrandName /> Hub endpoint and declares valid desired capabilities, so the test can launch a remote browser session.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

<Tabs className="docs__val">

<TabItem value="bash" label="Linux / MacOS" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-bash">
  {`export LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
export LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>

<TabItem value="powershell" label="Windows" default>

  <VerifiedTag value="Verified" />

  <div className="lambdatest__codeblock">
    <CodeBlock className="language-powershell">
  {`set LT_USERNAME="${ YOUR_LAMBDATEST_USERNAME()}"
set LT_ACCESS_KEY="${ YOUR_LAMBDATEST_ACCESS_KEY()}"`}
  </CodeBlock>
</div>

</TabItem>
</Tabs>

**Expected result:** `LT_USERNAME` and `LT_ACCESS_KEY` are set in your shell, so your test authenticates to <BrandName /> without hardcoding credentials.

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
If you want the accessibility scanner to run automatically as your test drives the application, without writing manual hooks, you can pass the `accessibility.autoscan` capability:

<VerifiedTag value="Verified" />

```java
capability.setCapability("accessibility", true); // Enable accessibility testing
capability.setCapability("accessibility.autoscan", true); // Scan automatically as the test interacts with the app
```

With autoScan enabled, a scan is triggered by **interactive commands** such as navigation, clicks, and `executeScript()`. Read only operations such as `findElement()`, explicit waits, and attribute reads do not trigger a scan. Each triggered scan consumes 1 accessibility scan, so an interaction heavy test consumes more than 1 scan per page. See [How scan consumption works](/support/docs/accessibility-testing/#how-scan-consumption-works).

#### Advanced Capabilities
You can also define other settings capabilities to refine your scan rules as described below:

<VerifiedTag value="Verified" />

```java
capability.setCapability("accessibility.wcagVersion", "wcag21aa"); // Specify WCAG version (e.g., WCAG 2.1 Level AA)
capability.setCapability("accessibility.bestPractice", false); // Exclude best practice issues from results
capability.setCapability("accessibility.needsReview", true); // Include issues that need review
```

For the full list of settings you can tune, including the WCAG version, Best Practice, Beta, and AI rule groups, see the [Supported Automation Capabilities reference](/support/docs/accessibility-automation-scan-configurations/).

**Expected result:** Your capabilities include `accessibility: true` and either the `lambda-accessibility-scan` hook or `accessibility.autoscan`, so scans are generated during the run.

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

<VerifiedTag value="Verified" />

```bash
mvn test
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/accessibility-automation.png').default} alt="automation-dashboard" className="doc_img"/>

**Expected result:** The test run completes and the session, along with its accessibility report, appears under the Accessibility tab in the Automation dashboard. Open the report to see the list of WCAG violations detected on each scanned page.

## Next steps

- Review your findings in depth with the [Navigating the Dashboard guide](/support/docs/accessibility-testing-navigating-dashboard/) to read the Accessibility Score, break down issues in Issue Summary and All Issues, and file bugs into your tracker.
- Refine which pages get scanned by switching between the on-demand `lambda-accessibility-scan` hook and `accessibility.autoscan`, as covered in Step 3 above.
