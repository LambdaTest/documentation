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

Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Finish Test** to finalize the test case.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/kaneai-desktop-authoring-min.png').default} alt="Describe Your Test in Natural Language" width="1347" height="616"  className="doc_img"/> 

**Result:** Each instruction appears as a distinct step in the test flow.

### Step 5: Capture Steps With Manual Interaction
***

To capture an action that is hard to describe, use **Manual Interaction Mode**. Perform the step directly in the instance window, and KaneAI records it and creates the matching automation step. For the full gesture and platform matrix, see the [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/) guide.

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

Clear, specific instructions help KaneAI translate your intent into accurate steps. Keep these in mind as you author:

- **Be specific.** Name the exact element and action, for example `Click the 'Submit' button in the top-right of the form`, not "click that."
- **Start with an action verb.** Begin each step with Click, Type, Hover, Scroll, and similar verbs.
- **One action per step.** Break complex flows into sequential steps connected with words like "then," rather than overloading a single instruction.
- **Add context for conditionals.** State the condition explicitly, for example `If the 'Login' button is visible, click it`.
- **Use numbers for position or quantity.** For example, `Click the second product in the list` or `Scroll down 100 pixels`.
- **Wait when needed.** Pause for page loads or async operations, for example `Click 'Submit' and wait 5 seconds before the next step`.
- **Target the right tab.** When a link opens a new tab, add `switch to the <TabTitle> tab` so actions stay on it.
- **Verify before saving.** Re-run the flow to confirm every step executes cleanly, and refine a prompt iteratively if the result is not what you expected.

## Next Steps
***

Continue with these guides:

- [Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
