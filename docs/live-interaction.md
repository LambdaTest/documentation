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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/live-interaction/"
    },
    "headline": "Live Interaction",
    "description": "Take manual control of an automation session to debug exceptions and interact with the browser in real time.",
    "url": "https://www.testmuai.com/support/docs/live-interaction/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Web Automation",
    "keywords": [
      "live interaction automation debugging",
      "manually control selenium session",
      "debug test exception real time"
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
    "dateModified": "2026-09-09T19:13:32+05:30"
  }) }}
/>

# Live Interaction

---

Live Interaction lets you take manual control of a running automation session. Pause the automation and drive the browser yourself to debug an exception in real time, abort a test, or report the session.

## Why Use Live Interaction?
---
Debug exceptions, respond to OS-level prompts, and track who paused a test.

- Interact with the page (for example, click a button or enter OS-specific credentials) without breaking the running automated test.
- Find the root cause of an exception by debugging it live during the session.
- Let stakeholders see who paused or stopped a test, which makes the issue easier to report.

## Prerequisites and Limitations
---
Check the supported platforms, browsers, and time limit before using Live Interaction.

- Live Interaction is supported on:
  - **Windows**: 11, 10, 8, and 8.1
  - **macOS**: Big Sur, Monterey, and Ventura
  - All browsers except **Safari**.
- You can control the browser for up to **15 minutes**.

:::note
Support for Safari is coming in an upcoming release.
:::

## How to Use Live Interaction
---
Open the test detail page and click the **Live Interaction** button on the video panel to take manual control.

<img loading="lazy" src={require('../assets/images/selenium/live-interaction.webp').default} alt="Test detail page with the Live Interaction button on the video panel" width="1127" height="668" className="doc_img"/>

To take control during a running test:

1. Open the test detail page in the **TestMu AI dashboard**.
2. Click the **Live Interaction** button on the video panel.
3. The test status changes to `idle_timeout` while you use Live Interaction.
4. Take control of the browser and interact with it directly.

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
