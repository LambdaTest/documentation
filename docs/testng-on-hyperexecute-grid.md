---
id: testng-on-hyperexecute-grid
title: TestNG Automation on HyperExecute
hide_title: false
sidebar_label: TestNG
description: Learn how to run Selenium automation tests on HyperExecute using the TestNG framework
keywords:
  - TestNG
  - TestNG selenium
  - TestNG Java Selenium
  - TestNG automation testing
  - selenium webdriver TestNG
  - selenium TestNG testing tutorial
  - TestNG Java Selenium framework
  - lambdatest TestNG
  - frameworks on lambdatest
  - hyperexecute
  - hyperexecute TestNG testing
  - hyperexecute TestNG testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/testng-on-hyperexecute-grid/
site_name: LambdaTest
slug: testng-on-hyperexecute-grid/
---

import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

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
          "name": "How to run automation tests on HyperExecute using TestNG framework",
          "item": "https://www.lambdatest.com/support/docs/testng-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

TestNG is a popular testing framework for Java applications that supports unit, integration, and end-to-end testing. This documentation will help you run your TestNG tests on LambdaTest HyperExecute using a local system setup.

## Run a Sample Project
### Step 1: Clone Sample Repository

:::tip TestNG repo
Download or Clone the TestNG sample from LambdaTest’s GitHub Repository

<a href="https://github.com/LambdaTest/testng-selenium-hyperexecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config hyperexecute.yaml`}
  </CodeBlock>
</div>

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_1.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_2.png').default} alt="TestNG HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<br /><br />

🎉 Congratulations! You've successfully triggered the TestNG tests on HyperExecute. Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Configure your own Project

### Step 1: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder  .

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 2: Setup Hub Endpoints and Capabilities
Update your TestNG test configuration to point to the LambdaTest hub and set capabilities as needed:

```java title="test.java"
// Hub Endpoint
driver = new RemoteWebDriver(new URL("https://" + username + ":" + access_key + "@hub.lambdatest.com/wd/hub"), capabilities);

// Capabilities
DesiredCapabilities capabilities = new DesiredCapabilities();
capabilities.setCapability("browserName", "chrome");
capabilities.setCapability("version", "70.0");
capabilities.setCapability("platform", "win10"); # If this cap isn't specified, it will just get the any available one
capabilities.setCapability("build", "LambdaTestSampleApp");
capabilities.setCapability("name", "LambdaTestJavaSample");
```

> You can also use **dev** and **beta** browser versions. To generate capabilities for your test requirements, you can use our inbuilt 🔗 [Capabilities Generator Tool](https://www.lambdatest.com/capabilities-generator/).

### Step 3: Configure YAML in your Test Suite
Use the sample YAML below to configure your execution:

```yaml
---
version: 0.1
runson: linux # Target OS for test execution

autosplit: true
concurrency: 2

pre:
  - mvn dependency:resolve

testDiscovery:
  type: raw
  mode: local
  command: grep 'test name' xml/testng_linux.xml | awk '{print$2}' | sed 's/name=//g' | sed 's/\x3e//g'

testRunnerCommand: mvn test -Dplatname=linux -Dmaven.repo.local=./.m2 -DselectedTests=$test

# Fail the job early if 2 tests fail (saves time on large suites)
failFast: 
  maxNumberOfTests: 2

# generate your reports
report: true
partialReports:
  location: target/surefire-reports/html
  type: html
  frameworkName: extent

jobLabel: [selenium-testng, linux, v1, autosplit]
```

> 📘 For a deeper understanding and project-specific configurations, check out the [YAML documentation](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/).

### Step 4: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## Navigation in Automation Dashboard
Click on the *testID* to navigate from the HyperExecute logs to the Automation Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/dashboard2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows the videos, logs and other meta data for that specific *test_ID*

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>


## Advanced Parameters
Optimize your test pipeline using the following advanced features:

- ✅ [Smart Test Splitting](/support/docs/hyperexecute-test-splitting-and-multiplexing/) – Automatically distribute tests across parallel runners
- ⚡ [Fail Fast](/support/docs/hyperexecute-failfast/) – Stop test runs on the first failure
- 📊 [Detailed Reports](/support/docs/hyperexecute-reports/) – Real-time terminal logs & rich test reports
- 🔄 [Auto-Healing](/support/docs/hyperexecute-auto-healing/) – Automatically recover from certain failures

## Frequently Asked Questions

<details><summary>How to discover Feature Files on HyperExecute</summary> HyperExecute supports intelligent discovery of test scenarios through a built-in utility called <b>[Snooper](/support/docs/hyperexecute-snooper/).</b> It is a discovery tool that identifies and lists Cucumber feature file scenarios to be executed. It works in coordination with the <b>[testRunnerCommand](/support/docs/deep-dive-into-hyperexecute-yaml/#testrunnercommand)</b>, dynamically filtering test cases before execution. </details>

<details><summary>Java Version Setup on HyperExecute</summary> Ensure your tests run with the correct Java version on HyperExecute VMs—matching your local development environment or your project's framework requirements. To install a specific Java version at runtime on a HyperExecute VM, you can use the <b>[runtime](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime)</b> YAML flag.</details>

> For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />


