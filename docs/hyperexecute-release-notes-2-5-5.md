---
id: hyperexecute-release-notes-2-5-5
title: Version 2.5.5
hide_title: false
sidebar_label: Version 2.5.5
description: Version 2.5.5
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-5-5/
site_name: TestMu AI
slug: hyperexecute-release-notes-2-5-5/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-5-5/
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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-5-5/`
        }]
      })
    }}
></script>
## Extended Report Formats for JUnit Framework
In addition to the existing JUnit XML report, support for generating reports in multiple formats (e.g., HTML, XML, JSON) has been added. This enhancement enables more flexible report generation to meet different user needs.

> To avail this feature, connect with our <span className="doc__lt" onClick={() => window.openLTChatWidget()}>Support Team.</span>

This can be configured with the following parameters:
- **frameworkName:** junit
- **type:** xml
- **location:** Specify the directory where the reports will be generated.

```yaml
report: true
partialReports:
  location: target/surefire-reports/html
  type: xml
  frameworkName: junit
```
