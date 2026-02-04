---
id: smartui-custom-css
title: Custom CSS Injection in SmartUI
sidebar_label: Custom CSS
description: Learn how to use SmartUI's customCSS feature to inject test-only CSS styles during snapshots without modifying your application code
keywords:
  - custom css
  - visual regression testing
  - css injection
  - smartui cli
  - visual testing
  - test-only css
  - css configuration
  - visual stability
url: https://www.testmuai.com/support/docs/smartui-custom-css/
site_name: LambdaTest
slug: smartui-custom-css/
canonical: https://www.testmu.ai/support/docs/smartui-custom-css/

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
          "name": "customCSS",
          "item": `${BRAND_URL}/support/docs/smartui-custom-css/`
        }]
      })
    }}
></script>

---

Custom CSS injection is a specialized feature in SmartUI that allows you to apply test-only styles during snapshot capture without modifying your application code. This feature enables you to stabilize visual tests by normalizing dynamic content, enforcing consistent styling across environments, and masking sensitive information—all while keeping your visual testing logic centralized and maintainable.

### Why Custom CSS Matters

1. **Stabilize Visual Diffs**: Hide or normalize volatile UI elements (ads, rotating banners, dynamic counters, time-based content) to reduce false positives in your visual regression tests.

2. **Environment Parity**: Enforce consistent fonts, themes, and spacing across different operating systems, browsers, and devices for predictable rendering and accurate comparisons.

3. **Non-Intrusive Testing**: Avoid modifying application code or injecting styles directly in test scripts. Keep all visual adjustments in a centralized configuration, making it easier to maintain and review.

4. **Enhanced Test Reliability**: Reduce test flakiness by masking dynamic elements that change between test runs, ensuring your visual tests focus on meaningful UI changes rather than transient content.

## Prerequisites

Before using the Custom CSS feature, ensure you meet the following requirements:

- Node.js v20.3+ (recommended)
- SmartUI CLI v4.1.40+ (supports both `exec` and `capture` commands)
- Valid PROJECT_TOKEN configured in your environment

---

# Custom CSS Configuration in SmartUI

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

- **Path Resolution**: File paths are relative to your project root directory. Ensure the CSS file exists at the specified path. Files outside the project directory may not be accessible.

- **CSS Specificity**: Your custom CSS will be injected at snapshot time. Use `!important` declarations if you need to override existing styles. If CSS is overridden by inline styles, increase selector specificity (e.g., `.target-class` → `#specific-id .target-class`).

- **Multi-line CSS**: For multi-line CSS, prefer the file path method to avoid JSON escaping complexity. If using embedded strings, keep rules compact and single-line.

- **Method Selection**: Choose the file path method for larger stylesheets and team collaboration. Use embedded strings only for quick, single-use CSS rules.

- **CSS Organization**: Keep your CSS snapshot-specific—target only elements that need stabilization or normalization. Avoid broad selectors that might affect unintended elements.

- **JSON Escaping**: When using embedded strings, escape quotes properly:
  - Use single quotes within CSS strings: `"body{font-family:'Inter',sans-serif;}"`
  - Or escape double quotes: `"body{font-family:\"Inter\",sans-serif;}"`

- **Selector Verification**: If the CSS Injection Report shows "no elements found" or "invalid selector" errors:
  - Verify the element exists at snapshot time (use browser dev tools)
  - Check selector specificity—it may need to be more specific or less specific
  - Consider timing issues—ensure the element is rendered before snapshot capture
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

---

## Known Limitations

The Custom CSS feature has the following limitations:

- **Specificity Constraints**: Custom CSS can be overridden by higher-specificity inline styles. Increase your selector specificity or use `!important` declarations if needed.

- **Snapshot-Only Application**: CSS is only injected during snapshot capture and does not affect your application's runtime behavior.

- **File Path Resolution**: Ensure CSS file paths are correctly specified relative to your project root. Files outside the project directory may not be accessible.

---

## Use Cases for Custom CSS

The custom CSS feature is particularly valuable in the following scenarios:

<Tabs>
  <TabItem value='stabilize' label='Stabilize Dynamic UI' default>

```css
/* Hide elements that change between runs */
.ad, .banner, #cookie-consent { display: none !important; }

/* Replace volatile text with a constant */
[data-testid="rotating-copy"] { font-size: 0 !important; }
[data-testid="rotating-copy"]::after { content: "Stable text for snapshots"; }
```

  </TabItem>
  <TabItem value='typography' label='Normalize Typography/Theme'>

```css
/* Force consistent light theme */
:root { color-scheme: light; }
body { font-family: "Inter", system-ui, sans-serif !important; color: #111827; background: #ffffff; }

/* Optional: Dark mode */
/* :root { color-scheme: dark; }
body { background: #0f172a !important; color: #e5e7eb !important; } */
```

  </TabItem>
  <TabItem value='layout' label='Layout Harmonization'>

```css
/* Center content and unify spacing (use carefully) */
#root, main, section { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; }
* { text-align: center !important; }
```

  </TabItem>
  <TabItem value='pii' label='Mask PII/Identifiers'>

```css
/* Hide IPs, locations, or IDs */
#ip-value, #location-value { font-size: 0 !important; }
#ip-value::after { content: "0.0.0.0" !important; }
#location-value::after { content: "Unknown" !important; }
```

  </TabItem>
  <TabItem value='stress' label='Visual Stress Testing'>

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

  </TabItem>
  <TabItem value='flakiness' label='Reduce Flakiness'>

```css
/* Disable transitions/animations */
*, *::before, *::after { transition: none !important; animation: none !important; }
```

  </TabItem>
  <TabItem value='brand' label='Mask Brand Cues'>

```css
/* Override brand cues (colors, shadows, shapes) */
header, footer, nav { background: rgba(0,0,0,.45) !important; box-shadow: none !important; }
.btn, a { border-radius: 10px !important; border: 1px solid rgba(255,255,255,.25) !important; }
```

  </TabItem>
</Tabs>

---

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

---

## Additional Resources

- [SmartUI CLI Documentation](/support/docs/smartui-cli/)
- [SmartUI Configuration Options](/support/docs/smartui-cli/)
- [Visual Regression Testing Guide](/support/docs/smart-visual-testing/)
- [Layout Comparison Documentation](/support/docs/smartui-layout-testing/)

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
      <span className='breadcrumbs__link'>Custom CSS</span>
    </li>
  </ul>
</nav>

