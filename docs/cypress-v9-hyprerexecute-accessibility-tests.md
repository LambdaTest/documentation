---
id: cypress-v9-hyprerexecute-accessibility-tests
title: Accessibility Testing on HyperExecute using Cypress v9
hide_title: false
sidebar_label:  Cypress v9
description: Run Accessibility Automation with Cypress v9 on HyperExecute to detect and report accessibility issues during automated execution.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Cypress
    - Cypress version 9
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/
site_name: TestMu AI
slug: cypress-v9-hyprerexecute-accessibility-tests/
canonical: https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/
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
          "name": "Cypress v9 Accessibility on HyperExecute",
          "item": `${BRAND_URL}/support/docs/cypress-v9-hyprerexecute-accessibility-tests/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/"
    },
    "headline": "Accessibility Testing on HyperExecute using Cypress v9",
    "description": "Run Accessibility Automation with Cypress v9 on HyperExecute to detect and report accessibility issues during automated execution.",
    "url": "https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "HyperExecute YAML file which contains all the necessary instructions.; HyperExecute CLI in order to initiate a test execution Job .; Your TestMu AI Username and Access key; Setup your local machine as per your testing framework..",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "highlight-next-line",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### 2. Add the capabilities in the YAML file\n\nTo enable the accessibility testing within your automated test suite, set the `accessibility: true` in the [cypressOps](/support/docs/deep-dive-into-hyperexecute-yaml/#cypressops) flag of your YAML file. You can also define other settings capabilities as described below.\n\n```yaml title=\"hyperexecute.yaml\"\ncypressOps:\n  accessibility: true                 #Enable accessibility testing\n  accessibilityWcagVersion: \"wcag21a\" #Specify WCAG version (e.g., WCAG 2.1 Level A)\n  accessibilityBestPractice: false    #Exclude best practice issues from results\n  accessibilityNeedsReview: true      #Include issues that need review"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. In the support/index.js file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### 4. In the `plugins/index.js` file\n\nAdd this code snippet in your `cypress/plugins/index.jss` file.\n\n```javascript title=\"cypress/plugins/index.js\"\nconst lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');\n\nmodule.exports = (on, config) => {\n  // `on` is used to hook into various events Cypress emits\n  // `config` is the resolved Cypress config\n  lambdatestAccessibility(on, config);\n  return config;\n};"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Run the below command in your terminal at the root folder of the project",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "./hyperexecute --config RELATIVE_PATH_OF_YOUR_YAML_FILE"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Step-by-Step Guide to Trigger Your Test",
      "description": "Run Accessibility Automation with Cypress v9 on HyperExecute to detect and report accessibility issues during automated execution.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup Your Test Suite",
          "text": "To configure and test the system, you may use your existing project. For demonstration purposes, this guide utilizes a sample repository. Download or Clone the code sample from the TestMu AI GitHub repository to run your tests. The HyperExecute CLI is used for triggering tests on HyperExecute. It is recommend to download the HyperExecute CLI binary on the host system to perform the tests on HyperExecute. The CLI download site for various platforms is displayed below: Export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/#step-1-setup-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Update the Necessary Capabilities and Configurations in your project",
          "text": "You will have to pass the npm i lambdatest-cypress-cli command in your pre steps to install the TestMu AI Cypress CLI which will be used to execute your Cypress tests. To enable the accessibility testing within your automated test suite, set the accessibility: true in the cypressOps flag of your YAML file. You can also define other settings capabilities as described below. Add this import statement in your support/index.js file to import the acceessibility scanner dependency Add this code snippet in your cypress/plugins/index.jss file.",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/#step-2-update-the-necessary-capabilities-and-configurations-in-your-project"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute and Monitor your Test",
          "text": "Run the below command in your terminal at the root folder of the project: NOTE : In case of macOS, if you get a permission denied warning while executing CLI, simply run chmod u+x ./hyperexecute to allow permission. In case you get a security popup, allow it from your System Preferences \u2192 Security & Privacy \u2192 General tab. OR use this command if you have not exported your username and access key in the step 1. {./hyperexecute --user ${ YOURLAMBDATESTUSERNAME()} --key ${ YOURLAMBDATESTACCESSKEY()} --config RELATIVEPATHOFYOURYAMLFILE } Now visit the Automation Dashboard and click on the Accessibility tab to check the report generated.",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-hyprerexecute-accessibility-tests/#step-3-execute-and-monitor-your-test"
        }
      ]
    }
  ]) }}
/>
This document provides a detailed, step-by-step walkthrough for executing automated accessibility tests using <BrandName />'s Accessibility Tool on HyperExecute using Cypress v9 and below.
:::note
This documentation is applicable for **Cypress v9** and **previous versions**.

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
Export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

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
  - npm install cypress@9.6.1 --save-dev
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

#### 3. In the `support/index.js` file

Add this import statement in your `support/index.js` file to import the acceessibility scanner dependency

```javascript title="cypress/support/index.js"
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 4. In the `plugins/index.js` file

Add this code snippet in your `cypress/plugins/index.jss` file.

```javascript title="cypress/plugins/index.js"
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  lambdatestAccessibility(on, config);
  return config;
};
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

Now visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard) and click on the Accessibility tab to check the report generated.

<img loading="lazy" src={require('../assets/images/accessibility-testing/cypress/hyp-cyp9.png').default} alt="automation-dashboard" className="doc_img"/>
