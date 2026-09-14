---
id: kane-ai-deeplink-support
title: How to Use Deeplinks With KaneAI
hide_title: true
toc_max_heading_level: 2
sidebar_label: Mobile Deeplinks
description: Add a deeplink step in KaneAI to jump straight to a specific screen in your Android or iOS app during a mobile test.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai deeplink
  - mobile app testing
  - deeplink navigation
  - android deeplink
  - ios deeplink
url: https://www.testmuai.com/support/docs/kane-ai-deeplink-support/
site_name: TestMu AI
slug: kane-ai-deeplink-support/
canonical: https://www.testmuai.com/support/docs/kane-ai-deeplink-support/
---

import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Deeplinks Support for Mobile App Authoring",
          "item": `${BRAND_URL}/support/docs/kane-ai-deeplink-support/`
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
      "@id": "https://www.testmuai.com/support/docs/kane-ai-deeplink-support/"
    },
    "headline": "Deeplinks Support for Mobile App Authoring",
    "description": "Learn how to use deeplinks in KaneAI to directly navigate to specific screens in your Android and iOS mobile applications during test authoring.",
    "url": "https://www.testmuai.com/support/docs/kane-ai-deeplink-support/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "KaneAI",
    "keywords": [
      "testmu ai automation",
      "testmu ai kaneai",
      "kaneai deeplink"
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
    "dateModified": "2026-09-09T19:16:50+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Adding Deeplinks in KaneAI",
      "description": "Learn how to use deeplinks in KaneAI to directly navigate to specific screens in your Android and iOS mobile applications during test authoring.",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Access the Deeplink Feature",
          "text": "During your mobile app test authoring session in KaneAI, you can add a deeplink instruction using the following method: Type a slash (/) in the input box and select the Deeplink option from the menu",
          "url": "https://www.testmuai.com/support/docs/kane-ai-deeplink-support/#step-1-access-the-deeplink-feature"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure Deeplink Parameters",
          "text": "Once the deeplink modal appears, provide the following information: URL (Required) Enter the complete deeplink URL Example: kaneai://settings or myapp://product/123 App package for target (Required) For Android: Enter the application package name (e.g., com.example.QAapp) For iOS: Enter the bundle ID (e.g., com.example.QAapp) KaneAI automatically pre-fills this field with the currently installed app's package or bundle ID",
          "url": "https://www.testmuai.com/support/docs/kane-ai-deeplink-support/#step-2-configure-deeplink-parameters"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Add to Test Steps",
          "text": "Click the Add in steps button to include the deeplink instruction in your test case. KaneAI will execute this step during test runs, invoking the specified deeplink within your target application.",
          "url": "https://www.testmuai.com/support/docs/kane-ai-deeplink-support/#step-3-add-to-test-steps"
        }
      ]
    }
  ]) }}
/>

# How to Use Deeplinks With KaneAI
***

Deeplinks are URLs that open a specific screen or action inside your mobile app directly, skipping the normal navigation flow. In KaneAI, add a deeplink step during mobile app test authoring to jump straight to the screen under test instead of tapping through the app. This page shows how to add and configure a deeplink step for Android and iOS.

## How Deeplinks Work in KaneAI
***

When you add a deeplink step during mobile app test authoring, KaneAI does the following:

1. Accepts the deeplink URL you provide.
2. Identifies the target application package (Android) or bundle ID (iOS).
3. Invokes the deeplink within the active app session.
4. Navigates directly to the specified screen or performs the defined action.

KaneAI pre-fills the application package or bundle ID from the app currently installed in your test session, so you rarely need to type it.

## Prerequisites
***

Before you begin, make sure you have:

:::note
Before you add a deeplink step, make sure you have the following.
- A KaneAI mobile app test authoring session in progress (Android or iOS).
- An app that implements deeplink handling for the screens you want to reach.
- The deeplink URL and the target app package name (Android) or bundle ID (iOS).
:::

## Add a Deeplink Step
***

Follow these steps to add and configure a deeplink step during mobile app authoring.

### Step 1: Open the Deeplink Feature
***

In your mobile app test authoring session, type a **slash (/)** in the input box and select the **Deeplink** option from the menu.

<img loading="lazy" src={require('../assets/images/kane-ai/features/add-deeplink-modal.png').default} alt="Add Deeplink Modal" className="doc_img"/>

**Result:** The deeplink modal opens.

### Step 2: Configure the Deeplink Parameters
***

In the deeplink modal, provide the following.

1. **URL** (required)
   - Enter the complete deeplink URL.
   - Example: `kaneai://settings` or `myapp://product/123`.

2. **App package for target** (required)
   - For **Android**: enter the application package name (for example, `com.example.QAapp`).
   - For **iOS**: enter the bundle ID (for example, `com.example.QAapp`).
   - KaneAI pre-fills this field with the currently installed app's package or bundle ID.

**Result:** The modal holds the deeplink and its target app.

### Step 3: Add the Deeplink to Your Test
***

Click **Add in steps** to include the deeplink instruction in your test case. During a test run, KaneAI invokes the deeplink within your target app.

**Result:** The deeplink step is added and runs on every execution.

## Best Practices
***

Apply these practices to keep deeplink steps reliable.

1. **Verify deeplink support:** confirm your app implements deeplink handling before you use this feature in tests.
2. **Test deeplink validity:** open each deeplink manually in your app before adding it to an automated test.
3. **Handle edge cases:** account for cases where a deeplink can fail, such as a logged-out user or invalid parameters, and add assertions for them.
4. **Combine with assertions:** after invoking a deeplink, add assertion steps to confirm the correct screen loaded and shows the expected content.

## Troubleshooting
***

Use this section to resolve the common deeplink failures.

### The Deeplink Does Not Open a Screen
***

When nothing happens after the deeplink step, check the following.

- Verify the deeplink URL format is correct.
- Confirm the target app package or bundle ID matches the installed app.
- Check that the app has deeplink handling configured.
- Confirm the app is already running in the test session.

### The Wrong Screen Opens
***

When the deeplink opens an unexpected screen, check the following.

- Recheck the deeplink path and parameters.
- Verify your app's deeplink routing configuration.
- Confirm no conflicting deeplink schemes exist.

### The App Crashes on the Deeplink
***

When the app crashes after the deeplink step, check the following.

- Validate the deeplink with your development team.
- Confirm the required data or permissions are available.
- Review app logs for the specific error message.

## Next Steps
***

Combine deeplinks with the rest of your mobile authoring workflow.

- Apply platform-specific patterns from [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/).
- Scan a screen you reach via deeplink with [KaneAI Mobile App Accessibility](/support/docs/kaneai-mobile-app-accessibility/).

---

> **Need Help?** If you have questions about deeplink implementation or encounter issues, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span> for assistance.
