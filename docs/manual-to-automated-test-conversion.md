---
id: manual-to-automated-test-conversion
title: "AI Test Generation: Requirements to Code"
hide_title: false
sidebar_label: Generate & Automate Tests
description: Convert manual test requirements into automated test scripts using AI. Generate test scenarios from text, documents, images, audio, Jira tickets, and more,then automate them with KaneAI and export code in Selenium, Playwright, Appium, and other frameworks.
keywords:
  - manual to automated test conversion
  - convert manual tests to automated
  - AI test case generation
  - codeless test automation
  - automated test generation from requirements
  - generate automated tests from documents
  - record and playback test automation
  - AI assisted script generation
  - no-code to code test automation
  - convert test descriptions to scripts
  - generate test scripts from manual test cases
  - natural language test automation
  - AI test script generation
  - observe user interactions to generate tests
  - test automation code export
  - selenium test generation
  - playwright test generation
  - appium test generation
  - codeless to code automation
  - test management to automation
url: https://www.testmuai.com/support/docs/manual-to-automated-test-conversion/
site_name: TestMu AI
slug: manual-to-automated-test-conversion/
canonical: https://www.testmuai.com/support/docs/manual-to-automated-test-conversion/
---

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
          "name": "AI Test Generation: Requirements to Code",
          "item": `${BRAND_URL}/support/docs/manual-to-automated-test-conversion/`
        }]
      })
    }}
></script>

# AI Test Generation: Requirements to Code

<BrandName /> provides a complete workflow to convert your manual test requirements into fully automated test scripts,from requirement input to executable code. This guide walks through the end-to-end flow using **Test Manager** and **KaneAI**.

## Overview

The conversion flow has four stages:

1. **Set up your project** in Test Manager
2. **Provide requirements**,text, documents, images, audio, Jira/ADO tickets, or record user interactions
3. **Generate test scenarios**,AI creates structured test cases from your input
4. **Automate and export code**,convert generated test cases into automation scripts across frameworks

---

## Step 1: Create a Project

Start by creating a project in <BrandName /> Test Manager. A project is the container for all your test cases, test runs, and configurations.

