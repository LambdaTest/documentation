---
id: accessibility-android-what-we-cover
title: Android – What We Cover
sidebar_label: Android – What We Cover
description: Checklist of WCAG rules TestMu AI Accessibility checks on Android apps, how to run scans, and quick remediation.
keywords:
  - TestMu AI
  - Accessibility
  - Android
  - WCAG
  - Checklist
url: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
site_name: TestMu AI
slug: accessibility-android-what-we-cover/
canonical: https://www.testmuai.com/support/docs/accessibility-android-what-we-cover/
---

# TestMU AI / LambdaTest Accessibility Android – What We Cover

**Note:** This document describes TestMU AI / LambdaTest Accessibility coverage for Android. For platform or accessibility support, contact TestMU/LambdaTest support.

---

## 1. Purpose and scope

This document describes **what TestMU AI / LambdaTest Accessibility Android covers**: a **full WCAG rules reference** (100% for Android), a **checklist** of rules the platform can check, **how to use** the accessibility testing platform to run scans and view results, and **how to check** / **how to do** (remediation) for **native Android apps**. It is intended for teams who:

- Run accessibility scans on Android apps via TestMU AI / LambdaTest Accessibility (e.g. TestMU AI Accessibility DevTools or the accessibility testing platform with supported engines).
- Need a single reference for **what is checked** on Android, **how to use** the platform, and **how to verify or fix** issues.
- Target **WCAG 2.0, 2.1, and 2.2** (Level A, AA, and selected AAA) as applicable to native Android.

**Technology:** TestMU AI / LambdaTest Accessibility for **native Android apps** (Views, Jetpack Compose where applicable). **Platform:** Android (check TestMU docs for supported API levels and devices).

---

## 2. Full WCAG rules reference (100% – Android)

Below is a **complete** list of all success criteria for **WCAG 2.0, 2.1, and 2.2** at Levels **A, AA, and AAA** as they apply to **native Android apps**. Use this as the master reference for full Android accessibility coverage. (Criteria apply to app UI, in-app content, and in-app WebViews where applicable.) The **checklist in Section 3** shows which of these TestMU AI Accessibility Android can check automatically or with supported rules.

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

**Total:** WCAG 2.2 includes **87 success criteria** (Principle 1: 29; Principle 2: 34; Principle 3: 21; Principle 4: 3). 4.1.1 Parsing is obsolete and removed in WCAG 2.2. The list above is aligned with the [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) standard and covers **100%** of success criteria for full Android accessibility coverage. *Levels verified: e.g. 3.2.6 Consistent Help and 3.3.7 Redundant Entry are Level A; 2.3.3 Animation from Interactions is AAA in WCAG 2.2.*

---

## 3. What we cover – checklist (Android)

Below is a consolidated checklist by WCAG version, plus an **Android-specific rules** table that maps to the rules TestMU AI Accessibility Android can report. **Level** is A, AA, or AAA; **Impact** is typical severity (Critical, Serious, Moderate, Minor). Use **Section 4 – How to use the platform to test (Android)** to run scans.

### 3.1 WCAG 2.0 (Level A and AA) – Android-relevant

