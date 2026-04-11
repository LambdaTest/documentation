---
id: accessibility-ios-what-we-cover
title: iOS – What We Cover
sidebar_label: iOS – What We Cover
description: Full WCAG reference, checklist, and how to use TestMu AI Accessibility on iOS apps. Covers WCAG 2.0, 2.1, 2.2 and remediation.
keywords:
  - TestMu AI
  - Accessibility
  - iOS
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-ios-what-we-cover/
site_name: TestMu AI
slug: accessibility-ios-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-ios-what-we-cover/
---

# TestMU AI / LambdaTest Accessibility iOS – What We Cover

**Note:** This document describes TestMU AI / LambdaTest Accessibility coverage for iOS. For platform or accessibility support, contact TestMU/LambdaTest support.

---

## 1. Purpose and scope

This document describes **what TestMU AI / LambdaTest Accessibility iOS covers**: a **full WCAG rules reference** (100% for iOS), a **checklist** of rules the platform can check, **how to use** the accessibility testing platform to run scans and view results, and **how to check** / **how to do** (remediation) for **native iOS apps**. It is intended for teams who:

- Run accessibility scans on iOS apps via TestMU AI / LambdaTest Accessibility (e.g. TestMU AI Accessibility DevTools or the accessibility testing platform with supported engines).
- Need a single reference for **what is checked** on iOS, **how to use** the platform, and **how to verify or fix** issues.
- Target **WCAG 2.0, 2.1, and 2.2** (Level A, AA, and selected AAA) as applicable to native iOS.

**Technology:** TestMU AI / LambdaTest Accessibility for **native iOS apps** (UIKit and SwiftUI). **Platform:** iOS (e.g. iOS 18+, iPhone 16 series as per TestMU support; check current docs for supported versions).

---

## 2. Full WCAG rules reference (100% – iOS)

Below is a **complete** list of all success criteria for **WCAG 2.0, 2.1, and 2.2** at Levels **A, AA, and AAA** as they apply to **native iOS apps**. Use this as the master reference for full iOS accessibility coverage. (Criteria apply to app UI, in-app content, and in-app WebViews where applicable.) The **checklist in Section 3** shows which of these TestMU AI Accessibility iOS can check automatically or with supported rules.

### 2.1 Principle 1 – Perceivable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 1.1.1 | Non-text Content | A | 2.0 |
| 1.2.1 | Audio-only and Video-only (Prerecorded) | A | 2.0 |
| 1.2.2 | Captions (Prerecorded) | A | 2.0 |
| 1.2.3 | Audio Description or Media Alternative (Prerecorded) | A | 2.0 |
| 1.2.4 | Captions (Live) | AA | 2.0 |
| 1.2.5 | Audio Description (Prerecorded) | AA | 2.0 |
| 1.2.6 | Sign Language (Prerecorded) | AAA | 2.0 |
| 1.2.7 | Extended Audio Description (Prerecorded) | AAA | 2.0 |
| 1.2.8 | Media Alternative (Prerecorded) | AAA | 2.0 |
| 1.2.9 | Audio-only (Live) | AAA | 2.0 |
| 1.3.1 | Info and Relationships | A | 2.0 |
| 1.3.2 | Meaningful Sequence | A | 2.0 |
| 1.3.3 | Sensory Characteristics | A | 2.0 |
| 1.3.4 | Orientation | AA | 2.1 |
| 1.3.5 | Identify Input Purpose | AA | 2.1 |
| 1.3.6 | Identify Purpose | AAA | 2.1 |
| 1.4.1 | Use of Color | A | 2.0 |
| 1.4.2 | Audio Control | A | 2.0 |
| 1.4.3 | Contrast (Minimum) | AA | 2.0 |
| 1.4.4 | Resize Text | AA | 2.0 |
| 1.4.5 | Images of Text | AA | 2.0 |
| 1.4.6 | Contrast (Enhanced) | AAA | 2.0 |
| 1.4.7 | Low or No Background Audio | AAA | 2.0 |
| 1.4.8 | Visual Presentation | AAA | 2.0 |
| 1.4.9 | Images of Text (No Exception) | AAA | 2.0 |
| 1.4.10 | Reflow | AA | 2.1 |
| 1.4.11 | Non-text Contrast | AA | 2.1 |
| 1.4.12 | Text Spacing | AA | 2.1 |
| 1.4.13 | Content on Hover or Focus | AA | 2.1 |

