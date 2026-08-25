# How to Author Mobile App Tests With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Author a mobile app test in KaneAI by uploading your app and describing what you want in natural language. KaneAI translates your plain-English instructions into executable test steps that run on real devices, with no coding or scripting required.

## Prerequisites

Before you begin, make sure you have:

- A TestMu AI account with access to KaneAI.
- Your app build (`.apk`, `.aab`, or `.ipa`) ready to upload.

## Author a Mobile App Test

Follow these steps to author and run a mobile app test:

### Step 1: Open the App Test Authoring Modal

From the KaneAI dashboard, click **Author App Test**.

**Result:** The app test authoring modal opens from the side.

### Step 2: Upload Your App

Upload the app build you want to test.

**Result:** Your app is uploaded and ready to install on a device.

### Step 3: Choose the Device and OS Version

Choose your device and OS version.

**Result:** Your target device configuration is set.

### Step 4: Configure Advanced Settings

Optionally open **Advanced Settings** to select advanced configurations for the session. For the full list of options, see the [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/) guide.

**Result:** Your selected advanced settings apply to the session.

### Step 5: Start Testing

Click **Start Testing**.

**Result:** KaneAI launches a live device instance with your app installed and opens the authoring panel.

### Step 6: Describe Your Test in Natural Language

Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Finish Test** to finalize the test case.

**Result:** Each instruction appears as a distinct step in the test flow.

### Step 7: Capture Steps With Manual Interaction

To capture an action that is hard to describe, use **Manual Interaction Mode**. Perform the step directly in the instance window, and KaneAI records it and creates the matching automation step. For the full gesture and platform matrix, see the [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/) guide.

**Result:** KaneAI adds the recorded action as an automation step in the flow.

### Step 8: Save the Test Case

Select your **Project** and the folder where you want to save the test case. The **Test Name** and **Description** are generated automatically, and you can edit them. Set the test's **Type** and **Status**, and add tags so you can search for it later.

**Result:** The test case is saved to the selected project and folder.

### Step 9: Execute the Test

Click **Execute test case**.

**Result:** You are redirected to the HyperExecute dashboard, where your test runs. To interpret the run, see the [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/) guide.

## Best Practices for Authoring App Tests

Follow these practices to improve the stability and accuracy of generated steps in native app tests:

- **OTP and PIN fields:** For split-digit boxes, use the `OTP` keyword, for example `Enter OTP "1234"`.
- **Partially clickable text:** For spannable links inside labels, use `spannable text`, for example `Click on spannable text: "Terms and Conditions"`.
- **Wheels, sliders, and date pickers:** Target the column directly, for example `Enter "2" in first column`. Supported classes include `NumberPicker` and `SeekBar` (Android) and `XCUIElementTypePickerWheel`, `XCUIElementTypeDatePicker`, and `XCUIElementTypeSlider` (iOS); use App Live [UI Inspector](/support/docs/ui-inspector/) to confirm support.
- **Popups:** Dismiss a popup that has no visible close button with `dismiss dialog`.
- **Keyboard:** Use `hide keyboard` on Android; on iOS, add `press enter` after typing, for example `Type abcd and press enter`.
- **Special keys:** Delete characters with `press Del`.
- **Explicit waits:** Add a `wait` step when a screen or element takes time to load, for example a `Wait for 3 seconds` step before an assertion.
- **Per-step timeout:** Each app step waits up to 10 seconds for its element by default. On slow screens, override it via the step's three-dot menu, then **Step Timeout** (1 to 300 seconds), instead of adding fixed `wait` steps. Supported on Android and iOS real devices.
- **Explicit identifiers:** Name the element type for accuracy, for example `Click on continue 'text'` or `Type "2" in "username" input field`.

## Next Steps

Continue with these guides:

- [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)
- [Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)
- [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Upload and Download Files](/support/docs/kaneai-upload-and-download-files/)
