---
id: smartui-cli-figma-app
title: Getting Started with LambdaTest's SmartUI Figma-App CLI
sidebar_label: Figma-App CLI
description: Learn how to compare your Figma mobile designs with native app screenshots on real devices using SmartUI CLI.
keywords:
  - Visual Regression
  - Mobile App Visual Testing
  - Figma to App Comparison
  - SmartUI CLI
  - LambdaTest Mobile
  - Design to Production Validation
url: https://www.lambdatest.com/support/docs/smartui-cli/
slug: smartui-cli-figma-app/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

---

SmartUI Figma-App CLI lets you compare **mobile app screenshots captured on real devices** with your **Figma design frames** to detect visual mismatches and ensure accurate implementation of mobile UI.

---

## Prerequisites

- Node.js and npm installed
- LambdaTest SmartUI account with App Automation plan
- Real device screenshots captured via Appium, SDK, or SmartUI platform
- Figma Personal Access Token ([how to get one](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens))

---

## Understanding Figma Tokens

| Token                | Where It’s Used | Description                                                                 |
|----------------------|------------------|-----------------------------------------------------------------------------|
| `FIGMA_TOKEN`        | Env Variable     | Your Figma **Personal Access Token** to authenticate with the Figma API    |
| `figma_file_token`   | `designs.json`   | Figma **file ID**, extracted from the Figma file URL                       |
| `figma_ids`          | `designs.json`   | List of **frame or node IDs** you want to compare visually                 |

> Example Figma URL:  
> `https://www.figma.com/file/abc12345/file-name?node-id=2417-58969`  
> - `figma_file_token`: `abc12345`  
> - `figma_ids`: `2417-58969`

---

## Step-by-Step Guide

### 1. Create a SmartUI Project

