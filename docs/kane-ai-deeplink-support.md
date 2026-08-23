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
