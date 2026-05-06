---
id: kane-ai-click-interactions
title: Advanced Click Interactions in KaneAI
hide_title: false
sidebar_label: Click Interactions
description: Author press and hold, multi-click, and right click interactions in KaneAI on Desktop Web, Android apps, iOS apps, and Mobile Web using natural language or manual recording. Covers supported patterns, replay behavior, and limitations.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai click interactions
  - kaneai long press
  - kaneai press and hold
  - kaneai double click
  - kaneai right click
  - kaneai multi click
  - context menu testing
url: https://www.testmuai.com/support/docs/kane-ai-click-interactions/
site_name: TestMu AI
slug: kane-ai-click-interactions/
canonical: https://www.testmuai.com/support/docs/kane-ai-click-interactions/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.testmuai.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.testmuai.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Click Interactions",
          "item": "https://www.testmuai.com/support/docs/kane-ai-click-interactions/"
        }]
      })
    }}
></script>

KaneAI supports advanced click variants beyond a standard single click — **press and hold (long press)**, **multi-click (double / triple / N-click)**, and **right click (context click)** — across Desktop Web, Android apps, iOS apps, and Mobile Web. Each can be authored with natural language or captured via Manual Interaction, and renders as a distinct step with its own icon and pill label.

## Overview

You can author any of the three click variants in two ways:

- **Natural Language (NL)** — describe the click in plain English (e.g. `long press the menu icon for 5 seconds`).
- **Manual Interaction** — perform the gesture on the device or browser viewport and have it captured as a step.

| Click Type | Pill Label | Typical Use |
|------------|------------|-------------|
| **Press and Hold** | LONG PRESS | Developer mode entry, context menus, multi-select, hidden settings, push-to-talk |
| **Multi-Click** | MULTI CLICK | Text selection, zoom, list opening, counter interactions |
| **Right Click** | RIGHT CLICK | Context menus on web — duplicate, rename, delete, custom actions |

## Supported Platforms

| Platform | Press and Hold | Multi-Click | Right Click | Manual Interaction |
|----------|:--------------:|:-----------:|:-----------:|:------------------:|
| **Desktop Web** | ✅ | ✅ | ✅ | ✅ |
| **Android App** | ✅ | ✅ | ❌ | ✅ |
| **iOS App** | ✅ | ✅ | ❌ | ✅ (Portrait only) |
| **Mobile Web** | ✅ | ✅ | ❌ | ❌ (NL only) |

:::warning
**Right click is web-only.** On mobile, use **long press** to open context menus — KaneAI does not silently convert one to the other because they have different semantics.
:::

---

## Press and Hold (Long Press)

### Author with Natural Language

```
long press the menu icon
press and hold the build number for 10 seconds
tap and hold the profile avatar
hold down the record button for 5 seconds
long press the Submit button for 30 seconds
```

#### Supported NL Patterns

| Pattern | Example | Duration |
|---------|---------|----------|
| Default duration | `long press the menu icon` | 1 second |
| Custom duration | `press and hold the color swatch for 3 seconds` | 3 seconds |
| Alternative phrasing | `tap and hold the profile avatar` | 1 second |
| Hold down | `hold down the record button for 5 seconds` | 5 seconds |

#### Duration Rules

- **Default:** 1 second when no duration is specified.
- **Range:** 0.5 seconds (minimum) to 30 seconds (maximum).
- **Units:** Seconds only. Minutes, hours, and days are rejected.
- **Accuracy:** Within ±200 ms of the specified duration.

#### Disambiguation

Only phrases containing **`long press`**, **`press and hold`**, **`tap and hold`**, or **`hold down`** followed by a UI element trigger a long press.

| Phrase | Interpretation |
|--------|---------------|
| `press Enter` | Keyboard key press |
| `press the login button` | Normal click (bare "press") |
| `press Tab` | Keyboard key press |

### Manual Interaction Capture

In Recording mode, the capture layer classifies touch gestures by duration and movement:

| Gesture | Rule |
|---------|------|
| Tap | Touch &lt; 500 ms, no movement |
| **Long Press** | **Touch ≥ 500 ms, no movement (&lt; 10 px drift)** |
| Drag | Movement ≥ 10 px |

### Common Use Cases

| Use Case | Typical Duration |
|----------|------------------|
| Developer mode entry | 5–10 seconds |
| Context menu (mobile) | 0.5–2 seconds |
| Delete confirmation | 1–3 seconds |
| Multi-select mode | 0.5–1 second |
| Hidden settings access | 3–15 seconds |

---

## Multi-Click (Double / Triple / N-Click)

### Author with Natural Language

```
double click on the submit button
triple click the paragraph
click the increment button 5 times
tap twice on the like button
tap thrice on the notification bell
```

#### Supported NL Patterns

| Pattern | Example | Frequency |
|---------|---------|-----------|
| Double click | `double click on the submit button` | 2 |
| Double tap | `double tap to zoom in` | 2 |
| Triple click | `triple click the paragraph` | 3 |
| Click N times | `click the button 5 times` | 5 |
| Tap twice / thrice | `tap twice on the like button` | 2 / 3 |

:::note
On mobile, **`click`** and **`tap`** are interchangeable. `double click X` maps to the same multi-click action as `double tap X`.
:::

### Manual Interaction Capture

The capture layer detects multi-click via a **debounce window**:

- **Window:** 200 ms between consecutive clicks
- **Proximity:** Clicks must land within 10 px of each other
- **Classification:** Two clicks within the window at the same spot = double click, three = triple click, and so on
- **Inter-click interval:** Recorded for accurate replay

---

## Right Click (Context Click)

