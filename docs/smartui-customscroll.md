---
id: smartui-customscroll
title: CustomScroll Screenshots in SmartUI
sidebar_label: CustomScroll Screenshots
description: Learn how to use SmartUI CustomScroll screenshots to preserve page and element scroll positions for pages with nested scroll containers, PDF viewers, data grids, modals, and virtualized lists.
keywords:
  - smartui
  - customscroll
  - custom scroll
  - visual regression testing
  - scroll position
  - scrollable containers
  - pdf viewer screenshots
  - data grid screenshots
  - visual testing
url: https://www.testmu.ai/support/docs/smartui-customscroll/
site_name: TestMu AI
slug: smartui-customscroll/
canonical: https://www.testmu.ai/support/docs/smartui-customscroll/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "CustomScroll Screenshots in SmartUI",
          "item": `${BRAND_URL}/support/docs/smartui-customscroll/`
        }]
      })
    }}
></script>

# CustomScroll Screenshots in SmartUI

In <BrandName /> **SmartUI**, **CustomScroll screenshots** preserve the scroll position that exists when you take a snapshot. This helps SmartUI capture the exact visual state of pages that use nested scroll containers, PDF viewers, document viewers, virtualized lists, infinite-scroll pages, data grids, modals, drawers, and embedded scrollable components.

Use CustomScroll when the content you want to validate is not fully represented by the top-level page viewport. SmartUI records the active scroll state during snapshot capture, restores it before rendering the screenshot, and compares the resulting image against your baseline.

## Where CustomScroll helps

| Scenario | Recommended option | Why it helps |
|----------|--------------------|--------------|
| Main page, `body`, or `html` scrolls | `pageCustomScroll: true` | Captures the page-level scroll position before the screenshot is rendered. |
| Content is inside a PDF viewer, document viewer, data grid, modal, drawer, table, or scrollable `div` | `elementsCustomScroll: true` | Captures scroll positions for nested scrollable elements. |
| Both the page and an inner container can scroll | Enable both options | Preserves page-level and element-level scroll state together. |
| Static page with no scroll-dependent state | No CustomScroll option required | Standard snapshots are enough. |

## Supported options

CustomScroll is opt-in. Existing snapshots continue to behave the same unless you enable one or both options in the snapshot call.

| Option | Type | Default | Use case |
|--------|------|---------|----------|
| `pageCustomScroll` | Boolean | `false` | Use when the main page, `body`, or `html` document is the scroll container. |
| `elementsCustomScroll` | Boolean | `false` | Use when important content is inside a nested scrollable element. |

## Prerequisites

- SmartUI CLI version `4.1.71` or later.
- A SmartUI project token configured in your test environment.
- A page state where the target content is rendered before the snapshot is taken.

Install or update the SmartUI CLI in the repository where your tests run:

```bash
npm install @lambdatest/smartui-cli@latest
```

You can verify the installed version with:

```bash
npx smartui --version
```

## How CustomScroll works

CustomScroll works in two steps:

1. **Capture scroll state**: SmartUI records the active scroll position from the live browser session when the snapshot is triggered.
2. **Restore before screenshot**: SmartUI restores that scroll state during rendering, before the screenshot is captured.

This ensures the screenshot reflects the page or component state your test actually reached.

:::note
CustomScroll does not replace waits. For virtualized, lazy-loaded, or document-heavy pages, wait until the target page, row, or element is visible before taking the snapshot.
:::

## Java Selenium example

Use `pageCustomScroll` and `elementsCustomScroll` in the snapshot options when the page and nested content can both scroll.

```java
Map<String, Object> options = new HashMap<>();
options.put("pageCustomScroll", true);
options.put("elementsCustomScroll", true);

SmartUISnapshot.smartuiSnapshot(driver, "PDF-Viewer-Page-25", options);
```

## Playwright example

Use `elementsCustomScroll` for document viewers, data grids, and other nested scrollable containers.

```javascript
await page.goto('https://vault.example.com/ui/#doc_info/2/0/1?anQS=page25');

await page.waitForSelector('.pageContent-scrollbar-content');
await page.waitForTimeout(1500);

await smartuiSnapshot(page, 'Vault-PDF-Page-25', {
  elementsCustomScroll: true,
  pageCustomScroll: false,
});
```

