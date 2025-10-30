---
id: smartui-custom-css
title: SmartUI customCSS
sidebar_label: customCSS
description: Use customCSS to inject test-only CSS via SmartUI CLI using a file path or embedded string in smartui-web.json.
slug: smartui-custom-css/
keywords:
  - smartui
  - custom css
  - visual testing
  - cli
  - configuration
  - percy css
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
          "name": "customCSS",
          "item": "https://www.lambdatest.com/support/docs/smartui-custom-css/"
        }]
      })
    }}
></script>

## SmartUI customCSS

Use customCSS to apply test‑only styles at snapshot time without changing your app. It supports two input styles:

- File path (recommended for maintainability)
- Embedded CSS string (quick and portable)

## Prerequisites
- Node.js v20.3+ recommended
- SmartUI CLI v4.1.40+ (exec and capture supported)
- PROJECT_TOKEN

---

## Why customCSS Matters

1. **Stabilize Visual Diffs**: Hide or normalize volatile UI (ads, rotating banners, counters) to reduce false positives.
2. **Environment Parity**: Enforce consistent fonts, themes, and spacing across different OS/browsers for predictable rendering.
3. **Non‑Intrusive**: Avoid modifying application code or injecting styles in tests—keep visual adjustments in one place.

---

## 1) Configuration: Two Ways to Provide customCSS

A) File path method (recommended)
- Put your CSS rules into a file (e.g., `code.css`) at the project root (or any path you prefer).
- Reference that path in your SmartUI config.

```json
{
  "web": { "browsers": ["chrome"], "viewports": [[1440, 900]] },
  "enableJavaScript": true,
  "customCSS": "./code.css"
}
```

B) Embedded string method (single‑line)
- Provide the CSS directly as a JSON string. Use a single line (avoids path misdetection) and escape quotes if needed.

```json
{
  "web": { "browsers": ["chrome"], "viewports": [[1440, 900]] },
  "enableJavaScript": true,
  "customCSS": "body{font-family:'Inter',sans-serif;} .banner,.ad{display:none!important;}"
}
```

Notes
- Place customCSS only at the top level of your config (not inside web).
- For multi‑line CSS in JSON, either:
  - keep it compact in one line, or
  - use the file‑path method to avoid escaping/formatting issues.
- Paths in customCSS are relative to your project root.

---

## 2) Running with SmartUI (production)

Use either exec (wrap your test runner) or capture (static URLs). Ensure CLI is 4.1.40+.

Exec example (generic):
```bash
export PROJECT_TOKEN='YOUR_PROJECT_TOKEN'
npx smartui --config smartui-web.json exec -- <your-test-command>
```

Capture example (static URLs):
```bash
export PROJECT_TOKEN='YOUR_PROJECT_TOKEN'
npx smartui capture --config smartui-web.json
```

What you’ll see
- CLI validates and injects your CSS at snapshot time
- A CSS Injection Report in logs with the number of rules applied and any selectors with no matches

---

## Known Limitations

- Can be overridden by higher‑specificity inline styles; increase selector specificity if needed.

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 3) Sample Use Cases

<Tabs>
  <TabItem value="stabilize" label="Stabilize Dynamic UI" default>

```css
/* Hide elements that change between runs */
.ad, .banner, #cookie-consent { display: none !important; }

/* Replace volatile text with a constant */
[data-testid="rotating-copy"] { font-size: 0 !important; }
[data-testid="rotating-copy"]::after { content: "Stable text for snapshots"; }
```

  </TabItem>
  <TabItem value="typography" label="Normalize Typography/Theme">

```css
/* Force consistent light theme */
:root { color-scheme: light; }
body { font-family: "Inter", system-ui, sans-serif !important; color: #111827; background: #ffffff; }

/* Optional: Dark mode */
/* :root { color-scheme: dark; }
body { background: #0f172a !important; color: #e5e7eb !important; } */
```

  </TabItem>
  <TabItem value="layout" label="Layout Harmonization">

```css
/* Center content and unify spacing (use carefully) */
#root, main, section { display: flex !important; flex-direction: column !important; align-items: center !important; gap: 12px !important; }
* { text-align: center !important; }
```

  </TabItem>
  <TabItem value="pii" label="Mask PII/Identifiers">

```css
/* Hide IPs, locations, or IDs */
#ip-value, #location-value { font-size: 0 !important; }
#ip-value::after { content: "0.0.0.0" !important; }
#location-value::after { content: "Unknown" !important; }
```

  </TabItem>
  <TabItem value="stress" label="Visual Stress Testing">

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
  <TabItem value="flakiness" label="Reduce Flakiness">

```css
/* Disable transitions/animations */
*, *::before, *::after { transition: none !important; animation: none !important; }
```

  </TabItem>
  <TabItem value="brand" label="Mask Brand Cues">

```css
/* Override brand cues (colors, shadows, shapes) */
header, footer, nav { background: rgba(0,0,0,.45) !important; box-shadow: none !important; }
.btn, a { border-radius: 10px !important; border: 1px solid rgba(255,255,255,.25) !important; }
```

  </TabItem>
</Tabs>

---

## 4) Tips and Troubleshooting

- Prefer file path for larger stylesheets and team reviews.
- For embedded strings, keep CSS single‑line or very carefully escaped (quotes, no raw newlines).
- If a selector shows “no elements found” in the report, verify it exists at snapshot time or loosen/tighten the selector.
- Keep CSS snapshot‑specific: target only what you need for stable and meaningful diffs.
- If you need to wait for UI readiness, use SmartUI config waits:
  - `"waitForTimeout": 2000`
  - `"waitForPageRender": 5000`

---

## 5) Minimal templates

File path template:
```json
{
  "web": { "browsers": ["chrome"], "viewports": [[1440, 900]] },
  "enableJavaScript": true,
  "customCSS": "./path/to/visual.css"
}
```

Embedded string template:
```json
{
  "web": { "browsers": ["chrome"], "viewports": [[1440, 900]] },
  "enableJavaScript": true,
  "customCSS": "/* your CSS (single-line) */ body{font-family:'Inter',sans-serif;} .ad{display:none!important;}"
}
```



