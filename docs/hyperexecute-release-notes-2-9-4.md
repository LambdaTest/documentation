---
id: hyperexecute-release-notes-2-9-4
title: Version 2.9.4
hide_title: false
sidebar_label: Version 2.9.4
description: Version 2.9.4
keywords:
  - LambdaTest Hyperexecute
  - LambdaTest Hyperexecute help
  - LambdaTest Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-4/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-9-4/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-9-4/"
        }]
      })
    }}
></script>
## YAML-Based Capability Overrides for Selenium Tests
You can now override Selenium capabilities directly from your `hyperexecute.yaml` file using the new `ltOptions` flag. This enhancement allows you to define key-value pairs—like browser type, version, logs, video, tunnel, and more without changing your test scripts.

### Why it matters?
- Avoid code changes for environment-specific needs.
- Reuse the same script across different setups.
- Keep test code clean and capability-agnostic.

```yaml hyperexecute.yaml
ltOptions:
  browserName: firefox
  build: 'testng_build_yaml_ltOptions'
  console: true
  name: 'testng_test_yaml_ltOptions'
  network: true
  selenium_version: 4.20.0
  tunnel: false
  version: latest
  video: false
```

> 📘 Refer to our detailed documentation for [`ltOptions`](/support/docs/hyperexecute-yaml-capability-overrides/) flag.


## Network Logs & Tunnel Support for Maestro Framework
HyperExecute now supports `network logs` and `tunnel` capabilities for Maestro tests running on both virtual devices and real devices using the Raw Framework configuration.

### Feature Highlights
- **Network Logs:** Capture detailed request/response data during test execution for enhanced debugging and visibility.
- **Tunnel Support:** Access internal or staging environments securely using LambdaTest Tunnel.
- Supported across both virtual and real mobile devices.

> 📘 Refer to our detailed documentation for [`Maestro`](/support/docs/hyperexecute-maestro-testing/).