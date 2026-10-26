---
id: hyperexecute-jobs-label-filter
title: "Filter HyperExecute Jobs by Label (AND / OR)"
hide_title: false
sidebar_label: Label Filter
description: "Filter HyperExecute Jobs by label with AND (plain click) or OR (Shift + click) mode. Covers the Labels dialog, View Query, URL formats and how Label combines with other filters."
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - HyperExecute Jobs
  - HyperExecute label filter
  - HyperExecute jobs label filter
  - HyperExecute AND filter
  - HyperExecute OR filter
  - HyperExecute Shift click filter
  - HyperExecute View Query
  - HyperExecute job_label
  - HyperExecute label_groups
url: https://www.testmuai.com/support/docs/hyperexecute-jobs-label-filter/
site_name: TestMu AI
slug: hyperexecute-jobs-label-filter/
canonical: https://www.testmuai.com/support/docs/hyperexecute-jobs-label-filter/
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
          "name": "Filter HyperExecute Jobs by Label",
          "item": `${BRAND_URL}/support/docs/hyperexecute-jobs-label-filter/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-jobs-label-filter/"
    },
    "headline": "Filter HyperExecute Jobs by Label (AND / OR)",
    "description": "Filter HyperExecute Jobs by label with AND (plain click) or OR (Shift + click) mode. Covers the Labels dialog, View Query, URL formats and how Label combines with other filters.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-jobs-label-filter/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI HyperExecute",
      "HyperExecute label filter",
      "HyperExecute AND OR filter"
    ],
    "proficiencyLevel": "Beginner",
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
    }
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BRAND_URL}/support/docs/hyperexecute-jobs-label-filter/#faq`,
    "mainEntity": [{
      "@type": "Question",
      "name": "How do I filter HyperExecute Jobs so they must have all of the selected labels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click Label in the filter bar, then click each label you want with a plain click. A plain click adds the label with AND, so the Jobs list shows only jobs that have every selected label. Click Apply Filter to see the results."
      }
    },{
      "@type": "Question",
      "name": "How do I filter HyperExecute Jobs so they can have any of the selected labels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Click Label in the filter bar and click the first label. From the second label onward, hold Shift and click (or press Shift + Space on) each additional label. The View Query button appears and shows the expression, for example 'selenium-testng OR linux'. Click Apply Filter to see jobs that have any of the selected labels."
      }
    },{
      "@type": "Question",
      "name": "What is the difference between the job_label and label_groups URL parameters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "job_label is used for AND filters and lists one base64-encoded label per value, for example ?filterBy=job_label&job_label=<base64>,<base64>. label_groups is used for OR and grouped filters and holds a base64-encoded JSON array of groups, for example [[\"selenium-testng\"],[\"linux\"]] for a two-label OR filter. A filter with a single label always uses job_label, so the URL is the same in both modes."
      }
    },{
      "@type": "Question",
      "name": "How can I tell which mode a Label filter is in after I apply it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The chip on the filter bar shows the count, for example 'Label 2', in both AND and OR modes. To check the mode, reopen the Labels dialog: the View Query button appears for OR filters, and the URL contains label_groups=... instead of job_label=...."
      }
    },{
      "@type": "Question",
      "name": "Can I combine a Label AND filter with other filters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Each filter in the Jobs filter bar is independent. You can set Label to AND and Status to its usual OR between selected values at the same time, and the two filters are combined with AND across filters."
      }
    }]
  }) }}
></script>

The Jobs page in HyperExecute lets you narrow the list of jobs by **Label**. The Label filter supports two modes:

- **AND (default):** show jobs that have every selected label.
- **OR:** show jobs that have at least one of the selected labels.

Both modes work from the same **Labels** dialog. The mode is picked by how you click the labels: a plain click adds a label with AND, and a Shift + click adds it with OR.

| At a glance | |
| :---- | :---- |
| **Where** | HyperExecute → Jobs → **Label** filter |
| **AND (default)** | Plain click on each label |
| **OR** | Shift + click (or Shift + Space) from the second label onward |
| **How to check the mode** | Reopen the Labels dialog: **View Query** appears for OR filters |
| **Shared in the URL** | AND uses `job_label=...`, OR uses `label_groups=...` |

## Filter with AND (default)

Use AND when you want jobs that have **all** of the selected labels.

1. On the Jobs page, click **Label** in the filter bar.
2. Click each label you want. A plain click adds the label with AND.
3. Click **Apply Filter**.

The list shows only jobs that have every selected label.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/jobs-label-filter/labels-filter-and.png').default} alt="HyperExecute Jobs Labels dialog with two labels selected using a plain click, showing an AND filter" className="doc_img"/>

After you apply the filter, the chip shows the number of selected labels:

<img loading="lazy" src={require('../assets/images/hyperexecute/features/jobs-label-filter/labels-filter-and-chip.png').default} alt="HyperExecute Jobs filter bar showing Label 2 for an AND filter" className="doc_img"/>

## Filter with OR

Use OR when you want jobs that have **any** of the selected labels.

1. Click **Label** in the filter bar.
2. Click the first label.
3. Hold **Shift** and click (or press **Shift + Space** on) each additional label.
4. (Optional) Click **View Query** to see the expression that will be applied.
5. Click **Apply Filter**.

