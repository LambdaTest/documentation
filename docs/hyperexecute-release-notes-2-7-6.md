---
id: hyperexecute-release-notes-2-7-6
title: Version 2.7.6
hide_title: false
sidebar_label: Version 2.7.6
description: Version 2.7.6
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-7-6/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-7-6/
canonical: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-7-6/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-7-6/`
        }]
      })
    }}
></script>
## Parameterising `appium` flag
To support advanced mobile test scenarios, particularly for iOS simulation using desktop browsers, we’ve added support for parameterising the `appium` flag. You can now configure your test matrix to include macOS + Appium combinations for mobile browser testing. This supports more flexible testing strategies for iOS use cases using desktop browsers on mac environments.


```yaml
version: 0.1

runson: ${matrix.os}

matrix:
  os: [mac, linux]
  appium: [true,false]

exclusionMatrix:
  - os: ["mac"]
    appium: [true]
  - os: ["linux"]
    appium: [false]
    
appium: ${matrix.appium}
```