1. Visit [smartui.lambdatest.com](https://smartui.lambdatest.com)
2. Click **New Project**
3. Select **Real Devices** as the platform
4. Enter:
   - Project Name
   - Approvers (optional)
   - Tags (optional)
5. Click **Submit**

---

### 2. Install SmartUI CLI

```bash
npm install @lambdatest/smartui-cli
````

---

### 3. Generate and Edit Configuration

Run the following to create your initial design file:

```bash
npx smartui config:create-figma-app designs.json
```

#### Sample `designs.json`

```json title="designs.json"
{
  "mobile": [
    {
      "name": "Pixel 8",
      "platform": ["Android 14"],
      "orientation": "portrait"
    }
  ],
  "figma": {
    "depth": 2,
    "configs": [
      {
        "figma_file_token": "abc12345",
        "figma_ids": ["2417-58969"],
        "screenshot_names": ["homepage"]
      }
    ]
  }
}
```
---

### 4. Set Environment Variables

```bash
export PROJECT_TOKEN="your_smartui_project_token"
export FIGMA_TOKEN="your_figma_personal_token"
```

---

### 5. Run the Comparison

```bash
npx smartui upload-figma-app designs.json
```

#### Optional Flags

| Flag             | Description                                       |
| ---------------- | ------------------------------------------------- |
| `--markBaseline` | Mark this build as a new baseline for future runs |
| `--buildName`    | Assign a custom name to this comparison build     |

#### Example

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0" --markBaseline
```

---

### View SmartUI Results

You can see the SmartUI dashboard to view the results. This will help you identify the Mismatches from the existing `Baseline` build and do the required visual testing.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smartui-sdk-results-primer.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Best Practices

<Tabs className="docs__val" groupId="best-practices">
<TabItem value="build-names" label="Build Names" default>

### Build Names

```bash
   npx smartui upload-figma-app designs.json --buildName "v1.0.0"
   ```

</TabItem>
<TabItem value="screenshot-names" label="Screenshot Names" >

### Screenshot Names

- Good: `homepage-screen`, `login-form`, `dashboard-tab`
   - Avoid: `test1`, `screenshot`, `design-1`
   - Ensure `screenshot_names` in your config match the order of `figma_ids`

</TabItem>
<TabItem value="device-names" label="Device Names" >

### Device Names

### Screenshot Naming for SDK Comparisons

**Critical**: When comparing Figma designs with app screenshots captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your Appium/SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
driver.execute("smartui.takeScreenshot", {name: "homepage"});

// ✅ Correct - matches Figma screenshot name
driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

**Example for different frameworks:**

<Tabs className="docs__val" groupId="framework">
<TabItem value="appium" label="Appium" default>

```javascript
// JavaScript
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

</TabItem>
<TabItem value="appium-java" label="Appium Java">

```java
// Java
driver.execute("smartui.takeScreenshot", Map.of("name", "homepage.png"));
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match app screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
<TabItem value="device-names" label="Device Names" >

### Device Names

### Screenshot Naming for SDK Comparisons

**Critical**: When comparing Figma designs with app screenshots captured via SDKs, add `.png` extension to your SDK screenshot names.

Figma-uploaded screenshots automatically have `.png` appended (e.g., `homepage.png`), so your SDK screenshots must match:

**In your Appium/SDK code:**
```javascript
// ❌ Wrong - will not match Figma screenshot
driver.execute("smartui.takeScreenshot", {name: "homepage"});

// ✅ Correct - matches Figma screenshot name
driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

**Example for different frameworks:**

<Tabs className="docs__val" groupId="framework">
<TabItem value="appium" label="Appium" default>

```javascript
// JavaScript
await driver.execute("smartui.takeScreenshot", {name: "homepage.png"});
```

</TabItem>
<TabItem value="appium-java" label="Appium Java">

```java
// Java
driver.execute("smartui.takeScreenshot", Map.of("name", "homepage.png"));
```

</TabItem>
</Tabs>

This ensures that Figma screenshots (e.g., `homepage.png`) match app screenshots (e.g., `homepage.png`) in the same build.

</TabItem>
</Tabs>

## Troubleshooting

### Figma Upload Fails

**Symptoms**: 
- Error message: "Failed to upload Figma designs"
- Upload command returns error

**Solutions**:

1. **Verify Figma Token**:
   ```bash
   echo $FIGMA_TOKEN
   ```
   Ensure the token is valid and has not expired. Generate a new token from [Figma Settings](https://www.figma.com/settings).

2. **Check File Token**:
   - Verify the `figma_file_token` in your `designs.json` matches the file ID from the Figma URL
   - Ensure you have access to the Figma file

3. **Validate Node IDs**:
   - Confirm `figma_ids` in your configuration are valid
   - Check that the nodes exist in the Figma file

### Screenshots Not Matching Between Figma and App

**Symptoms**:
- Figma screenshots don't match app screenshots
- Comparison shows mismatches even when designs are identical

**Solutions**:

1. **Check Screenshot Names**:
   - Ensure SDK screenshots include `.png` extension (e.g., `homepage.png`)
   - Verify screenshot names match exactly between Figma config and SDK code
   - Ensure `screenshot_names` array matches the order of `figma_ids`

2. **Verify Device Sizes**:
   - Ensure device dimensions match Figma frame sizes
   - Check that device names in config match actual device capabilities
   - Verify orientation (portrait/landscape) matches between Figma and device

3. **Check Build Names**:
   - Ensure both Figma and SDK uploads use the same `--buildName`
   - Verify builds are in the same project

4. **Project Type**:
   - Ensure project is created as **Real Devices** type (not CLI)
   - Verify project exists in SmartUI dashboard

### Project Token Issues

**Symptoms**:
- "Invalid project token" error
- Uploads fail with authentication errors

**Solutions**:

1. **Verify Project Token**:
   ```bash
   echo $PROJECT_TOKEN
   ```
   Ensure the token is set correctly and matches your SmartUI project.

2. **Check Project Type**:
   - Ensure project is created as **Real Devices** type
   - Verify project exists in SmartUI dashboard

### Getting Help

If you encounter issues not covered here:

- Review the [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) for detailed solutions
- Check [Figma CLI Documentation](/support/docs/smartui-cli-figma) for basic Figma workflows
- Check [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web) for web comparison workflows
- Visit [LambdaTest Support](https://www.lambdatest.com/support) for additional resources
- Contact support at support@lambdatest.com or use [24/7 Chat Support](https://www.lambdatest.com/support)

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide)
- [Figma CLI Documentation](/support/docs/smartui-cli-figma)
- [Figma-Web CLI Documentation](/support/docs/smartui-cli-figma-web)
- [Appium Hooks Documentation](/support/docs/smartui-appium-hooks)
- [Baseline Management](/support/docs/smartui-baseline-management)
- [Running Your First Project](/support/docs/smartui-running-your-first-project)
- [SmartUI API Documentation](https://www.lambdatest.com/support/api-doc/)
- [How to generate a Figma token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
- [SmartUI CLI Docs](https://www.lambdatest.com/support/docs/smartui-cli/)
- [Appium + SmartUI Node Sample](https://github.com/LambdaTest/smartui-appium-nodejs)

---

**Run seamless visual comparisons between real device screenshots and Figma designs with SmartUI CLI. Start validating your mobile UI today!**