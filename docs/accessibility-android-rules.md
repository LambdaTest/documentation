---
id: accessibility-android-rules
title: Android Accessibility Rules - Quick Reference
sidebar_label: Android
description: Use TestMu AI Accessibility DevTools to automatically find and report accessibility issues as per WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.testmuai.com/support/docs/accessibility-android-rules/
site_name: TestMu AI
slug: accessibility-android-rules/
canonical: https://www.testmuai.com/support/docs/accessibility-android-rules/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "name": "Accessibility Android Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-android-rules/`
        }]
      })
    }}
></script>

| Rule Name | WCAG | Level | Impact | Description |
|-----------|------|-------|--------|-------------|
| Interactive Role Undefined | 4.1.2 | A | Critical | Interactive container elements (ViewGroup, FrameLayout, LinearLayout, etc.) that are clickable but lack a **role** for screen readers. A label (contentDesc) provides the **Name** only; WCAG 4.1.2 requires both Name and Role. Add a semantic child widget (Button, Switch, CheckBox, etc.) so the role is programmatically determinable, or ensure the container is not the sole interactive focus. |
| Missing Image Alt | 1.1.1 | A | Critical | Images lack alternative text descriptions that screen readers can announce to users. Add `android:contentDescription` to meaningful images or set to empty string for decorative images to ensure proper accessibility support. |
| Missing View Accessibility | 4.1.2 | A | Serious | Interactive elements like buttons, clickable views, or custom controls lack proper accessibility labels that describe their purpose. Ensure all interactive Views have clear `android:contentDescription` or associated labels for screen readers. |
| Unlabeled Checkbox Element | 4.1.2 | A | Serious | Checkbox controls are missing accessible names that describe their purpose or current state. Provide descriptive labels using `android:text`, `android:contentDescription`, or associated TextView labels so users understand what they're selecting. |
| Insufficient Color Ratio | 1.4.3 | AA | Serious | Text elements don't meet minimum contrast ratio requirements making them difficult to read for users with visual impairments. Maintain 4.5:1 ratio for normal text and 3:1 for large text by adjusting colors or background. |
| Missing Field Label | 3.3.2 | A | Serious | Input fields like EditText lack descriptive labels that identify their purpose to users. Provide clear labels using `android:hint`, associated TextView with `android:labelFor`, or TextInputLayout to describe expected input. |
| Non-accessible Interaction | 4.1.2 | A | Serious | Custom interactive elements, buttons, or gesture-based controls cannot be accessed or activated through assistive technology. Ensure all interactive elements have proper focus handling, role definition, and descriptive labels. |
| Missing Screen Title | 2.4.2 | A | Serious | Activities or screens lack descriptive titles that help users understand their current location in the app. Set meaningful titles using `setTitle()` or `supportActionBar?.title` for proper navigation context. |
| Unlabeled Toggle Control | 4.1.2 | A | Serious | Switch, toggle, or similar controls are missing accessible names that explain what they control and their current state. Provide descriptive labels that clearly indicate what the toggle affects (e.g., "Wi-Fi enabled"). |
| Mismatched Label Text | 2.5.3 | A | Serious | The visible text label on a control differs from the programmatically accessible name, causing confusion for screen reader users. Ensure the accessible name includes or matches the visible text exactly. |
| Missing Input Value | 4.1.2 | A | Moderate | Text fields are missing programmatic values that assistive technology can read, making it difficult for users to understand current input state. Ensure EditText values are properly exposed and announced by screen readers. |
| Inaccessible Text Focus | 4.1.2 | A | Moderate | Text elements that receive focus lack proper accessibility properties, confusing screen reader users about their purpose. Either provide clear interactive roles and descriptions or remove focus capability for non-interactive text. |
| Misplaced Field Label | 3.3.2 | A | Moderate | Form labels are not positioned correctly relative to their controls or lack proper programmatic association. Ensure labels appear visually before controls and use `android:labelFor` for proper screen reader announcement order. |
| Nested Control Issues | 4.1.2 | A | Moderate | Interactive elements are incorrectly nested inside other interactive elements, creating focus traps and navigation confusion. Separate interactive elements into distinct, non-nested components to ensure proper accessibility navigation. |
| Unnamed Nested Element | 4.1.2 | A | Moderate | Elements within containers lack their own accessible names when they should be independently accessible. Provide distinct labels for nested interactive elements or mark decorative elements as non-focusable. |
| Fixed Orientation Lock | 1.3.4 | AA | Moderate | App restricts viewing to only portrait or landscape orientation without accessibility justification. Support both orientations or provide alternative access methods for users who cannot rotate their devices due to physical constraints. |
| Undersized Touch Target | 2.5.5 | AAA | Moderate | Interactive elements are smaller than the recommended minimum touch target size, making them difficult to activate for users with motor impairments. Ensure all touch targets are at least 48dp x 48dp. |
| Insufficient Target Spacing | 2.5.5 | AAA | Moderate | Interactive elements are placed too close together without adequate spacing, increasing risk of accidental activation. Provide sufficient spacing between adjacent touch targets to prevent targeting errors for users with limited dexterity. |


