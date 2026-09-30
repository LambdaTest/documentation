---
id: accessibility-guided-tests
title: Guided Tests
hide_title: false
sidebar_label: Guided Tests
description: Guided tests in Accessibility DevTools run the automatic checks first and then ask you a few questions about the results. AI can answer many of them for you. Keyboard, Interactive Elements, Images, and Hover and Tooltips tests are available.
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
          "name": "Guided Tests",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-tests/`
        }]
      })
    }}
></script>

# Guided Tests

Automatic scans find many accessibility issues, but not all of them. Some checks need a person to decide. For example, only a person can say if alt text describes an image correctly.

Guided tests close this gap. Each guided test does the automatic checks first. Then it asks you a small number of clear questions about the results. AI can answer many of these questions for you. You examine the answers and finish the test, and you get a report in the same format as a normal scan.

## When to use this

Use a guided test when you need to check a part of WCAG that a scan cannot decide alone, such as tab order, focus visibility, control names, alt text quality, or tooltip behaviour. Run a [Full Page Scan](/support/docs/accessibility-testing-full-page-scanner/) first for the automatic rules, then use guided tests for the rest.

## Available tests

| Test | What it covers | WCAG success criteria |
|---|---|---|
| [Keyboard](/support/docs/accessibility-guided-test-keyboard/) | Tab order, keyboard traps, elements the keyboard cannot reach, focus visibility | 2.1.1, 2.1.2, 2.4.3, 2.4.7, 2.4.11, 2.4.12, 3.2.1 |
| [Interactive Elements](/support/docs/accessibility-guided-test-interactive-elements/) | Name, role, and state of buttons, links, form fields, and custom controls | 4.1.2 |
| [Images](/support/docs/accessibility-guided-test-images/) | Text alternatives, decorative images, images of text, complex images | 1.1.1, 1.4.5, 4.1.2 |
| [Hover and Tooltips](/support/docs/accessibility-guided-test-hover-tooltips/) | Tooltips, popovers, and hover cards: whether they stay visible, close with Escape, and stay open when the pointer moves onto them | 1.4.13 |

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
4. To get AI answers, turn on **Verify with AI** before you start.

{/* IMAGE PLACEHOLDER: Assisted Tests list in Accessibility DevTools with Keyboard, Interactive Elements, Images, and Hover and Tooltips
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/assisted-tests-list.png').default} alt="Assisted Tests list in Accessibility DevTools" className="doc_img" width="1360" height="768" />
*/}

## Features common to all tests

- **Verify with AI.** When this switch is on, AI gives the first answer to each question. You can change any answer before you finish. Verify with AI will require AI credits. See [Credits Management](/support/docs/credits-management/).
- **Locate elements.** Highlight one element or all elements on the page, or open an element in the DevTools **Elements** panel.
- **Add missed elements.** If the test did not find an element, click it on the page to add it to the test.
- **Report.** Results go into the usual accessibility report, and each issue has a **How to fix** section.

## Product boundary

Guided tests run in the Accessibility DevTools extension only. They are not available in automation runs, scheduled scans, or the App Scanner. A guided test covers the criteria listed for it and is not a full manual audit of the page.

## Related docs

- [Accessibility DevTools](/support/docs/accessibility-devtools/)
- [Full Page Scan](/support/docs/accessibility-testing-full-page-scanner/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
- [Navigating the Dashboard](/support/docs/accessibility-testing-navigating-dashboard/)
