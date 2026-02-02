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


> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.
