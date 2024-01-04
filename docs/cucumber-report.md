---
id: cucumber-report
title: Cucumber Report on HyperExecute
hide_title: true
sidebar_label: Cucumber Report
description: Learn how to generate Cucumber Report on lambdatest and download the reports from the dashboard
keywords:
  - cucumber testing reports
  - cucumber testing lambdatest 
  
url: https://www.lambdatest.com/support/docs/cucumber-report/
site_name: LambdaTest
slug: cucumber-report/
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
          "name": "Cucumber Report",
          "item": "https://www.lambdatest.com/support/docs/cucumber-report/"
        }]
      })
    }}
></script>

# Cucumber Reports

Cucumber uses reporter plugins to produce reports that contain information about what scenarios have passed or failed.

## Built-in Reporters
There several pre-defined or built-in reporters for Cucumber. Each reporter may present the test results in a different way, suitable for specific needs or preferences. These built-in reporters offer different levels of detail and visualization options, helping developers to understand the test results and identify any potential issues more effectively.

Following are some of the built-in reporters:
- message
- progress
- pretty
- html
- json
- rerun
- junit
- testng

## Custom Reporters
Apart from the built-in reporters, Cucumber Test also allows developers to create custom reporters i.e. you have the flexibility to define your own format and layout for displaying test results. Custom reporters are beneficial when you have specific reporting requirements or when you want to integrate the test results seamlessly into your existing development workflow.

This involves creating a class that implements/extends the standard formatter interface.

## Steps to Generate Cucumber Reports on HyperExecute

**Step 1:** Configure the report parameters in the HyperExecute YAML file.

```bash
report: true
partialReports:
 location: target/cucumber-reports/
 frameworkName: cucumber
 type: json
```

**Step 2:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/knowledge-base/reports/cucumber.png').default} alt="Image" className="doc_img"/> 