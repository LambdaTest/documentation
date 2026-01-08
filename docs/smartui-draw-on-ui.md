---
id: smartui-draw-on-ui
title: Ignore or Select Annotated Regions
sidebar_label: Ignore or Select Regions
description: In this documentation, learn how to ignore, select the annotated regions of the tests with TestMu AI's SmartUI, including ignore colors, floating regions, and select ignore features.
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

url: https://www.testmu.ai/support/docs/smartui-ignore-regions
slug: smartui-draw-on-ui

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Smart Visual Testing",
          "item": `${BRAND_URL}/support/docs/smartui-draw-on-ui/`
        }]
      })
    }}
></script>

Web applications often have dynamic elements that can cause unnecessary noise in your visual testing. Take a social media platform, for instance. The number of unread notifications displayed might change with each test run. While these variations are expected, you don't necessarily want them to trigger alerts as potential regressions.

The SmartUI Annotation tool allows you to interact directly with your screenshots through detailed annotations. You can draw over screenshots, define regions with boxes, and choose to ignore or select these regions for current and future comparisons. With advanced features like **Ignore Colors**, **Floating Regions**, and **Select Ignore**, you can handle even the most complex dynamic content scenarios.

By utilizing ignored/selected regions, you can keep your test results focused on the truly important changes, streamlining your workflow and saving you time from chasing irrelevant discrepancies.

<div className='storylane-iframe'>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className='sl-embed'>
    <iframe loading="lazy" className='sl-demo' src="https://app.storylane.io/demo/j5uyv2ol9axz?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

## Quick Start

### Accessing the Annotation Tool

1. Navigate to your SmartUI project dashboard
2. Open a screenshot comparison that shows differences
3. Click on the **Actions** button (annotation icon) in the comparison view

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/annotationsicon.png').default} alt="Annotations icon" width="1366" height="636" className='doc_img'/>

### Basic Workflow

1. **Click the annotation icon** to open the annotation tool
2. **Click "Add Region"** and draw a box around the area you want to annotate
3. **Select the annotation type** (Ignore Region, Select Region, Floating Region, or Ignore Colors)
4. **Click "Save"** to apply the annotation
5. **Choose application scope**: Apply to current screenshot only or all browser variants

> **Tip:** Start with **Ignore Region** for simple dynamic content like timestamps or notification counters. It's the most straightforward annotation type.

## Annotation Methods

All four annotation methods are accessible from the same **Actions** button (annotation icon). Click on the annotation icon to open the annotation tool, then select your desired annotation type from the available options.

<Tabs className='docs__val' groupId='annotation-methods'>
<TabItem value='ignore-region' label='Ignore Region' default>

**What is Ignore Region?**

**Ignore Region** excludes specific areas from visual comparison. Ideal for dynamic content that changes frequently but isn't critical to your visual tests, such as timestamps, notification badges, or advertisements.

**When to Use**

- Ignoring notification counters that change frequently
- Excluding advertisement banners
- Ignoring timestamps or date displays
- Hiding dynamic user-generated content
- Excluding non-critical UI elements that vary between builds

**How to Use**

**Step 1:** Click on the **Actions** button (annotation icon) to open the annotation tool.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/annotationsicon.png').default} alt="Annotations icon" width="1366" height="636" className='doc_img'/>

**Step 2:** Click on the **Add Region** button and draw a box around the area you want to ignore.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/ignore_region.png').default} alt="Ignore region annotation" width="1366" height="636" className='doc_img'/>

**Step 3:** Select **Ignore Region** from the annotation type dropdown and click **Save**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/applyannotationmodal.png').default} alt="Apply annotation modal" width="1366" height="636" className='doc_img'/>

**Step 4:** Choose whether to apply to the current screenshot only or all browser variants.

**What Happens:** The configured area will be ignored in every consecutive build for the same screenshot test case.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultofignoreregion.png').default} alt="Result of ignore region" width="1366" height="636" className='doc_img'/>

