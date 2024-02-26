---
id: error-categorization-report
title: Error Categorization Report on HyperExecute
hide_title: true
sidebar_label: Error Categorization Report
description: Streamline error analysis with the Error Categorization Report. Identify patterns in test failures to enhance quality and efficiency in your testing process.
keywords:
  - error categorization reports
  - error testing lambdatest 
  
url: https://www.lambdatest.com/support/docs/error-categorization-report/
site_name: LambdaTest
slug: error-categorization-report/
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
          "name": "Error Categorization Report",
          "item": "https://www.lambdatest.com/support/docs/error-categorization-report/"
        }]
      })
    }}
></script>

# HyperExecute Error Categorization Report

The Error Categorization Report is a custom report that is used to help you categorize errors based on failed tests, providing a clear and organized view of test failures with similar characteristics.

This report aims to simplify the identification of problematic stages and associated tests, allowing you to navigate through detailed views and download relevant information for further analysis.

## Generate Error Categorization Report

Follow the guided steps below to generate the error-categorized report for your HyperExecute Job.

### Prerequisite

- This report will only be generated if your job contains multiple categories of errors.

### Step 1: YAML file Configuration

In your YAML file, add the below code to generate the error-categorization report.

```bash
errorCategorizedReport:
  enabled: true
```

:::tip
There is no dependency on the [**report flag**](https://www.lambdatest.com/support/docs/deep-dive-into-hyperexecute-yaml/#report). It means that even if you do not pass the `report: true`, it will still generate the error-categorized report.
:::

> **NOTE :** You can generate and download other reports as well, along with the error-report.

### Step 2: Execute your Job

After configuring your YAML file, you can execute your Job on the HyperExecute. 

- In the below screenshot, you can see that 3 categories of errors are generated
  - ElementNotFound Error
  - Assertion Error
  - WebDriver Exception 

- You can either open the **Error-RCA Report** or you can download it as well.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/error-dashbaord.png').default} alt="Image"  className="doc_img"/>

### Step 3: Download or Open the Generated Error Report

- This report list down all the error summaries along with the specific details.

- You can also check for the particular error for the specific test.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/error-categorized-report-1.png').default} alt="Image"  className="doc_img"/>

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/error-categorized-report-2.png').default} alt="Image"  className="doc_img"/>