### 2.2 Principle 2 – Operable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 2.1.1 | Keyboard | A | 2.0 |
| 2.1.2 | No Keyboard Trap | A | 2.0 |
| 2.1.3 | Keyboard (No Exception) | AAA | 2.0 |
| 2.1.4 | Character Key Shortcuts | A | 2.1 |
| 2.2.1 | Timing Adjustable | A | 2.0 |
| 2.2.2 | Pause, Stop, Hide | A | 2.0 |
| 2.2.3 | No Timing | AAA | 2.0 |
| 2.2.4 | Interruptions | AAA | 2.0 |
| 2.2.5 | Re-authenticating | AAA | 2.0 |
| 2.2.6 | Timeouts | AAA | 2.1 |
| 2.3.1 | Three Flashes or Below Threshold | A | 2.0 |
| 2.3.2 | Three Flashes | AAA | 2.0 |
| 2.3.3 | Animation from Interactions | AAA | 2.2 |
| 2.4.1 | Bypass Blocks | A | 2.0 |
| 2.4.2 | Page Titled | A | 2.0 |
| 2.4.3 | Focus Order | A | 2.0 |
| 2.4.4 | Link Purpose (In Context) | A | 2.0 |
| 2.4.5 | Multiple Ways | AA | 2.0 |
| 2.4.6 | Headings and Labels | AA | 2.0 |
| 2.4.7 | Focus Visible | AA | 2.0 |
| 2.4.8 | Location | AAA | 2.0 |
| 2.4.9 | Link Purpose (Link Only) | AAA | 2.0 |
| 2.4.10 | Section Headings | AAA | 2.0 |
| 2.4.11 | Focus Not Obscured (Minimum) | AA | 2.2 |
| 2.4.12 | Focus Not Obscured (Enhanced) | AAA | 2.2 |
| 2.4.13 | Focus Appearance | AAA | 2.2 |
| 2.5.1 | Pointer Gestures | A | 2.1 |
| 2.5.2 | Pointer Cancellation | A | 2.1 |
| 2.5.3 | Label in Name | A | 2.1 |
| 2.5.4 | Motion Actuation | A | 2.1 |
| 2.5.5 | Target Size | AAA | 2.1 |
| 2.5.6 | Concurrent Input Mechanisms | AAA | 2.1 |
| 2.5.7 | Dragging Movements | AA | 2.2 |
| 2.5.8 | Target Size (Minimum) | AA | 2.2 |

### 2.3 Principle 3 – Understandable

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 3.1.1 | Language of Page | A | 2.0 |
| 3.1.2 | Language of Parts | AA | 2.0 |
| 3.1.3 | Unusual Words | AAA | 2.0 |
| 3.1.4 | Abbreviations | AAA | 2.0 |
| 3.1.5 | Reading Level | AAA | 2.0 |
| 3.1.6 | Pronunciation | AAA | 2.0 |
| 3.2.1 | On Focus | A | 2.0 |
| 3.2.2 | On Input | A | 2.0 |
| 3.2.3 | Consistent Navigation | AA | 2.0 |
| 3.2.4 | Consistent Identification | AA | 2.0 |
| 3.2.5 | Change on Request | AAA | 2.0 |
| 3.2.6 | Consistent Help | A | 2.2 |
| 3.3.1 | Error Identification | A | 2.0 |
| 3.3.2 | Labels or Instructions | A | 2.0 |
| 3.3.3 | Error Suggestion | AA | 2.0 |
| 3.3.4 | Error Prevention (Legal, Financial, Data) | AA | 2.0 |
| 3.3.5 | Help | AAA | 2.0 |
| 3.3.6 | Error Prevention (All) | AAA | 2.0 |
| 3.3.7 | Redundant Entry | A | 2.2 |
| 3.3.8 | Accessible Authentication (Minimum) | AA | 2.2 |
| 3.3.9 | Accessible Authentication (Enhanced) | AAA | 2.2 |

### 2.4 Principle 4 – Robust

| ID | Success criterion | Level | WCAG |
|----|--------------------|-------|------|
| 4.1.1 | Parsing | A | 2.0 (obsolete in 2.2) |
| 4.1.2 | Name, Role, Value | A | 2.0 |
| 4.1.3 | Status Messages | AA | 2.1 |

