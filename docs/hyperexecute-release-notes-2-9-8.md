---
id: hyperexecute-release-notes-2-9-8
title: Version 2.9.8
hide_title: false
sidebar_label: Version 2.9.8
description: Version 2.9.8
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-9-8/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-9-8/
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-9-8/
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';
import CodeBlock from '@theme/CodeBlock';
import {YOUR_LAMBDATEST_USERNAME, YOUR_LAMBDATEST_ACCESS_KEY} from "@site/src/component/keys";
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-9-8/`
        }]
      })
    }}
></script>
## SmartWait Support on HyperExecute
We are pleased to announce that the SmartWait functionality is now supported on HyperExecute.

SmartWait intelligently manages wait times by performing actionability checks before executing actions on webpage elements. This ensures that actions are only carried out when elements are ready, improving both accuracy and efficiency in Selenium automation.

With SmartWait on HyperExecute, you can:

- Reduce reliance on explicit and implicit waits.
- Optimize test scripts for readability and maintainability.
- Execute tests with improved reliability in parallel and distributed environments.

> 📌 Learn more about configuring SmartWait: [SmartWait Documentation](/support/docs/smart-wait/)