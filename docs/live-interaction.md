---
id: live-interaction
title: Live Interaction
sidebar_label: Live Interaction
description: Live Interaction is a feature introduced within automation testing that allows the user to take control of the session manually.
keywords:
  - selenium testing
  - cross browser testing
  - live interaction
  - selenium automation
  - debug tests
url: https://www.testmu.ai/support/docs/live-interaction
site_name: LambdaTest
slug: live-interaction
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Linear App Integration",
          "item": "https://www.lambdatest.com/support/docs/live-interaction/"
        }]
      })
    }}
></script>

# All you need to know about!

---

## What is Live Interaction?

**Live Interaction** is a feature introduced within automation testing that allows the user to take control of the session **manually**. This helps abort the automated test session, **debug** any exception in **real-time**, and effectively report a test session.

## Why Live Interaction?

- It allows the user to partially interact by clicking a button or filling OS-specific credentials without breaking the currently running automated tests.
- It is a powerful tool to find the root cause of the exception raised during the automated tests and even allow them to debug the exception during the session.
- It works smartly by letting the stakeholders know who has stopped/paused the test, which helps effectively report the issue.

## Prerequisites and Limitations

- Live interaction is available on: 
   - **Windows**: 11, 10, 8, and 8.1
   - **macOS**: Big Sur, Monterey, Ventura
   - All browsers except **Safari**.
- The user can only interact with the browser for **15 minutes**.

:::info note
Safari browser will be added in the upcoming releases.
:::

## How to use the Live Interaction feature in LambdaTest?

<img loading="lazy" src={require('../assets/images/selenium/live-interaction1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/selenium/live-interaction2.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Follow the below-mentioned steps to interact with the browser manually in an automation test:

- Open the test summary page in the **LambdaTest dashboard**
- Click on the **"Click to view live test"** button
- The status of the test changes to **idle_timeout** while using the Live Interaction feature
- Take complete control of the browser ✅

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
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
