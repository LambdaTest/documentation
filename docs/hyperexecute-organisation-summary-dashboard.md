---
id: hyperexecute-organisation-summary-dashboard
title: "Organisation Summary Dashboard in HyperExecute"
hide_title: false
sidebar_label: Organisation Summary
description: Organisation Summary Dashboard in HyperExecute: KPI tiles, job status donut, failure reasons and PDF export. Enterprise plan, organisation admins only.
keywords:
  - TestMu AI HyperExecute
  - TestMu AI HyperExecute help
  - TestMu AI HyperExecute documentation
  - HyperExecute Organisation Summary
  - HyperExecute organization summary dashboard
  - HyperExecute org dashboard
  - HyperExecute admin dashboard
  - HyperExecute enterprise feature
  - HyperExecute KPI tiles
  - HyperExecute job status
  - HyperExecute failure reasons
  - HyperExecute PDF report
  - HyperExecute View Summary
url: https://www.testmuai.com/support/docs/hyperexecute-organisation-summary-dashboard/
site_name: TestMu AI
slug: hyperexecute-organisation-summary-dashboard/
canonical: https://www.testmuai.com/support/docs/hyperexecute-organisation-summary-dashboard/
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
          "name": "Organisation Summary Dashboard",
          "item": `${BRAND_URL}/support/docs/hyperexecute-organisation-summary-dashboard/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-organisation-summary-dashboard/"
    },
    "headline": "Organisation Summary Dashboard in HyperExecute",
    "description": "Organisation Summary Dashboard in HyperExecute: KPI tiles, job status donut, failure reasons and PDF export. Enterprise plan, organisation admins only.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-organisation-summary-dashboard/",
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
      "HyperExecute Organisation Summary",
      "HyperExecute dashboard"
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
    "@id": `${BRAND_URL}/support/docs/hyperexecute-organisation-summary-dashboard/#faq`,
    "mainEntity": [{
      "@type": "Question",
      "name": "Who can access the Organisation Summary Dashboard in HyperExecute?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Organisation Summary Dashboard is available to organisation admins on the enterprise plan. Users on other plans or non-admin roles cannot open it."
      }
    },{
      "@type": "Question",
      "name": "Where do I open the Organisation Summary Dashboard?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Go to HyperExecute → Projects and click the View Summary button at the top of the project list. The dashboard opens in a Summary dialog on the same page."
      }
    },{
      "@type": "Question",
      "name": "What time windows can I filter the Organisation Summary Dashboard by?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can filter by Today, Yesterday, Last 7 Days (the default), Last 14 Days, Last 30 Days, All Time, or a custom start and end date. The window applies to the Job Activity and Job Outcomes sections only; Organization totals are point-in-time values."
      }
    },{
      "@type": "Question",
      "name": "Can I export the Organisation Summary Dashboard as a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Click the Download PDF button in the top-right corner of the Summary dialog to download the dashboard as a PDF report you can share with stakeholders."
      }
    },{
      "@type": "Question",
      "name": "What job statuses does the Organisation Summary Dashboard show?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Job Status donut groups terminal jobs into six statuses: Completed, Failed, Aborted, Timed Out, Skipped, and Platform Error. Each slice shows the job count and its share of the total."
      }
    },{
      "@type": "Question",
      "name": "What failure categories does the Organisation Summary Dashboard track?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Failed jobs are broken down into Test-level (failures inside the user's own tests), Config (YAML or task mis-configuration), Infra (platform infrastructure the job depends on), Access & Licensing (permissions, licenses, seat limits), and Unclassified."
      }
    }]
  }) }}
></script>

The **Organisation Summary Dashboard** gives you a single view of how your whole organisation uses HyperExecute. It covers how many App-IDs and projects exist, how many jobs and tests ran in a chosen time window, how those jobs ended, and why the failed ones failed. Instead of opening jobs one by one, you get a health check across every team and project, which you can export as a PDF.

| At a glance | |
| :---- | :---- |
| **Who it's for** | Organisation admins |
| **Plan** | Enterprise only |
| **Where to open it** | HyperExecute → [Projects](/support/docs/hyperexecute-projects/) → **View Summary** |
| **What you get** | KPI tiles, a job status donut, a failure-reason breakdown, a PDF export |
| **Filterable by** | App-ID, project, time window (7 / 14 / 30 days, custom, or all time) |