1. Navigate to [Test Manager](https://test-manager.lambdatest.com).
2. Click **Create New Project**.
3. Enter the project name and description.
4. Save the project.

For detailed steps, see [Create Projects](/support/docs/create-projects/).

---

## Step 2: Generate Test Scenarios with AI

Navigate to the **Test Case Listing** page within your project and click **Generate With AI**.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/generate_with_ai_button.png').default} alt="Generate with AI button in Test Manager" width="1347" height="616" className="doc_img"/>

You can also access this from KaneAI by clicking **Generate Scenarios** on the Agent page.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/generate_scenarios_kaneai.png').default} alt="Generate Scenarios from KaneAI" width="1347" height="616" className="doc_img"/>

### Supported Input Formats

Provide your requirements in any of the following formats:

| Input Type | How to Add |
|-----------|------------|
| **Text** | Type your requirement directly in the input box |
| **Documents** | Upload PDFs, spreadsheets (CSV/XLSX), JSON, XML |
| **Images** | Upload screenshots, wireframes, or UI mockups |
| **Audio** | Record audio or upload audio files describing the feature |
| **Videos** | Upload walkthrough or demo videos |
| **Jira Tickets** | Link Jira issues (epics, stories, tasks) via the pin icon |
| **Azure DevOps** | Link ADO work items via the pin icon |

<img loading="lazy" src={require('../assets/images/mobile-app-testing/first_prompt_tets_cases_generation.png').default} alt="Enter requirements for AI test generation" width="1347" height="616" className="doc_img"/>

:::tip
Before generating, configure **Max Scenarios**, **Max Test Cases per Scenario**, and toggle **Memory Enhancement** to leverage your existing test case repository and avoid duplicates.
:::

<img loading="lazy" src={require('../assets/images/mobile-app-testing/configure_generation_settings.png').default} alt="Configure generation settings" width="1347" height="616" className="doc_img"/>

Press **Enter** to generate. The AI analyzes your input and produces structured test scenarios with test cases.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/ai_suggested_testcases.png').default} alt="AI generated test scenarios" width="1347" height="616" className="doc_img"/>

Each scenario is tagged with priority (`Must have`, `Should have`, `Could have`) and each test case is categorized as **Positive**, **Negative**, or **Edge**.

### Refine with Conversation Layer

After generation, use the **Conversation Layer** to refine your test cases through natural language,add coverage, remove duplicates, reorganize scenarios, or update details without manual editing.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/conversation_layer_workspace.png').default} alt="Conversation Layer for refining test cases" width="1347" height="616" className="doc_img"/>

For the full guide on conversational refinement, see [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/#conversation-layer-refine-your-test-cases).

---

## Step 3: Save or Automate

Once your test scenarios are ready, select the test cases you want to keep and choose one of two paths:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/create_automate_test_cases.png').default} alt="Create or Automate test cases" width="1347" height="616" className="doc_img"/>

### Option A: Create Test Cases

Click **Create** to save the test cases to your **Test Case Repository** in Test Manager. These can be used for manual test planning, assigned to test runs, or shared with your team.

### Option B: Create and Automate with KaneAI

Click **Create and Automate** to save the test cases and automatically send them to **KaneAI** for automation. KaneAI executes each test case using natural language understanding and generates automation scripts.

---

## Step 4: Generate Automation Code

Once KaneAI has automated your test cases, you can generate code in multiple frameworks and languages.

1. Open the automated test case in KaneAI.
2. Click **Generate New Code**.
3. Select your desired framework and language.

<img loading="lazy" src={require('../assets/images/kane-ai/generate-code-page.png').default} alt="Code generation page with framework selection" className="doc_img"/>

### Supported Frameworks

| Platform | Framework | Languages |
|----------|-----------|-----------|
| **Web** | Selenium | Python |
| **Web** | Playwright | JavaScript, Python |
| **Web** | Cypress | JavaScript |
| **Web** | WebdriverIO | JavaScript |
| **Mobile** | Appium | Python, Java, JavaScript |

The generated code is fully accessible,download it, customize it, and integrate it into your CI/CD pipeline or execute it on <BrandName /> [HyperExecute](/support/docs/getting-started-with-hyperexecute/).

For the full code generation guide, see [KaneAI Code Generation](/support/docs/kane-ai-automation-code-generation/).

---

## Alternative Path: Record User Interactions

Instead of providing written requirements, you can use KaneAI's **Manual Interaction Mode** to record real user actions and convert them into automated tests.

1. Start a new test in KaneAI.
2. Switch to **Manual Interaction** mode.
3. Perform actions on your application,clicks, form fills, navigation.
4. KaneAI captures each action and converts it into test steps.
5. Generate automation code from the recorded steps.

This is useful when requirements are easier to demonstrate than describe, or when you want to capture existing user workflows as automated tests.

For the full guide, see [KaneAI Manual Interaction Mode](/support/docs/kaneai-manual-interaction/).

---

## End-to-End Flow Summary

```
Requirements (text, docs, images, audio, Jira, ADO)
        │
        ▼
   AI Test Case Generator (Test Manager / KaneAI)
        │
        ├── Create ──► Test Case Repository (manual testing)
        │
        └── Create and Automate ──► KaneAI Automation
                                        │
                                        ▼
                                  Code Generation
                              (Selenium, Playwright,
                               Cypress, Appium, etc.)
                                        │
                                        ▼
                              Download / CI/CD / HyperExecute
```

---

## Related Docs

- [Create Projects](/support/docs/create-projects/): Set up your Test Manager project
- [AI Test Case Generator](/support/docs/generate-test-cases-with-ai/): Full guide for AI-powered test case generation
- [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/): Record user actions to create tests
- [KaneAI Code Generation](/support/docs/kane-ai-automation-code-generation/): Export automation scripts in multiple frameworks
- [KaneAI Test Planner](/support/docs/kane-ai-test-plan/): Generate tests from high-level objectives
- [KaneAI Jira Integration](/support/docs/kane-ai-jira-integration/): Generate tests from Jira tickets
- [Getting Started with HyperExecute](/support/docs/getting-started-with-hyperexecute/): Execute automated tests at scale

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        AI Test Generation: Requirements to Code
      </span>
    </li>
  </ul>
</nav>
