---
id: hyperexecute-release-notes-3-0-3
title: Version 3.0.3
hide_title: false
sidebar_label: Version 3.0.3
description: Version 3.0.3
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-3-0-3
site_name: LambdaTest
slug: hyperexecute-release-notes-3-0-3
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-3-0-3/`
        }]
      })
    }}
></script>
## MITM Support in Emulators
We’ve added Man-in-the-Middle (MITM) proxy support in HyperExecute Emulators.

- You can now capture network logs directly from emulator sessions using MITM.
- This feature is available for all emulators when configured with a flag that you can add in your `hyperexecute.yaml` file:

```yaml title="hyperexecute.yaml"
framework:
  name: raw
  args:
    mitmProxy: true
```

This enhancement enables deeper debugging of API calls, request/response payloads, and overall network traffic during test execution.

<!-- ## Enhancement: Error Messages on JMeter Dashboard
We’ve improved the JMeter Dashboard experience for better visibility into failed or incomplete jobs.
- If a JMeter job ends in a non-Completed status, a mini error message bar will now be displayed.
- The bar shows the job remark, consistent with how other HyperExecute job types surface error messages.

This update ensures quicker debugging and a more consistent user experience across dashboards.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/jmeter-error.png').default} alt="Image"  className="doc_img"/> -->

## Enhancement: Retry Visibility in HyperExecute Reports
We’ve enhanced the HyperExecute Report to give better visibility into retries at both the summary and test level.

- **Total Counts Refined :** The “No. of Scenarios” and “No. of Tests” metrics will now display values excluding retries.
- **Retry Indicators :** A retry icon and the number of retried tests/scenarios are displayed alongside the counts, similar to the Task Summary section.
- **Test Case Details :** In the “Test Cases” view, retried tests are now clearly marked with a retry icon.

This update ensures accurate reporting and makes it easier to differentiate between unique executions and retries.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/hyp-report.png').default} alt="Image"  className="doc_img"/> 

## Muted Test Count & Bulk Unmute Option
We’ve enhanced the Test Muting functionality in HyperExecute with improved visibility and control:

- **Total Muted Test :** The dashboard now shows the number of muted test cases in your suite.
- **Unmute All :** You can now unmute all tests at once instead of manually unmuting them one by one.

This update streamlines test management and makes it easier to re-enable muted tests when they are ready to be executed again.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/unmute-all-test.png').default} alt="Image"  className="doc_img"/> 