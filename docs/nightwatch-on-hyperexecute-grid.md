---
id: nightwatch-on-hyperexecute-grid
title: Run automation tests on HyperExecute using Nightwatch
hide_title: true
sidebar_label: Nightwatch
description: Learn how to run Selenium automation tests on HyperExecute using the Nightwatch framework
keywords:
  - Nightwatch
  - Nightwatch selenium
  - Nightwatch JavaScript Selenium
  - Nightwatch automation testing
  - selenium webdriver Nightwatch
  - selenium Nightwatch testing tutorial
  - Nightwatch JavaScript Selenium framework
  - testmu ai Nightwatch
  - frameworks on testmu ai
  - hyperexecute
  - hyperexecute Nightwatch testing
  - hyperexecute Nightwatch testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.testmu.ai/support/docs/nightwatch-on-hyperexecute-grid
site_name: LambdaTest
slug: nightwatch-on-hyperexecute-grid
---

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
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "How to run automation tests on HyperExecute using Nightwatch framework",
          "item": "https://www.lambdatest.com/support/docs/nightwatch-on-hyperexecute-grid/"
        }]
      })
    }}
></script>

# Running Nightwatch Framework Tests on HyperExecute
Nightwatch.js is an automated testing framework built on top of Selenium and Node.js. It simplifies end-to-end testing, offering a simple syntax and a powerful set of built-in commands. Nightwatch.js supports the Selenium WebDriver protocol and allows efficient browser automation, making it a popular choice for web application testing.

HyperExecute is an AI Native Test Orchestration Cloud Platform that empowers you to run **end-to-end** tests **quickly** and **efficiently**. It provides Just-in-Time (JIT) testing infrastructure with fast execution **speeds**, **smart orchestration**, and **detailed logs**.

This guide details how to execute your **Nightwatch** framework tests on **HyperExecute** via two different methods:

