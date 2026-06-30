---
id: smartui-hooks-region-ignore
title: Ignore and Select Regions on SmartUI Web Hooks (Coordinates and WebElement)
sidebar_label: Region Ignore + Select
description: Define ignore and select regions on the SmartUI Web Hooks path using pixel coordinates or a live Selenium WebElement, in addition to DOM selectors, with ignoreDOM and selectDOM.
keywords:
  - smartui ignoreDOM
  - smartui selectDOM
  - ignore region coordinates
  - ignore region webelement
  - smartui web hooks region ignore
  - visual regression ignore area
url: https://www.testmuai.com/support/docs/smartui-hooks-region-ignore/
site_name: TestMu AI
slug: smartui-hooks-region-ignore/
canonical: https://www.testmuai.com/support/docs/smartui-hooks-region-ignore/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
          "name": "Ignore and Select Regions on SmartUI Web Hooks (Coordinates and WebElement)",
          "item": `${BRAND_URL}/support/docs/smartui-hooks-region-ignore/`
        }]
      })
    }}
></script>

# Ignore and Select Regions on SmartUI Web Hooks

On the **Web Hooks** path (Selenium with `driver.executeScript("smartui.takeScreenshot", config)`), you can define an ignore or select region in three ways: a **DOM selector**, raw **pixel coordinates**, or a live Selenium **`WebElement`**. Coordinates and `WebElement` regions work the same way as selectors and need no extra setup.

Both `ignoreDOM` and `selectDOM` support all three input modes:

- **`ignoreDOM`** excludes the given region(s) from comparison.
- **`selectDOM`** restricts the comparison to only the given region(s).

This gives the Web Hooks path the same region controls already available on RD Hooks and the CLI SDK, so you can express dynamic areas the way that best fits your test — for example, ignoring an element you already hold a handle to, or a fixed rectangle on the page.

## 1. Ignore a region by coordinates

Pass a `coordinates` entry (a list of `"x1,y1,x2,y2"` strings) under `ignoreDOM`. SmartUI excludes those rectangles from the comparison. The four values are the left, top, right, and bottom edges of the rectangle in pixels.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
import java.util.HashMap;
import java.util.Map;
import org.openqa.selenium.JavascriptExecutor;

// x1,y1,x2,y2 -> left, top, right, bottom (pixels)
HashMap<String, String[]> ignoreByCoord = new HashMap<>();
ignoreByCoord.put("coordinates", new String[]{"847,185,1571,734"});

Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "home");
config.put("ignoreDOM", ignoreByCoord);

