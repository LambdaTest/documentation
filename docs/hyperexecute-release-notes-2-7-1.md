---
id: hyperexecute-release-notes-2-7-1
title: Version 2.7.1
hide_title: false
sidebar_label: Version 2.7.1
description: Version 2.7.1
keywords:
  - TestMu AI Hyperexecute
  - TestMu AI Hyperexecute help
  - TestMu AI Hyperexecute documentation
  - FAQs
url: https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-7-1/
site_name: LambdaTest
slug: hyperexecute-release-notes-2-7-1/
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
          "item": "https://www.lambdatest.com/support/docs/hyperexecute-release-notes-2-7-1/"
        }]
      })
    }}
></script>
## Artifact Extraction on Job Abortion
- Artifacts will now be extracted even if a job is aborted in the middle of a test.
- This ensures that partial test results and logs are still available for review, improving debugging and post-test analysis.


## `afterEachScenario` Flag for Test Cleanup
- Introduced the `afterEachScenario` flag to automate post-test scenario tasks. This flag is useful for cleanup activities such as clearing cookies, resetting databases, or capturing logs.
- Commands or scripts listed under this flag will execute sequentially after each test scenario, ensuring test isolation and consistency.

```yaml
afterEachScenario:
  - echo "Running a script"
  - pwsh run.test
```

> 📘 Refer to our detailed documentation for [`afterEachScenario`](/support/docs/deep-dive-into-hyperexecute-yaml/#aftereachscenario) flag

## Role-Based Access Control (RBAC) for Projects

- Implemented RBAC to enhance project security and access management.
- Users can now be assigned specific roles with defined permissions.

This feature improves security by ensuring that only authorized users can access or modify project settings and resources.

## UX Enhancements for Performance Testing Jobs
- Improved UI/UX for managing and analyzing performance testing jobs.
- Enhanced navigation and usability for a smoother experience.
- Group-Wise Error View
  - Introduced an error grouping feature to help identify and troubleshoot issues efficiently.
  - Errors are now categorized for better readability and quicker resolution.
- Toggle Metrics: ms :left_right_arrow: s
  - Added the ability to toggle performance metrics between milliseconds (ms) and seconds (s).
- Provides flexibility for analyzing test execution times in preferred units.

## Browser Version Updates

- **Edge Beta** : Released 133.3065.31 2.7.1 and 133.3065.39 2.7.2 for beta testing