| WCAG | Level | Brief description | What we cover (Android) |
|------|-------|-------------------|--------------------------|
| 1.1.1 Non-text Content | A | Text alternatives for non-text content | Images have `android:contentDescription` (or empty for decorative). |
| 1.3.1 Info and Relationships | A | Structure and relationships programmatically determinable | Buttons, checkboxes, toggles, and controls have names and roles (contentDescription, text, or labels). |
| 1.4.1 Use of Color | A | Color not sole means of conveying information | Not conveyed by color alone (manual/design check; automated where detectable). |
| 1.4.2 Audio Control | A | User control for auto-playing audio | User can pause/stop auto-playing audio (manual/design check). |
| 1.4.3 Contrast (Minimum) | AA | Text contrast 4.5:1 (3:1 large text) | Insufficient color ratio – text/background meet minimum ratios. |
| 2.1.1 Keyboard | A | All functionality operable via keyboard/AT | All functionality operable via TalkBack and switch access. |
| 2.1.2 No Keyboard Trap | A | Focus not trapped | Focus can leave modals/custom controls; no nested focus traps. |
| 2.2.1 Timing Adjustable | A | User can adjust or extend time limits | Session/time limits (manual/design check). |
| 2.2.2 Pause, Stop, Hide | A | User can pause/stop/hide auto-updating content | Carousels/auto-updates have controls (manual/design check). |
| 2.3.1 Three Flashes | A | No content flashing >3 per second | No seizure-inducing flash (manual/design check). |
| 2.4.2 Page Titled | A | Pages/screens have descriptive titles | Screen/activity titles (e.g. `setTitle()`, `supportActionBar?.title`). |
| 2.4.3 Focus Order | A | Focus order preserves meaning and operability | Logical focus order; no nested interactive elements. |
| 2.4.4 Link Purpose (In Context) | A | Link purpose determinable | Button/link contentDescription describes action or destination. |
| 2.4.7 Focus Visible | AA | Visible focus indicator | TalkBack focus and system focus visibility (manual on device). |
| 3.2.1 On Focus | A | No change of context on focus alone | No automatic navigation on focus (manual check). |
| 3.2.2 On Input | A | No change of context on input alone | No unintended submit/navigation on input (manual check). |
| 3.3.1 Error Identification | A | Input errors identified and described | Errors announced and associated (manual + contentDescription). |
| 3.3.2 Labels or Instructions | A | Labels or instructions provided | Field labels (hint, labelFor, TextInputLayout); labels before controls. |
| 4.1.2 Name, Role, Value | A | Name, role, value for UI components | contentDescription, roles, values; unique labels; no nested controls. |

### 3.2 WCAG 2.1 (Level A and AA) – Android-relevant

| WCAG | Level | Brief description | What we cover (Android) |
|------|-------|-------------------|--------------------------|
| 1.3.4 Orientation | AA | Content not restricted to one orientation (unless essential) | Fixed orientation lock – support both orientations or justify lock. |
| 1.4.4 Resize Text | AA | Text resizable; no loss of content/functionality | Support font scaling; avoid clipping at large sizes (manual). |
| 1.4.10 Reflow | AA | Content reflows (e.g. 320dp width) | Layout adapts to larger text and viewport (manual). |
| 1.4.11 Non-text Contrast | AA | UI components and graphics 3:1 contrast | Contrast for controls and graphics (where automated). |
| 2.1.4 Character Key Shortcuts | A | Single-key shortcuts can be turned off/remapped | N/A for touch-only; applies if external keyboard used. |
| 2.5.1 Pointer Gestures | A | Multipoint/path gestures have single-pointer alternative | Single-tap alternatives where applicable (manual). |
| 2.5.2 Pointer Cancellation | A | No irreversible action on down-event only | Tap to activate, not touch-down (standard Android). |
| 2.5.3 Label in Name | A | Accessible name includes visible label text | contentDescription matches or includes visible text (mismatched label text). |
| 2.5.4 Motion Actuation | A | Functionality not dependent on device motion only | Shake/motion-only actions have alternative (manual). |
| 2.5.5 Target Size | AAA | Touch target size (e.g. 48×48 dp) | Undersized touch target; insufficient target spacing. |
| 4.1.3 Status Messages | AA | Status messages programmatically determinable | Live regions / announcements for status (e.g. `announceForAccessibility()`). |

### 3.3 WCAG 2.2 (Level A and AA) – where supported

| WCAG | Level | Brief description | What we cover (Android) |
|------|-------|-------------------|--------------------------|
| 2.4.11 Focus Not Obscured (Minimum) | AA | Focused element not entirely obscured | Focused element at least partially visible (manual). |
| 2.5.7 Dragging Movements | AA | Dragging has single-pointer alternative | Alternative to drag gestures (manual). |
| 2.5.8 Target Size (Minimum) | AA | Touch targets at least 24×24 CSS pixels | Overlaps with 2.5.5; 48dp recommended on Android. |
| 3.2.6 Consistent Help | AA | Help in consistent relative order | Help mechanism placement (manual). |
| 3.3.7 Redundant Entry | AA | No re-entry of same information in same process | Pre-fill / avoid duplicate entry (manual). |
| 3.3.8 Accessible Authentication (Minimum) | AA | Auth not solely cognitive function tests | Login alternatives to CAPTCHA/cognitive tests (manual). |

### 3.4 Android-specific rules (TestMU AI Accessibility Android)

These map to the rules that TestMU AI Accessibility Android can report. Use this table for **what we cover** and quick remediation direction.