**Total:** WCAG 2.2 includes **87 success criteria** (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). 4.1.1 Parsing is obsolete and removed in WCAG 2.2. The list above is aligned with the [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) standard and covers **100%** of success criteria for full iOS accessibility coverage. *Levels verified: e.g. 3.2.6 Consistent Help and 3.3.7 Redundant Entry are Level A; 2.3.3 Animation from Interactions is AAA in WCAG 2.2.*

---

## 3. What we cover – checklist (iOS)

Below is a consolidated checklist by WCAG version, plus an **iOS-specific rules** table that maps to the rules TestMU AI Accessibility iOS can report. **Level** is A, AA, or AAA; **Impact** is typical severity (Critical, Serious, Moderate, Minor). Use **Section 4 – How to use the platform to test (iOS)** to run scans.

### 3.1 WCAG 2.0 (Level A and AA) – iOS-relevant

| WCAG | Level | Brief description | What we cover (iOS) |
|------|-------|-------------------|----------------------|
| 1.1.1 Non-text Content | A | Text alternatives for non-text content | Image elements have `accessibilityLabel` (or are marked non-accessible if decorative). |
| 1.3.1 Info and Relationships | A | Structure and relationships programmatically determinable | Buttons, checkboxes, editable elements, switches have names and roles (labels, traits). |
| 1.4.1 Use of Color | A | Color not sole means of conveying information | Not conveyed by color alone (manual/design check; automated where detectable). |
| 1.4.2 Audio Control | A | User control for auto-playing audio | User can pause/stop auto-playing audio (manual/design check). |
| 1.4.3 Contrast (Minimum) | AA | Text contrast 4.5:1 (3:1 large text) | Color contrast issues – text/background meet minimum ratios. |
| 2.1.1 Keyboard | A | All functionality operable via keyboard/AT | All functionality operable via VoiceOver and switch control. |
| 2.1.2 No Keyboard Trap | A | Focus not trapped | Focus can leave modals/custom controls (VoiceOver). |
| 2.2.1 Timing Adjustable | A | User can adjust or extend time limits | Session/time limits (manual/design check). |
| 2.2.2 Pause, Stop, Hide | A | User can pause/stop/hide auto-updating content | Carousels/auto-updates have controls (manual/design check). |
| 2.3.1 Three Flashes | A | No content flashing >3 per second | No seizure-inducing flash (manual/design check). |
| 2.4.2 Page Titled | A | Pages/screens have descriptive titles | Screen titles / accessibility titles (where exposed). |
| 2.4.3 Focus Order | A | Focus order preserves meaning and operability | Logical focus order via `accessibilityElements` / view hierarchy. |
| 2.4.4 Link Purpose (In Context) | A | Link purpose determinable | Button/link labels describe action or destination. |
| 2.4.7 Focus Visible | AA | Visible focus indicator | VoiceOver focus and system focus visibility (manual on device). |
| 3.2.1 On Focus | A | No change of context on focus alone | No automatic navigation on focus (manual check). |
| 3.2.2 On Input | A | No change of context on input alone | No unintended submit/navigation on input (manual check). |
| 3.3.1 Error Identification | A | Input errors identified and described | Errors announced and associated (manual + labels). |
| 3.3.2 Labels or Instructions | A | Labels or instructions provided | Labels for inputs; labels end with proper punctuation for screen readers. |
| 4.1.2 Name, Role, Value | A | Name, role, value for UI components | Accessibility labels, hints, traits; unique labels; no duplicate labels. |

### 3.2 WCAG 2.1 (Level A and AA) – iOS-relevant

| WCAG | Level | Brief description | What we cover (iOS) |
|------|-------|-------------------|----------------------|
| 1.3.4 Orientation | AA | Content not restricted to one orientation (unless essential) | App supports both orientations or justifies lock (manual/design). |
| 1.4.4 Resize Text | AA | Text resizable; no loss of content/functionality | Dynamic Type support; no truncation at largest sizes. |
| 1.4.10 Reflow | AA | Content reflows (e.g. 320px width) | Layout adapts to larger text and viewport (manual). |
| 1.4.11 Non-text Contrast | AA | UI components and graphics 3:1 contrast | Contrast for controls and graphics (where automated). |
| 2.1.4 Character Key Shortcuts | A | Single-key shortcuts can be turned off/remapped | N/A for touch-only iOS; applies if external keyboard used. |
| 2.5.1 Pointer Gestures | A | Multipoint/path gestures have single-pointer alternative | Single-tap alternatives where applicable (manual). |
| 2.5.2 Pointer Cancellation | A | No irreversible action on down-event only | Tap to activate, not touch-down (standard iOS). |
| 2.5.3 Label in Name | A | Accessible name includes visible label text | `accessibilityLabel` matches or includes visible text. |
| 2.5.4 Motion Actuation | A | Functionality not dependent on device motion only | Shake/motion-only actions have alternative (manual). |
| 2.5.5 Target Size | AAA | Touch target size (e.g. 44×44 pt) | Touch target sizing – 44pt minimum and adequate spacing. |
| 4.1.3 Status Messages | AA | Status messages programmatically determinable | Live regions / announcements for status (e.g. `UIAccessibility.post(notification:announcement:)`). |

