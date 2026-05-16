---
id: hyperexecute-release-notes-2-9-5
title: Version 2.9.5
hide_title: false
sidebar_label: Version 2.9.5
description: Version 2.9.5
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-9-5/
site_name: TestMu AI
slug: hyperexecute-release-notes-2-9-5/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-9-5/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-9-5/`
        }]
      })
    }}
></script>
## Playwright Real Device iOS Support on HyperExecute
You can now run Playwright tests on real iOS devices using HyperExecute. This unlocks the power of native device testing with the speed and flexibility of Playwright on our real device cloud.

### To enable this mode:
- Set `runson: ios` in your YAML.
- Use the following under `framework` flag:

```yaml title="hyperexecute.yaml"
runson: ios

framework:
  name: appium
  args:
    playwrightRD: true
    mobileDC: true
```

> **Note:** Currently supported on Safari for iOS real devices.
