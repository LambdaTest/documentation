---
id: hyperexecute-zephyr-scale-integration
title: Integrate Zephyr Scale with HyperExecute
sidebar_label: Zephyr
description:  Zephyr, a test case management tool, and HyperExecute, a cloud-based test execution platform streamline your testing process by efficiently managing test cases.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - zephyr
  - Integrations
  - Products
url: https://www.testmu.ai/support/docs/hyperexecute-zephyr-scale-integration
site_name: LambdaTest
slug: hyperexecute-zephyr-scale-integration
canonical: https://www.testmu.ai/support/docs/hyperexecute-zephyr-scale-integration/
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
          "name": "Integration with Products",
          "item": `${BRAND_URL}/support/docs/hyperexecute-zephyr-scale-integration/`
        }]
      })
    }}
></script>
Zephyr Scale is a test management platform that helps you plan, manage, and measure your tests inside Jira. It's designed from the ground up to support large test libraries and scaling teams

This document details the seamless integration between HyperExecute and qTest, enabling you to run your automated tests on a variety of devices and real devices provided by <BrandName />.

## Prerequisites

- Install the [Zephyr Scale - Test Management](https://marketplace.atlassian.com/apps/1213259/zephyr-scale-test-management-for-jira?hosting=cloud&tab=overview) for Jira application from the Atlassian Marketplace.
- <BrandName /> account. You can [sign up for free](https://accounts.lambdatest.com/dashboard).
- <BrandName /> [Username and Access Key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- A Jira Project key.
- A Zephyr Scale Access token. You can get this from the `profiles and settings` option of your Jira Board.

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo

Download or Clone the code sample for the Maestro framework from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/amanchopra1905/hyp-zephyr-scale-integration" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>

:::

## Step 2: Setup the CLI in your Test Suite

After cloning / downloading the sample repo, you need to setup the CLI and the environment variables.

### Download the HyperExecute CLI

The CLI is used for triggering the tests on HyperExecute. It is recommend to download the CLI binary on the host system and keep it in the root directory of the suite to perform the tests on HyperExecute.

You can download the CLI for your desired platform from the below mentioned links:

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| MacOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

### Setup Environment Variable

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

## Step 3: Configure the Test Script

In the `PostTestResults.java` script, add the following String parameters.

* File name of your test results.
* File path of the test result file.
* Jira Project key.
* Zephyr Scale Access token.

```js 
public class PostTestResults {

    public void callApi() {

        String fileName = "TEST-com.lambdatest.JUnitTodo.xml" ; //provide the file name of the test results
        String filePath = "target/surefire-reports/TEST-com.lambdatest.JUnitTodo.xml"; //provide the file path of the test result file
        String projectKey = "ZD"; //provide the Jira project key 
        String token = "abcdefghijklmnop123456"; // provide Zephyr Scale access token
```

## Step 4: Configure YAML in your Test Suite

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: linux

autosplit: true
retryOnFailure: true

maxRetries: 1
concurrency: 3

env:
  # PAT: ${{ .secrets.testKey }}
  CACHE_DIR: m2_cache_dir
  TARGET_OS: linux

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - ${CACHE_DIR}

shell: bash

pre:
  # Download and install packages in the CACHE_DIR.
  # Skip execution of the tests in the pre step
  - mvn -Dmaven.repo.local=${CACHE_DIR} -Dmaven.test.skip=true clean install

post:
  - cat hyperexecute-zephyr-scale.yaml

testDiscovery:
  type: raw
  mode: dynamic
  command: grep 'public class' src/test/java/com/lambdatest/*.java | awk '{print$3}'

testRunnerCommand: mvn -Dplatname=linux -Dmaven.repo.local=m2_cache_dir -Dtest=$test -P single
# test site
jobLabel: ['hyperexecute', 'zephyr']
```

## Step 5: Execute your Test Suite

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

## Step 6: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<!-- <img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/maestro/2.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/> -->

### Viewing the Test Results in Zephyr Scale

To view test results in Zephyr Scale, head over to your Zephyr Scale project. The below screenshot shows the Test Case in Zephyr Scale that you executed on <BrandName />.

<img loading="lazy" src={require('../assets/images/zephyr-integration/1.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

You can also view the executed build by navigating to **Test Cycles**.

<img loading="lazy" src={require('../assets/images/zephyr-integration/2.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>

To view the build details, click on the Zephyr project *Key* or *Name*.

<img loading="lazy" src={require('../assets/images/zephyr-integration/3.png').default} alt="provide access to <BrandName /> account" width="1280" height="684" className="doc_img"/>