| Rule name | WCAG | Level | Impact | What we cover |
|-----------|------|-------|--------|----------------|
| Missing Image Alt | 1.1.1 | A | Critical | Images have `android:contentDescription` (meaningful text or empty for decorative). |
| Missing View Accessibility | 4.1.2 | A | Serious | Interactive views (buttons, clickable views, custom controls) have `contentDescription` or associated labels. |
| Unlabeled Checkbox Element | 4.1.2 | A | Serious | Checkboxes have accessible names via `android:text`, `contentDescription`, or associated TextView. |
| Insufficient Color Ratio | 1.4.3 | AA | Serious | Text meets 4.5:1 (normal) and 3:1 (large text) contrast; adjust colors or background. |
| Missing Field Label | 3.3.2 | A | Serious | EditText has label via `android:hint`, associated TextView with `android:labelFor`, or TextInputLayout. |
| Non-accessible Interaction | 4.1.2 | A | Serious | Custom interactive elements are focusable, have roles and labels, and can be activated by TalkBack. |
| Missing Screen Title | 2.4.2 | A | Serious | Activities/screens have descriptive titles (`setTitle()`, `supportActionBar?.title`). |
| Unlabeled Toggle Control | 4.1.2 | A | Serious | Switch/toggle has contentDescription describing what it controls (e.g. "Wi-Fi enabled"). |
| Mismatched Label Text | 2.5.3 | A | Serious | Accessible name includes or matches visible label text (Label in Name). |
| Missing Input Value | 4.1.2 | A | Moderate | EditText value is exposed so TalkBack can announce current input state. |
| Inaccessible Text Focus | 4.1.2 | A | Moderate | Focusable text has clear role and description, or focus is removed if non-interactive. |
| Misplaced Field Label | 3.3.2 | A | Moderate | Labels appear before controls and use `android:labelFor` for announcement order. |
| Nested Control Issues | 4.1.2 | A | Moderate | Interactive elements are not nested inside other interactive elements; separate into distinct components. |
| Unnamed Nested Element | 4.1.2 | A | Moderate | Nested interactive elements have distinct contentDescription or are marked non-focusable if decorative. |
| Fixed Orientation Lock | 1.3.4 | AA | Moderate | App supports both portrait and landscape or provides justification for lock. |
| Undersized Touch Target | 2.5.5 | AAA | Moderate | Touch targets at least 48dp × 48dp. |
| Insufficient Target Spacing | 2.5.5 | AAA | Moderate | Adequate spacing between adjacent touch targets to prevent accidental activation. |

**Note:** Exact rule set depends on your TestMU/LambdaTest Accessibility version. Check TestMU docs for the latest Android rule list.

---

## 4. How to use the platform to test (Android)

Use the TestMu AI Accessibility platform to run automated accessibility scans on your **native Android app**. Follow these steps to test covered items:

| Step | How to use the platform to test |
|------|-------------------------|
| **1. Access the platform** | Log in to TestMU / LambdaTest and open the **Accessibility** (or **TestMU AI Accessibility**) section. Ensure you have access to **Android** device or emulator for testing. |
| **2. Select your Android app** | Upload your Android app build (e.g. APK or AAB) or connect to your app source so the platform can run scans. Select the **Android** platform and, if applicable, device/emulator and API level (e.g. Pixel, API 34). |
| **3. Run an accessibility scan** | Start an **accessibility scan** for the Android app. The platform runs automated checks against the rules listed in Section 3 (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA as supported). |
| **4. View the report** | After the scan completes, open the **accessibility report**. Review **violations** (issues found), **passes** (rules that passed), and **incomplete** (items that need manual verification). |
| **5. Filter by WCAG level or rule** | Use report filters to view issues by **WCAG level** (A, AA, AAA), **rule ID**, or **impact** (Critical, Serious, Moderate, Minor). Use this to prioritize fixes (e.g. Level A and AA first). |
| **6. Export or share results** | Export the report (e.g. PDF, CSV) or share the report link with your team. Use results to fix issues (see Section 5 for remediation) and re-run scans to verify. |

**Tip:** Combine automated scans with **manual testing** (TalkBack, Switch Access, font scaling, rotation) and the **What we do NOT cover** document for full WCAG coverage and compliance.

---

## 5. How to check and how to do (Android)

For each area, below is **how to check** (including using the platform scan) and **how to do** (remediation) on **Android** (Views, XML layouts, and Jetpack Compose where applicable).

---

### 5.1 Labels, name, role, value (1.1.1, 1.3.1, 3.3.2, 4.1.2)

