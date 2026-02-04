---
id: selenium-hyprerexecute-accessibility-tests
title: Automation Tests with Accessibility Tool using Selenium
hide_title: false
sidebar_label:  Selenium
description: Use TestMu AI Accessibility DevTools to detect and report accessibility issues with automation, following WCAG guidelines, in your selenium tests
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - selenium
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/selenium-hyprerexecute-accessibility-tests/
site_name: LambdaTest
slug: selenium-hyprerexecute-accessibility-tests/
canonical: https://www.testmu.ai/support/docs/selenium-hyprerexecute-accessibility-tests/
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
          "name": "Cypress Accessibility Testing",
          "item": `${BRAND_URL}/support/docs/selenium-hyprerexecute-accessibility-tests/`
        }]
      })
    }}
></script>
This document provides a detailed, step-by-step way to execute your accessibility tests using <BrandName />'s Accessibility Tool on HyperExecute.
:::note
This documentation is applicable for all [supported languages](/support/docs/hyperexecute-supported-languages-and-frameworks/) for Selenium framework.

Please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span> to enable the Accessibility feature for your organization.
:::

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/).
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Configure Your Test Suite

You can use your own Selenium project to configure and test it. For demo purposes, we are using the TestNG sample repository.

:::tip Sample repo
Download or Clone the code sample for the TestNG from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file. By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.

Configure the desired capabilities based on your test requirements. For example:

```java title="test.java"
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); // If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

### Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

#### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable

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

### Step 3: Add the Capabilities to enable the Accessibility 
To generate the accessibility reports, add a capability `accessibility: true` in your test files. You can also define some advanced capabilities like `accessibility.wcagVersion`, `accessibility.bestPractice`, and `accessibility.needsReview` as shown below:

```java title="test.java"
capabilities.setCapability("accessibility", true); // Enable accessibility testing
capabilities.setCapability("accessibility.wcagVersion", "wcag21a"); // Specify WCAG version (e.g., WCAG 2.1 Level A)
capabilities.setCapability("accessibility.bestPractice", false); // Exclude best practice issues from results
capabilities.setCapability("accessibility.needsReview", true); // Include issues that need review
```

### Step 4: Configure your YAML file
Configure your YAML file as per your use cases using **key value** pairs. In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml reference title="HyperExecute AutoSplit YAML"
https://github.com/LambdaTest/testng-selenium-hyperexecute-sample/blob/main/yaml/linux/v2/testng_hyperexecute_autosplit_sample.yaml
```

### Step 5: Execute your Test Suite

> **NOTE :** In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

Run the below command in your terminal at the root folder of the project:

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 2.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

### Step 6: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/accessibility-testing/hyp-selenium.gif').default} alt="automation-dashboard" className="doc_img"/>
