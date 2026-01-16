---
id: native-extent-report
title: Native Extent Report
hide_title: false
sidebar_label: Extent Native
description: Learn how to generate Native Extent Report on TestMu AI and download the reports from the dashboard
keywords:
  - native testing reports
  - native testing testmu ai 
  - playwright parallel tests
  - parallel testing with playwright
  
url: https://www.testmu.ai/support/docs/native-extent-report/
site_name: LambdaTest
slug: native-extent-report
canonical: https://www.testmu.ai/support/docs/native-extent-report/
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
          "name": "Native Extent Report",
          "item": `${BRAND_URL}/support/docs/native-extent-report/`
        }]
      })
    }}
></script>
The Extent Native Reports offer a standardized and easily accessible summary of information extracted from raw Extent reports per Virtual Machine (VM) at the end of a HyperExecute job.

### Prerequisites

Before implementing Extent Native Reports, ensure the following prerequisites are met:

1. Upgrade to extent reporting version 5 in the `pom.xml` file.
2. Update import statements in the codebase from `com.relevantcodes` (version 2) to `com.aventstack` (version 5).

## Implementation Steps

Follow these steps to enable Extent Native Reports for your HyperExecute job:

### 1. Upgrade Extent Reporting Version

Update the `pom.xml` file to include the latest version of the Extent Reporting library (version 5). Ensure that the necessary dependencies are correctly configured.

```xml
<dependency>
    <groupId>com.aventstack</groupId>
    <artifactId>extentreports</artifactId>
    <version>5.0.0</version>
</dependency>
```

### 2. Modify Import Statements

Update import statements in your codebase to reflect the new package structure in Extent Reporting version 5. Replace `com.relevantcodes` with `com.aventstack`.

```java
// Before
import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;

// After
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
```

### 3. Generate JSON Reports

Make changes in your codebase to generate individual JSON reports. These reports will serve as the source for the Extent Native Reports.

### 4. Update HyperExecute YAML Configuration

In the HyperExecute YAML configuration, add the following section to instruct the HyperExecute systems to generate Extent Native Reports:

```yaml
report: true
partialReports:
    type: json
    location: reports/json
    frameworkName: extent-native
```

- Set `report: true` to enable report generation.
- Specify the `type` as `json` in the `partialReports` section.
- Define the `location` where the JSON reports will be stored.
- Provide a meaningful `frameworkName` for the Extent Native Reports.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/extent-native.png').default} alt="Image"  className="doc_img"/>

## Conclusion

By following these steps, your HyperExecute job will generate Extent Native Reports, providing a consolidated HTML report derived from individual JSON reports. This enhancement allows customers to access comprehensive and standardized reports conveniently at the conclusion of their HyperExecute jobs.
