---
id: kane-ai-drag-drop
title: Drag and Drop in KaneAI
hide_title: false
sidebar_label: Drag and Drop
description: Author drag and drop interactions in KaneAI on Desktop Web, Android apps, iOS apps, and Mobile Web using natural language or manual recording. Covers replay behavior, supported scenarios, and limitations.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai drag drop
  - kaneai mobile drag and drop
  - kaneai android drag
  - kaneai ios drag
  - drag and drop testing
  - click and drag
  - slide to confirm
  - kaneai slider testing
url: https://www.testmuai.com/support/docs/kane-ai-drag-drop/
site_name: TestMu AI
slug: kane-ai-drag-drop/
canonical: https://www.testmuai.com/support/docs/kane-ai-drag-drop/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

KaneAI lets you author drag interactions across **Desktop Web, Android apps, iOS apps, and Mobile Web** using either natural language or by performing the gesture yourself. Use it for Kanban boards  and any other drag-driven UI flow.


## Overview

You can author a drag step in two ways:

- **Natural Language (NL)** — describe the drag in plain English (e.g. `drag "Card A" to "Column B"`).
- **Manual Interaction** — perform the gesture on the device or browser viewport and have it captured as a step.


## Supported Platforms

| Platform        | Natural Language | Manual Interaction |
| --------------- | :--------------: | :----------------: |
| **Desktop Web** | ✅                | ✅                  |
| **Android App** | ✅                | ✅                  |
| **iOS App**     | ✅                | ✅                  |
| **Mobile Web**  | ✅                | ❌                  |


## When to Use Which Mode

| Use Case                                                                   | Recommended Mode       |
| -------------------------------------------------------------------------- | ---------------------- |
| Kanban / multi-container drag                                              | NL or Manual           |
| Sortable grid                                                              | NL or Manual           |
| Container-to-container transfer                                            | NL (recommended)       |
| **Sliders** (volume, range, vertical, payment)                             | **Manual only**        |
| **Confirmation gestures** (slide-to-confirm, drag-to-pay, swipe-to-unlock) | **Manual only**        |
| Dynamic / moving drop targets                                              | **Manual only**        |
| Element resizing / canvas operations / flow charts                         | **Manual (recommended)** |
| Drag with no stable element identifier                                     | Manual (recommended)   |

:::warning
**Sliders and confirmation gestures cannot be authored with NL.** Use Manual Interaction to capture the gesture directly — KaneAI records source, target, and drag vector in a coordinate-safe form.
:::

## Author with Natural Language

Type the instruction into the KaneAI authoring panel.

### Supported NL Patterns

| Pattern          | Example                            |
| ---------------- | ---------------------------------- |
| Name-based       | `drag "Card A" to "Column B"`      |
| Index-based      | `drag the 3rd item to the top`     |
| Positional       | `drag the top card to the bottom`  |
| Anchor reference | `drag X to the bottom of the list` |
| Drop-on phrasing | `drop "Cart" on "Checkout button"` |

**More examples:**

```
drag "Task Card" to "Done column"
move the 3rd item to the top
drop "iPhone 15" on the comparison table
drag the top card to the bottom of the list
move task card from "To Do" column to "In Progress" column
```



:::tip
Natural language drag and drop works best when:
- Drop zones are **explicitly defined and visible**.
- You're moving items between containers.
- The target location is **static** (not dynamically generated).
:::

## Author with Manual Interaction

Switch to **Manual Interaction** mode in the KaneAI authoring panel and perform the drag directly on the device viewport.

### Gesture Classification

| Input                                  | Captured As |
| -------------------------------------- | ----------- |
| Touch &lt; 1 second, no movement       | Tap         |
| Touch ≥ 1 second, no movement (&lt; 10 px drift) | Long press  |
| Movement ≥ 10 px                       | Swipe       |
| **Hold ≥ 1 second + Movement ≥ 10 px** | **Drag**    |

:::info
For tap, long-press, multi-click, and right-click authoring, see [Click Interactions](/support/docs/kane-ai-click-interactions/).
:::



### When Manual Interaction is Required

- **Sliders** — volume, range, vertical, payment-style (e.g., slide-to-pay).
- **Confirmation gestures** — slide-to-confirm, drag-to-pay, swipe-to-unlock.
- **Custom drag handles** without a stable accessibility ID or selector.
- **Canvas-based interactions**, drawing tools, and flow chart manipulation.
- **Element resizing** and precise positioning.

:::tip
Manual recording is recommended for any scenario where the **drop location isn't explicitly defined** or the target **changes during the drag**.
:::

## Replay Behavior

- Elements are **re-resolved at runtime**. KaneAI does **not** use cached coordinates when an element is resolvable.
- **Stale element on replay** → 1 automatic retry, then hard fail.
- **Minor coordinate drift** → auto-corrected on Desktop Web.

