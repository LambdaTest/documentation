---
id: hyperexecute-release-notes-2-9-1
title: Version 2.9.1
hide_title: false
sidebar_label: Version 2.9.1
description: Version 2.9.1
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-1/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-9-1/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-1/"
        }]
      })
    }}
></script>
## Support for `customHeaders` in HyperExecute
You can now inject custom HTTP headers into your test sessions using the `customHeaders` capability. This gives you more control over outbound requests made during test execution, especially when working around network security controls like firewalls or header-based access restrictions.

```java
caps.setCapability("customHeaders", new HashMap<String, String>() {{
  put("x-px-access-token", "testuil");
}});
```

These headers are attached to your outbound HTTP requests and can help:
- Authenticate against secured endpoints
- Pass custom metadata
- Work around network/firewall restrictions

> 📘 Refer to our detailed documentation, [Custom Headers](/support/docs/custom-headers/) for detailed explanation and examples.