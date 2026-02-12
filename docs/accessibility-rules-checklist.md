---
id: accessibility-rules-checklist
title: Accessibility Rules & Checklist
sidebar_label: Rules & Checklist
description: Manual accessibility checklist for Web, Android, and iOS. Describes what you need to do on your side—run the scanner, fix issues, and perform manual verification (keyboard, screen reader, contrast, etc.).
keywords:
  - TestMu AI
  - Accessibility
  - WCAG
  - Rules
  - Checklist
  - Web
  - Android
  - iOS
url: https://www.testmuai.com/support/docs/accessibility-rules-checklist/
site_name: LambdaTest
slug: accessibility-rules-checklist/
canonical: https://www.testmuai.com/support/docs/accessibility-rules-checklist/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
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
          "name": "Accessibility Rules & Checklist",
          "item": `${BRAND_URL}/support/docs/accessibility-rules-checklist/`
        }]
      })
    }}
></script>

# Accessibility Rules & Checklist

This page is a **manual checklist** for **you** — it describes what **you need to do on your side** to verify accessibility. Use it together with the <BrandName /> Web Scanner and Accessibility App Scanner: the scanner finds many issues automatically; this checklist tells you **what to do manually** to confirm compliance and catch what automation may miss.

:::info What you need to do manually
- **Run** the Web Scanner or App Scanner on your pages/screens and **fix** any reported issues.
- **Perform** the manual checks in the checklist below (e.g. keyboard-only use, screen reader, contrast, focus order).
- **Verify** that each rule is satisfied in real usage — don’t rely on the scanner alone.

Pick your platform (Web, Android, or iOS) in the tabs. Each tab has:
1. **Rules reference** — What the scanner/standard checks and how it maps to WCAG.
2. **Your checklist** — For each rule: what it means and **concrete steps you take** to verify it yourself.
3. **Rules that cannot be automated** — WCAG criteria that require human judgment and manual verification only.
:::

---

## Automated vs manual: what the scanner can and cannot do

Scanners (including the <BrandName /> Web Scanner and Accessibility App Scanner) can only perform **partial**, **technology-specific** checks. Many WCAG success criteria require **human judgment** (e.g., whether an alt text is appropriate, whether instructions rely only on color, whether a change of context is expected). The table below summarizes what is covered and what is not.

### What the scanner can do (partial automation)

| Coverage | Description |
|----------|-------------|
| **Structure & markup** | Detect missing `alt`, labels, headings, ARIA roles, form associations. |
| **Contrast** | Measure contrast ratios between foreground and background colors. |
| **Keyboard / focus** | Detect focusable elements and some focus/trap issues (full operability still requires manual testing). |
| **Name, role, value** | Detect missing or incorrect names, roles, or states in markup. |

Automation can **find failures** (e.g., missing alt, low contrast). It **cannot** confirm that content **fully meets** a success criterion (e.g., that alt text is **appropriate**, or that **all** functionality is keyboard-operable).

### What cannot be automated (manual verification required)

The following types of checks **require manual verification** because they depend on meaning, context, or real user interaction:

| WCAG area | Why it cannot be fully automated |
|-----------|-----------------------------------|
| **Adequacy of text alternatives (1.1.1)** | Tools can find missing alt; only a human can judge if the alternative is correct and sufficient. |
| **Sensory characteristics (1.3.3)** | Instructions must not rely only on shape, color, size, or location; human review of copy and design is needed. |
| **Use of color (1.4.1)** | Information must not be conveyed by color alone; requires human judgment of content and design. |
| **Keyboard operability (2.1.1, 2.1.2)** | Every function must be usable via keyboard and focus must not be trapped; requires real keyboard testing. |
| **Focus order (2.4.3)** | Focus order must be logical; requires manual tab-through and judgment. |
| **Link/button purpose in context (2.4.4)** | Purpose must be clear from text or context; automation can flag “click here” but not all ambiguous cases. |
| **Timing (2.2.1, 2.2.2)** | Time limits, pause/stop/hide for motion; requires manual verification of behavior and controls. |
| **Change on focus/input (3.2.1, 3.2.2)** | No unexpected change of context; requires human judgment of what is “expected.” |
| **Error identification & suggestion (3.3.1, 3.3.3)** | Errors must be identified and suggested; requires testing forms and judging clarity. |
| **Status messages (4.1.3)** | Live regions and status messages must be announced; requires screen reader testing. |
| **Content on hover/focus (1.4.13)** | Tooltips/popups must be dismissible, hoverable, persistent; requires manual interaction. |
| **Resize text / reflow (1.4.4, 1.4.10)** | Text resizing and reflow without loss of content; requires zoom and viewport testing. |

