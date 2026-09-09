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

:::note
KaneAI offers two authoring experiences, Classic and New Experience. New Experience is being rolled out in phases. To enable New Experience for your organization, reach out to our support team. The frameworks and languages supported by each experience are listed below.
:::

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-button.png').default} alt="generated-code-listing" className="doc_img"/>
Click the `Generate New Code` button to go to code generation page where you can select desired framework and language.

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-page.png').default} alt="code-generation-dashboard" className="doc_img"/>

## Supported Frameworks and Languages

The table below shows the frameworks and languages KaneAI can generate code in, and the experience each is available under.

<table style={{width: '100%', borderCollapse: 'collapse', display: 'table', tableLayout: 'fixed'}}>
  <thead>
    <tr>
      <th style={{textAlign: 'left', width: '16%'}}>Framework</th>
      <th style={{textAlign: 'left', width: '13%'}}>Language</th>
      <th style={{textAlign: 'left', width: '33%'}}>Availability</th>
      <th style={{textAlign: 'center', width: '19%', backgroundColor: 'var(--ifm-color-emphasis-100)'}}>Classic</th>
      <th style={{textAlign: 'center', width: '19%', backgroundColor: 'var(--ifm-color-emphasis-100)'}}>New Experience</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}><strong>Selenium</strong></td>
      <td>Python</td>
      <td>Generally available (default)</td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
    <tr>
      <td>Java</td>
      <td>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
    <tr>
      <td rowSpan={3}><strong>Playwright</strong></td>
      <td>Python</td>
      <td>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
    </tr>
    <tr>
      <td>C#</td>
      <td>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Available on request <sup style={{color: 'var(--ifm-color-primary)'}}>&#42;</sup></td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
    </tr>
    <tr>
      <td><strong>Cypress</strong></td>
      <td>JavaScript</td>
      <td>Coming soon</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
    <tr>
      <td><strong>WebdriverIO</strong></td>
      <td>JavaScript</td>
      <td>Coming soon</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
    <tr>
      <td><strong>Appium</strong></td>
      <td>Python</td>
      <td>Generally available (default)</td>
      <td style={{textAlign: 'center'}}>&#10003;</td>
      <td style={{textAlign: 'center'}}>&#10007;</td>
    </tr>
  </tbody>
</table>

<br/>

**&#10003;** Supported &nbsp;&nbsp; **&#10007;** Not available. New Experience currently covers Desktop Web only. Mobile is supported in Classic.

:::note
**Available on request.** Please reach out to Support to enable it. These features are partially rolled out and will soon be generally available for all users.
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

- **Execute & Verify**: Triggers a Sample Run Execution on HyperExecute. This runs the generated code the same way a real KaneAI test run would, including respecting assertion outcomes. While the run is in progress, the status changes to **Verifying** and a **Sample execution in progress · View in HyperExecute** link appears. Once complete, the status updates to **Verified** and the button label changes to **Execute**.
- **Download**: Downloads the generated code to your local machine.

### Sample Run Execution Behavior

- Sample Run Execution can only be initiated from the **Code** tab of a test case.
- The **Execute** button is always enabled. You can proceed to run the test on HyperExecute regardless of whether a Sample Run Execution has passed, failed, or not been triggered.

### Adding Test Cases to a Test Run

Test cases with generated code can be added to a Test Run regardless of the Sample Run Execution status, whether it passed, failed, or was never triggered. The only cases where a test case is not available for selection in a Test Run are:

- Code generation failed or was not initiated.
- Code generation is still in progress.

:::note
KaneAI code export leverages public libraries. The generated automation scripts depend on these published packages:

- Playwright Python: [testmu-playwright-python](https://pypi.org/project/testmu-playwright-python/)
- Playwright C#: [TestmuAI.Playwright.Bindings](https://libraries.io/nuget/TestmuAI.Playwright.Bindings)
- Playwright JavaScript: [@testmuai/playwright-bindings](https://www.npmjs.com/package/@testmuai/playwright-bindings)
- Selenium Java: [testmuai-selenium-bindings](https://mvnrepository.com/artifact/io.github.lambdatest/testmuai-selenium-bindings)
:::