### 3.3 WCAG 2.2 (Level A and AA) – where supported

| WCAG | Level | Brief description | What we cover (iOS) |
|------|-------|-------------------|----------------------|
| 2.4.11 Focus Not Obscured (Minimum) | AA | Focused element not entirely obscured | Focused element at least partially visible (manual). |
| 2.5.7 Dragging Movements | AA | Dragging has single-pointer alternative | Alternative to drag gestures (manual). |
| 2.5.8 Target Size (Minimum) | AA | Touch targets at least 24×24 CSS pixels | Overlaps with 2.5.5; 44pt recommended on iOS. |
| 3.2.6 Consistent Help | AA | Help in consistent relative order | Help mechanism placement (manual). |
| 3.3.7 Redundant Entry | AA | No re-entry of same information in same process | Pre-fill / avoid duplicate entry (manual). |
| 3.3.8 Accessible Authentication (Minimum) | AA | Auth not solely cognitive function tests | Login alternatives to CAPTCHA/cognitive tests (manual). |

### 3.4 iOS-specific rules (TestMU AI Accessibility iOS)

These map to the rules that TestMU AI Accessibility iOS can report. Use this table for **what we cover** and quick remediation direction.

| Rule name | WCAG | Level | Impact | What we cover |
|-----------|------|-------|--------|----------------|
| Missing Accessibility Labels | 4.1.2 | A | Serious | Interactive elements have `accessibilityLabel` (and `accessibilityHint` where helpful). |
| Color Contrast Issues | 1.4.3 | AA | Serious | Text/background contrast meets 4.5:1 (normal), 3:1 (large text); use semantic colors. |
| Touch Target Sizing | 2.5.5 | AAA | Moderate | Interactive elements at least 44×44 pt with adequate spacing. |
| Assistive Technology Access | 4.1.2 | A | Serious | Custom views are detectable and activatable by VoiceOver (`isAccessibilityElement`, `accessibilityActivate()`). |
| Text Truncation Issues | 1.4.4 | AA | Serious | Text does not truncate when Dynamic Type is set to largest sizes; flexible layouts. |
| Accessibility Role Definition | 4.1.2 | A | Moderate | Correct `accessibilityTraits` (e.g. .button, .link, .header, .selected, .disabled). |
| Dynamic Type Support | 1.4.4 | AA | Serious | Interface scales with Larger Text (Dynamic Type); use `adjustsFontForContentSizeCategory`, preferred fonts. |
| Accessibility Label Not Punctuated | 3.3.2 | A | Critical | Labels end with punctuation (period, exclamation, or question mark) for natural screen reader pauses. |
| Missing Image Element Label | 1.1.1 | A | Critical | Non-decorative images have `accessibilityLabel`; decorative images have `isAccessibilityElement = false`. |
| Missing Button Element Label | 1.3.1 | A | Critical | Buttons have `accessibilityLabel` or title describing the action. |
| Button Element Capitalisation Check | 3.1.6 | AAA | Minor | Button labels use sentence case; avoid ALL CAPS for screen reader pronunciation. |
| Missing Checkbox Element Label | 1.3.1 | A | Critical | Checkboxes have `accessibilityLabel` and traits updated for selected state. |
| Missing Editable Element Label | 1.3.1 | A | Critical | Text fields have `accessibilityLabel` or associated label; placeholder is not the only label. |
| Missing Switch Element Label | 1.3.1 | A | Critical | Switches have `accessibilityLabel` describing what is toggled (e.g. "Enable notifications"). |
| Duplicate Accessibility Label | 4.1.2 | A | Critical | Each interactive element has a unique label (e.g. "Delete photo 1", "Delete photo 2"). |

**Note:** Exact rule set depends on your TestMU/LambdaTest Accessibility version. Check TestMU docs for the latest iOS rule list.

---

