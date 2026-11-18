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
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/kane-ai-automation-code-generation/"
    },
    "headline": "KaneAI Automation Code Generation",
    "description": "Explore KaneAI\u2019s features and components to generate automation test code.",
    "url": "https://www.testmuai.com/support/docs/kane-ai-automation-code-generation/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai code gen"
    ],
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
    "dateModified": "2026-09-09T20:21:05+05:30"
  }) }}
/>
KaneAI generates automation scripts in multiple frameworks and languages based on natural language inputs from users. KaneAI is available for desktop web applications as well as native mobile applications currently.

:::note
KaneAI offers two authoring experiences, Classic and New Experience. New Experience is being rolled out in phases. To enable New Experience for your organization, reach out to our support team. The frameworks and languages supported by each experience are listed below.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-button.png').default} alt="generated-code-listing" className="doc_img"/>
Click the `Generate New Code` button to go to code generation page where you can select desired framework and language.

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-page.png').default} alt="code-generation-dashboard" className="doc_img"/>

## Supported Frameworks and Languages

The table below shows the frameworks and languages KaneAI can generate code in, and how each is available in Classic and New Experience.

<div style={{overflowX: 'auto'}}>
<table style={{width: '100%', minWidth: '640px', borderCollapse: 'collapse', display: 'table', tableLayout: 'fixed'}}>
  <thead>
    <tr>
      <th style={{textAlign: 'left', width: '18%'}}>Framework</th>
      <th style={{textAlign: 'left', width: '16%'}}>Language</th>
      <th style={{textAlign: 'center', width: '33%', backgroundColor: 'var(--ifm-color-emphasis-100)'}}>Classic</th>
      <th style={{textAlign: 'center', width: '33%', backgroundColor: 'var(--ifm-color-emphasis-100)'}}>New Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}><strong>Selenium</strong></td>
      <td>Python</td>
      <td style={{textAlign: 'center'}}>Available (default)</td>
      <td style={{textAlign: 'center', opacity: 0.55}}>Not available</td>
    </tr>
    <tr>
      <td>Java</td>
      <td style={{textAlign: 'center'}}>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center', opacity: 0.55}}>Not available</td>
    </tr>
    <tr>
      <td rowSpan={3}><strong>Playwright</strong></td>
      <td>Python</td>
      <td style={{textAlign: 'center'}}>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>Available</td>
    </tr>
    <tr>
      <td>C#</td>
      <td style={{textAlign: 'center'}}>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center', opacity: 0.55}}>Not available</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td style={{textAlign: 'center'}}>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>Available</td>
    </tr>
    <tr>
      <td><strong>Cypress</strong></td>
      <td>JavaScript</td>
      <td colSpan={2} style={{textAlign: 'center'}}>Coming soon</td>
    </tr>
    <tr>
      <td><strong>WebdriverIO</strong></td>
      <td>JavaScript</td>
      <td colSpan={2} style={{textAlign: 'center'}}>Coming soon</td>
    </tr>
    <tr>
      <td><strong>Appium</strong></td>
      <td>Python</td>
      <td style={{textAlign: 'center'}}>Available (default)</td>
      <td style={{textAlign: 'center'}}>Coming soon</td>
    </tr>
  </tbody>
</table>
</div>

<br/>

:::note
**Available on request.** Please reach out to Support to enable it.
:::

## Understanding the Code Tab

The **Code** tab shows your generated exports, their generation outcomes, and actions to view, download, or create a pull request for the code.

<img loading="lazy" src={require('../assets/images/kane-ai/test-manager/quick-run/code-tab.png').default} alt="KaneAI Code tab with a generation-success icon beside the export name, Create PR, Download, and Generate new code" className="doc_img"/>

### Check Whether Code is Available

Check the export on the **Code** tab to see whether code was generated successfully. The test case's **Test Summary** status is separate: a test case labeled **Unverified** can still have an available code export.

Use **Generate new code** to create an export in a supported framework and language.

### Code Generation Outcomes

The icon beside an export name indicates whether code generation succeeded or failed. It does not indicate whether the test passed an execution.

| Outcome | What it means |
|---|---|
| **Generating** | Code is being created. No actions are available until generation finishes. |
| **Generation succeeded** | The export is available. Click its name to open the code. |
| **Generation failed** | The export shows the failure reason inline. Click **Generate again** to retry. |

These describe generation outcomes, not additional labels on the code card. They do not change the test case's **Test Summary** status.

### Actions Available After Code is Generated

Once code is generated, the following actions are available:

- **Export name**: Opens the generated code. Click the name instead of a separate **View code** button.
- **Download**: Downloads the generated code to your local machine.
- **Create PR**: Creates a pull request through your configured integration, subject to existing permissions.
- **Generate new code**: Creates another export using your chosen framework and language.

### Execute the Test Case

To execute a single case, open **Test Summary** and click **Quick Run**. Select compatible configurations, review the run settings, and click **Start quick run**. This creates one Test Run with one instance per selected configuration. See [Quick Run](/support/docs/kaneai-quick-run/) for the full walkthrough.

- **Classic** executes generated code. Execution requires usable code; resolve missing, in-progress, or failed generation first.
- **New Experience** executes through **Evidence Reporting**, without using generated code. A missing or failed export does not by itself block Evidence execution when the test case and selected configurations are otherwise eligible.

For a run containing multiple test cases, follow [Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/).

:::note
KaneAI code export leverages public libraries. The generated automation scripts depend on these published packages:

- Playwright Python: [testmu-playwright-python](https://pypi.org/project/testmu-playwright-python/)
- Playwright C#: [TestmuAI.Playwright.Bindings](https://libraries.io/nuget/TestmuAI.Playwright.Bindings)
- Playwright JavaScript: [@testmuai/playwright-bindings](https://www.npmjs.com/package/@testmuai/playwright-bindings)
- Selenium Java: [testmuai-selenium-bindings](https://mvnrepository.com/artifact/io.github.lambdatest/testmuai-selenium-bindings)
:::
