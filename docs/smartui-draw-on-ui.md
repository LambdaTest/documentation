---
id: smartui-draw-on-ui
title: Ignore or Select Annotated Regions
sidebar_label: Ignore or Select Regions
description: In this documentation, learn how to ignore, select the annotated regions of the tests with LambdaTest's SmartUI, including ignore colors, floating regions, and select ignore features.
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
  - Annotation Tool
  - Ignore Regions
  - Select Regions
  - Floating Regions
  - Ignore Colors

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

Web applications often have dynamic elements that can cause unnecessary noise in your visual testing. Take a social media platform, for instance. The number of unread notifications displayed might change with each test run. While these variations are expected, you don't necessarily want them to trigger alerts as potential regressions.

The SmartUI Annotation tool allows you to interact directly with your screenshots through detailed annotations. You can draw over screenshots, define regions with boxes, and choose to ignore or select these regions for current and future comparisons. With advanced features like **Ignore Colors**, **Floating Regions**, and **Select Ignore**, you can handle even the most complex dynamic content scenarios.

By utilizing ignored/selected regions, you can keep your test results focused on the truly important changes, streamlining your workflow and saving you time from chasing irrelevant discrepancies.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/j5uyv2ol9axz?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Key Features of Annotation Tool

- **Drawing Over Screenshots:** Easily draw on compared screenshots to ignore/select specific elements, enhancing clarity and focus.

- **Multiple Annotation Types:** Support for Ignore Region, Select Region, Select Ignore, Ignore Colors, and Floating Regions to handle various dynamic content scenarios.

- **Drawing Boxes:** Use the 'Draw Cursor' option and 'Add Region' button to draw and manage multiple boxes. Each box's size is indicated, ensuring precise and informative annotations.

- **Saving Changes:** After drawing, a dialogue popup will allow you to apply your annotations to the current screenshot or all browser variants of this screenshot.

- **Updating Compared Screenshots:** Annotations on compared screenshots will trigger a re-run of the comparison, ensuring that specified regions are reflected in both current and future builds.

- **Visibility of Annotations:** Control the visibility of your annotations in both parallel and landscape views with a new toggle, default set to off, ensuring a clean visual field when not needed.

- **Tooltip Information:** When the 'Annotations' toggle is on, hovering over a box displays a tooltip with detailed information, including the box dimensions and its status as an ignored or selected area.

- **Applicable for Every Project Type:** This feature is compatible with every project type, efficiently handling dynamic data where code-based ignore/select is not supported.

## Annotation Methods

<Tabs>
<TabItem value="ignore-region" label="Ignore Region" default>

### Ignore Region

**Ignore Region** allows you to exclude specific areas from visual comparison. This is ideal for dynamic content that changes frequently but isn't critical to your visual tests, such as timestamps, notification badges, or advertisements.

### Use Cases

- Ignoring notification counters that change frequently
- Excluding advertisement banners
- Ignoring timestamps or date displays
- Hiding dynamic user-generated content
- Excluding non-critical UI elements that vary between builds

### How to Use

**Step 1:** Click on the **Actions** button to configure areas.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/annotationsicon.png').default} alt="Annotations icon" width="1366" height="636" className="doc_img"/>

**Step 2:** Click on the **Add Region** button and draw a box around the area you want to ignore.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/ignore_region.png').default} alt="Ignore region annotation" width="1366" height="636" className="doc_img"/>

**Step 3:** After drawing, select **Ignore Region** from the annotation type options and click **Save**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/applyannotationmodal.png').default} alt="Apply annotation modal" width="1366" height="636" className="doc_img"/>

**Step 4:** Choose whether to apply the annotation to the current screenshot only or all browser variants of the selected viewport.

**Result:** The configured area will be ignored in every consecutive build for the same screenshot test case.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultofignoreregion.png').default} alt="Result of ignore region" width="1366" height="636" className="doc_img"/>

### Best Practices

