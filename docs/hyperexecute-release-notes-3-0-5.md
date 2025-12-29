---
id: hyperexecute-release-notes-3-0-5
title: Version 3.0.5
hide_title: false
sidebar_label: Version 3.0.5
description: Version 3.0.5
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-5/
site_name: LambdaTest
slug: hyperexecute-release-notes-3-0-5/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-5/"
        }]
      })
    }}
></script>
## Feature: syncStart
HyperExecute now supports the `syncStart` directive in the job YAML. When enabled, all VMs in `autosplit` or `matrix` mode start their tasks simultaneously after allocation—ideal for benchmarking or comparative test runs.

If some VMs are not ready within 15 minutes, the job starts with the available ones.

> **NOTE :** For detailed usage and examples, refer to the detailed [HyperExecute documentation](/support/docs/deep-dive-into-hyperexecute-yaml/#syncstart).