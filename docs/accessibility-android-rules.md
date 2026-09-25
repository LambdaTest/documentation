---
id: accessibility-android-rules
title: Android Accessibility Rules
sidebar_label: Android Rules
description: Every Android accessibility rule TestMu AI checks, mapped to the closest WCAG criterion with TalkBack-focused remediation.
slug: accessibility-android-rules/
toc_max_heading_level: 2
---

import { BRAND_URL } from '@site/src/component/BrandName';

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
          "name": "Android Accessibility Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rules/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Article","TechArticle"],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.testmuai.com/support/docs/accessibility-android-rules/" },
    "headline": "Android Accessibility Rules",
    "description": "Every Android accessibility rule TestMu AI checks, mapped to the closest WCAG criterion with TalkBack-focused remediation.",
    "url": "https://www.testmuai.com/support/docs/accessibility-android-rules/",
    "image": { "@type": "ImageObject", "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp", "width": 1200, "height": 630 },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "author": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "url": "https://www.testmuai.com/" },
    "publisher": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "alternateName": ["TestMuAI","TestMu","LambdaTest"], "url": "https://www.testmuai.com/", "logo": { "@type": "ImageObject", "url": "https://www.testmuai.com/logo.png" }, "sameAs": ["https://www.linkedin.com/company/testmu-ai/","https://x.com/testmuai","https://www.youtube.com/@TestMuAI"] },
    "dateModified": "2026-09-24T00:00:00+05:30"
  }) }}
/>

# Android Accessibility Rules

Android rules map to the closest WCAG criterion and cover TalkBack behavior. 34 rules in total. Every rule below is a standalone section with its WCAG mapping, what it checks, why it matters, common failures, and how to fix.

## Button Element Capitalisation Check

**WCAG:** [3.1.6 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)

**What it checks:** Reviews button labels — including clickable containers acting as buttons — for irregular capitalization: labels that begin with a lowercase letter, mid-word capitalization (e.g., "SubMit", "LogIn"), or an unnecessary capital after a hyphen in hyphenated labels (e.g., "Sign-In" instead of "Sign-in").

**Why it matters:** Screen readers use capitalization as a pronunciation cue. Irregular casing — all-caps fragments, camel case, or mixed-case words — can cause text-to-speech engines to spell out letters, split words unnaturally, or mispronounce the label, making the button's purpose harder to understand when heard rather than read.

**Common failures:**

- marketing-driven all-caps or camel-case strings ("BUY NOW", "LogIn") baked into the source text
- hyphenated labels with inconsistent casing ("Sign-In", "Check-Out")

**How to fix:**

- use sentence case (e.g., "Save changes") in the underlying string instead of all caps or inconsistent capitalization
- if a stylized all-caps look is desired visually, apply it through styling (`android:textAllCaps`) rather than in the source string, so the underlying accessible text remains normally cased
- keep hyphenated labels in sentence case too — "Sign-in", not "Sign-In"

---

## Duplicate Accessibility Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Groups of visible, interactive elements on the same screen that share an identical accessibility label — including duplicates across different widget types, such as a Button and a Switch both labeled the same way. All elements in a duplicate group are reported together so they can be reviewed as a set.

**Why it matters:** Voice Access users activate elements by speaking their labels — "Click Delete". When two elements are both labeled "Delete", the software cannot determine which one the user means. Screen reader users hear the same announcement for different controls and cannot tell them apart: three list rows each containing a button announced only as "More options" are indistinguishable when navigated element by element.

**Common failures:**

- a static `contentDescription` (e.g., "More options", "Delete") reused on every item in a list instead of composed with the item's identity
- repeated icon buttons sharing a single generic description
- copy-pasted layouts where labels were never made unique

**How to fix:**

- ensure each interactive element has a unique accessibility label
- make labels contextual — include the item they act on: "Delete — Order #1234", "More options for John's playlist"
- review list and grid layouts first, since repeated item templates are the most common source of duplicates

---

## Dynamic Type Support

