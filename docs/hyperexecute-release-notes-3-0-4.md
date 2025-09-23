---
id: hyperexecute-release-notes-3-0-4
title: Version 3.0.4
hide_title: false
sidebar_label: Version 3.0.4
description: Version 3.0.4
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-4/
site_name: LambdaTest
slug: hyperexecute-release-notes-3-0-4/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-3-0-4/"
        }]
      })
    }}
></script>
## New Capability: `bypassProxyDomains`
You can now use the `bypassProxyDomains` capability to bypass Dedicated Proxy for specific domains. This ensures that local services (e.g., localhost, 127.0.0.1, or internal endpoints) remain accessible during test runs.

Note: `dedicatedProxy: true` must be enabled for this capability to take effect.

> Visit the [bypassProxyDomains documentation](https://www.lambdatest.com/support/docs/bypass-proxy-domains/) page to understand this capability in detail.

## Live Command Logs
We’ve improved the way command logs are displayed in the HyperExecute dashboard. Earlier, logs appeared in chunks, which delayed visibility and created a less interactive experience. With the new **Live Command Logs**, you’ll now see logs in real-time as they are generated, giving you instant feedback during test execution.