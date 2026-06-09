---
id: smart-heal-appium
title: Smart Heal in Automation
sidebar_label: Smart Heal
description: Learn how to enable Smart Heal, TestMu AI’s Auto-Heal capability, for real device automation tests to reduce flakiness by automatically recovering from locator failures during execution.
keywords:
  - appium smart-heal
  - self-healing tests
  - smart heal
  - locator healing
  - mobile automation
  - testmu ai automation
  - smart heal appium real device
  - auto-heal appium mobile
  - self-healing mobile test automation
  - AI smart heal locator recovery
  - appium locator healing iOS Android
  - auto heal mobile app testing
  - self-healing appium locators
  - fix broken locators appium
  - smart heal baseline appium
  - AI ML mobile test healing
url: https://www.testmuai.com/support/docs/smart-heal-appium/
site_name: TestMu AI
slug: smart-heal-appium/
canonical: https://www.testmuai.com/support/docs/smart-heal-appium/
---


import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RealDeviceTag from '../src/component/realDevice';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

# AI-Powered Smart Heal for Automation Tests
<RealDeviceTag value="Real Device" /> 

<BrandName />’s **Smart Heal** uses **AI-powered algorithms** to automatically detect and recover from locator failures during test execution. It intelligently detects missing elements, analyzes the UI in real time, and applies the closest valid match, keeping tests running smoothly despite UI changes. Both the **original and recovered locators** are logged for full visibility through the <BrandName /> dashboard.

> Smart Heal is currently in **closed beta**. To enable it for your organization, reach out via <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat**</span> or email **support@testmuai.com**.

---
## Use Cases

- **Frequent UI Updates**: When product teams ship fast and locator changes are common, Smart Heal prevents brittle tests from breaking on every release and make shipments fast.
- **CI/CD Reliability**: Reduce flaky build failures by automatically recovering from locator issues in pipelines.
- **Maintenance Reduction**: Spend less time fixing scripts manually and more time building new coverage.Deploy first and fix later.
- **Audit & Debugging**: Use healed locator logs and screenshots to understand changes quickly and improve your scripts over time.

---
## Smart Heal Workflow

