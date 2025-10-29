---
id: hyperexecute-release-notes-3-0-8
title: Version 3.0.8
hide_title: false
sidebar_label: Version 3.0.8
description: Version 3.0.8
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-8/
site_name: LambdaTest
slug: hyperexecute-release-notes-3-0-8/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-8/"
        }]
      })
    }}
></script>

## Job Insights View in HyperExecute
With the Job Insights View, you can now access a comprehensive overview of all your test results across different configurations, all in one unified interface, Even when tests are split across multiple environments or parallel jobs, HyperExecute intelligently aggregates the data, giving you a complete, consolidated view of your job performance.

This feature empowers you to:

- **Compare results across configurations** effortlessly.
- **Review job summaries and outcomes** in a single glance.
- **Analyze historical job runs** within the same project to identify patterns, regressions, or performance drifts quickly.

The **Job Insights View** is especially valuable for teams running the same tests across multiple combinations (such as different browsers, OS versions, or device types). It helps you pinpoint inconsistencies and regressions instantly, enabling faster decision-making and smoother test management.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/test-insights.png').default} alt="Image"  className="doc_img"/> 