The checklists in each tab below include both **scanner-supported rules** (where you fix automated findings and then verify manually) and **manual-only rules** (where you must perform the check yourself).

---

<Tabs className="docs__val">
  <TabItem value="web" label="Web" default>

## Web: Rules Reference

The Web Scanner audits pages against **WCAG 2.0 / 2.1** (default **WCAG 2.1 AA**). Issues are categorized by severity: **Critical**, **Serious**, **Moderate**, **Minor**. Common checks include:

| Area | WCAG (examples) | Level | What the scanner checks |
|------|------------------|-------|--------------------------|
| Text alternatives | 1.1.1 | A | Missing or empty `alt` on images; non-text content without a text alternative |
| Color contrast | 1.4.3 | AA | Text and background contrast below 4.5:1 (normal) or 3:1 (large text) |
| Form labels | 3.3.2, 4.1.2 | A | Inputs without associated `<label>`, `aria-label`, or `aria-labelledby` |
| Keyboard access | 2.1.1 | A | Interactive elements not focusable or operable via keyboard |
| Name, role, value | 4.1.2 | A | Custom controls missing accessible name, role, or state |
| Headings / structure | 1.3.1 | A | Missing or incorrect heading hierarchy; structure not programmatically exposed |
| Focus visible | 2.4.7 | AA | No visible focus indicator on keyboard focus |
| Link purpose | 2.4.4, 4.1.2 | A | Links with non-descriptive text (e.g. "click here") or missing accessible name |

---

## Web: Your manual checklist — What to do

### 1. Text alternatives (WCAG 1.1.1)

**Rule:** Every non-text content (images, icons, charts) that conveys information must have a text alternative. Decorative images should be ignored by assistive technology (e.g. `alt=""`).

**What you need to do:**
- Run the Web Scanner and fix any "Missing image alt" or "Non-text content" issues.
- **Manually:** Turn on a screen reader (e.g. NVDA, VoiceOver), focus each image, and confirm: meaningful images are announced with a short description; decorative images are skipped.
- **Manually:** Inspect `<img>` elements and confirm informative images have a non-empty, descriptive `alt` and decorative images have `alt=""` or are exposed as decorative.

### 2. Color contrast (WCAG 1.4.3)

**Rule:** Text (and images of text) must have a contrast ratio of at least **4.5:1** against the background (**3:1** for large text). UI components and graphical objects have at least **3:1** (WCAG 2.1+).

**What you need to do:**
- Fix any contrast issues reported by the scanner.
- **Manually:** Use a contrast checker (e.g. WebAIM Contrast Checker) on your text and background colors and fix any that fail.
- **Manually:** Zoom the page to 200% and confirm text stays readable; if applicable, test in high-contrast or inverted color mode.

### 3. Form labels and input purpose (WCAG 3.3.2, 4.1.2)

**Rule:** Every form control must have an accessible name (label) and, where applicable, an identified purpose (e.g. `autocomplete`).

**What you need to do:**
- Run the scanner and fix all "Missing form label" or "Unlabeled form control" issues.
- **Manually:** With a screen reader, focus each input and confirm the purpose is announced (e.g. "Email, edit text"); ensure labels are persistent, not only placeholders.
- **Manually:** In your markup, confirm each `<input>` has a linked `<label>` (via `for`/`id`) or `aria-label`/`aria-labelledby`, and use `autocomplete` where the purpose is known.

### 4. Keyboard access and no keyboard trap (WCAG 2.1.1, 2.1.2)

**Rule:** All functionality must be operable via keyboard. Focus must not be trapped in a component (e.g. modal); the user must be able to move focus in and out with the keyboard.

**What you need to do:**
- **Manually:** Use only the keyboard (**Tab**, **Shift+Tab**, **Enter**, **Space**, **Arrow keys**, **Escape**) and complete key tasks: submit forms, open/close modals, use dropdowns. Fix anything that can’t be done without a mouse.
- **Manually:** Confirm focus order is logical and visible, and that no component traps focus without a clear way to leave (e.g. Escape or a "Close" button).

### 5. Name, role, value (WCAG 4.1.2)

**Rule:** User interface components must expose accessible name, role, and state/value to assistive technologies.

**What you need to do:**
- Run the scanner and fix any "ARIA" or "Name, role, value" issues.
- **Manually:** With a screen reader, use custom widgets (tabs, modals, comboboxes) and confirm each announces name, role (e.g. "button", "dialog"), and state (e.g. "expanded", "selected").
- **Manually:** Use browser DevTools or an accessibility tree inspector to verify name, role, and state for custom controls.

### 6. Headings and structure (WCAG 1.3.1)

