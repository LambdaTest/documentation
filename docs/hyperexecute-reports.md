---
id: hyperexecute-reports
title: Job Reports
hide_title: false
sidebar_label: HyperExecute Job Reports
description: Effortlessly explore HyperExecute Reports! Gain a deeper understanding of your test outcomes with the comprehensive insights and analytics offered by TestMu AI.
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
url: https://www.testmuai.com/support/docs/hyperexecute-reports/
site_name: TestMu AI
slug: hyperexecute-reports/
canonical: https://www.testmuai.com/support/docs/hyperexecute-reports/
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
          "name": "HyperExecute Concepts",
          "item": `${BRAND_URL}/support/docs/hyperexecute-reports/`
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
      "@id": "https://www.testmuai.com/support/docs/hyperexecute-reports/"
    },
    "headline": "Job Reports",
    "description": "Effortlessly explore HyperExecute Reports! Gain a deeper understanding of your test outcomes with the comprehensive insights and analytics offered by TestMu AI.",
    "url": "https://www.testmuai.com/support/docs/hyperexecute-reports/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "HyperExecute",
    "keywords": [
      "TestMu AI Hyperexecute",
      "TestMu AI Hyperexecute help",
      "TestMu AI Hyperexecute documentation"
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
        "name": "Follow the below mentioned steps to generate the Reports for your desired framework",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n  frameworkName: testng\n  location: target/surefire-reports/html\n  type: html"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Generate Multiple Reports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "partialReports:\n  - location: reports/json\n    type: json\n    frameworkName: extent-native\n    \n  - location: target/surefire-reports\n    type: html\n    frameworkName: testng"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "location: target/abc//pqr//cucumber-reports",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nEnsure that your Testrunner.java file should have the complete path from where partial reports will be added. Example:\n\n```java title=\"Testrunner.java\"\nplugin = {\n    \"json:target/abc/mno/pqr/xyz/cucumber-reports/CucumberTestReport.json\",\n    \"json:target/abc/its/pqr/abc/cucumber-reports/CucumberTestReport.json\"\n}"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>
Reports provide summarized job information, including status counts and links to tests. You can generate and download detailed reports at the end of job execution that helps you analyze the outcome of your tests based on your framework. 

:::tip note
Refer to this detailed [Job Reports](/support/docs/hyperexecute-job-reports/) page to learn more about the types of reports being offered and how to configure them.
:::

## Steps to Generate and Download Reports

Follow the below mentioned steps to generate the Reports for your desired framework:

**Step 1:** Go to the HyperExecute YAML file

**Step 2:** Add the below mentioned parameters in the YAML file to generate the Reports

- You must set the `report` flag to **true**.
- You will have to specify the **location**, **type** and **framework** associated with your report in the `partialReports` field to generate it. 

<VerifiedTag value="Verified" />

```yaml
report: true
partialReports:
  frameworkName: testng
  location: target/surefire-reports/html
  type: html
```
> **Note**: If you do not specify a framework but you do mention the type of the report, then a report of the default framework is created.

**Step 3:** Now trigger your job and go to the [HyperExecute](https://www.testmuai.com/login/?redirectTo=https://hyperexecute.lambdatest.com/hyperexecute/jobs) dashboard.

**Step 4:** Click on the **Open** button of the **Reports**.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/reports.gif').default} alt="Image"  className="doc_img"/>

Here is the sample report generated.

<img loading="lazy" src={require('../assets/images/hyperexecute/features/artifacts-reports/report4.png').default} alt="Image"  className="doc_img"/>

## Generate Multiple Reports
If you want to generate multiple reports of different types [supported by HyperExecute](/support/docs/hyperexecute-job-reports/), simply add the required specifications in the `partialReports` field as shown below:

<VerifiedTag value="Verified" />

```yaml
partialReports:
  - location: reports/json
    type: json
    frameworkName: extent-native
    
  - location: target/surefire-reports
    type: html
    frameworkName: testng
```

## Regex Support for Dynamic Report Paths
You can now use **glob-style wildcards `(**)`** in the location field of `partialReports` to dynamically match nested folders and custom report paths. This is especially useful when your test reports are generated inside directories that include date stamps, environment names, or other runtime variables.

Example:

<VerifiedTag value="Verified" />

```yaml title="hyperexecute.yaml"
partialReports:
  location: reports/**/cucumber/
  # location: target/abc/**/pqr/**/cucumber-reports
  frameworkName: cucumber
  type: json
```

Ensure that your Testrunner.java file should have the complete path from where partial reports will be added. Example:

```java title="Testrunner.java"
plugin = {
    "json:target/abc/mno/pqr/xyz/cucumber-reports/CucumberTestReport.json",
    "json:target/abc/its/pqr/abc/cucumber-reports/CucumberTestReport.json"
}
```
