---
id: smartui-draw-on-ui
title: Ignore or Select Annotated Regions
sidebar_label: Ignore or Select Regions
description: In this documentation, learn how to ignore, select the annotated regions of the tests with LambdaTest's SmartUI.
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

url: https://www.lambdatest.com/support/docs/smartui-ignore-regions/
slug: smartui-draw-on-ui/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": "https://www.lambdatest.com/support/docs/smartui-draw-on-ui/"
        }]
      })
    }}
></script>

Web applications often have dynamic elements that can cause unnecessary noise in your visual testing.  Take a social media platform, for instance.  The number of unread notifications displayed might change with each test run.  While these variations are expected, you don't necessarily want them to trigger alerts as potential regressions.

The SmartUI Annotation tool allows you to interact directly with your screenshots through detailed annotations. You can draw over screenshots, define regions with boxes, and choose to ignore or select these regions for current and future comparisons.

By utilizing ignored/selected regions, you can keep your test results focused on the truly important changes,  streamlining your workflow and saving you time from chasing irrelevant discrepancies.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/j5uyv2ol9axz?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Key Features of Annotation Tool

- **Drawing Over Screenshots:** Easily draw on compared screenshots to ignore/select specific elements, enhancing clarity and focus.

- **Drawing Boxes:** Use the 'Draw Cursor' option and 'Add Region' button to draw and manage multiple boxes. Each box’s size is indicated, ensuring precise and informative annotations.

- **Saving Changes :** After drawing, a dialogue popup will allow you to apply your annotations to the current screenshot or all browser variants of this screenshot.

- **Updating Compared Screenshots :** Annotations on compared screenshots will trigger a re-run of the comparison, ensuring that specified regions are reflected in both current and future builds.

- **Visibility of Annotations :** Control the visibility of your annotations in both parallel and landscape views with a new toggle, default set to off, ensuring a clean visual field when not needed.

- **Tooltip Information :** When the 'Annotations' toggle is on, hovering over a box displays a tooltip with detailed information, including the box dimensions and its status as an ignored or selected area.

- **Applicable for Every Project Type:** This feature is compatible with every project type, efficiently handling dynamic data where code-based ignore/select is not supported.

## Steps to Implement SmartUI Annotation Tool

**Step 1:** Click on the **Actions** button to configure areas.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/1.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

**Step 2:** Click on the **Add Region** button to configure the **Required Area** and click on the **Save** button.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/2.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

**Step 3:** After saving, choose whether to **ignore or select** the regions and specify if the changes apply to the specific screenshot or all browser variants of the selected viewport.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/3.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

**Step 4:** You can use the annotations switch to view/analyze your ignored/selected areas.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/4.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

The following configured area will be ignored in every consecutive build for the same screenshot test case.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/5.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

> You can always edit/delete the pre-configured areas or add new ones according to your requirements.

## How to Delete a Selected/Ignored Region?

**Step 1:** Click on the **Actions** button.

**Step 2:** Delete all your selected regions from the screenshot.

**Step 3:** Click on the **Save** button to delete the ignored/selected area.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/6.png').default} alt="installing LambdaTest plugin" width="1366" height="636" className="doc_img"/>

## Best Practices and Keyboard Shortcuts

### Applying Annotations Across Viewports

While the SmartUI Annotation Tool allows you to apply annotations to all browsers within a screenshot's viewport, it's recommended to manually verify that these areas are configured correctly for each browser. This is because certain browsers may render elements differently, potentially causing inconsistencies in your annotations.

### Keyboard Shortcuts for Precise Control

The SmartUI Annotation Tool offers keyboard shortcuts to streamline the resizing and removal of defined areas:

- `Shift + A:` Resize left
- `Shift + S:` Resize down
- `Shift + D:` Resize right
- `Shift + W:` Resize up
- `Shift + T:` Define a region encompassing the entire screenshot.
- `Delete or Backspace:` Remove the currently selected area.

> By effectively utilizing these best practices and keyboard shortcuts, you can significantly enhance the accuracy and efficiency of your annotation workflow.