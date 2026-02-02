---
id: custom-speclow-report
title: Custom Specflow Report
sidebar_label: Custom Specflow
description: Custom specflow report
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/custom-speclow-report/
site_name: LambdaTest
slug: custom-speclow-report/
canonical: https://www.testmuai.com/support/docs/custom-speclow-report/
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
          "name": "HyperExecute Custom Specflow Report",
          "item": `${BRAND_URL}/support/docs/custom-speclow-report/`
        }]
      })
    }}
></script>
This guide provides step-by-step instructions on how to generate a custom SpecFlow report in <BrandName /> HyperExecute. By following the specified changes in the YAML file and modifying the test script, users can receive detailed test reports via email.

## Prerequisites
- A valid <BrandName /> account.
- A configured HyperExecute environment.
- A SpecFlow-based test suite.

## Configuration Changes
To enable custom SpecFlow reporting, make the following changes to your YAML configuration file and test script.

### Step 1: Modify the YAML Configuration File
Add the following settings in your YAML file to enable reporting and configure partial reports:

```yaml
report: true
partialReports:
  location: YOUR_REPORTS_LOCATION
  type: xml
  frameworkName: specflow-custom
  email:
    to: [YOUR_EMAIL_ID]
    metaInfo: [ "project-name:YOUR_CUSTOM_PROJECT_NAME", "project-env: YOUR_CUSTOM_PROJECT_ENV" ]
```

Explanation:
- `report: true` → Enables the reporting feature.
- `partialReports.location` → Specifies the directory where the partial reports will be stored.
- `partialReports.type: xml` → Configures the report format as XML.
- `partialReports.frameworkName: specflow-custom` → Sets the framework name.
- `email.to` → Defines the recipient email address where the reports will be sent.
- `email.metaInfo` → Adds metadata, including project name and environment details, to the report.

### Step 2: Modify the Test Script
Add the following capability in your test script to ensure the correct execution status is recorded:

`((IJavaScriptExecutor)driver).ExecuteScript($"lambda-info=suitename:YOUR_SUITE_NAME:passed");`

Explanation:
- This script sends test execution information (suite name and status) to <BrandName />.
- Replace `YOUR_SUITE_NAME` with the appropriate suite name.
- The passed status can be dynamically changed based on the test result.

### Step 3: Report Generation and Email Notification
Once the tests are executed, the custom SpecFlow report will be generated and sent to the configured email address. The report will include:

- Tag-based test summaries and details.
- Suite-based test summaries and details.
- Number of tests passed, failed, skipped, or with other statuses.
- Meta information such as project name and environment.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/custom-specflow.png').default} alt="Image" className="doc_img"/> 