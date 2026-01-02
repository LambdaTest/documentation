---
id: cypress-v10-hyprerexecute-accessibility-tests
title: Accessibility Testing on HyperExecute using Cypress v10
hide_title: false
sidebar_label:  Cypress v10 
description: Use TestMu AI Accessibility DevTools with HyperExecute to detect and report accessibility issues, adhering to WCAG guidelines, in your cypress tests for version 10 and above
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Cypress
    - Cypress version 10
    - Automation
    - Accessibility Testing Settings
url: https://www.testmu.ai/support/docs/cypress-v10-hyprerexecute-accessibility-tests
site_name: LambdaTest
slug: cypress-v10-hyprerexecute-accessibility-tests
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
          "item": `${BRAND_URL}/support/docs/cypress-v10-hyprerexecute-accessibility-tests/`
        }]
      })
    }}
></script>

This document provides a detailed, step-by-step walkthrough for executing automated accessibility tests using <BrandName />'s Accessibility Tool on HyperExecute.
:::note
This documentation is applicable for **Cypress v10** and **later versions**.

Please reach out to our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span> to enable the Accessibility feature for your organization.
:::

## Prerequisites
- [HyperExecute YAML](/support/docs/hyperexecute-yaml-version0.2/) file which contains all the necessary instructions.
- [HyperExecute CLI](/support/docs/hyperexecute-cli-run-tests-on-hyperexecute-grid/) in order to initiate a test execution Job .
- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

To configure and test the system, you may use your existing project. For demonstration purposes, this guide utilizes a sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/hyperexecute-cypress-v10-sample" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

#### Download HyperExecute CLI

The *HyperExecute CLI* is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below:

| Platform | HyperExecute CLI download location |
| ---------| --------------------------- |
| Windows | https://downloads.lambdatest.com/hyperexecute/windows/hyperexecute.exe |
| macOS | https://downloads.lambdatest.com/hyperexecute/darwin/hyperexecute |
| Linux | https://downloads.lambdatest.com/hyperexecute/linux/hyperexecute |

#### Setup Environment Variable
Export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://accounts.lambdatest.com/detail/profile).

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

### Step 2: Update the Necessary Capabilities and Configurations in your project

#### 1. Install the Cypress CLI
You will have to pass the `npm i lambdatest-cypress-cli` command in your [pre steps](/support/docs/deep-dive-into-hyperexecute-yaml/#pre) to install the <BrandName /> Cypress CLI which will be used to execute your Cypress tests.

```yaml title="hyperexecute.yaml"
pre:
  - npm install
  - npm install cypress --save-dev
#   highlight-next-line
  - npm i lambdatest-cypress-cli
```

#### 2. Add the capabilities in the YAML file

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in the [cypressOps](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag of your YAML file. You can also define other settings capabilities as described below.

```yaml title="hyperexecute.yaml"
cypressOps:
  accessibility: true                 #Enable accessibility testing
  accessibilityWcagVersion: "wcag21a" #Specify WCAG version (e.g., WCAG 2.1 Level A)
  accessibilityBestPractice: false    #Exclude best practice issues from results
  accessibilityNeedsReview: true      #Include issues that need review
```

#### 3. In the `e2e.js` file

Add this import statement in your `e2e.js` file to import the acceessibility scanner dependency

```javascript title="cypress/support/e2e.js"
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 4. In the `cypress.config.js` file

Add this code snippet in your `cypress.config.js` file.

```javascript title="cypress.config.js"
const { defineConfig } = require("cypress");
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');

module.exports = defineConfig({
    ...//
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
        lambdatestAccessibility(on, config);
        return config;
      },
    },
    ...//
});
```

### Step 3: Execute and Monitor your Test

Run the below command in your terminal at the root folder of the project:

> **NOTE :** In case of macOS, if you get a permission denied warning while executing CLI, simply run **`chmod u+x ./hyperexecute`** to allow permission. In case you get a security popup, allow it from your **System Preferences** → **Security & Privacy** → **General tab**.

```bash
./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE
```

OR use this command if you have not exported your username and access key in the step 1.

<div className="lambdatest__codeblock">
  <CodeBlock className="language-bash">
    {`./hyperexecute --user ${ YOUR_LAMBDATEST_USERNAME()} --key ${ YOUR_LAMBDATEST_ACCESS_KEY()} --config RELATIVE_PATH_OF_YOUR_YAML_FILE `}
  </CodeBlock>
</div>

Now visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard) and click on the Accessibility tab to check the report generated.

<img loading="lazy" src={require('../assets/images/accessibility-testing/cypress/hyp-cyp10.gif').default} alt="automation-dashboard" className="doc_img"/>
