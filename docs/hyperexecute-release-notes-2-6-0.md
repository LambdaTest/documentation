---
id: hyperexecute-release-notes-2-6-0
title: Version 2.6.0
hide_title: false
sidebar_label: Version 2.6.0
description: Version 2.6.0
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-6-0
site_name: LambdaTest
slug: hyperexecute-release-notes-2-6-0
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-6-0/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-6-0/`
        }]
      })
    }}
></script>
## Label-Based Filtering for Test History
This feature addresses the challenge of managing and tracking test runs as development teams scale and test suites grow more complex. By allowing you to group and filter tests based on custom labels, it simplifies test result tracking, reporting, and team collaboration.

Some of the specific benefits of the Test History Labels feature include:

- Quickly identifying and grouping similar test runs (e.g., all regression tests, all tests for a particular environment).
- Simplifying the process of retrieving test runs for a specific sprint, feature, or environment.
- Enhancing overall test management and organization for development teams.

<img loading="lazy" src={require('../assets/images/hyperexecute/release-notes/test-history-label.gif').default} alt="Image"  className="doc_img"/>