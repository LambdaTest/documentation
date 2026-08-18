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
url: https://www.testmuai.com/support/docs/smartui-layout-comparison/
site_name: TestMu AI
slug: smartui-layout-testing/
canonical: https://www.testmuai.com/support/docs/smartui-layout-testing/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

Layout testing is a specialized approach to visual testing that focuses on verifying the structural integrity and arrangement of UI elements rather than their specific content or styling. It ensures that your application's visual hierarchy and element positioning remain consistent across different environments and updates.

The example below demonstrates localisation testing, one of the major use cases of layout testing, where a webpage is tested across languages and locales.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/layout/localisation-netflix.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

### Why Layout Testing Matters

1. **Structural Consistency**: Ensures that UI elements maintain their intended positions and relationships, regardless of content changes or style updates.

2. **Cross-Environment Reliability**: Validates that your application's layout remains intact across different:
   - Operating systems
   - Browsers
   - Devices
   - Screen sizes
   - Viewport dimensions

3. **Design System Compliance**: Helps maintain consistency with your design system by verifying that components follow established layout patterns.

# What Layout Comparison Ignores

When using layout comparison, the following aspects are ignored:

1. **Text Content**: Changes in text content are not considered in the comparison
2. **Color Values**: Differences in color schemes or individual color values are ignored
3. **Style Properties**: Changes in CSS properties like font size, padding, margins, etc. are not compared
4. **Image Content**: Differences in image content are ignored, only their position and size are considered

## Visual Diffs vs. Layout Diffs

Understanding the difference between content and layout is crucial for effective visual testing:

- **Visual Diffs** refer to the actual information that users interact with on a webpage, such as text, images, videos, and other elements that convey your message.
In the example below, you can see the visual differences between the baseline and comparison screenshot using  Smart Ignore Diff Option.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/layout/smartignore-amazon.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

- **Layout** pertains to the arrangement and presentation of this content, including the positioning, styling, and structuring of elements. The goal of layout design is to ensure that content is visually appealing and well-organized.
In the example below, you can see the layout differences between the baseline and comparison screenshot using  Layout Diff Option.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/layout/layout-amazon.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

SmartUI's layout comparison feature allows you to focus specifically on layout differences while ignoring content changes, giving you more precise control over your visual testing process.

# Layout Comparison in SmartUI SDK

## Prerequisites

Before using the Layout Comparison feature, ensure you meet the following requirements:

- **For SmartUI SDK (smartui exec):** SmartUI CLI version `4.1.8` or above is installed.

> [!WARNING]
> The baseline images **must** be generated with the layout strategy enabled. Only then will the comparison work correctly. If you try to compare new images (with layout enabled) against old baseline images (without layout enabled), the layout comparison will fail or behave unexpectedly.

## How to Use Layout Comparison with SmartUI

Layout Comparison can be executed in two different ways depending on your integration.

### 1. Using SmartUI Hooks (native automation)

If you use **SmartUI Hooks** (visual tests through Selenium / Playwright / Cypress on the grid **without** the `smartui exec` wrapper), **layout comparison is applied per screenshot** by passing **`ignoreType: ["layout"]`** (and `screenshotName`, and optionally `fullPage`, and other layout-related keys) in the **object** you send to **`smartui.takeScreenshot`** via `executeScript`, **not** by relying on `ignoreType` or layout flags **only** inside `LT:Options`.

For **`LT:Options`**, you still set **`smartUI.project`** (and `visual`, credentials). **Do not** assume `LT:Options.ignoreType: ['layout']` or similar capability-only snippets alone will enable layout for Hooks; that does not match current supported behavior.

**See:** [SmartUI Hooks - Layout, Full Page, and Smart Ignore](/support/docs/smartui-hooks-layout-fullpage-smartignore/) for Java, JavaScript, and C# hook examples.

