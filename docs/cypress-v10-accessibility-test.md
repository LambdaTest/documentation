---
id: cypress-v10-accessibility-test
title: Automation Tests with Accessibility Tool using Cypress v10
hide_title: false
sidebar_label:  Cypress v10 
description: Use TestMu AI Accessibility DevTools to detect and report accessibility issues with automation, following WCAG guidelines, in your cypress tests for version 10 and above
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Cypress
    - Cypress version 10
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/cypress-v10-accessibility-test/
site_name: LambdaTest
slug: cypress-v10-accessibility-test/
canonical: https://www.testmuai.com/support/docs/cypress-v10-accessibility-test/
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
          "item": `${BRAND_URL}/support/docs/cypress-v10-accessibility-test/`
        }]
      })
    }}
></script>

This guide takes you step-by-step through the process of using <BrandName />'s Accessibility Tool with Cypress v10 and above to run automated tests for your website.

> **NOTE:** This documentation is applicable for **Cypress v10** and **later versions**.

## Prerequisites

- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

<a href="https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

Configure the desired capabilities based on your test requirements. For example:

```yaml reference title="lambdatest-config.json"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/lambdatest-config.json
```

### Step 2: Establish User Authentication

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

### Step 3: Update the Necessary Capabilities and Configurations in your project

#### 1. Install the Cypress CLI

- If you are passing npm dependencies through **package.json**, then add the below mentioned line there:

```javascript reference title="package.json"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/package.json
```

- If you are using **lambdatest-config.json** to pass the dependency, then pass the given line there:

```javascript title="lambdatest-config.json"
"run_settings": {
  //...
  "npm_dependencies": {
     "cypress": "10.0.0",
     "lambdatest-cypress-cli": "^3.0.30"
  },
  //...
}
```

- if you are not passing npm dependency in **lambdatest-config.json** you can run

```bash
npm i lambdatest-cypress-cli   
```

#### 2. In the `e2e.js` file

Add this import statement in your `e2e.js` file to import the acceessibility scanner dependency

```javascript
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 3. In the `cypress.config.js` file

Add this template in your config file.

```javascript reference title="cypress.config.js"
https://github.com/LambdaTest/lambdatest-accessibility-cypress-v10/blob/main/cypress.config.js
```

#### 4. Add the capabilities in the `lambdatest-config.json` file

To enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.

```javascript title="lambdatest-config.json"
"accessibility" : true,                 // Enable accessibility testing
"accessibility.wcagVersion": "wcag21a", // Specify WCAG version (e.g., WCAG 2.1 Level A)
"accessibility.bestPractice": false,    // Exclude best practice issues from results
"accessibility.needsReview": true       // Include issues that need review
```

### Step 4: Execute and Monitor your Test

Now execute your tests and visit the [Automation Dashboard](https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

```bash
lambdatest-cypress-cli run
```

<img loading="lazy" src={require('../assets/images/accessibility-testing/cypress/cypressv10.png').default} alt="automation-dashboard" className="doc_img"/>