**What we cover:** Image contentDescription, button/checkbox/toggle/field labels, screen title, label–control association, unique labels, input value exposure.

**How to check**

- Run TestMU AI Accessibility scan on the Android app and review violations for missing labels, unlabeled controls, and missing screen title.
- Manually: Turn on **TalkBack** (Settings > Accessibility > TalkBack). Navigate through the app; ensure every interactive element is announced with a clear name and role; ensure labels match visible text where applicable.

**How to do (remediation)**

- **Images (1.1.1):** Set `android:contentDescription` on `ImageView` (or `ImageButton`) to a short description of the image. Use `@string/empty` or `""` for decorative images. In code: `imageView.contentDescription = getString(R.string.description)` or `imageView.contentDescription = null` and `imageView.isImportantForAccessibility = false` for decorative.
- **Buttons and clickable views (4.1.2):** Set `android:contentDescription` on buttons and clickable views (or use `android:text` on Button/TextView). Ensure the label describes the action (e.g. "Submit", "Close").
- **Checkboxes (4.1.2):** Use `android:text` on the checkbox or an associated label, or set `contentDescription`. Ensure state (checked/unchecked) is exposed (default for `CheckBox`).
- **EditText / fields (3.3.2):** Provide a label via `android:hint` (and do not rely on hint alone for accessibility), or use a `TextView` with `android:labelFor="@+id/edit_id"` pointing to the EditText. Prefer **TextInputLayout** with hint for floating label and association. Ensure EditText has `android:importantForAccessibility="yes"` and that value is readable (default).
- **Toggle / Switch (4.1.2):** Set `contentDescription` on the Switch to describe what is toggled (e.g. "Enable notifications"). TalkBack announces state automatically.
- **Screen title (2.4.2):** Call `setTitle("Screen name")` in the Activity or set `supportActionBar?.title = "Screen name"` so users know where they are.
- **Label in name (2.5.3):** Ensure `contentDescription` (or accessible name) includes or matches the visible label text so TalkBack users hear consistent information.
- **Nested controls (4.1.2):** Do not nest clickable/focusable views inside another clickable/focusable view. Use flat hierarchy; combine into one focusable group with a single contentDescription if they act as one control.
- **Nested elements (4.1.2):** Give each focusable child its own `contentDescription` or set `android:importantForAccessibility="no"` for decorative children.

---

### 5.2 Non-accessible interaction and focus (4.1.2, 2.4.3)

**What we cover:** Custom views focusable and activatable by TalkBack; focus order; no focus traps.

**How to check**

- Run the scan for "Non-accessible Interaction", "Nested Control Issues", and "Inaccessible Text Focus".
- With TalkBack, ensure every interactive element can be focused and activated (double-tap); ensure focus order is logical; ensure no focus trap in modals or custom widgets.

**How to do (remediation)**

- For **custom views** that should be interactive: set `android:focusable="true"` (or `isFocusable = true` in code), `android:contentDescription`, and `android:importantForAccessibility="yes"`. Override `performClick()` if needed so that double-tap activates. Use `android:accessibilityLiveRegion` for dynamic content. For custom actions, use `AccessibilityNodeInfo.addAction()` and handle in `onInitializeAccessibilityNodeInfo()`.
- **Focus order:** Order views in the layout so that traversal order (top-to-bottom, start-to-end) matches the logical flow. Avoid positive `focusOrder` that creates confusing order unless necessary.
- **Inaccessible text focus:** If a TextView is focusable but not interactive, either give it a clear role and contentDescription (e.g. "Heading") or set `android:focusable="false"` and `android:importantForAccessibility="no"` if it is decorative.
- **Input value (4.1.2):** Ensure EditText value is announced (default for EditText). For custom controls, set `AccessibilityNodeInfo.setText()` or equivalent so current value is exposed.

---

### 5.3 Color contrast (1.4.3)

**What we cover:** Text and background contrast ratios (4.5:1 normal, 3:1 large text); UI component contrast.

**How to check**

- Run the scan for "Insufficient Color Ratio".
- Use a contrast checker (e.g. WebAIM, or Android Studio layout inspector with color values); test with **bold** and **large** text settings if the app supports font scaling.

**How to do (remediation)**

