---
id: accessibility-android-rules
title: Android Accessibility Rules - Quick Reference
sidebar_label: Android
description: Use Android accessibility rule references to understand mobile-app findings from Accessibility App Scanner and Native App Automation.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Android
    - TalkBack
    - App Scanner
url: https://www.testmuai.com/support/docs/accessibility-android-rules/
site_name: TestMu AI
slug: accessibility-android-rules/
canonical: https://www.testmuai.com/support/docs/accessibility-android-rules/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import NewTag from '../src/component/newTag';
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

These Android rule summaries are a quick reference for findings that appear in Accessibility App Scanner and Native App Automation reports. Use the repository pages for deeper remediation guidance when a finding needs rule-level detail.

| Rule Name | WCAG | Level | Impact | Description | Deep dive |
|-----------|------|-------|--------|-------------|-----------|
| Interactive Role Undefined | 4.1.2 | A | Critical | Interactive container elements (ViewGroup, FrameLayout, LinearLayout, etc.) that are clickable but lack a **role** for screen readers. A label (contentDesc) provides the **Name** only; WCAG 4.1.2 requires both Name and Role. Add a semantic child widget (Button, Switch, CheckBox, etc.) so the role is programmatically determinable, or ensure the container is not the sole interactive focus. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Missing Image Alt | 1.1.1 | A | Critical | Images lack alternative text descriptions that screen readers can announce to users. Add `android:contentDescription` to meaningful images or set to empty string for decorative images to ensure proper accessibility support. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Missing View Accessibility | 4.1.2 | A | Serious | Interactive elements like buttons, clickable views, or custom controls lack proper accessibility labels that describe their purpose. Ensure all interactive Views have clear `android:contentDescription` or associated labels for screen readers. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Unlabeled Checkbox Element | 4.1.2 | A | Serious | Checkbox controls are missing accessible names that describe their purpose or current state. Provide descriptive labels using `android:text`, `android:contentDescription`, or associated TextView labels so users understand what they're selecting. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Insufficient Color Ratio | 1.4.3 | AA | Serious | Text elements don't meet minimum contrast ratio requirements making them difficult to read for users with visual impairments. Maintain 4.5:1 ratio for normal text and 3:1 for large text by adjusting colors or background. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Missing Field Label | 3.3.2 | A | Serious | Input fields like EditText lack descriptive labels that identify their purpose to users. Provide clear labels using `android:hint`, associated TextView with `android:labelFor`, or TextInputLayout to describe expected input. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Non-accessible Interaction | 4.1.2 | A | Serious | Custom interactive elements, buttons, or gesture-based controls cannot be accessed or activated through assistive technology. Ensure all interactive elements have proper focus handling, role definition, and descriptive labels. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Missing Screen Title | 2.4.2 | A | Serious | Activities or screens lack descriptive titles that help users understand their current location in the app. Set meaningful titles using `setTitle()` or `supportActionBar?.title` for proper navigation context. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Unlabeled Toggle Control | 4.1.2 | A | Serious | Switch, toggle, or similar controls are missing accessible names that explain what they control and their current state. Provide descriptive labels that clearly indicate what the toggle affects (e.g., "Wi-Fi enabled"). | [Open rule](/support/docs/accessibility-rule-repository/) |
| Mismatched Label Text *(Beta)* | 2.5.3 | A | Serious | A control's accessible name does not contain its visible text, so voice control users speaking the visible label can't activate it and screen reader users hear something different from what's on screen. Never use developer identifiers as accessible names. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Missing Input Value | 4.1.2 | A | Moderate | Text fields are missing programmatic values that assistive technology can read, making it difficult for users to understand current input state. Ensure EditText values are properly exposed and announced by screen readers. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Inaccessible Text Focus | 4.1.2 | A | Moderate | Text elements that receive focus lack proper accessibility properties, confusing screen reader users about their purpose. Either provide clear interactive roles and descriptions or remove focus capability for non-interactive text. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Misplaced Field Label *(Beta)* | 2.5.3 | A | Moderate | A control's accessible name contains its visible text but doesn't begin with it, so voice control matching (which reads from the front) is slower and screen reader users hear extra context before the label they can see. Start the accessible name with the visible label. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Nested Control Issues | 4.1.2 | A | Moderate | Interactive elements are incorrectly nested inside other interactive elements, creating focus traps and navigation confusion. Separate interactive elements into distinct, non-nested components to ensure proper accessibility navigation. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Unnamed Nested Element | 4.1.2 | A | Moderate | Elements within containers lack their own accessible names when they should be independently accessible. Provide distinct labels for nested interactive elements or mark decorative elements as non-focusable. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Fixed Orientation Lock | 1.3.4 | AA | Moderate | App restricts viewing to only portrait or landscape orientation without accessibility justification. Support both orientations or provide alternative access methods for users who cannot rotate their devices due to physical constraints. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Undersized Touch Target | 2.5.5 | AAA | Moderate | Interactive elements are smaller than the recommended minimum touch target size, making them difficult to activate for users with motor impairments. Ensure all touch targets are at least 48dp x 48dp. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Insufficient Target Spacing | 2.5.5 | AAA | Moderate | Interactive elements are placed too close together without adequate spacing, increasing risk of accidental activation. Provide sufficient spacing between adjacent touch targets to prevent targeting errors for users with limited dexterity. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Duplicate Accessibility Label  <NewTag  value="New" /> | 4.1.2 | A | Critical | Multiple interactive elements on the same screen share an identical accessibility label, making it impossible for Voice Access or TalkBack users to tell them apart. Give each element a unique, contextual label (e.g., include the item it acts on). | [Open rule](/support/docs/accessibility-rule-repository/) |
| Button Element Capitalisation Check  <NewTag  value="New" /> | 3.1.6 | AAA | Minor | Button labels use inconsistent capitalization (lowercase start, mid-word caps, or irregular hyphen casing) that can cause text-to-speech engines to mispronounce them. Use sentence case in the source string and apply all-caps styling only visually via `android:textAllCaps`. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Emoji or Symbol Used in Accessibility Label  <NewTag  value="New" /> | Best Practice | - | Minor | An interactive element's accessible label is made up mostly of emoji or symbols, which screen readers announce by verbose or ambiguous Unicode names. Replace functional emoji with a descriptive verb, or hide decorative symbols with `android:importantForAccessibility="no"`. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Redundant State Keyword in Accessibility Label  <NewTag  value="New" /> | 4.1.2 | A | Serious | Accessible name bakes in state words ("on", "off", "selected") that TalkBack already announces from the control, and the label can fall out of sync when the state changes. Keep labels static and expose state via `stateDescription` or `android:checked`. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Redundant Role Keyword in Accessibility Label  <NewTag  value="New" /> | 4.1.2 | A | Serious | Accessible name repeats the control's role ("button", "switch") that TalkBack already announces, doubling verbosity on every focus. Strip role nouns from the label and assign the role programmatically instead. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Non-Descriptive Link Text  <NewTag  value="New" /> | 2.4.4 | A | Serious | A link's entire accessible name is a generic phrase like "Click here" or "Read more" that doesn't describe its destination, making link lists unusable for screen reader users. Replace with text describing what the link does. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Traversal Order Does Not Match Visual Layout *(Beta)*  <NewTag  value="New" /> | 2.4.3 | A | Serious | TalkBack's reading order, set via traversal overrides, either loops indefinitely or contradicts the screen's visual layout. Remove unnecessary overrides so code order matches visual order, or fix the chain so it reads correctly with no loops. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Dynamic Type Support  <NewTag  value="New" /> | 1.4.4 | AA | Serious | Text is sized in a fixed unit (dp/px/pt) instead of `sp`, so it does not scale when users enable larger system font sizes. Use `sp` for `android:textSize` on all text elements. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Non-Responsive Container Clips Text  <NewTag  value="New" /> | 1.4.10 | AA | Serious | A layout container holding text uses fixed px/dp dimensions, so the text is clipped or truncated when users enlarge the font scale. Use `match_parent`, `wrap_content`, or `0dp` with `layout_weight` instead of fixed dimensions. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Unique Option Names  <NewTag  value="New" /> | 4.1.2 | A | Moderate | Options within the same selection group (radio buttons, tabs, segments) share an identical accessible name, so screen reader users can't tell the choices apart. Give every option in the group a distinct accessible name. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Invalid Range Values  <NewTag  value="New" /> | 4.1.2 | A | Serious | A range control's (slider, stepper, progress bar) reported value is inconsistent — the current value falls outside min/max, or the range itself is invalid — producing wrong or meaningless announcements. Ensure min < max and the current value stays within range. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Images with Text  <NewTag  value="New" /> | 1.1.1 | A | Serious | Meaningful text is rendered inside an image's pixels instead of as real text, so screen readers can't announce it and it can't scale, reflow, or be translated. Use a real `TextView` or provide the text via `android:contentDescription`. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Meaningful Sequence  <NewTag  value="New" /> | 1.3.2 | A | Serious | The programmatic reading order doesn't match the meaningful visual sequence of the content, so screen reader users hear the pieces out of order. Reorder views to match the visual reading order. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Non-Focusable Interactive Element  <NewTag  value="New" /> | 2.1.1 | A | Serious | An element responds to touch but cannot receive input focus, making it unreachable for users navigating by external keyboard, D-pad, or switch access. `setOnClickListener` sets `clickable=true` but not `focusable=true` — both are required. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Minimum Text Size  <NewTag  value="New" /> | Best Practice | - | Minor | Text renders below the recommended minimum readable size (16dp), making it difficult to read for users with low vision. Increase non-scalable text to at least the recommended minimum and prefer `sp` units. | [Open rule](/support/docs/accessibility-rule-repository/) |
| Text Spacing  <NewTag  value="New" /> | Best Practice | - | Minor | Text is rendered with line height, word spacing, or paragraph gaps below the readability floor. The scanner enforces a minimum of 0.9x line height; 1.2–1.5x is recommended for best readability. | [Open rule](/support/docs/accessibility-rule-repository/) |


> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.

## Related docs

- [Android Rule Repository](/support/docs/accessibility-rule-repository/)
- [Android Coverage](/support/docs/accessibility-web-what-we-cover/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
