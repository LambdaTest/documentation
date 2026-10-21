---
id: kaneai-smartui-visual-testing
title: Visual Test Creation with KaneAI
hide_title: false
description: A step-by-step guide on using KaneAI to automate visual regression tests for web and mobile app tests. Learn to capture screenshots, establish baselines, compare visual changes with SmartUI, and schedule automated runs.
keywords:
  - testmu ai kaneai
  - kaneai
  - smartui
  - visual testing
  - visual regression
  - app visual testing
  - mobile app testing
  - automation
url: https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/
site_name: TestMu AI
slug: kaneai-smartui-visual-testing/
canonical: https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Visual Regression Testing with KaneAI and SmartUI",
          "item": `${BRAND_URL}/support/docs/kaneai-smartui-visual-testing`
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
      "@id": "https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/"
    },
    "headline": "Visual Test Creation with KaneAI",
    "description": "A step-by-step guide on using KaneAI to automate visual regression tests for web and mobile app tests. Learn to capture screenshots, establish baselines, compare visual changes with SmartUI, and schedule automated runs.",
    "url": "https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "SmartUI",
    "keywords": [
      "testmu ai kaneai",
      "kaneai",
      "smartui"
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
    "dateModified": "2026-10-21T18:30:00+05:30"
  }) }}
/>

This guide provides a detailed walkthrough on how to leverage KaneAI to create, manage, and automate visual regression tests. By integrating with SmartUI, you can capture screenshots, compare visual changes, and maintain UI consistency throughout your development lifecycle.