- Use Ignore Region for simple dynamic content that changes frequently
- Start with Ignore Region as it's the most straightforward annotation type
- Verify ignored regions work correctly across different browsers and viewports
- Document why you ignored certain regions for future reference
- Review ignored regions periodically to ensure they're still relevant

### When to Use

Use **Ignore Region** when:
- You have dynamic content that changes frequently (notifications, timestamps)
- The content is not critical to your visual tests
- You want to exclude entire sections from comparison
- The content is user-generated or time-sensitive

**Example:** Ignoring a "Last updated" timestamp in a dashboard.

</TabItem>

<TabItem value="select-region" label="Select Region">

### Select Region

**Select Region** allows you to focus visual comparison on specific areas of your screenshot. Only the selected regions will be compared, while everything else is ignored. This is useful when you want to test only critical UI components.

### Use Cases

- Testing only the main content area
- Focusing on specific form fields
- Comparing only critical UI components
- Isolating header or footer sections
- Testing specific widgets or components in isolation

### How to Use

**Step 1:** Click on the **Actions** button to configure areas.

**Step 2:** Click on the **Add Region** button and draw a box around the area you want to select for comparison.

**Step 3:** After drawing, select **Select Region** from the annotation type options and click **Save**.

**Step 4:** Choose whether to apply the annotation to the current screenshot only or all browser variants of the selected viewport.

**Result:** Only the selected regions will be compared in future builds, while all other areas are automatically ignored.

> **Note:** You can define multiple select regions. All selected regions will be compared, and everything outside these regions will be ignored.

### Best Practices

- Use Select Region when you only care about specific UI components
- Focus testing on critical areas that matter most to your application
- Combine multiple select regions to test different parts of the same screenshot
- Verify selected regions work correctly across different browsers and viewports
- Keep selected regions focused on what's truly important to avoid missing issues

### When to Use

Use **Select Region** when:
- You only care about specific UI components
- You want to focus testing on critical areas
- The rest of the page is not relevant to your tests
- You're testing isolated components

**Example:** Testing only the checkout form while ignoring the rest of the page.

</TabItem>

<TabItem value="select-ignore" label="Select Ignore">

### Select Ignore

**Select Ignore** is a powerful feature that combines selection and ignoring. You first select a region to focus on, then within that selected region, you can ignore specific sub-regions. This is perfect for scenarios where you want to test most of a component but ignore certain dynamic elements within it.

### Use Cases

- Testing a product card but ignoring the price (which may change)
- Comparing a user profile section but ignoring the avatar (which may be different)
- Testing a dashboard widget but ignoring specific metrics that change frequently
- Focusing on a form while ignoring dynamic validation messages
- Testing a navigation menu but ignoring the active state indicator

### How to Use

**Step 1:** Click on the **Actions** button to configure areas.

**Step 2:** First, draw a **Select Region** box around the main area you want to test.

**Step 3:** Then, within that selected region, draw an **Ignore Region** box around the sub-area you want to ignore.

**Step 4:** Select **Select Ignore** as the annotation type and click **Save**.

**Step 5:** Choose whether to apply the annotation to the current screenshot only or all browser variants of the selected viewport.

**Result:** The outer selected region will be compared, but the inner ignored sub-region will be excluded from comparison, giving you precise control over what gets tested.

> **Best Practice:** Use Select Ignore when you need granular control over comparison areas within a larger component.

### Best Practices

- Use Select Ignore when you need granular control over comparison areas
- First define the outer select region, then add ignore regions within it
- Ensure the ignore region is completely within the select region
- Test the configuration to verify it works as expected
- Document the reasoning for using Select Ignore for future reference

### When to Use

Use **Select Ignore** when:
- You want to test a component but ignore specific parts within it
- You need granular control over comparison areas
- The component has both static and dynamic elements
- You want to focus on structure while ignoring content

**Example:** Testing a product card but ignoring the price and rating that may change.

</TabItem>

<TabItem value="ignore-colors" label="Ignore Colors">

### Ignore Colors

