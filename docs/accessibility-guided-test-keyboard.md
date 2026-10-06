---
id: accessibility-guided-test-keyboard
title: Keyboard Guided Test
hide_title: false
sidebar_label: Keyboard
description: The Keyboard guided test tabs through the page with real key presses, records the focus order, and checks for keyboard traps, unreachable controls, missing focus indicators, and focus hidden by other content.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Keyboard
  - Tab Order
  - Focus Indicator
url: https://www.testmuai.com/support/docs/accessibility-guided-test-keyboard/
site_name: TestMu AI
slug: accessibility-guided-test-keyboard/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-keyboard/
---

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
          "name": "Keyboard Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-keyboard/`
        }]
      })
    }}
></script>

# Keyboard Guided Test

Many users cannot use a mouse. They move through a page with the Tab key. If a control cannot receive focus, or if focus is not visible, these users cannot use the page.

The Keyboard test moves through the page with real Tab key presses, the same way a keyboard user does. It records each element that receives focus, in order, and then checks each one for the most common keyboard issues.

## When to use this

Use this test to check tab order, keyboard traps, and focus visibility on a page or flow, for example a checkout form, a navigation menu, or a page with a sticky header.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Keyboard focus is trapped | 2.1.2 (A) | Critical |
| Element not keyboard reachable | 2.1.1 (A) | Critical |
| Hidden element receives focus | 2.4.3 (A) | Serious |
| Focus indicator is missing | 2.4.7 (AA) | Critical |
| Form submitted on focus | 3.2.1 (A) | Serious |
| New window launched on focus | 3.2.1 (A) | Serious |
| Focused element is entirely hidden by other content | 2.4.11 (AA) | Serious |
| Focused element is partly hidden by other content | 2.4.12 (AAA) | Moderate |

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Keyboard**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

{/* IMAGE PLACEHOLDER: Keyboard test start screen with Verify with AI switch
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/keyboard-start.png').default} alt="Keyboard guided test start screen" className="doc_img" width="1360" height="768" />
*/}

### Record the tab order

The test presses Tab through the page and follows the real focus in the browser. It does not guess the order from the page code. Each element that receives focus is added to the list in the order it was reached.

### Check for keyboard traps

If focus cannot move away from an element, the test stops and asks you to try to leave it with the keyboard. Your answer decides whether the report shows a keyboard trap. The test then continues from the next element.

### Review elements the keyboard cannot reach

The test lists elements that look interactive but never received focus. Confirm which ones are real controls. If you find a control the test missed, click it on the page to add it.

### Review focus visibility

The test compares each element with and without focus. It flags elements that show no visible change when focused, and elements that a sticky header or banner covers when they receive focus.

{/* IMAGE PLACEHOLDER: Focus visibility comparison for a single element
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/keyboard-focus-visibility.png').default} alt="Focus visibility check in the Keyboard guided test" className="doc_img" width="1360" height="768" />
*/}

### Review and finish

The review screen shows each element with its passed and failed checks. You can mark any result as passed or failed before you finish the test.

## How AI helps

With **Verify with AI** on:

- AI compares each element with and without focus and decides whether the focus indicator is visible.
- AI looks at each element that did not receive focus and decides whether it is a real control.

You can change any AI answer on the review screen.

:::note AI credits
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).
:::

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Interactive Elements Guided Test](/support/docs/accessibility-guided-test-interactive-elements/)
- [Images Guided Test](/support/docs/accessibility-guided-test-images/)
- [Hover and Tooltips Guided Test](/support/docs/accessibility-guided-test-hover-tooltips/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
