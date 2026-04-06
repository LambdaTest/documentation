---
id: export-test-cases
title: Export Test Cases
hide_title: true
sidebar_label: Export Test Cases
description: Export multiple test cases with the export to csv option for easy download, tracking, and sharing.
keywords:
  - export-test-cases
  - test cases
url: https://www.testmuai.com/support/docs/export-test-cases/
site_name: TestMu AI
slug: export-test-cases/
canonical: https://www.testmuai.com/support/docs/export-test-cases/
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
          "name": "Export Test Cases",
          "item": `${BRAND_URL}/support/docs/export-test-cases/`
        }]
      })
    }}
></script>

# Export Test Cases

Export your test cases in bulk as a CSV file for tracking, analysis, and sharing with your team. You can select which fields to include, choose how steps are structured in the output, and download the file in a few clicks.

## How to Export

### Step 1: Select Test Cases
Navigate to the **Test Case Listing** page, bulk select the test cases you want to export, and click the **Bulk Action** button.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_export_testcases.jpeg').default} alt="export test cases"  className="doc_img" width="1366" height="629"/>

### Step 2: Choose Export to CSV
Click **Export to CSV** from the dropdown menu.

### Step 3: Select Fields for Export
Choose which test case fields to include in the exported CSV file. You can select or deselect individual fields, or use the **Select All** checkbox to include everything.

Available fields include: Test Case ID, Test Case Title, Project Name, Folder Name, Description, Priority, Type, Status, Tags, Preconditions, Manual Steps, Expected Outcomes, BDD Scenarios, KaneAI Steps, and more.

:::note
The ability to export **KaneAI Steps** is being rolled out gradually and may not be available on all accounts yet.
- Only the **natural language instruction** of each KaneAI step is exported. Steps such as Execute JavaScript, Execute API, etc. will not include the underlying code in the CSV.
- If you edit or modify KaneAI steps, it may take up to **1 minute** for the changes to reflect in the exported CSV.
:::

### Step 4: Choose CSV Layout
Select a **CSV Layout** to control how steps are structured in the exported file:

| Layout | Description |
|---|---|
| **Single Row** | Steps, outcomes, KaneAI steps, and BDD scenarios are included in the same row as the test case, using a numbered format (e.g., `1. Step one 2. Step two`). |
| **Multiple Rows** | Each step, outcome, KaneAI step, or BDD scenario is placed in a separate row without numbered prefixes. |

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select-csv-layout.png').default} alt="export test cases - field selection"  className="doc_img" width="1366" height="629"/>

### Step 5: Download the CSV
Click **Export to CSV** to download the file.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select-specifc-fields-export.png').default} alt="export test cases - field selection"  className="doc_img" width="1366" height="629"/>

Here is an example of an exported CSV file with single row CSV layout:

<img loading="lazy" src={require('../assets/images/mobile-app-testing/exported_csv.jpeg').default} alt="exported CSV file"  className="doc_img" width="1366" height="629"/>

The exported file includes all the metadata fields that were selected during export.



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
        Export Test Cases
      </span>
    </li>
  </ul>
</nav>
