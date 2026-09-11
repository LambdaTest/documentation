---
id: allure-reports
title: Allure Reports on HyperExecute
hide_title: false
sidebar_label: Allure
description: Learn how to generate Allure test report for HyperExecute on TestMu AI and download the reports from the dashboard
keywords:
    - allure reports
    - hyperexecute allure reports
    - hyperexecute testing
url: https://www.testmuai.com/support/docs/allure-reports/
site_name: TestMu AI
slug: allure-reports/
canonical: https://www.testmuai.com/support/docs/allure-reports/
---

import NewTag from '../src/component/newTag';
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
          "name": "Allure Reports",
          "item": `${BRAND_URL}/support/docs/allure-reports/`
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
      "@id": "https://www.testmuai.com/support/docs/allure-reports/"
    },
    "headline": "Allure Reports on HyperExecute",
    "description": "Learn how to generate Allure test report for HyperExecute on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/allure-reports/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "allure reports",
      "hyperexecute allure reports",
      "hyperexecute testing"
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
        "name": "Allure Report Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "- The `outputDir` parameter specifies the directory where Allure reports will be stored. In this example, it is set to **'reports/allure-results'**. This parent folder is essential for HyperExecute integration, as detailed later.\n\n- The `disableWebdriverStepsReporting` and `disableWebdriverScreenshotsReporting` parameters allow customization of reporting options.\n\n:::tip\nAlternatively this can also be done by creating an `allure.properties` file in the `src/test/resources` directory. \n\n```yaml title=\"allure.properties\"\nallure.results.directory=reports/allure-results"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Allure Report Configuration",
        "codeSampleType": "code snippet",
        "programmingLanguage": "YAML",
        "text": "report: true\npartialReports:\n  location: reports\n  type: html\n  frameworkName: allure"
      },
      {
        "@type": "SoftwareSourceCode",
        "name": "Code sample 3",
        "codeSampleType": "code snippet",
        "programmingLanguage": "Shell",
        "text": "report: true\npartialReports:\n  location: reports\n  # highlight-next-line\n  configPath: allure-config.yml\n  type: html\n  frameworkName: allure"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

Allure Framework is a versatile, lightweight, multi-language test reporting tool designed to provide a concise representation of tested functionalities in a visually appealing web report format. It facilitates easy extraction of valuable information for all stakeholders involved in the development process.

## Integration with HyperExecute

If your testing framework already generates Allure reports, you can seamlessly integrate it with HyperExecute. This integration enables the generation of a consolidated Allure report on HyperExecute for each job, accessible through the report section of the HyperExecute dashboard.

## Allure Report Configuration

**Step 1:** To configure the Allure reporter in the **WDIO framework**, update your `wdio.conf.js` file as follows:

```javascript title="wdio.conf.js"
export const config = {
    reporters: [['allure', {
        outputDir: 'reports/allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
}
```
- The `outputDir` parameter specifies the directory where Allure reports will be stored. In this example, it is set to **'reports/allure-results'**. This parent folder is essential for HyperExecute integration, as detailed later.

- The `disableWebdriverStepsReporting` and `disableWebdriverScreenshotsReporting` parameters allow customization of reporting options.

:::tip
Alternatively this can also be done by creating an `allure.properties` file in the `src/test/resources` directory. 

```yaml title="allure.properties"
allure.results.directory=reports/allure-results
```
:::

**Step 2:** Add the following report parameters in your HyperExecute YAML file

```yaml
report: true
partialReports:
  location: reports
  type: html
  frameworkName: allure
```

> **NOTE:** The above example is only for the WDIO framework and the baseline concept remains the same across all the frameworks that the allure-results should be saved in a parent folder and that location of the parent folder is to be provided in the location parameters of reports in the HyperExecute YAML file. 

:::info
To enrich Allure reports with more specific details, we can use custom plugins. These plugins require configurations to function properly.

To achieve this, you can use `configPath` flag within HyperExecute YAML. This specifies the location of the configuration file containing the custom plugin settings, allowing Allure to generate reports with the desired level of detail and this will be passed as `allure --config <CONFIG_PATH>`

```bash
report: true
partialReports:
  location: reports
  # highlight-next-line
  configPath: allure-config.yml
  type: html
  frameworkName: allure
```
:::
<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/allure.png').default} alt="Image"  className="doc_img"/>

## Allure Test Insights

This helps you to get an overview of the test execution results using the Allure reports. This widget provides insights into the test execution results, test status, and test duration.

> **NOTE :** Refer to the [Allure API Test Insights with HyperExecute documentation](/support/docs/analytics-allure-api-widgets/) for a comprehensive explanation

<img loading="lazy" src={require('../assets/images/analytics/api-test-report.webp').default} alt="cmd" width="800" height="400" className="doc_img" />
