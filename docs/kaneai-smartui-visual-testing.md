---
id: kaneai-smartui-visual-testing
title: How to Run Visual Tests With KaneAI
sidebar_label: Visual Testing with KaneAI
displayed_sidebar: VisualRegressionTestingSidebar
hide_title: true
toc_max_heading_level: 2
description: Automate visual regression tests in KaneAI, capture screenshots, set baselines, compare changes with SmartUI, and schedule automated runs.
keywords:
  - testmu ai kaneai
  - kaneai
  - smartui
  - visual testing
  - visual regression
  - automation
url: https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/
site_name: TestMu AI
slug: kaneai-smartui-visual-testing/
canonical: https://www.testmuai.com/support/docs/kaneai-smartui-visual-testing/

---
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
          "name": "How to Run Visual Tests in KaneAI",
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
    "headline": "How to Run Visual Tests With KaneAI",
    "description": "Automate visual regression tests in KaneAI, capture screenshots, set baselines, compare changes with SmartUI, and schedule automated runs.",
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
      "smartui",
      "visual testing",
      "visual regression",
      "automation"
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

# How to Run Visual Tests With KaneAI
***



Add visual regression checks to a KaneAI test using its SmartUI integration. You capture a screenshot as a test step, KaneAI sets it as the baseline on the first run, and every later run compares against that baseline and flags visual differences for you to approve or reject.