**Rule:** Information and relationships (headings, lists, landmarks) must be programmatically determinable.

**What you need to do:**
- Fix any missing or incorrect headings/structure reported by the scanner.
- **Manually:** With a screen reader, navigate by headings and confirm levels (e.g. h1, h2) match the visual structure and are in a logical order.
- **Manually:** In your markup, use semantic HTML (`<h1>`–`<h6>`, `<nav>`, `<main>`, `<article>`, lists) or ARIA landmarks/roles where appropriate.

### 7. Focus visible (WCAG 2.4.7)

**Rule:** Any keyboard focusable element must have a visible focus indicator.

**What you need to do:**
- **Manually:** Tab through the entire page and confirm every focusable element shows a clear focus ring or highlight. If you use `outline: none`, provide an alternative (e.g. `:focus-visible` styles).

### 8. Link and button purpose (WCAG 2.4.4, 4.1.2)

**Rule:** Links and buttons must have an accessible name that describes their purpose (avoid "click here" or "read more" without context).

**What you need to do:**
- Run the scanner and fix any link/button text issues.
- **Manually:** With a screen reader, focus each link and button and confirm the purpose is clear from the name alone; add `aria-label` or `aria-labelledby` where needed.

---

## Web: Rules that cannot be automated (manual verification only)

These WCAG success criteria **cannot be fully automated**. The scanner does not check them; you must verify them manually.

| WCAG | Level | Criterion | What you must verify manually |
|------|-------|------------|--------------------------------|
| **1.1.1** | A | Non-text Content | That every **meaningful** image has an **appropriate** (not just present) text alternative; that decorative images are correctly marked. |
| **1.3.3** | A | Sensory Characteristics | That instructions do **not** rely only on shape, color, size, visual location, orientation, or sound (e.g. "click the green button" is insufficient without another cue). |
| **1.4.1** | A | Use of Color | That information is **not** conveyed by color alone; that links, errors, and states have an additional cue (e.g. text, icon, underline). |
| **1.4.2** | A | Audio Control | That any auto-playing audio (&gt;3s) can be paused/stopped or volume controlled; test with real playback. |
| **1.4.4** | AA | Resize Text | That text can be resized to 200% without loss of content or function; zoom to 200% and check. |
| **1.4.10** | AA | Reflow | That content reflows at 320px width (or 256px height for horizontal scroll) without horizontal scrolling (except where 2D layout is essential). |
| **1.4.13** | AA | Content on Hover or Focus | That content that appears on hover/focus is dismissible, hoverable (if hover-triggered), and persistent until dismissed or invalid. |
| **2.1.1** | A | Keyboard | That **all** functionality is operable via keyboard (no mouse-only actions); complete key tasks with keyboard only. |
| **2.1.2** | A | No Keyboard Trap | That focus is never trapped; you can leave every component with keyboard (e.g. Tab, Escape). |
| **2.1.4** | A | Character Key Shortcuts | That single-character shortcuts can be turned off, remapped, or are active only when the component has focus. |
| **2.2.1** | A | Timing Adjustable | That time limits can be turned off, adjusted, or extended (or fall under an exception). |
| **2.2.2** | A | Pause, Stop, Hide | That moving/blinking/auto-updating content (&gt;5s) can be paused, stopped, or hidden. |
| **2.4.3** | A | Focus Order | That the focus order is **logical** and matches the visual order; tab through and verify. |
| **2.4.6** | AA | Headings and Labels | That headings and labels are **descriptive** and appropriate (human judgment). |
| **3.2.1** | A | On Focus | That **no** change of context occurs when a component receives focus (e.g. no auto-submit on focus). |
| **3.2.2** | A | On Input | That **no** unexpected change of context occurs when the user changes a setting (e.g. no auto-nav on selecting a dropdown option unless expected). |
| **3.3.1** | A | Error Identification | That **all** input errors are clearly identified (e.g. in text) and not only by color or icon. |
| **3.3.3** | AA | Error Suggestion | That **suggestions** for correcting errors are provided when possible. |
| **4.1.3** | AA | Status Messages | That status messages (e.g. live regions) are announced by assistive tech without moving focus; test with screen reader. |

### Manual-only checklist — What to do (Web)

**1.1.1 Adequacy of text alternatives** — **Manually:** With a screen reader, confirm each meaningful image is announced with a **correct and sufficient** description; fix vague or wrong alt text.

**1.3.3 Sensory characteristics** — **Manually:** Review all instructions (forms, UI copy); ensure none rely **only** on "the green button," "the right side," "the round icon," etc. Add text or other non-sensory cues.

**1.4.1 Use of color** — **Manually:** Identify every place information is conveyed by color (links, errors, status); add a second cue (text, icon, pattern, underline). Test in grayscale if needed.

