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

# Setting Up the Build Inactivity Time [Build Splitting]
---

Build Splitting (Build Inactivity Time) lets you organize tests more efficiently. Track your progress by identifying tests that run at specific intervals. Set a time interval after which the system waits for the defined time and marks the build as completed. Any new builds you run after this time period are created as a new build.


## How It Works
---

Build Splitting separates tests into distinct builds based on inactivity time.

Previously, when you ran a build on TestMu AI, all tests merged into the same build, making it difficult to identify tests that ran at specific intervals. Build Splitting logic helps you organize your tests better.

Build Splitting requires you to set Build Inactivity Time. For instance, if the Build Inactivity Time is set to 5 minutes, the system waits 5 minutes after the last test completes before marking the build as complete. If you run a test before the inactivity time, it runs in the existing build. If you run a test (even with the same name) after the specified inactivity time (i.e., 5 minutes), it appears under a new build.

## How to Set the Build Inactivity Time
---

Follow these steps to configure Build Inactivity Time for your account.

:::info Note
1. By default, the build inactivity time is six hours.
2. Every user within the organization can set their own build inactivity time.
:::

1. Log in to your TestMu AI account. Don't have an account, <a href="https://www.testmuai.com/register/" onClick={CookieTrackingSignup}>sign up for free</a>.


2. From the top-right corner, click on the Profile avatar, and navigate to **Profile > Product Preferences**.

3. Under the **Automation Build Preference**, select the **Build Inactivity Time** to choose
your preferences.

<img loading="lazy" src={require('../assets/images/build-split/inactivity.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>


Once you set the build inactivity time, a confirmation notification appears: *Build Time updated successfully.*

<img loading="lazy" src={require('../assets/images/build-split/popup.png').default} alt="image"  className="doc_img" width="1341" height="498"/><br/><br/>


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