The **Visual Comparison** step works in both web tests and app tests. This guide first shows how to create a visual test in a web test, and then in an Android or iOS app test in [Visual Comparison in App Tests](#visual-comparison-in-app-tests). The later sections on baselines, automation and SmartUI results cover web tests first, followed by what is different for app tests.

| | Web tests | App tests |
|---|---|---|
| Start from | **Author Browser Test** | **Author App Test** |
| Screenshot Type | **View Port** or **Full Page** | **View Port** only |
| What is captured | The browser viewport or the full page | The full device screen, including the status bar |
| Visual Regression settings in Advanced Configurations | Custom browsers, viewports and devices | Not used. Screenshots come from the devices the test runs on |
| Baselines are kept per | Browser and viewport | Device |

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/kane-dashboard.webp').default} alt="KaneAI dashboard with Author Browser Test and Author App Test" className="doc_img"/>

## Prerequisites
***

Before you begin, make sure you have:

:::note
Before you add a visual check, make sure you have the following.
- A KaneAI account with access to the [KaneAI dashboard](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective).
- The web page or flow, or the app screen, you want to capture a screenshot from.
:::

## Create Your First Visual Test
***

Follow these steps to add a visual comparison step to a KaneAI web test.

### Step 1: Start a Web Test
***

On the KaneAI dashboard, click **Author Browser Test**. In the **Author browser test** panel, you can set the **Network Configuration**, **Environment**, **Timezone**, **Chrome Options** and **Custom Headers**. Click **Author Test** to open the test authoring environment.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/initiate-web-test.webp').default} alt="Author browser test panel with network, environment and browser settings" className="doc_img"/>

**Result:** The authoring environment opens, ready for plain-language steps.

### Step 2: Add a Visual Comparison Step
***

Author your test in plain language, such as `go to lambdatest`. To add a visual check, type `/` in the **Write a step** editor and select **Visual Comparison** from the command menu. The **Eye Icon** on the dashboard opens the same command.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/add-visual-comparison-step.webp').default} alt="Visual Comparison in the slash command menu of a web test" className="doc_img"/>

**Result:** The screenshot configuration modal opens.

### Step 3: Configure the Screenshot
***

Set the screenshot options in the modal, then add the step.

* **Screenshot Name (required):** a descriptive name for the screenshot.
* **Mis-Match Threshold (optional):** the percentage of difference below which changes are auto-approved. The default is 0%.
* **Screenshot Type (optional):** **View Port** (default) or **Full Page**.

Click **Create** to add the step to your test flow.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/configure-screenshot.webp').default} alt="Visual Comparison modal with Screenshot Name, Mis-Match Threshold and Screenshot Type" className="doc_img" style={{width: '594px'}}/>

**Result:** The visual comparison step is added to your test.

## Visual Comparison in App Tests
***

You can add the **Visual Comparison** step to app tests on real Android and iOS devices. KaneAI takes a screenshot of the device screen and sends it to SmartUI, which compares it with the baseline for that screenshot name and device.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/kaneai-app-visual-comparison.webp').default} alt="Adding a Visual Comparison step to a KaneAI app test and seeing it set the baseline" className="doc_img"/>

### Start an App Test
***

1. On the [KaneAI dashboard](https://www.testmuai.com/login/?redirectTo=https://kaneai.lambdatest.com/objective), click **Author App Test**.
2. Select the **Android** or **iOS** tab.
3. Select your app from **Uploaded Apps**, or add one with **URL** or **Upload**.
4. Select a device and click **Start Testing**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-author-app-test.webp').default} alt="Author app test panel with the app and device selected" className="doc_img"/>

### Add a Visual Comparison Step in an App Test
***

Bring the app to the screen you want to check. Then type `/` in the step editor and select **Visual Comparison**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-add-visual-comparison-step.webp').default} alt="Visual Comparison in the slash command menu of an app test" className="doc_img"/>

:::info Manual Interaction
If **Manual Interaction** is on, a Visual Comparison step is added as **Queued** and does not run yet. Turn off Manual Interaction from the step editor toolbar, and the queued step runs.
:::

### Configure the Screenshot in an App Test
***

The configuration modal has the same fields as in web tests, with one difference: app tests support only **View Port**.

* **Screenshot Name (Required):** A name for the screenshot. Characters other than letters, numbers, `.`, `_` and `-` are replaced with `_`. For example, `Proverbial Home` is saved as `Proverbial_Home`.
* **Mis-Match Threshold (Optional):** The percentage of difference below which a change is approved automatically. The default is 0%.
* **Screenshot Type:** **View Port** is the only option. **Full Page** is not available for app tests, so screens that scroll are captured only as far as they show on the device.

Click **Create** to add the step.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-configure-screenshot.webp').default} alt="Visual Comparison modal in an app test with only the View Port screenshot type" className="doc_img" style={{width: '594px'}}/>

:::warning Use a unique name for each Visual Comparison step
SmartUI matches a screenshot to its baseline by name. If two steps in the same test use the same name, the later screenshot replaces the earlier one in the build, and only one screenshot is kept. Give every Visual Comparison step its own name, such as `Home_Before_Login` and `Home_After_Login`.
:::

## Analyze Baselines and Regressions
***

Establish a baseline, then review and act on the differences later runs detect.

### Step 4: Establish the Baseline
***

The first time the step runs, it captures an initial screenshot that becomes the **Baseline** for all future comparisons. The step shows **Baseline** and the comparison mode, such as **Smart Ignore**. Click **Show Baseline** to view the image.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/establish-baseline.webp').default} alt="Visual Comparison step showing Baseline, Smart Ignore and Show Baseline" className="doc_img" style={{width: '405px'}}/>

**Result:** The captured screenshot becomes the reference for every later run.

### Step 5: Rerun and Review the Comparison
***

When the step is run again during authoring, for example with **Run this step** from the step's **...** menu, KaneAI captures a new screenshot and compares it against the baseline. If changes are found, click **Show Comparison** to open the comparison view. It shows the **Baseline** and **Captured** screenshots side by side, highlights the differences, and shows the **Mismatch Percentage**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/analyze-comparison.webp').default} alt="Comparison view with the baseline and captured screenshots and the mismatch percentage" className="doc_img"/>

**Result:** The comparison view shows the baseline, the new screenshot, and the differences between them.

### Step 6: Approve or Reject Changes
***

In the comparison view, decide on each change with the buttons under **Verdict**.

