---
id: hyperexecute-environment-variable-setup
title: HyperExecute Environment Variable Setup
hide_title: true
sidebar_label: HyperExecute Environment Variable Setup
description: Find out how to get access to Hyperexecute authentication credentials, fetching them from the Automation tab in your TestMu AI profile, and configuring them on Mac OSX/Linux, Windows systems.
keywords:
- LambdaTest automation
- LambdaTest environment variables
- LambdaTest setup
- Hyperexecute environment variables
url: https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/
site_name: LambdaTest
slug: hyperexecute-environment-variable-setup/
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
          "name": "Hyperexecute Environment Variable Setup",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-environment-variable-setup/"
        }]
      })
    }}
></script>

# HyperExecute Environment Variable Setup
***

To provide you with a secure [cross-browser testing](https://www.lambdatest.com) environment on-cloud, we recommend integrating LambdaTest Authentication Credentials in your test scripts. This would allow our cloud servers to establish a secure connection between your local system and [HyperExecute](https://hyperexecute.lambdatest.com/). This document will help you understand how to set up HyperExecute environment variable for your respective operating system. This set up would also help authenticate your colleague's test cases when executed against an individual account.

## Where to find LambdaTest Authentication Credentials?
***

LambdaTest Authentication Credentials consists of two fields:

1. LambdaTest Username
2. LambdaTest Access Key

>You can find these authentication credentials by either visiting the [HyperExecute Dashboard](https://hyperexecute.lambdatest.com/) or your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile).

#**Step 1:** Go to the right side Profile dropdown and select **Account Settings**.

**Step 2:** Under Account Settings, go to **Password & Security**

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/username-accesskey/method1.mp4').default} type="video/mp4" />
</video>

**Step 3:** You will find your LT Username and Access Key here, this would be required in order to trigger a Job using the [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/)

:::tip
You can directly copy your Username and Access Key using shortcut key button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/hyperexecute/knowledge-base/username-accesskey/method2.mp4').default} type="video/mp4" />
</video>
:::

## Configuring Environment Variables on your Operating System

Before the tests are run, please set the environment variables LT_USERNAME & LT_ACCESS_KEY from the terminal. The account details are available on your [LambdaTest Profile](https://accounts.lambdatest.com/detail/profile) page.

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
      HyperExecute Environment Variable Setup
      </span>
    </li>
  </ul>
</nav>
