---
id: kane-ai-automation-code-generation
title: KaneAI Automation Code Generation
hide_title: false
sidebar_label: Code Generation
description: Explore KaneAI’s features and components to generate automation test code.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai code gen
  - automation code generation
  - generate test scripts from natural language
  - export automation code
  - test script generation multiple frameworks
  - convert manual tests to code
  - AI generated test scripts
  - codeless to code automation
  - selenium test generation
  - playwright test generation
  - download automation scripts
url: https://www.testmuai.com/support/docs/kane-ai-automation-code-generation/
site_name: TestMu AI
slug: kane-ai-automation-code-generation/
canonical: https://www.testmuai.com/support/docs/kane-ai-automation-code-generation/
---

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
          "name": "KaneAI Code Gen",
          "item": `${BRAND_URL}/support/docs/kane-ai-automation-code-generation/`
        }]
      })
    }}
></script>
KaneAI generates automation scripts in multiple frameworks and languages based on natural language inputs from users. KaneAI is available for desktop web applications as well as native mobile applications currently.

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-button.png').default} alt="generated-code-listing" className="doc_img"/>
Click the `Generate New Code` button to go to code generation page where you can select desired framework and language.

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-page.png').default} alt="code-generation-dashboard" className="doc_img"/>

## Web Frameworks

### Selenium
Selenium is your go-to tool for cross-browser testing, enabling automated testing across different web browsers like Chrome, Firefox, Safari, and Edge. It's perfect for end-to-end testing of web applications. With Kane AI, you can generate Selenium code in:

- **Python:** PyTest is used to generate Selenium Python code.

:::info
Support for Java language in Selenium has been restricted for major improvements and will be made available soon.
:::

:::tip
 By default all KaneAI authored tests automation scripts for Web are generated in Selenium Python.
:::

### Playwright
Playwright is a fast and reliable end-to-end testing for complex modern web applications it uses a single API to automate Chromium, Firefox, and WebKit. You can generate Playwright code in:

- **JavaScript**
- **Python** 

:::info
Support for Playwright framework has been restricted for major improvements and will be made available soon.
:::

### Cypress
Cypress is a modern web front-end testing tool built with JavaScript Mocha. It operates directly on the browsers without the need for Selenium. Its unique DOM manipulation technique makes it a very developer and QA friendly tool. You can generate Cypress code in:

- **JavaScript**

:::info 
Support for Cypress framework has been restricted for major improvements and will be made available soon. Additionally, Cypress won't be available for test cases where **Switching Tabs** or **File Upload** is present as it's not inherently supported by the framework.
:::

### WebdriverIO
WebdriverIO is a popular automation testing framework for web and mobile applications. It is built on top of the WebDriver protocol and provides a simple and flexible API for writing tests. You can generate WebdriverIO code in:

- **JavaScript**

:::info 
Support for WebdriverIO framework has been restricted for major improvements and will be made available soon.
:::

## App Frameworks

### Appium
Appium is an open-source automation tool for running scripts and testing native applications and mobile web apps on different platforms like iOS and Android. You can generate Appium code in:

- **Python:**  PyTest is used to generate Appium Python script. 
- **Java:** TestNG is used to generate Appium Java scripts.
- **JavaScript** : The code generation for the Appium framework in JavaScript is being rolled out gradually and is not yet generally available.

:::tip
By default all KaneAI authored tests automation scripts for App are generated in Appium Python.
:::

:::note
 For now test runs only work for code generation in Selenium - Python & Appium Python. The support for others will be rolled out shortly.
:::

## Understanding the Code Tab

After code generation completes, the **Code** tab shows the status of each generated code entry and lets you run a Sample Run Execution to validate it before adding the test case to a full Test Run.

<img loading="lazy" src={require('../assets/images/kane-ai/code-gen-view.png').default} alt="KaneAI Code tab showing generated code with status and actions" className="doc_img"/>

### Code Generation States

| State | What it means |
|---|---|
| **Generating** | Code is being created. No actions are available until generation finishes. |
| **Unverified** | Code generation is complete, but a Sample Run Execution has not been run, or the test case has changed since the last run. |
| **Verifying** | A Sample Run Execution is in progress via HyperExecute. |
| **Verified** | The most recent Sample Run Execution completed successfully. |

### Actions Available After Code is Generated

Once code is generated, the following actions are available:

- **Execute & Verify** — Triggers a Sample Run Execution on HyperExecute. This runs the generated code the same way a real KaneAI test run would, including respecting assertion outcomes. While the run is in progress, the status changes to **Verifying** and a **Sample execution in progress · View in HyperExecute** link appears. Once complete, the status updates to **Verified** and the button label changes to **Execute**.
- **Download** — Downloads the generated code to your local machine.

### Sample Run Execution Behavior

- Sample Run Execution can only be initiated from the **Code** tab of a test case.
- The **Execute** button is always enabled — you can proceed to run the test on HyperExecute regardless of whether a Sample Run Execution has passed, failed, or not been triggered.

### Adding Test Cases to a Test Run

Test cases with generated code can be added to a Test Run regardless of the Sample Run Execution status — whether it passed, failed, or was never triggered. The only cases where a test case is not available for selection in a Test Run are:

- Code generation failed or was not initiated.
- Code generation is still in progress.