In this example:

- The test navigates to a specific document page.
- The viewer is allowed to render the target content.
- SmartUI captures the scroll position inside the document viewer.
- The screenshot reflects the intended document state.

## Enable CustomScroll only where needed

You can keep standard screenshots unchanged and enable CustomScroll only for scroll-dependent states.

```javascript
await smartuiSnapshot(page, 'Header');

await smartuiSnapshot(page, 'Doc-Viewer-Page-25', {
  pageCustomScroll: true,
  elementsCustomScroll: true,
});

await smartuiSnapshot(page, 'Footer');
```

## Recommended use cases

### PDF and document viewers

Use CustomScroll when you need to capture a specific page or section inside a document viewer.

Best for:

- PDF viewers
- Veeva Vault-style viewers
- Contract viewers
- Compliance documents
- Reports
- Multi-page documents

Recommended option:

```javascript
{
  elementsCustomScroll: true
}
```

Use both options if the page and viewer can both scroll:

```javascript
{
  pageCustomScroll: true,
  elementsCustomScroll: true
}
```

### Virtualized tables and data grids

Use CustomScroll when validating rows, columns, sticky headers, or mid-table states inside a scrollable grid.

Best for:

- MUI DataGrid
- React Virtualized
- React Window
- Enterprise data tables
- Admin dashboards
- Large reports

Recommended option:

```javascript
{
  elementsCustomScroll: true
}
```

### Modals, drawers, and side panels

Use CustomScroll when important content is inside a modal, drawer, side panel, or embedded workflow.

Best for:

- Settings modals
- Audit log drawers
- User detail panels
- Configuration sidebars
- Long forms

Recommended option:

```javascript
{
  elementsCustomScroll: true
}
```

## Best practices

- **Use CustomScroll only where needed**: Keep simple static screenshots unchanged and enable CustomScroll for scroll-dependent snapshots.
- **Wait for the UI to settle**: Wait for the target selector, row, document page, or modal content before taking the snapshot.
- **Use stable snapshot names**: Name snapshots based on the state being captured, such as `Vault-PDF-Page-25`, `DataGrid-Midpoint`, or `AuditLog-Drawer-Expanded`.
- **Match browser and viewport configuration**: Use the same browser and viewport setup you expect for baseline comparison.
- **Enable both options for complex pages**: If both the main page and an inner container can scroll, enable `pageCustomScroll` and `elementsCustomScroll` together.

## Troubleshooting

### The screenshot does not show the expected scrolled content

- Confirm the target content is visible before calling `smartuiSnapshot`.
- Add a wait for the scrollable selector or target row/page.
- Use `elementsCustomScroll: true` for nested scrollable containers.
- Use `pageCustomScroll: true` if the main page itself is scrolled.

### The PDF viewer or grid still captures the wrong state

- Ensure the viewer has finished rendering after navigation or scrolling.
- Wait for a stable selector inside the viewer or grid.
- Use both CustomScroll options if the page and the viewer both scroll.

### Do I need CustomScroll for every snapshot?

No. CustomScroll is opt-in. Use it only for snapshots where scroll position affects the visual state.

### Does CustomScroll work with virtualized lists?

Yes. CustomScroll helps preserve the visible scroll state, but your test should still wait until the virtualized content has rendered before taking the snapshot.

## Related documentation

- [SmartUI Configuration Options](/support/docs/smartui-sdk-config-options/)
- [SmartUI CLI Documentation](/support/docs/smartui-cli/)
- [Handle Lazy Loading](/support/docs/smartui-handle-lazy-loading/)
- [Handle Sticky Elements](/support/docs/smartui-handle-sticky-elements/)
- [Custom CSS Injection in SmartUI](/support/docs/smartui-custom-css/)
- [PDF Comparison in SmartUI](/support/docs/smartui-pdf-comparison/)

---

<nav aria-label='breadcrumbs'>
  <ul className='breadcrumbs'>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className='breadcrumbs__item'>
      <a className='breadcrumbs__link' target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className='breadcrumbs__item breadcrumbs__item--active'>
      <span className='breadcrumbs__link'>CustomScroll Screenshots</span>
    </li>
  </ul>
</nav>