:::note Enterprise plan only
The Organisation Summary Dashboard is an **enterprise-only** feature. Contact your account team or <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span> to enable this for your organization.
:::

:::note Organisation admin only
Within an enterprise org, only **organisation admins** can open the dashboard. The **View Summary** button sits at the top of the HyperExecute [Projects](/support/docs/hyperexecute-projects/) list.
<!-- TODO: confirm with product: whether View Summary is hidden or disabled for non-admins, and what a non-admin sees if they open the dashboard URL directly. -->
:::

To open it, go to **HyperExecute → [Projects](/support/docs/hyperexecute-projects/)** and click **View Summary** at the top of the project list. The dashboard opens in a **Summary** dialog.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-overview.png').default} alt="HyperExecute Summary dialog showing organisation totals, job activity tiles, the job status donut and the failure reasons chart for the last 7 days" className="doc_img"/>

## What the dashboard shows

The dashboard splits into three sections, with filters that apply only to the ones that are time-sensitive.

### Organization totals (point-in-time)

Not affected by the time window.

| Tile | What it counts |
| :---- | :---- |
| **Total App-IDs (Git Orgs)** | Git organisations connected to your HyperExecute organisation |
| **Total Projects** | HyperExecute projects in your organisation |

### Job Activity (filtered by App-ID, project, and time window)

Change any filter above the tiles and these values recompute.

| Tile | What it measures |
| :---- | :---- |
| **Total Jobs** | HyperExecute jobs that reached a terminal (finished) state in the selected window. Matches the "N terminal jobs" count on the Job Status card. |
| **Total Tests** | Tests run across those jobs |
| **Average Execution Time** | Average time a job took to run in the selected window |

<!-- TODO: confirm with product: how Average Execution Time is measured (submission-to-finish, or test execution only). The Total Jobs = terminal-jobs semantics is observed from the overview screenshot. -->

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-kpi-tiles.png').default} alt="Organisation and Job Activity tiles showing Total App-IDs, Total Projects, Total Jobs, Total Tests and Average Execution Time, with App-ID, project and time window filters" className="doc_img"/>

## Job status at a glance

The **Job Status** card shows how jobs in the selected window ended. The number in the centre of the donut, and the "N terminal jobs" count beside the card header, is the total of all slices below. Each slice shows a job count and its share of that total.