:::warning
Right click is supported on **Desktop Web only**. On mobile, use long press instead.
:::

### Author with Natural Language

```
right click on the file item
right-click the table row
context click on the selected text
secondary click on the canvas element
```

#### Supported NL Patterns

| Pattern | Example |
|---------|---------|
| Right click | `right click on the file row` |
| Right-click (hyphenated) | `right-click the document` |
| Context click | `context click on the table row` |
| Secondary click | `secondary click on the canvas` |

#### Disambiguation

The word **`right`** must directly modify the verb (`click` / `tap` / `press`) to trigger a right click. When `right` modifies a noun or is part of an adverb, it is treated as a normal click.

| Phrase | Interpretation |
|--------|---------------|
| `click the right panel` | Normal click (positional) |
| `click the button on the right` | Normal click (positional) |
| `click the submit button right now` | Normal click (`right now` is temporal) |
| `right away click the link` | Normal click (`right away` is temporal) |

### Manual Interaction Capture

On Desktop Web, right-clicking fires a `contextmenu` event that is captured as a right-click step automatically.

---

## Mutual Exclusivity Rules

The three click modifiers cannot be combined on a single operation. Attempting to combine them returns `INVALID_PARAMETER`.

| Combination | Result |
|-------------|--------|
| Long press + Multi-click | Invalid — duration and frequency cannot both be set |
| Right click + Long press | Invalid — right click cannot combine with duration |
| Right click + Multi-click | Invalid — right click cannot combine with frequency |

**NL examples that fail:**
- `long press the button 3 times`
- `right double-click on X`
- `right click and hold X`

---

## UI Rendering

Each click type displays a distinct icon and pill label in the **Sidebar**, **Test Case Summary**, and **Module view**:

| Click Type | Pill Label | Icon |
|------------|------------|------|
| Normal click | CLICK | Default cursor |
| Long press | LONG PRESS | Hold / timer |
| Double click | MULTI CLICK | Double-click |
| Triple / N-click | MULTI CLICK | Multi-click |
| Right click | RIGHT CLICK | Context menu |

---


## Best Practices

- **Use NL for most interactions** — fastest authoring path; produces element-first steps.
- **Use Manual Interaction for precise timing** — when exact hold duration matters (e.g. 10 s developer mode).
- **On mobile, use `long press` instead of `right click`** to open context menus.
- **Don't combine modifiers** in a single instruction — they are mutually exclusive.
- For `click N times`, ensure the target element stays **stable** (doesn't move, disappear, or change) between clicks.
- Allow **1–2 seconds after navigation** before performing a click — gives the page time to stabilize.
- Use **variables** to parameterize: `long press the button for ${hold_duration} seconds`.
- Use **conditionals** to apply click types contextually: `if popup is visible then right click on it`.

---

## FAQs

**What is the default long press duration?**
1 second. For example, `long press the menu icon` holds for 1 second.

**Does `press the button` trigger a long press?**
No. Bare "press" is interpreted as a normal click. Use `long press`, `press and hold`, `tap and hold`, or `hold down` to trigger a long press.

**Is `double click` different from clicking twice in two separate steps?**
Yes. `double click` (frequency = 2) fires a native `dblclick` event. Two separate `click` instructions are independent single clicks with a pause between them.

**Can I double tap on mobile?**
Yes. `double click` and `double tap` are interchangeable on mobile.

**What is the maximum click frequency?**
There is no hard limit, but very high frequencies (100+) may time out. Tested reliably up to 20.

**Why does right click fail on mobile?**
Right click is a mouse-specific interaction that doesn't exist on touchscreens. Use `long press` instead — it opens context menus in most apps.

**Does `click the right panel` trigger a right click?**
No. KaneAI treats positional `right` as a description of the panel, not a gesture modifier.

**How does KaneAI tell a tap from a long press during recording?**
By duration: under 500 ms = tap, ≥ 500 ms with no movement = long press, movement over 10 px = drag.

**How does KaneAI detect a double click during recording?**
Two clicks within 200 ms at the same location (within 10 px).

**Can I use variables for the long press duration or click count?**
Yes. `long press the button for ${hold_duration} seconds` and `click the button ${click_count} times` both work.

**Do click modifiers survive autoheal?**
Yes. Autoheal re-locates the element on a modified page; the click modifier (duration, frequency, right-click flag) is preserved.

**Can I use these click types inside a Module?**
Yes. All three work inside Modules — create, import, edit, and version-bump as usual.

---

## Limitations

1. **Right click is web-only.** Returns `UNSUPPORTED_OPERATION` on mobile.
2. **Mutual exclusivity.** Long press, multi-click, and right click cannot be combined in a single instruction.
3. **Long press duration range.** Limited to 0.5–30 seconds only.
4. **Mobile Web — no Manual Interaction.** Only NL instructions are available for long press and multi-click on mobile browsers.
5. **iOS Landscape — no Manual Interaction.** Long press and multi-click MI capture are not supported in Landscape orientation.
6. **Duration accuracy.** Long press is accurate to ±200 ms. Use cases requiring millisecond precision should account for this tolerance.
7. **Multi-click on dynamic elements.** If the target moves, disappears, or changes between clicks (N > 2), later clicks may miss. Ensure element stability.
8. **Nested conditions not supported.** `if A then if B then triple click X else double click Y` — nested if-else with click modifiers is not supported.
9. **Secrets as duration values.** `long press for {{secrets.user.DURATION}} seconds` is not supported — secret values cannot be parsed as numeric durations.
10. **No silent conversion.** Right click is not auto-converted to long press on mobile, and long press is not auto-converted to right click on web. Each gesture must be authored explicitly.

