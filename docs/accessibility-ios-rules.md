---
id: accessibility-ios-rules
title: iOS Accessibility Rules - Quick Reference
sidebar_label: iOS
description: Use TestMu AI Accessibility DevTools to detect and report accessibility issues with automation, following WCAG guidelines.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.testmu.ai/support/docs/accessibility-ios-rules
site_name: LambdaTest
slug: accessibility-ios-rules
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
          "name": "Accessibility iOS Rules",
          "item": `${BRAND_URL}/support/docs/accessibility-ios-rules/`
        }]
      })
    }}
></script>

| Rule Name                          | WCAG   | Level | Impact  | Description |  
|-------------------------------------|--------|-------|---------|-------------|  
| Missing Accessibility Labels        | 4.1.2  | A     | Serious | Interactive UI elements lack proper accessibility labels, hints, or descriptions that VoiceOver can announce to users. Set `accessibilityLabel` for meaningful descriptions and `accessibilityHint` for usage guidance. In SwiftUI use `.accessibilityLabel()` and `.accessibilityHint()`. For images, provide descriptive text. For buttons, ensure labels describe the action, not just visual appearance. |  
| Color Contrast Issues               | 1.4.3  | AA    | Serious | Text and background color combinations fail to meet WCAG minimum contrast ratios for visual accessibility. Use Apple's Color Contrast Calculator or online tools to verify 4.5:1 ratio for normal text, 3:1 for large text. Implement system colors that adapt to accessibility settings and test in high contrast mode. Consider using semantic colors like `UIColor.label` and `UIColor.systemBackground`. |  
| Touch Target Sizing                 | 2.5.5  | AAA   | Moderate | Touch target areas are smaller than Apple's recommended 44pt minimum size or lack adequate spacing from adjacent elements. Ensure interactive elements are at least 44x44 points by increasing button frame size or adding transparent padding. Use constraints to maintain minimum spacing between adjacent touchable elements. In SwiftUI, use `.frame(minWidth: 44, minHeight: 44)` and test on actual devices. |  
| Assistive Technology Access         | 4.1.2  | A     | Serious | UI components cannot be properly detected, focused, or activated by VoiceOver and other assistive technologies. Set `isAccessibilityElement = true` for custom views, ensure proper view hierarchy, and avoid blocking accessibility elements. Implement `accessibilityActivate()` for custom interactions and use `accessibilityElements` array to define focus order. Test navigation with VoiceOver gestures. |  
| Text Truncation Issues              | 1.4.4  | AA    | Serious | Text content becomes truncated or cut off when users increase font sizes through iOS Dynamic Type settings. Use `adjustsFontForContentSizeCategory = true` on text elements and implement flexible layouts with priority constraints. Use `UIFont.preferredFont(forTextStyle:)` for scalable system fonts. Test with largest accessibility text sizes and avoid fixed height constraints on text containers. |  
| Accessibility Role Definition       | 4.1.2  | A     | Moderate | UI elements lack appropriate accessibility traits that define their role, state, or behavior for assistive technology interaction. Set correct `accessibilityTraits` (.button, .link, .header, .selected, .disabled) and combine traits when needed. Update traits dynamically based on state changes. In SwiftUI, use `.accessibilityAddTraits()` and `.accessibilityRemoveTraits()` to ensure custom controls communicate their purpose clearly. |  
| Dynamic Type Support                | 1.4.4  | AA    | Serious | App interface fails to properly scale or adapt when users enable larger text sizes in iOS accessibility settings. Enable Dynamic Type support using `traitCollectionDidChange` to respond to size changes and use Auto Layout with flexible constraints. Implement `adjustsFontForContentSizeCategory` on text elements. Test with Settings > Accessibility > Display & Text Size > Larger Text and design layouts that reflow gracefully. |  
| Accessibility Label Not Punctuated  <NewTag  value="New" /> | 3.3.2  | A     | Critical | Accessibility labels should not contain punctuation or formatting that may affect screen reader output. End accessibility labels with proper punctuation (period, exclamation, or question mark) to ensure natural screen reader pauses and pronunciation. This helps VoiceOver users understand where one element ends and another begins, improving the overall navigation experience. |  
| Missing Image Element Label  <NewTag  value="New" /> | 1.1.1  | A     | Critical | An accessibility label is an attribute assigned to UIImageView or UIButton elements that convey information graphically. This label gives a textual description of the graphic, making it accessible to users relying on screen readers. Add the `accessibilityLabel` property to all non-decorative UIImageView and UIButton elements containing images. For decorative images, set `isAccessibilityElement = false` to prevent unnecessary screen reader announcements. |  
| Missing Button Element Label  <NewTag  value="New" /> | 1.3.1  | A     | Critical | Button elements within your app must be properly labeled and fully accessible to users relying on assistive technologies like screen readers. Add `accessibilityLabel` or button title text to all buttons so screen reader users understand what action each button performs. Ensure labels describe the action (e.g., "Submit form", "Close dialog") rather than just the visual appearance. |  
| Button Element Capitalisation Check  <NewTag  value="New" /> | 3.1.6  | AAA   | Minor   | Button accessibility labels should begin with an uppercase letter and follow proper capitalization standards to improve readability and screen reader pronunciation. Use sentence case (e.g., "Save changes") instead of all caps or inconsistent capitalization. Avoid ALL CAPS as it may cause screen readers to read each letter individually. Follow iOS Human Interface Guidelines for consistent text formatting. |  
| Missing Checkbox Element Label  <NewTag  value="New" /> | 1.3.1  | A     | Critical | Checkbox elements within your app must be properly labeled and fully accessible to users relying on assistive technologies like screen readers. Add `accessibilityLabel` to checkbox elements to describe what option is being selected or deselected. Combine with appropriate `accessibilityTraits` (.button, .selected) and update traits dynamically when state changes to communicate current selection status. |  
| Missing Editable Element Label  <NewTag  value="New" /> | 1.3.1  | A     | Critical | Editable elements such as UITextField or UITextView should have both name and value available to screen readers. Add `accessibilityLabel` or associate with a UILabel to describe what information should be entered in text fields. Use `placeholder` text for additional guidance but never rely on it alone for accessibility. Ensure labels remain visible when fields are focused or filled. |  
| Missing Switch Element Label  <NewTag  value="New" /> | 1.3.1  | A     | Critical | Switch controls (UISwitch) in an app must have both their name and value available to screen readers. Add `accessibilityLabel` to switch controls to describe what setting or feature is being toggled on or off (e.g., "Enable notifications", "Dark mode"). The switch state (On/Off) is automatically announced by VoiceOver, so focus the label on describing the setting being controlled. |  
| Duplicate Accessibility Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Multiple UI elements on the same screen share the same accessibility label, causing confusion for screen reader users who cannot distinguish between different controls. Ensure each interactive element has a unique `accessibilityLabel` to prevent confusion. For similar elements (like multiple "Delete" buttons), add context such as "Delete photo 1", "Delete photo 2" or reference the item being acted upon. |  



> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.
