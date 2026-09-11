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
  
url: https://www.testmuai.com/support/docs/native-extent-report/
site_name: TestMu AI
slug: native-extent-report/
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

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": [
      "Article",
      "TechArticle"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.testmuai.com/support/docs/native-extent-report/"
    },
    "headline": "Native Extent Report",
    "description": "Learn how to generate Native Extent Report on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/native-extent-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "native testing reports",
      "native testing testmu ai",
      "playwright parallel tests"
    ],
    "proficiencyLevel": "Beginner",
    "author": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "url": "https://www.testmuai.com/"
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.testmuai.com/#organization",
      "name": "TestMu AI",
      "alternateName": [
        "TestMuAI",
        "TestMu",
        "LambdaTest"
      ],
      "url": "https://www.testmuai.com/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.testmuai.com/logo.png"
      },
      "sameAs": [
        "https://www.linkedin.com/company/testmu-ai/",
        "https://x.com/testmuai",
        "https://www.youtube.com/@TestMuAI"
      ]
    },
    "hasPart": [
      {
        "@type": "SoftwareSourceCode",
        "name": "1. Upgrade Extent Reporting Version",
        "codeSampleType": "code snippet",
        "programmingLanguage": "XML",
        "text": "<dependency>\n    <groupId>com.aventstack<\/groupId>\n    <artifactId>extentreports<\/artifactId>\n    <version>5.0.0<\/version>\n<\/dependency>"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "2. Modify Import Statements",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Java",
        "text": "// Before\nimport com.relevantcodes.extentreports.ExtentReports;\nimport com.relevantcodes.extentreports.ExtentTest;\n\n// After\nimport com.aventstack.extentreports.ExtentReports;\nimport com.aventstack.extentreports.ExtentTest;"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "4. Update HyperExecute YAML Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n    type: json\n    location: reports/json\n    frameworkName: extent-native"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
The Extent Native Reports offer a standardized and easily accessible summary of information extracted from raw Extent reports per Virtual Machine (VM) at the end of a HyperExecute job.

### Prerequisites

Before implementing Extent Native Reports, ensure the following prerequisites are met:

1. Upgrade to extent reporting version 5 in the `pom.xml` file.
2. Update import statements in the codebase from `com.relevantcodes` (version 2) to `com.aventstack` (version 5).

## Implementation Steps

Follow these steps to enable Extent Native Reports for your HyperExecute job:

### 1. Upgrade Extent Reporting Version

Update the `pom.xml` file to include the latest version of the Extent Reporting library (version 5). Ensure that the necessary dependencies are correctly configured.

<VerifiedTag value="Verified" />

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

<VerifiedTag value="Verified" />

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
