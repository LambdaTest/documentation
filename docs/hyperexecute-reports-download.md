---
id: hyperexecute-reports-download
title: Download your Job Reports
hide_title: true
sidebar_label: Download your Job Reports via the HyperExecute UI
description: Effortlessly download your HyperExecute job reports from the UI. Click the Report button on the top right-hand side of your tasks page. .
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
url: https://www.lambdatest.com/support/docs/hyperexecute-reports-download/
site_name: LambdaTest
slug: hyperexecute-reports-download/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-reports-download/"
        }]
      })
    }}
></script>

# Downloading Your Job Reports via the HyperExecute UI 

You can access your job reports directly from the UI by clicking on the Report button on the top right-hand side of your [tasks page](/support/docs/hyperexecute-guided-walkthrough/#hyperexecute-tasks-page). Your report will be downloaded automatically.


<img loading="lazy" src={require('../assets/images/he-features/job-reports.png').default} alt="Image"  className="doc_img"/>

***

> **Note**: You must set the `report` flag to true in your YAML file and also use valid entries for the `partialReports` field for your report to be generated. The `partialReports` field in the example given below generates a report in the specified location. 

```bash
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
```

***

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
        Download via UI or HyperExecute YAML 
      </span>
    </li>
  </ul>
</nav>
