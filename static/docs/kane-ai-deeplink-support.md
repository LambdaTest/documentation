# Deeplinks Support for Mobile App Authoring

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

## What are Deeplinks?

Deeplinks are URL-based mechanisms that allow you to directly access specific screens and functionalities within your mobile application, bypassing standard navigation flows. In the context of mobile app testing with KaneAI, deeplinks enable testers to quickly navigate to targeted screens and perform context-aware actions without manually navigating through the app interface.

## How Deeplinks Work in KaneAI


When you add a deeplink step during mobile app test authoring, KaneAI does the following:

1. Accepts a deeplink URL from the user
2. Identifies the target application package (Android) or bundle ID (iOS)
3. Invokes the deeplink within the active app session
4. Navigates directly to the specified screen or performs the defined action

KaneAI automatically pre-fills the application package or bundle ID based on the app currently installed in your test session, making the process seamless and intuitive.

## Adding Deeplinks in KaneAI


Before you begin, make sure you have:


Before you add a deeplink step, make sure you have the following.
- A KaneAI mobile app test authoring session in progress (Android or iOS).
- An app that implements deeplink handling for the screens you want to reach.
- The deeplink URL and the target app package name (Android) or bundle ID (iOS).


## Add a Deeplink Step


Follow these steps to add and configure a deeplink step during mobile app authoring.

Once the deeplink modal appears, provide the following information:


In your mobile app test authoring session, type a **slash (/)** in the input box and select the **Deeplink** option from the menu.



**Result:** The deeplink modal opens.

### Step 3: Add to Test Steps


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


Click **Add in steps** to include the deeplink instruction in your test case. During a test run, KaneAI invokes the deeplink within your target app.

**Result:** The deeplink step is added and runs on every execution.


## Best Practices


Apply these practices to keep deeplink steps reliable.

2. **Test Deeplink Validity:** Manually verify deeplinks work correctly in your app before adding them to automated test cases.

3. **Handle Edge Cases:** Consider scenarios where deeplinks might fail (e.g., user not logged in, invalid parameters) and add appropriate assertions.

4. **Combine with Assertions:** After invoking a deeplink, add assertion steps to verify the correct screen was loaded and displays expected content.

## Troubleshooting


Use this section to resolve the common deeplink failures.

- Verify the deeplink URL format is correct
- Ensure the target app package/bundle ID matches the installed application
- Check if the app has proper deeplink handling configured
- Confirm the app is already running in the test session


When nothing happens after the deeplink step, check the following.

- Double-check the deeplink path and parameters
- Verify your app's deeplink routing configuration
- Ensure no conflicting deeplink schemes exist

### App Crashes on Deeplink


When the deeplink opens an unexpected screen, check the following.

- Recheck the deeplink path and parameters.
- Verify your app's deeplink routing configuration.
- Confirm no conflicting deeplink schemes exist.

### The App Crashes on the Deeplink


When the app crashes after the deeplink step, check the following.

- Validate the deeplink with your development team.
- Confirm the required data or permissions are available.
- Review app logs for the specific error message.

## Next Steps


Combine deeplinks with the rest of your mobile authoring workflow.

- Apply platform-specific patterns from [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/).
- Scan a screen you reach via deeplink with [KaneAI Mobile App Accessibility](/support/docs/kaneai-mobile-app-accessibility/).



> **Need Help?** If you have questions about deeplink implementation or encounter issues, contact our support team for assistance.
