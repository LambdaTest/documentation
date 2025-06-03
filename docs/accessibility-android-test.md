---
id: accessibility-android-test
title: Automation Tests with Accessibility Tool using Android
sidebar_label: Automation
description: Use LambdaTest Accessibility DevTools to detect and report accessibility issues with automation, following WCAG guidelines.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Automation
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/accessibility-android-test/
site_name: LambdaTest
slug: accessibility-android-test/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Accessibility Android Test",
          "item": "https://www.lambdatest.com/support/docs/accessibility-android-test/"
        }]
      })
    }}
></script>

This guide walks you through automating accessibility testing of a native Android app using **LambdaTest's Accessibility Automation Tool (Beta) via Appium**. You'll run an automated accessibility scan on a real Android device hosted on LambdaTest’s real device cloud infrastructure.

## Prerequisites

- Your [LambdaTest Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Python 3.x or Java JDK 8+ installed
- Appium Python Client or Java Client Library

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the LambdaTest GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/lambdatest-accessibility-selenium" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

<Tabs className="docs__val">

<TabItem value="python" label="Python" default>

  <div className="lambdatest__codeblock">
    
    ```python
    desired_cap = {
      "platform": "android",
      "isRealMobile": True,
      "app": "lt://APP",  # Replace with your LambdaTest App URL
      "accessibility": True,
      "buildName": "Accessibility-lambda",
      "idleTimeout": 1800,
      "build": "NewAppiumBuild",
      "name": "MyTest",
      "devicelog": True
    }
    ```

  </div>

</TabItem>

<TabItem value="java" label="Java" default>

  <div className="lambdatest__codeblock">
    ```java
    DesiredCapabilities caps = new DesiredCapabilities();
    caps.setCapability("platform", "android");
    caps.setCapability("isRealMobile", true);
    caps.setCapability("app", "lt://APPID"); // Replace with your App ID
    caps.setCapability("accessibility", true);
    caps.setCapability("idleTimeout", 1800);
    caps.setCapability("build", "AccessibilityScanBuild");
    caps.setCapability("name", "MyTest");
    caps.setCapability("devicelog", true);
    ```
</div>

</TabItem>
</Tabs>


> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 [Capabilities Generator Tool](https://www.lambdatest.com/capabilities-generator/).

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).

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

### Step 3: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
mvn test
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/accessibility-automation.png').default} alt="automation-dashboard" className="doc_img"/>
