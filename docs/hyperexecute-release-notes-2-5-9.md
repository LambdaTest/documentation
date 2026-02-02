---
id: hyperexecute-release-notes-2-5-9
title: Version 2.5.9
hide_title: false
sidebar_label: Version 2.5.9
description: Version 2.5.9
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-5-9/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-5-9/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-5-9/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
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
          "name": "Version",
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-5-9/`
        }]
      })
    }}
></script>
## Consolidated JUnit XML Report Generation
The consolidated JUnit XML report includes detailed information on all executed tests, i.e., which tests passed, failed, or were skipped, along with any error messages and stack traces for failed tests. It is widely supported across CI/CD tools, which makes it easy to integrate with existing workflows and with other tools or systems.

> 📕 Refer to our documentation for detailed instructions on setting up your project and using the new [JUnit XML report](/support/docs/junit-xml-report/)

##  Generate Artifacts for Espresso & XCUI Frameworks
Now, you can download artifacts for your test runs on both **Espresso** and **XCUI** frameworks and detailed reports for your **Espresso** test executions.

- To generate artifacts and reports for your Espresso tests, add the `artifacts: true` and `reports: true` flag in your YAML file and pass the `--download-artifacts` and `--download-report` flag with the CLI command

  > 📕 Refer to our detailed documentation to generate [Espresso Artifacts and Reports](/support/docs/hyperexecute-espresso-testing/#step-6-generate-reports-and-artifacts)

- To generate artifacts for your XCUI tests, add the `artifacts: true` flag in your YAML file and pass the `--download-artifacts` flag with the CLI command

  > 📕 Refer to our detailed documentation to generate [XCUI Artifacts](/support/docs/hyperexecute-xcui-testing/#step-5-generate-artifacts)

## Browser and Selenium Updates

- **Firefox** Browser Update to **Version 132.0**

  HyperExecute now supports Firefox version 132.0. This latest Firefox release includes performance and security improvements to ensure a smoother and safer testing experience.
  > **Note :** Firefox 132.0 is currently not compatible with **Cypress**. Users running Cypress tests should continue to use a compatible Firefox version until an update is released.

- **Selenium JAR** Update to **Version 4.26.0**

  HyperExecute has upgraded to Selenium JAR version 4.26.0. This update includes stability enhancements and bug fixes for better compatibility and reliability across various browsers.