### 2. Using SmartUI SDK (smartUISnapshot command)
If you are using the SmartUI SDK (`smartui exec`), you need to set the `ignoreType` option to `"layout"` when taking a specific screenshot within your code:

<Tabs>
  <TabItem value='javascript' label='JavaScript' default>
    ```javascript
    // Set options to focus only on layout structure
    let options = {
            ignoreType: ["layout"]
          }

    // Take a screenshot with layout comparison enabled
    await smartuiSnapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value='java' label='Java'>
    ```java
    // Set options to focus only on layout structure
    Map<String, Object> options = new HashMap<>();
    options.put("ignoreType", Arrays.asList("layout"));

    // Take a screenshot with layout comparison enabled
    smartuiSnapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value='python' label='Python'>
    ```python
    # Set options to focus only on layout structure
    options = {
        "ignoreType": ["layout"]
    }

    # Take a screenshot with layout comparison enabled
    smartui_snapshot(driver, "ScreenshotName", options)
    ```
  </TabItem>
  <TabItem value='csharp' label='C#'>
    ```csharp
    // Set options to focus only on layout structure
    var options = new Dictionary<string, object>
    {
        { "ignoreType", new List<string> { "layout" } }
    };

    // Take a screenshot with layout comparison enabled
    await SmartUI.Snapshot(driver, "ScreenshotName", options);
    ```
  </TabItem>
  <TabItem value='ruby' label='Ruby'>
    ```ruby
    # Set options to focus only on layout structure
    options = {
      ignoreType: ["layout"]
    }

    # Take a screenshot with layout comparison enabled
    smartui_snapshot(driver, "ScreenshotName", options)
    ```
  </TabItem>
</Tabs>

## Applying Layout Comparison to One Region Only

Layout comparison as described above applies to the entire capture, so content and color regressions anywhere on the page stop being reported. When only part of the page has dynamic content, draw a **Layout Region** on that area in the SmartUI dashboard instead. Inside the region SmartUI reports structural changes only, and the rest of the capture keeps its normal comparison mode.

Layout Regions work for both web captures and PDF comparisons, and they persist across builds like any other annotated region. For web comparisons they need the DOM to have been recorded at capture time, which SmartUI CLI and SDK captures do automatically. See [Layout Regions](/support/docs/smartui-layout-regions/) for the full workflow.

## Known Limitations

The Layout Comparison feature has the following limitations:

- Not supported with Fetch APIs
- Not supported with Slack, Email, and GitHub integrations
- Performance may vary based on the complexity of the page structure

## Use Cases for Layout Comparison

The layout comparison feature is particularly valuable in the following scenarios:

1. **Component Library Development**: When developing reusable components, you may want to verify that the layout structure remains consistent while allowing for content and style variations.

2. **Responsive Design Testing**: When testing responsive layouts across different screen sizes, you may want to focus on ensuring the layout structure adapts correctly while ignoring specific content or style changes.

3. **Design System Implementation**: When implementing a design system, you may need to verify that the layout structure follows the established patterns while allowing for content and style variations.

4. **A/B Testing**: During A/B testing of different layouts, you may want to compare the structural integrity while ignoring the intentional content and style differences between variants.

5. **Multi-language Testing**: When testing websites in different languages, you may want to verify that the layout structure remains consistent despite text length variations.

6. **Cross-Environment Testing**: Ensure that your page structure remains intact across different operating systems, browsers, devices, viewport sizes, and orientations.

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
      ignoreType: ["layout"]
    };

    // Take screenshot with layout comparison
    await smartuiSnapshot(driver, "HomePageLayout", options);
  });
});
```


## Additional Resources

- [SmartUI SDK Documentation](/docs/smartui-sdk-config-options)
- [Visual Regression Testing Guide](/support/docs/smart-visual-regression-testing/)
- [Comparison Settings Documentation](/docs/test-settings-options)
- [Hooks: Layout + Full Page + Smart Ignore](/support/docs/smartui-hooks-layout-fullpage-smartignore/)
