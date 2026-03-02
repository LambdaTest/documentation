---
id: smartui-smartignore
title: Smart Ignore
hide_title: true
sidebar_label: Smart Ignore
description: Learn how to use our new comparison engine Smart Ignore to efficiently ignore noise, layout shifts and displacement differences in your visual tests
keywords:
- hide displacement diffs
- ignore displacement differences
- smart ignore layout shifts
- AI based auto ignore
url: https://www.testmuai.com/support/docs/smartui-smartignore/
site_name: TestMu AI
slug: smartui-smartignore/
canonical: https://www.testmuai.com/support/docs/smartui-smartignore/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

# Ignoring Displacement Differences using Smart Ignore
---

SmartUI's `Smart Ignore` engine is specifically designed to address the challenges that arise when testing dynamic and content-rich web applications. Often, when content is added or removed from a page, it causes other elements to be displaced, leading to numerous false positives in traditional pixel-by-pixel comparisons. Smart Ignore intelligently hides these displacement differences, allowing you to concentrate on actual content changes that impact the user experience.

<div className='storylane-iframe'>
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className='sl-embed'>
    <iframe loading="lazy" className='sl-demo' src="https://app.storylane.io/demo/pzvjh5ij6xpd?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Key Features of Smart Ignore

#### 1. Displacement-Aware Comparison:
Smart Ignore distinguishes between content changes and mere content displacement. It hides differences arising from elements that have shifted position but have not otherwise changed, reducing visual noise and making it easier to spot true content differences.

#### 2. Clutter Reduction:

In scenarios where large areas of the page are impacted by content displacement, traditional pixel to pixel comparison would highlight these areas in a blurred and cluttered manner making it difficult to identify the actual content changes. Smart Ignore minimizes this clutter, highlighting only those areas where content has genuinely changed. In the image below you can see confusing comparison due to the `pixel to pixel` approach, which is unable to highlight the actual reasons behind the mismatch.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart-ignore/p2p.webp').default} alt="cmd" width="768" height="373" className='doc_img'/>

#### 3. Targeted Visual Testing:

By focusing only on the significant changes, **Smart Ignore** enhances the precision of your visual testing. This feature is particularly useful when testing pages where frequent updates or dynamic content are expected, ensuring that only the most relevant differences are brought to your attention. In the image below you can see the actual changes being highlighted as Smart Ignore understands the images and yields out the best results.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart-ignore/smartignore.webp').default} alt="cmd" width="768" height="375" className='doc_img'/>

## How to Use Smart Ignore?

#### 1. Applying Smart Ignore via Project Settings

In your SmartUI dashboard, navigate to your project settings.
Under "Comparison Options," switch on the `Smart Ignore` toggle across all visual tests in the project.This ensures Smart Ignore will be applied throughout the project with option to see other comparison modes as well on screenshot level according to the usecase.

<img
  loading="lazy"
  src={require('../assets/images/smart-visual-testing/smart-ignore/Toggle.png').default}
  alt="cmd"
  width="300"
  height="200"
  className='doc_img'
/>

#### 2. Using Smart Ignore per Screenshot

After running your visual test, go to the comparison page.
For each screenshot, choose the "Smart Ignore" mode from the "Diff Options" dropdown.
This allows you to selectively apply Smart Ignore to specific screenshots, making it easier to identify true differences in content.

<img
  loading="lazy"
  src={require('../assets/images/smart-visual-testing/smart-ignore/Dropdown-4.png').default}
  alt="cmd"
  width="300"
  height="200"
  className='doc_img'
/>
## Use Cases of Smart Ignore

#### Content Management Systems

**Scenario:** A page frequently updated with new articles or images causes other elements to shift position.

**Solution:** Smart Ignore hides the displacement-related differences, allowing you to focus solely on the content that has been added or modified.

#### E-commerce Platforms

**Scenario:** Adding or removing products from a page often displaces other items, leading to a large number of false positives.

**Solution:** Use Smart Ignore to ignore these shifts and concentrate on detecting actual changes in product listings, descriptions, or images.

#### Large-Scale UI Changes

**Scenario:** A major UI overhaul causes a significant portion of the page layout to change, making it difficult to identify specific content changes.

**Solution:** Apply Smart Ignore to filter out layout shifts, making it easier to identify key differences in the content itself.

## Limitations

### Current Limitations

Smart Ignore has the following current limitations:

1. **Element Ignoring Not Supported**: Smart Ignore currently does not support ignoring specific DOM elements using `ignoreDOM` options. If you need to ignore specific elements, use the standard comparison mode with `ignoreDOM` in your test code.

2. **Project Settings Integration**: Smart Ignore does not currently integrate with all comparison options available in Project Settings (such as pixel threshold, custom mismatch options). These settings may not apply when Smart Ignore is enabled.

