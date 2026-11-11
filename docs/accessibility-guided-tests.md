---
id: accessibility-guided-tests
title: Guided Tests
hide_title: false
sidebar_label: Guided Tests
description: Guided tests in Accessibility DevTools run the automatic checks first and then ask you a few questions about the results. AI can answer many of them for you. Keyboard, Interactive Elements, Images, Hover and Tooltips, Layout, Forms, Tables, Modals, and Responsiveness tests are available.
keywords:
  - TestMu AI
  - Accessibility
  - Testing
  - DevTools
  - Guided Tests
  - Assisted Tests
  - IGT
url: https://www.testmuai.com/support/docs/accessibility-guided-tests/
site_name: TestMu AI
slug: accessibility-guided-tests/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-tests/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';


# Guided Tests

Automatic scans find many accessibility issues, but not all of them. Some checks need a person to decide. For example, only a person can say if alt text describes an image correctly, if a heading describes the content that follows it, or if a dialog is really closed.

Guided tests close this gap. Each guided test does the automatic checks first. Then it asks you a small number of clear questions about the results. In most tests, AI can answer many of these questions for you. In the Modals and Responsiveness tests, the extension drives the page itself and fills in the answers from what it observed. You examine the answers and finish the test, and you get a report in the same format as a normal scan.

## When to use this

Use a guided test when you need to check a part of WCAG that a scan cannot decide alone, such as tab order, focus visibility, control names, alt text quality, tooltip behaviour, heading structure, form labels, table headers, modal focus handling, or reflow. Run a [Full Page Scan](/support/docs/accessibility-testing-full-page-scanner/) first for the automatic rules, then use guided tests for the rest.

## Available tests

| Test | What it covers | WCAG success criteria |
|---|---|---|
| [Keyboard](/support/docs/accessibility-guided-test-keyboard/) | Tab order, keyboard traps, elements the keyboard cannot reach, focus visibility | 2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.4.11, 2.4.12, 3.2.1 |
| [Interactive Elements](/support/docs/accessibility-guided-test-interactive-elements/) | Name, role, and state of buttons, links, form fields, and custom controls | 4.1.2 |
| [Images](/support/docs/accessibility-guided-test-images/) | Text alternatives, decorative images, images of text, complex images | 1.1.1, 1.4.5, 4.1.2 |
| [Hover and Tooltips](/support/docs/accessibility-guided-test-hover-tooltips/) | Tooltips, popovers, and hover cards: whether they stay visible, close with Escape, and stay open when the pointer moves onto them | 1.4.13 |
| [Layout](/support/docs/accessibility-guided-test-layout/) | Headings, lists, landmarks, language, page title, application regions, and media | 1.2.2, 1.2.5, 1.3.1, 2.4.2, 2.4.6, 3.1.1, 3.1.2, 4.1.2 |
| [Forms](/support/docs/accessibility-guided-test-forms/) | Field labels, field groups, required fields, autocomplete, and error handling | 1.3.1, 1.3.5, 2.4.6, 2.5.3, 3.3.1, 3.3.2, 3.3.3, 3.3.4, 4.1.2 |
| [Tables](/support/docs/accessibility-guided-test-tables/) | Data and layout tables, header cells, and cell associations | 1.3.1, 2.4.6 |
| [Modals](/support/docs/accessibility-guided-test-modals/) | Dialog role and name, focus moving in, staying in, and returning, and closing with the keyboard | 1.3.2, 2.1.2, 2.4.3, 2.4.11, 2.4.12, 4.1.2 |
| [Responsiveness](/support/docs/accessibility-guided-test-responsiveness/) | 200% zoom, reflow at 320 px, and portrait and landscape orientation | 1.3.4, 1.4.4, 1.4.10 |

:::note
More guided tests will be added soon. This page will list them as they become available.
:::

## Prerequisites

- The <BrandName /> Accessibility Toolkit is installed in Chrome. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).
- Your WCAG version and level are set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version). The report checks against these values.

## Start a guided test

1. Open the page you want to test in Chrome.
2. Open the **Inspect** panel and switch to the **Accessibility DevTools** tab.
3. Open **Assisted Tests** and select the test you want to run.
4. To get AI answers in the Keyboard, Interactive Elements, Images, Layout, Forms, or Tables test, turn on **Verify with AI** before you start.

{/* IMAGE PLACEHOLDER: Assisted Tests list in Accessibility DevTools with all guided tests
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/assisted-tests-list.png').default} alt="Assisted Tests list in Accessibility DevTools" className="doc_img" width="1360" height="768" />
*/}

## Features common to all tests

- **Verify with AI.** In the Keyboard, Interactive Elements, Images, Layout, Forms, and Tables tests, AI gives the first answer to each question when this switch is on. You can change any answer before you finish. Verify with AI will require AI credits. See [Credits Management](/support/docs/credits-management/). The Hover and Tooltips, Modals, and Responsiveness tests get their answers from automated checks in the browser and do not use AI.
- **Locate elements.** Highlight one element or all elements on the page, or open an element in the DevTools **Elements** panel.
- **Add missed elements.** If the test did not find an element, click it on the page to add it to the test. In the Modals test, this is how you pick the modal or the control that opens it. The Responsiveness test has no elements to add, because its states are fixed.
- **Continue later.** The extension saves your progress, so you can close the panel and continue later. The Keyboard test does not save progress, because it walks the live page.
- **Report.** Results go into the usual accessibility report, and each issue has a **How to fix** section. The report follows your WCAG version and level from [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Product boundary

Guided tests run in the Accessibility DevTools extension only. They are not available in automation runs, scheduled scans, or the App Scanner. A guided test covers the criteria listed for it and is not a full manual audit of the page.

## Related docs

- [Accessibility DevTools](/support/docs/accessibility-devtools/)
- [Full Page Scan](/support/docs/accessibility-testing-full-page-scanner/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