## 4. How to use the platform to test (iOS)

Use the TestMu AI Accessibility platform to run automated accessibility scans on your **native iOS app**. Follow these steps to test covered items:

| Step | How to use the platform to test |
|------|-------------------------|
| **1. Access the platform** | Log in to TestMU / LambdaTest and open the **Accessibility** (or **TestMU AI Accessibility**) section. Ensure you have access to **iOS** device or simulator for testing. |
| **2. Select your iOS app** | Upload your iOS app build (e.g. .ipa) or connect to your app source so the platform can run scans. Select the **iOS** platform and, if applicable, device/OS version (e.g. iPhone, iOS 18). |
| **3. Run an accessibility scan** | Start an **accessibility scan** for the iOS app. The platform runs automated checks against the rules listed in Section 3 (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA as supported). |
| **4. View the report** | After the scan completes, open the **accessibility report**. Review **violations** (issues found), **passes** (rules that passed), and **incomplete** (items that need manual verification). |
| **5. Filter by WCAG level or rule** | Use report filters to view issues by **WCAG level** (A, AA, AAA), **rule ID**, or **impact** (Critical, Serious, Moderate, Minor). Use this to prioritize fixes (e.g. Level A and AA first). |
| **6. Export or share results** | Export the report (e.g. PDF, CSV) or share the report link with your team. Use results to fix issues (see Section 5 for remediation) and re-run scans to verify. |

**Tip:** Combine automated scans with **manual testing** (VoiceOver, Switch Control, Dynamic Type) and the **What we do NOT cover** document for full WCAG coverage and compliance.

---

## 5. How to check and how to do (iOS)

For each area, below is **how to check** (including using the platform scan) and **how to do** (remediation) on **iOS** (UIKit and SwiftUI).

---

### 5.1 Labels, name, role, value (1.1.1, 1.3.1, 3.3.2, 4.1.2)

**What we cover:** Image labels, button/checkbox/switch/editable labels, accessibility hints, punctuation, duplicate labels, traits.

**How to check**

- Run TestMU AI Accessibility scan on the iOS app and review violations for missing labels, duplicate labels, and role/traits.
- Manually: Turn on **VoiceOver** (Settings > Accessibility > VoiceOver). Navigate through the app; ensure every interactive element is announced with a clear name and role; ensure labels are unique and end with punctuation where it improves clarity.

**How to do (remediation)**

- **Images (1.1.1):** For `UIImageView` or image in `UIButton`, set `accessibilityLabel` to a short description of the image. For decorative images, set `isAccessibilityElement = false`. In SwiftUI: `.accessibilityLabel("Description")` or `.accessibilityHidden(true)` for decorative.
- **Buttons (1.3.1):** Set `accessibilityLabel` (or button title) to describe the action (e.g. "Submit form", "Close"). SwiftUI: `.accessibilityLabel("Submit")`.
- **Checkboxes:** Set `accessibilityLabel` for the option; use `accessibilityTraits` (e.g. `.button`, `.selected`) and update when state changes. SwiftUI: `.accessibilityAddTraits()` / `.accessibilityRemoveTraits()`.
- **Editable elements:** Set `accessibilityLabel` on `UITextField`/`UITextView` (or associate with a `UILabel`). Do not rely on placeholder alone. SwiftUI: `.accessibilityLabel("Email")`.
- **Switches:** Set `accessibilityLabel` to describe what is toggled (e.g. "Enable notifications"). VoiceOver announces On/Off automatically.
- **3.3.2 Punctuation:** End accessibility labels with a period, exclamation, or question mark so VoiceOver pauses naturally between elements.
- **Duplicate labels (4.1.2):** Give each control a unique label (e.g. "Delete photo 1", "Delete photo 2" or include context).
- **Role (4.1.2):** Set `accessibilityTraits` (e.g. `.button`, `.link`, `.header`, `.selected`, `.disabled`). SwiftUI: `.accessibilityAddTraits(.isButton)`.
- **Hints:** Use `accessibilityHint` for usage guidance when helpful (e.g. "Double-tap to open"). SwiftUI: `.accessibilityHint("Double-tap to open")`.

---

### 5.2 Assistive technology access (4.1.2)

**What we cover:** Custom views detectable and activatable by VoiceOver; focus order.

**How to check**

- Run the scan for "Assistive Technology Access" and "Missing View Accessibility" type issues.
- With VoiceOver, ensure every interactive element can be focused and activated (double-tap); ensure focus order is logical (top to bottom, then left to right).

