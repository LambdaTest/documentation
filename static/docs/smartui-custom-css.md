# Custom CSS Injection in SmartUI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

Custom CSS injection is a specialized feature in SmartUI that allows you to apply test-only styles during snapshot capture without modifying your application code. This feature enables you to stabilize visual tests by normalizing dynamic content, enforcing consistent styling across environments, and masking sensitive information, all while keeping your visual testing logic centralized and maintainable.

## Why Custom CSS Matters

1. **Stabilize Visual Diffs**: Hide or normalize volatile UI elements (ads, rotating banners, dynamic counters, time-based content) to reduce false positives in your visual regression tests.

2. **Environment Parity**: Enforce consistent fonts, themes, and spacing across different operating systems, browsers, and devices for predictable rendering and accurate comparisons.

3. **Non-Intrusive Testing**: Avoid modifying application code or injecting styles directly in test scripts. Keep all visual adjustments in a centralized configuration, making it easier to maintain and review.

4. **Enhanced Test Reliability**: Reduce test flakiness by masking dynamic elements that change between test runs, ensuring your visual tests focus on meaningful UI changes rather than transient content.

## Prerequisites

Before using the Custom CSS feature, ensure you meet the following requirements:

- Node.js v20.3+ (recommended)
- SmartUI CLI v4.1.40+. `customCSS` applies to snapshots taken with `smartui exec` and the SmartUI SDKs. The `smartui capture` command (static URL list) does not apply it; see [Hide elements with `smartui capture`](#hide-elements-with-smartui-capture)
- Valid PROJECT_TOKEN configured in your environment

## Custom CSS Configuration in SmartUI

SmartUI supports two methods for providing custom CSS: file path (recommended for maintainability) and embedded string (quick and portable). Choose the method that best fits your workflow.

## Method 1: File Path (Recommended)

The file path method is recommended for larger stylesheets and team collaboration. Create a separate CSS file in your project and reference it in your SmartUI configuration.

**Steps:**

1. Create a CSS file (e.g., `visual-test-styles.css` or `code.css`) in your project directory.

2. Add your CSS rules to the file:

```css
/* General samples: pick what suits your use case */

/* 1) Normalize fonts for consistent rendering */
body { font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; }

/* 2) Hide flaky, time-based banners or rotating promos */
.promo-banner, [data-testid="rotating-banner"] { display: none !important; }

/* 3) Freeze dynamic badges/counters that change every run */
[data-badge], .cart-count { visibility: hidden; }
```

3. Reference the file path in your SmartUI configuration:

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1440, 900]]
  },
  "enableJavaScript": true,
  "customCSS": "./visual-test-styles.css"
}
```

## Method 2: Embedded String

The embedded string method is useful for quick edits and single-use CSS rules. Provide the CSS directly as a JSON string value.

**Important Notes:**

- Keep CSS single-line to avoid JSON parsing issues
- Escape quotes properly (`'` or `\"`)
- Use `\n` for newlines if needed (though single-line is preferred)

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1440, 900]]
  },
  "enableJavaScript": true,
  "customCSS": "body{font-family:'Inter',sans-serif!important;} .banner,.ad{display:none!important;}"
}
```

## Configuration Guidelines

- **Placement**: The `customCSS` property must be placed at the top level of your configuration file (not inside the `web` object). Placing it inside `web` will result in a "must NOT have additional properties" error.

- **Path Resolution**: A relative path in the configuration file is resolved from the folder that contains that configuration file, not from where you run the command. If the file is missing, the CLI stops with `customCSS file not found: `.

- **CSS Specificity**: Your custom CSS will be injected at snapshot time. Use `!important` declarations if you need to override existing styles. If CSS is overridden by inline styles, increase selector specificity (e.g., `.target-class` → `#specific-id .target-class`).

- **Multi-line CSS**: For multi-line CSS, prefer the file path method to avoid JSON escaping complexity. If using embedded strings, keep rules compact and single-line.

