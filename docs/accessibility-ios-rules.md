---
id: accessibility-ios-rules
title: iOS Accessibility Rules
sidebar_label: iOS Rules
description: Every iOS accessibility rule TestMu AI checks, mapped to the closest WCAG criterion with VoiceOver-focused remediation.
slug: accessibility-ios-rules/
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
          "name": "iOS Accessibility Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rules/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": ["Article","TechArticle"],
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.testmuai.com/support/docs/accessibility-ios-rules/" },
    "headline": "iOS Accessibility Rules",
    "description": "Every iOS accessibility rule TestMu AI checks, mapped to the closest WCAG criterion with VoiceOver-focused remediation.",
    "url": "https://www.testmuai.com/support/docs/accessibility-ios-rules/",
    "image": { "@type": "ImageObject", "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp", "width": 1200, "height": 630 },
    "inLanguage": "en",
    "articleSection": "Accessibility Testing",
    "author": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "url": "https://www.testmuai.com/" },
    "publisher": { "@type": "Organization", "@id": "https://www.testmuai.com/#organization", "name": "TestMu AI", "alternateName": ["TestMuAI","TestMu","LambdaTest"], "url": "https://www.testmuai.com/", "logo": { "@type": "ImageObject", "url": "https://www.testmuai.com/logo.png" }, "sameAs": ["https://www.linkedin.com/company/testmu-ai/","https://x.com/testmuai","https://www.youtube.com/@TestMuAI"] },
    "dateModified": "2026-09-24T00:00:00+05:30"
  }) }}
/>

# iOS Accessibility Rules

iOS rules map to the closest WCAG criterion and cover VoiceOver behavior. 33 rules in total. Every rule below is a standalone section with its WCAG mapping, what it checks, why it matters, common failures, and how to fix.

## Accessibility Label Not Punctuated

**WCAG:** [3.3.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html)

**What it checks:** Accessibility labels that do not end with proper punctuation (period, comma, question mark, or exclamation mark), which affects VoiceOver's speech cadence and clarity.

**Why it matters:** VoiceOver uses punctuation to determine pacing and intonation. A label that ends abruptly without punctuation causes VoiceOver to run the label into the next announcement without a pause, making it harder for users to parse individual elements.

**Common failures:**

- labels like "Add to cart" with no trailing period
- descriptive labels on images that read as sentences but lack ending punctuation
- multi-word labels that describe status or state without punctuation

**How to fix:**

- end accessibility labels with a period when they form a complete phrase or sentence
- use punctuation consistent with the label's tone: period for statements, question mark for questions
- keep labels concise: a label should describe the element, not be a paragraph
- test with VoiceOver to confirm the speech rhythm sounds natural between consecutive elements

---

## Accessibility Role Definition

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive elements have appropriate `accessibilityTraits` set, such as `.button`, `.link`, `.header`, `.adjustable`, or `.selected`, matching their actual behavior.

**Why it matters:** VoiceOver uses traits to tell users what kind of element they are interacting with and how to use it. Without the correct trait, users may not know they can tap, swipe, or adjust a control.

**Common failures:**

- custom interactive views with no `accessibilityTraits` set (defaults to `.none`)
- links styled as buttons but missing `.link` trait
- section headers in lists without `.header` trait
- slider-like controls missing `.adjustable` trait

**How to fix:**

- set `accessibilityTraits` on every interactive element to match its behavior
- use `.button` for tappable controls, `.link` for navigation links, `.header` for section headings
- for adjustable controls (sliders, steppers), set `.adjustable` and implement `accessibilityIncrement()` and `accessibilityDecrement()`
- in SwiftUI, use `.accessibilityAddTraits()` to add the appropriate traits
- test with VoiceOver and confirm the announced trait matches the element's behavior

---

## Assistive Technology Access

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive elements that have `isAccessibilityElement` set to `false` or are hidden from the accessibility tree while still being visually present and functional.

**Why it matters:** When an interactive element is excluded from the accessibility tree, VoiceOver users cannot perceive or activate it. This effectively locks those users out of features that are available to sighted users.

**Common failures:**

- custom views with `isAccessibilityElement = false` that contain interactive content
- `UIView` subclasses that implement touch handling but do not expose accessibility properties
- elements hidden behind other views that are accessible via direct touch but not VoiceOver navigation
- container views that suppress child accessibility without evaluating each child

**How to fix:**

- set `isAccessibilityElement = true` on all meaningful interactive elements
- for custom container views, either make children individually accessible or provide a container-level label that summarizes the content
- implement `UIAccessibility` protocols on custom views (label, traits, value, hint)
- test with VoiceOver to confirm every interactive element is reachable by swiping

---

## Button Element Capitalisation Check (iOS)

**WCAG:** [3.1.6 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/pronunciation.html)

