---
id: kaneai-smartui-visual-testing
title: Visual Regression Testing
hide_title: false
sidebar_label: Visual Testing
description: A step-by-step guide on using KaneAI to automate visual regression tests. Learn to capture screenshots, establish baselines, compare visual changes with SmartUI, and schedule automated runs.
keywords:
  - lambdatest kaneai
  - kaneai
  - smartui
  - visual testing
  - visual regression
  - automation
url: https://www.lambdatest.com/support/docs/kaneai-smartui-visual-testing
site_name: LambdaTest
slug: kaneai-smartui-visual-testing/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Visual Regression Testing with KaneAI and SmartUI",
          "item": "https://www.lambdatest.com/support/docs/kaneai-smartui-visual-testing"
        }]
      })
    }}
></script>

This guide provides a detailed walkthrough on how to leverage KaneAI to create, manage, and automate visual regression tests. By integrating with SmartUI, you can capture screenshots, compare visual changes, and maintain UI consistency throughout your development lifecycle.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/kane-dashboard.jpeg').default} alt="KaneAI Dashboard" className="doc_img"/>

## Creating Your First Visual Test

### Step 1: Initiate a Web Test
To begin, navigate to the [KaneAI dashboard](https://kaneai.lambdatest.com/dashboard) and click **Create a Web Test**. You can configure network settings before clicking **Start Testing** to launch the test authoring environment.


<img loading="lazy" src={require('../assets/images/kane-ai/smartui/initiate-web-test.png').default} alt="Initiate a Web Test in KaneAI" className="doc_img"/>

### Step 2: Add a Visual Comparison Step
Author your test by writing steps in plain language, such as `go to lambdatest`.

 To add a visual test step, type `/` in the "Write a step" editor and select **Visual Comparison** from the command menu.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/add-visual-comparison-step.jpeg').default} alt="Add Visual Comparison Step" className="doc_img"/>

### Step 3: Configure Your Screenshot
A configuration modal will appear for your screenshot.
* **Screenshot Name (Required):** You must provide a descriptive name for the screenshot.
* **Mis-Match Threshold (Optional):** Set an acceptable percentage of difference below which changes are auto-approved. The default is 0%.
* **Screenshot Type (Optional):** Choose between **View Port** (default) or **Full Page**.

Click **Create** to add the step to your test flow.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/configure-screenshot.png').default} alt="Configure Screenshot Settings" className="doc_img"/>

## Analyzing Baselines and Regressions

### Step 4: Establish the Baseline
The first time the test is executed, it captures an initial screenshot that becomes the **Baseline** for all future comparisons. You can view this image by clicking **Show Baseline**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/establish-baseline.jpeg').default} alt="Baseline screenshot created" className="doc_img"/>

### Step 5: Rerun and Analyze the Comparison
When you rerun the test, a new screenshot is captured and compared against the baseline. Click **Show Comparison** to open the SmartUI view. This interface highlights any visual differences found between the two images.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/analyze-comparison.png').default} alt="Analyze the visual comparison between baseline and new screenshot" className="doc_img"/>

### Step 6: Approve or Reject Changes
Within the comparison view, you can review the changes and decide on a verdict.
* **Reject Screenshot:** If the changes are unintended defects, you may reject the comparison.
* **Approve Screenshot:** If the changes are intentional, you may accept the comparison. This will update the baseline with the new image.

You can also adjust project settings like **Compare Type** and **Mis-Match Threshold** directly from this view.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/approve-reject-changes.jpeg').default} alt="Approve or Reject Screenshot Changes" className="doc_img"/>

## Saving and Automating Your Visual Test

### Step 7: Save Your Test Case
Once your test flow is complete, click **Finish test**. You will be prompted to save the session, where you can define the **Project**, **Folder**, **Test Name**, and **Description**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/save-test-case.png').default} alt="Save the test case session" className="doc_img"/>

### Step 8: Schedule the Test for Automation
You can access your saved tests via the **Test Manager**. To automate execution, navigate to **Test Runs** and schedule the finalized test[cite: 225]. When creating the run, provide a name and select **KaneAI Generated** as the `Type`. You can then set a recurring schedule for execution. Scheduled runs will automatically capture screenshots and store them in the SmartUI project for continuous comparison.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/schedule-test-run.png').default} alt="Schedule the Test Run for automation" className="doc_img"/>

## Step 9: View Your Visual Test Results on SmartUI

After the HyperExecute job is finished, all screenshots captured using the `takeScreenshot` command will be available in your SmartUI project for review.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="SmartUI Results" width="768" height="373" className="doc_img"/>

1.  Navigate to the [SmartUI Dashboard](https://smartui.lambdatest.com/).
2.  Select your project and the most recent build.
3.  Here, you can compare screenshots against the baseline, highlight differences, and approve or reject changes. You can use features like Smart Ignore to mask dynamic areas for more stable comparisons.
