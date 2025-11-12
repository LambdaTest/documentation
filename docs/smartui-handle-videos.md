---
id: smartui-handle-videos
title: Handle Pages with Videos
sidebar_label: Handle Videos
description: Learn how SmartUI automatically handles video content in visual regression tests by capturing the first frame, preventing false positives from dynamic video playback.
keywords:
  - lambdatest
  - smart ui
  - videos
  - video testing
  - dynamic content
  - visual testing
  - false positives
url: https://www.lambdatest.com/support/docs/smartui-handle-videos/
site_name: LambdaTest
slug: smartui-handle-videos/

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

## Overview

Web pages often contain video content that plays dynamically, changing frame by frame. In visual regression testing, this dynamic content can cause false positives because each frame of the video appears different, even when the actual page design and layout remain unchanged.

SmartUI automatically handles video content by capturing the first frame of videos during visual comparison, ensuring that dynamic video playback doesn't interfere with your visual regression tests.

## How SmartUI Handles Videos

### Automatic First Frame Capture

When SmartUI encounters a video element on a page, it automatically:

1. **Captures the First Frame**: Extracts the initial frame of the video as a static image
2. **Treats as Static Content**: Uses this first frame as a stable reference point for comparison
3. **Ignores Playback Changes**: Subsequent frames and playback changes are not considered in the comparison

This approach ensures that:
- Video content doesn't cause false positives
- The page layout and design are accurately compared
- Test results focus on actual UI changes, not video playback

### Process Flow

```
Page Load → Video Detection → First Frame Extraction → Static Image Comparison → Results
```

## Benefits

### Accurate Visual Testing

By capturing only the first frame, SmartUI ensures that visual regression tests focus on static layout and design elements rather than dynamic video content. This provides more reliable and meaningful test results.

### Efficient Workflow

No manual configuration or custom scripts are required. SmartUI automatically handles video content, reducing the need for:
- Custom video handling code
- Manual video pausing scripts
- Complex workarounds for dynamic content

### Improved Test Reliability

False positives caused by video playback variations are eliminated, resulting in:
- More stable test results
- Reduced manual review time
- Higher confidence in test outcomes

## Use Cases

### Use Case 1: Product Demo Pages

**Scenario**: Product pages feature embedded demo videos that auto-play or change frames.

**Solution**: SmartUI automatically captures the first frame, allowing you to focus on comparing the page layout, product information, and static elements without video interference.

### Use Case 2: Marketing Landing Pages

**Scenario**: Landing pages include hero videos or background videos that play continuously.

**Solution**: The first frame is captured, ensuring consistent comparison of the overall page design, call-to-action buttons, and static content.

### Use Case 3: Video Gallery Pages

**Scenario**: Pages with multiple video thumbnails or video galleries where thumbnails may change.

**Solution**: SmartUI captures the initial state of all videos, providing stable baseline for comparing gallery layouts and page structure.

### Use Case 4: Educational Content Pages

**Scenario**: Educational platforms with embedded tutorial videos or course previews.

**Solution**: First frame capture ensures that course layouts, navigation, and static content are accurately compared while ignoring video playback variations.

## Configuration

SmartUI handles videos automatically with no additional configuration required. However, you can enhance video handling by:

### Using waitForTimeout

If videos take time to load, you can add a wait timeout to ensure the first frame is captured correctly:

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1920, 1080]]
  },
  "waitForTimeout": 3000
}
```

### Combining with Other Features

You can combine video handling with other SmartUI features:

**Example: Ignoring video controls while keeping the first frame**

```javascript
let options = {
    ignoreDOM: {
        cssSelector: [".video-controls", ".play-button"]
    }
};
await smartuiSnapshot(driver, 'Video Page', options);
```

## Limitations and Considerations

### Supported Video Formats

SmartUI handles standard HTML5 video elements:
- `<video>` tags with standard formats (MP4, WebM, OGG)
- Embedded videos via iframe (YouTube, Vimeo, etc.)
- Video elements with autoplay attributes

### First Frame Consistency

- The first frame captured may vary slightly if videos have different loading times
- Videos with preload="none" may not have a first frame immediately available
- Consider using `waitForTimeout` for videos that load slowly

### Video Overlays

- Video controls, overlays, and UI elements are included in the snapshot
- Use `ignoreDOM` if you need to exclude video controls from comparison
- Overlays that appear after the first frame are not captured

### Autoplay Videos

- Autoplay videos are handled the same way as regular videos
- The first frame is captured regardless of autoplay status
- Videos that start playing immediately still have their first frame captured

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='allow-video-loading' label='Allow Video Loading' default>

### Allow Video Loading

Use appropriate `waitForTimeout` values to ensure videos are loaded before snapshots.

</TabItem>

<TabItem value='test-video-pages' label='Test Video Pages'>

### Test Video Pages

Verify that video pages work correctly with SmartUI before running full test suites.

</TabItem>

<TabItem value='combine-with-other-features' label='Combine with Other Features'>

### Combine with Other Features

Use `ignoreDOM` to exclude video controls if needed.

</TabItem>

<TabItem value='document-video-content' label='Document Video Content'>

### Document Video Content

Note which pages contain videos for better test planning.

</TabItem>

<TabItem value='review-first-frames' label='Review First Frames'>

### Review First Frames

Occasionally review captured first frames to ensure they represent the intended baseline.

</TabItem>
</Tabs>

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='videos-not-captured-correctly' label='Videos Not Captured Correctly' default>

### Issue: Videos Not Captured Correctly

**Symptoms**: Video areas appear blank or incorrect in snapshots

**Solutions**:
1. Increase `waitForTimeout` to allow videos to load
2. Check if videos are loaded via JavaScript (may need explicit waits)
3. Verify video elements are present in the DOM before snapshot

```javascript
// Wait for video to load
await driver.wait(until.elementLocated(By.tagName('video')), 10000);
await driver.sleep(2000); // Additional wait for first frame
await smartuiSnapshot(driver, 'Video Page');
```

</TabItem>
<TabItem value='false-positives-from-video-areas' label='False Positives from Video Areas' >

### Issue: False Positives from Video Areas

**Symptoms**: Video areas show differences even when page design is unchanged

**Solutions**:
1. Verify SmartUI is capturing first frames (check baseline images)
2. Use `ignoreDOM` to exclude video elements if first frame capture isn't sufficient
3. Consider using layout comparison mode for pages with many videos

</TabItem>
<TabItem value='embedded-videos-youtube-vimeo' label='Embedded Videos (YouTube, Vimeo)' >

### Issue: Embedded Videos (YouTube, Vimeo)

**Symptoms**: Embedded videos via iframe may not be captured correctly

**Solutions**:
1. Embedded videos in iframes are handled automatically
2. If issues persist, consider using `ignoreDOM` for iframe areas
3. Check if iframe content is accessible (CORS policies may affect this)

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for video-related issues
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle other dynamic content types
- [Handling Lazy Loading](/support/docs/smartui-handle-lazy-loading) - Handle lazy-loaded content
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) - Configure `waitForTimeout` and other options
- [Smart Ignore Feature](/support/docs/smartui-smartignore) - Automatically ignore layout shifts
- [Project Settings](/support/docs/smartui-project-settings) - Configure comparison settings and thresholds
