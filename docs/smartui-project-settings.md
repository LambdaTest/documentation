---
id: smartui-project-settings
title: Project Settings
sidebar_label: Project Settings
description: In this documentation, learn about the project settings available for SmartUI Projects in order to customize your project, manage approvals, configure comparison parameters, and more.

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
url: https://www.testmu.ai/support/docs/smartui-project-settings/
site_name: LambdaTest
slug: smartui-project-settings/
canonical: https://www.testmu.ai/support/docs/smartui-project-settings/

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
          "name": "WebDriverIO With Appium",
          "item": `${BRAND_URL}/support/docs/smartui-upload-api-v2/`
        }]
      })
    }}
></script>
This guide provides detailed information on how to navigate and configure the various options available in SmartUI's Project Settings. SmartUI offers a wide array of settings to customize your project, manage approvals, configure comparison parameters, and more. Before delving into the Project Settings, ensure you meet the following prerequisites:

## Prerequisites for Accessing Project Settings in SmartUI

To access the Project Settings in SmartUI, you must meet the following requirements:

1. You need an active account with [LambdaTest](https://accounts.lambdatest.com).
2. Ensure you have an active [subscription plan](https://www.lambdatest.com/pricing) with a valid screenshots limit.
3. You must have created a project within the SmartUI web app.

## Navigating to Project Settings

To access the Project Settings, follow these simple steps:

1. Log in to your SmartUI account and navigate to your desired SmartUI project and click on it.

2. Click on the "Project Settings" section within the SmartUI dashboard to access the settings related to your project.

## Project Settings

<Tabs className='docs__val' groupId='project-settings'>
<TabItem value='token' label='Project Token' default>

**Project Token**

The Project Token is a unique identifier that authenticates your SmartUI project for executing tests locally with CLI and APIs. You'll find your Project Token in the Project Settings after creating a project.

**Setting Up Project Token**

Use this key to authenticate your SmartUI project for executing locally with CLI and APIs.

<Tabs className='docs__val' groupId='platform'>
<TabItem value='macos-linux' label='MacOS/Linux' default>

```bash
export PROJECT_TOKEN='project#token'
```

</TabItem>
<TabItem value='windows-cmd' label='Windows - CMD'>

```bash
set PROJECT_TOKEN='project#token'
```

</TabItem>
<TabItem value='powershell' label='PowerShell'>

```powershell
$env:PROJECT_TOKEN='project#token'
```

</TabItem>
</Tabs>

### Using Project Token

The Project Token is required for:
- CLI executions (`npx smartui exec`, `npx smartui capture`)
- API uploads
- Local test execution
- CI/CD pipeline integrations

:::info
Keep your Project Token secure and never commit it to version control. Use environment variables or secret management tools in CI/CD pipelines.
:::

</TabItem>

<TabItem value='basic' label='Basic Settings'>

**Basic Settings**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Basic_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- **Project Name:** Customize the name of your project to enhance its identification.

:::info
Changing the Project Name will automatically update the `smartUI.project` capability's options for Web/App projects.
:::

- **Approvers:** Manage the list of authorized individuals responsible for approving changes within the project.

:::info
Altering Approvers will impact email notifications, which will be sent to the latest approver list for recent builds.
:::

- **Tags:** Add tags to your project for better organization and categorization.

</TabItem>

<TabItem value='comparison' label='Comparison Settings'>

**Comparison Settings**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/comparison.png').default} alt="Comparison Settings" width="768" height="373" className='doc_img'/>

Comparison settings allow you to fine-tune how SmartUI compares screenshots, balancing between highlighting important changes and ignoring noise.

**Pixel Threshold**

Strike a balance between highlighting important changes and ignoring noise. The pixel threshold determines the sensitivity of the comparison algorithm.

**Options:**
- **Relaxed**: Higher threshold, fewer differences detected (good for pages with minor rendering variations)
- **Recommended**: Balanced threshold (default, suitable for most use cases)
- **Strict**: Lower threshold, more differences detected (good for precise comparisons)
- **Custom**: Set a custom threshold value (0-10000)

**Example:**
- Custom value: `5000` - Higher value means more tolerance for pixel differences

:::info
Adjusting the Pixel Threshold in Comparison Settings will only affect new builds/screenshots captured after the update.
:::

**Error Highlight Color**

Set the color to show/highlight the changes in the pixel differences on your test output.

**Available Colors:**
- Red (default)
- Blue
- Orange
- Green
- Pink
- Gray
- Custom: Enter a hex color code (e.g., `#f687b3`)

**Use Case**: Choose a color that provides good contrast against your page background for easier visual identification of differences.

**Custom Mismatch Acceptance**

Configure pixel-to-pixel acceptance percentage for auto-approval.

**Settings:**
- **Accept**: Percentage threshold for auto-approval (0-100)
- **Reject**: Percentage threshold for auto-rejection (0-100)

**Example:**
- Accept: `0%` - No auto-approval
- Reject: `100%` - Auto-reject all differences

**Use Case**: Automatically approve screenshots with differences below the acceptance threshold, reducing manual review time.

**Smart Ignore**

Highlight content changes while smartly ignoring layout shifts and displacement differences.

**Toggle**: Enable/disable Smart Ignore for the project

**Benefits:**
- Reduces false positives from layout shifts
- Focuses on actual content changes
- Improves test reliability

For detailed information, refer to [Smart Ignore Documentation](/support/docs/smartui-smartignore).

**Bounding Boxes**

Configure your areas to which needs to be ignored or select a specific area for comparison.

**Use Cases:**
- Ignore specific regions (ads, dynamic content)
- Focus comparison on specific areas (main content, critical UI)
- Define regions of interest for comparison

**Advanced Comparison Settings**

Manage your Pixel to Pixel false positives and comparison view types.

**Ignore Pixel Scaling Options**

Choose options to remove the Pixel to Pixel false-positive rate in identifying the screenshot.

**Options:**
- **Ignore Antialiasing**: Ignore differences caused by antialiasing rendering
- **Ignore Less**: Minimal pixel difference tolerance
- **Ignore Nothing**: No pixel difference tolerance (strictest)
- **Ignore Alpha**: Ignore alpha channel differences
- **Ignore Colors**: Ignore color differences, focus on structure

**Use Case**: Reduce false positives from rendering differences, browser-specific rendering, or minor pixel variations.

**Error Type Identifier**

Show the differences in the output screen by identifying the pixel changes type and capture the intended view.

**Options:**
- **Flat**: Simple difference highlighting
- **Movement**: Highlight elements that moved
- **Movement with Diff Intensity**: Show movement with intensity levels
- **Diff portion from the Input**: Show only the different portions
- **Flat with Diff Intensity**: Flat view with intensity levels

**Use Case**: Choose the view that best helps you identify and understand the differences in your screenshots.

**Transparency**

Strike a balance between highlighting differences and maintaining visibility of the underlying content.

**Options:**
- **Opaque**: Full opacity, clear difference highlighting
- **Transparent**: Lower opacity, see underlying content

**Use Case**: Adjust transparency to see both the differences and the original content for better context.

**Resize Image**

Ability to scale the test screenshot according to baseline.

**Options:**
- **Use Original Image**: Compare at original size
- **Scale to same size**: Scale screenshots to match baseline size

**Use Case**: Handle cases where screenshots are captured at different resolutions or viewport sizes.

:::info
Changes to Project Settings will impact builds/comparisons executed after the changes and the previous builds/comparisons remain unaffected.
:::

**Additional Information:**
For detailed information on these options, refer to our [Comparison Settings Documentation](/support/docs/test-settings-options/).

</TabItem>

<TabItem value='build' label='Build Settings'>

**Build Settings**

**Smart Baseline**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

Smart Baseline is a feature that simplifies and automates the process of updating the baseline for approved screenshots in your baseline build. This feature provides convenience and efficiency by ensuring your baseline remains in sync with approved changes without manual intervention.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- **Baseline Branch:** A baseline branch build consists of screenshots captured using SmartUI. All screenshots in this build are compared against non-baseline branch builds.

- **Non-Baseline Branches:** Non-baseline branch(s) builds are sets of screenshots captured using SmartUI. All screenshots in these builds are compared against the baseline build, matching them by screenshot names.

:::info
When **`Smart Baseline`** is turned on, the system automatically updates the baseline for approved screenshots in the baseline build, streamlining the testing process and saving time.
:::

:::caution Warning
Please note that this feature is not supported for projects integrated with `Git` as `Git`-based projects follow a [Git branching strategy](/support/docs/smartui-github-app-integration/).
:::

**Git Settings**

Configure Git-related settings for your project, including the baseline branch name, auto-approval branches, GitHub repository linkage, and run status checks.

**Additional Information:**
For detailed information on these options, refer to our [Git Baseline Branching Documentation](/support/docs/smartui-github-app-integration/).

**Overwrite Screenshot**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/overwrite_ss.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

- This feature allows to update and overwrite screenshots with the same name, ensuring that the latest version is updated for that screenshot.

- This capability provides users with more control over the management of screenshots with identical names, enabling them to maintain accurate visual records and efficiently track changes in their application's user interface over time.

</TabItem>

<TabItem value='notifications' label='Notifications'>

**Notifications**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/notif_ss.png').default} alt="Notifications Settings" width="768" height="373" className='doc_img'/>

Configure how you receive alerts and updates about your SmartUI project.

**Email Notifications**

Receive email notifications whenever there are changes found in your build or the project baseline changes.

**Settings:**
- **Build Changes**: Get notified when visual differences are found in builds
- **Baseline Changes**: Get notified when project baseline is updated
- **Approver Changes**: Get notified when project approvers list is modified

**Use Case**: Stay informed about visual changes without constantly checking the dashboard.

**Slack Alerts**

Receive Slack alerts whenever there are changes found in your build.

**Setup:**
1. Connect your Slack workspace in Project Settings
2. Configure which events trigger Slack notifications
3. Choose the Slack channel for notifications

**Use Case**: Integrate visual testing alerts into your team's communication workflow.

:::note
We are continually adding more notification channels for SmartUI.
:::

</TabItem>

<TabItem value='other' label='Other Settings'>

**<BrandName /> Badge**

Show the world that you are using <BrandName /> for your visual regression testing.

**Badge Code:**
```markdown
[![This project is using Lambda test for visual regression testing.](https://smartui.lambdatest.com/static/media/LTBadge.64a05e73.svg)](https://lambdatest.com)
```

**Use Case**: Add to your README or documentation to showcase your testing setup.

**Delete Project**

<img loading="lazy" src={require('../assets/images/smart-visual-testing/delete.png').default} alt="cmd" width="768" height="373" className='doc_img'/>

The "Delete Project" option allows administrators or project creators to permanently delete a project. Once a project is deleted, it cannot be retrieved.

:::info
Only the **Admin** or **Creator** of the project can delete a project. Once deleted, a project cannot be retrieved.
:::

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for project configuration issues
- [Baseline Management](/support/docs/smartui-baseline-management) - Learn how to manage baselines effectively
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Configure ignoreDOM/selectDOM for dynamic content
- [Smart Ignore Feature](/support/docs/smartui-smartignore) - Automatically ignore layout shifts
- [Configuration Options](/support/docs/smartui-sdk-config-options) - SDK configuration file options
- [Running Your First Project](/support/docs/smartui-running-your-first-project) - Get started with SmartUI
- [Test Settings Options](/support/docs/test-settings-options/) - Advanced comparison settings
