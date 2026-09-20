---
id: build-split
title: Build Inactivity Time
sidebar_label: Split a Build
description: Organize and manage automation builds by setting a build inactivity time interval for automatic build splitting.
keywords:
  - build inactivity time splitting
  - automation build preference setting
  - organize selenium builds time interval
image: /assets/images/og-images/automation-testing-og.png
url: https://www.testmuai.com/support/docs/build-inactivity-time/
site_name: TestMu AI
slug: build-inactivity-time/
canonical: https://www.testmuai.com/support/docs/build-inactivity-time/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import { CookieTrackingSignup } from '@site/src/component/CookieTracking';

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
          "name": "Build Inactivity Time",
          "item": `${BRAND_URL}/support/docs/build-inactivity-time/`
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
      "@id": "https://www.testmuai.com/support/docs/build-inactivity-time/"
    },
    "headline": "Build Inactivity Time",
    "description": "Organize and manage automation builds by setting a build inactivity time interval for automatic build splitting.",
    "url": "https://www.testmuai.com/support/docs/build-inactivity-time/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "build inactivity time splitting",
      "automation build preference setting",
      "organize selenium builds time interval"
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

# Setting Up Build Active Duration [Build Splitting]
---

Build Splitting lets you organize tests by controlling how they group into builds. The **Build Active Duration** setting (previously **Build Inactivity Time**) defines how long a build stays active. Tests that share the same build name and run while the build is active are grouped into the same build. A test with that build name that runs after the active duration starts a new build.


## How It Works
---

Build Active Duration separates tests into distinct builds based on how long a build stays active.

Previously, tests that shared the same build name kept merging into a single build, making it difficult to separate runs from different sessions. Setting a Build Active Duration keeps each session's tests in its own build.

For example, if the Build Active Duration is set to 6 hours, tests with the same build name that run within that active window are grouped into the same build. Once the 6-hour window passes, the next test with that build name appears under a new build.

## How to Set the Build Active Duration
---

Follow these steps to configure Build Active Duration for your account.

:::info Note
1. By default, the Build Active Duration is six hours.
2. Every user within the organization can set their own Build Active Duration.
:::

1. Log in to your TestMu AI account. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.


2. Open **Account Settings > Product Preferences** and select **Automation**.

3. Under **Builds**, set the **Build Active Duration** to your preferred interval.

<img loading="lazy" src={require('../assets/images/build-split/build-active-duration.webp').default} alt="TestMu AI Account Settings Product Preferences showing the Build Active Duration dropdown under Automation" className="doc_img" width="1920" height="927"/><br/><br/>


Once you save your preference, a confirmation notification appears: *Build Time updated successfully.*


---

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
        Build Inactivity Time
      </span>
    </li>
  </ul>
</nav>