- Use colors that meet **4.5:1** for normal text and **3:1** for large text (18sp+ or 14sp bold). Ensure UI components and graphics meet **3:1** against adjacent colors where required (1.4.11). Prefer theme colors and test in both light and dark themes if supported. Use `?attr/colorOnSurface` and `?attr/colorSurface` (or equivalent) for text and background so contrast is maintained with system theme.

---

### 5.4 Field labels and placement (3.3.2)

**What we cover:** Labels for inputs; labels before controls; programmatic association (labelFor).

**How to check**

- Run the scan for "Missing Field Label" and "Misplaced Field Label".
- With TalkBack, focus each EditText; verify a label is announced before or with the field and that announcement order is correct.

**How to do (remediation)**

- **Label association:** Use `android:labelFor="@id/edit_id"` on the TextView that labels the EditText so TalkBack announces the label with the field. Place the label **visually before** the control in the layout.
- **TextInputLayout:** Wrap EditText in `TextInputLayout` and set `hint`; the hint is used as the accessibility label and floats above the field.
- **Hint:** Use `android:hint` for expected input, but always provide a programmatic label (labelFor or contentDescription) so the purpose is clear when hint is replaced by value.

---

### 5.5 Touch target size and spacing (2.5.5, 2.5.8)

**What we cover:** Minimum touch target size (48dp × 48dp recommended on Android) and spacing between targets.

**How to check**

- Run the scan for "Undersized Touch Target" and "Insufficient Target Spacing".
- Manually: Use the app with a finger; ensure buttons and tappable areas are easy to hit without accidentally activating adjacent controls.

**How to do (remediation)**

- Ensure touchable views have a **minimum size of 48dp × 48dp**. Use `android:minWidth`, `android:minHeight`, or add padding (e.g. `android:padding` or `minTouchTargetSize` in Material components). For icon-only buttons, increase the clickable area with `android:padding` or `touchDelegate` while keeping the visual icon size if needed.
- **Spacing:** Maintain at least 8dp (or more) between adjacent touch targets to reduce accidental taps. Use `contentDescription` and focus order so TalkBack users can distinguish adjacent controls.

---

### 5.6 Orientation (1.3.4)

**What we cover:** App does not restrict to one orientation without justification.

**How to check**

- Run the scan for "Fixed Orientation Lock".
- Rotate the device; confirm content/functionality is available in both orientations unless lock is essential (e.g. camera, game).

**How to do (remediation)**

- In the manifest, avoid locking orientation unless necessary: e.g. use `android:screenOrientation="unspecified"` (or allow both portrait and landscape). If lock is required (e.g. `sensorLandscape` for a game), document the justification and ensure no critical functionality is lost for users who cannot rotate.

---

### 5.7 Status messages and other criteria (4.1.3, and remaining)

**What we cover:** Status messages (e.g. "Saved", "Error") announced to TalkBack; other WCAG criteria where applicable.

**How to check**

- Trigger in-app status updates; verify they are announced (e.g. via live region or `announceForAccessibility()`).
- For 2.2.1, 2.2.2, 2.3.1, 3.2.1, 3.2.2, 3.3.1, 3.3.7, 3.3.8: combine scan results with manual and design checks as needed.

**How to do (remediation)**

- **4.1.3 Status messages:** Call `view.announceForAccessibility(getString(R.string.saved))` when a status update occurs (e.g. after save). For repeated updates, consider `AccessibilityNodeInfo.setLiveRegion(LIVE_REGION_POLITE)` (or ASSERTIVE) and update the node’s text so TalkBack announces changes.
- **Errors (3.3.1):** Expose error text via `contentDescription` on the EditText or an associated error TextView, and set `View.setContentInvalid(true)` so TalkBack can announce the error state.

---

## 6. Summary

- **Support:** For TestMU platform, accessibility coverage, or device issues contact TestMU/LambdaTest support.
- **Full WCAG reference:** Section 2 lists **100% of WCAG 2.0, 2.1, and 2.2** success criteria (87 total) as they apply to Android. Use it as the master reference.
- **What we cover:** Section 3 is the **checklist** of rules TestMu AI Accessibility Android can check (WCAG 2.0, 2.1, 2.2 Level A, AA, and selected AAA). Section 4 describes **how to use the platform to test** (run scan, view report, filter, export). Section 5 provides **how to check** and **how to do** (remediation) for labels, contrast, field labels, touch targets, orientation, and assistive technology access.
- **Use this doc** as a single reference for what is covered on Android, how to use the platform, and how to verify or fix issues.