**Ignore Colors** allows you to ignore color differences in specific regions while still comparing the structure and layout. This is particularly useful when colors may vary due to themes, user preferences, or A/B testing, but the structure should remain consistent.

### Use Cases

- Ignoring color changes in themed applications
- Handling A/B testing color variations
- Ignoring user-customizable color schemes
- Testing structure while ignoring color differences in specific regions
- Comparing layouts across different theme configurations

### How to Use

**Step 1:** Click on the **Actions** button to configure areas.

**Step 2:** Click on the **Add Region** button and draw a box around the area where you want to ignore color differences.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/ignorecolor_region.png').default} alt="Ignore colors region annotation" width="1366" height="636" className="doc_img"/>

**Step 3:** After drawing, select **Ignore Colors** from the annotation type options and click **Save**.

**Step 4:** Choose whether to apply the annotation to the current screenshot only or all browser variants of the selected viewport.

**Result:** The region will be compared for structure and layout, but color differences will be ignored, reducing false positives from color variations.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultofignorecolors.png').default} alt="Result of ignore colors" width="1366" height="636" className="doc_img"/>

> **Note:** Ignore Colors is particularly effective when combined with other annotation types for comprehensive visual testing.

### Best Practices

- Use Ignore Colors when structure matters more than color
- Ensure the region covers the entire area where colors may vary
- Combine with other annotation types for comprehensive coverage
- Verify that structural differences aren't being mistaken for color differences
- Test across different theme configurations to ensure consistency

### When to Use

Use **Ignore Colors** when:
- Your application supports themes or color customization
- You're running A/B tests with different color schemes
- Colors may vary but structure should remain consistent
- You want to test layout without color sensitivity

**Example:** Ignoring color differences in a themed navigation bar while testing its structure.

</TabItem>
</Tabs>

## Floating Region (Advanced)

**Floating Region** is designed to handle elements that move or shift position within a defined boundary. This feature uses two regions:
- **Blue Region:** Defines the boundary where the element might move to (the floating area)
- **Yellow Region:** Defines which element to test within the floating region

This is perfect for handling dynamic elements that may appear in different positions but should be tested for content consistency.

### Use Cases

- Testing notification badges that may appear in different positions
- Handling tooltips or popovers that can move
- Testing floating action buttons
- Comparing elements that shift based on content length
- Handling dropdown menus or modals that may appear in different locations

### How to Use

**Step 1:** Click on the **Actions** button to configure areas.

**Step 2:** First, draw a **Blue Region** (Floating Area) that defines the boundary where the element might move to. This is the area where SmartUI will look for the element.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/floating_region.png').default} alt="Floating region annotation" width="1366" height="636" className="doc_img"/>

**Step 3:** Then, within the blue region, draw a **Yellow Region** (Element to Test) that defines the specific element you want to test. This element will be compared regardless of its position within the blue floating area.

**Step 4:** Select **Floating Region** as the annotation type and click **Save**.

**Step 5:** Choose whether to apply the annotation to the current screenshot only or all browser variants of the selected viewport.

**Result:** SmartUI will compare the yellow region element, allowing it to move anywhere within the blue floating area without triggering false positives. This effectively handles dynamic element positioning issues.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultoffloatingregion.png').default} alt="Result of floating region" width="1366" height="636" className="doc_img"/>

> **Best Practice:** 
> - Make the blue region large enough to encompass all possible positions of the element
> - Keep the yellow region focused on the specific element you want to test
> - Use Floating Region when elements shift due to content changes, responsive behavior, or dynamic layouts

### When to Use Floating Region

Use **Floating Region** when:
- Elements move or shift position within a boundary
- You have dynamic layouts that cause element displacement
- Tooltips, popovers, or modals appear in different positions
- Content length causes elements to shift
- You need to handle responsive behavior variations

**Example:** Testing a notification badge that may appear in different positions based on content.

## Viewing and Managing Annotations

### Viewing Annotations

**Step 1:** Toggle the **Annotations** switch to view/analyze your ignored/selected areas.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/changes_found.png').default} alt="Viewing annotations" width="1366" height="636" className="doc_img"/>

