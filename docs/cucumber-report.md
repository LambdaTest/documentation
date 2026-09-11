---
id: cucumber-report
title: Cucumber Report
hide_title: false
sidebar_label: Cucumber
description: Learn how to generate Cucumber Report on TestMu AI and download the reports from the dashboard
keywords:
  - cucumber testing reports
  - cucumber testing testmu ai 
url: https://www.testmuai.com/support/docs/cucumber-report/
site_name: TestMu AI
slug: cucumber-report/
canonical: https://www.testmuai.com/support/docs/cucumber-report/
---

import BrandName, { BRAND_URL } from '@site/src/component/BrandName';
import VerifiedTag from '@site/src/component/verifiedTag';

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
          "name": "Cucumber Report",
          "item": `${BRAND_URL}/support/docs/cucumber-report/`
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
      "@id": "https://www.testmuai.com/support/docs/cucumber-report/"
    },
    "headline": "Cucumber Report",
    "description": "Learn how to generate Cucumber Report on TestMu AI and download the reports from the dashboard",
    "url": "https://www.testmuai.com/support/docs/cucumber-report/",
    "image": {
      "@type": "ImageObject",
      "url": "https://www.testmuai.com/support/assets/images/og-images/testmuai-documentation-og.webp",
      "width": 1200,
      "height": 630
    },
    "inLanguage": "en",
    "articleSection": "Documentation",
    "keywords": [
      "cucumber testing reports",
      "cucumber testing testmu ai"
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
        "name": "Step 1: Configure the TestRunner File",
        "codeSampleType": "code snippet",
        "programmingLanguage": "text",
        "text": "\nExplanation of plugin Options:\n\n- **pretty :** Outputs readable format in console.\n- **html:target/cucumber-reports/cucumber-pretty :** Generates HTML report in the target directory.\n- **json:target/cucumber-reports/CucumberTestReport.json :** Generates JSON report, often required for CI/CD and advanced reporting.\n- **rerun:target/cucumber-reports/rerun.txt :** Logs any failed scenarios for rerun.\n\n### Step 2: Configure the HyperExecute YAML File\nIn your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:\n\n```yaml title=\"hyperexecute.yaml\"\nreport: true\npartialReports:\n location: target/cucumber-reports/\n frameworkName: cucumber\n type: json"
      }
    ],
    "dateModified": "2026-09-09T19:10:37+05:30"
  }) }}
/>

<script type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Steps to Generate Cucumber Reports on HyperExecute",
      "description": "Learn how to generate Cucumber Report on TestMu AI and download the reports from the dashboard",
      "step": [
        {
          "@type": "HowToStep",
          "position": 1,
          "name": "Step 1: Configure the TestRunner File",
          "text": "In your TestRunner file, configure @CucumberOptions to specify report formats and output paths. Here\u2019s an example configuration: Explanation of plugin Options: pretty : Outputs readable format in console. html:target/cucumber-reports/cucumber-pretty : Generates HTML report in the target directory. json:target/cucumber-reports/CucumberTestReport.json : Generates JSON report, often required for CI/CD and advanced reporting. rerun:target/cucumber-reports/rerun.txt : Logs any failed scenarios for rerun.",
          "url": "https://www.testmuai.com/support/docs/cucumber-report/#step-1-configure-the-testrunner-file"
        },
        {
          "@type": "HowToStep",
          "position": 2,
          "name": "Step 2: Configure the HyperExecute YAML File",
          "text": "In your HyperExecute YAML configuration, define the report parameters like this:",
          "url": "https://www.testmuai.com/support/docs/cucumber-report/#step-2-configure-the-hyperexecute-yaml-file"
        },
        {
          "@type": "HowToStep",
          "position": 3,
          "name": "Step 3: Execute Your Tests",
          "text": "Run your tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the Cucumber report.",
          "url": "https://www.testmuai.com/support/docs/cucumber-report/#step-3-execute-your-tests"
        }
      ]
    }
  ]) }}
/>
Cucumber reporting is a way to visualize and analyze test results when using the Cucumber testing framework. Cucumber is widely used for Behavior-Driven Development (BDD), allowing tests to be written in plain language using Gherkin syntax. The reports generated from Cucumber tests provide a readable format for stakeholders to understand the results, which helps in understanding the behavior of the system being tested without requiring technical expertise.

Cucumber itself provides basic reporting in the command line, but additional plugins and tools can enhance the reporting experience, generating rich HTML or JSON reports.

## Steps to Generate Cucumber Reports on HyperExecute

### Step 1: Configure the TestRunner File
In your `TestRunner` file, configure `@CucumberOptions` to specify report formats and output paths. Here’s an example configuration:

<VerifiedTag value="Verified" />

```javascript title="TestRunner.java"
@CucumberOptions(
        features = "src/main/java/Features",
        glue = {"Steps"},
        tags = {"~@Ignore"},
        format = {
                "pretty",
                "html:target/cucumber-reports/cucumber-pretty",
                "json:target/cucumber-reports/CucumberTestReport.json",
                "rerun:target/cucumber-reports/rerun.txt"
        },plugin = "json:target/cucumber-reports/CucumberTestReport.json")
```

Explanation of plugin Options:

- **pretty :** Outputs readable format in console.
- **html:target/cucumber-reports/cucumber-pretty :** Generates HTML report in the target directory.
- **json:target/cucumber-reports/CucumberTestReport.json :** Generates JSON report, often required for CI/CD and advanced reporting.
- **rerun:target/cucumber-reports/rerun.txt :** Logs any failed scenarios for rerun.

### Step 2: Configure the HyperExecute YAML File
In your HyperExecute YAML configuration, define the [`report`](/support/docs/deep-dive-into-hyperexecute-yaml/#report) parameters like this:

```yaml title="hyperexecute.yaml"
report: true
partialReports:
 location: target/cucumber-reports/
 frameworkName: cucumber
 type: json
```

### Step 3: Execute Your Tests
Run your tests on HyperExecute using the CLI. After your job completes, you can visit the HyperExecute dashboard to download and view the Cucumber report.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/cucumber.png').default} alt="Image" className="doc_img"/> 