1. **Baseline Creation**
   Smart Heal requires at least one successful (**Passed**) test run to establish a baseline. On this initial run, <BrandName /> captures a **baseline snapshot** of all element locators in your script. Make sure to include the [<BrandName /> Hook](/support/docs/appium-testmu-hooks/#adding-custom-status--remark) to explicitly mark tests as passed during execution.
   - The **project name** and **test name** must remain the same across runs for the baseline to apply.
   - Since Smart Heal uses AI-driven analysis, expect executions to take slightly longer than usual.

2. **Baseline Update**
   After each successful test run, Smart Heal automatically updates your baseline to reflect the latest passed build. This ensures the most recent valid UI state is used as reference for future healing attempts.

3. **Detection and Healing**
   In subsequent runs, if an element cannot be found due to **UI or DOM changes**, Smart Heal triggers automatically, leveraging **AI-driven analysis** of element attributes, hierarchy, and **visual cues** to find the closest valid match in the updated UI.

4. **Retry with Healed Locator**
   When a likely match is found, the test step retries with the **healed locator**. These adjustments apply at runtime so the test flow continues without interruption. Both the original and healed locators are logged for full transparency.

5. **Fallback and Suggestions**
   If Smart Heal cannot confidently identify an alternative, it records **AI-driven suggestions** in the dashboard. These insights help you quickly update or strengthen your locators to avoid repeated failures in future runs.


---

## Smart Heal in Automation Tests

### 1. Upload Your App

Before enabling Smart Heal, ensure your app is uploaded to <BrandName />.

1. Follow the [Upload Your Application](/support/docs/upload-apps-on-real-device-cloud/) guide.
2. Once uploaded, **note the App ID** returned by the API or dashboard.
3. Use this **App ID** in the `"app"` capability in your automation script.

---

### 2. Enable Smart Heal with Capabilities

To enable Smart Heal, add `"smartHeal": true` to your desired capabilities in your Appium test script.

<Tabs className="docs__val">
<TabItem value="ios" label="iOS" default>

```python
desired_caps = {
    "deviceName": "iPhone 16",
    "platformName": "iOS",
    "platformVersion": "18",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",
    "build": "Smart Heal iOS",
    "name": "Sample Smart Heal Test",
    # highlight-next-line
    "smartHeal": True
}
```

</TabItem>

<TabItem value="android" label="Android" default>

```python
desired_caps = {
    "deviceName": "Galaxy S25",
    "platformName": "Android",
    "platformVersion": "16",
    "isRealMobile": True,
    "app": "YOUR_APP_URL",
    "build": "Smart Heal Android",
    "name": "Sample Smart Heal Test",
    # highlight-next-line
    "smartHeal": True
}
```

</TabItem>
</Tabs>

:::tip
You can generate capabilities for your test requirements with the help of our inbuilt [**Capabilities Generator tool**](https://www.testmuai.com/capabilities-generator/). For more details, please refer to our guide on [**Desired Capabilities in Appium**](/support/docs/desired-capabilities-in-appium/).
:::

### 3. Enable Smart Heal with Runtime Hooks

You can also control Smart Heal dynamically during test execution using runtime hooks. This is useful when you want healing active in specific phases or after major UI changes.

```java
// Stop Smart Heal
driver.executeScript("lambda-heal-stop");

// Start Smart Heal
driver.executeScript("lambda-heal-start");

```

### 4. Running Your Tests

Once your app is uploaded and Smart Heal is enabled (either via capabilities or runtime hooks), execute your test script as usual with your preferred automation framework. Smart Heal will monitor for locator failures during the run, apply healing when possible, and log all details to the <BrandName /> dashboard for review.

---

## Viewing Results in Dashboard

### Accessing the Dashboard
Your test results are displayed on the [<BrandName /> App Automation Dashboard](https://www.testmuai.com/login/?redirectTo=https://appautomation.lambdatest.com/build).

### Filtering Healed Builds
To display only healed builds, click on the **Configure** option at the top of the dashboard.  

- The following image shows the **Configure box**, with the **Features** tab highlighted:  
![Smart Heal - Configure](../assets/images/real-device-app-testing/Auto-heal/SmartHeal1.png)

- When you open the **Features** tab, a pop-up appears where you can enable **Auto-Heal** to filter and display only executions where Smart Heal was applied:  
![Smart Heal - Features Popup](../assets/images/real-device-app-testing/Auto-heal/SmartHeal2.png)

- Once filtering is applied, the dashboard highlights all healed elements in your tests. In this view, healed elements are marked clearly, while those that could not be healed are highlighted in red:  
![Smart Heal - Highlighted Elements](../assets/images/real-device-app-testing/Auto-heal/SmartHeal4.png)


### Hovering Over Healed Builds
Each healed build has an associated icon. Hovering over this icon provides a tooltip that shows a brief summary of the session and the healing actions performed.  

![Smart Heal-2](../assets/images/real-device-app-testing/Auto-heal/SmartHeal5.png)

### Session Details
Access detailed execution logs that clearly differentiate between **original and healed selectors**, along with AI suggestions, and compare before-and-after screenshots. These insights help you understand how the Auto-Heal mechanism worked during execution and guide you in refining locators over time.
![Smart Heal - Session Details showing original and healed selectors](../assets/images/real-device-app-testing/Auto-heal/Auto-Heal1.png)

### AI Review on Failures
When a test case fails, the dashboard provides **AI-powered analysis and suggestions** to help you quickly identify root causes and fix issues.
![Smart Heal - AI Review on test failure with suggestions](../assets/images/real-device-app-testing/Auto-heal/Auto-heal2.png)


:::info
Smart Heal delivers the best results when applied to **static components** such as buttons or form fields, where locators remain relatively consistent across runs.
:::

## Related Docs

- [Selenium Auto Healing](/support/docs/auto-healing/):Auto-heal for Selenium web automation tests
- [Playwright Auto Healing](/support/docs/playwright-auto-healing/):Auto-heal for Playwright web automation tests
- [Auto Healing in HyperExecute](/support/docs/hyperexecute-auto-healing/):Auto-heal for tests executed via HyperExecute
- [Auto-Heal in KaneAI](/support/docs/kaneai-auto-heal/):AI-native auto-heal with natural language understanding for KaneAI-authored tests