**1.4.2 Audio control** — **Manually:** If any audio auto-plays for more than 3 seconds, confirm a visible control pauses/stops it or controls volume; test with real playback.

**1.4.4 Resize text** — **Manually:** Zoom the page to 200% (browser or OS); confirm no loss of content or functionality and no horizontal scrolling for body text.

**1.4.10 Reflow** — **Manually:** Resize the viewport to 320px width (or use device toolbar); confirm content reflows and no horizontal scrolling except where 2D layout is essential (e.g. data table, map).

**1.4.13 Content on hover or focus** — **Manually:** Trigger every tooltip/popover (hover and keyboard focus); confirm it can be dismissed without moving focus, can be hovered if hover-triggered, and stays visible until dismissed or invalid.

**2.1.1 Keyboard** — **Manually:** Unplug the mouse; use only Tab, Shift+Tab, Enter, Space, Arrow keys, Escape. Complete every critical task (submit form, open/close modal, use menus/dropdowns). Fix any that cannot be done.

**2.1.2 No keyboard trap** — **Manually:** Tab into modals, dialogs, custom widgets; confirm you can leave with Tab, Shift+Tab, or Escape; no focus trap.

**2.1.4 Character key shortcuts** — **Manually:** If the page uses single-letter shortcuts, confirm they can be turned off/remapped or are only active when the relevant component has focus.

**2.2.1 Timing adjustable** — **Manually:** If there are time limits (session, form, reading), confirm the user can turn off, extend, or adjust them (or that an exception applies).

**2.2.2 Pause, stop, hide** — **Manually:** If content moves, blinks, or auto-updates for more than 5 seconds, confirm a control pauses, stops, or hides it.

**2.4.3 Focus order** — **Manually:** Tab through the page; confirm focus order follows a logical reading/visual order; fix tabindex or DOM order if not.

**2.4.6 Headings and labels** — **Manually:** Review headings and form labels; ensure they are **descriptive** and accurate (not generic or misleading).

**3.2.1 On focus** — **Manually:** Tab to each focusable element; confirm nothing triggers a change of context (e.g. new page, submit) just from receiving focus.

**3.2.2 On input** — **Manually:** Change form controls (dropdowns, checkboxes, etc.); confirm no **unexpected** change of context (e.g. auto-navigation) unless the user is clearly informed.

**3.3.1 Error identification** — **Manually:** Trigger validation errors (submit invalid form); confirm each error is identified in **text** (and not only by color or icon).

**3.3.3 Error suggestion** — **Manually:** Where validation fails, confirm **suggestions** for correction are provided when possible (e.g. "Password must be at least 8 characters").

**4.1.3 Status messages** — **Manually:** Trigger status messages (e.g. "Saved," "Error"); with a screen reader, confirm they are announced (e.g. via `role="status"` or live region) without moving focus.

---

</TabItem>

  <TabItem value="android" label="Android">

## Android: Rules Reference

The Accessibility App Scanner for Android uses the following rules. Each maps to WCAG success criteria and has an impact level (Critical, Serious, Moderate).

| Rule Name | WCAG | Level | Impact | Description |
|-----------|------|-------|--------|-------------|
| Missing Image Alt | 1.1.1 | A | Critical | Images lack alternative text. Add `android:contentDescription` for meaningful images or empty string for decorative. |
| Missing View Accessibility | 4.1.2 | A | Serious | Interactive elements lack accessibility labels. Ensure `android:contentDescription` or associated labels for screen readers. |
| Unlabeled Checkbox Element | 4.1.2 | A | Serious | Checkboxes missing accessible names. Use `android:text`, `android:contentDescription`, or associated TextView. |
| Insufficient Color Ratio | 1.4.3 | AA | Serious | Text contrast below 4.5:1 (normal) or 3:1 (large). Adjust colors or background. |
| Missing Field Label | 3.3.2 | A | Serious | EditText/inputs lack labels. Use `android:hint`, TextView with `android:labelFor`, or TextInputLayout. |
| Non-accessible Interaction | 4.1.2 | A | Serious | Custom/gesture controls not accessible to assistive tech. Add focus handling, role, and labels. |
| Missing Screen Title | 2.4.2 | A | Serious | Activities lack descriptive titles. Set with `setTitle()` or `supportActionBar?.title`. |
| Unlabeled Toggle Control | 4.1.2 | A | Serious | Switch/toggle missing name. Provide a label describing what it controls. |
| Mismatched Label Text | 2.5.3 | A | Serious | Visible label text differs from accessible name. Align accessible name with visible text. |
| Missing Input Value | 4.1.2 | A | Moderate | EditText value not exposed to assistive tech. Expose and announce current value. |
| Inaccessible Text Focus | 4.1.2 | A | Moderate | Focusable text lacks role/description. Add roles/descriptions or remove focus. |
| Misplaced Field Label | 3.3.2 | A | Moderate | Label not correctly associated or ordered. Use `android:labelFor`; place label before control. |
| Nested Control Issues | 4.1.2 | A | Moderate | Interactive elements nested inside others. Separate into distinct, non-nested components. |
| Unnamed Nested Element | 4.1.2 | A | Moderate | Nested elements need distinct names or must be marked non-focusable. |
| Fixed Orientation Lock | 1.3.4 | AA | Moderate | App locks to one orientation without justification. Support both or provide alternative. |
| Undersized Touch Target | 2.5.5 | AAA | Moderate | Touch targets smaller than 48dp × 48dp. Increase size to at least 48dp. |
| Insufficient Target Spacing | 2.5.5 | AAA | Moderate | Touch targets too close. Add spacing between adjacent targets. |

