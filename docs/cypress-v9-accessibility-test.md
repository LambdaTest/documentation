---
id: cypress-v9-accessibility-test
title: Automation Tests with Accessibility Tool using Cypress v9
hide_title: false
sidebar_label:  Cypress v9 
description: Run Accessibility Automation in Cypress v9 to detect and report accessibility issues during automated web test execution.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Cypress
    - Cypress version 9
    - Automation
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/
site_name: TestMu AI
slug: cypress-v9-accessibility-test/
canonical: https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/
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
          "name": "Cypress v9 Accessibility Automation",
          "item": `${BRAND_URL}/support/docs/cypress-v9-accessibility-test/`
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
      "@id": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/"
    },
    "headline": "Automation Tests with Accessibility Tool using Cypress v9",
    "description": "Run Accessibility Automation in Cypress v9 to detect and report accessibility issues during automated web test execution.",
    "url": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "keywords": [
      "TestMu AI",
      "Accessibility",
      "Testing"
    ],
    "proficiencyLevel": "Beginner",
    "dependencies": "Your TestMu AI Username and Access key; Setup your local machine as per your testing framework..",
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
        "name": "Step 1: Setup Your Test Suite",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n### Step 2: Establish User Authentication\n\nNow, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).\n\nRun the below mentioned commands in your terminal to setup the CLI and the environment variables.\n\n<Tabs className=\"docs__val\">\n\n<TabItem value=\"bash\" label=\"Linux / MacOS\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-bash\">\n  {`export LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nexport LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n\n<TabItem value=\"powershell\" label=\"Windows\" default>\n\n  <div className=\"lambdatest__codeblock\">\n    <CodeBlock className=\"language-powershell\">\n  {`set LT_USERNAME=\"${ YOUR_LAMBDATEST_USERNAME()}\"\nset LT_ACCESS_KEY=\"${ YOUR_LAMBDATEST_ACCESS_KEY()}\"`}\n  <\/CodeBlock>\n<\/div>\n\n<\/TabItem>\n<\/Tabs>\n\n### Step 3: Update the Necessary Capabilities and Configurations in your project\n\n#### 1. Install the Cypress CLI\n\n- If you are passing npm dependencies through **package.json**, then add the below mentioned line there:\n\n```javascript title=\"package.json\"\n// ...\n\"devDependencies\": {\n  \"@cypress/eslint-plugin-dev\": \"5.0.0\",\n  // highlight-next-line\n  \"lambdatest-cypress-cli\": \"^3.0.30\"\n},"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Install the Cypress CLI",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n- if you are not passing npm dependency in **<BrandName />-config.json** you can run\n\n```bash\nnpm i lambdatest-cypress-cli   "
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. In the support/index.js file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "JavaScript",
        "text": "import 'lambdatest-cypress-cli/accessibility/scanner'"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "3. In the cypress/plugins/index.js file",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\n#### 4. Add the capabilities in the `lambdatest-config.json` file\n\nTo enable the accessibility testing within your automated test suite, set the `accessibility: true` in your configuration file. You can also define other settings capabilities as described below.\n\n```javascript title=\"lambdatest-config.json\"\n\"accessibility\" : true,                 // Enable accessibility testing\n\"accessibility.wcagVersion\": \"wcag21a\", // Specify WCAG version (e.g., WCAG 2.1 Level A)\n\"accessibility.bestPractice\": false,    // Exclude best practice issues from results\n\"accessibility.needsReview\": true       // Include issues that need review"
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
      "description": "Run Accessibility Automation in Cypress v9 to detect and report accessibility issues during automated web test execution.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Setup Your Test Suite",
          "text": "You can use your own project to configure and test it. For demo purposes, we are using the sample repository. Download or Clone the code sample from the TestMu AI GitHub repository to run your tests. Configure the desired capabilities based on your test requirements. For example:",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/#step-1-setup-your-test-suite"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Establish User Authentication",
          "text": "Now, you need to export your environment variables LTUSERNAME and LTACCESSKEY* that are available in the TestMu AI Profile page. Run the below mentioned commands in your terminal to setup the CLI and the environment variables. {`export LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" export LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`} {`set LTUSERNAME=\"${ YOURLAMBDATEST_USERNAME()}\" set LTACCESSKEY=\"${ YOURLAMBDATESTACCESS_KEY()}\"`}",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/#step-2-establish-user-authentication"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Update the Necessary Capabilities and Configurations in your project",
          "text": "If you are passing npm dependencies through package.json, then add the below mentioned line there: If you are using TestMu AI-config.json to pass the dependency, then pass the given line there: if you are not passing npm dependency in TestMu AI-config.json you can run Add this import statement in your index.js file to import the acceessibility scanner dependency Add this template in your index.js file. To enable the accessibility testing within your automated test suite, set the accessibility: true in your configuration file. You can also define other settings capabilities as described below.",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/#step-3-update-the-necessary-capabilities-and-configurations-in-your-project"
        },
        {
          "@type": "HowToStep",
          "position": 4,
          "name": "Step 4: Execute and Monitor your Test",
          "text": "Now execute your tests and visit the Automation Dashboard. Click on the Accessibility tab and check the report generated.",
          "url": "https://www.testmuai.com/support/docs/cypress-v9-accessibility-test/#step-4-execute-and-monitor-your-test"
        }
      ]
    }
  ]) }}
