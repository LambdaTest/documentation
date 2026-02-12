---
id: hyperexecute-k6-testing
title: Execute k6 Tests on HyperExecute
hide_title: false
sidebar_label: k6
description: Prevent app launch disaster! Test app performance under load with HyperExecute and JMeter. Get real-time insights, identify weaknesses & ensure smooth launch. 
keywords:
  - hyperexecute performance testing
  - hyperexecute
  - testmu ai
  - k6
url: https://www.testmuai.com/support/docs/hyperexecute-k6-testing/
site_name: TestMu AI
slug: hyperexecute-k6-testing/
canonical: https://www.testmuai.com/support/docs/hyperexecute-k6-testing/
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
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Languages and Framework",
          "item": `${BRAND_URL}/support/docs/hyperexecute-k6-testing/`
        }]
      })
    }}
></script>
[k6](https://grafana.com/docs/k6/latest/) is an open-source tool designed to make load testing easy and accessible for developers and QA engineers. It's specifically built for testing the performance of APIs, microservices, and websites.

[HyperExecute](/support/docs/getting-started-with-hyperexecute/) is an AI Native Test Orchestration Cloud Platform that empowers you to run **end-to-end** tests **quickly** and **efficiently**. It provides Just-in-Time (JIT) testing infrastructure with fast execution **speeds**, **smart orchestration**, and **detailed logs**.

This guide details how to execute your **k6** tests on **HyperExecute** using [YAML 0.1](/support/docs/hyperexecute-yaml-parameters/)

### Prerequisites

To run the Tests on HyperExecute from your Local System, you are required:

- Your <BrandName /> [Username and Access key](/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](/support/docs/hyperexecute-environment-variable-setup/)

### Step 1: Configure Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the k6 from the <BrandName /> GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/LambdaTest/HYP-K6-browser-sample" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

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

You will have to add these flags mandatorily in your YAML file to execute the k6 tests:

- [runtime flag](/support/docs/deep-dive-into-hyperexecute-yaml/#runtime) to download and install the k6 of that respective version.

```yaml
runtime:
    addons:
      - name: k6
        version: "v0.52.0"
```

- [env flag](/support/docs/deep-dive-into-hyperexecute-yaml/#env) is used to install certain dependencies to run your test cases

```yaml
env: 
  K6_BROWSER_ENABLED: true  #Indicates whether browser emulation is enabled for the k6 test.
  K6_BROWSER_HEADLESS: false #Determines if the browser should run in headless mode
  HE_CONTEXT_K6_SETUP_DEFAULT_BROWSER_PATH: true
```

```yaml reference title="hyperexecute.yaml"
https://github.com/LambdaTest/HYP-K6-browser-sample/blob/main/hyperexecute.yaml
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

### Step 5: Monitor the Test Execution

Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/k6/output.png').default} alt="Image" className="doc_img"/>
