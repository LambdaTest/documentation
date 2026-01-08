---
id: error-categorization-report
title: Error Categorization Report
hide_title: false
sidebar_label: Error Categorization
description: Streamline error analysis with the Error Categorization Report. Identify patterns in test failures to enhance quality and efficiency in your testing process.
keywords:
  - error categorization reports
  - error testing testmu ai 
  
url: https://www.testmu.ai/support/docs/error-categorization-report
site_name: LambdaTest
slug: error-categorization-report
---
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
          "name": "Error Categorization Report",
          "item": `${BRAND_URL}/support/docs/error-categorization-report/`
        }]
      })
    }}
></script>
The Error Categorization Report is a specialized report that helps simplify the process of identifying and categorizing errors in your HyperExecute job. By organizing test failures with similar characteristics, this report provides a clear and structured overview of problematic stages and associated tests for efficient error tracking and analysis.

:::info
You can generate and download other reports as well, along with the error-report.
:::

## Configure YAML file to Generate the Error Categorization Report

This report is generated when your job includes multiple error categories. To enable the error categorization report, simply pass the [`errorCategorizedReport`](/support/docs/deep-dive-into-hyperexecute-yaml/#errorcategorizedreport) flag to your YAML file:

```yaml title="hyperexecute.yaml"
errorCategorizedReport:
  enabled: true
```

:::note
This report does not depend on the [`report: true`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) flag. It will generate the error report even if you do not pass the `report: true` flag in your YAML file.
:::

Now trigger your job on HyperExecute, and if your job fails (encounters any failed tests), it will generate the Error Categorization Report. This report list down all the error summaries along with the specific details. You can also check for the particular error for the specific test.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/error-categorization-report.gif').default} alt="Image" className="doc_img"/> 