---

## Android: Your manual checklist — What to do

### 1. Missing Image Alt (1.1.1)

**Rule:** Every meaningful image must have a content description for TalkBack; decorative images should have an empty description so they are skipped.

**What you need to do:**
- Run the App Scanner on the screen and fix any "Missing Image Alt" / "Missing image alt" issues.
- **Manually:** Enable **TalkBack**, navigate to each image, and confirm: meaningful images are announced; decorative images are skipped.
- **Manually:** In your layout/code, confirm `ImageView` and image buttons have `android:contentDescription` set (meaningful text or `@null`/empty for decorative).

### 2. Missing View Accessibility / Unlabeled controls (4.1.2, 3.3.2)

**Rule:** Buttons, links, checkboxes, and other interactive views must have an accessible name (content description or associated label).

**What you need to do:**
- Run the scanner and fix "Missing View Accessibility", "Unlabeled Checkbox", "Missing Field Label", "Unlabeled Toggle".
- **Manually:** With TalkBack, focus each control and confirm its purpose is announced (e.g. "Submit button", "Email, edit text").
- **Manually:** In your layout/code, ensure `android:contentDescription`, `android:hint` (with visible label), or `android:labelFor` links label to control.

### 3. Insufficient Color Ratio (1.4.3)

**Rule:** Text must have at least 4.5:1 contrast (3:1 for large text) against the background.

**What you need to do:**
- Run the scanner and fix all "Insufficient Color Ratio" findings.
- **Manually:** Use a contrast checker on your text and background colors; test with system font size and bold settings.
- **Manually:** If the app supports themes, verify contrast in both dark and light themes.

### 4. Missing Screen Title (2.4.2)

**Rule:** Each screen (Activity) should have a descriptive title so users know where they are.

**What you need to do:**
- Run the scanner and fix any "Missing Screen Title" issues.
- **Manually:** With TalkBack, enter each screen and confirm the title (e.g. from action bar) is announced or reachable.
- **Manually:** In code, set `activity.title` or `supportActionBar?.title` to a short, descriptive string.

### 5. Mismatched Label Text (2.5.3)

**Rule:** The accessible name should include the visible label text in the same order, so screen reader users get consistent information.

**What you need to do:**
- Run the scanner and fix any "Mismatched Label Text" issues.
- **Manually:** With TalkBack, compare the announced name to the visible label; they should match or the name should contain the visible text.

### 6. Non-accessible Interaction (4.1.2)

**Rule:** Custom views and gesture-only controls must be focusable, have a role and name, and be activatable via assistive technology.

**What you need to do:**
- Run the scanner and fix "Non-accessible Interaction" issues.
- **Manually:** With TalkBack, use "Explore by touch" and double-tap; confirm every interactive element (including custom views and gesture areas) is focusable and activatable.
- **Manually:** In code, set `android:focusable="true"`, `contentDescription`, and handle click/accessibility actions.

### 7. Nested controls & Unnamed nested element (4.1.2)

**Rule:** Interactive elements must not be nested in a way that traps focus or hides identity. Each focusable element should have its own name or be non-focusable if decorative.

**What you need to do:**
- Run the scanner and fix "Nested Control Issues" and "Unnamed Nested Element".
- **Manually:** With TalkBack, move focus through all interactive elements; confirm each is reachable with a clear name and that no focus is trapped inside a parent control.

### 8. Fixed Orientation Lock (1.3.4)

**Rule:** The app should support both portrait and landscape unless a single orientation is essential (e.g. a piano app).

**What you need to do:**
- Run the scanner and fix "Fixed Orientation Lock" if it applies.
- **Manually:** Rotate the device and confirm content and functionality remain available in both orientations, or that the app clearly explains why one orientation is required.

