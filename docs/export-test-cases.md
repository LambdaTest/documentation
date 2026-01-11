---
id: export-test-cases
title: Export Test Cases
hide_title: true
sidebar_label: Export Test Cases
description: Export multiple test cases with the export to csv option for easy download, tracking, and sharing.
keywords:
  - export-test-cases
  - test cases
url: https://www.testmu.ai/support/docs/export-test-cases
site_name: LambdaTest
slug: export-test-cases
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

Efficient test management is crucial for successful project execution. One of the important features in managing test cases is the ability to export them in bulk for easier tracking, analysis, and sharing with the team.

**Let’s look at the steps involved:**

1. Bulk select Test cases you want to include in the export file & click on the `Bulk Action` button. 

<img loading="lazy" src={require('../assets/images/mobile-app-testing/bulk_export_testcases.jpeg').default} alt="export test cases "  className="doc_img" width="1366" height="629"/>

2. Click `Export to CSV` present on the appeared dropdown.

3. When you click Export to CSV, you’ll see options to choose which test case fields to include in the export. Select the desired fields and click **Export to CSV** to download the file.

<img loading="lazy" src={require('../assets/images/mobile-app-testing/select-specifc-fields-export.png').default} alt="export test cases "  className="doc_img" width="1366" height="629"/>

This is how your exported CSV file would look like :

<img loading="lazy" src={require('../assets/images/mobile-app-testing/exported_csv.jpeg').default} alt="exported CSV "  className="doc_img" width="1366" height="629"/>
This file includes all the metadata fields that were selected during export.



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