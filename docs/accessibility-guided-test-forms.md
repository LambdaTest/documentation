---
id: accessibility-guided-test-forms
title: Forms Guided Test
hide_title: false
sidebar_label: Forms
description: The Forms guided test finds the fields, field groups, and error behaviour on a page and checks labels, required state, autocomplete, grouping, and error messages.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Forms
  - Labels
  - Error Messages
  - Autocomplete
url: https://www.testmuai.com/support/docs/accessibility-guided-test-forms/
site_name: TestMu AI
slug: accessibility-guided-test-forms/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-forms/
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
          "name": "Forms Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-forms/`
        }]
      })
    }}
></script>

# Forms Guided Test

A form that a screen reader or keyboard user cannot complete locks people out. Every field needs a clear label, related fields need a shared group label, required fields must be marked, and errors must be explained in text.

The Forms test finds the fields, the field groups, and the error behaviour on the page. It does the automatic checks first, and then asks you to confirm the parts that need a person, such as whether a label describes what to enter and how the form behaves when you submit it.

## When to use this

Use this test on sign-up, login, checkout, search, and contact forms, and on any form with legal or financial effect.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Form field has no label | 4.1.2 (A) | Critical |
| Label is not persistent: placeholder is the only visual label | 3.3.2 (A) | Serious |
| Label is associated with a non-labelable element | 1.3.1 (A) | Serious |
| Programmatic label and visible label do not convey consistent information | 2.5.3 (A) | Serious |
| Aria-required has an invalid value | 4.1.2 (A) | Moderate |
| Field looks required but is not marked required | 1.3.1 (A) | Serious |
| Required field has no visible required indicator | 3.3.2 (A) | Moderate |
| Autocomplete attribute has an invalid value | 1.3.5 (AA) | Serious |
| Field collecting personal data has no autocomplete attribute | 1.3.5 (AA) | Minor |
| The programmatic label does not convey the purpose of the control | 2.4.6 (AA) | Serious |
| Required field is not clearly indicated | 3.3.2 (A) | Serious |
| Related fields are not grouped with a group label | 1.3.1 (A) | Serious |
| Field group has no label | 1.3.1 (A) | Serious |
| Group role has no accessible name | 1.3.1 (A) | Serious |
| Group name does not describe its fields | 2.4.6 (AA) | Moderate |
| Aria-describedby points at a missing element | 4.1.2 (A) | Serious |
| Aria-errormessage points at a missing element | 4.1.2 (A) | Serious |
| Field is marked invalid but no error message is associated | 3.3.1 (A) | Serious |
| Browser reports the field invalid but aria-invalid is not set | 4.1.2 (A) | Moderate |
| No error is shown when a required field is left empty | 3.3.1 (A) | Serious |
| No error is shown for invalid data | 3.3.1 (A) | Serious |
| Error message does not explain how to fix the field | 3.3.3 (AA) | Moderate |
| User cannot review and confirm the transaction before committing it, and the action is not reversible | 3.3.4 (AA) | Serious |

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Forms**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Choose the forms to test

Pick which forms on the page the test should cover.

{/* IMAGE PLACEHOLDER: List of forms detected on the page
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/forms-list.png').default} alt="Detected forms in the Forms guided test" className="doc_img" width="1360" height="768" />
*/}

### Review fields

The test checks that:

- Every field has a label.
- The label is persistent and not a placeholder only.
- The visible label matches the accessible name.
- Required state is both shown and marked.
- Fields that collect personal data use a valid autocomplete value.

Confirm whether the label of each field describes its purpose.

### Review groups

The test checks that related fields, for example a set of radio buttons, are wrapped in a group with a label. Confirm whether the name of each group describes its fields.

### Check error handling

The test checks that an invalid field has an associated message, that a required field left empty shows an error, that invalid data shows an error, and that the message explains how to fix the problem. For forms with legal or financial effect, it checks that the action can be reviewed, corrected, or reversed.

Submit the form in different ways and confirm what happens.

:::warning
Submitting a form runs its real action. Test on a staging environment or with test data if the form creates an order, sends a message, or changes an account.
:::

{/* IMAGE PLACEHOLDER: Error handling questions in the Forms guided test
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/forms-errors.png').default} alt="Error handling step in the Forms guided test" className="doc_img" width="1360" height="768" />
*/}

### Finish the test

Finish the test to generate the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI gives the first answer to these questions:

- Does each field's label describe what to enter?
- Does each group's name describe the fields it holds?

You can change any answer before you finish.

:::note AI credits
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).
:::

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Interactive Elements Guided Test](/support/docs/accessibility-guided-test-interactive-elements/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
