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
url: https://www.lambdatest.com/support/docs/smartui-smartignore/
site_name: LambdaTest
slug: smartui-smartignore/
---

# Ignoring Displacement Differences using Smart Ignore
---

SmartUI's `Smart Ignore` engine is specifically designed to address the challenges that arise when testing dynamic and content-rich web applications. Often, when content is added or removed from a page, it causes other elements to be displaced, leading to numerous false positives in traditional pixel-by-pixel comparisons. Smart Ignore intelligently hides these displacement differences, allowing you to concentrate on actual content changes that impact the user experience.

<div className="storylane-iframe">
  <script async src="https://js.storylane.io/js/v2/storylane.js"></script>
  <div className="sl-embed">
    <iframe loading="lazy" className="sl-demo" src="https://app.storylane.io/demo/pzvjh5ij6xpd?embed=inline" name="sl-embed" allow="fullscreen" allowfullscreen></iframe>
  </div>
</div>

### Key Features of Smart Ignore

#### 1. Displacement-Aware Comparison: 
Smart Ignore distinguishes between content changes and mere content displacement. It hides differences arising from elements that have shifted position but have not otherwise changed, reducing visual noise and making it easier to spot true content differences.

#### 2. Clutter Reduction: 

In scenarios where large areas of the page are impacted by content displacement, traditional pixel to pixel comparison would highlight these areas in a blurred and cluttered manner making it difficult to identify the actual content changes. Smart Ignore minimizes this clutter, highlighting only those areas where content has genuinely changed. In the image below you can see confusing comparison due to the `pixel to pixel` approach, which is unable to highlight the actual reasons behind the mismatch.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart-ignore/p2p.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>


#### 3. Targeted Visual Testing: 

By focusing only on the significant changes, **Smart Ignore** enhances the precision of your visual testing. This feature is particularly useful when testing pages where frequent updates or dynamic content are expected, ensuring that only the most relevant differences are brought to your attention. In the image below you can see the actual changes being highlighted as Smart Ignore understands the images and yields out the best results.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/smart-ignore/smartignore.webp').default} alt="cmd" width="768" height="375" className="doc_img"/>

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
  className="doc_img"
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
  className="doc_img" 
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


> **Info :** <b>Smart Ignore</b> currently <b> does not </b> support ignoring elements and the options available in the [Project Settings](https://www.lambdatest.com/support/docs/smartui-project-settings/), both the supports should be releasing soon.
---