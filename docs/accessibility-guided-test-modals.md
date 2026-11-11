---
id: accessibility-guided-test-modals
title: Modals Guided Test
hide_title: false
sidebar_label: Modals
description: The Modals guided test opens each dialog, moves through it with real key presses, and checks its role, name, focus handling, keyboard close, and focus return.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Modals
  - Dialogs
  - Focus Trap
url: https://www.testmuai.com/support/docs/accessibility-guided-test-modals/
site_name: TestMu AI
slug: accessibility-guided-test-modals/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-modals/
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
          "name": "Modals Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-modals/`
        }]
      })
    }}
></script>

# Modals Guided Test

Dialogs, pop-ups, and overlays must work for keyboard and screen reader users. When a modal opens, focus must move into it. While it is open, focus must stay inside it and the page behind it must be hidden from assistive technology. The modal must be closable with the keyboard, and when it closes, focus must return to the control that opened it.

The Modals test checks one modal at a time. You say how the modal opens and pick the control that opens it, or the open modal itself. The extension then opens the modal, moves through it with real Tab presses, presses Escape, tries its close control and its backdrop, and watches where focus goes at each point. It asks you to confirm each result, with the answers already filled in from what it observed.

Every answer comes from the automated checks in the browser, so the test does not use **Verify with AI** and does not use AI credits. The same page gives the same answers on every run.

## When to use this

Use this test on pages with dialogs, confirmation pop-ups, cookie or consent overlays, and session-timeout dialogs.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Modal does not expose a dialog role | 4.1.2 (A) | Critical |
| Modal has no accessible name | 4.1.2 (A) | Serious |
| Page behind the modal is not hidden from assistive technology | 1.3.2 (A) | Serious |
| Focus does not move into the modal when it opens | 2.4.3 (A) | Critical |
| Focus is not trapped inside the open modal | 2.4.3 (A) | Serious |
| Focused element is completely hidden behind the modal | 2.4.11 (AA) | Serious |
| Focused element is partially hidden behind the modal | 2.4.12 (AAA) | Moderate |
| Escape does not close the modal | 2.4.3 (A), best practice | Moderate |
| Modal cannot be closed with the keyboard | 2.1.2 (A) | Critical |
| Focus does not return to the trigger when the modal closes | 2.4.3 (A) | Serious |

The Escape rule is a best practice. It follows the best-practice switch in [DevTools Settings](/support/docs/accessibility-devtools-settings/#best-practices), like the best-practice rules of a normal scan.

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Modals**. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

### Pick the modal

There are two ways to pick a modal:

- **The modal has a launcher.** Click the launcher on the page and let the test open the modal, so that it can see where focus goes.
- **The modal opens another way**, for example a session-timeout dialog. Open it yourself, and then pick it on the page or in the DOM tree.

If you pick an element inside a modal that you opened, the test moves the pick to the dialog that contains it, and the panel tells you so. When a page has no dialog markup, the test picks the largest new overlay and asks you to confirm that it is the modal before it runs any checks.

:::note
The page must have focus for a pick to register. If you were last working in the DevTools panel and your click on the page is not picked up, click once on an empty part of the page, and then click the element again.
:::

{/* IMAGE PLACEHOLDER: Pick step of the Modals test with the launcher option selected
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/modals-pick.png').default} alt="Pick step in the Modals guided test" className="doc_img" width="1360" height="768" />
*/}

### Let the test run the checks

Select **Run the checks**. The test walks the open modal forward with Tab and backward with Shift+Tab, presses Escape, activates a close control from the keyboard, and clicks the backdrop.

The test never activates a control that could have side effects, such as Accept, Submit, a link that leaves the page, or a form button.

### Confirm the results

Each answer is filled in from the checks. When a measurement is not conclusive, the answer is left blank and the row says why. You can change any answer.

For focus, the test lists every element that Tab reached outside the modal, and says for each one whether the dialog or its backdrop hides it fully, partly, or not at all.

If the checks cannot run, for example because another DevTools window holds the tab, the questions are shown blank and you answer from what you see. The markup checks still run.

{/* IMAGE PLACEHOLDER: Results of the Modals test with pre-filled answers
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/modals-results.png').default} alt="Pre-filled answers in the Modals guided test" className="doc_img" width="1360" height="768" />
*/}

### Test another modal

After each modal, the test asks if there is another modal to test, so one run can cover every modal on the page.

### Finish the test

Finish the test to generate the report. The report's Image View shows the dialog as it was during the checks, not the closed page. Your progress is saved, so you can close the panel and continue later.

## Product boundary

- The test checks one modal at a time. Pick each modal you want to cover.
- The test does not activate Accept, Submit, form buttons, or links that leave the page, so it does not cover what happens after those controls are used.
- The test checks how each modal behaves, not whether its content is clear or useful.

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Responsiveness Guided Test](/support/docs/accessibility-guided-test-responsiveness/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
