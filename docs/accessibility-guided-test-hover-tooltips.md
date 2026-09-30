---
id: accessibility-guided-test-hover-tooltips
title: Hover and Tooltips Guided Test
hide_title: false
sidebar_label: Hover and Tooltips
description: The Hover and Tooltips guided test finds tooltips, popovers, and hover cards on the page and checks that each one stays visible, closes with Escape, and stays open when the pointer moves onto it, for WCAG 1.4.13.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Tooltips
  - Hover
  - Content on Hover or Focus
url: https://www.testmuai.com/support/docs/accessibility-guided-test-hover-tooltips/
site_name: TestMu AI
slug: accessibility-guided-test-hover-tooltips/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-hover-tooltips/
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
          "name": "Hover and Tooltips Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-hover-tooltips/`
        }]
      })
    }}
></script>

# Hover and Tooltips Guided Test

Tooltips, popovers, and hover cards show extra content when you hover over or focus an element. Users who zoom in, use a screen magnifier, or have limited pointer control need this content to behave in a predictable way. If a tooltip disappears too early, cannot be closed, or closes when the pointer moves onto it, these users cannot read it.

The Hover and Tooltips test finds the elements on the page that open this kind of content. It then hovers over and focuses each one, and checks that the content:

- **Stays visible** while the element is hovered or focused.
- **Can be closed** with the Escape key, without moving the pointer or focus.
- **Stays open** when the pointer moves onto the content.

Automatic scans do not check these behaviours, because the tooltip must be opened and used to test them.

The test hovers, presses keys, and checks each tooltip itself, so it does not use **Verify with AI** and does not use AI credits.

## When to use this

Use this test on pages with tooltips on icons and form fields, help popovers, hover cards on user names or links, and icon-only buttons that show a label on hover.

## Prerequisites

- The <BrandName /> Accessibility Toolkit is installed in Chrome. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).
- Your WCAG version is set to WCAG 2.1 or WCAG 2.2 in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version). WCAG 2.0 does not include success criterion 1.4.13.

## What the test checks

All rules map to WCAG 1.4.13 Content on Hover or Focus (AA).

| Rule | Severity |
|---|---|
| Tooltip disappears while trigger is still hovered | Serious |
| Tooltip cannot be dismissed with Escape | Serious |
| Tooltip disappears when pointer moves onto it | Serious |

## Supported tooltip libraries

The test detects tooltips built with the HTML Popover API and correct ARIA markup, such as `aria-describedby` that points to an element with `role="tooltip"`. It also detects the common tooltip libraries, including:

- Tippy.js, Bootstrap 3, 4, and 5, react-tooltip, and Flowbite
- Radix UI, Reach UI, Melt UI, Bits UI, Reka UI, Zag, and Ark UI
- MUI, Ant Design, Chakra UI, Mantine, and Primer React
- Angular Material, ng-bootstrap, and AngularUI Bootstrap
- UIkit, Semantic UI, jQuery UI, and Material Design Components
- CSS-only tooltips such as Hint.css, Microtip, Balloon.css, and Tailwind tooltips

Elements whose attribute names contain "tooltip" or "popover" are also detected. If the test misses a tooltip, click its trigger on the page to add it.

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Hover and Tooltips**. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

Before you start, open any menu, tab, or panel that contains tooltips you want to test, so that their triggers are on the page.

{/* IMAGE PLACEHOLDER: Hover and Tooltips test start screen
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/hover-tooltips-start.png').default} alt="Hover and Tooltips guided test start screen" className="doc_img" width="1360" height="768" />
*/}

### Select the tooltips to test

The test lists every element that opens a tooltip, numbered in page order. Select the ones you want to test. To add a trigger the test did not find, click it on the page. To remove an element you added, delete it from the list.

To start again with a fresh list, select **Rescan**. A rescan clears the elements you added.

{/* IMAGE PLACEHOLDER: List of detected tooltip triggers
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/hover-tooltips-list.png').default} alt="Detected tooltip triggers in the Hover and Tooltips guided test" className="doc_img" width="1360" height="768" />
*/}

### Let the test check each tooltip

The test checks each selected tooltip on its own. For each one, it:

1. Scrolls the trigger into view, hovers over it, and focuses it.
2. Waits for the tooltip to open and checks that it stays visible for one second.
3. Presses Escape and checks that the tooltip closes.
4. Opens the tooltip again, moves the pointer onto it, and checks that it stays open.

Each tooltip takes a few seconds, so a page with many tooltips can take several minutes. You can switch to another tab while the test runs. To stop early, select **Stop**. The test keeps the results for the tooltips it has already checked.

:::note
While the test runs, Chrome shows a banner that says the extension is debugging the tab. The test uses this to hover and press keys like a real user. The banner closes when the test finishes or when you select **Stop**.
:::

### Answer the questions

The test then asks one question for each check. Each question lists only the tooltips that failed that check, so the numbers in the list can have gaps.

- Does each tooltip stay visible while its trigger is hovered?
- Does each tooltip close when Escape is pressed?
- Can the pointer move onto each tooltip without it closing?

The answer is **No** by default, which keeps the failure in the report. Try the tooltip yourself. If it works, answer **Yes** and the check is marked as passed.

### Finish the test

Finish the test to generate the report. Each failed check becomes an issue with a **How to fix** section.

If the test could not open a tooltip, for example because its trigger was removed from the page or has no size, all three checks for that tooltip are reported as issues that need review. Check these tooltips by hand.

## Product boundary

- The test runs in Chrome only.
- The test does not check native browser tooltips created with the `title` attribute, because the browser draws them outside the page. If you add one by hand, it fails all three checks.
- The test does not check tooltips inside iframes or shadow DOM.
- The test does not check popovers or menus that open on click.
- In long lists that load rows as you scroll, only the rows on the page are tested. Scroll to the rows you want and rescan.
- The test presses Escape on every trigger, which can close an open menu or panel. Test tooltips inside a menu in a separate run.
- The test checks how each tooltip behaves, not whether its text is clear or useful.

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Keyboard Guided Test](/support/docs/accessibility-guided-test-keyboard/)
- [Interactive Elements Guided Test](/support/docs/accessibility-guided-test-interactive-elements/)
- [Images Guided Test](/support/docs/accessibility-guided-test-images/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
