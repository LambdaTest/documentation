---
id: kane-ai-automation-code-generation
title: KaneAI Automation Code Generation
hide_title: false
sidebar_label: Automation Code Generation
description: Explore KaneAI’s features and components to generate automation test code.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai code gen
url: https://www.testmu.ai/support/docs/kane-ai-automation-code-generation
site_name: LambdaTest
slug: kane-ai-automation-code-generation
---

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
