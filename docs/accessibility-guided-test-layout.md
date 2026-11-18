---
id: accessibility-guided-test-layout
title: Layout Guided Test
hide_title: false
sidebar_label: Layout
description: The Layout guided test checks the structure and metadata of a page, including headings, lists, landmarks, language, page title, application regions, and media players.
keywords:
  - TestMu AI
  - Accessibility
  - DevTools
  - Guided Tests
  - Layout
  - Headings
  - Landmarks
  - Page Title
url: https://www.testmuai.com/support/docs/accessibility-guided-test-layout/
site_name: TestMu AI
slug: accessibility-guided-test-layout/
canonical: https://www.testmuai.com/support/docs/accessibility-guided-test-layout/
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
          "name": "Layout Guided Test",
          "item": `${BRAND_URL}/support/docs/accessibility-guided-test-layout/`
        }]
      })
    }}
></script>

# Layout Guided Test

Screen reader users do not see the page. They move through it by its structure: headings, landmarks, and lists. They also rely on the page having a correct language and a clear title. When the structure is wrong, these users cannot find their way around.

The Layout test checks the structure and the metadata of the page. It does the automatic checks first, and then asks you to confirm the parts that a computer cannot decide.

## When to use this

Use this test on content pages, landing pages, documentation, multilingual pages, and any page with video or audio players.

## Prerequisites

The <BrandName /> Accessibility Toolkit is installed. See [Install Toolkit](/support/docs/accessibility-testing-install-devtools/).

## What the test checks

| Rule | WCAG | Severity |
|---|---|---|
| Page is missing an H1 heading | 1.3.1 (A) | Serious |
| Page has multiple H1 headings | 1.3.1 (A) | Moderate |
| Heading levels should not skip | 1.3.1 (A) | Serious |
| Heading has no accessible name | 2.4.6 (AA) | Serious |
| Heading is visually hidden | 1.3.1 (A) | Minor |
| Heading role has an invalid aria-level | 4.1.2 (A) | Serious |
| Element is marked up as a heading but should not be | 1.3.1 (A) | Serious |
| Element is missing heading markup | 1.3.1 (A) | Serious |
| Heading text is not descriptive of its content | 2.4.6 (AA) | Serious |
| Page has no main landmark | 1.3.1 (A) | Moderate |
| Landmark role or label does not match its content | 1.3.1 (A) | Serious |
| List content is not marked up as list items | 1.3.1 (A) | Serious |
| List is empty | 1.3.1 (A) | Moderate |
| Element is marked up as a list but is not one | 1.3.1 (A) | Serious |
| Content visually behaves like a list but is not marked up | 1.3.1 (A) | Serious |
| Page is missing a lang attribute on html | 3.1.1 (A) | Serious |
| Page lang attribute is not a valid BCP-47 tag | 3.1.1 (A) | Serious |
| Lang attribute value is not a valid BCP-47 tag | 3.1.2 (AA) | Serious |
| Section has a missing or incorrect lang attribute | 3.1.2 (AA) | Serious |
| Page has no title | 2.4.2 (A) | Serious |
| Page title does not describe the page | 2.4.2 (A) | Serious |
| Application role is used inappropriately | 4.1.2 (A) | Serious |
| Application role usage needs review | 4.1.2 (A) | Moderate |
| Video has no captions track | 1.2.2 (A) | Serious |
| Video has no audio descriptions | 1.2.5 (AA) | Moderate |
| Media element has no adequate text alternative | 1.2.2 (A) | Serious |

The report includes only the rules that fall within the WCAG version and level you set in [DevTools Settings](/support/docs/accessibility-devtools-settings/#wcag-version).

## Run the test

### Start the test

Open **Assisted Tests** in Accessibility DevTools and select **Layout**. Turn on **Verify with AI** if you want AI to give the first answers. See [Start a guided test](/support/docs/accessibility-guided-tests/#start-a-guided-test).

{/* IMAGE PLACEHOLDER: Layout test start screen with Verify with AI switch
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/layout-start.png').default} alt="Layout guided test start screen" className="doc_img" width="1360" height="768" />
*/}

### Review headings

The test checks that the page has one H1, that heading levels do not skip, and that no heading is empty or hidden. Confirm whether each heading describes the content that follows it, and mark any text that should be a heading but is not.

{/* IMAGE PLACEHOLDER: List of detected headings with their levels
<img loading="lazy" src={require('/assets/images/accessibility-testing/guided-tests/layout-headings.png').default} alt="Detected headings in the Layout guided test" className="doc_img" width="1360" height="768" />
*/}

### Review lists

The test checks that list markup is used for real lists. Confirm whether each list is a genuine list of related items, and mark any content that looks like a list but has no list markup.

### Review landmarks

The test checks that the page has a main landmark. Confirm whether the role and label of each landmark match the content it holds.

### Review languages

The test checks that the page declares a valid language, and that each passage in another language declares its own. Confirm the passages that a computer cannot judge.

### Review the page title

The test checks that the page has a title. Confirm whether the title describes the page.

### Review application regions

The test checks elements that use `role="application"`. Confirm whether the role is used correctly, because it changes how a screen reader reads the region.

### Review media

The test checks that each video has a captions track and audio descriptions. Confirm the text alternative for each media element.

### Finish the test

Finish the test to generate the report. Your progress is saved, so you can close the panel and continue later.

## How AI helps

With **Verify with AI** on, AI gives the first answer to these questions:

- Does each heading describe the content that follows it?
- Is each list a genuine list of related items?
- Does each landmark's role and label match its content?
- Does each passage match the language declared for it?
- Does the page title describe the page?
- Is the application role used correctly?

You can change any answer before you finish.

:::note AI credits
**Verify with AI** will require AI credits. See [Credits Management](/support/docs/credits-management/).
:::

## Related docs

- [Guided Tests](/support/docs/accessibility-guided-tests/)
- [Images Guided Test](/support/docs/accessibility-guided-test-images/)
- [Tables Guided Test](/support/docs/accessibility-guided-test-tables/)
- [DevTools Settings](/support/docs/accessibility-devtools-settings/)