- **Method Selection**: Choose the file path method for larger stylesheets and team collaboration. Use embedded strings only for quick, single-use CSS rules.

- **CSS Organization**: Keep your CSS snapshot-specific: target only elements that need stabilization or normalization. Avoid broad selectors that might affect unintended elements.

- **JSON Escaping**: When using embedded strings, escape quotes properly:
  - Use single quotes within CSS strings: `"body{font-family:'Inter',sans-serif;}"`
  - Or escape double quotes: `"body{font-family:\"Inter\",sans-serif;}"`

- **Selector Verification**: If the CSS Injection Report shows "no elements found" or "invalid selector" errors:
  - Verify the element exists at snapshot time (use browser dev tools)
  - Check selector specificity: it may need to be more specific or less specific
  - Consider timing issues: ensure the element is rendered before snapshot capture
  - Check the CSS Injection Report in logs for detailed feedback

- **CLI Version**: Ensure SmartUI CLI v4.1.40+ is installed. You can verify this by running `npx smartui --version`. Older versions may not support the `customCSS` feature.

- **Waiting for UI Readiness**: If you need to wait for UI elements to be ready before snapshots, add these options to your configuration:

```json
{
  "waitForTimeout": 2000,
  "waitForPageRender": 5000,
  "customCSS": "./visual-test-styles.css"
}
```

## Hide Cookie Banners, Pop-ups and Overlays

Cookie banners, consent managers, chat launchers and promo pop-ups are the most common reason a screenshot differs from its baseline. `customCSS` is the supported way to remove them from the screenshot.

### Why the banner appears even though your test closed it

With the SmartUI CLI and SDKs, SmartUI copies your page and renders the copy again in its cloud browsers. Your test's cookies and local storage are not carried over. A consent manager that decides whether to show itself when the page loads, for example with `enableJavaScript: true`, sees a new visitor and shows the banner again.

### Use `customCSS`, not `ignoreDOM`, to remove an element

`ignoreDOM` and `customCSS` solve different problems:

| Option | What it does | The element in the screenshot |
|--------|--------------|-------------------------------|
| `ignoreDOM` | Tells the comparison to skip the element's area | **Still visible.** The banner stays in the image; only differences inside its box are ignored |
| `customCSS` | Applies your CSS before the screenshot is taken | **Gone**, if your rule hides it, and the page reflows as if it were never there |

Use `ignoreDOM` when the element should stay in the picture but its content changes every run, such as a timestamp. Use `customCSS` when the element should not be in the picture at all.

### Example: hide a consent banner and a chat launcher

Add the selectors to your CSS file (or the embedded string) referenced by `customCSS` in `.smartui.json`:

```css
/* Consent managers: use the selectors from your own page */
#onetrust-banner-sdk, #onetrust-consent-sdk, #CybotCookiebotDialog, .cookie-banner { display: none !important; }

/* Overlays some consent tools add behind the banner */
.onetrust-pc-dark-filter, .modal-backdrop { display: none !important; }

/* Page scroll locked while the banner was open */
html, body { overflow: auto !important; }

/* Chat launchers and promo pop-ups */
#intercom-container, .drift-frame-controller, [data-testid="promo-modal"] { display: none !important; }
```

The selectors above are examples. Open your page in the browser's developer tools and copy the selector of the banner's outermost element. If a selector matches nothing when the snapshot is taken, the CLI reports `customCSS selector not found: ` for that snapshot, which usually means the selector is wrong or the element had not appeared yet.

### Apply CSS to a single snapshot

To hide an element in one snapshot only, pass `customCSS` in that snapshot's options. It replaces the configuration-level `customCSS` for that snapshot:

```javascript
await smartuiSnapshot(driver, 'Checkout', {
  customCSS: '#onetrust-banner-sdk { display: none !important; }'
});
```

