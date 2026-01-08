---
id: robot-report
title: Robot Report
hide_title: false
sidebar_label: Robot
description: Learn how to configure and generate Robot test execution reports on HyperExecute with step-by-step guidance for seamless test insights and reporting.
keywords:
  - cucumber testing reports
  - robot report testmu ai 
url: https://www.testmu.ai/support/docs/robot-report
site_name: LambdaTest
slug: robot-report
---
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
          "name": "Karate Report",
          "item": `${BRAND_URL}/support/docs/robot-report/`
        }]
      })
    }}
></script>
Robot Framework is a generic, open-source automation framework designed for acceptance testing, acceptance test-driven development (ATDD), and robotic process automation (RPA). It is widely used in software testing due to its simplicity, extensibility, and ease of use. The framework is keyword-driven, meaning that tests are written using predefined keywords, making it accessible even to non-programmers.

> Ensure your project is configured with the Robot framework and all test scripts are in place.

## Steps to Generate Robot Reports on HyperExecute

**Step 1:** Configure all the necessary dependencies and configurations to your project.

**Step 2:** Configure the report parameters in the HyperExecute YAML file

Add the following configurations in your YAML file:

```yaml
testRunnerCommand: YOUR_RUNNER_COMMAND --outputdir Reports 

report: true
partialReports:
  type: json
  location: Reports
  frameworkName: robot
```

**Step 3:** Now execute your job by triggering the HyperExecute CLI. You can visit the HyperExecute dashboard to download the report after job completion.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/robot-report.png').default} alt="Image"  className="doc_img"/>