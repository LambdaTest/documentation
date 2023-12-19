---
id: hyperexecute-reports
title: HyperExecute Job Reports
hide_title: true
sidebar_label: HyperExecute Job Reports
description: Effortlessly explore HyperExecute Reports! Gain a deeper understanding of your test outcomes with the comprehensive insights and analytics offered by LambdaTest.
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

# Reports

Reports provide summarized job information, including status counts and links to tests. You can generate and download detailed reports at the end of job execution that helps you analyze the outcome of your tests based on your framework. 

## Steps to Generate Reports

Follow the below mentioned steps to generate the Reports for your desired framework:

**Step 1:** Go to the HyperExecute YAML file

**Step 2:** Add the below mentioned parameters in the YAML file to generate the Reports

- You must set the `report` flag to **true**.

- You will have to specify the **location**, **type** and **framework** associated with your report in the `partialReports` field to generate it. 

```bash
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
```
> **Note**: If you do not specify a framework but you do mention the type of the report, then a report of the default framework is created.

**Step 3:** Now trigger your job and go to the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) dashboard.

**Step 4:** Click on the **Open** button of the **Reports**.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/report3.png').default} alt="Image"  className="doc_img"/>

Here is the sample report generated.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/report4.png').default} alt="Image"  className="doc_img"/>

:::info
Refer to the deatiled documentataion on [Job Reports](/support/docs/hyperexecute-job-reports/)
:::


## Download the Generated Reports

**Step 1:** Go to the [HyperExecute](https://hyperexecute.lambdatest.com/hyperexecute/jobs) portal and click on your Job.

**Step 2:** Click on the **Reports** button in the upper right corner.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/report1.png').default} alt="Image"  className="doc_img"/>

**Step 3:** Click on the **Download** button to download your Job Reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/report2.png').default} alt="Image"  className="doc_img"/>


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
