---
id: hyperexecute-release-notes-2-5-7
title: Version 2.5.7
hide_title: false
sidebar_label: Version 2.5.7
description: Version 2.5.7
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-5-7/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-5-7
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-5-7/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-5-7/`
        }]
      })
    }}
></script>

## Remote Test Discovery Mode
HyperExecute now includes a Remote Test Discovery Mode to enhance the test discovery process. This mode centralizes test discovery tasks on dedicated Virtual Machines, improving efficiency and resource utilization, especially for complex test setups and matrix configurations.

### Key Features:
- **Centralized Discovery :** Remote discovery on Virtual Machines, optimizing the process by focusing only on identifying tests.
- **Orchestration Support :** Efficient distribution of discovered tests across VMs to reduce idle time and improve resource usage.
- **Optimized Caching :** Reduces redundant cache operations by sharing caches across execution tasks.

> For more details, go through the [Remote Discovery Documentation](/support/docs/deep-dive-into-hyperexecute-yaml/#testdiscovery)