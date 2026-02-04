---
id: smartui-handle-lazy-loading
title: Handle Pages with Lazy Loading
sidebar_label: Handle Lazy Loading
description: Learn how to handle lazy-loaded content in SmartUI visual regression tests using scrolling techniques and waitForTimeout configuration.
keywords:
  - testmu ai
  - smart ui
  - lazy loading
  - scroll
  - waitForTimeout
  - visual testing
  - dynamic content
url: https://www.testmuai.com/support/docs/smartui-handle-lazy-loading/
site_name: LambdaTest
slug: smartui-handle-lazy-loading/
canonical: https://www.testmu.ai/support/docs/smartui-handle-lazy-loading/

---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Handle Lazy Loading",
          "item": `${BRAND_URL}/support/docs/smartui-handle-lazy-loading/`
        }]
      })
    }}
></script>

## What is Lazy Loading?

Lazy loading is a web performance optimization technique where content (images, videos, or other elements) is loaded only when it's about to enter the viewport or when the user scrolls near it. While this improves page load performance, it can cause issues in visual regression testing because elements may not be loaded when the snapshot is captured.

## The Challenge

When taking full-page screenshots of pages with lazy loading:

- Elements below the fold may not be loaded
- Images may appear as placeholders
- Content may be missing from snapshots
- False positives can occur due to incomplete page rendering

## Solutions

SmartUI provides multiple approaches to handle lazy-loaded content:

### Method 1: Using waitForTimeout (Recommended for Simple Cases)

The `waitForTimeout` option in your SmartUI configuration file adds a delay before capturing screenshots, giving lazy-loaded content time to load.

#### Configuration File Approach

Add `waitForTimeout` to your `.smartui.json` file:

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1920, 1080]]
  },
  "waitForTimeout": 3000
}
```

**How it works:**
- Waits for the specified time (in milliseconds) after page load
- Allows JavaScript to trigger lazy loading
- Simple and effective for pages with consistent loading times

**When to use:**
- Pages with predictable loading times
- Simple lazy loading implementations
- When you know approximate load times

**Limitations:**
- Fixed wait time may be too short or too long
- Doesn't wait for specific elements to load
- May not work for complex lazy loading scenarios

### Method 2: Programmatic Scrolling (Recommended for Complex Cases)

For pages with extensive lazy loading or infinite scroll, programmatically scroll through the page to trigger all lazy-loaded content before capturing the screenshot.

#### JavaScript (Selenium) Example

```javascript
const { Builder, By, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    await driver.get("https://example.com");

    // Function to scroll through the entire page
    async function scrollToLoadLazyContent() {
      // Get the total page height
      let totalHeight = await driver.executeScript("return document.body.scrollHeight");
      let viewportHeight = await driver.executeScript("return window.innerHeight");

      // Scroll in increments
      let scrollStep = 500;
      let currentPosition = 0;

      while (currentPosition < totalHeight) {
        // Scroll down
        await driver.executeScript(`window.scrollTo(0, ${currentPosition})`);

        // Wait for lazy content to load
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Update position
        currentPosition += scrollStep;

        // Recalculate total height (in case of infinite scroll)
        let newHeight = await driver.executeScript("return document.body.scrollHeight");
        if (newHeight > totalHeight) {
          totalHeight = newHeight;
        }
      }

      // Scroll back to top
      await driver.executeScript("window.scrollTo(0, 0)");

      // Final wait for any remaining content
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Scroll to load all lazy content
    await scrollToLoadLazyContent();

    // Take snapshot
    await smartuiSnapshot(driver, "Lazy Loaded Page");

  } finally {
    await driver.quit();
  }
})();
```

#### Java (Selenium) Example

```java

public void handleLazyLoading(WebDriver driver) throws InterruptedException {
    driver.get("https://example.com");

    JavaScriptExecutor js = (JavaScriptExecutor) driver;

    // Get total page height
    Long totalHeight = (Long) js.executeScript("return document.body.scrollHeight");
    Long viewportHeight = (Long) js.executeScript("return window.innerHeight");

    int scrollStep = 500;
    long currentPosition = 0;

    // Scroll through the page
    while (currentPosition < totalHeight) {
        js.executeScript("window.scrollTo(0, " + currentPosition + ")");
        Thread.sleep(1000); // Wait for lazy content

        currentPosition += scrollStep;

        // Recalculate height for infinite scroll
        Long newHeight = (Long) js.executeScript("return document.body.scrollHeight");
        if (newHeight > totalHeight) {
            totalHeight = newHeight;
        }
    }

    // Scroll back to top
    js.executeScript("window.scrollTo(0, 0)");
    Thread.sleep(2000);

    // Take snapshot
    SmartUISnapshot.smartuiSnapshot(driver, "Lazy Loaded Page");
}
```

#### Python (Selenium) Example

```python
from selenium import webdriver
from selenium.webdriver.common.by import By
from lambdatest import smartui_snapshot
import time

driver = webdriver.Chrome()
driver.get("https://example.com")

