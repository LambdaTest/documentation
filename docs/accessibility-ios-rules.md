---
id: accessibility-ios-rules
title: iOS Accessibility Rules - Quick Reference
sidebar_label: iOS
description: Use iOS accessibility rule references to understand mobile-app findings from Accessibility App Scanner and Native App Automation.
keywords:
    - TestMu AI
    - Accessibility
    - Testing
    - iOS
    - VoiceOver
    - App Scanner
url: https://www.testmuai.com/support/docs/accessibility-ios-rules/
site_name: TestMu AI
slug: accessibility-ios-rules/
canonical: https://www.testmuai.com/support/docs/accessibility-ios-rules/
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

These iOS rule summaries are a quick reference for findings that appear in Accessibility App Scanner and Native App Automation reports. Use the repository pages for deeper remediation guidance when a finding needs rule-level detail.

| Rule Name                          | WCAG   | Level | Impact  | Description | Deep dive |  
|-------------------------------------|--------|-------|---------|-------------|-----------|  
| Missing Accessibility Labels        | 4.1.2  | A     | Serious | Interactive UI elements lack proper accessibility labels, hints, or descriptions that VoiceOver can announce to users. Set `accessibilityLabel` for meaningful descriptions and `accessibilityHint` for usage guidance. In SwiftUI use `.accessibilityLabel()` and `.accessibilityHint()`. For images, provide descriptive text. For buttons, ensure labels describe the action, not just visual appearance. | [Open rule](/support/docs/accessibility-ios-rule-missing-accessibility-labels/) |  
| Color Contrast Issues               | 1.4.3  | AA    | Serious | Text and background color combinations fail to meet WCAG minimum contrast ratios for visual accessibility. Use Apple's Color Contrast Calculator or online tools to verify 4.5:1 ratio for normal text, 3:1 for large text. Implement system colors that adapt to accessibility settings and test in high contrast mode. Consider using semantic colors like `UIColor.label` and `UIColor.systemBackground`. | [Open rule](/support/docs/accessibility-ios-rule-color-contrast-issues/) |  
| Touch Target Sizing                 | 2.5.5  | AAA   | Moderate | Touch target areas are smaller than Apple's recommended 44pt minimum size or lack adequate spacing from adjacent elements. Ensure interactive elements are at least 44x44 points by increasing button frame size or adding transparent padding. Use constraints to maintain minimum spacing between adjacent touchable elements. In SwiftUI, use `.frame(minWidth: 44, minHeight: 44)` and test on actual devices. | [Open rule](/support/docs/accessibility-ios-rule-touch-target-sizing/) |  
| Assistive Technology Access         | 4.1.2  | A     | Serious | UI components cannot be properly detected, focused, or activated by VoiceOver and other assistive technologies. Set `isAccessibilityElement = true` for custom views, ensure proper view hierarchy, and avoid blocking accessibility elements. Implement `accessibilityActivate()` for custom interactions and use `accessibilityElements` array to define focus order. Test navigation with VoiceOver gestures. | [Open rule](/support/docs/accessibility-ios-rule-assistive-technology-access/) |  
| Text Truncation Issues              | 1.4.4  | AA    | Serious | Text content becomes truncated or cut off when users increase font sizes through iOS Dynamic Type settings. Use `adjustsFontForContentSizeCategory = true` on text elements and implement flexible layouts with priority constraints. Use `UIFont.preferredFont(forTextStyle:)` for scalable system fonts. Test with largest accessibility text sizes and avoid fixed height constraints on text containers. | [Open rule](/support/docs/accessibility-ios-rule-text-truncation-issues/) |  
| Accessibility Role Definition       | 4.1.2  | A     | Moderate | UI elements lack appropriate accessibility traits that define their role, state, or behavior for assistive technology interaction. Set correct `accessibilityTraits` (.button, .link, .header, .selected, .disabled) and combine traits when needed. Update traits dynamically based on state changes. In SwiftUI, use `.accessibilityAddTraits()` and `.accessibilityRemoveTraits()` to ensure custom controls communicate their purpose clearly. | [Open rule](/support/docs/accessibility-ios-rule-accessibility-role-definition/) |  
| Dynamic Type Support                | 1.4.4  | AA    | Serious | App interface fails to properly scale or adapt when users enable larger text sizes in iOS accessibility settings. Enable Dynamic Type support using `traitCollectionDidChange` to respond to size changes and use Auto Layout with flexible constraints. Implement `adjustsFontForContentSizeCategory` on text elements. Test with Settings > Accessibility > Display & Text Size > Larger Text and design layouts that reflow gracefully. | [Open rule](/support/docs/accessibility-ios-rule-dynamic-type-support/) |  
| Accessibility Label Not Punctuated  <NewTag  value="New" /> | 3.3.2  | A     | Critical | Accessibility labels are missing sentence-ending punctuation. End accessibility labels with a period, exclamation mark, or question mark so VoiceOver inserts a natural pause between elements. Without punctuation, the screen reader reads consecutive labels as a single run-on phrase, making it harder for users to distinguish where one element ends and the next begins. | [Open rule](/support/docs/accessibility-ios-rule-accessibility-label-not-punctuated/) |  
| Missing Image Element Label  <NewTag  value="New" /> | 1.1.1  | A     | Critical | An accessibility label is an attribute assigned to UIImageView or UIButton elements that convey information graphically. This label gives a textual description of the graphic, making it accessible to users relying on screen readers. Add the `accessibilityLabel` property to all non-decorative UIImageView and UIButton elements containing images. For decorative images, set `isAccessibilityElement = false` to prevent unnecessary screen reader announcements. | [Open rule](/support/docs/accessibility-ios-rule-missing-image-element-label/) |  
| Missing Button Element Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Button elements within your app must be properly labeled and fully accessible to users relying on assistive technologies like screen readers. Add `accessibilityLabel` or button title text to all buttons so screen reader users understand what action each button performs. Ensure labels describe the action (e.g., "Submit form", "Close dialog") rather than just the visual appearance. | [Open rule](/support/docs/accessibility-ios-rule-missing-button-element-label/) |  
| Button Element Capitalisation Check  <NewTag  value="New" /> | 3.1.6  | AAA   | Minor   | Button accessibility labels should begin with an uppercase letter and follow proper capitalization standards to improve readability and screen reader pronunciation. Use sentence case (e.g., "Save changes") instead of all caps or inconsistent capitalization. Avoid ALL CAPS as it may cause screen readers to read each letter individually. Follow iOS Human Interface Guidelines for consistent text formatting. | [Open rule](/support/docs/accessibility-ios-rule-button-element-capitalisation-check/) |  
| Missing Checkbox Element Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Checkbox elements within your app must be properly labeled and fully accessible to users relying on assistive technologies like screen readers. Add `accessibilityLabel` to checkbox elements to describe what option is being selected or deselected. Combine with appropriate `accessibilityTraits` (.button, .selected) and update traits dynamically when state changes to communicate current selection status. | [Open rule](/support/docs/accessibility-ios-rule-missing-checkbox-element-label/) |  
| Missing Editable Element Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Editable elements such as UITextField or UITextView should have both name and value available to screen readers. Add `accessibilityLabel` or associate with a UILabel to describe what information should be entered in text fields. Use `placeholder` text for additional guidance but never rely on it alone for accessibility. Ensure labels remain visible when fields are focused or filled. | [Open rule](/support/docs/accessibility-ios-rule-missing-editable-element-label/) |  
| Missing Switch Element Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Switch controls (UISwitch) in an app must have both their name and value available to screen readers. Add `accessibilityLabel` to switch controls to describe what setting or feature is being toggled on or off (e.g., "Enable notifications", "Dark mode"). The switch state (On/Off) is automatically announced by VoiceOver, so focus the label on describing the setting being controlled. | [Open rule](/support/docs/accessibility-ios-rule-missing-switch-element-label/) |  
| Duplicate Accessibility Label  <NewTag  value="New" /> | 4.1.2  | A     | Critical | Multiple UI elements on the same screen share the same accessibility label, causing confusion for screen reader users who cannot distinguish between different controls. Ensure each interactive element has a unique `accessibilityLabel` to prevent confusion. For similar elements (like multiple "Delete" buttons), add context such as "Delete photo 1", "Delete photo 2" or reference the item being acted upon. | [Open rule](/support/docs/accessibility-ios-rule-duplicate-accessibility-label/) |  
| Emoji or Symbol Used in Accessibility Label  <NewTag  value="New" /> | Best Practice | - | Minor | An interactive element's accessible label is made up mostly of emoji or symbols, which VoiceOver announces by verbose Unicode names rather than meaning. Replace functional emoji with a descriptive verb, or hide decorative symbols from the accessibility tree. | [Open rule](/support/docs/accessibility-ios-rule-emoji-symbol-label/) |
| Fixed Orientation Lock  <NewTag  value="New" /> | 1.3.4 | AA | Moderate | The app restricts viewing to a single orientation (portrait or landscape only), leaving no option for users whose device is fixed in the other orientation. Support both orientations unless a specific one is essential. | [Open rule](/support/docs/accessibility-ios-rule-fixed-orientation-lock/) |
| Images with Text  <NewTag  value="New" /> | 1.1.1 | A | Serious | Meaningful text is rendered inside an image's pixels instead of as real text, so VoiceOver can't announce it and it can't scale with Dynamic Type. Use real text views with an `accessibilityLabel`, or mark decorative images as hidden. | [Open rule](/support/docs/accessibility-ios-rule-images-with-text/) |
| Insufficient Touch Target Spacing  <NewTag  value="New" /> | 2.5.8 | AA | Serious | Two undersized interactive elements sit less than 8pt apart edge-to-edge, risking mis-taps for users with limited dexterity. Increase spacing to at least 8pt or enlarge both targets to 44x44pt. | [Open rule](/support/docs/accessibility-ios-rule-insufficient-touch-target-spacing/) |
| Interactive Role Undefined  <NewTag  value="New" /> | 4.1.2 | A | Critical | A custom, tappable view exposes no accessibility role, so VoiceOver announces only its text with no indication it's actionable. Add the role (`accessibilityTraits = .button`) or use a real control instead of a tappable container. | [Open rule](/support/docs/accessibility-ios-rule-interactive-role-undefined/) |
| Invalid Range Values  <NewTag  value="New" /> | 4.1.2 | A | Serious | A range control (slider, stepper, progress indicator) has a missing or NaN accessibility value, so VoiceOver can't announce its current state. Ensure min < max and expose a valid `accessibilityValue`. | [Open rule](/support/docs/accessibility-ios-rule-invalid-range-values/) |
| Meaningful Sequence  <NewTag  value="New" /> | 1.3.2 | A | Serious | The programmatic reading order doesn't match the meaningful visual sequence of the content, so VoiceOver users hear the pieces out of order. Set the `accessibilityElements` array to define the correct reading sequence. | [Open rule](/support/docs/accessibility-ios-rule-meaningful-sequence/) |
| Minimum Text Size  <NewTag  value="New" /> | Best Practice | - | Minor | Text renders below the Apple Human Interface Guidelines minimum of 11pt, making it difficult to read for users with low vision. Increase non-scalable text to at least the recommended minimum and prefer Dynamic Type styles. | [Open rule](/support/docs/accessibility-ios-rule-minimum-text-size/) |
| Mismatched Label Text *(Beta)*  <NewTag  value="New" /> | 2.5.3 | A | Serious | A control's accessible name does not contain its visible text, so Voice Control users speaking the visible label can't activate it and VoiceOver users hear something different from what's on screen. Never use developer identifiers as accessible names. | [Open rule](/support/docs/accessibility-ios-rule-mismatched-label-text/) |
| Misplaced Field Label *(Beta)*  <NewTag  value="New" /> | 2.5.3 | A | Moderate | The accessible name contains the visible text but doesn't begin with it, so Voice Control matching (which reads from the front) is slower and VoiceOver users hear extra context before the label they can see. Start the accessible name with the visible text. | [Open rule](/support/docs/accessibility-ios-rule-misplaced-field-label/) |
| Non-accessible Interaction  <NewTag  value="New" /> | 4.1.2 | A | Serious | An interactive element can't be accessed or activated via VoiceOver, Switch Control, or Voice Control, so the action exists for touch users only. Ensure every action is reachable by assistive technology with a clear description. | [Open rule](/support/docs/accessibility-ios-rule-non-accessible-interaction/) |
| Non-Descriptive Link Text  <NewTag  value="New" /> | 2.4.4 | A | Serious | A link's entire accessible name is a generic phrase like "Click here" or "Read more" that says nothing about its destination, making the VoiceOver rotor's link list unusable. Rewrite the text (or set a descriptive `accessibilityLabel`) to name the destination. | [Open rule](/support/docs/accessibility-ios-rule-non-descriptive-link-text/) |
| Overlapping Interactive Elements  <NewTag  value="New" /> | 2.5.5 | AAA | Serious | Two interactive elements share the same screen space, so which one receives a tap is an implementation detail invisible to the user. Adjust layout so interactive frames don't intersect, or combine them into one accessibility element. | [Open rule](/support/docs/accessibility-ios-rule-overlapping-interactive-elements/) |
| Redundant Role Keyword in Accessibility Label  <NewTag  value="New" /> | 4.1.2 | A | Serious | Accessible name repeats the control's role ("button", "link") that VoiceOver already announces, doubling verbosity on every focus. Strip the role noun from the label and assign the role programmatically instead. | [Open rule](/support/docs/accessibility-ios-rule-redundant-role-label/) |
| Redundant State Keyword in Accessibility Label  <NewTag  value="New" /> | 4.1.2 | A | Serious | Accessible name bakes in state words ("on", "selected") that VoiceOver already announces from the control, and the label can contradict the real state after it changes. Keep the label static and drive state through the control's own API. | [Open rule](/support/docs/accessibility-ios-rule-redundant-state-label/) |
| Traversal Order Does Not Match Visual Layout  <NewTag  value="New" /> | 2.4.3 | A | Serious | VoiceOver's reading order jumps backwards relative to the visual layout, disorienting the mental model screen reader users build from position. Reorder the view hierarchy so it matches the visual layout. | [Open rule](/support/docs/accessibility-ios-rule-traversal-order-mismatch/) |
| Two-Dimensional Scrolling Required  <NewTag  value="New" /> | 1.4.10 | AA | Serious | Content requires scrolling in two directions to be read once text is enlarged, breaking reflow for zoomed-in users. Let text wrap and grow vertically instead of overflowing horizontally. | [Open rule](/support/docs/accessibility-ios-rule-two-dimensional-scrolling/) |
| Unique Option Names  <NewTag  value="New" /> | 4.1.2 | A | Moderate | Multiple options within a selection group share the same accessible name, preventing screen reader users from distinguishing between choices. Give every option in the group a distinct accessible name. | [Open rule](/support/docs/accessibility-ios-rule-unique-option-names/) |



> We are continuously expanding our App Accessibility guidelines. Visit this page for the latest updates and new requirements.

## Related docs

- [iOS Rule Repository](/support/docs/accessibility-ios-rule-repository/)
- [iOS Coverage](/support/docs/accessibility-ios-what-we-cover/)
- [Native App Automation Appium (Overview)](/support/docs/accessibility-native-app-automation-test/)
