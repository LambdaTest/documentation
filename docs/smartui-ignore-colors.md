---
id: smartui-ignore-colors
title: Ignore Color-Only Changes in a Region (ignoreColors)
sidebar_label: Ignore Colors
description: Mark regions where SmartUI ignores color-only changes during comparison while structural changes still flag, via the SDK and Lambda Hooks with the Smart Ignore strategy.
keywords:
  - smartui ignoreColors
  - ignore color changes visual testing
  - smartui smart ignore colors
  - theme change visual regression
  - smartui ignore colors region
  - visual testing brand color rotation
url: https://www.testmuai.com/support/docs/smartui-ignore-colors/
site_name: TestMu AI
slug: smartui-ignore-colors/
canonical: https://www.testmuai.com/support/docs/smartui-ignore-colors/
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
          "name": "Ignore Color-Only Changes in a Region (ignoreColors)",
          "item": `${BRAND_URL}/support/docs/smartui-ignore-colors/`
        }]
      })
    }}
></script>

# Ignore Color-Only Changes in a Region (ignoreColors)

`ignoreColors` marks regions where **color-only changes are ignored** during comparison, while **structural changes still flag**. It is the programmatic counterpart of the dashboard's **Ignore colors** box, available through both the SDK and the Lambda Hooks runtime.

Teams that ship frequent theme swaps, brand-color rotations, or seasonal palettes usually face a bad trade-off: either every restyle floods the build with visual diffs that reviewers approve blindly, or the whole region gets ignored and real regressions slip through. `ignoreColors` removes that trade-off. The region stays under test for layout, text, and element changes, and only the recolor noise disappears. Reviews stay small, baselines stay meaningful, and a broken layout inside a restyled banner still fails the build.

:::warning Important
Works only with the **Smart Ignore** comparison strategy. `ignoreColors` regions are honored by the smart-ignore engine. On the pixel-by-pixel comparison path they are dropped. Set your project or build comparison to Smart Ignore for these regions to take effect. See [Smart Ignore](/support/docs/smartui-smartignore/).
:::

## What it does

Inside an `ignoreColors` region:

- A **color-only change** (theme swap, brand-color rotation, seasonal palette) is **ignored**.
- A **structural change** (text, layout, element added or removed) is **still flagged**.

Outside the region, everything is compared as usual. It composes with `ignoreDOM` and `selectDOM`. For example, you can select a region for comparison and ignore colors inside another.

## SDK

Pass `ignoreColors` in the snapshot options. All selector types are supported, along with coordinate rectangles and a whole-image switch.

```javascript
await smartuiSnapshot(driver, "Home Page", {
  ignoreColors: {
    id:            ["price-banner"],
    class:         ["seasonal-theme"],
    cssSelector:   ["#hero .cta"],
    xpath:         ["//div[@data-testid='promo']"],
    coordinates:   ["200,350,100,400"],   // top,bottom,left,right
    entireScreenshot: true                // ignore colors across the whole image
  }
});
```

## Lambda Hooks

### Selenium

The hooks path additionally accepts a located `webElement` (or an array of them).

```javascript
const el = await driver.findElement(By.id("price-banner"));

await driver.executeScript("smartui.takeScreenshot", {
  screenshotName: "checkout-page",
  ignoreColors: {
    id:            ["price-banner"],
    class:         ["seasonal-theme"],
    cssSelector:   ["#nav .logo"],
    xpath:         ["//div[@data-testid='promo']"],
    coordinates:   ["100,200,400,350"],   // left,top,right,bottom
    webElement:    el,                    // a located element, or an array of them
    entireScreenshot: true                // ignore colors across the whole image
  }
});
```

### Playwright / Puppeteer

```javascript
await page.evaluate(`lambdatest_action: ${JSON.stringify({
  action: "smartui.takeScreenshot",
  arguments: {
    screenshotName: "checkout-page",
    ignoreColors: {
      id:          ["price-banner"],
      class:       ["seasonal-theme"],
      cssSelector: ["#nav .logo"],
      xpath:       ["//div[@data-testid='promo']"],
      entireScreenshot: true              // ignore colors across the whole image
    }
  }
})}`);
```

:::note
`coordinates` and `webElement` are not available on the Playwright / Puppeteer path.
:::

## Notes

- **Smart Ignore only.** Regions have no effect on the pixel-comparison path.
- **`entireScreenshot: true`** covers the entire captured image (stitched full page, viewport, or element crop). It is additive. Combine it with selectors, or use it alone.
- **Coordinate order differs by path.** SDK: `top,bottom,left,right`. Hooks: `left,top,right,bottom`. Each entry is a comma-joined string of four numbers.
- **Composes with `selectDOM` / `ignoreDOM`.** Both apply. If a region is in both `ignoreDOM` and `ignoreColors`, full ignore wins: the whole region is masked, not just its colors.
- **Missing selectors do not fail the snapshot.** They are reported back via `domElementsMissing` and skipped, and the rest of the snapshot proceeds normally.

## Related Docs

- [Smart Ignore](/support/docs/smartui-smartignore/)
- [Region Ignore + Select on Web Hooks](/support/docs/smartui-hooks-region-ignore/)
- [Handling Dynamic Data with DOM Configuration and Options](/support/docs/html-dom-smartui-options/)
- [Selenium Visual Regression](/support/docs/selenium-visual-regression/)
