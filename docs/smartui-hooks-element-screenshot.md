---
id: smartui-hooks-element-screenshot
title: Take a Screenshot of a Specific Element on a Webpage (SmartUI Hooks)
sidebar_label: Element Screenshot
description: Capture a visual baseline for a specific element on a webpage using SmartUI Hooks on LambdaTest.
keywords:
  - smartui hooks
  - element screenshot
  - smartui element capture
  - visual baseline
  - smartui takeScreenshot
url: https://www.testmuai.com/support/docs/smartui-hooks-element-screenshot/
site_name: TestMu AI
slug: smartui-hooks-element-screenshot/
canonical: https://www.testmuai.com/support/docs/smartui-hooks-element-screenshot/
---

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
          "name": "Take a Screenshot of a Specific Element on a Webpage (SmartUI Hooks)",
          "item": `${BRAND_URL}/support/docs/smartui-hooks-element-screenshot/`
        }]
      })
    }}
></script>

# Take a Screenshot of a Specific Element on a Webpage (SmartUI Hooks)

Use this guide when you run automated web tests on LambdaTest and want SmartUI to capture a visual baseline for a specific part of the page, such as a component, card, table, or section, instead of the full browser window.

## Before You Start

Make sure you have:

- A LambdaTest account with Web Automation access, such as Selenium on the LambdaTest Grid.
- SmartUI enabled for the session. Your SmartUI project and build must be configured on the test session.
- A locator for the target element, such as a CSS selector, XPath, or HTML `id`. You can also pass an already-resolved element handle, see [Capture by Resolved Element Handle](#capture-by-resolved-element-handle-webelement).

:::note
Do not store usernames or access keys in your source repository. Use environment variables or your CI secret manager instead.
:::

## Step 1: Open the Page in Your Test

In your test script, navigate to the target URL and wait until the UI is fully loaded.

Use explicit waits where possible so the element is present and stable before capture.

## Step 2: Scroll the Element Into View

Before taking the screenshot, scroll the target element into the visible area of the page.

This helps ensure the correct region is ready for capture. Use your framework's normal scrolling method, such as JavaScript `scrollIntoView()` or your Selenium helper.

## Step 3: Call the SmartUI Element Screenshot Hook

Run a JavaScript string in the browser context, for example using Selenium `executeScript()`.

Call the hook with your screenshot options:

```js
smartui.takeScreenshot({
  screenshotName: "Checkout_Summary_Block",
  elementType: "css_selector",
  element: "section.checkout-summary",
  fullPage: false
});
```

Include at least these fields:

| Field | Purpose |
|---|---|
| `screenshotName` | Stable name for the screenshot in SmartUI. Used for baselines and comparisons. |
| `elementType` | Locator type. Supported values: `css_selector`, `xpath`, `id`, `class`, `webElement` |
| `element` | Locator value for the target element. When `elementType` is `webElement`, this is a resolved element handle instead of a locator string. See [Capture by Resolved Element Handle](#capture-by-resolved-element-handle-webelement). |
| `fullPage` | Set to `false` to capture only the target element |

Update `elementType` and `element` to match the locator used in your test.

## Step 4: Repeat for Other Components

If you want to capture more than one component, call the hook again with a different `screenshotName` for each one.

Keep screenshot names stable across runs so SmartUI compares against the correct baseline.

## Capture by Resolved Element Handle (webElement)

The locator-based flow above re-resolves your selector at the moment the screenshot runs. On pages where the DOM is rewritten after you locate the element, for example a workspace that rebuilds its layout every time a new tab is added, the selector can go stale before capture and the element screenshot fails.

To avoid this, set `elementType` to `webElement` and pass an already-resolved element reference as `element`. SmartUI uses that live handle directly and skips locator re-resolution, so the capture stays reliable even when the surrounding DOM changes after the element was located.

:::note
When `elementType` is `webElement`, you pass a real element object, not a string. Call the hook with the command name and a config object as two separate arguments so your automation framework serializes the element handle correctly. Do not use the `smartui.takeScreenshot,<JSON>` string form for `webElement`, because a serialized string cannot carry a live element reference.
:::

First resolve the element in your test, then pass it to the hook:

```javascript
const el = await driver.findElement(By.className('hero-heading'));

const config = {
  screenshotName: 'region-screenshot',
  elementType: 'webElement',
  element: el
};

await driver.executeScript('smartui.takeScreenshot', config);
```

| Field | Purpose |
|---|---|
| `screenshotName` | Stable name for the captured screenshot in SmartUI. |
| `elementType` | Set to `webElement` to pass a resolved element handle instead of a locator. |
| `element` | The resolved element reference to scope the capture to, for example the return value of `driver.findElement(...)`. |

:::tip
Use `webElement` when the element is present and stable when you locate it, but the page mutates the DOM before the screenshot runs. If your locator stays valid through capture, the locator-based flow in Step 3 is simpler.
:::

## Optional: Capture Many Elements Automatically

If you want to capture many elements from the same page, SmartUI does not provide a single built-in hook that automatically splits the whole page into separate element screenshots.

Instead, you can use a test-side workflow:

1. Collect visible elements in the page with JavaScript.
2. Generate a locator for each element, such as XPath.
3. Loop through that list in your test.
4. Call `smartui.takeScreenshot` once per element.

This is useful when you want to build a component inventory for a page without manually adding every selector one by one.

### Recommended Guardrails

- Limit the total number of elements you capture in one run.
- Skip hidden or very small elements.
- Prefer targeting a specific container like `main`, `.product-grid`, or `[data-testid='app-root']` instead of the entire DOM.
- Keep screenshot names deterministic so repeated runs stay comparable.

### Example Pattern

The following example collects visible elements, builds XPath locators, and returns metadata for the first `N` matches:

```javascript
const elements = await driver.executeScript(`
  function getPath(el) {
    if (!el || el.nodeType !== 1) return '';
    if (el.id) return '//*[@id="' + el.id.replace(/"/g, '\\\\"') + '"]';
    if (el === document.body) return '/html/body';
    let ix = 0;
    const siblings = el.parentNode ? el.parentNode.children : [];
    for (let i = 0; i < siblings.length; i++) {
      if (siblings[i] === el) {
        return getPath(el.parentNode) + '/' + el.tagName.toLowerCase() + '[' + (ix + 1) + ']';
      }
      if (siblings[i].tagName === el.tagName) ix++;
    }
    return '';
  }

  const out = [];
  const nodes = Array.from(document.querySelectorAll('body *'));
  const max = arguments[0];

  for (let i = 0; i < nodes.length && out.length < max; i++) {
    const n = nodes[i];
    const r = n.getBoundingClientRect();
    const st = window.getComputedStyle(n);

    if (r.width < 8 || r.height < 8) continue;
    if (st.display === 'none' || st.visibility === 'hidden' || st.opacity === '0') continue;

    const xp = getPath(n);
    if (!xp) continue;

    out.push({
      xpath: xp,
      tag: n.tagName.toLowerCase(),
      id: n.id || '',
      cls: (n.className && String(n.className).split) ? String(n.className).split(/\\s+/)[0] : '',
      idx: i
    });
  }

  return out;
`, 25);
```

Then loop through the collected elements and upload one SmartUI element screenshot for each:

```javascript
for (const item of elements) {
  const label = item.id
    ? `${item.tag}_id_${item.id}`
    : item.cls
      ? `${item.tag}_class_${item.cls}`
      : `${item.tag}_idx_${item.idx}`;

  const screenshotName = `element_${label}`.replace(/[^a-zA-Z0-9_-]+/g, '_').slice(0, 80);

  await driver.executeScript(
    `smartui.takeScreenshot(${JSON.stringify({
      screenshotName,
      elementType: 'xpath',
      element: item.xpath,
      fullPage: false
    })})`
  );
}
```

### Best Use Cases

- Capture all visible cards in a product grid.
- Capture all buttons or interactive controls on a page.
- Build a one-time baseline set for important components in a dashboard or design system page.

### When to Avoid This

- Very large pages with hundreds of nodes.
- Pages with highly dynamic content that changes on every load.
- Pages where stable component locators already exist and are easier to maintain manually.

## Step 5: Find the Screenshot in SmartUI

1. Open SmartUI from your LambdaTest account.
2. Select the project and build that match your test run.
3. Locate the screenshot using the `screenshotName`.

## Tips

- **Use unique locators:** Your selector should match only one main element. If it matches multiple nodes, the capture may be inconsistent.
- **Handle dynamic content carefully:** If the element contains content that changes every run, such as timers or ads, consider using ignore regions or layout comparison options if available in your SmartUI project.
- **Watch for large elements:** If the captured image appears cut off for a very tall or wide component, contact LambdaTest support with the session ID and `screenshotName`.

## Quick Reference

| Locator Type | `elementType` | Example `element` Value |
|---|---|---|
| CSS selector | `css_selector` | `main article:first-of-type` |
| XPath | `xpath` | `//div[@data-testid='invoice-panel']` |
| HTML `id` | `id` | `sidebar` |
| Resolved element handle | `webElement` | `await driver.findElement(By.className('hero-heading'))` |

## Related Docs

- [Selenium Hooks](/support/docs/selenium-visual-regression/)
- [Hooks Layout + Full Page](/support/docs/smartui-hooks-layout-fullpage-smartignore/)
- [Handle Dynamic Data](/support/docs/smartui-handle-dynamic-data/)
- [SmartUI Troubleshooting Guide](/support/docs/smartui-troubleshooting-guide/)
