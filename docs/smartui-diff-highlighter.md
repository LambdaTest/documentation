---
id: smartui-diff-highlighter
title: Diff Highlighter & Navigation
sidebar_label: Diff Highlighter
description: Quickly discover and review visual differences with SmartUI's diff navigation and highlight. Use Previous, Next, and Highlight to find every change without manual scanning.
keywords:
  - diff highlighter
  - visual diff navigation
  - SmartUI comparison
  - find differences
  - highlight changes
  - next previous diff
  - visual review
  - Smart Ignore
url: https://www.testmuai.com/support/docs/smartui-diff-highlighter/
site_name: TestMu AI
slug: smartui-diff-highlighter/
canonical: https://www.testmuai.com/support/docs/smartui-diff-highlighter/
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
          "name": "Diff Highlighter & Navigation",
          "item": `${BRAND_URL}/support/docs/smartui-diff-highlighter/`
        }]
      })
    }}
></script>

# Diff Highlighter & Navigation

When reviewing SmartUI visual comparisons, small differences can be easy to miss on dense or zoomed-out screens. The **Diff Highlighter** feature helps you **discover every change** quickly using in-view navigation and an optional highlight animation—so you spend less time scanning and more time deciding what to accept or reject.

## What You Get

| Feature | Description |
|--------|-------------|
| **Previous / Next** | Move focus to the previous or next diff region in order (top to bottom). |
| **Highlight** | Run an animation that traverses each diff from top to bottom with popping circles, making every change location obvious at a glance. |
| **Actions menu** | All controls live in the comparison view’s actions menu (e.g. 3-dot or actions dropdown). |

No extra setup is required: if your screenshot uses **Smart Ignore** comparison, diff navigation and highlight are available as soon as you open the comparison.

## How to Use Diff Navigation

### Step 1: Open the comparison view

1. In your [SmartUI dashboard](https://smartui.lambdatest.com/), open the **build** that contains the screenshot you want to review.
2. Open the **screenshot/comparison view** (e.g. by clicking the screenshot or “View issues”).

### Step 2: Open the actions menu

On the comparison view, open the **actions menu** (e.g. the 3-dot or actions dropdown).



### Step 3: Use Previous, Highlight, and Next

In the actions menu you’ll see:

- **Previous** — moves focus to the **previous** diff (above the current one).
- **Highlight** — runs the **highlight animation**: popping circles traverse each diff from **top to bottom**, so you can see every change location in sequence.
- **Next** — moves focus to the **next** diff (below the current one).

<img loading="lazy" src={require('../assets/images/smart-visual-testing/diff-highlight/prev_diff.png').default} alt="Previous Diff Button" className="doc_img" />
<img loading="lazy" src={require('../assets/images/smart-visual-testing/diff-highlight/highlight_diff.png').default} alt="Highlight Diff Button" className="doc_img" />
<img loading="lazy" src={require('../assets/images/smart-visual-testing/diff-highlight/next_diff.png').default} alt="Next Diff Button" className="doc_img" />

Use **Highlight** when you want to quickly see all diffs without clicking through. Use **Previous** and **Next** when you want to step through differences one by one.

### Step 4: Review each difference

- On clicking the **Previous** or **Next** buttons, the view will zoom into that specific diff and highlight it with a bounded box.
<img loading="lazy" src={require('../assets/images/smart-visual-testing/diff-highlight/on_clickingnext_prev.png').default} alt="Zoom and highlight in box" className="doc_img"/>
- You can continue to use overlay toggles, zoom, slider/side-by-side, and **Mark as bug** or approval actions as usual.
- Diff navigation and highlight do **not** replace existing comparison tools—they only make it easier to find where the changes are.

## Highlight animation

When you click **Highlight**:

- It will show circles around the areas where the differences are present.
- They **traverse each diff region from top to bottom** in sequence.
- This makes it easy to see how many changes there are and where they sit, without manually scanning the whole screenshot.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/diff-highlight/on_clickinghighlight.png').default} alt="Circles around difference areas" className="doc_img"/>

## Comparison mode support

| Comparison mode | Diff navigation & highlight |
|----------------|-----------------------------|
| **Smart Ignore** | Supported |
| **Strict** | Not yet supported |
| **Layout** | Not yet supported |

Diff navigation and highlight use **precomputed diff regions** from the comparison. Today these are available for **Smart Ignore** only. Support for **Strict** and **Layout** modes is planned for a future release.

:::tip
To use diff navigation and highlight, ensure the screenshot is compared with **Smart Ignore**. You can enable Smart Ignore in [Project Settings](/support/docs/smartui-project-settings) or choose it per screenshot from the **Diff options** dropdown on the comparison page.
:::

## Tips

- **Use Highlight first** on a new comparison to see how many diffs there are and where they are, then use **Previous/Next** to inspect each one.
- **Zoom and overlays** still work as before; combine them with diff navigation for a faster review.
- **Commenting and Mark as bug** are unchanged; use them as usual while stepping through diffs.

## Troubleshooting

| Issue | What to check |
|-------|----------------|
| **No Previous/Next/Highlight in the menu** | Confirm the screenshot is using **Smart Ignore** comparison. These controls are not shown for Strict or Layout mode yet. |
| **Highlight doesn’t show anything** | Ensure there is at least one diff; if the comparison is identical, there’s nothing to highlight. |
| **Order of diffs** | Diffs are always traversed **top to bottom**; Previous goes up, Next goes down. |


## Related docs

- [Smart Ignore](/support/docs/smartui-smartignore) — Reduce noise and use diff regions for navigation.
- [Layout Testing](/support/docs/smartui-layout-testing) — Compare layout structure (diff navigation for this mode coming later).
- [View comparison and issues](/support/docs/smart-visual-testing#view-comparison-and-issues) — Basics of the comparison view.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>Home</a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href="/support/docs/">Support</a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">Diff Highlighter & Navigation</span>
    </li>
  </ul>
</nav>
