---
id: author-your-first-mobile-browser-test
title: Author Your First Mobile Browser Test
hide_title: false
sidebar_label: Mobile Browser Test
description: In this detailed guide, you will learn how you can manually author your first mobile browser test with KaneAI.
keywords:
 - ai testing tool
  - ai qa agent
  - genai qa agent
  - testmu ai automation
  - testmu ai kaneai
url: https://www.testmu.ai/support/docs/author-your-first-mobile-browser-test/
site_name: LambdaTest
slug: author-your-first-mobile-browser-test
canonical: https://www.testmu.ai/support/docs/author-your-first-mobile-browser-test/
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
          "name": "Author Your First Mobile Browser Test",
          "item": `${BRAND_URL}/support/docs/author-your-first-mobile-browser-test`
        }]
      })
    }}
></script>
# Author Your First Mobile Browser Test

In this guide, we'll walk you through how you can author your mobile browser tests using KaneAI

## Steps to Author Your Mobile Browser Test

**Step 1:** From the KaneAI dashboard, click on **Author Browser Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/author-desktop-one.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 2:** A modal would appear from the side. Select **Mobile** from the sidebar. 

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-two.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>


**Step 3:** Now, choose your preferred OS (Android or iOS), browser, device and the OS version.


<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-three.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 4:** You can also toggle on advanced settings such as network throttling or auto-login through Google from the Advanced Settings option. 

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-four.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 5:** Once done, click on **Author Test**.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-five.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 6:** Now tell KaneAI what you want to author using natural language without the need for coding or scripting knowledge required. KaneAI translates your instructions into executable test steps automatically. 

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-test-authoring.png').default} alt="Image" width="1347" height="616"  className="doc_img"/> 

As you add each instruction, KaneAI queues them in real-time without waiting for completion. This allows you to build comprehensive test flows quickly and efficiently. Once you've outlined all your test steps, click Finish Test to finalize your automated test case.

**Step 7:** Now, select your **Project** and the folder where you want to save your test cases. The **Test Name** and **Description** will be generated automatically, but you can also edit them. Select your test's **Type** and **Status**, as well as the necessary tags that will allow you to search for it later.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/mobile-browser-save.png').default} alt="Image" width="1347" height="616"  className="doc_img"/>

**Step 8:** To execute your test, click on the **Execute test case** button and you will be redirected to the HyperExecute dashboard where your tests will be executed.

<img loading="lazy" src={require('../assets/images/kane-ai/kaneai-author-browser-tests/test-summary-desktop.png').default}  alt="Image" width="1347" height="616"  className="doc_img"/>

## Feature Support Matrix
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
| Negative Scenarios from App UX (e.g. switch app, go to home, go back) | Not Supported         | These are app-specific and not currently available in browser testing mode.             |        |

> _Have any feedback or request? Reach out to us via support@testmu.ai and we would be happy to hear from you._






