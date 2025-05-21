---
id: smartui-cli-figma-app
title: Getting started with LambdaTest's SmartUI Figma-App CLI 
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


SmartUI Figma-App CLI allows you to validate your mobile app's implementation against Figma designs by comparing screenshots from real devices with your design files. This guide walks you through setting up and using the CLI to ensure design fidelity in your mobile app development.

---

## Prerequisites

- [ ] Node.js and npm installed
- [ ] LambdaTest SmartUI account with App Automation Plan
- [ ] Knowledge of [visual testing Native Apps](https://www.lambdatest.com/support/docs/appium-visual-regression/) with SmartUI 
- [ ] Figma Personal Access Token ([how to get one](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens))

---

## Step-by-Step Guide

### 1. Create a SmartUI Project

The first step is to create a project with the application in which we will combine all your builds run on the project. To create a SmartUI Project, follow these steps:

1. Go to [Projects page](https://smartui.lambdatest.com/)
2. Click on the `new project` button
3. Select the platform as <b>Real Devices</b> for executing your `App` tests.
4. Add name of the project, approvers for the changes found, tags for any filter or easy navigation.
5. Click on the **Submit**.


### 2. Install SmartUI CLI

```bash
npm install @lambdatest/smartui-cli
```
---

### 3. Create the Figma-App Configuration File

Generate a starter config:

```bash
npx smartui config:create-figma-app designs.json
```
**Sample `designs.json`:**

```json title="/smartui-cli-figma-app/designs.json"
{
  "mobile": [
    {
      "name": "Pixel 8",
      "platform": ["Android 14"],
      "orientation": "portrait"
    },
    {
      "name": "iPhone 15",
      "platform": ["iOS 16"],
      "orientation": "landscape"
    }
  ],
  "figma": {
    "depth": 2,
    "configs": [
      {
        "figma_file_token": "<token>",
        "figma_ids": ["id-1", "id-2"],
        "screenshot_names": ["homepage", "about"]
      },
      {
        "figma_file_token": "<token>",
        "figma_ids": ["id-3", "id-4"],
        "screenshot_names": ["xyz", "abc"]
      }
    ]
  }
}
```

#### Config Options:

| Key                | Description                                                                                  | Required |
|--------------------|----------------------------------------------------------------------------------------------|----------|
| name               | Device name                                                  | Yes      |
| platform           | OS and version (e.g., `["Android 14"]`, `["iOS 16"]`)                                    | Yes      |
| orientation        | `portrait` or `landscape` (default: portrait)                                                | No       |
| figma_file_token   | Figma file token                                                                             | Yes      |
| figma_ids          | Array of Figma frame/artboard IDs to compare                                                 | Yes      |
| screenshot_names   | Custom names for screenshots (must be unique within a build)                                 | Yes      |
| depth              | Figma tree depth (optional, default: all nodes)                                              | No       |

---
:::note
Please ensure that the platform and device name in your configuration matches the platform and device name in your App Automation tests for accurate comparisons. In case you are using regex `.*` to run tests in App Automation, the comparisons will not run correctly as random device allocation will not work in sync with Figma App CLI
:::
### 4. Set Up Environment Variables

#### Project Token

```bash
export PROJECT_TOKEN="your_project_token"
```

#### Figma Token

```bash
export FIGMA_TOKEN="your_figma_token"
```
---

### 5. Run the Figma-to-App Comparison

```bash
npx smartui upload-figma-app designs.json
```

**Optional flags:**

- `--markBaseline` : Mark this build as the baseline for future comparisons
- `--buildName "<Build_Name>"` : Assign a custom name to the build

**Example:**

```bash
npx smartui upload-figma-app designs.json --buildName "v1.0.0-beta" --markBaseline
```

---
## Best Practices

- Use descriptive screenshot names for easy result navigation
- Ensure Figma designs match device and platform for accurate comparison.
- Validate device/OS availability in LambdaTest before running tests
- Keep Figma frame IDs and tokens secure

---

## Advanced Usage

- **Multiple Devices:** Add as many device objects as needed in the `mobile` array
- **Orientation:** Specify `orientation` per device for portrait/landscape testing
- **CI Integration:** Add CLI commands to your CI pipeline for automated validation

---

## Additional Resources

- [Figma Personal Access Tokens](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens)
- [SmartUI CLI Documentation](https://www.lambdatest.com/support/docs/smartui-cli/)
---


**Ready to ensure your mobile app matches your Figma designs? Try SmartUI Figma-App CLI today!** 