The list shows jobs that have at least one of the selected labels.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/jobs-label-filter/labels-filter-or.png').default} alt="HyperExecute Jobs Labels dialog with two labels selected using Shift + click, showing an OR filter and the View Query button" className="doc_img"/>

**View Query** shows the expression, for example `selenium-testng OR linux`:

<img loading="lazy" src={require('../assets/images/hyperexecute/features/jobs-label-filter/labels-filter-or-view-query.png').default} alt="HyperExecute Jobs Labels dialog with View Query expanded, showing selenium-testng OR linux" className="doc_img"/>

After you apply the filter, the chip looks the same as it does for an AND filter:

<img loading="lazy" src={require('../assets/images/hyperexecute/features/jobs-label-filter/labels-filter-or-chip.png').default} alt="HyperExecute Jobs filter bar showing Label 2 for an OR filter" className="doc_img"/>

## AND vs OR at a glance

| | AND | OR |
| :---- | :---- | :---- |
| How to select | Plain click | Shift + click, or Shift + Space, from the second label onward |
| **View Query** button | Not shown | Shown, with the expression |
| Chip after **Apply Filter** | `Label 2` | `Label 2` |
| Request field | `job_label` | `label_groups` |
| URL | `?filterBy=job_label&job_label=<base64>,<base64>` | `?label_groups=<base64 JSON>` |
| Example | Jobs with `selenium-testng` **and** `linux` | Jobs with `selenium-testng` **or** `linux` |

## Shared links

The URL keeps the filter mode. If you copy the page URL and share it, the other person sees the same filter in the same mode.

- **AND link:** `filterBy=job_label&job_label=...`
- **OR link:** `label_groups=<base64 JSON>`. There is no `filterBy` parameter on OR links. The value decodes to a list of groups, for example `[["selenium-testng"],["linux"]]` for a two-label OR filter.

:::note Single-label filters
A filter with a single label always uses `job_label` in the URL, so the AND and OR forms are the same when only one label is selected.
:::

## Combining Label with other filters

The Label filter works independently of the other filters on the Jobs page.

- **Label** can be AND or OR, as described above.
- **Status**, **Team**, **Users** and **Type** always combine selected values with OR, because each job has only one value for those filters.
- Different filters are combined with **AND** across the filter bar.

For example, you can set **Label** to AND (`selenium-testng` + `linux`) and **Status** to its usual OR (`Completed` + `Failed`), and the Jobs list will show jobs that match both the Label condition and the Status condition.

## Notes

- The hint `Shift + click/space for logical OR` at the bottom of the Labels dialog is the main cue for switching to OR.
- Each selection in the dialog is one mode. A selection made with only plain clicks is AND. Any Shift + click flips the whole selection to OR.
- Shift + click on the first label has nothing to combine, so it behaves the same as a plain click. Use Shift from the second label onward to switch the mode to OR.
- Mixing plain and Shift + clicks (for example A plain, B plain, C Shift + click) does not build groups. Any Shift + click flips the whole selection to OR, so the example above is `A OR B OR C`, not `(A AND B) OR C`.
- The chip on the filter bar shows the label count only, for example `Label 2`, for both AND and OR filters. Reopen the Labels dialog to confirm the mode (the **View Query** button appears for OR).
- **View Query** appears only in OR mode.
- Grouped conditions such as `(a AND b) OR c` are not built in the dialog. The Jobs API accepts them in the `label_groups` URL parameter and preserves them when a link is opened, so you can only reach them by opening a shared URL that already carries them.
- On screens narrower than about 1100px, the filter chips collapse into a single **Filters** menu. The Label chip, and the counts it shows, work the same way inside that menu.

## Frequently asked questions {#faq}

### How do I filter HyperExecute Jobs so they must have all of the selected labels?

Click **Label** in the filter bar, then click each label you want with a **plain click**. A plain click adds the label with AND, so the Jobs list shows only jobs that have **every** selected label. Click **Apply Filter** to see the results.

### How do I filter HyperExecute Jobs so they can have any of the selected labels?

Click **Label** in the filter bar and click the first label. From the second label onward, hold **Shift** and click (or press **Shift + Space** on) each additional label. The **View Query** button appears and shows the expression, for example `selenium-testng OR linux`. Click **Apply Filter** to see jobs that have **any** of the selected labels.

### What is the difference between the `job_label` and `label_groups` URL parameters?

`job_label` is used for AND filters and lists one base64-encoded label per value, for example `?filterBy=job_label&job_label=<base64>,<base64>`. `label_groups` is used for OR and grouped filters and holds a base64-encoded JSON array of groups, for example `[["selenium-testng"],["linux"]]` for a two-label OR filter. A filter with a single label always uses `job_label`, so the URL is the same in both modes.

### How can I tell which mode a Label filter is in after I apply it?

The chip on the filter bar shows the count, for example `Label 2`, in both AND and OR modes. To check the mode, reopen the Labels dialog: the **View Query** button appears for OR filters, and the URL contains `label_groups=...` instead of `job_label=...`.

### Can I combine a Label AND filter with other filters?

Yes. Each filter in the Jobs filter bar is independent. You can set **Label** to AND and **Status** to its usual OR between selected values at the same time, and the two filters are combined with AND across filters.

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href={BRAND_URL}>
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
        Filter Jobs by Label (AND / OR)
      </span>
    </li>
  </ul>
</nav>