* **Reject Screenshot:** reject the comparison when the change is an unintended defect.
* **Approve Screenshot:** approve the comparison when the change is intentional. This updates the baseline with the new image.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/approve-reject-changes.webp').default} alt="Verdict buttons to reject or approve the screenshot in the comparison view" className="doc_img"/>

You can also click the settings icon in this view to open **Project Settings** and change the **Compare Type** (**Strict** or **Smart Ignore**) and the **Mis-Match Threshold**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/comparison-project-settings.webp').default} alt="Project Settings with Compare Type and Mis-Match Threshold" className="doc_img" style={{width: '590px'}}/>

**Result:** The baseline reflects your verdict, and later runs compare against it.

### Review the Baseline in App Tests
***

The first time a Visual Comparison step runs, its screenshot becomes the **Baseline**. The step shows **Baseline** and the comparison mode, such as **Smart Ignore**. Click **Show Baseline** to open the captured image.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-establish-baseline.webp').default} alt="Visual Comparison step in an app test showing Baseline and Smart Ignore" className="doc_img"/>

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-show-baseline.webp').default} alt="Baseline screenshot of the app opened from Show Baseline" className="doc_img"/>

The screenshot covers the whole device screen, including the status bar with the clock, network and battery icons. These areas change between runs. See [Handle the Device Status Bar](#handle-the-device-status-bar).

## Save and Run the Test
***

Save the completed test case, then run it once or on a schedule.

### Step 7: Save the Test Case
***

When your test flow is complete, click **Save** in the top-right header. The **Save Test Case** dialog asks whether to run a sample execution of the generated code. Click **Save & Run Execution** to save the test and run it once on HyperExecute, or select **Skip sample execution of code** and click **Save & Skip Execution** to save it without running it.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/save-test-case.webp').default} alt="Save Test Case dialog with the option to skip the sample execution" className="doc_img" style={{width: '590px'}}/>

KaneAI opens the saved test case, with its steps, including the **Visual Comparison** step.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/saved-test.webp').default} alt="Saved test case with the Visual Comparison step" className="doc_img"/>

**Result:** The test case is saved and available under the chosen project.

### Step 8: Execute or Schedule the Run
***

Once the test case is saved, go to the **Test Runs** tab to configure and launch execution. For the initial setup, see [KaneAI HyperExecute Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/). Open the test run and click **Run on HyperExecute**. Run the test one of two ways.

* **Run Instance Now:** triggers an immediate, one-time run. Use it for a quick check or to debug a specific change.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/run-test.webp').default} alt="Run on HyperExecute menu with Run Instances Now and Schedule Test Run" className="doc_img" style={{width: '382px'}}/>

* **Schedule Test Run:** runs visual regression on a recurring schedule. See how to set up [KaneAI Scheduled Test Runs](/support/docs/kaneai-scheduled-test-runs/).

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/schedule-test-run.webp').default} alt="Setup your schedule panel for a test run" className="doc_img"/>

**Result:** The test runs now or on the schedule you set.

### Step 9: Set Advanced Visual Regression Configs
***

When you click **Run Instances Now**, the **Run with HyperExecute** panel opens. Click **Advanced Configurations** to open the **Visual Regression** settings.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/advanced-config.webp').default} alt="Run with HyperExecute panel with the Advanced Configurations button" className="doc_img"/>

Open the **Visual Regression** tab and turn on the toggle to configure the run across environments:

* Custom Browsers (up to 4)
* Custom Viewports (up to 5)
* Custom Devices (up to 2) with orientation (Portrait and Landscape)

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/visual-config.webp').default} alt="Visual Regression tab in Advanced Configurations with browsers, viewports, devices and orientation" className="doc_img"/>

For finer control, use the **JSON** tab to set your own parameters and configuration.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/visual-configs-json.webp').default} alt="Visual Regression settings in the JSON view" className="doc_img" style={{width: '754px'}}/>

**Result:** The run executes against the browsers, viewports, and devices you selected.

### Save and Run the App Test
***

1. Click **Save**. The **Save Test Case** dialog asks whether to run a sample execution of the generated code.
2. Click **Save & Run Execution** to save the test and run it once on HyperExecute. To save without running it, select **Skip sample execution of code** first.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-saved-test.webp').default} alt="Saved KaneAI app test with two Visual Comparison steps" className="doc_img"/>

To run the test again, click **Execute test case** on the test case page, or create a test run as described in [Test Run Execution](/support/docs/kaneai-hyperexecute-test-run-execution/). App test runs capture screenshots on the devices you run the test on. **Execute test case** can pick a different device on each run, and baselines are kept per device, so use a test run with a device configuration when you want every run compared on the same device. The **Visual Regression** settings in **Advanced Configurations** (custom browsers, viewports and devices) apply to web tests only.

## View Results on SmartUI
***

After the test run finishes, every screenshot captured with the `/Visual Comparison` command appears in your SmartUI project for review.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/smartui-dashboard.webp').default} alt="KaneAI builds and screenshots in a SmartUI project" className="doc_img"/>

1.  Go to the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/).
2.  Select your project and the most recent build.
3.  Compare screenshots against the baseline, review highlighted differences, and approve or reject changes. Use Smart Ignore to mask dynamic areas for more stable comparisons.