**Example**

Ignoring a "Last updated" timestamp in a dashboard that changes with each page load.

</TabItem>

<TabItem value='select-region' label='Select Region'>

**What is Select Region?**

**Select Region** focuses visual comparison on specific areas of your screenshot. Only the selected regions will be compared, while everything else is automatically ignored. This is useful when you want to test only critical UI components.

**When to Use**

- Testing only the main content area
- Focusing on specific form fields
- Comparing only critical UI components
- Isolating header or footer sections
- Testing specific widgets or components in isolation

**How to Use**

**Step 1:** Click on the **Actions** button (annotation icon) to open the annotation tool.

**Step 2:** Click on the **Add Region** button and draw a box around the area you want to select for comparison.

**Step 3:** Select **Select Region** from the annotation type dropdown and click **Save**.

**Step 4:** Choose whether to apply to the current screenshot only or all browser variants.

**What Happens:** Only the selected regions will be compared in future builds, while all other areas are automatically ignored.

> **Note:** You can define multiple select regions. All selected regions will be compared, and everything outside these regions will be ignored.

**Example**

Testing only the checkout form while ignoring the rest of the page, including header, footer, and sidebar elements.

</TabItem>

<TabItem value='floating-region' label='Floating Region'>

**What is Floating Region?**

**Floating Region** handles elements that move or shift position within a defined boundary. This feature uses two regions:
- **Blue Region:** Defines the boundary where the element might move to (the floating area)
- **Yellow Region:** Defines which element to test within the floating region

Perfect for handling dynamic elements that may appear in different positions but should be tested for content consistency.

**When to Use**

- Testing notification badges that may appear in different positions
- Handling tooltips or popovers that can move
- Testing floating action buttons
- Comparing elements that shift based on content length
- Handling dropdown menus or modals that may appear in different locations

**How to Use**

**Step 1:** Click on the **Actions** button (annotation icon) to open the annotation tool.

**Step 2:** First, draw a **Blue Region** (Floating Area) that defines the boundary where the element might move to. Make it large enough to encompass all possible positions.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/floating_region.png').default} alt="Floating region annotation" width="1366" height="636" className='doc_img'/>

**Step 3:** Then, within the blue region, draw a **Yellow Region** (Element to Test) that defines the specific element you want to test.

**Step 4:** Select **Floating Region** from the annotation type dropdown and click **Save**.

**Step 5:** Choose whether to apply to the current screenshot only or all browser variants.

**What Happens:** SmartUI will compare the yellow region element, allowing it to move anywhere within the blue floating area without triggering false positives.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultoffloatingregion.png').default} alt="Result of floating region" width="1366" height="636" className='doc_img'/>

> **Tip:** Make the blue region large enough to encompass all possible positions of the element, and keep the yellow region focused on the specific element you want to test.

**Example**

Testing a notification badge that may appear in different positions based on content length or screen size.

</TabItem>

<TabItem value='ignore-colors' label='Ignore Colors'>

**What is Ignore Colors?**

**Ignore Colors** ignores color differences in specific regions while still comparing the structure and layout. Particularly useful when colors may vary due to themes, user preferences, or A/B testing, but the structure should remain consistent.

**When to Use**

- Ignoring color changes in themed applications
- Handling A/B testing color variations
- Ignoring user-customizable color schemes
- Testing structure while ignoring color differences in specific regions
- Comparing layouts across different theme configurations

**How to Use**

**Step 1:** Click on the **Actions** button (annotation icon) to open the annotation tool.

**Step 2:** Click on the **Add Region** button and draw a box around the area where you want to ignore color differences.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/ignorecolor_region.png').default} alt="Ignore colors region annotation" width="1366" height="636" className='doc_img'/>

**Step 3:** Select **Ignore Colors** from the annotation type dropdown and click **Save**.

**Step 4:** Choose whether to apply to the current screenshot only or all browser variants.

