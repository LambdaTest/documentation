---
id: smartui-handle-sticky-elements
title: Handle Pages with Sticky Elements
sidebar_label: Handle Sticky Elements
description: Ensure accurate visual testing with LambdaTest SmartUI by effectively handling sticky elements. Prevent false positives and maintain consistency across visual snapshots.
keywords:
  - lambdatest
  - smart ui
  - sticky-elements
  - storybook
url: https://www.lambdatest.com/support/docs/smartui-handle-sticky-elements/
site_name: LambdaTest
slug: smartui-handle-sticky-elements/
---

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
          "name": "Sticky Elements",
          "item": "https://www.lambdatest.com/support/docs/smartui-handle-sticky-elements/"
        }]
      })
    }}
></script>
When conducting visual testing on web pages that contain sticky elements (such as headers, footers, or navigation bars), it's crucial to ensure that these elements do not cause false positives or inconsistencies in test results. Sticky elements, which remain fixed while scrolling through a page, can overlap or repeat in snapshots, leading to discrepancies in visual comparisons. LambdaTest SmartUI provides a solution to handle sticky elements effectively, ensuring consistent and accurate visual testing.

## How LambdaTest SmartUI Handles Sticky Elements
- **Modifying Sticky Elements in the DOM:**
LambdaTest SmartUI automatically adjusts the positions of sticky elements in the Document Object Model (DOM) before capturing a screenshot. This modification ensures that sticky elements are displayed only once in the visual snapshots, typically at their original position (like the top of the page) where they first appear.
- **Rendering Full-Page Screenshots:**
When taking full-page screenshots, LambdaTest SmartUI renders the page as it would appear when initially loaded in the browser. In this state, sticky elements (e.g., headers or footers) are positioned only at the top or bottom of the page, and they do not repeat throughout the rest of the page's length.

## Benefits of Handling Sticky Elements
- **Consistency Across Snapshots:** Ensures that sticky elements do not create unnecessary discrepancies by appearing multiple times in a single snapshot.
- **Reduces False Positives:** Helps prevent false positives caused by sticky elements moving or overlapping with other content during scrolling.
- **Stable Visual Baseline:** Provides a stable visual baseline by keeping the sticky elements static, which aids in accurate visual comparisons.