The **Visual Comparison** step works in both web tests and app tests. This guide first shows how to create a visual test in a web test, and then in an Android or iOS app test in [Visual Comparison in App Tests](#visual-comparison-in-app-tests). The later sections on baselines, automation and SmartUI results cover web tests first, followed by what is different for app tests.

| | Web tests | App tests |
|---|---|---|
| Start from | **Author Browser Test** | **Author App Test** |
| Screenshot Type | **View Port** or **Full Page** | **View Port** only |
| What is captured | The browser viewport or the full page | The full device screen, including the status bar |
| Visual Regression settings in Advanced Configurations | Custom browsers, viewports and devices | Not used. Screenshots come from the devices the test runs on |
| Baselines are kept per | Browser and viewport | Device |

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/kane-dashboard.png').default} alt="KaneAI Dashboard" className="doc_img"/>

## Creating Your First Visual Test

### Initiate a Web Test
To begin, navigate to the [KaneAI dashboard](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective) and click **Author Browser Test**. You can configure network settings before clicking **Start Testing** to launch the test authoring environment.


<img loading="lazy" src={require('../assets/images/kane-ai/smartui/initiate-web-test.png').default} alt="Initiate a Web Test in KaneAI" className="doc_img"/>

### Add a Visual Comparison Step
Author your test by writing steps in plain language, such as `go to lambdatest`.

To add a visual test step, type `/` in the "Write a step" editor and select **Visual Comparison** from the command menu. You may also use the **Eye Icon** on the dashboard for quick access.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/add-visual-comparison-step.png').default} alt="Add Visual Comparison Step" className="doc_img"/>

### Configure Your Screenshot
A configuration modal will appear for your screenshot.
* **Screenshot Name (Required):** You must provide a descriptive name for the screenshot.
* **Mis-Match Threshold (Optional):** Set an acceptable percentage of difference below which changes are auto-approved. The default is 0%.
* **Screenshot Type (Optional):** Choose between **View Port** (default) or **Full Page**.

Click **Create** to add the step to your test flow.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/configure-screenshot.png').default} alt="Configure Screenshot Settings" className="doc_img"/>

## Visual Comparison in App Tests

You can add the **Visual Comparison** step to app tests on real Android and iOS devices. KaneAI takes a screenshot of the device screen and sends it to SmartUI, which compares it with the baseline for that screenshot name and device.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/kaneai-app-visual-comparison.webp').default} alt="Adding a Visual Comparison step to a KaneAI app test and seeing it set the baseline" className="doc_img"/>

### Start an App Test

1. On the [KaneAI dashboard](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective), click **Author App Test**.
2. Select the **Android** or **iOS** tab.
3. Select your app from **Uploaded Apps**, or add one with **URL** or **Upload**.
4. Select a device and click **Start Testing**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-author-app-test.webp').default} alt="Author app test panel with the app and device selected" className="doc_img"/>

### Add a Visual Comparison Step

Bring the app to the screen you want to check. Then type `/` in the step editor and select **Visual Comparison**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-add-visual-comparison-step.webp').default} alt="Visual Comparison in the slash command menu of an app test" className="doc_img"/>

:::info Manual Interaction
If **Manual Interaction** is on, a Visual Comparison step is added as **Queued** and does not run yet. Turn off Manual Interaction from the step editor toolbar, and the queued step runs.
:::

### Configure the Screenshot

The configuration modal has the same fields as in web tests, with one difference: app tests support only **View Port**.

* **Screenshot Name (Required):** A name for the screenshot. Characters other than letters, numbers, `.`, `_` and `-` are replaced with `_`. For example, `Proverbial Home` is saved as `Proverbial_Home`.
* **Mis-Match Threshold (Optional):** The percentage of difference below which a change is approved automatically. The default is 0%.
* **Screenshot Type:** **View Port** is the only option. **Full Page** is not available for app tests, so screens that scroll are captured only as far as they show on the device.

Click **Create** to add the step.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-configure-screenshot.webp').default} alt="Visual Comparison modal in an app test with only the View Port screenshot type" className="doc_img" style={{width: '594px'}}/>

:::warning Use a unique name for each Visual Comparison step
SmartUI matches a screenshot to its baseline by name. If two steps in the same test use the same name, the later screenshot replaces the earlier one in the build, and only one screenshot is kept. Give every Visual Comparison step its own name, such as `Home_Before_Login` and `Home_After_Login`.
:::

## Analyzing Baselines and Regressions

### Establish the Baseline
The first time the test is executed, it captures an initial screenshot that becomes the **Baseline** for all future comparisons. You can view this image by clicking **Show Baseline**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/establish-baseline.png').default} alt="Baseline screenshot created" className="doc_img"/>

### Rerun and Analyze the Comparison
When the step is run again during authoring, a new screenshot is captured and compared against the baseline. Click **Show Comparison** to open the SmartUI view. This interface highlights any visual differences found between the two images.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/analyze-comparison.png').default} alt="Analyze the visual comparison between baseline and new screenshot" className="doc_img"/>

### Approve or Reject Changes
Within the comparison view, you can review the changes and decide on a verdict.
* **Reject Screenshot:** If the changes are unintended defects, you may reject the comparison.
* **Approve Screenshot:** If the changes are intentional, you may accept the comparison. This will update the baseline with the new image.

You can also adjust project settings like **Compare Type** and **Mis-Match Threshold** directly from this view.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/approve-reject-changes.png').default} alt="Approve or Reject Screenshot Changes" className="doc_img"/>

### Review the Baseline in App Tests

The first time a Visual Comparison step runs, its screenshot becomes the **Baseline**. The step shows **Baseline** and the comparison mode, such as **Smart Ignore**. Click **Show Baseline** to open the captured image.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-establish-baseline.webp').default} alt="Visual Comparison step in an app test showing Baseline and Smart Ignore" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-show-baseline.webp').default} alt="Baseline screenshot of the app opened from Show Baseline" className="doc_img"/>

The screenshot covers the whole device screen, including the status bar with the clock, network and battery icons. These areas change between runs. See [Handle the Device Status Bar](#handle-the-device-status-bar).

## Saving and Automating Your Visual Test

### Save Your Test Case
Once your test flow is complete, click **Save** in the top-right header. You will be prompted to save the session, where you can define the **Project**, **Folder**, **Test Name**, and **Description**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/save-test-case.png').default} alt="Save the test case session" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/saved_test.png').default} alt="Save the test case session" className="doc_img"/>

### Execution and Scheduling

Once your test case is saved, navigate to the **Test Runs** tab to configure and launch its execution. For a complete guide on the initial setup, refer to our documentation on [Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/).

You can execute your test using one of two methods:

* **Run Instance Now**
This option triggers an immediate, one-time execution of your test. It is ideal for quick validations or debugging a specific change.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/run-test.png').default} alt="Run Test for automation" className="doc_img"/>