---

## Interactive Role Undefined (WCAG 4.1.2)

**Rule ID:** `InteractiveRoleUndefined` · **WCAG:** 4.1.2 Name, Role, Value (Level A) · **Impact:** Critical

### What it detects

Interactive **container** elements (ViewGroup, FrameLayout, LinearLayout, RelativeLayout, ConstraintLayout, CoordinatorLayout, CardView) that are clickable and important for accessibility but have **no semantic child widget** (Button, Switch, CheckBox, etc.). Screen readers then get a **Name** (e.g. from `contentDesc`) but not a **Role**, so users cannot tell if the element is a button, link, or something else, or how to interact with it.

### Why accessibility labels don't fix it

WCAG 4.1.2 requires both **Name** and **Role** to be programmatically determinable:

| Requirement | What provides it | Example |
|-------------|------------------|---------|
| **Name** | contentDesc, text, hint | "Submit", "Settings toggle" |
| **Role** | Semantic widget type | Button, Switch, CheckBox |

A label only provides the Name. Without a semantic child (or equivalent role), the **Role** stays undefined, so the rule still reports a violation.

### Violation conditions (all must be true)

- Element class is one of: ViewGroup, FrameLayout, LinearLayout, RelativeLayout, ConstraintLayout, CoordinatorLayout, CardView
- `importantForAccessibility = true`
- `clickable = true` OR `longClickable = true`
- `isVisibleToUser = true`
- **No** semantic child widget in the subtree (Button, Switch, CheckBox, RadioButton, Spinner, SeekBar, RatingBar, EditText, Chip, Tab, ImageButton, FloatingActionButton, etc.)

### Violation example

```xml
<LinearLayout
    clickable="true"
    importantForAccessibility="true"
    contentDesc="Submit action">
    <ImageView src="@drawable/submit_icon" />
</LinearLayout>
```

- Has **Name:** "Submit action" (contentDesc)
- **Missing Role:** no semantic widget (ImageView does not provide a role)
- **Result:** Screen reader announces only "Submit action"; user does not know it is a button or how to activate it. **Violation.**

### Valid pattern (no violation)

```xml
<LinearLayout
    clickable="true"
    importantForAccessibility="true">
    <TextView text="Dark Mode" />
    <Switch />  <!-- Provides the Role -->
</LinearLayout>
```

TalkBack announces: "Dark Mode, Switch, Off, Double tap to toggle." The **Switch** child provides the role even though the parent handles the click. **No violation.**

### How to fix

- **Preferred:** Add a semantic child widget (Button, Switch, CheckBox, etc.) inside the container so the role is programmatically determinable. You can keep the parent clickable for a larger touch target (WCAG 2.5.5).
- **Alternative:** If the container must stay as the only focusable node, ensure it is exposed with an appropriate role via the platform accessibility APIs (e.g. `setAccessibilityDelegate` and role/action handling) so that both name and role are available to assistive technology.


> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.