**What it checks:** Button labels that use all-uppercase text (e.g., "SUBMIT"), all-lowercase text (e.g., "submit"), or inconsistent capitalisation that affects VoiceOver pronunciation.

**Why it matters:** VoiceOver may spell out all-uppercase labels letter by letter (e.g., "S-U-B-M-I-T" instead of "Submit") depending on the speech engine. Inconsistent capitalisation creates an unpredictable listening experience.

**Common failures:**

- button titles set to "DELETE" or "CANCEL" in all caps
- labels that use lowercase for stylistic reasons ("learn more")
- inconsistent capitalisation within the same screen ("Submit" on one button, "SAVE" on another)
- uppercase applied through code (`uppercased()`) rather than styling

**How to fix:**

- use title case or sentence case for button labels ("Submit Order", "Learn more")
- if visual uppercase is desired, apply it through `UIButton.Configuration` text transform or CSS `text-transform` rather than changing the actual text string
- ensure the accessibility label uses natural capitalisation even if the visual display is uppercase
- test with VoiceOver to confirm buttons are spoken as words, not spelled out

---

## Color Contrast Issues

**WCAG:** [1.4.3 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

**What it checks:** Measures the contrast ratio between foreground text or icon colors and their backgrounds, flagging pairs that fall below 4.5:1 for normal text or 3:1 for large text.

**Why it matters:** Users with low vision, color-vision deficiencies, or those using devices in bright outdoor conditions depend on adequate contrast. Low contrast makes text illegible and UI elements indistinguishable.

**Common failures:**

- light gray text on white backgrounds in settings or list cells
- placeholder text in `UITextField` with very low contrast
- status indicators using pale colors on light backgrounds
- custom themes or dark mode implementations where contrast ratios were not validated

**How to fix:**

- verify text contrast against backgrounds using a color contrast analyzer or Xcode Accessibility Inspector
- use Dynamic Colors or semantic color assets that adjust automatically for light and dark modes
- ensure all text states (enabled, disabled, placeholder) meet minimum contrast ratios
- test with Increase Contrast enabled in iOS Accessibility settings

---

## Duplicate Accessibility Label (iOS)

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Multiple interactive elements on the same screen that share the same accessibility label, making them indistinguishable to VoiceOver users.

**Why it matters:** When VoiceOver announces two buttons as "Edit" without any additional context, users cannot tell which one to activate. Unique labels enable users to confidently choose the correct control.

**Common failures:**

- list cells each containing an "Edit" button or "Delete" button with identical labels
- multiple "Close" buttons in a screen with several dismissible panels
- icon buttons that all share a generic label like "Action" or "More"
- navigation items on different sections of a tabbed interface with the same label

**How to fix:**

- include context in the label: "Edit shipping address" vs. "Edit billing address"
- for list items, append identifying information: "Delete order #1234"
- use `accessibilityLabel` with specific context rather than generic action words
- in SwiftUI, use `.accessibilityLabel("specific description")` to override default labels
- test by having VoiceOver list all actions on the screen and confirming each is distinguishable

---

## Dynamic Type Support (iOS)

**WCAG:** [1.4.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

**What it checks:** Text elements use scalable font styles (either system text styles or custom fonts registered with `UIFontMetrics`) and respond to the user's Dynamic Type preference.

**Why it matters:** Users with low vision set a larger preferred text size in iOS Settings. If an app uses fixed font sizes, text remains small regardless of the user's preference, defeating the purpose of the system-wide accessibility feature.

**Common failures:**

- hard-coded font sizes (e.g., `UIFont.systemFont(ofSize: 14)`) instead of text styles
- custom fonts that are not registered with `UIFontMetrics` for scaling
- layouts that break at large text sizes because they use fixed dimensions
- text that scales but containers do not, causing clipping

**How to fix:**

- use `UIFont.preferredFont(forTextStyle:)` or register custom fonts with `UIFontMetrics`
- set `adjustsFontForContentSizeCategory = true` on labels and text views
- use Auto Layout with constraints that accommodate text growth
- test with all Dynamic Type sizes, including the five Accessibility sizes beyond the standard range
- in SwiftUI, use `.font(.body)` or other text styles which scale automatically

---

## Emoji or Symbol Used in Accessibility Label

**WCAG:** 

**What it checks:** Examines whether a visible, interactive element's accessible label is made up mostly of emoji, arrows, geometric shapes, or other special symbols instead of descriptive text. A violation is reported when half or more of the label's meaningful characters are emoji or symbols. Whitespace is ignored, and ordinary punctuation is not counted as a symbol. Static (non-interactive) text is not checked.

**Why it matters:** VoiceOver announces emoji and symbols by their Unicode names, which are verbose and inconsistent across iOS versions and voices. A button labelled with a right arrow may be read as "rightwards arrow", which says nothing about what it does. A label of three fire emoji produces "fire fire fire": noise, not meaning. A user relying on the spoken label gets no usable information about the control's purpose, and Voice Control users cannot speak the label at all.

**Common failures:**

- icon-only buttons whose label is the emoji itself: a heart, an arrow, a star
- decorative symbols concatenated into the accessible name alongside little or no text
- rating displays labelled with filled and empty star characters rather than "3 out of 5 stars"

---

## Fixed Orientation Lock

**WCAG:** [1.3.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)

**What it checks:** Reports apps that restrict viewing to a single orientation (portrait or landscape only).

**Why it matters:** Users with devices mounted to wheelchairs, or with motor conditions that make rotating a device difficult, have no choice about their screen's orientation. An app locked to portrait is simply sideways for a user whose device is fixed in landscape. WCAG 1.3.4 requires content to work in both orientations unless a specific orientation is essential.

**Common failures:**

- a blanket portrait lock applied at project creation and never revisited
- individual screens locking orientation to simplify layout work
- video or camera screens locking orientation without restoring it afterward

**How to fix:**

- support both portrait and landscape orientations unless there's a valid reason to lock one
- if locking orientation is required, provide alternatives or ensure the design accommodates various accessibility needs

---

## Images with Text

**WCAG:** [1.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

**What it checks:** Images whose pixels contain rendered text that exists nowhere else on the screen as real text — text content embedded inside an image that isn't readable by assistive technology.

**Why it matters:** A screen reader can only speak what the accessibility tree contains. Text baked into a banner, promotion image, or screenshot is invisible to VoiceOver, and it does not scale with Dynamic Type, does not reflow, and cannot be selected or translated. The information exists solely for sighted users.

**Common failures:**

- marketing banners exported from design tools with headline text flattened into the bitmap
- screenshots or diagrams containing instructions
- stylized text rendered as an image to preserve a custom font

**How to fix:**

- avoid embedding meaningful text inside images — use real text views with an `accessibilityLabel` set so VoiceOver can read the content
- if the image is decorative, mark it as such so screen readers skip it

---

## Insufficient Touch Target Spacing

**WCAG:** [2.5.8 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

**What it checks:** This is a screen-level rule. The scanner collects every interactive element that is visible, on-screen, enabled, and reachable by touch, then measures the edge-to-edge gap between each pair: A pair is reported when the gap is less than 8 points. Both elements in the pair are reported. A pair is skipped when both elements already meet the 44x44pt minimum (an intentional design, not a hazard), and parent-child pairs are also skipped, since a control nested inside another has zero gap by construction.

**Why it matters:** WCAG 2.5.8 allows a target smaller than the minimum provided it is surrounded by enough clear space that an imprecise tap still lands correctly. The converse is the failure this rule detects: small targets crowded together, where the spacing offers no margin for error. A user with a tremor aiming at a 30pt icon 3pt from its neighbour will hit the neighbour a meaningful fraction of the time, and if the neighbour is "Delete", the consequence is not recoverable by trying again.

**Common failures:**

- rows of compact icon buttons in a toolbar or a table cell's accessory area
- increment and decrement steppers with tightly packed arrows
- inline "edit" and "delete" affordances placed side by side in a list row
- densely packed tab bars or segmented controls with custom sizing

**How to fix:**

- increase the spacing to at least 8pt between adjacent small targets, or
- enlarge both targets to 44x44pt, at which point the pair is exempt
- prefer separating destructive actions from their neighbours by more than the minimum, or placing them behind a confirmation

---

## Interactive Role Undefined

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Finds custom views that behave like controls but expose no role to assistive technology. An element is flagged only when all of the following hold: In practice this narrows to a custom view that has been made tappable without being given a role.

**Why it matters:** VoiceOver users depend on the announced role ("button", "link", "adjustable") to know an element is actionable and what kind of interaction to expect. A custom card view with a tap gesture and a label announces as just its text. A checkout tile labelled "Order summary" is spoken as "Order summary", identical to a piece of body copy. The user has no reason to attempt activation, so a primary action becomes effectively invisible. Switch Control and Voice Control, which enumerate actionable elements by role, will not surface it at all.

**Common failures:**

- a tap gesture attached directly to a plain view or container instead of using a button
- custom controls composed of a view plus a label and an image, with no semantic control inside and no role set
- SwiftUI `.onTapGesture { }` on a plain `VStack` or `HStack` without `.accessibilityAddTraits(.isButton)`

**How to fix:**

- add the role so it is announced: `view.accessibilityTraits = .button` (UIKit), or `.accessibilityAddTraits(.isButton)` (SwiftUI)
- prefer a real control (a `UIButton` or SwiftUI `Button`) over a tappable container — the control brings the role, the focus behaviour, and the activation semantics for free
- ensure the element is also an accessibility element (`isAccessibilityElement = true`) and carries a descriptive label
- confirm with VoiceOver that the announcement ends with the role

---

## Invalid Range Values

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Range controls (Slider, Stepper, ProgressIndicator) and any custom view with the `.adjustable` trait for two types of violation: 1. **Missing value** — the control has no programmatic `accessibilityValue`, so VoiceOver cannot announce its current state. 2. **NaN value** — a native `UISlider` whose `minimumValue >= maximumValue` produces a `NaN` accessibility value (UIKit computes `(value - min) / (max - min)`, which yields NaN when the denominator is zero or negative).

**Why it matters:** Assistive technology announces a range control's position from its reported values ("50 percent"). When the value is missing, VoiceOver says nothing about the control's state. When the value is NaN (due to an invalid min/max range), the announcement is meaningless, and adjusting the control by voice or gestures produces unpredictable results.

**Common failures:**

- custom views with the `.adjustable` trait that never set `accessibilityValue`
- a `UISlider` whose `minimumValue` is set higher than its `maximumValue`
- a `UISlider` whose `minimumValue` equals its `maximumValue` (zero-width range)
- progress indicators or steppers with no programmatic value for assistive technology

**How to fix:**

- ensure min < max and the current value falls within [min, max] on the control (`UISlider`/`UIStepper`)
- for custom range controls, expose the range to assistive technology via `accessibilityValue` and the `.adjustable` trait

---

## Meaningful Sequence

**WCAG:** [1.3.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html)

**What it checks:** Whether the programmatic reading order matches the meaningful visual sequence. Where Traversal Order Does Not Match Visual Layout targets focusable controls, this rule concerns the sequence of the content itself.

**Why it matters:** Content whose meaning depends on order — steps in a process, a heading followed by its body, a price next to its product — loses that meaning when announced out of sequence. The user hears all the pieces but cannot reconstruct the whole.

**Common failures:**

- multi-column layouts read column-by-column when the meaning flows row-by-row
- captions announced before the content they describe
- visual ordering achieved purely through positioning while the hierarchy retains insertion order

**How to fix:**

- reorder views in the layout to match the visual reading order
- set the `accessibilityElements` array on the container to define the correct VoiceOver reading sequence

---

## Minimum Text Size

**WCAG:** 

**What it checks:** Estimates the font size of text elements from their accessibility frame height using the San Francisco font's line-height ratio: ``` estimatedFontSize = frameHeight / 1.1777 ``` Where 1.1777 is the constant ratio of ascender (0.9668) minus descender (−0.2109) for the San Francisco typeface. A violation is reported when the estimated font size falls below **11pt**, the Apple Human Interface Guidelines minimum. Two guards prevent false positives from unreliable frame heights: elements with frame height below 4pt are skipped (collapsed/clipped SwiftUI composite controls), and elements whose frame touches the top or bottom screen edge (within 2pt) are skipped (partially scrolled-off elements with truncated frames).

**Why it matters:** Very small text is hard to read for everyone and unreadable for users with low vision, especially when it also fails to scale with the user's font preference. Minimum sizes exist because below them, no amount of squinting recovers the content.

**Common failures:**

- captions, timestamps, and legal text set well below the recommended minimum
- fixed-size fonts that ignore the user's text-size preference
- dense information UIs shrinking text to fit more on screen

**How to fix:**

- increase any non-scalable text below 11pt to at least the recommended minimum
- prefer Dynamic Type styles so text scales with the user's font preference (see Dynamic Type Support)

---

## Mismatched Label Text

**WCAG:** [2.5.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

**What it checks:** For interactive elements, the scanner compares the text visibly rendered on the control against its accessibility label. The visible text is read from the screen using on-device text recognition and attributed to the element that contains it. Both strings are normalized before comparison: lowercased and reduced to letters, numbers, and single spaces. A violation is reported when the visible text is **not contained within** the label. The rule skips elements that are non-interactive, disabled, not visible, carry no recognizable text, or have an empty label. *(Beta rule)*

**Why it matters:** Voice Control users speaking the visible label cannot activate the control, and VoiceOver users hear something different from what is on screen. A button reading "Send" is activated by saying "Tap Send". If that button's accessibility label was set to "Submit message", the spoken command matches nothing, and the control cannot be operated by voice at all. The label is not merely suboptimal — it silently removes the control from an entire input modality.

**Common failures:**

- a button reading "Sign in" whose label was set to "Log in" or "Authenticate"
- localized visible text with an English accessibility label left over from development
- an accessible name written to describe the outcome ("Proceed to payment") on a button that visibly reads "Next"
- developer identifiers (`accountExists`, `user_action_login`) used as the accessible name

**How to fix:**

- the accessible name must contain the visible label as a substring, ignoring case and punctuation. Prefer an exact match; where extra context is needed, put the visible label first: a button reading "Next" may be labelled "Next" or "Next, proceed to payment", but not "Proceed to payment"
- never use developer identifiers as accessible names
- **iOS:** where the visible text is sufficient, simply do not override `accessibilityLabel` — UIKit derives it from the title

---

## Misplaced Field Label

**WCAG:** [2.5.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html)

**What it checks:** This is the companion to Mismatched Label Text, using the same visible-text recognition and the same interactivity and visibility filters. This rule applies only when that one passes: it reports elements whose label **contains** the visible text but does **not begin** with it. If the label does not contain the visible text at all, Mismatched Label Text owns that finding and this one stays silent. *(Beta rule)*

**Why it matters:** Voice control matches names from the front, and screen reader users hear extra context before the label they can see on screen. A button reading "Next" labelled "Proceed to payment, Next" technically satisfies label-in-name, yet the user saying "Tap Next" gets slower, less reliable matching than if the label began with the visible word.

**Common failures:**

- prefixing context onto the label: "Order summary, Edit" on a button that reads "Edit"
- composing a cell's combined label so the control's own text lands last

**How to fix:**

- start the accessible name with the visible label; put any extra context after it ("Edit, order summary", not "Order summary, Edit")
- **iOS:** begin `accessibilityLabel` with the control's visible text; keep supplementary detail after it or in `accessibilityHint`

---

## Missing Accessibility Labels

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Meaningful iOS controls and interactive elements expose accessible names through labels and related accessibility properties.

**Why it matters:** VoiceOver users depend on clear accessible names to understand what each control does and to move through the interface confidently.

**Common failures:**

- custom buttons with no `accessibilityLabel`
- image-based controls with no accessible name
- duplicate labels that make multiple controls sound identical

**How to fix:**

- add accurate labels for meaningful interactive elements
- make labels action-oriented when the element performs an action
- verify the spoken output in VoiceOver after implementation

---

## Missing Button Element Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `UIButton` and `Button` elements that have no title text, no accessibility label, and rely only on an image or icon without an accessible name for VoiceOver.

**Why it matters:** VoiceOver users hear "Button" with no additional context when a button lacks a label. They cannot tell what the button does, making it impossible to confidently interact with the interface.

**Common failures:**

- icon-only buttons (close X, hamburger menu, share icon) with no accessibility label
- buttons with an image but no title text
- custom button subclasses that override drawing but do not set accessibility properties
- system bar button items using custom images without labels

**How to fix:**

- set `accessibilityLabel` on every button that does not have visible title text
- for icon-only buttons, describe the action: "Close", "Open menu", "Share"
- in SwiftUI, use `.accessibilityLabel("action description")` on `Button` views
- if the button already has title text, VoiceOver uses it automatically, no additional label needed

---

## Missing Checkbox Element Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Toggle-like or checkbox-pattern elements that have no accessibility label, leaving VoiceOver to announce only the state (selected/not selected) without context.

**Why it matters:** Hearing "not selected" without knowing what option is being referred to is useless. VoiceOver users need both the label and the state to understand the setting and decide whether to change it.

**Common failures:**

- custom checkbox views built with images and tap gestures but no accessibility label
- settings toggles where the label is a separate `UILabel` not programmatically associated
- list cells with selection indicators but no per-cell accessibility description

**How to fix:**

- set `accessibilityLabel` on the checkbox element to describe the option
- group the checkbox and its label into a single accessibility element using `shouldGroupAccessibilityChildren`
- in SwiftUI, use `.accessibilityLabel("Option description")` on toggle or checkbox views
- test with VoiceOver to confirm the full announcement includes both the label and the state

---

## Missing Editable Element Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `UITextField`, `UITextView`, `UISearchBar`, and similar editable controls that have no accessibility label and no associated placeholder text that VoiceOver can use as a fallback.

**Why it matters:** When a text field has no label, VoiceOver announces "Text field" with no indication of what the user should type. This makes forms, search interfaces, and data entry screens unusable for blind users.

**Common failures:**

- text fields that rely on visual placeholder text but have no accessibility label
- search bars where the placeholder disappears on focus and no label remains
- multi-line text views (comments, notes) with no accessible description
- form fields where the label is a separate view not programmatically linked to the input

**How to fix:**

- set `accessibilityLabel` on every editable element to describe the expected input
- use `UITextField`'s placeholder text as a fallback, but provide a proper label for clarity
- group the label and input into a single accessibility element if appropriate
- in SwiftUI, use `.accessibilityLabel("Field description")` on `TextField` views
- test with VoiceOver to confirm each field announces a meaningful description before the user types

---

## Missing Image Element Label

**WCAG:** [1.1.1 (A)](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)

**What it checks:** Image elements that are visible on screen and carry meaningful content but have no `accessibilityLabel`, causing VoiceOver to either skip them or announce the image file name.

**Why it matters:** VoiceOver users cannot see images. Without a label, they miss the information the image conveys, whether it is a product photo, an avatar, a status icon, or a chart.

**Common failures:**

- product images in a shopping app with no accessibility label
- user avatars or profile pictures with no descriptive text
- status icons (success checkmark, error X) with no label
- chart or graph images with no text alternative

**How to fix:**

- set `accessibilityLabel` on every meaningful `UIImageView` to describe what the image shows
- for decorative images, set `isAccessibilityElement = false` to hide them from VoiceOver
- in SwiftUI, use `.accessibilityLabel("description")` on `Image` views
- keep labels descriptive but concise (e.g., "Product photo: Blue running shoes" rather than "image_shoe_blue_v2.png")

---

## Missing Switch Element Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** `UISwitch` and `Toggle` (SwiftUI) elements that have no accessibility label, leaving VoiceOver to announce only "Switch, on" or "Switch, off" without context.

**Why it matters:** Hearing "Switch, off" tells the user the state but not what the switch controls. Without a label, users cannot make informed decisions about whether to toggle the switch.

**Common failures:**

- `UISwitch` elements in table cells where the label text is in a separate `UILabel` not programmatically linked
- settings screens where switches are visually paired with labels but not associated in the accessibility tree
- custom switch implementations that do not expose an accessible name

**How to fix:**

- set `accessibilityLabel` on the `UISwitch` to describe the setting (e.g., "Dark mode", "Push notifications")
- use `UITableViewCell`'s built-in `textLabel` as the accessibility label for the cell when the switch is the cell's accessory view
- in SwiftUI, the `Toggle("Label text")` initializer automatically provides a label. Ensure it is always populated
- test with VoiceOver to confirm the full announcement includes both the setting name and the state

---

## Non-accessible Interaction

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Interactive elements that can't be accessed or activated via assistive technology. The action exists for touch users but is unreachable through VoiceOver, Switch Control, or Voice Control.

**Why it matters:** An interaction that assistive technology cannot reach is a feature that does not exist for those users. Unlike a mislabelled control, which is confusing but present, an inaccessible interaction is silently absent: nothing announces it, nothing can focus it, and nothing can activate it.

**Common failures:**

- gesture-only interactions (swipe, long-press, drag) with no accessible equivalent action
- a tappable view hidden from the accessibility tree while remaining visually interactive
- custom controls that never became accessibility elements

**How to fix:**

- make sure any action (a custom button, link, or gesture) can be reached by assistive technology and has a clear description
- use descriptive labels like "Play", "Delete", rather than generic labels (e.g., "Button1")

---

## Non-Descriptive Link Text

**WCAG:** [2.4.4 (A)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

**What it checks:** Examines links whose entire accessible name is a generic call-to-action. The blocked phrases are: `click here, click this, go, here, information, learn more, more, more info, more information, right here, read more, see more, start, this, tap here, tap this, view more, link, details`. Matching is exact, not a substring. The label must be one of these phrases in full. Before comparison the label is cleaned up: non-breaking spaces are normalized, a trailing ellipsis is removed, and surrounding whitespace and punctuation are trimmed. So "Read more..." is flagged, while "Read more about our privacy policy" passes. Links with an empty label are covered by the missing-label rules instead.

**Why it matters:** VoiceOver users frequently navigate by pulling up the rotor's list of all links on a screen, or by jumping link to link. Out of context, a list reading "Read more, Read more, Learn more, Click here" is unusable. Every entry sounds identical and none reveals its destination. Descriptive link text lets a user decide whether to follow a link without first reading the surrounding paragraph, which is what the rotor exists to provide.

**Common failures:**

- a "Read more" or "Learn more" link repeated under every article card
- links whose entire text is "here", "Details", or "Link"
- truncated link text ending in an ellipsis that reduces to a generic phrase once trimmed

**How to fix:**

- rewrite the visible text to name the destination: "Read more" becomes "Read our privacy policy"
- if the visible text cannot change for design reasons, set a descriptive `accessibilityLabel` on the link instead — the visible text stays "Read more"; VoiceOver announces "Read our privacy policy"
- ensure the label reads sensibly in isolation, since that is how the rotor presents it

---

## Overlapping Interactive Elements

**WCAG:** [2.5.5 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

**What it checks:** This is a screen-level rule. The scanner collects every interactive element that is visible, on-screen, enabled, and reachable by touch, then compares each pair. A pair is treated as overlapping when they share a significant portion of the smaller element's area. Overlapping controls are joined into clusters, so a chain of mutually overlapping controls is reported as one group rather than as many pairs. Three exclusions prevent false positives: parent-child pairs are skipped (a control nested inside another necessarily overlaps it); cross-layer pairs are skipped (elements inside a fixed overlay like a navigation bar, tab bar, or toolbar are never compared against content elements, since the content scrolls beneath the overlay); and system scroll indicators are ignored.

**Why it matters:** When two tappable elements occupy the same pixels, which one receives a tap is determined by view hierarchy order, an implementation detail invisible to the user. A sighted user with a steady hand may never notice, because they aim at whichever control they want and usually get it. A user relying on VoiceOver's touch exploration, or with limited motor precision, gets whichever control the hierarchy happens to favour. The interface is not merely hard to use; it is unpredictable from the user's point of view.

**Common failures:**

- an absolutely positioned "close" button laid over a card that is itself tappable
- custom transitions that leave two interactive layers on screen simultaneously
- hit areas expanded with negative insets until they collide with a neighbour
- overlapping frames introduced by dynamic text sizing pushing content into adjacent controls

**How to fix:**

- adjust layout so interactive frames do not intersect
- if one control genuinely sits above another (a badge on a button), make the pair a single accessibility element with one clear action, or set `isAccessibilityElement = false` on the passive one
- where a control is intentionally layered above scrolling content, confirm it lives inside a proper overlay container (navigation bar, tab bar, toolbar), which the rule already exempts

---

## Redundant Role Keyword in Accessibility Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Examines whether a visible accessibility element's label embeds the control's own role. The role words checked are drawn from the control's actual type and role, so a role word is flagged only when it matches the real control — "Play button" on a piece of static text is not reported by this rule. \

**Why it matters:** VoiceOver appends the role to every announcement. A button labelled "Submit button" is announced as "Submit button, button", so the user hears the role twice, on every focus, forever. Across a screen this doubles the verbosity of navigation without adding any information, and it makes labels harder to distinguish from one another because the discriminating word is buried behind boilerplate.

**Common failures:**

- labels that name the widget rather than the action: "Settings icon", "Search button"
- labels written by copying the design-system component name
- headers labelled "Section heading: Orders" where the header role is already set

**How to fix:**

- Control \

---

## Redundant State Keyword in Accessibility Label

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Examines whether a visible accessibility element's label embeds state that VoiceOver already announces from the control itself. Only state words that VoiceOver actually speaks for that control are flagged: \

**Why it matters:** VoiceOver derives state from the control and appends it to every announcement. When the state is also written into the label, the user hears it twice: "Wi-Fi on, on, switch button". Worse, a hardcoded state does not update when the control changes. After the user toggles Wi-Fi off, VoiceOver announces "Wi-Fi on, off, switch button". The label now contradicts the real state, and the user has no way to tell which one is true. A label that lies about state is more harmful than no label at all.

**Common failures:**

- toggle labels that bake in the current value: "Dark mode off", "Notifications on"
- labels updated by hand in a state-change callback instead of relying on the control's own state
- selection state written into a segmented control's label

**How to fix:**

- Condition \

---

## Text Truncation Issues

**WCAG:** [1.4.4 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)

**What it checks:** Text elements that are clipped or truncated (ending with "...") when the content contains meaningful information that is lost, particularly when the user has increased the text size through Dynamic Type settings.

**Why it matters:** Users with low vision rely on Dynamic Type to increase text size. If the app truncates text instead of expanding or wrapping, these users lose access to important information like button labels, instructions, or data values.

**Common failures:**

- labels with a fixed `numberOfLines = 1` that truncate long content
- table cells with fixed heights that clip multi-line text at larger Dynamic Type sizes
- navigation bar titles that truncate when text size increases
- buttons with fixed widths that clip label text

**How to fix:**

- use `numberOfLines = 0` with Auto Layout constraints to allow text to wrap
- set minimum cell heights using Auto Layout rather than fixed values
- use `adjustsFontForContentSizeCategory = true` on text elements
- test with the largest Dynamic Type size (Accessibility sizes enabled) to confirm no meaningful content is lost

---

## Touch Target Sizing

**WCAG:** [2.5.5 (AAA)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-enhanced.html)

**What it checks:** IOS controls provide enough touch area and spacing for reliable interaction.

**Why it matters:** Small or tightly packed targets make interaction harder for users with motor impairments and for anyone using assistive touch patterns.

**Common failures:**

- icons or text buttons smaller than the recommended touch area
- adjacent controls with almost no spacing between them
- visually large controls whose tappable region is much smaller than the rendered component

**How to fix:**

- increase the tappable region of small controls
- add spacing between adjacent actions
- verify that custom components preserve touch size across device sizes

---

## Traversal Order Does Not Match Visual Layout

**WCAG:** [2.4.3 (A)](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)

**What it checks:** This is a screen-level rule. The scanner walks focusable elements in the order the screen reader reads them and compares each element with the one before it. An element is flagged when it comes later in the reading order but sits earlier on screen than the element before it — its centre sits noticeably above the previous element's centre, or its centre is on the same row but noticeably to the left. In other words, it fires when the reading order jumps backwards relative to the visual layout. Only neighbouring elements are compared, so a single misplaced element does not cascade into a report for everything after it. Excluded from the comparison: elements hidden from assistive technology, invisible or off-screen elements, zero-size elements, headers, system elements (scroll bars, the back button, page indicators), and non-interactive static text and images, since those frequently sit in a reading order that differs from their visual position without any consequence for navigation.

**Why it matters:** Screen reader users build a mental model of a screen from the order in which its elements are announced. When reading order diverges from the visual layout, such as a footnote announced before its heading or form fields read out of sequence, content becomes disorienting, and forms get filled in the wrong order. WCAG 2.4.3 requires that focusable components receive focus in an order that preserves meaning and operability.

**Common failures:**

- elements added to a view hierarchy in a different order than they are laid out, most often after a redesign that moved things visually but not in code
- an `accessibilityElements` array set once and left stale as the layout evolved
- absolutely positioned elements whose frames were adjusted without reordering their subviews

---

## Two-Dimensional Scrolling Required

**WCAG:** [1.4.10 (AA)](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html)

**What it checks:** This is a screen-level rule detecting content that requires scrolling in two directions to be read. It looks for: 1. **Scroll views** — a scroll view that scrolls horizontally while nested inside another scrollable area, or that is wider than the screen. A text view in this state is reported as a warning rather than a violation. 2. **Tables and collection views** — a cell whose content scrolls horizontally inside a vertically scrolling table, or a collection view that scrolls horizontally at any depth. 3. **Web views** — a web view that scrolls horizontally. 4. **Element overflow** — any element whose right edge extends past the screen, attributed to the scrollable area that contains it; if there is none, the overflowing element itself is flagged. Findings are deduplicated: once an element or one of its ancestors has been flagged, its descendants are not reported again. Legitimate horizontal scrolling is exempted through a set of recognized patterns: paging controls with a page indicator, step indicators, chip and filter bars, date pickers, image carousels, data tables, maps, and any element identified as a map, diagram, carousel, gallery, floor plan, or canvas.

**Why it matters:** WCAG 1.4.10 requires content to be presentable without scrolling in two dimensions, because a user who has enlarged text or zoomed in must otherwise pan horizontally to read every single line. Reading a paragraph becomes a sequence of scroll-right, read, scroll-left-all-the-way, scroll-down operations, for each line. This is the difference between reading a screen and giving up on it. The criterion exempts content that genuinely requires two dimensions, such as maps and data tables, which is what the exemption patterns above encode.

**Common failures:**

- a fixed-width layout inside a vertical scroll view that overflows once the text is scaled up
- horizontally scrolling content nested inside a vertically scrolling parent, where neither direction can be avoided
- web content rendered at a fixed viewport width
- cells whose content overflows the screen edge at larger Dynamic Type sizes

**How to fix:**

- let text wrap rather than extend — use flexible widths and allow the container to grow vertically
- where content must be wide (a data table, a chart), keep it in a container that scrolls horizontally on its own while the surrounding page scrolls only vertically, and confirm the container matches one of the exemption patterns, or is genuinely exempt under 1.4.10
- test at the largest Dynamic Type size and confirm no element's right edge crosses the screen boundary
- avoid nesting a horizontal scroll view inside a vertical one unless the inner view is a carousel or paging control

---

## Unique Option Names

**WCAG:** [4.1.2 (A)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

**What it checks:** Children of recognized option group containers for duplicate accessible names. The recognized container types are `XCUIElementTypeSegmentedControl`, `XCUIElementTypeTabBar` / `XCUIElementTypeTabGroup`, `XCUIElementTypeRadioGroup`, `XCUIElementTypePicker`, and `XCUIElementTypeMenu` / `XCUIElementTypeMenuBar`. Within each container, the rule collects visible, interactive children (buttons, tabs, radio buttons, menu items, picker wheels) and checks for children with the same `accessibilityLabel`. Custom views with the `.adjustable` trait are also treated as option-like children. Duplicate labels are reported with a `groupId` that clusters the matching elements together. Unlike Duplicate Accessibility Label, which checks the entire screen, this rule looks specifically inside a single selection group, where identically named options make the choice itself meaningless.

**Why it matters:** A selection group exists to offer a choice. When three radio buttons all announce as "Option", a screen reader user cannot tell what they are choosing between; position in the group carries the meaning, and position is exactly what a non-visual user does not have.

**Common failures:**

- segmented controls whose segments were labelled from a shared placeholder string
- radio groups built from custom views where each option's label was set to the group's title
- tab items differentiated only by icon, with identical fallback labels

**How to fix:**

- give every option within a picker, radio group, or segmented control a distinct accessible name so screen reader users can tell them apart
- don't rely on position or visual styling to differentiate identically labeled options

---