**What Happens:** The region will be compared for structure and layout, but color differences will be ignored, reducing false positives from color variations.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/resultofignorecolors.png').default} alt="Result of ignore colors" width="1366" height="636" className='doc_img'/>

> **Note:** Ignore Colors is particularly effective when combined with other annotation types for comprehensive visual testing.

**Example**

Ignoring color differences in a themed navigation bar while testing its structure and layout across different theme configurations.

</TabItem>
</Tabs>

## Advanced: Select Ignore

**Select Ignore** is an advanced feature that combines selection and ignoring. You first select a region to focus on, then within that selected region, you can ignore specific sub-regions. This is perfect for scenarios where you want to test most of a component but ignore certain dynamic elements within it.

### When to Use

- Testing a product card but ignoring the price (which may change)
- Comparing a user profile section but ignoring the avatar (which may be different)
- Testing a dashboard widget but ignoring specific metrics that change frequently
- Focusing on a form while ignoring dynamic validation messages
- Testing a navigation menu but ignoring the active state indicator

### How to Use

**Step 1:** Click on the **Actions** button (annotation icon) to open the annotation tool.

**Step 2:** First, draw a **Select Region** box around the main area you want to test.

**Step 3:** Then, within that selected region, draw an **Ignore Region** box around the sub-area you want to ignore.

**Step 4:** Select **Select Ignore** from the annotation type dropdown and click **Save**.

**Step 5:** Choose whether to apply to the current screenshot only or all browser variants.

**What Happens:** The outer selected region will be compared, but the inner ignored sub-region will be excluded from comparison, giving you precise control over what gets tested.

> **Tip:** Use Select Ignore when you need granular control over comparison areas within a larger component. Ensure the ignore region is completely within the select region.

### Example

Testing a product card but ignoring the price and rating that may change, while still comparing the product image, title, and description.

## Managing Annotations

Once you've created annotations, you can view, edit, and delete them as needed.

### Viewing Annotations

**Step 1:** Toggle the **Annotations** switch to view/analyze your ignored/selected areas.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/changes_found.png').default} alt="Viewing annotations" width="1366" height="636" className='doc_img'/>

**Step 2:** When the toggle is on, you'll see all your annotation boxes with color coding (see [Annotation Color Coding](#annotation-color-coding) below).

**Step 3:** Hover over any annotation box to see a tooltip with detailed information, including:
- Box dimensions (width × height)
- Annotation type (Ignore, Select, Floating, etc.)
- Coordinates

### Editing Annotations

You can always edit or delete pre-configured areas or add new ones according to your requirements.

**To Edit an Annotation:**

**Step 1:** Click on the **Actions** button (annotation icon).

**Step 2:** Click on the annotation box you want to edit.

**Step 3:** Resize or reposition the box as needed.

**Step 4:** Click **Save** to apply changes.

### Deleting Annotations

**Step 1:** Click on the **Actions** button (annotation icon).

**Step 2:** Click on the annotation box you want to delete, or click **Delete All** to remove all annotations.

**Step 3:** Click on the **Save** button to confirm deletion.

> **Note:** Deleting annotations will trigger a re-run of the comparison, and the previously ignored/selected areas will be included in future comparisons.

### Applying Annotations

After creating your annotations, you'll see a modal dialog with options:

<img loading="lazy" src={require('../assets/images/smart-visual-testing/annotation-tool/applyannotationmodal.png').default} alt="Apply annotation modal" width="1366" height="636" className='doc_img'/>

**Options:**

1. **Apply to Current Screenshot Only:** The annotation will only affect the current screenshot variant (e.g., Chrome on desktop).

2. **Apply to All Browser Variants:** The annotation will be applied to all browser/viewport combinations for this screenshot (e.g., Chrome, Firefox, Safari on desktop).

> **Best Practice:** While you can apply annotations to all browser variants, it's recommended to manually verify that these areas are configured correctly for each browser. Certain browsers may render elements differently, potentially causing inconsistencies in your annotations.

