---
id: hyperexecute-gattling-testing
title: Gattling Automation on HyperExecute
hide_title: false
sidebar_label: Gattling
description: Learn how to run Selenium automation tests on HyperExecute using the Gattling framework
keywords:
  - Gattling
  - Gattling selenium
  - Gattling Java Selenium
  - Gattling automation testing
  - selenium webdriver Gattling
  - selenium Gattling testing tutorial
  - Gattling Java Selenium framework
  - lambdatest Gattling
  - frameworks on lambdatest
  - hyperexecute
  - hyperexecute Gattling testing
  - hyperexecute Gattling testing
  - hyperexecute automation testing
  - HyperExecute Selenium automation
url: https://www.lambdatest.com/support/docs/hyperexecute-gattling-testing/
site_name: LambdaTest
slug: hyperexecute-gattling-testing/
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
          "name": "How to run automation tests on HyperExecute using Gattling framework",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-gattling-testing/"
        }]
      })
    }}
></script>
Gatling is an open-source load and performance testing framework designed for testing web applications. It uses a powerful Scala-based DSL to define test scenarios and is capable of simulating thousands of concurrent users, making it ideal for stress and performance testing.

This guide provides a structured approach to integrating the Gatling performance testing framework with the LambdaTest HyperExecute platform

## Prerequisites
To run the Tests on HyperExecute from your Local System, you are required:

- Your LambdaTest [Username and Access key](https://www.lambdatest.com/support/docs/hyperexecute-how-to-get-my-username-and-access-key/)
- [HyperExecute YAML](https://www.lambdatest.com/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](https://www.lambdatest.com/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Setup the [Environmental Variable](https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/)

## Run a Sample Project
### Step 1: Download Project
You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip Sample repo
Download or Clone the code sample for the Gattling Performance Testing from the LambdaTest GitHub repository to run the tests on the HyperExecute.

<a href="https://github.com/prateekLambda/Gatling-performance-hyperexecute" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

### Step 2: Download the CLI in your Project
Download the HyperExecute CLI and copy it into the root folder of the downloaded sample repository.

| Platform | HyperExecute CLI |
| ---------| ---------------- |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |

### Step 3: Configure your hyperexecute.yml file
Here is a complete working YAML configuration that runs Gatling performance tests on linux runners via HyperExecute:

```yaml reference title="hyperexecute.yaml"
https://github.com/prateekLambda/Gatling-performance-hyperexecute/blob/main/HYE.yaml
```

> 📘 For a deeper understanding and project-specific configurations, check out the [YAML documentation](https://www.lambdatest.com/support/docs/hyperexecute-yaml-parameters/).

### Step 4: Execute your Test Suite
From the project root directory, execute the below CLI command in your terminal:

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config hyperexecute.yaml`}
  </CodeBlock>
</div>

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

<img loading="lazy" src={require('../assets/images/hyperexecute/frameworks/performance_testing/gattling.png').default} alt="automation-dashboard"  width="1920" height="868" className="doc_img"/>