---
id: author-your-first-desktop-browser-test
title: How to Author Desktop Browser Tests With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Author Desktop Browser Test
description: Author a desktop browser test in KaneAI by describing it in natural language. KaneAI turns your instructions into executable test steps, no code required.
keywords:
  - ai testing tool
  - ai qa agent
  - genai qa agent
  - testmu ai automation
  - testmu ai kaneai
  - kaneai Web test
  - kaneai guidelines
  - instructions writings
url: https://www.testmuai.com/support/docs/author-your-first-desktop-browser-test/
site_name: TestMu AI
slug: author-your-first-desktop-browser-test/
canonical: https://www.testmuai.com/support/docs/author-your-first-desktop-browser-test/
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
          "name": "Author Desktop Browser Test",
          "item": `${BRAND_URL}/support/docs/author-your-first-desktop-browser-test/`
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
      "@id": "https://www.testmuai.com/support/docs/author-your-first-desktop-browser-test/"
    },
    "headline": "How to Author Desktop Browser Tests With KaneAI",
    "description": "Author a desktop browser test in KaneAI by describing it in natural language. KaneAI turns your instructions into executable test steps, no code required.",
    "url": "https://www.testmuai.com/support/docs/author-your-first-desktop-browser-test/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "ai testing tool",
      "ai qa agent",
      "genai qa agent",
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai Web test",
      "kaneai guidelines",
      "instructions writings"
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

# How to Author Desktop Browser Tests With KaneAI
***

Author a desktop browser test in KaneAI by describing what you want in natural language. KaneAI translates your plain-English instructions into executable test steps, with no coding or scripting required.

## Prerequisites
***

Before you begin, make sure you have:

:::note
- A <BrandName /> account with access to KaneAI.
- A web application URL you want to test.
:::

## Author a Desktop Browser Test
***

Follow these steps to author and run a desktop browser test:

### Step 1: Open the Browser Test Authoring Modal
***

From the KaneAI dashboard, click **Author Browser Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/author-desktop-one.png').default} alt="Open the Browser Test Authoring Modal" width="1347" height="616"  className="doc_img"/>

**Result:** The test authoring modal opens from the side.

### Step 2: Select the Desktop Platform
***

In the modal sidebar, select **Desktop**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/author-desktop-two.png').default} alt="Select the Desktop Platform" width="1347" height="616"  className="doc_img"/>

**Result:** The modal shows the desktop browser configuration options.

### Step 3: Configure Advanced Options and Start Authoring
***

Optionally configure advanced settings before you begin:

- **Chrome Options:** Command-line switches that alter the default behavior of the Chrome browser. See the [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/) guide for the full list.
- **Custom Headers:** Attach request or response metadata such as the method, URL, and body content. See the [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/) guide for details.

Once done, click **Author Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/author-desktop-select.png').default} alt="Configure Advanced Options and Start Authoring" width="1347" height="616"  className="doc_img"/>

**Result:** KaneAI launches a live browser instance and opens the authoring panel.

### Step 4: Describe Your Test in Natural Language
***

Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Save** in the top-right header to finalize the test case.

Your test is saved as **Ready** when every step has run and passed, which is also when automation code is generated. If some steps were never run, or a step errored, it saves as Unverified or Faulty instead and you can finish it later. See [Save states](/support/docs/kaneai-authoring-session/#save-states).

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/kaneai-desktop-authoring-min.png').default} alt="Describe Your Test in Natural Language" width="1347" height="616"  className="doc_img"/> 

**Result:** Each instruction appears as a distinct step in the test flow.

### Step 5: Capture Steps With Manual Interaction
***

To capture an action that is hard to describe, perform the step directly in the instance window. While your session is in the **Authoring Steps** state, KaneAI captures the action and creates the matching automation step — there is nothing to switch on. For the full gesture and platform matrix, see the [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/) guide.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/desktop-manual-interaction.webp').default} alt="Capture Steps With Manual Interaction" width="1347" height="616"  className="doc_img"/>

**Result:** KaneAI adds the recorded action as an automation step in the flow.

### Step 6: Save the Test Case
***

Select your **Project** and the folder where you want to save the test case. The **Test Name** and **Description** are generated automatically, and you can edit them. Set the test's **Type** and **Status**, and add tags so you can search for it later.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/kaneai-desktop-save.png').default} alt="Save the Test Case" width="1347" height="616"  className="doc_img"/>

**Result:** The test case is saved to the selected project and folder.

### Step 7: Execute the Test
***