### Annotation Color Coding

When viewing annotations, different colors indicate their type:
- **Red boxes:** Ignore regions
- **Green boxes:** Select regions
- **Blue boxes:** Floating area boundaries
- **Yellow boxes:** Elements within floating regions
- **Purple boxes:** Ignore colors regions

## Keyboard Shortcuts

Speed up your annotation workflow with these keyboard shortcuts:

- `Shift + A:` Resize annotation box left
- `Shift + S:` Resize annotation box down
- `Shift + D:` Resize annotation box right
- `Shift + W:` Resize annotation box up
- `Shift + T:` Define a region encompassing the entire screenshot
- `Delete or Backspace:` Remove the currently selected annotation

> **Tip:** Use keyboard shortcuts for precise control when resizing annotation boxes, especially for small or complex regions.

## Best Practices

Follow these best practices to get the most out of the annotation tool:

### Choosing the Right Annotation Type

- **Start with Ignore Region** for simple dynamic content (timestamps, counters, ads)
- **Use Select Region** when you only care about specific UI components
- **Use Floating Region** for elements that move within a boundary
- **Use Ignore Colors** when structure matters more than color variations
- **Use Select Ignore** for granular control within larger components

### General Guidelines

- **Verify across browsers:** Test annotations on different browsers to ensure consistency
- **Document your decisions:** Note why you ignored/selected certain regions for future reference
- **Review periodically:** Regularly review annotations to ensure they're still relevant
- **Start simple:** Begin with basic Ignore Region before moving to advanced features
- **Test thoroughly:** Verify annotations work correctly before applying to all browser variants

### Workflow Tips

- Create annotations after reviewing initial comparison results
- Use the annotation toggle to hide/show annotations for a cleaner view
- Leverage keyboard shortcuts for faster annotation creation
- Apply to current screenshot first, then verify before applying to all variants
- Combine multiple annotation types for comprehensive coverage

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='annotations-not-applying' label='Annotations Not Applying' default>

**Annotations Not Applying**

**Issue:** Annotations are not being applied to future builds.

**Solutions:**
- Ensure you clicked **Save** after creating annotations
- Verify you selected the correct annotation type
- Check that you applied annotations to the correct screenshot variant
- Refresh the page and verify annotations are visible

</TabItem>

<TabItem value='floating-region-not-working' label='Floating Region Not Working'>

**Floating Region Not Working**

**Issue:** Floating region is still showing false positives.

**Solutions:**
- Ensure the blue region (floating area) is large enough to encompass all possible positions
- Verify the yellow region (element to test) is correctly positioned within the blue region
- Check that the element structure hasn't changed significantly
- Try adjusting the size of both regions

</TabItem>

<TabItem value='ignore-colors-still-showing-differences' label='Ignore Colors Still Showing Differences'>

**Ignore Colors Still Showing Differences**

**Issue:** Color differences are still being detected in ignore colors regions.

**Solutions:**
- Verify you selected "Ignore Colors" as the annotation type
- Ensure the region covers the entire area where colors may vary
- Check that structural differences aren't being mistaken for color differences
- Review the comparison settings in project configuration

</TabItem>

<TabItem value='annotations-disappearing' label='Annotations Disappearing'>

**Annotations Disappearing**

**Issue:** Annotations are not visible or have disappeared.

**Solutions:**
- Toggle the **Annotations** switch to ensure it's enabled
- Refresh the page
- Check if annotations were deleted accidentally
- Verify you're viewing the correct screenshot variant

</TabItem>
</Tabs>

For more comprehensive troubleshooting, refer to the [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide).

## Additional Resources

- [SmartUI Project Settings](/support/docs/smartui-project-settings) - Configure comparison settings
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Code-based solutions for dynamic content
- [Smart Ignore](/support/docs/smartui-smartignore) - Automatic layout shift handling
- [Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Comprehensive issue resolution
