---
id: hyperexecute-release-notes-2-6-2
title: Version 2.6.2
hide_title: false
sidebar_label: Version 2.6.2
description: Version 2.6.2
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmu.ai/support/docs/hyperexecute-release-notes-2-6-2
site_name: LambdaTest
slug: hyperexecute-release-notes-2-6-2
---

import NewReleaseTag from '../src/component/newRelease.js';
import EnhancementTag from '../src/component/enhancementTag';
import BugFixTag from '../src/component/bugFixTag';

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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-6-2/"
        }]
      })
    }}
></script>
## Support for Appium and Maestro Android Emulator
HyperExecute now supports the Appium and the Maestro Android Emulator, providing enhanced flexibility for mobile application testing on Android emulators.

### Key Features:
- **Streamlined Emulator Integration**: Perform testing on virtual devices without requiring physical hardware, reducing setup complexity.
- **Parallel Execution :** Run multiple tests simultaneously on virtual devices using HyperExecute’s parallelism to speed up test cycles and reduce execution time for functional and UI tests.
- **Customizable Capabilities:** Define emulator configurations such as device name, platform version, and orientation directly within your test files.

To execute tests using the Android Emulator, add the following configurations to your `hyperexecute.yaml`:
```yaml
framework:
  args:
    isRealMobile: false
```

> Refer to our detailed documentation for [Appium](/support/docs/hyperexecute-appium-virtual-device/) and [Maestro](/support/docs/hyperexecute-maestro-testing/) on configuring and running tests with Android emulators.

## New Version Release for Beta and Dev Edge Browser
HyperExecute expands its support for the latest versions of dev and beta browsers for the Windows platform. With this expanded compatibility, you can streamline your testing process and deliver exceptional user experiences with confidence!

- **Dev version:** 132.0.2957.11
- **Beta version:** 132.0.2957.11