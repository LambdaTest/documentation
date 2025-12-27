---
id: hyperexecute-algoqa-integration
title: Integrate algoQA with HyperExecute
hide_title: false
sidebar_label: algoQA
description:  Unleash the power of algoQA & TestMu AI HyperExecute! Streamline test management & experience fast execution.
keywords:
  - LambdaTest HyperExecute
  - LambdaTest HyperExecute help
  - LambdaTest HyperExecute documentation
  - algoQA
  - Integrations
  - Products
  - Test case management
  - Automated testing
  - Cloud-based testing
url: https://www.lambdatest.com/support/docs/hyperexecute-algoqa-integration/
site_name: LambdaTest
slug: hyperexecute-algoqa-integration/
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
          "name": "Integration with Products",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-algoqa-integration/"
        }]
      })
    }}
></script>

algoQA is an AI Native software testing platform that automates end-to-end tests across web, mobile, desktop, and API applications. It generates optimal test cases, datasets, and executable scripts, reducing manual effort and improving test coverage.

This document will guide you how to integrate your algoQA project with HyperExecute

## Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environment Variable](/support/docs/hyperexecute-environment-variable-setup/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.

## Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the algoQA from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/algoQA-HyperExecute-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
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

## Step 3: Configure YAML in your Test Suite

```yaml
---
version: 0.1
globalTimeout: 150
testSuiteTimeout: 150
testSuiteStep: 150

runson: win

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 2

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - .m2

pre:
  - mvn -Dmaven.repo.local=./.m2 dependency:resolve

report: true
partialReports:
    type: json
    location: target/
    frameworkName: extent-native
  
uploadArtifacts:
  - name: FinalReport 
    path:
    - ExtentReports/**

testDiscovery:
  type: automatic
  mode: static
  args:
    featureFilePaths: src/test/java/features/
    frameWork: java

testRunnerCommand: mvn test `-Dplatname=win `-Dmaven.repo.local=./.m2 `-Dcucumber.features="$test"

jobLabel: ['HYP', 'algoQA']
```

## Step 4: Amend in your ApplicationSettings.xml file

In your `ApplicationSettings.xml` file, update the following capabilities:

- **BrowserType :** It should be Lambda.
- **LambdaTestBuild :** Provide your build name.
- **LambdaTestURL :** Provide your HUB URL. For e.g. `https://username:access-key@hub.lambdatest.com/wd/hub`

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

<img loading="lazy" src={require('../assets/images/hyperexecute/integration/products/algoqa/1.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>