* **Schedule Test Run**
This option allows you to automate your visual regression testing by setting up a recurring schedule. Learn more in our guide to [Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/schedule-test-run.png').default} alt="Schedule the Test Run for automation" className="doc_img"/>


### Using Advanced Configurations for Visual Regression
While running **Run Instances Now** user can access **Visual Regression** settings via **Advanced Configurations** 


<img loading="lazy" src={require('../assets/images/kane-ai/smartui/advanced_config.png').default} alt="Schedule the Test Run for automation" className="doc_img"/>

Here users can enable **Visual Regression** settings to use the advanced configurations:
* Custom Browsers (upto 4)
* Custom Viewports (upto 5)
* Custom Devices (upto 2) with Orientation (Portrait and Landscape)
<img loading="lazy" src={require('../assets/images/kane-ai/smartui/visual_config.png').default} alt="Schedule the Test Run for automation" className="doc_img"/>

For a more flexible usage you may use the **JSON** tab where you can set your own parameters and configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/visual_configs_json.png').default} alt="Schedule the Test Run for automation" className="doc_img"/>

### Save and Run the App Test

1. Click **Save**. The **Save Test Case** dialog asks whether to run a sample execution of the generated code.
2. Click **Save & Run Execution** to save the test and run it once on HyperExecute. To save without running it, select **Skip sample execution of code** first.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-saved-test.webp').default} alt="Saved KaneAI app test with two Visual Comparison steps" className="doc_img"/>

To run the test again, click **Execute test case** on the test case page, or create a test run as described in [Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/). App test runs capture screenshots on the devices you run the test on. **Execute test case** can pick a different device on each run, and baselines are kept per device, so use a test run with a device configuration when you want every run compared on the same device. The **Visual Regression** settings in **Advanced Configurations** (custom browsers, viewports and devices) apply to web tests only.

## View Your Visual Test Results on SmartUI

After the Test Run job is finished, all screenshots captured using the `/Visual Comparison` command via KaneAI will be available in your SmartUI project for review.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/smartui_dashboard.png').default} alt="smartui dashboard" className="doc_img"/>


1.  Navigate to the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2.  Select your project and the most recent build.
3.  Here, you can compare screenshots against the baseline, highlight differences, and approve or reject changes. You can use features like Smart Ignore to mask dynamic areas for more stable comparisons.

### Find App Results in SmartUI

Open the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/). App screenshots from KaneAI are stored in these SmartUI projects:

| Where the step ran | SmartUI project | Device shown in SmartUI |
|---|---|---|
| Authoring session | `kane_ai_<id>`, created with the first Visual Comparison step of the test. Each authoring session is one build. | `default` |
| Sample execution after **Save & Run Execution** | The same `kane_ai_<id>` project, as a new build | The device used for the sample execution, which can differ from the authoring device |
| **Execute** and test runs | A project named after your KaneAI project ID. Each run is one build. | The device the test ran on, for example `Galaxy S25 Ultra Android` |

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-authoring-build.png').default} alt="Authoring screenshot in the kane_ai SmartUI project with the default variant" className="doc_img"/>

SmartUI compares an app screenshot only with a baseline of the same name taken on the same device. The first screenshot on a device has no baseline and is shown as a **New Screenshot**. Later runs on the same device are compared with it.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-run-new-screenshot.png').default} alt="First run on a new device shown as New Screenshot with no baseline image" className="doc_img"/>

In the comparison view, the **Variants** field shows the device, and **Mismatch Percentage** shows how much of the screen changed. You can approve or reject the screenshot from **Verdict**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-run-comparison.png').default} alt="SmartUI comparison of two app test runs on Galaxy S25 Ultra highlighting the status bar" className="doc_img"/>

### Handle the Device Status Bar

Because the screenshot includes the status bar, the clock and status icons differ between runs even when the app has not changed. In the comparison above, the app is unchanged and the only highlighted area is the status bar, with a mismatch of 0.0878%.

To keep the status bar from failing your comparisons, open the SmartUI project's **Settings** > **Comparison** and use one of these options:

* **Bounding Boxes:** Click **Add New Area** to ignore the status bar region.
* **Custom Mis-Match Acceptance:** Set an accept percentage above the change the status bar causes.

:::info
Comparison settings belong to the SmartUI project. The **Mis-Match Threshold** and comparison mode you set in KaneAI apply to the `kane_ai_<id>` project used while authoring. Runs from **Execute** and test runs use the comparison settings of the project named after your KaneAI project ID, so set these options in that project too.
:::
