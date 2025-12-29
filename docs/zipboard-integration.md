---
id: zipboard-integration
title: zipBoard Integration
hide_title: false
sidebar_label: zipBoard 
description: This document will help you integrate TestMu AI with zipBoard. That way, you can log bugs to your zipBoard project in a single click as you perform cross browser testing with TestMu AI.
keywords:
  - testmu ai integrations
  - push issues to zipboard
  - check browser compatibility online
  - testmu ai zipboard integration
  - cross browser testing tool
  - zipboard integration with testmu ai
  - create zipboard issues from testmu ai
  - bug tracking tools
  - project management tools
url: https://www.lambdatest.com/support/docs/zipboard-integration/
site_name: LambdaTest
slug: zipboard-integration/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Zipboard Integration",
          "item": `${BRAND_URL}/support/docs/zipboard-integration/`
        }]
      })
    }}
></script>

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

ZipBoard is a visual feedback and bug tracking tool designed to streamline collaboration across teams during the web development process. By integrating <BrandName /> with ZipBoard, teams can enhance their testing workflows, enabling seamless communication between developers, testers, and stakeholders.

This integration allows you to capture real-time feedback and track issues directly within your test environments on <BrandName />'s cloud platform, ensuring faster bug resolution and better product quality. In this documentation, we'll guide you through the steps to integrate ZipBoard with <BrandName /> and optimize your test management workflow.

## Integrate zipBoard from your <BrandName /> Account

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Bug Tracker.

**Step 3:** Click on **Connect** button of zipBoard block.

**Step 4:** Now, provide your zipBoard API Token to establish integration with <BrandName /> and click on **install** button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/bug-tracking/zipboard/zipboard-integration.mp4').default} type="video/mp4" />
</video>

:::info Fetch your Bugherd API Token
- Visit your zipBoard account -> **Edit Profile** tab.
- Click on the **+** icon to generate your API. Copy your API token to use it for authenticate it with <BrandName /> integration.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/bug-tracking/zipboard/zipbaord-api-token.mp4').default} type="video/mp4" />
</video>
:::

> This API key will be used to authenticate your zipBoard account to third-party apps. Please do not share it with anyone. If you believe your API key has been misplaced, you can always generate a new API key from zipBoard by clicking on the refresh icon in your profile settings.

## Lodge your First Bug

**Step 1:** Create a new projects on zipBoard if you haven't already.

**Step 2:** Now, while testing your webapp or application at <BrandName />, click on the **mark as bug** button if you detect any bug.

**Step 3:** Now update the comments of the bug and other details and click on Create Task button.

**Step 4:** Go to your dashboard and check a ticket will be created for the same.

## Uninstall zipBoard Integration

**Step 1:** Login to your <BrandName /> account. You should have Admin or User level access to see and install integrations.

**Step 2:** Click on Settings -> Integrations -> Bug Tracker.

**Step 3:** Click on the Remove button.

<video class="right-side" width="100%" controls id="vid">
<source src= {require('../assets/videos/integration/bug-tracking/zipboard/remove-zipboard.mp4').default} type="video/mp4" />
</video>

> That was all you need to know for <BrandName /> + zipBoard Integration. Increase your productivity with our integrations. If you still have any questions for us, please feel free to let us know. Our experts are always available on <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**chat**</span> to help you out with any roadblock regarding our product. Happy testing! 🙂

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
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
        Zipboard Integration
      </span>
    </li>
  </ul>
</nav>
