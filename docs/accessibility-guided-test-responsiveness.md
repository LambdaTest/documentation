---
id: accessibility-guided-test-responsiveness
title: Responsiveness Guided Test
hide_title: false
sidebar_label: Responsiveness
description: The Responsiveness guided test emulates 200% zoom, a 320 px width, and phone portrait and landscape, and flags content that is cut off, overlapping, or lost in each state.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Responsiveness
  - Reflow
  - Zoom
  - Orientation
url: https://www.testmuai.com/support/docs/accessibility-guided-test-responsiveness/
site_name: TestMu AI
slug: accessibility-guided-test-responsiveness/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-responsiveness/
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
          "name": "Responsiveness Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-responsiveness/`
        }]
      })
    }}
></script>

# Responsiveness Guided Test

People zoom the page, use narrow screens, and hold their phones in either orientation. Content must reflow into one column at a width of 320 CSS pixels without horizontal scrolling, stay readable and usable at 200% zoom, and be available in both portrait and landscape.

The Responsiveness test emulates each of these states in the browser. In each state it measures the page's headings, links, controls, and labels, compares them with the normal desktop layout, flags what changed, and takes a screenshot. It asks you to confirm each flagged element and each state, with the answers already filled in from the measurements.

Every answer comes from the measurements the extension took in each emulated state, so the test does not use **Verify with AI** and does not use AI credits. The same page gives the same answers on every run.

## When to use this

Use this test on any page that people open on a phone or zoom in on, and on pages with multi-column layouts, wide tables, or fixed-width content.

## Prerequisites

- The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).
- The page is in its normal desktop layout when you start the test.

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Text is cut off at 200% zoom | 1.4.4 (AA) | Moderate |
| Controls overlap at 200% zoom | 1.4.4 (AA) | Moderate |
| Content is pushed off-screen at 200% zoom | 1.4.4 (AA) | Moderate |
| Reviewer reports content or functionality lost at 200% zoom | 1.4.4 (AA) | Moderate |
| Content requires horizontal scrolling at 320px width | 1.4.10 (AA) | Moderate |
| Text is cut off at 320px width | 1.4.10 (AA) | Moderate |
| Controls overlap at 320px width | 1.4.10 (AA) | Moderate |
| Content is pushed off-screen at 320px width | 1.4.10 (AA) | Moderate |
| Reviewer reports content or functionality lost at 320px width | 1.4.10 (AA) | Moderate |
| Element is only available in one orientation | 1.3.4 (AA) | Moderate |
| A full-screen overlay blocks the page in one orientation | 1.3.4 (AA) | Serious |
| Reviewer reports content or functionality lost in one orientation | 1.3.4 (AA) | Moderate |

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version). WCAG 2.0 does not include success criteria 1.4.10 and 1.3.4.

## States the test emulates

| State | Size | Compared with |
|---|---|---|
| 200% zoom | 640 px wide | 1280 px desktop layout |
| 400% zoom reflow | 320 px wide | 1280 px desktop layout |
| Phone in portrait | 412 by 915 | Phone in landscape |
| Phone in landscape | 915 by 412 | Phone in portrait |

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Responsiveness**. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

:::warning
Do not resize the window or touch the page while the states are emulated.
:::

{/* IMAGE PLACEHOLDER: Responsiveness test start screen
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/responsiveness-start.png').default} alt="Responsiveness guided test start screen" className="doc_img" width="1360" height="768" />
*/}

### Let the test emulate each state

**Zoom and reflow.** The test checks the page at 640 px and at 320 px against the 1280 px desktop layout. It flags text that is cut off, controls that overlap, and content pushed out of reach, in each case only when the problem was not already there on the desktop layout. At 320 px it also checks whether the page needs horizontal scrolling.

**Orientation.** The test checks the page on an emulated phone in portrait and landscape. It flags an element that is available in one orientation only, and a full-screen overlay that blocks the page in one orientation, such as a "rotate your device" message. Extra measurements at matching widths make sure that an element which only reflowed at a narrower width is not flagged.

If the page cannot be emulated, for example because another DevTools window holds the tab, the test offers to try again, continue, or skip the step.

### Confirm the flagged elements

Each flagged element appears as a row with its answer filled in from the measurements. A navigation that collapses into a menu, or content that only moves, produces no row. On long pages the measurement is capped so the test stays fast, and each row says when a cap applied.

{/* IMAGE PLACEHOLDER: Flagged elements for one emulated state with its screenshot
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/responsiveness-flagged.png').default} alt="Flagged elements in the Responsiveness guided test" className="doc_img" width="1360" height="768" />
*/}

### Answer the question for each state

For each state, confirm whether all content is readable and every control usable. The answer is filled in from the element rows above it, so one problem is never reported twice.

### Finish the test

Finish the test to generate the report. Each finding opens the report's Image View on the screenshot of the state it was measured in, with the element's box drawn in that state. Your progress is saved, so you can close the panel and continue later.

## Product boundary

- The states are fixed, so there are no elements to add by hand.
- The states are emulated in the browser. The test does not run on real devices.
- On long pages the measurement is capped, so elements beyond the cap are not measured.

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Layout Guided Test](/support/docs/accessibility-guided-test-layout/)
- [Modals Guided Test](/support/docs/accessibility-guided-test-modals/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