3. **Layout Comparison Mode**: Smart Ignore works differently from Layout Comparison mode. If you need to compare only layout structure, use Layout Comparison mode instead.

### When Not to Use Smart Ignore

Smart Ignore may not be suitable for:

- **Precise Pixel Comparisons**: When you need exact pixel-by-pixel accuracy
- **Layout-Only Testing**: When you want to test only layout structure (use Layout Comparison instead)
- **Element-Specific Ignoring**: When you need to ignore specific elements (use `ignoreDOM` instead)
- **Very Small Changes**: When you need to detect very minor visual changes

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='start-with-project-level-toggle' label='Start with Project-Level Toggle' default>

**Start with Project-Level Toggle**

Enable Smart Ignore at the project level for consistent behavior across all tests. You can still switch to other comparison modes per screenshot if needed.

</TabItem>
<TabItem value='combine-with-other-features' label='Combine with Other Features' >

**Combine with Other Features**

Smart Ignore works well with:
- Dynamic data handling for content that changes
- Layout comparison for structure-focused testing
- Custom CSS for test-specific styling

</TabItem>
<TabItem value='review-results-regularly' label='Review Results Regularly' >

**Review Results Regularly**

While Smart Ignore reduces false positives, regularly review results to ensure it's not hiding important changes.

</TabItem>
<TabItem value='use-per-screenshot-mode-for-testing' label='Use Per-Screenshot Mode for Testing' >

**Use Per-Screenshot Mode for Testing**

When testing Smart Ignore, use per-screenshot mode to compare results with other comparison modes and find the best approach for each test case.

</TabItem>
<TabItem value='use-per-screenshot-mode-for-testing-1' label='Use Per-Screenshot Mode for Testing' >

**Use Per-Screenshot Mode for Testing**

When testing Smart Ignore, use per-screenshot mode to compare results with other comparison modes and find the best approach for each test case.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='smart-ignore-not-available' label='Smart Ignore Not Available' default>

**Issue: Smart Ignore Not Available**

**Symptoms**: Smart Ignore toggle or option is not visible

**Solutions**:
1. Verify you're using a supported SmartUI plan
2. Check if your project type supports Smart Ignore
3. Contact support if the feature should be available

</TabItem>
<TabItem value='too-many-differences-still-shown' label='Too Many Differences Still Shown' >

**Issue: Too Many Differences Still Shown**

**Symptoms**: Smart Ignore still shows many differences

**Solutions**:
1. Verify Smart Ignore is actually enabled (check toggle state)
2. Some differences may be actual content changes, not displacement
3. Consider using Layout Comparison mode for layout-only testing
4. Combine with `ignoreDOM` for specific elements

</TabItem>
<TabItem value='important-changes-hidden' label='Important Changes Hidden' >

**Issue: Important Changes Hidden**

**Symptoms**: Smart Ignore hides changes you want to see

**Solutions**:
1. Switch to Pixel-to-Pixel mode for that specific screenshot
2. Use per-screenshot mode to see all comparison types
3. Review the baseline to ensure it's correct
4. Consider if the change is actually a displacement vs content change

</TabItem>
<TabItem value='inconsistent-results' label='Inconsistent Results' >

**Issue: Inconsistent Results**

**Symptoms**: Smart Ignore shows different results for similar changes

**Solutions**:
1. Ensure consistent baseline images
2. Check if page content is loading consistently
3. Verify Smart Ignore is enabled consistently
4. Review page structure for dynamic content issues

</TabItem>
</Tabs>

## Comparison with Other Modes

### Smart Ignore vs Pixel-to-Pixel

| Feature | Smart Ignore | Pixel-to-Pixel |
|---------|--------------|----------------|
| Displacement Handling | ✅ Automatic | ❌ Shows all differences |
| False Positives | ✅ Reduced | ❌ Higher rate |
| Precision | Medium | High |
| Best For | Dynamic content pages | Precise comparisons |

### Smart Ignore vs Layout Comparison

| Feature | Smart Ignore | Layout Comparison |
|---------|--------------|-------------------|
| Content Changes | ✅ Detected | ❌ Ignored |
| Layout Changes | ✅ Detected | ✅ Detected |
| Displacement | ✅ Ignored | ✅ Ignored |
| Best For | Content + layout | Layout only |


## Additional Resources

- [Project Settings](/support/docs/smartui-project-settings)
- [Layout Comparison](/support/docs/smartui-layout-testing)
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data)
- [Baseline Management](/support/docs/smartui-baseline-management)

---

> **Note**: Smart Ignore is continuously being improved. Features like element ignoring and enhanced Project Settings integration are planned for future releases. Check the [release notes](/support/docs/) for updates.
