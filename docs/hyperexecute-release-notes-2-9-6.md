---
id: hyperexecute-release-notes-2-9-6
title: Version 2.9.6
hide_title: false
sidebar_label: Version 2.9.6
description: Version 2.9.6
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-6/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-9-6/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";

<script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({
       "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.lambdatest.com"
        },{
          "@type": "ListItem",
          "position": 2,
          "name": "Support",
          "item": "https://www.lambdatest.com/support/docs/"
        },{
          "@type": "ListItem",
          "position": 3,
          "name": "Version",
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-6/"
        }]
      })
    }}
></script>
## Regex Support in `partialReports` Parameter
You can now define dynamic or variable folder structures for report generation using **wildcard (`**`)** based regex patterns in the `location` parameter under `partialReports`. This allows HyperExecute to automatically discover and upload test reports from non-static, dynamically generated directories, eliminating the need to manually move reports to a fixed path.

## Problem It Solves
Previously, HyperExecute required a static path to locate and upload test reports for frameworks like **Cucumber**. Customers generating test data in nested or date-based folders (e.g. reports/2025-07-29/cucumber/) encountered "path not found" errors, breaking the report generation process.

## New Behavior
HyperExecute now supports regex-style directory matching (using **) to recursively search for report files in nested folders. This flexibility ensures that test reports are picked up correctly even if the folder structure changes between runs.

## Supported Syntax Example

```yaml title="hyperexecute.yaml"
partialReports:
  location: reports/**/cucumber/
  frameworkName: cucumber
  type: json
```

This will successfully match paths like:

```yaml
reports/2025-07-29/cucumber/
reports/staging/run_001/cucumber/
reports/builds/test_42/cucumber/
```

> Your Testrunner.java file should have the complete path from where partial reports will be added. Example:
> ```javascript title="Testrunner.java"
> plugin = {
>     "json:target/abc/mno/pqr/xyz/cucumber-reports/CucumberTestReport.json",
>     "json:target/abc/its/pqr/abc/cucumber-reports/CucumberTestReport.json"
> }
> ```
> You can configure your hyperexecute.yaml as:
> ```yaml title="hyperexecute.yaml"
> partialReports:
>   location: target/abc/**/pqr/**/cucumber-reports
>   frameworkName: cucumber
>   type: json
> ```