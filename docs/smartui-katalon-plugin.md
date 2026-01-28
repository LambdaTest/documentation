---
id: smartui-katalon-plugin
title: SmartUI Plugin for Katalon Studio
sidebar_label: Katalon Plugin
description: Integrate TestMu AI SmartUI with Katalon Studio to perform visual regression testing directly in your test automation workflows.
keywords:
  - Visual Regression
  - Visual Regression Testing Guide
  - Visual Regression Test Automation
  - Visual Regression Automation Testing
  - Running Visual Regression Tests
  - Visual Regression Testing Online
  - Run Visual Regression
  - Visual Regression Run Specific Test
  - Visual Regression Testing Environment
  - How to Run Visual Regression Tests
  - Katalon Studio
  - Katalon SmartUI Integration

url: https://www.testmuai.com/support/docs/smartui-katalon-plugin/
site_name: LambdaTest
slug: smartui-katalon-plugin/
canonical: https://www.testmuai.com/support/docs/smartui-katalon-plugin/

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
          "name": "SmartUI Katalon Plugin",
          "item": `${BRAND_URL}/support/docs/smartui-katalon-plugin/`
        }]
      })
    }}
></script>

The **Katalon Studio SmartUI Plugin** integrates [Katalon Studio](https://www.katalon.com/) with [<BrandName /> SmartUI](/support/docs/smart-visual-regression-testing/), enabling **visual regression testing** directly inside your test automation workflows.

With this plugin, you can:
- Capture screenshots at any point in your test flow
- Compare them with visual baselines
- Detect UI changes early in your CI/CD pipeline

---

## Installation

### Option 1: Install via Katalon Store (Recommended)

1. Open [Katalon Store](https://store.katalon.com/).
2. Search for **“SmartUI”** or browse under *Plugins > Integrations*.
3. Click **Install** to add the plugin to your Katalon Studio instance.

### Option 2: Manual Installation via JAR

1. Download the latest `katalon-studio-smartui-plugin.jar` from the [official release page](https://github.com/LambdaTest/katalon-studio-smartui-plugin/releases).
2. In Katalon Studio, go to **Project > Settings > Plugins > Import Plugin**.
3. Select the downloaded `.jar` file and click **Import**.

---

## Configuration & Usage

### Step 1: Create a SmartUI Project

1. Go to [SmartUI Projects Page](https://smartui.lambdatest.com/).
2. Click **New Project**.
3. Select platform as **CLI** (for Katalon integration).
4. Enter project name, approvers, and tags (optional).
5. Click **Submit** and copy your **Project Token** from the dashboard.

> Your Project Token will be used to authenticate screenshot uploads to SmartUI.

---

### Step 2: Start your Katalon Instance from terminal

Run the following command in the terminal to start the Katalon instance.

```bash
/Applications/Katalon\ Studio\ Enterprise.app/Contents/MacOS/katalon
```
---

### Step 3: Set Environment Variable

In your Katalon project, set the `PROJECT_TOKEN` environment variable:

#### Via Project Settings:
1. Go to **Project > Settings > Plugins > SmartUI Integration**.
2. Here you may set your project token

```bash
PROJECT_TOKEN = "project_token..."
```

---

### Step 4: Configure SmartUI in Your Test Case

Use the provided custom keywords to start, capture, and stop SmartUI sessions.

#### Minimal Example:

```groovy
// Start SmartUI Server
// Replace 'buildName' with your desired build name (optional)
CustomKeywords.'com.katalon.plugin.keyword.smartui.SmartKeywords.startServer'('My Katalon Build', '', '')

// Open Browser
WebUI.openBrowser('')
WebUI.navigateToUrl('https://lambdatest.com')

// Capture Snapshot with SmartUI
// The string parameter is the snapshot name (will appear in SmartUI Dashboard)
CustomKeywords.'com.katalon.plugin.keyword.smartui.SmartKeywords.takeSnapshot'('Homepage Snapshot')

// Stop SmartUI Server
CustomKeywords.'com.katalon.plugin.keyword.smartui.SmartKeywords.stopServer'()

// Close Browser
WebUI.closeBrowser()
```

---

### Step 5: Advanced Configuration (Optional)

You can pass additional configuration via a JSON file or inline parameters.

#### Using a Config File (`config.json`):

```json
{
  "deviceName": "Chrome Desktop",
  "platform": "Windows",
  "fullPage": true,
  "ignoreBoxes": {
    "xpath": [
      "//*[@class='dynamic-ad']",
      "//*[@id='timestamp']"
    ]
  }
}
```

Then use it in your test:

```groovy
CustomKeywords.'com.katalon.plugin.keyword.smartui.SmartKeywords.startServer'('Build v1.0', 'config.json', '')
```

> Use `ignoreBoxes` to exclude dynamic elements (ads, timestamps) from comparison.
> Use `selectBoxes` to compare only specific regions (e.g., main content area).

---

## Running Tests

1. Execute your test case as usual in Katalon Studio.
2. After test completion, visit your [SmartUI Dashboard](https://smartui.lambdatest.com/) to:
   - View captured screenshots
   - Compare against baseline images
   - Approve or reject visual changes
   - Manage builds and baselines

---

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='server-management' label='Server Management' default>

**Server Management**

- Always include `startServer()` before taking screenshots and `stopServer()` after.

</TabItem>

<TabItem value='snapshot-naming' label='Snapshot Naming'>

**Snapshot Naming**

- Use descriptive snapshot names for easy identification in SmartUI.

</TabItem>

<TabItem value='ci-cd-integration' label='CI/CD Integration'>

**CI/CD Integration**

- For CI/CD pipelines, set `PROJECT_TOKEN` as an environment variable in your CI tool (Jenkins, GitHub Actions, etc.).

</TabItem>

<TabItem value='reporting' label='Reporting'>

**Reporting**

- Combine with Katalon's built-in reporting for comprehensive test insights.

</TabItem>
</Tabs>

---

## Troubleshooting

- **“Project Token not found”**: Ensure `PROJECT_TOKEN` is set in environment variables or passed explicitly.
- **No screenshots uploaded**: Verify network connectivity and that SmartUI server started successfully.
- **Dynamic content causing false positives**: Use `ignoreBoxes` or `selectBoxes` in config to stabilize comparisons.

---

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>SmartUI Katalon Plugin</span>
    </li>
  </ul>
</nav>