### 9. Touch target size and spacing (2.5.5)

**Rule:** Touch targets should be at least 48dp × 48dp and have adequate spacing to avoid accidental taps.

**What you need to do:**
- Run the scanner and fix "Undersized Touch Target" and "Insufficient Target Spacing".
- **Manually:** Use a larger pointer or "Touch and hold delay" and confirm buttons and links are easy to tap and not overlapping in hit area.
- **Manually:** In layouts, use `minWidth`/`minHeight` of 48dp and padding/margin to separate adjacent targets.

---

## Android: Rules that cannot be automated (manual verification only)

The App Scanner checks many Android-specific rules (labels, contrast, touch targets, etc.). The following still require **manual verification** because they depend on behavior, context, or human judgment:

| WCAG / area | What you must verify manually |
|-------------|-------------------------------|
| **Adequacy of content descriptions (1.1.1)** | That every meaningful image has an **appropriate** (not just present) description; TalkBack announces it correctly. |
| **Sensory characteristics (1.3.3)** | That instructions do not rely only on shape, color, size, or location. |
| **Use of color (1.4.1)** | That information is not conveyed by color alone; add text or icons. |
| **Keyboard / no trap (2.1.1, 2.1.2)** | That all functionality is reachable and operable (e.g. with Switch Access or keyboard); no focus trap. |
| **Timing (2.2.1, 2.2.2)** | That time limits can be adjusted or extended; moving content can be paused/stopped. |
| **Focus order** | That focus order is logical when navigating with TalkBack or keyboard. |
| **Change on focus/input (3.2.1, 3.2.2)** | That no unexpected change of context occurs on focus or input. |
| **Error identification & suggestion (3.3.1, 3.3.3)** | That errors are identified in text and suggestions are provided. |
| **Status messages (4.1.3)** | That status/live regions are announced by TalkBack. |

**What you need to do:** Use TalkBack end-to-end; test with keyboard/Switch Access if applicable; trigger errors and status messages; verify timing and motion controls; check instructions and use of color.

</TabItem>

  <TabItem value="ios" label="iOS">

## iOS: Rules Reference

The Accessibility App Scanner for iOS uses the following rules. Each maps to WCAG success criteria and has an impact level (Critical, Serious, Moderate, Minor).

| Rule Name | WCAG | Level | Impact | Description |
|-----------|------|-------|--------|-------------|
| Missing Accessibility Labels | 4.1.2 | A | Serious | Interactive elements lack `accessibilityLabel` / `accessibilityHint`. Use `.accessibilityLabel()` and `.accessibilityHint()` in SwiftUI. |
| Color Contrast Issues | 1.4.3 | AA | Serious | Text/background contrast below 4.5:1 or 3:1 for large text. Use semantic colors (e.g. `UIColor.label`) and verify with tools. |
| Touch Target Sizing | 2.5.5 | AAA | Moderate | Touch areas below 44pt or insufficient spacing. Use at least 44×44pt; in SwiftUI `.frame(minWidth: 44, minHeight: 44)`. |
| Assistive Technology Access | 4.1.2 | A | Serious | Elements not detectable/focusable/activatable by VoiceOver. Set `isAccessibilityElement = true`, `accessibilityActivate()`, and `accessibilityElements`. |
| Text Truncation Issues | 1.4.4 | AA | Serious | Text truncates when Dynamic Type is increased. Use `adjustsFontForContentSizeCategory = true` and flexible layouts. |
| Accessibility Role Definition | 4.1.2 | A | Moderate | Missing or wrong `accessibilityTraits` (e.g. .button, .header). Use `.accessibilityAddTraits()` in SwiftUI. |
| Dynamic Type Support | 1.4.4 | AA | Serious | UI does not scale with user text size. Support Dynamic Type and reflow layout. |
| Accessibility Label Not Punctuated | 3.3.2 | A | Critical | Labels should end with punctuation for natural screen reader pauses. Add period, exclamation, or question mark. |
| Missing Image Element Label | 1.1.1 | A | Critical | UIImageView/UIButton with image lack `accessibilityLabel`. Add label; for decorative set `isAccessibilityElement = false`. |
| Missing Button Element Label | 1.3.1 | A | Critical | Buttons need `accessibilityLabel` or title describing the action. |
| Button Element Capitalisation Check | 3.1.6 | AAA | Minor | Button labels should use proper capitalization (sentence case); avoid ALL CAPS. |
| Missing Checkbox Element Label | 1.3.1 | A | Critical | Checkboxes need `accessibilityLabel` and appropriate traits (.button, .selected). |
| Missing Editable Element Label | 1.3.1 | A | Critical | UITextField/UITextView need label and value exposed; do not rely on placeholder alone. |
| Missing Switch Element Label | 1.3.1 | A | Critical | UISwitch needs `accessibilityLabel` describing what is toggled (state is announced automatically). |
| Duplicate Accessibility Label | 4.1.2 | A | Critical | Multiple elements share the same label. Give each a unique label (e.g. "Delete photo 1", "Delete photo 2"). |

