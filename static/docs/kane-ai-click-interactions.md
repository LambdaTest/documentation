# How to Author Clicks and Drag With KaneAI

> For the full site index for AI agents, see [llms.txt](https://www.testmuai.com/support/docs/llms.txt).

KaneAI supports advanced click variants beyond a standard single click: **press and hold (long press)**, **multi-click (double / triple / N-click)**, and **right click (context click)**, across Desktop Web, Android apps, iOS apps, and Mobile Web. Each can be authored with natural language or captured via Manual Interaction, and renders as a distinct step with its own icon and pill label.

## Authoring Modes


You can author any of the three click variants in two ways:

- **Natural Language (NL)**: describe the click in plain English (e.g. `long press the menu icon for 5 seconds`).
- **Manual Interaction**: perform the gesture on the device or browser viewport and have it captured as a step. See the [KaneAI Manual Interaction](/support/docs/kaneai-manual-interaction/) guide for the full recording workflow.

| Click Type | Pill Label | Typical Use |
|------------|------------|-------------|
| **Press and Hold** | LONG PRESS | Developer mode entry, context menus, multi-select, hidden settings, push-to-talk |
| **Multi-Click** | MULTI CLICK | Text selection, zoom, list opening, counter interactions |
| **Right Click** | RIGHT CLICK | Context menus on web: duplicate, rename, delete, custom actions |

## Supported Platforms


This table shows which click types and Manual Interaction are available on each platform:

| Platform | Press and Hold | Multi-Click | Right Click | Manual Interaction |
|----------|:--------------:|:-----------:|:-----------:|:------------------:|
| **Desktop Web** | ✅ | ✅ | ✅ | ✅ |
| **Android App** | ✅ | ✅ | ❌ | ✅ |
| **iOS App** | ✅ | ✅ | ❌ | ✅ (Portrait only) |
| **Mobile Web** | ✅ | ✅ | ❌ | ❌ (NL only) |


**Right click is web-only.** On mobile, use **long press** to open context menus. KaneAI does not silently convert one to the other because they have different semantics.




## Press and Hold (Long Press)


Author a long press with natural language or capture it through Manual Interaction:

### Author With Natural Language


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
| Tap | Touch &lt; 1 second, no movement |
| **Long Press** | **Touch ≥ 1 second, no movement (&lt; 10 px drift)** |
| Swipe | Movement ≥ 10 px |
| Drag | Hold ≥ 1 second + Movement ≥ 10 px |

### Common Use Cases


| Use Case | Typical Duration |
|----------|------------------|
| Developer mode entry | 5–10 seconds |
| Context menu (mobile) | 0.5–2 seconds |
| Delete confirmation | 1–3 seconds |
| Multi-select mode | 0.5–1 second |
| Hidden settings access | 3–15 seconds |



## Multi-Click (Double / N-Click)


Author a multi-click with natural language or capture it through Manual Interaction:

### Author With Natural Language


```
double click on the submit button
click the increment button 5 times
tap twice on the like button
tap thrice on the notification bell
```

#### Supported NL Patterns

| Pattern | Example | Frequency |
|---------|---------|-----------|
| Double click | `double click on the submit button` | 2 |
| Double tap | `double tap to zoom in` | 2 |
| Click N times | `click the button 5 times` | N |
| Tap twice / thrice | `tap twice on the like button` | 2 / 3 |


On mobile, **`click`** and **`tap`** are interchangeable. `double click X` maps to the same multi-click action as `double tap X`.


#### Frequency Rules

- **Maximum:** 20 clicks per instruction. Higher values are rejected as `INVALID_PARAMETER`.
- **Phrasing:** Use `click X N times` for N ≥ 3. The literal phrase `triple click X` is not supported.

### Manual Interaction Capture


The capture layer detects multi-click via a **debounce window**:

- **Window:** 200 ms between consecutive clicks
- **Proximity:** Clicks must land within 10 px of each other
- **Classification:** Two clicks within the window at the same spot = double click, three = triple click, and so on
- **Inter-click interval:** Recorded for accurate replay



## Right Click (Context Click)


Author a right click with natural language or capture it through Manual Interaction:


Right click is supported on **Desktop Web only**. On mobile, use long press instead.


### Author With Natural Language


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



## Mutual Exclusivity Rules


The three click modifiers cannot be combined on a single operation. Attempting to combine them returns `INVALID_PARAMETER`.

| Combination | Result |
|-------------|--------|
| Long press + Multi-click | Invalid: duration and frequency cannot both be set |
| Right click + Long press | Invalid: right click cannot combine with duration |
| Right click + Multi-click | Invalid: right click cannot combine with frequency |

**NL examples that fail:**
- `long press the button 3 times`
- `right double-click on X`
- `right click and hold X`



## UI Rendering


Each click type displays a distinct icon and pill label in the **Sidebar**, **Test Case Summary**, and **Module view**:

| Click Type | Pill Label | Icon |
|------------|------------|------|
| Normal click | CLICK | Default cursor |
| Long press | LONG PRESS | Hold / timer |
| Double click | MULTI CLICK | Double-click |
| N-click (3+) | MULTI CLICK | Multi-click |
| Right click | RIGHT CLICK | Context menu |




## Best Practices


Follow these practices for reliable tests:

- **Use NL for most interactions**: fastest authoring path; produces element-first steps.
- **Use Manual Interaction for precise timing**: when exact hold duration matters (e.g. 10 s developer mode).
- **On mobile, use `long press` instead of `right click`** to open context menus.
- **Don't combine modifiers** in a single instruction, they are mutually exclusive.
- For `click N times`, ensure the target element stays **stable** (doesn't move, disappear, or change) between clicks.
- Allow **1–2 seconds after navigation** before performing a click, gives the page time to stabilize.
- Use [KaneAI Using Variables](/support/docs/kane-ai-using-variables/) to parameterize: `long press the button for ${hold_duration} seconds`.
- Use [KaneAI Conditional Logic](/support/docs/kaneai-conditional-logic/) to apply click types contextually: `if popup is visible then right click on it`.



## FAQs


Answers to common questions:

**What is the default long press duration?**
1 second. For example, `long press the menu icon` holds for 1 second.

**Does `press the button` trigger a long press?**
No. Bare "press" is interpreted as a normal click. Use `long press`, `press and hold`, `tap and hold`, or `hold down` to trigger a long press.

**Is `double click` different from clicking twice in two separate steps?**
Yes. `double click` (frequency = 2) fires a native `dblclick` event. Two separate `click` instructions are independent single clicks with a pause between them.

**Can I double tap on mobile?**
Yes. `double click` and `double tap` are interchangeable on mobile.

**What is the maximum click frequency?**
20 clicks per instruction. Higher values are rejected as `INVALID_PARAMETER`.

**Why does right click fail on mobile?**
Right click is a mouse-specific interaction that doesn't exist on touchscreens. Use `long press` instead. It opens context menus in most apps.

**Does `click the right panel` trigger a right click?**
No. KaneAI treats positional `right` as a description of the panel, not a gesture modifier.

**How does KaneAI tell a tap from a long press during recording?**
By duration: under 1 second = tap, ≥ 1 second with no movement = long press, movement over 10 px = swipe (or drag if held ≥ 1 second).

**How does KaneAI detect a double click during recording?**
Two clicks within 200 ms at the same location (within 10 px).

**Can I use variables for the long press duration or click count?**
Yes. `long press the button for ${hold_duration} seconds` and `click the button ${click_count} times` both work.

**Do click modifiers survive autoheal?**
Yes. [KaneAI Auto-Heal](/support/docs/kaneai-auto-heal/) re-locates the element on a modified page; the click modifier (duration, frequency, right-click flag) is preserved.

**Can I use these click types inside a Module?**
Yes. All three work inside [KaneAI Modules](/support/docs/kane-ai-modules/): create, import, edit, and version-bump as usual.



## Limitations


Keep these limitations in mind:

1. **Right click is web-only.** Returns `UNSUPPORTED_OPERATION` on mobile.
2. **Mutual exclusivity.** Long press, multi-click, and right click cannot be combined in a single instruction.
3. **Long press duration range.** Limited to 0.5–30 seconds only.
4. **Multi-click frequency cap.** Maximum 20 clicks per instruction. The literal phrase `triple click X` is not supported. Use `click X 3 times` instead.
5. **Mobile Web: no Manual Interaction.** Only NL instructions are available for long press and multi-click on mobile browsers.
6. **iOS Landscape: no Manual Interaction.** Long press and multi-click MI capture are not supported in Landscape orientation.
7. **Duration accuracy.** Long press is accurate to ±200 ms. Use cases requiring millisecond precision should account for this tolerance.
8. **Multi-click on dynamic elements.** If the target moves, disappears, or changes between clicks, later clicks may miss. Ensure element stability.
9. **Nested if-else not supported.** Single-level if-else with click modifiers works (e.g. `if popup is visible then right click on it`), but nested if-else inside another conditional is not supported.
10. **Secrets as duration values.** `long press for {{secrets.user.DURATION}} seconds` is not supported. Secret values cannot be parsed as numeric durations.
11. **No silent conversion.** Right click is not auto-converted to long press on mobile, and long press is not auto-converted to right click on web. Each gesture must be authored explicitly.



## Drag and Drop


Drag extends the same press-then-move model as long press: KaneAI picks the element up, then moves it to a target. Use it for Kanban boards and any other drag-driven UI flow. As with the click variants above, you author a drag step either with natural language (e.g. `drag "Card A" to "Column B"`) or by performing the gesture yourself in Manual Interaction.

### Drag-and-Drop vs Click-and-Drag


KaneAI supports two distinct drag interactions. They look similar but behave differently, and they are **not interchangeable**:

- **Drag and Drop**: the element is first **long-pressed** to pick it up, and only then moved to the target. This is the standard gesture for moving items between containers and works on **all platforms**.
- **Click and Drag**: the element is pressed and moved **immediately, without any long press**. This is how interactions such as sliders, canvas drawing, and element resizing work, and it is available on **Desktop Web only**.

| | Drag and Drop | Click and Drag |
| --- | --- | --- |
| **Gesture** | Long press on the element first, then move it to the target | Press and move in one continuous motion, no long press |
| **Platforms** | Desktop Web, Android App, iOS App, Mobile Web | Desktop Web only |
| **Typical scenarios** | Kanban cards, list reordering, container-to-container transfer | Sliders, canvas drawing, element resizing, range selection |


If a drag step fails on an element that doesn't respond to a long press (for example a slider thumb or a canvas), the element likely expects **Click and Drag** rather than Drag and Drop. Click and Drag has its own constraints, see [Drag Limitations](#drag-limitations).


### Drag Supported Platforms


| Platform        | Natural Language | Manual Interaction |
| --------------- | :--------------: | :----------------: |
| **Desktop Web** | ✅                | ✅                  |
| **Android App** | ✅                | ✅                  |
| **iOS App**     | ✅                | ✅                  |
| **Mobile Web**  | ✅                | ❌                  |

### Choosing a Drag Mode


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


**Sliders and confirmation gestures cannot be authored with NL.** Use Manual Interaction to capture the gesture directly. KaneAI records source, target, and drag vector in a coordinate-safe form.


### Author Drag With Natural Language


Type the instruction into the KaneAI authoring panel.

#### Supported Drag NL Patterns

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


Natural language drag and drop works best when:
- Drop zones are **explicitly defined and visible**.
- You're moving items between containers.
- The target location is **static** (not dynamically generated).


### Author Drag With Manual Interaction


Switch to **Manual Interaction** mode in the KaneAI authoring panel and perform the drag directly on the device viewport.

#### Drag Gesture Classification

| Input                                  | Captured As |
| -------------------------------------- | ----------- |
| Touch &lt; 1 second, no movement       | Tap         |
| Touch ≥ 1 second, no movement (&lt; 10 px drift) | Long press  |
| Movement ≥ 10 px                       | Swipe       |
| **Hold ≥ 1 second + Movement ≥ 10 px** | **Drag**    |


For tap, long-press, multi-click, and right-click authoring, see the click sections above on this page.


#### When Manual Interaction is Required

- **Sliders**: volume, range, vertical, payment-style (e.g., slide-to-pay).
- **Confirmation gestures**: slide-to-confirm, drag-to-pay, swipe-to-unlock.
- **Custom drag handles** without a stable accessibility ID or selector.
- **Canvas-based interactions**, drawing tools, and flow chart manipulation.
- **Element resizing** and precise positioning.


Manual recording is recommended for any scenario where the **drop location isn't explicitly defined** or the target **changes during the drag**.


### Drag Replay Behavior


- Elements are **re-resolved at runtime**. KaneAI does **not** use cached coordinates when an element is resolvable.
- **Stale element on replay** → 1 automatic retry, then hard fail.
- **Minor coordinate drift** → auto-corrected on Desktop Web.


**Mobile drag steps do not auto-heal.** Manual Interaction drags on Android and iOS rely on the captured drag vector and coordinates from the recording device. Replays on a device with a **different screen resolution or aspect ratio** may fail. To maximize cross-device reliability:

- Prefer NL drags wherever possible.
- Replay Manual Interaction drags on devices with the **same resolution / form factor** as the recording device.
- Capture the gesture once and reuse it in a Module scoped to a specific device profile.


### Drag Best Practices


- **Use NL for static layouts**: Kanban boards, sortable grids, multi-container drags. Fastest authoring path.
- **Use Manual for sliders, confirmation gestures, and dynamic targets.** These require touch-driven capture.
- Prefer elements with stable **accessibility IDs / resource IDs** to maximize cross-device replay success.
- For long lists, **scroll the source element into view** before recording the drag.
- Allow **1–2 seconds after a navigation step** before recording the next drag, gives the page time to stabilize.
- For payment / KYC slider flows, capture the gesture once via Manual and **reuse the step inside a Module**.
- Use `{{variable_name}}` syntax to **parameterize** source / target references for data-driven runs.

### Drag Example Use Cases


#### E-commerce Product Sorting

```
drag product "iPhone 15" from available items to comparison table
```

#### Project Management Board

```
move task card from "To Do" column to "In Progress" column
```

#### Mobile Slider (Manual Interaction)

Use Manual Interaction to capture brightness, volume, or price-range sliders on Android and iOS. NL cannot resolve a moving slider thumb.

#### Payment Confirmation Gesture (Manual Interaction)

Capture a `slide-to-pay` or `swipe-to-unlock` gesture once via Manual Interaction, then reuse the step inside a Module across test cases.

#### Form Builder (Desktop Web)

Use Manual Interaction to drag form fields from a palette to a canvas, resize input fields, and reorder form sections.

#### Data Visualization Dashboard

Use Manual Interaction to adjust date-range sliders, resize chart panels, and rearrange dashboard widgets.

### Drag Limitations


- **Multi-touch gestures** (two-finger drag, pinch-drag): not supported.
- **Drag path waypoints**: only start and end coordinates are captured; intermediate path points are not preserved.
- **Mobile Browser manual recording**: not supported. Use NL only.
- **Cross-context dragging**: drags between iframes or shadow DOMs are not supported.
- **Multi-element dragging**: cannot drag multiple elements simultaneously.
- **Advanced NL** (e.g., `drag X up by 50px`, offset-based reorder): on the roadmap; currently rejected with a graceful error.
- **Click and Drag via NL**: not supported as a natural language test step; supported only via Manual Interaction. Desktop Web only.
- **Click and Drag speed**: executes slowly by design so the dragged element stays in focus during the movement; faster execution could cause the element to lose focus mid-drag.
- **NL slider authoring**: not supported. Use Manual Interaction.
- **NL confirmation gestures** (slide-to-confirm): not supported. Use Manual Interaction.
- **Drag and drop on canvas-based elements via NL**: canvas elements rely on custom rendering; use Manual Interaction.
- **Editing manual drag steps**: source/target locators and step-level config can be edited; the drag vector and gesture timing are immutable to preserve replay fidelity.

### Drag FAQs


**What is the difference between Drag and Drop and Click and Drag?**
Drag and Drop long-presses the element to pick it up before moving it, and works on all platforms. Click and Drag presses and moves the element immediately without a long press, and is available on Desktop Web only. See [Drag and Drop vs Click and Drag](#drag-and-drop-vs-click-and-drag).

**Why is my Click and Drag step slow?**
This is expected. Click and Drag executes deliberately slowly to keep the dragged element in focus throughout the movement. A faster gesture could cause the element to lose focus mid-drag and fail the step.

**Can I author a slider drag with natural language?**
No. Sliders have moving targets that NL cannot resolve reliably. Use Manual Interaction to capture the slider gesture directly. The captured step replays at ≥ 95% success rate across devices.

**Can I author a slide-to-confirm or drag-to-pay step with NL?**
No. Confirmation gestures depend on dynamic UI state and must be captured via Manual Interaction.

**My drag step passes on the recording device but fails on another device. What's wrong?**
KaneAI replays use element resolution by default. Cross-device failures usually indicate that the source or target element identifier changed across builds. Inspect the step logs to see the resolution path used (element vs. coordinate) and ensure the elements expose stable accessibility IDs.

**Why isn't manual recording available on Mobile Web?**
The KaneAI agent does not enter Recording state for mobile browser sessions. Use natural language instructions or slash commands instead.

**Can I edit a captured Manual Interaction drag step?**
You can edit the source / target locators and step-level configuration. The drag vector and gesture timing are immutable for Manual steps to preserve replay fidelity.

**Does drag work inside a KaneAI Module?**
Yes, drag steps can be saved into Modules and reused across test cases. Module versioning applies as usual.

**Can I parameterize a drag step?**
Yes. Use `{{variable_name}}` in the source or target reference. Local variables, global variables, smart variables, parameters, and dataset rows are all supported.

**Does drag work inside if/else and while constructs?**
Yes. Drag steps can be placed inside conditional blocks (`if X is visible then drag Y to Z`) and while loops. Each iteration re-resolves elements at runtime.

**Is drag and drop supported on real devices?**
Yes, drag works on both real devices and the device cloud for App testing. Real Device Web also supports manual drag.

## Next Steps


Continue with these guides:

- [KaneAI Finding and Interacting With Elements](/support/docs/kaneai-kb-finding-and-interacting-with-elements/)
- [KaneAI Scroll in Feature](/support/docs/kane-ai-scroll-in-feature/)
- [KaneAI Forms Inputs and Data Entry](/support/docs/kaneai-kb-forms-inputs-and-data-entry/)
- [KaneAI Command Guide](/support/docs/kane-ai-command-guide/)
