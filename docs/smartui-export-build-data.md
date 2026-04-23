---
id: smartui-export-build-data
title: Export SmartUI Build Data
sidebar_label: Export Build Data
description: Export SmartUI build results from the dashboard as PDF, CSV, or JSON after opening a build and using the Export option in the menu.
keywords:
  - SmartUI export
  - Visual regression export
  - SmartUI build PDF
  - SmartUI CSV
  - SmartUI JSON
  - TestMu AI SmartUI
url: https://www.testmuai.com/support/docs/smartui-export-build-data/
site_name: TestMu AI
slug: smartui-export-build-data/
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

You can download **build-level** data for a SmartUI run directly from the <BrandName /> UI—useful for sharing summaries with stakeholders, attaching evidence to tickets, or processing results in other tools.

## Before you start

- Open the **SmartUI** area of the dashboard and navigate into the **project** that contains your build.
- Open the **build** you want to export (the run whose screenshots and comparison outcomes you need).

## Export from the build view

1. With the build open, go to the **three-dot menu** (⋮) in the **top-right** of the build screen.
2. Select **Export**.
3. The product **loads and prepares** the build data. Wait until this step finishes (progress or completion is shown in the UI).
4. When loading completes, choose how you want to download the data:
   - **PDF** — human-readable report style output
   - **CSV** — tabular data for spreadsheets or pipelines
   - **JSON** — structured data for scripts, APIs, or custom tooling

5. Confirm or follow the browser prompt to save the file to your machine.

:::info
The exact file name and contents follow the current SmartUI release. If a format is temporarily unavailable for a very large build, try again after the run fully settles or use another format.
:::

## When to use each format

| Format | Typical use |
|--------|-------------|
| **PDF** | Reviews, email attachments, compliance or release documentation |
| **CSV** | Filtering and pivoting in Excel, Google Sheets, or data warehouses |
| **JSON** | Automation, dashboards, or merging with your own CI metadata |

## Related docs

- [Multiselect & Bulk Operations](/support/docs/smartui-multiselect-bulkops/) — approve or reject many screenshots inside a build
- [Audit & Activity Logs](/support/docs/smartui-audit-logs/) — track changes across the project
- [Fetching Results through SmartUI SDK](/support/docs/smartui-sdk-fetch-results/) — programmatic access to results from your tests
