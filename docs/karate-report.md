---
id: karate-report
title: Karate Report
hide_title: false
sidebar_label: Karate
description: Learn how to configure and generate Karate test execution reports on HyperExecute with step-by-step guidance for seamless test insights and reporting.
keywords:
  - cucumber testing reports
  - karate report testmu ai 
url: https://www.testmu.ai/support/docs/karate-report/
site_name: LambdaTest
slug: karate-report/
canonical: https://www.testmu.ai/support/docs/karate-report/
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
          "name": "Karate Report",
          "item": `${BRAND_URL}/support/docs/karate-report/`
        }]
      })
    }}
></script>
Karate framework supports generating detailed test execution reports that help visualize test results and insights. On HyperExecute, you can run your Karate tests and configure it to generate and download these reports seamlessly.

> Ensure your project is configured with the **Karate framework** and all test scripts are in place.

## Steps to Generate Karate Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file.

```yaml
report: true
partialReports:
    location: target
    type: html
    frameworkName: karate
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/karate-reports.png').default} alt="Image" className="doc_img"/> 