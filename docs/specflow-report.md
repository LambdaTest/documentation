---
id: specflow-report
title: SpecFlow Report
hide_title: false
sidebar_label: SpecFlow
description: Learn how to generate SpecFlow Report on TestMu AI and download the reports from the dashboard
keywords:
  - specflow testing reports
  - specflow testing testmu ai 
  
url: https://www.testmu.ai/support/docs/specflow-report
site_name: LambdaTest
slug: specflow-report
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "LambdaTest",
          "item": BRAND_URL
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": `${BRAND_URL}/support/docs/`
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Native Extent Report",
          "item": `${BRAND_URL}/support/docs/specflow-report/`
        }]
      })
    }}
></script>
SpecFlow is a free tool for automating tests using BDD. It's often used to create automation scripts for .NET projects.
This technical document provides a guide on generating SpecFlow reports after executing tests on HyperExecute.

> We also offer [Custom Specflow report](/support/docs/custom-speclow-report/).

## Steps to Generate Specflow Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```yaml
report: true
partialReports:
  location: YOUR_REPORTS_LOCATION
  type: html
  frameworkName: specflow
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/specflow.png').default} alt="Image" className="doc_img"/> 