:::note
**Mobile drag steps do not auto-heal.** Manual Interaction drags on Android and iOS rely on the captured drag vector and coordinates from the recording device. Replays on a device with a **different screen resolution or aspect ratio** may fail. To maximize cross-device reliability:

- Prefer NL drags wherever possible.
- Replay Manual Interaction drags on devices with the **same resolution / form factor** as the recording device.
- Capture the gesture once and reuse it in a Module scoped to a specific device profile.
:::

## Best Practices

- **Use NL for static layouts** — Kanban boards, sortable grids, multi-container drags. Fastest authoring path.
- **Use Manual for sliders, confirmation gestures, and dynamic targets.** These require touch-driven capture.
- Prefer elements with stable **accessibility IDs / resource IDs** to maximize cross-device replay success.
- For long lists, **scroll the source element into view** before recording the drag.
- Allow **1–2 seconds after a navigation step** before recording the next drag — gives the page time to stabilize.
- For payment / KYC slider flows, capture the gesture once via Manual and **reuse the step inside a Module**.
- Use `{{variable_name}}` syntax to **parameterize** source / target references for data-driven runs.

## Example Use Cases

### E-commerce Product Sorting

```
drag product "iPhone 15" from available items to comparison table
```

### Project Management Board

```
move task card from "To Do" column to "In Progress" column
```

### Mobile Slider (Manual Interaction)

Use Manual Interaction to capture brightness, volume, or price-range sliders on Android and iOS — NL cannot resolve a moving slider thumb.

### Payment Confirmation Gesture (Manual Interaction)

Capture a `slide-to-pay` or `swipe-to-unlock` gesture once via Manual Interaction, then reuse the step inside a Module across test cases.

### Form Builder (Desktop Web)

Use Manual Interaction to drag form fields from a palette to a canvas, resize input fields, and reorder form sections.

### Data Visualization Dashboard

Use Manual Interaction to adjust date-range sliders, resize chart panels, and rearrange dashboard widgets.

## Limitations

- **Multi-touch gestures** (two-finger drag, pinch-drag) — not supported.
- **Drag path waypoints** — only start and end coordinates are captured; intermediate path points are not preserved.
- **Mobile Browser manual recording** — not supported. Use NL only.
- **Cross-context dragging** — drags between iframes or shadow DOMs are not supported.
- **Multi-element dragging** — cannot drag multiple elements simultaneously.
- **Advanced NL** (e.g., `drag X up by 50px`, offset-based reorder) — on the roadmap; currently rejected with a graceful error.
- **NL slider authoring** — not supported. Use Manual Interaction.
- **NL confirmation gestures** (slide-to-confirm) — not supported. Use Manual Interaction.
- **Drag and drop on canvas-based elements via NL** — canvas elements rely on custom rendering; use Manual Interaction.
- **Editing manual drag steps** — source/target locators and step-level config can be edited; the drag vector and gesture timing are immutable to preserve replay fidelity.

## FAQs

**Can I author a slider drag with natural language?**
No. Sliders have moving targets that NL cannot resolve reliably. Use Manual Interaction to capture the slider gesture directly. The captured step replays at ≥ 95% success rate across devices.

**Can I author a slide-to-confirm or drag-to-pay step with NL?**
No. Confirmation gestures depend on dynamic UI state and must be captured via Manual Interaction.

**My drag step passes on the recording device but fails on another device. What's wrong?**
KaneAI replays use element resolution by default — cross-device failures usually indicate that the source or target element identifier changed across builds. Inspect the step logs to see the resolution path used (element vs. coordinate) and ensure the elements expose stable accessibility IDs.

**Why isn't manual recording available on Mobile Web?**
The KaneAI agent does not enter Recording state for mobile browser sessions. Use natural language instructions or slash commands instead.

**Can I edit a captured Manual Interaction drag step?**
You can edit the source / target locators and step-level configuration. The drag vector and gesture timing are immutable for Manual steps to preserve replay fidelity.

**Does drag work inside a KaneAI Module?**
Yes — drag steps can be saved into Modules and reused across test cases. Module versioning applies as usual.

**Can I parameterize a drag step?**
Yes. Use `{{variable_name}}` in the source or target reference. Local variables, global variables, smart variables, parameters, and dataset rows are all supported.

**Does drag work inside if/else and while constructs?**
Yes. Drag steps can be placed inside conditional blocks (`if X is visible then drag Y to Z`) and while loops. Each iteration re-resolves elements at runtime.

**Is drag and drop supported on real devices?**
Yes — drag works on both real devices and the device cloud for App testing. Real Device Web also supports manual drag.


