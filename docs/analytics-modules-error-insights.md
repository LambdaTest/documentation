---
id: analytics-modules-error-insights
title: Error Insights
sidebar_label: Session Errors 
description: Analytics Modules - Error Insights
keywords:
  - analytics
url: https://www.testmu.ai/support/docs/analytics-modules-error-insights
site_name: LambdaTest
slug: analytics-modules-error-insights
canonical: https://www.testmu.ai/support/docs/analytics-modules-error-insights/
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
          "item": `${BRAND_URL}/support/docs/analytics-modules-error-insights/`
        }]
      })
    }}
></script>
The `Error Insights` module enables the users to get all the insights into the test errors on <BrandName /> in one place. The user can easily find information about the count, and type of the test errors through the highly customizable widgets.

## Error Stats

<img loading="lazy" src={require('../assets/images/analytics/error-insights-1.png').default} alt="cmd" width="768" height="373" className="doc_img"/>

The `Error Stats` widget allows the user to easily analyze the tests categorized by their Status on the <BrandName /> platform including Test Case Errors, Idle Timeout, Queue Timeout, and Lambda Error. The user can even filter the graph by clicking on the relevant legends at the bottom of the graph.

:::tip Use case
John is a QA Manager, and his team runs more than 50,000 tests in a month across various <BrandName /> products like Web Automation, App Automation, and HyperExecute.

John wants to understand the error distribution of the executed tests on the platform. With the Error Stats widget he can identify the list of tests that have a particular error and resolve them.
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
      Error Insights 
      </span>
    </li>
  </ul>
</nav>
