---
id: analytics-widget-drill-down-export
title: Analytics Drill-Down Widgets - Export Data Options
sidebar_label: Export Data Options
description: Export detailed testing analytics from TestMu AI's Drill-Down widgets to CSV, Excel, or PDF. Share insights, collaborate, and optimize testing processes effectively.
keywords:
  - analytics
url: https://www.testmu.ai/support/docs/analytics-widget-drill-down-export
site_name: LambdaTest
slug: analytics-widget-drill-down-export
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
          "name": "Test Overview",
          "item": `${BRAND_URL}/support/docs/analytics-widget-drill-down-export/`
        }]
      })
    }}
></script>
You can export the data from the Analytics Drill-Down widgets in various formats like CSV, Excel, and PDF. This feature allows you to share the data with your team members, stakeholders, or save it for future reference.

## About Widget Drill-Down 

Widgets in <BrandName /> Analytics provide a visual representation of your testing data, enabling you to track and analyze your test execution trends. The Drill-Down feature allows you to view detailed insights by breaking down the data into specific categories, helping you identify patterns and make data-driven decisions.

<img loading="lazy" src={require('../assets/images/analytics/analytics-widget-export-drill-down.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Export to CSV

The following steps will guide you on how to export data from the Drill-Down widgets to a CSV file:
1. Go to the widget you want to export data from.
2. Click on the `Export As` dropdown located at the top right of the list screen.
3. Select `CSV` from the dropdown list.

<img loading="lazy" src={require('../assets/images/analytics/analytics-widget-export-csv.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Export to PDF
The following steps will guide you on how to export data from the Drill-Down widgets to a PDF file:
1. Go to the widget you want to export data from.
2. Click on the `Export As` dropdown located at the top right of the list screen.
3. Select `PDF` from the dropdown list.

<img loading="lazy" src={require('../assets/images/analytics/analytics-widget-export-pdf.webp').default} alt="cmd" width="768" height="373" className="doc_img"/>

## Value Proposition
By exporting data from the Drill-Down widgets, you can share detailed insights with your team members, stakeholders, or save the data for future reference. This feature enables you to collaborate effectively, make informed decisions, and optimize your testing processes.

:::warning Export Limitations
We only allow a limit of maximum **1000** records to be exported at a time. If you have more than 1000 records, you can apply filters to narrow down the data and export it in parts. For further assistance, you can reach out to our [support team](mailto:support@testmu.ai).
:::

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
      Resource Utilization 
      </span>
    </li>
  </ul>
</nav>
