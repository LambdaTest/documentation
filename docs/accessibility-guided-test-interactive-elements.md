---
id: accessibility-guided-test-interactive-elements
title: Interactive Elements Guided Test
hide_title: false
sidebar_label: Interactive Elements
description: The Interactive Elements guided test finds every control on the page and checks its name, role, and state for WCAG 4.1.2, with questions you or AI answer for the items a scan cannot decide.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Interactive Elements
  - Name Role Value
  - ARIA
url: https://www.testmuai.com/support/docs/accessibility-guided-test-interactive-elements/
site_name: TestMu AI
slug: accessibility-guided-test-interactive-elements/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-interactive-elements/
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
          "name": "Interactive Elements Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-interactive-elements/`
        }]
      })
    }}
></script>

# Interactive Elements Guided Test

Screen reader users need to know what each control is and what it does. For this, each button, link, and form field must expose three things:

- **Name**: what the control is called, for example "Search".
- **Role**: what type of control it is, for example a button or a checkbox.
- **State**: its current condition, for example expanded or checked.

The Interactive Elements test finds the controls on the page, checks the name, role, and state of each one, and asks you to confirm the items a computer cannot decide.

## When to use this

Use this test on pages with custom widgets such as menus, tabs, accordions, toggles, and clickable `div` or `span` elements. Screen readers often miss these when they are not built as real controls.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

All rules map to WCAG 4.1.2 (A).

| Rule | Severity |
|---|---|
| Element Behaves Like A Control But Has No Role | Critical |
| Interactive Element Has No Accessible Name | Critical |
| Exposed Role Does Not Match Behaviour | Critical |
| Role attribute is not a valid ARIA role | Serious |
| Control does not expose its required state | Serious |
| ARIA state attribute has an invalid value | Serious |
| Accessible Name Does Not Describe The Control | Serious |
| Exposed State Does Not Match The Control | Serious |

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Interactive Elements**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Review the detected controls

The test lists standard controls, custom controls, and elements that look like controls but are not built as controls. Missing names, invalid roles, and missing or invalid states are flagged automatically. If the test missed a control, click it on the page to add it.

{/* IMAGE PLACEHOLDER: List of detected controls with name, role, and state
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/interactive-elements-list.png').default} alt="Detected controls in the Interactive Elements guided test" className="doc_img" width="1360" height="768" />
*/}

### Answer the questions for each control

For each control, confirm three things:

1. Does the name describe what the control does?
2. Is the role correct?
3. Does the state match what the control shows?

### Check other states

Some states only appear after you use the control. Change the control on the page, for example open a menu, and then select **Re-scan states**. The test reads the controls again and shows their new states. You stay in the same test and your answers are kept.

### Finish the test

When you have answered the questions, finish the test to generate the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI reads the name of each control and decides whether it describes what the control does. You can change the answer before you finish.

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Images Guided Test](/support/docs/accessibility-guided-test-images/)
