---
id: test-case-repository
title: Test Case Repository
hide_title: true
sidebar_label: Test Case Repository
description: Manage your test case repository with TestMu AI's Test Manager, ensuring organized, accessible, and efficient handling of all your test cases.
keywords:
  - test case repository
  - test cases
  - test case
url: https://www.testmuai.com/support/docs/test-case-repository/
site_name: TestMu AI
slug: test-case-repository/
canonical: https://www.testmuai.com/support/docs/test-case-repository/
---


import BrandName, { BRAND_URL } from '@site/src/component/BrandName';

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "TestMu AI",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Test Case Repository",
          "item": `${BRAND_URL}/support/docs/test-case-repository/`
        }]
      })
    }}
></script>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/test-case-repository/"
    },
    "headline": "Test Case Repository",
    "description": "Manage your test case repository with TestMu AI's Test Manager, ensuring organized, accessible, and efficient handling of all your test cases.",
    "url": "https://www.testmuai.com/support/docs/test-case-repository/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "test case repository",
      "test cases",
      "test case"
    ],
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "dateModified": "2026-10-14T12:00:00+05:30"
  }) }}
/>

# Test Case Repository

A test case repository serves as a centralized location for all test cases within a project. Users can access this repository to view a comprehensive list of test cases associated with the project. 

Open the **Test Cases** tab of your project to see the repository. Select a folder to see only its test cases, and use the menu on a test case to edit or delete it.

## Filter Test Cases

Search by test case ID or title, and use the filters beside the search bar to narrow the list:

- **Status** and **Tags**.
- Under **More**: **Automation Status**, **Created At**, **Created By**, **Issues**, **Priority**, **Type**, **PR Status**, and the custom fields linked to the project.

Filters apply to the folder you are viewing, together with any search text. The **Archived** view and the **Shared Incoming** view offer the same filters, and Shared Incoming adds a **Project** filter for the source project.

### Include or Exclude Values

Each filter that lists values has two modes, which you switch next to the filter's search box:

- **Equals** (default): shows test cases that have any of the selected values.
- **Not Equals**: hides test cases that have any of the selected values.

To exclude values:

1. Open a filter, for example **Tags**.
2. Select **Not Equals** next to the filter's search box.
3. Select the values to leave out.

<img loading="lazy" src={require('../assets/images/test-manager/filters/exclude-tags-test-cases.png').default} alt="Tags filter set to Not Equals on the Test Cases list" className="doc_img"/>

Switching between **Equals** and **Not Equals** keeps the values you selected. Selecting **Not Equals** without choosing any value does not change the list.

### Test Cases With No Value Are Kept

**Not Equals** hides only the test cases that hold a selected value. Test cases with no value for that field stay in the list.

For example, say a custom field **Layer** has the values API, UI, and E2E, and older test cases were never given a layer. Excluding API and UI shows the E2E test cases **and** the test cases with no layer. Selecting E2E under **Equals** would show only the E2E test cases.

Fields that every test case has, such as **Status**, are never empty. Excluding every value of such a field leaves no test cases.

### Fields With Multiple Values

**Tags** and multi select custom fields can hold several values on one test case. Under **Not Equals**, a test case is hidden if it has **any** of the excluded values. Excluding the tag `iOS` hides a test case tagged `iOS` and `Android`, and keeps a test case tagged only `Android` as well as test cases with no tags.

### Combining Filters

- Within one filter, **Equals** matches test cases that have any of the selected values, and **Not Equals** hides test cases that have any of them.
- Across filters, a test case has to match every filter. Each filter can be in its own mode, for example **Priority** Equals High together with **Tags** Not Equals `flaky`.
- The folder you are viewing and the search text narrow the result further.

### Fields That Support Not Equals

| Supports Not Equals | Does not support Not Equals |
|---|---|
| Status, Tags, Automation Status, Created By, Issues, Priority, Type, PR Status, Project (in Shared Incoming) | Created At, which filters by date range |
| Custom fields of type **Dropdown (Single Select)**, **Dropdown (Multi Select)**, and **User** | Custom fields of type **String**, **Textarea**, **Number**, **URL**, **Date**, and **Boolean (Checkbox)** |

### Share a Filtered View

Your filters, including the **Not Equals** mode, are saved in the page URL. Reload the page, bookmark it, or share the link, and the same filtered list opens. Select **Clear current filters and sorting** to reset the list.

### Act on Filtered Test Cases

When you select all test cases in a filtered list, bulk actions such as updating fields, moving, exporting, archiving, and deleting apply to exactly the test cases the filters show. Test cases hidden by a **Not Equals** filter are left untouched.



<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" href={BRAND_URL}>
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={`${BRAND_URL}/support/docs/`}>
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Test Case Repository
      </span>
    </li>
  </ul>
</nav>
