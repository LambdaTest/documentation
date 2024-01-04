---
id: specflow-report
title: SpecFlow Report on HyperExecute
hide_title: true
sidebar_label: SpecFlow Report
description: Learn how to generate SpecFlow Report on lambdatest and download the reports from the dashboard
keywords:
  - specflow testing reports
  - specflow testing lambdatest 
  
url: https://www.lambdatest.com/support/docs/specflow-report/
site_name: LambdaTest
slug: specflow-report/
---
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Native Extent Report",
          "item": "https://www.lambdatest.com/support/docs/specflow-report/"
        }]
      })
    }}
></script>

# SpecFlow Reports

SpecFlow is a free tool for automating tests using BDD. It's often used to create automation scripts for .NET projects.

This technical document provides a guide on generating SpecFlow reports after executing tests on HyperExecute.

## Steps to Generate Cucumber Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```bash
report: true
partialReports:
  location: GlobalPolaris\Reports
  type: html
  frameworkName: specflow
  email:
     to: ["example@example.com"]
     metaInfo: ["project-name:<any>","project-env:<any>"]
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

:::info
You can also generate Custom Specflow reports using the Specflow reporting API. You can use the Specflow reporting API to generate reports in any format you want, such as HTML, PDF, or XML.

```bash
report: true
partialReports:
  location: GlobalPolaris\Reports
  type: html
  frameworkName: specflow-custom
  email:
     to: ["example@example.com"]
     metaInfo: ["project-name:<any>","project-env:<any>"]
```
:::

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/specflow.png').default} alt="Image" className="doc_img"/> 