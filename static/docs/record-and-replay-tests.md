# Record and Replay Tests using LT Debug 2.0

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

With LT Debug 2.0, you now have the ability to record user interactions through the Chrome Recorder Panel and replay or retest them as automated tests on a cloud grid on over 10,000+ browser/device combinations. This eliminates the need to download code or manually run tests on your local machine, thus streamlining and optimizing your testing process.

## Prerequisites

1. Install the [LT Debug Chrome Extension](https://chrome.google.com/webstore/detail/lt-debug/kofahhnmgobkidipanhejacffiigppcd).
2. Login to your TestMu AI Account via LT Debug Dashboard. Don't have an account, sign up for free.

## Recording User Interactions with Chrome Recorder

1. To initiate a recording in Chrome DevTools, first, open the developer tools panel by inspecting the webpage.

2. Once the panel is open, navigate to the **Recorder** tab.

3. From there, select **Create a new recording**.

4. Now click **Start recording** to begin capturing user interactions on the page.

5. Once you have completed recording the user flow in Chrome DevTools, you can end the recording process by clicking on **End recording**.

## Recording and Replaying Tests on TestMu AI

After ending the recording process in Chrome DevTools, you will notice a TestMu AI button appear on the screen.

1. To replay or retest the recorded user flow on TestMu AI, simply click on the TestMu AI button.

2. Configure your test capabilities like Browser/OS Version, Build Name, and Test Name, etc, on which you wish to run the recorded interactions, and click **Start Test**.

3. Once the test successful runs, it will generate the test IDs and a link to TestMu AI Automation Dashboard.

4. To view your record automated test results, visit the [TestMu AI Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://automation.lambdatest.com/build).
