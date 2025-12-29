---
id: hyperexecute-katalon-report
title: Katalon Reports on HyperExecute
hide_title: false
sidebar_label: Katalon
description: Learn how to generate Katalon test report for HyperExecute on TestMu AI and download the reports from the dashboard
keywords:
    - Katalon reports
    - hyperexecute Katalon reports
    - hyperexecute testing
url: https://www.testmu.ai/support/docs/hyperexecute-katalon-report
site_name: LambdaTest
slug: hyperexecute-katalon-report
---

import NewTag from '../src/component/newTag';

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
          "name": "Katalon Reports",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-katalon-report/"
        }]
      })
    }}
></script>
HyperExecute provides seamless integration with Katalon Studio, enabling you to generate and view detailed execution reports directly from your test runs. These reports include details such as:

- Test case execution status (Pass/Fail/Skipped)
- Execution time and duration
- Environment and browser details
- Stack traces for failed tests

> Ensure your project is configured with the [Katalon framework]( https://www.lambdatest.com/support/docs/katalon-integration-with-hyperexecute/) and all test scripts are in place.

## Steps to Generate Katalon Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
report: true
partialReports: 
  type: html 
  location: Reports/ 
  frameworkName: katalon
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

> This image shows consolidated report of katalon 10+ versions

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/katalon-report.png').default} alt="Image"  className="doc_img"/>
