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
url: https://www.lambdatest.com/support/docs/smartui-project-settings/
site_name: LambdaTest
slug: smartui-project-settings/

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

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
          "name": "WebDriverIO With Appium",
          "item": "https://www.lambdatest.com/support/docs/smartui-upload-api-v2/"
        }]
      })
    }}
></script>


# SmartUI Project Settings Guide

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

## Types of Settings

SmartUI's Project Settings are organized into sections to streamline the configuration process. Here are the primary sections you'll find:

### Basic Settings

<img loading="lazy" src={require('../assets/images/smart-visual-testing/Basic_ss.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- **Project Name:** Customize the name of your project to enhance its identification.

:::info
Changing the Project Name will automatically update the `smartUI.project` capability's options for Web/App projects.
:::

- **Approvers:** Manage the list of authorized individuals responsible for approving changes within the project.

:::info
Altering Approvers will impact email notifications, which will be sent to the latest approver list for recent builds.
:::

- **Tags:** Add tags to your project for better organization and categorization.

### Comparison Settings

<img loading="lazy" src={require('../assets/images/smart-visual-testing/comparison.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- **Pixel Threshold:** Define the pixel threshold, specifying the level of granularity for image comparisons.

:::info
Adjusting the Pixel Threshold in Comparison Settings will only affect new builds/screenshots captured after the update.
:::

- **Custom Mismatch Options:** Configure custom mismatch options to fine-tune the comparison process.

- **Error Highlight Color:** Select a color for highlighting differences in images.

- **Bounding Boxes:** Define specific regions within images for comparison, narrowing down the area of interest.
  
- **Ignore Pixel Scaling:** Configure settings related to pixel scaling during comparisons.

- **Error Type Identifier:** Choose the type of error identifier for pinpointing differences between images.

- **Transparency:** Adjust image transparency settings to balance visibility during comparisons.

- **Resizing Options:** Customize resizing options for images used in comparisons.


:::info

Changes to Project Settings will impact builds/comparisons executed after the changes and the previous builds/comparisons remain unaffected.

:::

#### Additional Information:
For detailed information on these options, refer to our [Comparison Settings Documentation](https://www.lambdatest.com/support/docs/test-settings-options/).

### Build Settings

#### Smart Baseline

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline_ss.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

Smart Baseline is a feature that simplifies and automates the process of updating the baseline for approved screenshots in your baseline build. This feature provides convenience and efficiency by ensuring your baseline remains in sync with approved changes without manual intervention.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart_baseline.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- **Baseline Branch:** A baseline branch build consists of screenshots captured using SmartUI. All screenshots in this build are compared against non-baseline branch builds.

- **Non-Baseline Branches:** Non-baseline branch(s) builds are sets of screenshots captured using SmartUI. All screenshots in these builds are compared against the baseline build, matching them by screenshot names.

:::info
When **`Smart Baseline`** is turned on, the system automatically updates the baseline for approved screenshots in the baseline build, streamlining the testing process and saving time.
:::

:::caution Warning
Please note that this feature is not supported for projects integrated with `Git` as `Git`-based projects follow a [Git branching strategy](https://www.lambdatest.com/support/docs/smartui-github-app-integration/).
:::

#### Git Settings

Configure Git-related settings for your project, including the baseline branch name, auto-approval branches, GitHub repository linkage, and run status checks.

#### Additional Information:
For detailed information on these options, refer to our [Git Baseline Branching Documentation](https://www.lambdatest.com/support/docs/smartui-github-app-integration/).


#### Overwrite Screenshot

<img loading="lazy" src={require('../assets/images/smart-visual-testing/overwrite_ss.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- This feature allows to update and overwrite screenshots with the same name, ensuring that the latest version is updated for that screenshot. 

- This capability provides users with more control over the management of screenshots with identical names, enabling them to maintain accurate visual records and efficiently track changes in their application's user interface over time.

### Notifications

<img loading="lazy" src={require('../assets/images/smart-visual-testing/notif_ss.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

- **Email Notification Settings:** Set up and customize email notifications for build runs when changes are found and when there are changes to the list of project approvers.

:::note
We are continually adding more notification channels for SmartUI.
:::

### Delete Project

<img loading="lazy" src={require('../assets/images/smart-visual-testing/delete.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The "Delete Project" option allows administrators or project creators to permanently delete a project. Once a project is deleted, it cannot be retrieved.


:::info
Only the **Admin** or **Creator** of the project can delete a project. Once deleted, a project cannot be retrieved.
:::
