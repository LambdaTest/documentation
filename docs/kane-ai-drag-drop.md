---
id: kane-ai-drag-drop
title: Drag and Drop for Web applications
hide_title: false
sidebar_label: Drag and Drop
description: Learn how to test drag and drop interactions in KaneAI using natural language commands and manual recording for complex web interactions.
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai drag drop
  - drag and drop testing
  - click and drag
url: https://www.lambdatest.com/support/docs/kane-ai-drag-drop/
site_name: LambdaTest
slug: kane-ai-drag-drop/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

A wide range of applications incorporate drag and drop features, enabling users to reorganize and position elements within the interface. KaneAI now supports **drag and drop** and **click and drag** interactions in web applications on Desktop, enabling you to test complex UI interactions like moving items between containers, adjusting sliders, resizing elements, and working with flow charts. This feature provides two methods for capturing these interactions: natural language commands and manual recording.

## Supported Interaction Types

### Drag and Drop (Natural Language)
Use natural language commands to move elements between defined drop zones. This method is ideal for straightforward drag and drop operations where both the source and target elements are clearly visible. This is not ideal in case the source or the target elements are not clearly visible.

**Examples:**
- `Drag item 4 from source items to drop target`
- `Drag and drop product card from available items to shopping cart`
- `Move file from folder A to folder B`

:::tip
Natural language drag and drop works best when:
- Drop zones are explicitly defined and visible
- You're moving items between containers
- The target location is static (not dynamically generated)
:::

### Click and Drag (Manual Interaction)
Record click and drag actions manually during test authoring. This method provides precise control for complex interactions like sliders, resizing, and canvas operations.

**Use Cases:**
- Adjusting slider values
- Resizing elements
- Moving elements in flow charts
- Dragging within canvas or drawing areas

:::tip
Manual recording is recommended for:
- Slider adjustments
- Element resizing
- Flow chart interactions
- Any scenario where drop locations aren't explicitly defined
:::

## Supported Scenarios

### ✅ What Works
- **Drag and Drop (Natural Language)**
    - Moving items between visible containers
    - Transferring elements to defined drop zones
    - Simple drag operations within the same page context
    - Kanban board card movements
    - File upload via drag and drop
- **Click and Drag (Manual Interaction)**
    - All drag scenarios - works reliably in any case
    - Slider value adjustments
    - Resizing elements and panels
    - Drawing and canvas interactions
    - Flow chart and diagram manipulation
    - List item reordering
    - Precise positioning of elements

### ⚠️ Limitations

#### Natural Language Limitations
- **List reordering** - Cannot reorder list items using natural language
- **Pixel-based commands** - Cannot specify exact pixel offsets (e.g., "drag 50px right")
- **Dynamic targets** - Cannot drag to targets that appear only during drag
- **Undefined drop zones** - May not work if drop locations aren't explicitly defined

#### General Limitations
- **Cross-context dragging** - Cannot drag between iframes or shadow DOMs
- **Multi-element dragging** - Cannot drag multiple elements simultaneously
- **Mobile drag and drop** - Not supported on mobile devices
- **Editing restrictions** - Click and drag instructions cannot be edited after recording

### When to Use Each Method

| Scenario | Natural Language | Manual Interaction |
|----------|-----------------|------------------|
| Container to container transfer | ✅ Recommended | ✅ Works |
| Slider adjustments | ❌ Not supported | ✅ Recommended |
| Element resizing | ❌ Not supported | ✅ Recommended |
| List reordering | ❌ Not supported | ✅ Recommended |
| Flow charts | ❌ Limited | ✅ Recommended |
| Kanban boards | ✅ Recommended | ✅ Works |
| Canvas drawing | ❌ Limited | ✅ Recommended |


## Example Use Cases

### E-commerce Product Sorting
```
Drag product "iPhone 15" from available items to comparison table
```

### Project Management Board
```
Move task card from "To Do" column to "In Progress" column
```

### Form Builder
Use manual interaction to:
- Drag form fields from palette to canvas
- Resize input fields
- Reorder form sections

### Data Visualization Dashboard
Use manual interaction to:
- Adjust date range sliders
- Resize chart panels
- Rearrange dashboard widgets