---

## iOS: Your manual checklist — What to do

### 1. Missing Image / Button / Checkbox / Editable / Switch Element Label (1.1.1, 1.3.1)

**Rule:** Images, buttons, checkboxes, text fields, and switches must have an accessible name so VoiceOver can announce their purpose (and value where applicable).

**What you need to do:**
- Run the App Scanner and fix "Missing Image Element Label", "Missing Button Element Label", "Missing Checkbox Element Label", "Missing Editable Element Label", "Missing Switch Element Label".
- **Manually:** With **VoiceOver**, focus each control and confirm name (and value for fields/switches) is announced; decorative images should be skipped.
- **Manually:** In code, set `accessibilityLabel` (and `accessibilityValue` if needed); for decorative images set `isAccessibilityElement = false`. In SwiftUI use `.accessibilityLabel()`, `.accessibilityHint()`.

### 2. Duplicate Accessibility Label (4.1.2)

**Rule:** Each interactive element must have a unique accessible name so users can distinguish between them (e.g. multiple "Delete" buttons).

**What you need to do:**
- Run the scanner and fix "Duplicate Accessibility Label".
- **Manually:** With VoiceOver, navigate through the screen and confirm no two focusable elements announce the exact same label without context; add context (e.g. "Delete photo 1") where needed.

### 3. Accessibility Label Not Punctuated (3.3.2)

**Rule:** Labels should end with punctuation (period, exclamation, or question mark) for natural VoiceOver pauses and pronunciation.

**What you need to do:**
- Run the scanner and fix "Accessibility Label Not Punctuated".
- **Manually:** With VoiceOver, listen for run-on announcements and confirm labels end with appropriate punctuation.
- **Manually:** In code, ensure `accessibilityLabel` strings end with `.`, `!`, or `?` where appropriate.

### 4. Missing Accessibility Labels (4.1.2) & Assistive Technology Access (4.1.2)

**Rule:** All interactive and meaningful elements must have labels and be detectable, focusable, and activatable by VoiceOver. Custom views need `isAccessibilityElement = true`, roles, and activation handling.

**What you need to do:**
- Run the scanner and fix "Missing Accessibility Labels" and "Assistive Technology Access".
- **Manually:** With VoiceOver, swipe through all elements and confirm every control is reachable and announced with name and role; double-tap must activate buttons and custom controls.
- **Manually:** In code, set `accessibilityLabel`, `accessibilityTraits`, `accessibilityHint`; implement `accessibilityActivate()` for custom actions; use `accessibilityElements` for order.

### 5. Color Contrast Issues (1.4.3)

**Rule:** Text and background must meet 4.5:1 (normal text) or 3:1 (large text). Use system/semantic colors that adapt to accessibility settings.

**What you need to do:**
- Run the scanner and fix "Color Contrast Issues".
- **Manually:** Use Apple's Color Contrast Calculator or similar; test with "Increase Contrast" and "Reduce Transparency" enabled.
- **Manually:** In code, prefer `UIColor.label`, `UIColor.systemBackground`, and Dynamic Type–aware colors.

### 6. Touch Target Sizing (2.5.5)

**Rule:** Interactive elements must be at least 44×44 points with adequate spacing.

**What you need to do:**
- Run the scanner and fix "Touch Target Sizing".
- **Manually:** Use "Reachability" or a finger and confirm buttons and links are easy to tap without hitting adjacent elements.
- **Manually:** In SwiftUI use `.frame(minWidth: 44, minHeight: 44)`; in UIKit ensure frame or hit area is at least 44pt.

### 7. Text Truncation & Dynamic Type Support (1.4.4)

**Rule:** Text must not be cut off when the user increases text size (Dynamic Type). Layout must reflow and remain usable.

**What you need to do:**
- Run the scanner and fix "Text Truncation Issues" and "Dynamic Type Support".
- **Manually:** Go to **Settings > Accessibility > Display & Text Size > Larger Text**, set to largest, open the app, and confirm no critical text is truncated and layout adapts.
- **Manually:** In code, use `adjustsFontForContentSizeCategory = true`, `UIFont.preferredFont(forTextStyle:)`, and flexible constraints.

### 8. Accessibility Role Definition (4.1.2)

