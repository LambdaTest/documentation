---
id: smartui-export-build-data
title: Export SmartUI Build Data
sidebar_label: Export Build Data
description: Export a SmartUI build from the dashboard in PDF, CSV, or JSON using the build menu, after the UI finishes loading export data.
keywords:
  - SmartUI export
  - SmartUI PDF
  - SmartUI CSV
  - SmartUI JSON
  - Visual regression export
  - Build export
  - TestMu AI SmartUI
slug: smartui-export-build-data/
url: https://www.testmuai.com/support/docs/smartui-export-build-data/
site_name: TestMu AI
canonical: https://www.testmuai.com/support/docs/smartui-export-build-data/
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
          "name": "Export SmartUI Build Data",
          "item": `${BRAND_URL}/support/docs/smartui-export-build-data/`
        }]
      })
    }}
></script>

# Export SmartUI Build Data

From the <BrandName /> dashboard you can export **build-level** data for a SmartUI run—comparison outcomes, statuses, and related metadata—without using the CLI or API. Use it for stakeholder summaries, ticket attachments, spreadsheets, or downstream automation.

## Prerequisites

1. Open **SmartUI** and select the **project** that contains your build.
2. Open the **build** you want to export (the completed run you need a snapshot of).

## Export from the build view

### Step 1: Open Export from the build menu

With the build page open, select the **three-dot menu** (⋮) in the **upper-right** corner, then choose **Export**.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/export_options/export-button.png').default} className="doc_img" alt="SmartUI build screen with three-dot menu and Export option highlighted" />

### Step 2: Wait for export data to load

The product gathers build data for export. Stay on the view until loading **finishes** (spinner or progress clears). Large builds can take longer; avoid closing the tab during this step.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/export_options/loading-data.png').default} className="doc_img" alt="Export loading state while build data is prepared" />

### Step 3: Choose a format and download

When loading completes, select **PDF**, **CSV**, or **JSON**. Your browser will download the file (exact name depends on the product version). Use your browser’s download bar or downloads folder if the save dialog does not appear.

<img loading="lazy" src={require('../assets/images/smart-visual-testing/export_options/loading-complete-and-export-options.png').default} className="doc_img" alt="Export ready with PDF CSV and JSON download options" />

:::tip
If a download does not start, check pop-up or download permissions for your <BrandName /> domain, then try the same format again after a short wait.
:::

## Choose a format

| Format | Best for |
|--------|----------|
| **PDF** | Readable summaries for reviews, email, or release records. |
| **CSV** | Sorting, filtering, and charts in Excel, Google Sheets, or BI tools. |
| **JSON** | Scripts, custom dashboards, or merging with CI metadata. |

Column and field names in CSV/JSON follow the current SmartUI release; if you automate parsing, pin expectations to a tested export sample after upgrades.

## Related docs

- [Running Your First SmartUI Project](/support/docs/smartui-running-your-first-project/)
- [Multiselect & Bulk Operations](/support/docs/smartui-multiselect-bulkops/)
- [Audit & Activity Logs](/support/docs/smartui-audit-logs/)
- [Fetching Results through SmartUI SDK](/support/docs/smartui-sdk-fetch-results/)
