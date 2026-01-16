---
id: kane-ai-deeplink-support
title: Deeplinks Support for Mobile App Authoring
hide_title: false
sidebar_label: Deeplinks
description: Learn how to use deeplinks in KaneAI to directly navigate to specific screens in your Android and iOS mobile applications during test authoring.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai deeplink
  - mobile app testing
  - deeplink navigation
  - android deeplink
  - ios deeplink
url: https://www.testmu.ai/support/docs/kane-ai-deeplink-support/
site_name: LambdaTest
slug: kane-ai-deeplink-support/
canonical: https://www.testmu.ai/support/docs/kane-ai-deeplink-support/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## What are Deeplinks?

Deeplinks are URL-based mechanisms that allow you to directly access specific screens and functionalities within your mobile application, bypassing standard navigation flows. In the context of mobile app testing with KaneAI, deeplinks enable testers to quickly navigate to targeted screens and perform context-aware actions without manually navigating through the app interface.

## How Deeplinks Work in KaneAI

When you use deeplinks in KaneAI during mobile app test authoring, the system:

1. Accepts a deeplink URL from the user
2. Identifies the target application package (Android) or bundle ID (iOS)
3. Invokes the deeplink within the active app session
4. Navigates directly to the specified screen or performs the defined action

KaneAI automatically pre-fills the application package or bundle ID based on the app currently installed in your test session, making the process seamless and intuitive.


## Adding Deeplinks in KaneAI

### Step 1: Access the Deeplink Feature

During your mobile app test authoring session in KaneAI, you can add a deeplink instruction using the following method:

- Type a **slash (/)** in the input box and select the **Deeplink** option from the menu

<img loading="lazy" src={require('../assets/images/kane-ai/features/add-deeplink-modal.png').default} alt="Add Deeplink Modal" className="doc_img"/>

### Step 2: Configure Deeplink Parameters

Once the deeplink modal appears, provide the following information:

1. **URL*** (Required)
   - Enter the complete deeplink URL
   - Example: `kaneai://settings` or `myapp://product/123`

2. **App package for target*** (Required)
   - For **Android**: Enter the application package name (e.g., `com.example.QAapp`)
   - For **iOS**: Enter the bundle ID (e.g., `com.example.QAapp`)
   - KaneAI automatically pre-fills this field with the currently installed app's package or bundle ID

### Step 3: Add to Test Steps

Click the **Add in steps** button to include the deeplink instruction in your test case. KaneAI will execute this step during test runs, invoking the specified deeplink within your target application.


## Best Practices

1. **Verify Deeplink Support:** Ensure your mobile application has proper deeplink handling implemented before using this feature in tests.

2. **Test Deeplink Validity:** Manually verify deeplinks work correctly in your app before adding them to automated test cases.

3. **Handle Edge Cases:** Consider scenarios where deeplinks might fail (e.g., user not logged in, invalid parameters) and add appropriate assertions.

4. **Combine with Assertions:** After invoking a deeplink, add assertion steps to verify the correct screen was loaded and displays expected content.


## Troubleshooting

### Deeplink Not Working

- Verify the deeplink URL format is correct
- Ensure the target app package/bundle ID matches the installed application
- Check if the app has proper deeplink handling configured
- Confirm the app is already running in the test session

### Wrong Screen Opens

- Double-check the deeplink path and parameters
- Verify your app's deeplink routing configuration
- Ensure no conflicting deeplink schemes exist

### App Crashes on Deeplink

- Validate the deeplink with your development team
- Check if required data or permissions are available
- Review app logs for specific error messages

---

> **Need Help?** If you have questions about deeplink implementation or encounter issues, contact our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>support team</span> for assistance.