def scroll_to_load_lazy_content(driver):
    # Get total page height
    total_height = driver.execute_script("return document.body.scrollHeight")
    viewport_height = driver.execute_script("return window.innerHeight")

    scroll_step = 500
    current_position = 0

    # Scroll through the page
    while current_position < total_height:
        driver.execute_script(f"window.scrollTo(0, {current_position})")
        time.sleep(1)  # Wait for lazy content

        current_position += scroll_step

        # Recalculate height for infinite scroll
        new_height = driver.execute_script("return document.body.scrollHeight")
        if new_height > total_height:
            total_height = new_height

    # Scroll back to top
    driver.execute_script("window.scrollTo(0, 0)")
    time.sleep(2)

# Scroll to load all lazy content
scroll_to_load_lazy_content(driver)

# Take snapshot
smartui_snapshot(driver, "Lazy Loaded Page")
```

### Method 3: Wait for Specific Elements

For pages where you know which elements are lazy-loaded, wait for those specific elements before taking the snapshot.

#### JavaScript Example

```javascript
const { Builder, By, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

let driver = await new Builder().forBrowser("chrome").build();
await driver.get("https://example.com");

// Wait for lazy-loaded images to load
await driver.wait(until.elementsLocated(By.css('img[data-src]')), 10000);

// Trigger lazy loading by scrolling
let images = await driver.findElements(By.css('img[data-src]'));
for (let img of images) {
    await driver.executeScript("arguments[0].scrollIntoView(true);", img);
    await driver.sleep(500);
}

// Wait for images to actually load
await driver.sleep(3000);

await smartuiSnapshot(driver, "Lazy Loaded Images");
```

## Best Practices

<Tabs className='docs__val' groupId='best-practices'>
<TabItem value='choose-the-right-method' label='Choose the Right Method' default>

**Choose the Right Method**

- **Simple lazy loading**: Use `waitForTimeout` in configuration
- **Complex lazy loading**: Use programmatic scrolling
- **Known lazy elements**: Wait for specific elements

</TabItem>
<TabItem value='optimize-wait-times' label='Optimize Wait Times' >

**Optimize Wait Times**

- Start with shorter wait times and increase if needed
- Balance between thorough loading and test execution time
- Monitor test execution times to optimize

</TabItem>
<TabItem value='scroll-incrementally' label='Scroll Incrementally' >

**Scroll Incrementally**

- Use smaller scroll steps (200-500px) for better coverage
- Wait between scrolls to allow content to load
- Recalculate page height for infinite scroll scenarios

</TabItem>
<TabItem value='return-to-top' label='Return to Top' >

**Return to Top**

- Always scroll back to top after loading lazy content
- Ensures consistent baseline for comparison
- Prevents viewport-dependent differences

</TabItem>
<TabItem value='combine-methods' label='Combine Methods' >

**Combine Methods**

- Use `waitForTimeout` for initial page load
- Add programmatic scrolling for lazy content
- Wait for specific critical elements

</TabItem>
<TabItem value='combine-methods-1' label='Combine Methods' >

**Combine Methods**

- Use `waitForTimeout` for initial page load
- Add programmatic scrolling for lazy content
- Wait for specific critical elements

</TabItem>
</Tabs>

## Use Cases

### Use Case 1: Image Gallery with Lazy Loading

**Scenario**: Image gallery that loads images as user scrolls.

**Solution**: Scroll through the gallery to trigger all image loads before snapshot.

### Use Case 2: Infinite Scroll Feed

**Scenario**: Social media feed that loads more content on scroll.

**Solution**: Scroll to bottom, wait for new content, then scroll back to top.

### Use Case 3: Product Listing Page

**Scenario**: E-commerce page with products that load as you scroll.

**Solution**: Scroll through the page to load all product images and details.

## Troubleshooting

<Tabs className='docs__val' groupId='troubleshooting'>
<TabItem value='content-still-missing-after-scrolling' label='Content Still Missing After Scrolling' default>

**Issue: Content Still Missing After Scrolling**

**Solutions:**
1. Increase wait times between scrolls
2. Add explicit waits for lazy-loaded elements
3. Check if lazy loading uses intersection observer (may need different approach)

</TabItem>
<TabItem value='test-takes-too-long' label='Test Takes Too Long' >

**Issue: Test Takes Too Long**

**Solutions:**
1. Reduce scroll step size but increase scroll speed
2. Only scroll to areas that matter for your test
3. Use `waitForTimeout` instead of scrolling when possible

</TabItem>
<TabItem value='inconsistent-results' label='Inconsistent Results' >

**Issue: Inconsistent Results**

**Solutions:**
1. Ensure consistent scroll pattern
2. Always scroll back to top
3. Add sufficient wait times
4. Use fixed viewport sizes

</TabItem>
</Tabs>

## Additional Resources

- [Comprehensive Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide) - Solutions for lazy loading issues
- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options) - Configure `waitForTimeout` and other options
- [Handling Dynamic Data](/support/docs/smartui-handle-dynamic-data) - Handle other dynamic content types
- [Handling Videos](/support/docs/smartui-handle-videos) - Handle video content in tests
- [Handling Sticky Elements](/support/docs/smartui-handle-sticky-elements) - Handle sticky headers/footers
- [Project Settings](/support/docs/smartui-project-settings) - Configure comparison settings