- [**Using Local System**](/support/docs/nightwatch-on-hyperexecute-grid/#1-testing-using-local-system) - You can use your own local machine to execute tests.
- [**Using Gitpod Platform**](/support/docs/nightwatch-on-hyperexecute-grid/#2-testing-using-gitpod) -  Execute tests using GitPod. (Requires a [Gitpod](https://gitpod.io/login/) account)

## 1. Testing Using Local System

Follow the step-by-step guide to execute your test on HyperExecute.

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the JUnit from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/Hyperexecute-Nightwatch-Sample.git" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

If you are using your own project, make sure you update the **Hub endpoint** in your tests file.

By setting up the Hub endpoint, you establish the communication channel between your tests and the browser nodes, enabling effective test distribution and execution.


Configure the desired capabilities based on your test requirements. For example:

```bash
# nightwatch.conf.js

module.exports = (function(settings) {
  console.log(settings["test_settings"]["default"]["username"])
  if (process.env.LT_USERNAME) {
    settings["test_settings"]["default"]["username"] = process.env.LT_USERNAME;
  }
  if (process.env.LT_ACCESS_KEY) {
    settings["test_settings"]["default"]["access_key"] = process.env.LT_ACCESS_KEY;
  }
  if (process.env.SELENIUM_HOST) {
    settings.selenium.host = process.env.SELENIUM_HOST;
  }
  if (process.env.SELENIUM_PORT) {
    settings.selenium.host = process.env.SELENIUM_PORT;
  }
  return settings;
})(require('./nightwatch.json'));
```


> You can generate capabilities for your test requirements with the help of our inbuilt 🔗 <a href={`${BRAND_URL}/capabilities-generator/`}>Capabilities Generator Tool</a>.

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

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [LambdaTest Profile page](https://accounts.lambdatest.com/detail/profile).

Run the below mentioned commands in your terminal to setup the CLI and the environment variables.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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

### Step 3: Configure YAML in your Test Suite

Configure your YAML file as per your use cases using **key value** pairs.

In this sample YAML file, we have mentioned:

- **version** of the YAML file
- **Timeouts** for executing your project
- **Mode of execution** is [Autosplit](/support/docs/hyperexecute-auto-split-strategy/). You can also opt for [Matrix](/support/docs/hyperexecute-matrix-multiplexing-strategy/) or [Hybrid](/support/docs/hyperexecute-hybrid-strategy/) mode.
- **Pre and Post** commands
- **Reports and Artefacts** that will be generated after the completion of tests
- and other necessary YAML Parameters

```yaml
---
version: 0.1
globalTimeout: 90
testSuiteTimeout: 90
testSuiteStep: 90

runson: linux
autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 3
parallelism: 1
  
cacheKey: '{{ checksum "package-lock.json" }}'
cacheDirectories:
  - node_modules

pre:
  - npm install

mergeArtifacts: true
uploadArtifacts:
  - name: Reports
    path:
      - reports/

report: true
partialReports:
    type: json
    location: reports/
    frameworkName: extent

testDiscovery:
  type: raw
  mode: dynamic
  command: grep -B1 'desiredCapabilities' nightwatch.json | sed 's/-//g' | grep -vE 'desiredCapabilities' | grep -vE 'skip_testcases_on_fail' | awk '{print$1}' | sed 's/://g' | sed 's/"//g'

testRunnerCommand: ./node_modules/.bin/nightwatch -e $test

jobLabel: [selenium-Nightwatch, linux, autosplit]
```

### Step 4: Execute your Test Suite

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

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_1.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/cmd_2.png').default} alt="JUnit HyperExecute Terminal Logs"  width="1920" height="868" className="doc_img"/>

### Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

### Step 6: Download Artifacts and Reports

HyperExecute also facilitates the provision to download the [Artifacts](/support/docs/hyperexecute-artifacts/) and [Reports](/support/docs/hyperexecute-reports/) on your local machine. Click on the corresponding button to download your generated artifacts and reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

## 2. Testing Using Gitpod

You can also use the Gitpod platform to execute our sample repository. It will fetch all the sample codebases and trigger the CLI to execute the tests.

Follow the below steps to run Test using Gitpod:

**Step 1:**  Click '**Open in Gitpod**' button. You will be redirected to Login/Signup page. This button is configured to redirect you to the Gitpod platform where you will be able to execute our sample repository.

[<img alt="Run in Gitpod" width="200 px" align="center" src="https://user-images.githubusercontent.com/1688653/165307331-fbcf16b0-ce49-40f5-9f87-4f080d674624.png" />](https://hyperexecute.lambdatest.com/hyperexecute/jobs?type=gitpod&frameworkType=Selenium&framework=NightwatchJS)

**Step 2:** Login with LambdaTest credentials. Once logged in, a pop-up confirmation will appear, asking you to **'Proceed'** to the Gitpod editor in a new tab. The current tab will display the HyperExecute Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_popup.png').default} alt="Gitpod popup" width="1919" height="878" className="doc_img"/>

**Step 3:** Choose your preferred editor (we recommend VS Code Editor)

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod_config.png').default} alt="Image"  className="doc_img"/>

**Step 4:**  As you are running a sample project, Fetching of the Test Scripts, [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml/), [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) and Triggering your tests using the `Execution Command` will be automated. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/gitpod2.png').default} alt="Image"  className="doc_img"/>

**Step 5:**  Once you see the `Job Link` in the logs, you can visit the [HyperExecute dashboard](https://hyperexecute.lambdatest.com/hyperexecute) to see the tests getting executed.

:::tip

You can also implement [Secret Keys](/support/docs/hyperexecute-how-to-save-and-manage-secrets/) in your YAML file.
:::

## Navigation in Automation Dashboard

Every test run on the HyperExecute has a unique *jobId* associated with it. Each *jobId* can in turn constitute single (or multiple) *groupId*(s). You can visit [HyperExecute Automation Dashboard](https://automation.lambdatest.com/build) for checking the status of the test execution.

You can seamlessly navigate between JobId's and taskId's. You need to click on the *testID* to navigate from the HyperExecute logs to the Automation Dashboard.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_autosplit_1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

The snapshot below shows the videos, logs and other meta data for that specific *test_ID*

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/selenium/testng/testng_artifacts_2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>

> For any query or doubt, please feel free to contact us via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> or you can also drop a mail to **support@lambdatest.com**.<br />
Happy testing!

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
      Run Nightwatch tests on HyperExecute
      </span>
    </li>
  </ul>
</nav>