((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", config);
// the 847,185 -> 1571,734 rectangle is excluded from the comparison
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
await driver.executeScript('smartui.takeScreenshot', {
  screenshotName: 'home',
  ignoreDOM: {
    coordinates: ['847,185,1571,734'], // left, top, right, bottom
  },
});
```

</TabItem>
<TabItem value="python" label="Python">

```python
driver.execute_script("smartui.takeScreenshot", {
    "screenshotName": "home",
    "ignoreDOM": {
        "coordinates": ["847,185,1571,734"],  # left, top, right, bottom
    },
})
```

</TabItem>
</Tabs>

:::note
The origin the coordinates are measured from depends on `fullPage` — viewport-relative for a normal shot, full stitched-page-relative for a full-page shot. See [Coordinate space](#4-coordinate-space-viewport-vs-full-page).
:::

## 2. Ignore a region by WebElement

Pass a live Selenium `WebElement` under a `webElement` key. SmartUI resolves the element to its on-page rectangle and ignores it. This is handy for dynamic elements you already have a handle to in your test.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

WebElement el = driver.findElement(By.id("dynamic-banner"));

HashMap<String, Object> ignoreByElement = new HashMap<>();
ignoreByElement.put("webElement", el);

Map<String, Object> config = new HashMap<>();
config.put("screenshotName", "home");
config.put("ignoreDOM", ignoreByElement);

((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", config);
// the element's current bounding box is excluded from the comparison
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
const el = await driver.findElement(By.id('dynamic-banner'));

await driver.executeScript('smartui.takeScreenshot', {
  screenshotName: 'home',
  ignoreDOM: { webElement: el },
});
```

</TabItem>
<TabItem value="python" label="Python">

```python
el = driver.find_element(By.ID, "dynamic-banner")

driver.execute_script("smartui.takeScreenshot", {
    "screenshotName": "home",
    "ignoreDOM": {"webElement": el},
})
```

</TabItem>
</Tabs>

## 3. Select a region instead of ignoring it (`selectDOM`)

Everything above works identically for `selectDOM`. Where `ignoreDOM` excludes a region, `selectDOM` restricts the comparison to only the given region(s). Both `coordinates` and `webElement` are supported.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
// compare ONLY this rectangle
HashMap<String, String[]> selectByCoord = new HashMap<>();
selectByCoord.put("coordinates", new String[]{"0,0,1280,200"});
config.put("selectDOM", selectByCoord);

// ...or compare only this element's box
HashMap<String, Object> selectByElement = new HashMap<>();
selectByElement.put("webElement", driver.findElement(By.id("price-table")));
config.put("selectDOM", selectByElement);
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
// compare ONLY this rectangle
config.selectDOM = { coordinates: ['0,0,1280,200'] };

// ...or compare only this element's box
config.selectDOM = { webElement: await driver.findElement(By.id('price-table')) };
```

</TabItem>
<TabItem value="python" label="Python">

```python
# compare ONLY this rectangle
config["selectDOM"] = {"coordinates": ["0,0,1280,200"]}

# ...or compare only this element's box
config["selectDOM"] = {"webElement": driver.find_element(By.ID, "price-table")}
```

</TabItem>
</Tabs>

## 4. Coordinate space — viewport vs full page

Coordinates are interpreted as absolute pixel coordinates **in the space of the produced screenshot image**. The origin depends on the `fullPage` option of the screenshot:

| `fullPage` | Captured image | Coordinate origin `(0,0)` |
|------------|----------------|----------------------------|
| `false` (default) | Viewport / element shot | Top-left of the captured **viewport**; `y` within the visible area. |
| `true` | Stitched full-page shot | Top-left of the **full stitched page**; `y` increases down the entire scrollable page. |

So for a full-page screenshot, supply coordinates relative to the whole page (a region below the fold has a large `top` / `bottom`), not relative to the current viewport. `webElement` regions need no such consideration — the element is resolved live, so it lands correctly in either mode.

## 5. Combine selectors, coordinates, and WebElements

Within a single `ignoreDOM` (or `selectDOM`) the three input modes are **additive** — all resolved regions are combined.

<Tabs className="docs__val" groupId="language">
<TabItem value="java" label="Java" default>

```java
WebElement el = driver.findElement(By.id("dynamic-banner"));

Map<String, Object> ignore = new HashMap<>();
ignore.put("cssSelector", new String[]{".promo"});          // selector
ignore.put("coordinates", new String[]{"847,185,1571,734"}); // coordinates
ignore.put("webElement", el);                                // WebElement

config.put("ignoreDOM", ignore);
((JavascriptExecutor) driver).executeScript("smartui.takeScreenshot", config);
// all three regions are ignored
```

</TabItem>
<TabItem value="nodejs" label="NodeJS">

```javascript
const el = await driver.findElement(By.id('dynamic-banner'));

config.ignoreDOM = {
  cssSelector: ['.promo'],         // selector
  coordinates: ['847,185,1571,734'], // coordinates
  webElement: el,                  // WebElement
};
// all three regions are ignored
```

</TabItem>
<TabItem value="python" label="Python">

```python
el = driver.find_element(By.ID, "dynamic-banner")

config["ignoreDOM"] = {
    "cssSelector": [".promo"],          # selector
    "coordinates": ["847,185,1571,734"],  # coordinates
    "webElement": el,                   # WebElement
}
# all three regions are ignored
```

</TabItem>
</Tabs>

## Behaviour summary

| Input mode | How you pass it (under `ignoreDOM` / `selectDOM`) | Resolved against | Result |
|------------|---------------------------------------------------|------------------|--------|
| Selector | `id` / `class` / `xpath` / `cssSelector` | Live DOM (`getBoundingClientRect()`) | Region of the matched element(s). |
| Coordinate | `coordinates: ["x1,y1,x2,y2"]` | The produced-image space (viewport or full page) | Exactly the supplied rectangle. |
| WebElement | `webElement: <WebElement>` | Live element, resolved server-side | The element's current bounding box. |

## Validation and errors

Coordinates are validated at two levels:

| Level | Checks | On failure |
|-------|--------|------------|
| Format | Exactly four numeric components, all non-negative, `top < bottom`, `left < right`. | The `smartui.takeScreenshot` call returns a clear error and the screenshot is not taken. |
| Page bounds | The rectangle lies inside the rendered page / viewport. | An out-of-page rectangle is dropped with a warning; it simply produces no ignore/select box. |

`WebElement` regions are not coordinate-validated; if the element cannot be resolved it yields no box.

## Notes

- **Scope:** this applies to the Web Hooks path (Selenium `executeScript("smartui.takeScreenshot", ...)`). RD Hooks and the CLI SDK already support these inputs.
- **Empty or mixed configs:** a config containing only `coordinates` or only `webElement` (no selector) is honoured — it is not treated as "no DOM region." Selector, coordinate, and `WebElement` in one `ignoreDOM` are additive.
- **Identical to selector-based ignore:** coordinate and `WebElement` regions resolve to the same kind of ignored/selected box as selectors, so the comparison result matches an equivalent selector-based ignore.

## Related Docs

- [SmartUI Hooks: Layout, Full-Page Screenshots, and Smart Ignore](/support/docs/smartui-hooks-layout-fullpage-smartignore/)
- [Set SmartUI Comparison Modes at the Session Level](/support/docs/smartui-comparison-capabilities/)
- [Take a Screenshot of a Specific Element (SmartUI Hooks)](/support/docs/smartui-hooks-element-screenshot/)
- [Handling Dynamic Data with DOM Configuration and Options](/support/docs/html-dom-smartui-options/)
- [Selenium Visual Regression](/support/docs/selenium-visual-regression/)