**Step 2:** When the toggle is on, you'll see all your annotation boxes with different colors indicating their type:
- **Red boxes:** Ignore regions
- **Green boxes:** Select regions
- **Blue boxes:** Floating area boundaries
- **Yellow boxes:** Elements within floating regions
- **Purple boxes:** Ignore colors regions

**Step 3:** Hover over any annotation box to see a tooltip with detailed information, including:
- Box dimensions (width × height)
- Annotation type (Ignore, Select, Floating, etc.)
- Coordinates

### Editing Annotations

You can always edit or delete pre-configured areas or add new ones according to your requirements.

**To Edit an Annotation:**

**Step 1:** Click on the **Actions** button.

**Step 2:** Click on the annotation box you want to edit.

**Step 3:** Resize or reposition the box as needed.

**Step 4:** Click **Save** to apply changes.

### Deleting Annotations

**Step 1:** Click on the **Actions** button.

**Step 2:** Click on the annotation box you want to delete, or click **Delete All** to remove all annotations.

**Step 3:** Click on the **Save** button to confirm deletion.

> **Note:** Deleting annotations will trigger a re-run of the comparison, and the previously ignored/selected areas will be included in future comparisons.

## Applying Annotations

After creating your annotations, you'll see a modal dialog with options:

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/applyannotationmodal.png').default} alt="Apply annotation modal" width="1366" height="636" className="doc_img"/>

**Options:**

1. **Apply to Current Screenshot Only:** The annotation will only affect the current screenshot variant (e.g., Chrome on desktop).

2. **Apply to All Browser Variants:** The annotation will be applied to all browser/viewport combinations for this screenshot (e.g., Chrome, Firefox, Safari on desktop).

> **Best Practice:** While you can apply annotations to all browser variants, it's recommended to manually verify that these areas are configured correctly for each browser. Certain browsers may render elements differently, potentially causing inconsistencies in your annotations.

## Keyboard Shortcuts for Precise Control

The SmartUI Annotation Tool offers keyboard shortcuts to streamline the resizing and removal of defined areas:

- `Shift + A:` Resize left
- `Shift + S:` Resize down
- `Shift + D:` Resize right
- `Shift + W:` Resize up
- `Shift + T:` Define a region encompassing the entire screenshot
- `Delete or Backspace:` Remove the currently selected area

> By effectively utilizing these keyboard shortcuts, you can significantly enhance the accuracy and efficiency of your annotation workflow.

## Troubleshooting

### Annotations Not Applying

**Issue:** Annotations are not being applied to future builds.

**Solutions:**
- Ensure you clicked **Save** after creating annotations
- Verify you selected the correct annotation type
- Check that you applied annotations to the correct screenshot variant
- Refresh the page and verify annotations are visible

### Floating Region Not Working

**Issue:** Floating region is still showing false positives.

**Solutions:**
- Ensure the blue region (floating area) is large enough to encompass all possible positions
- Verify the yellow region (element to test) is correctly positioned within the blue region
- Check that the element structure hasn't changed significantly
- Try adjusting the size of both regions

### Ignore Colors Still Showing Differences

**Issue:** Color differences are still being detected in ignore colors regions.

**Solutions:**
- Verify you selected "Ignore Colors" as the annotation type
- Ensure the region covers the entire area where colors may vary
- Check that structural differences aren't being mistaken for color differences
- Review the comparison settings in project configuration

### Annotations Disappearing

**Issue:** Annotations are not visible or have disappeared.

**Solutions:**
- Toggle the **Annotations** switch to ensure it's enabled
- Refresh the page
- Check if annotations were deleted accidentally
- Verify you're viewing the correct screenshot variant

For more comprehensive troubleshooting, refer to the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide).

## Additional Resources

- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure comparison settings
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Code-based solutions for dynamic content
- [Smart Ignore](/support/docs/smartui-smartignore) - Automatic layout shift handling
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Comprehensive issue resolution