### Find App Results in SmartUI
***

Open the [SmartUI Dashboard](https://www.testmuai.com/login/?redirectTo=https://smartui.lambdatest.com/). App screenshots from KaneAI are stored in these SmartUI projects:

| Where the step ran | SmartUI project | Device shown in SmartUI |
|---|---|---|
| Authoring session | `kane_ai_<id>`, created with the first Visual Comparison step of the test. Each authoring session is one build. | `default` |
| Sample execution after **Save & Run Execution** | The same `kane_ai_<id>` project, as a new build | The device used for the sample execution, which can differ from the authoring device |
| **Execute** and test runs | A project with the same name as your KaneAI project. Each run is one build. | The device the test ran on, for example `Galaxy S26 Android` |

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-authoring-build.webp').default} alt="Authoring screenshot in the kane_ai SmartUI project with the default variant" className="doc_img"/>

SmartUI compares an app screenshot only with a baseline of the same name taken on the same device. The first screenshot on a device has no baseline and is shown as a **New Screenshot**. It stays new in later runs until you approve it. After you approve it, later runs on the same device are compared with it.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-run-new-screenshot.webp').default} alt="First run on a new device shown as New Screenshot with no baseline image" className="doc_img"/>

In the comparison view, the **Variants** field shows the device, and **Mismatch Percentage** shows how much of the screen changed. You can approve or reject the screenshot from **Verdict**.

<img loading="lazy" src={require('../assets/images/kane-ai/smartui/app/app-smartui-run-comparison.webp').default} alt="SmartUI comparison of two app test runs on Galaxy S26 highlighting the status bar" className="doc_img"/>

### Handle the Device Status Bar
***

Because the screenshot includes the status bar, the clock and status icons differ between runs even when the app has not changed. In the comparison above, the app is unchanged and the only highlighted area is the status bar, with a mismatch of 0.1321%.

To keep the status bar from failing your comparisons, open the SmartUI project's **Settings** > **Comparison** and use one of these options:

* **Bounding Boxes:** Click **Add New Area** to ignore the status bar region.
* **Custom Mis-Match Acceptance:** Set an accept percentage above the change the status bar causes.

:::info
Comparison settings belong to the SmartUI project. The **Mis-Match Threshold** and comparison mode you set in KaneAI apply to the `kane_ai_<id>` project used while authoring. Runs from **Execute** and test runs use the comparison settings of the project named after your KaneAI project, so set these options in that project too.
:::

## Next Steps
***

Extend visual testing across more inputs and code.

- Drive the same test across many inputs using [KaneAI Using Parameters](/support/docs/kane-ai-using-parameters/).
- Export the run as a framework test with [KaneAI Automation Code Generation](/support/docs/kane-ai-automation-code-generation/).
