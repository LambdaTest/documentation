---
id: smartui-handle-videos
title: Handle Pages with Videos
sidebar_label: Handle Videos
description: SmartUI can now performs visual testing on pages that have videos.
keywords:
  - lambdatest
  - smart ui
  - videos
  - storybook
url: https://www.lambdatest.com/support/docs/smartui-handle-videos/
site_name: LambdaTest
slug: smartui-handle-videos/
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
          "name": "Handle Videos",
          "item": "https://www.lambdatest.com/support/docs/smartui-handle-videos/"
        }]
      })
    }}
></script>
SmartUI Testing in LambdaTest enables you to perform automated visual regression testing of your web applications. However, web pages with dynamic content, such as videos, can present challenges because the content changes frame by frame, which might cause false positives in visual comparisons.

To handle web pages with videos in SmartUI Testing on LambdaTest, the platform automatically captures the first frame of the video during the visual comparison process. This ensures that the presence of dynamic content, such as videos, does not lead to false positives or irrelevant discrepancies in the visual testing results.

## How LambdaTest SmartUI Handles Web Pages with Videos:
- **Automatic First Frame Capture:** When a web page containing a video is loaded, SmartUI Testing automatically captures the first frame of the video. This frame is treated as a static image, allowing the comparison algorithm to focus on static elements of the page rather than the dynamic content of the video.
- **Avoiding False Positives:** By capturing only the first frame, SmartUI Testing avoids detecting changes caused by video playback, such as variations in frames, overlays, or animations. This minimizes false positives and ensures that the visual differences identified are relevant to the web page's design and layout.
- **Stable Baseline Comparison:** The captured first frame serves as a consistent baseline for subsequent visual comparisons. Any changes in the static elements of the web page are flagged, while dynamic elements like videos do not affect the test results.

## Benefits of Handling Videos in SmartUI Testing:
- **Accurate Visual Testing:** Ensures accurate visual regression testing by ignoring dynamic content changes, focusing only on the static layout and design.
- **Efficient Workflow:** Reduces manual effort by automatically handling dynamic elements, eliminating the need for custom scripts or manual intervention.
- **Improved Test Reliability:** Enhances test reliability by preventing false positives caused by video content.