**Rule:** Elements must expose the correct role (button, link, header, etc.) and state (selected, disabled, etc.) to VoiceOver.

**What you need to do:**
- Run the scanner and fix "Accessibility Role Definition".
- **Manually:** With VoiceOver, confirm buttons announce "button", links "link", headers "heading", and toggles/checkboxes announce state (e.g. "selected", "on").
- **Manually:** In code, set `accessibilityTraits` (e.g. .button, .header, .selected); in SwiftUI use `.accessibilityAddTraits()` / `.accessibilityRemoveTraits()`.

### 9. Button Element Capitalisation (3.1.6)

**Rule:** Button labels should use proper capitalization (e.g. sentence case); avoid ALL CAPS for whole labels.

**What you need to do:**
- Run the scanner and fix "Button Element Capitalisation Check".
- **Manually:** With VoiceOver, note that ALL CAPS may be read letter-by-letter; prefer sentence case for readability and pronunciation.

---

## iOS: Rules that cannot be automated (manual verification only)

The App Scanner checks many iOS-specific rules (labels, contrast, Dynamic Type, touch targets, etc.). The following still require **manual verification** because they depend on behavior, context, or human judgment:

| WCAG / area | What you must verify manually |
|-------------|-------------------------------|
| **Adequacy of accessibility labels (1.1.1, 1.3.1)** | That every meaningful element has an **appropriate** (not just present) label; VoiceOver announces it correctly. |
| **Sensory characteristics (1.3.3)** | That instructions do not rely only on shape, color, size, or location. |
| **Use of color (1.4.1)** | That information is not conveyed by color alone; add text or icons. |
| **Keyboard / no trap (2.1.1, 2.1.2)** | That all functionality is reachable and operable (e.g. with Voice Control or keyboard); no focus trap. |
| **Timing (2.2.1, 2.2.2)** | That time limits can be adjusted or extended; moving content can be paused/stopped. |
| **Focus order** | That focus order is logical when navigating with VoiceOver. |
| **Change on focus/input (3.2.1, 3.2.2)** | That no unexpected change of context occurs on focus or input. |
| **Error identification & suggestion (3.3.1, 3.3.3)** | That errors are identified in text and suggestions are provided. |
| **Status messages (4.1.3)** | That status/live regions are announced by VoiceOver. |

**What you need to do:** Use VoiceOver end-to-end; test with Voice Control or keyboard if applicable; trigger errors and status messages; verify timing and motion controls; check instructions and use of color.

---

</TabItem>
</Tabs>

---

## Summary

| Platform | Scanner / standard | What the scanner can automate (partial) | What cannot be automated (manual only) |
|----------|--------------------|----------------------------------------|----------------------------------------|
| **Web** | Web Scanner (WCAG 2.0/2.1 AA, axe-core) | Missing alt, contrast, form labels, name/role/value, headings, focus visible, link/button text (presence). | Adequacy of alt text; 1.3.3 sensory characteristics; 1.4.1 use of color; 1.4.2 audio; 1.4.4 resize; 1.4.10 reflow; 1.4.13 hover/focus; 2.1.1/2.1.2 keyboard/trap; 2.1.4 character shortcuts; 2.2.1/2.2.2 timing/pause; 2.4.3 focus order; 2.4.6 headings/labels; 3.2.1/3.2.2 change of context; 3.3.1/3.3.3 errors; 4.1.3 status messages. |
| **Android** | Accessibility App Scanner (Android rules) | Missing image alt, view/checkbox/toggle/field labels, color ratio, screen title, mismatched label, nested controls, orientation lock, touch targets. | Adequacy of descriptions; 1.3.3 sensory; 1.4.1 color; 2.1.1/2.1.2 keyboard/trap; 2.2.1/2.2.2 timing/pause; focus order; 3.2.1/3.2.2 change of context; 3.3.1/3.3.3 errors; 4.1.3 status messages. |
| **iOS** | Accessibility App Scanner (iOS rules) | Missing labels (image/button/checkbox/editable/switch), duplicate labels, punctuation, contrast, touch target, Dynamic Type, role definition, capitalisation. | Adequacy of labels; 1.3.3 sensory; 1.4.1 color; 2.1.1/2.1.2 keyboard/trap; 2.2.1/2.2.2 timing/pause; focus order; 3.2.1/3.2.2 change of context; 3.3.1/3.3.3 errors; 4.1.3 status messages. |

We continuously expand our accessibility guidelines. Use the **Web Scanner** and **App Scanner** in the dashboard for the latest rule set. **On your side:** run the scanner, fix issues, and complete **all** manual steps in this checklist—including the **rules that cannot be automated**—so both automated and manual verification are covered end to end.