**WCAG:** [1.4.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

**What it checks:** Examines whether on-screen text is sized in `sp` (scale-independent pixels) — the only Android text unit that responds to the user's system-wide font-size preference. Text sized in fixed units (`dp`, `px`, `pt`, `in`, `mm`) renders at a fixed size no matter what the user configures. :::note The required device data is available on Android 11+ only; on older devices the rule passes silently rather than flagging an issue. :::

**Why it matters:** Users with low vision commonly increase Android's font-size setting (up to 200%). Text sized in `dp` or `px` ignores that setting entirely — it stays small regardless, leaving the user no way to read it short of using a screen magnifier for every interaction. WCAG 1.4.4 requires that text be resizable up to 200% without loss of content or functionality.

**Common failures:**

- `android:textSize` declared in `dp` or `px` to "protect" a layout from large fonts
- custom text rendering that computes pixel sizes directly

**How to fix:**

- replace fixed-unit text sizes with scale-independent units so the accessibility font-scale takes effect — use `sp` for `android:textSize` instead of `dp` or `px`, and avoid setting a fixed text size on `TextView` / `Button` / `EditText`
- test at the system's largest font-size setting and confirm no text clips or truncates (see Non-Responsive Container Clips Text for the layout side of this)

---

## Emoji or Symbol Used in Accessibility Label

**WCAG:** 

**What it checks:** Interactive elements whose accessible label is made up mostly or entirely of emoji, arrows, geometric shapes, or other special symbols instead of descriptive text. A label is flagged when half or more of its meaningful characters are emoji or symbols. Ordinary punctuation is acceptable; static (non-interactive) text is not checked.

**Why it matters:** Screen readers announce emoji and symbols by their Unicode names, which are often verbose, ambiguous, or inconsistent across devices and screen reader versions. A button labeled "→" may be read as "rightwards arrow" — which says nothing about what the button does. A label like "🔥🔥🔥" produces "fire fire fire": noise, not meaning. Users who rely on the spoken label get no usable information about the control's purpose.

**Common failures:**

- icon-only buttons labeled with the emoji itself ("❤️", "★", "✓") instead of an action description
- decorative symbols included in the accessible name alongside little or no text

**How to fix:**

- determine intent — check whether the emoji is functional (represents an action) or decorative
- replace functional emoji with a descriptive verb, e.g. change "❤️" to "Add to Favorites"
- hide decorative icons from the focus order instead of labeling them — set `android:importantForAccessibility="no"`

---

## Fixed Orientation Lock (Android)

**WCAG:** [1.3.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)

**What it checks:** Activities with `android:screenOrientation` set to a fixed value (`portrait`, `landscape`, `sensorPortrait`, `sensorLandscape`) in the manifest, preventing device rotation.

**Why it matters:** Users with motor disabilities may mount their device in a fixed orientation (e.g., attached to a wheelchair). Users with low vision may prefer landscape to display larger text. Locking orientation removes this choice and can make the app physically uncomfortable or impossible to use.

**Common failures:**

- `android:screenOrientation="portrait"` set globally on all activities
- orientation locked programmatically with `setRequestedOrientation()` for non-essential reasons
- splash screens or onboarding locked to portrait that propagate the lock to subsequent screens

**How to fix:**

- remove `android:screenOrientation` from the manifest (defaults to user-controlled rotation)
- only lock orientation when the content genuinely requires it (e.g., a camera viewfinder)
- test the app in both orientations to confirm layouts adapt correctly
- document any essential orientation requirement with a clear justification

---

## Images with Text

**WCAG:** [1.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

**What it checks:** Examines images on the screen for meaningful text rendered inside the image itself — text that exists only as pixels, with no real text element carrying it. Detection is AI-based, analyzing the rendered screen rather than the view hierarchy alone. *(AI rule)*

**Why it matters:** A screen reader can only speak what the accessibility tree contains. Text baked into a banner, promotion image, or screenshot is invisible to TalkBack, and it does not scale with the user's font-size setting, does not reflow, and cannot be selected or translated. The information exists solely for sighted users.

**Common failures:**

- marketing banners exported from design tools with headline text flattened into the bitmap
- screenshots or diagrams containing instructions
- stylized text rendered as an image to preserve a custom font

**How to fix:**

- avoid embedding meaningful text inside images — use real text views (`TextView`) so TalkBack can read the content, or provide the text through `android:contentDescription`
- if the image is decorative, mark it as such (`android:importantForAccessibility="no"`) so screen readers skip it

---

## Inaccessible Text Focus

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `TextView` and other text-bearing elements that are not reachable through TalkBack navigation because they are marked as not important for accessibility or are hidden behind non-focusable containers.

**Why it matters:** If meaningful text cannot receive TalkBack focus, blind and low-vision users miss the information entirely. This is especially problematic for status messages, instructions, and error text.

**Common failures:**

- `TextView` elements inside containers with `importantForAccessibility="noHideDescendants"`
- dynamically added text views that do not inherit accessibility properties
- text elements positioned off-screen (used for visual spacing) that are still rendered but not focusable
- `TextView` elements with `focusable="false"` that contain meaningful information

**How to fix:**

- ensure text elements containing meaningful content have `importantForAccessibility="yes"`
- do not suppress descendant accessibility on containers that hold readable text
- remove decorative text from the accessibility tree with `importantForAccessibility="no"` (only when truly decorative)
- test by swiping through the screen with TalkBack and confirming all meaningful text is announced

---

## Insufficient Color Ratio

**WCAG:** [1.4.3 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

**What it checks:** Measures the contrast ratio between foreground text or icon colors and their background, flagging pairs that fall below the 4.5:1 ratio for normal text or 3:1 for large text.

**Why it matters:** Users with low vision, color-vision deficiencies, or those using devices in bright sunlight depend on adequate contrast to read text and distinguish UI elements. Low contrast makes content illegible.

**Common failures:**

- light gray text on white backgrounds in settings or list items
- placeholder text in input fields with very low contrast
- status indicators using pale colors on light backgrounds
- disabled-state styling that falls below minimum ratios while the element remains interactive

**How to fix:**

- verify text contrast against backgrounds using a color contrast analyzer
- use Material Design color tokens that are pre-validated for contrast compliance
- ensure all text states (enabled, disabled, error, hint) meet minimum ratios
- test on multiple devices and brightness levels to catch theme-specific failures

---

## Insufficient Target Spacing

**WCAG:** [2.5.5 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

**What it checks:** Measures the gap between adjacent clickable or focusable elements and flags pairs that are too close together, increasing the risk of mis-taps.

**Why it matters:** Even when individual touch targets meet the minimum size, placing them too close together makes it difficult for users with motor impairments to tap one without accidentally hitting the other. Sufficient spacing reduces errors and improves usability.

**Common failures:**

- toolbar buttons placed edge-to-edge with no gap
- action buttons in list items (edit, delete, share) packed tightly together
- bottom navigation icons with minimal spacing on small screens
- floating action buttons positioned near other interactive elements

**How to fix:**

- add at least 8dp of spacing between adjacent interactive elements
- use `android:layout_margin` or Compose `Modifier.padding` to create clear separation
- consider grouping related actions into an overflow menu to reduce density
- test on the smallest supported screen size to confirm spacing remains adequate

---

## Interactive Role Undefined (Android)

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive elements (buttons, switches, checkboxes, sliders) that do not expose a recognized accessibility role to the Android accessibility framework.

**Why it matters:** TalkBack announces both the accessible name and the role ("Button", "Switch", "Checkbox") to tell users what kind of control they are interacting with. Without a role, users hear the name but cannot tell whether to tap, swipe, or double-tap.

**Common failures:**

- custom clickable `View` elements with no `accessibilityClassName` override
- `LinearLayout` or `FrameLayout` used as a button with an `onClickListener` but no role
- Jetpack Compose elements using `clickable` without a `role` parameter in `Modifier.semantics`

**How to fix:**

- use native Android widgets (`Button`, `Switch`, `CheckBox`) whenever possible
- for custom views, override `getAccessibilityClassName()` to return the appropriate widget class name
- in Jetpack Compose, set `role = Role.Button` (or the appropriate role) inside `Modifier.semantics { }`
- test with TalkBack to confirm the announced role matches the element's behavior

---

## Invalid Range Values

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Examines range controls — sliders (`SeekBar`), progress bars, steppers — and reports controls whose range values are inconsistent: the current value falls outside the declared min/max range, or the min/max range itself is invalid.

**Why it matters:** Assistive technology announces a range control's position from its reported values ("50 percent"). When the values are inconsistent, that announcement is wrong or meaningless, and adjusting the control through TalkBack's gestures or Voice Access produces unpredictable results.

**Common failures:**

- a custom range control exposing placeholder or default values to the accessibility tree
- a slider's value set programmatically before its range was configured
- progress indicators reporting a stale total

**How to fix:**

- ensure min < max and the current value falls within [min, max] on the control (`SeekBar` / `Slider`)
- for custom range controls, expose the range to assistive technology via `AccessibilityNodeInfo.RangeInfo`

---

## Meaningful Sequence

**WCAG:** [1.3.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

**What it checks:** Examines whether the programmatic reading order of the screen matches the meaningful visual sequence of its content. Detection is AI-based, comparing the announced order against the visual layout. *(AI rule)* Where Traversal Order Does Not Match Visual Layout targets misused traversal overrides on focusable controls, this rule concerns the sequence of the content itself.

**Why it matters:** Content whose meaning depends on order — steps in a process, a heading followed by its body, a price next to its product — loses that meaning when announced out of sequence. The user hears all the pieces but cannot reconstruct the whole.

**Common failures:**

- multi-column layouts read column-by-column when the meaning flows row-by-row
- captions announced before the content they describe
- visual ordering achieved purely through positioning while the hierarchy retains insertion order

**How to fix:**

- reorder views in the layout to match the visual reading order
- use `android:accessibilityTraversalBefore` / `android:accessibilityTraversalAfter` to set the correct TalkBack traversal sequence when reordering in code isn't possible

---

## Minimum Text Size

**WCAG:** 

**What it checks:** Examines on-screen text and reports elements rendered below the recommended minimum size (16dp on Android) that do not scale with the user's font preference.

**Why it matters:** Very small text is hard to read for everyone and unreadable for users with low vision — especially when it is also sized in a fixed unit that ignores the system font scale. Minimum sizes exist because below them, no amount of squinting recovers the content.

**Common failures:**

- captions, timestamps, and legal text set well below the recommended minimum
- fixed-size fonts that ignore the user's text-size preference
- dense information UIs shrinking text to fit more on screen

**How to fix:**

- increase any non-scalable text (dp/px) below 16dp to at least the recommended minimum
- prefer `sp` so text scales with the user's font preference (see Dynamic Type Support)

---

## Mismatched Label Text (Android)

**WCAG:** [2.5.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

**What it checks:** Compares the visible text of interactive elements with their computed accessible name (from `contentDescription` or labeling relationships) and flags cases where the accessible name does not contain the visible text.

**Why it matters:** Voice control users speaking the visible label cannot activate the control, and screen reader users hear something different from what is on screen.

**Common failures:**

- a button labeled "Submit" visually but with `contentDescription` set to "Send data"
- a `contentDescription` that abbreviates or paraphrases the visible text
- programmatic label updates that fall out of sync with the visible UI
- developer identifiers (`accountExists`, `user_action_login`) used as the accessible name

**How to fix:**

- the accessible name must contain the visible label as a substring, ignoring case and punctuation. Prefer an exact match; where extra context is needed, put the visible label first: visible "Delete" may be named "Delete" or "Delete, removes item", not "Remove item"
- never use developer identifiers as accessible names
- **Android:** `contentDescription` overrides visible text — if you set it, keep the on-screen string inside it

---

## Misplaced Field Label (Android)

**WCAG:** [2.5.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

**What it checks:** Controls whose accessible name contains their visible text but does not begin with it. This is the companion to Mismatched Label Text: where that rule requires the visible text to appear in the accessible name at all, this one requires it to appear at the start.

**Why it matters:** Voice control matches names from the front. Screen reader users also hear extra context before the label they can see on screen, which slows recognition of the control they're focused on.

**Common failures:**

- prefixing context onto the label: "Order summary, Edit" on a control that visibly reads "Edit"
- composing a combined label so the control's own text lands last

**How to fix:**

- start the accessible name with the visible label; put any extra context after it ("Edit, order summary", not "Order summary, Edit")
- **Android:** if `contentDescription` is set on a control with visible text, begin it with that text

---

## Missing Field Label

**WCAG:** [3.3.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)

**What it checks:** Android input controls expose clear labels that describe the purpose of the field to assistive technologies.

**Why it matters:** Users need to know what information a field expects before they can complete forms accurately with TalkBack or other assistive tools.

**Common failures:**

- editable fields with placeholder-only guidance
- inputs without associated labels in custom layouts
- reused generic labels that do not identify the field clearly

**How to fix:**

- provide a visible and accessible label for each field
- connect the label and field programmatically when the UI framework supports it
- avoid relying on hints alone when they disappear after input starts

---

## Missing Image Alt

**WCAG:** [1.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

**What it checks:** Meaningful Android images expose a useful accessibility description for TalkBack and related assistive technologies.

**Why it matters:** If meaningful imagery is silent to assistive technology, users can miss content, state, or action context that is visible on screen.

**Common failures:**

- product or profile images with no `contentDescription`
- icon buttons with visual meaning but no accessible label
- decorative images announced unnecessarily

**How to fix:**

- add a clear `contentDescription` to meaningful images
- use an empty description for decorative content when appropriate
- verify that image-based controls expose both purpose and action

---

## Missing Input Value

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `EditText`, `AutoCompleteTextView`, and custom input elements expose their current text value through the accessibility framework.

**Why it matters:** TalkBack users cannot see the screen to verify their input. If the current value is not announced, users cannot confirm what they typed, leading to errors in forms, searches, and text entry.

**Common failures:**

- custom input views that render text visually but do not expose it through `AccessibilityNodeInfo`
- masked fields (passwords, PINs) that hide the value without providing a character count or confirmation mechanism
- programmatically set text that does not trigger an accessibility event

**How to fix:**

- use standard `EditText` or `TextInputLayout` which expose values automatically
- for custom inputs, populate `AccessibilityNodeInfo.setText()` with the current value
- fire `TYPE_VIEW_TEXT_CHANGED` events when the value changes programmatically
- test with TalkBack by focusing the input field and confirming the current value is announced

---

## Missing Screen Title

**WCAG:** [2.4.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html)

**What it checks:** Each `Activity` or navigable screen exposes a title through the `android:label` attribute, toolbar title, or accessibility pane title.

**Why it matters:** TalkBack announces the screen title when a user navigates to a new screen. Without a title, users cannot tell which screen they are on, making navigation through an app disorienting and slow.

**Common failures:**

- activities with no `android:label` in the manifest
- fragments used as top-level destinations without setting an accessibility pane title
- dynamic screen titles that are set programmatically but omit the TalkBack announcement
- toolbar titles that are set to empty strings or the app name on every screen

**How to fix:**

- set `android:label` on every `<activity>` in `AndroidManifest.xml`
- for fragment-based navigation, call `ViewCompat.setAccessibilityPaneTitle(view, "Screen Name")`
- ensure toolbar titles reflect the specific screen, not just the app name
- test by navigating between screens with TalkBack to confirm announcements

---

## Missing View Accessibility

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Views that carry meaningful content or functionality but are marked as `importantForAccessibility="no"` or have `focusable="false"` when they should be focusable.

**Why it matters:** When a view is excluded from the accessibility tree, TalkBack users cannot perceive or interact with it. If the view carries meaningful information or actions, those users lose access entirely.

**Common failures:**

- setting `android:importantForAccessibility="no"` on views that contain meaningful text or actions
- container layouts that suppress child accessibility without individual evaluation
- custom views that do not call `sendAccessibilityEvent` after state changes

**How to fix:**

- set `importantForAccessibility="yes"` on views that carry meaningful content
- only mark truly decorative elements as `importantForAccessibility="no"`
- ensure custom views implement `AccessibilityDelegate` or override accessibility methods
- test with TalkBack to confirm all meaningful elements are announced

---

## Nested Control Issues

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive views (buttons, switches, checkboxes) that are nested within other interactive containers (clickable layouts, other buttons), creating a confusing accessibility tree.

**Why it matters:** When TalkBack encounters nested interactive elements, it may focus on the outer container and announce a combined label that obscures the inner controls, or it may skip the inner controls entirely. Users cannot predictably reach or activate individual nested actions.

**Common failures:**

- a clickable `LinearLayout` that contains a `Button` and a `CheckBox` as children
- a list item with an `onClickListener` on the row and separate clickable actions inside it
- nested `RecyclerView` items with overlapping click targets

**How to fix:**

- flatten the interactive hierarchy: either the container or its children should be interactive, not both
- use `android:importantForAccessibility="no"` on the container if individual child controls should receive focus
- for list items with multiple actions, use `AccessibilityAction` to expose additional actions through TalkBack's actions menu
- test by swiping through the screen with TalkBack to confirm each control is individually reachable

---

## Non-accessible Interaction (Android)

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Elements that respond to touch events but are not reachable or activatable through TalkBack gestures (double-tap to activate, swipe to navigate).

**Why it matters:** TalkBack users interact with the screen through gestures: swiping to move focus and double-tapping to activate. If an element responds only to direct touch coordinates, TalkBack users cannot use it.

**Common failures:**

- custom views that intercept `onTouchEvent` without implementing accessibility actions
- gesture-based interactions (long press, swipe) with no accessibility alternative
- views that use `OnTouchListener` without a corresponding `OnClickListener`
- canvas-drawn interactive elements with no accessibility node info

**How to fix:**

- implement `OnClickListener` alongside any touch listeners
- add `AccessibilityAction` entries for custom gestures (long press, swipe)
- for canvas-drawn elements, create virtual child accessibility nodes using `ExploreByTouchHelper`
- test with TalkBack to confirm every interactive element can be reached by swiping and activated by double-tapping

---

## Non-Descriptive Link Text

**WCAG:** [2.4.4 (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

**What it checks:** Links whose entire accessible name is a generic call-to-action that says nothing about the destination — labels like "Click here", "Read more", "Learn more", "Tap here", "More info", "Details", "Go", or "Link". Only exact matches are flagged: "Click here for pricing details" passes; a link whose whole text is "Click here" fails. The rule applies to elements containing actual links (URL-backed text).

**Why it matters:** Screen reader users frequently navigate by pulling up a list of all links on a screen, or by jumping link to link. Out of context, a list reading "Read more, Read more, Learn more, Click here" is unusable — every entry sounds identical and none reveals where it leads. Descriptive link text lets users decide whether to follow a link without reading the surrounding content.

**Common failures:**

- repeated "Read more" / "Learn more" links under every article or card
- links whose visible text is a bare "here", "Details", or "Link"

**How to fix:**

- replace vague link text with a label that says what the link does (e.g., "Read more" → "Read our privacy policy")
- if the visible text can't be changed, add a descriptive accessible label instead — set `android:contentDescription` with a clear label, or rewrite the visible `android:text`

---

## Non-Focusable Interactive Element

**WCAG:** [2.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html)

**What it checks:** Examines visible, enabled interactive elements and reports any that respond to touch but cannot receive input (keyboard/d-pad) focus, and have no focusable interactive ancestor or descendant handling the action on their behalf.

**Why it matters:** Users navigating with an external keyboard, D-pad, or switch access move focus between focusable elements and activate the focused one. An element that responds to touch but cannot receive input focus is simply unreachable for them — the action exists for touch users only.

**Common failures:**

- `setOnClickListener` sets `clickable=true` but does not set `focusable=true` — both are required, and it's easy to add one without the other
- custom controls that intercept touch events but never became focusable
- a clickable child inside a focusable container that does not actually delegate the click

**How to fix:**

- add `android:focusable="true"` or `view.isFocusable = true` on custom clickable views, or use native controls (`Button`, `EditText`, `CheckBox`, `Switch`), which are focusable by default
- in Compose, use `Modifier.clickable {}` inside a `Button`, or add `.focusable()` to custom clickable containers
- where a container handles its children's click (e.g., a list row), make the container both focusable and clickable so keyboard users can reach the action

---

## Non-Responsive Container Clips Text

**WCAG:** [1.4.10 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

**What it checks:** Examines whether layout containers that hold text use flexible sizing (`match_parent`, `wrap_content`, or `0dp` with `layout_weight`) rather than fixed pixel dimensions. Containers without any text content are not checked — fixed dimensions are legitimate for icons and decorative elements. :::note The required device data is available on Android 11+ only; on older devices the rule reports **Incomplete**. :::

**Why it matters:** This rule is the counterpart to [Dynamic Type Support](#dynamic-type-support): even when text is correctly sized in `sp`, a hard-sized parent container cannot grow with it. When the user enlarges their font scale, the text expands but the container does not — the result is clipped, truncated, or overlapping text, and content can become unreadable or actions unreachable. WCAG 1.4.10 requires content to reflow without loss of information or functionality.

**Common failures:**

- cards, chips, or banners with hard-coded `layout_width`/`layout_height` in `dp` wrapping text
- fixed-height rows in lists whose text truncates at larger font scales

**How to fix:**

- identify the container that wraps the clipped text
- replace fixed dimensions with flexible sizing so the container grows with its content — use `match_parent`, `wrap_content`, or `0dp` with `layout_weight` instead of a fixed dp/px dimension. In `ConstraintLayout`, use `0dp` with constraint chains rather than fixed sizes.

---

## Redundant Role Keyword in Accessibility Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Accessible names that embed the control's role — words like "button", "switch", "checkbox", "slider", "dropdown" — on controls whose role TalkBack already announces. Common informal variants are also flagged ("btn", "toggle", "text field", "picker"), since they encode the same role intent. Only role words matching the actual control type are considered: "Play button" on a text label that is not a button is not flagged.

**Why it matters:** TalkBack appends the role to every announcement. A Button labeled "Submit button" is announced as "Submit button, Button" — the user hears the role twice on every focus. Across a whole screen this doubles the verbosity of navigation and slows down screen reader users without adding any information.

**Common failures:**

- labels that describe the widget instead of the action: "Settings icon", "Search button", "Volume slider"
- abbreviated role words in labels: "Submit btn", "WiFi toggle"

**How to fix:**

- identify role keywords — find words like "button", "link", or "icon" in the label that describe the control's type
- remove them — "Settings Icon" becomes "Settings"
- assign the role programmatically instead — use the `Button` class, or `role = Role.Button` in Compose, so TalkBack announces it once, correctly

---

## Redundant State Keyword in Accessibility Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Accessible names that embed the control's state — words like "on", "off", "checked", "selected", "disabled" — on controls whose state TalkBack already announces automatically. Only state words TalkBack actually speaks for that control type are flagged: "on"/"off" for switches and toggles, "checked"/"not checked" for checkboxes, "selected" for selected elements, and "disabled" for disabled interactive elements.

**Why it matters:** TalkBack derives state from the control itself and appends it to every announcement. When the state is also written into the label, users hear it twice — "WiFi ON, on, Switch". Worse, the hardcoded state does not update when the control changes: after toggling, TalkBack announces "WiFi ON, off, Switch" — the label now contradicts the real state, and the user cannot tell which is true.

**Common failures:**

- toggle labels that bake in the current state: "Dark mode off", "Notifications ON"
- labels updated manually in code to mirror state instead of relying on the control's state APIs

**How to fix:**

- audit dynamic text and remove status words like "On", "Checked", or "Expanded" from the label string
- stabilize the label — keep it static (e.g., "Notifications") rather than describing its current state
- map state to platform APIs instead — use `stateDescription` or `android:checked="true"` so TalkBack announces it correctly and it stays in sync

---

## Text Spacing

**WCAG:** 1.4.12

**What it checks:** Examines the rendered spacing of on-screen text and reports three distinct problems: line height, word spacing, or paragraph gaps rendered below a readability floor. Thresholds are calibrated for mobile typography, so default Android text styles pass.

**Why it matters:** Text rendered below the readability floor is hard for users with low vision, dyslexia, or cognitive disabilities to track. When lines sit on top of each other, tracking from the end of one line to the start of the next becomes genuinely difficult; when word gaps vanish, word shapes blur together; when paragraphs have no separation, the visual structure of the content is lost.

**Common failures:**

- `android:lineSpacingMultiplier` below 1.0 compressing line height
- negative `android:letterSpacing` shrinking word gaps
- consecutive paragraphs stacked with zero or near-zero margin

**How to fix:**

- keep `android:lineSpacingMultiplier` at 1.0 or above and avoid negative `android:letterSpacing`
- on typefaces with narrow default word spacing, set `android:letterSpacing="0.05"` explicitly on body text
- separate consecutive multi-line `TextView`s with `android:layout_marginTop`

---

## Traversal Order Does Not Match Visual Layout

**WCAG:** [2.4.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

**What it checks:** Examines misuse of Android's reading-order overrides (`accessibilityTraversalBefore` / `accessibilityTraversalAfter`, and Compose's `traversalIndex`) that break TalkBack navigation. Two failure modes are reported: 1. **Circular traversal chains** — overrides that form a loop, leaving TalkBack's reading order undefined and potentially trapping users cycling among the same elements. 2. **Reading order contradicts visual order** — the developer-defined traversal chain reads elements in a different sequence than they appear on screen (top-to-bottom, left-to-right).

**Why it matters:** Screen reader users build a mental model of the screen from the order in which elements are announced. When reading order diverges from the visual layout — a footnote announced before its heading, form fields read out of sequence — content becomes disorienting and forms can be filled in incorrectly. Cycles are worse: navigation loses forward progress entirely.

**Common failures:**

- `accessibilityTraversalBefore`/`After` attributes added to "fix" one screen and left pointing at the wrong targets after a redesign
- Compose `Modifier.semantics { traversalIndex = N }` values that reorder announcements away from the visual layout
- two overrides that reference each other, forming a loop

**How to fix:**

- compare what you see on screen with the order TalkBack reads it
- reorder elements in the view hierarchy so their code order matches the visual layout — the default (layout) order is correct for most screens, so prefer removing overrides
- if reordering in code isn't possible, set the reading order deliberately with `android:accessibilityTraversalBefore` / `android:accessibilityTraversalAfter`, and verify the full chain reads in a meaningful sequence with no loops

---

## Undersized Touch Target

**WCAG:** [2.5.5 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

**What it checks:** Measures the rendered size of clickable and focusable elements and flags those smaller than 48x48 dp (the Android accessibility guideline minimum).

**Why it matters:** Users with motor impairments, tremors, or limited dexterity need adequately sized targets to tap accurately. Small targets cause frequent mis-taps, frustration, and can make features practically unreachable.

**Common failures:**

- icon buttons (close, favorite, menu dots) rendered at 24x24 dp without additional touch padding
- inline text links with no minimum height enforcement
- compact toolbar actions sized to the icon dimensions only
- list item action buttons (delete, edit) with minimal padding

**How to fix:**

- set `android:minWidth` and `android:minHeight` to at least 48dp on all interactive elements
- use `android:padding` or `TouchDelegate` to expand the touch area without changing the visual size
- in Jetpack Compose, use `Modifier.sizeIn(minWidth = 48.dp, minHeight = 48.dp)`
- Material Design components enforce this by default; prefer using them over custom implementations

---

## Unique Option Names

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Examines selection groups — radio groups, tabs, segmented pickers — and reports options within the same group that share an identical accessible name. Unlike Duplicate Accessibility Label, which compares elements across the whole screen, this rule looks specifically inside a single selection group, where identically named options make the choice itself meaningless.

**Why it matters:** A selection group exists to offer a choice. When three radio buttons all announce as "Option", a TalkBack user cannot tell what they are choosing between — position in the group carries the meaning, and position is exactly what a non-visual user does not have.

**Common failures:**

- radio buttons or tabs labelled from a shared placeholder string
- options whose label was set to the group's title rather than the individual choice
- tab items differentiated only by icon, with identical fallback labels

**How to fix:**

- give every option within a picker, radio group, or segmented control a distinct accessible name so screen reader users can tell them apart
- don't rely on position or visual styling to differentiate identically labeled options

---

## Unlabeled Checkbox Element

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `CheckBox` and checkbox-like views that have no `contentDescription`, no associated `<label>`, and no text content, leaving TalkBack with nothing to announce beyond "Checkbox, not checked."

**Why it matters:** Without a label, TalkBack users hear "Checkbox" but cannot tell what option they are selecting or deselecting. This makes forms and settings screens unusable for blind users.

**Common failures:**

- `CheckBox` views with no text and no `contentDescription`
- custom checkbox implementations that do not set accessibility text
- programmatically created checkboxes that skip label assignment

**How to fix:**

- set the `android:text` attribute on the `CheckBox` element
- if visual text is provided by a separate `TextView`, use `android:labelFor` on the label pointing to the checkbox
- for icon-only checkboxes, set `contentDescription` to describe the purpose
- test with TalkBack and confirm the announced text clearly identifies the option

---

## Unlabeled Toggle Control

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `Switch`, `ToggleButton`, and `SwitchCompat` elements that have no accessible label, leaving TalkBack to announce only the state ("On" / "Off") without context.

**Why it matters:** Hearing "Switch, off" without knowing what the switch controls is useless. TalkBack users need both the label and the state to understand the setting and decide whether to change it.

**Common failures:**

- `Switch` elements with no `android:text` and no `contentDescription`
- toggle controls where the label is a separate `TextView` not programmatically linked
- custom toggle implementations that do not expose accessibility text

**How to fix:**

- set `android:text` on the toggle control to describe the setting
- if the label is a separate view, use `android:labelFor` on the label pointing to the toggle
- for Jetpack Compose, set a description in `Modifier.semantics { contentDescription = "..." }`
- test with TalkBack to confirm the full announcement includes both the label and the state

---

## Unnamed Nested Element

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Nested views (images, icons, text) inside a focusable parent container that do not have their own accessible label, causing their meaning to be lost in TalkBack's aggregated announcement of the parent.

**Why it matters:** When a focusable container aggregates all child text into a single announcement, individual elements lose context. Users cannot distinguish between a product image, a price label, and an add-to-cart button if they are all merged into one announcement.

**Common failures:**

- image icons inside a clickable row with no individual `contentDescription`
- status badges (unread count, priority indicator) that are visually meaningful but unnamed
- grouped elements where only the parent has an accessible name, hiding the details of children

**How to fix:**

- add `contentDescription` to each meaningful child element within a group
- if the parent should aggregate children, compose the parent's `contentDescription` to include all relevant child information
- use `android:importantForAccessibility="no"` only on truly decorative children
- test with TalkBack at different granularity levels (character, word, element) to confirm all meaningful content is announced

---
