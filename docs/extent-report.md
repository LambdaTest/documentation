---
id: extent-report
title: Extent Report on HyperExecute
hide_title: true
sidebar_label: Extent
description: Learn how to generate Extent Report on lambdatest and download the reports from the dashboard
keywords:
  - extent testing reports
  - extent testing lambdatest 
  
url: https://www.lambdatest.com/support/docs/extent-report/
site_name: LambdaTest
slug: extent-report/
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
          "name": "Extent Report",
          "item": "https://www.lambdatest.com/support/docs/extent-report/"
        }]
      })
    }}
></script>

# HyperExecute Extent Report

Extent Reports is a popular reporting framework for Java, TestNG, and Selenium tests. It provides a comprehensive set of features for reporting test results, including detailed test case summaries, screenshots and videos of test execution, execution logs, and charts and graphs to analyze test results..

### Prerequisites

1. Upgrade to extent reporting version 5 in the `pom.xml` file.
2. Update import statements in the codebase from `com.relevantcodes` (version 2) to `com.aventstack` (version 5).

## Implementation Steps

Follow these steps to enable Extent Reports for your HyperExecute job:

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

Make changes in your codebase to generate individual JSON reports. These reports will serve as the source for the Extent   Reports.

### 4. Update HyperExecute YAML Configuration

In the HyperExecute YAML configuration, add the following section to instruct the HyperExecute systems to generate Extent   Reports:

```yaml
report: true
partialReports:
    type: json
    location: reports/json
    frameworkName: extent
```

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/extent.png').default} alt="Image"  className="doc_img"/>

## Conclusion

By following these steps, your HyperExecute job will generate Extent Reports, providing a consolidated HTML report derived from individual JSON reports. This enhancement allows customers to access comprehensive and standardized reports conveniently at the conclusion of their HyperExecute jobs.