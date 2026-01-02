---
id: hyperexecute-sikuli-integration
title: Integrate Sikuli with HyperExecute
hide_title: false
sidebar_label: Sikuli
description:  Automate the visual testing of any software by integrating Sikuli with HyperExecute.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - sikuli
  - Integrations
  - Products
  - Automated testing alerts
  - Sikuli automation
  - Visual UI automation
  - Desktop application automation
  - Cross-platform automation
url: https://www.testmu.ai/support/docs/hyperexecute-sikuli-integration
site_name: LambdaTest
slug: hyperexecute-sikuli-integration
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-sikuli-integration/`
        }]
      })
    }}
></script>

Sikuli is an open-source tool that empowers you to automate tasks on your computer screen. It utilizes a unique approach called "visual image match" to interact with graphical user interfaces (GUIs).

This documentation guides you on how to integrate Sikuli seamlessly with HyperExecute to leverage the power of image recognition.

## Prerequisites
- An active <BrandName /> account with Admin or User-level access.
- Refer to the [Sikuli](https://www.softwaretestinghelp.com/sikuli-tutorial-part-1/) documentation to understand how to write a sikuli test.

## Step 1: Build your Visual Test with SikuliX

Write your project code and all the other necessary dependencies in your code-repository.

## Step 2: Configure your HyperExecute YAML

Here is a sample YAML file, you can configure it with different [YAML flags](/support/docs/hyperexecute-yaml-parameters/) as per your requirements.

```yaml
---
version: 0.1
runson: win
testSuiteTimeout: 90

autosplit: true

retryOnFailure: true
maxRetries: 1

concurrency: 1

env:
  CACHE_DIR: m2_cache_dir

cacheKey: '{{ checksum "pom.xml" }}'
cacheDirectories:
  - $CACHE_DIR

runtime:
    language: java
    version: 17

pre:
  # Create the Cache directory
  - mvn -Dmaven.repo.local=./.m2 -Dmaven.test.skip=true clean install

testDiscovery:
  type: raw
  mode: dynamic
  shell: bash
  command: grep 'Test_1' testng.xml | awk '{print$4}' | sed 's/name=//g' | sed 's/\x3e//g' | sed 's/"//' | sed 's/"//'

testRunnerCommand: mvn test `-Dtests=$test
```

## Step 3: Setup your Authentication / Environment Variables

After configuring your project and HyperExecute YAML file, you need to setup the CLI and the environment variables.

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

## Step 4: Execute and Monitor your Project

:::info note
In case of MacOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.
:::

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

> Visit the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/hyperexecute) and check your Job status. 