---
id: live-interaction
title: Live Interaction
sidebar_label: Take Over a Live Session
description: Take manual control of an automation session to debug exceptions and interact with the browser in real time.
keywords:
  - live interaction automation debugging
  - manually control selenium session
  - debug test exception real time
  - pause automated test session
  - selenium live browser control
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/live-interaction/
site_name: TestMu AI
slug: live-interaction/
canonical: https://www.testmuai.com/support/docs/live-interaction/
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
          "name": "Live Interaction",
          "item": `${BRAND_URL}/support/docs/live-interaction/`
        }]
      })
    }}
></script>

# Live Interaction

---

## What Is Live Interaction?
---
Live Interaction lets you take manual control of an active automation session.

**Live Interaction** is a feature within automation testing that allows you to take control of the session **manually**. This helps abort the automated test session, **debug** any exception in **real time**, and report the test session.

## Why Use Live Interaction?
---
Debug exceptions, interact with OS-level prompts, and track who paused the test.

- It allows you to partially interact by clicking a button or filling OS-specific credentials without breaking the currently running automated tests.
- It helps find the root cause of exceptions raised during automated tests and allows you to debug the exception during the session.
- It works smartly by letting stakeholders know who has stopped or paused the test, which helps report the issue.

## Prerequisites and Limitations
---
Review the supported platforms, browsers, and session time limits before using Live Interaction.

- Live interaction is available on: 
   - **Windows**: 11, 10, 8, and 8.1
   - **macOS**: Big Sur, Monterey, Ventura
   - All browsers except **Safari**.
- You can only interact with the browser for **15 minutes**.

:::info note
Safari browser will be added in upcoming releases.
:::

## How to Use the Live Interaction Feature
---
Open the test summary page and click "Click to view live test" to take manual control.

<img loading="lazy" src={require('../assets/images/selenium/live-interaction1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/selenium/live-interaction2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Follow the below steps to interact with the browser manually in an automation test:

1. Open the test summary page in the **TestMu AI dashboard**.
2. Click on the **"Click to view live test"** button.
3. The status of the test changes to **idle_timeout** while using the Live Interaction feature.
4. Take control of the browser.

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
      Live Interaction 
      </span>
    </li>
  </ul>
</nav>
