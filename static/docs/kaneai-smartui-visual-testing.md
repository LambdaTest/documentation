# How to Run Visual Tests With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Add visual regression checks to a KaneAI test using its SmartUI integration. You capture a screenshot as a test step, KaneAI sets it as the baseline on the first run, and every later run compares against that baseline and flags visual differences for you to approve or reject.


## Prerequisites


Before you begin, make sure you have:


Before you add a visual check, make sure you have the following.
- A KaneAI account with access to the [KaneAI dashboard](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective).
- The web page or flow you want to capture a screenshot from.


## Create Your First Visual Test


Follow these steps to add a visual comparison step to a KaneAI web test.

### Step 1: Start a Web Test


On the KaneAI dashboard, click **Author Browser Test**. Configure network settings if needed, then click **Start Testing** to open the test authoring environment.



**Result:** The authoring environment opens, ready for plain-language steps.

### Step 2: Add a Visual Comparison Step


Author your test in plain language, such as `go to lambdatest`. To add a visual check, type `/` in the **Write a step** editor and select **Visual Comparison** from the command menu. The **Eye Icon** on the dashboard opens the same command.



**Result:** The screenshot configuration modal opens.

### Step 3: Configure the Screenshot


Set the screenshot options in the modal, then add the step.

* **Screenshot Name (required):** a descriptive name for the screenshot.
* **Mis-Match Threshold (optional):** the percentage of difference below which changes are auto-approved. The default is 0%.
* **Screenshot Type (optional):** **View Port** (default) or **Full Page**.

Click **Create** to add the step to your test flow.



**Result:** The visual comparison step is added to your test.

## Analyze Baselines and Regressions


Establish a baseline, then review and act on the differences later runs detect.

### Step 4: Establish the Baseline


The first test run captures an initial screenshot and sets it as the **Baseline** for all future comparisons. Click **Show Baseline** to view it.



**Result:** The captured screenshot becomes the reference for every later run.

### Step 5: Rerun and Review the Comparison


When you replay or re-run the test during authoring, KaneAI captures a new screenshot and compares it against the baseline. Click **Show Comparison** to open the SmartUI view, which highlights the visual differences between the two images.



**Result:** The SmartUI view shows the baseline, the new screenshot, and the differences between them.

### Step 6: Approve or Reject Changes


In the comparison view, decide on each change.

* **Reject Screenshot:** reject the comparison when the change is an unintended defect.
* **Approve Screenshot:** approve the comparison when the change is intentional. This updates the baseline with the new image.

You can also adjust **Compare Type** and **Mis-Match Threshold** from this view.



**Result:** The baseline reflects your verdict, and later runs compare against it.

## Save and Run the Test


Save the completed test case, then run it once or on a schedule.

### Step 7: Save the Test Case


When your test flow is complete, click **Finish test**. In the save prompt, set the **Project**, **Folder**, **Test Name**, and **Description**.





**Result:** The test case is saved and available under the chosen project.

### Step 8: Execute or Schedule the Run


Once the test case is saved, go to the **Test Runs** tab to configure and launch execution. For the initial setup, see [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/). Run the test one of two ways.

* **Run Instance Now:** triggers an immediate, one-time run. Use it for a quick check or to debug a specific change.



* **Schedule Test Run:** runs visual regression on a recurring schedule. See how to set up [KaneAI Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).



**Result:** The test runs now or on the schedule you set.

### Step 9: Set Advanced Visual Regression Configs


When you choose **Run Instance Now**, open **Visual Regression** settings under **Advanced Configurations**.



Enable **Visual Regression** to configure the run across environments:

* Custom Browsers (up to 4)
* Custom Viewports (up to 5)
* Custom Devices (up to 2) with orientation (Portrait and Landscape)



For finer control, use the **JSON** tab to set your own parameters and configuration.



**Result:** The run executes against the browsers, viewports, and devices you selected.

## View Results on SmartUI


After the test run finishes, every screenshot captured with the `/Visual Comparison` command appears in your SmartUI project for review.



1.  Go to the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2.  Select your project and the most recent build.
3.  Compare screenshots against the baseline, review highlighted differences, and approve or reject changes. Use Smart Ignore to mask dynamic areas for more stable comparisons.

## Next Steps


Extend visual testing across more inputs and code.

- Drive the same test across many inputs using [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).
- Export the run as a framework test with [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).