**How to do (remediation)**

- For custom views that should be focusable: set `isAccessibilityElement = true`, `accessibilityLabel`, and `accessibilityTraits`. Implement `accessibilityActivate()` for custom activation. Use `accessibilityElements` (or `accessibilityElementsHidden` / reorder) to define focus order. In SwiftUI, ensure interactive custom views have `.accessibilityLabel()` and appropriate traits; use `.accessibilityElement(children: .combine)` or `.accessibilityElement(children: .ignore)` as needed.

---

### 5.3 Color contrast (1.4.3)

**What we cover:** Text and background contrast ratios (4.5:1 normal, 3:1 large text); UI component contrast.

**How to check**

- Run the scan for "Color Contrast Issues".
- Use Apple’s Color Contrast Calculator or an online contrast checker; test in **Increase Contrast** and **Dark Mode** if the app supports it.

**How to do (remediation)**

- Use semantic colors (e.g. `UIColor.label`, `UIColor.systemBackground`) so they adapt to accessibility settings. For custom colors, ensure ratios: 4.5:1 for normal text, 3:1 for large text (e.g. 18pt+ or 14pt+ bold) and for UI components. Test with **Display & Text Size > Larger Text** and **Increase Contrast** (Settings > Accessibility).

---

### 5.4 Dynamic Type and text truncation (1.4.4)

**What we cover:** Text resizes with system settings without truncation; layout reflows.

**How to check**

- Run the scan for "Dynamic Type Support" and "Text Truncation Issues".
- Go to **Settings > Accessibility > Display & Text Size > Larger Text**; set to maximum. Open the app and verify no critical text is truncated and layout remains usable.

**How to do (remediation)**

- Use `UIFont.preferredFont(forTextStyle:)` for text and set `adjustsFontForContentSizeCategory = true` on labels/text views. Use Auto Layout with flexible constraints (avoid fixed heights that clip text). In SwiftUI, use `Dynamic Type` (e.g. `@ScaledMetric`, `Font.body`, `.dynamicTypeSize()`). Test with the largest accessibility sizes.

---

### 5.5 Touch target sizing (2.5.5, 2.5.8)

**What we cover:** Minimum touch target size (44×44 pt recommended on iOS) and spacing between targets.

**How to check**

- Run the scan for "Touch Target Sizing".
- Manually: Use the app with a finger; ensure buttons and tappable areas are easy to hit without accidentally hitting adjacent controls.

**How to do (remediation)**

- Ensure interactive elements have a hit area of at least **44×44 points** (increase frame or add transparent padding). Maintain adequate spacing between adjacent tappable elements. In SwiftUI: `.frame(minWidth: 44, minHeight: 44)` for buttons; use padding to separate controls.

---

### 5.6 Orientation, focus, and other criteria

**What we cover:** Orientation (1.3.4), focus order (2.4.3), focus visible (2.4.7), status messages (4.1.3), and remaining WCAG criteria where applicable.

**How to check**

- **Orientation:** Rotate device; confirm content/functionality is available in both orientations unless lock is essential.
- **Focus order:** With VoiceOver, swipe through elements; order should match visual and logical flow.
- **Status messages:** Trigger in-app status updates (e.g. "Saved"); verify they are announced (e.g. via `UIAccessibility.post(notification:.announcement, argument: "Saved")` or equivalent).

**How to do (remediation)**

- **1.3.4:** Support both portrait and landscape unless orientation is essential (e.g. camera); document if locked.
- **2.4.3:** Order views in the hierarchy to match reading order; use `accessibilityElements` to override if needed.
- **4.1.3:** Post status changes with `UIAccessibility.post(notification:.announcement, argument: message)` or configure `accessibilityLabel` updates so VoiceOver can announce them.

---

## 6. Summary

- **Support:** For TestMU platform, accessibility coverage, or device issues contact TestMU/LambdaTest support.
- **Full WCAG reference:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria (87 total) as they apply to iOS. Use it as the master reference.
- **What we cover:** Section 3 is the **checklist** of rules TestMu AI Accessibility iOS can check (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA). Section 4 describes **how to use the platform to test** (run scan, view report, filter, export). Section 5 provides **how to check** and **how to do** (remediation) for labels, contrast, Dynamic Type, touch targets, and assistive technology access.
- **Use this doc** as a single reference for what is covered on iOS, how to use the platform, and how to verify or fix issues.
