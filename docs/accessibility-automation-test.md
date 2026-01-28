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
site_name: LambdaTest
slug: accessibility-automation-test/
canonical: https://www.testmuai.com/support/docs/accessibility-automation-test/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Testing Test",
          "item": `${BRAND_URL}/support/docs/accessibility-automation-test/`
        }]
      })
    }}
></script>

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

```java
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://accounts.lambdatest.com/detail/profile).

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

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```java
capability.setCapability("accessibility", true); // Enable accessibility testing
capability.setCapability("accessibility.wcagVersion", "wcag21a"); // Specify WCAG version (e.g., WCAG 2.1 Level A)
capability.setCapability("accessibility.bestPractice", false); // Exclude best practice issues from results
capability.setCapability("accessibility.needsReview", true); // Include issues that need review
```

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
mvn test
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/accessibility-automation.png').default} alt="automation-dashboard" className="doc_img"/>
