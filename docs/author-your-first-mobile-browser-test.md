---
id: author-your-first-mobile-browser-test
title: How to Author Mobile Browser Tests With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Author Mobile Browser Test
description: Author a mobile browser test in KaneAI by describing it in natural language. KaneAI runs your steps on real mobile browsers, no code required.
keywords:
  - ai testing tool
  - ai qa agent
  - genai qa agent
  - testmu ai automation
  - testmu ai kaneai
url: https://www.testmuai.com/support/docs/author-your-first-mobile-browser-test/
site_name: TestMu AI
slug: author-your-first-mobile-browser-test/
canonical: https://www.testmuai.com/support/docs/author-your-first-mobile-browser-test/
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
          "name": "Author Mobile Browser Test",
          "item": `${BRAND_URL}/support/docs/author-your-first-mobile-browser-test/`
        }]
      })
    }}
></script>

# How to Author Mobile Browser Tests With KaneAI
***

Author a mobile browser test in KaneAI by describing what you want in natural language. KaneAI translates your plain-English instructions into executable test steps that run on real mobile browsers, with no coding or scripting required.

## Prerequisites
***

Before you begin, make sure you have:

:::note
- A <BrandName /> account with access to KaneAI.
- A web application URL you want to test on a mobile browser.
:::

## Author a Mobile Browser Test
***

Follow these steps to author and run a mobile browser test:

### Step 1: Open the Browser Test Authoring Modal
***

From the KaneAI dashboard, click **Author Browser Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/author-desktop-one.png').default} alt="Open the Browser Test Authoring Modal" width="1347" height="616"  className="doc_img"/>

**Result:** The test authoring modal opens from the side.

### Step 2: Select the Mobile Platform
***

In the modal sidebar, select **Mobile**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-two.png').default} alt="Select the Mobile Platform" width="1347" height="616"  className="doc_img"/>

**Result:** The modal shows the mobile browser configuration options.

### Step 3: Choose the OS, Browser, and Device
***

Choose your OS (Android or iOS), browser, device, and OS version.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-three.png').default} alt="Choose the OS, Browser, and Device" width="1347" height="616"  className="doc_img"/>

**Result:** Your target device configuration is set.

### Step 4: Configure Advanced Settings
***

Optionally open **Advanced Settings** to toggle options such as network throttling or auto-login through Google. For the full list of options, see the [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/) guide.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-four.png').default} alt="Configure Advanced Settings" width="1347" height="616"  className="doc_img"/>

**Result:** Your selected advanced settings apply to the session.

### Step 5: Start Authoring
***

Click **Author Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-five.png').default} alt="Start Authoring" width="1347" height="616"  className="doc_img"/>

**Result:** KaneAI launches a live mobile browser instance and opens the authoring panel.

### Step 6: Describe Your Test in Natural Language
***

Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Finish Test** to finalize the test case.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-test-authoring.png').default} alt="Describe Your Test in Natural Language" width="1347" height="616"  className="doc_img"/> 

**Result:** Each instruction appears as a distinct step in the test flow.

### Step 7: Save the Test Case
***

Select your **Project** and the folder where you want to save the test case. The **Test Name** and **Description** are generated automatically, and you can edit them. Set the test's **Type** and **Status**, and add tags so you can search for it later.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-save.png').default} alt="Save the Test Case" width="1347" height="616"  className="doc_img"/>

**Result:** The test case is saved to the selected project and folder.

### Step 8: Execute the Test
***

Click **Execute test case**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/test-summary-desktop.png').default}  alt="Execute the Test" width="1347" height="616"  className="doc_img"/>

**Result:** You are redirected to the HyperExecute dashboard, where your test runs. To interpret the run, see the [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/) guide.

## Feature Support Matrix
***

This table lists which actions are supported when authoring mobile browser tests:

| Feature / Action                                                      | Support Status         | Notes                                                                                   |
|-----------------------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------|
| Element Scroll                                                        | Supported             |                                                                                         |
| Key Events (e.g. Enter, Space, Tab)                                   | Not Supported         |                                                                                         |
| Clear Input Fields                                                    | Supported             |                                                                                         |
| App Instructions (e.g. background, hide keyboard, show notifications) | Not Supported         |                                                                                         |
| Textual & Visual Queries                                              | Supported             | Includes driver-based queries.                                                          |
| Sites with Permission Popups (notifications, cookies, location)       | Supported (Android only) | Popups are auto-accepted on Android. iOS not supported currently.                    |
| Cookies & Local Storage                                               | Supported             |                                                                                         |
| Network Assertions                                                    | Not Supported         | Not yet available for mobile web; only supported on web.                                |
| Negative Scenarios from App UX (e.g. switch app, go to home, go back) | Not Supported         | These are app-specific and not currently available in browser testing mode.             |

## Next Steps
***

Continue with these guides:

- [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Scroll in Feature](/support/docs/kane-ai-scroll-in-feature/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/)

> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._