| Status | What it means |
| :---- | :---- |
| **Completed** | The job finished running. For test-level outcomes inside a Completed job, see [HyperExecute Status](/support/docs/hyperexecute-status/). |
| **Failed** | The job did not finish successfully. Broken down further in the [Failure reasons](#failure-reasons) card. |
| **Aborted** | The job was stopped before it finished, either by a user action or by a stop-on-failure rule like [`failFast`](/support/docs/deep-dive-into-hyperexecute-yaml/#failfast). |
| **Timed Out** | The job did not complete within its allowed execution window. |
| **Skipped** | The job was not executed. The [test-level definition](/support/docs/hyperexecute-status/#user-defined-status) is "not relevant or cannot be executed due to some issues like environment setup, data, or configuration". |
| **Platform Error** | The job failed because of a HyperExecute platform-side issue, not something in the user's test or configuration. |

<!-- TODO: confirm with product: the distinction between Aborted vs Timed Out at the job level, and what qualifies as Platform Error vs Failed. -->

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-job-status.png').default} alt="Job Status donut chart with legend for Completed, Failed, Aborted, Timed Out, Skipped and Platform Error jobs, with counts and percentages" className="doc_img"/>

## Failure reasons

The **Failure reasons** card breaks down the failed jobs by cause, so you can tell at a glance whether failures are coming from the tests themselves or from everything around them.

The header shows the total number of failed jobs. Each category below has its own bar with a job count and share of the failures.

| Category | What it typically covers |
| :---- | :---- |
| **Test-level** | Failures inside the user's own tests: assertions, uncaught exceptions, application bugs |
| **Config** | Mis-configured YAML, bad task definitions, missing env vars, invalid caching setup |
| **Infra** | Platform infrastructure the job depends on: browser/device grid, network, storage |
| **Access & Licensing** | Missing permissions, expired licenses, seat or concurrency limits |
| **Unclassified** | Failures that didn't fit any of the above buckets |

<!-- TODO: confirm with product: the exact classification criteria for each category. The descriptions above are reasonable groupings but have not been verified with the team that owns the taxonomy. -->

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-failure-reasons.png').default} alt="Failure reasons bar chart showing failed jobs split into Test-level, Config, Infra, Access and Licensing, and Unclassified" className="doc_img"/>

:::tip Act on the biggest bar first
If **Test-level** dominates, your developers own the fix. If **Config**, **Infra** or **Access & Licensing** dominate, the fix is almost always a platform or policy change. Raise it with the owning team rather than asking every project to patch around it.
:::

## Choosing a time window

The time window selector sits next to the App-ID and project filters in the **Job Activity** section. The dashboard opens on **Last 7 Days**. The date range in use is shown next to the **Job Outcomes** heading.

Click the selector to pick a preset or a custom range:

| Preset | Window |
| :---- | :---- |
| **Today** | The current day |
| **Yesterday** | The previous day |
| **Last 7 Days** *(default)* | Trailing 7 days ending today |
| **Last 14 Days** | Trailing 14 days ending today |
| **Last 30 Days** | Trailing 30 days ending today |
| **All Time** | Every job your organisation has ever run |
| **Custom range** | Pick any start and end date from the calendar |

Click **Clear** to reset the selection. The window applies to **Job Activity** and **Job Outcomes**. **Organization** totals are point-in-time values and do not change with the window.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-window-selector.png').default} alt="Time window selector open, showing Today, Yesterday, Last 7 Days, Last 14 Days, Last 30 Days, All Time and a calendar for a custom date range" className="doc_img"/>

## Exporting to PDF

Click **Download PDF** in the top-right corner of the Summary dialog to download the dashboard as a PDF.

<!-- TODO: confirm with product: whether the PDF reflects the current App-ID, project and time window filters, which sections and charts are included or left out, and the file name format. -->

<img loading="lazy" src={require('../assets/images/hyperexecute/features/org-summary/org-summary-pdf-export.png').default} alt="Download PDF button in the top-right corner of the HyperExecute Summary dialog" className="doc_img"/>

## Frequently asked questions {#faq}

### Who can access the Organisation Summary Dashboard in HyperExecute?

The Organisation Summary Dashboard is available to **organisation admins on the enterprise plan**. Users on other plans or non-admin roles cannot open it. To enable the enterprise plan, contact your account team or <span className="doc__lt" onClick={() => window.openLTChatWidget()}>**24×7 chat support**</span>.

### Where do I open the Organisation Summary Dashboard?

Go to **HyperExecute → [Projects](/support/docs/hyperexecute-projects/)** and click the **View Summary** button at the top of the project list. The dashboard opens in a **Summary** dialog on the same page.

### What time windows can I filter the dashboard by?

**Today**, **Yesterday**, **Last 7 Days** (the default), **Last 14 Days**, **Last 30 Days**, **All Time**, or a **custom** start and end date. The window applies to the **Job Activity** and **Job Outcomes** sections only. **Organization** totals (App-IDs and Projects) are point-in-time values and do not change with the window.

### Can I export the Organisation Summary Dashboard as a PDF?

Yes. Click **Download PDF** in the top-right corner of the Summary dialog to download the dashboard as a PDF.

### What job statuses does the dashboard show?

The Job Status donut groups terminal jobs into six statuses: **Completed**, **Failed**, **Aborted**, **Timed Out**, **Skipped**, and **Platform Error**. Each slice shows the job count and its share of the total. See [Job status at a glance](#job-status-at-a-glance) for one-line definitions.

### What failure categories does the dashboard track?

Failed jobs are broken down into **Test-level** (failures inside the user's own tests), **Config** (YAML or task mis-configuration), **Infra** (platform infrastructure the job depends on), **Access & Licensing** (permissions, licenses, seat limits), and **Unclassified**. See [Failure reasons](#failure-reasons) for the typical contents of each category.

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
        Organisation Summary Dashboard
      </span>
    </li>
  </ul>
</nav>