Click **Execute test case**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/test-summary-desktop.png').default}  alt="Execute the Test" width="1347" height="616"  className="doc_img"/>

**Result:** You are redirected to the HyperExecute dashboard, where your test runs. To interpret the run, see the [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/) guide.

## Tips for Writing Effective Instructions
***

Clear, specific instructions help KaneAI translate your intent into accurate steps. Keep these in mind as you author.

The KaneAI Web Agent is an automation tool that executes web interactions based on natural language instructions. This section provides best practices for writing clear, user-friendly instructions when using the KaneAI Web Agent. The goal is to ensure accurate execution of tasks by the AI and improve the quality of interactions with web elements.

### General Instruction
***

#### 1. Clarity and Specificity
Always provide clear and specific instructions for the action you wish to perform. Use the appropriate terminology from the list of supported commands. Avoid vague terms such as `do this` or `click that`. Be explicit about which element to interact with.

#### 2. Context
When the action is dependent on a specific element or section of a webpage, provide enough context to help identify the element. Example: `Click the 'Submit' button on the top right corner of the form`.

#### 3. Step-by-Step Instructions
Break down complex tasks into smaller, manageable steps. Use logical connectors like `then` or `after that` to indicate the sequence of actions. Clearly specify the flow, such as `Click 'Login', then type your email in the input field.`

#### 4. Use Examples
Refer to the examples provided in the list of supported commands for guidance on structuring your instructions.
Example: `Type 'username' in the search bar and press 'Enter' to submit.`

#### 5. Wait Command
Use the wait command when needed to pause execution, allowing operations or page loads to complete before proceeding to the next action. Example: `Click 'Submit' and wait for 5 seconds before proceeding to the next step.`

#### 6. Refining Prompts
If the AI response is not as expected, refine your prompt by adding more details or increasing clarity. Use iterative refinement to achieve the desired outcome.

#### 7. Tab Targeting
When interacting with elements that open in a new tab, use the prompt `switch to the <TabTitle> tab` to ensure actions stay on the newly opened tab.

### DO's & DON'Ts
***

#### DO's
- **Specify the Exact Element :** Clearly indicate which element you want to interact with. For instance, use the element's name, position, or attributes.
Example: `Click on the second product in the list.`

- **Use Action Verbs :** Start your instructions with action verbs like "Click," "Type," "Hover," etc.
Example: `Hover over the navigation bar.`

- **Provide Context for Conditional Actions :** If the action depends on an element’s visibility or existence, include this in the instruction. Example: `If the 'Login' button is visible, click it.`

- **Use Numbers to Indicate Positions or Quantities :** When specifying positions or quantities, use numbers for clarity. Example: `Scroll down 100 pixels.`

- **Verify Steps Before Saving Test Cases :** Use **Run** to execute the whole test, or **Run This Step** and the range actions to check part of it, so you know every step passes before saving. A test saves as Ready only when all steps have run and passed. See [Running steps during authoring](/support/docs/kaneai-authoring-session/#running-steps-during-authoring).

- **Validate Test Flow While Editing :** Let the test run to validate if the flow is correct while editing a test case. Click "Resume" only after all steps are completed.

- **Use Manual Interaction When Necessary :** If KaneAI struggles to execute the desired action, perform it directly on the application. While the session is in Authoring Steps the action is captured as a step.

#### DON'Ts
- **Avoid Vague Terms :** Do not use terms like "Click that" or "Do this" without specifying which element or action.

- **Do Not Assume Context Without Detail :** Ensure instructions are detailed enough for the AI to understand which elements are involved. Example of what to avoid: `Click the button" (without specifying which button)`.

- **Avoid Overloading Instructions :** Do not combine too many actions into a single instruction unless they are logically sequenced. Example of what to avoid: `Click the button and type in the field and then hover.`

- **Do Not Mix Unrelated Commands Without Logical Sequence :** Keep commands logically connected. Avoid mixing different actions without specifying the sequence. Example of what to avoid: `Click and then go to a new tab (without a clear sequence)`.

- **Always Verify Results for Assertions :** When using assertions, confirm that the expected result occurs to ensure success.

- **Acknowledge AI Limitations :** If the AI doesn’t perform the desired action, refine the prompt instead of expecting perfect results on the first try.

- **Use Iterative Approach for Accuracy :** Allow the AI to process, execute the action, and respond. If the initial outcome isn’t correct, refine and reissue the prompt iteratively.

- **Avoid Unnecessary Jargon :** Use simple language to communicate instructions. Only use technical terms when necessary.

## Next Steps
***

Continue with these guides:

- [Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