The value can be CSS text or a path to a `.css` file, resolved from the folder you run the CLI in.

### Hide elements with `smartui capture`

The `smartui capture` command (static URL list) does not apply `customCSS`. Add a `beforeSnapshot` script to the URL entry instead, which adds the CSS to the page just before the screenshot:

```json
[
  {
    "name": "home",
    "url": "https://www.example.com",
    "execute": {
      "beforeSnapshot": "const s = document.createElement('style'); s.textContent = '#onetrust-banner-sdk { display: none !important; }'; document.head.appendChild(s);"
    }
  }
]
```

## Known Limitations

The Custom CSS feature has the following limitations:

- **Specificity Constraints**: Custom CSS can be overridden by higher-specificity inline styles. Increase your selector specificity or use `!important` declarations if needed.

- **Snapshot-Only Application**: CSS is only injected during snapshot capture and does not affect your application's runtime behavior.

- **File Path Resolution**: Paths in the configuration file are resolved from the configuration file's folder. Paths passed in a per-snapshot `customCSS` option are resolved from the folder you run the CLI in.
- **Not applied by `smartui capture`**: The static URL list command takes screenshots without injecting `customCSS`. Use an `execute.beforeSnapshot` script instead, as shown in [Hide elements with `smartui capture`](#hide-elements-with-smartui-capture).
- **Only `.css` files**: A file path must end in `.css`; any other extension is rejected.

## Use Cases for Custom CSS

The custom CSS feature is particularly valuable in the following scenarios:

```css
/* Hide elements that change between runs */
.ad, .banner, #cookie-consent { display: none !important; }

/* Replace volatile text with a constant */
[data-testid="rotating-copy"] { font-size: 0 !important; }
[data-testid="rotating-copy"]::after { content: "Stable text for snapshots"; }
```

```css
/* Force consistent light theme */
:root { color-scheme: light; }
body { font-family: "Inter", system-ui, sans-serif !important; color: #111827; background: #ffffff; }

/* Optional: Dark mode */
/* :root { color-scheme: dark; }
body { background: #0f172a !important; color: #e5e7eb !important; } */
```

```css
/* Center content and unify spacing (use carefully) */
#root, main, section { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; }
* { text-align: center !important; }
```

```css
/* Hide IPs, locations, or IDs */
#ip-value, #location-value { font-size: 0 !important; }
#ip-value::after { content: "0.0.0.0" !important; }
#location-value::after { content: "Unknown" !important; }
```

```css
/* Deliberately apply a very different theme */
body {
  font-family: "Century Gothic","URW Gothic","Apple Gothic",system-ui,Helvetica,Arial,sans-serif !important;
  background-image: linear-gradient(180deg,rgba(0,0,0,.55),rgba(0,0,0,.75)),
                    url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop');
  background-size: cover; background-attachment: fixed; background-position: center;
  color: #e6e6e6 !important;
}
```

```css
/* Disable transitions/animations */
*, *::before, *::after { transition: none !important; animation: none !important; }
```

```css
/* Override brand cues (colors, shadows, shapes) */
header, footer, nav { background: rgba(0,0,0,.45) !important; box-shadow: none !important; }
.btn, a { border-radius: 10px !important; border: 1px solid rgba(255,255,255,.25) !important; }
```

## Minimal Configuration Templates

### File Path Template

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1440, 900]]
  },
  "customCSS": "./path/to/visual-test-styles.css"
}
```

### Embedded String Template

```json
{
  "web": {
    "browsers": ["chrome"],
    "viewports": [[1440, 900]]
  },
  "customCSS": "body{font-family:'Inter',sans-serif!important;} .ad,.banner{display:none!important;}"
}
```

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli/)
- [SmartUI Configuration Options](/support/docs/smartui-cli/)
- [Visual Regression Testing Guide](/support/docs/smart-visual-testing/)
- [Layout Comparison Documentation](/support/docs/smartui-layout-testing/)
