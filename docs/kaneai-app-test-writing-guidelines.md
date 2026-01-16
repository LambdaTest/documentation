---
id: kane-ai-app-test-writing-guidelines
title: KaneAI App Agent - Guidelines for Writing Instructions
hide_title: false
sidebar_label: App Agent Instruction Guide
description: Learn how to write instructions for running the kane ai app agent smoothly and without any problem
keywords:
  - testmu ai automation
  - testmu ai kaneai
  - kaneai App test
  - kaneai guidelines
  - instructions writings
url: https://www.testmu.ai/support/docs/kane-ai-app-test-writing-guidelines/
site_name: LambdaTest
slug: kane-ai-app-test-writing-guidelines
canonical: https://www.testmu.ai/support/docs/kane-ai-app-test-writing-guidelines/
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
          "name": "KaneAI App Test",
          "item": `${BRAND_URL}/support/docs/kane-ai-app-test-writing-guidelines`
        }]
      })
    }}
></script>
# Best Practices for Authoring Mobile Native App Tests in KaneAI

Authoring mobile native app tests in KaneAI can be significantly enhanced by following these best practices. These ensure improved stability, reliability, and accuracy of the generated steps and ultimately, the automation.

## OTP and PIN Fields

For OTP or PIN fields where each digit is in a separate box:

- Use the keyword: `OTP`
- Example: `Enter OTP "1234"`

## Partially Clickable Text (Spannable Text)

For labels or descriptions containing partially clickable links/texts:

- Use the keyword: `spannable text`
- Example: `Click on spannable text: "Terms and Conditions" in bottom info modal`

## Wheels, Sliders, Seekbars, and Date Pickers

Supported element classes:

- **Android**: `android.widget.NumberPicker`, `android.widget.SeekBar`
- **iOS**: `XCUIElementTypePickerWheel`, `XCUIElementTypePicker`, `XCUIElementTypeDatePicker`, `XCUIElementTypeSlider`

Use instruction:

- `Enter "2" in first column`

If issues arise:

- Use <BrandName /> App Live [UI Inspector](/support/docs/ui-inspector/) to verify if the element class is supported.

## Dismissing Popups

To dismiss popups without visible close buttons:

- Use instruction: `dismiss dialog`

## Hiding Keyboard

- **Android**: Use instruction: `hide keyboard`
- **iOS**: Prefer `press enter` after `type` or use: `click on cancel` button in keyboard if applicable

Example:

- `Type abcd and press enter`

> Note: iOS keyboards are often persistent, and `press enter` helps dismiss them. On Android, this is usually not required.

## Typing and Special Keys

- For deleting characters: use `press Del`

## Wait Instructions

- Always insert explicit `wait` commands if a screen or element load takes time after an action. Refer [this doc](http://localhost:3001/support/docs/kane-ai-command-guide/#explicit-waits). 

Example:

- `Click on Submit button`
- `Wait for 3 seconds`
- `Assert confirmation text is visible`

## Scroll and Wait Pattern

If scrolling is needed before performing an action:

- Use: `Scroll down 2 times`
- Add wait after scroll: `Wait for 2 seconds`

## Explicit Element Identifiers

Use specific element identifiers to improve accuracy:

- `Click on abc 'button'`
- `Click on continue 'text'`
- `Assert abc button 'background color' is red`

## Typing in Specific Input Fields

Be explicit when typing:

- `Type "2" in "username" input field`

By following these practices, users can significantly reduce errors and improve clarity when authoring native mobile app tests in KaneAI.
