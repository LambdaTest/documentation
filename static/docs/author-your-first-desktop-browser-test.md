# Author Your First Desktop Browser Test

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

In this guide, we'll walk you through how you can author your desktop browser tests using KaneAI

## Steps to Author Your Desktop Browser Test


Before you begin, make sure you have:


- A TestMu AI account with access to KaneAI.
- A web application URL you want to test.


## Author a Desktop Browser Test


Follow these steps to author and run a desktop browser test:

Once done, click **Author Test.**


From the KaneAI dashboard, click **Author Browser Test**.



**Result:** The test authoring modal opens from the side.

As you add each instruction, KaneAI queues them in real-time without waiting for completion. This allows you to build comprehensive test flows quickly and efficiently. Once you've outlined all your test steps, click Finish Test to finalize your automated test case.


In the modal sidebar, select **Desktop**.



**Result:** The modal shows the desktop browser configuration options.

### Step 3: Configure Advanced Options and Start Authoring


Optionally configure advanced settings before you begin:

- **Chrome Options:** Command-line switches that alter the default behavior of the Chrome browser. See the [KaneAI Chrome Options](/support/docs/kaneai-chrome-options/) guide for the full list.
- **Custom Headers:** Attach request or response metadata such as the method, URL, and body content. See the [KaneAI Custom Headers](/support/docs/kaneai-custom-headers/) guide for details.

Once done, click **Author Test**.



**Result:** KaneAI launches a live browser instance and opens the authoring panel.

### Step 4: Describe Your Test in Natural Language


Tell KaneAI what you want to test in plain English. KaneAI translates each instruction into an executable test step automatically. As you add instructions, KaneAI queues them in real time without waiting for completion, so you can build the full flow without pausing. When you finish, click **Finish Test** to finalize the test case.



**Result:** Each instruction appears as a distinct step in the test flow.

### Step 5: Capture Steps With Manual Interaction


To capture an action that is hard to describe, use **Manual Interaction Mode**. Perform the step directly in the instance window, and KaneAI records it and creates the matching automation step. For the full gesture and platform matrix, see the [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/) guide.



**Result:** KaneAI adds the recorded action as an automation step in the flow.

### Step 6: Save the Test Case


Select your **Project** and the folder where you want to save the test case. The **Test Name** and **Description** are generated automatically, and you can edit them. Set the test's **Type** and **Status**, and add tags so you can search for it later.



**Result:** The test case is saved to the selected project and folder.

### Step 7: Execute the Test


Click **Execute test case**.



**Result:** You are redirected to the HyperExecute dashboard, where your test runs. To interpret the run, see the [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/) guide.

## Tips for Writing Effective Instructions


Clear, specific instructions help KaneAI translate your intent into accurate steps. Keep these in mind as you author:

- **Be specific.** Name the exact element and action, for example `Click the 'Submit' button in the top-right of the form`, not "click that."
- **Start with an action verb.** Begin each step with Click, Type, Hover, Scroll, and similar verbs.
- **One action per step.** Break complex flows into sequential steps connected with words like "then," rather than overloading a single instruction.
- **Add context for conditionals.** State the condition explicitly, for example `If the 'Login' button is visible, click it`.
- **Use numbers for position or quantity.** For example, `Click the second product in the list` or `Scroll down 100 pixels`.
- **Wait when needed.** Pause for page loads or async operations, for example `Click 'Submit' and wait 5 seconds before the next step`.
- **Target the right tab.** When a link opens a new tab, add `switch to the  tab` so actions stay on it.
- **Verify before saving.** Re-run the flow to confirm every step executes cleanly, and refine a prompt iteratively if the result is not what you expected.

## Next Steps


Continue with these guides:

- [Author Your First Mobile Browser Test](/support/docs/author-your-first-mobile-browser-test/)
- [Author Your First Mobile App Test](/support/docs/author-your-first-mobile-app-test/)
- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
