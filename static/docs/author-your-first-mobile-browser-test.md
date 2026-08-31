# Author Your First Mobile Browser Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this guide, we'll walk you through how you can author your mobile browser tests using KaneAI

## Steps to Author Your Mobile Browser Test


Before you begin, make sure you have:


- A TestMu AI account with access to KaneAI.
- A web application URL you want to test on a mobile browser.


## Author a Mobile Browser Test


Follow these steps to author and run a mobile browser test:

**Step 5:** Once done, click on **Author Test**.


From the KaneAI dashboard, click **Author Browser Test**.



**Result:** The test authoring modal opens from the side.

**Step 7:** Now, select your **Project** and the folder where you want to save your test cases. The **Test Name** and **Description** will be generated automatically, but you can also edit them. Select your test's **Type** and **Status**, as well as the necessary tags that will allow you to search for it later.


In the modal sidebar, select **Mobile**.



**Result:** The modal shows the mobile browser configuration options.

### Step 3: Choose the OS, Browser, and Device


Choose your OS (Android or iOS), browser, device, and OS version.



**Result:** Your target device configuration is set.

### Step 4: Configure Advanced Settings


Optionally open **Advanced Settings** to toggle options such as network throttling or auto-login through Google. For the full list of options, see the [KaneAI Advanced Settings](/support/docs/kaneai-advanced-settings/) guide.



**Result:** Your selected advanced settings apply to the session.

### Step 5: Start Authoring


Click **Author Test**.



**Result:** KaneAI launches a live mobile browser instance and opens the authoring panel.

### Step 6: Describe Your Test in Natural Language


Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Finish Test** to finalize the test case.



**Result:** Each instruction appears as a distinct step in the test flow.

### Step 7: Save the Test Case


Select your **Project** and the folder where you want to save the test case. The **Test Name** and **Description** are generated automatically, and you can edit them. Set the test's **Type** and **Status**, and add tags so you can search for it later.



**Result:** The test case is saved to the selected project and folder.

### Step 8: Execute the Test


Click **Execute test case**.



**Result:** You are redirected to the HyperExecute dashboard, where your test runs. To interpret the run, see the [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/) guide.

## Feature Support Matrix


This table lists which actions are supported when authoring mobile browser tests:

| Feature / Action                                                      | Support Status         | Notes                                                                                   |
|-----------------------------------------------------------------------|-----------------------|-----------------------------------------------------------------------------------------|
| Element Scroll                                                        | Supported             |                                                                                         |
| Key Events (e.g. Enter, Space, Tab)                                   | Not Supported         |                                                                                         |
| Clear Input Fields                                                    | Supported             |                                                                                         |
| App Instructions (e.g. background, hide keyboard, show notifications) | Not Supported         |                                                                                         |
| Textual & Visual Queries                                              | Supported             | Includes driver-based queries.                                                          |
| Sites with Permission Popups (notifications, cookies, location)       | Supported (Android only) | Popups are auto-accepted on Android. iOS not supported currently.                    |
| Cookies & Local Storage                                               | Supported             |                                                                                         |
| Network Assertions                                                    | Not Supported         | Not yet available for mobile web; only supported on web.                                |
| Negative Scenarios from App UX (e.g. switch app, go to home, go back) | Not Supported         | These are app-specific and not currently available in browser testing mode.             |

## Next Steps


Continue with these guides:

- [Author Your First Desktop Browser Test](/support/docs/author-your-first-desktop-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Scroll in Feature](/support/docs/kane-ai-scroll-in-feature/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Mobile App Testing Patterns](/support/docs/kaneai-kb-mobile-app-testing-patterns/)

> _Have any feedback or request? Reach out to us via support@testmuai.com and we would be happy to hear from you._