/>

This document walks you through the step by step guide for executing the automation tests of your website with <BrandName />'s Accessibility Tool using Cypress v9 and below.

> **NOTE:** This documentation is applicable for **Cypress v9** and **previous versions**.

## Prerequisites

- Your [<BrandName /> Username and Access key](/support/docs/using-environment-variables-for-authentication-credentials/)
- Setup your local machine as per your testing framework.

## Step-by-Step Guide to Trigger Your Test

### Step 1: Setup Your Test Suite

You can use your own project to configure and test it. For demo purposes, we are using the sample repository.

:::tip sample repo
Download or Clone the code sample from the <BrandName /> GitHub repository to run your tests.

<a href="https://github.com/lambdatest/<BrandName />-accessibility-cypress-v9" target="_blank" className="github__anchor"><img loading="lazy" src={require('../assets/images/icons/github.png').default} alt="Image" className="doc_img"/> View on GitHub</a>
:::

Configure the desired capabilities based on your test requirements. For example:

```yaml reference title="lambdatest-config.json"
  https://github.com/LambdaTest/lambdatest-accessibility-cypress-v9/blob/main/lambdatest-config.json
```

### Step 2: Establish User Authentication

Now, you need to export your environment variables *LT_USERNAME* and *LT_ACCESS_KEY* that are available in the [<BrandName /> Profile page](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/details/profile).

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

```javascript title="package.json"
// ...
"devDependencies": {
  "@cypress/eslint-plugin-dev": "5.0.0",
  // highlight-next-line
  "lambdatest-cypress-cli": "^3.0.30"
},
```

- If you are using **<BrandName />-config.json** to pass the dependency, then pass the given line there:

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

- if you are not passing npm dependency in **<BrandName />-config.json** you can run

```bash
npm i lambdatest-cypress-cli   
```

#### 2. In the `support/index.js` file

Add this import statement in your `index.js` file to import the acceessibility scanner dependency

```javascript
import 'lambdatest-cypress-cli/accessibility/scanner'
```

#### 3. In the `cypress/plugins/index.js` file

Add this template in your `index.js` file.

```javascript title="index.js"
const lambdatestAccessibility = require('lambdatest-cypress-cli/accessibility/plugin');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  
  lambdatestAccessibility(on, config);
  return config;
}

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

Now execute your tests and visit the [Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://accounts.lambdatest.com/dashboard). Click on the Accessibility tab and check the report generated.

<img loading="lazy" src={require('../assets/images/accessibility-testing/cypress/cypressv9.png').default} alt="automation-dashboard" className="doc_img"/>
