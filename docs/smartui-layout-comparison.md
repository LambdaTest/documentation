---
id: smartui-layout-testing
title: Layout Comparison in SmartUI SDK
sidebar_label: Layout Testing
description: Learn how to use SmartUI SDK's layout testing feature to verify only the layout structure of your pages while ignoring content and style changes
keywords:
  - layout comparison
  - visual regression testing
  - ignore layout differences
  - smartui sdk
  - visual testing
  - layout structure
  - element positions
  - layout testing
url: https://www.lambdatest.com/support/docs/smartui-layout-comparison/
site_name: LambdaTest
slug: smartui-layout-testing/
---

# Layout Comparison in SmartUI SDK

The layout comparison feature in SmartUI SDK allows you to verify only the layout structure of your pages while ignoring content and style changes. This is particularly useful for frontend developers who need to ensure that the structural integrity of their UI remains consistent across different versions or environments.

## How to Use Layout Comparison

To use the layout comparison feature, you need to set the `ignoreType` option to `"layout"` when taking a screenshot:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="javascript" label="JavaScript" default>
    ```javascript
    // Set options to focus only on layout structure
    let options = {
      ignoreType: "layout" 
    };

    // Take a screenshot with layout comparison enabled
    await smartuiSnapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value="java" label="Java">
    ```java
    // Set options to focus only on layout structure
    SmartUIOptions options = new SmartUIOptions();
    options.IgnoreType("layout"); 

    // Take a screenshot with layout comparison enabled
    smartuiSnapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```python
    # Set options to focus only on layout structure
    options = {
        "ignoreType": "layout" 
    }

    # Take a screenshot with layout comparison enabled
    smartui_snapshot(driver, "ScreenshotName", options)
    ```
  </TabItem>
  <TabItem value="csharp" label="C#">
    ```csharp
    // Set options to focus only on layout structure
    var options = new SmartUIOptions
    {
        IgnoreType = "layout" 
    };

    // Take a screenshot with layout comparison enabled
    await SmartUI.Snapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value="ruby" label="Ruby">
    ```ruby
    # Set options to focus only on layout structure
    options = {
      ignoreType: "layout" 
    }

    # Take a screenshot with layout comparison enabled
    smartui_snapshot(driver, "ScreenshotName", options)
    ```
  </TabItem>
</Tabs>

This configuration tells SmartUI to focus only on the layout structure while comparing screenshots, ignoring content and style changes.

## What Layout Comparison Verifies

The layout comparison feature specifically focuses on:

1. **Element Positions**: The relative positioning of elements compared to their siblings
2. **Parent-Child Relationships**: The hierarchical structure of elements in the DOM
3. **Basic Structural Hierarchy**: The overall layout structure of the page

## What Layout Comparison Ignores

When using layout comparison, the following aspects are ignored:

1. **Text Content**: Changes in text content are not considered in the comparison
2. **Color Values**: Differences in color schemes or individual color values are ignored
3. **Style Properties**: Changes in CSS properties like font size, padding, margins, etc. are not compared
4. **Image Content**: Differences in image content are ignored, only their position and size are considered

## Content vs. Layout Diffs

Understanding the difference between content and layout is crucial for effective visual testing:

- **Content** refers to the actual information that users interact with on a webpage, such as text, images, videos, and other elements that convey your message.

- **Layout** pertains to the arrangement and presentation of this content, including the positioning, styling, and structuring of elements. The goal of layout design is to ensure that content is visually appealing and well-organized.

SmartUI's layout comparison feature allows you to focus specifically on layout differences while ignoring content changes, giving you more precise control over your visual testing process.

## Use Cases for Layout Comparison

The layout comparison feature is particularly valuable in the following scenarios:

1. **Component Library Development**: When developing reusable components, you may want to verify that the layout structure remains consistent while allowing for content and style variations.

2. **Responsive Design Testing**: When testing responsive layouts across different screen sizes, you may want to focus on ensuring the layout structure adapts correctly while ignoring specific content or style changes.

3. **Design System Implementation**: When implementing a design system, you may need to verify that the layout structure follows the established patterns while allowing for content and style variations.

4. **A/B Testing**: During A/B testing of different layouts, you may want to compare the structural integrity while ignoring the intentional content and style differences between variants.

5. **Multi-language Testing**: When testing websites in different languages, you may want to verify that the layout structure remains consistent despite text length variations.

6. **Cross-Environment Testing**: Ensure that your page structure remains intact across different operating systems, browsers, devices, viewport sizes, and orientations.

## Validations

When using layout comparison, SmartUI performs the following validations:

1. **Layout Structure Extraction**: The system extracts the layout structure from the page
2. **Position Calculations**: Accurate calculation of element positions relative to each other
3. **Relative Positioning**: Preservation of relative positioning between elements
4. **Viewport Considerations**: Proper handling of viewport dimensions and scrolling

## Example Implementation

Here's a complete example showing how to implement layout comparison in a test:

```javascript
describe('Layout Structure Test', () => {
  it('should verify layout structure while ignoring content and style changes', async () => {
    // Navigate to the page
    await driver.get('https://example.com');
    
    // Wait for layout to stabilize (important for dynamic content)
    await driver.wait(until.elementLocated(By.cssSelector('.main-content')), 5000);
    
    // Configure options to focus only on layout structure
    let options = {
      ignoreType: "layout"
    };
    
    // Take screenshot with layout comparison
    await smartuiSnapshot(driver, "HomePageLayout", options);
  });
});
```

## Additional Resources

- [SmartUI SDK Documentation](/docs/smartui-sdk-config-options)
- [Visual Regression Testing Guide](/docs/smart-visual-testing)
- [Comparison Settings Documentation](/docs/test-settings-options) 