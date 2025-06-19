---
id: accessibility-ios-rules
title: iOS Accessibility Rules - Quick Reference
sidebar_label: iOS
description: Use LambdaTest Accessibility DevTools to detect and report accessibility issues with automation, following WCAG guidelines.
keywords:
    - LambdaTest
    - Accessibility
    - Testing
    - Manual
    - Accessibility Testing Settings
url: https://www.lambdatest.com/support/docs/accessibility-ios-rules/
site_name: LambdaTest
slug: accessibility-ios-rules/
---
 
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Accessibility iOS Rules",
          "item": "https://www.lambdatest.com/support/docs/accessibility-ios-rules/"
        }]
      })
    }}
></script>

| Rule Name | WCAG | Level | Impact | Description |
|-----------|------|-------|--------|-------------|
| Missing Accessibility Labels | 4.1.2 | A | Serious | Interactive UI elements lack proper accessibility labels, hints, or descriptions that VoiceOver can announce to users. Set `accessibilityLabel` for meaningful descriptions and `accessibilityHint` for usage guidance. In SwiftUI use `.accessibilityLabel()` and `.accessibilityHint()`. For images, provide descriptive text. For buttons, ensure labels describe the action, not just visual appearance. |
| Color Contrast Issues | 1.4.3 | AA | Serious | Text and background color combinations fail to meet WCAG minimum contrast ratios for visual accessibility. Use Apple's Color Contrast Calculator or online tools to verify 4.5:1 ratio for normal text, 3:1 for large text. Implement system colors that adapt to accessibility settings and test in high contrast mode. Consider using semantic colors like `UIColor.label` and `UIColor.systemBackground`. |
| Touch Target Sizing | 2.5.5 | AAA | Moderate | Touch target areas are smaller than Apple's recommended 44pt minimum size or lack adequate spacing from adjacent elements. Ensure interactive elements are at least 44x44 points by increasing button frame size or adding transparent padding. Use constraints to maintain minimum spacing between adjacent touchable elements. In SwiftUI, use `.frame(minWidth: 44, minHeight: 44)` and test on actual devices. |
| Assistive Technology Access | 4.1.2 | A | Serious | UI components cannot be properly detected, focused, or activated by VoiceOver and other assistive technologies. Set `isAccessibilityElement = true` for custom views, ensure proper view hierarchy, and avoid blocking accessibility elements. Implement `accessibilityActivate()` for custom interactions and use `accessibilityElements` array to define focus order. Test navigation with VoiceOver gestures. |
| Text Truncation Issues | 1.4.4 | AA | Serious | Text content becomes truncated or cut off when users increase font sizes through iOS Dynamic Type settings. Use `adjustsFontForContentSizeCategory = true` on text elements and implement flexible layouts with priority constraints. Use `UIFont.preferredFont(forTextStyle:)` for scalable system fonts. Test with largest accessibility text sizes and avoid fixed height constraints on text containers. |
| Accessibility Role Definition | 4.1.2 | A | Moderate | UI elements lack appropriate accessibility traits that define their role, state, or behavior for assistive technology interaction. Set correct `accessibilityTraits` (.button, .link, .header, .selected, .disabled) and combine traits when needed. Update traits dynamically based on state changes. In SwiftUI, use `.accessibilityAddTraits()` and `.accessibilityRemoveTraits()` to ensure custom controls communicate their purpose clearly. |
| Dynamic Type Support | 1.4.4 | AA | Serious | App interface fails to properly scale or adapt when users enable larger text sizes in iOS accessibility settings. Enable Dynamic Type support using `traitCollectionDidChange` to respond to size changes and use Auto Layout with flexible constraints. Implement `adjustsFontForContentSizeCategory` on text elements. Test with Settings > Accessibility > Display & Text Size > Larger Text and design layouts that reflow gracefully. |


> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.