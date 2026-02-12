---
id: hyperexecute-release-notes-2-3-3
title: Version 2.3.3
hide_title: false
sidebar_label: Version 2.3.3
description: Version 2.3.3
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-3-3/
site_name: TestMu AI
slug: hyperexecute-release-notes-2-3-3/
canonical: https://www.testmuai.com/support/docs/hyperexecute-release-notes-2-3-3/
---


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
          "item": `${BRAND_URL}/support/docs/hyperexecute-release-notes-2-3-3/`
        }]
      })
    }}
></script>

## Enhanced Reporting with Multi-Framework Support

You can now create multiple reports from different frameworks for your job. This allows you to:

- **Gain Framework-Specific Insights:** Instantly identify performance metrics and potential issues unique to each framework.

- **Simplify Analysis:** Focus on the results that matter most without sifting through a combined report. Explore framework-specific details and pinpoint areas for improvement with ease.

- **Enhanced Organization:** Maintain a clear and organized overview of your entire test suite. Separate reports provide a structured view, allowing you to efficiently track the performance of each framework.

```bash
partialReports:
  - location: reports/json
    type: json
    frameworkName: extent-native
    email:
        to:
          - johndoe@example.com
  - location: target/surefire-reports
    type: html
    frameworkName: testng
    email:
        to:
          - johndoe@example.com
```

> 📕 Read the documentation - [Test Reports](/support/docs/hyperexecute-reports/) to learn more about it.
