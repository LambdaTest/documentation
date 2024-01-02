---
id: hyperexecute-reports
title: Detailed Test Reports and Logs
hide_title: true
sidebar_label: Detailed Test Reports and Logs
description: Navigate through HyperExecute Reports with ease! Understand your test results better with detailed insights and analytics provided by LambdaTest.
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-reports/
site_name: LambdaTest
slug: hyperexecute-reports/
---

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "HyperExecute Concepts",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-reports/"
        }]
      })
    }}
></script>

# Detailed Test Reports and Logs

One of the key features that HyperExecute provides is our comprehensive Job Reports. It is a detailed report that helps you analyze the outcome of your tests based on your framework. 

- To generate a report for your Job, you must set the `report` flag to **true** in the [HyperExecute YAML](/support/docs/deep-dive-into-hyperexecute-yaml).
- You will have to specify the **location**, **type** and **framework** associated with your report in the `partialReports` field to generate it. 

```bash
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
```
> **Note**: If you do not specify a framework but you do mention the type of the report, then a report of the default framework is created.

:::info
- For **_html_** reports, the default framework is **SpecFlow**.
- For **_json_** reports, the default framework is **Cucumber**. 
:::

To know more about how to download or access your job reports, go through the pages mentioned below.

<div className="support_main">
  <a href="/support/docs/hyperexecute-reports-download/">
    <div className="support_inners mb-5">
      <h3>Download Job Report via HyperExecute GUI</h3>
      <p>HyperExecute allows you to Download your Job Reports directly from the platform.</p>
    </div>
  </a>
  <a href = "/support/docs/hyperexecute-email-reports/">
    <div className="support_inners">
      <h3>Receive the Job Report via Email</h3>
      <p>HyperExecute provides you a feature to recieve your Job Reports via the Email.</p>
    </div>
  </a>
</div>

<nav aria-label="breadcrumbs">
  <ul className="breadcrumbs">
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com">
        Home
      </a>
    </li>
    <li className="breadcrumbs__item">
      <a className="breadcrumbs__link" target="_self" href="https://www.lambdatest.com/support/docs/">
        Support
      </a>
    </li>
    <li className="breadcrumbs__item breadcrumbs__item--active">
      <span className="breadcrumbs__link">
        Downloading Job Reports
      </span>
    </li>
  </ul>
</nav>
